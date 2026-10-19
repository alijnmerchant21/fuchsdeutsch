'use client';
import { Landing } from '@/components/Landing';
import { Library } from '@/components/Library';
import { useStore } from '@/lib/store';

export default function Home() {
  const { ready, user } = useStore();
  if (!ready) return <p className="dim">Lädt …</p>;
  return user ? <Library /> : <Landing />;
}
