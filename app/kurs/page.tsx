'use client';
import Link from 'next/link';
import { useState } from 'react';
import { RequireUser } from '@/components/Guard';
import { Crumbs, EnSwitch } from '@/components/Player';
import { courseById, courses } from '@/content/course';
import { games } from '@/content/games';
import type { Chapter } from '@/content/types';
import { PASS_MARK } from '@/lib/config';
import { currentChapterIndex } from '@/lib/next';
import { useStore } from '@/lib/store';
import { chapterOpen, examOpen, finalOpen, sectionKey, sectionOpen, sectionsDone } from '@/lib/unlock';

function CoursePage() {
  const { progress, isAdmin } = useStore();
  const course = courseById(progress.course) || courses[0];
  const cur = currentChapterIndex(course, progress);
  const [focus, setFocus] = useState(cur);
  const [showLater, setShowLater] = useState(false);
  const [showSections, setShowSections] = useState(false);
  const easy = progress.mode === 'easy';

  const ch = course.chapters[focus];
  const overview = ch.sections[0]?.blocks.find((b) => b.t === 'overview');
  const nDone = sectionsDone(ch, progress);
  const nextSi = ch.sections.findIndex((s) => !progress.done[sectionKey(ch.id, s.id)]);
  const exam = progress.exams[ch.id];
  const remaining = ch.sections.slice(Math.max(0, nextSi)).reduce((a, s) => a + s.minutes, 0);
  const isCurrent = focus === cur;

  const done = course.chapters.map((c, i) => ({ c, i })).filter(({ c, i }) => i !== focus && progress.exams[c.id]?.passed);
  const later = course.chapters.map((c, i) => ({ c, i })).filter(({ c, i }) => i !== focus && !progress.exams[c.id]?.passed);
  const chGames = games.filter((g) => ch.games.includes(g.id));

  const cta = (() => {
    if (nextSi >= 0) {
      const s = ch.sections[nextSi];
      return <Link href={`/kurs/${ch.id}/${s.id}`} className="v3-btn">{nDone ? `Weiter mit ${s.label}` : `${s.label} starten`}</Link>;
    }
    if (!exam?.passed) return <Link href={`/kurs/${ch.id}/pruefung`} className="v3-btn">Zur Kapitelprüfung</Link>;
    return <Link href={`/kurs/${ch.id}/pruefung`} className="v3-btn ghost">Prüfung wiederholen</Link>;
  })();

  const row = ({ c, i }: { c: Chapter; i: number }, kind: 'done' | 'later') => {
    const open = chapterOpen(course, i, progress, isAdmin) && c.sections.length > 0;
    return (
      <button key={c.id} type="button" className={`v3-listrow v3-rowbtn ${kind === 'later' && !open ? 'is-locked' : ''}`}
        disabled={!open} onClick={() => { setFocus(i); setShowSections(true); window.scrollTo({ top: 0 }); }}>
        <span className={`v3-num ${kind === 'done' ? 't-mint' : ''}`}>{kind === 'done' ? '✓' : open ? c.number : '🔒'}</span>
        <span className="v3-grow"><b>{c.number}. {c.title}</b>{kind === 'later' && <small className="muted">{c.theme}</small>}</span>
        <small className="muted">{kind === 'done' ? `Prüfung ${progress.exams[c.id]?.best ?? 0} %` : open ? 'Öffnen' : c.sections.length ? `öffnet nach Kapitel ${c.number - 1}` : 'in Arbeit'}</small>
      </button>
    );
  };

  return (
    <main className="v3-page v3-fade">
      <Crumbs parts={[['Start', '/lernen'], [course.title]]} />
      <div className="v3-titlerow">
        <div><h1>{course.title}</h1><p className="v3-sub">{course.chapters.length} Kapitel · Abschluss: {course.examName}</p></div>
        <EnSwitch />
      </div>

      <div className="v3-narrow v3-stack-lg">
        <section className={`v3-card v3-focus ${isCurrent ? 'is-current' : ''}`}>
          <div className="v3-row">
            {isCurrent ? <span className="v3-chip t-lilac">Du bist hier</span> : <button type="button" className="v3-textbtn" onClick={() => setFocus(cur)}>← Zurück zu deinem Kapitel</button>}
            <span className="v3-eyebrow">Kapitel {ch.number}</span>
          </div>
          <div>
            <h2>{ch.title}</h2>
            {overview && overview.t === 'overview' && (
              <>
                <p className="v3-lead">Danach kannst du: {overview.learn.slice(0, 3).join(', ')}.</p>
                {easy && overview.en && <p className="v3-en">{overview.en.split('. ').slice(0, 2).join('. ')}.</p>}
              </>
            )}
            {!overview && <p className="v3-lead">{ch.theme}. {ch.grammar}</p>}
          </div>

          <div className="v3-segs" aria-label={`${nDone} von ${ch.sections.length} Abschnitten fertig`}>
            {ch.sections.map((s, i) => {
              const d = !!progress.done[sectionKey(ch.id, s.id)];
              return <div key={s.id} className={`v3-seg ${d ? 'done' : i === nextSi ? 'now' : ''}`}><i /><span>{s.label}</span></div>;
            })}
          </div>

          <div className="v3-row">
            {cta}
            <span className="muted small">
              {nextSi >= 0 ? `${nDone} von ${ch.sections.length} Abschnitten fertig · noch ca. ${remaining} Min` : exam?.passed ? `Bestanden mit ${exam.best} %` : `Alle Abschnitte fertig · bestehen ab ${PASS_MARK} %`}
            </span>
          </div>

          <div>
            <button type="button" className="v3-textbtn" aria-expanded={showSections} onClick={() => setShowSections(!showSections)}>
              {showSections ? 'Abschnitte ausblenden' : 'Alle Abschnitte anzeigen'}
            </button>
            {showSections && (
              <div className="v3-sections v3-fade">
                {ch.sections.map((s, i) => {
                  const d = !!progress.done[sectionKey(ch.id, s.id)];
                  const can = sectionOpen(ch, i, progress, isAdmin);
                  const now = i === nextSi;
                  const inner = (
                    <>
                      <span className={`v3-dot ${d ? 'done' : now ? 'now' : ''}`}>{d ? '✓' : i + 1}</span>
                      <span className="v3-grow"><b>{s.label} · {s.title}</b></span>
                      <small className="muted">{d ? 'Fertig' : now ? `Jetzt · ${s.minutes} Min` : can ? `${s.minutes} Min` : 'Gesperrt'}</small>
                    </>
                  );
                  return can ? <Link key={s.id} href={`/kurs/${ch.id}/${s.id}`} className={`v3-secrow ${now ? 'is-now' : ''}`}>{inner}</Link>
                    : <span key={s.id} className="v3-secrow is-locked">{inner}</span>;
                })}
                <span className={`v3-secrow ${examOpen(ch, progress, isAdmin) ? '' : 'is-locked'}`}>
                  <span className={`v3-dot ${exam?.passed ? 'done' : ''}`}>{exam?.passed ? '✓' : '★'}</span>
                  <span className="v3-grow"><b>Kapitelprüfung</b></span>
                  {examOpen(ch, progress, isAdmin) ? <Link href={`/kurs/${ch.id}/pruefung`} className="v3-textbtn">{exam ? `Bestwert ${exam.best} %` : 'Öffnen'}</Link> : <small className="muted">nach allen Abschnitten</small>}
                </span>
              </div>
            )}
          </div>

          {chGames.length > 0 && (
            <div className="v3-games">
              <span className="v3-eyebrow">Spiele zu Kapitel {ch.number}</span>
              <div className="v3-row">
                {chGames.map((g) => <Link key={g.id} href={`/spiele/${g.id}`} className={`v3-game t-${g.tone}`}>{g.title}</Link>)}
              </div>
            </div>
          )}
        </section>

        {done.length > 0 && (
          <section className="v3-card v3-list">
            <p className="v3-eyebrow v3-listhead">Geschafft</p>
            {done.map((d) => row(d, 'done'))}
          </section>
        )}

        {later.length > 0 && (
          <section className="v3-card v3-list">
            <button type="button" className="v3-listrow v3-rowbtn" aria-expanded={showLater} onClick={() => setShowLater(!showLater)}>
              <span className="v3-num">🔒</span>
              <span className="v3-grow"><b>Noch {later.length} {later.length === 1 ? 'Kapitel' : 'Kapitel'}</b></span>
              <small className="muted">{showLater ? 'Ausblenden' : 'Anzeigen'}</small>
            </button>
            {showLater && later.map((l) => row(l, 'later'))}
          </section>
        )}

        <section className="v3-card v3-list">
          <div className={`v3-listrow ${finalOpen(course, progress, isAdmin) ? '' : 'is-locked'}`}>
            <span className="v3-num">🎓</span>
            <span className="v3-grow"><b>Abschlussprüfung</b><small className="muted">{course.examName}. Öffnet nach allen Kapitelprüfungen.</small></span>
            {finalOpen(course, progress, isAdmin) ? <Link href={`/pruefung/${course.id}`} className="v3-textbtn">Öffnen</Link> : <small className="muted">Gesperrt</small>}
          </div>
        </section>
      </div>
    </main>
  );
}

export default function Page() { return <RequireUser><CoursePage /></RequireUser>; }
