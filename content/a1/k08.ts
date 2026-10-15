import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A1 Kapitel 8: Körper, Krankheiten, beim Arzt, Sport und Gesundheit.
// Grammar: Imperativ mit du, ihr und Sie. Modalverben sollen, dürfen (und müssen). Aussprache: p/b, t/d, k/g.

export const glossaryA1k8: Record<string, GlossaryEntry> = {
  Körper: { de: 'Kopf, Arme, Beine, Bauch: alles zusammen.', en: 'body' },
  krank: { de: 'Nicht gesund. Man hat zum Beispiel Fieber.', en: 'sick, ill' },
  gesund: { de: 'Nicht krank. Man fühlt sich gut.', en: 'healthy' },
  Schmerzen: { de: 'Etwas tut weh. „Ich habe Kopfschmerzen.“', en: 'pain' },
  Fieber: { de: 'Der Körper ist zu warm, über 38 Grad.', en: 'fever' },
  Erkältung: { de: 'Eine leichte Krankheit mit Schnupfen und Husten.', en: 'cold (illness)' },
  Praxis: { de: 'Die Räume von einem Arzt oder einer Ärztin.', en: 'doctor’s office, practice' },
  Krankmeldung: { de: 'Ein Papier vom Arzt für die Arbeit: Diese Person ist krank.', en: 'sick note' },
  Medikament: { de: 'Eine Tablette oder ein Saft gegen eine Krankheit.', en: 'medicine' },
  Apotheke: { de: 'Hier kauft man Medikamente.', en: 'pharmacy' },
  sollen: { de: 'Eine andere Person sagt, was man machen muss. „Der Arzt sagt, ich soll im Bett bleiben.“', en: 'should, to be supposed to' },
  dürfen: { de: 'Etwas ist erlaubt. „Du darfst hier parken.“', en: 'to be allowed to, may' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Wie geht es dir?', 'butter', 8,
  ['das Kapitel kennenlernen', 'Körperteile benennen'], [
    overview('e-over', 'Kapitel 8: Fit und gesund',
      'In Kapitel 8 geht es um den [[Körper]] und die Gesundheit. Du sagst, was dir wehtut, und verstehst Tipps vom Arzt. Bist du [[krank]] oder [[gesund]]? Hast du [[Fieber]] oder eine [[Erkältung]]? Du machst einen Termin in der [[Praxis]] und holst ein [[Medikament]] in der [[Apotheke]].\n\nGrammatik: Der **Imperativ** für du und ihr, und die Modalverben [[sollen]] und [[dürfen]].',
      'This chapter is about the body and health: saying what hurts, a visit to the doctor, advice and tips. Grammar: imperatives with du, ihr and Sie, and the modal verbs sollen (should) and dürfen (may, to be allowed). Pronunciation: p/b, t/d, k/g.',
      ['Körperteile nennen', 'sagen, was wehtut', 'beim Arzt sprechen', 'Tipps geben und verstehen']),
    match('e-match', [['der Kopf', '🗣️'], ['das Auge', '👁️'], ['das Ohr', '👂'], ['die Nase', '👃'], ['der Mund', '👄'], ['die Hand', '✋'], ['der Fuß', '🦶'], ['das Bein', '🦵']],
      { task: 'Körperteile', taskEn: 'Match the body parts.' }),
    tip('e-tip', 'Plural', 'Viele Körperteile hat man zweimal: das Auge, **die Augen**. das Ohr, **die Ohren**. die Hand, **die Hände**. der Fuß, **die Füße**. das Bein, **die Beine**.'),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Was tut weh?', 'mint', 15,
  ['Schmerzen beschreiben', 'Krankheiten nennen'], [
    grammar('t1-gram', 'Was fehlt dir?', {
      head: ['', 'Beispiel'],
      rows: [['… tut weh / tun weh', 'Mein Kopf **tut** weh. Meine Füße **tun** weh.'], ['…schmerzen haben', 'Ich habe **Kopf**schmerzen / **Bauch**schmerzen / **Hals**schmerzen.'], ['Krankheiten', 'Ich habe **Fieber** / **Husten** / **Schnupfen** / eine **Erkältung**.']],
      notes: ['Fragen: *Was fehlt dir? Was fehlt Ihnen? Was tut dir weh?*'],
      en: 'Say what hurts: Mein Kopf tut weh (my head hurts) or Ich habe Kopfschmerzen (I have a headache). Was fehlt Ihnen? = What is wrong?',
    }),
    match('t1-match', [['🤒', 'Ich habe Fieber.'], ['🤧', 'Ich habe Schnupfen.'], ['😷', 'Ich habe Husten.'], ['🤕', 'Ich habe Kopfschmerzen.'], ['🦷', 'Ich habe Zahnschmerzen.']], { task: 'Was fehlt?', taskEn: 'Match the picture and the sentence.' }),
    audio('t1-audio', 'Hören: Felix ist krank', [
      ['nele', 'Felix, du bist so blass! Was ist los?'],
      ['felix', 'Ich fühle mich nicht gut. Mein Hals tut weh und ich habe Husten.'],
      ['nele', 'Hast du auch Fieber?'],
      ['felix', 'Ja, achtunddreißig Komma fünf.'],
      ['nele', 'Oje. Bleib im Bett! Ich mache dir einen Tee.'],
      ['felix', 'Aber heute Abend habe ich ein Konzert!'],
      ['nele', 'Felix, mit Fieber spielst du kein Konzert. Ruf morgen beim Arzt an!'],
    ], { task: 'Hör zu. Was hat Felix?', taskEn: 'Listen. What is wrong with Felix?' }),
    mcq('t1-q1', 'Was tut Felix weh?', ['der Kopf', 'der Hals', 'der Bauch'], 1),
    mcq('t1-q2', 'Wie hoch ist sein Fieber?', ['37,5', '38,5', '39,5'], 1),
    mcq('t1-q3', 'Was soll Felix machen?', ['ein Konzert spielen', 'im Bett bleiben', 'Sport machen'], 1),
    gap('t1-gap', ['Mein Kopf {{tut}} weh.', 'Meine Augen {{tun}} weh.', 'Ich {{habe}} Halsschmerzen.', 'Was {{fehlt}} Ihnen?'], { bank: ['tut', 'tun', 'habe', 'fehlt'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'In der Arztpraxis', 'sky', 15,
  ['einen Termin beim Arzt machen', 'den Arzt verstehen', 'sollen und dürfen'], [
    audio('t2-audio', 'Hören: Beim Arzt', [
      ['herrYilmaz', 'Guten Tag, Herr Huber. Was fehlt Ihnen?'],
      ['felix', 'Ich habe Halsschmerzen, Husten und Fieber. Seit zwei Tagen.'],
      ['herrYilmaz', 'Machen Sie bitte den Mund auf. Sagen Sie „Aaaa“.'],
      ['felix', 'Aaaa.'],
      ['herrYilmaz', 'Ihr Hals ist sehr rot. Sie haben eine starke Erkältung. Sie sollen drei Tage im Bett bleiben und viel trinken.'],
      ['felix', 'Darf ich am Samstag Gitarre spielen? Ich habe ein Konzert.'],
      ['herrYilmaz', 'Gitarre spielen ja, singen nein! Hier ist ein Rezept für Hustensaft. Und Sie bekommen eine Krankmeldung bis Freitag.'],
    ], { task: 'Hör zu. Was sagt der Arzt?', taskEn: 'Listen. What does the doctor say? Dr. Yılmaz is from Graz in Austria.' }),
    mcq('t2-q1', 'Seit wann ist Felix krank?', ['seit gestern', 'seit zwei Tagen', 'seit einer Woche'], 1),
    mcq('t2-q2', 'Was soll Felix machen?', ['drei Tage im Bett bleiben und viel trinken', 'singen', 'Sport machen'], 0),
    mcq('t2-q3', 'Darf Felix am Samstag singen?', ['Ja.', 'Nein.', 'Ein bisschen.'], 1),
    grammar('t2-gram', 'sollen und dürfen', {
      head: ['', 'sollen', 'dürfen', 'müssen'],
      rows: [['ich', 'soll', 'darf', 'muss'], ['du', 'sollst', 'darfst', 'musst'], ['er/sie/es', 'soll', 'darf', 'muss'], ['wir', 'sollen', 'dürfen', 'müssen'], ['ihr', 'sollt', 'dürft', 'müsst'], ['sie/Sie', 'sollen', 'dürfen', 'müssen']],
      notes: ['**sollen**: Eine andere Person sagt das. *Der Arzt sagt, ich **soll** viel trinken.*', '**dürfen**: Das ist erlaubt. *Ich **darf** Gitarre spielen.*', '**nicht dürfen**: Das ist verboten! *Ich **darf nicht** singen.*', '**müssen**: Das ist nötig. *Ich **muss** zum Arzt gehen.*'],
      en: 'sollen = should (someone else’s advice or order). dürfen = may, to be allowed. nicht dürfen = must not. müssen = have to.',
    }),
    sort('t2-sort', ['erlaubt (dürfen)', 'nicht erlaubt (nicht dürfen)'], [['Gitarre spielen', 0], ['singen', 1], ['Tee trinken', 0], ['rauchen', 1], ['schlafen', 0], ['joggen', 1]],
      { task: 'Was darf Felix? Was darf er nicht?', taskEn: 'What is Felix allowed to do while he is sick?' }),
    gap('t2-gap', ['Der Arzt sagt, ich {{soll}} im Bett bleiben. (sollen)', 'Du {{darfst}} nicht rauchen. (dürfen)', '{{Darf}} ich Sport machen? (dürfen)', 'Ihr {{sollt}} viel Wasser trinken. (sollen)'],
      { task: 'Ergänze sollen oder dürfen.', taskEn: 'Fill in sollen or dürfen.' }),
    phrases('t2-phr', 'In der Praxis', {
      'Anmeldung': ['Ich möchte einen Termin, bitte.', 'Haben Sie Ihre Versichertenkarte?', 'Nehmen Sie bitte im Wartezimmer Platz.'],
      'Beim Arzt': ['Was fehlt Ihnen?', 'Seit wann haben Sie die Schmerzen?', 'Ich brauche eine Krankmeldung.'],
      'Gute Wünsche': ['Gute Besserung!', 'Werd schnell gesund!'],
    }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Tipps für die Gesundheit', 'lilac', 15,
  ['Tipps geben', 'Imperativ mit du und ihr'], [
    text('t3-text', `**Fit im Winter: 5 Tipps von Dr. Yılmaz**

1. **Trink** viel Wasser oder Tee, mindestens zwei Liter pro Tag.
2. **Iss** viel Obst und Gemüse.
3. **Geh** jeden Tag eine halbe Stunde spazieren.
4. **Schlaf** acht Stunden.
5. **Wasch** dir oft die Hände.`, { kicker: 'Lesen', task: 'Lies die Tipps.', taskEn: 'Read the health tips.' }),
    mcq('t3-q1', 'Wie viel soll man trinken?', ['einen Liter', 'mindestens zwei Liter', 'acht Liter'], 1),
    mcq('t3-q2', 'Wie lange soll man spazieren gehen?', ['eine halbe Stunde', 'acht Stunden', 'zwei Stunden'], 0),
    grammar('t3-gram', 'Der Imperativ', {
      intro: 'Mit dem Imperativ gibt man Tipps oder Anweisungen.',
      head: ['Infinitiv', 'du', 'ihr', 'Sie'],
      rows: [['trinken', '**Trink** viel!', '**Trinkt** viel!', '**Trinken Sie** viel!'], ['schlafen', '**Schlaf** viel!', '**Schlaft** viel!', '**Schlafen Sie** viel!'], ['essen', '**Iss** Obst!', '**Esst** Obst!', '**Essen Sie** Obst!'], ['nehmen', '**Nimm** die Tablette!', '**Nehmt** die Tablette!', '**Nehmen Sie** die Tablette!'], ['anrufen', '**Ruf** den Arzt **an**!', '**Ruft** den Arzt **an**!', '**Rufen Sie** den Arzt **an**!'], ['sein', '**Sei** ruhig!', '**Seid** ruhig!', '**Seien Sie** ruhig!']],
      notes: ['**du**: du-Form ohne *du* und ohne *-st*: du trinkst → Trink!', 'Vokalwechsel e → i/ie bleibt: du isst → Iss! du nimmst → Nimm!', 'Aber a → ä nicht: du schläfst → **Schlaf**!', '**ihr**: wie ihr-Form, ohne *ihr*: ihr trinkt → Trinkt!'],
      en: 'Imperative for du: take the du form, drop du and -st (du trinkst → Trink!). For ihr: the ihr form without ihr (Trinkt!). For Sie: verb + Sie.',
    }),
    gap('t3-gap', ['(trinken, du) {{Trink}} viel Tee!', '(nehmen, du) {{Nimm}} eine Tablette!', '(gehen, ihr) {{Geht}} früh ins Bett!', '(essen, du) {{Iss}} mehr Gemüse!', '(bleiben, Sie) {{Bleiben}} Sie zu Hause!'],
      { task: 'Ergänze den Imperativ.', taskEn: 'Fill in the imperative.' }),
    compose('t3-comp', 'Deine Freundin hat eine Erkältung. Gib ihr drei Tipps.', [
      ['Tipp 1: viel Tee trinken', 'Tip 1: drink lots of tea', ['Trink', 'viel', 'Tee!']],
      ['Tipp 2: im Bett bleiben', 'Tip 2: stay in bed', ['Bleib', 'im', 'Bett!']],
      ['Tipp 3: zum Arzt gehen', 'Tip 3: go to the doctor', ['Geh', 'zum', 'Arzt!']],
      ['Wünsch ihr etwas.', 'Wish her well.', ['Gute Besserung', 'und', 'bis bald!']],
    ], { task: 'Bau die Tipps.', taskEn: 'Build your tips.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 8: Die WG-Krankenschwester', 'rose', 10,
  ['eine Geschichte hören', 'Imperativ im Kontext'], [
    text('wg-intro', 'Felix ist im Bett. Amara ist Pflegerin. Sie weiß, was er braucht.', { kicker: 'Die Geschichte', en: 'Felix is in bed. Amara is a nurse. She knows what he needs.' }),
    audio('wg-audio', 'Folge 8: Die WG-Krankenschwester', [
      ['amara', 'So, Felix. Hier ist dein Tee. Trink ihn langsam. Er ist heiß.'],
      ['felix', 'Danke, Amara. Du bist ein Engel.'],
      ['amara', 'Und nimm deinen Hustensaft. Dreimal am Tag.'],
      ['felix', 'Darf ich ein bisschen Gitarre spielen?'],
      ['amara', 'Ja, aber leise! Kenji schläft. Er hat heute Nachtschicht.'],
      ['kenji', 'Ich schlafe nicht mehr … Felix, spiel doch mal etwas Ruhiges.'],
      ['felix', 'Okay. Ein Schlaflied. Für alle!'],
      ['amara', 'Und Felix: kein Handy, keine Pizza. Schlaf!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story.' }),
    mcq('wg-q1', 'Wie oft soll Felix den Hustensaft nehmen?', ['einmal am Tag', 'zweimal am Tag', 'dreimal am Tag'], 2),
    mcq('wg-q2', 'Warum soll Felix leise spielen?', ['Kenji schläft.', 'Amara arbeitet.', 'Die Nachbarn sind krank.'], 0),
    mcq('wg-q3', 'Was darf Felix nicht?', ['Tee trinken', 'Handy und Pizza', 'Gitarre spielen'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Imperativ', 'Modalverben'], [
    grammar('g-1', 'Alle Modalverben bis jetzt', {
      head: ['', 'können', 'müssen', 'wollen', 'sollen', 'dürfen', 'möchten'],
      rows: [['ich', 'kann', 'muss', 'will', 'soll', 'darf', 'möchte'], ['du', 'kannst', 'musst', 'willst', 'sollst', 'darfst', 'möchtest'], ['er/sie/es', 'kann', 'muss', 'will', 'soll', 'darf', 'möchte'], ['wir', 'können', 'müssen', 'wollen', 'sollen', 'dürfen', 'möchten']],
      en: 'All modal verbs together. Remember: no ending for ich and er/sie/es, and the infinitive goes to the end.',
    }),
    mcq('g-q1', 'Imperativ von „du nimmst“:', ['Nehm!', 'Nimm!', 'Nimmst!'], 1),
    mcq('g-q2', 'Imperativ von „du schläfst“:', ['Schläf!', 'Schlaf!', 'Schläfst!'], 1),
    mcq('g-q3', 'Im Krankenhaus ist Rauchen verboten. Man ___ nicht rauchen.', ['darf', 'soll', 'will'], 0),
    mcq('g-q4', 'Imperativ für Kinder (ihr): „___ leise!“', ['Seid', 'Sind', 'Sei'], 0),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Tipps geben', 'Aussprache: p/b, t/d, k/g'], [
    order('u-order', ['Der Arzt', 'sagt,', 'ich', 'soll', 'viel trinken.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
    audio('u-aus', 'Aussprache: hart und weich', [
      ['frauKlein', 'p und b: Papier, Bein. Paar, Bar.'],
      ['frauKlein', 't und d: Tee, der. Tante, danke.'],
      ['frauKlein', 'k und g: Kopf, gut. Kuchen, gesund.'],
      ['frauKlein', 'Achtung: Am Wortende klingt b wie p, d wie t, g wie k: gelb, Hand, Tag.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. At the end of a word, b, d, g sound like p, t, k.' }),
    sort('u-sort', ['am Ende hart (p, t, k)', 'weich (b, d, g)'], [['Hand', 0], ['danke', 1], ['Tag', 0], ['gut', 1], ['gelb', 0], ['Bein', 1]], { task: 'Hart oder weich?', taskEn: 'Hard or soft sound?' }),
    gap('u-gap', ['Ich habe {{Kopfschmerzen}}. (🤕)', 'Mein {{Bauch}} tut weh.', 'Gute {{Besserung}}!'], { task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['der Kopf', 'oben am Körper', 'head'], ['der Bauch', 'in der Mitte vom Körper', 'belly, stomach'], ['der Hals', 'zwischen Kopf und Körper', 'throat, neck'],
      ['wehtun', 'Schmerzen machen', 'to hurt'], ['das Fieber', 'über 38 Grad', 'fever'], ['der Husten', 'kch, kch!', 'cough'],
      ['die Erkältung', 'Schnupfen und Husten', 'cold'], ['der Arzt / die Ärztin', 'hilft Kranken', 'doctor'], ['die Apotheke', 'hier gibt es Medikamente', 'pharmacy'],
      ['das Rezept', 'Papier vom Arzt für Medikamente', 'prescription'], ['Gute Besserung!', 'Werd schnell gesund!', 'get well soon'], ['dürfen', 'erlaubt sein', 'may, be allowed'],
    ]),
    match('w-extra-body', [['der Kopf', 'head'], ['der Bauch', 'stomach'], ['der Hals', 'throat'], ['das Fieber', 'fever'], ['die Apotheke', 'pharmacy'], ['weh tun', 'to hurt']],
      { task: 'Körper und Gesundheit', taskEn: 'Body and health.' }),
    gap('w-extra-gap', ['Mir tut der {{Kopf}} weh.', 'Ich habe {{Fieber}}.', 'Sie {{sollen}} viel trinken.', 'Hier {{dürfen}} Sie nicht rauchen.'],
      { bank: ['Kopf', 'Fieber', 'sollen', 'dürfen'], task: 'Beim Arzt', taskEn: 'At the doctor.' }),
    mcq('w-extra-q1', 'Imperativ (du): „___ bitte das Fenster auf!“', ['Mach', 'Macht', 'Machen'], 0),
    checklist('w-check', ['Ich kann Körperteile nennen.', 'Ich kann sagen, was mir wehtut.', 'Ich verstehe einfache Anweisungen beim Arzt.', 'Ich kann Tipps mit dem Imperativ geben.', 'Ich kenne sollen und dürfen.']),
  ]);

export const a1k8: Chapter = {
  id: 'a1-k8', number: 8, title: 'Fit und gesund', theme: 'Körper, Krankheit, Arztbesuch, Gesundheitstipps',
  grammar: 'Imperativ mit du, ihr, Sie. Modalverben sollen und dürfen.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a1k8-sprint', 'a1k8-memory', 'a1k8-satzbau', 'a1k8-artikel'],
  exam: [
    x(1, mcq('x1', 'Meine Füße ___ weh.', ['tut', 'tun', 'tust'], 1)),
    x(1, mcq('x2', 'Was sagst du zu einer kranken Freundin?', ['Guten Appetit!', 'Gute Besserung!', 'Viel Glück!'], 1)),
    x(1, mcq('x3', 'Im Kino ___ man nicht telefonieren.', ['darf', 'kann', 'will'], 0)),
    x(4, gap('x4', ['(trinken, du) {{Trink}} viel Wasser!', '(essen, du) {{Iss}} einen Apfel!', '(kommen, ihr) {{Kommt}} schnell!', '(warten, Sie) {{Warten}} Sie bitte!'], { task: 'Imperativ.' })),
    x(2, gap('x5', ['Der Arzt sagt, du {{sollst}} im Bett bleiben. (sollen)', '{{Darf}} ich hier parken? (dürfen)'], { task: 'sollen oder dürfen.' })),
    x(1, mcq('x6', 'Wann ist die Praxis am Mittwoch offen?', ['8 bis 12 Uhr', '8 bis 18 Uhr', 'geschlossen'], 0),
      text('x-st1', '**Praxis Dr. med. Anna Roth, Allgemeinmedizin**\nMontag, Dienstag, Donnerstag: 8 bis 12 und 15 bis 18 Uhr\nMittwoch und Freitag: 8 bis 12 Uhr\nTermine nur mit Anmeldung: Tel. 0341 556677', { kicker: 'Lesen' })),
    x(1, mcq('x7', 'Kann man am Freitag um 16 Uhr in die Praxis gehen? (Text oben)', ['Ja.', 'Nein.', 'Nur mit Termin.'], 1)),
    x(1, mcq('x8', 'Was hat die Frau?', ['Bauchschmerzen', 'Kopfschmerzen und Fieber', 'Zahnschmerzen'], 1),
      audio('x-st2', 'Hören: Am Telefon mit der Praxis', [
        ['frauBaumann', 'Praxis Dr. Roth, guten Morgen.'],
        ['elif', 'Guten Morgen, hier ist Elif Demir. Ich habe Kopfschmerzen und Fieber. Kann ich heute kommen?'],
        ['frauBaumann', 'Heute ist es sehr voll. Kommen Sie um halb zwölf. Bringen Sie bitte Ihre Versichertenkarte mit.'],
        ['elif', 'Halb zwölf, gut. Danke!'],
      ])),
    x(1, mcq('x9', 'Wann soll Frau Demir kommen? (Hörtext oben)', ['um 11:30', 'um 12:30', 'um 10:30'], 0)),
    x(2, order('x10', ['Nimm', 'eine', 'Tablette!'], { task: 'Bau den Satz.' })),
    x(1, mcq('x11', 'Wo kauft man Medikamente?', ['in der Apotheke', 'in der Bäckerei', 'in der Praxis'], 0)),
    x(1, mcq('x12', 'Der Arzt gibt dir ein Papier für die Arbeit. Das ist eine …', ['Krankmeldung', 'Einladung', 'Rechnung'], 0)),
  ],
};

export const gamesA1k8: GameDef[] = [
  {
    id: 'a1k8-sprint', engine: 'sprint', title: 'Imperativ-Sprint', blurb: 'Gib schnelle Tipps!', skill: 'Imperativ', tone: 'mint', chapter: 8, emoji: '⚡',
    rules: 'Du siehst ein Verb und eine Person. Tippe auf den richtigen Imperativ.', label: 'Welcher Imperativ?',
    items: [
      { q: 'trinken (du)', a: 'Trink!', wrong: ['Trinkst!', 'Trinke du!'] }, { q: 'essen (du)', a: 'Iss!', wrong: ['Ess!', 'Isst!'] },
      { q: 'nehmen (du)', a: 'Nimm!', wrong: ['Nehm!', 'Nimmst!'] }, { q: 'schlafen (du)', a: 'Schlaf!', wrong: ['Schläf!', 'Schläfst!'] },
      { q: 'kommen (ihr)', a: 'Kommt!', wrong: ['Kommen!', 'Komm!'] }, { q: 'sein (du)', a: 'Sei ruhig!', wrong: ['Bist ruhig!', 'Seid ruhig!'] },
      { q: 'sein (ihr)', a: 'Seid ruhig!', wrong: ['Sei ruhig!', 'Sind ruhig!'] }, { q: 'warten (Sie)', a: 'Warten Sie!', wrong: ['Wartet Sie!', 'Warte Sie!'] },
      { q: 'anrufen (du)', a: 'Ruf an!', wrong: ['Anruf!', 'Rufst an!'] }, { q: 'gehen (ihr)', a: 'Geht!', wrong: ['Gehen!', 'Geh!'] },
      { q: 'lesen (du)', a: 'Lies!', wrong: ['Les!', 'Liest!'] }, { q: 'fahren (du)', a: 'Fahr!', wrong: ['Fähr!', 'Fährst!'] },
    ],
  },
  {
    id: 'a1k8-memory', engine: 'memory', title: 'Körper-Memory', blurb: 'Körperteil und Bild: Finde die Paare.', skill: 'Körper', tone: 'lilac', chapter: 8, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Körperteil und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['das Auge', '👁️'], ['das Ohr', '👂'], ['die Nase', '👃'], ['der Mund', '👄'], ['die Hand', '✋'], ['der Fuß', '🦶'], ['das Bein', '🦵'], ['der Zahn', '🦷'], ['der Arm', '💪'], ['das Herz', '❤️']],
  },
  {
    id: 'a1k8-satzbau', engine: 'satzbau', title: 'Arzt-Baukasten', blurb: 'Bau Sätze in der Praxis.', skill: 'Satzbau', tone: 'sky', chapter: 8, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Mein Kopf', 'tut', 'sehr', 'weh.'], hint: 'wehtun' },
      { parts: ['Ich', 'habe', 'seit zwei Tagen', 'Fieber.'], hint: 'seit + Zeit' },
      { parts: ['Sie', 'sollen', 'viel', 'trinken.'], hint: 'sollen + Infinitiv' },
      { parts: ['Darf', 'ich', 'Sport', 'machen?'], hint: 'Ja/Nein-Frage mit dürfen' },
      { parts: ['Bleib', 'heute', 'im', 'Bett!'], hint: 'Imperativ du' },
      { parts: ['Nehmen', 'Sie', 'die Tabletten', 'dreimal am Tag.'], hint: 'Imperativ Sie' },
      { parts: ['Was', 'fehlt', 'Ihnen', 'denn?'], hint: 'W-Frage' },
      { parts: ['Ich', 'brauche', 'eine', 'Krankmeldung.'], hint: 'Akkusativ' },
    ],
  },
  {
    id: 'a1k8-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Körper und Gesundheit.', skill: 'Artikel', tone: 'rose', chapter: 8, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Kopf, das Auge, die Nase, der Mund, das Ohr, die Hand, der Fuß, das Bein, die Apotheke, der Arzt, das Fieber, die Erkältung, der Husten, das Rezept, die Praxis, der Bauch, das Medikament, die Tablette'),
  },
];
