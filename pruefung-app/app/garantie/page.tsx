'use client';
import Link from 'next/link';
import { Fox } from '@/components/Fox';
import { useT } from '@/lib/lang';

/** Terms of the "free until you pass" voucher. */
export default function Garantie() {
  const t = useT();
  const rules: [string, string][] = [
    ['Du hast einen bezahlten Plan (ein Modul für $9 oder alle Module für $21) mindestens 14 Tage vor deinem Prüfungstermin gekauft.',
      'You bought a paid plan (one module for $9 or all modules for $21) at least 14 days before your exam date.'],
    ['Du hast mindestens 90 % deiner Übungstage innerhalb der Frist des jeweiligen Blocks erledigt.',
      'You finished at least 90% of your practice days within each block’s deadline.'],
    ['Du hast alle Blocktests und den letzten vollständigen Mock Test vor der Prüfung gemacht und darin im betroffenen Modul mindestens 60 von 100 Punkten erreicht.',
      'You took every block test and the last full mock test before the exam, and scored at least 60 of 100 in the module concerned.'],
    ['Du hast das Goethe-Zertifikat (A1, A2, B1 oder B2) an dem Termin abgelegt, den du in deinem Plan eingetragen hast (oder wir haben eine Änderung vorher bestätigt).',
      'You took the Goethe-Zertifikat (A1, A2, B1 or B2) on the date in your plan (or we confirmed a change beforehand).'],
    ['Du lädst dein offizielles Ergebnis von Goethe innerhalb von 30 Tagen nach Erhalt hoch.',
      'You upload your official Goethe result within 30 days of receiving it.'],
  ];
  const voucher: [string, string][] = [
    ['Gilt pro Modul: Nur die Module, die du nicht bestanden hast, laufen kostenlos weiter.', 'Per module: only the modules you failed keep running for free.'],
    ['Der Plan läuft bis zu deinem nächsten Prüfungstermin, höchstens 6 Monate.', 'The plan runs until your next exam date, for at most 6 months.'],
    ['Einmal pro Modul und Person. Der Gutschein ist nicht übertragbar.', 'Once per module and person. The voucher cannot be transferred.'],
    ['Keine Auszahlung in Geld. Prüfungsgebühren von Goethe sind nicht abgedeckt.', 'No cash payout. Goethe exam fees are not covered.'],
    ['Sprechen ist ausgenommen, solange das Modul noch nicht verfügbar ist.', 'Speaking is excluded while the module is not yet available.'],
  ];
  return (
    <div className="legal">
      <div className="loginhead rise"><Fox size={72} mood="proud" />
        <h1>{t('Kostenlos weiter, bis du bestehst', 'Free until you pass')}</h1>
        <p className="dim">{t('Die Bedingungen für deinen Gutschein.', 'The conditions for your voucher.')}</p>
      </div>
      <section className="card block">
        <h3>{t('Du bekommst den Gutschein, wenn …', 'You get the voucher if …')}</h3>
        <ol className="legal-list">{rules.map(([de, en], i) => <li key={i}>{t(de, en)}</li>)}</ol>
        <p className="dim small">{t('Wir prüfen die Punkte 2 und 3 automatisch in deinem Verlauf. Du siehst deinen Stand immer auf deiner Übersicht.', 'We check points 2 and 3 automatically from your history. You can always see where you stand on your overview.')}</p>
      </section>
      <section className="card block">
        <h3>{t('So funktioniert der Gutschein', 'How the voucher works')}</h3>
        <ul className="legal-list">{voucher.map(([de, en], i) => <li key={i}>{t(de, en)}</li>)}</ul>
      </section>
      <section className="card block">
        <h3>{t('So löst du ihn ein', 'How to claim it')}</h3>
        <ol className="legal-list">
          <li>{t('Nach deinem Prüfungstag erscheint auf deiner Übersicht der Button „Ergebnis hochladen“.', 'After your exam day, your overview shows an "Upload result" button.')}</li>
          <li>{t('Lade deinen Ergebnisbogen von Goethe hoch (PDF oder Foto) und markiere, welche Module du bestanden hast.', 'Upload your Goethe result letter (PDF or photo) and mark which modules you passed.')}</li>
          <li>{t('Wir prüfen deinen Antrag innerhalb von 3 Werktagen. Den Stand siehst du auf deiner Übersicht.', 'We review your claim within 3 working days. You can follow it on your overview.')}</li>
          <li>{t('Ist er freigegeben, läuft dein Plan für die fehlenden Module kostenlos weiter, mit neuen Blöcken bis zu deinem nächsten Termin.', 'Once approved, your plan keeps running for free for the modules you still need, with new blocks until your next date.')}</li>
        </ol>
      </section>
      <p className="lp-center small"><Link className="linkbtn" href="/">← {t('Zurück zur Startseite', 'Back to the home page')}</Link></p>
    </div>
  );
}
