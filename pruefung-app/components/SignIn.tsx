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

  const [mode, setMode] = useState<'signup' | 'login'>('signup');
  const [agree, setAgree] = useState(false);
  const [viaEmail, setViaEmail] = useState(false);
  const needAgree = () => {
    if (mode === 'signup' && !agree) { setMsg({ ok: false, t: t('Bitte setz zuerst oben das Häkchen.', 'Please tick the box above first.') }); return true; }
    return false;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (needAgree()) return;
    setBusy(true); setMsg(null);
    if (usePw) {
      const err = await signInPassword(email.trim(), pw);
      if (err) setMsg({ ok: false, t: err === 'Invalid login credentials' ? t('E-Mail oder Passwort stimmt nicht.', 'Email or password is wrong.') : err });
    } else {
      const err = await signInEmail(email.trim());
      setMsg(err
        ? { ok: false, t: /rate limit|too many|security purposes/i.test(err) ? t('Gerade wurden zu viele E-Mails verschickt. Bitte in ein paar Minuten noch einmal, oder mit Google.', 'Too many emails were sent just now. Try again in a few minutes, or use Google.') : err }
        : { ok: true, t: t(`Schau in dein Postfach (auch im Spam). Der Link ist unterwegs an ${email.trim()}.`, `Check your inbox (and spam). The link is on its way to ${email.trim()}.`) });
    }
    setBusy(false);
  };
  const google = () => { if (!needAgree()) void signInGoogle(); };
  const switchMode = (m: 'signup' | 'login') => { setMode(m); setMsg(null); setViaEmail(m === 'login'); setUsePw(false); };

  const G = (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.14.77-4.59l-7.98-6.19A23.99 23.99 0 0 0 0 24c0 3.77.9 7.35 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /></svg>
  );

  const emailForm = (
    <form onSubmit={submit} className="signform">
      <label className="field">{t('E-Mail', 'Email')}<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('du@beispiel.de', 'you@example.com')} required autoComplete="email" /></label>
      {usePw && <label className="field">{t('Passwort', 'Password')}<input type="password" value={pw} onChange={(e) => setPw(e.target.value)} required autoComplete="current-password" /></label>}
      <button className="btn big wide" disabled={busy}>{busy ? t('Einen Moment …', 'One moment …') : usePw ? t('Anmelden', 'Log in') : t('Link per E-Mail schicken', 'Email me a link')}</button>
      <p className="small" style={{ marginTop: 10 }}>
        <button type="button" className="linkbtn" onClick={() => { setUsePw(!usePw); setMsg(null); }}>
          {usePw ? t('Lieber einen Link per E-Mail', 'Get a link by email instead') : t('Ich habe ein Passwort', 'I have a password')}
        </button>
      </p>
    </form>
  );

  return (
    <div className="card formcard signin">
      <span className="betatag">{mode === 'signup' ? t('Kostenlos · Mock Test inklusive', 'Free · mock test included') : t('Willkommen zurück', 'Welcome back')}</span>
      <h3>{mode === 'signup' ? t('Kostenlos starten', 'Start for free') : t('Anmelden', 'Log in')}</h3>
      <p className="dim">{mode === 'signup'
        ? t('Ein Konto für Fuchsdeutsch und die Prüfung. Danach ein kurzes Formular und dein Mock Test.', 'One account for Fuchsdeutsch and the exam. Then a short form and your mock test.')
        : t('Mit dem Konto, mit dem du dich registriert hast.', 'With the account you signed up with.')}</p>
      {mode === 'signup' && (
        <label className="agree">
          <input type="checkbox" checked={agree} onChange={(e) => { setAgree(e.target.checked); setMsg(null); }} />
          <span>{t('Ich akzeptiere die ', 'I accept the ')}<Link className="linkbtn" href="/datenschutz">{t('Datenschutzerklärung', 'privacy policy')}</Link>{t(' und die ', ' and the ')}<Link className="linkbtn" href="/garantie">{t('Garantie-Bedingungen', 'guarantee terms')}</Link>.</span>
        </label>
      )}
      {mode === 'signup' && !viaEmail ? (
        <div className="signbtns">
          <button type="button" className="btn ghostbtn big" onClick={() => { if (!needAgree()) setViaEmail(true); }}>✉️ {t('Mit E-Mail', 'Sign up with email')}</button>
          <button type="button" className="btn big" onClick={google}>{G} {t('Mit Google', 'Sign up with Google')}</button>
        </div>
      ) : (
        <>
          {mode === 'login' && <button type="button" className="btn ghostbtn big wide" onClick={google}>{G} {t('Mit Google anmelden', 'Log in with Google')}</button>}
          {mode === 'login' && <div className="or"><span>{t('oder per E-Mail', 'or with email')}</span></div>}
          {emailForm}
          {mode === 'signup' && <p className="small"><button type="button" className="linkbtn" onClick={() => { setViaEmail(false); setMsg(null); }}>{t('Lieber mit Google', 'Use Google instead')}</button></p>}
        </>
      )}
      {msg && <p className={msg.ok ? 'msg-ok' : 'msg-err'} role="status">{msg.t}</p>}
      <p className="small dim switchline">
        {mode === 'signup'
          ? <>{t('Schon ein Konto?', 'Already have an account?')} <button type="button" className="linkbtn" onClick={() => switchMode('login')}>{t('Anmelden', 'Log in')}</button></>
          : <>{t('Neu hier?', 'New here?')} <button type="button" className="linkbtn" onClick={() => switchMode('signup')}>{t('Kostenlos registrieren', 'Sign up for free')}</button></>}
      </p>
    </div>
  );
}
