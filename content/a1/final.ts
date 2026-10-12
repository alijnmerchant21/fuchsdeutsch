import type { FinalExam } from '../types';
import { audio, gap, mcq, order, text, x } from '../helpers';

// A1 final exam, modeled on the four parts of Start Deutsch 1. Everything is auto-checked.
// Audio ids start with "a1f-" so they are unique across the site.

const hoeren = [
  // Teil 1: short everyday dialogues
  x(2, mcq('a1f-h1', 'Wann beginnt der Film?', ['um 19:30', 'um 20:00', 'um 20:30'], 2),
    audio('a1f-h-st1', 'Hören 1: Im Kino', [
      ['jule', 'Zwei Karten für den Film „Sommerwind“, bitte.'],
      ['ben', 'Um acht oder um halb neun?'],
      ['jule', 'Um acht ist es zu früh. Um halb neun, bitte.'],
      ['ben', 'Gern. Das macht achtzehn Euro.'],
    ])),
  x(2, mcq('a1f-h2', 'Was kosten die Karten zusammen? (Hören 1)', ['8 €', '18 €', '80 €'], 1)),
  x(2, mcq('a1f-h3', 'Was möchte der Mann kaufen?', ['Brot', 'Brötchen und Milch', 'Kuchen'], 1),
    audio('a1f-h-st2', 'Hören 2: Im Supermarkt', [
      ['tomasz', 'Entschuldigung, wo finde ich die Milch?'],
      ['priya', 'Die Milch ist da hinten, links neben dem Käse.'],
      ['tomasz', 'Danke. Und haben Sie auch frische Brötchen?'],
      ['priya', 'Ja, die Bäckerei ist gleich am Eingang.'],
    ])),
  x(2, mcq('a1f-h4', 'Wo ist die Milch? (Hören 2)', ['am Eingang', 'neben dem Käse', 'in der Bäckerei'], 1)),
  // Teil 2: announcements
  x(2, mcq('a1f-h5', 'Auf welchem Gleis fährt der Zug nach München ab?', ['Gleis 4', 'Gleis 7', 'Gleis 14'], 1),
    audio('a1f-h-st3', 'Hören 3: Am Bahnhof', [
      ['moderatorin', 'Achtung an Gleis vier. Der ICE nach München fährt heute nicht von Gleis vier, sondern von Gleis sieben. Abfahrt zehn Uhr zwölf. Bitte beachten Sie die Gleisänderung.'],
    ])),
  x(2, mcq('a1f-h6', 'Wann fährt der Zug ab? (Hören 3)', ['10:12', '10:20', '12:10'], 0)),
  // Teil 3: messages on the phone
  x(2, mcq('a1f-h7', 'Warum ruft Frau Novak an?', ['Sie kommt später.', 'Sie kann nicht kommen.', 'Sie hat Geburtstag.'], 1),
    audio('a1f-h-st4', 'Hören 4: Nachricht auf dem Anrufbeantworter', [
      ['frauBaumann', 'Grüezi Herr Brandt, hier ist Eva Novak. Leider kann ich morgen nicht zum Deutschkurs kommen. Mein Sohn ist krank. Können Sie mir bitte die Hausaufgaben per E-Mail schicken? Vielen Dank und auf Wiederhören.'],
    ])),
  x(2, mcq('a1f-h8', 'Was soll Herr Brandt machen? (Hören 4)', ['anrufen', 'die Hausaufgaben schicken', 'zum Arzt gehen'], 1)),
];

const lesen = [
  // Teil 1: a short private message
  x(2, mcq('a1f-l1', 'Was macht Sophie am Samstag?', ['Sie arbeitet.', 'Sie zieht um.', 'Sie fährt in Urlaub.'], 1),
    text('a1f-l-st1', 'Liebe Mia,\n\nam Samstag ziehe ich in meine neue Wohnung! Kannst du mir helfen? Ich brauche Hilfe mit den Möbeln. Wir fangen um 9 Uhr an. Mittags koche ich für alle Spaghetti. Die neue Adresse ist Gartenstraße 12, im 2. Stock. Ruf mich bitte bis Donnerstag an.\n\nLiebe Grüße\nSophie', { kicker: 'Lesen 1' })),
  x(2, mcq('a1f-l2', 'Wann soll Mia anrufen? (Lesen 1)', ['bis Donnerstag', 'am Samstag', 'um 9 Uhr'], 0)),
  x(2, mcq('a1f-l3', 'Was gibt es mittags? (Lesen 1)', ['Pizza', 'Spaghetti', 'nichts'], 1)),
  // Teil 2: ads and signs
  x(2, mcq('a1f-l4', 'Sie möchten am Sonntag schwimmen. Geht das?', ['Ja, von 8 bis 20 Uhr.', 'Ja, von 10 bis 18 Uhr.', 'Nein, am Sonntag ist geschlossen.'], 1),
    text('a1f-l-st2', '**Hallenbad Nord**\nMontag: geschlossen\nDienstag bis Freitag: 8 bis 20 Uhr\nSamstag und Sonntag: 10 bis 18 Uhr\nErwachsene 5 €, Kinder bis 14 Jahre 2,50 €', { kicker: 'Lesen 2' })),
  x(2, mcq('a1f-l5', 'Was bezahlt ein Kind mit 10 Jahren? (Lesen 2)', ['nichts', '2,50 €', '5 €'], 1)),
  x(2, mcq('a1f-l6', 'Was bedeutet das Schild?', ['Hier darf man nicht rauchen.', 'Hier kann man Zigaretten kaufen.', 'Hier muss man warten.'], 0),
    text('a1f-l-st3', '**Rauchen verboten!**\nBitte nur im Hof rauchen.', { kicker: 'Lesen 3' })),
  x(2, mcq('a1f-l7', 'Sie suchen einen Deutschkurs am Abend. Welcher passt?', ['Kurs A', 'Kurs B', 'Kurs C'], 2),
    text('a1f-l-st4', '**Volkshochschule: Deutschkurse A1**\nKurs A: Montag bis Freitag, 9 bis 12 Uhr\nKurs B: Samstag, 10 bis 15 Uhr\nKurs C: Dienstag und Donnerstag, 18 bis 20:30 Uhr\nAnmeldung im Büro, Raum 104', { kicker: 'Lesen 4' })),
  x(2, mcq('a1f-l8', 'Wo meldet man sich an? (Lesen 4)', ['online', 'im Raum 104', 'im Kurs'], 1)),
];

const schreiben = [
  // Teil 1: fill in a form (based on information given)
  x(5, gap('a1f-s1', ['Vorname: {{Carlos}}', 'Familienname: {{Mendes}}', 'Herkunftsland: {{Portugal}}', 'Wohnort: {{Bremen}}', 'Alter: {{29}}'], { task: 'Ihr Freund Carlos Mendes möchte einen Deutschkurs machen. Er ist 29 Jahre alt und kommt aus Portugal. Er wohnt seit einem Jahr in Bremen. Füllen Sie das Formular für ihn aus.' })),
  x(3, mcq('a1f-s2', 'Welche Anrede passt in eine E-Mail an Ihren Vermieter, Herrn Weber?', ['Hallo Weber,', 'Sehr geehrter Herr Weber,', 'Lieber Weber,'], 1)),
  // Teil 2: build a short message
  x(3, order('a1f-s3', ['Leider', 'kann', 'ich', 'am Montag', 'nicht', 'kommen.'], { task: 'Sie schreiben Ihrer Lehrerin. Bauen Sie den Satz.' })),
  x(3, order('a1f-s4', ['Ich', 'habe', 'einen Termin', 'beim Arzt.'], { task: 'Sagen Sie warum. Bauen Sie den Satz.' })),
  x(3, order('a1f-s5', ['Können', 'Sie', 'mir', 'die Hausaufgaben', 'schicken?'], { task: 'Bitten Sie um die Hausaufgaben. Bauen Sie die Frage.' })),
  x(3, mcq('a1f-s6', 'Wie beenden Sie die E-Mail an die Lehrerin?', ['Tschüssi!', 'Viele Grüße', 'Bis gleich, Süße!'], 1)),
];

const sprechen = [
  // Teil 1: introduce yourself
  x(2, mcq('a1f-sp1', 'Der Prüfer fragt: „Woher kommen Sie?“', ['Ich wohne in Köln.', 'Ich komme aus Brasilien.', 'Ich bin Lehrerin.'], 1, { task: 'Was antworten Sie?' })),
  x(2, mcq('a1f-sp2', 'Der Prüfer fragt: „Welche Sprachen sprechen Sie?“', ['Englisch und Portugiesisch.', 'Ich spreche gut.', 'In Brasilien.'], 0)),
  x(2, order('a1f-sp3', ['Ich', 'heiße', 'Ana', 'und', 'ich', 'bin', '32', 'Jahre alt.'], { task: 'Stellen Sie sich vor. Bauen Sie den Satz.' })),
  // Teil 2: ask and answer questions on a topic (Thema: Essen)
  x(2, mcq('a1f-sp4', 'Thema „Essen“, Kärtchen „Frühstück“. Welche Frage passt?', ['Was isst du zum Frühstück?', 'Wo wohnst du?', 'Wie spät ist es?'], 0)),
  x(2, mcq('a1f-sp5', 'Ihre Partnerin fragt: „Was trinkst du gern?“', ['Ich trinke gern Tee.', 'Ich esse gern Brot.', 'Ja, gern.'], 0)),
  // Teil 3: requests and reactions
  x(2, mcq('a1f-sp6', 'Kärtchen: 🪟 (Fenster). Sie möchten, dass Ihr Partner das Fenster aufmacht.', ['Mach bitte das Fenster auf!', 'Das Fenster ist schön.', 'Wo ist das Fenster?'], 0)),
  x(2, mcq('a1f-sp7', 'Ihr Partner sagt: „Kannst du mir bitte einen Stift geben?“', ['Ja, hier bitte.', 'Nein, ich heiße Max.', 'Gute Besserung!'], 0)),
  x(2, mcq('a1f-sp8', 'Kärtchen: ☕. Sie sind im Café und möchten einen Kaffee.', ['Ich hätte gern einen Kaffee, bitte.', 'Kaffee ist teuer.', 'Ich habe Kaffee getrunken.'], 0)),
];

export const finalA1: FinalExam = { lesen, hoeren, schreiben, sprechen };
