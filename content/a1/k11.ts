import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A1 Kapitel 11: Kleidung, im Kaufhaus, Meinungen, eine Stadt (Berlin).
// Grammar: welcher/dieser, Personalpronomen im Dativ, Verben mit Dativ, Partizip II von trennbaren und untrennbaren Verben. Aussprache: Wortakzent.

export const glossaryA1k11: Record<string, GlossaryEntry> = {
  Kleidung: { de: 'Hose, Pullover, Jacke: Das trägt man.', en: 'clothes' },
  Kaufhaus: { de: 'Ein großes Geschäft mit vielen Etagen.', en: 'department store' },
  anprobieren: { de: 'Kleidung im Geschäft anziehen und testen.', en: 'to try on' },
  Umkleidekabine: { de: 'Ein kleiner Raum im Geschäft. Dort probiert man Kleidung an.', en: 'fitting room' },
  Größe: { de: 'Wie groß ist die Kleidung? S, M, L oder 38, 40 …', en: 'size' },
  gefallen: { de: 'Etwas schön finden. „Die Jacke gefällt mir.“', en: 'to please, to like (it pleases me)' },
  passen: { de: 'Die Größe ist richtig. „Die Hose passt mir.“', en: 'to fit' },
  stehen: { de: 'Hier: gut aussehen. „Die Farbe steht dir!“', en: 'to suit (someone)' },
  Rolltreppe: { de: 'Eine Treppe, die sich bewegt.', en: 'escalator' },
  Etage: { de: 'Ein Stockwerk in einem Gebäude.', en: 'floor, story' },
  Flohmarkt: { de: 'Ein Markt mit alten, gebrauchten Sachen.', en: 'flea market' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Was ziehst du an?', 'butter', 8,
  ['das Kapitel kennenlernen', 'Kleidung benennen'], [
    overview('e-over', 'Kapitel 11: Die Jacke gefällt mir!',
      'In Kapitel 11 gehst du shoppen. Du lernst Wörter für [[Kleidung]], findest im [[Kaufhaus]] die richtige [[Etage]] und [[anprobieren|probierst]] etwas in der [[Umkleidekabine]] an. Du sagst, was dir [[gefallen|gefällt]], was dir [[passen|passt]] und welche Farbe dir [[stehen|steht]].\n\nDie WG fährt nach Berlin! Felix will auf den [[Flohmarkt]].',
      'This chapter is about clothes and shopping: department stores, sizes and colors, giving your opinion. You also take a trip to Berlin. Grammar: welcher and dieser, pronouns in the dative (mir, dir …), verbs with the dative (gefallen, passen, stehen, helfen), and the past participle of separable and inseparable verbs.',
      ['Kleidung nennen', 'im Kaufhaus einkaufen', 'die Meinung sagen: gefällt mir', 'über eine Reise nach Berlin sprechen']),
    match('e-match', [['die Hose', '👖'], ['das T-Shirt', '👕'], ['das Kleid', '👗'], ['die Jacke', '🧥'], ['der Schuh', '👟'], ['die Mütze', '🧢'], ['der Schal', '🧣'], ['die Socken', '🧦']], { task: 'Kleidung', taskEn: 'Match the clothes.' }),
    sort('e-sort', ['im Sommer', 'im Winter'], [['das T-Shirt', 0], ['der Mantel', 1], ['die Shorts', 0], ['der Schal', 1], ['die Sandalen', 0], ['die Handschuhe', 1]], { task: 'Was trägt man wann?', taskEn: 'What do you wear when?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Im Kaufhaus', 'mint', 15,
  ['sich im Kaufhaus orientieren', 'welcher und dieser'], [
    text('t1-text', `**Kaufhaus am Markt: Wegweiser**

**UG** Lebensmittel, Getränke
**EG** Schmuck, Taschen, Kosmetik, Information
**1. Etage** Damenmode, Damenschuhe
**2. Etage** Herrenmode, Herrenschuhe
**3. Etage** Kindermode, Spielwaren
**4. Etage** Sport, Elektro, Restaurant mit Dachterrasse`, { kicker: 'Lesen', title: 'Wo finde ich was?', task: 'Lies den Wegweiser.', taskEn: 'Read the store directory. UG = basement, EG = ground floor.' }),
    mcq('t1-q1', 'Felix sucht eine Jacke für sich. Wohin geht er?', ['1. Etage', '2. Etage', '3. Etage'], 1),
    mcq('t1-q2', 'Nele möchte einen Kaffee trinken. Wo?', ['im UG', 'in der 4. Etage', 'im EG'], 1),
    mcq('t1-q3', 'Amara sucht ein Spiel für ihren Neffen.', ['3. Etage', 'EG', '4. Etage'], 0),
    audio('t1-audio', 'Hören: Welche Jacke?', [
      ['felix', 'Entschuldigung, ich suche eine Jacke.'],
      ['priya', 'Die Jacken sind hier. Welche Größe haben Sie?'],
      ['felix', 'Größe L.'],
      ['priya', 'Welche Farbe möchten Sie?'],
      ['felix', 'Hm, diese grüne Jacke hier finde ich toll. Was kostet die?'],
      ['priya', 'Diese Jacke kostet neunundachtzig Euro. Sie ist im Angebot.'],
      ['felix', 'Kann ich sie anprobieren?'],
      ['priya', 'Natürlich. Die Umkleidekabinen sind dort hinten.'],
    ], { task: 'Hör zu. Was kauft Felix?', taskEn: 'Listen. What is Felix looking for?' }),
    mcq('t1-q4', 'Welche Größe hat Felix?', ['M', 'L', 'XL'], 1),
    mcq('t1-q5', 'Was kostet die Jacke?', ['98 €', '89 €', '69 €'], 1),
    grammar('t1-gram', 'welcher? und dieser', {
      intro: '**welch-** fragt nach einer Sache aus einer Gruppe. **dies-** zeigt auf eine Sache. Die Endungen sind wie bei **der, das, die**.',
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [['Nominativ', 'welch**er** / dies**er**', 'welch**es** / dies**es**', 'welch**e** / dies**e**', 'welch**e** / dies**e**'], ['Akkusativ', 'welch**en** / dies**en**', 'welch**es** / dies**es**', 'welch**e** / dies**e**', 'welch**e** / dies**e**']],
      notes: ['*Welche Jacke gefällt dir? Diese hier!*', '*Welchen Pullover nimmst du? Diesen.*'],
      en: 'welcher? = which? dieser = this. Same endings as der/das/die: der → dieser, den → diesen, das → dieses, die → diese.',
    }),
    gap('t1-gap', ['{{Welche}} Hose möchtest du? (die Hose)', '{{Welcher}} Pullover ist billiger? (der Pullover)', 'Ich nehme {{diesen}} Mantel. (der Mantel, Akkusativ)', '{{Dieses}} Kleid ist schön. (das Kleid)'],
      { task: 'Ergänze welch- oder dies-.', taskEn: 'Fill in the right form.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Gefällt dir das?', 'sky', 15,
  ['die Meinung sagen', 'Personalpronomen im Dativ', 'Verben mit Dativ'], [
    audio('t2-audio', 'Hören: In der Umkleidekabine', [
      ['felix', 'Nele, wie findest du die Jacke? Steht sie mir?'],
      ['nele', 'Die Farbe steht dir super! Aber passt sie dir? Sie ist ein bisschen groß.'],
      ['felix', 'Ja, die Ärmel sind zu lang. Ich probiere Größe M an.'],
      ['nele', 'Und? Besser?'],
      ['felix', 'Ja, die passt mir perfekt. Und sie gefällt mir sehr gut. Ich nehme sie!'],
      ['nele', 'Und ich? Gefällt dir mein Hut?'],
      ['felix', 'Ehrlich? Nein, der gefällt mir gar nicht. Er ist zu groß für deinen Kopf!'],
    ], { task: 'Hör zu. Wie findet Nele die Jacke?', taskEn: 'Listen. What does Nele think about the jacket?' }),
    mcq('t2-q1', 'Was ist das Problem mit der Jacke in Größe L?', ['Die Farbe.', 'Sie ist zu groß.', 'Sie ist zu teuer.'], 1),
    mcq('t2-q2', 'Wie findet Felix Neles Hut?', ['Er gefällt ihm sehr.', 'Er gefällt ihm nicht.', 'Er findet ihn okay.'], 1),
    grammar('t2-gram', 'Personalpronomen im Dativ und Verben mit Dativ', {
      intro: 'Einige Verben brauchen den **Dativ**: **gefallen, passen, stehen, gehören, helfen, schmecken, danken**.',
      head: ['Nominativ', 'Dativ', 'Beispiel'],
      rows: [['ich', '**mir**', 'Die Jacke gefällt **mir**.'], ['du', '**dir**', 'Die Farbe steht **dir**.'], ['er / es', '**ihm**', 'Die Hose passt **ihm** nicht.'], ['sie', '**ihr**', 'Das Kleid gehört **ihr**.'], ['wir', '**uns**', 'Kannst du **uns** helfen?'], ['ihr', '**euch**', 'Schmeckt **euch** der Kuchen?'], ['sie / Sie', '**ihnen / Ihnen**', 'Kann ich **Ihnen** helfen?']],
      notes: ['Bei **gefallen** ist die Sache das Subjekt: *Die Schuhe **gefallen** mir.* (Plural!)'],
      en: 'Some verbs take the dative: gefallen (to please), passen (to fit), stehen (to suit), gehören (to belong), helfen (to help). Dative pronouns: mir, dir, ihm, ihr, uns, euch, ihnen/Ihnen. With gefallen, the thing is the subject: Die Schuhe gefallen mir.',
    }),
    gap('t2-gap', ['Die Jacke gefällt {{mir}}. (ich)', 'Steht {{dir}} die Farbe? (du)', 'Die Hose passt {{ihm}} nicht. (er)', 'Wem gehört die Tasche? Sie gehört {{ihr}}. (sie)', 'Kann ich {{Ihnen}} helfen? (Sie)'],
      { task: 'Ergänze das Pronomen im Dativ.', taskEn: 'Fill in the dative pronoun.' }),
    mcq('t2-q3', 'Die Schuhe ___ mir gut.', ['gefällt', 'gefallen', 'gefallt'], 1),
    phrases('t2-phr', 'Meinungen über Kleidung', {
      'positiv': ['Das gefällt mir sehr gut.', 'Die Farbe steht dir super!', 'Die Hose passt perfekt.'],
      'negativ': ['Das gefällt mir nicht so.', 'Die Jacke ist zu groß / zu klein / zu teuer.', 'Das steht dir nicht.'],
      'fragen': ['Wie findest du …?', 'Steht mir das?', 'Haben Sie das auch in Größe M?'],
    }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Ein Wochenende in Berlin', 'lilac', 15,
  ['einen Reisebericht lesen', 'Partizip II von trennbaren und untrennbaren Verben'], [
    text('t3-text', `Hallo Mama und Papa,

wir haben ein tolles Wochenende in Berlin verbracht! Am Samstag sind wir sehr früh aufgestanden und mit dem Bus nach Berlin gefahren. Zuerst haben wir das Brandenburger Tor besichtigt. Dann sind wir auf den Fernsehturm gestiegen. Die Aussicht war fantastisch!

Am Sonntag hat Felix uns zum Flohmarkt im Mauerpark mitgenommen. Er hat eine alte Lederjacke gekauft. Ich habe eine Tasche bekommen, ein Geschenk von Amara. Am Abend sind wir müde, aber glücklich zurückgekommen.

Liebe Grüße, Kenji`, { kicker: 'Lesen', title: 'Kenjis E-Mail aus Berlin', task: 'Lies die E-Mail.', taskEn: 'Read Kenji’s email about the trip to Berlin.' }),
    mcq('t3-q1', 'Wie ist die WG nach Berlin gefahren?', ['mit dem Zug', 'mit dem Bus', 'mit dem Auto'], 1),
    mcq('t3-q2', 'Was hat Felix auf dem Flohmarkt gekauft?', ['eine Tasche', 'eine Lederjacke', 'einen Hut'], 1),
    mcq('t3-q3', 'Von wem hat Kenji die Tasche bekommen?', ['von Felix', 'von Amara', 'von Nele'], 1),
    grammar('t3-gram', 'Partizip II: trennbar und untrennbar', {
      head: ['Typ', 'Infinitiv', 'Partizip II'],
      rows: [['trennbar: ge in der Mitte', 'aufstehen, mitnehmen, einkaufen, zurückkommen', 'auf**ge**standen, mit**ge**nommen, ein**ge**kauft, zurück**ge**kommen'], ['untrennbar (be-, ver-, er-, ge-, emp-, ent-): ohne ge-', 'besichtigen, verbringen, bekommen, gefallen', 'besichtigt, verbracht, bekommen, gefallen']],
      notes: ['Achtung: **bekommen** heißt *to get / to receive*, nicht *to become*!'],
      en: 'Separable verbs put ge- between prefix and stem: aufgestanden. Inseparable verbs (be-, ver-, er-, ge-, emp-, ent-) have no ge-: besichtigt, verbracht. Careful: bekommen means "to receive", not "to become".',
    }),
    sort('t3-sort', ['trennbar', 'untrennbar'], [['aufgestanden', 0], ['besichtigt', 1], ['mitgenommen', 0], ['verbracht', 1], ['eingekauft', 0], ['bekommen', 1]], { task: 'Trennbar oder untrennbar?', taskEn: 'Separable or inseparable?' }),
    gap('t3-gap', ['Wir haben das Museum {{besichtigt}}. (besichtigen)', 'Ich bin um sechs {{aufgestanden}}. (aufstehen)', 'Hast du ein Geschenk {{bekommen}}? (bekommen)', 'Er hat Brot {{eingekauft}}. (einkaufen)'],
      { task: 'Ergänze das Partizip.', taskEn: 'Fill in the participle.' }),
    tip('t3-tip', 'Berlin', 'Berlin ist die Hauptstadt von Deutschland. Hier wohnen fast 4 Millionen Menschen. Berühmt sind das **Brandenburger Tor**, der **Fernsehturm** und die **East Side Gallery**, ein Stück von der alten Mauer.'),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 11: Auf dem Flohmarkt', 'rose', 10,
  ['eine Geschichte hören', 'handeln auf dem Flohmarkt'], [
    text('wg-intro', 'Sonntag im Mauerpark in Berlin. Felix sieht eine Lederjacke. Er will einen guten Preis.', { kicker: 'Die Geschichte', en: 'Sunday at a flea market in Berlin. Felix sees a leather jacket. He wants a good price.' }),
    audio('wg-audio', 'Folge 11: Auf dem Flohmarkt', [
      ['felix', 'Entschuldigung, was kostet diese Jacke?'],
      ['atze', 'Die Lederjacke? Sechzig Euro. Is ’ne echte Siebziger-Jacke, wa?'],
      ['felix', 'Sechzig? Hm. Das ist mir zu teuer. Vierzig?'],
      ['atze', 'Vierzig? Nee, da verdien ich ja nüscht. Fünfzig.'],
      ['felix', 'Fünfundvierzig. Mein letztes Angebot.'],
      ['atze', 'Na jut. Fünfundvierzig. Weil du so nett fragst.'],
      ['amara', 'Felix, die Jacke steht dir wirklich gut!'],
      ['felix', 'Danke! Und für dich, Kenji? Die Tasche hier gefällt dir doch, oder?'],
      ['amara', 'Die kaufe ich für Kenji. Als Erinnerung an Berlin!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story. The seller speaks Berlin dialect: "wa?" = oder?, "nüscht" = nichts, "jut" = gut.' }),
    mcq('wg-q1', 'Was kostet die Jacke zuerst?', ['40 €', '50 €', '60 €'], 2),
    mcq('wg-q2', 'Für wie viel kauft Felix die Jacke?', ['45 €', '50 €', '40 €'], 0),
    mcq('wg-q3', 'Was bedeutet „nüscht“ auf Berlinerisch?', ['nichts', 'nicht schlecht', 'neu'], 0),
    phrases('wg-phr', 'Auf dem Flohmarkt handeln', {
      'Käufer': ['Was kostet …?', 'Das ist mir zu teuer.', 'Ich gebe Ihnen 20 Euro.', 'Mein letztes Angebot.'],
      'Verkäufer': ['Das ist ein guter Preis!', 'Na gut, einverstanden.', 'Nein, das geht nicht.'],
    }),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Dativ', 'welch- und dies-'], [
    grammar('g-1', 'Personalpronomen: alle Fälle', {
      head: ['Nominativ', 'Akkusativ', 'Dativ'],
      rows: [['ich', 'mich', 'mir'], ['du', 'dich', 'dir'], ['er', 'ihn', 'ihm'], ['sie', 'sie', 'ihr'], ['es', 'es', 'ihm'], ['wir', 'uns', 'uns'], ['ihr', 'euch', 'euch'], ['sie / Sie', 'sie / Sie', 'ihnen / Ihnen']],
      en: 'Personal pronouns in all three cases.',
    }),
    mcq('g-q1', 'Kannst du ___ helfen? (ich)', ['mich', 'mir', 'ich'], 1),
    mcq('g-q2', 'Ich sehe ___. (du)', ['dir', 'dich', 'du'], 1),
    mcq('g-q3', 'Gehört das Handy ___? (er)', ['ihn', 'ihm', 'er'], 1),
    mcq('g-q4', '___ Schuhe nimmst du? Diese hier.', ['Welcher', 'Welche', 'Welchen'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['im Geschäft sprechen', 'Aussprache: Wortakzent'], [
    compose('u-comp', 'Du bist im Kaufhaus.', [
      ['Sag, was du suchst.', 'Say what you are looking for.', ['Ich', 'suche', 'einen', 'Pullover.']],
      ['Frag nach Größe M.', 'Ask for size M.', ['Haben', 'Sie', 'den Pullover', 'in Größe M?']],
      ['Frag, ob du ihn anprobieren kannst.', 'Ask if you can try it on.', ['Kann', 'ich', 'ihn', 'anprobieren?']],
      ['Sag, dass er dir gefällt.', 'Say that you like it.', ['Der Pullover', 'gefällt', 'mir', 'sehr gut.']],
    ], { task: 'Bau das Gespräch.', taskEn: 'Build the conversation.' }),
    audio('u-aus', 'Aussprache: Wortakzent', [
      ['frauKlein', 'Bei trennbaren Verben ist der Akzent vorne: ANprobieren, AUFstehen, EINkaufen.'],
      ['frauKlein', 'Bei untrennbaren Verben ist der Akzent hinten: beSUCHen, verKAUfen, beKOMmen.'],
      ['frauKlein', 'Bei Wörtern auf -ieren ist der Akzent auf -ie: proBIEren, telefoNIEren, stuDIEren.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. Separable verbs stress the prefix, inseparable verbs stress the stem, -ieren verbs stress -ie-.' }),
    sort('u-sort', ['Akzent vorne', 'Akzent nicht vorne'], [['anprobieren', 0], ['besuchen', 1], ['einkaufen', 0], ['verkaufen', 1], ['mitnehmen', 0], ['bekommen', 1]], { task: 'Wo ist der Akzent?', taskEn: 'Where is the stress?' }),
    order('u-order', ['Die Farbe', 'steht', 'dir', 'super!'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['die Kleidung', 'Hose, Jacke, Kleid …', 'clothes'], ['die Hose', 'für die Beine', 'trousers, pants'], ['der Pullover', 'warm, für oben', 'sweater'],
      ['die Größe', 'S, M, L …', 'size'], ['anprobieren', 'im Geschäft testen', 'to try on'], ['die Umkleidekabine', 'hier probiert man an', 'fitting room'],
      ['gefallen', 'schön finden', 'to like (it pleases me)'], ['passen', 'die Größe ist richtig', 'to fit'], ['stehen', 'gut aussehen an jemandem', 'to suit'],
      ['das Kaufhaus', 'großes Geschäft', 'department store'], ['die Rolltreppe', 'bewegt sich', 'escalator'], ['der Flohmarkt', 'alte Sachen kaufen', 'flea market'],
    ]),
    checklist('w-check', ['Ich kann Kleidung nennen.', 'Ich kann im Kaufhaus nach etwas fragen.', 'Ich kann sagen, was mir gefällt und passt.', 'Ich kenne die Pronomen im Dativ.', 'Ich kann über eine Reise im Perfekt erzählen.']),
  ]);

export const a1k11: Chapter = {
  id: 'a1-k11', number: 11, title: 'Die Jacke gefällt mir!', theme: 'Kleidung, Kaufhaus, Meinungen, Berlin',
  grammar: 'welcher und dieser. Personalpronomen im Dativ. Verben mit Dativ. Partizip II trennbar und untrennbar.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a1k11-sprint', 'a1k11-memory', 'a1k11-satzbau', 'a1k11-artikel'],
  exam: [
    x(1, mcq('x1', 'Die Jacke gefällt ___. (ich)', ['mich', 'mir', 'ich'], 1)),
    x(1, mcq('x2', '___ Kleid nimmst du?', ['Welcher', 'Welches', 'Welchen'], 1)),
    x(1, mcq('x3', 'Die Schuhe ___ mir nicht.', ['passt', 'passen', 'passe'], 1)),
    x(3, gap('x4', ['Kann ich {{Ihnen}} helfen? (Sie)', 'Das Auto gehört {{ihm}}. (er)', 'Die Farbe steht {{dir}}. (du)'], { task: 'Pronomen im Dativ.' })),
    x(3, gap('x5', ['Wir haben Berlin {{besichtigt}}. (besichtigen)', 'Ich habe Obst {{eingekauft}}. (einkaufen)', 'Sie hat einen Brief {{bekommen}}. (bekommen)'], { task: 'Partizip II.' })),
    x(1, mcq('x6', 'Wo findet man Herrenschuhe?', ['EG', '1. Stock', '2. Stock'], 2),
      text('x-st1', '**Modehaus Krone**\nEG: Taschen, Schmuck, Kasse\n1. Stock: Damenmode\n2. Stock: Herrenmode und Herrenschuhe\n3. Stock: Kinder, Café\nHeute: Winterjacken 30 % billiger!', { kicker: 'Lesen' })),
    x(1, mcq('x7', 'Was ist heute billiger? (Text oben)', ['Taschen', 'Winterjacken', 'Kinderschuhe'], 1)),
    x(1, mcq('x8', 'Warum kauft die Frau den Rock nicht?', ['Er ist zu teuer.', 'Er passt nicht.', 'Die Farbe gefällt ihr nicht.'], 1),
      audio('x-st2', 'Hören: In der Umkleidekabine', [
        ['herrAdler', 'Und? Passt der Rock?'],
        ['elif', 'Nein, leider nicht. Er ist zu klein. Haben Sie ihn eine Nummer größer?'],
        ['herrAdler', 'Tut mir leid, in Größe 40 haben wir ihn nicht mehr.'],
        ['elif', 'Schade. Die Farbe gefällt mir so gut.'],
      ])),
    x(1, mcq('x9', 'Welche Größe sucht die Frau? (Hörtext oben)', ['38', '40', '42'], 1)),
    x(2, order('x10', ['Kann', 'ich', 'die Hose', 'anprobieren?'], { task: 'Bau die Frage.' })),
    x(1, mcq('x11', '„bekommen“ heißt auf Englisch:', ['to become', 'to receive', 'to come back'], 1)),
    x(1, mcq('x12', 'Was ist die Hauptstadt von Deutschland?', ['Bonn', 'Berlin', 'München'], 1)),
  ],
};

export const gamesA1k11: GameDef[] = [
  {
    id: 'a1k11-sprint', engine: 'sprint', title: 'mir oder mich?', blurb: 'Dativ oder Akkusativ? Schnell!', skill: 'Pronomen', tone: 'mint', chapter: 11, emoji: '⚡',
    rules: 'Du siehst einen Satz. Tippe auf das richtige Pronomen. Achtung: gefallen, passen, stehen, helfen und gehören brauchen den Dativ.', label: 'Welches Pronomen?',
    items: [
      { q: 'Die Jacke gefällt ___. (ich)', a: 'mir', wrong: ['mich', 'ich'] }, { q: 'Ich sehe ___. (du)', a: 'dich', wrong: ['dir', 'du'] },
      { q: 'Kannst du ___ helfen? (ich)', a: 'mir', wrong: ['mich', 'mein'] }, { q: 'Die Hose passt ___ nicht. (er)', a: 'ihm', wrong: ['ihn', 'er'] },
      { q: 'Ich rufe ___ an. (er)', a: 'ihn', wrong: ['ihm', 'er'] }, { q: 'Das Buch gehört ___. (sie, Singular)', a: 'ihr', wrong: ['sie', 'ihnen'] },
      { q: 'Die Farbe steht ___. (du)', a: 'dir', wrong: ['dich', 'du'] }, { q: 'Ich lade ___ ein. (ihr)', a: 'euch', wrong: ['ihr', 'euer'] },
      { q: 'Kann ich ___ helfen? (Sie)', a: 'Ihnen', wrong: ['Sie', 'Ihr'] }, { q: 'Schmeckt ___ die Suppe? (du)', a: 'dir', wrong: ['dich', 'du'] },
      { q: 'Er besucht ___. (wir)', a: 'uns', wrong: ['wir', 'unser'] }, { q: 'Das Kleid gefällt ___. (sie, Singular)', a: 'ihr', wrong: ['sie', 'ihm'] },
    ],
  },
  {
    id: 'a1k11-memory', engine: 'memory', title: 'Kleider-Memory', blurb: 'Kleidung und Bild: Finde die Paare.', skill: 'Kleidung', tone: 'lilac', chapter: 11, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Wort und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['die Hose', '👖'], ['das T-Shirt', '👕'], ['das Kleid', '👗'], ['die Jacke', '🧥'], ['der Schuh', '👟'], ['die Mütze', '🧢'], ['der Schal', '🧣'], ['die Socken', '🧦'], ['die Handschuhe', '🧤'], ['die Tasche', '👜']],
  },
  {
    id: 'a1k11-satzbau', engine: 'satzbau', title: 'Shopping-Baukasten', blurb: 'Bau Sätze im Kaufhaus.', skill: 'Satzbau', tone: 'sky', chapter: 11, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Die Jacke', 'gefällt', 'mir', 'sehr gut.'], hint: 'gefallen + Dativ' },
      { parts: ['Welche', 'Größe', 'haben', 'Sie?'], hint: 'welch- + Nomen' },
      { parts: ['Kann', 'ich', 'den Pullover', 'anprobieren?'], hint: 'Modalverb + Infinitiv' },
      { parts: ['Diese Hose', 'passt', 'mir', 'nicht.'], hint: 'passen + Dativ' },
      { parts: ['Wir', 'haben', 'Berlin', 'besichtigt.'], hint: 'untrennbar: ohne ge-' },
      { parts: ['Felix', 'hat', 'eine Jacke', 'gekauft.'], hint: 'Perfekt mit haben' },
      { parts: ['Das', 'ist', 'mir', 'zu teuer.'], hint: 'mir = für mich' },
      { parts: ['Wem', 'gehört', 'die', 'Tasche?'], hint: 'wem = Dativ-Frage' },
    ],
  },
  {
    id: 'a1k11-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Kleidung.', skill: 'Artikel', tone: 'rose', chapter: 11, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Pullover, das Kleid, die Hose, der Mantel, das Hemd, die Jacke, der Rock, das T-Shirt, die Mütze, der Schal, das Kaufhaus, die Größe, der Schuh, das Geschäft, die Tasche, der Gürtel, das Angebot, die Kasse'),
  },
];
