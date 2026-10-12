'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { BlockView } from '@/components/Blocks';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { findChapter } from '@/content/course';
import { glossaryFor } from '@/content/glossary';
import { GlossaryContext } from '@/components/Rich';
import { isExercise } from '@/content/types';
import { party } from '@/lib/fx';
import { useStore } from '@/lib/store';
import { chapterOpen, sectionKey, sectionOpen } from '@/lib/unlock';

function Lesson() {
  const { kapitel, section } = useParams<{ kapitel: string; section: string }>();
  const router = useRouter();
  const { progress, isAdmin, adminView, completeSection } = useStore();
  const admin = isAdmin && adminView;
  const found = findChapter(kapitel);
  const ch = found?.chapter;
  const course = found?.course;
  const ci = found?.index ?? -1;
  const si = ch ? ch.sections.findIndex((s) => s.id === section) : -1;
  const sec = ch && si >= 0 ? ch.sections[si] : null;
  const [solved, setSolved] = useState<Record<string, boolean>>({});
  const [celebrate, setCelebrate] = useState(false);
  useEffect(() => { setSolved({}); setCelebrate(false); window.scrollTo(0, 0); }, [section]);

  const exercises = useMemo(() => (sec ? sec.blocks.filter(isExercise) : []), [sec]);
  if (!ch || !sec || !course) return <main className="page center"><Fox size={90} mood="wow" /><h1>Diese Seite gibt es nicht.</h1><Link className="btn" href="/lernen">Zur Kursübersicht</Link></main>;

  const allowed = chapterOpen(course, ci, progress, admin) && sectionOpen(ch, si, progress, admin);
  if (!allowed) return <main className="page center"><Fox size={90} mood="sleepy" /><h1>Noch geschlossen</h1><p className="lead">Schließe zuerst den Abschnitt davor ab.</p><Link className="btn" href="/lernen">Zur Kursübersicht</Link></main>;

  const key = sectionKey(ch.id, sec.id);
  const wasDone = !!progress.done[key];
  const nSolved = exercises.filter((e) => solved[e.id]).length;
  const canFinish = wasDone || admin || nSolved === exercises.length;
  const pct = exercises.length ? Math.round((nSolved / exercises.length) * 100) : 100;
  const nextSec = ch.sections[si + 1];
  const nextHref = nextSec ? `/kurs/${ch.id}/${nextSec.id}` : `/kurs/${ch.id}/pruefung`;
  const glossary = glossaryFor(course.id);
  const xp = 20 + exercises.length * 5;

  const finish = () => {
    if (!wasDone) { completeSection(key, xp); party(); setCelebrate(true); }
    else router.push(nextHref);
  };

  return (
    <GlossaryContext.Provider value={glossary}>
    <main className={`page lesson t-${sec.tone}`}>
      <div className="lesson-bar">
        <Link href="/lernen" className="back" aria-label="Zur Kursübersicht">←</Link>
        <div className="meter big" aria-label={`${pct} Prozent der Übungen gelöst`}><i style={{ width: `${wasDone ? 100 : pct}%` }} /></div>
        <span className="small muted">{wasDone ? 'Abgeschlossen' : `${nSolved} / ${exercises.length}`}</span>
      </div>

      <header className="lesson-head">
        <p className="lesson-label">{course.level}, Kapitel {ch.number}, {sec.label}</p>
        <h1>{sec.title}</h1>
        <ul className="goals">{sec.goals.map((g) => <li key={g}>{g}</li>)}</ul>
      </header>

      {sec.blocks.map((b) => (
        <div key={b.id} className={isExercise(b) && solved[b.id] ? 'is-solved' : ''}>
          <BlockView b={b} onScore={(id, s) => { if (s >= 1) setSolved((x) => (x[id] ? x : { ...x, [id]: true })); }} />
        </div>
      ))}

      <footer className="lesson-end">
        {celebrate ? (
          <div className="done-card pop">
            <Fox size={100} mood="proud" className="bob" />
            <h2>Geschafft! +{xp} XP</h2>
            <p>{nextSec ? `Weiter geht es mit: ${nextSec.title}` : 'Alle Abschnitte fertig. Jetzt kommt die Kapitelprüfung.'}</p>
            <Link href={nextHref} className="btn btn-lg">{nextSec ? 'Nächster Abschnitt' : 'Zur Prüfung'}</Link>
          </div>
        ) : (
          <>
            {!canFinish && <p className="muted">Löse noch {exercises.length - nSolved} {exercises.length - nSolved === 1 ? 'Übung' : 'Übungen'}, dann kannst du den Abschnitt abschließen.</p>}
            <button type="button" className="btn btn-lg" disabled={!canFinish} onClick={finish}>{wasDone ? (nextSec ? 'Nächster Abschnitt' : 'Zur Prüfung') : 'Abschnitt abschließen'}</button>
          </>
        )}
      </footer>
    </main>
    </GlossaryContext.Provider>
  );
}

export default function Page() { return <RequireUser><Lesson /></RequireUser>; }
