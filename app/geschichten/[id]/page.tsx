'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { Rich } from '@/components/Rich';
import { storyById } from '@/content/stories';
import { useStore } from '@/lib/store';

function StoryPage() {
  const { id } = useParams<{ id: string }>();
  const story = storyById(id);
  const { progress } = useStore();
  const easy = progress.mode === 'easy';
  const [picked, setPicked] = useState<Record<number, number>>({});
  const [done, setDone] = useState(false);

  if (!story) {
    return (
      <main className="page center">
        <Fox size={80} mood="wow" />
        <h1>Geschichte nicht gefunden</h1>
        <Link href="/geschichten" className="btn">Zurück</Link>
      </main>
    );
  }

  const score = story.quiz.reduce((n, q, i) => n + (picked[i] === q.answer ? 1 : 0), 0);

  return (
    <main className="page narrow story-read">
      <p><Link href="/geschichten" className="back" aria-label="Zurück">←</Link></p>
      <header className="welcome-head">
        <Fox size={72} mood="happy" />
        <div>
          <p className="pill t-mint">{story.level} · {story.minutes} Min.</p>
          <h1>{story.title}</h1>
          <p className="muted small">{easy ? story.whyEn : story.why}</p>
        </div>
      </header>
      {easy && <p className="lead">{story.en}</p>}
      <article className="card story-body">
        {story.body.split(/\n\n+/).map((p, i) => (
          <p key={i}><Rich text={p} /></p>
        ))}
      </article>
      <section className="card form">
        <h2 className="h3">Verstehst du den Text?</h2>
        {story.quiz.map((q, i) => (
          <fieldset key={i}>
            <legend>{q.q}</legend>
            <div className="choices">
              {q.options.map((opt, oi) => {
                const pressed = picked[i] === oi;
                const show = done && (oi === q.answer || pressed);
                const ok = oi === q.answer;
                return (
                  <button
                    key={opt}
                    type="button"
                    className={`choice ${show ? (ok ? 'is-ok' : 'is-bad') : ''}`}
                    aria-pressed={pressed}
                    disabled={done}
                    onClick={() => setPicked((p) => ({ ...p, [i]: oi }))}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
        {!done ? (
          <button
            type="button"
            className="btn"
            disabled={Object.keys(picked).length < story.quiz.length}
            onClick={() => setDone(true)}
          >
            Prüfen
          </button>
        ) : (
          <p className="pill t-mint" role="status">{score} / {story.quiz.length} richtig</p>
        )}
      </section>
      <p><Link href="/geschichten" className="btn btn-ghost">Weitere Geschichten</Link></p>
    </main>
  );
}

export default function Page() {
  return <RequireUser><StoryPage /></RequireUser>;
}
