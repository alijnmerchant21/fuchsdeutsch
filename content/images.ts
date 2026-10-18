// All course pictures in one place. `npm run images` reads allImageSpecs(); the site reads SCENES, VOCAB and CAST.
import { CAST, CAST_BY_COURSE, ICON_STYLE, SCENES as SCENES_A1, STYLE, VOCAB as VOCAB_A1, vocabId, type ImageSpec } from './a1/images';
import { SCENES_A2, VOCAB_A2 } from './a2/images';
import { SCENES_B1, VOCAB_B1 } from './b1/images';
import { SCENES_B21, VOCAB_B21 } from './b2/media';

export { CAST, vocabId };
export type { ImageSpec };

export const SCENES: Record<string, { id: string; prompt: string }> = { ...SCENES_A1, ...SCENES_A2, ...SCENES_B1, ...SCENES_B21 };
export const VOCAB: Record<string, string> = { ...VOCAB_A1, ...VOCAB_A2, ...VOCAB_B1, ...VOCAB_B21 };

/** Which course a picture belongs to, for `npm run images -- --course a2`. */
export const SCENES_BY_COURSE: Record<string, Record<string, { id: string; prompt: string }>> = { a1: SCENES_A1, a2: SCENES_A2, b1: SCENES_B1, 'b2-1': SCENES_B21 };
export const VOCAB_BY_COURSE: Record<string, Record<string, string>> = { a1: VOCAB_A1, a2: VOCAB_A2, b1: VOCAB_B1, 'b2-1': VOCAB_B21 };

/** Everything `npm run images` makes, with the full prompt. A word in both courses is one picture. */
export function allImageSpecs(course?: string): (ImageSpec & { course: string })[] {
  const out: (ImageSpec & { course: string })[] = [];
  const seen = new Set<string>();
  const add = (s: ImageSpec, c: string) => { if (!seen.has(s.id)) { seen.add(s.id); out.push({ ...s, course: c }); } };
  // Course by course, so A1 is complete before A2 starts when the daily quota runs out.
  for (const c of Object.keys(SCENES_BY_COURSE)) {
    if (course && course !== c) continue;
    for (const id of CAST_BY_COURSE[c] || []) { const p = CAST[id]; add({ id: `cast-${id}`, kind: 'cast', prompt: `portrait from the waist up, facing the viewer, friendly expression: ${p.look}. ${STYLE}` }, c); }
    for (const s of Object.values(SCENES_BY_COURSE[c])) {
      if (!s.prompt) continue;
      add({ id: s.id, kind: 'scene', prompt: `${s.prompt}. Wide scene, main subjects in the middle third, calm empty space at the top and bottom. ${STYLE}` }, c);
    }
    for (const [word, what] of Object.entries(VOCAB_BY_COURSE[c] || {})) add({ id: vocabId(word), kind: 'vocab', prompt: `${what}. ${ICON_STYLE}` }, c);
  }
  return out;
}
