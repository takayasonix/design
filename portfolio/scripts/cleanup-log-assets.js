// log-assetsディレクトリから使用されていないファイルを削除
const fs = require('fs');
const path = require('path');

function cleanupLogAssets() {
  const logJsonPath = path.join(process.cwd(), 'public', 'api', 'log.json');
  const assetsDir = path.join(process.cwd(), 'public', 'log-assets');

  // log.jsonが存在しない場合は処理をスキップ
  if (!fs.existsSync(logJsonPath)) {
    console.log('log.json not found, skipping cleanup');
    return;
  }

  // log.jsonから使用されている画像パスを取得
  const logData = JSON.parse(fs.readFileSync(logJsonPath, 'utf8'));
  const usedImages = new Set();
  
  logData.forEach(item => {
    if (item.image) {
      // /log-assets/xxx.webp の形式からファイル名を抽出
      const fileName = item.image.replace('/log-assets/', '');
      usedImages.add(fileName);
    }
  });

  console.log(`Found ${usedImages.size} used images in log.json`);

  // log-assetsディレクトリ内の全ファイルを取得
  if (!fs.existsSync(assetsDir)) {
    console.log('log-assets directory not found');
    return;
  }

  const files = fs.readdirSync(assetsDir);
  const filesToDelete = [];
  const filesToKeep = [];

  files.forEach(file => {
    const filePath = path.join(assetsDir, file);
    const stats = fs.statSync(filePath);
    
    if (!stats.isFile()) {
      return;
    }

    // .jpgファイルは全て削除対象（.webpに変換済み）
    if (file.endsWith('.jpg')) {
      filesToDelete.push(file);
      return;
    }

    // prop_で始まるファイルは削除対象（使用されていない）
    if (file.startsWith('prop_')) {
      filesToDelete.push(file);
      return;
    }

    // .webpファイルの場合は、log.jsonで使用されているかチェック
    if (file.endsWith('.webp')) {
      if (usedImages.has(file)) {
        filesToKeep.push(file);
      } else {
        filesToDelete.push(file);
      }
    } else {
      // その他のファイルも削除対象
      filesToDelete.push(file);
    }
  });

  console.log(`\nFiles to keep: ${filesToKeep.length}`);
  console.log(`Files to delete: ${filesToDelete.length}`);

  if (filesToDelete.length === 0) {
    console.log('\nNo files to delete');
    return;
  }

  console.log('\nFiles to be deleted:');
  filesToDelete.forEach(file => {
    console.log(`  - ${file}`);
  });

  // 削除を実行
  let deletedCount = 0;
  let errorCount = 0;

  filesToDelete.forEach(file => {
    try {
      const filePath = path.join(assetsDir, file);
      fs.unlinkSync(filePath);
      deletedCount++;
    } catch (error) {
      console.error(`Error deleting ${file}:`, error.message);
      errorCount++;
    }
  });

  console.log(`\nCleanup complete: ${deletedCount} files deleted, ${errorCount} errors`);
}

cleanupLogAssets();

