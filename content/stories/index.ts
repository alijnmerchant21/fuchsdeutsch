import { storiesA1 } from './a1';
import type { Story } from './types';

export type { Story } from './types';

export const stories: Story[] = [...storiesA1];

export function storyById(id: string): Story | undefined {
  return stories.find((s) => s.id === id);
}

export function storiesForLevel(level: Story['level']): Story[] {
  return stories.filter((s) => s.level === level);
}

/** Optional reads suggested after a chapter id (e.g. "a1-k4"). */
export function storiesAfterChapter(chapterId: string): Story[] {
  return stories.filter((s) => s.afterChapter === chapterId);
}
