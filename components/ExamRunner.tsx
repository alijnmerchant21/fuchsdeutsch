'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { ExamItem } from '@/content/types';
import { PASS_MARK } from '@/lib/config';
import { party } from '@/lib/fx';
import { BlockView } from './Blocks';
import { Fox } from './Fox';

/** Runs a list of exam questions: no feedback while answering, full review after handing in. */
export function ExamRunner({ items, title, intro, onFinish, backHref, passHref, passLabel }: {
  items: ExamItem[]; title: string; intro: string; onFinish: (percent: number) => void;
  backHref: string; passHref?: string; passLabel?: string;
}) {
  const [started, setStarted] = useState(false);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [result, setResult] = useState<number | null>(null);
  const [round, setRound] = useState(0);
  const total = useMemo(() => items.reduce((a, it) => a + it.points, 0), [items]);
  const answered = items.filter((it) => touched[it.q.id]).length;

  const submit = () => {
    const got = items.reduce((a, it) => a + (scores[it.q.id] || 0) * it.points, 0);
    const pct = Math.round((got / total) * 100);
    setResult(pct); onFinish(pct);
    if (pct >= PASS_MARK) party();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const retry = () => { setScores({}); setTouched({}); setResult(null); setRound((r) => r + 1); window.scrollTo(0, 0); };

  if (!started) {
    return (
      <div className="exam-intro card">
        <Fox size={100} mood="wow" className="bob" />
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
        <ul className="goals">
          <li>{items.length} Aufgaben, {total} Punkte</li>
          <li>Bestanden ab {PASS_MARK} Prozent</li>
          <li>Während der Prüfung gibt es kein Feedback. Die Auswertung kommt am Ende.</li>
          <li>Du kannst die Prüfung wiederholen.</li>
        </ul>
        <button type="button" className="btn btn-lg" onClick={() => setStarted(true)}>Prüfung starten</button>
      </div>
    );
  }

  const passed = result !== null && result >= PASS_MARK;
  return (
    <div className="exam" key={round}>
      {result !== null && (
        <div className={`result card pop ${passed ? 't-mint' : 't-rose'}`} role="status">
          <Fox size={96} mood={passed ? 'proud' : 'sleepy'} />
          <div>
            <h2>{passed ? 'Bestanden!' : 'Noch nicht bestanden'}</h2>
            <p className="result-pct">{result}%</p>
            <p>{passed ? 'Stark. Unten siehst du alle Antworten.' : `Du brauchst ${PASS_MARK}%. Schau dir unten die Lösungen an und versuch es noch einmal.`}</p>
            <div className="hero-cta">
              {passed && passHref && <Link href={passHref} className="btn">{passLabel}</Link>}
              <button type="button" className={`btn ${passed ? 'btn-ghost' : ''}`} onClick={retry}>Noch einmal versuchen</button>
              <Link href={backHref} className="btn btn-ghost">Zur Kursübersicht</Link>
            </div>
          </div>
        </div>
      )}
      {result === null && (
        <div className="lesson-bar sticky">
          <div className="meter big"><i style={{ width: `${Math.round((answered / items.length) * 100)}%` }} /></div>
          <span className="small muted">{answered} / {items.length}</span>
        </div>
      )}
      <ol className="exam-list">
        {items.map((it, i) => (
          <li key={it.q.id} className="exam-item">
            {it.stimulus && <BlockView b={it.stimulus} />}
            <p className="exam-num">Aufgabe {i + 1} <span className="muted">({it.points} {it.points === 1 ? 'Punkt' : 'Punkte'})</span></p>
            <BlockView b={it.q} exam reveal={result !== null}
              onScore={(id, s) => { setScores((x) => ({ ...x, [id]: s })); setTouched((x) => ({ ...x, [id]: true })); }} />
          </li>
        ))}
      </ol>
      {result === null && (
        <footer className="lesson-end">
          {answered < items.length && <p className="muted">{items.length - answered} Aufgaben sind noch offen. Du kannst trotzdem abgeben.</p>}
          <button type="button" className="btn btn-lg" onClick={submit}>Prüfung abgeben</button>
        </footer>
      )}
    </div>
  );
}
