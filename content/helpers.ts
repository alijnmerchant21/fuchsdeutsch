// Short builders so chapter files read like a script, not like JSON.
import type {
  AudioBlock, CardsBlock, ChecklistBlock, ComposeBlock, ExamItem, GapBlock, GrammarBlock, MatchBlock, McqBlock,
  OrderBlock, OverviewBlock, PhrasesBlock, PollBlock, SortBlock, TextBlock, TipBlock,
} from './types';

interface Task { task?: string; taskEn?: string }

export const overview = (id: string, title: string, body: string, en: string, learn: string[]): OverviewBlock =>
  ({ t: 'overview', id, title, body, en, learn });

export const text = (id: string, body: string, o: Task & { title?: string; kicker?: string; en?: string } = {}): TextBlock =>
  ({ t: 'text', id, body, ...o });

/** lines: [speakerId, sentence] */
export const audio = (id: string, title: string, lines: [string, string][], o: Task & { note?: string } = {}): AudioBlock =>
  ({ t: 'audio', id, title, lines: lines.map(([speaker, t]) => ({ speaker, text: t })), ...o });

export const mcq = (id: string, q: string, options: string[], answer: number, o: Task & { why?: string } = {}): McqBlock =>
  ({ t: 'mcq', id, q, options, answer, ...o });

/** lines use {{answer}} or {{answer|alternative}} */
export const gap = (id: string, lines: string[], o: Task & { bank?: string[] } = {}): GapBlock =>
  ({ t: 'gap', id, lines, ...o });

export const match = (id: string, pairs: [string, string][], o: Task = {}): MatchBlock => ({ t: 'match', id, pairs, ...o });

/** words are given in the correct order and shuffled on screen */
export const order = (id: string, words: string[], o: Task & { hint?: string } = {}): OrderBlock =>
  ({ t: 'order', id, words, answers: [words.join(' ')], ...o });

/** items: [text, index of category] */
export const sort = (id: string, cats: string[], items: [string, number][], o: Task = {}): SortBlock =>
  ({ t: 'sort', id, cats, items: items.map(([t, cat]) => ({ text: t, cat })), ...o });

/** steps: [what to say, English hint, parts in the correct order] */
export const compose = (id: string, prompt: string, steps: [string, string, string[]][], o: Task = {}): ComposeBlock =>
  ({ t: 'compose', id, prompt, steps: steps.map(([say, sayEn, words]) => ({ say, sayEn, words })), ...o });

export const grammar = (id: string, title: string, o: { intro?: string; head?: string[]; rows?: string[][]; notes?: string[]; en?: string }): GrammarBlock =>
  ({ t: 'grammar', id, title, ...o });

export const phrases = (id: string, title: string, groups: Record<string, string[]>): PhrasesBlock =>
  ({ t: 'phrases', id, title, groups: Object.entries(groups).map(([label, items]) => ({ label, items })) });

export const tip = (id: string, title: string, body: string): TipBlock => ({ t: 'tip', id, title, body });

export const poll = (id: string, pairs: [string, string][], o: Task = {}): PollBlock => ({ t: 'poll', id, pairs, ...o });

/** cards: [front, simple German, English] */
export const cards = (id: string, list: [string, string, string][], o: Task = {}): CardsBlock =>
  ({ t: 'cards', id, cards: list.map(([front, back, en]) => ({ front, back, en })), task: 'Dreh die Karten um. Kennst du das Wort?', taskEn: 'Flip the cards. Do you know the word?', ...o });

export const checklist = (id: string, items: string[]): ChecklistBlock =>
  ({ t: 'checklist', id, items, task: 'Sei ehrlich: Was kannst du schon?', taskEn: 'Be honest: tick what you can already do. Unticked items are your review list.' });

/** exam item */
export const x = (points: number, q: McqBlock | GapBlock | OrderBlock, stimulus?: TextBlock | AudioBlock): ExamItem => ({ points, q, stimulus });

import type { Block, Section, SectionKind, Tone } from './types';

export const section = (id: string, kind: SectionKind, label: string, title: string, tone: Tone, minutes: number, goals: string[], blocks: Block[]): Section =>
  ({ id, kind, label, title, tone, minutes, goals, blocks });

/** The article game is the same in every chapter: der, die or das? */
export const artikel = (words: string): [string, 0 | 1 | 2][] =>
  words.trim().split(/\s*,\s*/).map((w) => {
    const [art, noun] = w.split(' ');
    return [noun, (['der', 'die', 'das'].indexOf(art)) as 0 | 1 | 2];
  });

import type { Chapter } from './types';

/** Audio files are named after the block id, so prefix every listening text with its chapter id.
 *  That keeps file names unique across all chapters and courses. */
export const scopeAudio = (ch: Chapter): Chapter => {
  const scope = <T extends { t: string; id: string }>(b: T): T => (b.t === 'audio' && !b.id.startsWith(ch.id) ? { ...b, id: `${ch.id}-${b.id}` } : b);
  return {
    ...ch,
    sections: ch.sections.map((s) => ({ ...s, blocks: s.blocks.map(scope) })),
    exam: ch.exam.map((it) => (it.stimulus ? { ...it, stimulus: scope(it.stimulus) } : it)),
  };
};
