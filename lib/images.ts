'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import type { Block } from '@/content/types';
import { CAST, SCENES, VOCAB, vocabId } from '@/content/images';

// Pictures live in public/images/<file> and are listed in public/images/manifest.json (made by `npm run images`).
// A picture only shows once it is in the manifest, so the course works the same without them.

let loading: Promise<Record<string, string>> | null = null;
let cache: Record<string, string> | null = null;

function load(): Promise<Record<string, string>> {
  if (!loading) {
    loading = fetch('/images/manifest.json')
      .then((r) => (r.ok ? (r.json() as Promise<Record<string, string>>) : {}))
      .catch(() => ({}))
      .then((m) => { cache = m; return m; });
  }
  return loading;
}

export function useImages(): Record<string, string> {
  const [m, setM] = useState<Record<string, string>>(cache || {});
  useEffect(() => { if (!cache) void load().then(setM); }, []);
  return m;
}

export const imageSrc = (m: Record<string, string>, id: string | undefined) => (id && m[id] ? `/images/${m[id]}` : null);

/** The chapter a block belongs to, so pictures and diagrams can be looked up by "<chapter>/<block>". */
export const ChapterContext = createContext<string | null>(null);
export const useChapter = () => useContext(ChapterContext);

/** Scene picture id for a reading, listening or overview block. */
export function sceneId(chapterId: string | null, b: Block): string | undefined {
  if (b.t === 'audio') return SCENES[b.id]?.id;
  if (!chapterId) return undefined;
  return SCENES[`${chapterId}/${b.id}`]?.id;
}

export const vocabImageId = (word: string) => (VOCAB[word] ? vocabId(word) : undefined);
export const castImageId = (speaker: string) => (CAST[speaker] ? `cast-${speaker}` : undefined);
export { CAST };
