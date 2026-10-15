import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A1 Kapitel 4: Lebensmittel, Einkaufen, Mengen und Preise, Essgewohnheiten.
// Grammar: Akkusativ, mögen und möchten. Aussprache: ä, ö, ü.

export const glossaryA1k4: Record<string, GlossaryEntry> = {
  Lebensmittel: { de: 'Alles, was man essen und trinken kann.', en: 'food, groceries' },
  Einkaufszettel: { de: 'Ein Zettel. Darauf steht, was man kaufen will.', en: 'shopping list' },
  Frühstück: { de: 'Das Essen am Morgen.', en: 'breakfast' },
  Mittagessen: { de: 'Das Essen am Mittag.', en: 'lunch' },
  Abendessen: { de: 'Das Essen am Abend.', en: 'dinner' },
  möchten: { de: 'Höflich sagen, was man will. „Ich möchte einen Kaffee.“', en: 'would like' },
  mögen: { de: 'Etwas gut finden. „Ich mag Käse.“', en: 'to like' },
  Packung: { de: 'Eine Box aus Papier oder Plastik, zum Beispiel für Reis.', en: 'packet, box' },
  Flasche: { de: 'Darin ist Wasser, Saft oder Wein.', en: 'bottle' },
  kosten: { de: 'Einen Preis haben. „Das Brot kostet 3 Euro.“', en: 'to cost' },
  Angebot: { de: 'Ein Produkt ist heute billiger als normal.', en: 'special offer' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Hunger?', 'butter', 8,
  ['das Kapitel kennenlernen', 'Lebensmittel benennen'], [
    overview('e-over', 'Kapitel 4: Guten Appetit!',
      'In Kapitel 4 geht es ums Essen. Du lernst viele [[Lebensmittel]]: Brot, Käse, Obst, Gemüse. Du gehst einkaufen, fragst nach Preisen und sagst, was du [[mögen|magst]] und was du [[möchten|möchtest]]. Du sprichst über [[Frühstück]], [[Mittagessen]] und [[Abendessen]].\n\nIn der WG kocht Kenji. Aber der Kühlschrank ist fast leer.',
      'This chapter is about food: groceries, shopping, prices and quantities, and what you eat for breakfast, lunch and dinner. Grammar: the accusative case (den, einen, keinen) and the verbs mögen (to like) and möchten (would like). Pronunciation: ä, ö, ü.',
      ['Lebensmittel nennen', 'einkaufen und nach Preisen fragen', 'sagen, was man mag und möchte', 'über Essgewohnheiten sprechen']),
    match('e-match', [['das Brot', '🍞'], ['der Käse', '🧀'], ['der Apfel', '🍎'], ['die Tomate', '🍅'], ['das Ei', '🥚'], ['die Milch', '🥛'], ['der Fisch', '🐟'], ['die Kartoffel', '🥔']],
      { task: 'Was ist das?', taskEn: 'Match the food to the picture.' }),
    sort('e-sort', ['Obst', 'Gemüse', 'Getränke'], [['der Apfel', 0], ['die Banane', 0], ['die Tomate', 1], ['die Karotte', 1], ['der Saft', 2], ['das Wasser', 2], ['die Orange', 0], ['die Zwiebel', 1], ['der Kaffee', 2]],
      { task: 'Obst, Gemüse oder Getränk?', taskEn: 'Fruit, vegetable or drink?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Was isst du gern?', 'mint', 15,
  ['über Essen sprechen', 'mögen', 'Essgewohnheiten'], [
    text('t1-text', `**Kenji:** Zum Frühstück esse ich Reis und Miso-Suppe. Das ist typisch in Japan. Ich trinke grünen Tee.

**Amara:** Ich frühstücke nicht viel. Ich trinke einen Kaffee und esse eine Banane. Mittags esse ich in der Kantine im Krankenhaus.

**Felix:** Ich mag Semmeln mit Marmelade. Semmel ist österreichisch für Brötchen. Am Abend koche ich gern Nudeln.

**Nele:** Ich esse kein Fleisch. Ich bin Vegetarierin. Ich mag Müsli mit Obst und Joghurt.`,
      { kicker: 'Lesen', title: 'Was isst die WG zum Frühstück?', task: 'Lies die Texte.', taskEn: 'Read what each roommate eats.' }),
    match('t1-match', [['Kenji', 'Reis und Suppe'], ['Amara', 'Kaffee und eine Banane'], ['Felix', 'Semmeln mit Marmelade'], ['Nele', 'Müsli mit Obst']], { task: 'Wer frühstückt was?', taskEn: 'Who eats what for breakfast?' }),
    mcq('t1-q1', 'Was isst Nele nicht?', ['Obst', 'Fleisch', 'Joghurt'], 1),
    mcq('t1-q2', 'Was ist eine **Semmel**?', ['ein Brötchen', 'eine Suppe', 'ein Kaffee'], 0),
    grammar('t1-gram', 'Das Verb mögen', {
      head: ['', 'mögen'],
      rows: [['ich', '**mag**'], ['du', '**magst**'], ['er/sie/es', '**mag**'], ['wir', 'mögen'], ['ihr', 'mögt'], ['sie/Sie', 'mögen']],
      notes: ['*Ich **mag** Käse.* (mögen + Nomen)', '*Ich esse **gern** Käse.* (Verb + gern)'],
      en: 'mögen = to like (with a noun). ich mag, du magst, er mag. For activities, use verb + gern.',
    }),
    gap('t1-gap', ['Ich {{mag}} Schokolade.', 'Du {{magst}} keinen Fisch.', 'Nele {{mag}} Müsli.', 'Wir {{mögen}} Pizza.'],
      { task: 'Ergänze mögen.', taskEn: 'Fill in the right form of mögen.' }),
    phrases('t1-phr', 'Über Essen sprechen', {
      'Ich mag …': ['Ich mag Käse.', 'Ich esse gern Nudeln.', 'Ich trinke gern Tee.'],
      'Ich mag … nicht': ['Ich mag keine Tomaten.', 'Ich esse nicht gern Fisch.', 'Ich esse kein Fleisch.'],
      'Lecker!': ['Das schmeckt gut!', 'Lecker!', 'Guten Appetit!'],
    }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Einkaufen', 'sky', 15,
  ['im Laden einkaufen', 'nach Preisen fragen', 'Mengen angeben'], [
    grammar('t2-mengen', 'Mengen und Verpackungen', {
      head: ['Menge', 'Beispiel'],
      rows: [['ein Kilo (kg)', 'ein Kilo Äpfel'], ['ein Pfund (500 g)', 'ein Pfund Tomaten'], ['100 Gramm', '100 Gramm Käse'], ['ein Liter', 'ein Liter Milch'], ['eine Flasche', 'eine Flasche Wasser'], ['eine Packung', 'eine Packung Reis'], ['ein Becher', 'ein Becher Joghurt'], ['ein Stück', 'ein Stück Kuchen']],
      notes: ['Nach der Menge kommt das Nomen **ohne Artikel**: *ein Kilo Äpfel*.'],
      en: 'Quantities: no article and no "of" after the amount. ein Kilo Äpfel = a kilo of apples.',
    }),
    match('t2-match', [['eine Flasche', 'Wasser'], ['ein Kilo', 'Kartoffeln'], ['eine Packung', 'Nudeln'], ['ein Becher', 'Joghurt'], ['100 Gramm', 'Käse'], ['ein Stück', 'Kuchen']], { task: 'Was passt?', taskEn: 'Match the quantity to the food.' }),
    audio('t2-audio', 'Hören: Auf dem Markt', [
      ['herrAdler', 'Guten Tag! Was darf es sein?'],
      ['amara', 'Guten Tag. Ich möchte ein Kilo Tomaten, bitte.'],
      ['herrAdler', 'Gern. Noch etwas?'],
      ['amara', 'Was kosten die Äpfel?'],
      ['herrAdler', 'Die Äpfel kosten zwei Euro fünfzig das Kilo. Heute im Angebot.'],
      ['amara', 'Dann nehme ich auch ein Kilo Äpfel. Das ist alles.'],
      ['herrAdler', 'Das macht zusammen fünf Euro zwanzig.'],
      ['amara', 'Hier, bitte. Zehn Euro.'],
      ['herrAdler', 'Und vier Euro achtzig zurück. Danke und schönen Tag!'],
    ], { task: 'Hör zu. Was kauft Amara?', taskEn: 'Listen. What does Amara buy and how much does it cost?' }),
    mcq('t2-q1', 'Was kauft Amara?', ['Tomaten und Äpfel', 'Tomaten und Kartoffeln', 'nur Äpfel'], 0),
    mcq('t2-q2', 'Was kostet ein Kilo Äpfel?', ['2,50 €', '5,20 €', '4,80 €'], 0),
    mcq('t2-q3', 'Wie viel Geld bekommt Amara zurück?', ['5,20 €', '4,80 €', '10 €'], 1),
    tip('t2-tip', 'Preise sagen', '**2,50 €** sagt man: *zwei Euro fünfzig*.\n\n**0,99 €** sagt man: *neunundneunzig Cent*.\n\nIn der Schweiz bezahlt man mit Franken (CHF), nicht mit Euro.'),
    phrases('t2-phr', 'Im Laden', {
      'Verkäufer': ['Was darf es sein?', 'Noch etwas?', 'Das macht 5,20 Euro.'],
      'Kunde': ['Ich möchte …, bitte.', 'Was kostet …? / Was kosten …?', 'Das ist alles, danke.'],
    }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Ich möchte einen Kaffee', 'lilac', 15,
  ['der Akkusativ', 'möchten', 'einen Einkaufszettel schreiben'], [
    grammar('t3-gram', 'Der Akkusativ', {
      intro: 'Viele Verben brauchen ein Objekt im Akkusativ: **haben, möchten, kaufen, essen, trinken, nehmen, brauchen**. Nur der **maskuline** Artikel ändert sich!',
      head: ['', 'Nominativ', 'Akkusativ'],
      rows: [['maskulin', 'der / ein / kein Apfel', '**den / einen / keinen** Apfel'], ['neutral', 'das / ein / kein Ei', 'das / ein / kein Ei'], ['feminin', 'die / eine / keine Banane', 'die / eine / keine Banane'], ['Plural', 'die / – / keine Äpfel', 'die / – / keine Äpfel']],
      notes: ['*Der Kaffee ist heiß.* (Nominativ)', '*Ich möchte **einen** Kaffee.* (Akkusativ)'],
      en: 'The accusative is the direct object (what you have, buy, want). Only masculine articles change: der → den, ein → einen, kein → keinen.',
    }),
    gap('t3-gap', ['Ich möchte {{einen}} Tee. (der Tee)', 'Wir brauchen {{eine}} Flasche Milch. (die Flasche)', 'Hast du {{einen}} Apfel? (der Apfel)', 'Kenji kauft {{den}} Käse. (der Käse)', 'Ich habe {{keinen}} Hunger. (der Hunger)', 'Nele isst {{ein}} Ei. (das Ei)'],
      { task: 'Akkusativ: Ergänze den Artikel.', taskEn: 'Accusative: fill in the article.' }),
    grammar('t3-moechte', 'möchten', {
      head: ['', 'möchten'],
      rows: [['ich', 'möchte'], ['du', 'möchtest'], ['er/sie/es', 'möchte'], ['wir', 'möchten'], ['ihr', 'möchtet'], ['sie/Sie', 'möchten']],
      notes: ['**möchten** ist höflicher als **wollen**. Man benutzt es beim Einkaufen und im Café.'],
      en: 'möchten = would like. Use it when ordering or shopping. ich möchte, du möchtest, er möchte (no -t!).',
    }),
    sort('t3-sort', ['Nominativ', 'Akkusativ'], [['Der Apfel ist rot.', 0], ['Ich esse den Apfel.', 1], ['Ein Kaffee kostet 3 Euro.', 0], ['Ich möchte einen Kaffee.', 1], ['Der Käse ist lecker.', 0], ['Wir kaufen keinen Käse.', 1]],
      { task: 'Nominativ oder Akkusativ?', taskEn: 'Sort the sentences: is the masculine noun the subject (nominative) or the object (accusative)?' }),
    text('t3-zettel', '**Einkaufszettel**\n1 Liter Milch\n6 Eier\n500 g Nudeln\n1 Kopf Salat\n1 Flasche Olivenöl\nKaffee!!!', { kicker: 'Lesen', title: 'Neles Zettel', task: 'Lies den Einkaufszettel.', taskEn: 'Read the shopping list.' }),
    mcq('t3-q1', 'Wie viele Eier braucht Nele?', ['sechs', 'eins', 'fünfhundert'], 0),
    mcq('t3-q2', 'Was ist sehr wichtig für Nele?', ['Salat', 'Kaffee', 'Milch'], 1),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 4: Der leere Kühlschrank', 'rose', 10,
  ['eine Geschichte hören', 'Einkaufen planen'], [
    text('wg-intro', 'Kenji möchte für alle kochen. Er öffnet den Kühlschrank. Er ist fast leer.', { kicker: 'Die Geschichte', en: 'Kenji wants to cook for everyone. He opens the fridge. It is almost empty.' }),
    audio('wg-audio', 'Folge 4: Der leere Kühlschrank', [
      ['kenji', 'Hm. Wir haben keine Eier, keinen Reis und kein Gemüse.'],
      ['nele', 'Wir haben noch einen Joghurt. Und Ketchup.'],
      ['kenji', 'Mit Joghurt und Ketchup kann ich nicht kochen! Ich gehe einkaufen.'],
      ['amara', 'Ich komme mit. Was brauchst du?'],
      ['kenji', 'Ein Kilo Reis, sechs Eier, eine Zwiebel, Karotten und Tofu für Nele.'],
      ['felix', 'Und Bier! Kauft ihr auch Bier?'],
      ['amara', 'Felix! Komm doch mit und trag die Flaschen!'],
      ['felix', 'Oh. Äh … Ich muss … Gitarre üben. Tschüss!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story.' }),
    mcq('wg-q1', 'Was gibt es noch im Kühlschrank?', ['Eier und Reis', 'Joghurt und Ketchup', 'Gemüse'], 1),
    mcq('wg-q2', 'Warum kauft Kenji Tofu?', ['Für Nele. Sie isst kein Fleisch.', 'Er mag Tofu.', 'Tofu ist im Angebot.'], 0),
    mcq('wg-q3', 'Was macht Felix?', ['Er geht einkaufen.', 'Er trägt die Flaschen.', 'Er geht weg.'], 2),
    compose('wg-comp', 'Schreib den Einkaufszettel für Kenji als Sätze:', [
      ['Reis', 'rice', ['Wir', 'brauchen', 'ein Kilo', 'Reis.']],
      ['Eier', 'eggs', ['Wir', 'brauchen', 'sechs', 'Eier.']],
      ['eine Zwiebel', 'an onion', ['Kenji', 'möchte', 'eine', 'Zwiebel.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences.' }),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Akkusativ', 'mögen und möchten'], [
    grammar('g-1', 'Artikel im Akkusativ', {
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [['bestimmt', '**den**', 'das', 'die', 'die'], ['unbestimmt', '**einen**', 'ein', 'eine', '–'], ['Negation', '**keinen**', 'kein', 'keine', 'keine']],
      en: 'Only masculine changes in the accusative: den, einen, keinen.',
    }),
    grammar('g-2', 'mögen oder möchten?', {
      head: ['', 'Bedeutung', 'Beispiel'],
      rows: [['mögen', 'immer, allgemein', 'Ich **mag** Kaffee. (I like coffee.)'], ['möchten', 'jetzt, ein Wunsch', 'Ich **möchte** einen Kaffee. (I would like a coffee.)']],
      en: 'mögen = to like in general. möchten = to want something now, politely.',
    }),
    mcq('g-q1', 'Im Café: „Ich ___ einen Tee, bitte.“', ['mag', 'möchte', 'mögen'], 1),
    mcq('g-q2', '„Ich habe ___ Hunger.“', ['kein', 'keine', 'keinen'], 2),
    mcq('g-q3', '„Wir kaufen ___ Tomaten.“ (Plural, ohne Artikel)', ['Tomaten', 'eine Tomaten', 'einen Tomaten'], 0),
    gap('g-gap', ['Ich nehme {{den}} Fisch. (der)', 'Möchtest du {{einen}} Saft? (ein)', 'Wir haben {{keine}} Milch. (keine)', 'Er isst {{kein}} Fleisch. (kein)'], { task: 'Ergänze.', taskEn: 'Fill in the accusative article.' }),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['einkaufen üben', 'Aussprache: ä, ö, ü'], [
    compose('u-comp', 'Du bist auf dem Markt.', [
      ['Grüß den Verkäufer.', 'Greet the seller.', ['Hallo,', 'guten', 'Tag!']],
      ['Sag, was du möchtest.', 'Say what you would like.', ['Ich', 'möchte', 'ein Kilo', 'Kartoffeln.']],
      ['Frag nach dem Preis.', 'Ask the price.', ['Was', 'kostet', 'der Käse?']],
      ['Sag, dass das alles ist.', 'Say that is all.', ['Das', 'ist', 'alles,', 'danke.']],
    ], { task: 'Bau das Gespräch.', taskEn: 'Build your part of the conversation.' }),
    audio('u-aus', 'Aussprache: ä, ö, ü', [
      ['frauKlein', 'Hör gut zu. a und ä: der Apfel, die Äpfel. Ä klingt wie e.'],
      ['frauKlein', 'o und ö: das Brot, die Brötchen. Für ö sag e und mach die Lippen rund.'],
      ['frauKlein', 'u und ü: der Zucker, das Gemüse. Für ü sag i und mach die Lippen rund.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. For ö say "e" with round lips, for ü say "i" with round lips.' }),
    match('u-match', [['der Apfel', 'die Äpfel'], ['das Brot', 'die Brötchen'], ['der Saft', 'die Säfte'], ['die Wurst', 'die Würste']], { task: 'Singular und Plural mit Umlaut', taskEn: 'Match singular and plural.' }),
    order('u-order', ['Was', 'kosten', 'die', 'Bananen?'], { task: 'Bau die Frage.', taskEn: 'Build the question.' }),
    mcq('u-q1', '„Ich ___ keinen Fisch.“', ['mag', 'mögen', 'magst'], 0),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['das Brot', 'man isst es zum Frühstück', 'bread'], ['das Brötchen', 'kleines Brot', 'bread roll'], ['der Käse', 'aus Milch, gelb', 'cheese'],
      ['das Obst', 'Äpfel, Bananen …', 'fruit'], ['das Gemüse', 'Tomaten, Karotten …', 'vegetables'], ['das Fleisch', 'Nele isst es nicht', 'meat'],
      ['die Flasche', 'für Wasser oder Saft', 'bottle'], ['das Kilo', '1000 Gramm', 'kilo'], ['kosten', 'einen Preis haben', 'to cost'],
      ['mögen', 'gut finden', 'to like'], ['möchten', 'höflich wollen', 'would like'], ['das Frühstück', 'Essen am Morgen', 'breakfast'],
    ]),
    match('w-extra-food', [['das Brot', 'bread'], ['der Käse', 'cheese'], ['das Obst', 'fruit'], ['das Gemüse', 'vegetables'], ['die Milch', 'milk'], ['das Wasser', 'water']],
      { task: 'Lebensmittel', taskEn: 'Food words.' }),
    gap('w-extra-gap', ['Ich möchte {{einen}} Apfel.', 'Ich mag {{keinen}} Fisch.', 'Was {{kostet}} das Brot?', 'Ein Kilo Tomaten, {{bitte}}.'] ,
      { bank: ['einen', 'keinen', 'kostet', 'bitte'], task: 'Einkaufen', taskEn: 'Shopping.' }),
    mcq('w-extra-q1', '„Ich ___ gern Pizza.“', ['möchte', 'mag', 'muss'], 1),
    mcq('w-extra-q2', '„Ich ___ einen Kaffee, bitte.“', ['mag', 'möchte', 'bin'], 1),
    text('w-story-tip', 'Optional lesen: die Geschichte **Einkaufen** wiederholt Wörter aus diesem Kapitel.', { kicker: 'Extra', en: 'Optional reading: the story “Einkaufen” revisits this chapter’s words.' }),
    checklist('w-check', ['Ich kann Lebensmittel nennen.', 'Ich kann einkaufen und nach Preisen fragen.', 'Ich kann sagen, was ich mag und was ich möchte.', 'Ich kenne den Akkusativ: den, einen, keinen.', 'Ich kann ä, ö, ü aussprechen.']),
    mcq('w-q1', 'Was sagt der Verkäufer?', ['Was darf es sein?', 'Was möchtest du sein?', 'Was kostest du?'], 0, { task: 'Letzter Check', taskEn: 'Last check before the exam.' }),
  ]);

export const a1k4: Chapter = {
  id: 'a1-k4', number: 4, title: 'Guten Appetit!', theme: 'Lebensmittel, Einkaufen, Preise, Essgewohnheiten',
  grammar: 'Akkusativ. mögen und möchten.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a1k4-sprint', 'a1k4-memory', 'a1k4-satzbau', 'a1k4-artikel'],
  exam: [
    x(1, mcq('x1', '„Ich möchte ___ Kaffee.“', ['ein', 'einen', 'eine'], 1)),
    x(1, mcq('x2', '„Wir haben ___ Brot.“', ['keinen', 'kein', 'keine'], 1)),
    x(1, mcq('x3', '„Du ___ Schokolade.“ (mögen)', ['magst', 'mag', 'mögst'], 0)),
    x(4, gap('x4', ['Ich kaufe {{den}} Fisch. (der)', 'Er möchte {{eine}} Banane. (eine)', 'Hast du {{einen}} Apfel? (ein)', 'Sie isst {{keinen}} Käse. (kein)'], { task: 'Ergänze den Artikel im Akkusativ.' })),
    x(1, mcq('x5', 'Was passt? „eine ___ Wasser“', ['Packung', 'Flasche', 'Kilo'], 1)),
    x(1, mcq('x6', 'Was kostet der Käse?', ['1,99 €', '2,49 €', '0,89 €'], 1),
      text('x-st1', '**Angebote der Woche**\nBananen: 1 kg 1,99 €\nGouda-Käse: 200 g 2,49 €\nMilch: 1 Liter 0,89 €\nBrötchen: 6 Stück 1,50 €', { kicker: 'Lesen' })),
    x(1, mcq('x7', 'Wie viele Brötchen bekommt man für 1,50 €? (Text oben)', ['eins', 'sechs', 'zehn'], 1)),
    x(1, mcq('x8', 'Was kauft der Mann?', ['Brot und Wurst', 'Brötchen und Käse', 'Kuchen und Kaffee'], 1),
      audio('x-st2', 'Hören: In der Bäckerei', [
        ['priya', 'Guten Morgen! Was darf es sein?'],
        ['seppi', 'Grüß Gott! Vier Brötchen, bitte. Und haben Sie auch Käse?'],
        ['priya', 'Ja, wir haben Bergkäse. Wie viel möchten Sie?'],
        ['seppi', 'Zweihundert Gramm, bitte.'],
        ['priya', 'Das macht sechs Euro dreißig.'],
      ])),
    x(1, mcq('x9', 'Wie viel kostet alles? (Hörtext oben)', ['6,30 €', '3,60 €', '6,13 €'], 0)),
    x(2, order('x10', ['Ich', 'möchte', 'ein Kilo', 'Äpfel.'], { task: 'Bau den Satz.' })),
    x(1, mcq('x11', 'Was isst man zum Frühstück? Was passt nicht?', ['Müsli', 'Brötchen', 'Abendessen'], 2)),
    x(1, mcq('x12', '„Grüß Gott“ hört man oft in …', ['Hamburg', 'Bayern und Österreich', 'Berlin'], 1)),
  ],
};

export const gamesA1k4: GameDef[] = [
  {
    id: 'a1k4-sprint', engine: 'sprint', title: 'Akkusativ-Sprint', blurb: 'den, einen oder keinen? 60 Sekunden!', skill: 'Akkusativ', tone: 'mint', chapter: 4, emoji: '⚡',
    rules: 'Du siehst einen Satz. Tippe auf den richtigen Artikel. Achtung: Nur maskulin ändert sich!', label: 'Welcher Artikel?',
    items: [
      { q: 'Ich möchte ___ Kaffee. (ein)', a: 'einen', wrong: ['ein', 'eine'] }, { q: 'Ich esse ___ Ei. (ein)', a: 'ein', wrong: ['einen', 'eine'] },
      { q: 'Wir kaufen ___ Milch. (die)', a: 'die', wrong: ['den', 'das'] }, { q: 'Hast du ___ Apfel? (ein)', a: 'einen', wrong: ['ein', 'eine'] },
      { q: 'Ich habe ___ Hunger. (kein)', a: 'keinen', wrong: ['kein', 'keine'] }, { q: 'Er nimmt ___ Käse. (der)', a: 'den', wrong: ['der', 'dem'] },
      { q: 'Sie trinkt ___ Wasser. (das)', a: 'das', wrong: ['den', 'die'] }, { q: 'Ich brauche ___ Flasche. (eine)', a: 'eine', wrong: ['einen', 'ein'] },
      { q: 'Wir haben ___ Brot. (kein)', a: 'kein', wrong: ['keinen', 'keine'] }, { q: 'Ich möchte ___ Tee. (ein)', a: 'einen', wrong: ['ein', 'eine'] },
      { q: 'Er kauft ___ Tomaten. (die)', a: 'die', wrong: ['den', 'der'] }, { q: 'Ich esse ___ Fisch. (kein)', a: 'keinen', wrong: ['kein', 'keine'] },
    ],
  },
  {
    id: 'a1k4-memory', engine: 'memory', title: 'Markt-Memory', blurb: 'Lebensmittel und Bild: Finde die Paare.', skill: 'Lebensmittel', tone: 'lilac', chapter: 4, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Wort und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['das Brot', '🍞'], ['der Käse', '🧀'], ['der Apfel', '🍎'], ['die Tomate', '🍅'], ['das Ei', '🥚'], ['die Milch', '🥛'], ['der Fisch', '🐟'], ['die Banane', '🍌'], ['die Karotte', '🥕'], ['der Kaffee', '☕']],
  },
  {
    id: 'a1k4-satzbau', engine: 'satzbau', title: 'Einkaufs-Baukasten', blurb: 'Bau Sätze für den Markt.', skill: 'Einkaufen', tone: 'sky', chapter: 4, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Ich', 'möchte', 'einen', 'Kaffee.'], hint: 'möchten + Akkusativ' },
      { parts: ['Was', 'kostet', 'der', 'Käse?'], hint: 'W-Frage' },
      { parts: ['Wir', 'brauchen', 'sechs', 'Eier.'], hint: 'Verb auf Position 2' },
      { parts: ['Nele', 'isst', 'kein', 'Fleisch.'], hint: 'kein + Nomen' },
      { parts: ['Magst', 'du', 'Tomaten?'], hint: 'Ja/Nein-Frage' },
      { parts: ['Das', 'macht', 'fünf Euro', 'zwanzig.'], hint: 'Preis' },
      { parts: ['Zum Frühstück', 'esse', 'ich', 'Müsli.'], hint: 'Verb auf Position 2' },
      { parts: ['Ich', 'habe', 'keinen', 'Hunger.'], hint: 'keinen: maskulin Akkusativ' },
    ],
  },
  {
    id: 'a1k4-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Essen und Trinken.', skill: 'Artikel', tone: 'rose', chapter: 4, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Apfel, das Brot, die Milch, der Käse, das Ei, die Banane, der Fisch, das Wasser, die Tomate, der Saft, das Gemüse, die Kartoffel, der Kaffee, das Fleisch, die Butter, der Reis, das Brötchen, die Flasche'),
  },
];
