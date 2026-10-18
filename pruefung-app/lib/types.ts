/* Content and data shapes. One format for own items, Cornelsen mocks and blocks Claude writes. */

export type Module = 'hoeren' | 'lesen' | 'schreiben' | 'sprechen';

/** rf = Richtig/Falsch, abc = a/b/c, who = wer sagt was (a/b/c from set.who), ad = Anzeige a-j or 0, jn = Ja/Nein */
export type ItemType = 'rf' | 'abc' | 'who' | 'ad' | 'jn';

export interface Item {
  n: number;
  type: ItemType;
  q?: string;
  opts?: string[];
  /** correct answer: r|f, a|b|c, ad letter or "0", ja|nein */
  a: string;
  trap?: string;
  /** exact sentence in text or script that proves the answer */
  ev?: string;
  /** short explanation shown after checking */
  why?: string;
}

export interface Group {
  title?: string;
  /** reading text (Lesen) */
  body?: string;
  /** audio file under /public, e.g. "audio/own/hd-b3.mp3" */
  audio?: string;
  /** how often the recording plays in the exam */
  plays?: number;
  /** transcript lines: [speaker code, text] */
  script?: [string, string][];
  items: Item[];
}

export interface Ad { k: string; title: string; body: string }

export interface WritingTask {
  id: string;
  /** Goethe B1: Aufgabe 1 email to friend (~80 words), 2 forum opinion (~80), 3 polite message (~40) */
  aufgabe: 1 | 2 | 3;
  situation: string;
  points: string[];
  words: number;
  /** points the task is worth in the module (40, 40, 20) */
  max: number;
}

export interface ExamSet {
  id: string;
  module: Module;
  teil: number;
  title?: string;
  instr: string;
  topic?: string;
  source: 'own' | 'licensed';
  /** Hören Teil 4: names of the three speakers for a/b/c */
  who?: string[];
  speakers?: Record<string, string>;
  ads?: Ad[];
  groups: Group[];
  tasks?: WritingTask[];
}

export interface Section {
  module: Module;
  title: string;
  minutes: number;
  sets: string[];
}

/** A runnable test: the diagnostic, a block day, a full mock. */
export interface TestDef {
  id: string;
  title: string;
  en?: string;
  sections: Section[];
}

/* ---------- Blocks (written by Claude, uploaded by admin) ---------- */

export interface BlockDay {
  date: string; // YYYY-MM-DD
  title: string;
  en?: string;
  /** set ids: from the bank, from block.sets, or "mock:<id>" for a full mock */
  sets: string[];
  /** short exam tips, never teaching */
  tips?: string[];
  /** true for the block test at the end */
  test?: boolean;
}

export interface BlockContent {
  title: string;
  focus: string[]; // e.g. ["hoeren-4", "lesen-3"]
  note?: string;
  days: BlockDay[];
  /** new items written for this candidate */
  sets?: ExamSet[];
}

/* ---------- Data rows ---------- */

export interface Candidate {
  user_id: string;
  email: string;
  name: string;
  exam_date: string;
  /** weekdays 0 = Sunday … 6 = Saturday */
  study_days: number[];
  minutes_per_day: number;
  modules: Module[];
  /** Goethe-Institut or exam center, optional */
  exam_center?: string | null;
  first_language?: string | null;
  /** first try, retake of some modules, or not booked yet */
  attempt_type?: 'erst' | 'wiederholung' | 'offen' | null;
  /** modules the admin unlocked (paid or free beta) */
  unlocked: Module[];
  /** first time a module was unlocked (= plan bought), for the guarantee */
  unlocked_at?: string | null;
  created_at: string;
}

export type Answers = Record<string, Record<string, string>>; // setId -> n -> answer
/** setId -> n -> 's' (sicher) | 'g' (geraten) */
export type Conf = Record<string, Record<string, 's' | 'g'>>;
export type Scores = Record<string, { right: number; total: number }>; // "hoeren-1" -> score

export interface Feedback {
  [taskId: string]: { score: number; max: number; comment: string };
}

export interface Attempt {
  id: string;
  user_id: string;
  kind: 'diagnose' | 'block' | 'mock';
  /** "diagnose" or "<blockId>:<dayIndex>" */
  ref: string;
  block_id?: string | null;
  answers: Answers;
  conf?: Conf;
  writing: Record<string, string>;
  scores: Scores;
  feedback?: Feedback | null;
  started_at: string;
  finished_at: string;
}

export interface Block {
  id: string;
  user_id: string;
  seq: number;
  starts_on: string;
  ends_on: string;
  content: BlockContent;
  created_at: string;
}

/* ---------- Pass guarantee ("free until you pass") ---------- */

export type ClaimStatus = 'pending' | 'approved' | 'rejected';

export interface Claim {
  id: string;
  user_id: string;
  /** date the candidate took the Goethe exam */
  exam_taken_on: string;
  /** date the official result arrived */
  result_received_on: string;
  /** module -> passed? */
  results: Partial<Record<Module, boolean>>;
  /** next exam date, if known */
  next_exam_date?: string | null;
  /** storage path (Supabase) or data URL (demo) of the uploaded result */
  file_path: string;
  file_name: string;
  status: ClaimStatus;
  admin_note?: string | null;
  /** voucher runs until this date for the failed modules */
  voucher_until?: string | null;
  voucher_modules?: Module[] | null;
  created_at: string;
  decided_at?: string | null;
}
