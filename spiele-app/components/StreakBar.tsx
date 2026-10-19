'use client';
/* Streak, daily goal and weekly rank, shown above the game library. */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { En } from '@/lib/lang';
import { DAILY_GOAL, leaderboard, stats } from '@/lib/progress';
import { useStore } from '@/lib/store';

const WD = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

export function Flame({ on, size = 46 }: { on: boolean; size?: number }) {
  return (
    <svg className={`flame ${on ? 'on' : ''}`} width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <defs>
        <radialGradient id="fl-o" cx="50%" cy="70%" r="60%"><stop offset="0" stopColor="#FFD36E" /><stop offset=".55" stopColor="#FF9A4D" /><stop offset="1" stopColor="#F2624A" /></radialGradient>
        <radialGradient id="fl-i" cx="50%" cy="75%" r="55%"><stop offset="0" stopColor="#FFF6CF" /><stop offset="1" stopColor="#FFC85A" /></radialGradient>
      </defs>
      <path className="fl-out" d="M24 4c3 8 13 12 13 25a13 13 0 0 1-26 0c0-7 4-10 6-15 1 4 3 6 5 6-1-6 0-11 2-16z" fill={on ? 'url(#fl-o)' : 'var(--line)'} />
      <path className="fl-in" d="M24 22c2 4 7 6 7 13a7 7 0 0 1-14 0c0-4 3-6 4-9 1 2 2 3 3 3 0-3 0-5 0-7z" fill={on ? 'url(#fl-i)' : 'var(--card2)'} />
    </svg>
  );
}

export function StreakBar() {
  const { plays, user } = useStore();
  const s = stats(plays);
  const [rank, setRank] = useState<number | null>(null);
  useEffect(() => {
    if (!user) return;
    void leaderboard('week', null, user.name.split(' ')[0], plays)
      .then((rows) => { const i = rows.findIndex((r) => r.is_me); setRank(i >= 0 ? i + 1 : null); })
      .catch(() => setRank(null));
  }, [plays, user]);
  const pct = Math.min(100, Math.round((100 * s.todayXp) / DAILY_GOAL));
  const C = 2 * Math.PI * 22;

  return (
    <section className="sbar">
      <article className={`card sb-streak ${s.today ? 'lit' : ''}`}>
        <Flame on={s.streak > 0} />
        <div>
          <b className="sb-big">{s.streak} {s.streak === 1 ? 'Tag' : 'Tage'}</b>
          <span className="sb-sub">{s.today ? 'Serie für heute gesichert ✓' : s.streak ? 'Spiel heute, sonst ist die Serie weg!' : 'Spiel heute und starte deine Serie'}</span>
          <En block>{s.today ? 'Streak safe for today' : s.streak ? 'Play today to keep your streak' : 'Play today to start a streak'}</En>
        </div>
        <ol className="sb-week" aria-label="Letzte 7 Tage">
          {s.week.map((d, i) => (
            <li key={d.day} className={`${d.played ? 'ok' : ''} ${i === 6 ? 'now' : ''}`} title={d.day}>
              <i>{d.played ? '✓' : ''}</i><small>{WD[new Date(d.day + 'T12:00').getDay()]}</small>
            </li>
          ))}
        </ol>
      </article>

      <article className="card sb-goal">
        <svg viewBox="0 0 52 52" className="ring" aria-hidden>
          <circle cx="26" cy="26" r="22" className="ring-bg" />
          <circle cx="26" cy="26" r="22" className="ring-fg" style={{ strokeDasharray: C, strokeDashoffset: C * (1 - pct / 100) }} />
        </svg>
        <div>
          <b className="sb-big">{s.todayXp}<small> / {DAILY_GOAL} XP</small></b>
          <span className="sb-sub">{pct >= 100 ? 'Tagesziel geschafft!' : 'Tagesziel'}</span>
          <En block>{pct >= 100 ? 'Daily goal done!' : 'Daily goal'}</En>
        </div>
      </article>

      <Link className="card sb-rank" href="/bestenliste">
        <span className="sb-trophy" aria-hidden>🏆</span>
        <div>
          <b className="sb-big">{rank ? `Platz ${rank}` : '–'}</b>
          <span className="sb-sub">{rank ? `diese Woche · ${s.weekXp} XP` : 'Noch keine XP diese Woche'}</span>
          <En block>{rank ? 'This week’s rank' : 'No XP this week yet'}</En>
        </div>
        <span className="sb-go" aria-hidden>→</span>
      </Link>
    </section>
  );
}
