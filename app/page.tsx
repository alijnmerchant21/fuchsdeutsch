'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Fox } from '@/components/Fox';
import { courses, roadmapLevels } from '@/content/course';
import { games } from '@/content/games';
import { DEPOSIT_USD, TRIAL_DAYS, trialDaysLeft } from '@/lib/config';
import { useStore } from '@/lib/store';

// Words that float around the fox in the hero.
const bubbles = [
  { de: 'Hallo!', en: 'Hello!' },
  { de: 'Danke', en: 'Thanks' },
  { de: 'Servus', en: 'Hi (Austria)' },
  { de: 'Moin', en: 'Hi (North)' },
  { de: 'Grüezi', en: 'Hi (Switzerland)' },
  { de: 'Tschüss', en: 'Bye' },
];

const features = [
  { icon: '🎧', title: 'Real voices', text: 'Vienna, Berlin, Zurich, Hamburg' },
  { icon: '🎮', title: '4 games per chapter', text: 'With a leaderboard' },
  { icon: '🔥', title: 'Daily streaks', text: 'Miss a day? A freeze saves you' },
  { icon: '🏆', title: 'Exams', text: 'Goethe style, at your level' },
];

const courseIcon: Record<string, string> = { a1: '🌱', a2: '🌿', 'b2-1': '🌳' };

export default function Landing() {
  const { user } = useStore();
  const [left, setLeft] = useState<number | null>(null);
  const [say, setSay] = useState(0);
  useEffect(() => setLeft(trialDaysLeft()), []);
  useEffect(() => {
    const t = setInterval(() => setSay((s) => (s + 1) % bubbles.length), 2200);
    return () => clearInterval(t);
  }, []);
  const start = user ? '/lernen' : '/login';
  const inTrial = left === null || left > 0;

  return (
    <main className="landing lp">
      <section className="lp-hero">
        <div className="lp-hero-copy">
          <h1>Learn German the fun way.</h1>
          <p className="lead">Short lessons, real voices, games. Free forever.</p>
          <div className="hero-cta">
            <Link href={start} className="btn btn-lg">{user ? 'Continue learning' : 'Start free'}</Link>
            <Link href="/spiele" className="btn btn-lg btn-ghost">Play a game</Link>
          </div>
        </div>
        <div className="lp-hero-art" aria-hidden>
          <div className="lp-blob" />
          {bubbles.map((b, i) => (
            <span key={b.de} className={`lp-bubble lp-b${i} ${say === i ? 'is-on' : ''}`}>{b.de}</span>
          ))}
          <Fox size={180} mood="happy" className="lp-fox" />
          <p className="lp-say" key={say}><b>{bubbles[say].de}</b> = {bubbles[say].en}</p>
        </div>
      </section>

      <section aria-labelledby="courses-h">
        <h2 id="courses-h" className="lp-h2">Pick your level</h2>
        <div className="lp-courses">
          {courses.map((c, i) => (
            <Link key={c.id} href={start} className={`lp-course t-${['mint', 'sky', 'lilac'][i % 3]}`}>
              <span className="lp-course-icon" aria-hidden>{courseIcon[c.id] || '📘'}</span>
              <b className="lp-course-level">{c.level}</b>
              <span className="lp-course-meta">{c.chapters.length} chapters · {c.examName.replace('Goethe-Zertifikat ', 'Goethe ')}</span>
              <span className="lp-course-go">Start →</span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-label="What you get">
        <div className="lp-features">
          {features.map((f) => (
            <div key={f.title} className="lp-feature">
              <span className="lp-feature-icon" aria-hidden>{f.icon}</span>
              <b>{f.title}</b>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="lp-deal" aria-labelledby="deal-h">
        <h2 id="deal-h" className="lp-h2">Free. Really.</h2>
        <div className="lp-deal-row">
          <div className="lp-deal-card t-mint"><span aria-hidden>💚</span><b>Free forever</b><small>No fees, no ads</small></div>
          <div className="lp-deal-card t-butter"><span aria-hidden>⏳</span><b>{TRIAL_DAYS}-day start</b><small>{left !== null && inTrial ? `${left} days left, no deposit` : 'No deposit at the start'}</small></div>
          <div className="lp-deal-card t-sky"><span aria-hidden>🎯</span><b>${DEPOSIT_USD} back</b><small>Refundable deposit if you finish in time</small></div>
        </div>
      </section>

      <section aria-labelledby="games-h">
        <h2 id="games-h" className="lp-h2">Play now</h2>
        <div className="game-grid">
          {games.slice(0, 4).map((g) => (
            <Link key={g.id} href={`/spiele/${g.id}`} className={`game-card t-${g.tone}`}>
              <span className="game-emoji" aria-hidden>{g.emoji}</span>
              <b>{g.title}</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="lp-path" aria-labelledby="path-h">
        <h2 id="path-h" className="lp-h2">From A1 to C2</h2>
        <div className="lp-track">
          <div className="lp-line" />
          {roadmapLevels.map((l, i) => {
            const open = courses.some((c) => c.level === l);
            return (
              <div key={l} className={`lp-stop ${open ? 'is-open' : ''}`} style={{ left: `${(i / (roadmapLevels.length - 1)) * 100}%` }}>
                <span className="lp-dot">{open ? '✓' : ''}</span>
                <span className="lp-stop-label">{l}</span>
              </div>
            );
          })}
          <div className="lp-walker" aria-hidden style={{ '--to': `${(Math.max(...roadmapLevels.map((l, i) => (courses.some((c) => c.level === l) ? i : 0))) / (roadmapLevels.length - 1)) * 100}%` } as React.CSSProperties}>
            <Fox size={44} mood="happy" />
          </div>
        </div>
        <p className="muted small lp-path-note">Open now: {courses.map((c) => c.level).join(', ')}. More levels are coming.</p>
      </section>

      <footer className="foot">
        <Fox size={56} mood="sleepy" />
        <p>Fuchsdeutsch</p>
        <Link href={start} className="btn">{user ? 'Continue learning' : 'Start free'}</Link>
      </footer>
    </main>
  );
}
