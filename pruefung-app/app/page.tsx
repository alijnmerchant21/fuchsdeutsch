'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Landing } from '@/components/Landing';
import { GuaranteeCard } from '@/components/GuaranteeCard';
import { En, useT } from '@/lib/lang';
import { PASS } from '@/lib/config';
import { MODULES } from '@/lib/content';
import { daysBetween, today } from '@/lib/dates';
import { hueOf } from '@/components/Lesson';
import { modulePoints, readiness } from '@/lib/score';
import { useStore } from '@/lib/store';
import type { Attempt, Block } from '@/lib/types';

const dLong = (s: string) => new Date(s + 'T12:00').toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' });
const dShort = (s: string) => new Date(s + 'T12:00').toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric' });
const range = (a: string, b: string) => {
  const x = new Date(a + 'T12:00'), y = new Date(b + 'T12:00');
  const m = (d: Date) => d.toLocaleDateString('de-DE', { month: 'short' });
  return x.getMonth() === y.getMonth() ? `${x.getDate()}. bis ${y.getDate()}. ${m(y)}` : `${x.getDate()}. ${m(x)} bis ${y.getDate()}. ${m(y)}`;
};
const dayDone = (attempts: Attempt[], b: Block, i: number) => attempts.some((a) => a.ref === `${b.id}:${i}`);

function Dashboard() {
  const { user, candidate, attempts, blocks } = useStore();
  const diag = attempts.find((a) => a.kind === 'diagnose');
  const t = today();
  const ready = readiness(attempts);
  const name = candidate?.name || user!.name;
  const router = useRouter();
  useEffect(() => { if (!candidate) router.replace('/setup'); }, [candidate, router]);
  if (!candidate) return <p className="dim">Lädt …</p>;

  if (!diag) {
    const dl = daysBetween(t, candidate.exam_date);
    return (
      <section className="hero">
        <article className="card today hue-lilac">
          <p className="tlabel">Hallo {name}! Dein nächster Schritt</p>
          <h2><span className="hl">Mock Test 1</span></h2>
          <p className="tsub">Circa 40 Minuten: Hören, Lesen, Schreiben. Danach siehst du sofort, in welchen Teilen du Punkte verlierst. Kopfhörer auf, ruhiger Raum.</p>
          <En as="p" block>About 40 minutes: listening, reading, writing. Right after, you see which parts cost you points. Use headphones and a quiet room.</En>
          <Link className="btn big" href="/diagnose">Mock Test starten</Link>
        </article>
        <div className="statcol">
          <article className={`card stat ${dl <= 7 ? 'warn' : ''}`}><b>{dl}</b><span>Tage bis zur Prüfung</span><small>{dLong(candidate.exam_date)} · <Link className="linkbtn" href="/setup">ändern</Link></small></article>
          <article className="card stat"><b>60</b><span>Punkte zum Bestehen</span><small>pro Modul, wie bei Goethe</small></article>
        </div>
      </section>
    );
  }

  const left = daysBetween(t, candidate.exam_date);
  const sorted = [...blocks].sort((a, b) => a.seq - b.seq);
  const current = sorted[sorted.length - 1];
  const prev = sorted[sorted.length - 2];
  const ended = !!current && current.ends_on < t;
  const allDone = !!current && current.content.days.every((_, i) => dayDone(attempts, current, i));
  const prevMissing = prev ? prev.content.days.filter((_, i) => !dayDone(attempts, prev, i)).length : 0;
  const todayIdx = current ? current.content.days.findIndex((d) => d.date === t) : -1;
  const nextIdx = current && !ended ? current.content.days.findIndex((d, i) => !dayDone(attempts, current, i) && d.date <= t) : -1;
  const upcomingIdx = current && !ended ? current.content.days.findIndex((d, i) => !dayDone(attempts, current, i)) : -1;
  const shown = nextIdx >= 0 ? nextIdx : upcomingIdx;
  const sd = current && shown >= 0 ? current.content.days[shown] : null;
  const avg = [ready.hoeren, ready.lesen].filter((x): x is number => x !== null);
  const score = avg.length ? Math.round(avg.reduce((a, b) => a + b, 0) / avg.length) : null;
  const wrongN = attempts.reduce((a, at) => a + Object.values(at.scores).reduce((x, v) => x + v.total - v.right, 0), 0);

  return (
    <>
      <section className="hero">
        {!current || ended || allDone || !sd ? (
          <article className="card today hue-sky">
            <p className="tlabel">{!current ? 'Dein erster Block' : 'Block ' + current.seq + ' abgeschlossen'}</p>
            <h2><span className="hl">Wir analysieren</span> deine Ergebnisse</h2>
            <p className="tsub">{!current
              ? 'Wir schauen uns deinen Mock Test genau an und schalten deinen ersten Block bald frei.'
              : 'Wir bauen deinen nächsten Block aus deinen Antworten und schalten ihn bald frei.'}</p>
            <En as="p" block>{!current ? 'We are looking at your mock test and will unlock your first practice block soon.' : 'We are building your next block from your answers and will unlock it soon.'}</En>
            <Link className="btn ghostbtn" href={`/ergebnis/${diag.id}`}>Mock Test 1 ansehen</Link>
          </article>
        ) : (
          <article className={`card today hue-${hueOf(current.seq)}`}>
            <p className="tlabel">{sd.date === t ? 'Heute' : sd.date < t ? 'Noch offen' : 'Als Nächstes'}, {dLong(sd.date)}</p>
            <h2><span className="hl">{sd.title}</span></h2>
            <p className="tsub">{candidate.minutes_per_day} Minuten.</p>
            <En as="p" block>{sd.en}</En>
            {sd.date <= t
              ? <Link className="btn big" href={`/block/${current.id}/${shown}`}>Starten</Link>
              : <p className="tsub dim">Öffnet sich am {dLong(sd.date)}.</p>}
          </article>
        )}
        <div className="statcol">
          <article className={`card stat ${left <= 7 ? 'warn' : ''}`}><b>{left}</b><span>Tage bis zur Prüfung</span><small>{dLong(candidate.exam_date)} · <Link className="linkbtn" href="/setup">ändern</Link></small></article>
          <article className={`card stat ${score === null ? '' : score >= PASS ? 'good' : 'warn'}`}><b>{score ?? '–'}</b><span>Stand Hören + Lesen, von 100</span><small>Bestehen ab 60</small></article>
        </div>
      </section>

      {current && !ended && prevMissing > 0 && (
        <div className="notice">
          <b>Dein neuer Block ist da</b>
          Dein letzter Block hat geendet, bevor du fertig warst. Deshalb haben wir diesen Block aus den Antworten gebaut, die du bis dahin gegeben hast. Schließe diesen Block bis {dLong(current.ends_on)} ab, dann bekommst du eine vollständige Analyse. Bleibt er unvollständig, basiert auch der nächste Block nur auf einem Teil deiner Ergebnisse und ist ungenauer.
          <En block>Your last block closed before you finished it, so this block is built from the answers you gave so far. Finish this one on time for a full analysis.</En>
        </div>
      )}

      <section className="card path">
        <div className="pathhead"><h3>Dein Weg</h3><span className="dim">{sorted.length ? `Block ${current!.seq} · ${sorted.reduce((a, b) => a + b.content.days.filter((_, i) => dayDone(attempts, b, i)).length, 0)} Tage erledigt` : 'Startet mit deinem ersten Block'}</span></div>
        <div className="dots">
          <div className="dotweek hue-lilac"><Link className="dot done" href={`/ergebnis/${diag.id}`} title="Mock Test 1" aria-label="Mock Test 1" /></div>
          {sorted.map((b) => (
            <div key={b.id} className={`dotweek hue-${hueOf(b.seq)}`}>
              {b.content.days.map((d, i) => (
                <Link key={i} href={`/block/${b.id}/${i}`} title={`${dShort(d.date)}: ${d.title}`} aria-label={d.title}
                  className={`dot ${dayDone(attempts, b, i) ? 'done' : ''} ${b === current && i === todayIdx ? 'now' : ''} ${d.date > t ? 'locked' : ''}`} />
              ))}
            </div>
          ))}
          {left > 0 && <div className="dotweek"><span className="dot locked" title="Nächster Block: nach der Analyse" /></div>}
        </div>
      </section>

      <section className="readygrid">
        {MODULES.map((m) => {
          const p = ready[m.id];
          const on = candidate.modules.includes(m.id);
          return (
            <article key={m.id} className={`card ready hue-${m.hue}`} style={{ opacity: on && m.live ? 1 : 0.6 }}>
              <span className="dim small">{m.name}</span>
              <b>{!m.live ? 'bald' : p ?? '–'}{m.live && p !== null && <small className="dim">/100</small>}</b>
              {m.live && <div className="meter"><i style={{ width: `${p ?? 0}%` }} /><u title="60 Punkte zum Bestehen" /></div>}
              <span className="small dim">{!m.live ? 'Kommt bald' : !on ? 'Nicht gebucht' : p === null ? (m.id === 'schreiben' ? 'Wird korrigiert' : 'Noch kein Ergebnis') : p >= PASS ? 'Auf Kurs' : `Noch ${PASS - p} Punkte`}</span>
            </article>
          );
        })}
      </section>

      {current && !ended && (
        <section className="weekgrid">
          <article className={`card week hue-${hueOf(current.seq)}`}>
            <header><span className="wnum">Block {current.seq}</span><span className="wrange">{range(current.starts_on, current.ends_on)}</span></header>
            <h3><span className="hl">{current.content.title}</span></h3>
            <ul className="dayrows">
              {current.content.days.map((d, i) => {
                const done = dayDone(attempts, current, i);
                const open = d.date <= t;
                const inner = (<><span className="ddate">{dShort(d.date)}</span><span className="dtitle">{d.title}</span><span className="dstate">{done ? '✓' : open ? `${candidate.minutes_per_day} Min` : ''}</span></>);
                const cls = `dayrow ${done ? 'done' : ''} ${i === todayIdx ? 'now' : ''} ${open || done ? '' : 'locked'}`;
                return <li key={i}><Link className={cls} href={`/block/${current.id}/${i}`}>{inner}</Link></li>;
              })}
            </ul>
            <div className="wbar"><i style={{ width: `${(100 * current.content.days.filter((_, i) => dayDone(attempts, current, i)).length) / current.content.days.length}%` }} /></div>
          </article>
          {current.content.note && (
            <article className="card week hue-butter">
              <header><span className="wnum">Fokus</span><span className="wrange">{current.content.focus.length} Teile</span></header>
              <h3><span className="hl">Darum geht es</span></h3>
              <p className="weekintro" style={{ marginBottom: 16 }}>{current.content.note}</p>
            </article>
          )}
        </section>
      )}

      <GuaranteeCard />

      <section className="tools">
        <Link className="card tool hue-rose" href="/fehler"><b>Fehler wiederholen</b><span>{wrongN ? `${wrongN} Fragen aus deinen ersten Versuchen` : 'Noch keine Fehler gespeichert'}</span><En>Redo the questions you got wrong</En></Link>
        <Link className="card tool hue-butter" href="/fallen"><b>Die Fallen</b><span>Die Muster hinter fast jeder falschen Antwort</span><En>The traps behind most wrong answers</En></Link>
        <Link className="card tool hue-sky" href="/verlauf"><b>Verlauf</b><span>Alle Ergebnisse, auch Mock Test 1</span><En>All your results</En></Link>
        <Link className="card tool hue-mint" href="/heft"><b>Mein Fehlerheft</b><span>Deine Notizen aus den Übungstagen</span><En>Your notes from practice days</En></Link>
      </section>
    </>
  );
}

export default function Home() {
  const { ready, user } = useStore();
  if (!ready) return <p className="dim">Lädt …</p>;
  return user ? <Dashboard /> : <Landing />;
}
