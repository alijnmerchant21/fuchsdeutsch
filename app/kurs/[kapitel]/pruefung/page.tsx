'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ExamRunner } from '@/components/ExamRunner';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { findChapter } from '@/content/course';
import { glossaryFor } from '@/content/glossary';
import { GlossaryContext } from '@/components/Rich';
import { De, HintProvider } from '@/components/Hint';
import { useStore } from '@/lib/store';
import { chapterOpen, examOpen } from '@/lib/unlock';

function Exam() {
  const { kapitel } = useParams<{ kapitel: string }>();
  const { progress, isAdmin, recordExam } = useStore();
  const admin = isAdmin;
  const found = findChapter(kapitel);
  const ch = found?.chapter;
  const course = found?.course;
  const ci = found?.index ?? -1;
  if (!ch || !course || !ch.exam.length) return <main className="page center"><Fox size={90} mood="wow" /><h1>Diese Prüfung gibt es noch nicht.</h1><Link className="btn" href="/kurs">Zur Kursübersicht</Link></main>;
  if (!(chapterOpen(course, ci, progress, admin) && examOpen(ch, progress, admin))) {
    return <main className="page center"><Fox size={90} mood="sleepy" /><h1>Noch geschlossen</h1><p className="lead">Schließe zuerst alle Abschnitte von Kapitel {ch.number} ab.</p><Link className="btn" href="/kurs">Zur Kursübersicht</Link></main>;
  }
  const nextCh = course.chapters[ci + 1];
  return (
    <GlossaryContext.Provider value={glossaryFor(course.id)}>
    <HintProvider course={course.id}>
    <main className="page lesson t-lilac">
      <ExamRunner
        items={ch.exam}
        title={`${course.level}, Prüfung Kapitel ${ch.number}: ${ch.title}`}
        intro={<De en="Grammar, reading, listening and phrases from this chapter. Take about 20 minutes.">Grammatik, Lesen, Hören und Redemittel aus diesem Kapitel. Nimm dir etwa 20 Minuten Zeit.</De>}
        onFinish={(pct) => recordExam(ch.id, pct)}
        backHref="/kurs"
        passHref={nextCh ? '/kurs' : `/abschlusspruefung/${course.id}`}
        passLabel={nextCh ? `Kapitel ${nextCh.number} ist jetzt offen` : 'Zur Abschlussprüfung'}
      />
    </main>
    </HintProvider>
    </GlossaryContext.Provider>
  );
}

export default function Page() { return <RequireUser><Exam /></RequireUser>; }
