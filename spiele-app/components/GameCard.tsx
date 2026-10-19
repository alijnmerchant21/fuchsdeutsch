'use client';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { levelName, type Game } from '@/lib/games';
import { En, useT } from '@/lib/lang';
import { GameArt } from './GameArt';

/**
 * One game as a card.
 * app: German text with an English help line, opens the game.
 * landing: follows the DE | EN switch, a live game leads to sign-in.
 */
export function GameCard({ g, mode, i = 0 }: { g: Game; mode: 'app' | 'landing'; i?: number }) {
  const t = useT();
  const live = !!g.live;
  const style = { '--i': i } as CSSProperties;
  const body = (
    <>
      <div className="g-top">
        <GameArt art={g.art} />
        <span className="g-level">{levelName(g.level)}</span>
        {live && g.isNew && <span className="g-new">{mode === 'landing' ? t('Neu', 'New') : 'Neu'}</span>}
        {!live && <span className="g-soon">{mode === 'landing' ? t('Kommt bald', 'Coming soon') : 'Kommt bald'}</span>}
      </div>
      <div className="g-body">
        <h3>{g.title}</h3>
        {mode === 'landing'
          ? <p className="g-line">{t(g.tagline, g.taglineEn)}</p>
          : <><p className="g-line">{g.tagline}</p><En as="p" block>{g.taglineEn}</En></>}
        <div className="g-skills">{g.skills.map((s) => <span key={s}>{s}</span>)}</div>
        <div className="g-meta">
          <span title={mode === 'landing' ? t('Spieler', 'Players') : 'Spieler'}>
            <svg viewBox="0 0 24 24" aria-hidden><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5M16 4.8a3.5 3.5 0 0 1 0 6.4M18.5 13.8c1.8.9 3 2.8 3 5" /></svg>
            {mode === 'landing' ? t(g.players, g.playersEn) : g.players}
          </span>
          <span><svg viewBox="0 0 24 24" aria-hidden><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>{g.minutes} Min</span>
        </div>
        {live
          ? <span className="btn g-play">{mode === 'landing' ? t('Kostenlos spielen', 'Play for free') : 'Spielen'} <span aria-hidden>→</span></span>
          : <span className="g-wait">{mode === 'landing' ? t('In Arbeit', 'In the works') : 'In Arbeit'}</span>}
      </div>
    </>
  );
  const cls = `card game hue-${g.hue} ${live ? 'is-live' : 'is-soon'}`;
  if (!live) return <article className={cls} style={style} aria-disabled="true">{body}</article>;
  return <Link className={cls} style={style} href={mode === 'landing' ? `/login?next=${encodeURIComponent(g.href!)}` : g.href!}>{body}</Link>;
}
