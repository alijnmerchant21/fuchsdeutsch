import type { Chapter, Course, Section } from '@/content/types';
import type { Progress } from './store';
import { chapterOpen, sectionKey } from './unlock';

export type NextUp =
  | { kind: 'section'; ch: Chapter; ci: number; sec: Section; si: number; href: string }
  | { kind: 'exam'; ch: Chapter; ci: number; href: string }
  | { kind: 'final'; href: string }
  | null;

/** The single next thing a learner should do in a course. */
export function nextUp(course: Course, p: Progress): NextUp {
  for (let ci = 0; ci < course.chapters.length; ci++) {
    const ch = course.chapters[ci];
    if (!ch.sections.length || !chapterOpen(course, ci, p, false)) break;
    const si = ch.sections.findIndex((x) => !p.done[sectionKey(ch.id, x.id)]);
    if (si >= 0) return { kind: 'section', ch, ci, sec: ch.sections[si], si, href: `/kurs/${ch.id}/${ch.sections[si].id}` };
    if (!p.exams[ch.id]?.passed) return { kind: 'exam', ch, ci, href: `/kurs/${ch.id}/pruefung` };
  }
  if (course.chapters.every((c) => p.exams[c.id]?.passed)) return { kind: 'final', href: `/pruefung/${course.id}` };
  return null;
}

/** The chapter the learner is working on (or the last open one). */
export function currentChapterIndex(course: Course, p: Progress): number {
  const n = nextUp(course, p);
  if (n && (n.kind === 'section' || n.kind === 'exam')) return n.ci;
  return course.chapters.length - 1;
}
