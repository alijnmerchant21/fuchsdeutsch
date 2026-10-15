'use client';
import { createContext, useContext, type ReactNode } from 'react';
import { useStore } from '@/lib/store';
import { TASK_EN } from '@/content/taskEn';

/** Courses where every German instruction gets an English line underneath (A1 to B1). */
export const HINT_COURSES = new Set(['a1', 'a2', 'b1']);

const HintCtx = createContext(false);

export function HintProvider({ course, children }: { course: string | undefined; children: ReactNode }) {
  return <HintCtx.Provider value={!!course && HINT_COURSES.has(course)}>{children}</HintCtx.Provider>;
}

/** True when English help should show: always on A1 to B1, otherwise only in easy mode. */
export function useHints(): boolean {
  const forced = useContext(HintCtx);
  const { progress } = useStore();
  return forced || progress.mode === 'easy';
}

/** True only on A1 to B1, where instructions always carry English. */
export const useForcedHints = () => useContext(HintCtx);

/** German UI text with a small English line under it on A1 to B1. */
export function De({ children, en, inline = false }: { children: ReactNode; en: string; inline?: boolean }) {
  const forced = useContext(HintCtx);
  if (!forced) return <>{children}</>;
  return inline
    ? <>{children} <small className="v3-en-sub">({en})</small></>
    : <span className="v3-de">{children}<small className="v3-en-sub">{en}</small></span>;
}

/** English for a German task line, from the block or the shared list. */
export const taskEnglish = (de: string | undefined, en: string | undefined) => en || (de ? TASK_EN[de.trim()] : undefined);
