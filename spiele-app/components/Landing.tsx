'use client';
/* Public home page. Flow: hero (what it is, two buttons) → how it works → the games → start. Same look as Fuchsdeutsch Prüfung. */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GAMES, LEVELS } from '@/lib/games';
import { useT } from '@/lib/lang';
import { Fox } from './Fox';
import { GameCard } from './GameCard';
import { Reveal } from './Reveal';

const I = {
  user: <svg viewBox="0 0 24 24" aria-hidden><circle cx="12" cy="8.5" r="4" /><path d="M4.5 20.5c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5" /></svg>,
  levels: <svg viewBox="0 0 24 24" aria-hidden><path d="M4 20V14h4v6M10 20V9h4v11M16 20V4h4v16" /></svg>,
  dice: <svg viewBox="0 0 24 24" aria-hidden><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="9" cy="9" r="1.2" /><circle cx="15" cy="15" r="1.2" /><circle cx="15" cy="9" r="1.2" /><circle cx="9" cy="15" r="1.2" /></svg>,
  down: <svg viewBox="0 0 24 24" aria-hidden><path d="M12 5v14M6 13l6 6 6-6" /></svg>,
};

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

/** Hero art: Fuchsi on the blob, level chips floating around, a die that keeps rolling. */
function HeroArt() {
  const t = useT();
  const [i, setI] = useState(0);
  const [face, setFace] = useState(5);
  useEffect(() => {
    const id = setInterval(() => { setI((x) => (x + 1) % 4); setFace(1 + Math.floor(Math.random() * 6)); }, 2200);
    return () => clearInterval(id);
  }, []);
  const PIPS: Record<number, number[]> = { 1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8] };
  const words = [
    ['A1', t('Hallo!', 'Hello!')],
    ['A2', 'der · die · das'],
    ['B1', t('Schlüssel, bitte!', 'Keys, please!')],
    ['B2', t('Tomaten auf den Augen', 'Tomatoes on your eyes')],
  ];
  return (
    <div className="ha" aria-hidden>
      <div className="ha-blob" />
      <Fox size={170} mood="happy" className="ha-fox" />
      {words.map(([lv], k) => <span key={lv} className={`ha-chip ha-c${k} ${k === i ? 'on' : ''}`}>{lv}</span>)}
      <div className="ha-card hd-card">
        <div key={face} className="hd-die">{Array.from({ length: 9 }, (_, k) => <i key={k} className={PIPS[face].includes(k) ? 'p' : ''} />)}</div>
        <div><small className="dim">{words[i][0]}</small><b key={i} className="hd-word">{words[i][1]}</b></div>
      </div>
    </div>
  );
}

export function Landing() {
  const t = useT();
  const h1a = t('Deutsch lernen.', 'Learn German.').split(' ');
  const h1b = t('Einfach spielen.', 'Just play.').split(' ');
  const preview = [...GAMES].sort((a, b) => Number(!!b.live) - Number(!!a.live)).slice(0, 6);

  return (
    <div className="lp">
      <section className="lp-hero">
        <div className="lp-hero-text">
          <p className="lp-eyebrow rise">{t('Fuchsdeutsch Spiele · A1 bis B2', 'Fuchsdeutsch Games · A1 to B2')}</p>
          <h1 className="lp-h1">
            {h1a.map((w, k) => <span key={k} className="rise word" style={{ animationDelay: `${80 + k * 90}ms` }}>{w}</span>)}<br />
            <span className="lp-soft">{h1b.map((w, k) => <span key={k} className="rise word" style={{ animationDelay: `${260 + k * 90}ms` }}>{w}</span>)}</span>
          </h1>
          <p className="lp-lead rise" style={{ animationDelay: '600ms' }}>{t(
            'Viele kleine Spiele, mit denen du dein Deutsch lernst und verbesserst. Würfeln, raten, Sätze bauen: allein, mit Freunden oder gegen den Computer. Jede Antwort wird sofort geprüft.',
            'Lots of small games to learn and improve your German. Roll dice, guess, build sentences: alone, with friends or against the computer. Every answer is checked right away.')}</p>
          <div className="lp-ctas rise" style={{ animationDelay: '720ms' }}>
            <Link className="btn big lp-pill" href="/login">{t('Kostenlos spielen', 'Play for free')} <span aria-hidden>→</span></Link>
            <button type="button" className="btn big ghostbtn lp-pill2" onClick={() => scrollTo('spiele')}>{t('Die Spiele ansehen', 'See the games')} <span className="lp-down">{I.down}</span></button>
          </div>
          <ul className="lp-facts rise" style={{ animationDelay: '840ms' }}>
            <li><b>{LEVELS.length}</b><span>{t('Niveaus, von A1 bis B2', 'levels, from A1 to B2')}</span></li>
            <li><b>$0</b><span>{t('alle Spiele kostenlos', 'all games free')}</span></li>
            <li><b>{GAMES.length}</b><span>{t('Spiele, laufend neue', 'games, more coming')}</span></li>
          </ul>
        </div>
        <div className="lp-hero-art rise" style={{ animationDelay: '300ms' }}><HeroArt /></div>
      </section>

      <section className="lp-sec" id="how">
        <Reveal>
          <p className="lp-eyebrow">{t('So funktioniert es', 'How it works')}</p>
          <h2 className="lp-h2">{t('Anmelden, Niveau wählen,', 'Sign in, pick your level,')}<br /><span className="lp-soft">{t('losspielen.', 'start playing.')}</span></h2>
        </Reveal>
        <div className="lp-steps three">
          <Reveal as="article" className="lp-step hue-sky" delay={0}>
            <div className="lp-step-top"><span className="lp-num">01</span><span className="lp-ico">{I.user}</span></div>
            <h3>{t('Kostenlos anmelden', 'Sign in for free')}</h3>
            <p>{t('Mit deinem Fuchsdeutsch-Konto oder neu mit Google oder E-Mail.', 'With your Fuchsdeutsch account, or new with Google or email.')}</p>
          </Reveal>
          <Reveal as="article" className="lp-step hue-mint" delay={120}>
            <div className="lp-step-top"><span className="lp-num">02</span><span className="lp-ico">{I.levels}</span></div>
            <h3>{t('Niveau wählen', 'Pick your level')}</h3>
            <p>{t('A1, A2, B1 oder B2. Du siehst nur die Spiele, die zu dir passen.', 'A1, A2, B1 or B2. You only see the games that fit you.')}</p>
          </Reveal>
          <Reveal as="article" className="lp-step hue-peach" delay={240}>
            <div className="lp-step-top"><span className="lp-num">03</span><span className="lp-ico">{I.dice}</span></div>
            <h3>{t('Spielen und lernen', 'Play and learn')}</h3>
            <p>{t('Sofortiges Feedback mit kurzer Erklärung, auf Wunsch auch auf Englisch.', 'Instant feedback with a short explanation, in English too if you like.')}</p>
          </Reveal>
        </div>
      </section>

      <section className="lp-sec" id="spiele">
        <Reveal>
          <p className="lp-eyebrow">{t('Die Spiele', 'The games')}</p>
          <h2 className="lp-h2">{t('Zwei Spiele sind schon da.', 'Two games are ready.')}<br /><span className="lp-soft">{t('Viele weitere folgen.', 'Many more are coming.')}</span></h2>
        </Reveal>
        <div className="ggrid">{preview.map((g, i) => <GameCard key={g.id} g={g} mode="landing" i={i} />)}</div>
      </section>

      <Reveal as="section" className="lp-cta">
        <Fox size={72} mood="wow" />
        <h2>{t('Lust auf eine Runde?', 'Up for a round?')}</h2>
        <p className="dim">{t('Kostenlos, ohne Download. Ein Konto für Fuchsdeutsch, die Prüfung und die Spiele.', 'Free, no download. One account for Fuchsdeutsch, the exam and the games.')}</p>
        <Link className="btn big lp-pill" href="/login">{t('Kostenlos spielen', 'Play for free')} <span aria-hidden>→</span></Link>
      </Reveal>
    </div>
  );
}
