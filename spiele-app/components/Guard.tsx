'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';
import { useStore } from '@/lib/store';

/** Games are for signed-in players only. */
export function Guard({ children }: { children: ReactNode }) {
  const { ready, user } = useStore();
  const router = useRouter();
  const path = usePathname();
  useEffect(() => { if (ready && !user) router.replace(`/login?next=${encodeURIComponent(path)}`); }, [ready, user, router, path]);
  if (!ready || !user) return <p className="dim">Lädt …</p>;
  return <>{children}</>;
}
