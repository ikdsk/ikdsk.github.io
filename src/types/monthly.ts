export interface MonthlyBook {
  title: string;
  author: string;
  publisher: string;
  genre: 'novel' | 'nonfiction' | 'shinsho' | 'business' | 'essay' | 'other';
  reason: string;
  synopsis: string;
  review: string;
  publishDate?: string; // '2026年3月12日' or '2026年3月' など
}

export interface MonthlyPick {
  month: string; // '2026年3月'
  books: MonthlyBook[];
}

export const genreLabels: Record<MonthlyBook['genre'], string> = {
  novel: '小説',
  nonfiction: 'ノンフィクション',
  shinsho: '新書',
  business: 'ビジネス',
  essay: 'エッセイ',
  other: 'その他',
};
