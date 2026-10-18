'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Guard } from '@/components/Guard';
import { LessonBar, LessonHead } from '@/components/Lesson';
import { TestRunner, type Finished } from '@/components/TestRunner';
import { bank, diagnose } from '@/lib/content';
import { db } from '@/lib/db';
import { scoreTest } from '@/lib/score';
import { useStore } from '@/lib/store';
import { En } from '@/lib/lang';
import { party } from '@/lib/fx';

function Diagnose() {
  const { user, attempts, candidate, reload } = useStore();
  const router = useRouter();
  const [go, setGo] = useState(false);
  const [err, setErr] = useState('');
  const done = attempts.find((a) => a.kind === 'diagnose');
  useEffect(() => { if (!candidate && !done) router.replace('/setup'); }, [candidate, done, router]);
  if (!candidate && !done) return <p className="dim">Lädt …</p>;

  if (done && !go) {
    return (
      <>
        <LessonBar />
        <LessonHead hue="mint" title="Mock Test 1 ist erledigt" sub="Die Diagnose gibt es einmal pro Konto. Dein Ergebnis bleibt gespeichert.">
          <Link className="btn big" href={`/ergebnis/${done.id}`}>Zum Ergebnis</Link>
        </LessonHead>
      </>
    );
  }

  const finish = async (r: Finished) => {
    try {
      const scores = scoreTest(diagnose, bank, r.answers);
      const id = await db.saveAttempt({ user_id: user!.id, kind: 'diagnose', ref: 'diagnose', block_id: null, answers: r.answers, conf: r.conf, writing: r.writing, scores, started_at: r.started_at, finished_at: new Date().toISOString() });
      await reload();
      party();
      router.push(`/ergebnis/${id}`);
    } catch (e) { setErr((e as Error).message); }
  };

  if (!go) {
    return (
      <>
        <LessonBar />
        <LessonHead hue="lilac" label="Kostenlos · circa 40 Minuten" title="Mock Test 1: Diagnose"
          sub={<>Drei Teile wie in der Prüfung: <b>Hören</b> (20 Min.), <b>Lesen</b> (15 Min.) und <b>Schreiben</b> (8 Min.). Jeder Teil der echten Prüfung kommt vor, nur kürzer.</>}
          en="Three parts like the real exam: listening (20 min), reading (15 min), writing (8 min). Every part of the real exam appears, just shorter."
          steps={['Hören', 'Lesen', 'Schreiben']}>
          <p className="weekintro">Kopfhörer auf, ruhiger Raum. Die Hörtexte laufen so oft wie in der Prüfung, ohne Pause. Wenn die Zeit um ist, wird automatisch abgegeben. Bitte die Seite während des Tests nicht neu laden.<En block>Headphones on, quiet room. Recordings play as often as in the exam, with no pause. When time is up the part is handed in. Do not reload the page. Free, once per account, result right after.</En></p>
          <div className="actions"><button className="btn big" onClick={() => setGo(true)}>Test starten</button></div>
        </LessonHead>
      </>
    );
  }
  return (
    <>
      {err && <p className="msg-err">Speichern fehlgeschlagen: {err}</p>}
      <TestRunner test={diagnose} sets={bank} onFinish={finish} />
    </>
  );
}

export default function Page() { return <Guard><Diagnose /></Guard>; }
