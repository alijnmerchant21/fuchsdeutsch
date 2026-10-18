'use client';
/* Timed test (diagnostic, block test, full mock): section by section like the real exam. */
import { useCallback, useEffect, useState } from 'react';
import { modName, tips } from '@/lib/content';
import type { Answers, Conf, ExamSet, TestDef } from '@/lib/types';
import { LessonBar, LessonHead } from './Lesson';
import { SetCard } from './SetCard';
import { Timer } from './Timer';
import { En } from '@/lib/lang';

export interface Finished { answers: Answers; conf: Conf; writing: Record<string, string>; started_at: string }

const setName = (s?: ExamSet) => !s ? '' : s.module === 'schreiben' ? `Schreiben ${s.teil}` : (tips[s.module as 'hoeren' | 'lesen']?.[String(s.teil)]?.name ?? `Teil ${s.teil}`);

export function TestRunner({ test, sets, onFinish, hue = 'lilac', label }: { test: TestDef; sets: Record<string, ExamSet>; onFinish: (r: Finished) => void; hue?: string; label?: string }) {
  const [started] = useState(() => new Date().toISOString());
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const [conf, setConf] = useState<Conf>({});
  const [writing, setWriting] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const warn = (e: BeforeUnloadEvent) => { e.preventDefault(); };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, []);

  const section = test.sections[sec];
  const items = section.sets.reduce((a, id) => a + (sets[id]?.groups.reduce((x, g) => x + g.items.length, 0) ?? 0), 0);
  const answered = section.sets.reduce((a, id) => a + Object.keys(answers[id] ?? {}).length, 0);

  const handIn = useCallback(() => {
    window.scrollTo({ top: 0 });
    if (sec + 1 < test.sections.length) { setSec(sec + 1); setRunning(false); return; }
    setBusy(true);
    onFinish({ answers, conf, writing, started_at: started });
  }, [sec, test.sections.length, onFinish, answers, conf, writing, started]);

  const bar = <LessonBar label={`${test.title} · Teil ${sec + 1} von ${test.sections.length}`} />;

  if (!running) {
    return (
      <>
        {bar}
        <LessonHead hue={hue} label={label ?? test.title} title={section.title}
          sub={<>{section.minutes > 0 ? <>Zeit: <b>{section.minutes} Minuten</b>. Danach wird automatisch abgegeben. </> : <>Kein Zeitlimit. </>}
            {section.module === 'hoeren' && 'Jeder Text läuft so oft wie in der Prüfung, ohne Pause.'}
            {section.module === 'schreiben' && 'Achte auf alle Punkte der Aufgabe und auf die Wortzahl.'}</>}
          en={<>{section.minutes > 0 ? `${section.minutes} minutes, handed in automatically when time is up. ` : 'No time limit. '}
            {section.module === 'hoeren' ? 'Each recording plays as often as in the real exam, with no pause button.' : section.module === 'lesen' ? 'Mark each answer as sure or guessed. It does not change your points but helps the analysis.' : 'Cover every point of the task and watch the word count.'}</>}>
          <p className="weekintro">{section.module === 'hoeren'
            ? 'Lies vor jedem Text zuerst die Aufgaben. Markiere bei jeder Antwort, ob du sicher bist oder geraten hast. So sehen wir, ob dir Fallen oder Wörter Punkte kosten.'
            : section.module === 'lesen' ? 'Markiere bei jeder Antwort: sicher oder geraten. Das zählt nicht für die Punkte, hilft aber bei der Analyse.'
              : 'Schreib deinen Text. Die Korrektur kommt von uns nach der Abgabe.'}</p>
          <ol className="steps">{section.sets.map((id) => <li key={id}><a>{modName(section.module)} {setName(sets[id])}</a></li>)}</ol>
          <div className="actions"><button className="btn big" onClick={() => setRunning(true)}>{modName(section.module)} starten</button></div>
        </LessonHead>
      </>
    );
  }

  return (
    <>
      <div className="examsticky">
        <b>{section.title}</b>
        {section.module !== 'schreiben' && <span className="dim small">{answered} / {items} beantwortet</span>}
        <span className="grow" />
        <Timer key={sec} minutes={section.minutes} onEnd={handIn} />
      </div>
      {section.sets.map((id, i) => sets[id] && (
        <SetCard key={id} set={sets[id]} mode="exam" step={section.sets.length > 1 ? i + 1 : undefined}
          state={{ ans: answers[id] ?? {}, conf: conf[id] ?? {} }}
          onAnswer={(n, v) => setAnswers((a) => ({ ...a, [id]: { ...a[id], [String(n)]: v } }))}
          onConf={(n, c) => setConf((a) => ({ ...a, [id]: { ...a[id], [String(n)]: c } }))}
          writing={writing} onWrite={(t, text) => setWriting((w) => ({ ...w, [t]: text }))} />
      ))}
      <div className="donebar">
        <span className="dim">{section.module === 'schreiben' ? 'Fertig geschrieben?' : `${answered} von ${items} Aufgaben beantwortet.`}</span>
        <button className="btn big" disabled={busy} onClick={handIn}>{sec + 1 < test.sections.length ? 'Abgeben und weiter' : busy ? 'Speichern …' : 'Test abgeben'}</button>
      </div>
    </>
  );
}
