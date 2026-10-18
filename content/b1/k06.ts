import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// B1 Kapitel 6: Blick nach vorn. Pläne und Vorsätze, Zukunftsvorstellungen, Erwartungen, ein Lied.
// Grammar: Futur I (Plan, Prognose, Vermutung), n-Deklination, Relativsätze im Dativ und mit Präposition.
// Aussprache: Vokallänge vor ss und ß. Strategie: Deutsch lernen mit Musik. Plattform 2 (K4 bis K6) am Ende.

export const glossaryB1k6: Record<string, GlossaryEntry> = {
  Vorsatz: { de: 'Etwas, das man sich fest vornimmt, zum Beispiel für das neue Jahr: „Ich werde mehr Sport machen.“', en: 'resolution' },
  Futur: { de: 'Eine Zeitform für die Zukunft: werden + Infinitiv. Ich werde kommen.', en: 'future tense' },
  Prognose: { de: 'Eine Aussage darüber, wie etwas in der Zukunft wahrscheinlich sein wird.', en: 'forecast, prediction' },
  Erwartung: { de: 'Was man glaubt oder hofft, dass es passieren wird.', en: 'expectation' },
  Zukunftsvorstellung: { de: 'Ein Bild im Kopf davon, wie das Leben später sein wird.', en: 'idea of the future' },
  Ratschlag: { de: 'Ein Tipp, was jemand tun soll: „Du solltest kleine Schritte planen.“', en: 'piece of advice' },
  Rückschlag: { de: 'Wenn etwas plötzlich schlechter läuft, nachdem es gut lief.', en: 'setback' },
  Mieterinitiative: { de: 'Eine Gruppe von Mieterinnen und Mietern, die sich zusammen für ihr Haus einsetzt.', en: 'tenant group, tenants’ initiative' },
  Festival: { de: 'Ein großes Fest mit viel Musik, oft im Sommer und draußen, mit vielen Bands.', en: 'festival' },
  Auftritt: { de: 'Wenn eine Band oder ein Künstler vor Publikum spielt.', en: 'performance, gig' },
  Refrain: { de: 'Der Teil eines Liedes, der immer wiederkommt.', en: 'chorus' },
  Strophe: { de: 'Ein Teil eines Liedes oder Gedichts mit mehreren Zeilen. Jede Strophe hat einen anderen Text.', en: 'verse, stanza' },
  Mehrgenerationenhaus: { de: 'Ein Haus, in dem junge und alte Menschen zusammen wohnen und sich helfen.', en: 'multigenerational housing' },
  Gemeinschaftsraum: { de: 'Ein Raum, den alle Bewohner eines Hauses zusammen benutzen.', en: 'common room, shared space' },
  Genossenschaft: { de: 'Eine Gruppe von Menschen, denen eine Firma oder ein Haus gemeinsam gehört.', en: 'cooperative' },
  bezahlbar: { de: 'So, dass man es mit normalem Geld bezahlen kann. Nicht zu teuer.', en: 'affordable' },
  'n-Deklination': { de: 'Einige maskuline Nomen bekommen außer im Nominativ die Endung -n oder -en: der Kollege, den Kollegen.', en: 'weak masculine nouns (n-declension)' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Was bringt die Zukunft?', 'butter', 8,
  ['das Kapitel kennenlernen', 'über Vorsätze sprechen'], [
    overview('e-over', 'Kapitel 6: Blick nach vorn',
      'Februar in Leipzig. Draußen ist es noch kalt, aber im Fuchsbau denken alle an morgen. In Kapitel 6 geht es um Pläne, [[Vorsatz|Vorsätze]] und [[Erwartung|Erwartungen]]. Du liest einen Text mit [[Ratschlag|Ratschlägen]] für gute Vorsätze und sprichst über deine Pläne im [[Futur]]: *Ich werde mehr Sport machen.* Eine Radiosendung fragt: Was erwarten Sie von der Zukunft? In einem Zeitungsartikel findest du eine [[Prognose]] zum Wohnen im Jahr 2040, mit [[Mehrgenerationenhaus|Mehrgenerationenhäusern]] und [[Gemeinschaftsraum|Gemeinschaftsräumen]].\n\nDu lernst, Menschen und Dinge genauer zu beschreiben: *der Nachbar, mit dem ich rede*. Und die [[n-Deklination]]: *Ich helfe dem Kollegen.* In der WG bekommt Felix’ Band ein Angebot für ein [[Festival]], und Felix schreibt ein Lied. Nele gründet mit Herrn Lehmann eine [[Mieterinitiative]]. Am Ende kommt Plattform 2: eine kurze Wiederholung von Kapitel 4 bis 6.',
      'This chapter is about plans, resolutions and expectations. Grammar: the Futur I (werden + infinitive) for plans, predictions and assumptions, the n-declension of some masculine nouns (der Kollege, den Kollegen), and relative clauses in the dative and with a preposition (der Nachbar, dem ich helfe. der Nachbar, mit dem ich rede). You read an advice column and a newspaper article about housing in 2040, listen to a radio show about expectations, and understand and talk about a song. In the story, Felix’s band gets a festival offer and Nele founds a tenant group with Herr Lehmann. The chapter ends with Plattform 2, a review of chapters 4 to 6.',
      ['über Pläne und Vorsätze sprechen', 'Ratschläge verstehen', 'einen längeren Zeitungstext verstehen', 'etwas genauer beschreiben', 'über Erwartungen sprechen', 'ein Lied verstehen']),
    match('e-match', [['mehr Sport machen', '🏃'], ['gesünder essen', '🥗'], ['mit dem Rauchen aufhören', '🚭'], ['Geld sparen', '💰'], ['eine Sprache lernen', '🗣️'], ['weniger am Handy sein', '📵'], ['mehr lesen', '📚'], ['früher schlafen gehen', '😴']],
      { task: 'Welcher Vorsatz passt zum Bild?', taskEn: 'Match each resolution to the picture.' }),
    sort('e-sort', ['Gesundheit', 'Arbeit und Lernen', 'Freizeit und Freunde'], [['weniger Zucker essen', 0], ['jeden Tag zehn Minuten laufen', 0], ['einen Sprachkurs machen', 1], ['pünktlicher zur Arbeit kommen', 1], ['öfter Freunde anrufen', 2], ['ein Instrument lernen', 2]],
      { task: 'Welche Art von Vorsatz ist das? Sortiere.', taskEn: 'What kind of resolution is it? Sort into health, work and learning, or free time and friends.' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Gute Vorsätze', 'mint', 15,
  ['über Pläne und Vorsätze sprechen', 'Ratschläge verstehen', 'das Futur I'], [
    text('t1-text', `**Neues Jahr, neues Glück? Gute Vorsätze im Check**

Jedes Jahr im Januar ist es dasselbe: Millionen Menschen nehmen sich etwas vor. Wir haben drei Leserinnen und Leser gefragt, was sie in diesem Jahr ändern werden.

**Tomasz (42), Dresden:** „Ich werde endlich mit dem Rauchen aufhören. Das habe ich schon dreimal versucht. Diesmal mache ich es mit meinem Kollegen zusammen. Dann kontrollieren wir uns gegenseitig.“

**Lea (19), Halle:** „Nach dem Abitur werde ich ein Jahr ins Ausland gehen, wahrscheinlich nach Kanada. Vorher jobbe ich im Café und spare Geld. Meine Eltern finden die Idee nicht so toll, aber ich bin ja volljährig.“

**Herr Yilmaz (58), Leipzig:** „Ich werde weniger arbeiten. Mein Arzt sagt, ich muss mehr auf meine Gesundheit achten. Ab März habe ich eine Vier-Tage-Woche. Den freien Freitag verbringe ich mit meinen Enkeln.“

**Was sagt die Expertin?** Die Psychologin Dr. Anna Brandt kennt das Problem: „Die meisten Vorsätze sind im Februar schon vergessen. Das liegt oft daran, dass sie zu groß sind.“ Ihre Ratschläge: Planen Sie kleine Schritte. Statt „Ich werde jeden Tag joggen“ lieber: „Ich gehe zweimal pro Woche eine halbe Stunde laufen.“ Erzählen Sie Freunden von Ihrem Plan, denn das motiviert. Und seien Sie nicht zu streng mit sich. Wer einmal eine Zigarette raucht, muss nicht gleich aufgeben. „Ein Rückschlag ist ganz normal“, sagt Brandt. „Wichtig ist, dass man danach weitermacht.“`,
      { kicker: 'Lesen', title: 'Aus einem Ratgeber', task: 'Lies den Text. Was haben die drei Personen vor? Was rät die Expertin?', taskEn: 'Read the advice column. What do the three people plan to do? What does the expert advise? Notice the future forms: ich werde … aufhören, ich werde … gehen.' }),
    mcq('t1-q1', 'Warum hört Tomasz zusammen mit seinem Kollegen auf?', ['Sein Kollege ist Arzt.', 'Sie kontrollieren sich gegenseitig.', 'Es ist billiger.'], 1),
    mcq('t1-q2', 'Was macht Lea, bevor sie ins Ausland geht?', ['Sie jobbt und spart Geld.', 'Sie lernt Französisch.', 'Sie zieht zu ihren Eltern.'], 0),
    mcq('t1-q3', 'Warum möchte Herr Yilmaz weniger arbeiten?', ['Er will mehr reisen.', 'Seine Firma hat zu wenig Arbeit.', 'Sein Arzt hat es ihm geraten.'], 2),
    mcq('t1-q4', 'Was rät Dr. Brandt?', ['Man soll große Ziele haben.', 'Man soll kleine Schritte planen.', 'Man soll niemandem von seinem Plan erzählen.'], 1),
    grammar('t1-gram', 'Das Futur I: werden + Infinitiv', {
      intro: 'Über die Zukunft spricht man oft mit **werden** + **Infinitiv**. *werden* steht auf Position 2, der Infinitiv am **Ende**.',
      head: ['', 'werden', 'Infinitiv (Ende)', 'Beispiel'],
      rows: [
        ['ich', '**werde**', 'umziehen', 'Ich **werde** nächstes Jahr **umziehen**.'],
        ['du', '**wirst**', 'schaffen', 'Du **wirst** das bestimmt **schaffen**.'],
        ['er/sie/es', '**wird**', 'regnen', 'Morgen **wird** es **regnen**.'],
        ['wir', '**werden**', 'spielen', 'Wir **werden** im Sommer auf einem Festival **spielen**.'],
        ['ihr', '**werdet**', 'sehen', 'Ihr **werdet** schon **sehen**.'],
        ['sie/Sie', '**werden**', 'leben', '2040 **werden** mehr Menschen allein **leben**.'],
      ],
      notes: [
        '**Plan, Vorsatz, Versprechen:** *Ich **werde** mit dem Rauchen **aufhören**.*',
        '**Prognose:** *Die Wohnungen **werden** kleiner **werden**.*',
        '**Vermutung** (oft mit *wohl, wahrscheinlich, bestimmt*): *Felix ist nicht da. Er **wird** wohl im Proberaum **sein**.*',
        'Sehr oft benutzt man für die Zukunft einfach das **Präsens + Zeitangabe**: *Morgen **fahre** ich nach Berlin. Ab März **habe** ich eine Vier-Tage-Woche.*',
        'Nicht verwechseln: *Ich **werde** Lehrerin.* (Ich habe das Ziel, Lehrerin zu sein.) Hier ist *werden* das Hauptverb.',
      ],
      en: 'The Futur I is werden (in position 2) plus an infinitive at the end: Ich werde nächstes Jahr umziehen. It is used for plans and promises, for predictions, and for assumptions about the present, often with wohl or wahrscheinlich (Er wird wohl im Proberaum sein = he is probably in the rehearsal room). In everyday German, the present tense plus a time expression is very common for the future too: Morgen fahre ich nach Berlin.',
    }),
    gap('t1-gap', ['Ich {{werde}} mehr Sport machen.', 'Lea {{wird}} nach Kanada gehen.', 'Wir {{werden}} im Sommer auf einem Festival spielen.', '{{Wirst}} du dich bald entscheiden?', 'Ihr {{werdet}} das bestimmt schaffen.'],
      { bank: ['werde', 'wird', 'werden', 'Wirst', 'werdet'], task: 'Ergänze die Form von „werden“.', taskEn: 'Fill in the correct form of werden.' }),
    sort('t1-sort', ['Plan / Vorsatz', 'Prognose', 'Vermutung'], [['Ich werde mehr Sport machen.', 0], ['Wir werden im Sommer heiraten.', 0], ['2040 werden mehr Menschen allein leben.', 1], ['Morgen wird es schneien.', 1], ['Felix wird wohl noch im Proberaum sein.', 2], ['Amara wird jetzt bestimmt schon schlafen.', 2]],
      { task: 'Plan, Prognose oder Vermutung?', taskEn: 'Is the Futur I sentence a plan, a prediction or an assumption?' }),
    phrases('t1-phr', 'Pläne und Ratschläge', {
      'Über Pläne sprechen': ['Ich habe mir vorgenommen, … zu …', 'Ich werde auf jeden Fall …', 'Ab nächstem Monat will ich …'],
      'Ratschläge geben': ['Du solltest …', 'An deiner Stelle würde ich …', 'Wie wäre es, wenn du …?'],
      'Auf Ratschläge reagieren': ['Das ist eine gute Idee.', 'Das probiere ich mal aus.', 'Ich weiß nicht, ob das bei mir funktioniert.'],
    }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Was erwarten Sie von der Zukunft?', 'sky', 15,
  ['über Erwartungen sprechen', 'eine Radiosendung verstehen', 'die n-Deklination'], [
    audio('t2-audio', 'Hören: Leipzig am Abend', [
      ['moderatorin', 'Guten Abend bei „Leipzig am Abend“! Heute fragen wir Sie: Was erwarten Sie von der Zukunft? Was wird in zehn Jahren anders sein? Unsere erste Anruferin ist Priya. Hallo!'],
      ['priya', 'Hallo! Also, ich bin eigentlich optimistisch. Ich arbeite in einer Werbeagentur, und ich glaube, die Arbeit wird flexibler werden. Mein Kollege arbeitet jetzt schon fast nur von zu Hause. Ich erwarte aber auch, dass die Firmen mehr Rücksicht auf Familien nehmen.'],
      ['moderatorin', 'Danke, Priya. Und jetzt ist Ben in der Leitung. Ben, wie sehen Sie das?'],
      ['ben', 'Hm, ehrlich gesagt mache ich mir Sorgen. Die Mieten in Leipzig steigen und steigen. Ich fürchte, in zehn Jahren wird sich ein normaler Student hier keine Wohnung mehr leisten können. Ich erwarte von der Politik, dass sie endlich etwas tut.'],
      ['moderatorin', 'Ein wichtiges Thema. Unsere dritte Anruferin ist Frau Baumann. Guten Abend!'],
      ['frauBaumann', 'Guten Abend! Ich bin ja nicht mehr die Jüngste, aber ich freue mich auf die Zukunft. Mein Enkel studiert Medizin, und ich bin sicher, er wird mal ein toller Arzt.'],
      ['frauBaumann', 'Und ich habe einen netten Nachbarn, einen Studenten aus Syrien. Zusammen mit dem Nachbarn plane ich im Frühling ein Gemüsebeet im Hof. Darauf freue ich mich schon sehr.'],
      ['moderatorin', 'Optimismus, Sorgen und ein Gemüsebeet. Die Leipzigerinnen und Leipziger haben klare Erwartungen. Nach den Nachrichten geht es weiter!'],
    ], { task: 'Hör die Radiosendung. Was erwarten die drei Anrufer von der Zukunft?', taskEn: 'Listen to the radio show. What do the three callers expect from the future? Listen for the n-declension: mein Kollege, ein Student, einen Nachbarn, einen Studenten.' }),
    mcq('t2-q1', 'Wie wird die Arbeit in Zukunft sein, glaubt Priya?', ['flexibler', 'stressiger', 'schlechter bezahlt'], 0),
    mcq('t2-q2', 'Was befürchtet Ben?', ['Er wird seinen Job verlieren.', 'Studenten werden sich keine Wohnung mehr leisten können.', 'Leipzig wird zu klein.'], 1),
    mcq('t2-q3', 'Was plant Frau Baumann mit ihrem Nachbarn?', ['eine Reise nach Syrien', 'ein Studium', 'ein Gemüsebeet im Hof'], 2),
    grammar('t2-gram', 'Die n-Deklination', {
      intro: 'Einige **maskuline** Nomen bekommen in allen Formen außer dem Nominativ Singular die Endung **-n** oder **-en**.',
      head: ['', 'der Kollege', 'der Mensch', 'der Nachbar', 'der Herr', 'der Name'],
      rows: [
        ['Nominativ', 'der Kollege', 'der Mensch', 'der Nachbar', 'der Herr', 'der Name'],
        ['Akkusativ', 'den Kolleg**en**', 'den Mensch**en**', 'den Nachbar**n**', 'den Herr**n**', 'den Name**n**'],
        ['Dativ', 'dem Kolleg**en**', 'dem Mensch**en**', 'dem Nachbar**n**', 'dem Herr**n**', 'dem Name**n**'],
        ['Genitiv', 'des Kolleg**en**', 'des Mensch**en**', 'des Nachbar**n**', 'des Herr**n**', 'des Name**ns**'],
        ['Plural', 'die Kolleg**en**', 'die Mensch**en**', 'die Nachbar**n**', 'die Herr**en**', 'die Name**n**'],
      ],
      notes: [
        'Maskuline Nomen auf **-e** (Personen und Tiere): *der Kollege, der Junge, der Kunde, der Löwe*.',
        'Maskuline Nomen auf **-ent, -ant, -ist, -oge**: *der Student, der Praktikant, der Journalist, der Biologe*.',
        'Einige andere: *der Mensch, der Nachbar, der Herr, der Bär*.',
        '*der Name, der Gedanke, der Buchstabe* haben im Genitiv **-ns**: *des Namens*.',
        'Auch im Brief: *Sehr geehrter Herr Vogt*, aber: *Ich schreibe Herr**n** Vogt.*',
      ],
      en: 'Some masculine nouns add -n or -en in every form except the nominative singular: der Kollege, den/dem/des Kollegen. This group includes masculine nouns for people and animals ending in -e (Kollege, Junge, Kunde), nouns ending in -ent, -ant, -ist (Student, Praktikant, Journalist) and a few others (Mensch, Nachbar, Herr). Name, Gedanke and Buchstabe have -ns in the genitive: des Namens. Note: der Herr, but den/dem Herrn, plural die Herren.',
    }),
    gap('t2-gap', ['Kennst du schon den neuen {{Kollegen}}?', 'Ich habe gestern mit unserem {{Nachbarn}} gesprochen.', 'Das ist das Fahrrad des {{Studenten}} aus dem zweiten Stock.', 'Guten Tag, {{Herr}} Vogt!', 'Nele schreibt {{Herrn}} Vogt einen Brief.', 'Ich kenne die Bedeutung des {{Namens}} nicht.'],
      { bank: ['Kollegen', 'Nachbarn', 'Studenten', 'Herr', 'Herrn', 'Namens'], task: 'Ergänze die Nomen in der richtigen Form.', taskEn: 'Fill in the nouns in the correct form. Watch out: some need -n or -en.' }),
    sort('t2-sort', ['mit n-Deklination', 'ohne n-Deklination'], [['der Kollege', 0], ['der Student', 0], ['der Mensch', 0], ['der Praktikant', 0], ['der Junge', 0], ['der Freund', 1], ['der Lehrer', 1], ['der Arzt', 1], ['der Tisch', 1]],
      { task: 'n-Deklination: ja oder nein?', taskEn: 'Does the noun follow the n-declension or not?' }),
    phrases('t2-phr', 'Über Erwartungen sprechen', {
      'Optimistisch': ['Ich bin sicher, dass …', 'Ich freue mich darauf, dass …', 'Ich hoffe, dass es bald …'],
      'Skeptisch': ['Ich fürchte, dass …', 'Ich mache mir Sorgen, weil …', 'Ich glaube nicht, dass …'],
      'Erwartungen an andere': ['Ich erwarte von der Politik, dass …', 'Von meiner Firma erwarte ich …', 'Wir erwarten, dass sich etwas ändert.'],
    }),
    compose('t2-comp', 'Ruf bei „Leipzig am Abend“ an: Was erwartest du von der Zukunft?', [
      ['Sag, wie du die Zukunft siehst.', 'Say how you see the future.', ['Ich', 'bin', 'eigentlich', 'optimistisch.']],
      ['Mach eine Prognose.', 'Make a prediction.', ['In zehn Jahren', 'werden', 'wir', 'weniger arbeiten.']],
      ['Sag, was du von anderen erwartest.', 'Say what you expect from others.', ['Ich erwarte', 'von der Stadt,', 'dass sie', 'mehr Wohnungen baut.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences for your call to the radio show.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Wohnen im Jahr 2040', 'lilac', 15,
  ['einen längeren Zeitungstext verstehen', 'etwas genauer beschreiben', 'Prüfungstraining: Lesen Teil 2'], [
    tip('t3-pt-tip', 'Prüfungstraining: Lesen Teil 2', 'In **Lesen Teil 2** liest du zwei Zeitungstexte. Zu jedem Text gibt es drei Aufgaben mit **a, b** oder **c**.\n\n1. Lies zuerst die Überschrift und den ersten Absatz: Worum geht es?\n2. Lies dann die Aufgaben. Die Aufgaben kommen in der gleichen Reihenfolge wie der Text.\n3. Such die passende Stelle und lies sie genau.\n4. Achtung: Falsche Antworten benutzen oft **Wörter aus dem Text**, sagen aber etwas anderes. Prüf immer die ganze Aussage.'),
    text('t3-pt-text', `**Wie werden wir 2040 wohnen?**
*Kleiner, gemeinsamer, grüner: Forscher wagen eine Prognose*

**Leipzig.** Die Städte wachsen, die Mieten steigen, und die Gesellschaft wird älter. Wie werden wir in dreizehn Jahren wohnen? Das Leipziger Institut für Stadtforschung hat dazu eine Studie veröffentlicht. Das Ergebnis: Unsere Wohnungen werden kleiner, aber wir werden mehr teilen.

„Schon heute ist in deutschen Großstädten fast jeder zweite Haushalt ein Single-Haushalt“, sagt Projektleiterin Dr. Katrin Seidel. „Viele dieser Menschen wünschen sich Nachbarn, mit denen sie etwas gemeinsam machen können.“ Seidel erwartet deshalb mehr Häuser mit Gemeinschaftsräumen: eine große Küche, in der man zusammen kocht, eine Werkstatt und ein Gästezimmer für alle. Die eigene Wohnung wird dafür kleiner, oft nur dreißig bis vierzig Quadratmeter.

Auch Mehrgenerationenhäuser werden beliebter. Dort helfen junge Familien den älteren Bewohnern beim Einkaufen, und die Senioren passen auf die Kinder auf. „Ältere Menschen, denen man im Alltag ein bisschen hilft, können viel länger in ihrer Wohnung bleiben“, erklärt Seidel.

Nicht alle Experten sind so optimistisch. Der Architekt Martin Kroll warnt: „Gemeinschaft funktioniert nur, wenn die Miete bezahlbar bleibt. Sonst werden in den Innenstädten bald nur noch Menschen wohnen, für die Geld keine Rolle spielt.“ Er fordert, dass die Städte mehr Grundstücke an Genossenschaften geben.

Und die Technik? Smarte Heizungen und Solaranlagen auf dem Dach werden 2040 normal sein, glauben beide Experten. Einen Roboter, der die Wohnung putzt, wird es aber wahrscheinlich nur in wenigen Haushalten geben. „Die Menschen wollen vor allem eins“, sagt Seidel, „ein Zuhause, in dem sie sich wohlfühlen.“`,
      { kicker: 'Prüfungstraining', title: 'Lesen Teil 2', task: 'Lies den Zeitungsartikel. Welche Antwort passt: a, b oder c?', taskEn: 'Read the newspaper article about housing in 2040. Choose a, b or c for each task. Notice the relative clauses: Nachbarn, mit denen …, eine Küche, in der …' }),
    mcq('t3-pt-q1', 'Laut der Studie …', ['a) werden die Wohnungen größer.', 'b) werden die Menschen mehr miteinander teilen.', 'c) werden weniger Menschen allein leben.'], 1, { why: 'Im Text steht: Unsere Wohnungen werden kleiner, aber wir werden mehr teilen.' }),
    mcq('t3-pt-q2', 'In Mehrgenerationenhäusern …', ['a) können ältere Menschen länger in ihrer Wohnung bleiben.', 'b) wohnen nur Familien mit kleinen Kindern.', 'c) kaufen die Senioren für die Familien ein.'], 0, { why: 'Die jungen Familien helfen beim Einkaufen. Deshalb können die Älteren länger in ihrer Wohnung bleiben.' }),
    mcq('t3-pt-q3', 'Martin Kroll meint, dass …', ['a) Gemeinschaftsräume zu teuer sind.', 'b) bald nur Architekten in der Innenstadt wohnen.', 'c) die Mieten bezahlbar bleiben müssen.'], 2, { why: 'Gemeinschaft funktioniert nur, wenn die Miete bezahlbar bleibt.' }),
    mcq('t3-pt-q4', 'Was werden 2040 nur wenige Haushalte haben?', ['a) eine Solaranlage', 'b) einen Putzroboter', 'c) eine smarte Heizung'], 1, { why: 'Einen Roboter, der die Wohnung putzt, wird es nur in wenigen Haushalten geben. Die anderen Dinge werden normal sein.' }),
    grammar('t3-gram', 'Relativsätze im Dativ und mit Präposition', {
      intro: 'Mit einem Relativsatz beschreibt man eine Person oder Sache **genauer**. Der Kasus des Relativpronomens kommt aus dem **Relativsatz**: vom Verb oder von der **Präposition**. Das Verb steht am **Ende**.',
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [
        ['Nominativ', 'der', 'das', 'die', 'die'],
        ['Akkusativ', 'den', 'das', 'die', 'die'],
        ['Dativ', '**dem**', '**dem**', '**der**', '**denen**'],
        ['mit + Dativ', '**mit dem**', '**mit dem**', '**mit der**', '**mit denen**'],
        ['für + Akkusativ', '**für den**', '**für das**', '**für die**', '**für die**'],
      ],
      notes: [
        'Verb mit Dativ: *helfen → Das ist der Nachbar, **dem** ich helfe.*',
        'Präposition + Relativpronomen: *Das ist der Nachbar, **mit dem** ich oft rede.* Die Präposition steht **vor** dem Relativpronomen.',
        'Plural Dativ heißt **denen**, nicht *den*: *die Freunde, **mit denen** ich Musik mache*.',
        'Präpositionen mit Akkusativ: *die Band, **für die** ich Songs schreibe. der Bus, **auf den** ich warte.*',
        'Bei Orten geht auch **wo**: *die Stadt, **in der** ich wohne = die Stadt, **wo** ich wohne*.',
      ],
      en: 'A relative clause describes a person or thing more precisely. The case of the relative pronoun depends on the relative clause itself: on its verb (helfen takes the dative: der Nachbar, dem ich helfe) or on its preposition (der Nachbar, mit dem ich rede). The preposition goes in front of the relative pronoun, and the verb goes to the end. The dative plural form is denen. For places, you can also use wo.',
    }),
    gap('t3-gap', ['Das ist die Küche, in {{der}} wir zusammen kochen.', 'Die Nachbarn, mit {{denen}} ich rede, sind sehr nett.', 'Herr Lehmann ist ein Mann, {{dem}} alle vertrauen.', 'Das ist das Projekt, für {{das}} wir Geld sammeln.', 'Die Kollegin, {{der}} ich geholfen habe, hat sich bedankt.'],
      { bank: ['der', 'denen', 'dem', 'das'], task: 'Ergänze das Relativpronomen.', taskEn: 'Fill in the relative pronoun. Ask: which case does the verb or preposition in the relative clause need?' }),
    phrases('t3-phr', 'Zukunftsvorstellungen beschreiben', {
      'Meine Vorstellung': ['Ich stelle mir vor, dass ich …', 'In zwanzig Jahren werde ich wahrscheinlich …', 'Mein Traum ist eine Wohnung, in der …'],
      'Genauer beschreiben': ['Ich möchte mit Menschen wohnen, mit denen …', 'Wichtig ist ein Ort, an dem …', 'Ich brauche Nachbarn, denen ich vertrauen kann.'],
      'Unsicherheit': ['Das weiß ich noch nicht genau.', 'Vielleicht wird es auch ganz anders.', 'Wer weiß, was kommt?'],
    }),
    compose('t3-comp', 'Schreib einen kurzen Text: Wie wirst du 2040 wohnen?', [
      ['Sag, wo du wohnen wirst.', 'Say where you will live.', ['2040', 'werde', 'ich', 'wahrscheinlich', 'in einer Genossenschaft wohnen.']],
      ['Beschreib die Wohnung genauer.', 'Describe the apartment more precisely.', ['Es gibt', 'eine Küche,', 'in der', 'alle zusammen kochen.']],
      ['Beschreib die Nachbarn.', 'Describe the neighbors.', ['Ich wünsche mir', 'Nachbarn,', 'mit denen', 'ich feiern kann.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences about how you imagine living in 2040.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 6: Große Pläne', 'rose', 12,
  ['eine Geschichte hören', 'ein Lied verstehen', 'über Lieder sprechen'], [
    text('wg-intro', 'Ein Samstagabend im Februar. Draußen ist es kalt, in der WG-Küche riecht es nach Kenjis Ramen. Felix kommt aufgeregt nach Hause, das Handy noch in der Hand. Amara sitzt mit ihrem Laptop am Tisch. Die Mail aus Hamburg ist immer noch offen. Und Nele hat einen Stapel Zettel vor sich, denn sie und Herr Lehmann haben eine Idee.',
      { kicker: 'Die Geschichte', en: 'A Saturday evening in February. It is cold outside, and the shared kitchen smells of Kenji’s ramen. Felix comes home excited, his phone still in his hand. Amara is sitting at the table with her laptop. The email from Hamburg is still open. And Nele has a pile of notes in front of her, because she and Herr Lehmann have an idea.' }),
    audio('wg-audio', 'Folge 6: Große Pläne', [
      ['felix', 'Leute! Ihr werdet es nicht glauben! Wir spielen im Sommer auf dem Kanalsommer-Festival!'],
      ['sofia', 'Was? Echt jetzt? Das ist doch das große Festival am Kanal, oder?'],
      ['felix', 'Genau. Die Veranstalterin hat heute angerufen. Ende Juli, an einem Samstagabend, fünfundvierzig Minuten auf der kleinen Bühne.'],
      ['kenji', 'Glückwunsch, Felix! Dann koche ich für die ganze Band. Aber habt ihr überhaupt genug Songs?'],
      ['felix', 'Eben nicht. Wir werden mindestens drei neue Songs schreiben müssen. Einen habe ich schon angefangen. Er heißt „Übermorgen“.'],
      ['nele', 'Super! Aber vergiss bitte nicht unser Treffen am Mittwochabend. Herr Lehmann und ich gründen nämlich eine Mieterinitiative.'],
      ['felix', 'Klar, Mittwochabend. Ich werde da sein, versprochen.'],
      ['sofia', 'Und du, Amara? Hast du dich schon entschieden? Wegen Hamburg, meine ich.'],
      ['amara', 'Nein, noch nicht. Die wollen bis Ende März eine Antwort. Ich habe eine Liste gemacht: Was spricht für Hamburg, was für Leipzig. Und die Liste ist auf beiden Seiten gleich lang.'],
      ['kenji', 'Du wirst schon die richtige Entscheidung treffen. Du hast ja noch ein bisschen Zeit.'],
      ['amara', 'Das sagt ihr alle. Aber ich erwarte halt von mir, dass ich es weiß. Und ich weiß es einfach nicht.'],
      ['felix', 'Weißt du was? Ich spiele euch mal den Refrain vor. Vielleicht hilft das ja.'],
    ], { task: 'Hör zu. Welche Pläne gibt es in der WG?', taskEn: 'Listen. What plans are there in the flat share? Veranstalterin = organizer. Bühne = stage.' }),
    text('wg-lied', `**Übermorgen** (Text und Musik: Felix / Die Fuchsbande)

*Strophe 1*
Der Kaffee ist kalt, die Straße noch leer,
ich zähle die Tage, es werden nicht mehr.
Ich weiß nicht genau, wohin ich will,
doch heute Nacht ist mein Kopf nicht still.

*Refrain*
Übermorgen wird alles neu,
übermorgen bleib ich mir treu.
Ich werde warten, ich werde gehn,
übermorgen werden wir sehn.

*Strophe 2*
Du sprichst von Hamburg, von Meer und Wind,
von all den Leuten, die dort sind.
Ich sag dir nicht, was richtig ist,
nur dass du hier zu Hause bist.

*Strophe 3*
Das Haus, in dem wir lachen,
die Freunde, mit denen wir Pläne machen,
die Nachbarn, denen wir vertrauen:
Auf die kann ich immer bauen.`,
      { kicker: 'Das Lied', title: 'Felix’ neuer Song', task: 'Lies den Songtext. Wovon handelt das Lied? Für wen ist die zweite Strophe?', taskEn: 'Read the song lyrics Felix wrote. What is the song about? Who is the second verse for? Find the Futur I and the relative clauses.', en: 'Verse 1: The coffee is cold, the street still empty, I count the days, they are not getting more. I do not know exactly where I want to go, but tonight my head is not quiet. Chorus: The day after tomorrow everything will be new, the day after tomorrow I will stay true to myself. I will wait, I will go, the day after tomorrow we will see. Verse 2: You talk about Hamburg, about the sea and the wind, about all the people who are there. I will not tell you what is right, only that you are at home here. Verse 3: The house in which we laugh, the friends with whom we make plans, the neighbors whom we trust: I can always count on them. (auf jemanden bauen = to count on someone)' }),
    audio('wg-gruppe', 'Folge 6: Fuchsbau bleibt!', [
      ['herrLehmann', 'Nu, Nele, komm rein. Ich habe Kaffee gekocht. Und die Liste mit den Namen von allen Mietern habe ich auch.'],
      ['nele', 'Super, Herr Lehmann. Wie viele Wohnungen sind es denn insgesamt?'],
      ['herrLehmann', 'Vierzehn. Und dazu kommt Kenjis Restaurant. Die meisten Leute kenne ich seit Jahren. Die Familie Schulz, mit der ich jeden Sommer im Hof grille, ist bestimmt dabei.'],
      ['nele', 'Und die Leute aus dem zweiten Stock?'],
      ['herrLehmann', 'Den Studenten, dem ich letzte Woche mit seinem Fahrrad geholfen habe, frage ich morgen. Der ist nett.'],
      ['nele', 'Gut. Wir brauchen noch einen Namen für die Gruppe. Was halten Sie von „Fuchsbau bleibt!“?'],
      ['herrLehmann', '„Fuchsbau bleibt!“ Das gefällt mir. Kurz und klar.'],
      ['nele', 'Sofia macht uns ein Logo und Flyer. Und am Mittwochabend ist das erste Treffen, unten bei Kenji im Fuchs & Yuzu.'],
      ['herrLehmann', 'Und was machen wir mit diesem Herrn Vogt? Dem habe ich schon zweimal geschrieben. Keine Antwort.'],
      ['nele', 'Wir werden ihm einen Brief schicken, den alle Mieter unterschreiben. Das ist etwas anderes als eine Mail von einem einzelnen Nachbarn.'],
      ['herrLehmann', 'Weißt du, Nele, 1989 habe ich etwas gelernt: Allein ist man klein. Zusammen kann man etwas verändern.'],
      ['nele', 'Genau. Ich habe das Gefühl, das wird ein spannendes Jahr.'],
    ], { task: 'Hör zu. Was planen Nele und Herr Lehmann?', taskEn: 'Listen. What are Nele and Herr Lehmann planning? Notice the relative clauses: die Familie Schulz, mit der …, den Studenten, dem …' }),
    mcq('wg-q1', 'Wann spielt Felix’ Band auf dem Festival?', ['am nächsten Mittwoch', 'Ende Juli', 'Ende März'], 1),
    mcq('wg-q2', 'Was muss die Band vorher machen?', ['einen neuen Sänger suchen', 'eine Bühne bauen', 'neue Songs schreiben'], 2),
    mcq('wg-q3', 'Warum hat sich Amara noch nicht entschieden?', ['Die Gründe für Hamburg und für Leipzig sind gleich stark.', 'Hamburg hat noch nicht geantwortet.', 'Sie will zuerst mit ihrer Familie sprechen.'], 0),
    mcq('wg-q4', 'Wovon handelt der Song „Übermorgen“?', ['von einer Reise nach Wien', 'vom Warten, von der Zukunft und von Freunden', 'von einem Streit in der Band'], 1),
    mcq('wg-q5', 'Wo findet das erste Treffen von „Fuchsbau bleibt!“ statt?', ['bei Herrn Lehmann', 'im Hof', 'in Kenjis Restaurant'], 2),
    mcq('wg-q6', 'Was will Nele an Herrn Vogt schicken?', ['einen Brief, den alle Mieter unterschreiben', 'eine Mail von Herrn Lehmann', 'einen Flyer mit dem Logo'], 0),
    phrases('wg-phr', 'Über Lieder sprechen', {
      'Worum geht es?': ['Das Lied handelt von …', 'In der ersten Strophe geht es um …', 'Der Sänger erzählt von …'],
      'Meine Meinung': ['Der Refrain gefällt mir, weil …', 'Die Melodie finde ich traurig / fröhlich.', 'Der Text berührt mich.'],
      'Musik und ich': ['Am liebsten höre ich …', 'Dieses Lied erinnert mich an …', 'Beim Kochen höre ich immer …'],
    }),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Relativsätze: welcher Kasus?', 'Zukunft: Präsens oder Futur?', 'n-Deklination'], [
    grammar('g-1', 'Relativsätze: Welcher Kasus?', {
      intro: 'Frag immer: Welchen Kasus braucht das **Verb** oder die **Präposition** im Relativsatz?',
      head: ['im Relativsatz', 'Kasus', 'Beispiel'],
      rows: [
        ['helfen, danken, vertrauen', 'Dativ', 'der Nachbar, **dem** ich helfe'],
        ['gehören, gefallen', 'Dativ', 'die Frau, **der** die Wohnung gehört'],
        ['sprechen mit, wohnen bei', 'Dativ', 'die Freunde, **mit denen** ich spreche'],
        ['träumen von, wohnen in', 'Dativ', 'das Haus, **von dem** ich träume'],
        ['warten auf, denken an', 'Akkusativ', 'der Bus, **auf den** ich warte'],
        ['sich freuen auf, spielen für', 'Akkusativ', 'das Festival, **auf das** ich mich freue'],
      ],
      notes: ['Das Relativpronomen hat das **Genus** und den **Numerus** vom Nomen davor, aber den **Kasus** aus dem Relativsatz.', 'Vor dem Relativsatz steht ein **Komma**. Das Verb steht am **Ende**: *die Freunde, mit denen ich Musik **mache***.'],
      en: 'The relative pronoun takes its gender and number from the noun it refers to, but its case from the relative clause: from the verb (helfen, danken, vertrauen, gehören take the dative) or from the preposition (mit, von, bei take the dative; auf, an, für take the accusative here). A comma comes before the relative clause, and its verb goes to the end. Careful with gefallen: the thing that pleases is the subject (nominative), the person is in the dative.',
    }),
    grammar('g-2', 'Zukunft: Präsens oder Futur I?', {
      head: ['Situation', 'meistens', 'Beispiel'],
      rows: [
        ['fester Plan mit Zeitangabe', 'Präsens', 'Am Mittwoch **treffen** wir uns.'],
        ['Vorsatz, Versprechen', 'Futur I', 'Ich **werde** da **sein**, versprochen.'],
        ['Prognose ohne genaue Zeit', 'Futur I', 'Die Mieten **werden** weiter **steigen**.'],
        ['Vermutung über jetzt', 'Futur I + wohl', 'Er **wird** wohl noch **schlafen**.'],
      ],
      notes: ['Wenn die Zeitangabe klar ist (*morgen, nächste Woche, im Juli*), reicht oft das Präsens.', 'Futur I klingt etwas fester und ernster: *Ich **werde** mit dem Rauchen **aufhören**!*'],
      en: 'For fixed plans with a time expression, German usually uses the present tense: Am Mittwoch treffen wir uns. The Futur I is typical for resolutions and promises, for predictions without an exact time, and for assumptions about the present with wohl. The Futur I also sounds more determined and serious.',
    }),
    mcq('g-q1', 'Das ist die Freundin, ___ ich oft schreibe.', ['die', 'der', 'dem'], 1, { why: 'schreiben + Dativ (jemandem schreiben), feminin: der.' }),
    mcq('g-q2', 'Das sind die Leute, mit ___ ich Musik mache.', ['den', 'die', 'denen'], 2, { why: 'mit + Dativ, Plural: denen.' }),
    mcq('g-q3', 'Der Bus, auf ___ ich warte, kommt nicht.', ['den', 'dem', 'der'], 0, { why: 'warten auf + Akkusativ, maskulin: den.' }),
    mcq('g-q4', 'Kennst du den neuen ___?', ['Student', 'Studenten', 'Studente'], 1, { why: 'n-Deklination: den Studenten.' }),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Strategie: Deutsch lernen mit Musik', 'Aussprache: ss oder ß'], [
    tip('u-tip', 'Strategie: Deutsch lernen mit Musik und Liedern', 'Lieder sind ein super Training für Aussprache, Rhythmus und Wortschatz. So geht’s:\n\n1. Such ein deutsches Lied, das dir **gefällt**. Pop, Rap, Schlager, egal!\n2. Hör es zuerst nur an. Welche Wörter verstehst du?\n3. Lies dann den **Songtext** und markiere neue Wörter.\n4. Sing mit! Fang mit dem **Refrain** an, denn der kommt immer wieder.\n5. Mach eine Playlist und hör sie beim Kochen, im Bus oder beim Sport. Was du oft hörst, bleibt im Kopf.'),
    audio('u-aus', 'Aussprache: ss oder ß?', [
      ['frauKlein', 'Heute geht es um ss und ß. Hör genau auf den Vokal davor. Ist er kurz oder lang?'],
      ['frauKlein', 'Nach einem kurzen Vokal schreibt man ss: der Fluss, der Kuss, essen, dass. Hör mal: Fluss. Kurz und schnell.'],
      ['frauKlein', 'Nach einem langen Vokal schreibt man ß: der Fuß, der Gruß, die Straße. Hör mal: Fuß. Das u ist lang.'],
      ['frauKlein', 'Und jetzt beides zusammen: Fluss und Fuß. Masse und Maße. Mein Tipp für Schokolade: in Maßen, nicht in Massen!'],
      ['frauKlein', 'Nach au und ei steht auch ß: draußen, heißen, weiß. Sprich nach: Ich weiß, dass du gern draußen isst.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. After a short vowel, German writes ss (Fluss, Masse). After a long vowel or after au/ei, it writes ß (Fuß, Maße, draußen). In Switzerland, people always write ss.' }),
    sort('u-sort', ['kurzer Vokal: ss', 'langer Vokal oder au/ei: ß'], [['der Fluss', 0], ['der Kuss', 0], ['die Masse', 0], ['essen', 0], ['dass', 0], ['der Fuß', 1], ['der Gruß', 1], ['die Maße', 1], ['die Straße', 1], ['draußen', 1]],
      { task: 'Kurz oder lang? Sprich die Wörter laut und sortiere.', taskEn: 'Short or long vowel? Say each word out loud and sort.' }),
    mcq('u-q1', 'Welcher Satz ist richtig geschrieben?', ['Ich weiss, das du kommst.', 'Ich weiß, dass du kommst.', 'Ich weis, daß du kommst.'], 1, { task: 'Was ist richtig?', taskEn: 'Which sentence is spelled correctly (standard German in Germany)?', why: 'weiß: langer Diphthong ei → ß. dass: kurzer Vokal → ss.' }),
    gap('u-gap', ['Ich ziehe nächstes Jahr um. → Ich {{werde}} nächstes Jahr {{umziehen}}.', 'Felix schreibt neue Songs. → Felix {{wird}} neue Songs {{schreiben}}.', 'Wir treffen uns am Mittwoch. → Wir {{werden}} uns am Mittwoch {{treffen}}.'],
      { task: 'Schreib die Sätze im Futur I.', taskEn: 'Rewrite the sentences in the Futur I: werden in position 2, infinitive at the end.' }),
    order('u-order', ['Im Juli', 'wird', 'die Band', 'auf einem Festival spielen.'], { task: 'Bau den Satz im Futur I.', taskEn: 'Build the sentence in the Futur I.' }),
    compose('u-comp', 'Schreib über deinen wichtigsten Vorsatz für dieses Jahr.', [
      ['Nenne deinen Vorsatz.', 'Name your resolution.', ['Dieses Jahr', 'werde', 'ich', 'jeden Tag Deutsch lernen.']],
      ['Sag, wie du es machen willst.', 'Say how you will do it.', ['Ich höre', 'jeden Morgen', 'ein deutsches Lied.']],
      ['Sag, wer dir hilft.', 'Say who helps you.', ['Mein Kollege,', 'mit dem', 'ich lerne,', 'motiviert mich.']],
    ], { task: 'Bau deinen Text.', taskEn: 'Build a short text about your resolution.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 12,
  ['Wörter wiederholen', 'den Stand einschätzen', 'Plattform 2: Kapitel 4 bis 6'], [
    cards('w-cards', [
      ['der Vorsatz', 'etwas, das man sich fest vornimmt', 'resolution'], ['sich etwas vornehmen', 'planen, etwas zu tun', 'to resolve to do something'], ['aufhören (mit)', 'etwas nicht mehr machen', 'to stop, to quit'],
      ['durchhalten', 'nicht aufgeben, weitermachen', 'to stick with it'], ['der Rückschlag', 'wenn es plötzlich schlechter läuft', 'setback'], ['die Prognose', 'eine Aussage über die Zukunft', 'forecast'],
      ['die Erwartung', 'was man glaubt, dass es kommt', 'expectation'], ['befürchten', 'Angst haben, dass etwas passiert', 'to fear'], ['bezahlbar', 'nicht zu teuer', 'affordable'],
      ['die Gemeinschaft', 'Menschen, die etwas zusammen machen', 'community'], ['der Auftritt', 'wenn eine Band vor Publikum spielt', 'gig, performance'], ['der Refrain', 'der Teil vom Lied, der wiederkommt', 'chorus'],
    ]),
    phrases('w-phr', 'Über die Zukunft sprechen', {
      'Pläne': ['Ich werde …', 'Ich habe vor, … zu …', 'Nächstes Jahr möchte ich …'],
      'Prognosen': ['In zehn Jahren wird …', 'Ich glaube, dass bald …', 'Wahrscheinlich werden wir …'],
      'Vermutungen': ['Er wird wohl …', 'Das wird schon stimmen.', 'Sie wird bestimmt …'],
    }),
    match('w-match', [['der Laufschuh', 'Damit geht man joggen.'], ['die Zigarette', 'Damit will Tomasz aufhören.'], ['das Sparschwein', 'Hier hinein steckt man Münzen.'], ['der Kalender', 'Hier schreibt man Termine und Pläne hinein.'], ['die Bühne', 'Hier steht die Band beim Konzert.'], ['das Mikrofon', 'Hier hinein singt man.'], ['die Gitarre', 'Ein Instrument mit sechs Saiten.'], ['die Solaranlage', 'Sie macht auf dem Dach Strom aus Sonne.'], ['der Kopfhörer', 'Damit hört man Musik, ohne andere zu stören.']],
      { task: 'Was ist was?', taskEn: 'Match each object to its description.' }),
    gap('w-gap', ['Felix {{wird}} im Juli auf dem Festival spielen.', 'Nele schreibt einen Brief an {{Herrn}} Vogt.', 'Herr Lehmann ist ein Nachbar, {{dem}} alle vertrauen.', 'Das sind die Freunde, mit {{denen}} Sofia tanzen geht.'],
      { bank: ['wird', 'Herrn', 'dem', 'denen'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
    checklist('w-check', ['Ich kann über Pläne und Vorsätze sprechen.', 'Ich kann Ratschläge verstehen und geben.', 'Ich kann einen längeren Zeitungstext verstehen.', 'Ich kann mit dem Futur I Pläne, Prognosen und Vermutungen ausdrücken.', 'Ich kann Personen und Dinge mit Relativsätzen genauer beschreiben.', 'Ich kann über Erwartungen sprechen.', 'Ich kann ein Lied verstehen und darüber sprechen.']),
    text('w-pf-intro', '**Plattform 2: Kapitel 4 bis 6.** Zeit für eine kurze Wiederholung: Konjunktiv II und irreale Bedingungen, Pronominaladverbien, Komparativ vor Nomen, um … zu und damit, das Futur I, die n-Deklination und Relativsätze.',
      { kicker: 'Plattform 2', en: 'Plattform 2: a short review of chapters 4 to 6.' }),
    mcq('w-pf-q1', 'Wenn ich mehr Zeit ___, würde ich im Hofgarten helfen.', ['habe', 'hätte', 'hatte'], 1, { task: 'Irreale Bedingung: Was passt?', taskEn: 'Unreal condition: which form fits?', why: 'Irreale Bedingung: wenn + Konjunktiv II (hätte), Hauptsatz mit würde.' }),
    mcq('w-pf-q2', 'An deiner Stelle ___ ich das Angebot aus Hamburg genau prüfen.', ['würde', 'werde', 'wurde'], 0, { why: 'Ratschlag mit Konjunktiv II: An deiner Stelle würde ich …' }),
    mcq('w-pf-q3', 'Sofia freut sich auf den Frühling. Nele freut sich auch ___.', ['daran', 'dafür', 'darauf'], 2, { why: 'sich freuen auf → darauf.' }),
    gap('w-pf-gap', ['In Hamburg hätte Amara ein {{größeres}} Team. (groß)', 'Kenji wünscht sich eine {{ruhigere}} Woche. (ruhig)', 'Sofia sucht einen {{billigeren}} Laptop. (billig)'],
      { task: 'Komparativ vor dem Nomen: Ergänze.', taskEn: 'Fill in the comparative form before the noun. It needs an adjective ending too.' }),
    mcq('w-pf-q4', 'Sofia sammelt Essen von Kenji, ___ nichts weggeworfen wird.', ['um', 'damit', 'weil'], 1, { why: 'Zwei verschiedene Subjekte (Sofia, nichts): damit. um … zu geht nur mit dem gleichen Subjekt.' }),
    mcq('w-pf-q5', 'Herr Lehmann hilft dem ___ mit dem Fahrrad.', ['Student', 'Studenten', 'Students'], 1, { why: 'n-Deklination: dem Studenten.' }),
    order('w-pf-order', ['Das ist', 'die Frau,', 'mit der', 'Amara', 'arbeitet.'], { task: 'Bau den Relativsatz.', taskEn: 'Build the sentence with a relative clause. The verb goes to the end.' }),
  ]);

export const b1k6: Chapter = {
  id: 'b1-k6', number: 6, title: 'Blick nach vorn', theme: 'Pläne und Vorsätze, Zukunftsvorstellungen, Erwartungen, ein Lied',
  grammar: 'Futur I (werden + Infinitiv: Plan, Prognose, Vermutung). n-Deklination (der Kollege, den Kollegen). Relativsätze im Dativ (dem, der, dem, denen) und mit Präposition (mit dem, für die).',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['b1k6-sprint', 'b1k6-memory', 'b1k6-satzbau', 'b1k6-artikel'],
  exam: [
    x(1, mcq('x1', 'Nächstes Jahr ___ ich nach Hamburg ziehen.', ['werde', 'wird', 'würde'], 0)),
    x(1, mcq('x2', 'Felix ist nicht da. Er ___ wohl im Proberaum sein.', ['werden', 'wird', 'wurde'], 1)),
    x(1, mcq('x3', 'Ich helfe meinem ___ bei der Präsentation.', ['Kollege', 'Kollegs', 'Kollegen'], 2)),
    x(3, gap('x4', ['Das ist die Nachbarin, {{der}} ich oft helfe.', 'Der Kollege, {{dem}} ich geschrieben habe, antwortet nicht.', 'Die Kinder, {{denen}} Lina vorliest, sind sieben.'], { task: 'Ergänze das Relativpronomen im Dativ.', taskEn: 'Fill in the relative pronoun in the dative.' })),
    x(3, gap('x5', ['Das ist der Freund, mit {{dem}} ich Musik mache.', 'Die Stadt, in {{der}} ich wohne, ist schön.', 'Die Leute, für {{die}} wir spielen, tanzen.'], { task: 'Ergänze das Relativpronomen nach der Präposition.', taskEn: 'Fill in the relative pronoun after the preposition.' })),
    x(1, mcq('x6', 'Was wird Jonas im April machen?', ['mit seinem Bruder nach Norwegen fahren', 'mit der Fahrschule anfangen', 'einen Praktikanten einstellen'], 1),
      audio('x-st1', 'Hören: Pläne für das Jahr', [
        ['jonas', 'Sag mal, Elif, hast du eigentlich gute Vorsätze für dieses Jahr?'],
        ['elif', 'Ach, eigentlich nicht. Ich nehme mir jedes Jahr etwas vor, und im Februar ist alles vergessen. Und du?'],
        ['jonas', 'Ich werde endlich meinen Führerschein machen. Ich habe mich schon bei einer Fahrschule angemeldet. Im April geht es los.'],
        ['elif', 'Nicht schlecht! Und was hast du im Sommer vor?'],
        ['jonas', 'Im August fahre ich mit meinem Bruder nach Norwegen. Mit dem Auto, wenn alles klappt.'],
        ['elif', 'Dann musst du aber vorher die Prüfung schaffen!'],
        ['jonas', 'Eben. Deshalb lerne ich jetzt schon jeden Abend Verkehrsregeln. Und du? Wirst du in deiner Praxis noch jemanden einstellen?'],
        ['elif', 'Ja, wahrscheinlich einen Praktikanten. Die Arbeit wird mir einfach zu viel.'],
      ])),
    x(1, mcq('x7', 'Wen wird Elif wahrscheinlich einstellen? (Hörtext oben)', ['ihren Bruder', 'eine Ärztin', 'einen Praktikanten'], 2)),
    x(1, mcq('x8', 'Wer muss keinen Eintritt bezahlen?', ['Schüler und Studenten', 'alle Gäste', 'Rentnerinnen und Rentner'], 0),
      text('x-st2', '**Vortrag in der Stadtbibliothek: Leipzig 2050**\nWie werden wir in Zukunft leben, arbeiten und uns bewegen? Die Stadtplanerin Dr. Mira Hoffmann stellt Ideen vor, über die man in Leipzig gerade diskutiert: autofreie Straßen, mehr Grün und neue Wohnformen.\nWann: Donnerstag, 18. Februar 2027, 19 Uhr\nWo: Stadtbibliothek, Saal im 1. Stock\nEintritt: 5 Euro, für Schüler und Studenten frei. Bitte melden Sie sich bis zum 15. Februar online an.\nIm Anschluss gibt es eine Diskussion, bei der alle Gäste Fragen stellen können.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was passiert nach dem Vortrag? (Text oben)', ['ein Konzert', 'eine Diskussion', 'eine Stadtführung'], 1)),
    x(2, order('x10', ['Ich', 'werde', 'nächstes Jahr', 'mehr Sport', 'machen.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' })),
    x(1, mcq('x11', 'Dein Freund will mit dem Rauchen aufhören. Was rätst du ihm?', ['Du wirst gestern aufhören.', 'Du solltest mit kleinen Schritten anfangen.', 'Hör bloß nie auf!'], 1)),
    x(1, mcq('x12', 'Wie schreibt man das Wort in Deutschland richtig?', ['die Strase', 'die Straße', 'die Strasse'], 1)),
  ],
};

export const gamesB1k6: GameDef[] = [
  {
    id: 'b1k6-sprint', engine: 'sprint', title: 'Relativ-Sprint', blurb: 'dem, der, denen? 60 Sekunden!', skill: 'Relativpronomen im Dativ und mit Präposition', tone: 'mint', chapter: 6, emoji: '⚡',
    rules: 'Du siehst einen Relativsatz mit Lücke. Tippe auf das richtige Relativpronomen.', label: 'Relativpronomen',
    items: [
      { q: 'der Nachbar, ___ ich helfe', a: 'dem', wrong: ['den', 'der'] }, { q: 'die Frau, ___ ich danke', a: 'der', wrong: ['die', 'dem'] },
      { q: 'das Kind, ___ ich vorlese', a: 'dem', wrong: ['das', 'den'] }, { q: 'die Freunde, ___ ich vertraue', a: 'denen', wrong: ['den', 'die'] },
      { q: 'der Kollege, mit ___ ich arbeite', a: 'dem', wrong: ['den', 'der'] }, { q: 'die Stadt, in ___ ich wohne', a: 'der', wrong: ['die', 'denen'] },
      { q: 'die Leute, mit ___ ich spiele', a: 'denen', wrong: ['den', 'die'] }, { q: 'der Bus, auf ___ ich warte', a: 'den', wrong: ['dem', 'der'] },
      { q: 'die Band, für ___ ich schreibe', a: 'die', wrong: ['der', 'denen'] }, { q: 'das Haus, von ___ ich träume', a: 'dem', wrong: ['das', 'den'] },
      { q: 'die Nachbarn, ___ das Haus gefällt', a: 'denen', wrong: ['die', 'den'] }, { q: 'das Festival, auf ___ ich mich freue', a: 'das', wrong: ['dem', 'den'] },
    ],
  },
  {
    id: 'b1k6-memory', engine: 'memory', title: 'Vorsatz-Memory', blurb: 'Was gehört zusammen? Finde die Vorsätze.', skill: 'Vorsätze', tone: 'lilac', chapter: 6, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Satzanfang und das passende Verb.', kinds: ['Was?', 'Verb'],
    pairs: [['mit dem Rauchen', 'aufhören'], ['mehr Sport', 'treiben'], ['gesünder', 'essen'], ['jeden Tag früher', 'aufstehen'], ['eine neue Sprache', 'lernen'], ['mehr Zeit mit Freunden', 'verbringen'], ['Geld für die Reise', 'sparen'], ['ein Instrument', 'spielen'], ['die Oma öfter', 'anrufen'], ['bis zum Ende', 'durchhalten']],
  },
  {
    id: 'b1k6-satzbau', engine: 'satzbau', title: 'Zukunfts-Baukasten', blurb: 'werden auf 2, Infinitiv ans Ende!', skill: 'Futur I und Relativsätze', tone: 'sky', chapter: 6, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Im Futur I steht werden auf Position 2 und der Infinitiv am Ende. Im Relativsatz steht das Verb am Ende.',
    sentences: [
      { parts: ['Ich', 'werde', 'nächstes Jahr', 'umziehen.'], hint: 'Futur I: Plan' },
      { parts: ['Im Juli', 'wird', 'die Band', 'auf dem Festival spielen.'], hint: 'Futur I: Zeitangabe vorne' },
      { parts: ['2040', 'werden', 'die Wohnungen', 'kleiner', 'sein.'], hint: 'Futur I: Prognose' },
      { parts: ['Felix', 'wird', 'wohl', 'im Proberaum', 'sein.'], hint: 'Futur I: Vermutung' },
      { parts: ['Das ist', 'der Nachbar,', 'mit dem', 'ich', 'rede.'], hint: 'Relativsatz mit Präposition' },
      { parts: ['Herr Lehmann', 'hilft', 'dem', 'Studenten.'], hint: 'n-Deklination' },
      { parts: ['Das sind', 'die Freunde,', 'denen', 'ich', 'vertraue.'], hint: 'Relativsatz im Dativ' },
      { parts: ['Am Mittwoch', 'treffen', 'wir', 'uns', 'bei Kenji.'], hint: 'Präsens + Zeitangabe' },
    ],
  },
  {
    id: 'b1k6-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Zukunft, Pläne und Musik.', skill: 'Artikel', tone: 'rose', chapter: 6, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Vorsatz, die Prognose, die Erwartung, das Festival, der Auftritt, die Bühne, das Lied, der Refrain, die Strophe, der Kollege, der Nachbar, die Gemeinschaft, das Mehrgenerationenhaus, die Zukunft, der Rückschlag, die Studie, das Grundstück, die Genossenschaft'),
  },
];
