'use client';
/* Privacy policy (GDPR / DSGVO). Bilingual via the DE | EN switch. */
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Fox } from '@/components/Fox';
import { useT } from '@/lib/lang';

const MAIL = 'admin@fuchsdeutsch.de';

function Sec({ title, children }: { title: string; children: ReactNode }) {
  return <section className="card block"><h3>{title}</h3>{children}</section>;
}

export default function Datenschutz() {
  const t = useT();
  const li = (de: string, en: string) => <li>{t(de, en)}</li>;
  return (
    <div className="legal">
      <div className="loginhead rise"><Fox size={64} />
        <h1>{t('Datenschutz', 'Privacy')}</h1>
        <p className="dim">{t('So gehen wir mit deinen Daten um. Stand: Oktober 2026.', 'How we handle your data. Last updated: October 2026.')}</p>
      </div>

      <Sec title={t('Kurz gesagt', 'In short')}>
        <ul className="legal-list">
          {li('Wir verarbeiten deine Daten nach der Datenschutz-Grundverordnung (DSGVO) und nur, um dir die Prüfungsvorbereitung anzubieten.', 'We process your data under the EU General Data Protection Regulation (GDPR) and only to provide your exam preparation.')}
          {li('Keine Werbung, kein Tracking, kein Verkauf deiner Daten.', 'No ads, no tracking, we never sell your data.')}
          {li('Du kannst jederzeit Auskunft verlangen oder dein Konto und alle Daten löschen lassen.', 'You can ask what we store or have your account and all data deleted at any time.')}
        </ul>
      </Sec>

      <Sec title={t('1. Verantwortlich', '1. Controller')}>
        <p>{t('Verantwortlich für die Datenverarbeitung ist Fuchsdeutsch, der Betreiber dieser Website.', 'The controller responsible for processing is Fuchsdeutsch, the operator of this website.')} {t('Kontakt:', 'Contact:')} <a className="linkbtn" href={`mailto:${MAIL}`}>{MAIL}</a></p>
      </Sec>

      <Sec title={t('2. Welche Daten wir verarbeiten', '2. What data we process')}>
        <ul className="legal-list">
          {li('Konto: E-Mail-Adresse und Vorname. Bei Anmeldung mit Google zusätzlich der Name aus deinem Google-Konto.', 'Account: email address and first name. With Google sign-in also the name from your Google account.')}
          {li('Angaben im Formular: Prüfungsdatum, Prüfungsort, Erstsprache, gewählte Module, Lerntage und Lernzeit.', 'Form details: exam date, exam center, first language, chosen modules, study days and study time.')}
          {li('Übungsdaten: deine Antworten, „sicher oder geraten“, Punkte, Schreibtexte und Korrekturen.', 'Practice data: your answers, "sure or guessed", scores, writing texts and corrections.')}
          {li('Bestehensgarantie: dein hochgeladener Ergebnisbogen von Goethe und deine Angaben zum Ergebnis.', 'Pass guarantee: the Goethe result letter you upload and your result details.')}
          {li('Technische Daten: Beim Aufruf der Seite verarbeitet unser Hosting-Anbieter kurz IP-Adresse, Zeitpunkt und Browser-Angaben, um die Seite auszuliefern und zu schützen.', 'Technical data: when you open the site, our hosting provider briefly processes IP address, time and browser details to deliver and protect the site.')}
        </ul>
      </Sec>

      <Sec title={t('3. Zwecke und Rechtsgrundlagen', '3. Purposes and legal bases')}>
        <ul className="legal-list">
          {li('Bereitstellung von Mock Test, Auswertung und Übungsblöcken: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).', 'Providing the mock test, evaluation and practice blocks: performance of a contract (Art. 6(1)(b) GDPR).')}
          {li('Prüfung deines Antrags auf die Bestehensgarantie: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).', 'Reviewing your pass guarantee claim: performance of a contract (Art. 6(1)(b) GDPR).')}
          {li('Sicherheit und Betrieb der Website: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).', 'Security and operation of the website: legitimate interest (Art. 6(1)(f) GDPR).')}
          {li('Freiwillige Angaben wie die Erstsprache: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), jederzeit widerrufbar.', 'Optional details such as first language: consent (Art. 6(1)(a) GDPR), which you can withdraw at any time.')}
        </ul>
      </Sec>

      <Sec title={t('4. Künstliche Intelligenz', '4. Artificial intelligence')}>
        <p>{t('Um deine Übungsblöcke zu bauen und deine Schreibtexte zu korrigieren, nutzen wir KI (Claude von Anthropic). Dafür übermitteln wir deine Antworten, Punkte und Texte ohne deinen Namen und ohne deine E-Mail-Adresse. Eine Person aus unserem Team prüft jeden Block, bevor du ihn siehst.',
          'To build your practice blocks and correct your writing, we use AI (Claude by Anthropic). We send your answers, scores and texts without your name or email address. A person from our team checks every block before you see it.')}</p>
      </Sec>

      <Sec title={t('5. Dienstleister', '5. Service providers')}>
        <p>{t('Wir setzen sorgfältig ausgewählte Auftragsverarbeiter ein, mit denen Verträge nach Art. 28 DSGVO bestehen:', 'We use carefully chosen processors under contracts according to Art. 28 GDPR:')}</p>
        <ul className="legal-list">
          {li('Supabase: Datenbank, Anmeldung und Dateispeicher.', 'Supabase: database, sign-in and file storage.')}
          {li('Vercel: Hosting der Website.', 'Vercel: website hosting.')}
          {li('Google: nur wenn du dich mit Google anmeldest.', 'Google: only if you sign in with Google.')}
          {li('Anthropic: KI für Übungsblöcke und Korrekturen (siehe Punkt 4).', 'Anthropic: AI for practice blocks and corrections (see point 4).')}
        </ul>
        <p>{t('Einige Anbieter sitzen in den USA. Die Übermittlung erfolgt auf Grundlage des EU-US Data Privacy Framework oder der EU-Standardvertragsklauseln.', 'Some providers are based in the US. Transfers rely on the EU-US Data Privacy Framework or the EU Standard Contractual Clauses.')}</p>
      </Sec>

      <Sec title={t('6. Speicherdauer', '6. How long we keep data')}>
        <ul className="legal-list">
          {li('Konto- und Übungsdaten: solange dein Konto besteht. Nach der Löschung entfernen wir sie innerhalb von 30 Tagen.', 'Account and practice data: as long as your account exists. After deletion we remove them within 30 days.')}
          {li('Ergebnisbogen für die Garantie: solange dein Konto besteht. Auf Wunsch löschen wir ihn sofort nach der Entscheidung.', 'Result letter for the guarantee: as long as your account exists. On request we delete it right after the decision.')}
          {li('Technische Protokolle beim Hosting-Anbieter: in der Regel wenige Tage.', 'Technical logs at the hosting provider: usually a few days.')}
          {li('Gesetzliche Aufbewahrungspflichten (z. B. für Rechnungen) bleiben unberührt.', 'Statutory retention duties (e.g. for invoices) remain unaffected.')}
        </ul>
      </Sec>

      <Sec title={t('7. Speicher im Browser', '7. Storage in your browser')}>
        <p>{t('Wir speichern nur, was für die Seite nötig ist: deine Anmeldung, Sprache, Hell/Dunkel, angefangene Antworten und dein Fehlerheft. Keine Werbe- oder Tracking-Cookies, deshalb gibt es kein Cookie-Banner. Schriften liegen auf unserem eigenen Server, es werden keine Daten an Google Fonts gesendet.',
          'We only store what the site needs: your sign-in, language, light/dark, unfinished answers and your mistake notebook. No advertising or tracking cookies, so there is no cookie banner. Fonts are served from our own server, nothing is sent to Google Fonts.')}</p>
      </Sec>

      <Sec title={t('8. Deine Rechte', '8. Your rights')}>
        <ul className="legal-list">
          {li('Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)', 'Access to your stored data (Art. 15 GDPR)')}
          {li('Berichtigung (Art. 16) und Löschung (Art. 17)', 'Rectification (Art. 16) and erasure (Art. 17)')}
          {li('Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20)', 'Restriction of processing (Art. 18) and data portability (Art. 20)')}
          {li('Widerspruch gegen Verarbeitungen aus berechtigtem Interesse (Art. 21) und Widerruf von Einwilligungen (Art. 7 Abs. 3)', 'Objection to processing based on legitimate interest (Art. 21) and withdrawal of consent (Art. 7(3))')}
          {li('Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO)', 'Complaint to a data protection supervisory authority (Art. 77 GDPR)')}
        </ul>
        <p>{t('Schreib uns dafür einfach an', 'Just write to us at')} <a className="linkbtn" href={`mailto:${MAIL}`}>{MAIL}</a>. {t('Wir antworten innerhalb eines Monats.', 'We reply within one month.')}</p>
      </Sec>

      <p className="lp-center small"><Link className="linkbtn" href="/">← {t('Zurück zur Startseite', 'Back to the home page')}</Link></p>
    </div>
  );
}
