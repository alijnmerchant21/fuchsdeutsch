import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// B1 Kapitel 10: Miteinander. Soziales Engagement, Institutionen in der Stadt, Europa, Politik.
// Grammar: Passiv Präsens, Präteritum, Perfekt, Passiv mit Modalverb, von + Dativ.
// Aussprache: Kontrastakzente in Fragen mit oder. Strategie: Tipps für eine Präsentation.
// Landeskunde: Mini-München, Europäische Union. Prüfungstraining: Sprechen Teil 2.

export const glossaryB1k10: Record<string, GlossaryEntry> = {
  Engagement: { de: 'Man setzt sich aktiv für etwas ein, zum Beispiel für andere Menschen oder die Umwelt.', en: 'commitment, involvement' },
  Ehrenamt: { de: 'Eine Arbeit, für die man kein Geld bekommt. Man macht sie freiwillig, um anderen zu helfen.', en: 'volunteer work' },
  ehrenamtlich: { de: 'freiwillig und ohne Bezahlung', en: 'as a volunteer, unpaid' },
  Passiv: { de: 'Eine Form des Verbs. Wichtig ist, was passiert, nicht wer es macht: Der Brief wird geschrieben.', en: 'passive voice' },
  Mieterverein: { de: 'Ein Verein, der Mieterinnen und Mieter berät und ihnen bei Problemen mit dem Vermieter hilft.', en: 'tenants’ association' },
  Hausgemeinschaft: { de: 'Alle Menschen, die zusammen in einem Haus wohnen.', en: 'the residents of a building' },
  Unterschrift: { de: 'Der eigene Name, mit der Hand geschrieben, zum Beispiel unter einem Brief oder Vertrag.', en: 'signature' },
  Härtefall: { de: 'Eine Situation, in der eine Regel für eine Person besonders schwer oder ungerecht ist.', en: 'case of hardship' },
  Frist: { de: 'Die Zeit, bis zu der man etwas machen oder abgeben muss.', en: 'deadline' },
  Protokoll: { de: 'Ein Text, in dem steht, was bei einem Treffen besprochen und beschlossen wurde.', en: 'minutes (of a meeting)' },
  Beschluss: { de: 'Eine Entscheidung, die eine Gruppe zusammen trifft.', en: 'decision, resolution' },
  Petition: { de: 'Ein offizieller Brief mit vielen Unterschriften an eine Regierung oder ein Parlament.', en: 'petition' },
  Institution: { de: 'Eine öffentliche Einrichtung, zum Beispiel das Rathaus, eine Schule oder ein Gericht.', en: 'institution' },
  Kinderspielstadt: { de: 'Eine Stadt zum Spielen, in der Kinder für ein paar Wochen arbeiten, wählen und Geld verdienen.', en: 'children’s play city' },
  'Europäische Union': { de: 'Ein Bund von 27 europäischen Staaten, die politisch und wirtschaftlich zusammenarbeiten.', en: 'European Union (EU)' },
  Mitgliedstaat: { de: 'Ein Land, das zu einer Organisation wie der EU gehört.', en: 'member state' },
  Präsentation: { de: 'Ein kurzer Vortrag über ein Thema, oft mit Folien.', en: 'presentation' },
  Tafel: { de: 'Eine Organisation, die Lebensmittel sammelt und an Menschen mit wenig Geld verteilt.', en: 'food bank' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Gemeinsam geht mehr', 'butter', 8,
  ['das Kapitel kennenlernen', 'Formen von sozialem Engagement benennen'], [
    overview('e-over', 'Kapitel 10: Miteinander',
      'Juni in Leipzig. Im Fuchsbau wird es ernst: Die Pläne für die Modernisierung sind da, und die Mieterinnen und Mieter wollen nicht mehr nur warten. In Kapitel 10 geht es um [[Engagement|soziales Engagement]] und das [[Ehrenamt]]: Menschen helfen bei der [[Tafel]], trainieren Kinder oder renovieren ein Jugendzentrum. Du liest einen Artikel über die [[Kinderspielstadt]] Mini-München und sprichst über [[Institution|Institutionen]] in der Stadt. Du lernst Grundinformationen über die [[Europäische Union]].\n\nDie Grammatik ist das [[Passiv]]: *Unterschriften werden gesammelt. Ein Brief wurde geschrieben. Ein Anwalt muss gefragt werden.* In der WG gehen Nele und Herr Lehmann zum [[Mieterverein]], und in Kenjis Restaurant trifft sich die ganze [[Hausgemeinschaft]]. Im Prüfungstraining baust du eine kurze [[Präsentation]] mit fünf Folien.',
      'This chapter is about working together: volunteering, social projects, institutions in the city and the European Union. You read an article about Mini-München, a play city run by children, and you learn basic facts about the EU. The grammar is the passive voice, which describes what is being done rather than who does it: Präsens (wird gemacht), Präteritum (wurde gemacht), Perfekt (ist gemacht worden) and the passive with modal verbs (muss gemacht werden). The person who does the action is added with von + dative. In the story, the tenants get advice from a tenants’ association and hold a neighborhood meeting in Kenji’s restaurant. Exam training: Goethe B1 Speaking Part 2, a short presentation with five slides.',
      ['über soziales Engagement sprechen', 'Vorgänge beschreiben (Passiv)', 'einen Artikel über ein Projekt verstehen', 'über Institutionen in der Stadt sprechen', 'Informationen über die EU verstehen', 'eine kurze Präsentation halten']),
    match('e-match', [['im Tierheim helfen', '🐕'], ['bei der Tafel Essen verteilen', '🥫'], ['Kindern bei den Hausaufgaben helfen', '📚'], ['bei der Freiwilligen Feuerwehr mitmachen', '🚒'], ['ältere Menschen besuchen', '👵'], ['den Park sauber machen', '🌳'], ['im Sportverein Kinder trainieren', '⚽'], ['Geflüchteten beim Deutschlernen helfen', '🗣️']],
      { task: 'Welches Engagement passt zum Bild?', taskEn: 'Match each kind of volunteer work to the picture.' }),
    sort('e-sort', ['Werte', 'Politik', 'Europa'], [['die Toleranz', 0], ['die Solidarität', 0], ['die Hilfsbereitschaft', 0], ['die Wahl', 1], ['der Stadtrat', 1], ['die Partei', 1], ['der Euro', 2], ['das Europäische Parlament', 2], ['das Erasmus-Programm', 2]],
      { task: 'Werte, Politik oder Europa? Sortiere.', taskEn: 'Sort the words: social values, politics or Europe?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Eine Stadt nur für Kinder', 'mint', 15,
  ['einen Artikel über ein Projekt verstehen', 'Vorgänge beschreiben', 'das Passiv Präsens'], [
    text('t1-text', `**Mini-München: Hier wird die Stadt von Kindern gemacht**

Alle zwei Jahre im Sommer entsteht in München für drei Wochen eine ganz besondere Stadt. Sie heißt Mini-München und ist eine Spielstadt für Kinder von sieben bis fünfzehn Jahren. Das Projekt gibt es schon seit 1979, und es ist in vielen Ländern nachgemacht worden.

Wie funktioniert die Stadt? Zuerst wird für jedes Kind ein Stadtpass ausgestellt. Dann wird beim Arbeitsamt ein Job gesucht: in der Bäckerei, in der Zeitungsredaktion, im Theater, bei der Bank oder bei der Müllabfuhr. Nach der Arbeit wird man bezahlt, und zwar mit der eigenen Währung, den „MiMü“. Ein Teil des Geldes wird als Steuer an die Stadt abgegeben. Mit dem Rest kann man einkaufen, ins Kino gehen oder an der Uni studieren.

Auch Politik wird in Mini-München gemacht. Ein Bürgermeister oder eine Bürgermeisterin und ein Stadtrat werden von den Kindern gewählt. Im Rathaus wird jeden Tag diskutiert: Wie hoch sollen die Steuern sein? Was wird mit dem Geld gebaut? Die Erwachsenen helfen nur im Hintergrund. Entschieden wird von den Kindern.

„Hier lernen die Kinder, wie eine Gesellschaft funktioniert“, sagt eine Betreuerin. „Sie merken: Eine Stadt wird nicht von allein gemacht. Jeder muss mitmachen.“`,
      { kicker: 'Landeskunde', title: 'Aus einer Zeitung', task: 'Lies den Artikel über Mini-München. Wie funktioniert die Stadt?', taskEn: 'Read the newspaper article about Mini-München, a play city for children. How does the city work? Notice the passive forms: wird ausgestellt, wird bezahlt, werden gewählt.' }),
    mcq('t1-q1', 'Für wen ist Mini-München?', ['für Kinder von 7 bis 15 Jahren', 'für Familien mit Babys', 'für Studierende aus München'], 0),
    mcq('t1-q2', 'Womit wird man in Mini-München bezahlt?', ['mit Euro', 'mit einer eigenen Währung', 'mit Gutscheinen für das Kino'], 1),
    mcq('t1-q3', 'Wer entscheidet im Rathaus von Mini-München?', ['die Eltern', 'die Betreuerinnen und Betreuer', 'die Kinder'], 2),
    grammar('t1-gram', 'Das Passiv Präsens', {
      intro: 'Im **Passiv** ist die Handlung wichtig, nicht die Person. Man bildet es mit **werden + Partizip II**. Das Partizip steht am **Ende**.',
      head: ['Person', 'werden', 'Partizip II', 'Beispiel'],
      rows: [
        ['ich', '**werde**', 'gefragt', 'Ich **werde** oft **gefragt**.'],
        ['du', '**wirst**', 'abgeholt', 'Du **wirst** gleich **abgeholt**.'],
        ['er / sie / es', '**wird**', 'ausgestellt', 'Der Pass **wird** **ausgestellt**.'],
        ['wir', '**werden**', 'bezahlt', 'Wir **werden** in MiMü **bezahlt**.'],
        ['ihr', '**werdet**', 'eingeladen', 'Ihr **werdet** zum Treffen **eingeladen**.'],
        ['sie / Sie', '**werden**', 'gewählt', 'Die Stadträte **werden** **gewählt**.'],
      ],
      notes: [
        'Aktiv → Passiv: Das Akkusativobjekt wird zum Subjekt. *Man sammelt **die Unterschriften**.* → ***Die Unterschriften** werden gesammelt.*',
        'Der Satz mit **man** wird im Passiv ohne Person gebildet. Das ist typisch für Vorgänge, Regeln und Anleitungen: *Zuerst **wird** ein Pass **ausgestellt**.*',
        'Wer etwas macht, sagt man mit **von + Dativ**: *Die Stadt wird **von den Kindern** gemacht.*',
        'Achtung: Plural-Subjekt, Plural-Verb: *Ein Job **wird** gesucht. Zwei Jobs **werden** gesucht.*',
      ],
      en: 'The passive voice focuses on the action, not on the person doing it. Present passive = werden + past participle, with the participle at the end: Der Pass wird ausgestellt (The pass is issued). The accusative object of the active sentence becomes the subject. Sentences with man are often turned into the passive, which is typical for describing processes and rules. To say who does the action, use von + dative: von den Kindern (by the children).',
    }),
    gap('t1-gap', ['In Mini-München {{wird}} viel gearbeitet.', 'Zuerst wird ein Stadtpass {{ausgestellt}}. (ausstellen)', 'Die Kinder {{werden}} mit MiMü bezahlt.', 'Ein Teil des Geldes wird an die Stadt {{abgegeben}}. (abgeben)', 'Der Bürgermeister wird von den Kindern {{gewählt}}. (wählen)', 'Im Rathaus {{wird}} jeden Tag diskutiert.'],
      { task: 'Ergänze die Passivform.', taskEn: 'Complete with the correct form of werden or the past participle.' }),
    match('t1-match', [['Man sucht einen Job.', 'Ein Job wird gesucht.'], ['Man bezahlt die Kinder.', 'Die Kinder werden bezahlt.'], ['Man wählt einen Stadtrat.', 'Ein Stadtrat wird gewählt.'], ['Man baut ein Kino.', 'Ein Kino wird gebaut.'], ['Man verteilt die Zeitungen.', 'Die Zeitungen werden verteilt.'], ['Man diskutiert lange.', 'Es wird lange diskutiert.']],
      { task: 'Aktiv mit „man“ und Passiv: Was passt zusammen?', taskEn: 'Match each active sentence with man to its passive version.' }),
    sort('t1-sort', ['Aktiv', 'Passiv'], [['Die Kinder wählen den Stadtrat.', 0], ['Eine Betreuerin hilft im Hintergrund.', 0], ['Man zahlt Steuern.', 0], ['Der Stadtrat wird gewählt.', 1], ['Die Steuern werden an die Stadt gezahlt.', 1], ['Hier wird gearbeitet.', 1]],
      { task: 'Aktiv oder Passiv?', taskEn: 'Is the sentence active or passive?' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Ehrenamt in Leipzig', 'sky', 15,
  ['über soziales Engagement sprechen', 'über Institutionen in der Stadt sprechen', 'Passiv Präteritum und Perfekt'], [
    audio('t2-audio', 'Hören: Leipzig am Abend', [
      ['moderatorin', 'Guten Abend bei „Leipzig am Abend“! Heute geht es ums Ehrenamt. Mehr als jeder dritte Mensch in Deutschland engagiert sich freiwillig. Bei mir im Studio sind Elif und Jonas. Elif, du arbeitest bei der Tafel in Plagwitz, oder?'],
      ['elif', 'Genau, jeden Dienstag. Unsere Ausgabestelle wurde 2015 eröffnet. Morgens werden die Lebensmittel von den Supermärkten abgeholt, dann wird alles sortiert, und am Nachmittag wird es verteilt. Inzwischen kommen über zweihundert Familien pro Woche.'],
      ['moderatorin', 'Das ist ja eine Menge. Und warum machst du das?'],
      ['elif', 'Na ja, ich finde einfach, es wird zu viel weggeworfen. Und viele Leute haben eben nicht genug Geld für Essen. Das passt doch nicht zusammen.'],
      ['moderatorin', 'Jonas, bei dir ist es ein Jugendzentrum.'],
      ['jonas', 'Ja, das Haus war total kaputt. Letztes Jahr ist es von uns Jugendlichen selbst renoviert worden. Die Wände wurden gestrichen, ein Proberaum für Bands wurde gebaut, und die Möbel sind uns von einer Firma geschenkt worden.'],
      ['moderatorin', 'Wurdet ihr auch von der Stadt unterstützt?'],
      ['jonas', 'Ja, das Material wurde von der Stadt bezahlt. Den Antrag haben wir im Rathaus abgegeben, mit ganz viel Papier. Aber es hat sich gelohnt.'],
      ['moderatorin', 'Engagement lohnt sich also. Wenn Sie auch mitmachen wollen: Die Freiwilligenagentur Leipzig berät Sie gern. Nach der Musik geht es weiter!'],
    ], { task: 'Hör die Radiosendung. Was machen Elif und Jonas?', taskEn: 'Listen to the radio show about volunteering. What do Elif and Jonas do? Listen for past passive forms: wurde eröffnet, ist renoviert worden. Ausgabestelle = distribution point.' }),
    mcq('t2-q1', 'Was passiert bei der Tafel am Nachmittag?', ['Die Lebensmittel werden abgeholt.', 'Die Lebensmittel werden verteilt.', 'Die Lebensmittel werden sortiert.'], 1),
    mcq('t2-q2', 'Warum engagiert sich Elif?', ['Sie bekommt dort Geld.', 'Es wird zu viel weggeworfen, und viele haben nicht genug Geld für Essen.', 'Ihre Familie hat die Tafel gegründet.'], 1),
    mcq('t2-q3', 'Wer hat das Material für das Jugendzentrum bezahlt?', ['eine Firma', 'die Jugendlichen', 'die Stadt'], 2),
    grammar('t2-gram', 'Passiv Präteritum und Perfekt', {
      intro: 'Für die Vergangenheit gibt es zwei Formen. **Präteritum:** *wurde + Partizip II*. **Perfekt:** *sein + Partizip II + worden*.',
      head: ['Person', 'Präteritum', 'Perfekt'],
      rows: [
        ['ich', 'ich **wurde** gefragt', 'ich **bin** gefragt **worden**'],
        ['du', 'du **wurdest** gefragt', 'du **bist** gefragt **worden**'],
        ['er / sie / es', 'es **wurde** gebaut', 'es **ist** gebaut **worden**'],
        ['wir', 'wir **wurden** unterstützt', 'wir **sind** unterstützt **worden**'],
        ['ihr', 'ihr **wurdet** eingeladen', 'ihr **seid** eingeladen **worden**'],
        ['sie / Sie', 'sie **wurden** gestrichen', 'sie **sind** gestrichen **worden**'],
      ],
      notes: [
        'Im Passiv Perfekt heißt es **worden**, nicht *geworden*: *Das Haus **ist** renoviert **worden**.*',
        'Das Perfekt im Passiv wird immer mit **sein** gebildet.',
        'In Berichten und Zeitungen benutzt man meistens das **Präteritum**: *Die Tafel **wurde** 2015 **eröffnet**.* Im Gespräch hört man beide Formen.',
      ],
      en: 'The passive has two past forms. Präteritum: wurde + past participle (Die Wände wurden gestrichen, The walls were painted). Perfekt: sein + past participle + worden (Das Haus ist renoviert worden, The building has been renovated). Note: in the passive it is worden, not geworden, and the auxiliary is always sein. Reports and newspapers mostly use the Präteritum.',
    }),
    gap('t2-gap', ['Die Tafel {{wurde}} 2015 eröffnet.', 'Das Jugendzentrum ist letztes Jahr renoviert {{worden}}.', 'Die Möbel {{sind}} von einer Firma geschenkt worden.', 'Die Wände {{wurden}} von den Jugendlichen gestrichen.', 'Der Antrag ist im Rathaus {{abgegeben}} worden. (abgeben)'],
      { bank: ['wurde', 'worden', 'sind', 'wurden', 'abgegeben'], task: 'Ergänze das Passiv in der Vergangenheit.', taskEn: 'Complete the past passive (Präteritum or Perfekt).' }),
    match('t2-match', [['das Bürgeramt', 'Hier werden Ausweise und Pässe beantragt.'], ['die Stadtbibliothek', 'Hier werden Bücher und Filme ausgeliehen.'], ['das Rathaus', 'Hier werden politische Entscheidungen für die Stadt getroffen.'], ['die Volkshochschule', 'Hier werden Kurse für Erwachsene angeboten.'], ['das Standesamt', 'Hier wird geheiratet.'], ['die Tafel', 'Hier werden Lebensmittel an Menschen mit wenig Geld verteilt.'], ['das Jugendzentrum', 'Hier wird nach der Schule Musik gemacht und gespielt.']],
      { task: 'Institutionen in der Stadt: Was wird hier gemacht?', taskEn: 'Institutions in the city: match each place to what is done there.' }),
    phrases('t2-phr', 'Über soziales Engagement sprechen', {
      'Fragen': ['Engagierst du dich ehrenamtlich?', 'Wofür setzt du dich ein?', 'Wie viel Zeit investierst du pro Woche?'],
      'Erzählen': ['Ich helfe seit zwei Jahren bei …', 'Ich engagiere mich für …', 'Einmal pro Woche arbeite ich ehrenamtlich bei …'],
      'Begründen': ['Mir ist wichtig, dass …', 'Ich finde, jeder sollte etwas für die Gesellschaft tun.', 'Es macht mich glücklich, wenn ich helfen kann.'],
    }),
    compose('t2-comp', 'Schreib für die Website der Freiwilligenagentur über ein soziales Projekt.', [
      ['Sag, was das Projekt ist.', 'Say what the project is.', ['Unser Repair-Café', 'wurde', 'vor drei Jahren', 'gegründet.']],
      ['Sag, was dort gemacht wird.', 'Say what is done there.', ['Jeden Samstag', 'werden', 'kaputte Geräte', 'repariert.']],
      ['Sag, warum es wichtig ist.', 'Say why it matters.', ['So', 'wird', 'weniger', 'weggeworfen.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences for a short text about a social project. Use the passive.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Wir in Europa', 'lilac', 15,
  ['Informationen über die EU verstehen', 'Prüfungstraining: Sprechen Teil 2'], [
    text('t3-text', `**Die Europäische Union: kurz erklärt**

Die Europäische Union (EU) ist ein Bund von 27 Staaten. Ungefähr 450 Millionen Menschen leben in der EU. Ihre Geschichte beginnt nach dem Zweiten Weltkrieg: 1957 wurden in Rom die Römischen Verträge unterschrieben. Damals waren es nur sechs Länder: Belgien, Deutschland, Frankreich, Italien, Luxemburg und die Niederlande. Die Idee war einfach: Wer zusammen Handel treibt, führt keinen Krieg gegeneinander. Den Namen „Europäische Union“ gibt es seit 1993.

**Die wichtigsten Institutionen**
Das Europäische Parlament wird alle fünf Jahre von den Bürgerinnen und Bürgern direkt gewählt. Es tagt in Straßburg und in Brüssel. Die Europäische Kommission in Brüssel schlägt neue Gesetze vor. Im Rat der EU sitzen die Ministerinnen und Minister der Mitgliedstaaten. Die meisten Gesetze werden vom Parlament und vom Rat gemeinsam beschlossen.

**Und im Alltag?**
EU-Bürgerinnen und -Bürger dürfen in jedem Mitgliedstaat leben, arbeiten und studieren. An vielen Grenzen innerhalb der EU wird normalerweise nicht mehr kontrolliert. In mehr als zwanzig Ländern wird mit dem Euro bezahlt. Mit dem Programm Erasmus+ werden jedes Jahr Hunderttausende junge Menschen bei einem Aufenthalt im Ausland unterstützt. Die EU hat 24 Amtssprachen, und am 9. Mai wird jedes Jahr der Europatag gefeiert.`,
      { kicker: 'Landeskunde', title: 'Europa', task: 'Lies den Text über die EU.', taskEn: 'Read the text about the European Union: its history, its main institutions and what it means in everyday life. Handel treiben = to trade. tagen = to meet, hold sessions.' }),
    mcq('t3-q1', 'Wie viele Länder haben 1957 die Römischen Verträge unterschrieben?', ['sechs', 'zwölf', 'siebenundzwanzig'], 0),
    mcq('t3-q2', 'Wer schlägt in der EU neue Gesetze vor?', ['das Europäische Parlament', 'die Europäische Kommission', 'der Rat der EU'], 1),
    mcq('t3-q3', 'Was dürfen EU-Bürgerinnen und -Bürger?', ['in jedem Mitgliedstaat leben und arbeiten', 'in jedem Land ohne Pass reisen, auch außerhalb der EU', 'überall mit dem Euro bezahlen'], 0),
    gap('t3-gap', ['Das Parlament {{wird}} alle fünf Jahre gewählt.', 'Die Römischen Verträge {{wurden}} 1957 in Rom unterschrieben.', 'Gesetze werden {{vom}} Parlament und {{vom}} Rat beschlossen.', 'Am 9. Mai wird der Europatag {{gefeiert}}. (feiern)'],
      { task: 'Ergänze die Sätze aus dem Text.', taskEn: 'Complete the sentences from the EU text.' }),
    tip('t3-pt-tip', 'Prüfungstraining: Sprechen Teil 2', 'In **Sprechen Teil 2** hältst du eine kurze **Präsentation** (etwa drei bis vier Minuten). Du bekommst ein Thema und **fünf Folien**. Jede Folie zeigt dir, worüber du sprechen sollst:\n\n1. **Thema vorstellen:** Sag, worüber du sprichst und wie deine Präsentation aufgebaut ist.\n2. **Persönliche Erfahrungen:** Erzähl von dir. Was hast du selbst erlebt?\n3. **Situation im Heimatland:** Wie ist das in deinem Land?\n4. **Vor- und Nachteile, Meinung:** Nenne ein Argument dafür, eins dagegen und sag deine Meinung.\n5. **Abschluss und Dank:** Fass kurz zusammen und bedank dich bei den Zuhörern.\n\nDanach stellt dir dein Partner oder deine Partnerin eine Frage (Teil 3). Lern für jede Folie zwei, drei feste Sätze. Dann weißt du immer, wie du anfangen kannst.'),
    phrases('t3-pt-phr', 'Redemittel für die fünf Folien', {
      'Folie 1: Thema vorstellen': ['Ich möchte heute über das Thema … sprechen.', 'Zuerst erzähle ich von meinen Erfahrungen, dann …', 'Meine Präsentation hat vier Teile.'],
      'Folie 2: Persönliche Erfahrungen': ['Ich selbst habe … erlebt.', 'Ich erinnere mich gut an …', 'Bei mir war das so: …'],
      'Folie 3: Situation im Heimatland': ['In meinem Heimatland ist das ganz anders.', 'Bei uns wird … oft von … organisiert.', 'In … ist es ähnlich wie in Deutschland.'],
      'Folie 4: Vor- und Nachteile, Meinung': ['Ein Vorteil ist, dass …', 'Ein Nachteil ist aber, dass …', 'Meiner Meinung nach …'],
      'Folie 5: Abschluss und Dank': ['Damit komme ich zum Schluss.', 'Zusammenfassend kann man sagen: …', 'Vielen Dank für Ihre Aufmerksamkeit!'],
    }),
    mcq('t3-pt-q1', 'Was sagst du auf Folie 1?', ['Ich möchte heute über das Thema Ehrenamt sprechen.', 'Vielen Dank fürs Zuhören!', 'Ein Nachteil ist, dass man wenig Zeit hat.'], 0, { task: 'Was passt?', taskEn: 'Which sentence fits the slide?', why: 'Auf Folie 1 stellst du das Thema vor.' }),
    mcq('t3-pt-q2', 'Auf welcher Folie sprichst du über die Situation in deinem Heimatland?', ['Folie 1', 'Folie 3', 'Folie 5'], 1),
    compose('t3-pt-comp', 'Bau deine Präsentation zum Thema „Ehrenamt: Sollte sich jeder Mensch sozial engagieren?“. Ein Satz pro Folie.', [
      ['Folie 1: Stell das Thema vor.', 'Slide 1: Introduce the topic.', ['Ich möchte', 'heute', 'über das Thema', 'Ehrenamt', 'sprechen.']],
      ['Folie 2: Erzähl von deiner Erfahrung.', 'Slide 2: Talk about your experience.', ['Ich selbst', 'habe', 'zwei Jahre lang', 'bei der Tafel', 'geholfen.']],
      ['Folie 3: Wie ist es in deinem Heimatland?', 'Slide 3: How is it in your home country?', ['In meinem Heimatland', 'wird', 'das Ehrenamt', 'oft', 'von Kirchen', 'organisiert.']],
      ['Folie 4: Nenne einen Vorteil.', 'Slide 4: Name an advantage.', ['Ein Vorteil ist,', 'dass', 'man', 'neue Leute', 'kennenlernt.']],
      ['Folie 5: Beende die Präsentation.', 'Slide 5: Close the presentation.', ['Vielen Dank', 'für', 'Ihre', 'Aufmerksamkeit!']],
    ], { task: 'Bau einen Satz für jede Folie.', taskEn: 'Build one sentence for each of the five slides. You do not record anything: you build the structure you will use in the exam.' }),
    order('t3-pt-order', ['Damit', 'komme', 'ich', 'zum Schluss.'], { task: 'Bau den Satz für die letzte Folie.', taskEn: 'Build the sentence that starts your last slide.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 10: Fuchsbau bleibt!', 'rose', 14,
  ['eine Beratung verstehen', 'ein Treffen verstehen', 'ein Protokoll verstehen (Passiv)'], [
    text('wg-intro', 'Anfang Juni. Herr Vogt hat die genauen Pläne für die Modernisierung geschickt: Im Oktober sollen die Bauarbeiten beginnen, danach soll die Miete deutlich steigen. Für Herrn Lehmann ist das mit seiner kleinen Rente kaum zu bezahlen. Nele hat einen Termin beim Mieterverein gemacht. Herr Lehmann kommt mit, im guten Jackett und mit einer Mappe voller Briefe.',
      { kicker: 'Die Geschichte', en: 'Early June. Herr Vogt has sent the detailed plans for the modernization: construction is to start in October, and afterwards the rent is supposed to go up considerably. With his small pension, Herr Lehmann can hardly pay that. Nele has made an appointment at the tenants’ association. Herr Lehmann comes along, in his good jacket and with a folder full of letters.' }),
    audio('wg-audio', 'Folge 10: Beim Mieterverein', [
      ['priya', 'Guten Tag, kommen Sie rein. Sie sind vom Fuchsbau in der Karl-Heine-Straße, richtig? Was kann ich für Sie tun?'],
      ['nele', 'Genau. Wir haben die Ankündigung der Modernisierung bekommen. Im Oktober geht es los, und danach soll die Miete stark steigen.'],
      ['priya', 'Zeigen Sie mal. Hm. Also, eine Modernisierung muss mindestens drei Monate vorher angekündigt werden. Das ist hier passiert.'],
      ['herrLehmann', 'Und die Miete? Kann die einfach so erhöht werden?'],
      ['priya', 'Nein, eben nicht. Es gibt Grenzen. Pro Quadratmeter darf die Miete in sechs Jahren um höchstens drei Euro erhöht werden.'],
      ['herrLehmann', 'Drei Euro pro Quadratmeter? Bei meiner Rente ist das trotzdem viel zu viel.'],
      ['priya', 'Das verstehe ich. Sie sind sechsundsiebzig und wohnen seit fast sechzig Jahren dort. Das kann ein Härtefall sein. Dann muss ein Härteeinwand geschrieben werden, und zwar bald. Dafür gibt es eine Frist: bis Ende Juli.'],
      ['nele', 'Und was können wir als Hausgemeinschaft machen?'],
      ['priya', 'Ganz wichtig: Machen Sie alles zusammen. Alle Schreiben sollten gesammelt und von einem Anwalt geprüft werden. Für Mitglieder ist die Beratung bei uns kostenlos.'],
      ['nele', 'Dann werden wir halt alle Mitglied. Am Mittwoch haben wir sowieso ein Treffen.'],
      ['priya', 'Sehr gut. Und gehen Sie ruhig an die Öffentlichkeit. Wenn viele Leute Druck machen, wird oft mehr erreicht.'],
      ['herrLehmann', 'Nu, Öffentlichkeit haben wir ja. Seit Felix’ Video kennt halb Leipzig unser Haus.'],
    ], { task: 'Hör zu. Was sagt die Beraterin vom Mieterverein?', taskEn: 'Listen. What does the adviser at the tenants’ association say? Härteeinwand = a written objection because of hardship. an die Öffentlichkeit gehen = to go public.' }),
    audio('wg-treffen', 'Folge 10: Das Treffen im Fuchs & Yuzu', [
      ['kenji', 'So, die Tische sind zusammengestellt, der Tee ist fertig. Willkommen im Fuchs & Yuzu! Heute Abend ist das Restaurant mal nur für uns.'],
      ['nele', 'Danke, Kenji. Wow, so viele waren wir noch nie! Also, das Wichtigste zuerst: Herr Lehmanns Härteeinwand muss bis Ende Juli abgeschickt werden.'],
      ['herrLehmann', 'Den schreibe ich aber nicht allein, oder?'],
      ['nele', 'Natürlich nicht. Der wird morgen von uns zusammen geschrieben.'],
      ['sofia', 'Und was machen wir anderen? Schreiben wir an Herrn Vogt oder gleich an die Stadt?'],
      ['amara', 'Beides, würde ich sagen. Aber zuerst brauchen wir die Unterstützung vom ganzen Viertel.'],
      ['felix', 'Dann sammeln wir Unterschriften! Hier im Restaurant, beim Bäcker, im Späti. Und nach jedem Konzert von der Fuchsbande.'],
      ['kenji', 'Gut, die Liste wird hier neben die Kasse gelegt. Meine Gäste fragen sowieso dauernd nach dem Haus.'],
      ['sofia', 'Und ich gestalte einen Flyer. Design ist ja mein Job.'],
      ['amara', 'Und rechtlich? Ich will nicht, dass wir etwas falsch machen.'],
      ['nele', 'Stimmt. Ein Anwalt muss gefragt werden, bevor etwas an die Stadt geschickt wird. Der Mieterverein vermittelt uns einen.'],
      ['herrLehmann', 'Wisst ihr, 1989 wurde auch klein angefangen. Mit ein paar Leuten in einer Kirche.'],
      ['felix', 'Und am Ende ist die Mauer gefallen. Na also, dann retten wir doch wohl ein Haus!'],
    ], { task: 'Hör zu. Was wird beim Treffen beschlossen?', taskEn: 'Listen to the neighborhood meeting in Kenji’s restaurant. What do the tenants decide? Späti = a late-night corner shop. vermitteln = to put someone in touch with someone.' }),
    text('wg-protokoll', `**Protokoll: Treffen der Initiative „Fuchsbau bleibt!“**
Mittwoch, 9. Juni 2027, 19 bis 21 Uhr, Restaurant Fuchs & Yuzu
Anwesend: 19 Mieterinnen und Mieter, 3 Gäste aus der Nachbarschaft
Protokoll: Lina

**1. Bericht vom Mieterverein**
Die Ankündigung der Modernisierung wurde von Nele und Herrn Lehmann beim Mieterverein gezeigt. Es wurde erklärt: Die Miete darf nicht unbegrenzt erhöht werden. Bei Härtefällen kann ein Härteeinwand geschrieben werden.

**2. Beschlüsse**
- Alle Mietparteien werden Mitglied im Mieterverein.
- Der Härteeinwand von Herrn Lehmann wird morgen geschrieben. Er muss bis zum 31. Juli abgeschickt werden.
- Ab Montag werden Unterschriften gesammelt: im Fuchs & Yuzu, in der Bäckerei und bei Konzerten.
- Ein Flyer wird von Sofia gestaltet.
- Ein Brief an die Hausverwaltung ist schon geschrieben worden. Er wurde heute von allen unterschrieben und wird am Montag abgeschickt.
- Eine Petition an den Stadtrat wird vorbereitet. Vorher muss ein Anwalt gefragt werden.

**3. Nächstes Treffen**
Mittwoch, 23. Juni 2027, 19 Uhr, wieder im Fuchs & Yuzu`,
      { kicker: 'Das Protokoll', title: 'Was wurde beschlossen?', task: 'Lies das Protokoll von Lina.', taskEn: 'Read Lina’s minutes of the meeting. Notice how decisions are written in the passive.', en: 'The minutes say: Nele and Herr Lehmann showed the modernization notice at the tenants’ association. They were told that the rent cannot be raised without limit and that a hardship objection can be filed. Decisions: all households join the tenants’ association. Herr Lehmann’s hardship objection will be written tomorrow and must be sent by July 31. From Monday, signatures will be collected in Kenji’s restaurant, at the bakery and at concerts. Sofia will design a flyer. A letter to the property management has already been written, was signed by everyone today and will be sent on Monday. A petition to the city council is being prepared, but a lawyer must be consulted first. Next meeting: Wednesday, June 23, again at Fuchs & Yuzu.' }),
    mcq('wg-q1', 'Wie viel darf die Miete nach einer Modernisierung höchstens steigen?', ['drei Euro pro Quadratmeter in sechs Jahren', 'drei Prozent pro Jahr', 'gar nicht'], 0),
    mcq('wg-q2', 'Warum kann Herr Lehmann ein Härtefall sein?', ['Er hat einen schlechten Mietvertrag.', 'Er ist alt, hat eine kleine Rente und wohnt seit fast sechzig Jahren im Haus.', 'Er hat die Frist verpasst.'], 1),
    mcq('wg-q3', 'Wo wird bei Kenji die Unterschriftenliste hingelegt?', ['auf jeden Tisch', 'neben die Kasse', 'in die Küche'], 1),
    mcq('wg-q4', 'Was muss passieren, bevor die Petition an die Stadt geschickt wird?', ['Ein Flyer muss gedruckt werden.', 'Ein Anwalt muss gefragt werden.', 'Herr Vogt muss informiert werden.'], 1),
    mcq('wg-q5', 'Was ist mit dem Brief an die Hausverwaltung schon passiert? (Protokoll)', ['Er ist geschrieben und unterschrieben worden.', 'Er ist schon abgeschickt worden.', 'Er wurde vom Anwalt geschrieben.'], 0),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Passiv mit Modalverb', 'alle Passivformen', 'von + Dativ'], [
    grammar('g-1', 'Passiv mit Modalverb', {
      intro: 'Modalverb auf **Position 2**, am Ende **Partizip II + werden**: *Ein Anwalt **muss** gefragt **werden**.*',
      head: ['Aktiv (mit man)', 'Passiv mit Modalverb'],
      rows: [
        ['Man **muss** einen Anwalt **fragen**.', 'Ein Anwalt **muss** gefragt **werden**.'],
        ['Man **soll** die Briefe **sammeln**.', 'Die Briefe **sollen** gesammelt **werden**.'],
        ['Man **kann** einen Härteeinwand **schreiben**.', 'Ein Härteeinwand **kann** geschrieben **werden**.'],
        ['Man **darf** hier nicht **rauchen**.', 'Hier **darf** nicht geraucht **werden**.'],
        ['Man **musste** den Antrag **abgeben**.', 'Der Antrag **musste** abgegeben **werden**.'],
      ],
      notes: [
        'Das Modalverb passt zum Subjekt: *Ein Brief **muss** … Zwei Briefe **müssen** …*',
        'Im Nebensatz steht das Modalverb ganz am Ende: *…, dass ein Anwalt gefragt werden **muss**.*',
        'Diese Form findet man oft in Regeln, Anleitungen und Protokollen: *Der Antrag muss bis Freitag abgegeben werden.*',
      ],
      en: 'Passive with a modal verb: the modal verb is in position 2 and the end of the sentence has past participle + werden: Ein Anwalt muss gefragt werden (A lawyer must be consulted). The modal agrees with the subject. In a subordinate clause, the modal goes to the very end: dass ein Anwalt gefragt werden muss. This form is common in rules, instructions and minutes.',
    }),
    grammar('g-2', 'Das Passiv: alle Formen', {
      head: ['Form', 'Bildung', 'Beispiel'],
      rows: [
        ['Präsens', 'werden + Partizip II', 'Unterschriften **werden** **gesammelt**.'],
        ['Präteritum', 'wurde + Partizip II', 'Ein Brief **wurde** **geschrieben**.'],
        ['Perfekt', 'sein + Partizip II + worden', 'Der Brief **ist** **geschrieben worden**.'],
        ['mit Modalverb', 'Modalverb + Partizip II + werden', 'Ein Anwalt **muss** **gefragt werden**.'],
        ['mit Person', '+ von + Dativ', 'Der Flyer wird **von Sofia** gestaltet.'],
      ],
      notes: [
        '**von + Dativ** nennt die Person oder die Institution: *vom Mieterverein, von der Stadt, von den Kindern*.',
        'Oft sagt man nicht, wer etwas macht. Das ist nicht wichtig oder man weiß es nicht: *Mein Fahrrad ist gestohlen worden.*',
        'Passiv ohne Subjekt: *Hier **wird** gearbeitet.* Das Verb steht dann im Singular.',
      ],
      en: 'Overview of passive forms: present (werden + participle), simple past (wurde + participle), present perfect (sein + participle + worden) and with a modal verb (modal + participle + werden). Add the person or institution with von + dative (vom Mieterverein, von der Stadt). Often the person is left out because it is unknown or unimportant. A passive without a subject (Hier wird gearbeitet) always uses the singular verb.',
    }),
    mcq('g-q1', 'Die Briefe ___ heute geschrieben.', ['werden', 'wird', 'worden'], 0),
    mcq('g-q2', 'Das Jugendzentrum ist letztes Jahr renoviert ___.', ['geworden', 'worden', 'werden'], 1, { why: 'Passiv Perfekt: sein + Partizip II + worden.' }),
    mcq('g-q3', 'Der Antrag muss bis Freitag ___.', ['abgegeben werden', 'werden abgegeben', 'abgeben werden'], 0),
    mcq('g-q4', 'Das Projekt wird ___ unterstützt.', ['von der Stadt', 'von die Stadt', 'durch der Stadt'], 0, { why: 'von + Dativ: von der Stadt.' }),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Strategie: Tipps für eine Präsentation', 'Aussprache: Kontrastakzente in Fragen mit oder'], [
    tip('u-tip', 'Strategie: Tipps für eine Präsentation', 'Eine gute Präsentation wird nicht abgelesen. Diese Tipps helfen dir:\n\n1. **Wenig Text auf den Folien:** Nur Stichwörter und ein Bild. Die Zuhörer sollen dir zuhören, nicht lesen.\n2. **Notizen auf kleinen Karten:** Schreib Stichwörter, keine ganzen Sätze. Nur den ersten und den letzten Satz darfst du ganz aufschreiben.\n3. **Laut üben:** Sprich die Präsentation zu Hause zwei-, dreimal laut. Miss die Zeit.\n4. **Blickkontakt:** Schau die Zuhörer an, nicht die Wand.\n5. **Langsam sprechen und Pausen machen:** Nach jeder Folie eine kleine Pause. Sag, was jetzt kommt: *Jetzt komme ich zu …*'),
    sort('u-sort', ['gute Idee', 'keine gute Idee'], [['Stichwörter auf Karten schreiben', 0], ['die Präsentation laut üben', 0], ['die Zuhörer anschauen', 0], ['den ganzen Text ablesen', 1], ['sehr viel Text auf jede Folie schreiben', 1], ['ohne Pause schnell sprechen', 1]],
      { task: 'Präsentation: gute Idee oder nicht?', taskEn: 'Presentation tips: good idea or not?' }),
    audio('u-aus', 'Aussprache: Kontrastakzente in Fragen mit oder', [
      ['frauKlein', 'Heute üben wir Fragen mit „oder“. In diesen Fragen gibt es zwei Möglichkeiten. Genau diese zwei Wörter betonst du stark.'],
      ['frauKlein', 'Hör mal: Treffen wir uns am Freitag oder am Samstag? Freitag … Samstag. Die zwei Tage sind wichtig, deshalb betone ich sie.'],
      ['frauKlein', 'Noch ein Beispiel: Schreiben wir an Herrn Vogt oder an die Stadt? Vogt … Stadt.'],
      ['frauKlein', 'Achte auch auf die Melodie: Bei der ersten Möglichkeit geht die Stimme nach oben, am Ende geht sie nach unten. Kaffee oder Tee?'],
      ['frauKlein', 'Und in der Antwort betonst du das wichtige Wort noch einmal: Lieber am Samstag. Tee, bitte.'],
      ['frauKlein', 'Jetzt du: Möchtest du den Flyer machen oder die Liste? Sprich nach und betone die zwei Möglichkeiten.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. In questions with oder (or), you stress the two options strongly. The voice goes up on the first option and down at the end. In the answer, stress the option you choose.' }),
    mcq('u-q1', 'Welche Wörter betont man? „Fahren wir mit dem Rad oder mit dem Bus?“', ['fahren und wir', 'Rad und Bus', 'mit und dem'], 1, { task: 'Kontrastakzent: Was betont man?', taskEn: 'Contrastive stress: which words are stressed?' }),
    mcq('u-q2', 'Welche Wörter betont man? „Schreibst du den Brief heute oder morgen?“', ['heute und morgen', 'schreibst und du', 'Brief und oder'], 0),
    gap('u-gap', ['Man muss den Härteeinwand bald schreiben. → Der Härteeinwand muss bald {{geschrieben werden}}.', 'Man kann die Liste im Restaurant unterschreiben. → Die Liste kann im Restaurant {{unterschrieben werden}}.', 'Man soll die Flyer am Samstag verteilen. → Die Flyer {{sollen}} am Samstag verteilt werden.', 'Man darf hier nicht parken. → Hier darf nicht {{geparkt}} werden.', 'Man hat die Briefe gesammelt. → Die Briefe sind gesammelt {{worden}}.'],
      { task: 'Vom Aktiv ins Passiv.', taskEn: 'Rewrite the active sentences with man in the passive.' }),
    order('u-order', ['Unterschriften', 'werden', 'ab Montag', 'gesammelt.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence. werden is in position 2, the participle goes to the end.' }),
    order('u-order2', ['Ein Anwalt', 'muss', 'vorher', 'gefragt', 'werden.'], { task: 'Bau den Satz mit Modalverb.', taskEn: 'Build the sentence with a modal verb. The modal is in position 2, participle + werden go to the end.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 12,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['das Ehrenamt', 'Arbeit ohne Geld, um anderen zu helfen', 'volunteer work'], ['sich engagieren', 'sich aktiv für etwas einsetzen', 'to get involved'], ['die Gesellschaft', 'alle Menschen in einem Land', 'society'],
      ['die Solidarität', 'man hilft sich gegenseitig', 'solidarity'], ['die Unterschrift', 'der eigene Name, mit der Hand geschrieben', 'signature'], ['der Antrag', 'ein offizielles Schreiben, mit dem man etwas haben möchte', 'application, request'],
      ['die Frist', 'bis zu diesem Tag muss etwas fertig sein', 'deadline'], ['der Beschluss', 'eine gemeinsame Entscheidung', 'decision'], ['der Stadtrat', 'die Politiker, die für eine Stadt entscheiden', 'city council'],
      ['wählen', 'bei einer Wahl seine Stimme geben', 'to vote, to elect'], ['der Mitgliedstaat', 'ein Land in der EU', 'member state'], ['das Gesetz', 'eine Regel für alle in einem Land', 'law'],
    ]),
    phrases('w-phr', 'Gemeinsam etwas planen', {
      'Vorschläge machen': ['Wir könnten doch …', 'Wie wäre es, wenn wir …?', 'Ich schlage vor, dass …'],
      'Aufgaben verteilen': ['Wer kümmert sich um …?', 'Das übernehme ich.', 'Der Flyer wird von Sofia gemacht.'],
      'Beschlüsse festhalten': ['Wir haben beschlossen, dass …', 'Bis Freitag muss … erledigt werden.', 'Beim nächsten Treffen wird … besprochen.'],
    }),
    match('w-match', [['das Plakat', 'Es hängt groß an der Wand und lädt zu einer Veranstaltung ein.'], ['die Unterschriftenliste', 'Hier schreiben viele Menschen ihren Namen für eine Petition.'], ['der Flyer', 'Ein kleines Blatt Papier, das auf der Straße verteilt wird.'], ['die Spendendose', 'Hier wird Geld für ein soziales Projekt gesammelt.'], ['der Stimmzettel', 'Darauf kreuzt man bei einer Wahl eine Partei an.'], ['die Wahlurne', 'Hier werden die Stimmzettel hineingeworfen.'], ['die Europaflagge', 'Sie ist blau und hat zwölf gelbe Sterne.'], ['das Rathaus', 'Hier arbeiten der Bürgermeister und der Stadtrat.'], ['das Mikrofon', 'Damit wird man bei einer Rede besser gehört.']],
      { task: 'Was ist was?', taskEn: 'Match each object to its description.' }),
    gap('w-gap', ['Elif arbeitet {{ehrenamtlich}} bei der Tafel.', 'Für die Petition werden viele {{Unterschriften}} gebraucht.', 'Der Härteeinwand muss vor Ende der {{Frist}} abgeschickt werden.', 'Das Europäische Parlament wird alle fünf Jahre {{gewählt}}.'],
      { bank: ['ehrenamtlich', 'Unterschriften', 'Frist', 'gewählt'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
    checklist('w-check', ['Ich kann über soziales Engagement sprechen.', 'Ich kann Vorgänge im Passiv beschreiben.', 'Ich kann einen Artikel über ein Projekt verstehen.', 'Ich kann sagen, was in Institutionen in der Stadt gemacht wird.', 'Ich kann wichtige Informationen über die EU verstehen.', 'Ich kann eine kurze Präsentation mit fünf Folien aufbauen.', 'Ich kann in Fragen mit oder die zwei Möglichkeiten betonen.']),
  ]);

export const b1k10: Chapter = {
  id: 'b1-k10', number: 10, title: 'Miteinander', theme: 'Soziales Engagement, Institutionen in der Stadt, Europa und Politik',
  grammar: 'Passiv Präsens (wird gemacht), Präteritum (wurde gemacht), Perfekt (ist gemacht worden), Passiv mit Modalverb (muss gemacht werden), von + Dativ.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['b1k10-sprint', 'b1k10-memory', 'b1k10-satzbau', 'b1k10-artikel'],
  exam: [
    x(1, mcq('x1', 'Die Unterschriften ___ ab morgen gesammelt.', ['werden', 'wird', 'worden'], 0)),
    x(1, mcq('x2', 'Das Haus ___ 1904 gebaut.', ['wurde', 'werden', 'worden'], 0)),
    x(1, mcq('x3', 'Der Brief ist schon geschrieben ___.', ['worden', 'geworden', 'wurde'], 0)),
    x(3, gap('x4', ['Der Antrag muss bis Freitag {{abgegeben}} werden. (abgeben)', 'Die Fenster sollen im Herbst {{erneuert}} werden. (erneuern)', 'Hier darf nicht {{geraucht}} werden. (rauchen)'], { task: 'Ergänze das Partizip II.', taskEn: 'Fill in the past participle.' })),
    x(3, gap('x5', ['Das Projekt wird {{von}} der Stadt unterstützt.', 'Der Flyer wurde von {{der}} Designerin gestaltet.', 'Die Briefe {{werden}} vom Anwalt geprüft.'], { task: 'Ergänze.', taskEn: 'Fill in the missing word.' })),
    x(1, mcq('x6', 'Bis wann muss man sich für den Freiwilligentag anmelden?', ['bis Mittwoch', 'bis Freitag', 'bis Samstag'], 0),
      audio('x-st1', 'Hören: Freiwilligentag in Leipzig', [
        ['moderatorin', 'Und jetzt ein Tipp für alle, die am Wochenende etwas Gutes tun wollen: Am Samstag ist in Leipzig wieder Freiwilligentag.'],
        ['jonas', 'Genau, und dieses Jahr gibt es über fünfzig Projekte. Im Clara-Zetkin-Park werden Bäume gepflanzt, in Grünau werden zwei Spielplätze neu gestrichen, und im Seniorenheim am Lindenauer Markt wird zusammen gekocht.'],
        ['moderatorin', 'Muss man da etwas können?'],
        ['jonas', 'Nein, gar nicht. Werkzeug und Material werden von der Stadt gestellt. Man muss nur ein paar Stunden Zeit mitbringen.'],
        ['moderatorin', 'Und wie kann man mitmachen?'],
        ['jonas', 'Man meldet sich einfach online an, und zwar bis Mittwoch. Am Samstag um neun Uhr werden dann alle vor dem Neuen Rathaus begrüßt. Danach geht es in die Projekte.'],
        ['moderatorin', 'Und am Abend?'],
        ['jonas', 'Am Abend wird gefeiert! Für alle Helferinnen und Helfer gibt es ein kostenloses Essen.'],
      ])),
    x(1, mcq('x7', 'Was wird im Clara-Zetkin-Park gemacht? (Hörtext oben)', ['Spielplätze werden gestrichen.', 'Bäume werden gepflanzt.', 'Es wird gekocht.'], 1)),
    x(1, mcq('x8', 'Was sollen die Lesepatinnen und Lesepaten machen?', ['Bücher in der Bibliothek sortieren', 'Kindern vorlesen und mit ihnen lesen', 'Deutschkurse für Erwachsene geben'], 1),
      text('x-st2', '**Lesepatinnen und Lesepaten gesucht!**\nIn der Stadtteilbibliothek Plagwitz wird jeden Donnerstag von 15 bis 16 Uhr vorgelesen. Viele Kinder aus dem Viertel kommen gern, aber wir brauchen mehr Helfer. Die Lesepaten lesen den Kindern vor und üben mit ihnen das Lesen. Vorkenntnisse werden nicht erwartet. Sie werden vor dem ersten Termin von unserem Team geschult. Bitte melden Sie sich an der Information im Erdgeschoss. Das Ehrenamt ist unbezahlt, aber ein Kaffee wird immer spendiert!', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was passiert vor dem ersten Termin? (Text oben)', ['Man muss eine Prüfung machen.', 'Man wird vom Team geschult.', 'Man wird bezahlt.'], 1)),
    x(2, order('x10', ['Ein Anwalt', 'muss', 'gefragt', 'werden.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' })),
    x(1, mcq('x11', 'Welche Wörter betont man? „Treffen wir uns am Freitag oder am Samstag?“', ['Freitag und Samstag', 'treffen und uns', 'wir und oder'], 0)),
    x(1, mcq('x12', 'Wer wählt das Europäische Parlament?', ['die Europäische Kommission', 'die Bürgerinnen und Bürger der EU', 'die Ministerinnen und Minister'], 1)),
  ],
};

export const gamesB1k10: GameDef[] = [
  {
    id: 'b1k10-sprint', engine: 'sprint', title: 'Passiv-Sprint', blurb: 'wird, wurde oder worden? 60 Sekunden!', skill: 'Passiv', tone: 'mint', chapter: 10, emoji: '⚡',
    rules: 'Du siehst einen Satz im Passiv. Tippe auf das Wort, das in die Lücke passt.', label: 'Welche Form fehlt?',
    items: [
      { q: 'Der Brief ___ heute geschrieben.', sub: 'Präsens', a: 'wird', wrong: ['wurde', 'worden'] },
      { q: 'Die Briefe ___ heute geschrieben.', sub: 'Präsens', a: 'werden', wrong: ['wird', 'worden'] },
      { q: 'Die Tafel ___ 2015 eröffnet.', sub: 'Präteritum', a: 'wurde', wrong: ['wird', 'ist'] },
      { q: 'Die Wände ___ gestrichen.', sub: 'Präteritum', a: 'wurden', wrong: ['wurde', 'worden'] },
      { q: 'Das Haus ist renoviert ___.', sub: 'Perfekt', a: 'worden', wrong: ['geworden', 'werden'] },
      { q: 'Die Möbel ___ geschenkt worden.', sub: 'Perfekt', a: 'sind', wrong: ['haben', 'werden'] },
      { q: 'Ein Anwalt muss gefragt ___.', sub: 'mit Modalverb', a: 'werden', wrong: ['worden', 'wird'] },
      { q: 'Die Flyer ___ verteilt werden.', sub: 'mit Modalverb', a: 'sollen', wrong: ['soll', 'sollt'] },
      { q: 'Der Stadtrat wird ___ den Kindern gewählt.', sub: 'Person', a: 'von', wrong: ['mit', 'durch'] },
      { q: 'Das Projekt wird von ___ Stadt unterstützt.', sub: 'von + Dativ', a: 'der', wrong: ['die', 'den'] },
      { q: 'Hier ___ nicht geraucht.', sub: 'ohne Subjekt', a: 'wird', wrong: ['werden', 'worden'] },
      { q: 'Ich ___ oft gefragt.', sub: 'Präsens', a: 'werde', wrong: ['wird', 'wurde'] },
    ],
  },
  {
    id: 'b1k10-memory', engine: 'memory', title: 'Partizip-Memory', blurb: 'Infinitiv und Partizip II: Finde die Paare.', skill: 'Partizip II', tone: 'lilac', chapter: 10, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Infinitiv und sein Partizip II.', kinds: ['Infinitiv', 'Partizip II'],
    pairs: [['schreiben', 'geschrieben'], ['sammeln', 'gesammelt'], ['gründen', 'gegründet'], ['wählen', 'gewählt'], ['unterschreiben', 'unterschrieben'], ['entscheiden', 'entschieden'], ['abgeben', 'abgegeben'], ['unterstützen', 'unterstützt'], ['verteilen', 'verteilt'], ['beschließen', 'beschlossen']],
  },
  {
    id: 'b1k10-satzbau', engine: 'satzbau', title: 'Passiv-Baukasten', blurb: 'werden auf Position 2, das Partizip ans Ende!', skill: 'Passiv', tone: 'sky', chapter: 10, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Die Form von werden oder das Modalverb steht auf Position 2, das Partizip am Ende.',
    sentences: [
      { parts: ['Die Briefe', 'werden', 'heute', 'geschrieben.'], hint: 'Passiv Präsens' },
      { parts: ['Unterschriften', 'werden', 'im Restaurant', 'gesammelt.'], hint: 'Passiv Präsens' },
      { parts: ['Die Tafel', 'wurde', '2015', 'eröffnet.'], hint: 'Passiv Präteritum' },
      { parts: ['Das Haus', 'ist', 'renoviert', 'worden.'], hint: 'Passiv Perfekt' },
      { parts: ['Der Antrag', 'muss', 'bis Freitag', 'abgegeben werden.'], hint: 'Modalverb + Partizip + werden' },
      { parts: ['Ein Anwalt', 'soll', 'vorher', 'gefragt werden.'], hint: 'Modalverb + Partizip + werden' },
      { parts: ['Der Flyer', 'wird', 'von Sofia', 'gestaltet.'], hint: 'von + Dativ' },
      { parts: ['Das Parlament', 'wird', 'alle fünf Jahre', 'gewählt.'], hint: 'Passiv Präsens' },
    ],
  },
  {
    id: 'b1k10-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Gesellschaft, Politik und Europa.', skill: 'Artikel', tone: 'rose', chapter: 10, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Verein, die Unterschrift, das Engagement, die Versammlung, der Antrag, das Parlament, die Kommission, der Anwalt, die Petition, das Protokoll, der Beschluss, die Gesellschaft, das Ehrenamt, die Nachbarschaft, der Stadtrat, die Frist, das Rathaus, der Mitgliedstaat'),
  },
];
