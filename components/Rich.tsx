'use client';
import { createContext, Fragment, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { glossary as defaultGlossary, termLabel } from '@/content/glossary';
import type { GlossaryEntry } from '@/content/types';

/** Which word list the current page explains words from (set per course). */
export const GlossaryContext = createContext<Record<string, GlossaryEntry>>(defaultGlossary);
import { useStore } from '@/lib/store';
import { speakWord } from '@/lib/audio';

/** A word with an explanation. Easy mode: German + English. Advanced mode: German only. */
export function Term({ shown, entryKey }: { shown: string; entryKey: string }) {
  const { progress } = useStore();
  const glossary = useContext(GlossaryContext);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const entry = glossary[entryKey];

  useEffect(() => {
    if (!open) return;
    const close = (e: Event) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', esc); };
  }, [open]);

  if (!entry) return <>{shown}</>;
  return (
    <span className="term" ref={ref}>
      <button type="button" className="term-word" aria-expanded={open} onClick={() => setOpen((o) => !o)}>{shown}</button>
      {open && (
        <span className="term-pop" role="dialog" aria-label={`Erklärung: ${termLabel(entryKey)}`}>
          <span className="term-head">
            <strong>{termLabel(entryKey)}</strong>
            <button type="button" className="icon-btn" aria-label="Wort anhören" onClick={() => speakWord(termLabel(entryKey))}>🔊</button>
          </span>
          <span className="term-de">{entry.de}</span>
          {progress.mode === 'easy' && <span className="term-en">{entry.en}</span>}
          {entry.ex && <span className="term-ex">„{entry.ex}“</span>}
        </span>
      )}
    </span>
  );
}

function inline(text: string, keyBase: string, glossary: Record<string, GlossaryEntry>): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[\[([^\]]+)\]\]|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last = 0; let m: RegExpExecArray | null; let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const k = `${keyBase}-${i++}`;
    if (m[1]) {
      const [a, b] = m[1].split('|');
      // Accept [[shown|key]] and [[key|shown]].
      const key = b ? (glossary[b] ? b : a) : a;
      const shown = b ? (glossary[b] ? a : b) : a;
      // Keep punctuation right after the word on the same line.
      const punct = /^[.,;:!?“)]/.test(text.slice(re.lastIndex)) ? text[re.lastIndex] : '';
      out.push(punct ? <span key={k} className="nowrap"><Term shown={shown} entryKey={key} />{punct}</span> : <Term key={k} shown={shown} entryKey={key} />);
      if (punct) re.lastIndex += 1;
    } else if (m[2]) out.push(<strong key={k}>{m[2]}</strong>);
    else if (m[3]) out.push(<em key={k}>{m[3]}</em>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Inline({ text }: { text: string }) {
  const glossary = useContext(GlossaryContext);
  return <>{inline(text, 'i', glossary)}</>;
}

export function Rich({ text, className }: { text: string; className?: string }) {
  const glossary = useContext(GlossaryContext);
  return (
    <div className={className ? `rich ${className}` : 'rich'}>
      {text.split(/\n\n+/).map((p, i) => <p key={i}>{inline(p, `p${i}`, glossary)}</p>)}
    </div>
  );
}

/** Task instruction: German always, English underneath in easy mode. */
export function Task({ de, en }: { de?: string; en?: string }) {
  const { progress } = useStore();
  if (!de) return null;
  return (
    <div className="task">
      <p className="task-de">{de}</p>
      {progress.mode === 'easy' && en && <p className="task-en">{en}</p>}
    </div>
  );
}

export const Frag = Fragment;
