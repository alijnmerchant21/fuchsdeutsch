'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { useStore } from '@/lib/store';
import { Fox } from './Fox';

/** Shown to a signed-in account that is not approved for the closed beta yet. */
export function BetaPending() {
  const { user, signOut, joinBeta } = useStore();
  const router = useRouter();
  // Someone who came in with Google straight from the login page is not on the list yet: add them now.
  const [needsAnswers, setNeedsAnswers] = useState(false);
  useEffect(() => {
    if (!user?.email) return;
    void joinBeta(user.email).then((r) => setNeedsAnswers(r === 'ok'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);
  return (
    <main className="v3-page v3-center-page v3-fade">
      <Fox size={96} mood="happy" className="bob" />
      <h1>You’re on the list</h1>
      <p className="v3-sub" style={{ maxWidth: '46ch' }}>
        Fuchsdeutsch is in a closed beta. We let testers in step by step and will email <b>{user?.email}</b> as soon as your spot is ready.
      </p>
      {needsAnswers && <p><Link href="/#beta" className="v3-btn">Answer 4 quick questions</Link></p>}
      <p className="muted small">Signed up with a different email? Log out and use that one.</p>
      <div className="v3-row v3-center">
        <Link href="/" className="v3-btn ghost">Back to the homepage</Link>
        <button type="button" className="v3-btn" onClick={() => void signOut().then(() => router.push('/'))}>Log out</button>
      </div>
    </main>
  );
}

/** Pages inside the course need a signed-in, approved learner who has filled in the welcome form. */
export function RequireUser({ children, allowNew = false }: { children: ReactNode; allowNew?: boolean }) {
  const { ready, user, progress, isAdmin, access } = useStore();
  const router = useRouter();
  const path = usePathname();
  const blocked = !isAdmin && access === false;
  const needsForm = !isAdmin && !allowNew && !!user && !blocked && access === true && !progress.profile;
  useEffect(() => {
    if (!ready) return;
    // Remember where the learner wanted to go, so login can send them back there.
    if (!user) router.replace(`/login?next=${encodeURIComponent(path)}`);
    else if (needsForm) router.replace(`/willkommen?next=${encodeURIComponent(path)}`);
  }, [ready, user, needsForm, router, path]);
  if (ready && user && blocked) return <BetaPending />;
  if (!ready || !user || access === null || needsForm) return <main className="page center"><Fox size={90} mood="sleepy" className="bob" /><p className="muted">Einen Moment …</p></main>;
  return <>{children}</>;
}
