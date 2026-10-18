import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A2 Kapitel 9: Sport, Fans, Begeisterung und Enttäuschung, Vorschläge und Verabredungen.
// Grammar: Sätze verbinden mit deshalb und trotzdem, Verben mit Dativ und Akkusativ. Aussprache: r oder l.

export const glossaryA2k9: Record<string, GlossaryEntry> = {
  Wettkampf: { de: 'Ein Spiel oder Rennen, bei dem man gewinnen will.', en: 'competition' },
  Mannschaft: { de: 'Eine Gruppe, die zusammen spielt, zum Beispiel im Fußball.', en: 'team' },
  Fan: { de: 'Eine Person, die eine Mannschaft oder einen Star sehr liebt.', en: 'fan' },
  Begeisterung: { de: 'Große Freude über etwas.', en: 'enthusiasm' },
  Enttäuschung: { de: 'Das Gefühl, wenn etwas nicht so gut war wie erhofft.', en: 'disappointment' },
  Halbmarathon: { de: 'Ein Rennen über 21 Kilometer.', en: 'half marathon' },
  Ziel: { de: 'Hier: das Ende von einem Rennen.', en: 'finish line, goal' },
  trainieren: { de: 'Regelmäßig Sport machen, um besser zu werden.', en: 'to train' },
  deshalb: { de: 'Darum, aus diesem Grund.', en: 'therefore, that’s why' },
  trotzdem: { de: 'Obwohl etwas dagegen spricht, passiert es.', en: 'nevertheless, anyway' },
  Muskelkater: { de: 'Schmerzen in den Muskeln nach viel Sport.', en: 'sore muscles' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Sport frei!', 'butter', 8,
  ['das Kapitel kennenlernen', 'Sportarten benennen'], [
    overview('e-over', 'Kapitel 9: Sportlich, sportlich',
      'Machst du gern Sport oder schaust du lieber zu? In Kapitel 9 geht es um Sport und [[Fan|Fans]]. Du drückst [[Begeisterung]], Hoffnung und [[Enttäuschung]] aus, machst Vorschläge und verabredest dich zum Sport. Du verbindest Sätze mit [[deshalb]] und [[trotzdem]].\n\nAmara hat ein großes [[Ziel]]: Sie läuft ihren ersten [[Halbmarathon]]. Die ganze WG kommt als Fanclub mit.',
      'This chapter is about sports and fans: showing enthusiasm, hope and disappointment, making suggestions and arranging to do sports together. Grammar: linking sentences with deshalb (that’s why) and trotzdem (anyway), and verbs with a dative and an accusative object (Ich gebe dir den Ball).',
      ['über Sport sprechen', 'Begeisterung und Enttäuschung ausdrücken', 'Vorschläge machen und reagieren', 'Folgen und Widersprüche ausdrücken']),
    match('e-match', [['Fußball', '⚽'], ['Tennis', '🎾'], ['Schwimmen', '🏊'], ['Radfahren', '🚴'], ['Boxen', '🥊'], ['Handball', '🤾'], ['Skifahren', '⛷️'], ['Laufen', '🏃']], { task: 'Welche Sportart ist das?', taskEn: 'Match the sport to the picture.' }),
    sort('e-sort', ['Mannschaftssport', 'Einzelsport'], [['Fußball', 0], ['Tennis (Einzel)', 1], ['Volleyball', 0], ['Klettern', 1], ['Handball', 0], ['Joggen', 1]], { task: 'Spielt man im Team oder allein?', taskEn: 'Team sport or individual sport?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Wir sind Fans!', 'mint', 15,
  ['Begeisterung, Hoffnung und Enttäuschung ausdrücken', 'Kommentare verstehen'], [
    audio('t1-audio', 'Hören: Im Stadion', [
      ['herrLehmann', 'Komm schon, Plagwitz! Lauft! Lauft!'],
      ['felix', 'Herr Lehmann, ich wusste gar nicht, dass Sie Fußballfan sind.'],
      ['herrLehmann', 'Seit fünfzig Jahren, mein Junge! Eintracht Plagwitz ist mein Leben. Oh nein, nicht schon wieder!'],
      ['felix', 'Was ist passiert?'],
      ['herrLehmann', 'Tor für die anderen. Eins zu null. So ein Mist!'],
      ['felix', 'Keine Sorge, es sind noch zwanzig Minuten. Ich hoffe, dass sie noch ein Tor schießen.'],
      ['erzaehler', 'Zehn Minuten später.'],
      ['herrLehmann', 'Toooor! Eins zu eins! Wahnsinn! Das gibt’s doch nicht!'],
      ['felix', 'Super! Das war ein tolles Tor!'],
      ['erzaehler', 'Abpfiff. Das Spiel endet eins zu eins.'],
      ['herrLehmann', 'Unentschieden. Na ja, besser als verloren. Nächste Woche gewinnen wir!'],
    ], { task: 'Hör zu. Wie endet das Spiel?', taskEn: 'Listen. How does the game end? unentschieden = a draw.' }),
    mcq('t1-q1', 'Seit wann ist Herr Lehmann Fan?', ['seit fünf Jahren', 'seit fünfzig Jahren', 'seit gestern'], 1),
    mcq('t1-q2', 'Wie endet das Spiel?', ['1:0', '1:1', '2:1'], 1),
    sort('t1-sort', ['Begeisterung', 'Hoffnung', 'Enttäuschung'], [['Wahnsinn!', 0], ['Ich hoffe, dass sie gewinnen.', 1], ['So ein Mist!', 2], ['Super, das war toll!', 0], ['Hoffentlich schießen sie noch ein Tor.', 1], ['Schade, das war nichts.', 2]], { task: 'Welches Gefühl zeigt der Satz?', taskEn: 'Which feeling does the phrase express?' }),
    phrases('t1-phr', 'Gefühle beim Sport', {
      'Begeisterung': ['Wahnsinn! / Super! / Toll!', 'Das war ein tolles Spiel!', 'Das gibt’s doch nicht!'],
      'Hoffnung': ['Ich hoffe, dass …', 'Hoffentlich gewinnen sie!', 'Das schaffen sie noch!'],
      'Enttäuschung': ['So ein Mist!', 'Schade!', 'Das war ja gar nichts.'],
    }),
    text('t1-text', `**Kommentare zum Spiel Eintracht Plagwitz gegen SV Lindenau (1:1)**

**fussballfee:** Was für ein Spiel! Die zweite Halbzeit war fantastisch. Unser Torwart war der Beste.

**lindenau4ever:** So ein Mist! Wir waren besser, trotzdem haben wir nicht gewonnen.

**opa_lehmann:** Mein Nachbar war zum ersten Mal im Stadion. Er hat sich so gefreut, deshalb kommt er nächste Woche wieder mit!`, { kicker: 'Lesen', title: 'Kommentare', task: 'Lies die Kommentare.', taskEn: 'Read the fan comments after the game.' }),
    mcq('t1-q3', 'Wer ist enttäuscht?', ['fussballfee', 'lindenau4ever', 'opa_lehmann'], 1),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Deshalb und trotzdem', 'sky', 15,
  ['Folgen ausdrücken', 'Widersprüche ausdrücken', 'schwierige Texte verstehen'], [
    grammar('t2-gram', 'Sätze verbinden: deshalb und trotzdem', {
      intro: '**deshalb** zeigt eine **Folge**. **trotzdem** zeigt einen **Widerspruch**: Man erwartet etwas anderes. Beide stehen auf **Position 1**, dann kommt das **Verb**.',
      head: ['Satz 1', 'Position 1', 'Verb', 'Rest'],
      rows: [['Amara trainiert jeden Tag.', '**Deshalb**', '**ist**', 'sie sehr fit.'], ['Es regnet.', '**Trotzdem**', '**geht**', 'sie joggen.'], ['Felix hatte Muskelkater.', '**Deshalb**', '**ist**', 'er zu Hause geblieben.'], ['Sie war müde.', '**Trotzdem**', '**ist**', 'sie bis ins Ziel gelaufen.']],
      notes: ['Man kann **deshalb** und **trotzdem** auch in die Mitte stellen: *Sie ist **deshalb** sehr fit. Sie geht **trotzdem** joggen.*', 'Vergleiche: *weil* (Grund) ↔ *deshalb* (Folge): *Sie ist fit, **weil** sie trainiert. / Sie trainiert, **deshalb** ist sie fit.*'],
      en: 'deshalb = that’s why (a consequence). trotzdem = anyway, nevertheless (a contradiction). Both take position 1, followed directly by the verb. Compare weil (reason, verb at the end).',
    }),
    sort('t2-sort', ['deshalb (Folge)', 'trotzdem (Widerspruch)'], [['Es ist kalt. ___ trage ich eine Mütze.', 0], ['Es ist kalt. ___ trage ich keine Jacke.', 1], ['Ich habe Hunger. ___ esse ich.', 0], ['Ich habe Hunger. ___ esse ich nichts.', 1], ['Er ist krank. ___ bleibt er im Bett.', 0], ['Er ist krank. ___ geht er arbeiten.', 1]], { task: 'deshalb oder trotzdem?', taskEn: 'Sort: consequence (deshalb) or contradiction (trotzdem)?' }),
    gap('t2-gap', ['Ich habe keine Zeit. {{Deshalb}} gehe ich nicht ins Fitnessstudio.', 'Das Wetter war schlecht. {{Trotzdem}} haben wir Fußball gespielt.', 'Nele hat ein neues Rad. {{Deshalb}} fährt sie jetzt jeden Tag.', 'Felix hat nicht trainiert. {{Trotzdem}} hat er gewonnen.'],
      { bank: ['Deshalb', 'Trotzdem'], task: 'Ergänze deshalb oder trotzdem.', taskEn: 'Fill in deshalb or trotzdem.' }),
    order('t2-order', ['Es', 'regnet.', 'Trotzdem', 'gehe', 'ich', 'joggen.'], { task: 'Bau die Sätze.', taskEn: 'Build the sentences. After trotzdem comes the verb.' }),
    text('t2-text', `**Ein Ort für Sport: Das Leipziger Sportforum**

Das Sportforum in Leipzig ist eine der größten Sportanlagen in Deutschland. Schon in den 1950er-Jahren hat man hier trainiert. Viele Olympiasieger haben hier ihre Karriere begonnen. Deshalb nennen manche Leipziger es „die Fabrik der Champions“.

Heute treffen sich im Sportforum nicht nur Profis, sondern auch Hobbysportler. Es gibt eine große Schwimmhalle, eine Eishalle, Fußballplätze und eine Laufbahn. Die Anlage ist alt, trotzdem ist sie bei vielen beliebt. Die Stadt plant, sie in den nächsten Jahren zu renovieren.`,
      { kicker: 'Lesen', title: 'Ein schwieriger Text', task: 'Lies den Text. Du musst nicht jedes Wort verstehen.', taskEn: 'Read the text. You do not need to understand every word. Focus on the main information. Anlage = facility.' }),
    tip('t2-tip', 'Schwierige Texte verstehen', 'Lies einen schwierigen Text zuerst schnell: **Was ist das Thema?** Dann lies die Fragen. Dann such die Antworten im Text. Wörter wie **deshalb, trotzdem, aber, nicht nur … sondern auch** helfen dir, die Struktur zu verstehen.'),
    mcq('t2-q1', 'Warum heißt das Sportforum „Fabrik der Champions“?', ['Es ist eine alte Fabrik.', 'Viele Olympiasieger haben dort begonnen.', 'Man produziert dort Sportkleidung.'], 1),
    mcq('t2-q2', 'Wer trainiert heute im Sportforum?', ['nur Profis', 'Profis und Hobbysportler', 'nur Kinder'], 1),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Gibst du mir den Ball?', 'lilac', 15,
  ['Vorschläge machen und reagieren', 'sich verabreden', 'Verben mit Dativ und Akkusativ'], [
    grammar('t3-gram', 'Verben mit Dativ und Akkusativ', {
      intro: 'Einige Verben haben zwei Objekte: eine **Person im Dativ** und eine **Sache im Akkusativ**: geben, schenken, zeigen, schicken, erklären, bringen, empfehlen, leihen.',
      head: ['Subjekt', 'Verb', 'Dativ (Person)', 'Akkusativ (Sache)'],
      rows: [['Felix', 'gibt', '**seinem Freund**', '**den Ball**.'], ['Ich', 'schenke', '**dir**', '**eine Laufuhr**.'], ['Die Trainerin', 'erklärt', '**den Spielern**', '**die Regeln**.'], ['Kannst du', '', '**mir**', '**dein Rad** leihen?']],
      notes: ['Normalerweise: **Dativ vor Akkusativ**.', 'Aber wenn die Sache ein **Pronomen** ist, steht sie zuerst: *Ich gebe **ihn** dir.* (den Ball → ihn)'],
      en: 'Verbs like geben, schenken, zeigen take a person in the dative and a thing in the accusative. Usually dative first: Ich gebe dir den Ball. If the thing is a pronoun, it comes first: Ich gebe ihn dir.',
    }),
    gap('t3-gap', ['Kannst du {{mir}} den Ball geben? (ich)', 'Ich schenke {{dir}} ein Trikot. (du)', 'Die Trainerin zeigt {{uns}} die Übung. (wir)', 'Felix erklärt {{ihr}} die Regeln. (sie, Singular)', 'Wir schicken {{euch}} die Fotos. (ihr)'],
      { task: 'Ergänze das Pronomen im Dativ.', taskEn: 'Fill in the dative pronoun.' }),
    order('t3-order', ['Ich', 'gebe', 'dir', 'meine', 'Laufschuhe.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence: dative before accusative.' }),
    audio('t3-audio', 'Hören: Wollen wir zusammen Sport machen?', [
      ['nele', 'Amara, ich will auch mehr Sport machen. Hast du einen Vorschlag?'],
      ['amara', 'Wie wäre es mit Laufen? Wir könnten zusammen laufen, morgens um sechs.'],
      ['nele', 'Um sechs? Nein danke! Das ist mir viel zu früh.'],
      ['amara', 'Okay. Und was hältst du von Schwimmen? Im Sportforum ist abends die Halle offen.'],
      ['nele', 'Das ist eine gute Idee! Schwimmen mag ich. Wann denn?'],
      ['amara', 'Lass uns doch am Donnerstag gehen, um sieben.'],
      ['nele', 'Einverstanden. Kannst du mir eine Badekappe leihen? Ich habe keine.'],
      ['amara', 'Klar, ich bringe sie dir mit.'],
    ], { task: 'Hör zu. Was machen Nele und Amara zusammen?', taskEn: 'Listen. What sport do Nele and Amara agree on?' }),
    mcq('t3-q1', 'Warum will Nele nicht laufen?', ['Sie mag Laufen nicht.', 'Sechs Uhr ist ihr zu früh.', 'Sie hat keine Schuhe.'], 1),
    mcq('t3-q2', 'Wann gehen sie schwimmen?', ['Donnerstag um sieben', 'Dienstag um sechs', 'Samstag um sieben'], 0),
    phrases('t3-phr', 'Vorschläge machen und reagieren', {
      'Vorschlag': ['Wie wäre es mit …?', 'Was hältst du von …?', 'Wir könnten …', 'Lass uns doch …'],
      'Ja': ['Gute Idee!', 'Einverstanden.', 'Da bin ich dabei!'],
      'Nein': ['Das ist mir zu früh / zu teuer.', 'Ich habe keine Lust.', 'Lieber nicht. Wie wäre es mit …?'],
    }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 9: Der Halbmarathon', 'rose', 10,
  ['eine Geschichte hören', 'deshalb und trotzdem im Kontext'], [
    text('wg-intro', 'Sonntag, Leipzig-Halbmarathon. 21 Kilometer. Amara läuft, Nele und Felix stehen mit einem Plakat bei Kilometer 18: „Lauf, Amara, lauf!“', { kicker: 'Die Geschichte', en: 'Sunday, the Leipzig half marathon. Amara is running. Nele and Felix stand at kilometer 18 with a sign.' }),
    audio('wg-audio', 'Folge 9: Der Halbmarathon', [
      ['felix', 'Da ist sie! Amara! Los, Amara!'],
      ['nele', 'Oh nein, sie läuft so langsam. Sie hält sich das Bein.'],
      ['amara', 'Ich habe einen Krampf im Bein! Ich kann nicht mehr!'],
      ['nele', 'Doch, du kannst! Nur noch drei Kilometer! Hier, trink etwas.'],
      ['felix', 'Du hast ein halbes Jahr trainiert. Du schaffst das!'],
      ['erzaehler', 'Amara läuft weiter. Langsam, aber sie läuft.'],
      ['erzaehler', 'Zwanzig Minuten später, im Ziel.'],
      ['amara', 'Ich habe es geschafft! Zwei Stunden und zehn Minuten.'],
      ['nele', 'Du hattest einen Krampf. Trotzdem bist du bis ins Ziel gelaufen. Ich bin so stolz auf dich!'],
      ['felix', 'Ich habe ein Video gemacht. Ich schicke es Kenji nach Wien.'],
      ['amara', 'Schick es ihm. Aber erst morgen. Heute schlafe ich nur noch.'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story. Krampf = cramp.' }),
    mcq('wg-q1', 'Was hat Amara bei Kilometer 18?', ['einen Krampf im Bein', 'Durst', 'Kopfschmerzen'], 0),
    mcq('wg-q2', 'Wie lange hat Amara trainiert?', ['einen Monat', 'ein halbes Jahr', 'ein Jahr'], 1),
    mcq('wg-q3', 'Wie lange hat Amara für den Halbmarathon gebraucht?', ['1 Stunde 50', '2 Stunden 10', '3 Stunden'], 1),
    mcq('wg-q4', 'Wem schickt Felix das Video?', ['Lina', 'Kenji', 'Herrn Lehmann'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['deshalb, trotzdem', 'Dativ und Akkusativ'], [
    grammar('g-1', 'Grund, Folge, Widerspruch', {
      head: ['', 'Wort', 'Beispiel', 'Verb'],
      rows: [['Grund', '**weil**', 'Ich bleibe zu Hause, weil ich krank **bin**.', 'am Ende'], ['Folge', '**deshalb**', 'Ich bin krank. Deshalb **bleibe** ich zu Hause.', 'Position 2'], ['Widerspruch', '**trotzdem**', 'Ich bin krank. Trotzdem **gehe** ich zur Arbeit.', 'Position 2']],
      en: 'weil: reason, verb at the end. deshalb: consequence, verb next. trotzdem: contradiction, verb next.',
    }),
    mcq('g-q1', 'Ich habe Fieber. ___ bleibe ich im Bett.', ['Trotzdem', 'Deshalb', 'Weil'], 1),
    mcq('g-q2', 'Es ist spät. Trotzdem ___ noch.', ['ich arbeite', 'arbeite ich', 'arbeiten ich'], 1),
    mcq('g-q3', 'Kannst du ___ das Buch geben?', ['mich', 'mir', 'ich'], 1),
    mcq('g-q4', 'Der Ball? Ich gebe ___.', ['dir ihn', 'ihn dir', 'ihm dich'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['sich verabreden', 'Aussprache: r oder l'], [
    compose('u-comp', 'Lade eine Kollegin zum Tennis ein.', [
      ['Mach einen Vorschlag.', 'Make a suggestion.', ['Wie wäre', 'es mit', 'Tennis', 'am Samstag?']],
      ['Schlag eine Zeit vor.', 'Suggest a time.', ['Wir', 'könnten', 'um zehn Uhr', 'spielen.']],
      ['Biete ihr etwas an.', 'Offer her something.', ['Ich', 'kann', 'dir', 'einen Schläger leihen.']],
    ], { task: 'Bau die Nachricht.', taskEn: 'Build the message.' }),
    audio('u-aus', 'Aussprache: r oder l', [
      ['frauKlein', 'Beim l ist die Zungenspitze oben hinter den Zähnen: Lauf, laut, Ball, Ziel.'],
      ['frauKlein', 'Das r spricht man hinten im Hals: Rad, rennen, Training, Trikot.'],
      ['frauKlein', 'Hör den Unterschied: Rand, Land. Reise, leise. Rauch, Lauch.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. For l the tongue tip touches behind the teeth, for r the sound is made in the back of the throat.' }),
    sort('u-sort', ['r am Anfang', 'l am Anfang'], [['Rad', 0], ['Lauf', 1], ['rennen', 0], ['laut', 1], ['Reise', 0], ['leise', 1]], { task: 'r oder l?', taskEn: 'Sort the words by their first sound.' }),
    gap('u-gap', ['Wie wäre es {{mit}} Schwimmen?', 'Was {{hältst}} du von Tennis?', 'Lass {{uns}} doch joggen gehen!'], { bank: ['mit', 'hältst', 'uns'], task: 'Ergänze die Vorschläge.', taskEn: 'Complete the suggestions.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['die Mannschaft', 'Team', 'team'], ['das Tor', 'Punkt im Fußball', 'goal'], ['gewinnen', 'der Beste sein', 'to win'],
      ['verlieren', 'nicht gewinnen', 'to lose'], ['unentschieden', 'gleich viele Punkte', 'draw'], ['trainieren', 'regelmäßig üben', 'to train'],
      ['das Ziel', 'das Ende vom Rennen', 'finish line'], ['der Muskelkater', 'Schmerzen nach dem Sport', 'sore muscles'], ['deshalb', 'aus diesem Grund', 'that’s why'],
      ['trotzdem', 'aber es passiert doch', 'anyway'], ['Wie wäre es mit …?', 'Vorschlag', 'How about …?'], ['leihen', 'für kurze Zeit geben', 'to lend'],
    ]),
    phrases('w-x-phr', 'Vorschläge im Sport', {
      'vorschlagen': ['Wollen wir nicht lieber eine Radtour machen?', 'Kannst du auch am Sonntag um 14 Uhr?'],
      'reagieren': ['Super, das ist eine gute Idee.', 'Ja, da kann ich.', 'Leider geht es am Dienstag nicht.', 'Zum Reiten habe ich keine Lust.'],
      'beim Spiel': ['Tor!', 'Wahnsinn!', 'Schade, knapp verloren.'],
    }),
    match('w-x-match', [['an einem Kurs', 'teilnehmen'], ['ein Spiel', 'gewinnen'], ['ein Tor', 'schießen'], ['Fußball', 'spielen'], ['auf dem See', 'segeln'], ['im Winter', 'langlaufen']],
      { task: 'Sport-Verben', taskEn: 'Sport verbs. Match.' }),
    gap('w-x-gap', ['Der Trainer erklärt {{den}} Spielern die Regeln.', 'Amara leiht {{ihrer}} Freundin den Helm.', 'Es regnet, {{trotzdem}} joggt Felix.', 'Kenji hat Rückenschmerzen, {{deshalb}} macht er Yoga.'],
      { bank: ['den', 'ihrer', 'trotzdem', 'deshalb'], task: 'Ergänze.', taskEn: 'Fill in: dative + accusative, deshalb or trotzdem.' }),
    mcq('w-x-q1', 'Nele ist müde, ___ geht sie ins Training.', ['trotzdem', 'deshalb', 'weil'], 0, { task: 'deshalb oder trotzdem?', taskEn: 'Pick: deshalb (that is why) or trotzdem (anyway).' }),
    mcq('w-x-q2', 'Die Verkäuferin zeigt ___ die Schuhe.', ['die Kundin', 'der Kundin', 'den Kundin'], 1),
    order('w-x-order', ['Kannst', 'du', 'mir', 'deinen Helm', 'leihen?'], { task: 'Bau die Frage.', taskEn: 'Build the question.' }),
    text('w-story-tip', 'Optional lesen: die Geschichte **Das große Spiel**. Du findest sie unter Geschichten.', { kicker: 'Extra', en: 'Optional reading: “Das große Spiel” (The Big Game), under Stories.' }),
    checklist('w-check', ['Ich kann über Sport sprechen.', 'Ich kann Begeisterung, Hoffnung und Enttäuschung ausdrücken.', 'Ich kann deshalb und trotzdem benutzen.', 'Ich kann Vorschläge machen und reagieren.', 'Ich kenne Verben mit Dativ und Akkusativ.']),
  ]);

export const a2k9: Chapter = {
  id: 'a2-k9', number: 9, title: 'Sportlich, sportlich', theme: 'Sport, Fans, Gefühle, Vorschläge',
  grammar: 'Sätze verbinden: deshalb, trotzdem. Verben mit Dativ und Akkusativ.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a2k9-sprint', 'a2k9-memory', 'a2k9-satzbau', 'a2k9-artikel'],
  exam: [
    x(1, mcq('x1', 'Ich bin müde. ___ gehe ich früh schlafen.', ['Deshalb', 'Trotzdem', 'Weil'], 0)),
    x(1, mcq('x2', 'Es schneit. Trotzdem ___ wir Fahrrad.', ['fahren', 'wir fahren', 'fährt'], 0)),
    x(1, mcq('x3', 'Ich schenke ___ ein Buch. (du)', ['dich', 'dir', 'du'], 1)),
    x(4, gap('x4', ['Er hat viel trainiert. {{Deshalb}} hat er gewonnen.', 'Sie hatte Schmerzen. {{Trotzdem}} ist sie gelaufen.', 'Wir hatten kein Geld. {{Deshalb}} sind wir zu Hause geblieben.', 'Das Spiel war schlecht. {{Trotzdem}} waren die Fans glücklich.'], { task: 'deshalb oder trotzdem.' })),
    x(2, gap('x5', ['Gib {{mir}} bitte den Ball! (ich)', 'Ich zeige {{euch}} das Stadion. (ihr)'], { task: 'Dativpronomen.' })),
    x(1, mcq('x6', 'Was schlägt Tom vor?', ['Fußball spielen', 'Rad fahren', 'Schwimmen gehen'], 1),
      audio('x-st1', 'Hören: Eine Verabredung', [
        ['jonas', 'Hey Jule, das Wetter ist so schön. Wie wäre es mit einer Radtour am Samstag?'],
        ['jule', 'Gute Idee! Aber mein Rad ist kaputt.'],
        ['jonas', 'Kein Problem, ich kann dir das Rad von meiner Schwester leihen.'],
        ['jule', 'Super! Dann treffen wir uns um zehn am Bahnhof.'],
      ])),
    x(1, mcq('x7', 'Wessen Rad bekommt Jule? (Hörtext oben)', ['Toms Rad', 'das Rad von Toms Schwester', 'ein Leihrad'], 1)),
    x(1, mcq('x8', 'Wann ist das Training für Anfänger?', ['montags', 'mittwochs', 'samstags'], 1),
      text('x-st2', '**Laufgruppe „Fuchsbeine“**\nAnfänger: mittwochs 18 Uhr, 5 km, langsames Tempo\nFortgeschrittene: samstags 9 Uhr, 10 bis 15 km\nTreffpunkt: Eingang Clara-Zetkin-Park. Mitmachen ist kostenlos, bitte vorher per E-Mail anmelden.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was muss man vorher machen? (Text oben)', ['bezahlen', 'sich per E-Mail anmelden', 'Schuhe kaufen'], 1)),
    x(2, order('x10', ['Kannst', 'du', 'mir', 'dein Rad', 'leihen?'], { task: 'Bau die Frage.' })),
    x(1, mcq('x11', 'Deine Mannschaft hat verloren. Was sagst du?', ['Wahnsinn!', 'So ein Mist!', 'Herzlichen Glückwunsch!'], 1)),
    x(1, mcq('x12', 'Beide Mannschaften haben 2 Tore. Das Spiel ist …', ['gewonnen', 'unentschieden', 'verloren'], 1)),
  ],
};

export const gamesA2k9: GameDef[] = [
  {
    id: 'a2k9-sprint', engine: 'sprint', title: 'deshalb-trotzdem-Sprint', blurb: 'Folge oder Widerspruch? Schnell!', skill: 'deshalb und trotzdem', tone: 'mint', chapter: 9, emoji: '⚡',
    rules: 'Du siehst zwei Sätze. Tippe auf das Wort, das sie verbindet.', label: 'Was passt?',
    items: [
      { q: 'Es regnet. ___ nehme ich einen Schirm.', a: 'Deshalb', wrong: ['Trotzdem', 'Weil'] }, { q: 'Es regnet. ___ gehe ich ohne Schirm.', a: 'Trotzdem', wrong: ['Deshalb', 'Weil'] },
      { q: 'Er ist krank. ___ geht er zum Arzt.', a: 'Deshalb', wrong: ['Trotzdem', 'Dass'] }, { q: 'Er ist krank. ___ spielt er Fußball.', a: 'Trotzdem', wrong: ['Deshalb', 'Ob'] },
      { q: 'Ich habe Hunger. ___ koche ich.', a: 'Deshalb', wrong: ['Trotzdem', 'Wenn'] }, { q: 'Das Essen ist teuer. ___ bestelle ich es.', a: 'Trotzdem', wrong: ['Deshalb', 'Weil'] },
      { q: 'Sie trainiert viel. ___ ist sie fit.', a: 'Deshalb', wrong: ['Trotzdem', 'Ob'] }, { q: 'Sie hat nicht gelernt. ___ hat sie bestanden.', a: 'Trotzdem', wrong: ['Deshalb', 'Dass'] },
      { q: 'Der Bus kommt nicht. ___ gehe ich zu Fuß.', a: 'Deshalb', wrong: ['Trotzdem', 'Weil'] }, { q: 'Ich bin müde. ___ arbeite ich weiter.', a: 'Trotzdem', wrong: ['Deshalb', 'Wenn'] },
      { q: 'Wir haben gewonnen. ___ feiern wir.', a: 'Deshalb', wrong: ['Trotzdem', 'Ob'] }, { q: 'Wir haben verloren. ___ feiern wir.', a: 'Trotzdem', wrong: ['Deshalb', 'Dass'] },
    ],
  },
  {
    id: 'a2k9-memory', engine: 'memory', title: 'Sport-Memory', blurb: 'Sportart und Bild: Finde die Paare.', skill: 'Sport', tone: 'lilac', chapter: 9, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist eine Sportart und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['Fußball', '⚽'], ['Tennis', '🎾'], ['Schwimmen', '🏊'], ['Radfahren', '🚴'], ['Boxen', '🥊'], ['Handball', '🤾'], ['Skifahren', '⛷️'], ['Basketball', '🏀'], ['Eishockey', '🏒'], ['Reiten', '🏇']],
  },
  {
    id: 'a2k9-satzbau', engine: 'satzbau', title: 'Sport-Baukasten', blurb: 'Bau Sätze mit deshalb, trotzdem und zwei Objekten.', skill: 'Satzbau', tone: 'sky', chapter: 9, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Deshalb', 'ist', 'sie', 'sehr fit.'], hint: 'deshalb, dann Verb' },
      { parts: ['Trotzdem', 'geht', 'er', 'joggen.'], hint: 'trotzdem, dann Verb' },
      { parts: ['Ich', 'gebe', 'dir', 'den Ball.'], hint: 'Dativ vor Akkusativ' },
      { parts: ['Ich', 'gebe', 'ihn', 'dir.'], hint: 'Pronomen: Akkusativ vor Dativ' },
      { parts: ['Die Trainerin', 'erklärt', 'uns', 'die Regeln.'], hint: 'Dativ vor Akkusativ' },
      { parts: ['Wie wäre', 'es', 'mit', 'Schwimmen?'], hint: 'Vorschlag' },
      { parts: ['Ich', 'hoffe,', 'dass', 'wir', 'gewinnen.'], hint: 'dass: Verb am Ende' },
      { parts: ['Lass', 'uns', 'doch', 'Tennis spielen!'], hint: 'Vorschlag mit lass uns' },
    ],
  },
  {
    id: 'a2k9-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Sport.', skill: 'Artikel', tone: 'rose', chapter: 9, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Ball, das Tor, die Mannschaft, der Fan, das Stadion, die Halbzeit, der Torwart, das Spiel, die Laufbahn, der Wettkampf, das Training, die Trainerin, der Schiedsrichter, das Trikot, die Medaille, der Muskelkater, das Ziel, die Niederlage'),
  },
];
