'use client';

import Link from 'next/link';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { stories } from '@/content/stories';

function List() {
  const levels = (['A1', 'A2', 'B1', 'B2'] as const).map((l) => ({ l, list: stories.filter((s) => s.level === l) })).filter((x) => x.list.length);
  const tints = ['t-butter', 't-sky', 't-lilac'];
  return (
    <main className="page">
      <header className="game-head">
        <Fox size={96} mood="happy" className="bob" />
        <div>
          <h1>Geschichten</h1>
          <p className="lead">Kurze Texte zum Lesen. Optional — du brauchst sie nicht für den Kursfortschritt.</p>
        </div>
      </header>
      {levels.map(({ l, list }, i) => (
        <section key={l}>
          <h2 className="course-title">{l} <span className="pill t-mint">{list.length} Geschichten</span></h2>
          <div className="story-list">
            {list.map((s) => (
              <Link key={s.id} href={`/geschichten/${s.id}`} className={`story-card ${tints[i % tints.length]}`}>
                <b>{s.title}</b>
                <span className="muted small">{s.minutes} Min. · {s.why}</span>
                <span className="story-go">Lesen →</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default function Page() {
  return <RequireUser><List /></RequireUser>;
}
