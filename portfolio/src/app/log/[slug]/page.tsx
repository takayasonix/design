import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { LogItem } from '@/lib/github';
import fs from 'fs';
import path from 'path';
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MarkdownContent from '@/components/MarkdownContent';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 静的生成を強制
export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'public', 'api', 'log.json');
  
  // ファイルが存在しない場合は空配列を返す
  if (!fs.existsSync(filePath)) {
    console.warn('log.json not found, returning empty array');
    return [];
  }
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const logData: LogItem[] = JSON.parse(fileContents);
    
    // 空配列の場合は空配列を返す
    if (!Array.isArray(logData) || logData.length === 0) {
      console.warn('log.json is empty, returning empty array');
      return [];
    }
    
    // log.jsonからすべてのアイテムを取得してslugを生成
    return logData.map((item) => ({
      slug: item.date.replace(/\//g, ''),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

async function getMarkdownContent(slug: string): Promise<{ content: string; metadata: LogItem | null }> {
  try {
    const username = process.env.GITHUB_LOG_USERNAME || 'takayasonix';
    const repositoryName = process.env.GITHUB_LOG_REPOSITORY || 'brain';
    const path = 'content/log';
    
    const token = process.env.GITHUB_TOKEN;
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    // ディレクトリの内容を取得
    const apiUrl = `https://api.github.com/repos/${username}/${repositoryName}/contents/${path}`;
    const response = await fetch(apiUrl, { headers, next: { revalidate: 3600 } });
    
    if (!response.ok) {
      return { content: '', metadata: null };
    }

    const files = await response.json();
    if (!Array.isArray(files)) {
      return { content: '', metadata: null };
    }

    // 日付からslugを生成してマッチするファイルを探す
    for (const file of files) {
      if (file.type !== 'file' || !file.name.endsWith('.md')) {
        continue;
      }

      const fileResponse = await fetch(file.download_url, { headers, next: { revalidate: 3600 } });
      if (!fileResponse.ok) continue;

      const content = await fileResponse.text();
      const frontMatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
      
      if (frontMatterMatch) {
        const frontMatter = frontMatterMatch[1];
        const dateSectionMatch = frontMatter.match(/日付:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
        
        if (dateSectionMatch) {
          const dateSection = dateSectionMatch[1];
          const startMatch = dateSection.match(/start:\s*['"]([^'"]+)['"]/);
          const endMatch = dateSection.match(/end:\s*['"]([^'"]+)['"]/);
          
          if (startMatch) {
            const dateStr = startMatch[1].trim().replace(/-/g, '/');
            const fileSlug = dateStr.replace(/\//g, '');
            
            if (fileSlug === slug) {
              // メタデータを抽出
              let title = '';
              const date = dateStr;
              let endDate: string | undefined = undefined;
              if (endMatch) {
                endDate = endMatch[1].trim().replace(/-/g, '/');
              }
              let image: string | undefined = undefined;
              let category: 'career' | 'work' | 'article' | 'other' = 'other';
              
              // タイトルを取得（logの場合は「タイトル」を優先）
              let titleSectionMatch = frontMatter.match(/タイトル:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
              if (!titleSectionMatch) {
                titleSectionMatch = frontMatter.match(/title:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
              }
              if (!titleSectionMatch) {
                titleSectionMatch = frontMatter.match(/名前:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
              }
              if (titleSectionMatch) {
                const titleSection = titleSectionMatch[1];
                const valueMatch = titleSection.match(/value:\s*([\s\S]+?)(?=\n(?!\s)|$)/);
                if (valueMatch) {
                  title = valueMatch[1].trim();
                }
              }
              
              // カテゴリを取得
              const categorySectionMatch = frontMatter.match(/カテゴリ:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
              if (categorySectionMatch) {
                const categorySection = categorySectionMatch[1];
                const valueMatch = categorySection.match(/value:\s*([\s\S]+?)(?=\n(?!\s)|$)/);
                if (valueMatch) {
                  const categoryValue = valueMatch[1].trim();
                  const categoryMap: Record<string, 'career' | 'work' | 'article' | 'other'> = {
                    'career': 'career',
                    'release': 'work',
                    'work': 'work',
                    'article': 'article',
                    'music': 'other',
                    'other': 'other',
                  };
                  category = categoryMap[categoryValue] || 'other';
                }
              }
              
              // 画像を取得
              const imageSectionMatch = frontMatter.match(/画像:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
              if (imageSectionMatch) {
                const imageSection = imageSectionMatch[1];
                // type: files の場合
                const filesMatch = imageSection.match(/type:\s*files/);
                if (filesMatch) {
                  const valueMatch = imageSection.match(/value:\s*\n\s*-\s*\.\/assets\/([^\n]+)/);
                  if (valueMatch) {
                    const imagePath = valueMatch[1].trim();
                    image = `/log-assets/${imagePath}`;
                  }
                }
              }
              
              // マークダウン本文を取得（フロントマターを除く）
              const markdownContent = content.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');
              
              return {
                content: markdownContent,
                metadata: {
                  date,
                  endDate,
                  title,
                  description: '',
                  category,
                  image,
                } as LogItem,
              };
            }
          }
        }
      }
    }
  } catch (error) {
    console.error('Error fetching markdown:', error);
  }

  return { content: '', metadata: null };
}

export default async function LogPage({ params }: PageProps) {
  const { slug } = await params;
  const { content, metadata } = await getMarkdownContent(slug);

  if (!metadata) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-20">
      <Navigation />
      <article className="max-w-2xl mx-auto px-4 mb-20">
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
          {/* タイトル */}
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            {metadata.title}
          </h1>
          
          {/* 日付 */}
          <div className="text-xs md:text-base text-gray-600 mb-6">
            {(() => {
              const isCurrent = !!(metadata.endDate && metadata.date === metadata.endDate);
              if (isCurrent) {
                return `${metadata.date} ~ 現在`;
              } else if (metadata.endDate) {
                return `${metadata.date} ~ ${metadata.endDate}`;
              } else {
                return metadata.date;
              }
            })()}
          </div>
          
          {/* 画像 */}
          {metadata.image && (
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src={metadata.image}
                alt={metadata.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          
          {/* マークダウン本文 */}
          <MarkdownContent content={content} />
          
          {/* トップに戻る導線 */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl text-gray-700 hover:text-gray-900 transition-all duration-300 group"
            >
              <svg 
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm md:text-base font-medium">ホームに戻る</span>
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

