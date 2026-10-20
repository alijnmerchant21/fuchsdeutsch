/* Email drafts for the admin. The admin can edit every draft before it is sent.
   Placeholders: {name} {email} {course} {date}. Lines starting with "- " become a list. */
export type EmailApp = 'kurs' | 'pruefung' | 'spiele';
export type EmailLang = 'de' | 'en';
export interface EmailDraft { subject: string; text: string; button: string; link: string }

const SITE = 'https://www.fuchsdeutsch.de';

const DRAFTS: Record<string, Record<EmailLang, Omit<EmailDraft, 'link'>>> = {
  'kurs-approved': {
    en: {
      subject: "You're in: welcome to Fuchsdeutsch",
      text: `Hi {name},

Good news: your spot in the Fuchsdeutsch beta is ready. Log in with this email ({email}) and you can start right away. Your course: {course}.

A few tips for the first days:
- Do one section a day. Each one takes about 10 to 15 minutes.
- Turn on English help if you get stuck.
- Something broken or confusing? Use the report button at the bottom right of every page.

The beta is free. All we ask for is your honest feedback.

Viel Spaß!
Ali from Fuchsdeutsch`,
      button: 'Start learning',
    },
    de: {
      subject: 'Du bist dabei: willkommen bei Fuchsdeutsch',
      text: `Hallo {name},

gute Nachricht: Dein Platz in der Fuchsdeutsch-Beta ist frei. Melde dich mit dieser E-Mail-Adresse ({email}) an und leg sofort los. Dein Kurs: {course}.

Ein paar Tipps für die ersten Tage:
- Mach jeden Tag einen Abschnitt. Jeder dauert etwa 10 bis 15 Minuten.
- Schalte die English-Hilfe ein, wenn du nicht weiterkommst.
- Etwas ist kaputt oder unklar? Nutz den Melde-Button unten rechts auf jeder Seite.

Die Beta ist kostenlos. Wir wünschen uns nur dein ehrliches Feedback.

Viel Spaß!
Ali von Fuchsdeutsch`,
      button: 'Jetzt lernen',
    },
  },
  'pruefung-approved': {
    en: {
      subject: 'Your free Goethe mock test is ready',
      text: `Hi {name},

Your Fuchsdeutsch Prüfung account is ready. Start with the free 40-minute mock test. It shows where you lose points in Hören, Lesen and Schreiben. After that you get practice blocks built only from your weak spots, up to your exam date ({date}).

Tip: do the mock test in one go, somewhere quiet, with headphones.

Found a problem? Use the report button at the bottom right.

Viel Erfolg!
Ali from Fuchsdeutsch`,
      button: 'Start the mock test',
    },
    de: {
      subject: 'Dein kostenloser Goethe-Mock-Test ist bereit',
      text: `Hallo {name},

dein Konto bei Fuchsdeutsch Prüfung ist bereit. Starte mit dem kostenlosen Mock Test (40 Minuten). Er zeigt dir, wo du in Hören, Lesen und Schreiben Punkte verlierst. Danach bekommst du Übungsblöcke, die nur aus deinen Schwachstellen gebaut sind, bis zu deinem Prüfungstag ({date}).

Tipp: Mach den Mock Test am Stück, an einem ruhigen Ort, mit Kopfhörern.

Ein Problem gefunden? Nutz den Melde-Button unten rechts.

Viel Erfolg!
Ali von Fuchsdeutsch`,
      button: 'Mock Test starten',
    },
  },
  custom: {
    en: { subject: '', text: 'Hi {name},\n\n\n\nAli from Fuchsdeutsch', button: 'Open Fuchsdeutsch' },
    de: { subject: '', text: 'Hallo {name},\n\n\n\nAli von Fuchsdeutsch', button: 'Fuchsdeutsch öffnen' },
  },
};

export const KINDS = ['kurs-approved', 'pruefung-approved', 'custom'] as const;
export type EmailKind = (typeof KINDS)[number];

export function draft(kind: EmailKind, lang: EmailLang, app: EmailApp, vars: Record<string, string>): EmailDraft {
  const d = DRAFTS[kind][lang];
  const fill = (s: string) => s.replace(/\{(\w+)\}/g, (_, k: string) => vars[k] ?? '');
  const link = app === 'pruefung' ? `${SITE}/pruefung` : app === 'spiele' ? `${SITE}/spiele` : `${SITE}/login`;
  return { subject: fill(d.subject), text: fill(d.text), button: d.button, link };
}
