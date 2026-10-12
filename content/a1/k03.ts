import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A1 Kapitel 3: Orte in der Stadt, Verkehrsmittel, Wege, Monate und Jahreszeiten.
// Grammar: ein/eine, kein/keine, Imperativ mit Sie, Adjektiv mit sein. Aussprache: lange und kurze Vokale.

export const glossaryA1k3: Record<string, GlossaryEntry> = {
  Sehenswürdigkeit: { de: 'Ein Ort, den Touristen gern ansehen, zum Beispiel eine alte Kirche.', en: 'sight, landmark' },
  Haltestelle: { de: 'Hier hält der Bus oder die Straßenbahn.', en: 'stop (bus, tram)' },
  Straßenbahn: { de: 'Eine Bahn, die auf der Straße fährt.', en: 'tram, streetcar' },
  geradeaus: { de: 'Immer nach vorn, nicht nach links oder rechts.', en: 'straight ahead' },
  links: { de: 'Die Seite, auf der das Herz ist.', en: 'left' },
  rechts: { de: 'Das Gegenteil von links.', en: 'right' },
  Jahreszeit: { de: 'Frühling, Sommer, Herbst oder Winter.', en: 'season' },
  Bahnhof: { de: 'Hier fahren die Züge ab.', en: 'train station' },
  Ampel: { de: 'Rotes, gelbes und grünes Licht an der Straße.', en: 'traffic light' },
  Touristeninformation: { de: 'Ein Büro mit Informationen für Touristen: Karten, Tipps, Hotels.', en: 'tourist information office' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Willkommen in Leipzig', 'butter', 8,
  ['das Kapitel kennenlernen', 'Orte in der Stadt benennen'], [
    overview('e-over', 'Kapitel 3: In der Stadt',
      'Kenji kennt Leipzig noch nicht. In Kapitel 3 zeigt die WG ihm die Stadt. Du lernst Orte wie **Bahnhof**, **Museum** und **Supermarkt**. Du fragst nach dem Weg und verstehst die Antwort: [[geradeaus]], dann [[links]] oder [[rechts]]. Du fährst mit Bus, [[Straßenbahn]] und Fahrrad. Und du lernst die Monate und die [[Jahreszeit|Jahreszeiten]].',
      'This chapter is about the city: places, transport, asking for and giving directions, months and seasons. Grammar: the indefinite article (ein, eine), the negative article (kein, keine), polite commands with Sie, and adjectives after sein.',
      ['Orte in der Stadt nennen', 'nach dem Weg fragen', 'Verkehrsmittel nennen', 'Monate und Jahreszeiten']),
    match('e-match', [['der Bahnhof', '🚉'], ['das Museum', '🏛️'], ['der Supermarkt', '🛒'], ['die Kirche', '⛪'], ['das Hotel', '🏨'], ['der Park', '🌳'], ['das Krankenhaus', '🏥'], ['die Bank', '🏦']],
      { task: 'Was ist das?', taskEn: 'Match the place to the picture.' }),
    match('e-match2', [['der Bus', '🚌'], ['die Straßenbahn', '🚋'], ['das Fahrrad', '🚲'], ['das Auto', '🚗'], ['der Zug', '🚆'], ['zu Fuß', '🚶']],
      { task: 'Verkehrsmittel', taskEn: 'Means of transport. Match.' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Was ist das?', 'mint', 15,
  ['Orte beschreiben', 'ein/eine und kein/keine'], [
    audio('t1-audio', 'Hören: Eine Tour mit Nele', [
      ['nele', 'Schau mal, Kenji. Das ist der Hauptbahnhof. Er ist sehr groß.'],
      ['kenji', 'Wow! Ist das ein Museum?'],
      ['nele', 'Nein, das ist kein Museum. Das ist ein Einkaufszentrum im Bahnhof.'],
      ['kenji', 'Und das da? Ist das eine Kirche?'],
      ['nele', 'Ja, das ist die Thomaskirche. Sie ist alt und sehr schön.'],
      ['kenji', 'Gibt es hier auch einen Park?'],
      ['nele', 'Ja, Leipzig hat viele Parks. Leipzig ist sehr grün.'],
    ], { task: 'Hör zu. Was zeigt Nele?', taskEn: 'Listen. What does Nele show Kenji?' }),
    mcq('t1-q1', 'Wie ist der Hauptbahnhof?', ['klein', 'sehr groß', 'alt und hässlich'], 1),
    mcq('t1-q2', 'Was ist im Bahnhof?', ['ein Museum', 'ein Einkaufszentrum', 'eine Kirche'], 1),
    mcq('t1-q3', 'Wie ist Leipzig?', ['sehr grün', 'sehr laut', 'sehr klein'], 0),
    grammar('t1-gram', 'Der unbestimmte Artikel und die Negation', {
      intro: 'Ein neues Ding: **ein/eine**. Ein bekanntes Ding: **der/das/die**. Nein: **kein/keine**.',
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [['bestimmt', 'der Park', 'das Hotel', 'die Kirche', 'die Parks'], ['unbestimmt', '**ein** Park', '**ein** Hotel', '**eine** Kirche', 'Parks'], ['Negation', '**kein** Park', '**kein** Hotel', '**keine** Kirche', '**keine** Parks']],
      notes: ['*Das ist **ein** Hotel. **Das** Hotel ist neu.*', '*Ist das ein Museum? Nein, das ist **kein** Museum.*'],
      en: 'ein/eine = a, an. kein/keine = no, not a. Use der/das/die when you already know which one: Das ist ein Hotel. Das Hotel ist neu.',
    }),
    gap('t1-gap', ['Das ist {{ein}} Bahnhof.', 'Das ist {{eine}} Bank.', 'Ist das ein Museum? Nein, das ist {{kein}} Museum.', 'Ist das eine Kirche? Nein, das ist {{keine}} Kirche.', 'Hier gibt es {{keine}} Hotels.'],
      { bank: ['ein', 'eine', 'kein', 'keine', 'keine'], task: 'Ergänze.', taskEn: 'Fill in ein, eine, kein or keine.' }),
    grammar('t1-adj', 'Adjektive mit sein', {
      intro: 'Nach **sein** hat das Adjektiv keine Endung.',
      head: ['Nomen', 'sein', 'Adjektiv'],
      rows: [['Der Bahnhof', 'ist', 'groß.'], ['Die Kirche', 'ist', 'alt.'], ['Die Parks', 'sind', 'schön.']],
      en: 'After sein (to be) adjectives have no ending: Der Park ist schön.',
    }),
    match('t1-match', [['groß', 'klein'], ['alt', 'neu'], ['schön', 'hässlich'], ['laut', 'leise'], ['teuer', 'billig'], ['modern', 'altmodisch']], { task: 'Finde das Gegenteil.', taskEn: 'Match the opposites.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Wie komme ich zum Bahnhof?', 'sky', 15,
  ['nach dem Weg fragen', 'Wege beschreiben', 'Imperativ mit Sie'], [
    audio('t2-audio', 'Hören: Wo ist die Oper?', [
      ['kenji', 'Entschuldigung, wo ist die Oper?'],
      ['herrLehmann', 'Die Oper? Das ist nicht weit. Gehen Sie hier geradeaus.'],
      ['herrLehmann', 'Dann gehen Sie an der Ampel links. Die Oper ist dann rechts.'],
      ['kenji', 'Geradeaus, an der Ampel links, dann rechts. Danke schön!'],
      ['herrLehmann', 'Bitte schön. Viel Spaß in Leipzig!'],
    ], { task: 'Hör zu. Wie kommt Kenji zur Oper?', taskEn: 'Listen. How does Kenji get to the opera? Herr Lehmann has a Saxon accent.' }),
    order('t2-order', ['geradeaus', 'an der Ampel links', 'die Oper ist rechts'], { task: 'Bring den Weg in die richtige Reihenfolge.', taskEn: 'Put the directions in order.' }),
    match('t2-match', [['⬆️', 'geradeaus'], ['⬅️', 'links'], ['➡️', 'rechts'], ['🚦', 'an der Ampel']], { task: 'Was passt?', taskEn: 'Match the sign and the word.' }),
    grammar('t2-gram', 'Der Imperativ mit Sie', {
      intro: 'So sagt man höflich, was jemand tun soll: **Verb + Sie**.',
      head: ['Infinitiv', 'Imperativ'],
      rows: [['gehen', '**Gehen Sie** geradeaus!'], ['nehmen', '**Nehmen Sie** die Straßenbahn!'], ['fahren', '**Fahren Sie** bis zum Bahnhof!'], ['sein', '**Seien Sie** vorsichtig!']],
      en: 'Polite commands: put the verb first, then Sie. Gehen Sie geradeaus! = Go straight ahead!',
    }),
    gap('t2-gap', ['{{Gehen}} Sie hier links! (gehen)', '{{Nehmen}} Sie den Bus Nummer 60! (nehmen)', '{{Fahren}} Sie bis zur Haltestelle Markt! (fahren)'],
      { task: 'Ergänze den Imperativ.', taskEn: 'Fill in the polite command.' }),
    phrases('t2-phr', 'Nach dem Weg fragen', {
      'Fragen': ['Entschuldigung, wo ist …?', 'Wie komme ich zum Bahnhof?', 'Ist das weit?'],
      'Antworten': ['Gehen Sie geradeaus.', 'Gehen Sie links / rechts.', 'Das ist nicht weit. / Das ist weit.'],
      'Danken': ['Danke schön!', 'Bitte schön!', 'Tut mir leid, ich bin nicht von hier.'],
    }),
    sort('t2-sort', ['Mit dem …', 'Mit der …'], [['Bus', 0], ['Straßenbahn', 1], ['Zug', 0], ['U-Bahn', 1], ['Fahrrad', 0], ['S-Bahn', 1]],
      { task: 'Ich fahre mit dem Bus. Ich fahre mit der Straßenbahn. Was passt?', taskEn: 'Sort: "mit dem" for der/das words, "mit der" for die words. More about this in chapter 7.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Monate und Jahreszeiten', 'lilac', 12,
  ['Monate', 'Jahreszeiten', 'über das Lieblingswetter sprechen'], [
    grammar('t3-gram', 'Die Monate und Jahreszeiten', {
      head: ['Jahreszeit', 'Monate'],
      rows: [['der Frühling', 'März, April, Mai'], ['der Sommer', 'Juni, Juli, August'], ['der Herbst', 'September, Oktober, November'], ['der Winter', 'Dezember, Januar, Februar']],
      notes: ['Mit Monaten und Jahreszeiten sagt man **im**: *im Mai, im Sommer*.', 'In Österreich sagt man oft **Jänner** für Januar.'],
      en: 'All months and seasons are masculine. "In May" = im Mai. "In summer" = im Sommer.',
    }),
    sort('t3-sort', ['Frühling/Sommer', 'Herbst/Winter'], [['April', 0], ['Juli', 0], ['Oktober', 1], ['Januar', 1], ['Mai', 0], ['November', 1], ['August', 0], ['Dezember', 1]],
      { task: 'Wann ist das?', taskEn: 'Sort the months: spring/summer or autumn/winter?' }),
    text('t3-text', `**Leipzig im Jahr**

Im **Frühling** ist Leipzig grün. Die Leute sitzen im Park.
Im **Sommer** gibt es viele Konzerte. Man schwimmt in den Seen.
Im **Herbst** ist es oft windig. Die Bäume sind bunt.
Im **Winter** gibt es den Weihnachtsmarkt. Es ist kalt.`, { kicker: 'Lesen', task: 'Lies den Text.', taskEn: 'Read about Leipzig through the year.' }),
    mcq('t3-q1', 'Wann gibt es viele Konzerte?', ['im Frühling', 'im Sommer', 'im Winter'], 1),
    mcq('t3-q2', 'Wann ist der Weihnachtsmarkt?', ['im Herbst', 'im Winter', 'im Sommer'], 1),
    audio('t3-audio', 'Hören: Meine Lieblingsjahreszeit', [
      ['amara', 'Meine Lieblingsjahreszeit ist der Sommer. In Ghana ist es immer warm!'],
      ['felix', 'Ich mag den Winter. Im Jänner fahre ich Ski in Österreich.'],
      ['kenji', 'Ich mag den Frühling. Im April gibt es in Japan die Kirschblüte.'],
      ['nele', 'Und ich mag den Herbst. Im Oktober ist Leipzig so schön bunt.'],
    ], { task: 'Hör zu. Wer mag welche Jahreszeit?', taskEn: 'Listen. Who likes which season?' }),
    match('t3-match', [['Amara', 'Sommer'], ['Felix', 'Winter'], ['Kenji', 'Frühling'], ['Nele', 'Herbst']], { task: 'Wer mag was?', taskEn: 'Who likes what?' }),
    tip('t3-tip', 'Jänner', 'Felix sagt **Jänner**. Das ist österreichisch für **Januar**. Du verstehst es jetzt, wenn du es hörst!'),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 3: Kenji allein unterwegs', 'rose', 10,
  ['eine Geschichte hören', 'Wege verstehen'], [
    text('wg-intro', 'Kenji hat ein Vorstellungsgespräch in einem Restaurant. Er fährt allein in die Stadt. Aber sein Handy ist leer.', { kicker: 'Die Geschichte', en: 'Kenji has a job interview at a restaurant. He goes into town alone, but his phone battery is dead.' }),
    audio('wg-audio', 'Folge 3: Kenji allein unterwegs', [
      ['kenji', 'Oh nein, mein Handy ist leer! Entschuldigung, wo ist die Haltestelle Augustusplatz?'],
      ['jule', 'Augustusplatz? Nehmen Sie die Straßenbahn Nummer 16. Die Haltestelle ist da vorne.'],
      ['kenji', 'Danke! Und vom Augustusplatz: Wo ist das Restaurant „Zum Fuchs“?'],
      ['jule', 'Hm, das kenne ich nicht. Fragen Sie in der Touristeninformation. Sie ist am Markt.'],
      ['kenji', 'Am Markt. Danke schön!'],
      ['erzaehler', 'Später, in der Touristeninformation.'],
      ['frauBaumann', 'Das Restaurant „Zum Fuchs“? Gehen Sie geradeaus und dann die zweite Straße rechts. Es sind nur fünf Minuten zu Fuß.'],
      ['kenji', 'Super, vielen Dank! Ich bin pünktlich!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story. Frau Baumann is from Switzerland and speaks slowly.' }),
    mcq('wg-q1', 'Was ist das Problem?', ['Kenji hat kein Geld.', 'Das Handy ist leer.', 'Die Straßenbahn kommt nicht.'], 1),
    mcq('wg-q2', 'Welche Straßenbahn nimmt Kenji?', ['die 6', 'die 16', 'die 60'], 1),
    mcq('wg-q3', 'Wo ist die Touristeninformation?', ['am Bahnhof', 'am Markt', 'am Augustusplatz'], 1),
    mcq('wg-q4', 'Wie weit ist das Restaurant von der Touristeninformation?', ['fünf Minuten zu Fuß', 'fünfzehn Minuten mit dem Bus', 'sehr weit'], 0),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Artikel im Nominativ', 'Imperativ mit Sie'], [
    grammar('g-1', 'Artikel im Nominativ', {
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [['bestimmt', 'der', 'das', 'die', 'die'], ['unbestimmt', 'ein', 'ein', 'eine', '–'], ['Negation', 'kein', 'kein', 'keine', 'keine']],
      en: 'Overview of articles in the nominative (subject) case.',
    }),
    grammar('g-2', 'Negation mit nicht', {
      intro: '**kein** verneint ein Nomen. **nicht** verneint ein Verb oder ein Adjektiv.',
      head: ['kein', 'nicht'],
      rows: [['Das ist **kein** Museum.', 'Das Museum ist **nicht** groß.'], ['Ich habe **kein** Auto.', 'Ich fahre **nicht** gern Auto.']],
      en: 'kein negates nouns (no/not a). nicht negates verbs and adjectives (not).',
    }),
    sort('g-sort', ['kein/keine', 'nicht'], [['Das ist ___ Bank.', 0], ['Die Kirche ist ___ alt.', 1], ['Ich habe ___ Fahrrad.', 0], ['Kenji wohnt ___ in Berlin.', 1], ['Hier gibt es ___ Supermarkt.', 0], ['Das ist ___ weit.', 1]],
      { task: 'kein oder nicht?', taskEn: 'Sort: does the gap need kein/keine or nicht?' }),
    mcq('g-q1', '„Ist das ein Hotel?“ „Nein, das ist ___ Hotel.“', ['nicht', 'kein', 'keine'], 1),
    mcq('g-q2', 'Welcher Satz ist höflich?', ['Du gehst links!', 'Gehen Sie links!', 'Gehst links!'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Wege beschreiben', 'Aussprache: lange und kurze Vokale'], [
    compose('u-comp', 'Ein Tourist fragt dich nach dem Weg zum Museum.', [
      ['Sag: geradeaus gehen.', 'Tell him to go straight ahead.', ['Gehen', 'Sie', 'geradeaus.']],
      ['Sag: an der Ampel rechts.', 'Tell him to turn right at the traffic light.', ['Gehen', 'Sie', 'an der Ampel', 'rechts.']],
      ['Sag: Das Museum ist links.', 'Say the museum is on the left.', ['Das Museum', 'ist', 'dann', 'links.']],
      ['Sag: nicht weit.', 'Say it is not far.', ['Das', 'ist', 'nicht', 'weit.']],
    ], { task: 'Bau die Wegbeschreibung.', taskEn: 'Build the directions.' }),
    audio('u-aus', 'Aussprache: lang oder kurz?', [
      ['frauKlein', 'Hör den Unterschied. Lang: der Bahnhof, die Straße, wohnen.'],
      ['frauKlein', 'Kurz: die Stadt, der Park, kommen.'],
      ['frauKlein', 'Vor zwei Konsonanten ist der Vokal oft kurz: Stadt, Kirche, kommen.'],
      ['frauKlein', 'Mit h ist der Vokal lang: Bahnhof, wohnen, fahren.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. Long vowels before h, short vowels before two consonants.' }),
    sort('u-sort', ['lang', 'kurz'], [['fahren', 0], ['Stadt', 1], ['wohnen', 0], ['kommen', 1], ['Straße', 0], ['Park', 1]], { task: 'Lang oder kurz?', taskEn: 'Long or short vowel?' }),
    order('u-order', ['Nehmen', 'Sie', 'die Straßenbahn', 'Nummer 16!'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
    mcq('u-q1', 'Wann ist der Herbst?', ['März bis Mai', 'September bis November', 'Juni bis August'], 1),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['der Bahnhof', 'hier fahren Züge', 'train station'], ['die Haltestelle', 'hier hält der Bus', 'stop'], ['die Straßenbahn', 'Bahn auf der Straße', 'tram'],
      ['geradeaus', 'nach vorn', 'straight ahead'], ['links', '⬅️', 'left'], ['rechts', '➡️', 'right'],
      ['die Ampel', 'rot, gelb, grün', 'traffic light'], ['weit', 'nicht nah', 'far'], ['der Frühling', 'März bis Mai', 'spring'],
      ['der Sommer', 'Juni bis August', 'summer'], ['der Herbst', 'September bis November', 'autumn, fall'], ['der Winter', 'Dezember bis Februar', 'winter'],
    ]),
    checklist('w-check', ['Ich kann Orte in der Stadt nennen.', 'Ich kann nach dem Weg fragen.', 'Ich verstehe einfache Wegbeschreibungen.', 'Ich kenne ein/eine und kein/keine.', 'Ich kenne die Monate und Jahreszeiten.']),
    mcq('w-q1', 'Du suchst den Bahnhof. Was fragst du?', ['Wo bist du Bahnhof?', 'Entschuldigung, wie komme ich zum Bahnhof?', 'Gehen Sie zum Bahnhof!'], 1, { task: 'Letzter Check', taskEn: 'Last check before the exam.' }),
  ]);

export const a1k3: Chapter = {
  id: 'a1-k3', number: 3, title: 'In der Stadt', theme: 'Orte, Verkehrsmittel, Wege, Monate, Jahreszeiten',
  grammar: 'ein/eine, kein/keine. Imperativ mit Sie. Adjektiv mit sein.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a1k3-sprint', 'a1k3-memory', 'a1k3-satzbau', 'a1k3-artikel'],
  exam: [
    x(1, mcq('x1', 'Das ist ___ Kirche.', ['ein', 'eine', 'kein'], 1)),
    x(1, mcq('x2', '„Ist das ein Park?“ „Nein, das ist ___ Park.“', ['keine', 'nicht', 'kein'], 2)),
    x(1, mcq('x3', 'Welcher Monat ist im Winter?', ['Juli', 'Januar', 'April'], 1)),
    x(3, gap('x4', ['{{Gehen}} Sie geradeaus! (gehen)', '{{Nehmen}} Sie den Bus! (nehmen)', '{{Fahren}} Sie bis zum Markt! (fahren)'], { task: 'Imperativ mit Sie.' })),
    x(3, gap('x5', ['groß ↔ {{klein}}', 'alt ↔ {{neu}}', 'laut ↔ {{leise}}'], { task: 'Schreib das Gegenteil.' })),
    x(1, mcq('x6', 'Wo ist die Apotheke?', ['links neben der Bank', 'rechts neben der Post', 'am Bahnhof'], 1),
      audio('x-st1', 'Hören: Wo ist die Apotheke?', [
        ['priya', 'Entschuldigung, wo ist hier eine Apotheke?'],
        ['herrAdler', 'Gehen Sie hier geradeaus bis zur Post. Die Apotheke ist rechts neben der Post.'],
        ['priya', 'Ist das weit?'],
        ['herrAdler', 'Nein, nur drei Minuten.'],
      ])),
    x(1, mcq('x7', 'Wie lange geht man? (Hörtext oben)', ['drei Minuten', 'dreizehn Minuten', 'dreißig Minuten'], 0)),
    x(1, mcq('x8', 'Wann ist das Museum am Montag offen?', ['von 10 bis 18 Uhr', 'gar nicht', 'von 10 bis 20 Uhr'], 1),
      text('x-st2', '**Stadtmuseum**\nDienstag bis Sonntag: 10 bis 18 Uhr\nMittwoch: 10 bis 20 Uhr\nMontag: geschlossen\nEintritt: 6 Euro, Kinder frei', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was kostet der Eintritt für Kinder? (Text oben)', ['6 Euro', 'nichts', '3 Euro'], 1)),
    x(2, order('x10', ['Wie', 'komme', 'ich', 'zum Bahnhof?'], { task: 'Bau die Frage.' })),
    x(1, mcq('x11', 'Die Stadt ist ___ groß.', ['kein', 'nicht', 'keine'], 1)),
    x(1, mcq('x12', 'Im Sommer gibt es viele Konzerte. „im Sommer“ heißt:', ['in summer', 'in spring', 'in winter'], 0)),
  ],
};

export const gamesA1k3: GameDef[] = [
  {
    id: 'a1k3-sprint', engine: 'sprint', title: 'ein oder kein?', blurb: 'Schnell: ein, eine, kein oder keine?', skill: 'Artikel und Negation', tone: 'mint', chapter: 3, emoji: '⚡',
    rules: 'Du siehst einen Satz mit Lücke. Tippe auf das richtige Wort. Du hast 60 Sekunden.', label: 'Was passt?',
    items: [
      { q: 'Das ist ___ Bahnhof.', a: 'ein', wrong: ['eine', 'keine'] }, { q: 'Das ist ___ Bank.', a: 'eine', wrong: ['ein', 'kein'] },
      { q: 'Nein, das ist ___ Museum.', a: 'kein', wrong: ['keine', 'nicht'] }, { q: 'Nein, das ist ___ Kirche.', a: 'keine', wrong: ['kein', 'nicht'] },
      { q: 'Hier gibt es ___ Hotels.', a: 'keine', wrong: ['kein', 'nicht'] }, { q: 'Der Park ist ___ groß.', a: 'nicht', wrong: ['kein', 'keine'] },
      { q: 'Das ist ___ Hotel.', a: 'ein', wrong: ['eine', 'einen'] }, { q: 'Ich habe ___ Auto.', a: 'kein', wrong: ['keine', 'nicht'] },
      { q: 'Das ist ___ Haltestelle.', a: 'eine', wrong: ['ein', 'kein'] }, { q: 'Das ist ___ weit.', a: 'nicht', wrong: ['kein', 'keine'] },
      { q: 'Ist das ___ Supermarkt?', a: 'ein', wrong: ['eine', 'nicht'] }, { q: 'Nein, das ist ___ Apotheke.', a: 'keine', wrong: ['kein', 'nicht'] },
    ],
  },
  {
    id: 'a1k3-memory', engine: 'memory', title: 'Stadt-Memory', blurb: 'Ort und Bild: Finde die Paare.', skill: 'Orte in der Stadt', tone: 'lilac', chapter: 3, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Ort und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['der Bahnhof', '🚉'], ['das Museum', '🏛️'], ['der Supermarkt', '🛒'], ['die Kirche', '⛪'], ['der Park', '🌳'], ['das Krankenhaus', '🏥'], ['die Bank', '🏦'], ['die Straßenbahn', '🚋'], ['die Ampel', '🚦'], ['das Fahrrad', '🚲']],
  },
  {
    id: 'a1k3-satzbau', engine: 'satzbau', title: 'Weg-Baukasten', blurb: 'Bau Wegbeschreibungen und Fragen.', skill: 'Wege beschreiben', tone: 'sky', chapter: 3, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Gehen', 'Sie', 'hier', 'geradeaus.'], hint: 'Imperativ: Verb zuerst' },
      { parts: ['Wo', 'ist', 'die', 'Haltestelle?'], hint: 'W-Frage' },
      { parts: ['Nehmen', 'Sie', 'die', 'Straßenbahn.'], hint: 'Imperativ mit Sie' },
      { parts: ['Das', 'ist', 'kein', 'Museum.'], hint: 'kein vor dem Nomen' },
      { parts: ['Die Kirche', 'ist', 'sehr', 'alt.'], hint: 'Adjektiv am Ende' },
      { parts: ['Wie', 'komme', 'ich', 'zum Markt?'], hint: 'W-Frage' },
      { parts: ['Im Winter', 'ist', 'es', 'kalt.'], hint: 'Verb auf Position 2' },
      { parts: ['Ist', 'das', 'weit?'], hint: 'Ja/Nein-Frage' },
    ],
  },
  {
    id: 'a1k3-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Orte in der Stadt.', skill: 'Artikel', tone: 'rose', chapter: 3, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Bahnhof, das Museum, die Kirche, der Park, das Hotel, die Bank, der Supermarkt, das Krankenhaus, die Post, der Bus, das Auto, die Straßenbahn, der Zug, das Fahrrad, die Ampel, der Platz, das Kino, die Haltestelle'),
  },
];
