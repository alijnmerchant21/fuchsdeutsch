import type { Course } from './types';
import { kapitel1 } from './kapitel1';
import { kapitel2 } from './kapitel2';
import { kapitel3 } from './kapitel3';
import { kapitel4 } from './kapitel4';
import { kapitel5 } from './kapitel5';
import { kapitel6 } from './kapitel6';
import { kapitel7 } from './kapitel7';
import { kapitel8 } from './kapitel8';

export const b21: Course = {
  id: 'b2-1',
  level: 'B2.1',
  title: 'Deutsch B2.1',
  blurb: 'Der Brückenkurs von B1 nach B2. Acht Kapitel, jedes mit Lesen, Hören, Grammatik, vier Spielen und einer Prüfung.',
  weeks: 8,
  chapters: [kapitel1, kapitel2, kapitel3, kapitel4, kapitel5, kapitel6, kapitel7, kapitel8],
};

export const courses: Course[] = [b21];
// Planned levels, shown on the landing page. Add a Course object above to open one.
export const roadmapLevels = ['A1', 'A2', 'B1', 'B2.1', 'B2.2', 'C1', 'C2'];

export const course = b21;
export const chapterById = (id: string) => course.chapters.find((c) => c.id === id);
