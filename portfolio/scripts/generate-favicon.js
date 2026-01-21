// 1000x1000の画像からfaviconを自動生成
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateFavicon() {
  try {
    const sourceImagePath = path.join(process.cwd(), 'src', 'app', 'icon.png');
    const appDir = path.join(process.cwd(), 'src', 'app');
    
    // ソース画像が存在するか確認
    if (!fs.existsSync(sourceImagePath)) {
      console.log('⚠️  icon.png not found. Please place a 1000x1000 image at src/app/icon.png');
      return;
    }

    console.log('Generating favicons from icon.png...');

    // 生成するfaviconのサイズ
    const sizes = [
      { size: 16, name: 'favicon-16x16.png' },
      { size: 32, name: 'favicon-32x32.png' },
      { size: 48, name: 'favicon-48x48.png' },
      { size: 64, name: 'favicon-64x64.png' },
      { size: 96, name: 'favicon-96x96.png' },
      { size: 128, name: 'favicon-128x128.png' },
      { size: 192, name: 'favicon-192x192.png' },
      { size: 256, name: 'favicon-256x256.png' },
      { size: 512, name: 'favicon-512x512.png' },
    ];

    // 各サイズのPNGを生成
    for (const { size, name } of sizes) {
      const outputPath = path.join(appDir, name);
      await sharp(sourceImagePath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      console.log(`✓ Generated ${name} (${size}x${size})`);
    }

    // favicon.icoを生成（16x16, 32x32, 48x48を含むマルチサイズICO）
    const faviconPath = path.join(appDir, 'favicon.ico');
    const icoSizes = [16, 32, 48];
    const icoBuffers = await Promise.all(
      icoSizes.map(size =>
        sharp(sourceImagePath)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .png()
          .toBuffer()
      )
    );

    // シンプルなICOファイルとして保存（実際にはPNGをICOとして扱う）
    // 注意: 完全なマルチサイズICOの生成は複雑なため、32x32のPNGをfavicon.icoとして保存
    await sharp(sourceImagePath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(faviconPath);
    console.log(`✓ Generated favicon.ico (32x32)`);

    // Apple Touch Icon (180x180)
    const appleIconPath = path.join(appDir, 'apple-icon.png');
    await sharp(sourceImagePath)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(appleIconPath);
    console.log(`✓ Generated apple-icon.png (180x180)`);

    console.log('✅ All favicons generated successfully!');
  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicon();

