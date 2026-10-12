'use client';
import Link from 'next/link';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { courseById, courses } from '@/content/course';
import { games } from '@/content/games';
import { PASS_MARK } from '@/lib/config';
import { dayKey, streakAlive, useStore } from '@/lib/store';
import { chapterOpen, chapterPercent, examOpen, finalOpen, sectionKey, sectionOpen } from '@/lib/unlock';


function Week() {
  const { progress } = useStore();
  const days = [...Array(7)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() - (6 - i)); return d; });
  return (
    <div className="week">
      {days.map((d, i) => {
        const on = (progress.days[dayKey(d)] || 0) > 0;
        return <span key={i} className={on ? 'is-on' : ''} title={d.toLocaleDateString('de-DE')}>{on ? '🔥' : d.toLocaleDateString('de-DE', { weekday: 'narrow' })}</span>;
      })}
    </div>
  );
}

function Dashboard() {
  const { user, progress, isAdmin, adminView, setCourse } = useStore();
  const admin = isAdmin && adminView;
  const course = courseById(progress.course) || courses[0];
  const DAILY_GOAL = progress.profile?.goal || 50;
  const today = progress.days[dayKey()] || 0;
  const alive = streakAlive(progress.streak);
  const goalPct = Math.min(100, Math.round((today / DAILY_GOAL) * 100));

  // Next thing to do
  let next: { href: string; label: string } | null = null;
  for (let ci = 0; ci < course.chapters.length && !next; ci++) {
    const ch = course.chapters[ci];
    if (!ch.sections.length || !chapterOpen(course, ci, progress, false)) break;
    const s = ch.sections.find((x) => !progress.done[sectionKey(ch.id, x.id)]);
    if (s) next = { href: `/kurs/${ch.id}/${s.id}`, label: `${s.label}: ${s.title}` };
    else if (!progress.exams[ch.id]?.passed) next = { href: `/kurs/${ch.id}/pruefung`, label: `Prüfung Kapitel ${ch.number}` };
  }

  return (
    <main className="page dash">
      <section className="dash-top">
        <div className="hello">
          <Fox size={96} mood={today >= DAILY_GOAL ? 'proud' : alive ? 'happy' : 'sleepy'} className="bob" />
          <div>
            <h1>Hallo {user!.name.split(' ')[0]}!</h1>
            <p className="lead">{today >= DAILY_GOAL ? 'Tagesziel geschafft. Fuchsi ist stolz auf dich.' : alive ? 'Schön, dass du wieder da bist.' : 'Heute ist ein guter Tag für zehn Minuten Deutsch.'}</p>
            {next && <Link href={next.href} className="btn btn-lg">Weiter: {next.label}</Link>}
          </div>
        </div>
        <div className="dash-stats">
          <div className="card stat-card t-peach">
            <p className="stat-big"><span className={`flame ${alive ? 'is-alive' : ''}`} aria-hidden>🔥</span>{alive ? progress.streak.count : 0}</p>
            <p>{progress.streak.count === 1 && alive ? 'Tag in Folge' : 'Tage in Folge'}</p>
            <Week />
            <p className="small muted">Rekord: {progress.streak.best} Tage, Joker: {'🧊'.repeat(progress.streak.freezes) || 'keiner'}</p>
          </div>
          <div className="card stat-card t-butter">
            <p className="stat-big"><span aria-hidden>⭐</span>{today}<small> / {DAILY_GOAL}</small></p>
            <p>Punkte heute</p>
            <div className="meter big"><i style={{ width: `${goalPct}%` }} /></div>
            <p className="small muted">Gesamt: {progress.xp} XP</p>
          </div>
        </div>
      </section>

      <div className="course-pick" role="tablist" aria-label="Kurs wählen">
        {courses.map((c) => {
          const done = c.chapters.filter((ch) => progress.exams[ch.id]?.passed).length;
          return (
            <button key={c.id} type="button" role="tab" aria-selected={c.id === course.id} className="course-tab" onClick={() => setCourse(c.id)}>
              <b>{c.level}</b>
              <small>{done} / {c.chapters.length} Kapitel</small>
            </button>
          );
        })}
      </div>
      <h2 className="course-title">{course.title} <span className="pill t-lilac">{course.chapters.length} Kapitel</span></h2>
      <p className="lead">{course.blurb}</p>

      <div className="chapters">
        {course.chapters.map((ch, ci) => {
          const open = chapterOpen(course, ci, progress, admin);
          const ready = ch.sections.length > 0;
          const pct = chapterPercent(ch, progress);
          const exam = progress.exams[ch.id];
          if (!ready || !open) {
            return (
              <div key={ch.id} className="chapter is-locked">
                <div className="chapter-head">
                  <span className="chapter-num">{ch.number}</span>
                  <div><h3>{ch.title}</h3><p className="muted small">{ch.theme}. {ch.grammar}</p></div>
                  <span className="lock" title={ready ? 'Bestehe zuerst die Prüfung im Kapitel davor' : 'Dieses Kapitel ist in Arbeit'}>{ready ? '🔒' : '🛠️'}</span>
                </div>
                {!ready && open && admin && <p className="small muted pad">Inhalt in Arbeit. Das Kapitel benutzt dieselbe Vorlage wie Kapitel 1.</p>}
              </div>
            );
          }
          return (
            <div key={ch.id} className="chapter is-open">
              <div className="chapter-head">
                <span className="chapter-num">{ch.number}</span>
                <div><h3>{ch.title}</h3><p className="muted small">{ch.theme}. {ch.grammar}</p></div>
                <span className="ring" style={{ ['--p' as string]: pct }} aria-label={`${pct} Prozent`}>{pct}%</span>
              </div>
              <ol className="path">
                {ch.sections.map((s, si) => {
                  const done = !!progress.done[sectionKey(ch.id, s.id)];
                  const can = sectionOpen(ch, si, progress, admin);
                  const cls = `node t-${s.tone} ${done ? 'is-done' : can ? 'is-next' : 'is-locked'}`;
                  const inner = (
                    <>
                      <span className="node-dot" aria-hidden>{done ? '✓' : can ? si + 1 : '🔒'}</span>
                      <span className="node-text"><small>{s.label}, {s.minutes} Min.</small><b>{s.title}</b></span>
                    </>
                  );
                  return <li key={s.id}>{can ? <Link href={`/kurs/${ch.id}/${s.id}`} className={cls}>{inner}</Link> : <span className={cls} aria-disabled>{inner}</span>}</li>;
                })}
                <li>
                  <div className="node node-games t-sky">
                    <span className="node-dot" aria-hidden>🎮</span>
                    <span className="node-text"><small>Spiele zu Kapitel {ch.number}</small>
                      <span className="mini-games">{games.filter((g) => ch.games.includes(g.id)).map((g) => <Link key={g.id} href={`/spiele/${g.id}`} target="_blank" className="chip-btn">{g.emoji} {g.title}</Link>)}</span>
                    </span>
                  </div>
                </li>
                <li>
                  {examOpen(ch, progress, admin)
                    ? <Link href={`/kurs/${ch.id}/pruefung`} className={`node node-exam ${exam?.passed ? 'is-done' : 'is-next'}`}><span className="node-dot" aria-hidden>{exam?.passed ? '🏅' : '📝'}</span><span className="node-text"><small>Bestehen ab {PASS_MARK}%{exam ? ` , dein Bestwert ${exam.best}%` : ''}</small><b>Kapitelprüfung</b></span></Link>
                    : <span className="node node-exam is-locked" aria-disabled><span className="node-dot" aria-hidden>🔒</span><span className="node-text"><small>Schließe zuerst alle Abschnitte ab</small><b>Kapitelprüfung</b></span></span>}
                </li>
              </ol>
            </div>
          );
        })}
        <div className={`chapter final ${finalOpen(course, progress, admin) ? 'is-open' : 'is-locked'}`}>
          <div className="chapter-head">
            <span className="chapter-num">🎓</span>
            <div><h3>Abschlussprüfung: {course.examName}</h3><p className="muted small">Lesen, Hören, Schreiben, Sprechen. Öffnet sich nach allen Kapitelprüfungen.</p></div>
            {finalOpen(course, progress, admin) ? <Link href={`/pruefung/${course.id}`} className="btn btn-sm">Öffnen</Link> : <span className="lock">🔒</span>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Page() { return <RequireUser><Dashboard /></RequireUser>; }
