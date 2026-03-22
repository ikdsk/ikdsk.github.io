import { useEffect, useState } from 'react';

const STORAGE_KEY = 'book-cover-cache';
const CACHE_VERSION = 1;
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

interface CacheEntry {
  url: string | null;
  ts: number;
}

interface CacheStore {
  v: number;
  entries: Record<string, CacheEntry>;
}

// In-memory mirror of localStorage
let memCache: Record<string, CacheEntry> = {};
let loaded = false;

function loadCache(): void {
  if (loaded) return;
  loaded = true;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed: CacheStore = JSON.parse(raw);
    if (parsed.v !== CACHE_VERSION) return;
    memCache = parsed.entries;
  } catch {
    // corrupted cache, ignore
  }
}

function saveCache(): void {
  try {
    const store: CacheStore = { v: CACHE_VERSION, entries: memCache };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // storage full, ignore
  }
}

function getCached(key: string): string | null | undefined {
  loadCache();
  const entry = memCache[key];
  if (!entry) return undefined;
  if (Date.now() - entry.ts > CACHE_TTL) {
    delete memCache[key];
    return undefined;
  }
  return entry.url;
}

function setCached(key: string, url: string | null): void {
  memCache[key] = { url, ts: Date.now() };
  saveCache();
}

export function useBookCover(title: string, author: string): string | null {
  const key = `${title}::${author}`;
  const cached = getCached(key);
  const [url, setUrl] = useState<string | null>(cached ?? null);

  useEffect(() => {
    if (author === '-' || author === '発表済') return;

    const existing = getCached(key);
    if (existing !== undefined) {
      setUrl(existing);
      return;
    }

    let cancelled = false;

    const cleanTitle = title.split('/')[0].trim();
    const cleanAuthor = author.split('/')[0].split('、')[0].trim();

    const q = `intitle:${cleanTitle}+inauthor:${cleanAuthor}`;
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&langRestrict=ja&maxResults=1`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        const imageLinks = data.items?.[0]?.volumeInfo?.imageLinks;
        const thumb = imageLinks?.thumbnail ?? imageLinks?.smallThumbnail ?? null;
        const secureUrl = thumb?.replace(/^http:/, 'https:') ?? null;
        setCached(key, secureUrl);
        setUrl(secureUrl);
      })
      .catch(() => {
        if (!cancelled) {
          setCached(key, null);
          setUrl(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [key, title, author]);

  return url;
}
