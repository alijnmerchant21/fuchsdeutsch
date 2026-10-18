'use client';
import { createContext, useContext, type ReactNode } from 'react';
import { useStore } from '@/lib/store';
import { TASK_EN } from '@/content/taskEn';

/** Courses where every German instruction has an English line (A1 to B1). It shows while English help is on. */
export const HINT_COURSES = new Set(['a1', 'a2', 'b1']);

const HintCtx = createContext(false);

export function HintProvider({ course, children }: { course: string | undefined; children: ReactNode }) {
  return <HintCtx.Provider value={!!course && HINT_COURSES.has(course)}>{children}</HintCtx.Provider>;
}

/** True when English help is on (the "English-Hilfe" switch). It starts on after an English sign-up, off after a German one. */
export function useHints(): boolean {
  const { progress } = useStore();
  return progress.mode === 'easy';
}

/** True on A1 to B1 while English help is on: instructions and buttons get an English line. Exercises stay German. */
export function useForcedHints(): boolean {
  const course = useContext(HintCtx);
  return useHints() && course;
}

/** German UI text with a small English line under it (A1 to B1, English help on). */
export function De({ children, en, inline = false }: { children: ReactNode; en: string; inline?: boolean }) {
  const forced = useForcedHints();
  if (!forced) return <>{children}</>;
  return inline
    ? <>{children} <small className="v3-en-sub">({en})</small></>
    : <span className="v3-de">{children}<small className="v3-en-sub">{en}</small></span>;
}

/** English-only helper line (diagrams, captions). Shows while English help is on. */
export function En({ children }: { children: ReactNode }) {
  return useHints() ? <small className="v3-en-sub v3-en-block">{children}</small> : null;
}

/** English for a German task line, from the block or the shared list. */
export const taskEnglish = (de: string | undefined, en: string | undefined) => en || (de ? TASK_EN[de.trim()] : undefined);
