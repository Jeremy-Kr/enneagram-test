export enum EnneagramType {
  PERFECTIONIST = 1,
  HELPER = 2,
  ACHIEVER = 3,
  INDIVIDUALIST = 4,
  INVESTIGATOR = 5,
  LOYALIST = 6,
  ENTHUSIAST = 7,
  CHALLENGER = 8,
  PEACEMAKER = 9,
}

export interface Question {
  id: number;
  text: string;
  type: EnneagramType[];
  negativeType?: EnneagramType[];
}

export interface EnneagramDescription {
  title: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
}

export interface TypeScore {
  type: EnneagramType;
  score: number;
  percentage: number;
}
