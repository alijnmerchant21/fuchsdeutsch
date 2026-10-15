import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A1 Kapitel 6: Datum, Geburtstag, Einladungen, im Café bestellen und bezahlen.
// Grammar: trennbare Verben, Personalpronomen im Akkusativ, für + Akkusativ, Präteritum von haben und sein. Aussprache: ei, eu, au.

export const glossaryA1k6: Record<string, GlossaryEntry> = {
  Einladung: { de: 'Man fragt: Kommst du zu meiner Party?', en: 'invitation' },
  einladen: { de: 'Jemanden zu einer Party oder zum Essen bitten.', en: 'to invite' },
  Geburtstag: { de: 'Der Tag, an dem man geboren ist.', en: 'birthday' },
  Datum: { de: 'Tag, Monat und Jahr, zum Beispiel der 3. Mai.', en: 'date' },
  bestellen: { de: 'Im Café sagen, was man essen oder trinken möchte.', en: 'to order' },
  bezahlen: { de: 'Geld für etwas geben.', en: 'to pay' },
  zusammen: { de: 'Alle gemeinsam. Hier: eine Rechnung für alle.', en: 'together' },
  getrennt: { de: 'Jeder bezahlt für sich.', en: 'separately' },
  Trinkgeld: { de: 'Extra-Geld für den Kellner.', en: 'tip' },
  Rechnung: { de: 'Ein Papier mit dem Preis. Man bezahlt es.', en: 'bill, check' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Party!', 'butter', 8,
  ['das Kapitel kennenlernen', 'Feste und Feiern'], [
    overview('e-over', 'Kapitel 6: Zeit mit Freunden',
      'In Kapitel 6 feierst du! Du lernst das [[Datum]] und sagst, wann du [[Geburtstag]] hast. Du schreibst eine [[Einladung]] und antwortest auf eine Einladung. Im Café [[bestellen|bestellst]] du und [[bezahlen|bezahlst]]: [[zusammen]] oder [[getrennt]]?\n\nIn der WG hat Amara bald Geburtstag. Die anderen planen eine Überraschung.',
      'This chapter is about free time with friends: dates and birthdays, invitations, ordering and paying in a café. Grammar: separable verbs (einkaufen → ich kaufe ein), pronouns in the accusative (mich, dich …), für + accusative, and the past tense of haben and sein (hatte, war).',
      ['das Datum sagen', 'zu einer Party einladen', 'im Café bestellen und bezahlen', 'über gestern sprechen: war und hatte']),
    match('e-match', [['der Geburtstag', '🎂'], ['die Party', '🎉'], ['das Geschenk', '🎁'], ['die Kerze', '🕯️'], ['der Luftballon', '🎈'], ['die Torte', '🍰']], { task: 'Was ist das?', taskEn: 'Match the word to the picture.' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Wann hast du Geburtstag?', 'mint', 15,
  ['Ordinalzahlen', 'das Datum sagen'], [
    grammar('t1-gram', 'Ordinalzahlen und Datum', {
      intro: 'Für das Datum braucht man Ordinalzahlen. Bis 19: Zahl + **-te**. Ab 20: Zahl + **-ste**.',
      head: ['', 'Der Wievielte ist heute?', 'Wann …?'],
      rows: [['1.', 'der **erste**', 'am **ersten**'], ['2.', 'der zweite', 'am zweiten'], ['3.', 'der **dritte**', 'am **dritten**'], ['7.', 'der **siebte**', 'am **siebten**'], ['10.', 'der zehnte', 'am zehnten'], ['20.', 'der zwanzig**ste**', 'am zwanzig**sten**'], ['31.', 'der einunddreißigste', 'am einunddreißigsten']],
      notes: ['Unregelmäßig: **erste, dritte, siebte**.', 'Man schreibt: *der 3. Mai* oder *3.5.* Man sagt: *der dritte Mai, der dritte Fünfte*.', '*Heute ist **der** 3. Mai. Ich habe **am** 3. Mai Geburtstag.*'],
      en: 'Ordinals: add -te up to 19, -ste from 20. Irregular: erste, dritte, siebte. "Today is the 3rd" = Heute ist der dritte. "On the 3rd" = am dritten.',
    }),
    match('t1-match', [['1.', 'erste'], ['3.', 'dritte'], ['7.', 'siebte'], ['12.', 'zwölfte'], ['20.', 'zwanzigste'], ['25.', 'fünfundzwanzigste']], { task: 'Was passt?', taskEn: 'Match the ordinal number.' }),
    audio('t1-audio', 'Hören: Geburtstage in der WG', [
      ['nele', 'Wann hast du Geburtstag, Kenji?'],
      ['kenji', 'Am siebten Februar. Und du?'],
      ['nele', 'Am einundzwanzigsten Juni. Im Sommer! Felix hat am dritten Dezember Geburtstag.'],
      ['kenji', 'Und Amara?'],
      ['nele', 'Pssst! Amara hat am zwölften Oktober Geburtstag. Das ist nächste Woche! Wir machen eine Überraschungsparty.'],
    ], { task: 'Hör zu. Wer hat wann Geburtstag?', taskEn: 'Listen. When are the birthdays?' }),
    match('t1-match2', [['Kenji', '7. Februar'], ['Nele', '21. Juni'], ['Felix', '3. Dezember'], ['Amara', '12. Oktober']], { task: 'Wer hat wann Geburtstag?', taskEn: 'Match the person and the birthday.' }),
    gap('t1-gap', ['Heute ist der {{erste}} April. (1.)', 'Ich habe am {{dritten}} Mai Geburtstag. (3.)', 'Morgen ist der {{zehnte}}. (10.)', 'Die Party ist am {{zwanzigsten}} Juli. (20.)'],
      { task: 'Schreib die Ordinalzahl.', taskEn: 'Write the ordinal number as a word.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Eine Einladung', 'sky', 15,
  ['eine Einladung lesen', 'zusagen und absagen', 'trennbare Verben'], [
    text('t2-text', `Liebe Freunde,

am Samstag, 12. Oktober, hat Amara Geburtstag. Wir machen eine **Überraschungsparty** im Fuchsbau! Die Party fängt um 20 Uhr an. Bitte kommt pünktlich um halb acht. Amara kommt um acht vom Dienst nach Hause.

Bringt bitte etwas zu essen oder zu trinken mit. Und sagt nichts zu Amara!

Antwortet bitte bis Mittwoch.
Nele, Kenji und Felix`, { kicker: 'Lesen', title: 'Pssst! Eine Einladung', task: 'Lies die Einladung.', taskEn: 'Read the invitation.' }),
    mcq('t2-q1', 'Wann fängt die Party an?', ['um halb acht', 'um acht', 'am Mittwoch'], 1),
    mcq('t2-q2', 'Warum sollen die Gäste um halb acht kommen?', ['Amara kommt um acht nach Hause.', 'Das Essen ist um halb acht fertig.', 'Die Party ist kurz.'], 0),
    mcq('t2-q3', 'Was sollen die Gäste mitbringen?', ['Geschenke', 'etwas zu essen oder zu trinken', 'Musik'], 1),
    grammar('t2-gram', 'Trennbare Verben', {
      intro: 'Viele Verben haben eine Vorsilbe: **an**fangen, **mit**bringen, **ein**kaufen, **auf**stehen. Im Satz geht die Vorsilbe **ans Ende**.',
      head: ['Infinitiv', 'Satz'],
      rows: [['anfangen', 'Die Party **fängt** um 20 Uhr **an**.'], ['mitbringen', '**Bringst** du Chips **mit**?'], ['einkaufen', 'Kenji **kauft** am Freitag **ein**.'], ['einladen', 'Wir **laden** alle Freunde **ein**.']],
      notes: ['Mit Modalverb bleibt das Verb zusammen: *Ich **kann** Chips **mitbringen**.*'],
      en: 'Separable verbs: the prefix goes to the end of the sentence. With a modal verb, the infinitive stays together at the end.',
    }),
    gap('t2-gap', ['Die Party {{fängt}} um acht {{an}}. (anfangen)', 'Ich {{bringe}} einen Salat {{mit}}. (mitbringen)', 'Wann {{stehst}} du {{auf}}? (aufstehen)', 'Wir {{kaufen}} heute {{ein}}. (einkaufen)'],
      { task: 'Ergänze das trennbare Verb.', taskEn: 'Fill in both parts of the separable verb.' }),
    phrases('t2-phr', 'Auf eine Einladung antworten', {
      'Zusagen': ['Vielen Dank für die Einladung!', 'Ich komme gern.', 'Ich bringe einen Kuchen mit.'],
      'Absagen': ['Leider kann ich nicht kommen.', 'Ich muss arbeiten.', 'Viel Spaß!'],
    }),
    compose('t2-comp', 'Antworte auf die Einladung. Du kommst gern.', [
      ['Bedank dich.', 'Thank them.', ['Vielen Dank', 'für die', 'Einladung!']],
      ['Sag, dass du kommst.', 'Say you are coming.', ['Ich', 'komme', 'gern.']],
      ['Sag, was du mitbringst.', 'Say what you will bring.', ['Ich', 'bringe', 'einen Salat', 'mit.']],
    ], { task: 'Bau die Antwort.', taskEn: 'Build your reply.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Im Café', 'lilac', 15,
  ['bestellen und bezahlen', 'Personalpronomen im Akkusativ', 'für + Akkusativ'], [
    audio('t3-audio', 'Hören: Im Café Bohne', [
      ['ben', 'Hallo! Was darf ich euch bringen?'],
      ['nele', 'Ich hätte gern einen Cappuccino und ein Stück Apfelkuchen.'],
      ['kenji', 'Für mich einen grünen Tee, bitte.'],
      ['ben', 'Gern. Sonst noch etwas?'],
      ['kenji', 'Nein, danke.'],
      ['erzaehler', 'Später.'],
      ['nele', 'Wir möchten bitte bezahlen.'],
      ['ben', 'Zusammen oder getrennt?'],
      ['kenji', 'Zusammen. Ich lade dich ein, Nele!'],
      ['ben', 'Das macht neun Euro sechzig.'],
      ['kenji', 'Zehn Euro, bitte. Stimmt so.'],
    ], { task: 'Hör zu. Was bestellen Nele und Kenji?', taskEn: 'Listen. What do they order? "Stimmt so" means: keep the change.' }),
    mcq('t3-q1', 'Was trinkt Kenji?', ['Cappuccino', 'grünen Tee', 'Kaffee'], 1),
    mcq('t3-q2', 'Wer bezahlt?', ['Nele', 'Kenji', 'jeder für sich'], 1),
    mcq('t3-q3', 'Wie viel Trinkgeld gibt Kenji?', ['60 Cent', '40 Cent', '1 Euro'], 1, { why: '10,00 € minus 9,60 € = 0,40 €.' }),
    phrases('t3-phr', 'Im Café', {
      'Bestellen': ['Ich hätte gern …', 'Für mich bitte …', 'Ich nehme …'],
      'Bezahlen': ['Ich möchte bitte bezahlen.', 'Zusammen oder getrennt?', 'Stimmt so. / Das ist für Sie.'],
    }),
    tip('t3-tip', 'Trinkgeld', 'Im Café oder Restaurant gibt man in Deutschland, Österreich und der Schweiz oft **5 bis 10 Prozent** [[Trinkgeld]]. Man sagt den Betrag direkt beim Bezahlen: *„Zehn Euro, bitte.“* oder *„Stimmt so.“*'),
    grammar('t3-gram', 'Personalpronomen im Akkusativ und für', {
      head: ['Nominativ', 'Akkusativ', 'Beispiel'],
      rows: [['ich', '**mich**', 'Kenji lädt **mich** ein.'], ['du', '**dich**', 'Ich lade **dich** ein.'], ['er', '**ihn**', 'Ich rufe **ihn** an.'], ['sie', 'sie', 'Das Geschenk ist für **sie**.'], ['es', 'es', 'Ich kaufe **es**.'], ['wir', '**uns**', 'Besuchst du **uns**?'], ['ihr', '**euch**', 'Das ist für **euch**.'], ['sie / Sie', 'sie / Sie', 'Ich frage **Sie**.']],
      notes: ['**für** steht immer mit Akkusativ: *für mich, für den Vater, für einen Freund*.'],
      en: 'Accusative pronouns: mich, dich, ihn, sie, es, uns, euch, sie/Sie. The preposition für (for) always takes the accusative.',
    }),
    gap('t3-gap', ['Das Geschenk ist für {{dich}}. (du)', 'Rufst du {{mich}} an? (ich)', 'Wo ist Felix? Ich sehe {{ihn}} nicht. (er)', 'Wir laden {{euch}} ein. (ihr)', 'Der Kuchen ist für {{uns}}. (wir)'],
      { task: 'Ergänze das Pronomen.', taskEn: 'Fill in the accusative pronoun.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 6: Überraschung!', 'rose', 10,
  ['eine Geschichte hören', 'war und hatte verstehen'], [
    text('wg-intro', 'Es ist Samstag, acht Uhr. Die Wohnung ist dunkel. Alle Gäste warten. Die Tür geht auf …', { kicker: 'Die Geschichte', en: 'Saturday, eight o’clock. The flat is dark. All the guests are waiting. The door opens …' }),
    audio('wg-audio', 'Folge 6: Überraschung!', [
      ['amara', 'Hallo? Warum ist es so dunkel?'],
      ['nele', 'Überraschung! Alles Gute zum Geburtstag, Amara!'],
      ['amara', 'Oh! Wow! Das ist ja super! Danke, Leute!'],
      ['felix', 'Wie war dein Tag?'],
      ['amara', 'Mein Tag war schrecklich. Ich hatte viel Arbeit. Und ich war so traurig. Niemand hat gratuliert!'],
      ['kenji', 'Wir hatten einen Plan! Hier ist dein Geschenk.'],
      ['amara', 'Für mich? Ein Kochbuch aus Ghana! Danke, das ist so schön!'],
      ['felix', 'Und jetzt: Musik! Ich spiele ein Lied für dich.'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story.' }),
    mcq('wg-q1', 'Wie war Amaras Tag?', ['super', 'schrecklich', 'langweilig'], 1),
    mcq('wg-q2', 'Warum war Amara traurig?', ['Niemand hat gratuliert.', 'Sie war krank.', 'Sie hatte kein Geld.'], 0),
    mcq('wg-q3', 'Was ist das Geschenk?', ['ein Kochbuch', 'eine Gitarre', 'eine Torte'], 0),
    grammar('wg-gram', 'Präteritum: war und hatte', {
      intro: 'Für die Vergangenheit von **sein** und **haben** benutzt man meistens das Präteritum.',
      head: ['', 'sein', 'haben'],
      rows: [['ich', 'war', 'hatte'], ['du', 'warst', 'hattest'], ['er/sie/es', 'war', 'hatte'], ['wir', 'waren', 'hatten'], ['ihr', 'wart', 'hattet'], ['sie/Sie', 'waren', 'hatten']],
      en: 'Past tense of sein and haben: war (was), hatte (had). ich and er have the same form.',
    }),
    gap('wg-gap', ['Gestern {{war}} ich müde. (sein)', 'Wir {{hatten}} eine Party. (haben)', '{{Warst}} du im Café? (sein)', 'Amara {{hatte}} viel Arbeit. (haben)'],
      { task: 'Ergänze war oder hatte.', taskEn: 'Fill in the past tense of sein or haben.' }),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['trennbare Verben', 'Akkusativpronomen', 'Präteritum'], [
    grammar('g-1', 'Trennbare Verben im Satz', {
      head: ['Position 1', 'Position 2', 'Mitte', 'Ende'],
      rows: [['Ich', '**kaufe**', 'heute', '**ein**.'], ['Wann', '**fängt**', 'der Film', '**an**?'], ['**Bringst**', 'du', 'Chips', '**mit**?'], ['Ich', '**kann**', 'Chips', '**mitbringen**.']],
      en: 'Separable verbs form a bracket just like modal verbs.',
    }),
    sort('g-sort', ['trennbar', 'nicht trennbar'], [['einkaufen', 0], ['bezahlen', 1], ['anrufen', 0], ['bestellen', 1], ['mitbringen', 0], ['besuchen', 1], ['aufstehen', 0], ['verstehen', 1]],
      { task: 'Trennbar oder nicht?', taskEn: 'Separable or not? Prefixes like be-, ver- never separate.' }),
    mcq('g-q1', '„Ich ___ dich morgen ___.“ (anrufen)', ['anrufe … –', 'rufe … an', 'rufe an … –'], 1),
    mcq('g-q2', 'Das Geschenk ist für ___. (er)', ['er', 'ihn', 'ihm'], 1),
    mcq('g-q3', 'Gestern ___ wir keine Zeit.', ['waren', 'hatten', 'haben'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['im Café bestellen', 'Aussprache: ei, eu, au'], [
    compose('u-comp', 'Du bist im Café mit einer Freundin.', [
      ['Bestell einen Kaffee.', 'Order a coffee.', ['Ich', 'hätte gern', 'einen', 'Kaffee.']],
      ['Bestell auch Kuchen.', 'Order cake too.', ['Und', 'ein Stück', 'Kuchen,', 'bitte.']],
      ['Sag, dass du bezahlen möchtest.', 'Say you want to pay.', ['Ich', 'möchte', 'bitte', 'bezahlen.']],
      ['Lade deine Freundin ein.', 'Say you will treat your friend.', ['Ich', 'lade', 'dich', 'ein.']],
    ], { task: 'Bau das Gespräch.', taskEn: 'Build the conversation.' }),
    audio('u-aus', 'Aussprache: ei, eu, au', [
      ['frauKlein', 'ei spricht man wie „ai“: ein, mein, Einladung, Zeit.'],
      ['frauKlein', 'eu und äu spricht man wie „oi“: neu, heute, Freunde, Häuser.'],
      ['frauKlein', 'au spricht man wie „au“: auf, Haus, kaufen, Frau.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. ei = "eye", eu/äu = "oy", au = "ow".' }),
    sort('u-sort', ['ei', 'eu / äu', 'au'], [['Zeit', 0], ['heute', 1], ['Haus', 2], ['Einladung', 0], ['Freunde', 1], ['kaufen', 2], ['mein', 0], ['Häuser', 1], ['Frau', 2]],
      { task: 'Welcher Laut?', taskEn: 'Sort by sound.' }),
    order('u-order', ['Die Party', 'fängt', 'um acht', 'an.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['der Geburtstag', 'der Tag der Geburt', 'birthday'], ['Alles Gute!', 'so gratuliert man', 'all the best'], ['das Geschenk', 'man bekommt es zum Geburtstag', 'present'],
      ['die Einladung', 'Kommst du zur Party?', 'invitation'], ['einladen', 'zur Party bitten', 'to invite'], ['mitbringen', 'etwas dabei haben', 'to bring along'],
      ['anfangen', 'beginnen', 'to start'], ['bestellen', 'im Café sagen, was man möchte', 'to order'], ['bezahlen', 'Geld geben', 'to pay'],
      ['das Trinkgeld', 'extra Geld für den Kellner', 'tip'], ['gestern', 'der Tag vor heute', 'yesterday'], ['war / hatte', 'Vergangenheit von sein / haben', 'was / had'],
    ]),
    match('w-extra-party', [['einladen', 'to invite'], ['das Geschenk', 'present'], ['bestellen', 'to order'], ['bezahlen', 'to pay'], ['gestern', 'yesterday'], ['Alles Gute!', 'congratulations']],
      { task: 'Party und Café', taskEn: 'Party and café.' }),
    gap('w-extra-gap', ['Ich lade dich {{ein}}.', 'Wir fangen um acht Uhr {{an}}.', 'Ich möchte einen Kaffee {{bestellen}}.', 'Gestern {{war}} ich im Café.'],
      { bank: ['ein', 'an', 'bestellen', 'war'], task: 'Trennbare Verben und gestern', taskEn: 'Separable verbs and yesterday.' }),
    mcq('w-extra-q1', '„Kommst du zur Party?“ — Höfliche Absage:', ['Nein.', 'Leider kann ich nicht.', 'Tschüss!'], 1),
    text('w-story-tip', 'Optional lesen: **Im Café**.', { kicker: 'Extra', en: 'Optional reading: “Im Café”.' }),
    checklist('w-check', ['Ich kann das Datum sagen.', 'Ich kann zu einer Party einladen und antworten.', 'Ich kann im Café bestellen und bezahlen.', 'Ich kenne trennbare Verben.', 'Ich kann mit war und hatte über gestern sprechen.']),
  ]);

export const a1k6: Chapter = {
  id: 'a1-k6', number: 6, title: 'Zeit mit Freunden', theme: 'Datum, Geburtstag, Einladung, Café',
  grammar: 'Trennbare Verben. Personalpronomen im Akkusativ. für + Akkusativ. Präteritum von haben und sein.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a1k6-sprint', 'a1k6-memory', 'a1k6-satzbau', 'a1k6-artikel'],
  exam: [
    x(1, mcq('x1', 'Heute ist der ___ März. (3.)', ['dreite', 'dritte', 'dreißigste'], 1)),
    x(1, mcq('x2', 'Ich habe ___ 7. Juli Geburtstag.', ['im', 'um', 'am'], 2)),
    x(3, gap('x3', ['Ich {{kaufe}} heute {{ein}}. (einkaufen)', 'Er {{ruft}} mich {{an}}. (anrufen)'], { task: 'Trennbare Verben.' })),
    x(3, gap('x4', ['Das ist für {{dich}}. (du)', 'Ich sehe {{ihn}}. (er)', 'Besuchst du {{uns}}? (wir)'], { task: 'Pronomen im Akkusativ.' })),
    x(2, gap('x5', ['Gestern {{war}} ich krank. (sein)', 'Wir {{hatten}} keine Zeit. (haben)'], { task: 'war oder hatte.' })),
    x(1, mcq('x6', 'Wann ist das Grillfest?', ['am Freitag um 18 Uhr', 'am Samstag um 16 Uhr', 'am Sonntag um 16 Uhr'], 1),
      text('x-st1', 'Hallo Nachbarn! Am Samstag, 14. Juni, machen wir ein Grillfest im Hof. Es fängt um 16 Uhr an. Wir haben Würstchen und Getränke. Bringt bitte einen Salat oder einen Kuchen mit. Bis Samstag! Familie Schulz, 2. Stock', { kicker: 'Lesen' })),
    x(1, mcq('x7', 'Was sollen die Nachbarn mitbringen? (Text oben)', ['Würstchen', 'Getränke', 'Salat oder Kuchen'], 2)),
    x(1, mcq('x8', 'Was bestellt die Frau?', ['Tee und Kuchen', 'Kaffee und ein Wasser', 'Cola und Pizza'], 1),
      audio('x-st2', 'Hören: Im Restaurant', [
        ['ben', 'Guten Abend! Was möchten Sie trinken?'],
        ['elif', 'Einen Kaffee und ein Wasser, bitte.'],
        ['ben', 'Gern. Und zu essen?'],
        ['elif', 'Nichts, danke. Ich warte noch auf eine Freundin.'],
      ])),
    x(1, mcq('x9', 'Warum isst die Frau noch nichts? (Hörtext oben)', ['Sie hat keinen Hunger.', 'Sie wartet auf eine Freundin.', 'Das Essen ist teuer.'], 1)),
    x(2, order('x10', ['Ich', 'bringe', 'einen Kuchen', 'mit.'], { task: 'Bau den Satz.' })),
    x(1, mcq('x11', 'Der Kellner fragt: „Zusammen oder getrennt?“ Er meint:', ['die Rechnung', 'den Tisch', 'das Essen'], 0)),
    x(1, mcq('x12', 'Was sagst du zum Geburtstag?', ['Gute Besserung!', 'Alles Gute!', 'Guten Appetit!'], 1)),
  ],
};

export const gamesA1k6: GameDef[] = [
  {
    id: 'a1k6-sprint', engine: 'sprint', title: 'Pronomen-Sprint', blurb: 'mich, dich, ihn? Schnell!', skill: 'Akkusativpronomen', tone: 'mint', chapter: 6, emoji: '⚡',
    rules: 'Du siehst einen Satz und ein Pronomen im Nominativ. Tippe auf die Akkusativform.', label: 'Welches Pronomen?',
    items: [
      { q: 'Das ist für ___. (ich)', a: 'mich', wrong: ['mir', 'ich'] }, { q: 'Ich lade ___ ein. (du)', a: 'dich', wrong: ['dir', 'du'] },
      { q: 'Ich rufe ___ an. (er)', a: 'ihn', wrong: ['ihm', 'er'] }, { q: 'Wir besuchen ___. (sie, Singular)', a: 'sie', wrong: ['ihr', 'ihn'] },
      { q: 'Besuchst du ___? (wir)', a: 'uns', wrong: ['wir', 'unser'] }, { q: 'Das ist für ___. (ihr)', a: 'euch', wrong: ['ihr', 'euer'] },
      { q: 'Ich frage ___. (Sie)', a: 'Sie', wrong: ['Ihnen', 'Ihr'] }, { q: 'Kenji sieht ___ nicht. (er)', a: 'ihn', wrong: ['er', 'ihm'] },
      { q: 'Felix spielt ein Lied für ___. (du)', a: 'dich', wrong: ['du', 'dir'] }, { q: 'Ich kaufe ___. (es)', a: 'es', wrong: ['ihn', 'ihm'] },
      { q: 'Nele ruft ___ an. (wir)', a: 'uns', wrong: ['wir', 'euch'] }, { q: 'Liebst du ___? (ich)', a: 'mich', wrong: ['mir', 'ich'] },
    ],
  },
  {
    id: 'a1k6-memory', engine: 'memory', title: 'Datum-Memory', blurb: 'Zahl und Ordinalzahl: Finde die Paare.', skill: 'Ordinalzahlen', tone: 'lilac', chapter: 6, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist das Datum und das passende Wort.', kinds: ['Datum', 'Wort'],
    pairs: [['1.', 'der erste'], ['2.', 'der zweite'], ['3.', 'der dritte'], ['7.', 'der siebte'], ['8.', 'der achte'], ['11.', 'der elfte'], ['16.', 'der sechzehnte'], ['20.', 'der zwanzigste'], ['23.', 'der dreiundzwanzigste'], ['30.', 'der dreißigste']],
  },
  {
    id: 'a1k6-satzbau', engine: 'satzbau', title: 'Party-Baukasten', blurb: 'Trennbare Verben: Vorsilbe ans Ende!', skill: 'Trennbare Verben', tone: 'sky', chapter: 6, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Die Vorsilbe geht ans Ende.',
    sentences: [
      { parts: ['Die Party', 'fängt', 'um acht', 'an.'], hint: 'anfangen' },
      { parts: ['Ich', 'bringe', 'einen Salat', 'mit.'], hint: 'mitbringen' },
      { parts: ['Wir', 'laden', 'dich', 'ein.'], hint: 'einladen' },
      { parts: ['Rufst', 'du', 'mich', 'an?'], hint: 'anrufen, Ja/Nein-Frage' },
      { parts: ['Kenji', 'kauft', 'am Freitag', 'ein.'], hint: 'einkaufen' },
      { parts: ['Ich', 'kann', 'Chips', 'mitbringen.'], hint: 'Modalverb: Infinitiv zusammen' },
      { parts: ['Gestern', 'war', 'ich', 'müde.'], hint: 'Präteritum von sein' },
      { parts: ['Das Geschenk', 'ist', 'für', 'dich.'], hint: 'für + Akkusativ' },
    ],
  },
  {
    id: 'a1k6-artikel', engine: 'regen', title: 'Café-Regen', blurb: 'Bestellen, bezahlen oder gratulieren?', skill: 'Redemittel', tone: 'rose', chapter: 6, emoji: '☔',
    rules: 'Ein Satz fällt herunter. Wann sagt man das? Tippe auf die richtige Situation.', buckets: ['bestellen', 'bezahlen', 'gratulieren'],
    words: [['Ich hätte gern einen Tee.', 0], ['Für mich ein Wasser.', 0], ['Ich nehme den Kuchen.', 0], ['Eine Cola, bitte.', 0], ['Was empfehlen Sie?', 0], ['Die Karte, bitte.', 0], ['Zahlen, bitte!', 1], ['Zusammen oder getrennt?', 1], ['Stimmt so.', 1], ['Das macht 8 Euro.', 1], ['Getrennt, bitte.', 1], ['Ich lade dich ein.', 1], ['Alles Gute!', 2], ['Herzlichen Glückwunsch!', 2], ['Happy Birthday!', 2], ['Alles Liebe zum Geburtstag!', 2], ['Viel Glück im neuen Jahr!', 2], ['Feier schön!', 2]],
  },
];
