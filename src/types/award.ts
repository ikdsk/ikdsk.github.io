export interface Winner {
  year: string;
  title: string;
  author: string;
  synopsis: string;
  announcedMonth?: string; // 発表月 例: '2025年1月', '2024年12月'
  review?: string; // AIによる書評（500文字程度）
}

/** Amazon検索URLを生成 */
export function amazonSearchUrl(title: string, author: string): string {
  if (author === '-') return '';
  const query = `${title} ${author}`.replace(/\s*\/\s*/g, ' ');
  return `https://www.amazon.co.jp/s?k=${encodeURIComponent(query)}&i=stripbooks`;
}

export interface Award {
  id: string;
  name: string;
  description: string;
  category: AwardCategory;
  winners: Winner[];
}

export type AwardCategory =
  | 'literary'
  | 'entertainment'
  | 'mystery'
  | 'sf'
  | 'nonfiction'
  | 'reader'
  | 'newcomer'
  | 'children'
  | 'other';

export const categoryLabels: Record<AwardCategory, string> = {
  literary: '純文学',
  entertainment: 'エンタメ・大衆文学',
  mystery: 'ミステリ・推理',
  sf: 'SF・ファンタジー',
  nonfiction: 'ノンフィクション・新書',
  reader: '読者投票・書店員',
  newcomer: '新人賞',
  children: '児童文学・ラノベ',
  other: 'その他',
};
