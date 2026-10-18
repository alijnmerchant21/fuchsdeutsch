import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// B1 Kapitel 9: Kunststücke. Kunst, Museum, Theater, Gesang.
// Grammar: Stellung von nicht im Satz, Adjektive ohne Artikel (Nominativ, Akkusativ, Dativ).
// Aussprache: Vokal am Wortanfang (Knacklaut). Strategie: improvisieren. Landeskunde: Kunst in Innsbruck, Volkslieder.
// Story: Felix’ Lied „Unser Haus“ geht viral, Theaterabend von Linas Klasse (Mai 2027). Plattform 3 (K7 bis K9) am Ende.

export const glossaryB1k9: Record<string, GlossaryEntry> = {
  Kunststück: { de: 'Etwas, das man mit viel Talent oder Geschick macht, zum Beispiel ein Trick im Zirkus.', en: 'feat, trick (here also a pun on Kunst, art)' },
  Ausstellung: { de: 'Ein Museum oder eine Galerie zeigt dort Bilder oder andere Kunstwerke.', en: 'exhibition' },
  Gemälde: { de: 'Ein Bild, das jemand mit Farbe gemalt hat.', en: 'painting' },
  Bühne: { de: 'Der Platz im Theater, auf dem die Schauspieler spielen oder die Musiker auftreten.', en: 'stage' },
  Improvisation: { de: 'Man spielt oder spricht spontan, ohne Text und ohne Vorbereitung.', en: 'improvisation, improv' },
  Volkslied: { de: 'Ein altes, einfaches Lied, das viele Menschen kennen. Oft weiß niemand mehr, wer es geschrieben hat.', en: 'folk song' },
  Chor: { de: 'Eine Gruppe von Menschen, die zusammen singt.', en: 'choir' },
  Anzeige: { de: 'Ein kurzer Text in der Zeitung oder im Internet: Man sucht oder bietet etwas.', en: 'ad, classified ad' },
  Kursprogramm: { de: 'Eine Liste mit Kursen, zum Beispiel von einer Volkshochschule oder einer Kunstschule.', en: 'course catalog' },
  verneinen: { de: 'Sagen, dass etwas nicht so ist, zum Beispiel mit nicht oder kein.', en: 'to negate, to say no' },
  viral: { de: 'Ein Video ist viral, wenn sehr viele Menschen es in kurzer Zeit sehen und teilen.', en: 'viral' },
  Strophe: { de: 'Ein Teil von einem Lied oder Gedicht. Nach der Strophe kommt oft der Refrain.', en: 'verse, stanza' },
  Refrain: { de: 'Der Teil von einem Lied, den man mehrmals singt.', en: 'chorus, refrain' },
  Publikum: { de: 'Alle Menschen, die bei einer Vorstellung oder einem Konzert zuschauen und zuhören.', en: 'audience' },
  Theaterstück: { de: 'Eine Geschichte, die Schauspieler auf der Bühne spielen.', en: 'play (theater)' },
  Knacklaut: { de: 'Ein ganz kurzer, harter Stopp vor einem Vokal, zum Beispiel in be|enden.', en: 'glottal stop' },
  Volkskunst: { de: 'Traditionelle Kunst von einfachen Leuten aus einer Region, zum Beispiel Möbel, Trachten oder Krippen.', en: 'folk art' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Bühne frei!', 'butter', 8,
  ['das Kapitel kennenlernen', 'Wörter rund um Kunst sammeln'], [
    overview('e-over', 'Kapitel 9: Kunststücke',
      'Mai in Leipzig. Felix hat ein Lied über den Fuchsbau geschrieben, und plötzlich kennt es halb Deutschland. Ein echtes [[Kunststück]]! In Kapitel 9 geht es um Kunst: um Bilder im Museum, um Theater und um Musik. Du liest einen Zeitungsartikel über ein [[viral|virales]] Video und gibst die Informationen weiter. Du lernst, wie man mit *nicht* richtig [[verneinen|verneint]], und du sprichst über ein [[Gemälde]] in einer [[Ausstellung]].\n\nDu verstehst ein [[Kursprogramm]] und schreibst eine kurze [[Anzeige]]: *Junge Band sucht neue Sängerin.* Dafür brauchst du Adjektive ohne Artikel. Du liest ein Interview über [[Improvisation]], hörst eine Impro-Geschichte und sprichst über das Singen, über [[Chor|Chöre]] und alte [[Volkslied|Volkslieder]]. In der WG wird Felix’ Lied ein Hit, und Linas Klasse steht mit einem [[Theaterstück]] auf der [[Bühne]].',
      'In this chapter you talk about art, museums, theater and singing. You read a newspaper article about a viral video and pass the information on, you ask follow-up questions, and you learn where nicht goes in a sentence: as far back as possible when it negates the whole sentence, or directly before the word it negates. You describe paintings and say how you like them, read a course catalog and write short classified ads, which use adjectives without an article (frischer Kaffee, gute Musik). You also read an interview about improv theater, hear an improvised scene, practice improvising, and learn about folk songs and art in Innsbruck. In the story, Felix’s song “Unser Haus” goes viral and Lina’s class performs a play about the neighborhood. The chapter ends with Plattform 3, a review of chapters 7 to 9.',
      ['Informationen aus der Zeitung weitergeben und nachfragen', 'etwas verneinen (Stellung von nicht)', 'über Bilder sprechen und sagen, wie etwas gefällt', 'Kursprogramme und Anzeigen verstehen und schreiben', 'ein Interview und eine Impro-Geschichte verstehen', 'über Singen und Volkslieder sprechen']),
    match('e-match', [['das Museum', '🏛️'], ['das Theater', '🎭'], ['das Konzert', '🎤'], ['die Malerei', '🎨'], ['der Film', '🎬'], ['das Ballett', '🩰'], ['die Fotografie', '📷'], ['die Architektur', '🏗️']],
      { task: 'Welches Wort passt zum Bild?', taskEn: 'Match each kind of art to the picture.' }),
    sort('e-sort', ['Museum', 'Theater', 'Musik'], [['ein Gemälde ansehen', 0], ['eine Ausstellung besuchen', 0], ['auf der Bühne stehen', 1], ['eine Rolle spielen', 1], ['im Chor singen', 2], ['ein Lied schreiben', 2]],
      { task: 'Wo macht man das? Sortiere.', taskEn: 'Where do you do this: in a museum, at the theater or in music? Sort.' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Ein Lied aus dem Hinterhof', 'mint', 15,
  ['einen Zeitungsartikel verstehen', 'Informationen weitergeben und nachfragen', 'die Stellung von nicht'], [
    text('t1-text', `**Plagwitz singt: Ein Lied aus dem Hinterhof wird zum Hit**
*Stadtteilzeitung Westwind, 14. Mai 2027*

Drei Minuten, eine Gitarre, ein alter Hinterhof: Mehr braucht ein Hit heute offenbar nicht. Das Video zum Lied „Unser Haus“ hat Felix Huber, Sänger der Leipziger Band „Die Fuchsbande“, am 2. Mai ins Netz gestellt. Innerhalb einer Woche haben es über 400 000 Menschen gesehen.

Im Lied geht es um ein Haus in der Karl-Heine-Straße, in dem der gebürtige Wiener seit Jahren wohnt. Eine Münchner Immobilienfirma hat das Gebäude im November gekauft und plant eine teure Modernisierung. Viele Mieter haben Angst, dass sie danach ausziehen müssen. „Ich wollte kein Protestlied schreiben“, sagt Huber. „Ich wollte nur erzählen, wer hier wohnt.“

Gefilmt hat das Video nicht der Musiker selbst, sondern seine Mitbewohnerin Sofia Ruiz, eine Designerin aus Brasilien. Profis waren nicht dabei, und teuer war die Produktion auch nicht. „Wir hatten ein Handy und viel Kaffee“, lacht sie.

Die Firma Elbstein Immobilien wollte das Video nicht kommentieren. Die Mietergruppe „Fuchsbau bleibt!“ freut sich dagegen über die Aufmerksamkeit. Am Samstag, dem 22. Mai, spielt die Fuchsbande das Lied live: beim Theaterabend der Grundschule Plagwitz in der Aula. Der Eintritt ist frei.`,
      { kicker: 'Lesen', title: 'Aus der Zeitung', task: 'Lies den Zeitungsartikel. Was ist passiert?', taskEn: 'Read the newspaper article. What happened? Notice all the sentences with nicht.' }),
    mcq('t1-q1', 'Wie viele Menschen haben das Video in der ersten Woche gesehen?', ['über 40 000', 'über 400 000', 'über vier Millionen'], 1),
    mcq('t1-q2', 'Wer hat das Video gefilmt?', ['Felix selbst', 'ein Team von Profis', 'Sofia, seine Mitbewohnerin'], 2),
    mcq('t1-q3', 'Was sagt die Firma Elbstein zum Video?', ['Sie findet es gut.', 'Sie sagt nichts dazu.', 'Sie will das Lied verbieten.'], 1),
    mcq('t1-q4', 'Ein Freund sagt: „Das Video hat 40 000 Klicks.“ Du hast den Artikel gelesen. Was antwortest du?', ['Nein, das stimmt so nicht. Im Artikel steht: über 400 000.', 'Ja, genau, das habe ich auch gelesen.', 'Das weiß ich nicht, ich lese keine Zeitung.'], 0,
      { task: 'Gib die Information richtig weiter.', taskEn: 'Pass on the information correctly and correct your friend.' }),
    phrases('t1-phr', 'Informationen weitergeben und nachfragen', {
      'Informationen weitergeben': ['In der Zeitung steht, dass …', 'Laut dem Artikel …', 'Ich habe gelesen, dass …'],
      'Nachfragen': ['Wie bitte? Wie viele waren das?', 'Habe ich das richtig verstanden: …?', 'Was meinst du genau mit …?'],
      'Verneinen und korrigieren': ['Nein, das stimmt so nicht.', 'Das hat er so nicht gesagt.', 'Nicht Felix, sondern Sofia hat das Video gefilmt.'],
    }),
    grammar('t1-gram', 'Die Stellung von nicht', {
      intro: '**nicht** verneint entweder den **ganzen Satz** oder nur **einen Teil**. Verneint es den ganzen Satz, steht *nicht* möglichst weit **hinten**. Verneint es nur einen Teil, steht es **direkt vor** diesem Teil.',
      head: ['nicht verneint …', 'Position', 'Beispiel'],
      rows: [
        ['den ganzen Satz', 'am Ende', 'Ich komme heute **nicht**.'],
        ['den ganzen Satz', 'nach dem Akkusativ-Objekt', 'Ich kenne den Sänger **nicht**.'],
        ['den ganzen Satz', 'vor dem 2. Verbteil', 'Ich habe das Video **nicht** gesehen.'],
        ['den ganzen Satz', 'vor Präpositional- und Ortsergänzungen', 'Wir gehen **nicht** ins Museum.'],
        ['den ganzen Satz', 'vor dem Adjektiv nach sein oder werden', 'Das Bild ist **nicht** teuer.'],
        ['nur einen Teil', 'direkt vor dem Teil, oft mit sondern', 'Ich komme **nicht** heute, sondern morgen.'],
      ],
      notes: [
        'Zeitangaben wie *heute, morgen, am Freitag* stehen meistens **vor** *nicht*: *Ich komme heute **nicht**.*',
        '2. Verbteil = Infinitiv, Partizip oder trennbare Vorsilbe: *Er kann **nicht** kommen. Sie ruft **nicht** an.*',
        'Verneint *nicht* nur einen Teil, sagt man mit **sondern**, was richtig ist: ***Nicht** Felix hat das Video gefilmt, **sondern** Sofia.*',
        'Nomen mit *ein* oder ohne Artikel verneint man mit **kein**: *Ich habe **keine** Zeit.*',
      ],
      en: 'nicht can negate a whole sentence or just one part. When it negates the whole sentence, it goes as far back as possible: at the very end or after a direct object, but before the second verb part (infinitive, participle, separable prefix), before prepositional or place complements, and before an adjective after sein. Time words like heute usually come before nicht. When nicht negates only one part, it goes directly before that part, often with sondern (but rather) to give the correct information. Nouns with ein or without an article are negated with kein.',
    }),
    sort('t1-sort', ['ganzer Satz', 'nur ein Teil'], [['Felix kommt heute nicht.', 0], ['Ich habe den Artikel nicht gelesen.', 0], ['Elbstein will das Video nicht kommentieren.', 0], ['Nicht Felix, sondern Sofia hat gefilmt.', 1], ['Das Konzert ist nicht am Freitag, sondern am Samstag.', 1], ['Ich trinke nicht Kaffee, sondern Tee.', 1]],
      { task: 'Was verneint nicht: den ganzen Satz oder nur einen Teil?', taskEn: 'Does nicht negate the whole sentence or only one part? Sort.' }),
    gap('t1-gap', ['Felix hat das Lied {{nicht}} für das Internet geschrieben.', 'Profis waren {{nicht}} dabei.', 'Im Video gibt es {{keine}} teuren Effekte.', 'Sofia hatte {{kein}} Stativ, nur ein Handy.', 'Die Firma will das Video {{nicht}} kommentieren.'],
      { bank: ['nicht', 'keine', 'kein'], task: 'nicht oder kein? Ergänze.', taskEn: 'Fill in nicht or a form of kein. Use kein before nouns with ein or without an article.' }),
    order('t1-order', ['Elbstein', 'will', 'das Video', 'nicht', 'kommentieren.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence. nicht comes before the infinitive at the end.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Wie gefällt dir das Bild?', 'sky', 15,
  ['über Bilder sprechen', 'sagen, wie einem etwas gefällt', 'ein Kursprogramm verstehen', 'Adjektive ohne Artikel'], [
    audio('t2-audio', 'Hören: Im Museum', [
      ['sofia', 'Lina, schau mal, das große Bild da hinten! Das muss ich mir genauer ansehen.'],
      ['lina', 'Ach, das kenne ich. Das hängt schon ewig hier. Wie gefällt es dir?'],
      ['sofia', 'Ehrlich? Am Anfang fand ich es ein bisschen dunkel. Aber jetzt gefällt es mir richtig gut. Im Vordergrund sitzen Leute an einem langen Tisch, und im Hintergrund sieht man eine Stadt im Nebel.'],
      ['lina', 'Mir gefällt es nicht so. Die Farben sind mir zu traurig. Grau, Braun, ein bisschen dunkles Grün … Das ist halt nicht mein Geschmack.'],
      ['sofia', 'Aber guck mal: Links oben ist ein kleines rotes Fenster. Das ist das einzige helle Licht im ganzen Bild.'],
      ['lina', 'Stimmt, das habe ich noch gar nicht gesehen! Was das wohl bedeutet?'],
      ['sofia', 'Vielleicht Hoffnung? Für mich sieht der Tisch ein bisschen aus wie unsere Küche, wenn alle zusammen essen.'],
      ['lina', 'Du siehst echt überall den Fuchsbau! Komm, im nächsten Raum ist moderne Kunst. Da gibt es eine Installation mit alten Radios.'],
      ['sofia', 'Alte Radios? Das klingt spannend. Felix würde das bestimmt lieben.'],
      ['lina', 'Bestimmt. Übrigens: Die Kunstwerkstatt hier in Plagwitz bietet im Sommer Kurse an. Ich habe das Programm mitgenommen.'],
      ['sofia', 'Zeig mal! Ich wollte schon immer malen lernen.'],
    ], { task: 'Hör zu. Sofia und Lina sind im Museum. Wie gefällt ihnen das Bild?', taskEn: 'Listen. Sofia and Lina are at an art museum. How do they like the painting? Listen for im Vordergrund (in the foreground), im Hintergrund (in the background) and links oben (top left).' }),
    mcq('t2-q1', 'Was sieht man im Vordergrund des Bildes?', ['eine Stadt im Nebel', 'Leute an einem langen Tisch', 'ein rotes Fenster'], 1),
    mcq('t2-q2', 'Warum gefällt Lina das Bild nicht so?', ['Es ist ihr zu groß.', 'Die Farben sind ihr zu traurig.', 'Sie kennt es schon zu lange.'], 1),
    mcq('t2-q3', 'Woran erinnert der Tisch Sofia?', ['an die Küche in der WG', 'an ein Restaurant in São Paulo', 'an ihr Büro'], 0),
    phrases('t2-phr', 'Über Bilder sprechen', {
      'Beschreiben': ['Im Vordergrund / Im Hintergrund sieht man …', 'Links oben / Rechts unten ist …', 'In der Mitte steht …'],
      'Sagen, wie es gefällt': ['Das Bild gefällt mir sehr gut, weil …', 'Ich finde die Farben toll / zu dunkel.', 'Das ist nicht mein Geschmack.'],
      'Interpretieren': ['Für mich bedeutet das …', 'Das Bild erinnert mich an …', 'Vielleicht wollte die Künstlerin zeigen, dass …'],
    }),
    text('t2-kurs', `**Kunstwerkstatt Plagwitz · Sommerprogramm 2027**

**Aquarell für Anfänger:** Leichte Übungen, schöne Farben, kleine Gruppen (höchstens 8 Personen). Du brauchst keine Vorkenntnisse, Material ist inklusive. Dienstags, 18 bis 20 Uhr, 6 Termine, 90 €.

**Zeichnen im Park:** Frische Luft, gute Laune und ein Bleistift: Mehr brauchst du nicht. Bei schlechtem Wetter treffen wir uns im Atelier. Samstags, 10 bis 13 Uhr, 4 Termine, 60 €.

**Fotografieren mit dem Handy:** Bessere Bilder mit einfachen Tricks. Für alle mit eigenem Smartphone. Freitag und Samstag, 2. und 3. Juli, 75 €.

**Theater-Workshop: Spielen ohne Text:** Lustige Spiele, spontane Szenen, viel Bewegung. Für Erwachsene mit großer Lust auf Neues. Mittwochs, 19 bis 21 Uhr, 8 Termine, 110 €.

**Offenes Singen im Hof:** Alte Volkslieder und neue Popsongs, gemeinsam und ohne Druck. Für alle, die gern singen, mit oder ohne Erfahrung. Jeden ersten Sonntag im Monat, 16 Uhr, kostenlos.

Anmeldung online oder im Büro (Montag bis Freitag, 10 bis 16 Uhr). Ermäßigung für Studierende und Rentner.`,
      { kicker: 'Lesen', title: 'Ein Kursprogramm', task: 'Lies das Kursprogramm. Welcher Kurs passt zu wem?', taskEn: 'Read the course catalog of a local art workshop. Which course fits whom? Notice the adjectives without an article: leichte Übungen, frische Luft, bei schlechtem Wetter.' }),
    mcq('t2-q4', 'Welcher Kurs kostet nichts?', ['Zeichnen im Park', 'Offenes Singen im Hof', 'Aquarell für Anfänger'], 1),
    mcq('t2-q5', 'Was passiert beim Kurs „Zeichnen im Park“, wenn es regnet?', ['Der Kurs fällt aus.', 'Man trifft sich im Atelier.', 'Man zeichnet trotzdem im Park.'], 1),
    mcq('t2-q6', 'Sofia hat noch nie gemalt und hat dienstags abends Zeit. Welcher Kurs passt?', ['Aquarell für Anfänger', 'Fotografieren mit dem Handy', 'Theater-Workshop'], 0),
    grammar('t2-gram', 'Adjektive ohne Artikel', {
      intro: 'Steht **kein Artikel** vor dem Nomen, zeigt das **Adjektiv** den Kasus und das Genus. Es bekommt fast die gleiche Endung wie der bestimmte Artikel: **der** → frisch**er** Kaffee, **das** → kalt**es** Wasser. Das findet man oft in Anzeigen, auf Speisekarten und in Kursprogrammen.',
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [
        ['Nominativ', 'frisch**er** Kaffee', 'kalt**es** Wasser', 'gut**e** Musik', 'alt**e** Lieder'],
        ['Akkusativ', 'frisch**en** Kaffee', 'kalt**es** Wasser', 'gut**e** Musik', 'alt**e** Lieder'],
        ['Dativ', 'mit frisch**em** Kaffee', 'mit kalt**em** Wasser', 'mit gut**er** Musik', 'mit alt**en** Liedern'],
      ],
      notes: [
        'Vergleich mit dem Artikel: **der** → -er, **das** → -es, **die** → -e, **den** → -en, **dem** → -em.',
        'Im Dativ Plural bekommt auch das Nomen ein **-n**: *mit alten Liedern, mit kleinen Kindern*.',
        'Nach Zahlen und nach *viele, einige, wenige* sind die Endungen gleich: *zwei neue Lieder, viele junge Leute*.',
        'Typisch für Anzeigen: *Nette Band sucht neuen Schlagzeuger. Zimmer mit großem Balkon.*',
      ],
      en: 'When there is no article before the noun, the adjective does the article’s job and shows case and gender. The endings are almost the same as the definite article: der becomes -er (frischer Kaffee), das becomes -es (kaltes Wasser), die becomes -e (gute Musik), den becomes -en (frischen Kaffee) and dem becomes -em (mit frischem Kaffee). In the dative plural the noun also adds -n (mit alten Liedern). The same endings follow numbers and words like viele or einige. This is typical in ads, menus and course catalogs.',
    }),
    gap('t2-gap', ['Wir suchen {{nette}} Leute für unsere Band. (nett)', 'Im Café gibt es {{frischen}} Kuchen. (frisch)', 'Bei {{schlechtem}} Wetter bleiben wir im Atelier. (schlecht)', 'Zimmer mit {{großem}} Balkon zu vermieten. (groß)', '{{Kaltes}} Wasser ist im Sommer das Beste. (kalt)', 'Ich höre gern {{laute}} Musik. (laut)'],
      { task: 'Ergänze die Adjektive ohne Artikel.', taskEn: 'Fill in the adjectives without an article. Think: which article would the noun have here?' }),
    compose('t2-comp', 'Beschreib ein Bild, das du gern magst.', [
      ['Was ist im Vordergrund?', 'What is in the foreground?', ['Im Vordergrund', 'sitzen', 'viele Leute', 'an einem Tisch.']],
      ['Wie findest du die Farben?', 'How do you like the colors?', ['Die Farben', 'gefallen', 'mir', 'sehr gut.']],
      ['Woran erinnert dich das Bild?', 'What does the picture remind you of?', ['Das Bild', 'erinnert', 'mich', 'an meine Familie.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences to describe a picture.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Spielen ohne Text', 'lilac', 15,
  ['ein Interview verstehen', 'eine Impro-Geschichte verstehen', 'Prüfungstraining: Lesen Teil 3'], [
    text('t3-text', `**„Fehler gibt es bei uns eigentlich nicht“: Ein Interview über Impro-Theater**

*Jule Brandt (31) spielt seit acht Jahren in der Leipziger Impro-Gruppe „Die Spontanen“. Wir haben mit ihr gesprochen.*

**Frau Brandt, was ist eigentlich Impro-Theater?**
Wir spielen ohne Text und ohne Probe. Das Publikum ruft uns Wörter zu, zum Beispiel einen Ort oder einen Beruf, und wir erfinden sofort eine Szene. Keine Vorstellung ist wie die andere.

**Haben Sie nicht manchmal Angst, dass Ihnen nichts einfällt?**
Am Anfang schon, heute nicht mehr. Die wichtigste Regel im Impro heißt „Ja, und …“. Ich sage nie „Nein, das stimmt nicht“, sondern ich nehme die Idee meiner Partnerin an und mache weiter. Dann fällt einem immer etwas ein.

**Und wenn doch etwas schiefgeht?**
Dann lachen alle, das Publikum auch. Fehler gibt es bei uns eigentlich nicht, nur Überraschungen.

**Kann jeder improvisieren lernen?**
Ja, ganz bestimmt. Man muss nicht lustig sein und auch kein Schauspieler. Man muss nur gut zuhören. Übrigens hilft Impro auch beim Sprachenlernen. Viele Leute in unseren Kursen lernen Deutsch. Sie trauen sich mehr, weil perfekte Sätze nicht so wichtig sind.

**Was machen Sie, wenn Sie nicht auf der Bühne stehen?**
Ich bin Grundschullehrerin, genau wie meine Freundin Lina. Mit ihrer Klasse habe ich gerade ein Theaterstück über unser Viertel geprobt.`,
      { kicker: 'Lesen', title: 'Ein Interview', task: 'Lies das Interview mit einer Impro-Schauspielerin.', taskEn: 'Read the interview with an improv actress. What is improv theater, and what is its most important rule?' }),
    mcq('t3-q1', 'Woher kommen die Ideen für die Szenen?', ['aus einem Buch', 'vom Publikum', 'von der Regisseurin'], 1),
    mcq('t3-q2', 'Was bedeutet die Regel „Ja, und …“?', ['Man sagt zu allem Ja und hört dann auf.', 'Man nimmt die Idee des Partners an und spielt weiter.', 'Man muss immer lustig sein.'], 1),
    mcq('t3-q3', 'Warum hilft Impro beim Deutschlernen?', ['Weil man viele Grammatikregeln lernt.', 'Weil perfekte Sätze nicht so wichtig sind.', 'Weil die Kurse kostenlos sind.'], 1),
    audio('t3-audio', 'Hören: Eine Impro-Szene', [
      ['moderatorin', 'Und jetzt eine neue Szene! Liebes Publikum, wir brauchen einen Ort. … Ich höre „Museum“! Und einen Gegenstand? … „Ein Regenschirm“! Bühne frei für Jule und Ben!'],
      ['ben', 'Entschuldigung, Sie dürfen hier nicht mit dem Regenschirm rein. Das ist ein Museum.'],
      ['jule', 'Das ist doch kein normaler Regenschirm. Das ist ein Kunstwerk! Ich bin die Künstlerin.'],
      ['ben', 'Ja, und … deshalb hängt hier auch ein leerer Bilderrahmen. Ihr Regenschirm gehört da hinein!'],
      ['jule', 'Genau! Das Werk heißt „Nasser Sonntag“. Es kostet zwei Millionen Euro.'],
      ['ben', 'Zwei Millionen? Für einen alten Schirm mit einem Loch?'],
      ['jule', 'Das Loch ist nicht kaputt. Das Loch ist die Idee! Durch das Loch sieht man den Himmel.'],
      ['ben', 'Oh … jetzt sehe ich es auch. Wunderschön. Darf ich ihn mal aufmachen?'],
      ['jule', 'Nein, bitte nicht! Wenn man ihn aufmacht, fängt es im Museum an zu regnen.'],
      ['ben', 'Zu spät … Hört ihr das? Tropf, tropf, tropf.'],
      ['moderatorin', 'Und Schluss! Applaus für „Nasser Sonntag“!'],
    ], { task: 'Hör die Impro-Szene. Was erfinden Jule und Ben?', taskEn: 'Listen to the improvised scene. The audience suggests a place and an object. What story do Jule and Ben make up? Notice how Ben uses the rule “Ja, und …”.' }),
    mcq('t3-q4', 'Welchen Ort hat das Publikum vorgeschlagen?', ['ein Theater', 'ein Museum', 'einen Park'], 1),
    mcq('t3-q5', 'Was ist für die Künstlerin das Besondere an ihrem Regenschirm?', ['seine Farbe', 'das Loch', 'sein Alter'], 1),
    phrases('t3-phr', 'Mitspielen und improvisieren', {
      'Eine Idee annehmen': ['Ja, und dann …', 'Genau! Und außerdem …', 'Gute Idee! Dann …'],
      'Spontan reagieren': ['Oh, das ist ja eine Überraschung!', 'Moment mal, das heißt also …', 'Wie bitte? Das glaube ich nicht!'],
      'Zeit gewinnen': ['Tja, wie soll ich sagen …', 'Gute Frage …', 'Also, pass auf: …'],
    }),
    tip('t3-pt-tip', 'Prüfungstraining: Lesen Teil 3', 'In **Lesen Teil 3** liest du sieben Situationen und zehn kurze Anzeigen. Du suchst für jede Person die passende Anzeige. Jede Anzeige passt nur einmal, und **für eine Person passt keine Anzeige**.\n\n1. Lies zuerst die Situationen. Markiere, was die Person **genau** braucht: Zeit, Ort, Preis, Alter, Niveau.\n2. Lies dann die Anzeigen schnell. Achtung: Oft passen zwei Anzeigen fast, aber ein Detail ist falsch (*samstags* statt *sonntags*, *für Kinder* statt *für Erwachsene*).\n3. Passt wirklich kein Detail? Dann wähle **keine Anzeige passt**.\n4. Hier übst du mit sechs Personen und sieben Anzeigen.'),
    text('t3-pt-text', `**a) Chor „Westklang“ sucht neue Stimmen!**
Wir singen Pop, Jazz und ein paar alte Volkslieder. Proben donnerstags um 19.30 Uhr im Gemeindehaus Lindenau. Notenkenntnisse sind nicht nötig. Besonders gesucht: tiefe Männerstimmen.

**b) Malkurs für Kinder (6 bis 10 Jahre)**
Bunte Farben, großes Papier, viel Spaß! Samstags von 10 bis 12 Uhr im Atelier Plagwitz. 8 € pro Termin, Material inklusive.

**c) Gitarrenunterricht, auch online**
Erfahrener Musiker gibt Einzelunterricht für Anfänger und Fortgeschrittene. Flexible Termine, auch spät abends und am Wochenende. Die erste Stunde ist kostenlos.

**d) Theaterkarten abzugeben**
Zwei Karten für „Der zerbrochne Krug“ im Theater am Kanal, Freitag, 4. Juni, Parkett, Reihe 5. Ich kann leider nicht. 30 € für beide.

**e) Lange Nacht der Museen**
Am Samstag, dem 15. Mai, haben viele Museen bis 1 Uhr nachts geöffnet. Führungen auf Deutsch und Englisch. Ticket: 12 €.

**f) Impro-Workshop für Erwachsene**
Spontan sein, lachen, neue Leute kennenlernen. Keine Erfahrung nötig. Wochenende 12. und 13. Juni, jeweils 10 bis 16 Uhr, 95 €.

**g) Altes Klavier zu verschenken**
Gut gestimmtes Klavier, nur für Selbstabholer. Achtung: 3. Stock ohne Aufzug!`,
      { kicker: 'Prüfungstraining', title: 'Lesen Teil 3: Anzeigen', task: 'Lies die Anzeigen. Welche Anzeige passt zu welcher Person? Für eine Person passt keine Anzeige.', taskEn: 'Read the small ads. Which ad fits which person? For one person, no ad fits.' }),
    mcq('t3-pt-q1', 'Marco hat eine tiefe Stimme und singt gern. Er möchte in einer Gruppe singen, kann aber keine Noten lesen.', ['Anzeige a', 'Anzeige c', 'Anzeige g', 'keine Anzeige passt'], 0, { why: 'Der Chor sucht tiefe Männerstimmen, und Notenkenntnisse sind nicht nötig.' }),
    mcq('t3-pt-q2', 'Frau Weber sucht für ihre achtjährige Tochter etwas Kreatives am Wochenende.', ['Anzeige b', 'Anzeige e', 'Anzeige f', 'keine Anzeige passt'], 0, { why: 'Der Malkurs ist für Kinder von 6 bis 10 Jahren und findet samstags statt.' }),
    mcq('t3-pt-q3', 'Tarek möchte Gitarre lernen. Er arbeitet im Schichtdienst und hat oft nur spät am Abend Zeit.', ['Anzeige a', 'Anzeige c', 'Anzeige g', 'keine Anzeige passt'], 1, { why: 'Der Gitarrenlehrer hat flexible Termine, auch spät abends.' }),
    mcq('t3-pt-q4', 'Hanna möchte am 4. Juni mit ihrem Freund ins Theater, aber die Vorstellung ist ausverkauft.', ['Anzeige d', 'Anzeige e', 'Anzeige f', 'keine Anzeige passt'], 0, { why: 'Jemand verkauft zwei Karten für Freitag, den 4. Juni.' }),
    mcq('t3-pt-q5', 'Paul ist schüchtern und möchte lernen, spontan vor anderen zu sprechen. Er hat nur am Wochenende Zeit.', ['Anzeige b', 'Anzeige d', 'Anzeige f', 'keine Anzeige passt'], 2, { why: 'Der Impro-Workshop für Erwachsene ist an einem Wochenende.' }),
    mcq('t3-pt-q6', 'Elena tanzt sehr gern und sucht einen Salsakurs am Abend.', ['Anzeige a', 'Anzeige e', 'Anzeige f', 'keine Anzeige passt'], 3, { why: 'Keine Anzeige bietet einen Tanzkurs an.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 9: Unser Haus', 'rose', 12,
  ['eine Geschichte hören', 'einen Liedtext verstehen', 'Reaktionen verstehen'], [
    text('wg-intro', 'Ende April. Seit zwei Wochen sitzt Felix jeden Abend mit der Gitarre in der Küche. Er schreibt an einem neuen Lied, aber niemand darf es hören. Dann, an einem warmen Sonntag, ruft er alle in den Hof. Sofia filmt mit ihrem Handy, Herr Lehmann bringt einen Stuhl mit, und Kenji kommt kurz aus dem Restaurant. Sein neuer Souschef Malte hat heute die Küche. Felix singt „Unser Haus“.',
      { kicker: 'Die Geschichte', en: 'End of April. For two weeks, Felix has been sitting in the kitchen with his guitar every evening. He is writing a new song, but nobody is allowed to hear it. Then, on a warm Sunday, he calls everyone into the courtyard. Sofia films with her phone, Herr Lehmann brings a chair, and Kenji comes out of the restaurant for a moment: his new sous-chef, Malte, is running the kitchen today. Felix sings “Unser Haus” (Our House).' }),
    text('wg-lied', `**1. Strophe**
Alte Treppen, schiefe Fenster,
jede Stufe kennt uns schon.
Unten duftet’s aus der Küche,
oben übt ein Saxofon.

**Refrain**
Unser Haus ist nicht zu verkaufen,
unser Haus ist nicht nur Stein.
Hier wohnen Lieder, hier wohnen Leute,
unser Haus soll unser sein.

**2. Strophe**
Herr Lehmann kennt die alten Lieder,
im Hof wächst grünes, junges Glück.
Ein Brief aus München kam im Herbst,
doch wir weichen nicht zurück.`,
      { kicker: 'Das Lied', title: '„Unser Haus“ (Text und Musik: Felix Huber)', task: 'Lies den Liedtext. Wo steht nicht?', taskEn: 'Read the lyrics. Find the sentences with nicht. Strophe = verse, Refrain = chorus.', en: 'Verse 1: Old stairs, crooked windows, every step already knows us. Downstairs it smells of the kitchen, upstairs a saxophone is practicing. Chorus: Our house is not for sale, our house is not just stone. Songs live here, people live here, our house should stay ours. Verse 2: Herr Lehmann knows the old songs, green young happiness grows in the courtyard. A letter from Munich came in the fall, but we will not back down.' }),
    audio('wg-audio', 'Folge 9: Vierhunderttausend Klicks', [
      ['sofia', 'Leute! Leute! Schaut mal aufs Handy! „Unser Haus“ hat jetzt vierhunderttausend Klicks!'],
      ['felix', 'Was? Gestern waren es doch noch fünfzigtausend. Das kann nicht sein.'],
      ['nele', 'Doch! Und hör dir mal die Kommentare an: „Bei uns in Hamburg ist es genauso.“ Oder: „Ich wohne nicht in Leipzig, aber ich muss weinen.“'],
      ['amara', 'Hamburg, ausgerechnet. Na ja.'],
      ['felix', 'Ehrlich, ich verstehe das nicht. Das war doch nur ein kleines Lied für uns. Ich habe es nicht für das Internet geschrieben.'],
      ['kenji', 'Das ist eben das Geheimnis. Ein ehrliches Lied, keine große Produktion. Gestern haben mich zwei Gäste gefragt, ob das hier „das Haus aus dem Video“ ist.'],
      ['nele', 'Und eine Journalistin von der Stadtteilzeitung hat mich angerufen. Sie will einen Artikel schreiben, auch über unsere Mietergruppe.'],
      ['sofia', 'Siehst du, Felix? Das ist nicht nur gut für dich. Das ist gut für das ganze Haus.'],
      ['felix', 'Hm. Aber was sagt eigentlich Elbstein dazu?'],
      ['nele', 'Herr Vogt hat mir geschrieben. Ganz kurz: „Die Firma kommentiert das Video nicht.“'],
      ['amara', 'Das heißt also: Sie haben es gesehen.'],
      ['felix', 'Okay. Dann spielen wir es beim Theaterabend von Linas Klasse noch einmal. Live und laut.'],
    ], { task: 'Hör zu. Wie reagieren die Mitbewohner auf den Erfolg des Videos?', taskEn: 'Listen. How do the flatmates react to the video’s success? ausgerechnet = of all places.' }),
    audio('wg-theater', 'Folge 9: Der Theaterabend', [
      ['lina', 'Liebe Eltern, liebe Nachbarinnen und Nachbarn, herzlich willkommen! Die Klasse 4b spielt heute ihr eigenes Stück: „Unser Viertel“. Die Kinder haben die Szenen selbst erfunden. Manche Teile sind improvisiert, also: Überraschung!'],
      ['herrLehmann', 'Nu, das war ja wunderbar! Der kleine Junge, der den alten Schlosser gespielt hat … Das war doch ich, oder?'],
      ['lina', 'Natürlich waren Sie das, Herr Lehmann. Die Kinder haben Sie doch letzte Woche interviewt.'],
      ['sofia', 'Und am Ende haben alle Kinder zusammen ein altes Volkslied gesungen, „Die Gedanken sind frei“. Ich hatte Gänsehaut. Und dann Felix: Der ganze Saal hat den Refrain mitgesungen!'],
      ['nele', 'Schau mal, wer da hinten steht. Ist das nicht Herr Vogt?'],
      ['herrVogt', 'Guten Abend. Sie sind doch die Sprecherin der Mietergruppe, nicht wahr? Meine Nichte geht in die 4b. Ich bin heute nicht als Hausverwalter hier, sondern als Onkel.'],
      ['nele', 'Und? Wie hat es Ihnen gefallen?'],
      ['herrVogt', 'Ehrlich gesagt: sehr gut. Und das Lied von Herrn Huber ist auch nicht schlecht. Aber ich entscheide nicht über das Haus. Das macht die Firma.'],
      ['felix', 'Dann schicken Sie der Firma doch mal den Link.'],
      ['herrVogt', 'Den hat sie schon, Herr Huber. Glauben Sie mir.'],
    ], { task: 'Hör zu. Was passiert beim Theaterabend?', taskEn: 'Listen. What happens at the school theater evening? Gänsehaut = goosebumps. Nichte = niece.' }),
    mcq('wg-q1', 'Wie viele Klicks hat das Video, als Sofia aufs Handy schaut?', ['fünfzigtausend', 'vierhunderttausend', 'vier Millionen'], 1),
    mcq('wg-q2', 'Wie reagiert die Firma Elbstein auf das Video?', ['Sie findet es lustig.', 'Sie kommentiert es nicht.', 'Sie will mit Felix sprechen.'], 1),
    mcq('wg-q3', 'Wer hat im Theaterstück den alten Schlosser gespielt?', ['Herr Lehmann selbst', 'ein Junge aus der Klasse', 'Felix'], 1),
    mcq('wg-q4', 'Warum ist Herr Vogt beim Theaterabend?', ['Er kommt als Hausverwalter.', 'Seine Nichte geht in die Klasse.', 'Lina hat ihn eingeladen.'], 1),
    mcq('wg-q5', 'Was haben die Kinder am Ende zusammen gesungen?', ['„Unser Haus“', 'ein altes Volkslied', 'einen Song aus dem Radio'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['nicht oder kein?', 'Adjektive ohne Artikel im Alltag'], [
    grammar('g-1', 'nicht oder kein?', {
      intro: '**kein** verneint ein Nomen mit *ein* oder ohne Artikel. **nicht** verneint alles andere: Verben, Adjektive, Namen und Nomen mit *der, die, das* oder *mein, dein …*.',
      head: ['Was?', 'Satz', 'verneint'],
      rows: [
        ['Nomen mit ein/eine', 'Ich habe eine Gitarre.', 'Ich habe **keine** Gitarre.'],
        ['Nomen ohne Artikel', 'Wir haben Zeit.', 'Wir haben **keine** Zeit.'],
        ['Nomen mit der/die/das', 'Ich kenne das Lied.', 'Ich kenne das Lied **nicht**.'],
        ['Verb', 'Felix singt.', 'Felix singt **nicht**.'],
        ['Adjektiv', 'Das Bild ist teuer.', 'Das Bild ist **nicht** teuer.'],
        ['Name', 'Das ist Felix.', 'Das ist **nicht** Felix.'],
      ],
      notes: [
        '**kein** hat die Endungen von *ein*: *kein Klavier, keine Karten, mit keinem Wort*.',
        'Stärker verneinen: *gar nicht, überhaupt nicht, gar kein*: *Das gefällt mir **gar nicht**.*',
        '**nicht mehr** und **kein … mehr**: *Ich singe **nicht mehr** im Chor. Ich habe **keine** Zeit **mehr**.*',
        'Andere Wörter zum Verneinen: *nie, niemand, nichts, nirgends*.',
      ],
      en: 'Use kein for nouns with ein or without an article: keine Gitarre, keine Zeit. Use nicht for everything else: verbs, adjectives, names, and nouns with der/die/das or a possessive. kein takes the same endings as ein. To make it stronger, say gar nicht or überhaupt nicht. “Not anymore” is nicht mehr or kein … mehr.',
    }),
    grammar('g-2', 'Adjektive ohne Artikel im Alltag', {
      head: ['Wo?', 'Beispiel'],
      rows: [
        ['Anzeige', '**Nette** Band sucht **jungen** Schlagzeuger.'],
        ['Speisekarte', '**Frischer** Spargel mit **neuen** Kartoffeln'],
        ['Kursprogramm', '**Kleine** Gruppen, **günstige** Preise'],
        ['nach Zahlen', 'drei **neue** Lieder'],
        ['nach viele, einige', 'viele **junge** Leute'],
        ['Wünsche', '**Schönes** Wochenende! **Gute** Besserung! **Herzlichen** Glückwunsch!'],
      ],
      notes: ['Wünsche stehen im **Akkusativ** (*Ich wünsche dir …*): *Schön**es** Wochenende, Herzlich**en** Glückwunsch.*', 'Zwei Adjektive hintereinander bekommen die gleiche Endung: *grün**es**, jung**es** Glück*.'],
      en: 'Adjectives without an article appear everywhere in daily life: in ads, on menus, in course catalogs, after numbers and after viele or einige. Wishes like Schönes Wochenende! or Herzlichen Glückwunsch! are in the accusative, because they stand for “Ich wünsche dir …”. Two adjectives in a row get the same ending.',
    }),
    mcq('g-q1', 'Ich habe heute ___ Lust auf Theater.', ['nicht', 'keine', 'kein'], 1, { why: 'Lust ohne Artikel, feminin: keine Lust.' }),
    mcq('g-q2', 'Welcher Satz ist richtig?', ['Ich nicht habe den Film gesehen.', 'Ich habe den Film nicht gesehen.', 'Ich habe den Film gesehen nicht.'], 1, { why: 'nicht steht vor dem 2. Verbteil (gesehen).' }),
    mcq('g-q3', 'Zimmer mit ___ Balkon zu vermieten.', ['großem', 'großer', 'großen'], 0, { why: 'mit + Dativ, maskulin: dem Balkon → großem Balkon.' }),
    mcq('g-q4', 'Wir wünschen euch ___ Wochenende!', ['schönes', 'schöner', 'schönem'], 0, { why: 'Akkusativ neutral: das Wochenende → schönes Wochenende.' }),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Strategie: improvisieren', 'Aussprache: Vokal am Wortanfang', 'Landeskunde: Innsbruck und Volkslieder'], [
    tip('u-tip', 'Strategie: Improvisieren', 'Beim Sprechen fehlt dir ein Wort? Kein Problem: Improvisier, wie auf der Impro-Bühne!\n\n1. **Umschreiben:** *Das ist ein Ding, mit dem man … / Das ist eine Person, die …*\n2. **Das Gegenteil mit nicht:** *nicht teuer* statt *günstig*, *nicht hell* statt *dunkel*.\n3. **Ein allgemeines Wort:** *ein Werkzeug, ein Instrument, ein Tier*.\n4. **Zeit gewinnen:** *Wie sagt man noch mal …? Moment, gleich hab ich’s.*\n5. **Weitermachen!** Ein kleiner Fehler ist nicht schlimm. Wichtig ist, dass das Gespräch weitergeht.'),
    mcq('u-q1', 'Dir fehlt das Wort „Pinsel“. Was kannst du sagen?', ['Das ist ein Ding, mit dem man malt.', 'Das ist eine Person, die malt.', 'Ich sage lieber gar nichts.'], 0, { task: 'Improvisier!', taskEn: 'You can’t remember a word. Which answer helps you improvise?' }),
    mcq('u-q2', 'Dir fehlt das Wort „langweilig“. Was kannst du sagen?', ['Das ist sehr spannend.', 'Das ist nicht interessant.', 'Das ist ein Ding.'], 1, { why: 'Das Gegenteil mit nicht: nicht interessant = langweilig.' }),
    audio('u-aus', 'Aussprache: Vokal am Wortanfang', [
      ['frauKlein', 'Heute geht es um Vokale am Wortanfang. Im Deutschen beginnt ein Vokal am Anfang mit einem ganz kurzen Stopp. Man nennt das den Knacklaut. Hör mal: Abend. Oper. Insel.'],
      ['frauKlein', 'Auch zwischen zwei Wörtern verbinden wir die Laute nicht. Also: am … Abend, nicht „amAbend“. Im … Internet. Ein … alter … Onkel.'],
      ['frauKlein', 'Der Knacklaut kommt auch mitten im Wort, wenn ein neuer Teil mit einem Vokal beginnt: be-enden. Theater-Eingang. Spiegel-Ei.'],
      ['frauKlein', 'Manchmal ändert er sogar die Bedeutung. Hör genau: verreisen, mit r. Das heißt, eine Reise machen. Und ver-eisen, mit Knacklaut: Die Straße wird zu Eis.'],
      ['frauKlein', 'Jetzt du: Wir beenden die Probe um acht. Wir treffen uns am Theater-Eingang. Und am Abend essen alle ein Spiegelei.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. In German, a vowel at the start of a word or word part begins with a tiny stop (the glottal stop): be-enden, Theater-Eingang. Do not link it to the sound before.' }),
    sort('u-sort', ['Knacklaut am Wortanfang', 'Knacklaut mitten im Wort'], [['Abend', 0], ['Oper', 0], ['Insel', 0], ['Eingang', 0], ['beenden', 1], ['Theatereingang', 1], ['vereisen', 1], ['Spiegelei', 1]],
      { task: 'Wo hörst du den Knacklaut? Sprich die Wörter laut.', taskEn: 'Where do you hear the glottal stop: at the start of the word or in the middle? Say each word out loud.' }),
    text('u-lk', `**Kunst in Innsbruck: zwischen Bergen und Bronze**

Innsbruck, die Hauptstadt von Tirol, liegt mitten in den Alpen. Viele Menschen kommen zum Skifahren oder Wandern. Aber die Stadt hat auch viel Kunst und Kultur zu bieten.

Das bekannteste Wahrzeichen der Stadt ist das **Goldene Dachl** in der Altstadt: ein Prunkbalkon mit einem Dach aus über 2 600 vergoldeten Kupferschindeln. Kaiser Maximilian I. ließ es um das Jahr 1500 bauen. Von dort aus schaute er sich Feste auf dem Platz an.

In der **Hofkirche** stehen 28 große Figuren aus Bronze rund um das Grabmal des Kaisers. Die Innsbrucker nennen sie die „Schwarzen Mander“, also die schwarzen Männer, obwohl auch Frauen dabei sind. Interessant: Der Kaiser liegt gar nicht hier, sondern in Wiener Neustadt begraben.

Auch moderne Architektur gibt es: Die **Sprungschanze am Bergisel** hat die Architektin Zaha Hadid entworfen. Von oben hat man einen fantastischen Blick über die Stadt.

Wer Volkskunst mag, geht ins **Tiroler Volkskunstmuseum**. Dort sieht man alte Möbel, Trachten und Krippen aus Tirol. Und auf **Schloss Ambras** gibt es eine berühmte Kunst- und Wunderkammer aus dem 16. Jahrhundert.`,
      { kicker: 'Landeskunde', title: 'Kunst in Innsbruck', task: 'Lies den Text über Innsbruck.', taskEn: 'Read the text about art and culture in Innsbruck, the capital of Tyrol in Austria. Mander is the Tyrolean dialect word for Männer.' }),
    mcq('u-lk-q1', 'Was ist das Goldene Dachl?', ['ein Museum für Gold', 'ein Balkon mit einem goldenen Dach', 'eine Kirche in der Altstadt'], 1),
    mcq('u-lk-q2', 'Wo ist Kaiser Maximilian I. begraben?', ['in der Hofkirche in Innsbruck', 'in Wiener Neustadt', 'auf Schloss Ambras'], 1),
    mcq('u-lk-q3', 'Wer hat die Sprungschanze am Bergisel entworfen?', ['eine Architektin', 'ein Skispringer', 'der Kaiser'], 0),
    text('u-volk', `**Volkslieder: alt, aber nicht vergessen**

Volkslieder sind einfache Lieder, die Menschen seit Generationen singen. Oft weiß man nicht mehr, wer den Text oder die Melodie geschrieben hat. Man hat sie meistens nicht aus Büchern gelernt, sondern von den Eltern, in der Schule oder im Verein.

Viele Volkslieder erzählen vom Wandern, von der Natur, vom Abschied oder von der Liebe. „Alle Vögel sind schon da“ ist ein fröhliches Frühlingslied, das fast jedes Kind in Deutschland kennt. In „Der Mond ist aufgegangen“ geht es um einen stillen Abend. Den Text hat der Dichter Matthias Claudius schon im 18. Jahrhundert geschrieben. Und „Die Gedanken sind frei“ ist ein Lied über die Freiheit: Niemand kann wissen, was ein anderer Mensch denkt. Deshalb haben Menschen es oft in schweren Zeiten gesungen.

Lange waren Volkslieder ein bisschen aus der Mode. Heute singen aber wieder mehr Menschen zusammen: in Chören, beim offenen Singen in Kneipen oder auf Festen. In Österreich und in Bayern hört man in der Volksmusik oft auch das Jodeln. Viele sagen: Gemeinsames Singen macht glücklich, auch wenn man nicht perfekt singt.`,
      { kicker: 'Landeskunde', title: 'Volkslieder', task: 'Lies den Text über Volkslieder.', taskEn: 'Read the text about German folk songs and singing together today.' }),
    mcq('u-volk-q1', 'Wie haben die Menschen Volkslieder meistens gelernt?', ['aus Büchern', 'in der Familie, in der Schule oder im Verein', 'aus dem Radio'], 1),
    mcq('u-volk-q2', 'Worum geht es in „Die Gedanken sind frei“?', ['um den Frühling', 'um die Freiheit', 'um einen stillen Abend'], 1),
    mcq('u-volk-q3', 'Was sagen viele Menschen über gemeinsames Singen?', ['Man muss perfekt singen.', 'Es macht glücklich.', 'Es ist aus der Mode.'], 1),
    gap('u-gap', ['{{Frische}} Nudeln mit {{grünem}} Gemüse (frisch, grün)', 'Suppe mit {{scharfem}} Ingwer (scharf)', '{{Japanischer}} Tee oder {{kaltes}} Bier (japanisch, kalt)', 'Dazu gibt es {{warmes}} Brot. (warm)'],
      { task: 'Die Speisekarte von Fuchs & Yuzu: Ergänze die Adjektive.', taskEn: 'Complete the menu of Kenji’s restaurant Fuchs & Yuzu with adjectives without an article.' }),
    compose('u-comp', 'Schreib eine kurze Anzeige: Deine Band sucht eine Sängerin.', [
      ['Wer sucht wen?', 'Who is looking for whom?', ['Junge', 'Band', 'sucht', 'neue Sängerin.']],
      ['Was spielt ihr?', 'What do you play?', ['Wir', 'spielen', 'deutsche', 'Popmusik.']],
      ['Was bietet ihr?', 'What do you offer?', ['Wir bieten', 'nette Leute', 'und', 'kostenlose Proben.']],
    ], { task: 'Bau die Anzeige.', taskEn: 'Build a short classified ad. Ads often use adjectives without an article.' }),
    order('u-order', ['Ich', 'kann', 'heute Abend', 'nicht', 'kommen.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence. nicht comes before the infinitive at the end.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 12,
  ['Wörter wiederholen', 'den Stand einschätzen', 'Plattform 3: Kapitel 7 bis 9'], [
    cards('w-cards', [
      ['die Ausstellung', 'Bilder oder Objekte, die ein Museum zeigt', 'exhibition'], ['das Gemälde', 'ein Bild, mit Farbe gemalt', 'painting'], ['die Künstlerin', 'eine Frau, die Kunst macht', 'artist (female)'],
      ['die Bühne', 'hier spielen die Schauspieler', 'stage'], ['das Theaterstück', 'eine Geschichte auf der Bühne', 'play'], ['die Vorstellung', 'eine Aufführung im Theater', 'performance, show'],
      ['das Publikum', 'alle Zuschauer zusammen', 'audience'], ['der Chor', 'eine Gruppe, die zusammen singt', 'choir'], ['das Volkslied', 'ein altes, einfaches Lied', 'folk song'],
      ['der Refrain', 'der Teil im Lied, den man oft wiederholt', 'chorus'], ['improvisieren', 'spontan etwas erfinden', 'to improvise'], ['die Anzeige', 'ein kurzer Text: Man sucht oder bietet etwas', 'ad'],
    ]),
    phrases('w-phr', 'Sagen, wie einem etwas gefällt', {
      'Sehr positiv': ['Das gefällt mir total gut!', 'Ich bin begeistert.', 'Das finde ich wunderschön.'],
      'Neutral': ['Es geht so.', 'Das ist nicht schlecht.', 'Na ja, ganz okay.'],
      'Negativ': ['Das gefällt mir gar nicht.', 'Das ist nicht mein Geschmack.', 'Damit kann ich nichts anfangen.'],
    }),
    match('w-match', [['der Pinsel', 'Damit malt man.'], ['die Leinwand', 'Darauf malt man ein Bild.'], ['der Bilderrahmen', 'Er ist rund um ein Bild an der Wand.'], ['die Staffelei', 'Darauf steht das Bild, während man malt.'], ['das Mikrofon', 'Hier singt man hinein, damit alle es hören.'], ['der Vorhang', 'Er geht im Theater am Anfang auf.'], ['die Eintrittskarte', 'Die braucht man für das Konzert oder das Museum.'], ['die Gitarre', 'Felix spielt sie in seiner Band.'], ['die Skulptur', 'Ein Kunstwerk aus Stein, Holz oder Metall.']],
      { task: 'Was ist was?', taskEn: 'Match each object to its description.' }),
    gap('w-gap', ['Ich habe {{keine}} Karten mehr bekommen.', 'Das Konzert ist {{nicht}} am Freitag, sondern am Samstag.', 'Im Kurs gibt es nur {{kleine}} Gruppen.', 'Morgens trinken wir {{frischen}} Kaffee.'],
      { bank: ['keine', 'nicht', 'kleine', 'frischen'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
    checklist('w-check', ['Ich kann Informationen aus einem Zeitungstext weitergeben.', 'Ich kann nachfragen, wenn ich etwas nicht verstehe.', 'Ich kann mit nicht und kein verneinen und weiß, wo nicht im Satz steht.', 'Ich kann ein Bild beschreiben und sagen, wie es mir gefällt.', 'Ich kann ein Kursprogramm und Anzeigen verstehen und eine Anzeige schreiben.', 'Ich kann improvisieren, wenn mir ein Wort fehlt.', 'Ich kann über Singen und Volkslieder sprechen.']),
    text('w-pf-intro', '**Plattform 3: Kapitel 7 bis 9.** Zeit für eine kurze Wiederholung: Plusquamperfekt, die Konnektoren nachdem, bevor, seit und während, brauchen … zu, reflexive Verben mit Akkusativ und Dativ, zweiteilige Konnektoren, die Stellung von nicht und Adjektive ohne Artikel.',
      { kicker: 'Plattform 3', en: 'Plattform 3: a short review of chapters 7 to 9.' }),
    mcq('w-pf-q1', 'Als Felix zum Treffen kam, ___ die anderen schon angefangen.', ['hatten', 'waren', 'haben'], 0, { task: 'Plusquamperfekt: Was passt?', taskEn: 'Past perfect: which form fits?', why: 'Plusquamperfekt: hatte/war + Partizip. anfangen bildet das Perfekt mit haben: Sie hatten angefangen.' }),
    gap('w-pf-gap', ['{{Nachdem}} Kenji aus dem Krankenhaus gekommen war, machte er mehr Pausen.', '{{Bevor}} Felix auf die Bühne geht, trinkt er immer einen Tee.', '{{Seit|Seitdem}} Kenji einen Souschef hat, arbeitet er weniger.', '{{Während}} Lina unterrichtet, probt Felix mit der Band.'],
      { bank: ['Nachdem', 'Bevor', 'Seit', 'Während'], task: 'nachdem, bevor, seit oder während? Ergänze.', taskEn: 'Fill in nachdem (after), bevor (before), seit (since) or während (while).' }),
    mcq('w-pf-q2', 'Du ___ morgen nicht zu kommen. Die Probe fällt aus.', ['brauchst', 'musst', 'darfst'], 0, { why: 'nicht brauchen + zu + Infinitiv = nicht müssen.' }),
    mcq('w-pf-q3', 'Nach der Probe wäscht Felix ___ die Hände.', ['sich', 'ihn', 'ihm'], 0, { why: 'Reflexivpronomen im Dativ (die Hände ist das Akkusativ-Objekt). In der 3. Person heißt es immer sich.' }),
    mcq('w-pf-q4', 'Ich wasche ___ die Hände, dann wasche ich ___.', ['mir … mich', 'mich … mir', 'mir … mir'], 0, { why: 'Mit Akkusativ-Objekt (die Hände): Dativ mir. Ohne Objekt: Akkusativ mich.' }),
    mcq('w-pf-q5', 'Felix ist ___ Sänger ___ Gitarrist der Fuchsbande.', ['sowohl … als auch', 'weder … als auch', 'entweder … noch'], 0, { why: 'sowohl … als auch = beides.' }),
    order('w-pf-order', ['Herr Vogt', 'ist', 'heute', 'nicht', 'als Hausverwalter', 'hier.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence. nicht goes before the part it negates.' }),
    gap('w-pf-gap2', ['{{Kleiner}} Chor sucht neue Stimmen. (klein)', 'Wir singen mit {{großer}} Freude. (groß)', 'Felix spielt {{alte}} Lieder und neue Songs. (alt)'],
      { task: 'Adjektive ohne Artikel: Ergänze.', taskEn: 'Fill in the adjectives without an article.' }),
  ]);

export const b1k9: Chapter = {
  id: 'b1-k9', number: 9, title: 'Kunststücke', theme: 'Kunst, Museum, Theater, Gesang',
  grammar: 'Stellung von nicht im Satz (ganzer Satz oder nur ein Teil). Adjektive ohne Artikel (Nominativ, Akkusativ, Dativ).',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['b1k9-sprint', 'b1k9-memory', 'b1k9-satzbau', 'b1k9-artikel'],
  exam: [
    x(1, mcq('x1', 'Ich komme morgen ___ zur Probe.', ['nicht', 'kein', 'keine'], 0)),
    x(1, mcq('x2', 'Welcher Satz verneint nur einen Teil?', ['Ich habe das Video nicht gesehen.', 'Nicht Sofia, sondern Felix singt.', 'Wir gehen heute nicht ins Kino.'], 1)),
    x(1, mcq('x3', 'Wir suchen ___ Schlagzeuger für unsere Band.', ['erfahrenen', 'erfahrener', 'erfahrenem'], 0)),
    x(3, gap('x4', ['Bei {{schönem}} Wetter singen wir im Hof. (schön)', 'Das Café hat {{leckeren}} Kuchen. (lecker)', '{{Gute}} Musik macht glücklich. (gut)'], { task: 'Ergänze die Adjektive.', taskEn: 'Fill in the adjectives without an article.' })),
    x(3, gap('x5', ['Ich habe heute {{keine}} Zeit.', 'Das Bild gefällt mir {{nicht}}.', 'Er spielt {{kein}} Instrument.'], { task: 'nicht oder kein?', taskEn: 'Fill in nicht or a form of kein.' })),
    x(1, mcq('x6', 'Warum verkauft Priya die Karten?', ['Sie ist krank.', 'Ihre Schwester heiratet.', 'Sie mag die Band nicht.'], 1),
      audio('x-st1', 'Hören: Ein Anruf wegen einer Anzeige', [
        ['jonas', 'Hallo, hier ist Jonas. Ich rufe wegen Ihrer Anzeige an. Sie verkaufen zwei Karten für das Konzert am Samstag?'],
        ['priya', 'Ja, genau. Leider kann ich nicht hingehen. Meine Schwester heiratet an dem Tag.'],
        ['jonas', 'Oh, herzlichen Glückwunsch! Wo sind die Plätze denn?'],
        ['priya', 'Nicht im Parkett, sondern auf dem Balkon, erste Reihe. Man sieht die Bühne aber sehr gut.'],
        ['jonas', 'Und was kosten sie? In der Anzeige steht kein Preis.'],
        ['priya', 'Ich habe für beide achtzig Euro bezahlt. Sie können sie für sechzig haben.'],
        ['jonas', 'Super. Kann ich sie heute noch abholen?'],
        ['priya', 'Heute bin ich leider nicht zu Hause. Aber morgen ab fünf Uhr geht es. Ich wohne in der Jahnallee 12.'],
        ['jonas', 'Perfekt, dann komme ich morgen um halb sechs.'],
      ])),
    x(1, mcq('x7', 'Wie viel bezahlt Jonas für die Karten? (Hörtext oben)', ['sechzig Euro', 'achtzig Euro', 'vierzig Euro'], 0)),
    x(1, mcq('x8', 'Wann probt der Chor?', ['jeden Montag um 19 Uhr', 'jeden Sonntag um 16 Uhr', 'einmal im Monat'], 0),
      text('x-st2', '**Mitsängerinnen und Mitsänger gesucht!**\nKleiner Chor mit großem Herzen sucht neue Stimmen. Wir singen alte Volkslieder und moderne Popsongs. Proben: jeden Montag, 19 Uhr, im Nachbarschaftszentrum Plagwitz. Notenkenntnisse sind nicht nötig, gute Laune schon! Die ersten zwei Proben sind kostenlos, danach kostet es 10 € im Monat.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was muss man für den Chor nicht können? (Text oben)', ['gut gelaunt sein', 'Noten lesen', 'pünktlich kommen'], 1)),
    x(2, order('x10', ['Felix', 'hat', 'das Lied', 'nicht', 'für das Internet', 'geschrieben,', 'sondern für uns.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence. nicht goes directly before the part it negates.' })),
    x(1, mcq('x11', 'Eine Freundin zeigt dir ihr Lieblingsbild. Es gefällt dir nicht so. Was sagst du höflich?', ['Das Bild ist total schlecht.', 'Hm, das ist nicht so mein Geschmack.', 'Ich sehe da gar nichts.'], 1)),
    x(1, mcq('x12', 'Ich trinke morgens gern ___ Tee.', ['heißen', 'heißer', 'heißem'], 0)),
  ],
};

export const gamesB1k9: GameDef[] = [
  {
    id: 'b1k9-sprint', engine: 'sprint', title: 'Endungs-Sprint', blurb: 'Adjektive ohne Artikel: Welche Endung passt? 60 Sekunden!', skill: 'Adjektive ohne Artikel', tone: 'mint', chapter: 9, emoji: '⚡',
    rules: 'Du siehst ein Adjektiv ohne Artikel. Tippe auf die richtige Form.', label: 'Welche Endung?',
    items: [
      { q: 'frisch___ Kaffee (Nominativ)', a: 'frischer', wrong: ['frisches', 'frischen'] }, { q: 'kalt___ Wasser (Nominativ)', a: 'kaltes', wrong: ['kalter', 'kalte'] },
      { q: 'gut___ Musik (Nominativ)', a: 'gute', wrong: ['guter', 'gutes'] }, { q: 'alt___ Lieder (Nominativ)', a: 'alte', wrong: ['alten', 'alter'] },
      { q: 'Ich trinke heiß___ Tee.', a: 'heißen', wrong: ['heißer', 'heißem'] }, { q: 'Zimmer mit groß___ Balkon', a: 'großem', wrong: ['großen', 'großer'] },
      { q: 'bei schlecht___ Wetter', a: 'schlechtem', wrong: ['schlechtes', 'schlechten'] }, { q: 'mit gut___ Laune', a: 'guter', wrong: ['gute', 'gutem'] },
      { q: 'mit alt___ Freunden', a: 'alten', wrong: ['alte', 'altem'] }, { q: 'Schön___ Wochenende!', a: 'Schönes', wrong: ['Schöner', 'Schönen'] },
      { q: 'Herzlich___ Glückwunsch!', a: 'Herzlichen', wrong: ['Herzlicher', 'Herzliches'] }, { q: 'Wir suchen nett___ Leute.', a: 'nette', wrong: ['netten', 'netter'] },
    ],
  },
  {
    id: 'b1k9-memory', engine: 'memory', title: 'Kunst-Memory', blurb: 'Museum, Theater, Musik: Finde die Paare.', skill: 'Wortschatz Kunst', tone: 'lilac', chapter: 9, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein deutsches Wort und seine englische Übersetzung.', kinds: ['Deutsch', 'Englisch'],
    pairs: [['die Bühne', 'stage'], ['das Gemälde', 'painting'], ['die Ausstellung', 'exhibition'], ['der Chor', 'choir'], ['das Volkslied', 'folk song'], ['das Publikum', 'audience'], ['der Vorhang', 'curtain'], ['der Pinsel', 'paintbrush'], ['die Strophe', 'verse'], ['die Eintrittskarte', 'ticket']],
  },
  {
    id: 'b1k9-satzbau', engine: 'satzbau', title: 'nicht-Baukasten', blurb: 'Wohin gehört nicht? Bau die Sätze!', skill: 'Stellung von nicht', tone: 'sky', chapter: 9, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Verneint nicht den ganzen Satz, steht es weit hinten. Verneint es nur einen Teil, steht es direkt davor.',
    sentences: [
      { parts: ['Ich', 'komme', 'heute', 'nicht.'], hint: 'ganzer Satz: nicht am Ende' },
      { parts: ['Ich', 'habe', 'das Video', 'nicht', 'gesehen.'], hint: 'nicht vor dem Partizip' },
      { parts: ['Wir', 'gehen', 'heute', 'nicht', 'ins Museum.'], hint: 'nicht vor der Ortsangabe' },
      { parts: ['Das Bild', 'ist', 'nicht', 'teuer.'], hint: 'nicht vor dem Adjektiv' },
      { parts: ['Felix', 'kann', 'morgen', 'nicht', 'singen.'], hint: 'nicht vor dem Infinitiv' },
      { parts: ['Nicht Felix', 'hat', 'das Video', 'gefilmt,', 'sondern Sofia.'], hint: 'nur ein Teil: nicht direkt davor' },
      { parts: ['Lina', 'ruft', 'heute', 'nicht', 'an.'], hint: 'trennbares Verb: nicht vor der Vorsilbe' },
      { parts: ['Ich', 'kenne', 'den Sänger', 'nicht.'], hint: 'nicht nach dem Akkusativ-Objekt' },
    ],
  },
  {
    id: 'b1k9-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Kunst, Theater und Musik.', skill: 'Artikel', tone: 'rose', chapter: 9, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('die Kunst, das Museum, das Theater, die Bühne, der Chor, das Lied, die Ausstellung, das Gemälde, der Pinsel, die Leinwand, der Vorhang, das Publikum, die Strophe, der Refrain, die Anzeige, der Künstler, die Skulptur, das Konzert'),
  },
];
