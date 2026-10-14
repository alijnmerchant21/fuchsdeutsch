'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';
import { useStore } from '@/lib/store';
import { Fox } from './Fox';

/** Pages inside the course need a signed-in learner who has filled in the welcome form. */
export function RequireUser({ children, allowNew = false }: { children: ReactNode; allowNew?: boolean }) {
  const { ready, user, progress, isAdmin } = useStore();
  const router = useRouter();
  const path = usePathname();
  const needsForm = !isAdmin && !allowNew && !!user && !progress.profile;
  useEffect(() => {
    if (!ready) return;
    // Remember where the learner wanted to go, so login can send them back there.
    if (!user) router.replace(`/login?next=${encodeURIComponent(path)}`);
    else if (needsForm) router.replace(`/willkommen?next=${encodeURIComponent(path)}`);
  }, [ready, user, needsForm, router, path]);
  if (!ready || !user || needsForm) return <main className="page center"><Fox size={90} mood="sleepy" className="bob" /><p className="muted">Einen Moment …</p></main>;
  return <>{children}</>;
}
