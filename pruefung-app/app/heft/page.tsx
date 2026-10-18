'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Guard } from '@/components/Guard';
import { LessonBar, LessonHead } from '@/components/Lesson';
import { loadNotes } from '@/lib/local';
import { useStore } from '@/lib/store';

function Heft() {
  const { user } = useStore();
  const [notes, setNotes] = useState<ReturnType<typeof loadNotes>>({});
  useEffect(() => { if (user) setNotes(loadNotes(user.id)); }, [user]);
  const rows = Object.entries(notes).sort((a, b) => a[1].date.localeCompare(b[1].date));
  return (
    <>
      <LessonBar />
      <LessonHead hue="mint" title="Mein Fehlerheft" sub="Lies das vor jedem Blocktest und vor der Prüfung einmal durch." />
      <section className="card block">
        {rows.length ? (
          <ul className="notes">{rows.map(([ref, n]) => {
            const [b, i] = ref.split(':');
            return <li key={ref}><Link className="linkbtn" href={`/block/${b}/${i}`}>{new Date(n.date + 'T12:00').toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric', month: 'short' })}, {n.title}</Link><p>{n.text}</p></li>;
          })}</ul>
        ) : <p>Noch leer. Am Ende jedes Übungstags schreibst du eine Zeile: Welche Falle hat dich erwischt?</p>}
      </section>
    </>
  );
}
export default function Page() { return <Guard><Heft /></Guard>; }
