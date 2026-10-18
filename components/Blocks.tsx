'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import type {
  Block, CardsBlock, ChecklistBlock, ComposeBlock, GapBlock, GrammarBlock, MatchBlock, McqBlock, OrderBlock,
  PhrasesBlock, PollBlock, SortBlock, WriteBlock,
} from '@/content/types';
import { useStore } from '@/lib/store';
import { norm, shuffle, sparkle } from '@/lib/fx';
import { speakWord } from '@/lib/audio';
import { AudioPlayer } from './AudioPlayer';
import { De, useHints } from './Hint';
import { GrammarVisual } from './GrammarVisual';
import { VISUALS } from '@/content/visuals';
import { imageSrc, useChapter, useImages, vocabImageId } from '@/lib/images';
import { Inline, Rich, Task } from './Rich';

/**
 * Every exercise reports a score from 0 to 1.
 * learn mode: instant feedback, retry allowed. exam mode: no feedback until `reveal`.
 */
export interface ExProps<T> { b: T; exam?: boolean; reveal?: boolean; onScore: (score: number) => void }

const Mark = ({ ok }: { ok: boolean }) => <span className={`mark ${ok ? 'ok' : 'no'}`} aria-label={ok ? 'richtig' : 'falsch'}>{ok ? '✓' : '✕'}</span>;

/* ---------- Multiple choice ---------- */
export function Mcq({ b, exam, reveal, onScore }: ExProps<McqBlock>) {
  const [pick, setPick] = useState<number | null>(null);
  const [wrong, setWrong] = useState<number[]>([]);
  const solved = !exam && pick === b.answer;
  const choose = (i: number, e: React.MouseEvent) => {
    if (reveal || solved) return;
    setPick(i);
    if (exam) { onScore(i === b.answer ? 1 : 0); return; }
    if (i === b.answer) { onScore(1); sparkle(e.clientX / window.innerWidth, e.clientY / window.innerHeight); }
    else setWrong((w) => [...w, i]);
  };
  return (
    <div className="ex">
      <p className="ex-q"><Inline text={b.q} /></p>
      <div className="options" role="radiogroup">
        {b.options.map((o, i) => {
          const showRight = (solved || reveal) && i === b.answer;
          const showWrong = exam ? !!reveal && pick === i && i !== b.answer : wrong.includes(i);
          return (
            <button
              key={i} type="button" role="radio" aria-checked={pick === i}
              className={`option ${pick === i ? 'is-picked' : ''} ${showRight ? 'is-right' : ''} ${showWrong ? 'is-wrong' : ''}`}
              disabled={!!reveal || solved || (!exam && wrong.includes(i))}
              onClick={(e) => choose(i, e)}
            >
              <span className="dot" aria-hidden />
              <span>{o}</span>
              {showRight && <Mark ok />}{showWrong && <Mark ok={false} />}
            </button>
          );
        })}
      </div>
      {(solved || reveal) && b.why && <p className="why">{b.why}</p>}
    </div>
  );
}

/* ---------- Gap fill ---------- */
function parseGaps(lines: string[]) {
  let n = 0;
  return lines.map((line) => line.split(/(\{\{[^}]+\}\})/).filter(Boolean).map((part) => {
    const m = part.match(/^\{\{([^}]+)\}\}$/);
    return m ? { gap: n++, answers: m[1].split('|') } : { text: part };
  }));
}

export function Gap({ b, exam, reveal, onScore }: ExProps<GapBlock>) {
  const parsed = useMemo(() => parseGaps(b.lines), [b.lines]);
  const answers = useMemo(() => parsed.flat().filter((p) => 'gap' in p).map((p) => (p as { answers: string[] }).answers), [parsed]);
  const [vals, setVals] = useState<string[]>(() => answers.map(() => ''));
  const [checked, setChecked] = useState(false);
  const [tries, setTries] = useState(0);
  const [shown, setShown] = useState(false);
  const focus = useRef(0);
  const bank = useMemo(() => (b.bank ? shuffle(b.bank) : null), [b.bank]);
  const right = (i: number) => answers[i].some((a) => norm(a) === norm(vals[i]));
  const allRight = answers.every((_, i) => right(i));
  const show = checked || !!reveal;

  const set = (i: number, v: string) => {
    const next = vals.map((x, j) => (j === i ? v : x));
    setVals(next); setChecked(false);
    if (exam) onScore(answers.filter((a, j) => a.some((x) => norm(x) === norm(next[j]))).length / answers.length);
  };
  const check = () => { setChecked(true); setTries((t) => t + 1); if (allRight) { onScore(1); sparkle(0.5, 0.6); } };
  const solve = () => { setVals(answers.map((a) => a[0])); setShown(true); setChecked(true); onScore(1); };
  const fromBank = (w: string) => {
    const empty = vals[focus.current] === '' ? focus.current : vals.findIndex((v) => v === '');
    if (empty >= 0) { set(empty, w); focus.current = Math.min(empty + 1, vals.length - 1); }
  };
  const locked = !!reveal || (checked && allRight);

  return (
    <div className="ex">
      {bank && (
        <div className="bank" aria-label="Wortkasten">
          {bank.map((w) => (
            <button key={w} type="button" className={`chip ${vals.some((v) => norm(v) === norm(w)) ? 'is-used' : ''}`} disabled={locked} onClick={() => fromBank(w)}>{w}</button>
          ))}
        </div>
      )}
      <ol className="gap-lines">
        {parsed.map((parts, li) => (
          <li key={li}>
            {parts.map((p, pi) => 'gap' in p ? (
              <span key={pi} className="gap-wrap">
                <input
                  className={`gap ${show ? (right(p.gap!) ? 'is-right' : 'is-wrong') : ''}`}
                  style={{ width: `${Math.max(5, Math.max(...p.answers!.map((a) => a.length)) + 2)}ch` }}
                  value={vals[p.gap!]} disabled={locked} autoCapitalize="off" autoCorrect="off" spellCheck={false}
                  aria-label={`Lücke ${p.gap! + 1}`}
                  onFocus={() => { focus.current = p.gap!; }}
                  onChange={(e) => set(p.gap!, e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !exam) check(); }}
                />
                {reveal && !right(p.gap!) && <span className="gap-fix">{p.answers![0]}</span>}
              </span>
            ) : <span key={pi}>{p.text}</span>)}
          </li>
        ))}
      </ol>
      {!exam && (
        <div className="ex-actions">
          {!(checked && allRight) && <button type="button" className="btn btn-sm" onClick={check} disabled={vals.every((v) => !v)}><De en="Check" inline>Prüfen</De></button>}
          {checked && !allRight && <span className="hint-msg"><De en="Almost! Look at the red fields again.">Fast! Schau dir die roten Felder noch einmal an.</De></span>}
          {checked && allRight && <span className="ok-msg">{shown ? <De en="This is the answer. Read the sentences aloud once more.">Das ist die Lösung. Lies die Sätze noch einmal laut.</De> : <De en="Correct!" inline>Richtig!</De>}</span>}
          {tries >= 2 && !allRight && <button type="button" className="link-btn" onClick={solve}><De en="Show answer" inline>Lösung zeigen</De></button>}
        </div>
      )}
    </div>
  );
}

/* ---------- Matching ---------- */
const tones = ['mint', 'sky', 'lilac', 'butter', 'rose', 'peach'];
/** Shows a drawn picture instead of an emoji when the pair's word has one. */
function useMatchPictures(pairs: [string, string][]) {
  const m = useImages();
  return (text: string, i: number) => {
    const [a, c] = pairs[i];
    const word = text === a ? c : a;
    const src = imageSrc(m, vocabImageId(word));
    if (!src || !/\p{Extended_Pictographic}/u.test(text)) return text;
    return <img src={src} alt={text} className="match-pic" loading="lazy" />;
  };
}

export function Match({ b, onScore }: ExProps<MatchBlock>) {
  const pic = useMatchPictures(b.pairs);
  const rights = useMemo(() => shuffle(b.pairs.map((p, i) => ({ text: p[1], i }))), [b.pairs]);
  const [left, setLeft] = useState<number | null>(null);
  const [done, setDone] = useState<number[]>([]);
  const [bad, setBad] = useState<number | null>(null);
  const tryRight = (i: number) => {
    if (left === null || done.includes(i)) return;
    if (i === left) {
      const next = [...done, i]; setDone(next); setLeft(null);
      if (next.length === b.pairs.length) { onScore(1); sparkle(0.5, 0.6); }
    } else { setBad(i); setTimeout(() => setBad(null), 450); }
  };
  return (
    <div className="ex">
      <div className="match">
        <div className="match-col">
          {b.pairs.map((p, i) => (
            <button key={i} type="button" disabled={done.includes(i)} aria-pressed={left === i}
              className={`option ${left === i ? 'is-picked' : ''} ${done.includes(i) ? `is-matched t-${tones[done.indexOf(i) % tones.length]}` : ''}`}
              onClick={() => setLeft(i)}>{pic(p[0], i)}</button>
          ))}
        </div>
        <div className="match-col">
          {rights.map((r) => (
            <button key={r.i} type="button" disabled={done.includes(r.i)}
              className={`option ${done.includes(r.i) ? `is-matched t-${tones[done.indexOf(r.i) % tones.length]}` : ''} ${bad === r.i ? 'is-wrong shake' : ''}`}
              onClick={() => tryRight(r.i)}>{pic(r.text, r.i)}</button>
          ))}
        </div>
      </div>
      {left === null && done.length < b.pairs.length && <p className="muted small"><De en="Tap left first, then right.">Tippe zuerst links, dann rechts.</De></p>}
      {done.length === b.pairs.length && <p className="ok-msg"><De en="All pairs found!" inline>Alle Paare gefunden!</De></p>}
    </div>
  );
}

/* ---------- Word order ---------- */
export function Order({ b, exam, reveal, onScore }: ExProps<OrderBlock>) {
  const pool = useMemo(() => shuffle(b.words.map((w, i) => ({ w, i }))), [b.words]);
  const [line, setLine] = useState<number[]>([]);
  const [state, setState] = useState<'idle' | 'right' | 'wrong'>('idle');
  const sentence = (ids: number[]) => ids.map((i) => b.words[i]).join(' ');
  const isRight = (ids: number[]) => b.answers.some((a) => norm(a) === norm(sentence(ids)));
  const locked = !!reveal || state === 'right';
  const change = (next: number[]) => { setLine(next); setState('idle'); if (exam) onScore(isRight(next) ? 1 : 0); };
  const check = () => { if (isRight(line)) { setState('right'); onScore(1); sparkle(0.5, 0.6); } else setState('wrong'); };
  const shownState = reveal ? (isRight(line) ? 'right' : 'wrong') : state;
  return (
    <div className="ex">
      <div className={`order-line is-${shownState}`} aria-label="Dein Satz">
        {line.length === 0 && <span className="muted"><De en="Tap the words …" inline>Tippe auf die Wörter …</De></span>}
        {line.map((i) => <button key={i} type="button" className="chip chip-in" disabled={locked} onClick={() => change(line.filter((x) => x !== i))}>{b.words[i]}</button>)}
      </div>
      <div className="bank">
        {pool.map(({ w, i }) => (
          <button key={i} type="button" className={`chip ${line.includes(i) ? 'is-used' : ''}`} disabled={locked || line.includes(i)} onClick={() => change([...line, i])}>{w}</button>
        ))}
      </div>
      {reveal && !isRight(line) && <p className="why"><De en="Correct answer" inline>Richtig</De>: {b.answers[0]}</p>}
      {!exam && (
        <div className="ex-actions">
          {state !== 'right' && <button type="button" className="btn btn-sm" disabled={line.length !== b.words.length} onClick={check}><De en="Check" inline>Prüfen</De></button>}
          {state === 'wrong' && <span className="hint-msg"><De en={b.hint ? 'Not yet. See the tip.' : 'Not yet. Where does the verb go?'}>Noch nicht. {b.hint ? `Tipp: ${b.hint}` : 'Wo steht das Verb?'}</De></span>}
          {state === 'right' && <span className="ok-msg"><De en="Correct!" inline>Richtig!</De></span>}
        </div>
      )}
    </div>
  );
}

/* ---------- Sorting into categories ---------- */
export function Sort({ b, onScore }: ExProps<SortBlock>) {
  const items = useMemo(() => shuffle(b.items.map((it, i) => ({ ...it, i }))), [b.items]);
  const [placed, setPlaced] = useState<Record<number, number>>({});
  const [sel, setSel] = useState<number | null>(null);
  const [bad, setBad] = useState<number | null>(null);
  const drop = (cat: number) => {
    if (sel === null) return;
    if (b.items[sel].cat === cat) {
      const next = { ...placed, [sel]: cat }; setPlaced(next); setSel(null);
      if (Object.keys(next).length === b.items.length) { onScore(1); sparkle(0.5, 0.6); }
    } else { setBad(cat); setTimeout(() => setBad(null), 450); }
  };
  const left = items.filter((it) => placed[it.i] === undefined);
  return (
    <div className="ex">
      <div className="bank sort-pool">
        {left.map((it) => (
          <button key={it.i} type="button" aria-pressed={sel === it.i} className={`chip ${sel === it.i ? 'is-picked' : ''}`} onClick={() => setSel(sel === it.i ? null : it.i)}>{it.text}</button>
        ))}
        {left.length === 0 && <span className="ok-msg"><De en="All sorted!" inline>Alles sortiert!</De></span>}
      </div>
      <div className="buckets" style={{ gridTemplateColumns: `repeat(${b.cats.length}, minmax(0, 1fr))` }}>
        {b.cats.map((c, ci) => (
          <button key={ci} type="button" className={`bucket t-${tones[ci]} ${sel !== null ? 'is-armed' : ''} ${bad === ci ? 'shake' : ''}`} onClick={() => drop(ci)} aria-label={`In ${c} legen`}>
            <span className="bucket-title">{c}</span>
            <span className="bucket-items">
              {items.filter((it) => placed[it.i] === ci).map((it) => <span key={it.i} className="chip chip-static pop">{it.text}</span>)}
            </span>
          </button>
        ))}
      </div>
      {sel === null && left.length > 0 && <p className="muted small"><De en="Tap a card, then the group it belongs to.">Tippe auf eine Karte, dann auf die passende Gruppe.</De></p>}
    </div>
  );
}

/* ---------- Writing (self-checked now, AI feedback later) ---------- */
export function Write({ b, onScore }: ExProps<WriteBlock>) {
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const pct = Math.min(100, Math.round((words / b.minWords) * 100));
  return (
    <div className="ex">
      <Rich text={b.prompt} className="ex-q" />
      {b.hints && <div className="bank">{b.hints.map((h) => <button key={h} type="button" className="chip" disabled={done} onClick={() => setText((t) => (t ? `${t} ${h}` : h))}>{h}</button>)}</div>}
      <textarea className="write" rows={6} value={text} disabled={done} onChange={(e) => setText(e.target.value)} placeholder="Schreib hier …" aria-label="Dein Text" />
      <div className="ex-actions">
        <span className="meter" aria-hidden><i style={{ width: `${pct}%` }} /></span>
        <span className="muted small">{words} / {b.minWords} <De en="words" inline>Wörter</De></span>
        {!done && <button type="button" className="btn btn-sm" disabled={words < b.minWords} onClick={() => { setDone(true); onScore(1); }}><De en="Done" inline>Fertig</De></button>}
      </div>
      {done && (
        <div className="sample">
          <p className="sample-label"><De en="Sample text to compare">Beispieltext zum Vergleichen</De></p>
          <p>{b.sample}</p>
          <p className="muted small"><De en="Compare: did you use similar tenses and sentence starts?">Vergleiche: Hast du ähnliche Zeitformen und Satzanfänge benutzt?</De></p>
        </div>
      )}
    </div>
  );
}

/* ---------- Guided writing: build a text sentence by sentence ---------- */
export function Compose({ b, onScore }: ExProps<ComposeBlock>) {
  const hints = useHints();
  const [step, setStep] = useState(0);
  const [line, setLine] = useState<number[]>([]);
  const [fails, setFails] = useState(0);
  const [bad, setBad] = useState(false);
  const finished = step >= b.steps.length;
  const cur = b.steps[Math.min(step, b.steps.length - 1)];
  const pool = useMemo(() => shuffle(cur.words.map((w, i) => ({ w, i }))), [cur]);
  const text = b.steps.slice(0, step).map((s) => s.words.join(' ')).join(' ');

  const add = (i: number) => {
    const next = [...line, i];
    setLine(next); setBad(false);
    if (next.length < cur.words.length) return;
    if (norm(next.map((x) => cur.words[x]).join(' ')) === norm(cur.words.join(' '))) {
      sparkle(0.5, 0.6); setLine([]); setFails(0);
      if (step + 1 >= b.steps.length) onScore(1);
      setStep(step + 1);
    } else { setBad(true); setFails((f) => f + 1); setTimeout(() => { setLine([]); setBad(false); }, 700); }
  };

  return (
    <div className="ex">
      <Rich text={b.prompt} className="ex-q" />
      <div className="compose-text" aria-label="Dein Text">
        {text ? <p>{text}</p> : <p className="muted"><De en="Your text appears here, sentence by sentence.">Dein Text entsteht hier, Satz für Satz.</De></p>}
      </div>
      {finished ? (
        <div className="ex-actions">
          <span className="ok-msg"><De en="Done! Read your text aloud once.">Fertig! Lies deinen Text einmal laut.</De></span>
          <button type="button" className="chip-btn" onClick={() => speakWord(text)}>🔊 Anhören</button>
        </div>
      ) : (
        <>
          <p className="compose-say"><b>Satz {step + 1} von {b.steps.length}:</b> {cur.say}{hints && cur.sayEn && <span className="en">{cur.sayEn}</span>}</p>
          <div className={`order-line ${bad ? 'is-wrong shake' : ''}`}>
            {line.length === 0 && <span className="muted"><De en="Tap the words in the right order.">Tippe die Wörter in der richtigen Reihenfolge an.</De></span>}
            {line.map((i) => <button key={i} type="button" className="chip chip-in" onClick={() => setLine(line.filter((x) => x !== i))}>{cur.words[i]}</button>)}
          </div>
          <div className="bank" key={step}>
            {pool.map(({ w, i }) => <button key={i} type="button" className={`chip ${line.includes(i) ? 'is-used' : ''}`} disabled={line.includes(i)} onClick={() => add(i)}>{w}</button>)}
          </div>
          {fails >= 2 && <p className="hint-msg">Tipp: Der Satz beginnt mit „{cur.words[0]}“{cur.words.length > 3 ? ` und endet mit „${cur.words[cur.words.length - 1]}“` : ''}.</p>}
        </>
      )}
    </div>
  );
}

/* ---------- Not graded ---------- */
function Grammar({ b }: { b: GrammarBlock }) {
  const { progress } = useStore();
  const ch = useChapter();
  const visual = ch ? VISUALS[`${ch}/${b.id}`] : undefined;
  return (
    <div className="grammar">
      <h3><span className="g-badge" aria-hidden>G</span>{b.title}</h3>
      {b.intro && <Rich text={b.intro} />}
      {visual && <GrammarVisual v={visual} />}
      {b.rows && (
        <div className="table-wrap">
          <table>
            {b.head && <thead><tr>{b.head.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>}
            <tbody>{b.rows.map((r, i) => <tr key={i}>{r.map((c, j) => (j === 0 ? <th key={j} scope="row"><Inline text={c} /></th> : <td key={j}><Inline text={c} /></td>))}</tr>)}</tbody>
          </table>
        </div>
      )}
      {b.notes && <ul className="notes">{b.notes.map((n, i) => <li key={i}><Inline text={n} /></li>)}</ul>}
      {progress.mode === 'easy' && b.en && <p className="en-box"><span aria-hidden>🇬🇧</span> {b.en}</p>}
    </div>
  );
}

function Phrases({ b }: { b: PhrasesBlock }) {
  return (
    <div className="phrases">
      <h3>{b.title}</h3>
      {b.groups.map((g) => (
        <div key={g.label} className="phrase-group">
          <p className="phrase-label">{g.label}</p>
          <ul>{g.items.map((it) => <li key={it}><button type="button" className="say" aria-label="anhören" onClick={() => speakWord(it.replace(/…/g, ''))}>🔊</button>{it}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}

function Poll({ b }: { b: PollBlock }) {
  const [picks, setPicks] = useState<Record<number, 0 | 1>>({});
  const n = Object.keys(picks).length;
  return (
    <div className="ex">
      <div className="poll">
        {b.pairs.map((p, i) => (
          <div key={i} className="poll-row">
            {[0, 1].map((side) => (
              <button key={side} type="button" aria-pressed={picks[i] === side} className={`option poll-opt ${picks[i] === side ? 'is-picked' : ''}`} onClick={() => setPicks({ ...picks, [i]: side as 0 | 1 })}>{p[side]}</button>
            ))}
            <span className="poll-or" aria-hidden>oder</span>
          </div>
        ))}
      </div>
      {n === b.pairs.length && (
        <p className="ok-msg pop">Dein Profil: {b.pairs.map((p, i) => p[picks[i]]).slice(0, 3).join(', ')} … Erzähl das gleich in deinem Text!</p>
      )}
    </div>
  );
}

function Checklist({ b }: { b: ChecklistBlock }) {
  const [on, setOn] = useState<boolean[]>(() => b.items.map(() => false));
  return (
    <ul className="checklist">
      {b.items.map((it, i) => (
        <li key={i}>
          <label className={on[i] ? 'is-on' : ''}>
            <input type="checkbox" checked={on[i]} onChange={() => setOn(on.map((v, j) => (j === i ? !v : v)))} />
            <span className="box" aria-hidden>{on[i] ? '✓' : ''}</span>
            <span>{it}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

function Cards({ b }: { b: CardsBlock }) {
  const { progress } = useStore();
  const [flipped, setFlipped] = useState<number[]>([]);
  return (
    <div className="cards">
      {b.cards.map((c, i) => {
        const f = flipped.includes(i);
        return (
          <button key={i} type="button" className={`flip t-${tones[i % tones.length]} ${f ? 'is-flipped' : ''}`} aria-pressed={f}
            onClick={() => setFlipped(f ? flipped.filter((x) => x !== i) : [...flipped, i])}>
            <span className="flip-inner">
              <span className="flip-face flip-front">{c.front}</span>
              <span className="flip-face flip-back"><span>{c.back}</span>{progress.mode === 'easy' && <em>{c.en}</em>}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

function EnNote({ text }: { text?: string }) {
  const { progress } = useStore();
  if (!text || progress.mode !== 'easy') return null;
  return <p className="en-box"><span aria-hidden>🇬🇧</span> {text}</p>;
}

/* ---------- Dispatcher ---------- */
export function BlockView({ b, exam, reveal, onScore }: { b: Block; exam?: boolean; reveal?: boolean; onScore?: (id: string, score: number) => void }) {
  const score = (s: number) => onScore?.(b.id, s);
  const body = (() => {
    switch (b.t) {
      case 'text': return (
        <article className="reading">
          {b.kicker && <p className="kicker">{b.kicker}</p>}
          {b.title && <h3>{b.title}</h3>}
          <Rich text={b.body} />
          <EnNote text={b.en} />
        </article>
      );
      case 'overview': return (
        <div className="overview">
          <p className="kicker"><De en="What this is about" inline>Darum geht es</De></p>
          <h3>{b.title}</h3>
          <Rich text={b.body} />
          <EnNote text={b.en} />
          <p className="overview-label"><De en="After this chapter you can" inline>Nach diesem Kapitel kannst du</De></p>
          <ul className="goals">{b.learn.map((l) => <li key={l}>{l}</li>)}</ul>
        </div>
      );
      case 'compose': return <Compose b={b} onScore={score} />;
      case 'audio': return <AudioPlayer b={b} />;
      case 'grammar': return <Grammar b={b} />;
      case 'phrases': return <Phrases b={b} />;
      case 'tip': return <div className="tip"><h3>💡 {b.title}</h3><Rich text={b.body} /></div>;
      case 'video': return (
        <div className="video">
          {b.url
            ? <iframe src={b.url} title={b.title} allowFullScreen loading="lazy" />
            : <div className="video-empty"><span aria-hidden>🎬</span><p><b>{b.title}</b></p><p className="muted small">{b.source}. Das Video wird hier eingebettet, sobald es ausgewählt ist.</p></div>}
        </div>
      );
      case 'poll': return <Poll b={b} />;
      case 'checklist': return <Checklist b={b} />;
      case 'cards': return <Cards b={b} />;
      case 'mcq': return <Mcq b={b} exam={exam} reveal={reveal} onScore={score} />;
      case 'gap': return <Gap b={b} exam={exam} reveal={reveal} onScore={score} />;
      case 'match': return <Match b={b} onScore={score} />;
      case 'order': return <Order b={b} exam={exam} reveal={reveal} onScore={score} />;
      case 'sort': return <Sort b={b} onScore={score} />;
      case 'write': return <Write b={b} onScore={score} />;
    }
  })();
  return (
    <section className={`block block-${b.t}`}>
      <Task de={b.task} en={b.taskEn} />
      {body}
    </section>
  );
}

/** Small hook used by lesson pages to pulse the fox when something is solved. */
export function usePulse(value: number) {
  const [on, setOn] = useState(false);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    setOn(true); const t = setTimeout(() => setOn(false), 700); return () => clearTimeout(t);
  }, [value]);
  return on;
}
