import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// B1 Kapitel 8: Rund um Körper und Geist. Gesundheit, Krankenhaus, Musik, Gedächtnis.
// Grammar: nicht/kein/nur + brauchen + zu, Reflexivpronomen im Akkusativ und Dativ, zweiteilige Konnektoren.
// Aussprache: Satzmelodie. Strategie: Wörter lernen. Landeskunde: Regeln im Krankenhaus, Sinnesorte in D-A-CH.

export const glossaryB1k8: Record<string, GlossaryEntry> = {
  Krankenhaus: { de: 'Ein großes Gebäude, in dem Ärzte und Pflegekräfte kranke Menschen behandeln.', en: 'hospital' },
  Notaufnahme: { de: 'Der Teil vom Krankenhaus, in den man bei einem Notfall zuerst kommt.', en: 'emergency room' },
  Station: { de: 'Ein Bereich im Krankenhaus mit Zimmern für Patienten, zum Beispiel die Kinderstation.', en: 'hospital ward' },
  Besuchszeit: { de: 'Die Zeit, in der man Patienten im Krankenhaus besuchen darf.', en: 'visiting hours' },
  Erschöpfung: { de: 'Wenn man total müde ist und keine Kraft mehr hat.', en: 'exhaustion' },
  Kreislauf: { de: 'Das Blut fließt durch den Körper. Bei Kreislaufproblemen wird einem schwindelig.', en: 'circulation' },
  Gewohnheit: { de: 'Etwas, das man oft und fast automatisch macht, zum Beispiel jeden Morgen Kaffee trinken.', en: 'habit' },
  Gedächtnis: { de: 'Die Fähigkeit, sich Dinge zu merken und sich an Dinge zu erinnern.', en: 'memory' },
  Reflexivpronomen: { de: 'Ein Pronomen, das sich auf das Subjekt bezieht: mich, mir, dich, dir, sich, uns, euch.', en: 'reflexive pronoun' },
  Konnektor: { de: 'Ein Wort, das Wörter oder Sätze verbindet, zum Beispiel und, aber, weder … noch.', en: 'connector, conjunction' },
  Leidenschaft: { de: 'Etwas, das man sehr intensiv liebt und gern macht.', en: 'passion' },
  Musiktherapie: { de: 'Eine Behandlung, bei der man mit Musik Körper und Seele hilft.', en: 'music therapy' },
  Souschef: { de: 'Die Person in einer Restaurantküche, die direkt nach dem Chefkoch kommt und ihn vertritt.', en: 'sous-chef' },
  Satzmelodie: { de: 'Die Stimme geht beim Sprechen nach oben oder nach unten. So hört man, ob es eine Frage ist.', en: 'intonation' },
  Eselsbrücke: { de: 'Ein kleiner Satz oder Trick, mit dem man sich etwas leichter merken kann.', en: 'mnemonic, memory aid' },
  Hausordnung: { de: 'Die Regeln in einem Haus, zum Beispiel in einem Krankenhaus oder einem Mietshaus.', en: 'house rules' },
  Sinnesort: { de: 'Ein Ort, an dem man mit Augen, Ohren, Nase, Händen oder Füßen etwas Besonderes erlebt.', en: 'place for the senses' },
  überarbeiten: { de: 'Sich überarbeiten: so viel arbeiten, dass man krank oder erschöpft wird.', en: 'to overwork (sich überarbeiten)' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Körper und Geist', 'butter', 8,
  ['das Kapitel kennenlernen', 'Körperteile und Sinne benennen'], [
    overview('e-over', 'Kapitel 8: Rund um Körper und Geist',
      'April in Leipzig. Im Restaurant „Fuchs & Yuzu“ ist jeden Abend viel los, und Kenji arbeitet und arbeitet. Er hat sich [[überarbeiten|überarbeitet]], und dann passiert es: In der Küche bricht er zusammen. Die Diagnose: [[Erschöpfung]]. In Kapitel 8 geht es um Körper und Geist: um Gesundheit, das [[Krankenhaus]], Musik, Gefühle und das [[Gedächtnis]].\n\nDu lernst, Hilfe anzubieten, anzunehmen oder abzulehnen und jemanden zu warnen. Du sagst: *Du brauchst nicht zu kommen* oder *Du brauchst nur anzurufen*. Du sprichst über deine [[Gewohnheit|Gewohnheiten]] mit [[Reflexivpronomen]] (*ich wasche mir die Hände*), liest einen Zeitungsartikel über Musik im Krankenhaus und hörst eine Radiodiskussion über das Lernen. Dabei benutzt du zweiteilige [[Konnektor|Konnektoren]] wie *sowohl … als auch* oder *weder … noch*. In der WG liegt Kenji zwei Tage auf Amaras [[Station]] und muss lernen, Pausen zu machen. Und Sofia hat eine Idee: Tanzen ist ihre [[Leidenschaft]]!',
      'In this chapter Kenji overworks and collapses in his restaurant kitchen. He spends two days in the hospital where Amara works and has to learn to take breaks. You learn to offer, accept and decline help and to warn someone. Grammar: brauchen + zu with nicht, kein or nur (Du brauchst nicht zu kommen = you don’t have to come), reflexive pronouns in the accusative and dative (ich wasche mich / ich wasche mir die Hände), and two-part connectors (sowohl … als auch, weder … noch, entweder … oder, nicht nur … sondern auch, zwar … aber). You also read a newspaper article about music in the hospital, listen to a radio discussion about learning, get memory tips for vocabulary, learn the rules for hospital visits, and discover special places for the senses in Germany, Austria and Switzerland.',
      ['Hilfe anbieten, annehmen und ablehnen', 'jemanden warnen', 'über Gewohnheiten sprechen', 'Informationen aus einem Artikel weitergeben', 'eine Radiodiskussion verstehen', 'Lerntipps geben', 'besondere Orte vorstellen']),
    match('e-match', [['das Herz', '❤️'], ['das Gehirn', '🧠'], ['das Ohr', '👂'], ['das Auge', '👁️'], ['die Nase', '👃'], ['die Hand', '✋'], ['der Fuß', '🦶'], ['die Zunge', '👅']],
      { task: 'Welches Wort passt zum Bild?', taskEn: 'Match each part of the body to the picture.' }),
    sort('e-sort', ['gut für den Körper', 'gut für den Geist'], [['viel Gemüse essen', 0], ['Rad fahren', 0], ['genug Wasser trinken', 0], ['ein Buch lesen', 1], ['Kreuzworträtsel lösen', 1], ['meditieren', 1]],
      { task: 'Was ist gut für den Körper, was für den Geist? Sortiere.', taskEn: 'What is good for the body, and what is good for the mind? Sort.' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Kann ich dir helfen?', 'mint', 15,
  ['Hilfe anbieten, annehmen und ablehnen', 'jemanden warnen', 'nicht/kein/nur + brauchen + zu'], [
    audio('t1-audio', 'Hören: Hilfe im Alltag', [
      ['erzaehler', 'Szene eins. Am Leipziger Hauptbahnhof.'],
      ['jule', 'Entschuldigung, darf ich Ihnen helfen? Der Koffer sieht ja richtig schwer aus.'],
      ['frauBaumann', 'Oh, das wäre sehr nett. Mein Zug fährt von Gleis zwölf, und die Rolltreppe ist kaputt.'],
      ['jule', 'Kein Problem, ich nehme ihn. Passen Sie aber auf, die Treppe ist hier ziemlich steil.'],
      ['frauBaumann', 'Vielen Dank, junge Frau. Das ist wirklich lieb.'],
      ['erzaehler', 'Szene zwei. Im Fitnessstudio.'],
      ['elif', 'Ben, warte mal! Vorsicht, nicht so schnell. Mit dem schweren Gewicht verletzt du dir noch den Rücken.'],
      ['ben', 'Ach, ich mache das doch jede Woche.'],
      ['elif', 'Glaub mir, ich bin Physiotherapeutin. Du brauchst nicht gleich mit zwanzig Kilo anzufangen. Mach erst mal zehn.'],
      ['erzaehler', 'Szene drei. Ein Anruf am Freitagabend.'],
      ['priya', 'Hey Jonas, du ziehst doch morgen um. Soll ich dir beim Tragen helfen?'],
      ['jonas', 'Danke, das ist echt nett von dir, aber du brauchst nicht zu kommen. Mein Bruder hilft mir schon, und wir haben einen Transporter.'],
      ['priya', 'Sicher? Ich habe wirklich Zeit.'],
      ['jonas', 'Ganz sicher. Du brauchst nur am Sonntag zur Einweihungsparty zu kommen. Und bring gute Laune mit!'],
    ], { task: 'Hör die drei Szenen. Wer bietet Hilfe an? Wer warnt? Wer lehnt ab?', taskEn: 'Listen to the three scenes. Who offers help, who warns someone, and who declines help? Listen for brauchen … zu: du brauchst nicht zu kommen = you don’t have to come.' }),
    mcq('t1-q1', 'Warum braucht Frau Baumann Hilfe?', ['Die Rolltreppe ist kaputt.', 'Sie hat ihren Zug verpasst.', 'Sie findet das Gleis nicht.'], 0),
    mcq('t1-q2', 'Wovor warnt Elif Ben?', ['vor einer steilen Treppe', 'vor einer Verletzung am Rücken', 'vor zu viel Training am Abend'], 1),
    mcq('t1-q3', 'Was soll Priya machen?', ['beim Umzug helfen', 'einen Transporter mieten', 'zur Party kommen'], 2),
    grammar('t1-gram', 'nicht/kein/nur + brauchen + zu', {
      intro: '**nicht brauchen zu** bedeutet: etwas ist nicht nötig, man **muss nicht**. **nur brauchen zu** bedeutet: man muss nur das machen, sonst nichts. Der Infinitiv mit **zu** steht am Ende.',
      head: ['', 'Satz', 'Bedeutung'],
      rows: [
        ['nicht + brauchen + zu', 'Du **brauchst nicht zu** kommen.', 'Du musst nicht kommen.'],
        ['kein + brauchen + zu', 'Ihr **braucht keine** Angst **zu** haben.', 'Ihr müsst keine Angst haben.'],
        ['nur + brauchen + zu', 'Du **brauchst nur anzurufen**.', 'Du musst nur anrufen, sonst nichts.'],
        ['trennbares Verb', 'Wir **brauchen** heute nicht **einzukaufen**.', '**zu** steht zwischen Präfix und Verb.'],
      ],
      notes: [
        '**brauchen … zu** benutzt man nur mit **nicht, kein** oder **nur**. Ohne diese Wörter sagt man **müssen**: *Du musst kommen.* Falsch ist: *Du brauchst zu kommen.*',
        'Im Gespräch hört man oft „Du brauchst nicht kommen“ ohne **zu**. In Texten und in der Prüfung: immer mit **zu**!',
        '**nur** steht vor dem Teil, der wichtig ist: *Du brauchst **nur** kurz Bescheid zu sagen.*',
      ],
      en: 'nicht/kein + brauchen + zu + infinitive means “not have to, no need to”: Du brauchst nicht zu kommen (you don’t have to come). nur + brauchen + zu means “only have to”: Du brauchst nur anzurufen (you only need to call). The zu-infinitive goes to the end, and with separable verbs zu goes in the middle (einzukaufen). Without nicht, kein or nur, use müssen instead.',
    }),
    gap('t1-gap', ['Du {{brauchst}} nicht zu kommen, ich schaffe das allein.', 'Ihr braucht keine Angst {{zu}} haben.', 'Sie brauchen nur hier {{zu unterschreiben}}. (unterschreiben)', 'Du brauchst mich nur {{anzurufen}}. (anrufen)', 'Wir brauchen heute nicht {{einzukaufen}}. (einkaufen)'],
      { task: 'Ergänze: brauchen oder zu + Infinitiv.', taskEn: 'Fill in a form of brauchen, or zu + infinitive. With separable verbs, zu goes in the middle.' }),
    phrases('t1-phr', 'Hilfe anbieten, annehmen, ablehnen und warnen', {
      'Hilfe anbieten': ['Kann ich dir helfen?', 'Soll ich das für dich machen?', 'Brauchst du Hilfe?', 'Darf ich Ihnen helfen?'],
      'Hilfe annehmen': ['Ja, gern, das ist nett.', 'Das wäre super, danke!', 'Vielen Dank, das ist wirklich lieb.'],
      'Hilfe ablehnen': ['Danke, das ist nett, aber das schaffe ich allein.', 'Nicht nötig, danke.', 'Du brauchst nicht zu kommen, aber danke!'],
      'Warnen': ['Vorsicht!', 'Pass auf, der Boden ist nass!', 'Achtung, die Treppe ist steil.', 'Mach das lieber nicht!'],
    }),
    sort('t1-sort', ['Hilfe anbieten', 'Hilfe ablehnen', 'warnen'], [['Soll ich dir die Tasche tragen?', 0], ['Brauchst du Hilfe?', 0], ['Danke, das schaffe ich allein.', 1], ['Nicht nötig, aber danke!', 1], ['Vorsicht, heiß!', 2], ['Pass auf, da kommt ein Auto!', 2]],
      { task: 'Anbieten, ablehnen oder warnen? Sortiere.', taskEn: 'Is the speaker offering help, declining help or warning someone? Sort.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Musik für die Seele', 'sky', 15,
  ['einen Zeitungsartikel verstehen', 'Informationen weitergeben', 'über Musik und Gefühle sprechen', 'Reflexivpronomen im Akkusativ und Dativ'], [
    text('t2-text', `**Musik auf Station: Wie Lieder beim Gesundwerden helfen**

Jeden Donnerstag um 15 Uhr wird es auf der Station 4 eines Leipziger Krankenhauses plötzlich ganz still. Dann kommt Marta Weiß mit ihrer Gitarre. Die 38-Jährige ist Musiktherapeutin und besucht seit drei Jahren Patientinnen und Patienten. „Viele Menschen fühlen sich im Krankenhaus allein und haben Angst“, sagt sie. „Mit Musik kann ich sie zwar nicht gesund machen, aber ich kann ihnen helfen, sich zu entspannen.“

Studien zeigen: Musik wirkt sowohl auf den Körper als auch auf den Geist. Ruhige Lieder können den Blutdruck senken, und manche Patienten brauchen nach einer Operation weniger Schmerzmittel. Musik weckt außerdem Erinnerungen. Besonders ältere Menschen mit Demenz erinnern sich oft an Lieder aus ihrer Jugend, obwohl sie den Namen ihrer Ärztin vergessen haben.

„Neulich hat eine Patientin, 89 Jahre alt, bei einem alten Schlager mitgesungen. Sie wusste jedes Wort“, erzählt Marta Weiß. „Ihre Tochter hat vor Freude geweint.“

Die Patienten dürfen sich die Lieder selbst wünschen. Manche möchten Volkslieder hören, andere lieber Pop oder Jazz. Wer nicht singen will, braucht nicht mitzusingen. Man kann auch einfach zuhören oder die Augen schließen.

Das Projekt bezahlt ein Förderverein. Die Klinik sucht noch Musikerinnen und Musiker, die mitmachen möchten. Interessierte brauchen nur eine E-Mail an die Stationsleitung zu schreiben.`,
      { kicker: 'Lesen', title: 'Aus der Zeitung', task: 'Lies den Zeitungsartikel. Wie hilft Musik im Krankenhaus?', taskEn: 'Read the newspaper article. How does music help patients in the hospital? Notice the reflexive verbs: sich fühlen, sich entspannen, sich erinnern, sich etwas wünschen.' }),
    mcq('t2-q1', 'Was macht Marta Weiß?', ['Sie ist Ärztin auf Station 4.', 'Sie macht Musik mit Patienten.', 'Sie leitet einen Chor in der Klinik.'], 1),
    mcq('t2-q2', 'Was kann ruhige Musik laut Artikel?', ['den Blutdruck senken', 'eine Operation ersetzen', 'Demenz heilen'], 0),
    mcq('t2-q3', 'Was müssen Musiker tun, die mitmachen wollen?', ['eine Prüfung machen', 'eine E-Mail schreiben', 'jeden Donnerstag kommen'], 1),
    phrases('t2-phr', 'Einen Artikel weitergeben und über Musik sprechen', {
      'Einleiten': ['Ich habe einen interessanten Artikel über … gelesen.', 'In dem Artikel geht es um …'],
      'Informationen weitergeben': ['Im Artikel steht, dass …', 'Laut dem Artikel …', 'Die Musiktherapeutin sagt, dass …'],
      'Kommentieren': ['Das finde ich erstaunlich, weil …', 'Das wusste ich nicht.', 'Ich kann mir gut vorstellen, dass …'],
      'Musik und Gefühle': ['Wenn ich … höre, fühle ich mich …', 'Bei diesem Lied werde ich immer fröhlich.', 'Dieses Lied erinnert mich an …'],
    }),
    grammar('t2-gram', 'Reflexivpronomen im Akkusativ und Dativ', {
      intro: 'Viele Verben haben ein **Reflexivpronomen**. Gibt es im Satz **kein anderes Akkusativobjekt**, steht das Reflexivpronomen im **Akkusativ**: *Ich wasche **mich**.* Gibt es **schon ein Akkusativobjekt**, steht es im **Dativ**: *Ich wasche **mir** die Hände.*',
      head: ['', 'Akkusativ', 'Dativ (+ Akkusativobjekt)'],
      rows: [
        ['ich', 'Ich wasche **mich**.', 'Ich wasche **mir** die Hände.'],
        ['du', 'Du ziehst **dich** an.', 'Du ziehst **dir** die Jacke an.'],
        ['er/sie/es', 'Er entspannt **sich**.', 'Er wünscht **sich** ein Lied.'],
        ['wir', 'Wir erinnern **uns** an den Sommer.', 'Wir merken **uns** die Wörter.'],
        ['ihr', 'Ihr fühlt **euch** wohl.', 'Ihr putzt **euch** die Zähne.'],
        ['sie/Sie', 'Sie freuen **sich**.', 'Sie stellen **sich** das schwierig vor.'],
      ],
      notes: [
        'Nur bei **ich** und **du** gibt es einen Unterschied: **mich/mir**, **dich/dir**. Sonst sind die Formen gleich.',
        'Immer mit Dativ und Akkusativobjekt: **sich etwas merken, sich etwas vorstellen, sich etwas wünschen, sich etwas ansehen**: *Ich merke **mir** die Nummer.*',
        'Bei Körperteilen benutzt man meistens das Reflexivpronomen im Dativ und den bestimmten Artikel: *Ich putze **mir die** Zähne.*',
      ],
      en: 'Many verbs come with a reflexive pronoun. If the sentence has no other accusative object, the pronoun is accusative (ich wasche mich = I wash myself). If there is already an accusative object, the pronoun is dative (ich wasche mir die Hände = I wash my hands). Only ich and du have different forms: mich/mir, dich/dir. Verbs like sich etwas merken (to memorize) and sich etwas vorstellen (to imagine) always use the dative. For body parts, German says mir die Zähne rather than meine Zähne.',
    }),
    gap('t2-gap', ['Ich wasche {{mir}} die Hände.', 'Kannst du {{dir}} meine Telefonnummer merken?', 'Wir treffen {{uns}} um acht.', 'Hast du {{dich}} schon angezogen?', 'Ich stelle {{mir}} das Leben in Tokio sehr spannend vor.', 'Er hat {{sich}} das Bein gebrochen.'],
      { bank: ['mich', 'mir', 'dich', 'dir', 'uns', 'sich'], task: 'Ergänze das Reflexivpronomen.', taskEn: 'Fill in the reflexive pronoun. Is there another accusative object? Then use the dative.' }),
    sort('t2-sort', ['Akkusativ (mich)', 'Dativ (mir)'], [['Ich ziehe ___ schnell an.', 0], ['Ich erinnere ___ an dich.', 0], ['Ich entspanne ___ beim Tanzen.', 0], ['Ich ziehe ___ die Jacke an.', 1], ['Ich merke ___ das Wort.', 1], ['Ich wasche ___ die Haare.', 1]],
      { task: 'mich oder mir? Sortiere.', taskEn: 'mich or mir? Sort the sentences. Look for a second object.' }),
    compose('t2-comp', 'Was machst du jeden Tag? Erzähl von deinen Gewohnheiten.', [
      ['Was machst du nach dem Aufstehen?', 'What do you do after getting up?', ['Nach dem Aufstehen', 'putze', 'ich mir', 'die Zähne.']],
      ['Was machst du dann?', 'What do you do next?', ['Danach', 'ziehe', 'ich mich', 'schnell', 'an.']],
      ['Wie entspannst du dich am Abend?', 'How do you relax in the evening?', ['Am Abend', 'entspanne', 'ich mich', 'mit Musik.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences about your daily habits.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Wie lernt man am besten?', 'lilac', 15,
  ['eine Radiodiskussion verstehen', 'zweiteilige Konnektoren', 'Prüfungstraining: Lesen Teil 5'], [
    audio('t3-audio', 'Hören: Leipzig am Abend', [
      ['moderatorin', 'Willkommen zu „Leipzig am Abend“! Heute diskutieren wir: Wie lernt man am besten? Bei mir sind der Lerncoach Tomasz Brunner aus Zürich, die Studentin Jule und Herr Fiete Hansen, der mit zweiundsiebzig noch Spanisch lernt. Herr Brunner, Ihr wichtigster Tipp?'],
      ['tomasz', 'Ganz klar: Pausen. Unser Gedächtnis braucht sowohl Wiederholung als auch Ruhe. Wer sechs Stunden ohne Pause lernt, vergisst das meiste schnell wieder.'],
      ['jule', 'Das sehe ich anders. Vor Prüfungen habe ich weder Zeit noch Lust auf Pausen. Ich lerne entweder die ganze Nacht oder gar nicht.'],
      ['tomasz', 'Das verstehe ich. So lernen Sie zwar viel für die Prüfung, aber nach zwei Wochen ist fast alles weg.'],
      ['moderatorin', 'Herr Hansen, wie lernen Sie denn?'],
      ['opaFiete', 'Ich lerne jeden Tag nur zwanzig Minuten, aber wirklich jeden Tag. Und ich verbinde neue Wörter mit Bildern. „Playa“ heißt Strand, da stelle ich mir meinen Urlaub auf Mallorca vor.'],
      ['tomasz', 'Genau! Das ist nicht nur effektiv, sondern macht auch Spaß. Bilder und Gefühle helfen dem Gedächtnis.'],
      ['jule', 'Okay, Bilder benutze ich auch manchmal. Und ich lerne gern mit Musik.'],
      ['tomasz', 'Ruhige Musik ohne Text kann helfen. Lieder mit Text lenken eher ab.'],
      ['opaFiete', 'Und man braucht keine Angst vor Fehlern zu haben. In meinem Alter merke ich mir zwar nicht mehr alles, aber ich habe Spaß. Das ist doch das Wichtigste.'],
      ['moderatorin', 'Schöne Schlussworte. Vielen Dank Ihnen allen!'],
    ], { task: 'Hör die Radiodiskussion. Welche Lerntipps hörst du?', taskEn: 'Listen to the radio discussion about learning. What learning tips do you hear? Listen for two-part connectors like sowohl … als auch (both … and) and weder … noch (neither … nor).' }),
    mcq('t3-q1', 'Was ist für Herrn Brunner am wichtigsten?', ['Pausen', 'Musik mit Text', 'lange Nächte'], 0),
    mcq('t3-q2', 'Wie lernt Jule vor Prüfungen?', ['jeden Tag zwanzig Minuten', 'die ganze Nacht oder gar nicht', 'nur mit Bildern'], 1),
    mcq('t3-q3', 'Wie lernt Herr Hansen neue Wörter?', ['Er schreibt sie zehnmal auf.', 'Er verbindet sie mit Bildern.', 'Er hört Lieder mit Text.'], 1),
    grammar('t3-gram', 'Zweiteilige Konnektoren', {
      intro: 'Zweiteilige Konnektoren verbinden zwei Wörter, Satzteile oder Sätze. Sie bestehen aus **zwei Teilen**, die zusammengehören.',
      head: ['Konnektor', 'Bedeutung', 'Beispiel'],
      rows: [
        ['sowohl … als auch', 'A und B (beide)', 'Musik hilft **sowohl** dem Körper **als auch** dem Geist.'],
        ['nicht nur … sondern auch', 'A und B (B ist besonders)', 'Das ist **nicht nur** effektiv, **sondern** macht **auch** Spaß.'],
        ['weder … noch', 'nicht A und nicht B', 'Ich habe **weder** Zeit **noch** Lust.'],
        ['entweder … oder', 'A oder B (nur eins)', 'Ich lerne **entweder** die ganze Nacht **oder** gar nicht.'],
        ['zwar … aber', 'A stimmt, aber B ist auch wichtig', 'Ich merke mir **zwar** nicht alles, **aber** ich habe Spaß.'],
      ],
      notes: [
        '**weder … noch** ist schon negativ. Man braucht kein *nicht* oder *kein* dazu: *Ich kann **weder** tanzen **noch** singen.*',
        'Mit **sowohl … als auch** als Subjekt steht das Verb meistens im Plural: ***Sowohl** Nele **als auch** Sofia **besuchen** Kenji.*',
      ],
      en: 'Two-part connectors link words, phrases or clauses: sowohl … als auch (both … and), nicht nur … sondern auch (not only … but also), weder … noch (neither … nor, already negative, so no extra nicht), entweder … oder (either … or), zwar … aber (admittedly …, but).',
    }),
    gap('t3-gap', ['Kenji arbeitet {{sowohl}} mittags als auch abends.', 'Er hat weder Zeit {{noch}} Energie.', 'Entweder machst du eine Pause {{oder}} du wirst krank.', 'Tanzen ist nicht nur gesund, {{sondern}} auch lustig.', 'Das Krankenhausessen ist {{zwar}} nicht lecker, aber gesund.'],
      { bank: ['sowohl', 'noch', 'oder', 'sondern', 'zwar', 'aber'], task: 'Ergänze den Konnektor.', taskEn: 'Fill in the missing part of the two-part connector. One word is extra.' }),
    match('t3-match', [['Ich trinke sowohl Kaffee …', '… als auch Tee.'], ['Ich trinke weder Kaffee …', '… noch Tee.'], ['Ich trinke entweder Kaffee …', '… oder Tee.'], ['Ich trinke nicht nur Kaffee, …', '… sondern auch Tee.'], ['Ich trinke zwar Kaffee, …', '… aber keinen Tee.']],
      { task: 'Was gehört zusammen?', taskEn: 'Match the first part of each connector to its second part.' }),
    tip('t3-pt-tip', 'Prüfungstraining: Lesen Teil 5', 'In **Lesen Teil 5** liest du einen Text mit Regeln, zum Beispiel eine [[Hausordnung]] oder Informationen für Kursteilnehmer. Dazu gibt es **vier Aufgaben** mit je drei Lösungen: **a, b** oder **c**.\n\n1. Lies zuerst die Aufgaben. Dann weißt du, welche Informationen du suchst.\n2. Die Überschriften im Text helfen dir: Such den passenden Abschnitt.\n3. Achte genau auf Wörter wie **nur, nicht, höchstens, verboten, erlaubt**. Oft sind zwei Lösungen fast richtig.\n4. Im Text stehen oft andere Wörter: *Bitte schalten Sie Ihr Handy auf lautlos* bedeutet: Das Handy soll leise sein.'),
    text('t3-pt-text', `**Hausordnung für Besucherinnen und Besucher (Auszug)**

**1. Besuchszeiten**
Besuche sind täglich von 14 bis 19 Uhr möglich. Pro Patient dürfen höchstens zwei Personen gleichzeitig im Zimmer sein. Kinder unter 12 Jahren dürfen nur in Begleitung eines Erwachsenen kommen. Auf der Intensivstation gelten besondere Regeln: Bitte melden Sie sich vorher telefonisch an.

**2. Ruhe**
Unsere Patientinnen und Patienten brauchen Ruhe. Bitte sprechen Sie leise und schalten Sie Ihr Handy auf lautlos. Telefonieren ist nur im Aufenthaltsraum und im Eingangsbereich erlaubt. Von 12 bis 14 Uhr ist Mittagsruhe.

**3. Essen und Blumen**
Bitte bringen Sie Lebensmittel nur nach Rücksprache mit dem Pflegepersonal mit, denn viele Patienten müssen eine Diät einhalten. Topfpflanzen sind aus hygienischen Gründen nicht erlaubt. Schnittblumen in einer Vase sind herzlich willkommen.

**4. Hygiene**
Bitte desinfizieren Sie sich beim Betreten und Verlassen der Station die Hände. Die Spender finden Sie neben jeder Tür. Wenn Sie erkältet sind oder Fieber haben, verschieben Sie Ihren Besuch bitte.

**5. Rauchen**
Auf dem gesamten Klinikgelände ist das Rauchen verboten. Die Cafeteria im Erdgeschoss ist täglich von 8 bis 18 Uhr geöffnet.`,
      { kicker: 'Prüfungstraining', title: 'Lesen Teil 5', task: 'Lies die Hausordnung. Welche Lösung ist richtig: a, b oder c?', taskEn: 'Read the hospital rules for visitors. Choose the right answer for each item: a, b or c.' }),
    mcq('t3-pt-q1', 'Besucher dürfen …', ['jeden Tag ab 12 Uhr kommen.', 'zu zweit ins Patientenzimmer gehen.', 'Kinder unter 12 Jahren allein schicken.'], 1, { why: 'Höchstens zwei Personen dürfen gleichzeitig im Zimmer sein. Besuche gibt es erst ab 14 Uhr.' }),
    mcq('t3-pt-q2', 'Im Patientenzimmer …', ['darf man kurz telefonieren.', 'soll das Handy lautlos sein.', 'ist nur bis 14 Uhr Ruhe.'], 1, { why: 'Telefonieren ist nur im Aufenthaltsraum und im Eingangsbereich erlaubt.' }),
    mcq('t3-pt-q3', 'Was ist erlaubt?', ['eine Topfpflanze mitbringen', 'Blumen in einer Vase mitbringen', 'ohne Rücksprache Kuchen mitbringen'], 1, { why: 'Schnittblumen in einer Vase sind willkommen, Topfpflanzen nicht.' }),
    mcq('t3-pt-q4', 'Wer erkältet ist, …', ['soll später zu Besuch kommen.', 'muss eine Maske tragen.', 'darf nur in die Cafeteria gehen.'], 0, { why: 'Im Text steht: Verschieben Sie Ihren Besuch bitte.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 8: Zu viel', 'rose', 12,
  ['eine Geschichte hören', 'Hilfe anbieten und ablehnen', 'Regeln im Krankenhaus kennen'], [
    text('wg-intro', 'Mitte April. Seit Wochen steht Kenji vierzehn Stunden am Tag in der Küche. Das „Fuchs & Yuzu“ ist jeden Abend voll, sein Koch hat gekündigt, und Kenji will alles allein schaffen. Am Samstagabend, mitten im Service, wird ihm plötzlich schwindelig. Er bricht in der Küche zusammen. Ein Rettungswagen bringt ihn in die [[Notaufnahme]], ausgerechnet in Amaras Krankenhaus. Die Diagnose: Erschöpfung, Probleme mit dem [[Kreislauf]], viel zu wenig getrunken. Er muss zwei Tage bleiben. Am Sonntag kommen Nele, Sofia und Felix zur [[Besuchszeit]].',
      { kicker: 'Die Geschichte', en: 'Mid-April. For weeks Kenji has been working fourteen hours a day in the kitchen. Fuchs & Yuzu is full every evening, his cook has quit, and Kenji wants to manage everything alone. On Saturday evening, in the middle of service, he suddenly feels dizzy and collapses in the kitchen. An ambulance takes him to the emergency room, of all places in Amara’s hospital. The diagnosis: exhaustion, circulation problems, far too little to drink. He has to stay for two days. On Sunday, Nele, Sofia and Felix come during visiting hours.' }),
    audio('wg-audio', 'Folge 8: Besuch auf Station 4', [
      ['amara', 'Hallo, ihr drei. Kommt rein, aber bitte leise. Kenjis Zimmernachbar schläft.'],
      ['sofia', 'Ich habe ihm eine Pflanze mitgebracht. Eine kleine Orchidee!'],
      ['amara', 'Oh, Sofia, das ist lieb, aber Topfpflanzen sind hier leider nicht erlaubt. Wegen der Hygiene. Und habt ihr euch am Eingang die Hände desinfiziert?'],
      ['kenji', 'Hey, Leute. Ihr braucht doch nicht alle zu kommen. Mir geht’s schon wieder gut.'],
      ['nele', 'Na klar. Du bist in der Küche umgefallen, Kenji! Wir haben uns echt Sorgen gemacht.'],
      ['kenji', 'Ich weiß. Aber heute Abend ist das Restaurant voll reserviert. Ich muss morgen wieder in die Küche.'],
      ['amara', 'Du musst gar nichts. Du bleibst bis Dienstag hier, und danach machst du eine Woche Pause. Das sage ich dir nicht als Freundin, sondern als Stationsleiterin.'],
      ['felix', 'Und wegen heute Abend: Ich habe schon alle Gäste angerufen. Du brauchst dich um nichts zu kümmern.'],
      ['kenji', 'Wirklich? Danke, Felix. Aber ich kann doch nicht einfach eine Woche zumachen.'],
      ['nele', 'Doch, kannst du. Du arbeitest seit Wochen sowohl mittags als auch abends, ganz allein. Du brauchst Hilfe.'],
      ['kenji', 'Ja, ja. Entweder finde ich einen Souschef oder ich schaffe das nicht mehr lange. Das habe ich jetzt verstanden.'],
      ['sofia', 'Und wenn du wieder fit bist, kommst du mit zu meinem Tanzkurs. Salsa! Da vergisst man alles.'],
      ['kenji', 'Tanzen? Sofia, ich kann weder tanzen noch stillsitzen.'],
      ['sofia', 'Perfekt. Dann bist du genau richtig!'],
    ], { task: 'Hör zu. Wer bietet Kenji Hilfe an? Was sagt Amara?', taskEn: 'Listen. Who offers Kenji help, and what does Amara tell him? sich um etwas kümmern = to take care of something. stillsitzen = to sit still.' }),
    mcq('wg-q1', 'Warum ist Kenji im Krankenhaus?', ['Er hat sich in der Küche geschnitten.', 'Er ist vor Erschöpfung zusammengebrochen.', 'Er hatte einen Fahrradunfall.'], 1),
    mcq('wg-q2', 'Warum ist Sofias Geschenk ein Problem?', ['Topfpflanzen sind auf der Station nicht erlaubt.', 'Kenji mag keine Blumen.', 'Der Zimmernachbar ist allergisch.'], 0),
    mcq('wg-q3', 'Was hat Felix gemacht?', ['Er hat für die Gäste gekocht.', 'Er hat alle Gäste angerufen.', 'Er hat einen Souschef gefunden.'], 1),
    mcq('wg-q4', 'Wie lange soll Kenji nach dem Krankenhaus Pause machen?', ['zwei Tage', 'eine Woche', 'einen Monat'], 1),
    tip('wg-tip', 'Landeskunde: Regeln im Krankenhaus', 'In Krankenhäusern in Deutschland, Österreich und der Schweiz gibt es feste **Besuchszeiten**, oft am Nachmittag und am frühen Abend. Auf jeder Station gilt: **Ruhe**! Man spricht leise und telefoniert im Flur oder im Aufenthaltsraum. Am Eingang **desinfiziert** man sich die Hände. **Topfpflanzen** sind oft verboten, denn in der Erde können Keime sein. Wer erkältet ist, bleibt besser zu Hause. Und noch ein Tipp: Viele Patienten freuen sich mehr über einen kurzen Besuch als über einen langen.'),
    audio('wg-audio2', 'Folge 8: Zwei Wochen später', [
      ['sofia', 'Na, Kenji? Wie war dein erster Tanzkurs?'],
      ['kenji', 'Ehrlich? Am Anfang war es furchtbar. Ich konnte mir die Schritte einfach nicht merken. Eins, zwei, drei … und schon stand ich auf deinem Fuß.'],
      ['sofia', 'Das passiert allen. Und dann?'],
      ['kenji', 'Dann hat mich die Musik irgendwie mitgenommen. Ich habe zwei Stunden lang weder an Bestellungen noch an Rechnungen gedacht. Das ist mir seit Jahren nicht passiert.'],
      ['sofia', 'Siehst du! Für mich ist Tanzen genau das: Leidenschaft und Pause für den Kopf.'],
      ['kenji', 'Ich habe übrigens noch mehr geändert. Seit Montag arbeitet Malte bei mir, ein Souschef aus Halle. Er ist zwar jung, aber richtig gut.'],
      ['sofia', 'Super! Und hast du dir auch Pausen vorgenommen?'],
      ['kenji', 'Ja. Jeden Tag um vier setze ich mich eine halbe Stunde in den Hof. Ohne Handy. Und montags ist das Restaurant jetzt immer zu.'],
      ['sofia', 'Und trinkst du genug?'],
      ['kenji', 'Amara hat mir eine riesige Wasserflasche geschenkt. Und sie schreibt mir jeden Tag: „Hast du schon getrunken?“'],
      ['sofia', 'Typisch Amara. Also, nächsten Donnerstag wieder Salsa?'],
      ['kenji', 'Na gut. Du brauchst mich nicht mal zu überreden. Ich komme freiwillig.'],
    ], { task: 'Hör zu. Was hat Kenji in seinem Leben geändert?', taskEn: 'Listen. What has Kenji changed in his life? sich etwas vornehmen = to resolve to do something. überreden = to persuade.' }),
    mcq('wg-q5', 'Was hat Kenji beim Tanzkurs erlebt?', ['Er hat zwei Stunden nicht an die Arbeit gedacht.', 'Er hat sich am Fuß verletzt.', 'Er hat seinen neuen Souschef kennengelernt.'], 0),
    mcq('wg-q6', 'Was hat Kenji im Restaurant geändert?', ['Es ist jetzt auch montags offen.', 'Er hat einen Souschef eingestellt.', 'Er kocht nur noch mittags.'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Verben mit Reflexivpronomen', 'Satzbau mit zweiteiligen Konnektoren'], [
    grammar('g-1', 'Wichtige Verben mit Reflexivpronomen', {
      intro: 'Diese Verben brauchst du oft, wenn du über Gesundheit, Gefühle und das Lernen sprichst.',
      head: ['Verb', 'Kasus', 'Beispiel'],
      rows: [
        ['sich erholen', 'Akkusativ', 'Kenji erholt **sich** im Krankenhaus.'],
        ['sich entspannen', 'Akkusativ', 'Beim Tanzen entspanne ich **mich**.'],
        ['sich erinnern an + Akk.', 'Akkusativ', 'Erinnerst du **dich** an das Lied?'],
        ['sich kümmern um + Akk.', 'Akkusativ', 'Felix kümmert **sich** um die Gäste.'],
        ['sich Sorgen machen', 'Dativ', 'Wir machen **uns** Sorgen um dich.'],
        ['sich etwas merken', 'Dativ', 'Ich merke **mir** die Schritte nicht.'],
        ['sich etwas vorstellen', 'Dativ', 'Stell **dir** vor: Kenji tanzt Salsa!'],
        ['sich etwas vornehmen', 'Dativ', 'Ich nehme **mir** mehr Pausen vor.'],
      ],
      notes: [
        '**sich vorstellen** ohne Akkusativobjekt bedeutet: sich präsentieren. *Darf ich **mich** vorstellen? Ich bin Sofia.* Mit Akkusativobjekt bedeutet es: etwas im Kopf sehen. *Ich stelle **mir** das schön vor.*',
        'Das Reflexivpronomen steht meistens direkt nach dem konjugierten Verb: *Heute erholt **sich** Kenji.* Im Nebensatz: *…, weil er **sich** erholen muss.*',
      ],
      en: 'Useful reflexive verbs for health, feelings and learning. With accusative: sich erholen (to recover), sich entspannen (to relax), sich erinnern an (to remember), sich kümmern um (to take care of). With dative plus an object: sich Sorgen machen (to worry), sich etwas merken (to memorize), sich etwas vorstellen (to imagine), sich etwas vornehmen (to resolve to do). sich vorstellen without an object means “to introduce oneself”.',
    }),
    grammar('g-2', 'Zweiteilige Konnektoren im Satz', {
      head: ['Konnektor', 'verbindet', 'Beispiel'],
      rows: [
        ['sowohl … als auch', 'Satzteile', 'Felix spielt **sowohl** Gitarre **als auch** Klavier.'],
        ['weder … noch', 'Satzteile oder Sätze', 'Er isst **weder** Fleisch **noch** Fisch.'],
        ['entweder … oder', 'Satzteile oder Sätze', '**Entweder** gehen wir tanzen **oder** wir bleiben zu Hause.'],
        ['nicht nur … sondern auch', 'Satzteile oder Sätze', 'Sofia tanzt **nicht nur** Salsa, **sondern auch** Tango.'],
        ['zwar … aber', 'Sätze', 'Malte ist **zwar** jung, **aber** er kocht richtig gut.'],
      ],
      notes: [
        '**aber, oder** und **sondern** stehen auf Position 0. Danach kommt die normale Wortstellung: *…, aber **er kocht** gut.*',
        '**zwar** steht im ersten Satz meistens nach dem Verb: *Malte **ist zwar** jung, …*',
        'Vor **aber** und **sondern** steht immer ein Komma. Bei *sowohl … als auch, weder … noch* und *entweder … oder* steht normalerweise kein Komma.',
      ],
      en: 'Sentence structure with two-part connectors. aber, oder and sondern take position 0, so normal word order follows (…, aber er kocht gut). zwar usually comes right after the verb in the first clause. Always put a comma before aber and sondern; with sowohl … als auch, weder … noch and entweder … oder there is normally no comma.',
    }),
    mcq('g-q1', 'Ihr braucht heute nicht ___. (einkaufen)', ['einzukaufen', 'zu einkaufen', 'einkaufen zu'], 0),
    mcq('g-q2', 'Ich habe ___ die Hände gewaschen.', ['mich', 'mir', 'mein'], 1),
    mcq('g-q3', 'Er hat ___ Zeit ___ Lust.', ['weder … noch', 'sowohl … noch', 'entweder … als auch'], 0),
    mcq('g-q4', 'Kannst du ___ das vorstellen?', ['dich', 'dir', 'sich'], 1, { why: 'sich etwas vorstellen: Es gibt schon ein Akkusativobjekt (das), deshalb Dativ: dir.' }),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Strategie: Wörter lernen', 'Lerntipps geben', 'Aussprache: Satzmelodie', 'besondere Orte vorstellen'], [
    tip('u-tip', 'Strategie: Wörter lernen', 'Dein Gedächtnis liebt **Bilder, Gefühle und Wiederholung**. Probier diese Techniken aus:\n\n1. **Bilder:** Verbinde ein neues Wort mit einem lustigen Bild im Kopf. *der Rollstuhl*: ein Stuhl, der rollt.\n2. **[[Eselsbrücke|Eselsbrücken]]:** Ein kleiner Satz hilft beim Merken. Ein bekanntes Beispiel für die Rechtschreibung: *Wer „nämlich“ mit h schreibt, ist dämlich.*\n3. **Gedächtnispalast:** Leg die Wörter in Gedanken an Orte in deiner Wohnung: die Tablette auf den Küchentisch, das Pflaster an die Tür. Später gehst du im Kopf durch die Wohnung und sammelst die Wörter wieder ein.\n4. **Wortfamilien:** Lern Wörter in Gruppen: *krank, die Krankheit, das Krankenhaus, die Krankenkasse*.\n5. **Wiederholen mit Pausen:** heute, morgen, in drei Tagen, in einer Woche. So kommen die Wörter ins Langzeitgedächtnis.'),
    compose('u-comp', 'Deine Freundin lernt Deutsch und vergisst immer die neuen Wörter. Gib ihr Lerntipps.', [
      ['Gib einen Tipp mit Bildern.', 'Give a tip about pictures.', ['Verbinde', 'neue Wörter', 'mit', 'lustigen Bildern.']],
      ['Sag, was sie nicht zu machen braucht.', 'Say what she doesn’t need to do.', ['Du', 'brauchst', 'nicht', 'stundenlang', 'zu lernen.']],
      ['Gib einen Tipp mit nicht nur … sondern auch.', 'Give a tip with nicht nur … sondern auch.', ['Lern', 'nicht nur', 'am Schreibtisch,', 'sondern auch', 'beim Spazierengehen.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences to give your friend learning tips.' }),
    audio('u-aus', 'Aussprache: Satzmelodie', [
      ['frauKlein', 'Heute geht es um die Satzmelodie. Die Melodie zeigt, ob du etwas sagst, etwas fragst oder ob der Satz noch weitergeht.'],
      ['frauKlein', 'Bei einer Aussage geht die Stimme am Ende nach unten: Kenji ist im Krankenhaus. Auch bei W-Fragen geht sie meistens nach unten: Wann sind die Besuchszeiten?'],
      ['frauKlein', 'Bei Ja-Nein-Fragen geht die Stimme nach oben: Kannst du mir helfen? Brauchst du etwas?'],
      ['frauKlein', 'Und wenn der Satz noch nicht fertig ist, bleibt die Stimme oben. Hör mal: Ich trinke sowohl Kaffee … als auch Tee. Entweder komme ich heute … oder morgen.'],
      ['frauKlein', 'Jetzt du. Sprich nach und achte auf deine Stimme: Möchtest du mitkommen? Wer kommt mit? Ich komme mit.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. In statements and W-questions the voice goes down at the end. In yes/no questions it goes up. In the middle of a sentence, before the second part of a connector, it stays up.' }),
    sort('u-sort', ['Die Stimme geht nach oben ↗', 'Die Stimme geht nach unten ↘'], [['Kommst du mit?', 0], ['Hast du heute Zeit?', 0], ['Bist du müde?', 0], ['Wann beginnt der Kurs?', 1], ['Wo ist Station 4?', 1], ['Ich komme morgen.', 1]],
      { task: 'Wohin geht die Melodie am Ende? Sprich die Sätze laut.', taskEn: 'Does the voice go up or down at the end? Say each sentence out loud.' }),
    text('u-text', `**Mit allen Sinnen: Besondere Orte in D-A-CH**

**Barfußpfad Bad Sobernheim (Deutschland):** Hier zieht man die Schuhe aus und läuft barfuß über Gras, Steine und Holz, durch Schlamm und sogar durch einen kleinen Fluss. Viele Besucher sagen: Man spürt seine Füße danach ganz neu.

**Dialog im Dunkeln, Hamburg (Deutschland):** In dieser Ausstellung ist es komplett dunkel. Blinde Guides führen die Besucher durch einen Park, über eine Straße und in ein Café. Man sieht nichts und kann sich nur auf die Ohren, die Nase und die Hände verlassen.

**Klangweg im Toggenburg (Schweiz):** An einem Wanderweg in den Bergen stehen viele Klanginstallationen aus Holz und Metall. Man kann trommeln, Glocken läuten oder in große Trichter rufen. Man hört sowohl die Instrumente als auch die Natur.

**Haus der Musik, Wien (Österreich):** In diesem Museum kann man Musik nicht nur hören, sondern auch selbst machen. Man kann zum Beispiel ein virtuelles Orchester dirigieren.`,
      { kicker: 'Landeskunde', title: 'Sinnesorte', task: 'Lies den Text über vier besondere Orte.', taskEn: 'Read about four special places for the senses (Sinnesorte) in Germany, Switzerland and Austria.', en: 'A barefoot trail where you walk over grass, stones, wood and mud; an exhibition in total darkness with blind guides; a hiking trail in the Swiss mountains with sound installations; and a music museum in Vienna where you can conduct a virtual orchestra.' }),
    mcq('u-q1', 'Wo braucht man keine Schuhe?', ['in Bad Sobernheim', 'in Hamburg', 'in Wien'], 0),
    mcq('u-q2', 'Wo führen blinde Guides die Besucher?', ['im Toggenburg', 'in Hamburg', 'in Wien'], 1),
    mcq('u-q3', 'Wo kann man ein Orchester dirigieren?', ['in Bad Sobernheim', 'im Toggenburg', 'in Wien'], 2),
    phrases('u-phr', 'Einen besonderen Ort vorstellen', {
      'Den Ort nennen': ['Ich möchte euch einen besonderen [[Sinnesort|Ort]] vorstellen: …', 'Er liegt in … / in der Nähe von …'],
      'Beschreiben': ['Dort kann man …', 'Man hört / sieht / riecht / spürt …', 'Besonders schön finde ich, dass …'],
      'Empfehlen': ['Wenn ihr mal in … seid, müsst ihr unbedingt …', 'Ihr braucht nur … mitzubringen.'],
    }),
    order('u-order', ['Ich', 'kann', 'mir', 'die Wörter', 'mit Bildern besser merken.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence. The reflexive pronoun comes right after the conjugated verb.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 12,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['das Krankenhaus', 'dort behandelt man kranke Menschen', 'hospital'], ['die Notaufnahme', 'dorthin kommt man im Notfall zuerst', 'emergency room'], ['die Besuchszeit', 'dann darf man Patienten besuchen', 'visiting hours'],
      ['sich erholen', 'wieder gesund und stark werden', 'to recover'], ['die Erschöpfung', 'wenn man total müde und ohne Kraft ist', 'exhaustion'], ['der Kreislauf', 'das Blut fließt durch den Körper', 'circulation'],
      ['das Gedächtnis', 'damit merkt man sich Dinge', 'memory'], ['sich etwas merken', 'etwas nicht vergessen', 'to memorize, to remember'], ['die Gewohnheit', 'etwas, das man immer wieder macht', 'habit'],
      ['die Leidenschaft', 'etwas, das man sehr liebt', 'passion'], ['warnen', 'sagen, dass etwas gefährlich ist', 'to warn'], ['ablehnen', 'Nein sagen zu einem Angebot', 'to decline, to turn down'],
    ]),
    phrases('w-phr', 'Über Gewohnheiten sprechen', {
      'Was man normalerweise macht': ['Normalerweise …', 'Jeden Morgen …', 'Meistens … ich …'],
      'Neue Gewohnheiten': ['Ich habe mir angewöhnt, … zu …', 'Ich nehme mir vor, mehr …', 'Seit ein paar Wochen …'],
      'Schlechte Gewohnheiten': ['Ich möchte mir … abgewöhnen.', 'Ich arbeite oft zu viel.', 'Ich trinke zu wenig Wasser.'],
    }),
    match('w-match', [['der Rettungswagen', 'Er bringt Kranke schnell ins Krankenhaus.'], ['das Pflaster', 'Das klebt man auf eine kleine Wunde.'], ['die Tablette', 'Die schluckt man mit einem Glas Wasser.'], ['das Fieberthermometer', 'Damit misst man die Körpertemperatur.'], ['der Rollstuhl', 'Damit fährt jemand, der nicht laufen kann.'], ['die Krücken', 'Damit läuft man, wenn das Bein gebrochen ist.'], ['das Krankenhausbett', 'Darin liegen die Patienten auf der Station.'], ['die Kopfhörer', 'Damit hört man Musik, ohne andere zu stören.'], ['der Desinfektionsmittelspender', 'Hier desinfiziert man sich die Hände.'], ['die Wasserflasche', 'Die hat Amara Kenji geschenkt.']],
      { task: 'Was ist was?', taskEn: 'Match each object to its description.' }),
    gap('w-gap', ['Kenji hat {{sich}} im Krankenhaus gut erholt.', 'Sofia braucht Kenji nicht {{zu}} überreden.', 'Er arbeitet {{nicht nur}} mittags, sondern auch abends.', 'Im Tanzkurs hat er {{weder}} an Bestellungen noch an Rechnungen gedacht.'],
      { bank: ['sich', 'zu', 'nicht nur', 'weder'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
    checklist('w-check', ['Ich kann Hilfe anbieten, annehmen und ablehnen.', 'Ich kann jemanden warnen.', 'Ich kann mit brauchen … zu sagen, was nicht nötig ist.', 'Ich kann über meine Gewohnheiten sprechen (mich/mir).', 'Ich kann Informationen aus einem Zeitungsartikel weitergeben.', 'Ich kann zweiteilige Konnektoren benutzen.', 'Ich kann Lerntipps geben.', 'Ich kenne die Regeln im Krankenhaus.']),
  ]);

export const b1k8: Chapter = {
  id: 'b1-k8', number: 8, title: 'Rund um Körper und Geist', theme: 'Gesundheit, Krankenhaus, Musik, Gedächtnis',
  grammar: 'nicht/kein/nur + brauchen + zu. Reflexivpronomen im Akkusativ und Dativ. Zweiteilige Konnektoren (sowohl … als auch, weder … noch, entweder … oder, nicht nur … sondern auch, zwar … aber).',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['b1k8-sprint', 'b1k8-memory', 'b1k8-satzbau', 'b1k8-artikel'],
  exam: [
    x(1, mcq('x1', 'Du ___ nicht zu kommen, ich schaffe das allein.', ['brauchst', 'musst', 'sollst'], 0)),
    x(1, mcq('x2', 'Ich habe ___ beim Fußball das Knie verletzt.', ['mich', 'mir', 'mein'], 1)),
    x(1, mcq('x3', 'Erinnerst du ___ an unseren Urlaub?', ['dich', 'dir', 'sich'], 0)),
    x(3, gap('x4', ['Sie braucht nur kurz {{anzurufen}}. (anrufen)', 'Ihr braucht keine Angst {{zu haben}}. (haben)', 'Wir brauchen heute nicht {{aufzuräumen}}. (aufräumen)'], { task: 'Ergänze zu + Infinitiv.', taskEn: 'Fill in zu + infinitive.' })),
    x(3, gap('x5', ['Ich spreche sowohl Englisch {{als auch}} Spanisch.', 'Er hat weder Hunger {{noch}} Durst.', 'Das Zimmer ist zwar klein, {{aber}} hell.'], { task: 'Ergänze den Konnektor.', taskEn: 'Fill in the second part of the connector.' })),
    x(1, mcq('x6', 'Warum ruft Elif an?', ['Sie muss den Termin verschieben.', 'Ben hat den Termin vergessen.', 'Die Praxis zieht um.'], 0),
      audio('x-st1', 'Hören: Eine Nachricht auf der Mailbox', [
        ['elif', 'Hallo Ben, hier ist Elif von der Praxis für Physiotherapie in Connewitz. Ich rufe wegen deines Termins am Donnerstag um zehn an. Leider muss ich an dem Tag zu einer Fortbildung.'],
        ['elif', 'Wir können den Termin entweder auf Mittwoch um neun oder auf Freitag um vier verschieben. Du brauchst nicht zurückzurufen, schreib mir einfach eine kurze Nachricht.'],
        ['elif', 'Und noch etwas: Mach bitte jeden Morgen die Übungen für deinen Rücken, sowohl die Dehnübungen als auch die mit dem Ball. Und vergiss nicht, ein Handtuch mitzubringen. Bis bald!'],
      ])),
    x(1, mcq('x7', 'Was soll Ben tun? (Hörtext oben)', ['Elif zurückrufen', 'Elif eine Nachricht schreiben', 'am Donnerstag kommen'], 1)),
    x(1, mcq('x8', 'Wie oft findet der Kurs statt?', ['einmal pro Woche', 'jeden Tag', 'einmal im Monat'], 0),
      text('x-st2', '**Fit im Kopf: Gedächtnistraining für alle**\nSie vergessen oft Namen oder Termine? In unserem Kurs lernen Sie einfache Techniken, mit denen Sie sich Dinge besser merken können. Wir arbeiten sowohl mit Bildern als auch mit Bewegung und Musik.\nWann: dienstags, 10 bis 11.30 Uhr, ab dem 4. Mai\nWo: Stadtteilzentrum Plagwitz, Raum 2\nKosten: 40 Euro für acht Termine\nVorkenntnisse brauchen Sie keine. Sie brauchen nur bequeme Kleidung und etwas zu trinken mitzubringen.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was muss man mitbringen? (Text oben)', ['Vorkenntnisse', 'bequeme Kleidung', 'ein Handtuch'], 1)),
    x(2, order('x10', ['Ich', 'kann', 'weder', 'tanzen', 'noch singen.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' })),
    x(1, mcq('x11', 'Deine Nachbarin trägt zwei schwere Taschen die Treppe hoch. Was sagst du?', ['Vorsicht, die Taschen!', 'Darf ich Ihnen helfen?', 'Sie brauchen nicht zu tragen.'], 1)),
    x(1, mcq('x12', 'Dein Freund will über die nasse Treppe rennen. Was sagst du?', ['Pass auf, die Treppe ist rutschig!', 'Kann ich dir helfen?', 'Du brauchst nur zu rennen.'], 0)),
  ],
};

export const gamesB1k8: GameDef[] = [
  {
    id: 'b1k8-sprint', engine: 'sprint', title: 'Reflexiv-Sprint', blurb: 'mich oder mir? dich oder dir? 60 Sekunden!', skill: 'Reflexivpronomen', tone: 'mint', chapter: 8, emoji: '⚡',
    rules: 'Du siehst einen Satz mit einer Lücke. Tippe auf das richtige Reflexivpronomen.', label: 'Reflexivpronomen',
    items: [
      { q: 'Ich wasche ___ die Hände.', a: 'mir', wrong: ['mich', 'sich'] }, { q: 'Ich wasche ___ jeden Morgen.', a: 'mich', wrong: ['mir', 'sich'] },
      { q: 'Du ziehst ___ die Jacke an.', a: 'dir', wrong: ['dich', 'sich'] }, { q: 'Hast du ___ schon angezogen?', a: 'dich', wrong: ['dir', 'sich'] },
      { q: 'Kenji erholt ___ im Krankenhaus.', a: 'sich', wrong: ['ihn', 'ihm'] }, { q: 'Wir machen ___ Sorgen.', a: 'uns', wrong: ['sich', 'euch'] },
      { q: 'Ich merke ___ die Nummer.', a: 'mir', wrong: ['mich', 'mein'] }, { q: 'Erinnerst du ___ an mich?', a: 'dich', wrong: ['dir', 'du'] },
      { q: 'Stell ___ das mal vor!', a: 'dir', wrong: ['dich', 'sich'] }, { q: 'Ihr putzt ___ die Zähne.', a: 'euch', wrong: ['sich', 'uns'] },
      { q: 'Ich entspanne ___ beim Tanzen.', a: 'mich', wrong: ['mir', 'sich'] }, { q: 'Sofia wünscht ___ einen Tanzpartner.', a: 'sich', wrong: ['ihr', 'sie'] },
    ],
  },
  {
    id: 'b1k8-memory', engine: 'memory', title: 'Reflexiv-Memory', blurb: 'Reflexive Verben und ihre Bedeutung: Finde die Paare.', skill: 'reflexive Verben', tone: 'lilac', chapter: 8, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein deutsches Verb und seine englische Bedeutung.', kinds: ['Deutsch', 'Englisch'],
    pairs: [['sich erholen', 'to recover'], ['sich entspannen', 'to relax'], ['sich erinnern an', 'to remember'], ['sich etwas merken', 'to memorize'], ['sich etwas vorstellen', 'to imagine'], ['sich Sorgen machen', 'to worry'], ['sich kümmern um', 'to take care of'], ['sich verletzen', 'to get hurt'], ['sich freuen', 'to be glad'], ['sich etwas vornehmen', 'to resolve to do']],
  },
  {
    id: 'b1k8-satzbau', engine: 'satzbau', title: 'Konnektor-Baukasten', blurb: 'brauchen … zu und zweiteilige Konnektoren', skill: 'Satzbau', tone: 'sky', chapter: 8, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Achte auf die beiden Teile der Konnektoren.',
    sentences: [
      { parts: ['Du', 'brauchst', 'nicht', 'zu kommen.'], hint: 'nicht brauchen zu = nicht müssen' },
      { parts: ['Ihr', 'braucht', 'nur', 'anzurufen.'], hint: 'trennbares Verb: an-zu-rufen' },
      { parts: ['Kenji', 'arbeitet', 'sowohl mittags', 'als auch abends.'], hint: 'sowohl … als auch' },
      { parts: ['Ich', 'kann', 'weder tanzen', 'noch stillsitzen.'], hint: 'weder … noch' },
      { parts: ['Malte', 'ist', 'zwar jung,', 'aber', 'er kocht gut.'], hint: 'zwar … aber' },
      { parts: ['Sofia', 'tanzt', 'nicht nur Salsa,', 'sondern auch Tango.'], hint: 'nicht nur … sondern auch' },
      { parts: ['Ich', 'putze', 'mir', 'die Zähne.'], hint: 'Dativ: mir + Akkusativobjekt' },
      { parts: ['Heute', 'erholt', 'sich', 'Kenji im Hof.'], hint: 'Reflexivpronomen nach dem Verb' },
    ],
  },
  {
    id: 'b1k8-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Körper, Krankenhaus und Musik.', skill: 'Artikel', tone: 'rose', chapter: 8, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Rettungswagen, die Notaufnahme, das Krankenhaus, die Station, der Kreislauf, das Gedächtnis, die Gewohnheit, der Patient, das Pflaster, die Tablette, der Rollstuhl, das Herz, die Erschöpfung, der Tanzkurs, das Lied, die Leidenschaft, der Blutdruck, das Gehirn, die Besuchszeit, der Souschef'),
  },
];
