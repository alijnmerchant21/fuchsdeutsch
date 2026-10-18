'use client';
/* Dashboard card: where the candidate stands on the "free until you pass" conditions. */
import Link from 'next/link';
import { guaranteeStatus } from '@/lib/guarantee';
import { En } from '@/lib/lang';
import { modName } from '@/lib/content';
import { useStore } from '@/lib/store';

export function GuaranteeCard() {
  const { candidate, attempts, blocks, claims } = useStore();
  if (!candidate) return null;
  const claim = claims[claims.length - 1] ?? null;
  const st = guaranteeStatus(candidate, attempts, blocks, claim);
  const shown = st.examPassed || claim ? st.checks : st.checks.slice(0, 3);
  const okN = shown.filter((c) => c.ok).length;

  return (
    <section className="card block guarcard">
      <header className="bh">
        <span className="modchip guarchip">🛡 Bestehensgarantie</span>
        <Link className="linkbtn small" href="/garantie">Bedingungen</Link>
      </header>
      <h3>{claim ? 'Dein Gutschein-Antrag' : st.examPassed ? 'Wie war die Prüfung?' : `So stehst du: ${okN} von ${shown.length}`}</h3>
      <En as="p" block>{claim ? 'Your voucher claim' : st.examPassed ? 'How did the exam go?' : `Where you stand: ${okN} of ${shown.length} conditions met so far`}</En>
      {claim ? (
        <div className={`guarstate ${claim.status}`}>
          {claim.status === 'pending' && <><b>Wir prüfen dein Ergebnis.</b> Du bekommst Bescheid, sobald es entschieden ist.<En block>We are checking your result. You will hear from us once it is decided.</En></>}
          {claim.status === 'approved' && <><b>Gutschein aktiv bis {claim.voucher_until}.</b> Dein Plan läuft kostenlos weiter für: {(claim.voucher_modules ?? []).map(modName).join(', ')}.{claim.admin_note && <><br />{claim.admin_note}</>}<En block>Voucher active. Your plan keeps running for free for the modules you still need.</En></>}
          {claim.status === 'rejected' && <><b>Leider kein Gutschein.</b> {claim.admin_note}<En block>No voucher this time. The note above explains why.</En></>}
        </div>
      ) : null}
      {(!claim || claim.status === 'pending') && <ul className="guarlist">
        {shown.map((c) => (
          <li key={c.id} className={c.ok ? 'ok' : ''}>
            <span className="gmark">{c.ok ? '✓' : '○'}</span>
            <span><b>{c.de}</b><small>{c.detailDe}</small><En block>{c.en}: {c.detailEn}</En></span>
          </li>
        ))}
      </ul>}
      {!claim && st.examPassed && <Link className="btn" href="/garantie/einloesen">Ergebnis hochladen</Link>}
      {!claim && !st.examPassed && <p className="small dim">Nach deinem Prüfungstag erscheint hier der Button „Ergebnis hochladen“.<En block>After your exam day, an "Upload result" button appears here.</En></p>}
    </section>
  );
}
