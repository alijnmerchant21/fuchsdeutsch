export interface Story {
  id: string;
  /** CEFR level this story fits. */
  level: 'A1' | 'A2' | 'B1';
  title: string;
  /** Minutes of reading time. */
  minutes: number;
  /** Optional chapter to suggest after (e.g. a1-k5). */
  afterChapter?: string;
  /** Why we placed it here — used in the UI. */
  why: string;
  whyEn: string;
  /** Short German story body. Use **bold** and [[glossary]] like course text. */
  body: string;
  /** English summary for Easy mode. */
  en: string;
  /** Comprehension questions. */
  quiz: { q: string; options: string[]; answer: number }[];
}
