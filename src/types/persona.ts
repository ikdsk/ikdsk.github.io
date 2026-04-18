export interface Persona {
  id: string;
  name: string;
  age: number;
  occupation: string;
  icon: string;
  readingStyle: string;
  bio: string;
}

type BaseRecommendation = {
  personaId: string;
  comment: string;
  /** ブログ投稿日 'YYYY-MM-DD' */
  postedDate: string;
};

export type AwardRecommendation = BaseRecommendation & {
  kind: 'award';
  awardId: string;
  winnerIndex: number;
};

export interface OwnPickBook {
  title: string;
  author: string;
  publisher?: string;
  synopsis: string;
  publishDate?: string;
}

export type OwnRecommendation = BaseRecommendation & {
  kind: 'own';
  book: OwnPickBook;
};

export type Recommendation = AwardRecommendation | OwnRecommendation;
