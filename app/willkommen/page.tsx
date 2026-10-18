'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { useStore } from '@/lib/store';
import { ProfileForm } from '@/components/ProfileForm';
import { DEMO_MODE } from '@/lib/config';
import { useUiLang } from '@/lib/lang';

function PasswordCard() {
  const { setPassword } = useStore();
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  if (DEMO_MODE) return null;
  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pw.length < 8) return setMsg('Use at least 8 characters.');
    if (pw !== pw2) return setMsg('The two passwords are not the same.');
    setBusy(true);
    const err = await setPassword(pw);
    setBusy(false);
    setMsg(err ? `That did not work: ${err}` : 'Done. Next time you can log in with your email and this password.');
    if (!err) { setPw(''); setPw2(''); }
  };
  return (
    <form className="card form" onSubmit={save}>
      <h2 className="h3">Set a password <span className="en">optional</span></h2>
      <p className="muted small">Then you can log in with email and password, without waiting for an email link.</p>
      <label>New password<input type="password" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="new-password" minLength={8} required /></label>
      <label>Repeat password<input type="password" value={pw2} onChange={(e) => setPw2(e.target.value)} autoComplete="new-password" minLength={8} required /></label>
      <button className="btn" type="submit" disabled={busy}>{busy ? 'Saving …' : 'Save password'}</button>
      {msg && <p className="pill t-mint" role="status">{msg}</p>}
    </form>
  );
}

function Form() {
  const { user, progress, saveProfile, setCourse } = useStore();
  const router = useRouter();
  const old = progress.profile;
  const [uiLang] = useUiLang();
  // A login by email link only knows the address, so do not suggest "name@..." as a first name.
  const guess = user && !user.email.startsWith(user.name) ? user.name.split(' ')[0] : '';

  return (
    <main className="page narrow welcome">
      <header className="welcome-head">
        <Fox size={84} mood="happy" />
        <div>
          <h1>{old ? 'Your profile' : 'Willkommen!'}</h1>
          <p className="lead">{old ? 'Change your details any time.' : 'Welcome! A few quick questions so the course fits you.'}</p>
        </div>
      </header>
      <ProfileForm
        lang={old?.uiLang || uiLang}
        initial={old}
        initialName={guess}
        initialCourse={progress.course}
        submitLabel={old ? 'Save' : 'Let’s go! (Los geht’s!)'}
        onSubmit={(profile, course) => {
          saveProfile(profile);
          setCourse(course);
          const next = new URLSearchParams(window.location.search).get('next') || '';
          router.replace(next.startsWith('/') && !next.startsWith('//') && !next.startsWith('/willkommen') ? next : '/lernen');
        }}
      />
      {old && <PasswordCard />}
    </main>
  );
}

export default function Page() { return <RequireUser allowNew><Form /></RequireUser>; }
