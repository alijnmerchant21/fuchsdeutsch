'use client';
/* Prüfung waitlist. After the setup form a new candidate waits here until the admin approves the account
   (table exam_access). Approval sends an email, then the mock test opens. */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useT } from '@/lib/lang';
import { useStore } from '@/lib/store';
import { Fox } from './Fox';

const OPEN = ['/setup', '/login', '/auth', '/datenschutz', '/garantie'];

export function AccessGate({ children }: { children: ReactNode }) {
  const { ready, user, isAdmin, candidate, access, signOut } = useStore();
  const t = useT();
  const path = usePathname();
  const waiting = ready && !!user && !isAdmin && !!candidate && access === false && !OPEN.some((p) => path === p || path.startsWith(p + '/'));
  if (!waiting) return <>{children}</>;
  const date = candidate.exam_date ? new Date(candidate.exam_date + 'T12:00').toLocaleDateString(t('de-DE', 'en-GB'), { day: 'numeric', month: 'long', year: 'numeric' }) : '';
  return (
    <div className="gate">
      <div className="card gatecard">
        <Fox size={96} mood="sleepy" />
        <h1>{t('Du bist auf der Liste!', 'You are on the list!')}</h1>
        <p className="dim">{t(
          `Wir lassen Teilnehmende nach und nach rein. Sobald dein Platz frei ist, schreiben wir an ${user.email}. Dann startet dein kostenloser Mock Test.`,
          `We let people in step by step. As soon as your spot is ready, we email ${user.email}. Then your free mock test starts.`,
        )}</p>
        <div className="gate-plan">
          <span><small>{t('Prüfung', 'Exam')}</small><b>Goethe {(candidate.level ?? 'b1').toUpperCase()}</b></span>
          {date && <span><small>{t('Prüfungstag', 'Exam day')}</small><b>{date}</b></span>}
          <span><small>{t('Pro Tag', 'Per day')}</small><b>{candidate.minutes_per_day} Min</b></span>
        </div>
        <div className="gate-actions">
          <Link className="btn ghostbtn" href="/setup">{t('Angaben ändern', 'Edit my answers')}</Link>
          <button type="button" className="linkbtn" onClick={() => void signOut()}>{t('Abmelden', 'Log out')}</button>
        </div>
      </div>
    </div>
  );
}
