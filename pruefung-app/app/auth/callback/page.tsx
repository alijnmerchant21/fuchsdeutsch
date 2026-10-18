'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useStore } from '@/lib/store';

export default function Callback() {
  const { user, ready } = useStore();
  const router = useRouter();
  useEffect(() => { if (ready && user) router.replace('/'); }, [ready, user, router]);
  return <div className="center card formcard"><p>Anmeldung läuft …</p></div>;
}
