import type { Chapter, Course } from './types';
import { a1 } from './a1/course';
import { a2 } from './a2/course';
import { kapitel1 } from './kapitel1';
import { kapitel2 } from './kapitel2';
import { kapitel3 } from './kapitel3';
import { kapitel4 } from './kapitel4';
import { kapitel5 } from './kapitel5';
import { kapitel6 } from './kapitel6';
import { kapitel7 } from './kapitel7';
import { kapitel8 } from './kapitel8';
import { finalB21 } from './final';
import { scopeAudio } from './helpers';

export const b21: Course = {
  id: 'b2-1',
  level: 'B2.1',
  title: 'Deutsch B2.1',
  examName: 'Goethe-Zertifikat B2',
  blurb: 'Der Brückenkurs von B1 nach B2. Acht Kapitel, jedes mit Lesen, Hören, Grammatik, vier Spielen und einer Prüfung.',
  blurbEn: 'The bridge from B1 to B2. Eight chapters, Goethe-style final exam.',
  weeks: 8,
  finalKey: 'final',
  chapters: [kapitel1, kapitel2, kapitel3, kapitel4, kapitel5, kapitel6, kapitel7, kapitel8].map(scopeAudio),
  final: finalB21,
};

/** All open courses, easiest first. Add a Course object here to open a new level. */
export const courses: Course[] = [a1, a2, b21];
// Planned levels, shown on the landing page.
export const roadmapLevels = ['A1', 'A2', 'B1', 'B2.1', 'B2.2', 'C1', 'C2'];

export const courseById = (id: string | undefined) => courses.find((c) => c.id === id);

/** Finds a chapter in any course. Chapter ids are unique across courses. */
export function findChapter(chapterId: string): { course: Course; chapter: Chapter; index: number } | null {
  for (const course of courses) {
    const index = course.chapters.findIndex((c) => c.id === chapterId);
    if (index >= 0) return { course, chapter: course.chapters[index], index };
  }
  return null;
}

// Older code paths that only know the B2.1 course.
export const course = b21;
export const chapterById = (id: string) => findChapter(id)?.chapter;
