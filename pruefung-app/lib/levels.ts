/* The four Goethe exams we prepare for. B1 and B2 are modular (pass each module with 60 %),
   A1 and A2 are one exam scored together (pass with 60 % overall). */
import type { Module } from './types';

export type Level = 'a1' | 'a2' | 'b1' | 'b2';

export interface LevelInfo {
  id: Level;
  /** short label, e.g. "B1" */
  short: string;
  /** official exam name */
  exam: string;
  /** true = each module is booked, scored and bought on its own */
  modular: boolean;
  /** modules that exist in this exam (Sprechen is "coming soon" everywhere) */
  modules: Module[];
  /** price: per module + all modules (modular) or one price for the level */
  price: { module?: [number, number]; all: [number, number] }; // [USD, INR]
}

export const LEVELS: Record<Level, LevelInfo> = {
  a1: {
    id: 'a1', short: 'A1', exam: 'Goethe-Zertifikat A1: Start Deutsch 1', modular: false,
    modules: ['hoeren', 'lesen', 'schreiben', 'sprechen'], price: { all: [15, 1500] },
  },
  a2: {
    id: 'a2', short: 'A2', exam: 'Goethe-Zertifikat A2', modular: false,
    modules: ['hoeren', 'lesen', 'schreiben', 'sprechen'], price: { all: [15, 1500] },
  },
  b1: {
    id: 'b1', short: 'B1', exam: 'Goethe-Zertifikat B1', modular: true,
    modules: ['hoeren', 'lesen', 'schreiben', 'sprechen'], price: { module: [9, 900], all: [21, 2100] },
  },
  b2: {
    id: 'b2', short: 'B2', exam: 'Goethe-Zertifikat B2', modular: true,
    modules: ['hoeren', 'lesen', 'schreiben', 'sprechen'], price: { module: [9, 900], all: [21, 2100] },
  },
};

export const LEVEL_IDS: Level[] = ['a1', 'a2', 'b1', 'b2'];
export const levelOfCandidate = (c?: { level?: string | null } | null): Level => (c?.level && c.level in LEVELS ? (c.level as Level) : 'b1');

/** "$9 pro Modul, $21 alle Module" or "$15 für die ganze Prüfung" */
export function priceLine(l: Level, en: boolean): string {
  const p = LEVELS[l].price;
  if (p.module) return en ? `$${p.module[0]} per module, $${p.all[0]} for all modules` : `$${p.module[0]} pro Modul, $${p.all[0]} alle Module`;
  return en ? `$${p.all[0]} for the whole exam` : `$${p.all[0]} für die ganze Prüfung`;
}
