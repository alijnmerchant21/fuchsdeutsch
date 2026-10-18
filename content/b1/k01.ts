import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// B1 Kapitel 1: Gute Reise! Vorlieben und Abneigungen, Reiseplanung, Blogeintrag, Durchsagen, Urlaubsgeschichte.
// Grammar: Infinitiv mit zu, Nebensatz mit da/weil, Nebensatz mit obwohl. Aussprache: n, ng, nk.

export const glossaryB1k1: Record<string, GlossaryEntry> = {
  Vorliebe: { de: 'Etwas, das man besonders gern mag oder macht.', en: 'preference, liking', ex: 'Sofia hat eine Vorliebe für Strände.' },
  Abneigung: { de: 'Das Gefühl, dass man etwas gar nicht mag.', en: 'dislike', ex: 'Felix hat eine Abneigung gegen frühes Aufstehen.' },
  Blogeintrag: { de: 'Ein Text, den jemand in seinem Blog im Internet veröffentlicht.', en: 'blog post' },
  Alm: { de: 'Eine Wiese hoch in den Bergen. Im Sommer leben dort Kühe und Menschen, die sich um sie kümmern.', en: 'mountain pasture (in the Alps)' },
  Durchsage: { de: 'Eine Information, die man über Lautsprecher hört, zum Beispiel am Bahnhof.', en: 'announcement (over a loudspeaker)' },
  Anschluss: { de: 'Der nächste Zug oder Bus, in den man beim Umsteigen einsteigt.', en: 'connection (train, bus)' },
  Verspätung: { de: 'Ein Zug oder Bus kommt später als geplant.', en: 'delay' },
  Gleiswechsel: { de: 'Der Zug fährt von einem anderen Gleis ab als geplant.', en: 'platform change' },
  Ersatzverkehr: { de: 'Busse, die fahren, wenn keine Züge fahren können, zum Beispiel wegen Bauarbeiten.', en: 'replacement service (usually buses)' },
  Matratzenlager: { de: 'Ein großer Raum in einer Hütte, in dem viele Leute nebeneinander auf Matratzen schlafen.', en: 'dormitory with mattresses (in a mountain hut)' },
  Hüttenwirtin: { de: 'Eine Frau, die eine Hütte in den Bergen führt und für die Gäste kocht.', en: 'hut keeper, innkeeper of a mountain hut' },
  Senner: { de: 'Ein Mann, der im Sommer auf der Alm arbeitet, die Kühe melkt und Käse macht.', en: 'Alpine dairy farmer, herdsman' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Neu im Fuchsbau', 'butter', 8,
  ['das Kapitel kennenlernen', 'Urlaubsarten benennen'], [
    overview('e-over', 'Kapitel 1: Gute Reise!',
      'Ein Jahr ist vergangen. Kenjis Restaurant „Fuchs & Yuzu“ im Erdgeschoss läuft gut und ist fast jeden Abend voll. Kenji wohnt jetzt in der kleinen Wohnung hinter dem Restaurant, aber zum Frühstück kommt er oft noch nach oben. In sein altes Zimmer zieht **Sofia** ein: 27 Jahre alt, UX-Designerin aus São Paulo, neu in Deutschland und voller Ideen. Sie liebt Pflanzen, Tanzen und das Meer.\n\nIn Kapitel 1 sprichst du über deine [[Vorliebe|Vorlieben]] und [[Abneigung|Abneigungen]] beim Reisen, planst mit der WG ein Wochenende im Schwarzwald und nennst Gründe mit **da** und **weil** und Gegengründe mit **obwohl**. Du liest einen [[Blogeintrag]] über einen Sommer auf der [[Alm]] und trainierst, [[Durchsage|Durchsagen]] am Bahnhof zu verstehen. Das ist auch nötig, denn auf der Reise geht einiges schief …',
      'Welcome to B1 and to Season 3 of the Fuchsbau flat share. One year has passed. Kenji’s restaurant "Fuchs & Yuzu" opened on the ground floor, and he now lives in the small flat behind it. His old room goes to Sofia, a 27-year-old UX designer from São Paulo who is new to Germany. In this chapter you talk about travel likes and dislikes, plan a weekend trip, read a travel blog and practice understanding announcements at the train station. Grammar: the infinitive with zu (Ich habe Lust, zu reisen) and subordinate clauses with da, weil (because) and obwohl (although), where the verb goes to the end.',
      ['über Vorlieben und Abneigungen sprechen', 'eine Reise planen', 'Gründe und Gegengründe nennen: da, weil, obwohl', 'einen Blogeintrag verstehen', 'Durchsagen am Bahnhof verstehen', 'eine Urlaubsgeschichte schreiben']),
    match('e-match', [['der Strandurlaub', 'Sonne, Sand und Meer'], ['der Wanderurlaub', 'jeden Tag zu Fuß in den Bergen'], ['die Städtereise', 'Museen, Cafés und Sehenswürdigkeiten'], ['der Campingurlaub', 'im Zelt schlafen'], ['die Radtour', 'mit dem Fahrrad von Ort zu Ort'], ['die Kreuzfahrt', 'eine Reise mit einem großen Schiff'], ['der Wellnessurlaub', 'Sauna, Massage und viel Ruhe']],
      { task: 'Welche Urlaubsart passt?', taskEn: 'Match each type of vacation to its description.' }),
    sort('e-sort', ['am Meer', 'in den Bergen'], [['Muscheln sammeln', 0], ['auf einen Gipfel steigen', 1], ['surfen', 0], ['mit der Seilbahn fahren', 1], ['in der Sonne am Strand liegen', 0], ['auf einer Hütte übernachten', 1]],
      { task: 'Was macht man wo?', taskEn: 'What do you do where: by the sea or in the mountains?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Strand oder Berge?', 'mint', 15,
  ['über Vorlieben und Abneigungen sprechen', 'Infinitiv mit zu'], [
    text('t1-text', `**WG-Chat „Fuchsbau“**

**Nele:** Leute, wir müssen Sofia richtig willkommen heißen! Ich habe Lust, im September einen WG-Ausflug zu machen. Wohin fahren wir? Schreibt mal, was ihr mögt und was gar nicht.

**Sofia:** Oh, wie schön! Also, ich bin ein Strandmensch. Für mich gibt es nichts Besseres, als morgens im Meer zu schwimmen. In São Paulo sind wir am Wochenende oft an die Küste gefahren. Aber ehrlich gesagt finde ich es auch spannend, etwas Neues kennenzulernen. Ich war noch nie in den deutschen Bergen!

**Nele:** Perfekt! Ich bin nämlich ein Bergmensch. Es macht mir einfach Spaß, stundenlang zu wandern und oben auf dem Gipfel ein Käsebrot zu essen. Strand finde ich nach zwei Tagen langweilig.

**Felix:** Ich fahre gern mit, aber bitte nicht so viel planen! Ich habe keine Lust, drei Wochen lang Hotels zu vergleichen. Und ich hasse es, um sechs Uhr aufzustehen, nur weil man einen günstigen Zug erwischen will. Ich mag spontane Reisen.

**Amara:** Ich habe vor, mir das letzte Septemberwochenende freizunehmen. Hauptsache, wir haben Zeit, zusammen zu kochen und zu reden.

**Kenji:** Ich kann leider nicht mitkommen, das Restaurant … Aber ich verspreche, euch ein Lunchpaket für die Fahrt zu machen!`,
      { kicker: 'Lesen', title: 'Wohin fahren wir?', task: 'Lies den Chat. Wer mag was?', taskEn: 'Read the group chat. Who likes what?', en: 'The flat share’s group chat. Nele wants a trip to welcome Sofia. Strandmensch = beach person, Bergmensch = mountain person, erwischen = to catch (a train), sich freinehmen = to take time off.' }),
    mcq('t1-q1', 'Was macht Sofia besonders gern?', ['in den Bergen wandern', 'morgens im Meer schwimmen', 'Hotels vergleichen'], 1),
    mcq('t1-q2', 'Was mag Felix nicht?', ['spontan reisen', 'früh aufstehen und lange planen', 'zusammen kochen'], 1),
    mcq('t1-q3', 'Warum kommt Kenji nicht mit?', ['Er mag keine Berge.', 'Er muss im Restaurant arbeiten.', 'Er ist krank.'], 1),
    grammar('t1-gram', 'Der Infinitiv mit zu', {
      intro: 'Nach vielen Ausdrücken folgt ein **Infinitiv mit zu**. Er steht **am Ende** des Satzes. Bei trennbaren Verben steht **zu** in der Mitte: an**zu**rufen.',
      head: ['Ausdruck', 'Infinitiv mit zu'],
      rows: [['Ich habe Lust,', 'einen Ausflug **zu machen**.'], ['Es macht mir Spaß,', 'stundenlang **zu wandern**.'], ['Ich habe keine Zeit,', 'Hotels **zu vergleichen**.'], ['Ich hasse es,', 'früh **aufzustehen**.'], ['Amara hat vor,', 'sich frei**zunehmen**.'], ['Es ist schön,', 'neue Orte **kennenzulernen**.']],
      notes: ['Typische Ausdrücke: *Lust haben, Zeit haben, vorhaben, versuchen, vergessen, anfangen, aufhören, versprechen, Es ist schön/wichtig/schwer, Es macht Spaß*.', 'Trennbare Verben: *anrufen → an**zu**rufen, mitkommen → mit**zu**kommen*.', 'Nach Modalverben steht **kein zu**: *Ich **will** wandern.*', 'Vor dem Infinitiv mit zu steht meistens ein Komma.'],
      en: 'Many expressions are followed by an infinitive with zu at the end of the sentence: Ich habe Lust, zu wandern. With separable verbs, zu goes between the prefix and the verb: anzurufen, aufzustehen. Modal verbs (wollen, können, müssen ...) take the infinitive without zu.',
    }),
    gap('t1-gap', ['Ich habe keine Lust, im Regen {{zu wandern}}. (wandern)', 'Vergiss nicht, Herrn Lehmann {{anzurufen}}! (anrufen)', 'Es ist schön, mit Freunden {{zu verreisen}}. (verreisen)', 'Sofia hat vor, jeden Tag Deutsch {{zu sprechen}}. (sprechen)', 'Hast du Zeit, am Samstag {{mitzukommen}}? (mitkommen)'],
      { task: 'Ergänze den Infinitiv mit zu.', taskEn: 'Fill in the infinitive with zu. With separable verbs, zu goes in the middle.' }),
    phrases('t1-phr', 'Vorlieben und Abneigungen', {
      'Das mag ich': ['Ich liebe es, am Strand zu liegen.', 'Es macht mir Spaß, neue Städte zu entdecken.', 'Für mich gibt es nichts Besseres, als …'],
      'Das ist okay': ['Das ist mir egal.', 'Das finde ich ganz okay.', 'Von mir aus gern.'],
      'Das mag ich nicht': ['Ich habe keine Lust, lange zu planen.', 'Ich hasse es, früh aufzustehen.', '… finde ich furchtbar langweilig.'],
    }),
    order('t1-order', ['Ich', 'habe', 'keine', 'Lust,', 'Hotels', 'zu', 'vergleichen.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence. The infinitive with zu goes to the end.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Ab in den Schwarzwald', 'sky', 15,
  ['Gespräche über Reiseplanung verstehen und führen', 'Nebensatz mit da, weil und obwohl'], [
    audio('t2-audio', 'Hören: Familienrat in der Küche', [
      ['nele', 'So, Familienrat! Ich habe einen Vorschlag: der Schwarzwald. Da gibt es Berge, Wälder und sogar einen See, den Titisee.'],
      ['sofia', 'Ein See ist ja fast wie ein Strand! Ich bin dabei.'],
      ['felix', 'Klingt gut. Aber wo schlafen wir? Ein Hotel ist mir echt zu teuer.'],
      ['nele', 'Es gibt da eine Wanderhütte mit Matratzenlager. Die kostet nur zwanzig Euro pro Nacht, mit Frühstück.'],
      ['amara', 'Matratzenlager? Na gut. Obwohl ich lieber in einem richtigen Bett schlafe, finde ich die Idee lustig.'],
      ['felix', 'Und wie kommen wir hin? Wir haben ja kein Auto.'],
      ['sofia', 'Mit dem Zug! Ich habe Sparpreise gefunden: 39 Euro bis Freiburg, mit Umsteigen in Karlsruhe. Da die Sparpreise schnell weg sind, sollten wir heute noch buchen.'],
      ['felix', 'Heute? Ich hab doch gesagt, ich hasse es, zu planen!'],
      ['sofia', 'Keine Sorge, Felix, ich buche alles. Ich bin halt UX-Designerin, ich liebe gute Pläne.'],
      ['amara', 'Und wann genau? Ich muss mir freinehmen, weil ich am Wochenende oft Dienst habe.'],
      ['nele', 'Freitag, der 25. September. Wir fahren früh los und kommen Sonntagabend zurück.'],
      ['felix', 'Früh? Wie früh denn?'],
      ['sofia', 'Der Zug fährt um 6:40 Uhr.'],
      ['felix', 'Sechs Uhr vierzig … Obwohl ich das furchtbar finde, komme ich mit. Für Sofia!'],
    ], { task: 'Hör zu. Wie plant die WG die Reise?', taskEn: 'Listen. How does the flat share plan the trip? Sparpreis = discount ticket, Dienst haben = to be on duty.' }),
    mcq('t2-q1', 'Wo übernachtet die WG?', ['in einem Hotel am Titisee', 'in einer Wanderhütte mit Matratzenlager', 'in einer Ferienwohnung'], 1),
    mcq('t2-q2', 'Warum sollen sie heute noch buchen?', ['Weil Felix es so will.', 'Weil die Sparpreise schnell weg sind.', 'Weil Amara morgen Dienst hat.'], 1),
    mcq('t2-q3', 'Wie reagiert Felix auf die Abfahrtszeit?', ['Er findet sie super.', 'Er findet sie furchtbar, kommt aber mit.', 'Er bleibt zu Hause.'], 1),
    grammar('t2-gram', 'Nebensätze mit da, weil und obwohl', {
      intro: '**weil** und **da** nennen einen Grund. **obwohl** nennt einen Gegengrund: Etwas passiert, obwohl man eigentlich etwas anderes erwartet. In allen drei Nebensätzen steht das konjugierte Verb **am Ende**.',
      head: ['Konnektor', 'Bedeutung', 'Beispiel'],
      rows: [['weil', 'Grund (oft neue Information)', 'Wir buchen heute, **weil** die Preise **steigen**.'], ['da', 'Grund (oft bekannt, oft am Satzanfang)', '**Da** wir kein Auto **haben**, fahren wir mit dem Zug.'], ['obwohl', 'Gegengrund', 'Felix kommt mit, **obwohl** er früh aufstehen **muss**.'], ['obwohl (vorne)', 'Gegengrund', '**Obwohl** es **regnet**, wandern wir.']],
      notes: ['Steht der Nebensatz vorne, beginnt der Hauptsatz mit dem Verb: *Da wir kein Auto haben, **fahren** wir mit dem Zug.*', 'Auf eine Warum-Frage antwortet man mit **weil**, nicht mit da: *Warum fährst du mit? Weil ich die Berge liebe.*', '**obwohl** und **trotzdem** sagen dasselbe: *Es regnet. Trotzdem wandern wir.* = *Obwohl es regnet, wandern wir.*'],
      en: 'weil and da (because, since) give a reason. da often comes at the start and gives a reason the listener already knows. obwohl (although) gives a contrast. In all three clauses, the conjugated verb goes to the end. If the clause comes first, the main clause starts with its verb.',
    }),
    gap('t2-gap', ['Amara kommt mit, {{obwohl}} sie lieber in einem Bett schläft.', '{{Da|Weil}} wir kein Auto haben, fahren wir mit dem Zug.', 'Felix ist müde, {{weil|da}} er um fünf Uhr aufgestanden ist.', 'Wir wandern, obwohl es {{regnet}}. (regnen)', 'Sofia bucht alles, weil sie gute Pläne {{liebt}}. (lieben)'],
      { task: 'Ergänze den Konnektor oder das Verb.', taskEn: 'Fill in the connector (da, weil, obwohl) or the verb at the end.' }),
    phrases('t2-phr', 'Eine Reise planen', {
      'Vorschlagen': ['Was haltet ihr von …?', 'Ich schlage vor, dass wir …', 'Wie wäre es mit einem Wochenende im Schwarzwald?'],
      'Zustimmen': ['Ich bin dabei!', 'Gute Idee, das machen wir.', 'Das klingt super.'],
      'Bedenken äußern': ['Das ist mir zu teuer.', 'Ich weiß nicht, ob das klappt.', 'Obwohl die Idee gut ist, habe ich leider keine Zeit.'],
      'Organisieren': ['Wer kümmert sich um die Fahrkarten?', 'Ich buche die Unterkunft.', 'Wann treffen wir uns am Bahnhof?'],
    }),
    compose('t2-comp', 'Schreib Lina eine Nachricht: Kommst du mit in den Schwarzwald?', [
      ['Lade sie ein.', 'Invite her.', ['Hast du', 'Lust,', 'mit in den Schwarzwald', 'zu fahren?']],
      ['Nenne einen Grund für den Zug.', 'Give a reason for taking the train.', ['Wir fahren', 'mit dem Zug,', 'weil', 'es billiger', 'ist.']],
      ['Sag etwas mit obwohl.', 'Say something with obwohl.', ['Es wird lustig,', 'obwohl', 'wir', 'im Matratzenlager', 'schlafen.']],
    ], { task: 'Bau die Nachricht.', taskEn: 'Build the message sentence by sentence.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Sommer auf der Alm', 'lilac', 18,
  ['einen Blogeintrag verstehen', 'Durchsagen verstehen', 'Prüfungstraining: Hören Teil 1'], [
    text('t3-text', `**Drei Sommer, 40 Kühe und kein WLAN**

Hallo, ich bin Marie, 29, und eigentlich arbeite ich als Grafikerin in Stuttgart. Aber seit drei Jahren verbringe ich jeden Sommer auf einer Alm im Allgäu. Von Juni bis September lebe ich auf 1.400 Metern Höhe, zusammen mit 40 Kühen, zwei Ziegen und dem Senner Toni.

Mein Tag beginnt um fünf Uhr. Zuerst holen wir die Kühe von der Weide und melken sie. Danach mache ich Frühstück für die Wanderer, die bei uns übernachten. Mittags gibt es Käsespätzle, am Nachmittag Kuchen. Obwohl die Arbeit körperlich anstrengend ist, bin ich auf der Alm so entspannt wie nirgendwo sonst. Da es kein WLAN gibt, rede ich viel mit den Gästen, statt aufs Handy zu schauen.

Viele Leute fragen mich: „Ist das nicht einsam?“ Nein! Es ist wunderschön, am Abend vor der Hütte zu sitzen und den Sonnenuntergang zu sehen. Und manchmal kommen ganz besondere Gäste: Letztes Jahr stand mitten in der Nacht eine Gruppe aus Hamburg vor der Tür, total nass und sehr hungrig.

Dieses Jahr probiere ich etwas Neues aus: Im September arbeite ich als Hüttenwirtin auf einer Wanderhütte im Schwarzwald. Dort sagt man übrigens nicht „Alm“, sondern „Hütte“ oder „Hof“. Ich bin gespannt, wer dort vor meiner Tür steht!`,
      { kicker: 'Lesen', title: 'Der Blog „Sommer auf der Alm“', task: 'Lies den Blogeintrag.', taskEn: 'Read the blog post by Marie, who spends her summers working on a mountain pasture. melken = to milk, nirgendwo sonst = nowhere else.', en: 'Sofia found this blog while planning the trip. Keep Marie in mind: she will come back in the story.' }),
    mcq('t3-q1', 'Was macht Marie normalerweise?', ['Sie ist Sennerin.', 'Sie arbeitet als Grafikerin.', 'Sie ist Köchin.'], 1),
    mcq('t3-q2', 'Warum redet Marie auf der Alm viel mit den Gästen?', ['Weil es kein WLAN gibt.', 'Weil sie einsam ist.', 'Weil die Gäste aus Hamburg kommen.'], 0),
    mcq('t3-q3', 'Wie findet Marie die Arbeit?', ['leicht und langweilig', 'anstrengend, aber entspannend', 'einsam und schwer'], 1),
    mcq('t3-q4', 'Wo arbeitet Marie im September?', ['im Allgäu', 'in Stuttgart', 'im Schwarzwald'], 2),
    tip('t3-land', 'Landeskunde: Alm, Hütte und Schwarzwald',
      'Eine **Alm** (in Österreich auch **Alpe**, in der Schweiz **Alp**) ist eine Wiese hoch in den Bergen. Im Sommer leben dort Kühe, Ziegen und Menschen, die sich um die Tiere kümmern, Käse machen und Wanderer bewirten. Viele Studierende und Menschen aus der Stadt arbeiten einen Sommer lang auf einer Alm.\n\nIm **Schwarzwald** im Südwesten von Baden-Württemberg gibt es keine Almen wie in den Alpen, aber viele Wanderhütten, alte Bauernhöfe und Weiden. Bekannt sind die Kuckucksuhren, die Schwarzwälder Kirschtorte und der Bollenhut mit den roten Kugeln. Der höchste Berg ist der Feldberg (1.493 Meter).'),
    tip('t3-pt-tip', 'Prüfungstraining: Hören Teil 1',
      'Im Goethe-Zertifikat B1, Hören Teil 1, hörst du kurze Texte: Durchsagen, Nachrichten auf dem Anrufbeantworter oder Tipps im Radio. Du hörst jeden Text **zweimal**. Lies zuerst die Aufgaben und markiere die Schlüsselwörter.\n\nAchte bei Durchsagen besonders auf **Gleis**, **Uhrzeit**, **Verspätung**, **Zugnummer** und **Ziel**. Wörter wie *heute ausnahmsweise*, *statt* oder *bitte beachten Sie* zeigen dir: Jetzt kommt eine Änderung!'),
    audio('t3-pt-audio', 'Hören: Durchsagen am Bahnhof', [
      ['moderatorin', 'Durchsage eins. Information zum Regionalexpress nach Offenburg, planmäßige Abfahrt 11:47 Uhr. Dieser Zug fährt heute ausnahmsweise von Gleis 9 statt von Gleis 3. Bitte beachten Sie den Gleiswechsel.'],
      ['moderatorin', 'Durchsage zwei. Information zum ICE 575 von Berlin nach Basel: Der Zug hat wegen einer Reparatur am Zug circa 25 Minuten Verspätung. Wir bitten um Entschuldigung.'],
      ['moderatorin', 'Durchsage drei. Wegen Bauarbeiten zwischen Offenburg und Hausach fahren heute keine Züge. Bitte nutzen Sie den Ersatzverkehr mit Bussen. Die Busse fahren vor dem Bahnhof ab, Ausgang Nord.'],
      ['moderatorin', 'Durchsage vier. Am Gleis 5 fährt ein: der Regionalexpress nach Freiburg, Abfahrt 12:10 Uhr. Bitte beachten Sie: Die Wagen der ersten Klasse befinden sich heute am Ende des Zuges.'],
    ], { task: 'Hör die vier Durchsagen. Beantworte dann die Fragen.', taskEn: 'Listen to the four announcements at the station, then answer the questions. In the exam you hear each text twice.' }),
    mcq('t3-pt1', 'Der Regionalexpress nach Offenburg fährt heute von Gleis 3.', ['richtig', 'falsch'], 1,
      { task: 'Durchsage 1: Richtig oder falsch?', taskEn: 'Announcement 1: true or false?', why: 'Heute ausnahmsweise von Gleis 9 statt von Gleis 3.' }),
    mcq('t3-pt2', 'Warum hat der ICE Verspätung?', ['wegen Bauarbeiten', 'wegen einer Reparatur am Zug', 'wegen des Wetters'], 1,
      { task: 'Durchsage 2', taskEn: 'Announcement 2: why is the train late?' }),
    mcq('t3-pt3', 'Wie kommt man heute nach Hausach?', ['mit dem Zug von Gleis 9', 'mit dem Bus, Ausgang Nord', 'mit dem Taxi'], 1,
      { task: 'Durchsage 3', taskEn: 'Announcement 3: how do you get to Hausach today?' }),
    mcq('t3-pt4', 'Wo ist heute die erste Klasse?', ['am Anfang des Zuges', 'in der Mitte des Zuges', 'am Ende des Zuges'], 2,
      { task: 'Durchsage 4', taskEn: 'Announcement 4: where is first class today?' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 1: Willkommen, Sofia!', 'rose', 12,
  ['eine Geschichte hören', 'Reisepannen verstehen'], [
    text('wg-intro', 'Freitag, 25. September, 6:40 Uhr, Leipzig Hauptbahnhof. Sofia wohnt seit zwei Wochen im Fuchsbau. Heute fährt die WG in den Schwarzwald. Kenji hat am Abend vorher noch Onigiri für alle gemacht, japanische Reisbällchen. Und Herr Lehmann, der Nachbar? Er hat versprochen, Sofias Pflanzen zu gießen. Alle 23.', { kicker: 'Die Geschichte', en: 'Friday, September 25, 6:40 a.m., Leipzig main station. Sofia has lived in the Fuchsbau for two weeks. Today the flat share is going to the Black Forest. Kenji made onigiri (Japanese rice balls) for everyone the night before. And Herr Lehmann, the neighbor, has promised to water Sofia’s plants. All 23 of them.' }),
    audio('wg-audio', 'Folge 1: Willkommen, Sofia!', [
      ['erzaehler', 'Im ICE, kurz vor Karlsruhe.'],
      ['sofia', 'Leute, unser Zug hat zwanzig Minuten Verspätung. Und unser Anschluss nach Freiburg fährt in zehn Minuten.'],
      ['felix', 'Siehst du? Deshalb hasse ich es, Reisen zu planen. Pläne gehen immer kaputt.'],
      ['nele', 'Ach, Felix. Vielleicht wartet der Anschlusszug ja.'],
      ['moderatorin', 'Meine Damen und Herren, in Kürze erreichen wir Karlsruhe Hauptbahnhof. Der Anschluss nach Freiburg kann leider nicht erreicht werden.'],
      ['amara', 'Na toll. Und jetzt?'],
      ['sofia', 'Okay, neuer Plan: Wir nehmen den Regionalexpress nach Offenburg und dann den Ersatzbus. Obwohl das länger dauert, sind wir heute Abend auf der Hütte.'],
      ['felix', 'Ich habe Hunger. Hat jemand noch eins von Kenjis Onigiri?'],
      ['amara', 'Ich habe noch vier. Kenji hat gesagt: Nehmt genug mit, da die Bahn in Deutschland ein Abenteuer ist.'],
      ['erzaehler', 'Abends um halb zehn, auf einer Hütte im Schwarzwald.'],
      ['nele', 'Schaut mal, die Hüttenwirtin ist Marie, die vom Blog „Sommer auf der Alm“! Sie hat uns extra eine Suppe warm gehalten.'],
      ['sofia', 'Wisst ihr was? Obwohl heute alles schiefgegangen ist, war das der schönste Tag seit Wochen. Ich fühle mich bei euch schon richtig zu Hause.'],
      ['felix', 'Und das, obwohl du um sechs Uhr aufstehen musstest.'],
      ['erzaehler', 'Da klingelt Sofias Handy.'],
      ['herrLehmann', 'Frau Sofia? Hier ist Lehmann. Ich wollte nur sagen: Ich habe alle Pflanzen gegossen. Und ich habe ihnen ein bissel was vorgelesen. Die große Palme mag Goethe.'],
      ['sofia', 'Herr Lehmann, Sie sind der Beste!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story. schiefgehen = to go wrong, ein bissel = Saxon for "ein bisschen".' }),
    mcq('wg-q1', 'Warum verpasst die WG den Anschluss in Karlsruhe?', ['Felix hat verschlafen.', 'Der ICE hat Verspätung.', 'Sofia hat den falschen Zug gebucht.'], 1),
    mcq('wg-q2', 'Wie fahren sie ab Offenburg weiter?', ['mit dem Taxi', 'mit dem Ersatzbus', 'zu Fuß'], 1),
    mcq('wg-q3', 'Wer ist die Hüttenwirtin?', ['Marie aus dem Blog', 'Neles Tante', 'Kenjis Kollegin'], 0),
    mcq('wg-q4', 'Was macht Herr Lehmann mit Sofias Pflanzen?', ['Er verkauft sie.', 'Er gießt sie und liest ihnen vor.', 'Er stellt sie auf den Balkon.'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Infinitiv mit und ohne zu', 'da, weil und obwohl'], [
    grammar('g-1', 'Infinitiv mit zu oder ohne zu?', {
      head: ['', 'Beispiel', 'Regel'],
      rows: [['mit zu', 'Ich habe Lust, **zu wandern**.', 'nach Lust/Zeit haben, vorhaben, vergessen, versuchen, Es ist schön …'], ['mit zu (trennbar)', 'Vergiss nicht, Kenji **anzurufen**.', 'zu steht zwischen Vorsilbe und Verb'], ['ohne zu', 'Ich **will** wandern.', 'nach Modalverben: können, müssen, wollen, dürfen, sollen, möchten'], ['ohne zu', 'Wir **gehen** wandern.', 'nach gehen, bleiben und lassen']],
      notes: ['Achtung: *Ich **muss** früh aufstehen.* (ohne zu), aber: *Ich **habe keine Lust**, früh aufzustehen.* (mit zu)'],
      en: 'After expressions like Lust haben, Zeit haben, vorhaben, vergessen or Es ist schön, use zu + infinitive at the end. With separable verbs, zu goes in the middle: anzurufen. After modal verbs and after gehen, bleiben and lassen, use the infinitive without zu.',
    }),
    grammar('g-2', 'da, weil und obwohl: das Verb am Ende', {
      head: ['Hauptsatz', 'Konnektor', 'Mittelfeld', 'Verb am Ende'],
      rows: [['Wir fahren mit dem Zug,', 'weil', 'wir kein Auto', '**haben**.'], ['Wir buchen sofort,', 'da', 'die Preise schnell', '**steigen**.'], ['Felix kommt mit,', 'obwohl', 'er früh aufstehen', '**muss**.'], ['Sofia ist glücklich,', 'obwohl', 'alles schiefgegangen', '**ist**.']],
      notes: ['Nebensatz vorne: *Obwohl es regnet, **wandern** wir.* Verb, Komma, Verb.'],
      en: 'In clauses with weil, da and obwohl, the conjugated verb always goes to the very end. A modal verb or the auxiliary of the perfect tense comes last of all: obwohl er aufstehen muss, obwohl alles schiefgegangen ist.',
    }),
    mcq('g-q1', 'Ich habe keine Zeit, heute ___.', ['kochen', 'zu kochen', 'gekocht'], 1),
    mcq('g-q2', 'Wir müssen morgen früh ___.', ['aufstehen', 'aufzustehen', 'zu aufstehen'], 0, { why: 'Nach Modalverben steht der Infinitiv ohne zu.' }),
    mcq('g-q3', '___ es regnet, gehen wir wandern.', ['Weil', 'Obwohl', 'Da'], 1),
    mcq('g-q4', 'Es ist schön, neue Leute ___.', ['kennenzulernen', 'zu kennenlernen', 'kennenlernen zu'], 0),
    mcq('g-q5', 'Da Sofia neu in Leipzig ist, ___.', ['sie kennt noch wenige Leute', 'kennt sie noch wenige Leute', 'sie noch wenige Leute kennt'], 1, { why: 'Der Nebensatz steht vorne, also beginnt der Hauptsatz mit dem Verb.' }),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['eine Urlaubsgeschichte schreiben', 'Aussprache: n, ng, nk'], [
    compose('u-comp', 'Schreib eine kleine Urlaubsgeschichte.', [
      ['Wann und wohin?', 'When and where to?', ['Letzten Sommer', 'bin', 'ich', 'an die Ostsee', 'gefahren.']],
      ['Was ist schiefgegangen?', 'What went wrong?', ['Obwohl', 'der Wetterbericht', 'gut war,', 'hat es', 'jeden Tag geregnet.']],
      ['Wie war es am Ende?', 'How was it in the end?', ['Trotzdem', 'war', 'es', 'ein wunderbarer', 'Urlaub.']],
    ], { task: 'Bau die Geschichte Satz für Satz.', taskEn: 'Build a short vacation story sentence by sentence.' }),
    gap('u-gap', ['Sofia geht schwimmen, {{obwohl}} das Wasser kalt ist.', 'Nele wandert gern, {{weil}} sie die Natur liebt.', 'Felix kommt mit, {{obwohl}} er nicht gern plant.', 'Amara nimmt sich frei, {{weil}} sie mitfahren möchte.'],
      { bank: ['weil', 'obwohl'], task: 'Grund oder Gegengrund? Ergänze.', taskEn: 'Reason or contrast? Fill in weil or obwohl.' }),
    audio('u-aus', 'Aussprache: n, ng, nk', [
      ['frauKlein', 'Beim n liegt die Zungenspitze oben hinter den Zähnen: nein, Nebel, Sonne, wandern.'],
      ['frauKlein', 'Bei ng hört man kein g! Die Zunge geht nach hinten, und die Luft geht durch die Nase: lang, singen, Hunger, Zeitung, Verspätung.'],
      ['frauKlein', 'Bei nk spricht man zuerst ng und dann ein k: Bank, danke, trinken, Schrank, krank.'],
      ['frauKlein', 'Hör den Unterschied: Sonne, Sonnenuntergang, Gedanke. Sinn, singen, sinken.'],
      ['frauKlein', 'Und jetzt du: Lange Wanderungen machen hungrig, aber Bänke und Getränke gibt es zum Glück überall.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. In ng you do not hear a g. In nk you hear ng plus k.' }),
    sort('u-sort', ['n (wie in „nein“)', 'ng (wie in „lang“)', 'nk (wie in „danke“)'], [['Nebel', 0], ['Hunger', 1], ['trinken', 2], ['Sonne', 0], ['Zeitung', 1], ['Schrank', 2], ['Kanal', 0], ['Ring', 1], ['Bank', 2]],
      { task: 'Welchen Laut hörst du?', taskEn: 'Sort the words by sound: n, ng or nk.' }),
    order('u-order', ['Obwohl', 'der', 'Zug', 'Verspätung', 'hat,', 'bleiben', 'wir', 'ruhig.'], { task: 'Bau den Satz mit obwohl.', taskEn: 'Build the sentence. The obwohl clause comes first, so the main clause starts with the verb.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 10,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['die Vorliebe', 'etwas, das man besonders mag', 'preference'], ['die Abneigung', 'etwas, das man nicht mag', 'dislike'], ['verreisen', 'eine Reise machen', 'to go away on a trip'],
      ['die Unterkunft', 'wo man im Urlaub schläft', 'accommodation'], ['buchen', 'fest reservieren', 'to book'], ['das Matratzenlager', 'viele Matratzen in einem Raum', 'dormitory sleeping area'],
      ['der Anschluss', 'der nächste Zug beim Umsteigen', 'connection'], ['die Verspätung', 'der Zug kommt zu spät', 'delay'], ['der Gleiswechsel', 'der Zug fährt von einem anderen Gleis', 'platform change'],
      ['der Ersatzverkehr', 'Busse statt Züge', 'replacement service'], ['die Durchsage', 'eine Information über Lautsprecher', 'announcement'], ['schiefgehen', 'nicht so klappen wie geplant', 'to go wrong'],
    ]),
    match('w-match', [['der Koffer', 'darin transportiert man Kleidung auf Reisen'], ['der Rucksack', 'eine Tasche für den Rücken'], ['das Zelt', 'darin schläft man beim Camping'], ['der Schlafsack', 'darin schläft man warm im Matratzenlager'], ['die Wanderschuhe', 'feste Schuhe für die Berge'], ['die Sonnencreme', 'schützt die Haut am Strand'], ['die Fahrkarte', 'ohne sie darf man nicht Zug fahren'], ['der Bahnsteig', 'dort wartet man auf den Zug'], ['die Hütte', 'ein kleines Haus auf dem Berg'], ['der Strand', 'Sand am Meer']],
      { task: 'Was passt zusammen?', taskEn: 'Match the travel words to their meaning.' }),
    phrases('w-phr', 'Am Bahnhof', {
      'Fragen': ['Von welchem Gleis fährt der Zug nach Freiburg?', 'Hat der Zug Verspätung?', 'Erreiche ich meinen Anschluss noch?'],
      'In Durchsagen': ['Bitte beachten Sie den Gleiswechsel.', 'Der Zug hat circa 20 Minuten Verspätung.', 'Bitte nutzen Sie den Ersatzverkehr.', 'Wir bitten um Entschuldigung.'],
    }),
    sort('w-sort', ['Grund: weil / da', 'Gegengrund: obwohl'], [['Wir fahren mit dem Zug, … es billiger ist.', 0], ['Ich wandere, … es regnet.', 1], ['Sie bleibt zu Hause, … sie krank ist.', 0], ['Er kommt mit, … er keine Lust hat.', 1], ['… wir kein Auto haben, nehmen wir den Bus.', 0], ['Sie lacht, … der Zug Verspätung hat.', 1]],
      { task: 'Welcher Konnektor passt?', taskEn: 'Which connector fits: a reason (weil/da) or a contrast (obwohl)?' }),
    gap('w-gap', ['Ich habe vor, nächstes Jahr nach Brasilien {{zu fliegen}}.', 'Hör endlich auf, über die Bahn {{zu schimpfen}}!', 'Es ist wichtig, die Fahrkarten früh {{zu buchen}}.', 'Sofia versucht, jeden Tag Deutsch {{zu sprechen}}.'],
      { bank: ['zu fliegen', 'zu schimpfen', 'zu buchen', 'zu sprechen'], task: 'Ergänze.', taskEn: 'Fill in the infinitive with zu.' }),
    mcq('w-q1', 'Welcher Satz ist richtig?', ['Ich habe Lust, ins Kino zu gehen.', 'Ich habe Lust, zu ins Kino gehen.', 'Ich habe Lust, ins Kino gehen zu.'], 0,
      { task: 'Infinitiv mit zu', taskEn: 'Infinitive with zu.', why: 'zu + Infinitiv steht ganz am Ende.' }),
    order('w-order', ['Vergiss', 'nicht,', 'Herrn Lehmann', 'anzurufen!'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
    checklist('w-check', ['Ich kann über meine Vorlieben und Abneigungen beim Reisen sprechen.', 'Ich kann mit anderen eine Reise planen.', 'Ich kann Sätze mit zu + Infinitiv bilden.', 'Ich kann mit weil, da und obwohl Gründe und Gegengründe nennen.', 'Ich kann einen Blogeintrag über eine Reise verstehen.', 'Ich kann Durchsagen am Bahnhof verstehen.', 'Ich kann eine kurze Urlaubsgeschichte schreiben.']),
  ]);

export const b1k1: Chapter = {
  id: 'b1-k1', number: 1, title: 'Gute Reise!', theme: 'Urlaubsarten, Reiseplanung, Reiseangebote, Durchsagen, Arbeiten auf der Alm',
  grammar: 'Infinitiv mit zu. Nebensatz mit da und weil. Nebensatz mit obwohl.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['b1k1-sprint', 'b1k1-memory', 'b1k1-satzbau', 'b1k1-artikel'],
  exam: [
    x(1, mcq('x1', 'Ich habe keine Lust, heute ___.', ['aufzuräumen', 'aufräumen', 'zu aufräumen'], 0)),
    x(1, mcq('x2', 'Wir wandern, ___ es regnet.', ['weil', 'obwohl', 'da'], 1)),
    x(1, mcq('x3', '___ wir kein Auto haben, fahren wir mit dem Zug.', ['Obwohl', 'Da', 'Trotzdem'], 1)),
    x(3, gap('x4', ['Hast du Zeit, morgen {{mitzukommen}}? (mitkommen)', 'Es macht Spaß, im Meer {{zu schwimmen}}. (schwimmen)', 'Vergiss nicht, die Fahrkarten {{zu kaufen}}. (kaufen)'], { task: 'Ergänze den Infinitiv mit zu.', taskEn: 'Fill in the infinitive with zu.' })),
    x(3, gap('x5', ['Er kommt mit, obwohl er keine Zeit {{hat}}. (haben)', 'Ich bleibe hier, weil ich krank {{bin}}. (sein)', 'Obwohl es kalt ist, {{gehen}} wir schwimmen. (gehen)'], { task: 'Ergänze das Verb.', taskEn: 'Fill in the verb in the right form.' })),
    x(1, mcq('x6', 'Wie viel Verspätung hat der Zug?', ['5 Minuten', '15 Minuten', '50 Minuten'], 1),
      audio('x-st1', 'Hören: Eine Durchsage', [
        ['moderatorin', 'Information zum Regionalexpress nach Erfurt, planmäßige Abfahrt 14:35 Uhr. Der Zug hat heute circa 15 Minuten Verspätung. Grund ist eine Störung an einer Weiche.'],
        ['moderatorin', 'Bitte beachten Sie außerdem: Der Zug fährt heute ausnahmsweise von Gleis 4 statt von Gleis 2. Reisende nach Gotha erreichen in Erfurt ihren Anschluss um 15:52 Uhr. Wir bitten um Ihr Verständnis.'],
      ])),
    x(1, mcq('x7', 'Von welchem Gleis fährt der Zug heute? (Durchsage oben)', ['Gleis 2', 'Gleis 4', 'Gleis 14'], 1)),
    x(1, mcq('x8', 'Was ist im Preis enthalten?', ['das Abendessen', 'eine geführte Wanderung', 'die Bahnfahrt'], 1),
      text('x-st2', '**Wanderwochenende im Schwarzwald**\n\nZwei Übernachtungen im Doppelzimmer mit Frühstück, eine geführte Wanderung auf den Feldberg und ein Stück Schwarzwälder Kirschtorte.\n\n**Preis:** 189 € pro Person. Kinder unter 12 Jahren zahlen die Hälfte.\n**Anreise:** freitags oder samstags. Hunde sind leider nicht erlaubt.\n**Buchung:** bis spätestens 14 Tage vor der Reise.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Wer darf nicht mitkommen? (Text oben)', ['Kinder', 'Hunde', 'Gruppen'], 1)),
    x(2, order('x10', ['Obwohl', 'der Zug', 'so früh', 'fährt,', 'kommt', 'Felix', 'mit.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' })),
    x(1, mcq('x11', 'Du magst etwas gar nicht. Was sagst du?', ['Ich habe große Lust darauf.', 'Ich hasse es, im Stau zu stehen.', 'Das macht mir viel Spaß.'], 1)),
    x(1, mcq('x12', 'Was bedeutet „Bitte beachten Sie den Gleiswechsel“?', ['Der Zug fällt aus.', 'Der Zug fährt von einem anderen Gleis.', 'Der Zug hat Verspätung.'], 1)),
  ],
};

export const gamesB1k1: GameDef[] = [
  {
    id: 'b1k1-sprint', engine: 'sprint', title: 'weil-obwohl-Sprint', blurb: 'Grund oder Gegengrund? 60 Sekunden!', skill: 'weil und obwohl', tone: 'mint', chapter: 1, emoji: '⚡',
    rules: 'Du siehst einen Satz. Tippe auf den Konnektor, der passt.', label: 'Welcher Konnektor?',
    items: [
      { q: 'Wir wandern, ___ es regnet.', a: 'obwohl', wrong: ['weil', 'deshalb'] }, { q: 'Ich bleibe zu Hause, ___ ich krank bin.', a: 'weil', wrong: ['obwohl', 'trotzdem'] },
      { q: 'Sie lacht, ___ der Zug Verspätung hat.', a: 'obwohl', wrong: ['weil', 'deshalb'] }, { q: 'Er fährt mit dem Zug, ___ er kein Auto hat.', a: 'weil', wrong: ['obwohl', 'trotzdem'] },
      { q: 'Ich gehe schwimmen, ___ das Wasser kalt ist.', a: 'obwohl', wrong: ['weil', 'deshalb'] }, { q: 'Wir buchen heute, ___ die Preise morgen steigen.', a: 'weil', wrong: ['obwohl', 'trotzdem'] },
      { q: 'Sofia ist glücklich, ___ alles schiefgeht.', a: 'obwohl', wrong: ['weil', 'deshalb'] }, { q: 'Nele wandert gern, ___ sie die Natur liebt.', a: 'weil', wrong: ['obwohl', 'trotzdem'] },
      { q: 'Felix kommt mit, ___ er früh aufstehen muss.', a: 'obwohl', wrong: ['weil', 'deshalb'] }, { q: 'Amara ist müde, ___ sie Nachtdienst hatte.', a: 'weil', wrong: ['obwohl', 'trotzdem'] },
      { q: 'Ich kaufe das Ticket, ___ es teuer ist.', a: 'obwohl', wrong: ['weil', 'deshalb'] }, { q: 'Wir essen Onigiri, ___ wir Hunger haben.', a: 'weil', wrong: ['obwohl', 'trotzdem'] },
    ],
  },
  {
    id: 'b1k1-memory', engine: 'memory', title: 'Reise-Memory', blurb: 'Wort und Bild: Finde die Paare.', skill: 'Reisewortschatz', tone: 'lilac', chapter: 1, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Wort und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['der Strand', '🏖️'], ['die Berge', '⛰️'], ['das Zelt', '⛺'], ['der Koffer', '🧳'], ['der Zug', '🚆'], ['die Hütte', '🛖'], ['der Rucksack', '🎒'], ['die Sonnencreme', '🧴'], ['die Fahrkarte', '🎫'], ['die Kuh', '🐄']],
  },
  {
    id: 'b1k1-satzbau', engine: 'satzbau', title: 'Reise-Baukasten', blurb: 'zu + Infinitiv und obwohl: alles ans Ende!', skill: 'Infinitiv mit zu, obwohl', tone: 'sky', chapter: 1, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. zu + Infinitiv und das Verb im Nebensatz stehen am Ende.',
    sentences: [
      { parts: ['Ich', 'habe', 'Lust,', 'ans Meer', 'zu fahren.'], hint: 'zu + Infinitiv am Ende' },
      { parts: ['Es', 'ist', 'schön,', 'neue Leute', 'kennenzulernen.'], hint: 'trennbar: kennen-zu-lernen' },
      { parts: ['Vergiss', 'nicht,', 'Kenji', 'anzurufen!'], hint: 'zu in der Mitte' },
      { parts: ['Wir', 'fahren', 'mit dem Zug,', 'weil', 'es', 'billiger', 'ist.'], hint: 'Verb ans Ende' },
      { parts: ['Da', 'es', 'regnet,', 'bleiben', 'wir', 'in der Hütte.'], hint: 'Nebensatz vorne: dann Verb' },
      { parts: ['Felix', 'kommt', 'mit,', 'obwohl', 'er', 'früh', 'aufstehen', 'muss.'], hint: 'Modalverb ganz am Ende' },
      { parts: ['Obwohl', 'der Zug', 'Verspätung', 'hat,', 'sind', 'alle', 'gut gelaunt.'], hint: 'Verb, Komma, Verb' },
      { parts: ['Ich', 'will', 'im Sommer', 'wandern.'], hint: 'Modalverb: ohne zu' },
    ],
  },
  {
    id: 'b1k1-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Reise und Bahnhof.', skill: 'Artikel', tone: 'rose', chapter: 1, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Koffer, das Zelt, die Hütte, der Rucksack, das Gleis, die Verspätung, der Anschluss, das Matratzenlager, die Durchsage, der Strand, das Meer, die Unterkunft, der Bahnsteig, das Reiseangebot, die Fahrkarte, der Gipfel, die Alm, der Wanderschuh'),
  },
];
