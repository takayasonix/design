// GitHubトークンを検証するスクリプト
const https = require('https');

function verifyToken(token, tokenName) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: '/user',
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'Node.js',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          const user = JSON.parse(data);
          resolve({
            valid: true,
            username: user.login,
            name: user.name,
            tokenName: tokenName
          });
        } else {
          resolve({
            valid: false,
            statusCode: res.statusCode,
            message: data,
            tokenName: tokenName
          });
        }
      });
    });

    req.on('error', (error) => {
      reject({ error, tokenName });
    });

    req.end();
  });
}

async function main() {
  const token1 = process.env.TOKEN1 || process.argv[2];
  const token2 = process.env.TOKEN2 || process.argv[3];

  if (!token1 || !token2) {
    console.log('使用方法:');
    console.log('  node scripts/verify-token.js <TOKEN1> <TOKEN2>');
    console.log('または環境変数:');
    console.log('  TOKEN1=xxx TOKEN2=yyy node scripts/verify-token.js');
    process.exit(1);
  }

  console.log('トークンを検証中...\n');

  try {
    const [result1, result2] = await Promise.all([
      verifyToken(token1, 'TOKEN1'),
      verifyToken(token2, 'TOKEN2')
    ]);

    console.log('=== TOKEN1 の結果 ===');
    if (result1.valid) {
      console.log('✅ 有効なトークンです');
      console.log(`   ユーザー名: ${result1.username}`);
      console.log(`   名前: ${result1.name || '未設定'}`);
    } else {
      console.log('❌ 無効なトークンです');
      console.log(`   ステータスコード: ${result1.statusCode}`);
      console.log(`   メッセージ: ${result1.message}`);
    }

    console.log('\n=== TOKEN2 の結果 ===');
    if (result2.valid) {
      console.log('✅ 有効なトークンです');
      console.log(`   ユーザー名: ${result2.username}`);
      console.log(`   名前: ${result2.name || '未設定'}`);
    } else {
      console.log('❌ 無効なトークンです');
      console.log(`   ステータスコード: ${result2.statusCode}`);
      console.log(`   メッセージ: ${result2.message}`);
    }

    // リポジトリへのアクセス権限を確認
    if (result1.valid && result2.valid) {
      console.log('\n=== リポジトリアクセス権限の確認 ===');
      const repo = 'takayasonix/brain';
      
      const checkRepoAccess = (token, tokenName) => {
        return new Promise((resolve) => {
          const options = {
            hostname: 'api.github.com',
            path: `/repos/${repo}`,
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'User-Agent': 'Node.js',
              'Accept': 'application/vnd.github.v3+json'
            }
          };

          const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
              resolve({
                tokenName,
                hasAccess: res.statusCode === 200,
                statusCode: res.statusCode
              });
            });
          });

          req.on('error', () => {
            resolve({ tokenName, hasAccess: false, statusCode: 0 });
          });

          req.end();
        });
      };

      const [access1, access2] = await Promise.all([
        checkRepoAccess(token1, 'TOKEN1'),
        checkRepoAccess(token2, 'TOKEN2')
      ]);

      console.log(`TOKEN1: ${access1.hasAccess ? '✅' : '❌'} ${repo} へのアクセス権限`);
      console.log(`TOKEN2: ${access2.hasAccess ? '✅' : '❌'} ${repo} へのアクセス権限`);

      // 推奨トークンを表示
      if (access1.hasAccess && !access2.hasAccess) {
        console.log('\n✅ 推奨: TOKEN1 を使用してください');
      } else if (access2.hasAccess && !access1.hasAccess) {
        console.log('\n✅ 推奨: TOKEN2 を使用してください');
      } else if (access1.hasAccess && access2.hasAccess) {
        console.log('\n✅ 両方のトークンが有効です。どちらでも使用できます。');
      } else {
        console.log('\n❌ どちらのトークンもリポジトリにアクセスできません。');
      }
    }

  } catch (error) {
    console.error('エラーが発生しました:', error);
    process.exit(1);
  }
}

main();


