import type { ExamItem } from './types';

// Final exam in the format of the Goethe-Zertifikat: four modules, each scored out of 100,
// each passed at 60. This version draws on Kapitel 1 only. Add items as chapters are written.

export const finalLesen: ExamItem[] = [
  {
    points: 5,
    stimulus: {
      t: 'text', id: 'f-l1', kicker: 'Lesen, Teil 1', title: 'Vier Tage arbeiten, fünf Tage Lohn?',
      body: `Ein Ingenieurbüro in Freiburg hat vor zwei Jahren die Viertagewoche eingeführt. Die 34 Mitarbeitenden arbeiten seitdem von Montag bis Donnerstag, bei gleichem Gehalt. „Am Anfang hatten wir Angst, dass die Arbeit liegen bleibt“, erzählt die Geschäftsführerin Ilka Thamm. „Das Gegenteil ist passiert.“

Bevor das Büro die neue Woche einführte, hatte ein Team drei Monate lang alle Besprechungen gezählt. Das Ergebnis: Fast ein Drittel der Arbeitszeit ging für Treffen verloren, die niemand brauchte. Heute dauert keine Besprechung länger als 25 Minuten, und zwischen neun und zwölf Uhr schreibt niemand interne Mails.

Nicht alle waren sofort begeistert. Einige ältere Kolleginnen und Kollegen fanden die langen Tage anstrengend. Für sie gibt es inzwischen eine zweite Möglichkeit: fünf kürzere Tage. Die Zahl der Krankheitstage ist seit der Umstellung deutlich gesunken, und auf freie Stellen bewerben sich dreimal so viele Menschen wie früher.`,
    },
    q: { t: 'mcq', id: 'f-l1a', q: 'Was hat sich für die Mitarbeitenden geändert?', options: ['Sie arbeiten einen Tag weniger und verdienen weniger.', 'Sie arbeiten einen Tag weniger und verdienen gleich viel.', 'Sie arbeiten fünf kürzere Tage.'], answer: 1 },
  },
  { points: 5, q: { t: 'mcq', id: 'f-l1b', q: 'Was hatte das Team vor der Umstellung herausgefunden?', options: ['Viele Besprechungen waren unnötig.', 'Die Mitarbeitenden schrieben zu wenige Mails.', 'Ein Drittel der Mitarbeitenden war oft krank.'], answer: 0 } },
  { points: 5, q: { t: 'mcq', id: 'f-l1c', q: 'Warum gibt es eine zweite Möglichkeit?', options: ['Weil die Kundschaft freitags anruft.', 'Weil manche die langen Tage zu anstrengend fanden.', 'Weil das Gehalt zu niedrig war.'], answer: 1 } },
  { points: 5, q: { t: 'mcq', id: 'f-l1d', q: 'Welche Folge nennt der Text?', options: ['Es gibt weniger Bewerbungen.', 'Es gibt mehr Besprechungen.', 'Die Mitarbeitenden sind seltener krank.'], answer: 2 } },
  { points: 5, q: { t: 'gap', id: 'f-l2', task: 'Lesen, Teil 2: Ergänze die Zusammenfassung im Präteritum.', lines: ['Das Büro {{führte}} vor zwei Jahren die Viertagewoche ein. (einführen)', 'Am Anfang {{hatten}} viele Angst. (haben)', 'Einige {{fanden}} die langen Tage anstrengend. (finden)'] } },
];

export const finalHoeren: ExamItem[] = [
  {
    points: 5,
    stimulus: {
      t: 'audio', id: 'f-h1', title: 'Hören, Teil 1: Radiointerview „Besser schlafen“',
      lines: [
        { speaker: 'erzaehler', text: 'Willkommen bei „Wissen am Morgen“. Mein Gast ist heute die Schlafforscherin Doktor Carla Wenning. Frau Wenning, warum sind so viele Menschen morgens müde?' },
        { speaker: 'frauBaumann', text: 'Weil die meisten gegen ihre innere Uhr leben. Schule und Arbeit beginnen für viele einfach zu früh.' },
        { speaker: 'erzaehler', text: 'Kann man seine innere Uhr nicht umstellen?' },
        { speaker: 'frauBaumann', text: 'Nur ein bisschen. Tageslicht am Morgen hilft. Wer nach dem Aufstehen zwanzig Minuten draussen ist, wird abends früher müde.' },
        { speaker: 'erzaehler', text: 'Und das Handy im Bett?' },
        { speaker: 'frauBaumann', text: 'Das Licht ist nicht das grösste Problem. Schlimmer ist, dass uns Nachrichten wach halten. Ich empfehle, das Telefon eine Stunde vor dem Schlafen wegzulegen.' },
        { speaker: 'erzaehler', text: 'Was halten Sie vom Mittagsschlaf?' },
        { speaker: 'frauBaumann', text: 'Sehr viel, aber kurz. Nach zwanzig Minuten sollte Schluss sein, sonst fühlt man sich danach schlechter als vorher.' },
      ],
    },
    q: { t: 'mcq', id: 'f-h1a', q: 'Warum sind laut Frau Wenning viele Menschen morgens müde?', options: ['Sie gehen zu spät ins Bett.', 'Der Tag beginnt früher, als ihre innere Uhr es will.', 'Sie trinken zu wenig Kaffee.'], answer: 1 },
  },
  { points: 5, q: { t: 'mcq', id: 'f-h1b', q: 'Was hilft, um abends früher müde zu werden?', options: ['Morgens Zeit im Tageslicht verbringen.', 'Abends Sport machen.', 'Länger schlafen.'], answer: 0 } },
  { points: 5, q: { t: 'mcq', id: 'f-h1c', q: 'Was ist am Handy im Bett das größere Problem?', options: ['das helle Licht', 'die Nachrichten, die wach halten', 'der Wecker'], answer: 1 } },
  { points: 5, q: { t: 'mcq', id: 'f-h1d', q: 'Was sagt sie über den Mittagsschlaf?', options: ['Er sollte höchstens 20 Minuten dauern.', 'Er ist ungesund.', 'Er sollte mindestens eine Stunde dauern.'], answer: 0 } },
];

export const finalSchreiben = {
  minutes: 30,
  prompt: 'Sie lesen in einem Onlineforum die Frage: **„Früher war das Leben weniger stressig. Stimmt das?“** Schreiben Sie einen Forumsbeitrag (ca. 120 Wörter).\n\nÄußern Sie Ihre Meinung. Vergleichen Sie den Alltag früher und heute. Nennen Sie ein Beispiel aus Ihrer Familie. Machen Sie einen Vorschlag gegen Stress.',
  minWords: 100,
  criteria: [
    'Ich habe alle vier Punkte der Aufgabe behandelt.',
    'Ich habe Präteritum und Perfekt passend benutzt.',
    'Mein Text hat Einleitung, Hauptteil und Schluss mit Verbindungswörtern (weil, obwohl, deshalb, außerdem).',
    'Ich habe Wörter aus dem Kurs benutzt und meinen Text auf Fehler geprüft.',
  ],
};

export const finalSprechen = {
  minutes: 8,
  prompt: '**Kurzvortrag (ca. 3 Minuten):** „Zeitdruck im Alltag“. Nimm deinen Vortrag mit dem Handy auf und hör ihn dir danach an.\n\nBeschreibe das Problem. Erzähl von einer eigenen Erfahrung. Nenne Vor- und Nachteile von fester Planung. Sag am Ende deine Meinung.',
  criteria: [
    'Ich habe etwa drei Minuten frei gesprochen.',
    'Ich habe alle vier Punkte behandelt.',
    'Ich habe über eine Erfahrung in der Vergangenheit berichtet.',
    'Man versteht mich gut, und ich habe wichtige Wörter betont.',
  ],
};
