import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, poll, section, sort, text, tip, x } from '../helpers';

// A1 Kapitel 1: begrüßen, sich vorstellen, Zahlen bis 20, Alphabet, Länder und Sprachen.
// Grammar: W-Fragen, Aussagesatz, Verben und Personalpronomen.

export const glossaryA1k1: Record<string, GlossaryEntry> = {
  Hallo: { de: 'So grüßt man Freunde und Familie.', en: 'hello, hi' },
  Tschüss: { de: 'So sagt man auf Wiedersehen zu Freunden.', en: 'bye' },
  heißen: { de: 'Einen Namen haben. „Ich heiße Anna.“', en: 'to be called' },
  kommen: { de: 'Hier: aus einem Land sein. „Ich komme aus Japan.“', en: 'to come (from)' },
  wohnen: { de: 'An einem Ort leben. „Ich wohne in Leipzig.“', en: 'to live (somewhere)' },
  sprechen: { de: 'Eine Sprache benutzen. „Ich spreche Englisch.“', en: 'to speak' },
  buchstabieren: { de: 'Ein Wort Buchstabe für Buchstabe sagen: A, N, N, A.', en: 'to spell' },
  Handynummer: { de: 'Die Telefonnummer vom Handy.', en: 'cell phone number' },
  WG: { de: 'Wohngemeinschaft: Mehrere Leute wohnen zusammen in einer Wohnung.', en: 'flat share, shared apartment' },
  Mitbewohner: { de: 'Eine Person, die mit dir in einer Wohnung wohnt.', en: 'roommate' },
  willkommen: { de: 'Schön, dass du da bist!', en: 'welcome' },
  Entschuldigung: { de: 'Das sagt man, wenn man etwas fragt oder etwas falsch macht.', en: 'excuse me, sorry' },
  Adresse: { de: 'Straße, Hausnummer, PLZ und Stadt.', en: 'address' },
  Alter: { de: 'Wie alt man ist. „Ich bin 22 Jahre alt.“', en: 'age' },
  Nationalität: { de: 'Aus welchem Land man kommt. „Ich bin Japaner.“', en: 'nationality' },
  Formular: { de: 'Ein Papier oder eine Seite mit Fragen. Man füllt es aus.', en: 'form' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Hallo, Deutsch!', 'butter', 8,
  ['das Kapitel kennenlernen', 'erste deutsche Wörter verstehen'], [
    overview('e-over', 'Kapitel 1: Hallo und willkommen!',
      'Willkommen! In diesem Kapitel lernst du die ersten Sätze auf Deutsch. Du sagst [[Hallo]] und [[Tschüss]], du sagst, wie du [[heißen|heißt]], woher du [[kommen|kommst]] und wo du [[wohnen|wohnst]]. Du lernst die Zahlen von 0 bis 20 und das Alphabet.\n\nDu triffst auch die Fuchsbau-[[WG]] in Leipzig: Nele, Amara, Felix und Kenji. Sie sind in jedem Kapitel dabei.',
      'Welcome! In this chapter you learn your first German sentences: saying hello and goodbye, your name, where you come from, numbers 0 to 20 and the alphabet. You also meet the Fuchsbau flat share in Leipzig, whose story runs through the whole course. Tap any underlined word to see what it means.',
      ['Hallo und Tschüss sagen', 'sagen, wie du heißt und woher du kommst', 'bis 20 zählen und buchstabieren', 'fragen: Wie geht’s?']),
    text('e-intro', 'Viele deutsche Wörter kennst du schon! **Hotel, Taxi, Musik, Pizza, Computer, Baby, Sport, Foto.** Sie sind fast international.', { kicker: 'Zum Einstieg', task: 'Lies die Wörter laut.', taskEn: 'Read the words aloud. Many German words look like English ones.', en: 'German and English are related languages, so you already know many words.' }),
    match('e-match', [['das Hotel', '🏨'], ['das Taxi', '🚕'], ['die Musik', '🎵'], ['die Pizza', '🍕'], ['der Computer', '💻'], ['das Foto', '📷']],
      { task: 'Was passt zusammen?', taskEn: 'Match the word to the picture.' }),
    sort('e-sort', ['Hallo', 'Tschüss'], [['Guten Tag!', 0], ['Auf Wiedersehen!', 1], ['Guten Morgen!', 0], ['Bis bald!', 1], ['Hi!', 0], ['Gute Nacht!', 1]],
      { task: 'Kommen oder gehen?', taskEn: 'Is it a greeting (Hallo) or a goodbye (Tschüss)?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Hallo! Wie geht’s?', 'mint', 15,
  ['grüßen und sich verabschieden', 'nach dem Befinden fragen', 'du oder Sie?'], [
    audio('t1-audio', 'Hören: Drei kurze Gespräche', [
      ['nele', 'Hallo Amara! Wie geht’s?'],
      ['amara', 'Hallo Nele! Danke, gut. Und dir?'],
      ['nele', 'Auch gut, danke.'],
      ['frauKlein', 'Guten Morgen, Herr Tanaka. Wie geht es Ihnen?'],
      ['kenji', 'Guten Morgen, Frau Klein. Danke, sehr gut. Und Ihnen?'],
      ['frauKlein', 'Es geht. Ich bin ein bisschen müde.'],
      ['felix', 'Servus Nele! Tschüss, bis morgen!'],
      ['nele', 'Tschüss Felix! Bis morgen!'],
    ], { task: 'Hör zu. Wer spricht mit wem?', taskEn: 'Listen. Who is talking to whom? Notice du (friends) and Sie (formal).', note: '**Servus** = Hallo oder Tschüss in Österreich und Bayern.' }),
    mcq('t1-q1', 'Wie geht es Amara?', ['gut', 'nicht so gut', 'sehr schlecht'], 0, { task: 'Fragen zum Hörtext', taskEn: 'Questions about the audio.' }),
    mcq('t1-q2', 'Wie geht es Frau Klein?', ['sehr gut', 'Es geht. Sie ist müde.', 'super'], 1),
    tip('t1-tip', 'du oder Sie?', '**du**: für Freunde, Familie, Kinder. *Wie geht’s? Wie geht es dir?*\n\n**Sie**: für fremde Personen, bei der Arbeit, beim Arzt. *Wie geht es Ihnen?*\n\nImmer **Sie** mit großem S.'),
    sort('t1-sort', ['du', 'Sie'], [['Wie geht es dir?', 0], ['Wie geht es Ihnen?', 1], ['Wie heißt du?', 0], ['Wie heißen Sie?', 1], ['Und dir?', 0], ['Und Ihnen?', 1]],
      { task: 'du oder Sie?', taskEn: 'Informal (du) or formal (Sie)?' }),
    match('t1-match', [['😀', 'Sehr gut!'], ['🙂', 'Gut, danke.'], ['😐', 'Es geht.'], ['🙁', 'Nicht so gut.'], ['😫', 'Schlecht.']],
      { task: 'Wie geht’s? Was passt?', taskEn: 'How are you? Match the face to the answer.' }),
    phrases('t1-phr', 'So sagst du es', {
      'Hallo sagen': ['Hallo!', 'Guten Morgen!', 'Guten Tag!', 'Guten Abend!'],
      'Tschüss sagen': ['Tschüss!', 'Auf Wiedersehen!', 'Bis morgen!', 'Gute Nacht!'],
      'Wie geht’s?': ['Wie geht’s?', 'Wie geht es Ihnen?', 'Danke, gut. Und dir?'],
    }),
    order('t1-order', ['Wie', 'geht', 'es', 'Ihnen?'], { task: 'Bau die Frage.', taskEn: 'Build the question.' }),
    gap('t1-gap', ['Guten {{Morgen}}, Frau Klein!', 'Wie geht es {{Ihnen}}?', 'Danke, {{gut}}. Und dir?', 'Tschüss, bis {{morgen}}!'],
      { bank: ['Morgen', 'Ihnen', 'gut', 'morgen'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Woher kommst du?', 'sky', 15,
  ['sich vorstellen', 'über Länder und Sprachen sprechen', 'W-Fragen stellen'], [
    text('t2-text', `**Amara:** Ich heiße Amara. Ich komme aus Ghana. Ich wohne in Leipzig. Ich spreche Englisch, Twi und ein bisschen Deutsch.

**Felix:** Ich bin Felix. Ich komme aus Österreich, aus Wien. Jetzt wohne ich in Leipzig. Ich spreche Deutsch und Englisch.

**Kenji:** Mein Name ist Kenji Tanaka. Ich komme aus Japan. Ich wohne auch in Leipzig. Ich spreche Japanisch, Englisch und ein bisschen Deutsch.`,
      { kicker: 'Lesen', title: 'Wir sind die Fuchsbau-WG', task: 'Lies die Texte.', taskEn: 'Read the three short introductions.', en: 'Each person says their name, country, city and languages.' }),
    match('t2-match', [['Amara', 'kommt aus Ghana'], ['Felix', 'kommt aus Österreich'], ['Kenji', 'kommt aus Japan']], { task: 'Wer kommt woher?', taskEn: 'Who comes from where?' }),
    mcq('t2-q1', 'Wo wohnen alle drei?', ['in Wien', 'in Leipzig', 'in Japan'], 1),
    mcq('t2-q2', 'Wer spricht Twi?', ['Amara', 'Felix', 'Kenji'], 0),
    grammar('t2-gram', 'W-Fragen', {
      intro: 'W-Fragen beginnen mit einem W-Wort. Das Verb steht auf **Position 2**.',
      head: ['W-Wort', 'Verb', '…', 'Antwort'],
      rows: [['**Wie**', 'heißt', 'du?', 'Ich heiße Kenji.'], ['**Woher**', 'kommst', 'du?', 'Ich komme aus Japan.'], ['**Wo**', 'wohnst', 'du?', 'Ich wohne in Leipzig.'], ['**Was**', 'sprichst', 'du?', 'Ich spreche Japanisch.']],
      en: 'Question words: wie (how), woher (where from), wo (where), was (what). The verb is always in second position.',
    }),
    gap('t2-gap', ['{{Wie}} heißt du? Ich heiße Nele.', '{{Woher}} kommst du? Aus Deutschland.', '{{Wo}} wohnst du? In Leipzig.', '{{Was}} sprichst du? Deutsch und Französisch.'],
      { bank: ['Wie', 'Woher', 'Wo', 'Was'], task: 'Welches W-Wort passt?', taskEn: 'Which question word fits?' }),
    match('t2-match2', [['Deutschland', 'Deutsch'], ['Frankreich', 'Französisch'], ['Spanien', 'Spanisch'], ['Japan', 'Japanisch'], ['die Türkei', 'Türkisch'], ['Italien', 'Italienisch']],
      { task: 'Land und Sprache', taskEn: 'Match the country to its language.' }),
    tip('t2-tip', 'aus …', 'Die meisten Länder ohne Artikel: *Ich komme **aus** Japan, **aus** Ghana, **aus** Deutschland.*\n\nEinige Länder mit Artikel: *aus **der** Türkei, aus **der** Schweiz, aus **den** USA.*'),
    compose('t2-comp', 'Stell dich vor. So geht es:', [
      ['Sag deinen Namen.', 'Say your name.', ['Ich', 'heiße', 'Sofia.']],
      ['Sag, woher du kommst.', 'Say where you are from.', ['Ich', 'komme', 'aus Brasilien.']],
      ['Sag, wo du wohnst.', 'Say where you live.', ['Ich', 'wohne', 'in Berlin.']],
      ['Sag, was du sprichst.', 'Say which languages you speak.', ['Ich spreche', 'Portugiesisch', 'und Englisch.']],
    ], { task: 'Bau eine Vorstellung.', taskEn: 'Build an introduction, sentence by sentence.' }),
    tip('t2-nat', 'Nationalität', 'Oft sagst du **Ich komme aus …** Oder: **Ich bin Japaner / Japanerin. Ich bin Deutscher / Deutsche.**\n\nAchtung: *Ich bin aus Japan* geht auch, aber *Ich komme aus Japan* ist klarer.'),
    match('t2-nat-match', [['Japan', 'Japaner / Japanerin'], ['Deutschland', 'Deutscher / Deutsche'], ['Österreich', 'Österreicher / Österreicherin'], ['die Türkei', 'Türke / Türkin'], ['Ghana', 'Ghanaer / Ghanaerin'], ['Brasilien', 'Brasilianer / Brasilianerin']],
      { task: 'Land und Nationalität', taskEn: 'Match the country to the nationality.' }),
    gap('t2-nat-gap', ['Kenji ist {{Japaner}}. Er kommt aus Osaka.', 'Felix ist {{Österreicher}}. Er kommt aus Wien.', 'Amara kommt {{aus}} Ghana.', 'Nele kommt {{aus}} Deutschland.'],
      { bank: ['Japaner', 'Österreicher', 'aus', 'aus'], task: 'Ergänze.', taskEn: 'Fill in nationality or „aus“.' }),
    mcq('t2-q3', '„Ich bin 24 Jahre ___.“', ['alt', 'Alter', 'Jahre'], 0, { task: 'Alter sagen', taskEn: 'Saying your age.' }),
    order('t2-order-age', ['Wie', 'alt', 'bist', 'du?'], { task: 'Bau die Frage zum Alter.', taskEn: 'Build the age question.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Zahlen und Buchstaben', 'lilac', 15,
  ['Zahlen bis 20', 'buchstabieren', 'Telefonnummer und E-Mail-Adresse sagen'], [
    grammar('t3-zahlen', 'Die Zahlen von 0 bis 20', {
      head: ['', '', '', ''],
      rows: [['0 null', '1 eins', '2 zwei', '3 drei'], ['4 vier', '5 fünf', '6 sechs', '7 sieben'], ['8 acht', '9 neun', '10 zehn', '11 elf'], ['12 zwölf', '13 dreizehn', '14 vierzehn', '15 fünfzehn'], ['16 sechzehn', '17 siebzehn', '18 achtzehn', '19 neunzehn'], ['20 zwanzig', '', '', '']],
      notes: ['Achtung: **sechzehn** (nicht sechszehn), **siebzehn** (nicht siebenzehn).', 'Beim Telefonieren sagt man oft **zwo** statt zwei. Dann hört man den Unterschied zu drei besser.'],
      en: 'Numbers 13 to 19 are number + zehn. Watch out for sechzehn and siebzehn. On the phone, people often say zwo instead of zwei.',
    }),
    audio('t3-audio', 'Hören: Zahlen', [
      ['frauKlein', 'Hör gut zu. Eins, zwei, drei, vier, fünf.'],
      ['frauKlein', 'Sechs, sieben, acht, neun, zehn.'],
      ['frauKlein', 'Elf, zwölf, dreizehn, vierzehn, fünfzehn.'],
      ['frauKlein', 'Sechzehn, siebzehn, achtzehn, neunzehn, zwanzig.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat the numbers.' }),
    match('t3-match', [['3', 'drei'], ['7', 'sieben'], ['12', 'zwölf'], ['16', 'sechzehn'], ['19', 'neunzehn'], ['20', 'zwanzig']], { task: 'Zahl und Wort', taskEn: 'Match the number and the word.' }),
    gap('t3-gap', ['5 + 3 = {{acht}}', '10 + 2 = {{zwölf}}', '9 + 8 = {{siebzehn}}', '20 − 9 = {{elf}}', '4 + 2 = {{sechs}}'],
      { task: 'Rechne und schreib das Wort.', taskEn: 'Do the math and type the number as a word.' }),
    audio('t3-audio2', 'Hören: Wie ist deine Nummer?', [
      ['nele', 'Kenji, wie ist deine Handynummer?'],
      ['kenji', 'Null, eins, sieben, sechs, vier, fünf, acht, zwo, drei, neun, eins.'],
      ['nele', 'Danke! Und deine E-Mail-Adresse?'],
      ['kenji', 'K, E, N, J, I, Punkt, T, A, N, A, K, A, at, mail Punkt de.'],
      ['nele', 'Kenji Punkt Tanaka at mail Punkt de. Super, danke!'],
    ], { task: 'Hör zu. Welche Nummer hat Kenji?', taskEn: 'Listen. What is Kenji’s number? "at" is the @ sign, "Punkt" is the dot.' }),
    mcq('t3-q1', 'Wie ist Kenjis Handynummer?', ['0176 4582391', '0167 4582391', '0176 4528391'], 0),
    mcq('t3-q2', 'Wie ist seine E-Mail-Adresse?', ['kenji.tanaka@mail.de', 'kenji-tanaka@mail.de', 'tanaka.kenji@mail.de'], 0),
    grammar('t3-abc', 'Das Alphabet', {
      intro: 'So spricht man die Buchstaben auf Deutsch:',
      head: ['', '', '', '', ''],
      rows: [['A [a]', 'B [be]', 'C [tse]', 'D [de]', 'E [e]'], ['F [ɛf]', 'G [ge]', 'H [ha]', 'I [i]', 'J [jɔt]'], ['K [ka]', 'L [ɛl]', 'M [ɛm]', 'N [ɛn]', 'O [o]'], ['P [pe]', 'Q [ku]', 'R [ɛr]', 'S [ɛs]', 'T [te]'], ['U [u]', 'V [fau]', 'W [ve]', 'X [ɪks]', 'Y [ʏpsilɔn]'], ['Z [tsɛt]', 'Ä [ɛ]', 'Ö [ø]', 'Ü [y]', 'ß [ɛs-tsɛt]']],
      en: 'Tricky letters for English speakers: E sounds like "ay", I like "ee", J like "yot", V like "fow", W like "vay", Z like "tset".',
    }),
    mcq('t3-q3', 'Wie spricht man den Buchstaben **W**?', ['„dabbel-ju“', '„we“ wie in Wetter', '„wau“'], 1, { task: 'Teste dich.', taskEn: 'Test yourself.' }),
    mcq('t3-q4', 'Was bedeutet „at“ in einer E-Mail-Adresse?', ['@', '.', '-'], 0),
    tip('t3-form', 'Auf einem Formular', 'Oft brauchst du: **Name**, [[Adresse]], [[Handynummer]], E-Mail, [[Alter]] / Geburtsdatum.\n\nBeispiel: *Fuchsstraße 12, 04109 Leipzig.*'),
    match('t3-form-match', [['Name', 'Kenji Tanaka'], ['Adresse', 'Fuchsstraße 12, Leipzig'], ['Telefon', '0176 4582391'], ['E-Mail', 'kenji.tanaka@mail.de'], ['Alter', '22 Jahre']],
      { task: 'Was gehört wohin auf dem Formular?', taskEn: 'Match the form field to the example.' }),
    gap('t3-addr', ['Meine Adresse ist Fuchsstraße {{zwölf}}.', 'Die Postleitzahl beginnt oft mit {{null}}4 …', 'Meine Handynummer beginnt mit {{null}}176.'],
      { bank: ['zwölf', 'null', 'null'], task: 'Zahlen in der Adresse', taskEn: 'Numbers in an address.' }),
    sort('t3-sort-abc', ['A–M', 'N–Z'], [['Amara', 0], ['Felix', 0], ['Kenji', 0], ['Leipzig', 0], ['Nele', 1], ['Osaka', 1], ['Wien', 1], ['Zürich', 1]],
      { task: 'Alphabet: A–M oder N–Z?', taskEn: 'Alphabet: first half or second half?' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 1: Der Neue', 'rose', 10,
  ['eine kurze Geschichte hören', 'neue Leute kennenlernen'], [
    text('wg-intro', 'Kenji ist neu in Leipzig. Heute zieht er in die [[WG]] in der Fuchsstraße. Er ist der neue [[Mitbewohner]]. Er klingelt.', { kicker: 'Die Geschichte', en: 'Kenji is new in Leipzig. Today he moves into the flat share on Fuchsstraße. He rings the bell.' }),
    audio('wg-audio', 'Folge 1: Der Neue', [
      ['nele', 'Hallo! Bist du Kenji?'],
      ['kenji', 'Ja, hallo! Ich bin Kenji. Und du?'],
      ['nele', 'Ich bin Nele. Herzlich willkommen in der WG! Komm rein!'],
      ['amara', 'Hi Kenji! Ich heiße Amara. Woher kommst du?'],
      ['kenji', 'Ich komme aus Japan, aus Osaka. Und du?'],
      ['amara', 'Ich komme aus Ghana. Und das ist Felix.'],
      ['felix', 'Servus! Ich bin Felix, aus Wien. Sprichst du Deutsch?'],
      ['kenji', 'Ja, ein bisschen. Ich lerne Deutsch.'],
      ['felix', 'Super! Wir sprechen langsam. Versprochen!'],
      ['nele', 'Also: Willkommen im Fuchsbau!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story. You can show the text if it is too fast.' }),
    mcq('wg-q1', 'Wer macht die Tür auf?', ['Amara', 'Nele', 'Felix'], 1, { task: 'Fragen zur Geschichte', taskEn: 'Questions about the story.' }),
    mcq('wg-q2', 'Woher kommt Kenji?', ['aus Osaka in Japan', 'aus Wien', 'aus Ghana'], 0),
    mcq('wg-q3', 'Was sagt Felix?', ['Wir sprechen schnell.', 'Wir sprechen langsam.', 'Wir sprechen Japanisch.'], 1),
    match('wg-match', [['Nele', 'wohnt schon lange in Leipzig'], ['Amara', 'kommt aus Ghana'], ['Felix', 'kommt aus Wien'], ['Kenji', 'ist neu in der WG']], { task: 'Wer ist wer?', taskEn: 'Who is who?' }),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Verben im Präsens', 'Satzbau: Aussage und W-Frage'], [
    grammar('g-1', 'Verben und Personalpronomen', {
      intro: 'Das Verb hat für jede Person eine eigene Endung.',
      head: ['', 'wohnen', 'kommen', 'heißen', 'sprechen', 'sein'],
      rows: [
        ['ich', 'wohn**e**', 'komm**e**', 'heiß**e**', 'sprech**e**', '**bin**'],
        ['du', 'wohn**st**', 'komm**st**', 'heiß**t**', 'spr**i**ch**st**', '**bist**'],
        ['er/sie/es', 'wohn**t**', 'komm**t**', 'heiß**t**', 'spr**i**ch**t**', '**ist**'],
        ['wir', 'wohn**en**', 'komm**en**', 'heiß**en**', 'sprech**en**', '**sind**'],
        ['ihr', 'wohn**t**', 'komm**t**', 'heiß**t**', 'sprech**t**', '**seid**'],
        ['sie/Sie', 'wohn**en**', 'komm**en**', 'heiß**en**', 'sprech**en**', '**sind**'],
      ],
      notes: ['**sprechen** ändert den Vokal bei du und er/sie: du sprichst, er spricht.', '**sein** ist ganz unregelmäßig. Lern es auswendig.'],
      en: 'Endings: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. "sein" (to be) is irregular: bin, bist, ist, sind, seid, sind.',
    }),
    grammar('g-2', 'Satzbau', {
      head: ['Satz', 'Position 1', 'Position 2 (Verb)', 'Rest'],
      rows: [['Aussage', 'Ich', '**komme**', 'aus Japan.'], ['W-Frage', 'Woher', '**kommst**', 'du?'], ['Aussage', 'Jetzt', '**wohne**', 'ich in Leipzig.']],
      en: 'In statements and W-questions the verb is always in position 2.',
    }),
    gap('g-gap', ['Ich {{wohne}} in Leipzig. (wohnen)', 'Du {{kommst}} aus Japan. (kommen)', 'Er {{heißt}} Felix. (heißen)', 'Wir {{sind}} die Fuchsbau-WG. (sein)', 'Sie {{spricht}} Englisch. (sprechen)', 'Ihr {{seid}} super! (sein)'],
      { task: 'Ergänze das Verb.', taskEn: 'Fill in the verb in the right form.' }),
    mcq('g-q1', 'Welcher Satz ist richtig?', ['Woher du kommst?', 'Woher kommst du?', 'Woher kommt du?'], 1),
    mcq('g-q2', '„Amara ___ aus Ghana.“', ['komme', 'kommst', 'kommt'], 2),
    tip('g-neg', 'Nein sagen (kurz)', 'Einfach: **Nein.** Oder: **Nein, danke.** / **Nein, ich heiße nicht Max.**\n\nSpäter lernst du *nicht* und *kein* genauer.'),
    gap('g-gap2', ['{{Ich}} heiße Nele.', '{{Du}} kommst aus Indien.', '{{Er}} wohnt in Berlin.', '{{Wir}} sprechen Deutsch.', '{{Ihr}} seid super.', '{{Sie}} heißen Frau Klein. (höflich)'],
      { bank: ['Ich', 'Du', 'Er', 'Wir', 'Ihr', 'Sie'], task: 'Welches Pronomen?', taskEn: 'Which personal pronoun?' }),
    sort('g-sort-verb', ['richtig', 'falsch'], [
      ['Ich wohne in Leipzig.', 0], ['Woher du kommst?', 1], ['Er spricht Englisch.', 0],
      ['Kommst du aus Japan?', 0], ['Wir ist die WG.', 1], ['Sie heißen Amara.', 0],
    ], { task: 'Richtiger Satzbau?', taskEn: 'Correct word order?' }),
    mcq('g-q3', '„Jetzt ___ ich in Leipzig.“', ['wohne', 'wohnst', 'wohnt'], 0),
    mcq('g-q4', '„___ heißt du?“', ['Was', 'Wie', 'Wo'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Wörter wiederholen', 'Aussprache: das Alphabet und Zahlen'], [
    order('u-order1', ['Ich', 'komme', 'aus', 'Ghana.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
    order('u-order2', ['Wo', 'wohnst', 'du?'], { task: 'Bau die Frage.', taskEn: 'Build the question.' }),
    gap('u-gap', ['Hallo, ich {{bin}} Nele.', 'Ich {{komme}} aus Deutschland.', 'Ich {{wohne}} in Leipzig.', 'Und wie {{heißt}} du?'],
      { bank: ['bin', 'komme', 'wohne', 'heißt'], task: 'Ergänze die Vorstellung.', taskEn: 'Complete the introduction.' }),
    sort('u-sort', ['Land', 'Sprache'], [['Spanien', 0], ['Englisch', 1], ['Polen', 0], ['Arabisch', 1], ['Indien', 0], ['Russisch', 1]], { task: 'Land oder Sprache?', taskEn: 'Country or language?' }),
    audio('u-aus', 'Aussprache: Buchstabieren', [
      ['frauKlein', 'Ich buchstabiere: A, M, A, R, A. Amara.'],
      ['frauKlein', 'F, E, L, I, X. Felix.'],
      ['frauKlein', 'Und jetzt eine Stadt: L, E, I, P, Z, I, G. Leipzig.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat the spelling.' }),
    mcq('u-q1', 'Frau Klein buchstabiert: L, E, I, P, Z, I, G. Welche Stadt ist das?', ['Leipzig', 'Lübeck', 'Linz'], 0),
    mcq('u-q2', 'Welche Zahl ist **dreizehn**?', ['3', '13', '30'], 1),
    match('u-match-greet', [['Guten Morgen!', 'am Vormittag'], ['Guten Tag!', 'am Tag'], ['Guten Abend!', 'am Abend'], ['Gute Nacht!', 'vor dem Schlafen'], ['Auf Wiedersehen!', 'höflich gehen'], ['Tschüss!', 'bei Freunden gehen']],
      { task: 'Wann sagst du was?', taskEn: 'When do you say what?' }),
    gap('u-gap2', ['{{Wie}} heißt du?', '{{Woher}} kommst du?', '{{Wo}} wohnst du?', '{{Wie}} alt bist du?', '{{Was}} sprichst du?'],
      { bank: ['Wie', 'Woher', 'Wo', 'Wie', 'Was'], task: 'W-Fragen trainieren', taskEn: 'Practice W-questions.' }),
    order('u-order3', ['Meine', 'Adresse', 'ist', 'Fuchsstraße', '12.'], { task: 'Bau den Satz zur Adresse.', taskEn: 'Build the address sentence.' }),
    mcq('u-q3', 'Du sprichst mit dem Arzt. Was fragst du?', ['Wie geht’s?', 'Wie geht es Ihnen?', 'Hi!'], 1),
    mcq('u-q4', '„0176 …“ Das ist eine …', ['E-Mail', 'Handynummer', 'Adresse'], 1),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['die wichtigsten Wörter wiederholen', 'den eigenen Stand einschätzen'], [
    cards('w-cards', [
      ['Hallo!', 'so grüßt man Freunde', 'hello'], ['Tschüss!', 'so geht man bei Freunden', 'bye'], ['Guten Tag!', 'so grüßt man höflich', 'good day'],
      ['Auf Wiedersehen!', 'so geht man höflich', 'goodbye'], ['Wie geht’s?', 'Frage nach dem Befinden', 'how are you?'], ['Danke, gut.', 'mir geht es gut', 'fine, thanks'],
      ['heißen', 'einen Namen haben', 'to be called'], ['kommen aus', 'aus einem Land sein', 'to come from'], ['wohnen in', 'in einer Stadt leben', 'to live in'],
      ['sprechen', 'eine Sprache benutzen', 'to speak'], ['die Handynummer', 'Nummer vom Handy', 'cell number'], ['buchstabieren', 'Buchstabe für Buchstabe sagen', 'to spell'],
      ['die Adresse', 'Straße und Stadt', 'address'], ['das Alter', 'wie alt man ist', 'age'], ['die Nationalität', 'aus welchem Land', 'nationality'],
      ['Wie alt bist du?', 'Frage nach dem Alter', 'how old are you?'], ['Ich bin … Jahre alt.', 'Antwort zum Alter', 'I am … years old'], ['das Formular', 'Papier mit Fragen', 'form'],
    ]),
    checklist('w-check', ['Ich kann Hallo und Tschüss sagen.', 'Ich kann sagen, wie ich heiße, woher ich komme und wo ich wohne.', 'Ich kann fragen: Wie geht’s?', 'Ich kann bis 20 zählen.', 'Ich kann meinen Namen buchstabieren.', 'Ich kenne den Unterschied zwischen du und Sie.', 'Ich kann mein Alter und meine Adresse sagen.', 'Ich kann Land und Nationalität zuordnen.']),
    text('w-story-tip', 'Willst du mehr lesen? Die kurze Geschichte **Willkommen, Kenji!** wiederholt die Wörter aus diesem Kapitel — optional, ohne Prüfung.', { kicker: 'Extra', en: 'Want more reading? The short story “Willkommen, Kenji!” revisits this chapter’s words — optional, no exam.' }),
    mcq('w-q1', 'Du triffst deine Chefin am Morgen. Was sagst du?', ['Hi, wie geht’s?', 'Guten Morgen, wie geht es Ihnen?', 'Tschüss!'], 1, { task: 'Letzter Check', taskEn: 'Last check before the exam.' }),
    mcq('w-q2', '„Ich ___ Nele.“', ['bin', 'bist', 'ist'], 0),
    mcq('w-q3', '„Meine ___ ist Fuchsstraße 12.“', ['Alter', 'Adresse', 'Nationalität'], 1),
  ]);

export const a1k1: Chapter = {
  id: 'a1-k1', number: 1, title: 'Hallo und willkommen!', theme: 'Begrüßen, sich vorstellen, Zahlen, Alphabet',
  grammar: 'W-Fragen. Aussagesatz. Verben und Personalpronomen. sein.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a1k1-sprint', 'a1k1-memory', 'a1k1-satzbau', 'a1k1-artikel'],
  exam: [
    x(1, mcq('x1', 'Am Abend sagst du zu Freunden „Hallo“ und später …', ['Guten Morgen!', 'Tschüss!', 'Guten Tag!'], 1)),
    x(1, mcq('x2', '„Wie geht es Ihnen?“ Die Antwort:', ['Ich heiße Max.', 'Danke, gut.', 'Aus Polen.'], 1)),
    x(1, mcq('x3', '„___ kommst du?“ „Aus Spanien.“', ['Wie', 'Wo', 'Woher'], 2)),
    x(4, gap('x4', ['Ich {{heiße}} Paula. (heißen)', 'Du {{wohnst}} in Berlin. (wohnen)', 'Er {{spricht}} Italienisch. (sprechen)', 'Wir {{sind}} aus Indien. (sein)'], { task: 'Ergänze das Verb.' })),
    x(3, gap('x5', ['7 = {{sieben}}', '12 = {{zwölf}}', '16 = {{sechzehn}}'], { task: 'Schreib die Zahl als Wort.' })),
    x(1, mcq('x6', 'Woher kommt Lucía?', ['aus Mexiko', 'aus Spanien', 'aus Köln'], 0),
      text('x-st1', 'Hallo! Ich heiße Lucía. Ich komme aus Mexiko. Jetzt wohne ich in Köln. Ich spreche Spanisch, Englisch und ein bisschen Deutsch. Meine Handynummer ist 0151 8834627.', { kicker: 'Lesen' })),
    x(1, mcq('x7', 'Wo wohnt Lucía jetzt? (Text oben)', ['in Mexiko', 'in Köln', 'in Spanien'], 1)),
    x(1, mcq('x8', 'Wie heißt die Frau?', ['Sanna Berg', 'Hanna Berg', 'Anna Werk'], 0),
      audio('x-st2', 'Hören: Am Telefon', [
        ['herrAdler', 'Wie ist Ihr Name, bitte?'],
        ['priya', 'Sanna Berg.'],
        ['herrAdler', 'Können Sie das buchstabieren?'],
        ['priya', 'S, A, N, N, A. Und Berg: B, E, R, G.'],
        ['herrAdler', 'Danke. Und Ihre Telefonnummer?'],
        ['priya', 'Null, drei, null, vier, zwo, sieben, eins, acht.'],
      ])),
    x(1, mcq('x9', 'Wie ist ihre Telefonnummer? (Hörtext oben)', ['030 42718', '030 427 18', '030 42 718'], 0, { why: 'Null, drei, null, vier, zwo, sieben, eins, acht: 030 42718.' })),
    x(2, order('x10', ['Woher', 'kommen', 'Sie?'], { task: 'Bau die Frage.' })),
    x(2, order('x11', ['Ich', 'wohne', 'in', 'Leipzig.'], { task: 'Bau den Satz.' })),
    x(1, mcq('x12', 'Welche Sprache spricht man in Frankreich?', ['Französisch', 'Frankreichisch', 'Französin'], 0)),
  ],
};

export const gamesA1k1: GameDef[] = [
  {
    id: 'a1k1-sprint', engine: 'sprint', title: 'Verb-Sprint', blurb: '60 Sekunden: Welche Verbform passt?', skill: 'Verben im Präsens', tone: 'mint', chapter: 1, emoji: '⚡',
    rules: 'Du siehst eine Person. Tippe auf die richtige Verbform. Du hast 60 Sekunden.', label: 'Welche Form?',
    items: [
      { q: 'ich ___ (wohnen)', a: 'wohne', wrong: ['wohnst', 'wohnt'] }, { q: 'du ___ (wohnen)', a: 'wohnst', wrong: ['wohne', 'wohnen'] },
      { q: 'er ___ (kommen)', a: 'kommt', wrong: ['komme', 'kommen'] }, { q: 'wir ___ (kommen)', a: 'kommen', wrong: ['kommt', 'kommst'] },
      { q: 'ich ___ (sein)', a: 'bin', wrong: ['bist', 'ist'] }, { q: 'du ___ (sein)', a: 'bist', wrong: ['bin', 'sind'] },
      { q: 'sie ___ (sein, Singular)', a: 'ist', wrong: ['sind', 'bist'] }, { q: 'wir ___ (sein)', a: 'sind', wrong: ['seid', 'ist'] },
      { q: 'ihr ___ (sein)', a: 'seid', wrong: ['sind', 'seit'] }, { q: 'du ___ (sprechen)', a: 'sprichst', wrong: ['sprechst', 'spricht'] },
      { q: 'er ___ (sprechen)', a: 'spricht', wrong: ['sprecht', 'sprechen'] }, { q: 'du ___ (heißen)', a: 'heißt', wrong: ['heißst', 'heiße'] },
      { q: 'Sie ___ (heißen)', a: 'heißen', wrong: ['heißt', 'heiße'] }, { q: 'ihr ___ (wohnen)', a: 'wohnt', wrong: ['wohnen', 'wohnst'] },
      { q: 'ich ___ (sprechen)', a: 'spreche', wrong: ['spriche', 'sprichst'] }, { q: 'sie ___ (kommen, Plural)', a: 'kommen', wrong: ['kommt', 'kommst'] },
    ],
  },
  {
    id: 'a1k1-memory', engine: 'memory', title: 'Zahlen-Memory', blurb: 'Finde die Paare: Zahl und Wort.', skill: 'Zahlen bis 20', tone: 'lilac', chapter: 1, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist eine Zahl und das passende Wort.', kinds: ['Zahl', 'Wort'],
    pairs: [['3', 'drei'], ['6', 'sechs'], ['7', 'sieben'], ['11', 'elf'], ['12', 'zwölf'], ['13', 'dreizehn'], ['16', 'sechzehn'], ['17', 'siebzehn'], ['19', 'neunzehn'], ['20', 'zwanzig']],
  },
  {
    id: 'a1k1-satzbau', engine: 'satzbau', title: 'Hallo-Sätze', blurb: 'Bau Sätze und Fragen zum Kennenlernen.', skill: 'Satzbau', tone: 'sky', chapter: 1, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Das Verb steht auf Position 2.',
    sentences: [
      { parts: ['Ich', 'heiße', 'Kenji.'], hint: 'Verb auf Position 2' },
      { parts: ['Woher', 'kommst', 'du?'], hint: 'W-Wort, dann Verb' },
      { parts: ['Ich', 'komme', 'aus Japan.'], hint: 'Verb auf Position 2' },
      { parts: ['Wo', 'wohnen', 'Sie?'], hint: 'W-Wort, dann Verb' },
      { parts: ['Wie', 'geht', 'es', 'dir?'], hint: 'Wie geht es …?' },
      { parts: ['Jetzt', 'wohne', 'ich', 'in Leipzig.'], hint: 'Verb bleibt auf Position 2' },
      { parts: ['Was', 'sprichst', 'du?'], hint: 'W-Wort, dann Verb' },
      { parts: ['Er', 'spricht', 'ein bisschen', 'Deutsch.'], hint: 'Verb auf Position 2' },
    ],
  },
  {
    id: 'a1k1-artikel', engine: 'regen', title: 'Hallo oder Tschüss?', blurb: 'Fang die Wörter: Hallo, Tschüss oder Frage?', skill: 'Grüßen', tone: 'rose', chapter: 1, emoji: '☔',
    rules: 'Ein Satz fällt herunter. Ist es ein Gruß, ein Abschied oder eine Frage? Tippe auf die richtige Gruppe.', buckets: ['Hallo', 'Tschüss', 'Frage'],
    words: [['Guten Morgen!', 0], ['Guten Tag!', 0], ['Hi!', 0], ['Servus!', 0], ['Guten Abend!', 0], ['Hallo!', 0], ['Tschüss!', 1], ['Auf Wiedersehen!', 1], ['Bis morgen!', 1], ['Gute Nacht!', 1], ['Bis bald!', 1], ['Ciao!', 1], ['Wie geht’s?', 2], ['Wie heißt du?', 2], ['Woher kommst du?', 2], ['Wo wohnen Sie?', 2], ['Und dir?', 2], ['Was sprichst du?', 2]],
  },
];

void artikel; void poll;
