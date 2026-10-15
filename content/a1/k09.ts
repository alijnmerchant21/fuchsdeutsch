import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A1 Kapitel 9: Wohnung, Zimmer, Möbel, Farben, Wohnungsanzeigen.
// Grammar: Adjektive mit sein, Wechselpräpositionen mit Dativ (Wo?), in + Akkusativ (Wohin?). Aussprache: e-Laute.

export const glossaryA1k9: Record<string, GlossaryEntry> = {
  Wohnung: { de: 'Mehrere Zimmer in einem Haus. Hier wohnt man.', en: 'apartment, flat' },
  Möbel: { de: 'Tisch, Stuhl, Bett, Schrank: Dinge in der Wohnung.', en: 'furniture' },
  Anzeige: { de: 'Ein kurzer Text in der Zeitung oder im Internet. Man sucht oder bietet etwas.', en: 'ad, listing' },
  Miete: { de: 'Das Geld, das man jeden Monat für die Wohnung bezahlt.', en: 'rent' },
  Nebenkosten: { de: 'Extra-Kosten für Wasser, Heizung und Müll.', en: 'utilities, additional costs' },
  hell: { de: 'Mit viel Licht. Das Gegenteil von dunkel.', en: 'bright' },
  ruhig: { de: 'Nicht laut.', en: 'quiet' },
  Balkon: { de: 'Ein kleiner Platz draußen an der Wohnung.', en: 'balcony' },
  umziehen: { de: 'In eine neue Wohnung gehen.', en: 'to move (house)' },
  Quadratmeter: { de: 'So misst man die Größe einer Wohnung: m².', en: 'square meter' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Willkommen im Fuchsbau', 'butter', 8,
  ['das Kapitel kennenlernen', 'Zimmer benennen'], [
    overview('e-over', 'Kapitel 9: Meine Wohnung',
      'In Kapitel 9 geht es ums Wohnen. Du lernst die Zimmer in einer [[Wohnung]], [[Möbel]] und Farben. Du liest eine [[Anzeige]] und verstehst [[Miete]], [[Nebenkosten]] und [[Quadratmeter]]. Du sagst, wo etwas steht: *Die Lampe steht **neben dem** Sofa.*\n\nIn der WG gibt es Neuigkeiten: Die Wohnung bekommt ein neues Sofa. Aber wohin damit?',
      'This chapter is about living: rooms, furniture, colors and apartment ads. Grammar: adjectives with sein, two-way prepositions with the dative to say where something is (Wo? auf dem Tisch), and in + accusative to say where something goes (Wohin? in die Küche).',
      ['Zimmer und Möbel nennen', 'eine Wohnung beschreiben', 'Wohnungsanzeigen verstehen', 'sagen, wo etwas ist']),
    match('e-match', [['die Küche', '🍳'], ['das Bad', '🛁'], ['das Schlafzimmer', '🛏️'], ['das Wohnzimmer', '🛋️'], ['der Balkon', '🌿'], ['der Flur', '🚪']], { task: 'Welches Zimmer?', taskEn: 'Match the room.' }),
    sort('e-sort', ['Küche', 'Bad', 'Wohnzimmer'], [['der Herd', 0], ['der Kühlschrank', 0], ['die Dusche', 1], ['das Waschbecken', 1], ['das Sofa', 2], ['der Fernseher', 2], ['die Spülmaschine', 0], ['die Toilette', 1], ['der Sessel', 2]],
      { task: 'Wo steht das normalerweise?', taskEn: 'Where is this usually found?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Wie ist die Wohnung?', 'mint', 15,
  ['eine Wohnung beschreiben', 'Farben', 'Adjektive'], [
    text('t1-text', `**Der Fuchsbau**

Unsere WG ist im dritten Stock. Die Wohnung hat 95 Quadratmeter und fünf Zimmer: vier Schlafzimmer und ein Wohnzimmer. Es gibt eine Küche, ein Bad und einen kleinen Balkon.

Die Küche ist groß und hell. Hier kochen und essen wir zusammen. Das Bad ist leider sehr klein. Am Morgen müssen wir oft warten!

Mein Zimmer ist klein, aber gemütlich. Die Wände sind gelb. Das Bett ist blau und der Schreibtisch ist weiß.
(Nele)`, { kicker: 'Lesen', task: 'Lies den Text.', taskEn: 'Read Nele’s description of the flat.' }),
    mcq('t1-q1', 'Wie viele Zimmer hat die Wohnung?', ['drei', 'vier', 'fünf'], 2),
    mcq('t1-q2', 'Wie ist das Bad?', ['groß und hell', 'sehr klein', 'gemütlich'], 1),
    mcq('t1-q3', 'Welche Farbe haben die Wände in Neles Zimmer?', ['gelb', 'blau', 'weiß'], 0),
    match('t1-match', [['rot', '🟥'], ['blau', '🟦'], ['gelb', '🟨'], ['grün', '🟩'], ['schwarz', '⬛'], ['weiß', '⬜'], ['braun', '🟫'], ['orange', '🟧']], { task: 'Die Farben', taskEn: 'Match the colors.' }),
    match('t1-match2', [['hell', 'dunkel'], ['groß', 'klein'], ['ruhig', 'laut'], ['billig', 'teuer'], ['modern', 'alt'], ['gemütlich', 'ungemütlich']], { task: 'Gegenteile', taskEn: 'Match the opposites.' }),
    grammar('t1-gram', 'Adjektive mit sein (Wiederholung)', {
      intro: 'Nach **sein** bleibt das Adjektiv ohne Endung. Mit **sehr** und **zu** kann man es stärker machen.',
      head: ['', 'Beispiel'],
      rows: [['sehr', 'Die Küche ist **sehr** groß. (positiv oder neutral)'], ['zu', 'Das Bad ist **zu** klein. (negativ, ein Problem)'], ['ziemlich', 'Die Wohnung ist **ziemlich** teuer.'], ['nicht so', 'Der Balkon ist **nicht so** groß.']],
      en: 'sehr = very, zu = too (a problem), ziemlich = quite, nicht so = not so.',
    }),
    gap('t1-gap', ['Die Miete ist 1200 Euro. Das ist {{zu}} teuer für mich!', 'Die Wohnung hat 150 m². Sie ist {{sehr}} groß.', 'Das Zimmer ist dunkel. Es ist {{nicht}} so hell.'],
      { bank: ['zu', 'sehr', 'nicht'], task: 'sehr, zu oder nicht?', taskEn: 'Fill in sehr, zu or nicht.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Wohnungsanzeigen', 'sky', 15,
  ['Anzeigen lesen', 'Abkürzungen verstehen', 'eine Wohnung besichtigen'], [
    text('t2-text', `**A) Leipzig-Süd:** 2-Zi.-Whg., 55 m², Küche, Bad, Balkon, 3. OG, ruhig. Miete 520 € + NK 120 €. Ab 1. März frei. Tel. 0341 22 33 44

**B) Zentrum:** 1-Zi.-Apartment, 28 m², möbliert, Kochnische, Dusche, 5. OG, mit Aufzug. Warmmiete 490 €. Sofort frei.

**C) Plagwitz:** 4-Zi.-Whg., 98 m², großer Garten, EG, Haustiere erlaubt. Miete 890 € + NK 200 €. Ab 1. April.`, { kicker: 'Lesen', title: 'Wohnungen in Leipzig', task: 'Lies die Anzeigen.', taskEn: 'Read the ads. Zi. = rooms, Whg. = apartment, NK = utilities, OG = floor, EG = ground floor, Warmmiete = rent including utilities.' }),
    match('t2-match', [['Zi.', 'Zimmer'], ['Whg.', 'Wohnung'], ['NK', 'Nebenkosten'], ['OG', 'Obergeschoss (Stock)'], ['EG', 'Erdgeschoss']], { task: 'Was bedeuten die Abkürzungen?', taskEn: 'What do the abbreviations mean?' }),
    mcq('t2-q1', 'Amara hat einen Hund. Welche Wohnung passt?', ['A', 'B', 'C'], 2),
    mcq('t2-q2', 'Welche Wohnung hat Möbel?', ['A', 'B', 'C'], 1),
    mcq('t2-q3', 'Was kostet Wohnung A zusammen (Miete + NK)?', ['520 €', '640 €', '490 €'], 1),
    audio('t2-audio', 'Hören: Anruf wegen der Wohnung', [
      ['elif', 'Guten Tag, ich rufe wegen der Wohnung in Leipzig-Süd an. Ist sie noch frei?'],
      ['herrLehmann', 'Ja, die ist noch frei.'],
      ['elif', 'Wie hoch sind die Nebenkosten genau?'],
      ['herrLehmann', 'Hundertzwanzig Euro, mit Heizung.'],
      ['elif', 'Gibt es einen Aufzug?'],
      ['herrLehmann', 'Nee, leider nicht. Aber der dritte Stock geht ja noch.'],
      ['elif', 'Kann ich die Wohnung ansehen?'],
      ['herrLehmann', 'Freilich. Am Donnerstag um fünf?'],
      ['elif', 'Prima, bis Donnerstag!'],
    ], { task: 'Hör zu. Was fragt Elif?', taskEn: 'Listen. What does Elif ask? Herr Lehmann speaks Saxon German: "nee" = nein, "freilich" = natürlich.' }),
    mcq('t2-q4', 'Hat das Haus einen Aufzug?', ['Ja.', 'Nein.', 'Das weiß er nicht.'], 1),
    mcq('t2-q5', 'Wann besichtigt Elif die Wohnung?', ['Donnerstag, 17 Uhr', 'Dienstag, 5 Uhr', 'Donnerstag, 15 Uhr'], 0),
    phrases('t2-phr', 'Fragen zur Wohnung', {
      'Fragen': ['Ist die Wohnung noch frei?', 'Wie hoch ist die Miete?', 'Gibt es einen Balkon / einen Aufzug?', 'Wann kann ich die Wohnung ansehen?'],
      'Meinung': ['Die Wohnung gefällt mir.', 'Das ist zu teuer.', 'Die Lage ist super.'],
    }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Wo ist was?', 'lilac', 15,
  ['sagen, wo etwas ist', 'Wechselpräpositionen mit Dativ'], [
    grammar('t3-gram', 'Wo? Präpositionen mit Dativ', {
      intro: 'Auf die Frage **Wo?** antwortet man mit Präposition + **Dativ**.',
      head: ['Präposition', 'Beispiel'],
      rows: [['in', 'Das Sofa steht **im** (in dem) Wohnzimmer.'], ['auf', 'Die Lampe steht **auf dem** Tisch.'], ['unter', 'Die Katze liegt **unter dem** Bett.'], ['über', 'Das Bild hängt **über dem** Sofa.'], ['neben', 'Der Sessel steht **neben der** Lampe.'], ['an', 'Das Foto hängt **an der** Wand.'], ['vor', 'Das Fahrrad steht **vor dem** Haus.'], ['hinter', 'Der Garten ist **hinter dem** Haus.'], ['zwischen', 'Der Tisch steht **zwischen dem** Sofa **und dem** Sessel.']],
      notes: ['Kurzformen: **in dem = im**, **an dem = am**.', 'Verben: **stehen** (Lampe, Schrank), **liegen** (Buch, Teppich, Katze), **hängen** (Bild, Lampe an der Decke).'],
      en: 'To say where something is (Wo?), use these prepositions with the dative: dem (der/das), der (die), den (plural). im = in dem, am = an dem.',
    }),
    match('t3-match', [['🐱 ⬇️ 🛏️', 'Die Katze liegt unter dem Bett.'], ['📕 ⬆️ 🛏️', 'Das Buch liegt auf dem Bett.'], ['🖼️ ⬆️ 🛋️', 'Das Bild hängt über dem Sofa.'], ['🚲 ➡️ 🏠', 'Das Fahrrad steht vor dem Haus.']],
      { task: 'Was passt?', taskEn: 'Match the picture and the sentence.' }),
    gap('t3-gap', ['Das Buch liegt auf {{dem}} Tisch. (der Tisch)', 'Die Katze schläft unter {{der}} Decke. (die Decke)', 'Das Bild hängt an {{der}} Wand. (die Wand)', 'Die Schuhe stehen {{im}} Flur. (in + der Flur)', 'Das Handy liegt neben {{dem}} Bett. (das Bett)'],
      { task: 'Ergänze den Artikel im Dativ.', taskEn: 'Fill in the dative article.' }),
    grammar('t3-wohin', 'Wohin? in + Akkusativ', {
      intro: 'Bei Bewegung fragt man **Wohin?** Dann steht nach **in** der **Akkusativ**.',
      head: ['Wo? (Dativ)', 'Wohin? (Akkusativ)'],
      rows: [['Ich bin **im** Wohnzimmer.', 'Ich gehe **ins** (in das) Wohnzimmer.'], ['Ich bin **in der** Küche.', 'Ich gehe **in die** Küche.'], ['Das Sofa steht **im** Flur.', 'Wir tragen das Sofa **in den** Flur.']],
      en: 'Wo? (where, no movement) → dative: im Wohnzimmer. Wohin? (where to, movement) → accusative: ins Wohnzimmer, in die Küche, in den Flur.',
    }),
    sort('t3-sort', ['Wo? (Dativ)', 'Wohin? (Akkusativ)'], [['Ich bin in der Küche.', 0], ['Ich gehe in die Küche.', 1], ['Das Bett steht im Zimmer.', 0], ['Er geht ins Bad.', 1], ['Die Katze liegt im Garten.', 0], ['Wir fahren in die Stadt.', 1]],
      { task: 'Wo oder wohin?', taskEn: 'Sort: location (Wo?) or direction (Wohin?).' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 9: Das neue Sofa', 'rose', 10,
  ['eine Geschichte hören', 'Wo und Wohin im Kontext'], [
    text('wg-intro', 'Felix hat ein Sofa gefunden: alt, grün und riesig. Es ist ein Geschenk von einem Nachbarn. Jetzt steht es vor dem Haus.', { kicker: 'Die Geschichte', en: 'Felix found a sofa: old, green and huge. It is a gift from a neighbor. Now it is standing in front of the building.' }),
    audio('wg-audio', 'Folge 9: Das neue Sofa', [
      ['felix', 'Leute, kommt runter! Das Sofa steht vor dem Haus!'],
      ['nele', 'Felix … das ist riesig. Und grün!'],
      ['felix', 'Grün ist modern! Wir tragen es ins Wohnzimmer.'],
      ['kenji', 'Wir wohnen im dritten Stock. Und es gibt keinen Aufzug.'],
      ['amara', 'Okay, zu viert schaffen wir das. Eins, zwei, drei: hoch!'],
      ['erzaehler', 'Zwanzig Minuten später, im Flur.'],
      ['nele', 'Stopp! Es passt nicht durch die Tür!'],
      ['felix', 'Dann stellen wir es in den Flur. Ein Sofa im Flur ist auch gemütlich.'],
      ['kenji', 'Felix, im Flur stehen schon unsere Schuhe und die Fahrräder.'],
      ['amara', 'Ich habe eine Idee: Wir stellen es auf den Balkon! Ein Balkonsofa!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story.' }),
    mcq('wg-q1', 'Wie ist das Sofa?', ['klein und rot', 'alt, grün und riesig', 'neu und modern'], 1),
    mcq('wg-q2', 'Was ist das Problem?', ['Das Sofa ist zu teuer.', 'Das Sofa passt nicht durch die Tür.', 'Das Sofa ist kaputt.'], 1),
    mcq('wg-q3', 'Was ist schon im Flur?', ['Schuhe und Fahrräder', 'ein Schrank', 'die Katze'], 0),
    mcq('wg-q4', 'Wohin kommt das Sofa am Ende vielleicht?', ['ins Wohnzimmer', 'auf den Balkon', 'in die Küche'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Wechselpräpositionen', 'stehen, liegen, hängen'], [
    grammar('g-1', 'Wo? und Wohin?', {
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [['Wo? (Dativ)', 'im / auf dem Tisch', 'im / auf dem Bett', 'in der / auf der Kommode', 'in den / auf den Regalen'], ['Wohin? (Akkusativ)', 'in den / auf den Tisch', 'ins / aufs Bett', 'in die / auf die Kommode', 'in die / auf die Regale']],
      en: 'Two-way prepositions (in, an, auf, unter, über, neben, vor, hinter, zwischen): dative for location, accusative for direction.',
    }),
    mcq('g-q1', 'Wo ist die Katze? Sie liegt auf ___ Sofa.', ['das', 'dem', 'den'], 1),
    mcq('g-q2', 'Wohin geht Kenji? Er geht in ___ Küche.', ['der', 'die', 'dem'], 1),
    mcq('g-q3', 'Das Bild ___ an der Wand.', ['steht', 'liegt', 'hängt'], 2),
    mcq('g-q4', 'Der Teppich ___ auf dem Boden.', ['liegt', 'hängt', 'steht'], 0),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['das eigene Zimmer beschreiben', 'Aussprache: e-Laute'], [
    compose('u-comp', 'Beschreib dein Zimmer.', [
      ['Wie ist das Zimmer?', 'What is the room like?', ['Mein Zimmer', 'ist', 'klein', 'und hell.']],
      ['Wo steht das Bett?', 'Where is the bed?', ['Das Bett', 'steht', 'neben', 'dem Fenster.']],
      ['Was hängt an der Wand?', 'What hangs on the wall?', ['An der Wand', 'hängt', 'ein', 'Bild.']],
      ['Was liegt auf dem Boden?', 'What lies on the floor?', ['Auf dem Boden', 'liegt', 'ein', 'Teppich.']],
    ], { task: 'Bau die Beschreibung.', taskEn: 'Build the description.' }),
    audio('u-aus', 'Aussprache: e-Laute', [
      ['frauKlein', 'Langes e: Tee, sehr, Regal, leben.'],
      ['frauKlein', 'Kurzes e: Bett, hell, Wand, Herd. Wie ä: Bett, Äpfel.'],
      ['frauKlein', 'Das e am Wortende ist ganz schwach: Küche, Lampe, Dusche.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. Long e, short e and the weak e at the end of a word.' }),
    sort('u-sort', ['langes e', 'kurzes e'], [['Tee', 0], ['Bett', 1], ['sehr', 0], ['hell', 1], ['Regal', 0], ['Herd', 1]], { task: 'Lang oder kurz?', taskEn: 'Long or short e?' }),
    order('u-order', ['Die Lampe', 'steht', 'auf dem', 'Schreibtisch.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['die Wohnung', 'hier wohnt man', 'apartment'], ['das Zimmer', 'ein Raum', 'room'], ['die Küche', 'hier kocht man', 'kitchen'],
      ['das Bad', 'hier duscht man', 'bathroom'], ['die Möbel (Pl.)', 'Tisch, Stuhl, Bett …', 'furniture'], ['der Schrank', 'für Kleidung', 'wardrobe, cupboard'],
      ['die Miete', 'Geld für die Wohnung', 'rent'], ['die Nebenkosten', 'Wasser, Heizung …', 'utilities'], ['hell', 'mit viel Licht', 'bright'],
      ['stehen / liegen / hängen', 'wo etwas ist', 'stand / lie / hang'], ['auf / unter', 'oben / unten', 'on / under'], ['neben', 'an der Seite', 'next to'],
    ]),
    match('w-extra-home', [['das Wohnzimmer', 'living room'], ['die Küche', 'kitchen'], ['das Bad', 'bathroom'], ['der Schrank', 'cupboard/wardrobe'], ['das Sofa', 'sofa'], ['die Miete', 'rent']],
      { task: 'Wohnung und Möbel', taskEn: 'Flat and furniture.' }),
    gap('w-extra-gap', ['Das Buch {{liegt}} auf dem Tisch.', 'Der Schrank {{steht}} an der Wand.', 'Das Bild {{hängt}} über dem Sofa.', 'Ich gehe {{in}} die Küche.'],
      { bank: ['liegt', 'steht', 'hängt', 'in'], task: 'Wo? und Wohin?', taskEn: 'Where? and Where to?' }),
    mcq('w-extra-q1', '„Wo ist die Lampe?“ — Richtige Antwort:', ['In die Küche.', 'In der Küche.', 'Zur Küche.'], 1),
    checklist('w-check', ['Ich kann Zimmer und Möbel nennen.', 'Ich kann meine Wohnung beschreiben.', 'Ich verstehe Wohnungsanzeigen.', 'Ich kann sagen, wo etwas steht, liegt oder hängt.', 'Ich kenne den Unterschied zwischen Wo? und Wohin?']),
  ]);

export const a1k9: Chapter = {
  id: 'a1-k9', number: 9, title: 'Meine Wohnung', theme: 'Zimmer, Möbel, Farben, Wohnungsanzeigen',
  grammar: 'Adjektive mit sein. Wechselpräpositionen mit Dativ. in + Akkusativ.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a1k9-sprint', 'a1k9-memory', 'a1k9-satzbau', 'a1k9-artikel'],
  exam: [
    x(1, mcq('x1', 'Die Lampe steht auf ___ Tisch.', ['den', 'dem', 'der'], 1)),
    x(1, mcq('x2', 'Ich gehe in ___ Bad.', ['das', 'dem', 'der'], 0)),
    x(1, mcq('x3', 'Die Wohnung kostet 2000 Euro. Sie ist ___ teuer für mich.', ['sehr', 'zu', 'nicht'], 1)),
    x(4, gap('x4', ['Das Bild hängt an {{der}} Wand. (die)', 'Die Katze liegt unter {{dem}} Tisch. (der)', 'Kenji ist {{im}} Bad. (in + das)', 'Das Fahrrad steht vor {{dem}} Haus. (das)'], { task: 'Ergänze.' })),
    x(1, mcq('x5', 'Wo kocht man?', ['im Bad', 'in der Küche', 'im Flur'], 1)),
    x(1, mcq('x6', 'Wie groß ist die Wohnung?', ['3 m²', '65 m²', '650 m²'], 1),
      text('x-st1', '**Nachmieter gesucht!** Schöne 3-Zimmer-Wohnung in Dresden-Neustadt, 65 m², 2. OG, Balkon, neue Küche. Miete 610 € + 150 € NK. Keine Haustiere. Frei ab 1. Mai. E-Mail: wohnung.dd@mail.de', { kicker: 'Lesen' })),
    x(1, mcq('x7', 'Darf man eine Katze haben? (Text oben)', ['Ja.', 'Nein.', 'Nur eine.'], 1)),
    x(1, mcq('x8', 'Wo ist der Schlüssel?', ['auf dem Tisch', 'neben dem Telefon im Flur', 'in der Küche'], 1),
      audio('x-st2', 'Hören: Wo ist der Schlüssel?', [
        ['jonas', 'Mama, wo ist mein Schlüssel? Ich muss los!'],
        ['frauHuber', 'Liegt er nicht auf dem Tisch in der Küche?'],
        ['jonas', 'Nein, da ist er nicht.'],
        ['frauHuber', 'Dann schau im Flur. Neben dem Telefon.'],
        ['jonas', 'Ah, ja! Da ist er. Danke!'],
      ])),
    x(1, mcq('x9', 'Wo sucht Jonas zuerst? (Hörtext oben)', ['im Flur', 'in der Küche', 'im Bad'], 1)),
    x(2, order('x10', ['Das Sofa', 'steht', 'im', 'Wohnzimmer.'], { task: 'Bau den Satz.' })),
    x(1, mcq('x11', '„NK“ in einer Anzeige bedeutet:', ['Nebenkosten', 'Neue Küche', 'Nicht kaufen'], 0)),
    x(1, mcq('x12', 'Ein Buch ___ auf dem Tisch.', ['liegt', 'hängt', 'geht'], 0)),
  ],
};

export const gamesA1k9: GameDef[] = [
  {
    id: 'a1k9-sprint', engine: 'sprint', title: 'Wo-Sprint', blurb: 'Wo ist das? Dativ in 60 Sekunden!', skill: 'Wechselpräpositionen', tone: 'mint', chapter: 9, emoji: '⚡',
    rules: 'Du siehst eine Präposition und ein Nomen. Tippe auf die richtige Form für Wo?', label: 'Wo?',
    items: [
      { q: 'auf ___ Tisch (der)', a: 'dem', wrong: ['den', 'der'] }, { q: 'unter ___ Bett (das)', a: 'dem', wrong: ['das', 'den'] },
      { q: 'an ___ Wand (die)', a: 'der', wrong: ['die', 'dem'] }, { q: 'in ___ Küche (die)', a: 'der', wrong: ['die', 'dem'] },
      { q: 'in ___ Bad (das)', a: 'dem (im)', wrong: ['das (ins)', 'den'] }, { q: 'neben ___ Sofa (das)', a: 'dem', wrong: ['das', 'der'] },
      { q: 'vor ___ Haus (das)', a: 'dem', wrong: ['das', 'den'] }, { q: 'über ___ Lampe (die)', a: 'der', wrong: ['die', 'dem'] },
      { q: 'hinter ___ Schrank (der)', a: 'dem', wrong: ['den', 'der'] }, { q: 'in ___ Regalen (Plural)', a: 'den', wrong: ['die', 'dem'] },
      { q: 'auf ___ Balkon (der)', a: 'dem', wrong: ['den', 'der'] }, { q: 'in ___ Flur (der)', a: 'dem (im)', wrong: ['den', 'der'] },
    ],
  },
  {
    id: 'a1k9-memory', engine: 'memory', title: 'Möbel-Memory', blurb: 'Möbel und Bild: Finde die Paare.', skill: 'Wohnung', tone: 'lilac', chapter: 9, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Wort und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['das Bett', '🛏️'], ['das Sofa', '🛋️'], ['der Stuhl', '🪑'], ['die Lampe', '💡'], ['die Dusche', '🚿'], ['die Badewanne', '🛁'], ['der Spiegel', '🪞'], ['die Tür', '🚪'], ['das Fenster', '🪟'], ['der Schlüssel', '🔑']],
  },
  {
    id: 'a1k9-satzbau', engine: 'satzbau', title: 'Zimmer-Baukasten', blurb: 'Wo steht, liegt, hängt was?', skill: 'Satzbau', tone: 'sky', chapter: 9, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Das Bild', 'hängt', 'über', 'dem Sofa.'], hint: 'hängen + Dativ' },
      { parts: ['Die Katze', 'liegt', 'unter', 'dem Bett.'], hint: 'liegen + Dativ' },
      { parts: ['Ich', 'gehe', 'in', 'die Küche.'], hint: 'Wohin? Akkusativ' },
      { parts: ['Die Küche', 'ist', 'groß', 'und hell.'], hint: 'sein + Adjektiv' },
      { parts: ['Das Bad', 'ist', 'zu', 'klein.'], hint: 'zu = Problem' },
      { parts: ['Ist', 'die Wohnung', 'noch', 'frei?'], hint: 'Ja/Nein-Frage' },
      { parts: ['Wir', 'stellen', 'das Sofa', 'auf den Balkon.'], hint: 'Wohin? Akkusativ' },
      { parts: ['Das Fahrrad', 'steht', 'im', 'Flur.'], hint: 'im = in dem' },
    ],
  },
  {
    id: 'a1k9-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Möbel und Zimmer.', skill: 'Artikel', tone: 'rose', chapter: 9, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Tisch, das Bett, die Lampe, der Stuhl, das Sofa, die Küche, der Schrank, das Bad, die Dusche, der Balkon, das Fenster, die Tür, der Flur, das Regal, die Wand, der Teppich, das Zimmer, die Wohnung'),
  },
];
