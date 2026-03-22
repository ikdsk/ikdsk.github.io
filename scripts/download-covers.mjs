/**
 * Google Books APIから書影をダウンロードして public/covers/ に保存する
 * ビルド前に実行: node scripts/download-covers.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const COVERS_DIR = path.join(ROOT, 'public', 'covers');
const MANIFEST_PATH = path.join(COVERS_DIR, 'manifest.json');

// awards.ts と monthly.ts から title/author ペアを抽出
function extractBooks() {
  const books = [];

  // awards.ts
  const awardsRaw = fs.readFileSync(path.join(ROOT, 'src/data/awards.ts'), 'utf8');
  const winnerBlocks = awardsRaw.matchAll(/\{\s*year:\s*'[^']*',\s*title:\s*'([^']*)',\s*author:\s*'([^']*)'/g);
  for (const m of winnerBlocks) {
    books.push({ title: m[1], author: m[2] });
  }

  // monthly.ts
  const monthlyRaw = fs.readFileSync(path.join(ROOT, 'src/data/monthly.ts'), 'utf8');
  const monthlyBlocks = monthlyRaw.matchAll(/\{\s*title:\s*'([^']*)',\s*author:\s*'([^']*)'/g);
  for (const m of monthlyBlocks) {
    books.push({ title: m[1], author: m[2] });
  }

  // Filter out placeholder entries
  return books.filter(b => b.author !== '-' && b.author !== '発表済');
}

function toFileName(title, author) {
  const clean = `${title}_${author}`
    .replace(/\s*\/\s*/g, '_')
    .replace(/[^\p{L}\p{N}_]/gu, '_')
    .replace(/_+/g, '_')
    .slice(0, 80);
  return clean + '.jpg';
}

async function fetchCoverUrl(title, author) {
  const cleanTitle = title.split('/')[0].trim();
  const cleanAuthor = author.split('/')[0].split('、')[0].trim();

  // Try multiple query formats
  const queries = [
    `${cleanTitle} ${cleanAuthor}`,
    cleanTitle,
  ];

  for (const q of queries) {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&langRestrict=ja&maxResults=3`;

    const res = await fetch(apiUrl);
    if (res.status === 429) {
      console.log('  ⚠ Rate limited, waiting 5s...');
      await new Promise(r => setTimeout(r, 5000));
      continue;
    }
    const data = await res.json();
    if (data.error) continue;

    // Find best match with cover image
    for (const item of data.items ?? []) {
      const imageLinks = item.volumeInfo?.imageLinks;
      const thumb = imageLinks?.thumbnail ?? imageLinks?.smallThumbnail;
      if (thumb) return thumb.replace(/^http:/, 'https:');
    }
  }

  return null;
}

async function downloadImage(url, filePath) {
  const res = await fetch(url);
  if (!res.ok) return false;
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(filePath, buffer);
  return true;
}

async function main() {
  fs.mkdirSync(COVERS_DIR, { recursive: true });

  // Load existing manifest
  let manifest = {};
  if (fs.existsSync(MANIFEST_PATH)) {
    manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  }

  const books = extractBooks();
  console.log(`Found ${books.length} books to process`);

  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  for (const book of books) {
    const key = `${book.title}::${book.author}`;
    const fileName = toFileName(book.title, book.author);
    const filePath = path.join(COVERS_DIR, fileName);

    // Skip if already downloaded
    if (manifest[key] && fs.existsSync(filePath)) {
      skipped++;
      continue;
    }

    // Rate limit: 100ms between requests
    await new Promise(r => setTimeout(r, 100));

    try {
      const coverUrl = await fetchCoverUrl(book.title, book.author);
      if (!coverUrl) {
        manifest[key] = null;
        failed++;
        console.log(`  ✗ No cover: ${book.title}`);
        continue;
      }

      const ok = await downloadImage(coverUrl, filePath);
      if (ok) {
        manifest[key] = `/covers/${fileName}`;
        downloaded++;
        console.log(`  ✓ ${book.title}`);
      } else {
        manifest[key] = null;
        failed++;
        console.log(`  ✗ Download failed: ${book.title}`);
      }
    } catch (e) {
      manifest[key] = null;
      failed++;
      console.log(`  ✗ Error: ${book.title} - ${e.message}`);
    }
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`\nDone: ${downloaded} downloaded, ${skipped} skipped, ${failed} failed`);
}

main();
