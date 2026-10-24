#!/usr/bin/env bash
# ローカルのソース repo から、D's slop に同梱する成果物を作り直してコピーする。
#   site/taxonomy/  ← ~/workspace/taxonomy-explorer（実行に必要な静的ファイルのみ）
#   site/history/   ← ~/workspace/history を --base=/history/ でビルドしたもの
# 冪等。コピー先は一度消してから入れる。CI からは呼ばない（成果物はコミットする）。
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WORKSPACE="${WORKSPACE:-$HOME/workspace}"
TAXONOMY_SRC="$WORKSPACE/taxonomy-explorer"
HISTORY_SRC="$WORKSPACE/history"

for d in "$TAXONOMY_SRC" "$HISTORY_SRC"; do
  [ -d "$d" ] || { echo "ソースがありません: $d" >&2; exit 1; }
done

# --- 生き物の分類たんけん ---
dest="$ROOT/site/taxonomy"
rm -rf "$dest"
mkdir -p "$dest/data"
cp "$TAXONOMY_SRC"/index.html "$TAXONOMY_SRC"/style.css "$TAXONOMY_SRC"/app.js "$TAXONOMY_SRC"/tree.js "$dest/"
# data/ は読み込む *.js のみ（キャッシュ・例外リストの JSON は検証用なので入れない）
cp "$TAXONOMY_SRC"/data/*.js "$dest/data/"
echo "taxonomy: $(du -sh "$dest" | cut -f1)"

# --- 世界史年表 / 科学史年表 ---
dest="$ROOT/site/history"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
(
  cd "$HISTORY_SRC"
  npx tsc -b
  npx vite build --base=/history/ --outDir "$tmp/out" --emptyOutDir
)
rm -rf "$dest"
cp -R "$tmp/out" "$dest"
echo "history: $(du -sh "$dest" | cut -f1)"
