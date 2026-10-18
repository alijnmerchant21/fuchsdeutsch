'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';
import { useStore } from '@/lib/store';

export function Guard({ children, admin }: { children: ReactNode; admin?: boolean }) {
  const { ready, user, isAdmin } = useStore();
  const router = useRouter();
  const path = usePathname();
  useEffect(() => { if (ready && !user) router.replace(`/login?next=${encodeURIComponent(path)}`); }, [ready, user, router, path]);
  if (!ready || !user) return <p className="dim">Lädt …</p>;
  if (admin && !isAdmin) return <div className="card formcard"><h3>Nur für Admins</h3><p className="dim">Dieses Konto hat keine Admin-Rechte.</p></div>;
  return <>{children}</>;
}
