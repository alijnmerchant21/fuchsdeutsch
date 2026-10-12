'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Fox } from '@/components/Fox';
import { courses, roadmapLevels } from '@/content/course';
import { games } from '@/content/games';
import { DEPOSIT_USD, TRIAL_DAYS, trialDaysLeft } from '@/lib/config';
import { useStore } from '@/lib/store';

const demo = [
  { word: 'Feierabend', en: 'The moment work ends for the day. Germans say it out loud, like a small holiday.' },
  { word: 'dazwischengekommen', en: '"Something came up." The polite way to move an appointment.' },
  { word: 'Zeitempfinden', en: 'Your personal feeling of how fast time passes.' },
];

export default function Landing() {
  const { user } = useStore();
  const [left, setLeft] = useState<number | null>(null);
  const [pick, setPick] = useState(0);
  useEffect(() => setLeft(trialDaysLeft()), []);
  const start = user ? '/lernen' : '/login';
  const inTrial = left === null || left > 0;

  return (
    <main className="landing">
      <section className="hero">
        <div className="hero-copy">
          <p className="hero-level">German {courses.map((c) => c.level).join(' and ')} are open. The other levels are on the way.</p>
          <h1>Learn German the way people speak it.</h1>
          <p className="lead">
            Reading, grammar and listening with voices from Vienna, Berlin, Zurich and the North Sea coast.
            Short lessons, games you can play anytime, and an exam at the end of every chapter.
          </p>
          <div className="hero-cta">
            <Link href={start} className="btn btn-lg">{user ? 'Continue learning' : 'Start learning free'}</Link>
            <Link href="/spiele" className="btn btn-lg btn-ghost">See the games</Link>
          </div>
        </div>
        <div className="hero-demo" aria-label="Try it: tap a word">
          <Fox size={132} mood="happy" className="hero-fox" />
          <div className="demo-card">
            <p className="demo-say">„Um sechs ist <b>Feierabend</b>. Leider ist mir etwas <b>dazwischengekommen</b>, mein <b>Zeitempfinden</b> ist heute kaputt.“</p>
            <div className="demo-tabs" role="tablist" aria-label="Tap a word">
              {demo.map((d, i) => (
                <button key={d.word} type="button" role="tab" aria-selected={pick === i} className="chip-btn" onClick={() => setPick(i)}>{d.word}</button>
              ))}
            </div>
            <p className="demo-explain" key={pick}>{demo[pick].en}</p>
          </div>
        </div>
      </section>

      <section className="deal" aria-labelledby="deal-h">
        <div className="deal-main">
          <h2 id="deal-h">The course is free. Forever.</h2>
          <p className="deal-big">No charges. No hidden fees. Nothing.</p>
          <div className="deal-grid">
            <div className="deal-card t-mint">
              <h3>Join in the first {TRIAL_DAYS} days</h3>
              <p>You learn free with no deposit at all.</p>
              {left !== null && (inTrial
                ? <p className="deal-count"><b>{left}</b> {left === 1 ? 'day' : 'days'} left in the trial period</p>
                : <p className="deal-count">The trial period has ended</p>)}
            </div>
            <div className="deal-card t-butter">
              <h3>Join after that</h3>
              <p>You put down a <b>${DEPOSIT_USD} deposit</b> per course. Finish the course in time and you get <b>100% back</b>.</p>
              <p className="small">Each course has a time limit, for example 2 months for A1. If you do not finish in that time, you forfeit the deposit.</p>
            </div>
          </div>
        </div>
        <aside className="deal-why">
          <Fox size={84} mood="proud" />
          <h3>Why a deposit?</h3>
          <ul>
            <li>It gives you a reason to show up every day.</li>
            <li>It keeps the course for people who really want to learn.</li>
          </ul>
          <p className="small">We never keep money from someone who finishes.</p>
        </aside>
      </section>

      <section className="flow" aria-labelledby="flow-h">
        <h2 id="flow-h">How a chapter works</h2>
        <ol className="flow-steps">
          <li className="t-butter"><b>Einstieg</b><span>Warm up with a quick this-or-that.</span></li>
          <li className="t-mint"><b>Three modules</b><span>Read, listen, learn the grammar, practice.</span></li>
          <li className="t-rose"><b>Alltag und Beruf</b><span>Real situations: calls, appointments, messages.</span></li>
          <li className="t-sky"><b>Games</b><span>Four mini games per chapter, with a leaderboard.</span></li>
          <li className="t-lilac"><b>Chapter exam</b><span>Pass it and the next chapter opens.</span></li>
        </ol>
        <p className="flow-foot">Each course ends with a full exam modeled on the official Goethe exams: Lesen, Hören, Schreiben, Sprechen.</p>
      </section>

      <section className="two">
        <div className="panel">
          <h2>Two ways to get help</h2>
          <div className="modes">
            <div className="mode t-sky"><h3>Easy</h3><p>Tap a hard word and get the meaning in simple German plus English.</p></div>
            <div className="mode t-lilac"><h3>Deutsch pur</h3><p>Same explanations in simple German only. No English anywhere.</p></div>
          </div>
        </div>
        <div className="panel">
          <h2>A streak that forgives</h2>
          <p>Learn a little every day and your streak grows. Miss one day and a streak freeze covers you. You earn a new freeze every 7 days.</p>
          <div className="week" aria-hidden>
            {['M', 'D', 'M', 'D', 'F', 'S', 'S'].map((d, i) => <span key={i} className={i < 5 ? 'is-on' : i === 5 ? 'is-freeze' : ''}>{i < 5 ? '🔥' : i === 5 ? '🧊' : d}</span>)}
          </div>
        </div>
      </section>

      <section className="games-strip" aria-labelledby="games-h">
        <h2 id="games-h">Games you can play right now</h2>
        <p className="lead">Each game opens on its own page. Sign in free so your points are saved and you show up on the leaderboard.</p>
        <div className="game-grid">
          {games.slice(0, 4).map((g) => (
            <Link key={g.id} href={`/spiele/${g.id}`} className={`game-card t-${g.tone}`}>
              <span className="game-emoji" aria-hidden>{g.emoji}</span>
              <b>{g.title}</b>
              <span>{g.blurb}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="roadmap" aria-labelledby="road-h">
        <h2 id="road-h">Where this is going</h2>
        <div className="levels">
          {roadmapLevels.map((l) => { const open = courses.some((c) => c.level === l); return <span key={l} className={`level ${open ? 'is-open' : ''}`}>{l}{open ? ' open now' : ''}</span>; })}
        </div>
        <ul className="soon">
          <li><b>AI tutor</b> Ask questions about any exercise and get an explanation.</li>
          <li><b>Live conversation</b> Speak German with an AI partner in real time.</li>
          <li><b>Daily town hall</b> One hour every day with teachers live on a call.</li>
          <li><b>Community</b> A forum for questions and a live chat for learners.</li>
        </ul>
      </section>

      <footer className="foot">
        <Fox size={56} mood="sleepy" />
        <p>Fuchsdeutsch. Free German, A1 to C2.</p>
        <Link href={start} className="btn">{user ? 'Continue learning' : 'Start learning free'}</Link>
      </footer>
    </main>
  );
}
