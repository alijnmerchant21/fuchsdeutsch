import type { FinalExam } from '../types';
import { audio, gap, mcq, order, text, x } from '../helpers';

// A2 final exam, modeled on the four parts of the Goethe-Zertifikat A2. Everything is auto-checked.
// Audio ids start with "a2f-" so they are unique across the site.

const hoeren = [
  // Teil 1: radio and announcements
  x(2, mcq('a2f-h1', 'Wie wird das Wetter am Wochenende?', ['sonnig und warm', 'Regen und Wind', 'Schnee'], 1),
    audio('a2f-h-st1', 'Hören 1: Wetterbericht', [
      ['moderatorin', 'Und nun das Wetter. Heute ist es noch sonnig bei zwanzig Grad. Aber am Wochenende wird es ungemütlich: Am Samstag und Sonntag gibt es viel Regen und starken Wind. Die Temperaturen fallen auf zwölf Grad.'],
    ])),
  x(2, mcq('a2f-h2', 'Wie warm wird es am Wochenende? (Hören 1)', ['20 Grad', '12 Grad', '2 Grad'], 1)),
  x(2, mcq('a2f-h3', 'Was sollen die Fahrgäste machen?', ['in Halle umsteigen', 'in den Bus umsteigen', 'auf den nächsten Zug warten'], 1),
    audio('a2f-h-st2', 'Hören 2: Durchsage', [
      ['moderatorin', 'Liebe Fahrgäste, wegen einer Störung endet dieser Zug heute in Halle. Für die Weiterfahrt nach Magdeburg nehmen Sie bitte den Ersatzbus vor dem Bahnhof. Wir bitten um Entschuldigung.'],
    ])),
  // Teil 2: a longer conversation
  x(2, mcq('a2f-h4', 'Was macht Lukas am Montag?', ['Er geht zum Zahnarzt.', 'Er hat Fußballtraining.', 'Er besucht seine Oma.'], 0),
    audio('a2f-h-st3', 'Hören 3: Die Woche planen', [
      ['elif', 'Lukas, wann hast du diese Woche Zeit für unser Projekt?'],
      ['ben', 'Montag geht nicht, da habe ich einen Termin beim Zahnarzt. Dienstag habe ich Fußballtraining.'],
      ['elif', 'Und Mittwoch?'],
      ['ben', 'Mittwoch besuche ich meine Oma im Krankenhaus. Aber Donnerstag habe ich den ganzen Nachmittag frei.'],
      ['elif', 'Gut, dann treffen wir uns am Donnerstag um drei in der Bibliothek.'],
    ])),
  x(2, mcq('a2f-h5', 'Wann treffen sich die beiden? (Hören 3)', ['Mittwoch um drei', 'Donnerstag um drei', 'Dienstag um drei'], 1)),
  x(2, mcq('a2f-h6', 'Wo treffen sie sich? (Hören 3)', ['im Café', 'in der Bibliothek', 'im Krankenhaus'], 1)),
  // Teil 3: phone messages
  x(2, mcq('a2f-h7', 'Warum ruft die Werkstatt an?', ['Das Auto ist fertig.', 'Die Reparatur dauert länger.', 'Die Rechnung ist falsch.'], 1),
    audio('a2f-h-st4', 'Hören 4: Nachricht auf der Mailbox', [
      ['herrLehmann', 'Guten Tag, Frau Schröder, hier ist die Autowerkstatt Klein. Ihr Auto ist leider noch nicht fertig. Wir warten noch auf ein Teil. Sie können das Auto am Freitag ab vierzehn Uhr abholen. Bei Fragen rufen Sie uns an. Auf Wiederhören.'],
    ])),
  x(2, mcq('a2f-h8', 'Wann kann Frau Schröder das Auto abholen? (Hören 4)', ['Freitag ab 14 Uhr', 'Donnerstag ab 14 Uhr', 'Freitag ab 4 Uhr'], 0)),
];

const lesen = [
  // Teil 1: newspaper article
  x(2, mcq('a2f-l1', 'Was hat Frau Weber gegründet?', ['ein Café', 'eine Repair-Werkstatt für Nachbarn', 'eine Schule'], 1),
    text('a2f-l-st1', '**Reparieren statt wegwerfen**\nJeden Samstag treffen sich im Stadtteilzentrum Leipzig-Ost Menschen, die gern reparieren. Die Idee hatte Anna Weber (45). Vor zwei Jahren hat sie das „Repair-Café“ gegründet. Nachbarn bringen kaputte Toaster, Lampen oder Fahrräder mit. Freiwillige Helfer reparieren sie kostenlos. „Viele Dinge sind gar nicht so kaputt“, sagt Weber. „Man muss nur wissen, wie es geht.“ Wer möchte, kann eine kleine Spende geben.', { kicker: 'Lesen 1' })),
  x(2, mcq('a2f-l2', 'Was kostet eine Reparatur? (Lesen 1)', ['nichts, man kann aber spenden', '10 Euro', 'Das hängt vom Gerät ab.'], 0)),
  x(2, mcq('a2f-l3', 'Wann gibt es das Repair-Café? (Lesen 1)', ['jeden Samstag', 'jeden Sonntag', 'einmal im Monat'], 0)),
  // Teil 2: information board
  x(2, mcq('a2f-l4', 'Sie möchten eine neue Brille. In welchen Stock gehen Sie?', ['EG', '1. Stock', '2. Stock'], 1),
    text('a2f-l-st2', '**Einkaufszentrum Fuchspassage**\nUG: Supermarkt, Drogerie, Getränke\nEG: Bäckerei, Blumen, Apotheke, Information\n1. Stock: Optiker, Schuhe, Handyladen\n2. Stock: Mode für Damen, Herren und Kinder\n3. Stock: Restaurants, Kino', { kicker: 'Lesen 2' })),
  x(2, mcq('a2f-l5', 'Sie haben Hunger und möchten danach einen Film sehen. (Lesen 2)', ['UG', 'EG', '3. Stock'], 2)),
  // Teil 3: e-mail
  x(2, mcq('a2f-l6', 'Warum schreibt Karin?', ['Sie lädt Mia zu ihrer Hochzeit ein.', 'Sie bittet Mia um Hilfe beim Umzug.', 'Sie sagt einen Termin ab.'], 1),
    text('a2f-l-st3', 'Liebe Mia,\nich habe endlich eine neue Wohnung gefunden! Sie ist größer als die alte und hat einen Balkon. Am 15. März ziehe ich um. Könntest du mir helfen? Wir brauchen Leute, die Kisten tragen. Mein Bruder bringt einen Transporter mit. Wir fangen um neun Uhr an. Mittags gibt es Pizza für alle! Bitte sag mir bis Freitag Bescheid.\nLiebe Grüße\nKarin', { kicker: 'Lesen 3' })),
  x(2, mcq('a2f-l7', 'Wer bringt den Transporter mit? (Lesen 3)', ['Mia', 'Karins Bruder', 'Karin'], 1)),
  x(2, mcq('a2f-l8', 'Was soll Mia bis Freitag machen? (Lesen 3)', ['Pizza bestellen', 'Bescheid sagen', 'Kisten kaufen'], 1)),
];

const schreiben = [
  // Teil 1: short message (SMS), built from parts
  x(3, order('a2f-s1', ['Ich', 'komme', 'leider', 'zehn Minuten', 'später.'], { task: 'Sie sind mit einer Freundin im Kino verabredet. Schreiben Sie ihr eine SMS. Bauen Sie den ersten Satz.' })),
  x(3, order('a2f-s2', ['Mein Bus', 'hat', 'Verspätung,', 'weil', 'es', 'stark schneit.'], { task: 'Sagen Sie warum. Bauen Sie den Satz.' })),
  x(3, order('a2f-s3', ['Kannst', 'du', 'schon', 'die Karten', 'kaufen?'], { task: 'Bitten Sie um etwas. Bauen Sie die Frage.' })),
  // Teil 2: formal e-mail
  x(3, mcq('a2f-s4', 'Sie schreiben Ihrer Kursleiterin, Frau Petersen. Welche Anrede passt?', ['Hallo Petersen,', 'Liebe Frau Petersen,', 'Hi Frau Petersen!'], 1)),
  x(4, gap('a2f-s5', ['Leider kann ich morgen nicht zum Kurs kommen, {{weil}} ich krank bin.', 'Ich {{hätte}} eine Bitte: Könnten Sie mir die Hausaufgaben schicken?', 'Ich {{würde}} mich sehr freuen.', 'Mit {{freundlichen}} Grüßen'], { bank: ['weil', 'hätte', 'würde', 'freundlichen'], task: 'Ergänzen Sie die E-Mail an Frau Petersen.' })),
  x(2, mcq('a2f-s6', 'Welcher Satz ist am höflichsten?', ['Schicken Sie mir die Aufgaben!', 'Könnten Sie mir bitte die Aufgaben schicken?', 'Ich will die Aufgaben.'], 1)),
];

const sprechen = [
  // Teil 1: ask and answer questions
  x(2, mcq('a2f-sp1', 'Kärtchen: „Wohnen?“ Welche Frage passt?', ['Wo wohnst du?', 'Wann wohnst du?', 'Was wohnst du?'], 0, { task: 'Stellen Sie eine Frage zum Kärtchen.' })),
  x(2, mcq('a2f-sp2', 'Ihr Partner fragt: „Was machst du gern in deiner Freizeit?“', ['Ich gehe gern klettern.', 'Ich bin Lehrerin.', 'Ich wohne in Leipzig.'], 0)),
  // Teil 2: talk about yourself
  x(2, order('a2f-sp3', ['Am Wochenende', 'treffe', 'ich', 'meistens', 'Freunde.'], { task: 'Thema „Mein Wochenende“. Bauen Sie den Satz.' })),
  x(2, order('a2f-sp4', ['Letzten Samstag', 'bin', 'ich', 'ins Konzert', 'gegangen.'], { task: 'Erzählen Sie, was Sie letztes Wochenende gemacht haben.' })),
  x(2, mcq('a2f-sp5', 'Sie möchten Ihre Meinung sagen. Was passt?', ['Ich finde, dass das Wochenende zu kurz ist.', 'Ich finde, dass das Wochenende ist zu kurz.', 'Ich finde, das Wochenende zu kurz ist.'], 0)),
  // Teil 3: plan something together
  x(2, mcq('a2f-sp6', 'Sie planen mit Ihrem Partner ein Geschenk für eine Kollegin. Wie machen Sie einen Vorschlag?', ['Wie wäre es mit einem Buch?', 'Ein Buch ist ein Geschenk.', 'Ich habe ein Buch gelesen.'], 0)),
  x(2, mcq('a2f-sp7', 'Ihr Partner sagt: „Wir könnten am Montag einkaufen gehen.“ Sie können am Montag nicht.', ['Montag passt mir leider nicht. Wie wäre es mit Dienstag?', 'Montag ist ein Tag.', 'Ja, am Montag regnet es.'], 0)),
  x(2, mcq('a2f-sp8', 'Sie sind einverstanden. Was sagen Sie?', ['Gute Idee, so machen wir es!', 'Das sehe ich anders.', 'Wie bitte?'], 0)),
];

export const finalA2: FinalExam = { lesen, hoeren, schreiben, sprechen };
