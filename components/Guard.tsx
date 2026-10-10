'use client';
import { useRouter } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';
import { useStore } from '@/lib/store';
import { Fox } from './Fox';

/** Pages inside the course need a signed-in learner. */
export function RequireUser({ children }: { children: ReactNode }) {
  const { ready, user } = useStore();
  const router = useRouter();
  useEffect(() => { if (ready && !user) router.replace('/login'); }, [ready, user, router]);
  if (!ready || !user) return <main className="page center"><Fox size={90} mood="sleepy" className="bob" /><p className="muted">Einen Moment …</p></main>;
  return <>{children}</>;
}
