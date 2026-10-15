'use client';
import { De } from './Hint';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { ExamItem } from '@/content/types';
import { PASS_MARK } from '@/lib/config';
import { party } from '@/lib/fx';
import { BlockView } from './Blocks';
import { Fox } from './Fox';

/** Runs a list of exam questions: no feedback while answering, full review after handing in. */
export function ExamRunner({ items, title, intro, onFinish, backHref, passHref, passLabel }: {
  items: ExamItem[]; title: string; intro: React.ReactNode; onFinish: (percent: number) => void;
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
          <li><De en={`${items.length} tasks, ${total} points`}>{items.length} Aufgaben, {total} Punkte</De></li>
          <li><De en={`Pass mark: ${PASS_MARK} percent`}>Bestanden ab {PASS_MARK} Prozent</De></li>
          <li><De en="No feedback during the exam. You see your results at the end.">Während der Prüfung gibt es kein Feedback. Die Auswertung kommt am Ende.</De></li>
          <li><De en="You can retake the exam.">Du kannst die Prüfung wiederholen.</De></li>
        </ul>
        <button type="button" className="btn btn-lg" onClick={() => setStarted(true)}><De en="Start exam" inline>Prüfung starten</De></button>
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
            <h2>{passed ? <De en="Passed!" inline>Bestanden!</De> : <De en="Not passed yet" inline>Noch nicht bestanden</De>}</h2>
            <p className="result-pct">{result}%</p>
            <p>{passed ? <De en="Great. All answers are shown below.">Stark. Unten siehst du alle Antworten.</De> : <De en={`You need ${PASS_MARK}%. Look at the answers below and try again.`}>{`Du brauchst ${PASS_MARK}%. Schau dir unten die Lösungen an und versuch es noch einmal.`}</De>}</p>
            <div className="hero-cta">
              {passed && passHref && <Link href={passHref} className="btn">{passLabel}</Link>}
              <button type="button" className={`btn ${passed ? 'btn-ghost' : ''}`} onClick={retry}><De en="Try again" inline>Noch einmal versuchen</De></button>
              <Link href={backHref} className="btn btn-ghost"><De en="Course overview" inline>Zur Kursübersicht</De></Link>
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
            <p className="exam-num"><De en={`Task ${i + 1}`} inline>Aufgabe {i + 1}</De> <span className="muted">({it.points} {it.points === 1 ? 'Punkt' : 'Punkte'})</span></p>
            <BlockView b={it.q} exam reveal={result !== null}
              onScore={(id, s) => { setScores((x) => ({ ...x, [id]: s })); setTouched((x) => ({ ...x, [id]: true })); }} />
          </li>
        ))}
      </ol>
      {result === null && (
        <footer className="lesson-end">
          {answered < items.length && <p className="muted"><De en={`${items.length - answered} tasks are still open. You can hand in anyway.`}>{items.length - answered} Aufgaben sind noch offen. Du kannst trotzdem abgeben.</De></p>}
          <button type="button" className="btn btn-lg" onClick={submit}><De en="Hand in" inline>Prüfung abgeben</De></button>
        </footer>
      )}
    </div>
  );
}
