import { bank, dayTest, diagnoseFor, findMock, levelOfDiagRef, loadLicensed } from './content';
import type { Attempt, Block, ExamSet, TestDef } from './types';

/** The test and all sets an attempt was made with. */
export async function resolveAttempt(a: Attempt, blocks: Block[]): Promise<{ test: TestDef; sets: Record<string, ExamSet> } | null> {
  const lic = await loadLicensed();
  const sets: Record<string, ExamSet> = { ...lic.sets, ...bank };
  if (a.kind === 'diagnose') return { test: diagnoseFor(levelOfDiagRef(a.ref)), sets };
  if (a.kind === 'mock') { const t = findMock(a.ref, lic); return t ? { test: t, sets } : null; }
  const [blockId, idx] = a.ref.split(':');
  const block = blocks.find((b) => b.id === blockId);
  if (!block) return null;
  for (const s of block.content.sets ?? []) sets[s.id] = s;
  const test = dayTest(block, Number(idx), lic);
  return test ? { test, sets } : null;
}

export async function resolveDay(block: Block, idx: number) {
  const lic = await loadLicensed();
  const sets: Record<string, ExamSet> = { ...lic.sets, ...bank };
  for (const s of block.content.sets ?? []) sets[s.id] = s;
  return { test: dayTest(block, idx, lic), sets };
}
