<div align="center">

# Hiroto Nozaki — Portfolio

**伝わる順番を、設計する。** ／ Web Production・Front-end

野崎大翔（Hiroto Nozaki）のポートフォリオハブサイト。
4本の架空案件（焼肉 黒耀／NOVA TECH CAREERS／NEXUS Inc./NOIR MEN'S CLINIC）の
Live Site・ソースコード・企画書 PDF への玄関として機能します。さらに「焼肉 黒耀」は React / TypeScript で再構築した発展版（React Edition）も収録しています。

<br />

[**🌐 Live Site**](https://hirotonozaki.github.io/hiroto-nozaki-portfolio/) ・ [**📁 Repository**](https://github.com/hirotonozaki/hiroto-nozaki-portfolio)

<br />

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_First-c9a96e?style=flat-square)

</div>

<br />

## 📖 Overview ／ 概要

採用ご担当者様に最短経路で4作品を見渡していただくための「玄関」として制作したハブサイトです。**3分でポートフォリオ全体を把握できる構造**を最優先に、各作品の Live Site・GitHub・企画書 PDF への3リンクを1画面に集約しました。

| Item | Detail |
| :--- | :--- |
| **Project Type** | ポートフォリオハブサイト |
| **Structure** | シングルページ（縦動線1枚） |
| **Works** | 4作品（架空クライアント案件）＋ React Edition（作品①の発展版） |
| **Role** | 企画 / 情報設計 / デザイン / 実装 |
| **Stack** | HTML5 / CSS3 / Vanilla JavaScript |
| **Hosting** | GitHub Pages |

<br />

## ⚛️ React Edition ／ 焼肉 黒耀 React Reservation Experience

作品①「焼肉 黒耀」を、保守性・再利用性・チーム開発を見据えて **React + TypeScript + Vite + SCSS Modules** で再構築した発展版です。Works セクションのカードから、詳細モーダルで設計意図をご覧いただけます。

- 🌐 **公開URL**：https://hirotonozaki.github.io/yakiniku-kokuyou-react/
- 📁 **GitHub**：https://github.com/hirotonozaki/yakiniku-kokuyou-react

| 観点 | Vanilla JS 版 | React 版 |
| :--- | :--- | :--- |
| 状態管理 | DOM ＋ グローバル変数 | `useState` / Context で一元化 |
| 画面更新 | 手動 DOM 操作 | 状態変更で自動再描画 |
| スタイル | グローバル CSS | SCSS Modules でスコープ化 |
| 再利用 | コピー | コンポーネント化（`CourseCard` 等を共用） |
| 型安全 | なし（実行時に発覚） | TypeScript で事前検知 |

**なぜ React 化したか**：予約は状態が増えるほど DOM 操作が複雑化する。状態を変えるだけで UI が追従する React なら、手動更新のバグを根本から減らせるため。

**実務で意識した改善**：責務でのフォルダ分割、コンポーネントの再利用（`CourseCard`）、型による安全性、予約 UI の段階提示と進捗の可視化。

<br />

## 🌐 Live Site ／ サイトURL

| 種別 | URL |
| :--- | :--- |
| **本サイト（ハブ）** | https://hirotonozaki.github.io/hiroto-nozaki-portfolio/ |
| 作品①｜焼肉 黒耀 | https://hirotonozaki.github.io/yakiniku-kokuyou/ |
| 作品①+｜焼肉 黒耀 React Edition | https://hirotonozaki.github.io/yakiniku-kokuyou-react/ |
| 作品②｜NOVA TECH CAREERS | https://hirotonozaki.github.io/nova-tech-careers/ |
| 作品③｜NEXUS Inc. | https://hirotonozaki.github.io/nexus-corporate/ |
| 作品④｜NOIR MEN'S CLINIC | _In Development — WordPress Theme · Local Environment_（ローカル環境で開発中。`assets/pdf/noir-mens-clinic-proposal.pdf` と `assets/images/noir-mockup.svg` ／ `noir-wp-structure.svg` をご参照ください） |

<br />

## 💻 GitHub ／ リポジトリ

https://github.com/hirotonozaki/hiroto-nozaki-portfolio

<br />

## 🛠 Tech Stack ／ 使用技術

| 領域 | 技術 |
| :--- | :--- |
| **Markup** | HTML5（セマンティック構造、JSON-LD (Person)、OGP / Twitter Card） |
| **Styling** | CSS3 / CSS Variables（FLOCSS 命名、`clamp()` で可変余白） |
| **Interaction** | Vanilla JavaScript（IIFE / IntersectionObserver / `requestAnimationFrame`） |
| **React Edition** | React 18 / TypeScript / Vite / SCSS Modules / React Router（作品①の発展版） |
| **Typography** | Fraunces（見出し）／ Noto Sans JP（本文）／ JetBrains Mono（数値・タグ） |
| **Hosting** | GitHub Pages |

<br />

## 💡 Concept ／ 制作意図

**Apple 風ミニマル × 制作会社らしい品位 × 編集デザインの読ませる文体** を一つの方向に統合することを試みました。

採用担当者は限られた時間で多くのポートフォリオを見ます。だからこそ「全作品を見渡せる玄関」を1枚に集約し、各作品への3リンク（Live・GitHub・企画書）を最短距離で配置することを設計の起点に置きました。

| 領域 | 方針 |
| :--- | :--- |
| **Color** | 漆黒 `#0a0a0a` をベースに、極小面積のシャンパンゴールド `#c9a96e` をアクセントに限定使用 |
| **Spacing** | セクション間 `clamp(96px, 12vw, 160px)`。Apple 並みの呼吸感を確保 |
| **Motion** | フェード＋Y軸 20px 移動のみ。`cubic-bezier(0.16, 1, 0.3, 1)` で統一 |

<br />

## ✨ Highlights ／ 工夫した点

### 1. 情報設計 — 3分で全体像が掴める縦動線
ファーストビュー → 制作物一覧（4作品 × 3リンク） → 制作者情報、の順で配置。スクロール一本で全リソースに到達できる構造に整理しました。

### 2. CSS 設計 — 変数 + FLOCSS による保守性
配色・余白・タイポを `:root` に集約し、命名規則を FLOCSS（`l-` `c-` `p-` `u-`）に統一。複数人が触っても破綻しにくい設計です。

### 3. アクセシビリティ — 「品位」として扱う
`aria-expanded` / `aria-controls`、Escキーでの閉じ動作、`:focus-visible`、`prefers-reduced-motion` まで省略せず実装しました。

### 4. パフォーマンス — 必要十分な軽量化
OGP 画像は PNG 72KB、Google Fonts は `preconnect`、`<noscript>` フォールバックを配置。ビルド不要のバニラ構成で初期表示を最適化しています。

### 5. コード品質 — インラインstyle 0／FIX パッチなし
インライン `style` 属性 0、`!important` は `prefers-reduced-motion` 内の4箇所のみ。後付けのFIXパッチを残さず、設計時点で完結させています。

<br />

## 📂 Directory ／ ディレクトリ構成

```
hiroto-nozaki-portfolio/
├── index.html              # ハブページ（縦動線1枚）
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── images/
    │   ├── ogp.png             # 1200×630 OGP/Twitter Card
    │   ├── noir-mockup.svg     # NOIR MEN'S CLINIC デザインモックアップ
    │   └── noir-wp-structure.svg
    └── pdf/
        ├── resume.pdf          # 履歴書（個人情報マスク版）
        ├── yakiniku-kokuyou-proposal.pdf
        ├── nova-tech-careers-proposal.pdf
        ├── nexus-proposal.pdf
        └── noir-mens-clinic-proposal.pdf
```

<br />

## 🖼 Screenshot ／ スクリーンショット

![Hiroto Nozaki Portfolio Preview](./assets/images/ogp.png)

<br />

## 📱 Responsive ／ レスポンシブ対応

モバイルファーストで設計し、4つのブレイクポイントで動作を確認しています。

| Device | Width | 主な変化 |
| :--- | :--- | :--- |
| 📱 Mobile (S) | ~ 480px | 1カラム / タッチターゲット 44px+ |
| 📱 Mobile (L) | ~ 768px | 1カラム / 見出しサイズ最適化 |
| 📱 Tablet | ~ 1024px | 2カラム / ナビ表示切替 |
| 💻 Desktop | 1340px ~ | フル表示 / グローバルナビ |

<br />

## 👤 Author ／ 制作者情報

| 項目 | 内容 |
| :--- | :--- |
| **Name** | 野崎大翔（Hiroto Nozaki） |
| **Role** | Web Production / Front-end |
| **Currently Learning** | WordPress テーマ開発 / アクセシビリティ / パフォーマンス最適化 / Sass |
| **GitHub** | [github.com/hirotonozaki](https://github.com/hirotonozaki) |
| **Portfolio** | [hirotonozaki.github.io/hiroto-nozaki-portfolio](https://hirotonozaki.github.io/hiroto-nozaki-portfolio/) |

<br />

<div align="center">

<sub>本リポジトリ掲載の制作物はすべて架空企業を題材としたポートフォリオ作品です。</sub>

<sub>© 2026 Hiroto Nozaki</sub>

</div>
