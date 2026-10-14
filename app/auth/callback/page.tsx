'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Fox } from '@/components/Fox';
import { supabase } from '@/lib/supabase';

function Callback() {
  const router = useRouter();
  const params = useSearchParams();
  const [msg, setMsg] = useState('Einen Moment …');

  useEffect(() => {
    const sb = supabase();
    if (!sb) {
      router.replace('/login');
      return;
    }
    const rawNext = params.get('next') || '/lernen';
    const next = rawNext.startsWith('/') && !rawNext.startsWith('//') ? rawNext : '/lernen';

    void (async () => {
      const code = params.get('code');
      if (code) {
        const { error } = await sb.auth.exchangeCodeForSession(code);
        if (error) {
          setMsg(`Anmeldung fehlgeschlagen: ${error.message}`);
          return;
        }
      } else {
        await sb.auth.getSession();
      }
      router.replace(next);
    })();
  }, [params, router]);

  return (
    <main className="page center">
      <Fox size={90} mood="happy" className="bob" />
      <p className="muted">{msg}</p>
    </main>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<main className="page center"><p className="muted">Einen Moment …</p></main>}>
      <Callback />
    </Suspense>
  );
}
