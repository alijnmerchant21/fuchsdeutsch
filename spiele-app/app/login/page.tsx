'use client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { Fox } from '@/components/Fox';
import { SignIn } from '@/components/SignIn';
import { useT } from '@/lib/lang';
import { useStore } from '@/lib/store';

function Login() {
  const { user } = useStore();
  const router = useRouter();
  const t = useT();
  const raw = useSearchParams().get('next') || '/';
  const next = raw.startsWith('/') && !raw.startsWith('//') ? raw : '/';
  useEffect(() => { if (user) router.replace(next); }, [user, router, next]);
  return (
    <div className="loginwrap">
      <div className="loginhead rise">
        <Fox size={84} mood="wow" />
        <h1>{t('Schön, dass du da bist.', 'Good to have you here.')}</h1>
        <p className="dim">{t('Melde dich an oder registriere dich. Danach wählst du dein Niveau und spielst los.', 'Sign in or sign up. Then pick your level and start playing.')}</p>
      </div>
      <div className="rise" style={{ animationDelay: '150ms' }}><SignIn /></div>
      <p className="lp-center small rise" style={{ animationDelay: '300ms' }}><Link className="linkbtn" href="/">← {t('Zurück zur Startseite', 'Back to the home page')}</Link></p>
    </div>
  );
}

export default function Page() { return <Suspense><Login /></Suspense>; }
