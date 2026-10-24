# D's slop

`https://ikdsk.github.io/` は個人開発ギャラリー「D's slop」。ビルド不要の静的HTMLサイトで、公開物は `site/` の中身そのまま。

## 構成

```
site/                  ← 公開ルート（これがそのまま https://ikdsk.github.io/ になる）
  index.html           ← 本体。カード一覧・タブ絞り込み。HTML/CSS/少量のJSのみ、解析タグなし
  thumbs/*.webp        ← カードのサムネイル（720x450）
  404.html             ← GitHub Pages の 404。終了したページ（旧 /books/ など）もここに落ちる
  sitemap.xml, robots.txt, favicon.svg
  taxonomy/            ← 生き物の分類たんけん（同梱成果物）
  history/             ← 世界同時年表（/history/）と科学技術史（/history/science/）（同梱成果物）
scripts/sync-apps.sh   ← taxonomy / history の成果物をローカルのソース repo から作り直す
.github/workflows/deploy.yml ← main への push で site/ をそのまま Pages へデプロイ（npm 不要）
```

## 同梱アプリの同期（`scripts/sync-apps.sh`）

`site/taxonomy/` と `site/history/` は、**非公開のソース repo**（`~/workspace/taxonomy-explorer`・`~/workspace/history`）から成果物だけを同梱している。ソースを更新したらローカルで実行し、差分をコミットする。

```bash
scripts/sync-apps.sh   # コピー先を削除 → taxonomy は静的ファイルをコピー、history は tsc -b + vite build --base=/history/ → 配置（冪等）
```

- ソースの場所は `WORKSPACE=...` で変更可。history 側のファイルは変更しない。
- CI はこのスクリプトを呼ばない（成果物をコミットしておく）。
- 分類たんけんの写真は Wikimedia Commons のホットリンク（作者・ライセンス・出典を画面に表示）。

## カードを追加・更新する

1. `site/index.html` の `<ul class="grid">` に `<li data-cat="...">` を追加する（既存カードをコピーして編集）。
   - `data-cat` はタブのカテゴリ（`tool` / `learning` / `game` / `music`、スペース区切りで複数可）。新カテゴリを足すときは `<nav class="tabs">` のボタンも足す。件数0のタブは残さない。
   - 外部ホストのアプリ（Pages 等）はリンクのみ。GitHub リンクは公開 repo があるときだけ付ける。
2. サムネイルは Playwright で実際の画面をスクショ（1200x750）し、720x450 の WebP（約20KB）にして `site/thumbs/` に置く。
3. 新しいパスを持つアプリなら `site/sitemap.xml` にも追記する。
4. 公開前にローカルで確認する（`python3 -m http.server -d site` など。404 の確認は未知パスを `404.html` で返す簡易サーバーで）。
5. `main` に push すれば GitHub Actions で自動デプロイ。

## 方針

- 個人情報（本名・住所・連絡先など）をページやメタデータに書かない。
- 外部の解析タグ・トラッキングは入れない。
- 公式でないものは「非公式」と明記し、権利元の表記・出典を画面に出す。

## 旧「文学賞の本棚」

`/books/` にあった Vite + React 製の文学賞ガイドは、作り直しのためサイトから外した。旧版は git tag `bookshelf-v1`（コミット da24800）に残っている。`/books/...` と旧URL（`/awards` など）は 404 ページになる。
