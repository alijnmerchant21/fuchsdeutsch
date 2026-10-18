'use client';
/* Sign up and sign in in one card: Google, a magic link, or a password for existing accounts. */
import Link from 'next/link';
import { useState } from 'react';
import { DEMO_MODE } from '@/lib/config';
import { useT } from '@/lib/lang';
import { useStore } from '@/lib/store';

export function SignIn() {
  const { signInDemo, signInEmail, signInPassword, signInGoogle } = useStore();
  const t = useT();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [usePw, setUsePw] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; t: string } | null>(null);

  if (DEMO_MODE) {
    return (
      <form className="card formcard signin" onSubmit={(e) => { e.preventDefault(); if (email) signInDemo(name.trim() || email.split('@')[0], email.trim(), admin); }}>
        <h3>{t('Anmelden oder registrieren', 'Sign in or sign up')}</h3>
        <p className="en small">{t('Demo-Modus: Alles wird nur in diesem Browser gespeichert.', 'Demo mode: everything is saved in this browser only.')}</p>
        <label className="field">{t('E-Mail', 'Email')}<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" /></label>
        <label className="field">{t('Vorname', 'First name')} <small>optional</small><input value={name} onChange={(e) => setName(e.target.value)} /></label>
        <label className="row small"><input type="checkbox" checked={admin} onChange={(e) => setAdmin(e.target.checked)} /> {t('Als Admin testen', 'Test as admin')}</label>
        <div className="actions"><button className="btn big">{t('Weiter', 'Continue')}</button></div>
        <p className="small dim consent">{t('Mit der Anmeldung akzeptierst du die ', 'By signing in you accept the ')}<Link className="linkbtn" href="/datenschutz">{t('Datenschutzerklärung', 'privacy policy')}</Link>{t(' und die ', ' and the ')}<Link className="linkbtn" href="/garantie">{t('Garantie-Bedingungen', 'guarantee terms')}</Link>.</p>
      </form>
    );
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true); setMsg(null);
    if (usePw) {
      const err = await signInPassword(email.trim(), pw);
      if (err) setMsg({ ok: false, t: err === 'Invalid login credentials' ? t('E-Mail oder Passwort stimmt nicht.', 'Email or password is wrong.') : err });
    } else {
      const err = await signInEmail(email.trim());
      setMsg(err ? { ok: false, t: err } : { ok: true, t: t(`Link ist unterwegs an ${email.trim()}. Öffne ihn auf diesem Gerät.`, `Link sent to ${email.trim()}. Open it on this device.`) });
    }
    setBusy(false);
  };

  return (
    <div className="card formcard signin">
      <h3>{t('Anmelden oder registrieren', 'Sign in or sign up')}</h3>
      <p className="en small">{t('Ein Konto für Fuchsdeutsch und die Prüfung. Neu hier? Einfach anmelden, das Konto entsteht automatisch.', 'One account for Fuchsdeutsch and the exam. New here? Just sign in and your account is created.')}</p>
      <button type="button" className="btn ghostbtn wide" onClick={() => void signInGoogle()}><span className="g">G</span> {t('Mit Google weiter', 'Continue with Google')}</button>
      <div className="or"><span>{t('oder per E-Mail', 'or with email')}</span></div>
      <form onSubmit={submit}>
        <label className="field">{t('E-Mail', 'Email')}<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" /></label>
        {usePw && <label className="field">{t('Passwort', 'Password')}<input type="password" value={pw} onChange={(e) => setPw(e.target.value)} required autoComplete="current-password" /></label>}
        <button className="btn big wide" disabled={busy}>{busy ? '…' : usePw ? t('Anmelden', 'Sign in') : t('Link per E-Mail schicken', 'Email me a link')}</button>
        <p className="small" style={{ marginTop: 10 }}>
          <button type="button" className="linkbtn" onClick={() => { setUsePw(!usePw); setMsg(null); }}>
            {usePw ? t('Lieber einen Link per E-Mail', 'Use an email link instead') : t('Ich habe schon ein Passwort', 'I already have a password')}
          </button>
        </p>
        {msg && <p className={msg.ok ? 'msg-ok' : 'msg-err'}>{msg.t}</p>}
        <p className="small dim consent">{t('Mit der Anmeldung akzeptierst du die ', 'By signing in you accept the ')}<Link className="linkbtn" href="/datenschutz">{t('Datenschutzerklärung', 'privacy policy')}</Link>{t(' und die ', ' and the ')}<Link className="linkbtn" href="/garantie">{t('Garantie-Bedingungen', 'guarantee terms')}</Link>.</p>
      </form>
    </div>
  );
}
