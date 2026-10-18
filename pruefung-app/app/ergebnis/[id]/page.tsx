'use client';
import Link from 'next/link';
import { use, useEffect, useState } from 'react';
import { Guard } from '@/components/Guard';
import { LessonBar, LessonHead } from '@/components/Lesson';
import { ResultView } from '@/components/ResultView';
import { fmt } from '@/lib/dates';
import { db } from '@/lib/db';
import { useStore } from '@/lib/store';
import type { Attempt } from '@/lib/types';
import { En } from '@/lib/lang';

function Result({ id }: { id: string }) {
  const { attempts, blocks, candidate } = useStore();
  const [a, setA] = useState<Attempt | null | undefined>(attempts.find((x) => x.id === id));
  useEffect(() => { if (!a) void db.attempt(id).then(setA); }, [a, id]);
  if (a === undefined) return <p className="dim">Lädt …</p>;
  if (!a) return <p className="msg-err">Ergebnis nicht gefunden.</p>;
  const diag = a.kind === 'diagnose';
  const [bid, idx] = a.ref.split(':');
  const block = blocks.find((b) => b.id === bid);
  const title = diag ? 'Mock Test 1: Diagnose' : block?.content.days[Number(idx)]?.title ?? 'Ergebnis';
  return (
    <>
      <LessonBar label="Verlauf" />
      <LessonHead hue={diag ? 'lilac' : 'sky'} label={`${fmt(a.finished_at.slice(0, 10))}${block ? ` · Block ${block.seq}` : ''}`} title={title} />
      <ResultView attempt={a} blocks={blocks}>
        {diag && (
          <div className="sendbox">
            <p><b>Wie geht es weiter?</b> Wir analysieren deinen Mock Test{candidate ? ` und bauen deinen ersten Block bis zur Prüfung am ${new Date(candidate.exam_date + 'T12:00').toLocaleDateString('de-DE', { day: 'numeric', month: 'long' })}` : ''}. Du siehst ihn auf deiner Übersicht, sobald er frei ist. Bis dahin: Lies unten deine Fehler mit den markierten Sätzen.<En block>What next? We analyze your mock test and build your first block. It appears on your overview once it is ready. Until then, read your mistakes below with the marked sentences.</En></p>
            <Link className="btn" href="/">Zur Übersicht</Link>
          </div>
        )}
      </ResultView>
    </>
  );
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <Guard><Result id={id} /></Guard>;
}
