import type { Chapter, Course } from '@/content/types';
import type { Progress } from './store';

export const sectionKey = (chapterId: string, sectionId: string) => `${chapterId}/${sectionId}`;

export function chapterOpen(course: Course, index: number, p: Progress, admin: boolean): boolean {
  if (admin || index === 0) return true;
  const prev = course.chapters[index - 1];
  return !!p.exams[prev.id]?.passed;
}

export function sectionOpen(ch: Chapter, index: number, p: Progress, admin: boolean): boolean {
  if (admin || index === 0) return true;
  return !!p.done[sectionKey(ch.id, ch.sections[index - 1].id)];
}

export const sectionsDone = (ch: Chapter, p: Progress) => ch.sections.filter((s) => p.done[sectionKey(ch.id, s.id)]).length;

export function examOpen(ch: Chapter, p: Progress, admin: boolean): boolean {
  return admin || (ch.sections.length > 0 && sectionsDone(ch, p) === ch.sections.length);
}

export function finalOpen(course: Course, p: Progress, admin: boolean): boolean {
  return admin || course.chapters.every((c) => p.exams[c.id]?.passed);
}

export function chapterPercent(ch: Chapter, p: Progress): number {
  if (!ch.sections.length) return 0;
  const total = ch.sections.length + 1;
  return Math.round(((sectionsDone(ch, p) + (p.exams[ch.id]?.passed ? 1 : 0)) / total) * 100);
}
