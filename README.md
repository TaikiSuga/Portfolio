# 須賀 大貴 (Taiki Suga) - Portfolio Website

AIコンサルタント「須賀 大貴」の案件獲得用ポートフォリオサイトです。

## 🌐 Live Demo

GitHub Pagesでホスティング: `https://[your-username].github.io/Portfolio`

## 📋 プロジェクト概要

### 目的
- AIコンサルタントとしての専門性と実績をアピール
- クライアント向けのプロフェッショナルな印象を提供
- 案件獲得のためのオンライン名刺として機能

### 技術スタック
- **HTML5**: セマンティックな構造
- **CSS3**: レスポンシブデザイン、カスタムアニメーション
- **Vanilla JavaScript**: スムーススクロール、インタラクション
- **GitHub Pages**: ホスティング

## 🎨 デザイン仕様

### カラーパレット
- **プライマリー**: `#1a2e1a` (深緑)
- **セカンダリー**: `#2d4a32` (中緑)
- **アクセント**: `#4a7c59` (明緑)
- **背景**: `#f8f9fa` (ライトグレー)
- **テキスト**: `#333` (ダークグレー)

### フォント
- **日本語**: Noto Sans JP, Hiragino Kaku Gothic Pro
- **英語**: ゴシック系フォントファミリー

### レスポンシブブレイクポイント
- **デスクトップ**: 1200px以上
- **タブレット**: 768px - 1199px
- **モバイル**: 767px以下

## 🚀 GitHub Pages セットアップ手順

### 1. リポジトリの作成
```bash
# GitHubでリポジトリを作成後
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/[your-username]/Portfolio.git
git push -u origin main
```

### 2. GitHub Pages の有効化
1. GitHubリポジトリページに移動
2. `Settings` タブをクリック
3. 左サイドバーの `Pages` をクリック
4. **Source** セクションで `Deploy from a branch` を選択
5. **Branch** で `main` を選択
6. **Folder** で `/ (root)` を選択
7. `Save` ボタンをクリック

### 3. カスタムドメイン設定（オプション）
```bash
# カスタムドメインを使用する場合
echo "your-domain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### 4. HTTPS の有効化
1. GitHub Pages 設定で `Enforce HTTPS` をチェック
2. カスタムドメインの場合、DNS設定でCNAMEレコードを追加

## 📁 ファイル構成

```
Portfolio/
├── index.html          # メインHTMLファイル
├── style.css           # スタイルシート
├── script.js           # JavaScript機能
├── README.md           # このファイル
└── CNAME              # カスタムドメイン設定（オプション）
```

## 🔧 機能一覧

### ナビゲーション
- [x] 固定ヘッダー
- [x] スムーススクロール
- [x] アクティブリンクハイライト
- [x] モバイル対応ハンバーガーメニュー

### アニメーション
- [x] ヒーローセクションのフェードイン
- [x] スクロール時のセクション表示アニメーション
- [x] カードホバーエフェクト (translateY(-3px))
- [x] ボタンホバーエフェクト

### レスポンシブ機能
- [x] モバイルファーストデザイン
- [x] タブレット・デスクトップ対応
- [x] 可変グリッドレイアウト
- [x] 適応的フォントサイズ

### アクセシビリティ
- [x] セマンティックHTML構造
- [x] キーボードナビゲーション対応
- [x] スクリーンリーダー対応
- [x] 高コントラストモード対応
- [x] 動きを抑えたモード対応

### パフォーマンス
- [x] CSS/JSの最適化
- [x] 画像遅延読み込み対応
- [x] スクロールイベントの最適化
- [x] レスポンシブ画像対応

## 📝 コンテンツセクション

### 1. ヒーロー
- 肩書き: AIコンサルタント
- サブタイトル: AI技術とビジネスの架け橋
- LinkedInプロフィールへのCTA

### 2. 自己紹介
- 出身地と成長背景
- サッカー歴と価値観形成
- 学業との両立経験

### 3. 学生時代の実績
- **サッカー**: 全国大会7回出場、部長職、イベント企画
- **学業**: 経済学専攻、理系科目での上位成績

### 4. キャリア
- **インターン**: Webマーケター、法人営業
- **現職**: AIコンサルタント (2025年4月〜)
- **その他**: JICA派遣、プロンプトエンジニア

### 5. 価値観
- Dive into Insight (洞察を深める)
- Challenge Forward (迷ったら前に進む)
- Collaboration (専門性を持つ他者と共創する)

### 6. コンタクト
- LinkedIn経由での連絡受付

## 🛠 開発・メンテナンス

### ローカル開発
```bash
# ライブサーバーで確認
npx live-server
# または
python -m http.server 8000
```

### 更新手順
```bash
# 変更をコミット
git add .
git commit -m "Update: [変更内容]"
git push origin main

# GitHub Pagesは自動的に更新されます（1-2分後）
```

### パフォーマンス検証
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### アクセシビリティ検証
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/lighthouse)

## 📊 SEO 対策

### メタタグ
- [x] title, description, keywords
- [x] Open Graph tags (追加可能)
- [x] Twitter Cards (追加可能)

### 構造化データ
- [x] セマンティックHTMLマークアップ
- [ ] JSON-LD構造化データ (追加可能)

### サイトマップ
```xml
<!-- sitemap.xml を追加する場合 -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://[your-username].github.io/Portfolio/</loc>
    <lastmod>2025-01-16</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 🔍 ブラウザサポート

### 完全サポート
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 基本サポート
- Internet Explorer 11 (制限あり)
- 古いモバイルブラウザ

## 📈 アナリティクス設定

### Google Analytics 4 (オプション)
```html
<!-- index.html の <head> に追加 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 セキュリティ

### 実装済み
- [x] 外部リンクのnoopener/noreferrer属性
- [x] HTTPS強制（GitHub Pages）
- [x] XSS対策のためのコンテンツ検証

### 追加可能
- [ ] Content Security Policy (CSP) ヘッダー
- [ ] Subresource Integrity (SRI) チェックサム

## 📞 サポート・連絡先

**開発・技術的な質問**:
- GitHub Issues: このリポジトリのIssuesセクション

**ビジネス・案件関連**:
- LinkedIn: [https://www.linkedin.com/in/taiki-suga-7018302a2](https://www.linkedin.com/in/taiki-suga-7018302a2)

## 📄 ライセンス

© 2025 須賀 大貴 (Taiki Suga). All rights reserved.

---

**Last Updated**: 2025年1月16日
**Version**: 1.0.0