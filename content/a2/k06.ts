import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A2 Kapitel 6: Berufe und Tätigkeiten, Bahnreisen, Traumberufe, telefonieren am Arbeitsplatz.
// Grammar: Adjektive nach dem unbestimmten Artikel, das Verb werden. Aussprache: m oder n.

export const glossaryA2k6: Record<string, GlossaryEntry> = {
  Tätigkeit: { de: 'Etwas, das man bei der Arbeit macht.', en: 'activity, task' },
  Traumberuf: { de: 'Der Beruf, den man am liebsten hätte.', en: 'dream job' },
  Fahrkartenschalter: { de: 'Hier kauft man am Bahnhof eine Fahrkarte bei einer Person.', en: 'ticket counter' },
  umsteigen: { de: 'Aus einem Zug aussteigen und in einen anderen einsteigen.', en: 'to change (trains)' },
  Verbindung: { de: 'Ein Zug oder Bus von A nach B, mit Zeit und Umstiegen.', en: 'connection' },
  Gleis: { de: 'Hier hält der Zug im Bahnhof.', en: 'platform, track' },
  Ermäßigung: { de: 'Ein billigerer Preis, zum Beispiel für Studenten.', en: 'discount' },
  Gastkoch: { de: 'Ein Koch, der für kurze Zeit in einem anderen Restaurant arbeitet.', en: 'guest chef' },
  werden: { de: 'Sich verändern. „Ich werde Ärztin.“ „Es wird kalt.“', en: 'to become' },
  Homeoffice: { de: 'Von zu Hause aus arbeiten.', en: 'working from home' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Wer macht was?', 'butter', 8,
  ['das Kapitel kennenlernen', 'Berufe und Tätigkeiten'], [
    overview('e-over', 'Kapitel 6: Arbeitswelten',
      'In Kapitel 6 geht es um die Arbeit. Welche [[Tätigkeit|Tätigkeiten]] gehören zu welchem Beruf? Was ist dein [[Traumberuf]]? Du kaufst eine Fahrkarte am [[Fahrkartenschalter]], fragst nach einer [[Verbindung]] und lernst, wie man am Telefon professionell spricht.\n\nKenji hat sich entschieden: Er geht für drei Monate als [[Gastkoch]] nach Wien. Aber zuerst braucht er eine Fahrkarte.',
      'This chapter is about the world of work: jobs and tasks, dream jobs, buying a train ticket and phone calls at work. Grammar: adjective endings after the indefinite article (ein neuer Job, eine nette Kollegin) and the verb werden (to become).',
      ['Tätigkeiten im Beruf beschreiben', 'eine Fahrkarte kaufen', 'über Traumberufe sprechen', 'am Telefon professionell sprechen']),
    match('e-match', [['die Pflegerin', 'versorgt Patienten'], ['der Koch', 'bereitet Essen zu'], ['die Programmiererin', 'schreibt Software'], ['der Musiker', 'gibt Konzerte'], ['die Lehrerin', 'unterrichtet Kinder'], ['der Mechatroniker', 'repariert Autos']],
      { task: 'Wer macht was?', taskEn: 'Match the job to the task.' }),
    sort('e-sort', ['im Büro', 'draußen oder unterwegs'], [['E-Mails beantworten', 0], ['Pakete ausliefern', 1], ['an Besprechungen teilnehmen', 0], ['Bäume pflanzen', 1], ['Termine planen', 0], ['Kunden besuchen', 1]], { task: 'Wo macht man das?', taskEn: 'Where is this task usually done?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Eine Fahrkarte nach Wien', 'mint', 15,
  ['ein Gespräch am Fahrkartenschalter führen', 'Verbindungen verstehen'], [
    audio('t1-audio', 'Hören: Am Fahrkartenschalter', [
      ['urs', 'Guten Tag, was darf es sein?'],
      ['kenji', 'Guten Tag. Ich möchte am Sonntag nach Wien fahren. Gibt es eine direkte Verbindung?'],
      ['urs', 'Moment … Nein, Sie müssen einmal umsteigen, in Nürnberg. Abfahrt in Leipzig um 8:15 Uhr, Ankunft in Wien um 15:40 Uhr.'],
      ['kenji', 'Und wie viel kostet die Fahrkarte?'],
      ['urs', 'Eine einfache Fahrt kostet neunundsechzig Euro. Hin und zurück hundertzwanzig Euro.'],
      ['kenji', 'Nur einfach, bitte. Ich bleibe drei Monate. Gibt es eine Ermäßigung?'],
      ['urs', 'Haben Sie eine Bahncard?'],
      ['kenji', 'Nein, leider nicht.'],
      ['urs', 'Dann bleibt es bei neunundsechzig Euro. Möchten Sie einen Sitzplatz reservieren? Das kostet fünf Euro extra.'],
      ['kenji', 'Ja, gern. Am Fenster, bitte. Ich habe einen großen Koffer.'],
      ['urs', 'Gut. Ihr Zug fährt von Gleis 12 ab. Gute Reise!'],
    ], { task: 'Hör zu. Was kauft Kenji?', taskEn: 'Listen. What ticket does Kenji buy? einfache Fahrt = one way.' }),
    mcq('t1-q1', 'Wo muss Kenji umsteigen?', ['in München', 'in Nürnberg', 'in Prag'], 1),
    mcq('t1-q2', 'Wann kommt er in Wien an?', ['um 8:15 Uhr', 'um 15:40 Uhr', 'um 12 Uhr'], 1),
    mcq('t1-q3', 'Was bezahlt Kenji insgesamt?', ['69 €', '74 €', '120 €'], 1, { why: '69 € für die Fahrt plus 5 € für die Reservierung.' }),
    phrases('t1-phr', 'Am Fahrkartenschalter', {
      'Fragen': ['Gibt es eine direkte Verbindung?', 'Wo muss ich umsteigen?', 'Von welchem Gleis fährt der Zug?'],
      'Fahrkarte': ['Einfach oder hin und zurück?', 'Ich möchte einen Platz reservieren.', 'Gibt es eine Ermäßigung für Studenten?'],
    }),
    match('t1-match', [['die Abfahrt', 'der Zug fährt los'], ['die Ankunft', 'der Zug kommt an'], ['umsteigen', 'den Zug wechseln'], ['die Verspätung', 'der Zug ist zu spät'], ['das Gleis', 'hier hält der Zug']], { task: 'Was bedeutet das?', taskEn: 'Match the train words to their meaning.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Mein Traumberuf', 'sky', 15,
  ['über Berufswünsche sprechen', 'Adjektive nach dem unbestimmten Artikel', 'werden'], [
    text('t2-text', `**Was wolltest du als Kind werden, und was machst du heute?**

**Amara:** Als Kind wollte ich Ärztin werden. Heute bin ich Pflegerin und sehr zufrieden. Ich habe einen sicheren Job, nette Kolleginnen und eine wichtige Aufgabe. Nächstes Jahr werde ich Stationsleiterin!

**Felix:** Ich wollte immer ein berühmter Rockstar werden. Heute bin ich Musiker und Gitarrenlehrer. Ein Rockstar bin ich nicht, aber ich habe einen kreativen Beruf und flexible Arbeitszeiten.

**Nele:** Astronautin! Leider bin ich keine gute Physikerin. Heute bin ich Programmiererin in einer kleinen Firma. Ich arbeite oft im Homeoffice. Mein Traum: Ich gründe eine eigene Firma.`,
      { kicker: 'Lesen', title: 'Kindheitsträume', task: 'Lies die Texte.', taskEn: 'Read about childhood dreams and today’s jobs. Stationsleiterin = head nurse of a ward.' }),
    match('t2-match', [['Amara', 'wollte Ärztin werden'], ['Felix', 'wollte ein Rockstar werden'], ['Nele', 'wollte Astronautin werden']], { task: 'Wer wollte was werden?', taskEn: 'Who wanted to be what?' }),
    mcq('t2-q1', 'Was wird Amara nächstes Jahr?', ['Ärztin', 'Stationsleiterin', 'Lehrerin'], 1),
    mcq('t2-q2', 'Was ist Neles Traum heute?', ['eine eigene Firma', 'Astronautin werden', 'mehr Homeoffice'], 0),
    grammar('t2-gram', 'Adjektive nach dem unbestimmten Artikel', {
      intro: 'Nach **ein, kein, mein, dein …** zeigt das Adjektiv das Genus, wenn der Artikel es nicht zeigt.',
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural (kein, mein …)'],
      rows: [['Nominativ', 'ein sicher**er** Job', 'ein kreativ**es** Projekt', 'eine wichtig**e** Aufgabe', 'keine nett**en** Kollegen'], ['Akkusativ', 'einen sicher**en** Job', 'ein kreativ**es** Projekt', 'eine wichtig**e** Aufgabe', 'keine nett**en** Kollegen'], ['Dativ', 'einem sicher**en** Job', 'einem kreativ**en** Projekt', 'einer wichtig**en** Aufgabe', 'keinen nett**en** Kollegen']],
      notes: ['Achtung bei **ein** ohne Endung: Das Adjektiv übernimmt die Endung vom bestimmten Artikel: d**er** → ein sicher**er**, da**s** → ein kreativ**es**.', 'Sonst wie nach der/das/die: -e oder -en.'],
      en: 'After ein, kein, mein: where the article has no ending (ein in masculine nominative, ein in neuter nominative and accusative), the adjective shows the gender: ein guter Job, ein gutes Projekt. Otherwise -e or -en as after der.',
    }),
    gap('t2-gap', ['Ich habe einen {{sicheren}} Job. (sicher)', 'Felix hat ein {{kreatives}} Hobby. (kreativ)', 'Das ist eine {{wichtige}} Aufgabe. (wichtig)', 'Er ist ein {{berühmter}} Musiker. (berühmt)', 'Nele arbeitet in einer {{kleinen}} Firma. (klein)'],
      { task: 'Ergänze die Adjektivendung.', taskEn: 'Fill in the adjective with the right ending.' }),
    grammar('t2-werden', 'Das Verb werden', {
      head: ['', 'werden'],
      rows: [['ich', 'werde'], ['du', 'w**i**rst'], ['er/sie/es', 'w**i**rd'], ['wir', 'werden'], ['ihr', 'werdet'], ['sie/Sie', 'werden']],
      notes: ['werden + Nomen: *Ich **werde** Stationsleiterin.* (ohne Artikel bei Berufen)', 'werden + Adjektiv: *Es **wird** kalt. Er **wird** müde.*', 'Perfekt: *Sie **ist** Ärztin **geworden**.*'],
      en: 'werden = to become. du wirst, er wird. With jobs, no article: Ich werde Lehrer. Perfekt with sein: ist geworden.',
    }),
    gap('t2-gap2', ['Was {{willst}} du werden? (wollen)', 'Im Herbst {{wird}} es früh dunkel. (werden)', 'Du {{wirst}} bestimmt eine gute Chefin. (werden)', 'Felix ist kein Rockstar {{geworden}}. (werden, Partizip)'],
      { task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Am Telefon', 'lilac', 15,
  ['ein Telefongespräch vorbereiten', 'professionell telefonieren', 'Informationen weitergeben'], [
    audio('t3-audio', 'Hören: Ein Anruf in der Firma', [
      ['priya', 'AppFuchs GmbH, Sie sprechen mit Priya Sharma. Was kann ich für Sie tun?'],
      ['herrAdler', 'Guten Tag, mein Name ist Adler von der Firma Nordlicht. Könnte ich bitte mit Frau Wagner sprechen?'],
      ['priya', 'Frau Wagner ist leider gerade in einer Besprechung. Kann ich ihr etwas ausrichten?'],
      ['herrAdler', 'Ja, bitte. Es geht um die neue App für unser Hotel. Wir möchten den Termin am Donnerstag auf Freitag verschieben.'],
      ['priya', 'Freitag, alles klar. Um welche Uhrzeit?'],
      ['herrAdler', 'Am besten um zehn Uhr. Sie kann mich unter null vier null, fünf fünf eins zwei drei vier zurückrufen.'],
      ['priya', 'Ich wiederhole: Herr Adler, Firma Nordlicht, Termin Freitag um zehn, Rückruf unter 040 551234. Richtig?'],
      ['herrAdler', 'Genau. Vielen Dank! Auf Wiederhören.'],
    ], { task: 'Hör zu. Was soll Priya ausrichten?', taskEn: 'Listen. What message should Priya pass on? etwas ausrichten = to pass on a message.' }),
    mcq('t3-q1', 'Warum kann Frau Wagner nicht sprechen?', ['Sie ist krank.', 'Sie ist in einer Besprechung.', 'Sie ist im Urlaub.'], 1),
    mcq('t3-q2', 'Was möchte Herr Adler?', ['den Termin verschieben', 'den Termin absagen', 'eine neue App kaufen'], 0),
    mcq('t3-q3', 'Wann ist der neue Termin?', ['Donnerstag um 10', 'Freitag um 10', 'Freitag um 12'], 1),
    text('t3-notiz', '**Telefonnotiz für Nele Wagner**\nAnrufer: Herr Adler, Firma Nordlicht\nThema: neue Hotel-App\nBitte: Termin von Donnerstag auf **Freitag, 10 Uhr** verschieben\nRückruf: 040 551234\nPriya, 11:20 Uhr', { kicker: 'Lesen', title: 'Eine Telefonnotiz', task: 'So sieht Priyas Notiz aus.', taskEn: 'This is Priya’s phone note for Nele.' }),
    phrases('t3-phr', 'Telefonieren am Arbeitsplatz', {
      'Sich melden': ['Firma …, Sie sprechen mit …', 'Was kann ich für Sie tun?'],
      'Verbinden': ['Könnte ich bitte mit … sprechen?', 'Einen Moment, ich verbinde.', 'Frau … ist leider nicht da.'],
      'Nachricht': ['Kann ich etwas ausrichten?', 'Könnte sie mich zurückrufen?', 'Ich wiederhole: …'],
    }),
    tip('t3-tip', 'Auf Deutsch telefonieren', 'Telefonieren ist schwer, weil man das Gesicht nicht sieht. **Bereite dich vor**: Schreib vorher die wichtigsten Sätze auf. **Wiederhole** Zahlen und Namen. Und frag ruhig: *Könnten Sie das bitte buchstabieren?*'),
    compose('t3-comp', 'Du rufst bei einer Firma an.', [
      ['Melde dich mit Namen.', 'Introduce yourself.', ['Guten Tag,', 'mein Name', 'ist', 'Sofia Ruiz.']],
      ['Frag nach Herrn Klein.', 'Ask to speak with Mr. Klein.', ['Könnte', 'ich bitte', 'mit Herrn Klein', 'sprechen?']],
      ['Bitte um einen Rückruf.', 'Ask for a callback.', ['Könnte', 'er mich', 'bitte', 'zurückrufen?']],
    ], { task: 'Bau das Gespräch.', taskEn: 'Build the phone call.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 6: Abschied am Bahnhof', 'rose', 10,
  ['eine Geschichte hören', 'werden im Kontext'], [
    text('wg-intro', 'Sonntagmorgen, Leipzig Hauptbahnhof, Gleis 12. Kenji fährt nach Wien. Die ganze WG ist da.', { kicker: 'Die Geschichte', en: 'Sunday morning, Leipzig main station, platform 12. Kenji is leaving for Vienna. The whole flat share is there.' }),
    audio('wg-audio', 'Folge 6: Abschied am Bahnhof', [
      ['nele', 'Hast du alles? Fahrkarte, Pass, Messer?'],
      ['kenji', 'Ja, alles. Die Messer sind im Koffer. Ich bin so nervös.'],
      ['amara', 'Du wirst ein toller Gastkoch. Die Wiener werden dich lieben.'],
      ['felix', 'Und vergiss nicht: Ein echter Wiener sagt nie „Tschüss“, sondern „Servus“ oder „Baba“.'],
      ['erzaehler', 'Durchsage: Der ICE nach Nürnberg, Abfahrt 8 Uhr 15, hat heute zehn Minuten Verspätung.'],
      ['kenji', 'Zehn Minuten mehr mit euch. Gut so.'],
      ['nele', 'Wir haben etwas für dich. Ein Foto von uns vieren. Für deine Küche in Wien.'],
      ['kenji', 'Oh … danke. Ich werde euch vermissen. Drei Monate sind lang.'],
      ['amara', 'Und dann kommst du zurück. Dein Zimmer bleibt frei.'],
      ['felix', 'Na ja, vielleicht stelle ich mein Schlagzeug rein …'],
      ['kenji', 'Felix! Das ist mein Zimmer!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story. vermissen = to miss (someone).' }),
    mcq('wg-q1', 'Wie fühlt sich Kenji?', ['entspannt', 'nervös', 'wütend'], 1),
    mcq('wg-q2', 'Was hat der Zug?', ['zehn Minuten Verspätung', 'ein anderes Gleis', 'keine Plätze mehr'], 0),
    mcq('wg-q3', 'Was schenken die anderen Kenji?', ['ein Messer', 'ein Foto', 'ein Kochbuch'], 1),
    mcq('wg-q4', 'Wie lange bleibt Kenji in Wien?', ['drei Wochen', 'drei Monate', 'ein Jahr'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Adjektivendungen', 'werden'], [
    grammar('g-1', 'Adjektivendungen: bestimmter und unbestimmter Artikel', {
      head: ['', 'der …', 'ein …'],
      rows: [['Nom. maskulin', 'der neu**e** Job', 'ein neu**er** Job'], ['Nom./Akk. neutral', 'das neu**e** Projekt', 'ein neu**es** Projekt'], ['Nom./Akk. feminin', 'die neu**e** Stelle', 'eine neu**e** Stelle'], ['Akk. maskulin', 'den neu**en** Job', 'einen neu**en** Job'], ['Dativ', 'dem / der neu**en** …', 'einem / einer neu**en** …']],
      en: 'The only differences: ein neuer Job and ein neues Projekt. All other endings are the same.',
    }),
    mcq('g-q1', 'Das ist ein ___ Film.', ['spannende', 'spannender', 'spannenden'], 1),
    mcq('g-q2', 'Ich suche eine ___ Wohnung.', ['günstige', 'günstigen', 'günstiges'], 0),
    mcq('g-q3', 'Sie hat ein ___ Auto.', ['neue', 'neues', 'neuen'], 1),
    mcq('g-q4', 'Er ___ nächstes Jahr 30.', ['wird', 'werdet', 'wirst'], 0),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['über Arbeit sprechen', 'Aussprache: m oder n'], [
    compose('u-comp', 'Beschreib deinen Job oder deinen Traumjob.', [
      ['Was bist du / willst du werden?', 'What are you or want to become?', ['Ich', 'möchte', 'Grafikerin', 'werden.']],
      ['Was für ein Job ist das?', 'What kind of job is it?', ['Das', 'ist', 'ein kreativer', 'Beruf.']],
      ['Was macht man da?', 'What does one do?', ['Man', 'gestaltet', 'Plakate', 'und Webseiten.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences.' }),
    audio('u-aus', 'Aussprache: m oder n', [
      ['frauKlein', 'Bei m sind die Lippen geschlossen: Mann, Montag, kommen, warum.'],
      ['frauKlein', 'Bei n ist die Zunge oben hinter den Zähnen: nein, Name, kennen, schön.'],
      ['frauKlein', 'Achtung im Dativ! Mit dem Chef, mit den Chefs. Mit einem Kollegen, mit einen? Nein: mit einem!'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. m and n matter a lot in endings: dem / den, einem / einen.' }),
    sort('u-sort', ['m am Ende', 'n am Ende'], [['dem (Dativ)', 0], ['den (Akkusativ)', 1], ['einem (Dativ)', 0], ['einen (Akkusativ)', 1], ['meinem (Dativ)', 0], ['meinen (Akkusativ)', 1]], { task: 'Welche Form?', taskEn: 'Sort the article forms.' }),
    gap('u-gap', ['Ich spreche mit {{dem}} Chef. (Dativ)', 'Ich kenne {{den}} Chef. (Akkusativ)', 'Sie arbeitet mit {{einem}} Kollegen. (Dativ)', 'Wir suchen {{einen}} Koch. (Akkusativ)'], { bank: ['dem', 'den', 'einem', 'einen'], task: 'm oder n?', taskEn: 'Fill in the article.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['die Tätigkeit', 'was man bei der Arbeit macht', 'task'], ['der Traumberuf', 'der beste Beruf für mich', 'dream job'], ['werden', 'sich verändern', 'to become'],
      ['die Fahrkarte', 'Ticket für den Zug', 'ticket'], ['umsteigen', 'den Zug wechseln', 'to change trains'], ['die Abfahrt', 'der Zug fährt los', 'departure'],
      ['die Ankunft', 'der Zug kommt an', 'arrival'], ['einfach / hin und zurück', 'eine Richtung / beide', 'one way / return'], ['die Ermäßigung', 'billigerer Preis', 'discount'],
      ['ausrichten', 'eine Nachricht weitergeben', 'to pass on (a message)'], ['zurückrufen', 'noch einmal anrufen', 'to call back'], ['verschieben', 'auf eine andere Zeit legen', 'to postpone'],
    ]),
    checklist('w-check', ['Ich kann Tätigkeiten in Berufen beschreiben.', 'Ich kann eine Fahrkarte kaufen.', 'Ich kann über meinen Traumberuf sprechen.', 'Ich kann am Telefon eine Nachricht aufnehmen.', 'Ich kenne die Adjektivendungen nach ein, kein, mein.']),
  ]);

export const a2k6: Chapter = {
  id: 'a2-k6', number: 6, title: 'Arbeitswelten', theme: 'Berufe, Bahnreisen, Traumberufe, Telefon',
  grammar: 'Adjektive nach dem unbestimmten Artikel. werden.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a2k6-sprint', 'a2k6-memory', 'a2k6-satzbau', 'a2k6-artikel'],
  exam: [
    x(1, mcq('x1', 'Sie hat einen ___ Job.', ['interessante', 'interessanten', 'interessanter'], 1)),
    x(1, mcq('x2', 'Das ist ein ___ Buch.', ['gutes', 'gute', 'guten'], 0)),
    x(1, mcq('x3', 'Was ___ du später werden?', ['willst', 'wirst', 'werdest'], 0)),
    x(4, gap('x4', ['Er ist ein {{netter}} Kollege. (nett)', 'Ich habe ein {{großes}} Büro. (groß)', 'Wir arbeiten in einer {{modernen}} Firma. (modern)', 'Sie sucht einen {{neuen}} Job. (neu)'], { task: 'Adjektivendungen.' })),
    x(2, gap('x5', ['Es {{wird}} dunkel. (werden)', 'Du {{wirst}} eine gute Ärztin. (werden)'], { task: 'werden.' })),
    x(1, mcq('x6', 'Von welchem Gleis fährt der Zug nach Hamburg?', ['Gleis 3', 'Gleis 8', 'Gleis 13'], 1),
      audio('x-st1', 'Hören: Eine Durchsage', [
        ['moderatorin', 'Achtung, eine Gleisänderung: Der Intercity nach Hamburg, planmäßige Abfahrt 14 Uhr 32, fährt heute nicht von Gleis 3, sondern von Gleis 8. Der Zug hat etwa fünfzehn Minuten Verspätung.'],
      ])),
    x(1, mcq('x7', 'Wie viel Verspätung hat der Zug? (Hörtext oben)', ['5 Minuten', '15 Minuten', '50 Minuten'], 1)),
    x(1, mcq('x8', 'Was bietet die Firma?', ['einen Firmenwagen', 'zwei Tage Homeoffice pro Woche', 'kostenloses Mittagessen'], 1),
      text('x-st2', '**Wir suchen: Kauffrau / Kaufmann für Büromanagement (m/w/d)**\nIhre Aufgaben: Termine planen, E-Mails und Telefon, Rechnungen schreiben.\nWir bieten: einen sicheren Arbeitsplatz, ein junges Team, flexible Arbeitszeiten und zwei Tage Homeoffice pro Woche.\nBewerbung bis 30. Juni an jobs@nordlicht.de', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was gehört zu den Aufgaben? (Text oben)', ['Rechnungen schreiben', 'Autos reparieren', 'Kunden besuchen'], 0)),
    x(2, order('x10', ['Könnte', 'ich bitte', 'mit Frau Wagner', 'sprechen?'], { task: 'Bau die Frage.' })),
    x(1, mcq('x11', 'Du willst nicht direkt fahren, sondern wechselst den Zug. Du musst …', ['umsteigen', 'aussteigen', 'einsteigen'], 0)),
    x(1, mcq('x12', 'Die Person ist nicht da. Was fragst du am Telefon?', ['Kann ich etwas ausrichten?', 'Wann fährt der Zug?', 'Was kostet das?'], 0)),
  ],
};

export const gamesA2k6: GameDef[] = [
  {
    id: 'a2k6-sprint', engine: 'sprint', title: 'ein-Endungs-Sprint', blurb: 'ein guter, ein gutes, eine gute? Schnell!', skill: 'Adjektivendungen', tone: 'mint', chapter: 6, emoji: '⚡',
    rules: 'Du siehst einen unbestimmten Artikel, ein Adjektiv und ein Nomen. Tippe auf die richtige Form.', label: 'Welche Endung?',
    items: [
      { q: 'ein ___ Job (gut)', a: 'guter', wrong: ['gute', 'guten'] }, { q: 'ein ___ Projekt (neu)', a: 'neues', wrong: ['neue', 'neuer'] },
      { q: 'eine ___ Aufgabe (wichtig)', a: 'wichtige', wrong: ['wichtigen', 'wichtiger'] }, { q: 'einen ___ Kollegen (nett)', a: 'netten', wrong: ['nette', 'netter'] },
      { q: 'mit einem ___ Chef (freundlich)', a: 'freundlichen', wrong: ['freundlicher', 'freundliche'] }, { q: 'in einer ___ Firma (klein)', a: 'kleinen', wrong: ['kleine', 'kleiner'] },
      { q: 'kein ___ Problem (groß)', a: 'großes', wrong: ['große', 'großer'] }, { q: 'mein ___ Beruf (kreativ)', a: 'kreativer', wrong: ['kreative', 'kreativen'] },
      { q: 'keine ___ Kollegen (neu)', a: 'neuen', wrong: ['neue', 'neuer'] }, { q: 'ein ___ Zimmer (hell)', a: 'helles', wrong: ['helle', 'heller'] },
      { q: 'einen ___ Arbeitsplatz (sicher)', a: 'sicheren', wrong: ['sicherer', 'sichere'] }, { q: 'eine ___ Stelle (interessant)', a: 'interessante', wrong: ['interessanten', 'interessanter'] },
    ],
  },
  {
    id: 'a2k6-memory', engine: 'memory', title: 'Berufe-Memory', blurb: 'Beruf und Bild: Finde die Paare.', skill: 'Berufe', tone: 'lilac', chapter: 6, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Beruf und das passende Bild.', kinds: ['Beruf', 'Bild'],
    pairs: [['die Köchin', '👩‍🍳'], ['der Pilot', '👨‍✈️'], ['die Ärztin', '👩‍⚕️'], ['der Feuerwehrmann', '👨‍🚒'], ['die Lehrerin', '👩‍🏫'], ['der Bauer', '👨‍🌾'], ['die Programmiererin', '👩‍💻'], ['der Mechaniker', '👨‍🔧'], ['die Sängerin', '👩‍🎤'], ['der Polizist', '👮']],
  },
  {
    id: 'a2k6-satzbau', engine: 'satzbau', title: 'Bahnhof-Baukasten', blurb: 'Bau Sätze am Schalter und am Telefon.', skill: 'Satzbau', tone: 'sky', chapter: 6, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Gibt', 'es', 'eine direkte', 'Verbindung?'], hint: 'Ja/Nein-Frage' },
      { parts: ['Sie', 'müssen', 'in Nürnberg', 'umsteigen.'], hint: 'Modalverb + Infinitiv' },
      { parts: ['Ich', 'habe', 'einen sicheren', 'Job.'], hint: 'einen + -en' },
      { parts: ['Das', 'ist', 'ein kreativer', 'Beruf.'], hint: 'ein + -er (maskulin)' },
      { parts: ['Amara', 'wird', 'nächstes Jahr', 'Stationsleiterin.'], hint: 'werden + Beruf' },
      { parts: ['Kann', 'ich', 'etwas', 'ausrichten?'], hint: 'trennbar am Ende' },
      { parts: ['Der Zug', 'fährt', 'von', 'Gleis 12', 'ab.'], hint: 'abfahren: trennbar' },
      { parts: ['Könnte', 'sie mich', 'bitte', 'zurückrufen?'], hint: 'höfliche Bitte' },
    ],
  },
  {
    id: 'a2k6-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Arbeit und Bahn.', skill: 'Artikel', tone: 'rose', chapter: 6, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Beruf, das Gleis, die Fahrkarte, der Zug, das Homeoffice, die Verbindung, der Schalter, das Gehalt, die Abfahrt, der Arbeitsplatz, das Team, die Ankunft, der Koffer, das Telefon, die Aufgabe, der Anrufer, das Projekt, die Ermäßigung'),
  },
];
