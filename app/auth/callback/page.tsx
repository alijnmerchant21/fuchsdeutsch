'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Fox } from '@/components/Fox';
import { takeAuthNext } from '@/lib/site';
import { supabase } from '@/lib/supabase';

export default function AuthCallbackPage() {
  const router = useRouter();
  const [msg, setMsg] = useState('Einen Moment …');

  useEffect(() => {
    const sb = supabase();
    if (!sb) { router.replace('/login'); return; }
    const err = new URLSearchParams(window.location.search).get('error_description')
      || new URLSearchParams(window.location.hash.slice(1)).get('error_description');
    if (err) { setMsg(`Anmeldung fehlgeschlagen: ${err}`); return; }
    // The client exchanges the code in the URL by itself (detectSessionInUrl); getSession waits for that.
    void sb.auth.getSession().then(({ data }) => {
      if (data.session) router.replace(takeAuthNext());
      else setMsg('Der Link ist abgelaufen oder wurde schon benutzt. Bitte melde dich noch einmal an.');
    });
  }, [router]);

  return (
    <main className="page center">
      <Fox size={90} mood="happy" className="bob" />
      <p className="muted">{msg}</p>
    </main>
  );
}
