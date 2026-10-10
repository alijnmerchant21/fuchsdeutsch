// Course content is plain data. A new level (A1 to C2) is a new Course object,
// a new chapter is a new Chapter object. No UI code changes needed.

export type Tone = 'butter' | 'mint' | 'sky' | 'lilac' | 'rose' | 'peach';

/** Rich text: paragraphs split by blank lines, **bold**, and [[Wort]] or [[shown|key]] for glossary terms. */
export type Rich = string;

export interface GlossaryEntry {
  /** Explanation in simple German (advanced mode, also shown in easy mode). */
  de: string;
  /** English explanation (easy mode only). */
  en: string;
  /** Optional example sentence. */
  ex?: string;
}

export interface Speaker {
  id: string;
  name: string;
  /** Shown to the learner, e.g. "Wien, Österreich". */
  origin: string;
  /** Dialect or style label, e.g. "Wienerisch". */
  style: string;
  /** Browser speech fallback settings. */
  lang: 'de-DE' | 'de-AT' | 'de-CH';
  pitch: number;
  rate: number;
  /** ElevenLabs voice id, filled in before running `npm run audio`. */
  voiceId?: string;
}

export interface AudioLine {
  speaker: string;
  text: string;
}

interface Base {
  id: string;
  /** Task instruction in simple German. */
  task?: string;
  /** English version of the instruction, shown in easy mode. */
  taskEn?: string;
}

export interface TextBlock extends Base { t: 'text'; title?: string; kicker?: string; body: Rich; /** English note, easy mode only. */ en?: string }
/** Opens a chapter: what it is about and what you will be able to do afterwards. */
export interface OverviewBlock extends Base { t: 'overview'; title: string; body: Rich; en?: string; learn: string[] }
export interface AudioBlock extends Base { t: 'audio'; title: string; lines: AudioLine[]; note?: Rich }
export interface GrammarBlock extends Base {
  t: 'grammar';
  title: string;
  intro?: Rich;
  head?: string[];
  rows?: string[][];
  notes?: Rich[];
  /** English summary, easy mode only. */
  en?: string;
}
export interface PhrasesBlock extends Base { t: 'phrases'; title: string; groups: { label: string; items: string[] }[] }
export interface TipBlock extends Base { t: 'tip'; title: string; body: Rich }
export interface VideoBlock extends Base { t: 'video'; title: string; source: string; url: string | null }
export interface PollBlock extends Base { t: 'poll'; pairs: [string, string][] }
export interface ChecklistBlock extends Base { t: 'checklist'; items: string[] }
export interface CardsBlock extends Base { t: 'cards'; cards: { front: string; back: string; en: string }[] }

// Graded exercises
export interface McqBlock extends Base { t: 'mcq'; q: Rich; options: string[]; answer: number; why?: string }
export interface GapBlock extends Base {
  t: 'gap';
  /** Use {{answer}} or {{answer|alternative}} for each gap. One sentence per array item. */
  lines: string[];
  /** Optional word bank shown above the gaps. */
  bank?: string[];
}
export interface MatchBlock extends Base { t: 'match'; pairs: [string, string][] }
export interface OrderBlock extends Base { t: 'order'; words: string[]; answers: string[]; hint?: string }
export interface SortBlock extends Base { t: 'sort'; cats: string[]; items: { text: string; cat: number }[] }
export interface WriteBlock extends Base { t: 'write'; prompt: Rich; minWords: number; hints?: string[]; sample: string }

/**
 * Guided writing that can be checked: the learner builds a short text sentence by sentence.
 * `words` are listed in the correct order and shuffled on screen.
 */
export interface ComposeBlock extends Base { t: 'compose'; prompt: Rich; steps: { say: string; sayEn?: string; words: string[] }[] }

export type Exercise = McqBlock | GapBlock | MatchBlock | OrderBlock | SortBlock | WriteBlock | ComposeBlock;
export type Block =
  | TextBlock | OverviewBlock | AudioBlock | GrammarBlock | PhrasesBlock | TipBlock | VideoBlock
  | PollBlock | ChecklistBlock | CardsBlock | Exercise;

export type SectionKind = 'einstieg' | 'modul' | 'kommunikation' | 'grammatik' | 'uebung' | 'wortschatz';

export interface Section {
  id: string;
  kind: SectionKind;
  label: string;
  title: string;
  goals: string[];
  minutes: number;
  tone: Tone;
  blocks: Block[];
}

export interface ExamItem {
  /** Optional shared stimulus shown above the question. */
  stimulus?: TextBlock | AudioBlock;
  q: McqBlock | GapBlock | OrderBlock;
  points: number;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  theme: string;
  grammar: string;
  /** Empty sections means the chapter is announced but not written yet. */
  sections: Section[];
  exam: ExamItem[];
  games: string[];
}

/** A mini game. Four engines, each fed with chapter-specific data. */
interface GameBase { id: string; title: string; blurb: string; skill: string; tone: Tone; chapter: number; emoji: string; rules: string }
export type GameDef = GameBase & (
  | { engine: 'sprint'; label: string; items: { q: string; sub?: string; a: string; wrong: string[] }[] }
  | { engine: 'memory'; kinds: [string, string]; pairs: [string, string][] }
  | { engine: 'satzbau'; sentences: { parts: string[]; hint: string }[] }
  | { engine: 'regen'; buckets: [string, string, string]; words: [string, 0 | 1 | 2][] }
);

export interface Course {
  id: string;
  level: string;
  title: string;
  blurb: string;
  weeks: number;
  chapters: Chapter[];
}

export const isExercise = (b: Block): b is Exercise =>
  b.t === 'mcq' || b.t === 'gap' || b.t === 'match' || b.t === 'order' || b.t === 'sort' || b.t === 'write' || b.t === 'compose';
