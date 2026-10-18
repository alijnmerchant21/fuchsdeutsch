'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Fox } from '@/components/Fox';
import { courses, roadmapLevels } from '@/content/course';
import { DEPOSIT_USD } from '@/lib/config';
import { useStore } from '@/lib/store';
import { ProfileForm } from '@/components/ProfileForm';
import { LangToggle, useUiLang, type UiLang } from '@/lib/lang';

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
    cont: 'Continue learning',
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
    path: 'From A1 to C2', open: 'Open now', more: 'More levels are coming.', join: 'Join the free beta',
    // Beta card
    tag: 'Closed beta · limited spots', title: 'Join the free beta', intro: 'We are looking for a small group of learners to test Fuchsdeutsch. Free, no deposit.',
    email: 'Email', emailPh: 'you@example.com', agree: 'I agree that Fuchsdeutsch stores my details to contact me about the beta. I can withdraw this at any time.', privacy: 'Privacy',
    busy: 'One moment …', next: 'Continue', step1: 'Step 1 of 2 · Already a tester?', login: 'Log in',
    step2: 'Step 2 of 2', quick: 'A few quick questions', quickSub: 'So the course fits you. You will not be asked again when you log in.', finish: 'Finish sign-up',
    done: 'You’re on the list!', already: 'You’re already on the list.',
    doneText: (e: string) => <>We let testers in step by step and will email <b>{e}</b> when your spot is ready. Log in with this email and you can start right away.</>,
  },
  de: {
    h1: 'Deutsch lernen, ganz in Ruhe, Schritt für Schritt.',
    lead: 'Kurze Lektionen, eine Geschichte von Kapitel zu Kapitel und Prüfungen auf deinem Niveau. Für kurze Zeit kostenlos.',
    cont: 'Weiterlernen',
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
    path: 'Von A1 bis C2', open: 'Jetzt offen', more: 'Weitere Niveaus folgen.', join: 'Bei der Beta mitmachen',
    tag: 'Geschlossene Beta · begrenzte Plätze', title: 'Mach bei der kostenlosen Beta mit', intro: 'Wir suchen eine kleine Gruppe von Lernenden, die Fuchsdeutsch testen. Kostenlos, ohne Kaution.',
    email: 'E-Mail', emailPh: 'du@beispiel.de', agree: 'Ich bin einverstanden, dass Fuchsdeutsch meine Daten speichert, um mich zur Beta zu kontaktieren. Ich kann das jederzeit widerrufen.', privacy: 'Datenschutz',
    busy: 'Einen Moment …', next: 'Weiter', step1: 'Schritt 1 von 2 · Schon dabei?', login: 'Anmelden',
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

function BetaForm({ lang }: { lang: UiLang }) {
  const t = T[lang];
  const { joinBeta, saveBetaProfile } = useStore();
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [trap, setTrap] = useState('');
  const [step, setStep] = useState<'email' | 'profile' | 'done' | 'exists'>('email');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

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

  return (
    <form id="beta" className="v3-card v3-beta" onSubmit={submitEmail}>
      <div>
 <span className="v3-tag">{t.tag}</span>
        <h2>{t.title}</h2>
        <p className="muted">{t.intro}</p>
      </div>
      <label>{t.email}<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.emailPh} autoComplete="email" maxLength={254} /></label>
      <label className="v3-hp" aria-hidden>Website<input tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} /></label>
      <label className="v3-check">
        <input type="checkbox" required checked={agree} onChange={(e) => setAgree(e.target.checked)} />
        <span>{t.agree} <Link href="/privacy">{t.privacy}</Link></span>
      </label>
      {err && <p className="v3-err" role="alert">{err}</p>}
      <button type="submit" className="v3-btn" disabled={busy}>{busy ? t.busy : t.next}</button>
      <p className="muted small">{t.step1} <Link href="/login">{t.login}</Link></p>
    </form>
  );
}

export default function Landing() {
  const { user, ready } = useStore();
  const [lang, setLang] = useUiLang();
  const t = T[lang];
  const [say, setSay] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSay((s) => (s + 1) % bubbles.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="landing lp" lang={lang}>
      <div className="lp-langbar"><LangToggle lang={lang} onChange={setLang} /></div>
      <section className="lp-hero">
        <div className="lp-hero-copy">
          <h1>{t.h1}</h1>
          <p className="lead">{t.lead}</p>
          {ready && user && <div className="hero-cta"><Link href="/lernen" className="btn btn-lg">{t.cont}</Link></div>}
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

      {ready && !user && <section aria-label="Beta sign-up"><BetaForm lang={lang} /></section>}

      <section aria-labelledby="courses-h">
        <h2 id="courses-h" className="lp-h2">{t.levels}</h2>
        <div className="lp-courses lp-courses-4">
          {LEVELS.map((l) => {
            const c = courses.find((x) => x.id === l.course);
            return (
              <div key={l.level} className={`lp-course t-${l.tone} ${c ? '' : 'is-soon'}`}>
                <span className="lp-course-icon" aria-hidden>{l.icon}</span>
                <b className="lp-course-level">{l.level}</b>
                <span className="lp-course-sub">{t.levelSub[l.level]}</span>
                <span className="lp-course-meta">{c ? `${c.chapters.length} ${t.chapters}${l.level === 'B2' ? ` · ${t.b2note}` : ''}` : t.soon}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section aria-label="What you get">
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
