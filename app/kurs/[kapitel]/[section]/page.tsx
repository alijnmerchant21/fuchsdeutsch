'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { Player } from '@/components/Player';
import { GlossaryContext } from '@/components/Rich';
import { findChapter } from '@/content/course';
import { glossaryFor } from '@/content/glossary';
import { useStore } from '@/lib/store';
import { chapterOpen, sectionOpen } from '@/lib/unlock';

function Lesson() {
  const { kapitel, section } = useParams<{ kapitel: string; section: string }>();
  const { progress, isAdmin } = useStore();
  const found = findChapter(kapitel);
  const ch = found?.chapter;
  const course = found?.course;
  const si = ch ? ch.sections.findIndex((s) => s.id === section) : -1;
  const sec = ch && si >= 0 ? ch.sections[si] : null;

  if (!ch || !sec || !course) {
    return <main className="v3-page v3-center-page"><Fox size={90} mood="wow" /><h1>Diese Seite gibt es nicht.</h1><Link className="v3-btn" href="/kurs">Zur Kursübersicht</Link></main>;
  }
  const allowed = chapterOpen(course, found!.index, progress, isAdmin) && sectionOpen(ch, si, progress, isAdmin);
  if (!allowed) {
    return <main className="v3-page v3-center-page"><Fox size={90} mood="sleepy" /><h1>Noch geschlossen</h1><p className="muted">Schließe zuerst den Abschnitt davor ab.</p><Link className="v3-btn" href="/kurs">Zur Kursübersicht</Link></main>;
  }
  return (
    <GlossaryContext.Provider value={glossaryFor(course.id)}>
      <Player course={course} ch={ch} sec={sec} si={si} />
    </GlossaryContext.Provider>
  );
}

export default function Page() { return <RequireUser><Lesson /></RequireUser>; }
