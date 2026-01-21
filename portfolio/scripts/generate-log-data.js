// ビルド時にGitHubからlogデータを取得して静的JSONファイルを生成
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// .env.localファイルから環境変数を読み込む
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, '');
      if (key && value && !process.env[key]) {
        process.env[key] = value;
      }
    }
  });
}

async function generateLogData() {
  try {
    // 環境変数から設定を取得
    const username = process.env.GITHUB_LOG_USERNAME || 'takayasonix';
    const repositoryName = process.env.GITHUB_LOG_REPOSITORY || 'brain';
    const logPath = process.env.GITHUB_LOG_PATH || 'content/log';
    const blogPath = 'content/blog';
    
    console.log('Fetching log data from GitHub...', { username, repositoryName, logPath, blogPath });
    
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
    };
    
    const token = process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    // logとblogの両方からデータを取得
    const allLogItems = [];
    const markdownContents = {}; // slug -> content のマップ
    
    // content/logから取得
    const { items: logItems, contents: logContents } = await fetchDataFromPath(username, repositoryName, logPath, headers, null);
    console.log(`Fetched ${logItems.length} items from ${logPath}`);
    allLogItems.push(...logItems);
    Object.assign(markdownContents, logContents);
    
    // content/blogから取得（カテゴリはarticleに固定）
    const { items: blogItems, contents: blogContents } = await fetchDataFromPath(username, repositoryName, blogPath, headers, 'article');
    console.log(`Fetched ${blogItems.length} items from ${blogPath}`);
    allLogItems.push(...blogItems);
    Object.assign(markdownContents, blogContents);
    
    // 日付順でソート（新しい順）
    allLogItems.sort((a, b) => {
      const dateA = new Date(a.date.replace(/\//g, '-')).getTime();
      const dateB = new Date(b.date.replace(/\//g, '-')).getTime();
      return dateB - dateA;
    });
    
    // public/apiディレクトリを作成
    const apiDir = path.join(process.cwd(), 'public', 'api');
    if (!fs.existsSync(apiDir)) {
      fs.mkdirSync(apiDir, { recursive: true });
    }
    
    // JSONファイルを書き込み
    const outputPath = path.join(apiDir, 'log.json');
    fs.writeFileSync(outputPath, JSON.stringify(allLogItems, null, 2));
    
    // マークダウンコンテンツを別ファイルに保存
    const contentsPath = path.join(apiDir, 'markdown-contents.json');
    fs.writeFileSync(contentsPath, JSON.stringify(markdownContents, null, 2));
    
    console.log(`Generated log data: ${allLogItems.length} items saved to ${outputPath}`);
    console.log(`Generated markdown contents: ${Object.keys(markdownContents).length} items saved to ${contentsPath}`);
  } catch (error) {
    console.error('Failed to generate log data:', error);
    // エラー時は空の配列を書き込み
    const apiDir = path.join(process.cwd(), 'public', 'api');
    if (!fs.existsSync(apiDir)) {
      fs.mkdirSync(apiDir, { recursive: true });
    }
    fs.writeFileSync(
      path.join(apiDir, 'log.json'),
      JSON.stringify([], null, 2)
    );
    process.exit(1);
  }
}

// 指定されたパスからデータを取得する共通関数
async function fetchDataFromPath(username, repositoryName, dataPath, headers, defaultCategory = null) {
  const apiUrl = `https://api.github.com/repos/${username}/${repositoryName}/contents/${dataPath}`;
  const response = await fetch(apiUrl, { headers });
  
  if (!response.ok) {
    const errorText = await response.text();
    console.error(`GitHub API error for ${dataPath}:`, response.status, errorText);
    return { items: [], contents: {} };
  }
  
  const files = await response.json();
  
  if (!Array.isArray(files)) {
    console.warn(`GitHub API returned non-array response for ${dataPath}`);
    return { items: [], contents: {} };
  }
  
  console.log(`Found ${files.length} files in ${dataPath}`);
  
  // 各ファイルの内容を取得
  const logItems = [];
  const markdownContents = {}; // slug -> content のマップ
  
  // assetsディレクトリのファイル一覧を取得（画像用）
  let assetFiles = [];
  try {
    const assetsApiUrl = `https://api.github.com/repos/${username}/${repositoryName}/contents/${dataPath}/assets`;
    const assetsResponse = await fetch(assetsApiUrl, { headers });
    if (assetsResponse.ok) {
      const assetsData = await assetsResponse.json();
      if (Array.isArray(assetsData)) {
        assetFiles = assetsData;
      }
    }
  } catch (e) {
    console.warn(`Failed to fetch assets directory for ${dataPath}:`, e);
  }
    
    for (const file of files) {
      if (file.type !== 'file' || (!file.name.endsWith('.md') && !file.name.endsWith('.json'))) {
        continue;
      }
      
      try {
        const fileResponse = await fetch(file.download_url, { headers });
        if (!fileResponse.ok) continue;
        
        const content = await fileResponse.text();
        
        // Markdownファイルの場合（Notion形式のフロントマターをパース）
        if (file.name.endsWith('.md')) {
          const frontMatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
          if (frontMatterMatch) {
            const frontMatter = frontMatterMatch[1];
            
            let date = null;
            let title = null;
            let category = null;
            
            // 日付
            let endDate = null;
            const dateSectionMatch = frontMatter.match(/日付:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
            if (dateSectionMatch) {
              const dateSection = dateSectionMatch[1];
              const startMatch = dateSection.match(/start:\s*['"]([^'"]+)['"]/);
              if (startMatch) {
                const dateStr = startMatch[1].trim();
                date = dateStr.replace(/-/g, '/');
              }
              // 終了日を取得
              const endMatch = dateSection.match(/end:\s*['"]([^'"]+)['"]/);
              if (endMatch) {
                const endDateStr = endMatch[1].trim();
                if (endDateStr !== 'null' && endDateStr !== '') {
                  endDate = endDateStr.replace(/-/g, '/');
                }
              }
            }
            
            // 名前またはタイトル
            // logの場合は「タイトル」を優先、blogの場合は「名前」を優先
            let titleSectionMatch = null;
            if (dataPath.includes('content/log')) {
              // logの場合は「タイトル」を最初に探す
              titleSectionMatch = frontMatter.match(/タイトル:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
              if (!titleSectionMatch) {
                titleSectionMatch = frontMatter.match(/title:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
              }
              if (!titleSectionMatch) {
                titleSectionMatch = frontMatter.match(/名前:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
              }
            } else {
              // blogの場合は「名前」を最初に探す
              titleSectionMatch = frontMatter.match(/名前:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
              if (!titleSectionMatch) {
                titleSectionMatch = frontMatter.match(/タイトル:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
              }
              if (!titleSectionMatch) {
                titleSectionMatch = frontMatter.match(/title:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
              }
            }
            if (titleSectionMatch) {
              const titleSection = titleSectionMatch[1];
              const valueMatch = titleSection.match(/value:\s*([\s\S]+?)(?=\n(?!\s)|$)/);
              if (valueMatch) {
                title = valueMatch[1].trim();
              }
            }
            
            // カテゴリ（defaultCategoryが指定されている場合はそれを使用）
            if (defaultCategory) {
              category = defaultCategory;
            } else {
              const categorySectionMatch = frontMatter.match(/カテゴリ:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
              if (categorySectionMatch) {
                const categorySection = categorySectionMatch[1];
                const valueMatch = categorySection.match(/value:\s*([\s\S]+?)(?=\n(?!\s)|$)/);
                if (valueMatch) {
                  category = valueMatch[1].trim();
                }
              }
            }
            
            // ステータス
            let status = null;
            const statusSectionMatch = frontMatter.match(/ステータス:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
            if (statusSectionMatch) {
              const statusSection = statusSectionMatch[1];
              const valueMatch = statusSection.match(/value:\s*([\s\S]+?)(?=\n(?!\s)|$)/);
              if (valueMatch) {
                status = valueMatch[1].trim();
                // "null"文字列の場合はnullに変換
                if (status === 'null' || status === "''" || status === '') {
                  status = null;
                }
              }
            }
            
            // プラットフォーム（blog/articleの場合）
            let platform = null;
            const platformSectionMatch = frontMatter.match(/プラットフォーム:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
            if (platformSectionMatch) {
              const platformSection = platformSectionMatch[1];
              const valueMatch = platformSection.match(/value:\s*([\s\S]+?)(?=\n(?!\s)|$)/);
              if (valueMatch) {
                platform = valueMatch[1].trim();
                // "null"文字列の場合はnullに変換
                if (platform === 'null' || platform === "''" || platform === '') {
                  platform = null;
                }
              }
            }
            
            // URL（リンク）
            let url = null;
            const urlSectionMatch = frontMatter.match(/リンク:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
            if (!urlSectionMatch) {
              // 「リンク」が見つからない場合は「URL」を試す
              const urlSectionMatch2 = frontMatter.match(/URL:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
              if (urlSectionMatch2) {
                const urlSection = urlSectionMatch2[1];
                const valueMatch = urlSection.match(/value:\s*([\s\S]+?)(?=\n(?!\s)|$)/);
                if (valueMatch) {
                  url = valueMatch[1].trim();
                  // "null"文字列の場合はnullに変換
                  if (url === 'null' || url === "''" || url === '') {
                    url = null;
                  }
                }
              }
            } else {
              const urlSection = urlSectionMatch[1];
              const valueMatch = urlSection.match(/value:\s*([\s\S]+?)(?=\n(?!\s)|$)/);
              if (valueMatch) {
                url = valueMatch[1].trim();
                // "null"文字列の場合はnullに変換
                if (url === 'null' || url === "''" || url === '') {
                  url = null;
                }
              }
            }
            
            // 画像
            let image = null;
            const imageSectionMatch = frontMatter.match(/画像:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
            if (imageSectionMatch) {
              const imageSection = imageSectionMatch[1];
              
              // 複数の形式に対応
              // 形式1: type: files の場合（Notionのファイルプロパティ）
              if (imageSection.includes('type: files')) {
                // パターン1: value配列の中の相対パス（./assets/... または - ./assets/...）
                // YAMLの配列形式: value:\n  - ./assets/...
                const valueArrayMatch = imageSection.match(/value:\s*\n\s*-\s*(.+?)(?=\n|$)/);
                if (valueArrayMatch) {
                  let imagePath = valueArrayMatch[1].trim();
                  // 相対パス（./assets/...）を処理
                  if (imagePath.startsWith('./assets/')) {
                    imagePath = imagePath.replace('./assets/', '');
                    // ファイル名から実際のファイルを探す
                    const fileName = imagePath.split('/').pop();
                    const assetFile = assetFiles.find(f => f.name === fileName || f.name.includes(fileName));
                    if (assetFile && assetFile.download_url) {
                      // 画像をダウンロードしてwebp形式でpublicディレクトリに保存
                      try {
                        const imageResponse = await fetch(assetFile.download_url, { headers });
                        if (imageResponse.ok) {
                          const imageBuffer = await imageResponse.arrayBuffer();
                          const publicAssetsDir = path.join(process.cwd(), 'public', 'log-assets');
                          if (!fs.existsSync(publicAssetsDir)) {
                            fs.mkdirSync(publicAssetsDir, { recursive: true });
                          }
                          // ファイル名から拡張子を除いてwebpに変換
                          const fileNameWithoutExt = fileName.replace(/\.[^/.]+$/, '');
                          const webpFileName = `${fileNameWithoutExt}.webp`;
                          const localImagePath = path.join(publicAssetsDir, webpFileName);
                          // webp形式に変換して保存
                          await sharp(Buffer.from(imageBuffer))
                            .webp({ quality: 85 })
                            .toFile(localImagePath);
                          // パスを相対パスに変換（/log-assets/...）
                          image = `/log-assets/${webpFileName}`;
                          console.log(`Downloaded and converted image: ${fileName} -> ${image}`);
                        }
                      } catch (e) {
                        console.error(`Failed to download/convert image ${fileName}:`, e);
                      }
                    }
                  } else if (imagePath.startsWith('assets/')) {
                    imagePath = imagePath.replace('assets/', '');
                    const fileName = imagePath.split('/').pop();
                    const assetFile = assetFiles.find(f => f.name === fileName || f.name.includes(fileName));
                    if (assetFile && assetFile.download_url) {
                      try {
                        const imageResponse = await fetch(assetFile.download_url, { headers });
                        if (imageResponse.ok) {
                          const imageBuffer = await imageResponse.arrayBuffer();
                          const publicAssetsDir = path.join(process.cwd(), 'public', 'log-assets');
                          if (!fs.existsSync(publicAssetsDir)) {
                            fs.mkdirSync(publicAssetsDir, { recursive: true });
                          }
                          // ファイル名から拡張子を除いてwebpに変換
                          const fileNameWithoutExt = fileName.replace(/\.[^/.]+$/, '');
                          const webpFileName = `${fileNameWithoutExt}.webp`;
                          const localImagePath = path.join(publicAssetsDir, webpFileName);
                          // webp形式に変換して保存
                          await sharp(Buffer.from(imageBuffer))
                            .webp({ quality: 85 })
                            .toFile(localImagePath);
                          image = `/log-assets/${webpFileName}`;
                          console.log(`Downloaded and converted image: ${fileName} -> ${image}`);
                        }
                      } catch (e) {
                        console.error(`Failed to download/convert image ${fileName}:`, e);
                      }
                    }
                  } else if (imagePath.match(/^https?:\/\//)) {
                    // 既にURLの場合
                    image = imagePath;
                  }
                } else {
                  // パターン2: https://... のURLを直接探す
                  const urlMatches = imageSection.match(/https?:\/\/[^\s\n\)\]]+/g);
                  if (urlMatches && urlMatches.length > 0) {
                    image = urlMatches[0];
                  }
                }
              } else {
                // 形式2: value: /path/to/image.jpg (直接パス)
                const valueMatch = imageSection.match(/value:\s*([\s\S]+?)(?=\n(?!\s)|$)/);
                if (valueMatch) {
                  const imageValue = valueMatch[1].trim();
                  // 空文字列や'null'、''などの場合はnullにする
                  if (imageValue && imageValue !== "''" && imageValue !== 'null' && imageValue !== '' && imageValue !== '[]') {
                    image = imageValue;
                  }
                }
              }
            }
            
            // カテゴリのマッピング（Notionのカテゴリを標準カテゴリに変換）
            const categoryMap = {
              '経歴': 'career',
              '作品': 'release',
              'その他': 'music',
              'アカペラ': 'music',
              '音楽': 'music',
              // 旧形式のカテゴリも対応
              'career': 'career',
              'carrer': 'career', // タイポ対応
              'work': 'release',
              'release': 'release',
              'article': 'article',
              'blog': 'article',
              'other': 'music',
              'music': 'music',
            };
            
            if (category && categoryMap[category]) {
              category = categoryMap[category];
            } else if (category && !['career', 'release', 'article', 'music'].includes(category)) {
              // 未知のカテゴリはmusicにマッピング
              console.warn(`Unknown category '${category}' for: ${title}, mapping to 'music'`);
              category = 'music';
            }
            
            // マークダウンコンテンツを取得（フロントマターを除く）
            let markdownContent = content;
            if (frontMatterMatch) {
              // フロントマターの終了位置を探す
              const frontMatterEnd = content.indexOf('---', frontMatterMatch[0].length - 3);
              if (frontMatterEnd !== -1) {
                markdownContent = content.substring(frontMatterEnd + 3).trim();
              } else {
                markdownContent = content.trim();
              }
            }

            // 本文中の画像を処理 ![alt](filename) 形式
            const imageMarkdownRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
            let match;
            while ((match = imageMarkdownRegex.exec(markdownContent)) !== null) {
              const imagePath = match[2];
              // 相対パスの画像のみ処理（http://やhttps://で始まるものは除外）
              if (!imagePath.startsWith('http://') && !imagePath.startsWith('https://') && !imagePath.startsWith('/')) {
                // ファイル名を取得
                const fileName = imagePath.split('/').pop();
                // assetsディレクトリから画像を探す
                const assetFile = assetFiles.find(f => f.name === fileName || f.name.includes(fileName));
                if (assetFile && assetFile.download_url) {
                  try {
                    const imageResponse = await fetch(assetFile.download_url, { headers });
                    if (imageResponse.ok) {
                      const imageBuffer = await imageResponse.arrayBuffer();
                      const publicAssetsDir = path.join(process.cwd(), 'public', 'log-assets');
                      if (!fs.existsSync(publicAssetsDir)) {
                        fs.mkdirSync(publicAssetsDir, { recursive: true });
                      }
                      // ファイル名から拡張子を除いてwebpに変換
                      const fileNameWithoutExt = fileName.replace(/\.[^/.]+$/, '');
                      const webpFileName = `${fileNameWithoutExt}.webp`;
                      const localImagePath = path.join(publicAssetsDir, webpFileName);
                      // webp形式に変換して保存
                      await sharp(Buffer.from(imageBuffer))
                        .webp({ quality: 85 })
                        .toFile(localImagePath);
                      console.log(`Downloaded inline image: ${fileName} -> /log-assets/${webpFileName}`);
                      // マークダウン内の参照を更新
                      markdownContent = markdownContent.replace(imagePath, webpFileName);
                    }
                  } catch (e) {
                    console.error(`Failed to download inline image ${fileName}:`, e);
                  }
                } else {
                  console.warn(`Inline image not found in assets: ${fileName}`);
                }
              }
            }
            
            // slugを生成してマークダウンコンテンツを保存
            if (date) {
              const dateSlug = date.replace(/\//g, '');
              markdownContents[dateSlug] = markdownContent;
            }
            
            if (date && title && category && ['career', 'release', 'article', 'music'].includes(category)) {
              logItems.push({
                date,
                endDate: endDate || undefined,
                title,
                description: '',
                category,
                image: image || undefined,
                status: status || undefined,
                platform: platform || undefined,
                url: url || undefined,
              });
            } else if (date && title && !category) {
              // カテゴリが見つからない場合は警告
              console.warn(`Category not found for: ${title}, defaulting to 'music'`);
              logItems.push({
                date,
                endDate: endDate || undefined,
                title,
                description: '',
                category: 'music',
                image: image || undefined,
                status: status || undefined,
                platform: platform || undefined,
                url: url || undefined,
              });
            }
          }
        }
      } catch (e) {
        console.error(`Failed to parse file ${file.name}:`, e);
      }
    }
  
  return { items: logItems, contents: markdownContents };
}

generateLogData();

