'use client';
import Link from 'next/link';
import { Guard } from '@/components/Guard';
import { LessonBar, LessonHead } from '@/components/Lesson';
import { modulePoints, writingPoints } from '@/lib/score';
import { useStore } from '@/lib/store';

function History() {
  const { attempts, blocks } = useStore();
  const rows = [...attempts].sort((a, b) => b.finished_at.localeCompare(a.finished_at));
  const title = (ref: string) => {
    if (ref === 'diagnose') return 'Mock Test 1 · Diagnose';
    const [bid, i] = ref.split(':'); const b = blocks.find((x) => x.id === bid);
    return b ? `Block ${b.seq} · ${b.content.days[Number(i)]?.title ?? ''}` : ref;
  };
  return (
    <>
      <LessonBar />
      <LessonHead hue="sky" title="Verlauf" sub="Alle Ergebnisse. Gezählt wird immer dein erster Versuch." />
      <section className="card block">
        <table className="table">
          <thead><tr><th>Datum</th><th>Test</th><th>Hören</th><th>Lesen</th><th>Schreiben</th><th /></tr></thead>
          <tbody>{rows.map((a) => (
            <tr key={a.id}>
              <td>{new Date(a.finished_at).toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric', month: 'short' })}</td><td>{title(a.ref)}</td>
              <td>{modulePoints(a.scores, 'hoeren') ?? '–'}</td><td>{modulePoints(a.scores, 'lesen') ?? '–'}</td>
              <td>{Object.keys(a.writing ?? {}).length ? writingPoints(a.feedback) ?? '…' : '–'}</td>
              <td><Link className="linkbtn" href={`/ergebnis/${a.id}`}>ansehen</Link></td>
            </tr>
          ))}</tbody>
        </table>
      </section>
    </>
  );
}
export default function Page() { return <Guard><History /></Guard>; }
