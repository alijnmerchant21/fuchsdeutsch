import type { Block, Section } from '@/content/types';
import { isExercise } from '@/content/types';

/**
 * Splits a section's flat block list into a few calm steps, without touching the content.
 *  - A text, audio or overview block opens a "Lesen" / "Hören" step. The exercises after it are its questions.
 *  - Grammar, tip and phrase blocks open a "Regel" step. The exercises after it practice that rule.
 *  - Polls, checklists and flash cards are ungraded and simply join the current step.
 * Each step is shown as screens: first the lead (what to read, hear or learn), then one task at a time.
 */
export type StepKind = 'intro' | 'read' | 'listen' | 'rule' | 'practice';

export interface Step {
  kind: StepKind;
  title: string;
  /** What the learner reads, hears or learns first. Empty for a pure practice step. */
  leads: Block[];
  /** One screen each, after the lead. */
  items: Block[];
}

const LEAD_STIMULUS = new Set(['text', 'audio', 'overview', 'video']);
const LEAD_RULE = new Set(['grammar', 'tip', 'phrases']);

const stripMd = (s: string) => s.replace(/\*\*|\*/g, '').replace(/\[\[([^|\]]+)\|?[^\]]*\]\]/g, '$1');

function leadTitle(b: Block): string {
  switch (b.t) {
    case 'text': return stripMd(b.title || b.kicker || 'Lesen');
    case 'overview': return stripMd(b.title);
    case 'audio': return stripMd(b.title.replace(/^Hören:\s*/i, ''));
    case 'video': return stripMd(b.title);
    case 'grammar': case 'tip': case 'phrases': return stripMd(b.title);
    default: return '';
  }
}

export function buildSteps(sec: Section): Step[] {
  const steps: Step[] = [];
  let cur: Step | null = null;

  const open = (kind: StepKind, lead?: Block) => {
    cur = { kind, title: lead ? leadTitle(lead) : 'Üben', leads: lead ? [lead] : [], items: [] };
    steps.push(cur);
  };

  for (const b of sec.blocks) {
    if (LEAD_STIMULUS.has(b.t)) {
      open(b.t === 'audio' ? 'listen' : b.t === 'overview' ? 'intro' : 'read', b);
    } else if (LEAD_RULE.has(b.t)) {
      // Back-to-back rule blocks (a grammar table and its tip) belong together.
      const c = cur as Step | null;
      if (c && c.kind === 'rule' && c.items.length === 0) c.leads.push(b);
      else open('rule', b);
    } else {
      if (!cur) open('practice');
      (cur as unknown as Step).items.push(b);
    }
  }
  return steps;
}

export const KIND_LABEL: Record<StepKind, string> = {
  intro: 'Einstieg',
  read: 'Lesen',
  listen: 'Hören',
  rule: 'Regel',
  practice: 'Üben',
};

/** Short line under each step in the rail and in the preview. */
export function stepHint(s: Step): string {
  const n = s.items.filter(isExercise).length;
  const tasks = n === 0 ? '' : n === 1 ? '1 Aufgabe' : `${n} Aufgaben`;
  if (s.kind === 'rule') return tasks ? `Regel + ${tasks}` : 'Regel';
  if (s.kind === 'listen') return tasks ? `Hören + ${tasks}` : 'Hören';
  if (s.kind === 'read') return tasks ? `Text + ${tasks}` : 'Text';
  if (s.kind === 'intro') return tasks ? `Überblick + ${tasks}` : 'Überblick';
  return tasks || 'Üben';
}

/** What the learner should do on a lead screen. */
export function leadInstruction(kind: StepKind): { de: string; en: string } {
  switch (kind) {
    case 'intro': return { de: 'Lies, worum es geht. Danach startest du.', en: 'Read what this is about. Then you start.' };
    case 'read': return { de: 'Lies den Text in Ruhe. Tippe auf unterstrichene Wörter, wenn du sie nicht kennst.', en: 'Read the text calmly. Tap underlined words you do not know.' };
    case 'listen': return { de: 'Hör zu. Du kannst so oft hören, wie du willst.', en: 'Listen. You can play it as often as you like.' };
    case 'rule': return { de: 'Schau dir die Regel an. Gleich übst du sie.', en: 'Look at the rule. You will practice it next.' };
    default: return { de: 'Löse die Aufgaben nacheinander.', en: 'Solve the tasks one by one.' };
  }
}

export const screensOf = (s: Step) => (s.leads.length ? 1 : 0) + s.items.length;
