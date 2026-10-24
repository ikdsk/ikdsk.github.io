/**
 * ルート（https://ikdsk.github.io/）用の静的ファイルを dist/ 直下へコピーする。
 * 文学賞の本棚は vite が dist/books/ に出力するので、それ以外（D's slop・404.html・
 * sitemap.xml・robots.txt）をここで配置する。vite build の後に実行すること。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'site');
const DIST = path.join(ROOT, 'dist');

if (!fs.existsSync(path.join(DIST, 'books', 'index.html'))) {
  console.error('dist/books/index.html がありません。先に vite build を実行してください。');
  process.exit(1);
}

fs.cpSync(SRC, DIST, { recursive: true });
console.log('Copied site/ -> dist/');
