import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// B1 Kapitel 2: Das ist ja praktisch! Kaufverhalten, Dienstleistungen, Reklamation, neue Technik, Werbung.
// Grammar: lassen, Folgen mit deshalb/deswegen/darum/daher und sodass / so … dass, Genitiv, wegen und trotz + Genitiv.
// Aussprache: ts und tst. Strategie: Stichpunkte notieren. Story: Season 3, Folge 2 "Das Repair Café".

export const glossaryB1k2: Record<string, GlossaryEntry> = {
  Kombidämpfer: { de: 'Ein großer Ofen für Profiküchen. Er gart mit heißer Luft, mit Dampf oder mit beidem.', en: 'combi steamer oven (professional kitchen appliance)' },
  reklamieren: { de: 'Einer Firma sagen, dass ein Produkt oder eine Arbeit Fehler hat, und eine Lösung verlangen.', en: 'to make a complaint about, to return as faulty', ex: 'Ich möchte den Drucker reklamieren.' },
  Reklamation: { de: 'Eine Beschwerde bei einer Firma, weil ein Produkt oder eine Reparatur nicht in Ordnung ist.', en: 'complaint (about a faulty product or service)' },
  Kaufverhalten: { de: 'Wie, wo und wie oft man einkauft, zum Beispiel online oder im Geschäft.', en: 'shopping habits, buying behavior' },
  Dienstleistung: { de: 'Eine Arbeit, die jemand für Kunden macht, zum Beispiel Haare schneiden, reparieren oder liefern.', en: 'service' },
  Garantie: { de: 'Das Versprechen einer Firma: Wenn etwas in einer bestimmten Zeit kaputtgeht, repariert sie es kostenlos.', en: 'warranty, guarantee' },
  'Smart Home': { de: 'Eine Wohnung, in der Licht, Heizung und Geräte mit dem Internet verbunden sind.', en: 'smart home' },
  Werbestrategie: { de: 'Ein Plan, wie eine Firma mit Werbung Kunden gewinnen will, zum Beispiel mit Gefühlen oder mit Sonderangeboten.', en: 'advertising strategy' },
  'Repair Café': { de: 'Ein Treffen, bei dem Freiwillige kostenlos helfen, kaputte Sachen zu reparieren.', en: 'repair café (volunteer repair meetup)' },
  Kundenservice: { de: 'Die Abteilung einer Firma, die Kunden bei Fragen und Problemen hilft.', en: 'customer service' },
  Privatsphäre: { de: 'Der private Bereich eines Menschen, den andere nicht sehen oder kennen sollen.', en: 'privacy' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Technik im Alltag', 'butter', 8,
  ['das Kapitel kennenlernen', 'Wörter zu Geräten und Dienstleistungen'], [
    overview('e-over', 'Kapitel 2: Das ist ja praktisch!',
      'Herbst in Leipzig. Im Restaurant „Fuchs & Yuzu“ ist der [[Kombidämpfer]] kaputt, und das zwei Wochen nach der Reparatur! Kenji muss beim [[Kundenservice]] anrufen und den Ofen [[reklamieren]]. Zum Glück kennt sich Sofia mit Technik gut aus.\n\nIn Kapitel 2 sprichst du über dein [[Kaufverhalten]] und über [[Dienstleistungen|Dienstleistung]]: Was machst du selbst, und was lässt du machen? Du drückst Folgen aus, schreibst eine [[Reklamation]], liest einen Text über das [[Smart Home]] und vergleichst [[Werbestrategien|Werbestrategie]]. Und am Samstag geht die WG ins [[Repair Café]].',
      'Autumn in Leipzig. The combi steamer oven in Kenji’s restaurant breaks down two weeks after it was repaired, so he has to call customer service and make a complaint. Sofia, who is good with technology, helps him. In this chapter you talk about shopping habits and services, express consequences, make a complaint, read about new technology, give reasons for and against, write a short comment and compare advertising strategies. Grammar: lassen (etwas reparieren lassen), consequences with deshalb, deswegen, darum, daher and sodass, the genitive, and wegen and trotz with the genitive. Pronunciation: ts and tst.',
      ['über Kaufverhalten und Dienstleistungen sprechen', 'Folgen ausdrücken: deshalb, sodass', 'etwas reklamieren', 'Texte über neue Technik verstehen', 'Gründe und Gegengründe nennen', 'einen Kommentar schreiben', 'Werbung vergleichen und bewerten']),
    match('e-match', [
      ['der Staubsauger', 'macht den Boden sauber'], ['die Waschmaschine', 'wäscht die Kleidung'], ['der Drucker', 'bringt Texte auf Papier'],
      ['der Verstärker', 'macht die E-Gitarre laut'], ['der Wasserkocher', 'macht Wasser für Tee heiß'], ['das Ladekabel', 'lädt den Akku vom Handy'],
      ['der Laptop', 'ein kleiner Computer zum Mitnehmen'], ['die Kaffeemaschine', 'kocht morgens den Kaffee'], ['der Kombidämpfer', 'gart in der Profiküche mit Dampf'],
    ], { task: 'Welches Gerät macht was?', taskEn: 'Match each device to what it does.' }),
    sort('e-sort', ['ein Produkt', 'eine Dienstleistung'], [
      ['ein Smartphone', 0], ['ein Haarschnitt', 1], ['eine Waschmaschine', 0], ['eine Reparatur', 1],
      ['ein Staubsauger', 0], ['eine Beratung im Geschäft', 1], ['Kopfhörer', 0], ['eine Lieferung nach Hause', 1],
    ], { task: 'Kauft man ein Produkt oder eine Dienstleistung?', taskEn: 'Is it a product (a thing) or a service (work someone does for you)?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Selbst machen oder machen lassen?', 'mint', 18,
  ['über Kaufverhalten sprechen', 'Dienstleistungen nennen', 'das Verb lassen'], [
    text('t1-text', `**Umfrage: Online oder im Laden?**

**Nele (24):** Ich habe früher fast alles online gekauft, weil es schnell geht. Aber ehrlich gesagt habe ich viel zurückgeschickt. Seit ich weiß, wie viele Pakete das sind, bestelle ich weniger. Bücher kaufe ich jetzt wieder in der kleinen Buchhandlung bei uns um die Ecke. Dort lasse ich mich auch gern beraten.

**Felix (27):** Im Internet kann man super Preise vergleichen, das stimmt. Trotzdem kaufe ich Instrumente nur im Musikgeschäft. Eine Gitarre muss man in der Hand haben! Und wenn an der Gitarre etwas kaputt ist, lasse ich sie dort reparieren. Der Gitarrenbauer kennt mich schon.

**Amara (32):** Ich habe wenig Zeit, deshalb nutze ich viele Dienstleistungen. Die Einkäufe lasse ich mir manchmal liefern, und alle vier Wochen lasse ich mir bei meiner Friseurin die Haare flechten. Das dauert vier Stunden, aber es ist meine Auszeit.

**Sofia (27):** Ich bin neu in Deutschland und war überrascht: Fast alle Geschäfte haben sonntags zu! In São Paulo kann man fast immer einkaufen. Elektronik kaufe ich online, aber ich lese vorher immer viele Bewertungen. Und ich achte auf die Garantie.`,
      { kicker: 'Lesen', title: 'Leipziger Stadtmagazin', task: 'Lies die Umfrage. Wie kaufen die vier ein?', taskEn: 'Read the survey in a Leipzig city magazine. How do the four flatmates shop?', en: 'Nele used to buy almost everything online but now orders less and gets advice in a small bookshop. Felix compares prices online but buys instruments in a music shop and has them repaired there. Amara has little time, so she uses many services: delivery and having her hair braided. Sofia is surprised that shops close on Sundays; she buys electronics online but reads reviews first and checks the warranty.' }),
    mcq('t1-q1', 'Warum bestellt Nele heute weniger online?', ['Die Preise im Internet sind zu hoch.', 'Sie hat viel zurückgeschickt, und die vielen Pakete findet sie nicht gut.', 'Die Buchhandlung ist billiger.'], 1),
    mcq('t1-q2', 'Was macht Felix, wenn seine Gitarre kaputt ist?', ['Er repariert sie selbst.', 'Er kauft eine neue im Internet.', 'Er lässt sie im Musikgeschäft reparieren.'], 2),
    mcq('t1-q3', 'Warum nutzt Amara viele Dienstleistungen?', ['Sie hat wenig Zeit.', 'Sie kann nicht einkaufen.', 'Sie findet Geschäfte langweilig.'], 0),
    mcq('t1-q4', 'Was hat Sofia in Deutschland überrascht?', ['Elektronik ist sehr teuer.', 'Fast alle Geschäfte sind sonntags geschlossen.', 'Es gibt keine Garantie.'], 1),
    audio('t1-audio', 'Hören: Samstagvormittag in der WG', [
      ['sofia', 'Guten Morgen! Felix, wohin gehst du denn mit der Gitarre?'],
      ['felix', 'Ins Musikgeschäft. Eine Saite ist gerissen, und der Hals ist ein bisschen krumm. Das lasse ich lieber reparieren.'],
      ['sofia', 'Kannst du das nicht selbst machen? Im Internet gibt es doch für alles Videos.'],
      ['felix', 'Eine Saite wechseln, ja, das kann ich. Aber den Hals? Nee, das macht lieber der Profi.'],
      ['amara', 'Ich bin auch gleich weg. Ich lasse mir heute die Haare flechten.'],
      ['sofia', 'Schon wieder? Das hast du doch erst vor vier Wochen gemacht.'],
      ['amara', 'Eben! Nach vier Wochen ist es halt wieder so weit. Und bei Joyce kann ich vier Stunden einfach sitzen und quatschen.'],
      ['nele', 'Und ich lasse mein Fahrrad nicht mehr reparieren. Ich mache das jetzt selbst!'],
      ['felix', 'Du? Seit wann denn das?'],
      ['nele', 'Seit Herr Lehmann mir gezeigt hat, wie das geht. Er sagt, nächsten Samstag gibt es im Nachbarschaftstreff wieder ein Repair Café.'],
      ['sofia', 'Ein Repair Café? Perfekt, mein Laptop ist nämlich total langsam. Den nehme ich mit!'],
    ], { task: 'Hör zu. Wer macht was selbst, und wer lässt etwas machen?', taskEn: 'Listen. Who does things themselves, and who has something done?' }),
    mcq('t1-aq1', 'Was lässt Felix reparieren?', ['seinen Verstärker', 'seine Gitarre', 'sein Fahrrad'], 1),
    mcq('t1-aq2', 'Was macht Amara heute?', ['Sie lässt sich die Haare flechten.', 'Sie schneidet sich die Haare selbst.', 'Sie geht ins Repair Café.'], 0),
    mcq('t1-aq3', 'Wer repariert sein Fahrrad jetzt selbst?', ['Sofia', 'Felix', 'Nele'], 2),
    grammar('t1-gram', 'Das Verb lassen', {
      intro: 'Mit **lassen** sagt man: Ich mache etwas **nicht selbst**, eine andere Person macht es für mich. **lassen** steht auf Position 2, der Infinitiv **am Ende**.',
      head: ['Person', 'lassen', '…', 'Infinitiv'],
      rows: [
        ['ich', '**lasse**', 'mein Fahrrad', 'reparieren.'], ['du', '**lässt**', 'dein Handy', 'prüfen.'], ['er/sie/es', '**lässt**', 'die Gitarre', 'reparieren.'],
        ['wir', '**lassen**', 'die Pizza', 'liefern.'], ['ihr', '**lasst**', 'euch im Laden', 'beraten.'], ['sie/Sie', '**lassen**', 'den Ofen', 'reparieren.'],
      ],
      notes: [
        'Etwas am eigenen Körper: **sich** im Dativ. *Amara lässt **sich** die Haare flechten. Ich lasse **mir** die Haare schneiden.*',
        'Ohne Akkusativ-Objekt: **sich** im Akkusativ. *Ich lasse **mich** beraten.*',
        'Perfekt: zwei Infinitive am Ende. *Ich **habe** mein Fahrrad reparieren **lassen**.*',
        '**lassen** allein heißt auch: nicht mitnehmen. *Ich lasse den Schirm zu Hause.*',
      ],
      en: 'lassen + infinitive means you have something done by someone else: Ich lasse mein Fahrrad reparieren (I am having my bike repaired). lassen is in position 2 and the infinitive goes to the end. du and er/sie use lässt. For your own body use a dative reflexive: Ich lasse mir die Haare schneiden. Without another object it is accusative: Ich lasse mich beraten. In the perfect, two infinitives go to the end: Ich habe das Fahrrad reparieren lassen.',
    }),
    gap('t1-gap', [
      'Felix {{lässt}} seine Gitarre im Musikgeschäft reparieren.', 'Ich {{lasse}} die Pizza nach Hause liefern.', 'Amara lässt {{sich}} die Haare flechten.',
      'Wir lassen unseren Drucker {{reparieren}}. (reparieren)', '{{Lasst}} ihr euch im Geschäft beraten?', 'Ich lasse {{mir}} morgen die Haare schneiden.',
    ], { bank: ['lässt', 'lasse', 'sich', 'reparieren', 'Lasst', 'mir'], task: 'Ergänze die Sätze mit lassen.', taskEn: 'Complete the sentences with a form of lassen, the reflexive pronoun or the infinitive.' }),
    match('t1-match', [
      ['die Haare schneiden lassen', 'beim Friseur'], ['das Auto reparieren lassen', 'in der Werkstatt'], ['die Hose kürzen lassen', 'in der Schneiderei'],
      ['die Augen testen lassen', 'beim Optiker'], ['den Mantel reinigen lassen', 'in der Reinigung'], ['ein Passfoto machen lassen', 'im Fotostudio'],
    ], { task: 'Wo lässt man das machen?', taskEn: 'Where do you have this done? Match the service to the place.' }),
    phrases('t1-phr', 'Über Kaufverhalten sprechen', {
      'Wo kaufst du ein?': ['Ich kaufe lieber online, weil es schneller geht.', 'Kleidung kaufe ich nur im Geschäft, weil ich sie anprobieren will.', 'Ich lasse mich gern im Laden beraten.'],
      'Worauf achtest du?': ['Ich vergleiche immer die Preise.', 'Vorher lese ich die Bewertungen.', 'Mir ist die Garantie wichtig.'],
      'Was lässt du machen?': ['Mein Fahrrad lasse ich in der Werkstatt reparieren.', 'Die Einkäufe lasse ich mir liefern.', 'Das mache ich lieber selbst.'],
    }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Schon wieder kaputt!', 'sky', 20,
  ['etwas reklamieren', 'Folgen ausdrücken', 'Genitiv, wegen und trotz'], [
    text('t2-intro', 'Dienstagmorgen im „Fuchs & Yuzu“. Der Kombidämpfer zeigt einen Fehler und wird nicht mehr heiß. Dabei hat die Firma „Gastrotechnik Krüger“ ihn erst vor zwei Wochen repariert. Kenji ist sauer, und heute Abend ist das Restaurant ausgebucht. Sofia sitzt neben ihm und hilft ihm beim Telefonat.',
      { kicker: 'Die Geschichte', en: 'Tuesday morning at Fuchs & Yuzu. The combi steamer shows an error and no longer heats up, although the service company repaired it only two weeks ago. Kenji is angry, and the restaurant is fully booked tonight. Sofia sits next to him and helps with the phone call.' }),
    tip('t2-tip', 'Strategie: Stichpunkte notieren', 'Vor einem wichtigen Telefonat notierst du **Stichpunkte**, keine ganzen Sätze. Zum Beispiel: *Gerät: Kombidämpfer. Problem: wird nicht heiß, Fehler E23. Reparatur: 2. Oktober. Auftragsnummer: 4471. Ziel: Techniker heute, kostenlos.*\n\nBeim Hören machst du es genauso: Notiere nur **Namen, Zahlen, Termine** und **Schlüsselwörter**. So vergisst du nichts Wichtiges.'),
    audio('t2-audio', 'Hören: Die Reklamation', [
      ['ben', 'Gastrotechnik Krüger, Kundenservice, mein Name ist Ben Krüger. Was kann ich für Sie tun?'],
      ['kenji', 'Guten Tag, Tanaka hier, vom Restaurant „Fuchs & Yuzu“ in der Karl-Heine-Straße. Ich möchte etwas reklamieren.'],
      ['ben', 'Worum geht es denn?'],
      ['kenji', 'Um unseren Kombidämpfer. Ihr Techniker hat ihn am 2. Oktober repariert. Und seit gestern wird er wieder nicht heiß. Auf dem Display steht der Fehler E23.'],
      ['ben', 'Oh, das tut mir leid. Haben Sie die Auftragsnummer?'],
      ['kenji', 'Ja, 4471. Wegen des Fehlers können wir nichts backen und nichts dämpfen. Heute Abend ist das Restaurant voll, deshalb brauche ich das Gerät dringend.'],
      ['ben', 'Ich verstehe. Die Reparatur ist erst zwei Wochen alt, darum haben Sie natürlich Garantie. Das kostet Sie nichts.'],
      ['kenji', 'Gut. Und wann kann der Techniker kommen?'],
      ['ben', 'Heute ist es leider schwierig. Morgen früh um acht?'],
      ['kenji', 'Das ist zu spät. Trotz der Garantie verliere ich dann einen ganzen Abend. Geht es nicht heute Nachmittag?'],
      ['ben', 'Einen Moment, ich schaue mal … Ja, Herr Schmitt kann um 15 Uhr kommen und bringt ein neues Ersatzteil mit, sodass Sie heute Abend wieder kochen können.'],
      ['kenji', 'Wunderbar, vielen Dank. Schicken Sie mir bitte eine Bestätigung per E-Mail?'],
      ['ben', 'Mache ich. Auf Wiederhören, Herr Tanaka!'],
      ['sofia', 'Siehst du? Mit Stichpunkten geht das doch ganz leicht!'],
    ], { task: 'Hör das Telefonat. Notiere Stichpunkte: Problem, Datum, Nummer, Termin.', taskEn: 'Listen to the phone call. Take notes in key words: problem, date, number, appointment.' }),
    mcq('t2-q1', 'Was ist das Problem mit dem Kombidämpfer?', ['Er wird nicht heiß.', 'Er ist zu laut.', 'Die Tür geht nicht zu.'], 0),
    mcq('t2-q2', 'Wann wurde das Gerät repariert?', ['vor zwei Tagen', 'am 2. Oktober', 'gestern'], 1),
    mcq('t2-q3', 'Was muss Kenji für die neue Reparatur bezahlen?', ['die Hälfte', 'nur das Ersatzteil', 'nichts'], 2),
    mcq('t2-q4', 'Wann kommt der Techniker?', ['morgen um acht', 'heute um 15 Uhr', 'heute Abend'], 1),
    grammar('t2-gram', 'Folgen ausdrücken: deshalb, deswegen, darum, daher und sodass', {
      intro: 'Eine **Folge** sagt: Was passiert dann? **deshalb, deswegen, darum** und **daher** bedeuten dasselbe. Sie stehen oft auf **Position 1**, das Verb kommt direkt danach auf **Position 2**. Bei **sodass** steht das Verb **am Ende**.',
      head: ['Ursache', 'Verbindung', 'Folge'],
      rows: [
        ['Der Ofen ist kaputt.', '**Deshalb**', '**kann** Kenji nicht backen.'],
        ['Das Restaurant ist voll.', '**Deswegen**', '**braucht** Kenji das Gerät heute.'],
        ['Die Reparatur ist neu.', '**Darum**', '**kostet** sie nichts.'],
        ['Sofia kennt sich mit Technik aus.', '**Daher**', '**hilft** sie Kenji.'],
        ['Der Ofen ist kaputt,', '**sodass**', 'Kenji nicht backen **kann**.'],
        ['Der Laptop ist **so** langsam,', '**dass**', 'Sofia fast verrückt **wird**.'],
      ],
      notes: [
        'deshalb kann auch nach dem Verb stehen: *Kenji **kann deshalb** nicht backen.*',
        'Vor **sodass** steht ein Komma. Man darf auch *so dass* schreiben.',
        '**so** + Adjektiv …, **dass**: **so** verstärkt das Adjektiv. *Es war **so** laut, **dass** ich nichts gehört habe.*',
        'Nicht verwechseln: **weil** nennt den Grund, **deshalb** die Folge. *Kenji ruft an, **weil** der Ofen kaputt ist. Der Ofen ist kaputt, **deshalb** ruft Kenji an.*',
      ],
      en: 'To express a consequence use deshalb, deswegen, darum or daher (all mean "that is why"). They usually take position 1, so the verb follows immediately in position 2. With sodass ("so that, with the result that") the verb goes to the end. so + adjective ..., dass stresses the adjective: so laut, dass ich nichts gehört habe. Remember: weil gives the reason, deshalb the result.',
    }),
    gap('t2-gap', [
      'Mein Handy ist alt. Deshalb {{kaufe}} ich ein neues. (kaufen)',
      'Der Drucker funktioniert nicht, sodass ich nichts drucken {{kann}}. (können)',
      'Es regnet stark. Darum {{bleiben}} wir zu Hause. (bleiben)',
      'Das Paket war so schwer, {{dass}} ich es kaum tragen konnte.',
      'Der Laptop ist sehr langsam, {{sodass|so dass}} Sofia ihn ins Repair Café bringt.',
    ], { task: 'Ergänze das Verb oder das Verbindungswort.', taskEn: 'Fill in the verb in the right form or the connecting word. Watch the verb position.' }),
    order('t2-order', ['Der Techniker', 'kommt', 'heute,', 'sodass', 'Kenji', 'abends', 'kochen', 'kann.'], { task: 'Bau den Satz mit sodass.', taskEn: 'Build the sentence with sodass. The verb goes to the end.', hint: 'sodass: Verb am Ende' }),
    grammar('t2-gen', 'Der Genitiv: des Ofens, der Reparatur', {
      intro: 'Der **Genitiv** zeigt, zu wem oder zu was etwas gehört. Man findet ihn vor allem in geschriebenen Texten: in Briefen, Anleitungen und Zeitungen. Maskulin und neutral: **des** + Nomen mit **-s** oder **-es**. Feminin und Plural: **der**.',
      head: ['', 'Nominativ', 'Genitiv', 'Beispiel'],
      rows: [
        ['maskulin', 'der Ofen', '**des** Ofen**s**', 'die Tür **des Ofens**'],
        ['neutral', 'das Gerät', '**des** Gerät**s** / Gerät**es**', 'der Preis **des Geräts**'],
        ['feminin', 'die Reparatur', '**der** Reparatur', 'die Kosten **der Reparatur**'],
        ['Plural', 'die Geräte', '**der** Geräte', 'die Garantie **der Geräte**'],
        ['unbestimmt', 'ein Ofen / eine Firma', '**eines** Ofens / **einer** Firma', 'der Techniker **einer Firma**'],
      ],
      notes: [
        'Einsilbige Nomen haben oft **-es**: des Tisches, des Mannes. Nomen auf -s, -ß, -x, -z haben immer **-es**: des Preises, des Fußes.',
        'n-Deklination: **des Kunden, des Kollegen, des Herrn**.',
        'Die Frage heißt **wessen**? *Wessen Laptop ist das?*',
        'Im Gespräch sagt man oft **von** + Dativ: *die Tür vom Ofen*.',
      ],
      en: 'The genitive shows possession or belonging and is mostly used in written German. Masculine and neuter: des + noun + -s or -es (des Ofens, des Geräts). Feminine and plural: der (der Reparatur, der Geräte). Indefinite: eines, einer. The question word is wessen (whose). In speech people often use von + dative instead.',
    }),
    grammar('t2-wt', 'wegen und trotz + Genitiv', {
      intro: '**wegen** nennt einen Grund. **trotz** nennt einen Gegengrund: Etwas passiert, obwohl es ein Problem gibt. Beide Präpositionen stehen mit dem **Genitiv**.',
      head: ['Präposition', 'Bedeutung', 'Beispiel'],
      rows: [
        ['**wegen**', 'Grund (wie weil)', '**Wegen des Fehlers** kann Kenji nicht backen.'],
        ['**wegen**', 'Grund', '**Wegen der Reparatur** ist das Restaurant mittags zu.'],
        ['**trotz**', 'Gegengrund (wie obwohl)', '**Trotz der Garantie** verliert Kenji fast einen Abend.'],
        ['**trotz**', 'Gegengrund', '**Trotz des Regens** gehen wir ins Repair Café.'],
      ],
      notes: [
        'Im Gespräch hört man oft den Dativ: *wegen dem Fehler*. In Texten und in der Prüfung schreibst du den Genitiv.',
        'Steht **wegen** oder **trotz** am Satzanfang, kommt das Verb auf Position 2: *Wegen des Fehlers **kann** Kenji nicht backen.*',
      ],
      en: 'wegen (because of) gives a reason, trotz (despite) gives a counter-reason. Both take the genitive: wegen des Fehlers, trotz der Garantie. In casual speech you often hear the dative (wegen dem Fehler), but in writing use the genitive. A wegen or trotz phrase in position 1 is followed by the verb.',
    }),
    gap('t2-gap2', [
      'Die Tür {{des}} Ofens geht nicht mehr richtig zu.',
      'Wegen {{der}} Reparatur ist das Restaurant mittags geschlossen.',
      'Trotz {{des}} Regens fährt Nele mit dem Fahrrad.',
      'Die Preise {{der}} neuen Geräte sind sehr hoch.',
      'Ich rufe wegen {{eines}} Problems mit meinem Drucker an.',
    ], { task: 'Ergänze den Artikel im Genitiv.', taskEn: 'Fill in the article in the genitive (des, der, eines, einer).' }),
    mcq('t2-q5', '___ des Regens gehen wir spazieren. Wir haben ja Regenjacken.', ['Wegen', 'Trotz', 'Deshalb'], 1, { task: 'Grund oder Gegengrund?', taskEn: 'Reason or counter-reason? Choose the right word.', why: 'Es regnet, aber wir gehen trotzdem: ein Gegengrund, also trotz.' }),
    phrases('t2-phr', 'Etwas reklamieren', {
      'Das Problem beschreiben': ['Ich möchte etwas reklamieren.', 'Das Gerät funktioniert nicht mehr.', 'Seit gestern zeigt das Display einen Fehler.', 'Die Reparatur war erst vor zwei Wochen.'],
      'Etwas verlangen': ['Ich hätte gern einen Termin mit einem Techniker.', 'Das ist doch ein Garantiefall, oder?', 'Ich möchte mein Geld zurück.', 'Können Sie mir das bitte schriftlich bestätigen?'],
      'Die Firma antwortet': ['Das tut mir leid.', 'Haben Sie die Auftragsnummer?', 'Wir kümmern uns sofort darum.', 'Sie bekommen natürlich Ersatz.'],
    }),
    compose('t2-comp', 'Schreib eine kurze Reklamation per E-Mail. Dein Drucker ist kaputt.', [
      ['Sag, warum du schreibst.', 'Say why you are writing.', ['Ich schreibe Ihnen,', 'weil', 'ich', 'meinen Drucker', 'reklamieren', 'möchte.']],
      ['Beschreib das Problem und die Folge.', 'Describe the problem and its consequence.', ['Der Drucker', 'druckt', 'nicht mehr,', 'deshalb', 'kann', 'ich', 'nicht arbeiten.']],
      ['Sag, was du möchtest.', 'Say what you would like.', ['Bitte', 'schicken', 'Sie mir', 'ein neues Gerät.']],
    ], { task: 'Bau die E-Mail Satz für Satz.', taskEn: 'Build the complaint email sentence by sentence.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Neue Technik: praktisch oder nicht?', 'lilac', 20,
  ['Informationen über neue Technik verstehen', 'Gründe und Gegengründe nennen', 'einen Kommentar schreiben', 'Prüfungstraining: Lesen Teil 4'], [
    text('t3-text', `**Das Zuhause denkt mit**

Das Licht geht an, wenn man nach Hause kommt. Die Heizung weiß, wann man aufsteht. Und der Kühlschrank meldet, dass fast keine Milch mehr da ist. So sieht ein **Smart Home** aus: Die Geräte in der Wohnung sind mit dem Internet verbunden, sodass man sie mit dem Handy oder mit der Stimme steuern kann.

Für viele Menschen ist das vor allem bequem. Man muss zum Beispiel nicht mehr aufstehen, um das Licht auszumachen. Ein wichtiges Argument ist auch die Energie: Eine smarte Heizung heizt nur, wenn jemand zu Hause ist. Deshalb kann man damit Geld und Energie sparen. Auch für ältere Menschen kann die Technik eine Hilfe sein, zum Beispiel ein Sensor, der meldet, wenn jemand gestürzt ist.

Es gibt aber auch Kritik. Wegen der vielen Daten haben manche Menschen Angst um ihre Privatsphäre: Wer weiß, wann ich schlafe, koche oder dusche? Außerdem sind die Geräte oft teuer, und nicht alle funktionieren zusammen. Ein drittes Problem: Wenn das Internet ausfällt, geht manchmal gar nichts mehr.

Die Verbraucherberaterin Miriam Holz rät: „Überlegen Sie vorher genau, was Sie wirklich brauchen. Lesen Sie die Datenschutzregeln, und ändern Sie immer das Passwort der Geräte.“`,
      { kicker: 'Lesen', title: 'Aus einem Technikmagazin', task: 'Lies den Artikel. Welche Vorteile und Nachteile hat ein Smart Home?', taskEn: 'Read the magazine article. What are the advantages and disadvantages of a smart home?', en: 'In a smart home, devices are connected to the internet and controlled by phone or voice. Advantages: comfort, saving energy and money, help for older people. Disadvantages: data and privacy, high prices, devices that do not work together, and problems when the internet goes down. A consumer advisor recommends thinking about what you really need, reading the privacy rules and changing the device passwords.' }),
    mcq('t3-q1', 'Was ist ein Smart Home?', ['eine Wohnung mit sehr großen Fenstern', 'eine Wohnung, in der die Geräte mit dem Internet verbunden sind', 'ein Haus ohne Strom'], 1),
    mcq('t3-q2', 'Warum kann man mit einer smarten Heizung sparen?', ['Sie heizt nur, wenn jemand zu Hause ist.', 'Sie ist billiger als eine normale Heizung.', 'Sie braucht kein Internet.'], 0),
    mcq('t3-q3', 'Welches Problem nennt der Text NICHT?', ['den Datenschutz', 'die hohen Preise', 'zu laute Geräte'], 2),
    sort('t3-sort', ['dafür (pro)', 'dagegen (contra)'], [
      ['Man spart Energie.', 0], ['Die Geräte sammeln viele Daten.', 1], ['Ältere Menschen bekommen Hilfe.', 0],
      ['Die Technik ist teuer.', 1], ['Man kann alles bequem mit dem Handy steuern.', 0], ['Ohne Internet funktioniert nichts.', 1],
    ], { task: 'Spricht das für oder gegen ein Smart Home?', taskEn: 'Is this an argument for or against a smart home?' }),
    phrases('t3-phr', 'Gründe und Gegengründe nennen', {
      'dafür': ['Dafür spricht, dass …', 'Ein großer Vorteil ist, dass …', 'Ein wichtiges Argument für … ist …'],
      'dagegen': ['Dagegen spricht, dass …', 'Ein Nachteil ist, dass …', 'Ich habe Bedenken, weil …'],
      'abwägen': ['Einerseits ist es praktisch, andererseits ist es teuer.', 'Trotz der Vorteile bin ich skeptisch.', 'Insgesamt finde ich …'],
    }),
    tip('t3-pt-tip', 'Prüfungstraining: Lesen Teil 4', 'In **Lesen Teil 4** liest du kurze Meinungen, zum Beispiel Leserbriefe zu einem Thema. Du entscheidest für jede Person: Ist sie **dafür** (Ja) oder **dagegen** (Nein)?\n\nSo gehst du vor: Lies zuerst die Frage genau. Markiere dann in jedem Text Signalwörter wie *lohnt sich, Vorteil, finde gut* oder *Bedenken, Nachteil, lieber nicht*. Achtung: Viele Leute nennen ein Argument dafür **und** eins dagegen. Wichtig ist, was die Person **am Ende** denkt.'),
    text('t3-pt-text', `**Brauchen wir ein Smart Home?** Leserinnen und Leser antworten.

**1. Jonas, 34, Köln:** Ich habe lange gezögert, weil die Geräte nicht billig sind. Aber seit einem Jahr steuere ich Licht und Heizung per App, und meine Stromrechnung ist deutlich niedriger geworden. Für mich lohnt sich das auf jeden Fall.

**2. Gisela, 68, Erfurt:** Meine Kinder wollten mir unbedingt einen Lautsprecher schenken, der auf meine Stimme hört. Ich weiß, dass er praktisch sein kann. Trotzdem will ich nicht, dass eine Firma in meinem Wohnzimmer mithört. Ich mache das Licht lieber selbst an.

**3. Mehmet, 41, Leipzig:** Meine Mutter lebt allein. Ein Sensor in ihrer Wohnung meldet sich bei mir, wenn etwas nicht stimmt. Wegen dieser Technik kann sie in ihrer Wohnung bleiben. Datenschutz ist wichtig, aber ihre Sicherheit ist wichtiger.

**4. Carla, 25, Dresden:** Klar, es ist cool, wenn der Kühlschrank mitdenkt. Aber letzten Winter ist bei uns zwei Tage lang das Internet ausgefallen, sodass die Heizung nicht mehr reagiert hat. Seitdem finde ich: Ein normaler Schalter reicht völlig.`,
      { kicker: 'Prüfungstraining', title: 'Leserbriefe', task: 'Lies die Meinungen. Ist die Person für ein Smart Home?', taskEn: 'Read the opinions. Is each person in favor of a smart home? Answer Ja (yes) or Nein (no).', en: 'Four readers give their opinion on smart homes: Jonas (saves on electricity), Gisela (does not want a company listening), Mehmet (a sensor helps his mother live alone) and Carla (the heating stopped working when the internet went down).' }),
    mcq('t3-pt1', 'Jonas: Ist er für ein Smart Home?', ['Ja', 'Nein'], 0, { why: 'Er sagt: „Für mich lohnt sich das auf jeden Fall.“' }),
    mcq('t3-pt2', 'Gisela: Ist sie für ein Smart Home?', ['Ja', 'Nein'], 1, { why: 'Sie weiß, dass es praktisch ist, aber sie macht das Licht lieber selbst an.' }),
    mcq('t3-pt3', 'Mehmet: Ist er für ein Smart Home?', ['Ja', 'Nein'], 0, { why: 'Die Sicherheit seiner Mutter ist ihm wichtiger als der Datenschutz.' }),
    mcq('t3-pt4', 'Carla: Ist sie für ein Smart Home?', ['Ja', 'Nein'], 1, { why: 'Am Ende sagt sie: „Ein normaler Schalter reicht völlig.“' }),
    compose('t3-comp', 'Schreib einen kurzen Kommentar zum Thema „Smart Home“.', [
      ['Nenne ein Argument dafür.', 'Give an argument in favor.', ['Dafür', 'spricht,', 'dass', 'man', 'Energie', 'sparen', 'kann.']],
      ['Nenne ein Argument dagegen.', 'Give an argument against.', ['Dagegen', 'spricht,', 'dass', 'die Geräte', 'viele Daten', 'sammeln.']],
      ['Sag deine Meinung mit trotz.', 'Give your opinion using trotz.', ['Trotz', 'der Vorteile', 'finde', 'ich', 'ein Smart Home', 'nicht', 'nötig.']],
    ], { task: 'Bau den Kommentar.', taskEn: 'Build the comment: one argument for, one against, then your opinion.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 2: Das Repair Café', 'rose', 12,
  ['eine Geschichte hören', 'über Reparieren und Wegwerfen sprechen'], [
    text('wg-intro', 'Samstagmittag im Nachbarschaftstreff um die Ecke. Herr Lehmann hat Kaffee gekocht, auf den Tischen liegen Werkzeuge, Kabel und Ersatzteile. Sofia hat ihren Laptop dabei, Felix trägt seinen schweren Verstärker. Nele ist schon seit zehn Uhr da und hilft mit.',
      { kicker: 'Die Geschichte', en: 'Saturday noon at the neighborhood center around the corner. Herr Lehmann has made coffee, and the tables are covered with tools, cables and spare parts. Sofia has brought her laptop, Felix carries his heavy amplifier. Nele has been there since ten, helping out.' }),
    audio('wg-audio', 'Folge 2: Das Repair Café', [
      ['herrLehmann', 'Nu guck mal, die jungen Leute aus dem Fuchsbau! Kommt rein, der Kaffee steht dort hinten.'],
      ['sofia', 'Danke, Herr Lehmann! Machen Sie das hier wirklich jeden Samstag?'],
      ['herrLehmann', 'Jeden Samstag von zehn bis zwei, seit fünf Jahren schon. Ich war ja vierzig Jahre Elektriker. Was habt ihr denn mitgebracht?'],
      ['sofia', 'Meinen Laptop. Er ist so langsam, dass ich fast verrückt werde. Und der Lüfter ist total laut.'],
      ['herrLehmann', 'Lass mal sehen … Ach, da ist ja überall Staub drin. Den machen wir mal richtig sauber, dann läuft er wieder wie neu.'],
      ['felix', 'Und mein Verstärker brummt seit Wochen. Deshalb kann ich mit der Band nicht proben. Ein neuer kostet fast sechshundert Euro.'],
      ['herrLehmann', 'Sechshundert Euro wegen eines Brummens? Nee, nee. Wahrscheinlich ist nur ein Kabel locker. Nele, gib mir mal den Lötkolben.'],
      ['nele', 'Hier, bitte. Herr Lehmann, warum machen Sie das eigentlich? Sie verdienen doch nichts dabei.'],
      ['herrLehmann', 'Weil es mich ärgert! Heute wirft man alles gleich weg. Früher hat man die Sachen repariert oder reparieren lassen.'],
      ['felix', 'Hören Sie mal: Er brummt nicht mehr! Sie sind ein Held, Herr Lehmann!'],
      ['herrLehmann', 'Gern geschehen. Genießt mal die Zeit im Fuchsbau, ja?'],
      ['sofia', 'Wie meinen Sie das?'],
      ['herrLehmann', 'Ach, nur ein Gerücht. Man hört, dass der Eigentümer das Haus verkaufen will. Aber vielleicht ist das ja Unsinn.'],
    ], { task: 'Hör die Geschichte. Was wird repariert, und was erzählt Herr Lehmann am Ende?', taskEn: 'Listen to the story. What gets repaired, and what does Herr Lehmann mention at the end? Brummen = humming, buzzing. Lötkolben = soldering iron.' }),
    mcq('wg-q1', 'Seit wann gibt es das Repair Café?', ['seit fünf Jahren', 'seit einem Jahr', 'seit diesem Samstag'], 0),
    mcq('wg-q2', 'Was ist mit Sofias Laptop los?', ['Er ist langsam und laut, weil Staub drin ist.', 'Der Bildschirm ist kaputt.', 'Das Ladekabel fehlt.'], 0),
    mcq('wg-q3', 'Warum kann Felix nicht proben?', ['Er hat keine Zeit.', 'Sein Verstärker brummt.', 'Seine Gitarre ist kaputt.'], 1),
    mcq('wg-q4', 'Warum macht Herr Lehmann das Repair Café?', ['Er verdient gut dabei.', 'Es ärgert ihn, dass man so viel wegwirft.', 'Er möchte Elektriker werden.'], 1),
    mcq('wg-q5', 'Was für ein Gerücht hat Herr Lehmann gehört?', ['Der Eigentümer will das Haus verkaufen.', 'Das Repair Café muss schließen.', 'Kenji will sein Restaurant verkaufen.'], 0),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['lassen', 'Folgen: deshalb, sodass', 'Genitiv, wegen, trotz'], [
    grammar('g-1', 'Grund, Folge und Gegengrund im Satz', {
      head: ['', 'Position 1', 'Position 2', '…', 'Ende'],
      rows: [
        ['weil (Grund)', '…, weil', 'der Ofen', 'kaputt', '**ist**.'],
        ['deshalb (Folge)', 'Deshalb', '**kann**', 'Kenji nicht', 'backen.'],
        ['sodass (Folge)', '…, sodass', 'Kenji', 'nicht backen', '**kann**.'],
        ['wegen (Grund)', 'Wegen des Fehlers', '**kann**', 'Kenji nicht', 'backen.'],
        ['trotz (Gegengrund)', 'Trotz der Garantie', '**verliert**', 'Kenji', 'einen Abend.'],
        ['lassen', 'Kenji', '**lässt**', 'den Ofen', 'reparieren.'],
      ],
      notes: ['**deshalb, deswegen, darum, daher** auf Position 1: Das Verb kommt sofort danach.', '**weil** und **sodass** leiten einen Nebensatz ein: Das Verb steht am Ende.', '**wegen** und **trotz** + Genitiv: *wegen des Fehlers, trotz der Garantie*.'],
      en: 'Overview: deshalb (and its synonyms) and wegen/trotz phrases in position 1 are followed directly by the verb. weil and sodass start subordinate clauses with the verb at the end. lassen works like a modal verb: lassen in position 2, the infinitive at the end.',
    }),
    mcq('g-q1', 'Welcher Satz ist richtig?', ['Der Akku ist leer, deshalb ich kann nicht telefonieren.', 'Der Akku ist leer, deshalb kann ich nicht telefonieren.', 'Der Akku ist leer, sodass kann ich nicht telefonieren.'], 1),
    mcq('g-q2', 'Ich lasse ___ die Haare schneiden.', ['mich', 'mir', 'mein'], 1, { why: 'Die Haare sind das Akkusativ-Objekt, deshalb steht sich im Dativ: mir.' }),
    mcq('g-q3', 'Das ist der Laptop ___ Kollegin.', ['der', 'des', 'dem'], 0),
    mcq('g-q4', '___ des Fehlers ruft Kenji beim Kundenservice an.', ['Trotz', 'Wegen', 'Deshalb'], 1),
    mcq('g-q5', 'Die Farbe ___ gefällt mir.', ['des Autos', 'der Auto', 'des Auto'], 0),
    mcq('g-q6', 'Felix ___ seinen Verstärker reparieren.', ['lasst', 'lässt', 'lassen'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Werbung und Aussprache', 'butter', 18,
  ['Werbestrategien vergleichen', 'die eigene Meinung zu Werbung sagen', 'Aussprache: ts und tst'], [
    text('u-text', `**Werbung in Deutschland**

Werbung ist überall: im Fernsehen, im Radio, auf Plakaten, im Briefkasten und vor allem im Internet. Viele Menschen in Deutschland finden zu viel Werbung nervig. Deshalb kleben sie einen Aufkleber mit „Bitte keine Werbung“ auf den Briefkasten. Dann dürfen Firmen dort keine Prospekte mehr einwerfen.

Im Fernsehen gibt es klare Regeln. Bei ARD und ZDF, den öffentlich-rechtlichen Sendern, gibt es nur werktags vor 20 Uhr Werbung. Nach 20 Uhr und an Sonn- und Feiertagen gibt es dort keine Werbespots. Private Sender zeigen dagegen viel mehr Werbung.

Im Internet machen heute oft Influencerinnen und Influencer Werbung. Sie müssen ihre Beiträge aber als „Werbung“ oder „Anzeige“ markieren, sodass alle wissen: Hier will jemand etwas verkaufen.

Manche Werbesprüche kennt in Deutschland fast jeder, auch nach vielen Jahrzehnten. Ein guter Slogan ist kurz, man kann ihn sich leicht merken, und er gibt einem ein gutes Gefühl.`,
      { kicker: 'Landeskunde', title: 'Werbung in Deutschland', task: 'Lies den Text über Werbung in Deutschland.', taskEn: 'Read the text about advertising in Germany.', en: 'Many people in Germany find advertising annoying and put a "no advertising" sticker on their mailbox. The public broadcasters ARD and ZDF only show ads on weekdays before 8 p.m. and never on Sundays or public holidays. Influencers must label sponsored posts as "Werbung" or "Anzeige". A good slogan is short, easy to remember and makes you feel good.' }),
    mcq('u-q1', 'Was bedeutet der Aufkleber „Bitte keine Werbung“?', ['Man möchte keine Prospekte im Briefkasten.', 'Man möchte keine Briefe bekommen.', 'Man möchte keine Pakete bekommen.'], 0),
    mcq('u-q2', 'Wann gibt es bei ARD und ZDF keine Werbung?', ['werktags vor 20 Uhr', 'nach 20 Uhr und an Sonn- und Feiertagen', 'nur im Sommer'], 1),
    text('u-ad', `**Sofias Entwürfe für Instagram**

Mittags hat Kenji zu wenig Gäste. Deshalb gestaltet Sofia eine Anzeige für „Fuchs & Yuzu“. Sie hat drei Ideen:

**A:** Ein Foto von dampfender Ramen-Suppe im Herbstlicht. Slogan: „Fuchs & Yuzu: Wärme für die Seele.“

**B:** Kenji lacht in seiner Küche. Text: „Frisch, regional, japanisch. Seit einem Jahr in Plagwitz. Unser Koch kocht mit Gemüse von Bauernhöfen aus der Region.“

**C:** Ein Foto mit fröhlichen Gästen. Text: „Nur diese Woche: Mittagsmenü für 12,90 €. Zeig diesen Post und bekomm einen Yuzu-Tee gratis!“

Kenji findet A schön, aber ein bisschen kitschig. Sofia meint: „Am besten kombinieren wir B und C. Die Leute wollen wissen, wer kocht, und sie lieben Sonderangebote.“`,
      { kicker: 'Die Geschichte', title: 'Eine Anzeige für Fuchs & Yuzu', task: 'Lies Sofias Ideen. Welche Werbestrategie benutzt sie?', taskEn: 'Read Sofia’s three ideas for an Instagram ad. Which advertising strategy does each one use?', en: 'Kenji has too few guests at lunchtime, so Sofia designs an Instagram ad. Idea A uses emotion (warm soup, "warmth for the soul"), B uses information and trust (fresh, regional, the chef himself), C uses a special offer (a cheap lunch menu and a free tea). Sofia suggests combining B and C.' }),
    mcq('u-q3', 'Welche Anzeige möchte Sofia nehmen?', ['nur Anzeige A', 'eine Kombination aus B und C', 'keine von den dreien'], 1),
    sort('u-sort', ['Gefühle', 'Information', 'Sonderangebot'], [
      ['Wärme für die Seele.', 0], ['Mit Gemüse von Bauernhöfen aus der Region.', 1], ['Nur diese Woche: 12,90 €!', 2],
      ['Ein Lächeln in jeder Schüssel.', 0], ['Täglich frisch gekocht, ohne Zusatzstoffe.', 1], ['Zwei Menüs, ein Preis!', 2],
    ], { task: 'Welche Strategie benutzt der Werbespruch?', taskEn: 'Which strategy does each slogan use: emotions, information or a special offer?' }),
    phrases('u-phr', 'Die eigene Meinung zu Werbung sagen', {
      'positiv': ['Die Werbung finde ich witzig und kreativ.', 'Der Slogan bleibt im Kopf.', 'Das Foto macht Lust auf Suppe.'],
      'negativ': ['Die Anzeige ist mir zu kitschig.', 'Das finde ich übertrieben.', 'Werbung nervt mich, deshalb klicke ich sie weg.'],
      'vergleichen': ['Anzeige A ist emotionaler als B.', 'Im Vergleich zu A ist B informativer.', 'Am besten gefällt mir C, weil …'],
    }),
    audio('u-aus', 'Aussprache: ts und tst', [
      ['frauKlein', 'Heute üben wir ts und tst. Das deutsche z klingt immer wie ts: Zeit, Zug, zehn, Platz.'],
      ['frauKlein', 'Auch ts, tz und ds klingen so: nichts, rechts, nachts, Katze, abends.'],
      ['frauKlein', 'Schwieriger ist tst, mit einem t am Ende: jetzt, Arzt, zuletzt, du sitzt, du putzt.'],
      ['frauKlein', 'Hörst du den Unterschied? Das Netz, aber: du setzt. Der Platz, aber: es platzt.'],
      ['frauKlein', 'Und jetzt ein Zungenbrecher: Zehn zahme Ziegen ziehen zehn Zentner Zucker zum Zoo. Und noch einer: Jetzt sitzt du zuletzt beim Arzt.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. German z always sounds like ts. Practice the cluster tst at the end of words like jetzt and du sitzt.' }),
    sort('u-sort2', ['ts (wie in „nichts“)', 'tst (wie in „jetzt“)'], [
      ['rechts', 0], ['du sitzt', 1], ['der Platz', 0], ['der Arzt', 1], ['nachts', 0], ['zuletzt', 1], ['die Zeit', 0], ['du putzt', 1],
    ], { task: 'ts oder tst? Sprich die Wörter laut.', taskEn: 'Say each word aloud. Does it end in ts or in tst?' }),
    order('u-order', ['Wegen', 'des Regens', 'bleibt', 'Felix', 'heute', 'zu Hause.'], { task: 'Bau den Satz mit wegen.', taskEn: 'Build the sentence with wegen. The verb comes in position 2.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['die Reklamation', 'eine Beschwerde über ein Produkt', 'complaint'], ['reklamieren', 'sagen, dass etwas kaputt ist, und eine Lösung wollen', 'to complain about'],
      ['die Garantie', 'die Firma repariert kostenlos', 'warranty'], ['der Kundenservice', 'hilft Kunden bei Problemen', 'customer service'],
      ['das Ersatzteil', 'ein neues Teil für ein Gerät', 'spare part'], ['das Gerät', 'eine Maschine, zum Beispiel im Haushalt', 'device, appliance'],
      ['der Akku', 'die Batterie im Handy oder Laptop', 'rechargeable battery'], ['die Dienstleistung', 'eine Arbeit für Kunden', 'service'],
      ['liefern', 'etwas nach Hause bringen', 'to deliver'], ['die Werbung', 'sie will, dass man etwas kauft', 'advertising'],
      ['der Slogan', 'ein kurzer Werbespruch', 'slogan'], ['die Anzeige', 'Werbung in der Zeitung oder im Internet', 'ad'],
    ]),
    match('w-x-match', [
      ['den Akku', 'aufladen'], ['Preise', 'vergleichen'], ['einen Termin', 'vereinbaren'],
      ['Bewertungen', 'lesen'], ['ein Ersatzteil', 'einbauen'], ['die Pizza', 'liefern lassen'],
    ], { task: 'Was passt zusammen?', taskEn: 'Match the noun to the verb it goes with.' }),
    gap('w-x-gap', [
      'Mein Laptop ist kaputt. {{Deshalb}} bringe ich ihn ins Repair Café.',
      'Ich lasse {{mir}} die Haare schneiden.',
      'Wegen {{des}} Streiks kommt das Paket später.',
      'Trotz {{der}} Garantie musste ich lange warten.',
    ], { bank: ['Deshalb', 'mir', 'des', 'der'], task: 'Ergänze.', taskEn: 'Fill in the gaps with the words from the bank.' }),
    mcq('w-x-q1', 'Dein neuer Drucker funktioniert nicht. Was sagst du im Geschäft?', ['Ich möchte den Drucker reklamieren.', 'Ich möchte den Drucker reservieren.', 'Ich möchte den Drucker vergleichen.'], 0, { task: 'Was sagst du?', taskEn: 'What do you say in the shop?' }),
    order('w-x-order', ['Ich', 'lasse', 'meinen Laptop', 'im Repair Café', 'reparieren.'], { task: 'Bau den Satz mit lassen.', taskEn: 'Build the sentence with lassen.' }),
    checklist('w-check', [
      'Ich kann über mein Kaufverhalten und über Dienstleistungen sprechen.',
      'Ich kann mit lassen sagen, was ich machen lasse.',
      'Ich kann Folgen mit deshalb und sodass ausdrücken.',
      'Ich kann am Telefon oder per E-Mail etwas reklamieren.',
      'Ich kann einen Text über neue Technik verstehen und Gründe dafür und dagegen nennen.',
      'Ich kann den Genitiv und wegen und trotz benutzen.',
      'Ich kann Werbung vergleichen und meine Meinung dazu sagen.',
    ]),
  ]);

export const b1k2: Chapter = {
  id: 'b1-k2', number: 2, title: 'Das ist ja praktisch!', theme: 'Kaufverhalten, Dienstleistungen, Reklamation, neue Technik, Werbung',
  grammar: 'Verb lassen. Folgen mit deshalb, deswegen, darum, daher und sodass. Genitiv. wegen und trotz + Genitiv.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['b1k2-sprint', 'b1k2-memory', 'b1k2-satzbau', 'b1k2-artikel'],
  exam: [
    x(1, mcq('x1', 'Kenji ___ den Ofen reparieren.', ['lässt', 'lasst', 'lassen'], 0)),
    x(1, mcq('x2', 'Welcher Satz ist richtig?', ['Es regnet, deshalb wir bleiben zu Hause.', 'Es regnet, deshalb bleiben wir zu Hause.', 'Es regnet, sodass bleiben wir zu Hause.'], 1)),
    x(1, mcq('x3', 'Wegen ___ Fehlers funktioniert das Gerät nicht.', ['der', 'des', 'dem'], 1)),
    x(3, gap('x4', ['Der Akku war leer, sodass ich nicht anrufen {{konnte}}. (können)', 'Ich lasse {{mir}} die Haare flechten.', 'Trotz {{des}} Regens gehen wir ins Repair Café.'], { task: 'Ergänze.', taskEn: 'Fill in the gaps.' })),
    x(3, gap('x5', ['Die Tür {{des}} Ofens ist kaputt.', 'Die Kosten {{der}} Reparatur sind hoch.', 'Der Preis {{des}} Laptops ist gut.'], { task: 'Ergänze den Artikel im Genitiv.', taskEn: 'Fill in the article in the genitive.' })),
    x(1, mcq('x6', 'Wie lange hat man Garantie auf eine Reparatur?', ['sechs Monate', 'zwölf Monate', 'zwei Jahre'], 1),
      audio('x-st1', 'Hören: Werbung im Radio', [
        ['moderatorin', 'Ihr Handy ist kaputt? Der Akku hält keinen Tag mehr? Dann kommen Sie zu „Handy-Hilfe Lindenau“ in der Merseburger Straße 12!'],
        ['moderatorin', 'Wir reparieren Smartphones, Tablets und Laptops, meistens noch am selben Tag. Ein neuer Akku kostet bei uns ab 49 Euro, ein neues Display ab 89 Euro.'],
        ['moderatorin', 'Und das Beste: Auf jede Reparatur bekommen Sie zwölf Monate Garantie. Und nur diese Woche ist der Kostenvoranschlag gratis.'],
        ['moderatorin', 'Handy-Hilfe Lindenau: Montag bis Samstag von 9 bis 19 Uhr. Bei uns lassen Sie Ihr Handy reparieren, nicht wegwerfen!'],
      ])),
    x(1, mcq('x7', 'Was ist diese Woche gratis? (Hörtext oben)', ['der neue Akku', 'der Kostenvoranschlag', 'das neue Display'], 1)),
    x(1, mcq('x8', 'Wie findet Tanja Werbung im Internet insgesamt?', ['Sie akzeptiert sie, weil viele Seiten dadurch kostenlos sind.', 'Sie lehnt jede Werbung ab.', 'Sie findet Videos mit Ton super.'], 0),
      text('x-st2', '**Kommentar von Tanja, 29:** Ich ärgere mich jeden Tag über Werbung im Internet. Trotzdem muss ich ehrlich sagen: Ohne Werbung kann man viele Webseiten nicht kostenlos lesen. Deshalb akzeptiere ich sie, solange sie nicht zu viel stört. Videos, die automatisch mit Ton starten, finde ich aber schrecklich.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was findet Tanja schrecklich? (Text oben)', ['Werbeplakate in der Stadt', 'Videos, die automatisch mit Ton starten', 'kostenlose Webseiten'], 1)),
    x(2, order('x10', ['Der Ofen', 'war', 'kaputt,', 'sodass', 'Kenji', 'nicht', 'backen', 'konnte.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' })),
    x(1, mcq('x11', 'Dein neues Gerät funktioniert nicht. Was sagst du beim Kundenservice?', ['Ich möchte etwas reklamieren: Das Gerät funktioniert nicht.', 'Ich möchte das Gerät gern noch einmal kaufen.', 'Das Gerät gefällt mir sehr gut.'], 0)),
    x(1, mcq('x12', '___ der Garantie musste Kenji lange warten.', ['Wegen', 'Trotz', 'Deshalb'], 1)),
  ],
};

export const gamesB1k2: GameDef[] = [
  {
    id: 'b1k2-sprint', engine: 'sprint', title: 'Folgen-Sprint', blurb: 'deshalb, sodass, wegen oder trotz? 60 Sekunden!', skill: 'Folgen und Gründe', tone: 'mint', chapter: 2, emoji: '⚡',
    rules: 'Du siehst einen Satz mit einer Lücke. Tippe auf das Wort, das passt.', label: 'Welches Wort passt?',
    items: [
      { q: 'Der Ofen ist kaputt, ___ kann Kenji nicht backen.', a: 'deshalb', wrong: ['sodass', 'trotz'] },
      { q: 'Es ist kalt, ___ ich eine Jacke anziehe.', a: 'sodass', wrong: ['deshalb', 'wegen'] },
      { q: '___ des Regens bleiben wir zu Hause.', a: 'Wegen', wrong: ['Trotz', 'Darum'] },
      { q: '___ des Regens gehen wir joggen.', a: 'Trotz', wrong: ['Wegen', 'Daher'] },
      { q: 'Ich habe keine Zeit. ___ komme ich nicht.', a: 'Darum', wrong: ['Sodass', 'Trotz'] },
      { q: 'Der Akku ist leer, ___ das Handy ausgeht.', a: 'sodass', wrong: ['deswegen', 'wegen'] },
      { q: 'Er war so müde, ___ er sofort eingeschlafen ist.', a: 'dass', wrong: ['deshalb', 'trotz'] },
      { q: '___ der Garantie zahlt Kenji nichts.', a: 'Wegen', wrong: ['Trotz', 'Deshalb'] },
      { q: '___ der Garantie wartet Kenji lange.', a: 'Trotz', wrong: ['Wegen', 'Daher'] },
      { q: 'Sofia mag Technik. ___ hilft sie Kenji.', a: 'Deswegen', wrong: ['Sodass', 'Trotz'] },
      { q: 'Es regnet. Nele fährt ___ mit dem Bus.', a: 'deshalb', wrong: ['sodass', 'wegen'] },
      { q: 'Die Musik ist so laut, ___ ich nichts höre.', a: 'dass', wrong: ['darum', 'trotz'] },
    ],
  },
  {
    id: 'b1k2-memory', engine: 'memory', title: 'Geräte-Memory', blurb: 'Gerät und englisches Wort: Finde die Paare.', skill: 'Technik und Geräte', tone: 'lilac', chapter: 2, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein deutsches Gerät und das englische Wort.', kinds: ['Deutsch', 'Englisch'],
    pairs: [
      ['der Staubsauger', 'vacuum cleaner'], ['die Waschmaschine', 'washing machine'], ['der Drucker', 'printer'], ['der Verstärker', 'amplifier'],
      ['das Ladekabel', 'charging cable'], ['der Akku', 'rechargeable battery'], ['der Bildschirm', 'screen'], ['die Fernbedienung', 'remote control'],
      ['der Kopfhörer', 'headphones'], ['der Wasserkocher', 'kettle'],
    ],
  },
  {
    id: 'b1k2-satzbau', engine: 'satzbau', title: 'Folgen-Baukasten', blurb: 'deshalb: Verb auf 2. sodass: Verb ans Ende.', skill: 'Satzbau mit Folgen', tone: 'sky', chapter: 2, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Achte auf die Position des Verbs.',
    sentences: [
      { parts: ['Der Ofen ist kaputt,', 'deshalb', 'ruft', 'Kenji', 'an.'], hint: 'deshalb: Verb direkt danach' },
      { parts: ['Der Akku ist leer,', 'sodass', 'ich', 'nicht', 'telefonieren', 'kann.'], hint: 'sodass: Verb am Ende' },
      { parts: ['Felix', 'lässt', 'seinen Verstärker', 'reparieren.'], hint: 'lassen auf 2, Infinitiv am Ende' },
      { parts: ['Amara', 'lässt', 'sich', 'die Haare', 'flechten.'], hint: 'sich lassen' },
      { parts: ['Wegen', 'des Fehlers', 'kann', 'Kenji', 'nicht', 'backen.'], hint: 'wegen + Genitiv, Verb auf 2' },
      { parts: ['Trotz', 'der Garantie', 'wartet', 'er', 'lange.'], hint: 'trotz + Genitiv' },
      { parts: ['Der Laptop', 'ist', 'so', 'langsam,', 'dass', 'Sofia', 'verrückt', 'wird.'], hint: 'so … dass' },
      { parts: ['Die Tür', 'des Ofens', 'geht', 'nicht', 'zu.'], hint: 'Genitiv: des Ofens' },
    ],
  },
  {
    id: 'b1k2-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Technik, Reklamation und Werbung.', skill: 'Artikel', tone: 'rose', chapter: 2, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Ofen, das Gerät, die Reparatur, der Akku, das Ladekabel, die Garantie, der Drucker, das Ersatzteil, die Reklamation, der Kundenservice, das Display, die Werbung, der Slogan, das Plakat, die Anzeige, der Verstärker, das Werkzeug, die Dienstleistung'),
  },
];
