# thaqulla.github.io

`thaqulla.github.io` の個人サイトです。  
TanStack Start + Chakra UI で作られた、プロフィール兼リンク集のようなポートフォリオページになっています。

## 何をしているリポジトリか

- GitHub / Qiita / YouTube / X への導線をまとめたトップページ
- 日本語・英語・フランス語の簡易多言語対応
- ライト / ダークのカラーモード切り替え
- GitHub Pages 向けの静的出力

## 主な構成

- `src/routes/index.tsx`
  - メインページ
  - ロゴ表示、挨拶、SNS ボタン、メッセージ表示
- `src/components/header.tsx`
  - メールボタン
  - 言語切り替え
  - カラーモード切り替え
- `src/components/footer.tsx`
  - TanStack Start / GitHub へのリンク集
- `src/lib/i18n.ts`
  - `dictionary.json` を読む翻訳関数 `t`
- `src/locales/dictionary.json`
  - 翻訳文言の辞書
- `src/constants/externalLinks.ts`
  - 外部リンク定義

## 技術スタック

- TanStack Start
- TanStack Router
- React 19
- TypeScript
- Chakra UI
- 自前のカラーモードContext
- react-icons

## セットアップ

```bash
npm install
```

必要に応じて `.env.example` を `.env.local` にコピーし、`VITE_MESSAGE` を設定します。`VITE_` で始まる値はブラウザに公開されるため、秘密情報は入れないでください。

## 開発

```bash
npm run dev
```

## ビルド

```bash
npm run build
```

## 静的出力

`vite.config.ts` で静的プリレンダリングを有効にしているので、静的サイトとして書き出します。

```bash
npm run build
```

ビルド後の出力先は `dist/client/` です。

## Lint / Format

```bash
npm run lint
npm run format
```

## Docker

`compose.yml` があるので、Docker でも開発できます。

```bash
docker compose up --build
```

## ディレクトリ概要

```text
src/
  routes/     TanStack Router のファイルベースルート
  routeTree.gen.ts 自動生成されるルートツリー
  components/ UI パーツ
  constants/   外部リンク定義
  lib/        i18n などの共通処理
  locales/    翻訳辞書
public/       ロゴやアイコン素材
```

## 補足

- `VITE_MESSAGE` があれば、ページ中央に追加メッセージを表示します。
- GitHub Actions の `/.github/workflows/tanstack-start.yml` で GitHub Pages へのデプロイを想定しています。
- `Makefile` には `check` などの補助コマンドがあります。
