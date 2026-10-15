'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { courseById, courses } from '@/content/course';
import { buildSteps, KIND_LABEL, stepHint } from '@/lib/phases';
import { nextUp } from '@/lib/next';
import { dayKey, streakAlive, useStore } from '@/lib/store';
import { chapterPercent } from '@/lib/unlock';

function Dashboard() {
  const { user, progress, isAdmin, setCourse } = useStore();
  const router = useRouter();
  useEffect(() => { if (isAdmin) router.replace('/admin'); }, [isAdmin, router]);
  if (isAdmin) return <main className="v3-page v3-center-page"><Fox size={80} /><p className="muted">Weiterleitung zum Admin-Bereich …</p></main>;

  const course = courseById(progress.course) || courses[0];
  const goal = progress.profile?.goal || 50;
  const today = progress.days[dayKey()] || 0;
  const alive = streakAlive(progress.streak);
  const next = nextUp(course, progress);
  const first = user!.name.split(' ')[0];
  const steps = next?.kind === 'section' ? buildSteps(next.sec) : [];

  return (
    <main className="v3-page v3-fade v3-stack-lg">
      <div>
        <h1>Hallo, {first}!</h1>
        <p className="v3-sub">
          {next?.kind === 'section' ? `Dein nächster Schritt wartet. Etwa ${next.sec.minutes} Minuten.`
            : next?.kind === 'exam' ? 'Alle Abschnitte fertig. Jetzt kommt die Kapitelprüfung.'
            : next?.kind === 'final' ? 'Alle Kapitel bestanden. Die Abschlussprüfung ist offen.'
            : 'Wähle unten einen Kurs.'}
        </p>
      </div>

      {next && (
        <section className="v3-card v3-hero">
          <div className="v3-hero-l">
            {next.kind === 'section' && (
              <>
                <span className="v3-eyebrow">Als Nächstes · {course.level} · Kapitel {next.ch.number}</span>
                <h2>{next.sec.label} · {next.sec.title}</h2>
                <p className="v3-lead">Danach kannst du: {next.sec.goals.slice(0, 2).join(', ')}.</p>
                <div className="v3-meter-row">
                  <div className="v3-bar"><i style={{ width: `${chapterPercent(next.ch, progress)}%` }} /></div>
                  <b>Kapitel {chapterPercent(next.ch, progress)} %</b>
                </div>
                <div className="v3-row">
                  <Link href={next.href} className="v3-btn">{next.sec.label} starten</Link>
                  <Link href="/kurs" className="v3-btn ghost">Kapitel ansehen</Link>
                </div>
              </>
            )}
            {next.kind === 'exam' && (
              <>
                <span className="v3-eyebrow">Als Nächstes · {course.level} · Kapitel {next.ch.number}</span>
                <h2>Kapitelprüfung: {next.ch.title}</h2>
                <p className="v3-lead">Bestehen ab 60 %. Danach öffnet sich das nächste Kapitel.</p>
                <div className="v3-row"><Link href={next.href} className="v3-btn">Prüfung starten</Link><Link href="/kurs" className="v3-btn ghost">Kapitel ansehen</Link></div>
              </>
            )}
            {next.kind === 'final' && (
              <>
                <span className="v3-eyebrow">Als Nächstes · {course.level}</span>
                <h2>Abschlussprüfung: {course.examName}</h2>
                <div className="v3-row"><Link href={next.href} className="v3-btn">Prüfung öffnen</Link></div>
              </>
            )}
          </div>
          {steps.length > 0 && (
            <div className="v3-hero-r">
              <span className="v3-eyebrow">So läuft {next.kind === 'section' ? next.sec.label : ''} ab</span>
              <ol className="v3-mini">
                {steps.slice(0, 5).map((s, i) => (
                  <li key={i}><span>{i + 1}</span><b>{KIND_LABEL[s.kind]}</b><small>{stepHint(s)}</small></li>
                ))}
                {steps.length > 5 && <li className="muted small">und {steps.length - 5} weitere Schritte</li>}
              </ol>
            </div>
          )}
        </section>
      )}

      <div className="v3-chips">
        <span className="v3-chip plain"><span aria-hidden>🔥</span> Serie: {alive ? progress.streak.count : 0} {progress.streak.count === 1 ? 'Tag' : 'Tage'}</span>
        <span className="v3-chip plain">Heute: {today} von {goal} XP</span>
        <span className="v3-chip plain">Gesamt: {progress.xp} XP</span>
      </div>

      <section>
        <h2 className="v3-h2">Meine Kurse</h2>
        <div className="v3-card v3-list">
          {courses.map((c) => {
            const done = c.chapters.filter((ch) => progress.exams[ch.id]?.passed).length;
            const pct = Math.round((done / c.chapters.length) * 100);
            const active = c.id === course.id;
            return (
              <div key={c.id} className={`v3-listrow ${active ? 'is-active' : ''}`}>
                <span className="v3-level">{c.level}</span>
                <div className="v3-grow"><b>{c.title}</b><small className="muted">{done ? `${done} von ${c.chapters.length} Kapiteln` : 'Noch nicht begonnen'}</small></div>
                <div className="v3-bar v3-bar-sm"><i style={{ width: `${pct}%` }} /></div>
                {active ? <span className="v3-tag">Aktiv</span>
                  : <button type="button" className="v3-textbtn" onClick={() => { setCourse(c.id); window.scrollTo({ top: 0 }); }}>Wechseln</button>}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default function Page() { return <RequireUser><Dashboard /></RequireUser>; }
