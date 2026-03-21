import { useEffect, useState } from 'react';

const cache = new Map<string, string | null>();

export function useBookCover(title: string, author: string): string | null {
  const key = `${title}::${author}`;
  const [url, setUrl] = useState<string | null>(cache.get(key) ?? null);

  useEffect(() => {
    if (author === '-' || author === '発表済') return;
    if (cache.has(key)) {
      setUrl(cache.get(key) ?? null);
      return;
    }

    let cancelled = false;

    // Clean title: take first title if slash-separated, remove extra info
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
        // Google Books returns http URLs, upgrade to https
        const secureUrl = thumb?.replace(/^http:/, 'https:') ?? null;
        cache.set(key, secureUrl);
        setUrl(secureUrl);
      })
      .catch(() => {
        if (!cancelled) {
          cache.set(key, null);
          setUrl(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [key, title, author]);

  return url;
}
