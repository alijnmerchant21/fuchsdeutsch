'use client';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { BlockView } from '@/components/Blocks';
import { Fox } from '@/components/Fox';
import type { Chapter, Course, Section } from '@/content/types';
import { isExercise } from '@/content/types';
import { storiesAfterChapter } from '@/content/stories';
import { party } from '@/lib/fx';
import { buildSteps, KIND_EN, KIND_LABEL, leadInstruction, stepHint, type Step } from '@/lib/phases';
import { useStore } from '@/lib/store';
import { De, useForcedHints, useHints } from './Hint';
import { CastStrip } from './Cast';
import { ChapterContext, imageSrc, sceneId, useImages } from '@/lib/images';
import { sectionKey } from '@/lib/unlock';

type Screen = { si: number; kind: 'lead' } | { si: number; kind: 'item'; b: Step['items'][number]; n: number; of: number };

function flatten(steps: Step[]): Screen[] {
  const out: Screen[] = [];
  steps.forEach((st, si) => {
    if (st.leads.length) out.push({ si, kind: 'lead' });
    st.items.forEach((b, n) => out.push({ si, kind: 'item', b, n, of: st.items.length }));
  });
  return out;
}

export function EnSwitch() {
  const { progress, setMode } = useStore();
  const on = progress.mode === 'easy';
  return (
    <button type="button" className={`v3-switch ${on ? 'is-on' : ''}`} aria-pressed={on} onClick={() => setMode(on ? 'advanced' : 'easy')}>
      <i aria-hidden />English-Hilfe
    </button>
  );
}

export function Crumbs({ parts }: { parts: [string, string?][] }) {
  return (
    <nav className="v3-crumbs" aria-label="Du bist hier">
      {parts.map(([label, href], i) => (
        <span key={i}>
          {i > 0 && <span className="v3-sep" aria-hidden>›</span>}
          {href && i < parts.length - 1 ? <Link href={href}>{label}</Link> : <b>{label}</b>}
        </span>
      ))}
    </nav>
  );
}

export function Player({ course, ch, sec, si: secIndex }: { course: Course; ch: Chapter; sec: Section; si: number }) {
  const { progress, isAdmin, completeSection } = useStore();
  const steps = useMemo(() => buildSteps(sec), [sec]);
  const screens = useMemo(() => flatten(steps), [steps]);
  const key = sectionKey(ch.id, sec.id);
  const wasDone = !!progress.done[key];
  const easy = useHints();
  const pics = useImages();
  const forced = useForcedHints();

  const [pos, setPos] = useState(0);
  const [solved, setSolved] = useState<Record<string, boolean>>({});
  const [peek, setPeek] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => { setPos(0); setSolved({}); setFinished(false); }, [sec.id]);
  useEffect(() => { setPeek(false); window.scrollTo({ top: 0 }); }, [pos]);

  const exercises = sec.blocks.filter(isExercise);
  const xp = 20 + exercises.length * 5;
  const nextSec = ch.sections[secIndex + 1];
  const nextHref = nextSec ? `/kurs/${ch.id}/${nextSec.id}` : `/kurs/${ch.id}/pruefung`;
  const extras = !nextSec ? storiesAfterChapter(ch.id) : [];

  const scr = screens[pos];
  const step = scr ? steps[scr.si] : null;
  const last = pos === screens.length - 1;
  const pct = finished ? 100 : Math.round((pos / Math.max(1, screens.length)) * 100);

  const canGo = (() => {
    if (!scr || scr.kind === 'lead') return true;
    if (!isExercise(scr.b)) return true;
    return wasDone || isAdmin || !!solved[scr.b.id];
  })();

  const upNext = ((): { de: string; en: string } => {
    if (last) return wasDone
      ? (nextSec ? { de: `Als Nächstes: ${nextSec.label}`, en: `Next: ${nextSec.label}` } : { de: 'Als Nächstes: Kapitelprüfung', en: 'Next: chapter exam' })
      : { de: 'Als Nächstes: Abschnitt abschließen', en: 'Next: finish the section' };
    const nx = screens[pos + 1];
    if (nx.si === scr!.si && nx.kind === 'item') return { de: `Als Nächstes: Aufgabe ${nx.n + 1} von ${nx.of}`, en: `Next: task ${nx.n + 1} of ${nx.of}` };
    const st = steps[nx.si];
    return { de: `Als Nächstes: ${KIND_LABEL[st.kind]} · ${st.title}`, en: `Next: ${KIND_EN[st.kind]}` };
  })();

  const go = () => {
    if (!canGo) return;
    if (!last) { setPos(pos + 1); return; }
    if (!wasDone) { completeSection(key, xp); party(); }
    setFinished(true);
    window.scrollTo({ top: 0 });
  };

  const EN: Record<string, string> = {
    'Fertig': 'Done', 'Abschnitt abschließen': 'Finish section', 'Weiter': 'Next', 'Verstanden': 'Got it',
    'Ich habe zugehört': 'I listened', 'Los geht’s': 'Let’s go', 'Ich habe den Text gelesen': 'I read the text',
  };
  const goLabel = (() => {
    if (last) return wasDone ? 'Fertig' : 'Abschnitt abschließen';
    if (scr?.kind === 'lead') {
      if (step!.items.length === 0) return 'Weiter';
      return step!.kind === 'rule' ? 'Verstanden' : step!.kind === 'listen' ? 'Ich habe zugehört' : step!.kind === 'intro' ? 'Los geht’s' : 'Ich habe den Text gelesen';
    }
    return 'Weiter';
  })();

  /* ---------- finished ---------- */
  if (finished) {
    return (
      <main className="v3-page v3-fade">
        <Crumbs parts={[['Start', '/lernen'], [course.title, '/kurs'], [`Kapitel ${ch.number}`, '/kurs'], [sec.label]]} />
        <section className="v3-card v3-done">
          <div className="v3-done-fox"><Fox size={96} mood="proud" className="bob" /></div>
          <h1><De en="Section done!">{sec.label} geschafft!</De></h1>
          <div className="v3-chips">
            {!isAdmin && <span className="v3-chip t-lilac">{wasDone ? 'Wiederholt' : `+${xp} XP`}</span>}
            {exercises.length > 0 && <span className="v3-chip t-mint">{exercises.length} Aufgaben gelöst</span>}
          </div>
          <div className="v3-box">
            <p className="v3-eyebrow"><De en="What you can do now" inline>Das kannst du jetzt</De></p>
            <ul className="v3-goals">{sec.goals.map((g) => <li key={g}>{g}</li>)}</ul>
          </div>
          <div className="v3-box t-peach v3-next">
            <p className="v3-eyebrow"><De en="Next" inline>Als Nächstes</De></p>
            <b>{nextSec ? `${nextSec.label} · ${nextSec.title}` : `Kapitelprüfung · Kapitel ${ch.number}`}</b>
            <span className="muted">{nextSec ? `ca. ${nextSec.minutes} Min` : 'Bestehen ab 60 %'}</span>
          </div>
          {extras.length > 0 && (
            <p className="muted small">Optional lesen: {extras.map((s, i) => <span key={s.id}>{i > 0 ? ', ' : ''}<Link href={`/geschichten/${s.id}`}>{s.title}</Link></span>)}</p>
          )}
          <div className="v3-row v3-center">
            <Link href="/kurs" className="v3-btn ghost"><De en="Chapter overview" inline>Zur Kapitelübersicht</De></Link>
            <Link href={nextHref} className="v3-btn"><De en={nextSec ? 'Start next section' : 'Go to the exam'} inline>{nextSec ? `${nextSec.label} starten` : 'Zur Prüfung'}</De></Link>
          </div>
        </section>
      </main>
    );
  }

  if (!scr || !step) {
    return <main className="v3-page"><p>Dieser Abschnitt hat noch keinen Inhalt.</p><Link href="/kurs" className="v3-btn">Zurück</Link></main>;
  }

  const instr = leadInstruction(step.kind);
  const peekLabel = step.kind === 'rule' ? 'Regel' : step.kind === 'listen' ? 'Hörtext' : 'Text';

  return (
    <ChapterContext.Provider value={ch.id}>
    <main className="v3-page v3-fade">
      <Crumbs parts={[['Start', '/lernen'], [course.title, '/kurs'], [`Kapitel ${ch.number}`, '/kurs'], [sec.label]]} />
      <div className="v3-titlerow">
        <h1>{sec.title}</h1>
        <span className="v3-pct">{pct} %</span>
      </div>
      <div className="v3-bar v3-bar-top" aria-label={`${pct} Prozent`}><i style={{ width: `${pct}%` }} /></div>

      <div className="v3-lesson">
        <aside className="v3-card v3-rail" aria-label={`Ablauf von ${sec.label}`}>
          <p className="v3-eyebrow">{sec.label} · Ablauf</p>
          <ol>
            {steps.map((st, i) => {
              const state = i < scr.si ? 'done' : i === scr.si ? 'now' : '';
              return (
                <li key={i} className={`v3-rstep ${state}`} aria-current={i === scr.si ? 'step' : undefined}>
                  <span className="v3-rdot">{i < scr.si ? '✓' : i + 1}</span>
                  <span><b>{KIND_LABEL[st.kind]}{forced && <small className="v3-rail-en"> · {KIND_EN[st.kind]}</small>}</b><small>{st.title}</small><small className="v3-rhint">{stepHint(st)}</small></span>
                </li>
              );
            })}
          </ol>
        </aside>

        <section className={`v3-card v3-pane t-${sec.tone}`}>
          <div className="v3-panehead">
            <span className="v3-eyebrow">
              Schritt {scr.si + 1} von {steps.length} · {KIND_LABEL[step.kind]}{forced && ` (${KIND_EN[step.kind]})`}
              {scr.kind === 'item' && <> · <b>{isExercise(scr.b) ? 'Aufgabe' : 'Teil'} {scr.n + 1} von {scr.of}</b></>}
            </span>
            <EnSwitch />
          </div>

          {scr.kind === 'lead' ? (
            <div key={`lead-${scr.si}`} className="v3-fade v3-stack">
              {(() => {
                const src = step.leads.map((b) => imageSrc(pics, sceneId(ch.id, b))).find(Boolean);
                return src ? <figure className="v3-scene"><img src={src} alt="" /></figure> : null;
              })()}
              {step.kind === 'intro' && course.id === 'a1' && ch.number === 1 && <CastStrip />}
              <div className="v3-what"><span aria-hidden>i</span><div><b>Was jetzt?</b> {instr.de}{easy && <em> {instr.en}</em>}</div></div>
              {step.leads.map((b) => <BlockView key={b.id} b={b} />)}
            </div>
          ) : (
            <div key={`item-${pos}`} className="v3-fade v3-stack">
              <div className={isExercise(scr.b) && solved[scr.b.id] ? 'is-solved' : ''}>
                <BlockView b={scr.b} onScore={(id, s) => { if (s >= 1) setSolved((x) => (x[id] ? x : { ...x, [id]: true })); }} />
              </div>
              {step.leads.length > 0 && (
                <div className="v3-peek">
                  <button type="button" className="v3-textbtn" onClick={() => setPeek(!peek)} aria-expanded={peek}>
                    {peek ? `${peekLabel} ausblenden` : `${peekLabel} nochmal ansehen`}{forced && <small className="v3-en-sub">{peek ? 'Hide' : 'See it again'}</small>}
                  </button>
                  {peek && <div className="v3-peekbox v3-fade">{step.leads.map((b) => <BlockView key={b.id} b={b} />)}</div>}
                </div>
              )}
            </div>
          )}

          <div className="v3-actionbar">
            {pos > 0 && <button type="button" className="v3-btn ghost" onClick={() => setPos(pos - 1)}><De en="Back" inline>Zurück</De></button>}
            <span className="v3-upnext">{canGo ? <De en={upNext.en}>{upNext.de}</De> : <De en="Solve the task to continue.">Löse die Aufgabe, dann geht es weiter.</De>}</span>
            <button type="button" className={`v3-btn ${canGo && scr.kind === 'item' && isExercise(scr.b) ? 'is-ready' : ''}`} disabled={!canGo} onClick={go}>{goLabel}{forced && EN[goLabel] && <small className="v3-btn-en">{EN[goLabel]}</small>}</button>
          </div>
        </section>
      </div>
    </main>
    </ChapterContext.Provider>
  );
}
