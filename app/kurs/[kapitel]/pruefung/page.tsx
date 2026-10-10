'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ExamRunner } from '@/components/ExamRunner';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { chapterById, course } from '@/content/course';
import { useStore } from '@/lib/store';
import { chapterOpen, examOpen } from '@/lib/unlock';

function Exam() {
  const { kapitel } = useParams<{ kapitel: string }>();
  const { progress, isAdmin, adminView, recordExam } = useStore();
  const admin = isAdmin && adminView;
  const ch = chapterById(kapitel);
  const ci = course.chapters.findIndex((c) => c.id === kapitel);
  if (!ch || !ch.exam.length) return <main className="page center"><Fox size={90} mood="wow" /><h1>Diese Prüfung gibt es noch nicht.</h1><Link className="btn" href="/lernen">Zur Kursübersicht</Link></main>;
  if (!(chapterOpen(course, ci, progress, admin) && examOpen(ch, progress, admin))) {
    return <main className="page center"><Fox size={90} mood="sleepy" /><h1>Noch geschlossen</h1><p className="lead">Schließe zuerst alle Abschnitte von Kapitel {ch.number} ab.</p><Link className="btn" href="/lernen">Zur Kursübersicht</Link></main>;
  }
  const nextCh = course.chapters[ci + 1];
  return (
    <main className="page lesson t-lilac">
      <ExamRunner
        items={ch.exam}
        title={`Prüfung Kapitel ${ch.number}: ${ch.title}`}
        intro="Grammatik, Lesen, Hören und Redemittel aus diesem Kapitel. Nimm dir etwa 20 Minuten Zeit."
        onFinish={(pct) => recordExam(ch.id, pct)}
        backHref="/lernen"
        passHref="/lernen"
        passLabel={nextCh ? `Kapitel ${nextCh.number} ist jetzt offen` : 'Zur Abschlussprüfung'}
      />
    </main>
  );
}

export default function Page() { return <RequireUser><Exam /></RequireUser>; }
