'use client';
import Link from 'next/link';
import { useState } from 'react';
import { BlockView } from '@/components/Blocks';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { useParams } from 'next/navigation';
import { courseById } from '@/content/course';
import { glossaryFor } from '@/content/glossary';
import { GlossaryContext } from '@/components/Rich';
import type { ExamItem } from '@/content/types';
import { PASS_MARK } from '@/lib/config';
import { party } from '@/lib/fx';
import { useStore } from '@/lib/store';
import { finalOpen } from '@/lib/unlock';

const modules = [
  { id: 'lesen', name: 'Lesen', tone: 'mint', minutes: 20 },
  { id: 'hoeren', name: 'Hören', tone: 'sky', minutes: 15 },
  { id: 'schreiben', name: 'Schreiben', tone: 'lilac', minutes: 20 },
  { id: 'sprechen', name: 'Sprechen', tone: 'rose', minutes: 10 },
] as const;
type ModId = (typeof modules)[number]['id'];

function Auto({ items, reveal, onPct }: { items: ExamItem[]; reveal: boolean; onPct: (p: number) => void }) {
  const [scores, setScores] = useState<Record<string, number>>({});
  const total = items.reduce((a, it) => a + it.points, 0);
  return (
    <ol className="exam-list">
      {items.map((it, i) => (
        <li key={it.q.id} className="exam-item">
          {it.stimulus && <BlockView b={it.stimulus} />}
          <p className="exam-num">Aufgabe {i + 1} <span className="muted">({it.points} {it.points === 1 ? 'Punkt' : 'Punkte'})</span></p>
          <BlockView b={it.q} exam reveal={reveal} onScore={(id, s) => {
            const next = { ...scores, [id]: s }; setScores(next);
            onPct(Math.round((items.reduce((a, x) => a + (next[x.q.id] || 0) * x.points, 0) / total) * 100));
          }} />
        </li>
      ))}
    </ol>
  );
}

function Final() {
  const { course: courseId } = useParams<{ course: string }>();
  const course = courseById(courseId);
  const { progress, isAdmin, recordExam } = useStore();
  const admin = isAdmin;
  const [tab, setTab] = useState<ModId>('lesen');
  const [pct, setPct] = useState<Record<ModId, number>>({ lesen: 0, hoeren: 0, schreiben: 0, sprechen: 0 });
  const [done, setDone] = useState(false);
  const set = (id: ModId) => (p: number) => setPct((x) => ({ ...x, [id]: p }));

  if (!course) return <main className="page center"><Fox size={90} mood="wow" /><h1>Diesen Kurs gibt es nicht.</h1><Link className="btn" href="/lernen">Zur Kursübersicht</Link></main>;
  if (!finalOpen(course, progress, admin)) {
    return <main className="page center"><Fox size={90} mood="sleepy" /><h1>Noch geschlossen</h1><p className="lead">Die Abschlussprüfung öffnet sich, wenn du alle Kapitelprüfungen bestanden hast.</p><Link className="btn" href="/lernen">Zur Kursübersicht</Link></main>;
  }
  const allPass = modules.every((m) => pct[m.id] >= PASS_MARK);
  const avg = Math.round(modules.reduce((a, m) => a + pct[m.id], 0) / modules.length);
  const submit = () => { setDone(true); recordExam(course.finalKey, allPass ? avg : Math.min(avg, PASS_MARK - 1)); if (allPass) party(); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <GlossaryContext.Provider value={glossaryFor(course.id)}>
    <main className="page lesson t-peach">
      <header className="lesson-head">
        <p className="lesson-label">{course.title}</p>
        <h1>Abschlussprüfung {course.level}</h1>
        <ul className="goals">
          <li>Im Format: {course.examName}. Vier Module, jedes Modul hat 100 Punkte.</li>
          <li>Bestanden, wenn du in jedem Modul mindestens {PASS_MARK} Punkte hast.</li>
          <li>Die Prüfung umfasst den Stoff aller {course.chapters.length} Kapitel. Alle Aufgaben werden automatisch ausgewertet.</li>
        </ul>
      </header>

      {done && (
        <div className={`result card pop ${allPass ? 't-mint' : 't-rose'}`} role="status">
          <Fox size={96} mood={allPass ? 'proud' : 'sleepy'} />
          <div>
            <h2>{allPass ? 'Bestanden! Herzlichen Glückwunsch.' : 'Noch nicht bestanden'}</h2>
            <ul className="result-mods">{modules.map((m) => <li key={m.id} className={pct[m.id] >= PASS_MARK ? 'ok' : 'no'}>{m.name}: <b>{pct[m.id]}</b> / 100</li>)}</ul>
            <Link href="/lernen" className="btn">Zur Kursübersicht</Link>
          </div>
        </div>
      )}

      <div className="tabs" role="tablist" aria-label="Module">
        {modules.map((m) => (
          <button key={m.id} type="button" role="tab" aria-selected={tab === m.id} className={`tab t-${m.tone}`} onClick={() => setTab(m.id)}>
            <b>{m.name}</b><small>ca. {m.minutes} Min.</small>
          </button>
        ))}
      </div>

      <div hidden={tab !== 'lesen'}><Auto items={course.final.lesen} reveal={done} onPct={set('lesen')} /></div>
      <div hidden={tab !== 'hoeren'}><Auto items={course.final.hoeren} reveal={done} onPct={set('hoeren')} /></div>
      <div hidden={tab !== 'schreiben'}><Auto items={course.final.schreiben} reveal={done} onPct={set('schreiben')} /></div>
      <div hidden={tab !== 'sprechen'}><Auto items={course.final.sprechen} reveal={done} onPct={set('sprechen')} /></div>

      {!done && (
        <footer className="lesson-end">
          <p className="muted">Bearbeite alle vier Module. Gib erst dann ab.</p>
          <button type="button" className="btn btn-lg" onClick={submit}>Prüfung abgeben</button>
        </footer>
      )}
    </main>
    </GlossaryContext.Provider>
  );
}

export default function Page() { return <RequireUser><Final /></RequireUser>; }
