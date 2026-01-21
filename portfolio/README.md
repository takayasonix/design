# ポートフォリオサイト

Next.js 15（App Router）を使用したポートフォリオサイトです。

## 技術スタック

- Next.js 15（App Router）
- TypeScript
- Tailwind CSS
- Cloudflare Pages
- ESLint

## 機能

- ヒーローセクション（名前・肩書き・キャッチコピー・SNSリンク）
- 記録セクション（経歴・作品・記事・音楽のフィルタリング表示）
- 記録詳細ページ（log/[slug]）
- 記事詳細ページ（blog/[slug]）

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 環境変数の設定

#### GitHub API Token（必須）

Log機能でGitHubリポジトリからデータを取得するために、Personal Access Tokenが必要です：

1. [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens) にアクセス
2. "Generate new token (classic)" をクリック
3. 以下の設定でトークンを作成：
   - Note: `portfolio-log`
   - Expiration: 推奨は90日以上
   - Scopes: `repo` にチェック（プライベートリポジトリにアクセスするため）
4. 生成されたトークンをコピー

#### ローカル開発環境

プロジェクトルートに `.env.local` ファイルを作成：

```bash
# .env.local
# GitHub API Token（プライベートリポジトリ用、必須）
GITHUB_TOKEN=your_github_token_here

# Log機能の設定（オプション）
GITHUB_LOG_USERNAME=takayasonix
GITHUB_LOG_REPOSITORY=brain
GITHUB_LOG_PATH=content/log
```

**注意**: 
- `GITHUB_TOKEN`はサーバーサイドでのみ使用され、クライアントサイドには公開されません
- プライベートリポジトリにアクセスする場合は、トークンのスコープに`repo`が必要です

#### 本番環境（Cloudflare Pages等）

デプロイ先の環境変数設定で以下を追加：

**必須**:
- 変数名: `GITHUB_TOKEN`（サーバーサイド用）

**オプション**（Log機能のカスタマイズ）:
- 変数名: `GITHUB_LOG_USERNAME`（デフォルト: `takayasonix`）
- 変数名: `GITHUB_LOG_REPOSITORY`（デフォルト: `brain`）
- 変数名: `GITHUB_LOG_PATH`（デフォルト: `content/log`）

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて結果を確認してください。

### ビルド

```bash
npm run build
```

ビルド時に `scripts/generate-log-data.js` が自動実行され、GitHubからlogデータを取得して `public/api/log.json` を生成します。

## デプロイ

### Cloudflare Pages

このプロジェクトはCloudflare Pagesにデプロイすることを想定しています。

1. Cloudflare Pagesで新しいプロジェクトを作成
2. リポジトリを接続
3. ビルドコマンド: `npm run build`
4. ビルド出力ディレクトリ: `out`
5. 環境変数で以下を設定：
   - `GITHUB_TOKEN`（必須）
   - `GITHUB_LOG_USERNAME`（オプション）
   - `GITHUB_LOG_REPOSITORY`（オプション）
   - `GITHUB_LOG_PATH`（オプション）

**自動デプロイ**: GitHubリポジトリにpushすると、Cloudflare Pagesが自動的にビルド・デプロイします。

### コンテンツ更新のワークフロー

#### 現在のワークフロー（手動）

1. **Notionで編集**
   - Notionでコンテンツを編集

2. **GitHubリポジトリを更新**
   - `brain`リポジトリの`content/log`または`content/blog`ディレクトリにMarkdownファイルをpush
   - または、GitHubのWeb UIやスマホアプリから直接編集

3. **自動デプロイ**
   - GitHubにpushすると、Cloudflare Pagesが自動的に以下を実行：
     - `npm run build`（`prebuild`で`generate-log-data.js`が実行され、GitHubから最新データを取得）
     - ビルド結果を`out`ディレクトリに出力
     - サイトを自動デプロイ

#### スマホからの更新方法

- **GitHubモバイルアプリ**: GitHubのモバイルアプリからMarkdownファイルを編集・push
- **GitHub Web UI**: ブラウザからGitHubのWeb UIで編集・コミット
- **Gitクライアントアプリ**: Working Copy（iOS）などのGitクライアントアプリを使用

#### 自動化ワークフロー（brainリポジトリ側で実装済み）

`brain`リポジトリ側でGitHub Actionsが実装されています：

1. **Notionで編集**
   - Notionでコンテンツを編集

2. **GitHub Actionsを手動実行**
   - `brain`リポジトリのGitHub Actionsを手動で実行（`workflow_dispatch`）
   - Notion APIからデータを取得して`brain`リポジトリを自動更新

3. **ポートフォリオサイトの再デプロイ（手動）**
   - `brain`リポジトリが更新された後、このポートフォリオサイトのリポジトリ（`portfolio`）に空コミットをpushするか、Cloudflare Pagesのダッシュボードから手動で再デプロイ
   - ビルド時に`generate-log-data.js`が実行され、`brain`リポジトリから最新データを取得

**スマホからの更新**: Notionで編集 → GitHubアプリで`brain`リポジトリのActionsを実行 → ポートフォリオサイトを手動で再デプロイ

#### 自動デプロイの実装方法

`brain`リポジトリが更新されたときに、このポートフォリオサイトを自動的に再デプロイする方法：

##### 方法1: Cloudflare Pagesのデプロイフック（推奨）

1. **Cloudflare Pagesでデプロイフックを作成**
   - Cloudflareダッシュボード → Pagesプロジェクト → 設定 → ビルド＆デプロイ
   - 「デプロイフックを追加」をクリック
   - 名前を設定して作成し、URLをコピー

2. **`brain`リポジトリのGitHub Actionsでデプロイフックを呼び出す**
   - `brain`リポジトリの`.github/workflows/`に以下を追加：

   ```yaml
   - name: Trigger Portfolio Deploy
     run: |
       curl -X POST "${{ secrets.CLOUDFLARE_DEPLOY_HOOK_URL }}"
   ```

   - GitHub Secretsに`CLOUDFLARE_DEPLOY_HOOK_URL`を追加（デプロイフックのURL）

##### 方法2: GitHub Actionsで空コミットをpush

`brain`リポジトリのGitHub Actionsから、この`portfolio`リポジトリに空コミットをpushする方法：

1. **GitHub Personal Access Tokenを作成**
   - `repo`権限を持つトークンを作成

2. **`brain`リポジトリのGitHub Actionsで空コミットをpush**
   - `brain`リポジトリの`.github/workflows/`に以下を追加：

   ```yaml
   - name: Trigger Portfolio Deploy
     uses: peter-evans/create-pull-request@v5
     with:
       token: ${{ secrets.PORTFOLIO_DEPLOY_TOKEN }}
       repository: takayasonix/portfolio
       branch: trigger-deploy
       commit-message: "Trigger deploy from brain repository"
       title: "Auto-deploy trigger"
       body: "Automatically triggered from brain repository update"
   ```

   または、よりシンプルに：

   ```yaml
   - name: Trigger Portfolio Deploy
     run: |
       git clone https://${{ secrets.PORTFOLIO_DEPLOY_TOKEN }}@github.com/takayasonix/portfolio.git
       cd portfolio
       git config user.name "GitHub Actions"
       git config user.email "actions@github.com"
       git commit --allow-empty -m "Trigger deploy from brain repository"
       git push
     env:
       GIT_TOKEN: ${{ secrets.PORTFOLIO_DEPLOY_TOKEN }}
   ```

   - GitHub Secretsに`PORTFOLIO_DEPLOY_TOKEN`を追加

## カスタマイズ

- `src/components/` 内のコンポーネントを編集して内容を変更
- `src/app/page.tsx` でページ構成を変更
- `public/` 内の画像を実際の画像に置き換え

## トラブルシューティング

### Log機能でデータが取得できない場合

1. 環境変数 `GITHUB_TOKEN` が正しく設定されているか確認（プライベートリポジトリの場合必須）
2. サーバーログでエラーメッセージを確認
3. GitHubトークンの権限（`repo`）が正しく設定されているか確認
4. リポジトリのパス（`GITHUB_LOG_PATH`）が正しいか確認

## ライセンス

MIT
