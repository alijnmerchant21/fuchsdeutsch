'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Fox } from '@/components/Fox';
import { courses, roadmapLevels } from '@/content/course';
import { DEPOSIT_USD } from '@/lib/config';
import { useStore } from '@/lib/store';
import { ProfileForm } from '@/components/ProfileForm';

// Words that float around the fox in the hero.
const bubbles = [
  { de: 'Hallo!', en: 'Hello!' },
  { de: 'Danke', en: 'Thanks' },
  { de: 'Servus', en: 'Hi (Austria)' },
  { de: 'Moin', en: 'Hi (North)' },
  { de: 'Grüezi', en: 'Hi (Switzerland)' },
  { de: 'Tschüss', en: 'Bye' },
];

const features = [
  { icon: '🧭', title: 'One step at a time', text: 'Read, check, learn the rule, practice' },
  { icon: '🏠', title: 'A story to follow', text: 'Life in the Fuchsbau flat share' },
  { icon: '🔥', title: 'Daily streaks', text: 'Miss a day? A freeze saves you' },
  { icon: '🏆', title: 'Exams', text: 'Goethe style, at your level' },
];

const courseIcon: Record<string, string> = { a1: '🌱', a2: '🌿', 'b2-1': '🌳' };

function BetaForm() {
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
        <h2>{step === 'done' ? 'You’re on the list!' : 'You’re already on the list.'}</h2>
        <p className="muted">We let testers in step by step and will email <b>{email.trim()}</b> when your spot is ready. Log in with this email and you can start right away.</p>
      </div>
    );
  }

  if (step === 'profile') {
    return (
      <div id="beta" className="v3-beta-profile v3-fade">
        <div className="v3-beta-step">
          <span className="v3-tag">Step 2 of 2</span>
          <h2>A few quick questions</h2>
          <p className="muted">So the course fits you. You will not be asked again when you log in.</p>
        </div>
        {err && <p className="v3-err" role="alert">{err}</p>}
        <ProfileForm
          submitLabel="Finish sign-up"
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
        <span className="v3-tag">Closed beta · limited spots</span>
        <h2>Join the free beta</h2>
        <p className="muted">We are looking for a small group of learners to test Fuchsdeutsch. Free, no deposit.</p>
      </div>
      <label>Email<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" maxLength={254} /></label>
      <label className="v3-hp" aria-hidden>Website<input tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} /></label>
      <label className="v3-check">
        <input type="checkbox" required checked={agree} onChange={(e) => setAgree(e.target.checked)} />
        <span>I agree that Fuchsdeutsch stores my details to contact me about the beta. I can withdraw this at any time. <Link href="/privacy">Privacy</Link></span>
      </label>
      {err && <p className="v3-err" role="alert">{err}</p>}
      <button type="submit" className="v3-btn" disabled={busy}>{busy ? 'One moment …' : 'Continue'}</button>
      <p className="muted small">Step 1 of 2 · Already a tester? <Link href="/login">Log in</Link></p>
    </form>
  );
}

export default function Landing() {
  const { user, ready } = useStore();
  const [say, setSay] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSay((s) => (s + 1) % bubbles.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="landing lp">
      <section className="lp-hero">
        <div className="lp-hero-copy">
          <h1>Learn German, one calm step at a time.</h1>
          <p className="lead">Short lessons, a story you follow from chapter to chapter, and Goethe-style exams. Free for a limited time.</p>
          {ready && user ? (
            <div className="hero-cta"><Link href="/lernen" className="btn btn-lg">Continue learning</Link></div>
          ) : (
            <div className="hero-cta"><a href="#beta" className="btn btn-lg">Join the free beta</a><Link href="/login" className="btn btn-lg btn-ghost">Tester log in</Link></div>
          )}
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

      {ready && !user && <section aria-label="Beta sign-up"><BetaForm /></section>}

      <section aria-labelledby="courses-h">
        <h2 id="courses-h" className="lp-h2">Open levels</h2>
        <div className="lp-courses">
          {courses.map((c, i) => (
            <div key={c.id} className={`lp-course t-${['mint', 'sky', 'lilac'][i % 3]}`}>
              <span className="lp-course-icon" aria-hidden>{courseIcon[c.id] || '📘'}</span>
              <b className="lp-course-level">{c.level}</b>
              <span className="lp-course-meta">{c.chapters.length} chapters · {c.examName.replace('Goethe-Zertifikat ', 'Goethe ')}</span>
            </div>
          ))}
        </div>
      </section>

      <section aria-label="What you get">
        <div className="lp-features">
          {features.map((f) => (
            <div key={f.title} className="lp-feature">
              <span className="lp-feature-icon" aria-hidden>{f.icon}</span>
              <b>{f.title}</b>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="lp-deal" aria-labelledby="deal-h">
        <h2 id="deal-h" className="lp-h2">Free during the beta</h2>
        <div className="lp-deal-row">
          <div className="lp-deal-card t-mint"><span aria-hidden>💚</span><b>Free</b><small>No fees, no ads</small></div>
          <div className="lp-deal-card t-butter"><span aria-hidden>🎁</span><b><s className="v3-strike">${DEPOSIT_USD} deposit</s> No deposit</b><small>Not needed for a limited time</small></div>
          <div className="lp-deal-card t-sky"><span aria-hidden>🎟️</span><b>Limited spots</b><small>We let testers in step by step</small></div>
        </div>
      </section>

      <section className="lp-path" aria-labelledby="path-h">
        <h2 id="path-h" className="lp-h2">From A1 to C2</h2>
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
        <p className="muted small lp-path-note">Open now: {courses.map((c) => c.level).join(', ')}. More levels are coming.</p>
      </section>

      <section className="foot">
        <Fox size={56} mood="sleepy" />
        <p>Fuchsdeutsch</p>
        {ready && user ? <Link href="/lernen" className="btn">Continue learning</Link> : <a href="#beta" className="btn">Join the free beta</a>}
      </section>
    </main>
  );
}
