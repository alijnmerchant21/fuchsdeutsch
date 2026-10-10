'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Fox } from '@/components/Fox';
import { DEMO_MODE, DEPOSIT_USD, TRIAL_DAYS, trialDaysLeft } from '@/lib/config';
import { useStore } from '@/lib/store';

export default function Login() {
  const { user, ready, signInDemo, signInGoogle, signInEmail } = useStore();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => setLeft(trialDaysLeft()), []);
  useEffect(() => {
    if (!ready || !user) return;
    // Go back to the page that asked for the login. Only same-site paths are allowed.
    const next = new URLSearchParams(window.location.search).get('next') || '';
    router.replace(next.startsWith('/') && !next.startsWith('//') ? next : '/lernen');
  }, [ready, user, router]);

  const magic = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = await signInEmail(email);
    setMsg(err ? `Das hat nicht geklappt: ${err}` : 'Schau in dein Postfach. Wir haben dir einen Link geschickt.');
  };

  return (
    <main className="page narrow login">
      <Fox size={110} mood="happy" className="bob" />
      <h1>Willkommen im Fuchsbau</h1>
      <p className="lead">Melde dich an, damit dein Fortschritt und deine Serie gespeichert werden.</p>

      {DEMO_MODE ? (
        <form className="card form" onSubmit={(e) => { e.preventDefault(); if (name.trim() && email.includes('@')) signInDemo(name.trim(), email.trim()); }}>
          <p className="pill t-butter">Demo-Modus: Der Fortschritt bleibt nur in diesem Browser.</p>
          <label>Dein Vorname<input value={name} onChange={(e) => setName(e.target.value)} placeholder="z. B. Dana" autoComplete="given-name" required /></label>
          <label>E-Mail<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="du@beispiel.de" autoComplete="email" required /></label>
          <button className="btn btn-lg" type="submit">Kurs starten</button>
        </form>
      ) : (
        <div className="card form">
          <button type="button" className="btn btn-lg btn-google" onClick={() => void signInGoogle()}>
            <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.2C12.4 13.7 17.7 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.500-4.800 7.200l7.700 6c4.500-4.200 6.900-10.300 6.900-17.700z"/><path fill="#FBBC05" d="M10.500 28.600c-.5-1.400-.8-3-.8-4.600s.3-3.200.8-4.600l-7.900-6.200C1 16.500 0 20.100 0 24s1 7.500 2.600 10.800l7.900-6.200z"/><path fill="#34A853" d="M24 48c6.500 0 11.900-2.100 15.900-5.800l-7.700-6c-2.200 1.500-5 2.300-8.200 2.300-6.300 0-11.600-4.200-13.500-9.900l-7.900 6.200C6.500 42.600 14.600 48 24 48z"/></svg>
            Mit Google anmelden
          </button>
          <p className="or"><span>oder per E-Mail-Link</span></p>
          <form onSubmit={magic} className="form">
            <label>E-Mail<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="du@beispiel.de" autoComplete="email" required /></label>
            <button className="btn" type="submit">Link schicken</button>
          </form>
          {msg && <p className="pill t-mint" role="status">{msg}</p>}
        </div>
      )}

      <p className="deal-mini">
        <b>Free forever. No charges, no hidden fees.</b>{' '}
        {left !== null && left > 0
          ? `You are inside the ${TRIAL_DAYS}-day trial period (${left} days left), so no deposit is needed.`
          : `New learners put down a $${DEPOSIT_USD} deposit per course and get 100% back when they finish in time.`}
      </p>
    </main>
  );
}
