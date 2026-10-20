'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Fox } from '@/components/Fox';
import { courses, roadmapLevels } from '@/content/course';
import { DEMO_MODE, DEPOSIT_USD } from '@/lib/config';
import { useStore } from '@/lib/store';
import { ProfileForm } from '@/components/ProfileForm';
import { useUiLang, type UiLang } from '@/lib/lang';

// Words that float around the fox in the hero.
const bubbles = [
  { de: 'Hallo!', en: 'Hello!' },
  { de: 'Danke', en: 'Thanks' },
  { de: 'Servus', en: 'Hi (Austria)' },
  { de: 'Moin', en: 'Hi (North)' },
  { de: 'Grüezi', en: 'Hi (Switzerland)' },
  { de: 'Tschüss', en: 'Bye' },
];

// All homepage text in both languages. The DE | EN switch picks one; the choice also sets English help after sign-up.
const T = {
  en: {
    h1: 'Learn German, one calm step at a time.',
    lead: 'Short lessons, a story you follow from chapter to chapter, and exams at your level. Free for a limited time.',
    cont: 'Continue learning', startFree: 'Start for free',
    features: [
      { icon: '🧭', title: 'One step at a time', text: 'Read, check, learn the rule, practice' },
      { icon: '🏠', title: 'A story to follow', text: 'Life in the Fuchsbau flat share' },
      { icon: '✍️', title: 'Real writing', text: 'Write texts and get them marked' },
      { icon: '🏆', title: 'Exams', text: 'A test at the end of every chapter' },
    ],
    levels: 'Levels', chapters: 'chapters', soon: 'Coming soon', b2note: 'B2.1 open · B2.2 coming',
    levelSub: { A1: 'Complete beginner', A2: 'The basics', B1: 'Get by in everyday life', B2: 'Talk with confidence' } as Record<string, string>,
    deal: 'Free during the beta', free: 'Free', freeSub: 'No fees, no ads', deposit: 'deposit', noDeposit: 'No deposit', noDepositSub: 'Not needed for a limited time',
    spots: 'Limited spots', spotsSub: 'We let testers in step by step',
    exam: 'Fuchsdeutsch Prüfung', examTitle: 'Preparing for a Goethe exam, A1 to B2?', examText: 'Mock tests in the real exam format, a plan up to your exam date, and practice focused on your weak parts. Start with a free mock test.', examGo: 'Open Prüfung',
    path: 'From A1 to C2', open: 'Open now', more: 'More levels are coming.', join: 'Join the free beta',
    // Beta card
    tag: 'Closed beta · limited spots', title: 'Join the free beta', intro: 'We are looking for a small group of learners to test Fuchsdeutsch. Free, no deposit.',
    email: 'Email', emailPh: 'you@example.com', agree: 'I agree that Fuchsdeutsch stores my details to contact me about the beta. I can withdraw this at any time.', privacy: 'Privacy',
    busy: 'One moment …', next: 'Continue', step1: 'Step 1 of 2 · Already a tester?', login: 'Log in',
    withEmail: 'Sign up with email', withGoogle: 'Sign up with Google', back: 'Use Google instead', agreeFirst: 'Please tick the box above first.',
    step2: 'Step 2 of 2', quick: 'A few quick questions', quickSub: 'So the course fits you. You will not be asked again when you log in.', finish: 'Finish sign-up',
    done: 'You’re on the list!', already: 'You’re already on the list.',
    doneText: (e: string) => <>We let testers in step by step and will email <b>{e}</b> when your spot is ready. Log in with this email and you can start right away.</>,
  },
  de: {
    h1: 'Deutsch lernen, ganz in Ruhe, Schritt für Schritt.',
    lead: 'Kurze Lektionen, eine Geschichte von Kapitel zu Kapitel und Prüfungen auf deinem Niveau. Für kurze Zeit kostenlos.',
    cont: 'Weiterlernen', startFree: 'Kostenlos starten',
    features: [
      { icon: '🧭', title: 'Ein Schritt nach dem anderen', text: 'Lesen, prüfen, die Regel lernen, üben' },
      { icon: '🏠', title: 'Eine Geschichte', text: 'Das Leben in der Fuchsbau-WG' },
      { icon: '✍️', title: 'Echtes Schreiben', text: 'Texte schreiben und korrigiert bekommen' },
      { icon: '🏆', title: 'Prüfungen', text: 'Ein Test am Ende jedes Kapitels' },
    ],
    levels: 'Niveaus', chapters: 'Kapitel', soon: 'Bald verfügbar', b2note: 'B2.1 offen · B2.2 folgt',
    levelSub: { A1: 'Ganz neu anfangen', A2: 'Die Grundlagen', B1: 'Im Alltag zurechtkommen', B2: 'Sicher sprechen' } as Record<string, string>,
    deal: 'Kostenlos während der Beta', free: 'Kostenlos', freeSub: 'Keine Gebühren, keine Werbung', deposit: 'Kaution', noDeposit: 'Keine Kaution', noDepositSub: 'Für kurze Zeit nicht nötig',
    spots: 'Begrenzte Plätze', spotsSub: 'Wir lassen Tester nach und nach rein',
    exam: 'Fuchsdeutsch Prüfung', examTitle: 'Du machst bald eine Goethe-Prüfung, A1 bis B2?', examText: 'Modelltests im echten Prüfungsformat, ein Plan bis zu deinem Prüfungstag und Training für deine schwachen Teile. Fang mit einem kostenlosen Modelltest an.', examGo: 'Zur Prüfung',
    path: 'Von A1 bis C2', open: 'Jetzt offen', more: 'Weitere Niveaus folgen.', join: 'Bei der Beta mitmachen',
    tag: 'Geschlossene Beta · begrenzte Plätze', title: 'Mach bei der kostenlosen Beta mit', intro: 'Wir suchen eine kleine Gruppe von Lernenden, die Fuchsdeutsch testen. Kostenlos, ohne Kaution.',
    email: 'E-Mail', emailPh: 'du@beispiel.de', agree: 'Ich bin einverstanden, dass Fuchsdeutsch meine Daten speichert, um mich zur Beta zu kontaktieren. Ich kann das jederzeit widerrufen.', privacy: 'Datenschutz',
    busy: 'Einen Moment …', next: 'Weiter', step1: 'Schritt 1 von 2 · Schon dabei?', login: 'Anmelden',
    withEmail: 'Mit E-Mail anmelden', withGoogle: 'Mit Google anmelden', back: 'Lieber mit Google', agreeFirst: 'Bitte setz zuerst oben das Häkchen.',
    step2: 'Schritt 2 von 2', quick: 'Ein paar kurze Fragen', quickSub: 'Damit der Kurs zu dir passt. Beim Anmelden fragen wir nicht noch einmal.', finish: 'Anmeldung abschließen',
    done: 'Du bist auf der Liste!', already: 'Du bist schon auf der Liste.',
    doneText: (e: string) => <>Wir lassen Tester nach und nach rein und schreiben an <b>{e}</b>, sobald dein Platz frei ist. Melde dich mit dieser E-Mail an, dann kannst du sofort loslegen.</>,
  },
};

// The four levels on the homepage. B2 is the B2.1 course for now (B2.2 follows).
const LEVELS: { level: string; course: string; icon: string; tone: string }[] = [
  { level: 'A1', course: 'a1', icon: '🌱', tone: 'mint' },
  { level: 'A2', course: 'a2', icon: '🌿', tone: 'sky' },
  { level: 'B1', course: 'b1', icon: '🌳', tone: 'butter' },
  { level: 'B2', course: 'b2-1', icon: '🏔️', tone: 'lilac' },
];

// What each level is about, shown when a level card opens.
type LevelInfo = { learn: string[]; can: string; de: string; en: string };
const LEVEL_INFO: Record<UiLang, Record<string, LevelInfo>> = {
  en: {
    A1: { learn: ['Greetings, numbers, times and dates', 'You, your family, your home', 'Shopping, ordering food, asking the way'], can: 'Introduce yourself, get through simple everyday situations and fill in a form.', de: 'Ich heiße Mia und wohne in Leipzig.', en: 'My name is Mia and I live in Leipzig.' },
    A2: { learn: ['Daily routine, work, health and travel', 'Say what happened (Perfekt)', 'Plans, comparisons, reasons with weil'], can: 'Talk about your day and your past, write short messages and follow clear announcements.', de: 'Gestern bin ich mit dem Zug nach Berlin gefahren.', en: 'Yesterday I took the train to Berlin.' },
    B1: { learn: ['Opinions, plans and wishes', 'Work, environment, health and culture', 'Subordinate clauses, passive, Konjunktiv II'], can: 'Manage most situations in daily life, give your opinion and write a clear email. Goethe B1 level.', de: 'Ich würde gern im Ausland arbeiten, weil ich Neues lernen möchte.', en: 'I would like to work abroad because I want to learn new things.' },
    B2: { learn: ['Discuss, argue and present', 'News, science and society', 'Formal style, connectors, long sentences'], can: 'Follow discussions, read longer texts and speak fluently with native speakers.', de: 'Obwohl die Mieten steigen, ziehen immer mehr Menschen in die Stadt.', en: 'Although rents are rising, more and more people move to the city.' },
  },
  de: {
    A1: { learn: ['Begrüßen, Zahlen, Uhrzeit und Datum', 'Du, deine Familie, deine Wohnung', 'Einkaufen, bestellen, nach dem Weg fragen'], can: 'Dich vorstellen, einfache Alltagssituationen meistern und ein Formular ausfüllen.', de: 'Ich heiße Mia und wohne in Leipzig.', en: 'My name is Mia and I live in Leipzig.' },
    A2: { learn: ['Tagesablauf, Arbeit, Gesundheit und Reisen', 'Erzählen, was passiert ist (Perfekt)', 'Pläne, Vergleiche, Gründe mit weil'], can: 'Über deinen Tag und deine Vergangenheit sprechen, kurze Nachrichten schreiben, klare Durchsagen verstehen.', de: 'Gestern bin ich mit dem Zug nach Berlin gefahren.', en: 'Yesterday I took the train to Berlin.' },
    B1: { learn: ['Meinungen, Pläne und Wünsche', 'Arbeit, Umwelt, Gesundheit und Kultur', 'Nebensätze, Passiv, Konjunktiv II'], can: 'Die meisten Situationen im Alltag meistern, deine Meinung sagen und eine klare E-Mail schreiben. Niveau Goethe B1.', de: 'Ich würde gern im Ausland arbeiten, weil ich Neues lernen möchte.', en: 'I would like to work abroad because I want to learn new things.' },
    B2: { learn: ['Diskutieren, argumentieren, präsentieren', 'Nachrichten, Wissenschaft und Gesellschaft', 'Formeller Stil, Konnektoren, lange Sätze'], can: 'Diskussionen folgen, längere Texte lesen und flüssig mit Muttersprachlern sprechen.', de: 'Obwohl die Mieten steigen, ziehen immer mehr Menschen in die Stadt.', en: 'Although rents are rising, more and more people move to the city.' },
  },
};
const LEVEL_UI = {
  en: { learn: 'What you learn', can: 'After this level you can', start: (l: string) => `Start ${l}` },
  de: { learn: 'Das lernst du', can: 'Danach kannst du', start: (l: string) => `${l} starten` },
};

/** The four levels and one detail panel under them. Pointing at a card (or tapping it) shows that level in the panel. */
function LevelPicker({ lang, t, href }: { lang: UiLang; t: (typeof T)[UiLang]; href: string }) {
  const [pick, setPick] = useState(0);
  const ui = LEVEL_UI[lang];
  const l = LEVELS[pick];
  const info = LEVEL_INFO[lang][l.level];
  const course = (lv: (typeof LEVELS)[number]) => courses.find((x) => x.id === lv.course);
  const meta = (lv: (typeof LEVELS)[number]) => {
    const c = course(lv);
    return c ? `${c.chapters.length} ${t.chapters}${lv.level === 'B2' ? ` · ${t.b2note}` : ''}` : t.soon;
  };
  const start = href.startsWith('#')
    ? <a href={href} className="btn lp-go">{ui.start(l.level)} <span aria-hidden>→</span></a>
    : <Link href={href} className="btn lp-go">{ui.start(l.level)} <span aria-hidden>→</span></Link>;
  return (
    <div className="lp-levels" style={{ '--pick': pick } as React.CSSProperties}>
      <div className="lp-courses lp-courses-4" role="tablist" aria-label={t.levels}>
        {LEVELS.map((lv, i) => (
          <button
            key={lv.level} type="button" role="tab" aria-selected={pick === i} aria-controls="lp-level-panel"
            className={`lp-course lp-level t-${lv.tone} ${course(lv) ? '' : 'is-soon'} ${pick === i ? 'is-on' : ''}`}
            onPointerEnter={(e) => { if (e.pointerType === 'mouse') setPick(i); }}
            onFocus={() => setPick(i)} onClick={() => setPick(i)}
          >
            <span className="lp-course-icon" aria-hidden>{lv.icon}</span>
            <b className="lp-course-level">{lv.level}</b>
            <span className="lp-course-sub">{t.levelSub[lv.level]}</span>
            <span className="lp-course-meta">{meta(lv)}</span>
          </button>
        ))}
      </div>
      <div id="lp-level-panel" role="tabpanel" className={`lp-panel t-${l.tone}`} aria-live="polite">
        <div className="lp-panel-in" key={l.level}>
          <div className="lp-panel-a">
            <p className="lp-panel-title"><span aria-hidden>{l.icon}</span> <b>{l.level}</b> {t.levelSub[l.level]}</p>
            <p className="lp-more-label">{ui.can}</p>
            <p className="lp-panel-can">{info.can}</p>
            {course(l) && start}
          </div>
          <div className="lp-panel-b">
            <p className="lp-more-label">{ui.learn}</p>
            <ul>{info.learn.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="lp-panel-c">
            <p className="lp-more-label">{lang === 'en' ? 'A sentence from this level' : 'Ein Satz aus diesem Niveau'}</p>
            <p className="lp-panel-ex"><b lang="de">{info.de}</b><span>{info.en}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BetaForm({ lang }: { lang: UiLang }) {
  const t = T[lang];
  const { user, joinBeta, saveBetaProfile, signInGoogle } = useStore();
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [trap, setTrap] = useState('');
  const [step, setStep] = useState<'email' | 'profile' | 'done' | 'exists'>('email');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  // Sign-up method: pick e-mail or Google first. Demo mode has no Google, so it starts with the e-mail field.
  const [method, setMethod] = useState<'email' | null>(DEMO_MODE ? 'email' : null);

  // Back from Google (signed in, not approved yet): put that email on the list and ask the questions.
  useEffect(() => {
    if (!user?.email || step !== 'email') return;
    setEmail(user.email); setBusy(true);
    void joinBeta(user.email).then((res) => {
      setBusy(false);
      if (res === 'ok') setStep('profile'); else if (res === 'exists') setStep('exists'); else setErr(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);

  const google = () => {
    void signInGoogle('/#beta');
  };

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    if (trap) { setStep('done'); return; } // bots fill hidden fields
    setErr(null); setBusy(true);
    const res = await joinBeta(email.trim());
    setBusy(false);
    if (res === 'ok') setStep('profile');
    else if (res === 'exists') setStep('exists');
    else setErr(res);
  };

  if (step === 'done' || step === 'exists') {
    return (
      <div id="beta" className="v3-card v3-beta v3-fade" role="status">
        <Fox size={64} mood="proud" />
        <h2>{step === 'done' ? t.done : t.already}</h2>
        <p className="muted">{t.doneText(email.trim())}</p>
      </div>
    );
  }

  if (step === 'profile') {
    return (
      <div id="beta" className="v3-beta-profile v3-fade">
        <div className="v3-beta-step">
          <span className="v3-tag">{t.step2}</span>
          <h2>{t.quick}</h2>
          <p className="muted">{t.quickSub}</p>
        </div>
        {err && <p className="v3-err" role="alert">{err}</p>}
        <ProfileForm
          submitLabel={t.finish}
          lang={lang}
          busy={busy}
          onSubmit={async (profile, course) => {
            setBusy(true); setErr(null);
            const res = await saveBetaProfile(email.trim(), profile, course);
            setBusy(false);
            if (res === 'ok' || res === 'exists') setStep('done');
            else setErr(res);
          }}
        />
      </div>
    );
  }

  const gIcon = <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.6 5.4 2.7 13.3l7.9 6.1C12.5 13.6 17.8 9.5 24 9.5z"/><path fill="#4285F4" d="M46.1 24.6c0-1.6-.1-3.1-.4-4.6H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.2 5.6c4.2-3.9 7.1-9.7 7.1-16.9z"/><path fill="#FBBC05" d="M10.6 28.6c-.5-1.4-.8-3-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C1 16.6 0 20.2 0 24s1 7.4 2.7 10.7l7.9-6.1z"/><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.8-5.8l-7.2-5.6c-2 1.4-4.7 2.3-8.6 2.3-6.2 0-11.5-4.1-13.4-9.9l-7.9 6.1C6.6 42.6 14.6 48 24 48z"/></svg>;
  const pick = (m: 'email' | 'google') => {
    if (!agree) { setErr(t.agreeFirst); return; }
    setErr(null);
    if (m === 'google') google(); else setMethod('email');
  };

  return (
    <form id="beta" className="v3-card v3-beta" onSubmit={submitEmail}>
      <div>
        <span className="v3-tag">{t.tag}</span>
        <h2>{t.title}</h2>
        <p className="muted">{t.intro}</p>
      </div>
      <label className="v3-check">
        <input type="checkbox" checked={agree} onChange={(e) => { setAgree(e.target.checked); if (e.target.checked) setErr(null); }} />
        <span>{t.agree} <Link href="/privacy">{t.privacy}</Link></span>
      </label>
      {method !== 'email' && (
        <div className="v3-beta-choice">
          <button type="button" className="btn btn-lg btn-ghost" onClick={() => pick('email')} disabled={busy}><span aria-hidden>✉️</span> {t.withEmail}</button>
          {!DEMO_MODE && <button type="button" className="btn btn-lg btn-google" onClick={() => pick('google')} disabled={busy}>{gIcon} {t.withGoogle}</button>}
        </div>
      )}
      {method === 'email' && (
        <>
          <label>{t.email}<input type="email" required autoFocus value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.emailPh} autoComplete="email" maxLength={254} /></label>
          <label className="v3-hp" aria-hidden>Website<input tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} /></label>
          <button type="submit" className="v3-btn" disabled={busy || !agree}>{busy ? t.busy : t.next}</button>
          {!DEMO_MODE && <button type="button" className="v3-textbtn" onClick={() => setMethod(null)}>{t.back}</button>}
        </>
      )}
      {err && <p className="v3-err" role="alert">{err}</p>}
      <p className="muted small">{t.step1} <Link href="/login">{t.login}</Link></p>
    </form>
  );
}

export default function Landing() {
  const { user, ready, access } = useStore();
  const router = useRouter();
  const [lang] = useUiLang();
  const t = T[lang];
  // Back from Google with an account that is already in: go straight to the course.
  useEffect(() => {
    if (ready && user && access === true && window.location.hash === '#beta') router.replace('/lernen');
  }, [ready, user, access, router]);
  const [say, setSay] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSay((s) => (s + 1) % bubbles.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="landing lp" lang={lang}>
      <section className="lp-hero">
        <div className="lp-hero-copy">
          <h1>{t.h1}</h1>
          <p className="lead">{t.lead}</p>
          {ready && user && access !== false && <div className="hero-cta"><Link href="/lernen" className="btn btn-lg">{t.cont}</Link></div>}
          {ready && !user && <div className="hero-cta"><a href="#beta" className="btn btn-lg lp-go">{t.startFree} <span aria-hidden>→</span></a><Link href="/login" className="btn btn-lg btn-ghost">{t.login}</Link></div>}
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

      <section id="levels" aria-labelledby="courses-h">
        <h2 id="courses-h" className="lp-h2">{t.levels}</h2>
        <LevelPicker lang={lang} t={t} href={ready && user && access !== false ? '/kurs' : '#beta'} />
      </section>

      <section id="exam" className="lp-exam" aria-labelledby="exam-h">
        <div className="lp-exam-card t-peach">
          <span className="v3-tag">{t.exam}</span>
          <h2 id="exam-h">{t.examTitle}</h2>
          <p>{t.examText}</p>
          <a href="/pruefung" className="btn btn-lg">{t.examGo} →</a>
        </div>
      </section>

      {ready && (!user || access === false) && <section aria-label="Beta sign-up"><BetaForm lang={lang} /></section>}

      <section id="features" aria-label="What you get">
        <div className="lp-features">
          {t.features.map((f) => (
            <div key={f.title} className="lp-feature">
              <span className="lp-feature-icon" aria-hidden>{f.icon}</span>
              <b>{f.title}</b>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="lp-deal" aria-labelledby="deal-h">
        <h2 id="deal-h" className="lp-h2">{t.deal}</h2>
        <div className="lp-deal-row">
          <div className="lp-deal-card t-mint"><span aria-hidden>💚</span><b>{t.free}</b><small>{t.freeSub}</small></div>
          <div className="lp-deal-card t-butter"><span aria-hidden>🎁</span><b><s className="v3-strike">${DEPOSIT_USD} {t.deposit}</s> {t.noDeposit}</b><small>{t.noDepositSub}</small></div>
          <div className="lp-deal-card t-sky"><span aria-hidden>🎟️</span><b>{t.spots}</b><small>{t.spotsSub}</small></div>
        </div>
      </section>

      <section className="lp-path" aria-labelledby="path-h">
        <h2 id="path-h" className="lp-h2">{t.path}</h2>
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
        <p className="muted small lp-path-note">{t.open}: {courses.map((c) => c.level).join(', ')}. {t.more}</p>
      </section>

      <section className="foot">
        <Fox size={56} mood="sleepy" />
        <p>Fuchsdeutsch</p>
        {ready && user ? <Link href="/lernen" className="btn">{t.cont}</Link> : <a href="#beta" className="btn">{t.join}</a>}
      </section>
    </main>
  );
}
