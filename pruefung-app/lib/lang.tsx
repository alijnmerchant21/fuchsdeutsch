'use client';
/* Language settings.
   Before sign-in: the whole page in German or English (DE | EN switch).
   After sign-in: the app stays German, "English help" adds English lines under instructions,
   tips and hints. The questions themselves are never translated. */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Lang = 'de' | 'en';
interface LangCtx { lang: Lang; setLang: (l: Lang) => void; help: boolean; setHelp: (h: boolean) => void }
const Ctx = createContext<LangCtx>({ lang: 'de', setLang: () => {}, help: true, setHelp: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setL] = useState<Lang>('de');
  const [help, setH] = useState(true);
  useEffect(() => {
    try {
      const l = localStorage.getItem('fdp:lang'); if (l === 'en' || l === 'de') setL(l);
      const h = localStorage.getItem('fdp:help'); if (h === '0') setH(false);
    } catch { /* ignore */ }
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const setLang = (l: Lang) => { setL(l); try { localStorage.setItem('fdp:lang', l); } catch { /* ignore */ } };
  const setHelp = (h: boolean) => { setH(h); try { localStorage.setItem('fdp:help', h ? '1' : '0'); } catch { /* ignore */ } };
  return <Ctx.Provider value={{ lang, setLang, help, setHelp }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

/** Pick German or English for pages shown before sign-in. */
export function useT() {
  const { lang } = useLang();
  return (de: string, en: string) => (lang === 'en' ? en : de);
}

/** English help line, shown only when English help is on. */
export function En({ children, as: Tag = 'span', block }: { children: ReactNode; as?: 'span' | 'p' | 'div'; block?: boolean }) {
  const { help } = useLang();
  if (!help || !children) return null;
  return <Tag className={`en help ${block ? 'line' : ''}`}>{children}</Tag>;
}

/* ---------- English for exam instructions and strategy tips (not for questions) ---------- */

export const INSTR_EN: Record<string, string> = {
  'hoeren-1': 'Short texts (messages, announcements, radio). Each text plays twice. Two tasks per text: true/false and a, b or c.',
  'hoeren-2': 'One longer talk (a guide or a lecture). It plays only once. Choose a, b or c.',
  'hoeren-3': 'A conversation between two people. It plays only once. Decide: true (Richtig) or false (Falsch)?',
  'hoeren-4': 'A radio discussion with a host and two guests. It plays twice. Who says what? Choose a, b or c.',
  'lesen-1': 'Read the text (a blog or a personal post). Decide for each statement: true (Richtig) or false (Falsch)?',
  'lesen-2': 'Read the newspaper text(s). Choose the right answer: a, b or c.',
  'lesen-3': 'Read the situations and the ads. Which ad fits which situation? Each ad only once. One situation has no ad: choose 0.',
  'lesen-4': 'Read the comments. For each person: are they in favor (Ja) or against (Nein)?',
  'lesen-5': 'Read the rules or information. Choose the right answer: a, b or c.',
  'schreiben-1': 'Write an email to a friend, about 80 words. Cover all three points.',
  'schreiben-2': 'Write your opinion for an online forum, about 80 words.',
  'schreiben-3': 'Write a short polite message, about 40 words. Use a formal greeting (Sie) and closing.',
};

export const TIPS_EN: Record<string, string[]> = {
  'hoeren-1': [
    'Before listening: read both tasks and mark the key word (time, place, number, day).',
    'Answer during the first play, only check during the second.',
    'You often hear all the numbers or places from the answers. Only one fits the question.',
    'In announcements the important change comes after "Bitte beachten Sie" or "nicht … sondern".',
  ],
  'hoeren-2': [
    'You hear the text only once. Read all 5 tasks first.',
    'The tasks come in the same order as the text.',
    'Missed one? Jump straight to the next task, do not get stuck.',
    'Watch out for eigentlich, ursprünglich, aber, leider: this is where the plan changes.',
  ],
  'hoeren-3': [
    'You hear the conversation only once. Read all 7 statements first.',
    'Look at the name in the statement: who said or did it?',
    'False often means: it is about the other person, or it is only a plan.',
    'True is almost always said with different words.',
  ],
  'hoeren-4': [
    'Before listening: remember the guests’ names and roles (who is for, who is skeptical).',
    'You hear the discussion twice. First play: answer. Second play: check.',
    'The host usually gets only one statement, often a number or a survey.',
    'The statements use different words for what was said. Listen for the idea, not single words.',
    'The statements are not always in the order of the conversation. Missed one? Move on and fill it in on the second play.',
    'Someone who only agrees ("Da haben Sie recht", "Genau") did not make the statement. It belongs to the person who says it first.',
  ],
  'lesen-1': [
    'The statements follow the order of the text. Read a statement, then find the matching place.',
    'True is almost never written with the same words. abschalten = relax, nicht teuer = cheap.',
    'False usually means one detail is different. Who? When? How much? not / never / not yet?',
    'Watch out for before / now / soon: what was, what is, what is only a plan?',
  ],
  'lesen-2': [
    'Read the question first (not the answers). Then find the place in the text.',
    'Read the whole sentence and the sentence after it. Often an "aber" or "doch" comes there.',
    'The answer with exactly the same words as the text is often the trap.',
    'For "Was steht im Text?": check each answer on its own and cross out two.',
  ],
  'lesen-3': [
    'First read only the 7 situations and mark 1 to 2 must-haves in each: who, when, what, how much.',
    'An ad only fits if all must-haves fit. One wrong detail = no match.',
    'Each ad is used only once. Exactly one situation gets 0.',
    'Same topic does not mean it fits: one photo course is not the same as another.',
  ],
  'lesen-4': [
    'The question is always: is the person IN FAVOR? Not: is the text true?',
    'The first sentence is often someone else’s opinion ("Viele sagen …", "Mein Enkel meint …").',
    'Signal words for the turn: aber, trotzdem, doch, ich sehe das anders, inzwischen.',
    'The last sentence almost always shows their own opinion. Read it twice.',
  ],
  'lesen-5': [
    'The headings in the text show you where the answer is.',
    'Watch the conditions: wenn, nur, erst, bis, spätestens, mindestens.',
    'Read numbers exactly: 10 days before the course is not 14 days before the course.',
    'An answer with a word from the text can still belong to a different rule.',
  ],
};
