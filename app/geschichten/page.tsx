'use client';

import Link from 'next/link';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { stories } from '@/content/stories';

function List() {
  const a1 = stories.filter((s) => s.level === 'A1');
  return (
    <main className="page">
      <header className="game-head">
        <Fox size={96} mood="happy" className="bob" />
        <div>
          <h1>Geschichten</h1>
          <p className="lead">Kurze Texte zum Lesen. Optional — du brauchst sie nicht für den Kursfortschritt.</p>
        </div>
      </header>
      <h2 className="course-title">A1 <span className="pill t-mint">{a1.length} Geschichten</span></h2>
      <div className="story-list">
        {a1.map((s) => (
          <Link key={s.id} href={`/geschichten/${s.id}`} className="story-card t-butter">
            <b>{s.title}</b>
            <span className="muted small">{s.minutes} Min. · {s.why}</span>
            <span className="story-go">Lesen →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default function Page() {
  return <RequireUser><List /></RequireUser>;
}
