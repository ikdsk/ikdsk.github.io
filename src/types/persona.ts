export interface Persona {
  id: string;
  name: string;
  age: number;
  occupation: string;
  icon: string;
  readingStyle: string;
  bio: string;
}

export interface Recommendation {
  personaId: string;
  awardId: string;
  winnerIndex: number;
  comment: string;
}
