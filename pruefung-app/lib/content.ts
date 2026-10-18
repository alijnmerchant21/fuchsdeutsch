import b1Bank from '@/content/b1/bank.json';
import b1Diag from '@/content/b1/diagnose.json';
import b1Tips from '@/content/b1/tips.json';
import b1Mocks from '@/content/b1/mocks.json';
import a1Bank from '@/content/a1/bank.json';
import a1Diag from '@/content/a1/diagnose.json';
import a1Tips from '@/content/a1/tips.json';
import a1Mocks from '@/content/a1/mocks.json';
import a2Bank from '@/content/a2/bank.json';
import a2Diag from '@/content/a2/diagnose.json';
import a2Tips from '@/content/a2/tips.json';
import a2Mocks from '@/content/a2/mocks.json';
import b2Bank from '@/content/b2/bank.json';
import b2Diag from '@/content/b2/diagnose.json';
import b2Tips from '@/content/b2/tips.json';
import b2Mocks from '@/content/b2/mocks.json';
import { asset } from './config';
import { TIPS_EN } from './lang';
import type { Level } from './levels';
import type { Block, ExamSet, Module, Section, TestDef } from './types';

/** All own sets of all levels, by id (ids are unique across levels). */
export const bank = { ...b1Bank, ...a1Bank, ...a2Bank, ...b2Bank } as unknown as Record<string, ExamSet>;
/** Modules switched off per level (parked: B2 Hören until its audio exists). Removed from tests and the welcome form. */
export const PARKED: Partial<Record<Level, Module[]>> = { b2: ['hoeren'] };
export const isParked = (l: Level, m: Module) => !!PARKED[l]?.includes(m);
const strip = (l: Level, t: TestDef): TestDef => ({ ...t, sections: t.sections.filter((s) => !isParked(l, s.module)) });
const DIAG_RAW: Record<Level, TestDef> = { a1: a1Diag, a2: a2Diag, b1: b1Diag, b2: b2Diag } as unknown as Record<Level, TestDef>;
const DIAG = Object.fromEntries(Object.entries(DIAG_RAW).map(([l, t]) => [l, strip(l as Level, t)])) as Record<Level, TestDef>;
/** Own full mock tests of every level (two per level, at real exam length). */
const MOCKS_RAW: Record<Level, TestDef[]> = { a1: a1Mocks, a2: a2Mocks, b1: b1Mocks, b2: b2Mocks } as unknown as Record<Level, TestDef[]>;
const MOCKS = Object.fromEntries(Object.entries(MOCKS_RAW).map(([l, ts]) => [l, ts.map((t) => strip(l as Level, t))])) as Record<Level, TestDef[]>;

export interface TeilInfo { name: string; mins: number; items: number; how: string; how_en?: string; tips: string[]; tips_en?: string[]; plays?: number }
type TipFile = Partial<Record<Module, Record<string, TeilInfo>>> & { traps?: Record<'hoeren' | 'lesen', Record<string, [string, string]>> };
const TIPS: Record<Level, TipFile> = { a1: a1Tips, a2: a2Tips, b1: b1Tips, b2: b2Tips } as unknown as Record<Level, TipFile>;

/* The level of the candidate being shown. The store sets it from the candidate, admin pages from the viewed candidate. */
let current: Level = 'b1';
export const setCurrentLevel = (l: Level) => { current = l; };
export const currentLevel = () => current;

export const levelOf = (s?: ExamSet | null): Level => ((s as { level?: Level } | null | undefined)?.level ?? 'b1');
export const diagnoseFor = (l: Level = current): TestDef => DIAG[l];
/** Attempt ref of the free diagnostic: "diagnose" (B1, kept for old rows) or "diagnose-a2". */
export const diagRef = (l: Level = current) => (l === 'b1' ? 'diagnose' : `diagnose-${l}`);
export const levelOfDiagRef = (ref: string): Level => (ref.startsWith('diagnose-') ? (ref.slice(9) as Level) : 'b1');
export const ownMocks = (l: Level = current): TestDef[] => MOCKS[l] ?? [];
export const allOwnMocks = (): TestDef[] => Object.values(MOCKS).flat();

/** Teil info (name, minutes, tips) for a level. */
export function teilInfo(module: string, teil: number | string, l: Level = current): TeilInfo | undefined {
  const t = TIPS[l]?.[module as Module]?.[String(teil)];
  if (t && l === 'b1' && !t.tips_en) return { ...t, tips_en: TIPS_EN[`${module}-${teil}`] };
  return t;
}
export const teilInfoOf = (s: ExamSet) => teilInfo(s.module, s.teil, levelOf(s));

export const traps = (b1Tips as unknown as TipFile).traps!;
/** Trap label for a module, falling back to the other module's list. */
export const trapLabel = (module: string, k?: string): [string, string] | undefined =>
  k ? (traps[module as 'hoeren' | 'lesen']?.[k] ?? traps.lesen[k] ?? traps.hoeren[k]) : undefined;

export const MODULES: { id: Module; name: string; en: string; hue: string; live: boolean }[] = [
  { id: 'hoeren', name: 'Hören', en: 'Listening', hue: 'sky', live: true },
  { id: 'lesen', name: 'Lesen', en: 'Reading', hue: 'mint', live: true },
  { id: 'schreiben', name: 'Schreiben', en: 'Writing', hue: 'peach', live: true },
  { id: 'sprechen', name: 'Sprechen', en: 'Speaking, coming soon', hue: 'rose', live: false },
];
export const LIVE_MODULES: Module[] = MODULES.filter((m) => m.live).map((m) => m.id);
export const modName = (m: string) => MODULES.find((x) => x.id === m)?.name ?? m;

/** Display name of one set: "Hören Teil 2 · Durchsagen" or "Schreiben Teil 1". */
export function setLabel(s?: ExamSet): string {
  if (!s) return '';
  if (s.module === 'schreiben') return `Schreiben Teil ${s.teil}`;
  return teilInfoOf(s)?.name ?? `Teil ${s.teil}`;
}

/** Licensed full mocks live in public/licensed/mocks.json. */
export interface Licensed { tests: (TestDef & { hidden?: boolean })[]; sets: Record<string, ExamSet> }
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

/** A full mock test by id: own mocks of any level or licensed. */
export const findMock = (id: string, lic?: Licensed | null): TestDef | undefined =>
  id.startsWith('diag-') && DIAG[id.slice(5) as Level] ? DIAG[id.slice(5) as Level]
    : allOwnMocks().find((t) => t.id === id) ?? lic?.tests.find((t) => t.id === id);

const WRITE_MIN: Record<number, number> = { 1: 20, 2: 25, 3: 15 };
/** Exam minutes for one set, from the Goethe timing per Teil. */
export function setMinutes(s: ExamSet): number {
  if (s.module === 'schreiben') {
    const m = s.tasks?.[0]?.minutes ?? teilInfoOf(s)?.mins;
    return m ?? WRITE_MIN[s.teil] ?? 15;
  }
  const t = teilInfoOf(s);
  if (!t) return 10;
  const n = s.groups.reduce((a, g) => a + g.items.length, 0);
  return Math.max(3, Math.round((t.mins * n) / t.items));
}

/** Test for one block day. Test days and mocks get a countdown, practice days do not. */
export function dayTest(block: Block, index: number, lic: Licensed | null): TestDef | null {
  const day = block.content.days[index];
  if (!day) return null;
  const mock = day.sets.find((s) => s.startsWith('mock:'));
  if (mock) return findMock(mock.slice(5), lic) ?? null;
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
