import bankJson from '@/content/bank.json';
import diagJson from '@/content/diagnose.json';
import tipsJson from '@/content/tips.json';
import { asset } from './config';
import type { Block, ExamSet, Module, Section, TestDef } from './types';

export const bank = bankJson as unknown as Record<string, ExamSet>;
export const diagnose = diagJson as unknown as TestDef;
export interface TeilInfo { name: string; mins: number; items: number; how: string; tips: string[]; plays?: number }
const tj = tipsJson as unknown as { hoeren: Record<string, TeilInfo>; lesen: Record<string, TeilInfo>; traps: Record<'hoeren' | 'lesen', Record<string, [string, string]>> };
export const tips: Record<'hoeren' | 'lesen', Record<string, TeilInfo>> = { hoeren: tj.hoeren, lesen: tj.lesen };
export const traps = tj.traps;
/** Trap label for a module, falling back to the other module's list. */
export const trapLabel = (module: string, k?: string): [string, string] | undefined =>
  k ? (traps[module as 'hoeren' | 'lesen']?.[k] ?? traps.lesen[k] ?? traps.hoeren[k]) : undefined;

export const MODULES: { id: Module; name: string; en: string; hue: string; live: boolean }[] = [
  { id: 'hoeren', name: 'Hören', en: 'Listening', hue: 'sky', live: true },
  { id: 'lesen', name: 'Lesen', en: 'Reading', hue: 'mint', live: true },
  { id: 'schreiben', name: 'Schreiben', en: 'Writing', hue: 'peach', live: true },
  { id: 'sprechen', name: 'Sprechen', en: 'Speaking, coming soon', hue: 'rose', live: false },
];
export const modName = (m: string) => MODULES.find((x) => x.id === m)?.name ?? m;

/** Licensed full mocks live in public/licensed/mocks.json (personal copy, never committed). */
export interface Licensed { tests: TestDef[]; sets: Record<string, ExamSet> }
let licensed: Promise<Licensed> | null = null;
export function loadLicensed(): Promise<Licensed> {
  if (!licensed) {
    licensed = fetch(asset('licensed/mocks.json'))
      .then((r) => (r.ok ? r.json() : { tests: [], sets: {} }))
      .catch(() => ({ tests: [], sets: {} }));
  }
  return licensed;
}

/** Finds a set in the block's own sets, the bank or the licensed mocks. */
export function findSet(id: string, block?: Block | null, lic?: Licensed | null): ExamSet | undefined {
  return block?.content.sets?.find((s) => s.id === id) ?? bank[id] ?? lic?.sets[id];
}

const WRITE_MIN: Record<number, number> = { 1: 20, 2: 25, 3: 15 };
/** Exam minutes for one set, from the Goethe timing per Teil. */
export function setMinutes(s: ExamSet): number {
  if (s.module === 'schreiben') return WRITE_MIN[s.teil] ?? 15;
  const t = tips[s.module as 'hoeren' | 'lesen']?.[s.teil];
  if (!t) return 10;
  const n = s.groups.reduce((a, g) => a + g.items.length, 0);
  return Math.max(3, Math.round((t.mins * n) / t.items));
}

/** Test for one block day. Test days and mocks get a countdown, practice days do not. */
export function dayTest(block: Block, index: number, lic: Licensed | null): TestDef | null {
  const day = block.content.days[index];
  if (!day) return null;
  const mock = day.sets.find((s) => s.startsWith('mock:'));
  if (mock) return lic?.tests.find((t) => t.id === mock.slice(5)) ?? null;
  const sections: Section[] = [];
  for (const id of day.sets) {
    const s = findSet(id, block, lic);
    if (!s) continue;
    let sec = sections.find((x) => x.module === s.module);
    if (!sec) { sec = { module: s.module, title: modName(s.module), minutes: 0, sets: [] }; sections.push(sec); }
    sec.sets.push(id);
    if (day.test) sec.minutes += setMinutes(s);
  }
  return { id: `${block.id}:${index}`, title: day.title, en: day.en, sections };
}
