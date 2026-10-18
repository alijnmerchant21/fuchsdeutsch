import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// B1 Kapitel 11: Stadt, Land, Fluss. Leben in der Stadt, Verkehr, lebenswerte Städte, Leipzig und Zürich.
// Grammar: Artikelwörter als Pronomen (einer, keins, meiner, welche), irgendein/irgendwelche, Adjektive als Nomen, Relativsätze mit was und wo.
// Aussprache: Texte vorlesen, Satzzeichen helfen. Strategie: formell und informell schreiben. Prüfungstraining: Schreiben Teil 1.

export const glossaryB1k11: Record<string, GlossaryEntry> = {
  Verkehr: { de: 'Alle Autos, Busse, Bahnen, Fahrräder und Fußgänger auf den Straßen.', en: 'traffic, transportation' },
  lebenswert: { de: 'So, dass man dort gern und gut lebt.', en: 'livable, worth living in' },
  Petition: { de: 'Ein Brief mit einer Bitte oder Forderung an die Politik. Viele Menschen unterschreiben ihn.', en: 'petition' },
  Stadtrat: { de: 'Die gewählten Politikerinnen und Politiker, die in einer Stadt entscheiden.', en: 'city council' },
  Rathaus: { de: 'Das Gebäude, in dem die Stadtverwaltung und der Stadtrat arbeiten. In Leipzig: das Neue Rathaus.', en: 'city hall' },
  Anhörung: { de: 'Ein Termin, bei dem Politiker die Meinung von Bürgern oder Experten hören.', en: 'hearing' },
  Empfänger: { de: 'Die Person oder Firma, die einen Brief oder eine E-Mail bekommt.', en: 'recipient' },
  Pressemitteilung: { de: 'Ein kurzer, sachlicher Text für Zeitungen, Radio und Fernsehen.', en: 'press release' },
  Ausschuss: { de: 'Eine kleine Gruppe aus dem Stadtrat, die ein Thema genauer bearbeitet.', en: 'committee' },
  Unterschrift: { de: 'Der eigene Name, mit der Hand geschrieben, zum Beispiel unter einem Vertrag.', en: 'signature' },
  Erhaltungssatzung: { de: 'Eine Regel der Stadt, die ein Viertel und seine Bewohner vor zu großen Veränderungen schützt.', en: 'conservation ordinance (protects a neighborhood from luxury renovation)' },
  Völkerschlachtdenkmal: { de: 'Ein großes Denkmal in Leipzig. Es erinnert an die Schlacht gegen Napoleon im Jahr 1813.', en: 'Monument to the Battle of the Nations' },
  Montagsdemonstration: { de: 'Die Demonstrationen in Leipzig im Herbst 1989, immer montags nach dem Gebet in der Nikolaikirche.', en: 'Monday demonstrations (Leipzig, 1989)' },
  Neuseenland: { de: 'Eine Landschaft mit neuen Seen südlich von Leipzig. Früher hat man dort Braunkohle abgebaut.', en: 'Leipzig New Lake District' },
  Kanal: { de: 'Ein Wasserweg, den Menschen gebaut haben.', en: 'canal' },
  vermitteln: { de: 'Bei einem Streit helfen, dass beide Seiten sich verstehen und eine Lösung finden.', en: 'to mediate' },
  Viertel: { de: 'Ein Teil einer Stadt, zum Beispiel Plagwitz in Leipzig.', en: 'neighborhood, district' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Stadt oder Land?', 'butter', 8,
  ['das Kapitel kennenlernen', 'über Stadt und Land sprechen'], [
    overview('e-over', 'Kapitel 11: Stadt, Land, Fluss',
      'Juli in Leipzig. Die Stadt ist voller Leben: Menschen baden in den Seen, Kanus fahren auf den Kanälen. Aber die Mieten steigen. In Kapitel 11 geht es um das Leben in der Stadt und um den [[Verkehr]]. Du liest einen Magazintext über Leipzig, hörst eine Diskussion darüber, was eine Stadt [[lebenswert]] macht, und liest einen Blog aus Zürich. Du lernst, etwas näher zu beschreiben: *alles, was ich brauche; die Stadt, wo ich wohne*. Dazu kommen Pronomen wie *einer, keins, meiner* und Adjektive als Nomen: *ein Bekannter, etwas Neues*.\n\nIn der WG wird es ernst: Die Mietergruppe hat eine [[Petition]] an den [[Stadtrat]] geschickt. Im Neuen [[Rathaus]] gibt es eine [[Anhörung]]. Sofia schreibt an verschiedene [[Empfänger]]: eine formelle E-Mail an die Stadt, eine Nachricht an ihre Freundin Bianca und eine [[Pressemitteilung]].',
      'This chapter is about city life and traffic. You read a magazine article about Leipzig, listen to a radio discussion about what makes a city livable, and read a blog from Zurich. Grammar: articles used as pronouns (einer, keins, meiner, welche), irgendein (some ... or other), adjectives used as nouns (der Bekannte, ein Bekannter, etwas Neues) and relative clauses with was and wo (alles, was ich brauche; die Stadt, wo ich wohne). You also practice reading aloud and writing to different recipients, formal and informal. In the story, the tenants present their petition at a hearing in Leipzig’s city hall, and Sofia writes a formal email, a message to a friend and a press release.',
      ['über das Leben in der Stadt sprechen', 'einen Magazintext und einen Blog verstehen', 'über lebenswerte Städte diskutieren und vermitteln', 'etwas näher beschreiben (Relativsätze mit was und wo)', 'formell und informell schreiben', 'ein Programm für einen Stadtbesuch erstellen']),
    match('e-match', [['die Straßenbahn', '🚋'], ['das Fahrrad', '🚲'], ['der Bahnhof', '🚉'], ['die Brücke', '🌉'], ['der Traktor', '🚜'], ['der Wald', '🌲'], ['die Kuh', '🐄'], ['das Hochhaus', '🏙️']],
      { task: 'Welches Wort passt zum Bild?', taskEn: 'Match each word to the picture.' }),
    sort('e-sort', ['typisch Stadt', 'typisch Land'], [['viel Verkehr', 0], ['viele Kinos und Theater', 0], ['hohe Mieten', 0], ['alle paar Minuten eine Straßenbahn', 0], ['frische Luft', 1], ['viel Ruhe', 1], ['nur zweimal am Tag ein Bus', 1], ['ein großer Garten', 1]],
      { task: 'Typisch Stadt oder typisch Land? Sortiere.', taskEn: 'Typical of the city or typical of the countryside? Sort.' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Leipzig in Bewegung', 'mint', 15,
  ['einen Magazintext verstehen', 'Artikelwörter als Pronomen', 'einen Bericht schreiben'], [
    text('t1-text', `**Leipzig: Die Stadt, die immer in Bewegung ist**

Wer mit dem Zug nach Leipzig kommt, steht zuerst in einem Palast: Der Hauptbahnhof aus dem Jahr 1915 ist einer der größten Kopfbahnhöfe Europas. Heute gibt es darin auch Geschäfte, Cafés und Restaurants auf mehreren Etagen.

Leipzig ist eine Stadt mit viel Geschichte. Das Völkerschlachtdenkmal erinnert an eine große Schlacht gegen Napoleon im Jahr 1813. Es ist 91 Meter hoch, und von oben sieht man die ganze Stadt. Im Herbst 1989 schrieb Leipzig wieder Geschichte: Jeden Montag demonstrierten Tausende Menschen nach dem Friedensgebet in der Nikolaikirche für Freiheit. Am 9. Oktober waren es rund 70.000. Die Montagsdemonstrationen waren ein wichtiger Schritt zum Ende der DDR.

Was viele Besucher überrascht: Leipzig ist eine grüne Stadt am Wasser. Im Westen, in Plagwitz, fließen Kanäle zwischen alten Fabriken. Wo früher Maschinen gebaut wurden, sind heute Ateliers, Wohnungen und Cafés. Im Sommer fährt man mit dem Kanu durch das Viertel. Im Süden liegt das Neuseenland. Dort, wo man früher Braunkohle abgebaut hat, sind große Seen entstanden. Am Cospudener See kann man baden, segeln und am Strand liegen. Mit dem Fahrrad ist man in einer halben Stunde aus der Innenstadt da.

Aber die Stadt wächst schnell, und das hat auch Nachteile: Die Mieten steigen, und auf den Straßen gibt es immer mehr Verkehr. Viele Leipzigerinnen und Leipziger fragen sich: Bleibt unsere Stadt für alle bezahlbar?`,
      { kicker: 'Lesen', title: 'Aus einem Reisemagazin', task: 'Lies den Magazintext über Leipzig.', taskEn: 'Read the magazine article about Leipzig. Kopfbahnhof = terminal station (the tracks end there). Braunkohle = lignite, brown coal.' }),
    mcq('t1-q1', 'Was ist besonders am Leipziger Hauptbahnhof?', ['Er ist einer der größten Kopfbahnhöfe Europas.', 'Er ist der älteste Bahnhof Deutschlands.', 'Er liegt direkt an einem See.'], 0),
    mcq('t1-q2', 'Woran erinnert das Völkerschlachtdenkmal?', ['an die Montagsdemonstrationen', 'an eine Schlacht gegen Napoleon', 'an die alten Fabriken'], 1),
    mcq('t1-q3', 'Wie sind die Seen im Neuseenland entstanden?', ['Ein Fluss hat seinen Weg geändert.', 'Man hat sie für Kanutouren gebaut.', 'Dort hat man früher Braunkohle abgebaut.'], 2),
    mcq('t1-q4', 'Welches Problem nennt der Text am Ende?', ['zu wenige Touristen', 'steigende Mieten und mehr Verkehr', 'zu wenig Wasser'], 1),
    grammar('t1-gram', 'Artikelwörter als Pronomen', {
      intro: 'Wenn klar ist, welches Nomen gemeint ist, kann das **Artikelwort allein** stehen. Es bekommt dann die Endung des **bestimmten Artikels**: *der → einer, das → eins, die → eine*.',
      head: ['', 'maskulin (der)', 'neutral (das)', 'feminin (die)', 'Plural (die)'],
      rows: [
        ['Nominativ', 'ein**er** / kein**er**', 'ein**s** / kein**s**', 'ein**e** / kein**e**', '**welche** / kein**e**'],
        ['Akkusativ', 'ein**en** / kein**en**', 'ein**s** / kein**s**', 'ein**e** / kein**e**', '**welche** / kein**e**'],
        ['Dativ', 'ein**em** / kein**em**', 'ein**em** / kein**em**', 'ein**er** / kein**er**', '**welchen** / kein**en**'],
      ],
      notes: [
        '*Gibt es hier einen Park? Ja, da drüben ist **einer**.* *Hast du ein Ticket? Nein, ich habe **keins**.*',
        'Im Plural gibt es kein *ein*. Man sagt **welche**: *Brauchst du Briefmarken? Ich habe noch **welche**.*',
        'Possessivartikel funktionieren wie *kein*: *Ist das dein Fahrrad? Ja, das ist **meins**. Ist das sein Schlüssel? Ja, das ist **seiner**.*',
        'Fragen mit **welch-**: *Hier fahren zwei Straßenbahnen. **Welche** fährt zum Hauptbahnhof?*',
        'Neutral sagt man meistens **eins, keins, meins**. In geschriebenen Texten auch: *eines, keines, meines*.',
      ],
      en: 'When it is clear which noun you mean, an article word can stand alone as a pronoun. It then takes the ending of the definite article: einer (der), eins (das), eine (die). Negative: keiner, keins, keine. Possessives work the same way: meiner, meins, meine. In the plural there is no ein, so you use welche (some): Ich habe noch welche (I still have some). Questions use welcher, welches, welche (which one).',
    }),
    gap('t1-gap', ['Gibt es hier in der Nähe eine Haltestelle? Ja, da vorne ist {{eine}}.', 'Ich suche einen Parkplatz, aber hier ist {{keiner}}.', 'Hast du ein Ticket? Nein, ich brauche noch {{eins}}.', 'Brauchst du Briefmarken? Ich habe noch {{welche}}.', 'Ist das dein Fahrrad? Ja, das ist {{meins}}.', 'Hier gibt es viele Cafés. In {{welchem}} treffen wir uns?'],
      { bank: ['eine', 'keiner', 'eins', 'welche', 'meins', 'welchem'], task: 'Ergänze das Pronomen.', taskEn: 'Fill in the pronoun. Think about the gender and the case of the noun it replaces.' }),
    match('t1-match', [['Gibt es hier einen Bäcker?', 'Ja, da drüben ist einer.'], ['Gibt es hier ein Kino?', 'Nein, hier gibt es keins.'], ['Hast du eine Fahrkarte?', 'Ja, ich habe eine.'], ['Gibt es hier Parkplätze?', 'Nein, leider gibt es hier keine.'], ['Hast du noch Briefmarken?', 'Ja, ich habe noch welche.'], ['Ist das dein Schlüssel?', 'Nein, das ist nicht meiner.']],
      { task: 'Frage und Antwort', taskEn: 'Match each question to the right answer. The pronoun tells you which noun is meant.' }),
    compose('t1-comp', 'Schreib einen kurzen Bericht über deine Stadt für ein Magazin.', [
      ['Stell deine Stadt vor.', 'Introduce your city.', ['Ich', 'wohne', 'seit drei Jahren', 'in Leipzig.']],
      ['Nenne etwas Besonderes.', 'Name something special about it.', ['Besonders schön', 'sind', 'die Kanäle', 'in Plagwitz.']],
      ['Nenne ein Problem.', 'Name a problem.', ['Leider', 'steigen', 'die Mieten', 'jedes Jahr.']],
    ], { task: 'Bau die Sätze für deinen Bericht.', taskEn: 'Build the sentences for your short report about your city.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Was macht eine Stadt lebenswert?', 'sky', 15,
  ['eine Diskussion verstehen', 'über lebenswerte Städte diskutieren', 'in einer Diskussion vermitteln', 'Adjektive als Nomen'], [
    audio('t2-audio', 'Hören: Die Stadtdiskussion', [
      ['moderatorin', 'Willkommen zu unserer Diskussion: Was macht eine Stadt lebenswert? Bei mir im Studio sind Herr Yılmaz, Stadtplaner aus Graz, die Studentin Jule und der Taxifahrer Atze. Herr Yılmaz, fangen Sie doch mal an.'],
      ['herrYilmaz', 'Gern. Für mich ist eine Stadt lebenswert, wenn alle gut leben können: die Jungen und die Alten, die Reichen und die Armen. Das Wichtigste ist bezahlbarer Wohnraum. Und kurze Wege: Alles, was man im Alltag braucht, sollte man in fünfzehn Minuten erreichen.'],
      ['jule', 'Genau! Und weniger Autos. Ich fahre jeden Tag mit dem Rad zur Uni, und auf manchen Straßen ist das echt gefährlich. Ein Bekannter von mir hatte letzte Woche einen Unfall.'],
      ['atze', 'Na ja, Moment mal. Ich bin Taxifahrer. Wenn die Straßen nur noch für Fahrräder sind, wie sollen denn die Älteren zum Arzt kommen? Meine Kunden sind oft über achtzig.'],
      ['jule', 'Das sagt doch keiner! Aber die Straßen gehören halt nicht nur den Autofahrern.'],
      ['atze', 'Ja, aber …'],
      ['moderatorin', 'Moment, eins nach dem anderen. Lassen wir Atze bitte kurz ausreden.'],
      ['atze', 'Danke. Ich meine nur: Viele Erwachsene arbeiten am Stadtrand, und da fährt kein Bus. Die brauchen eben ein Auto.'],
      ['moderatorin', 'Wenn ich Sie beide richtig verstehe, wollen Sie sichere Straßen, nur für verschiedene Menschen. Herr Yılmaz, gibt es da eine Lösung?'],
      ['herrYilmaz', 'Ja. Graz hat schon 1992 etwas Neues probiert: Tempo 30 auf den meisten Straßen der Stadt. Später kamen mehr Busse in die Außenbezirke dazu. Am Anfang waren viele dagegen. Heute gibt es weniger Unfälle, und die Taxis kommen trotzdem überall hin.'],
      ['atze', 'Hm. Tempo 30 ist für mich nichts Besonderes. Im Feierabendverkehr fahre ich eh nicht schneller.'],
      ['moderatorin', 'Dann sind sich ja doch alle in einem Punkt einig: Eine lebenswerte Stadt ist eine Stadt, wo sich alle sicher bewegen können. Vielen Dank!'],
    ], { task: 'Hör die Diskussion. Was macht eine Stadt für die Gäste lebenswert?', taskEn: 'Listen to the radio discussion. What makes a city livable for each guest? Notice how the host mediates: she lets Atze finish and sums up both opinions. Listen for adjectives used as nouns: die Jungen, die Alten, ein Bekannter, etwas Neues.' }),
    mcq('t2-q1', 'Was ist für Herrn Yılmaz das Wichtigste?', ['viele Parkplätze', 'bezahlbarer Wohnraum', 'große Einkaufszentren'], 1),
    mcq('t2-q2', 'Warum brauchen manche Menschen laut Atze ein Auto?', ['Sie arbeiten am Stadtrand, wo kein Bus fährt.', 'Fahrräder sind zu teuer.', 'Die Straßenbahn ist zu langsam.'], 0),
    mcq('t2-q3', 'Was hat Graz ausprobiert?', ['kostenlose Straßenbahnen', 'eine autofreie Innenstadt', 'Tempo 30 und mehr Busse in die Außenbezirke'], 2),
    mcq('t2-q4', 'Was macht die Moderatorin, als Jule und Atze streiten?', ['Sie beendet die Sendung.', 'Sie gibt Jule recht.', 'Sie lässt Atze ausreden und fasst beide Meinungen zusammen.'], 2),
    grammar('t2-gram', 'Adjektive als Nomen', {
      intro: 'Viele Adjektive und Partizipien kann man als **Nomen** benutzen. Man schreibt sie **groß**, aber sie haben die **Endungen wie Adjektive**: *bekannt → der Bekannt**e**, ein Bekannt**er**, die Bekannt**en***.',
      head: ['', 'maskulin', 'feminin', 'Plural'],
      rows: [
        ['Nominativ mit der/die', 'der Bekannt**e**', 'die Bekannt**e**', 'die Bekannt**en**'],
        ['Nominativ mit ein/eine / ohne Artikel', 'ein Bekannt**er**', 'eine Bekannt**e**', 'Bekannt**e**'],
        ['Akkusativ', 'den / einen Bekannt**en**', 'die / eine Bekannt**e**', 'die Bekannt**en** / Bekannt**e**'],
        ['Dativ', 'dem / einem Bekannt**en**', 'der / einer Bekannt**en**', 'den Bekannt**en** / Bekannt**en**'],
      ],
      notes: [
        'So auch: der/die **Deutsche** (ein Deutscher, viele Deutsche), der/die **Erwachsene**, **Jugendliche**, **Verwandte**, **Kranke**, **Alte**, **Junge**.',
        'Nach **etwas, nichts, viel, wenig** hat das Adjektiv als Nomen die Endung **-es**: *etwas Neu**es**, nichts Besonder**es**, viel Gut**es***.',
        'Achtung: *etwas **anderes*** schreibt man klein.',
        'Mit **das** (neutral): *das Neue, das Gute*, auch im Superlativ: ***Das Beste** an Leipzig sind die Seen.*',
      ],
      en: 'Many adjectives can be used as nouns. They are capitalized but keep adjective endings: der Bekannte (the acquaintance, male), ein Bekannter, die Bekannte (female), die Bekannten (plural). The same goes for der/die Deutsche, Erwachsene (adult), Jugendliche (young person), Verwandte (relative). After etwas, nichts, viel and wenig, the noun ends in -es: etwas Neues (something new), nichts Besonderes (nothing special). Exception: etwas anderes stays lowercase.',
    }),
    gap('t2-gap', ['Ein {{Bekannter}} von mir wohnt in Graz. (bekannt)', 'Die {{Jugendlichen}} treffen sich abends am Kanal. (jugendlich)', 'Gibt es in der Zeitung etwas {{Neues}}? (neu)', 'Am Wochenende ist nichts {{Besonderes}} passiert. (besonder-)', 'Viele {{Deutsche}} fahren gern Fahrrad. (deutsch)', 'Ich habe gestern mit einer {{Verwandten}} telefoniert. (verwandt)'],
      { task: 'Ergänze das Adjektiv als Nomen.', taskEn: 'Fill in the adjective used as a noun. Capitalize it and use the right adjective ending.' }),
    phrases('t2-phr', 'Diskutieren und vermitteln', {
      'Die Meinung sagen': ['Für mich ist eine Stadt lebenswert, wenn …', 'Das Wichtigste ist für mich …', 'Ich finde es wichtig, dass …'],
      'Ausreden lassen': ['Moment, lassen wir sie bitte ausreden.', 'Eins nach dem anderen.', 'Bitte nicht alle gleichzeitig.'],
      'Zusammenfassen': ['Wenn ich Sie richtig verstehe, …', 'Sie meinen also, dass …', 'In einem Punkt sind Sie sich einig: …'],
      'Eine Lösung suchen': ['Was halten Sie von einem Kompromiss?', 'Könnten wir uns darauf einigen, dass …?', 'Vielleicht gibt es einen Mittelweg.'],
    }),
    sort('t2-sort', ['Wohnen', 'Verkehr', 'Freizeit'], [['bezahlbare Mieten', 0], ['genug Sozialwohnungen', 0], ['ruhige Innenhöfe', 0], ['sichere Radwege', 1], ['Busse bis an den Stadtrand', 1], ['Tempo 30', 1], ['Parks und Seen', 2], ['Kinos und Theater', 2]],
      { task: 'Was macht eine Stadt lebenswert? Sortiere.', taskEn: 'What makes a city livable? Sort the ideas into housing, traffic and free time.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Grüezi aus Zürich', 'lilac', 15,
  ['einen Blog über Zürich verstehen', 'etwas näher beschreiben: Relativsätze mit was und wo', 'ein Programm für einen Stadtbesuch erstellen', 'Prüfungstraining: Schreiben Teil 1'], [
    text('t3-text', `**Biancas Blog: Alles, was ich an Zürich liebe (und einiges, was mich nervt)**

Olá und grüezi! Viele von euch kennen mich noch aus São Paulo, wo ich mit Sofia an der Uni war. Seit zwei Jahren lebe ich jetzt in Zürich und arbeite in einem Architekturbüro. Heute schreibe ich über alles, was mir hier gefällt.

Das Beste, was es in Zürich gibt, ist das Wasser. Im Sommer schwimmen die Leute nach der Arbeit in der Limmat, dem Fluss, der mitten durch die Stadt fließt. Man packt seine Kleidung in einen wasserdichten Sack und lässt sich einfach treiben. Es gibt mehrere Flussbäder, wo man kostenlos baden kann. Für mich als Brasilianerin war das etwas ganz Neues!

Mit der Tram komme ich überall hin. Die blau-weißen Trams sind pünktlich und sauber, was ich wirklich toll finde. Mein Lieblingsviertel ist Zürich-West, wo früher Fabriken standen. Heute gibt es dort Clubs, Restaurants und einen Garten auf einem alten Industriegelände. Das erinnert mich an Plagwitz, wo Sofia wohnt.

Was mich weniger begeistert: die Preise. Ein Kaffee kostet etwa fünf Franken, ein WG-Zimmer oft über tausend. Und am Sonntag sind fast alle Geschäfte geschlossen.

In Umfragen ist Zürich oft eine der lebenswertesten Städte der Welt. Ich finde, das stimmt, wenn man genug verdient. Ende Juli besuche ich Sofia in Leipzig. Ich bin gespannt, was ich dort Neues entdecke!`,
      { kicker: 'Lesen', title: 'Ein Blog aus Zürich', task: 'Lies den Blog von Sofias Freundin Bianca.', taskEn: 'Read the blog by Sofia’s friend Bianca, who lives in Zurich. sich treiben lassen = to drift (with the current). Notice the relative clauses with was and wo.' }),
    mcq('t3-q1', 'Woher kennt Bianca Sofia?', ['aus der Uni in São Paulo', 'aus dem Büro in Zürich', 'aus der WG in Leipzig'], 0),
    mcq('t3-q2', 'Was machen viele Menschen in Zürich im Sommer nach der Arbeit?', ['Sie fahren in die Berge.', 'Sie schwimmen in der Limmat.', 'Sie gehen in den Club.'], 1),
    mcq('t3-q3', 'Was gefällt Bianca in Zürich nicht so gut?', ['die Trams', 'die hohen Preise', 'das Wasser'], 1),
    mcq('t3-q4', 'Warum erinnert Zürich-West Bianca an Plagwitz?', ['Dort standen früher Fabriken.', 'Dort gibt es viele Seen.', 'Dort wohnen viele Brasilianer.'], 0),
    grammar('t3-gram', 'Relativsätze mit was und wo', {
      intro: 'Mit **was** und **wo** kann man etwas **näher beschreiben**. Wie in jedem Relativsatz steht das Verb **am Ende**, und vor dem Relativsatz steht ein **Komma**.',
      head: ['nach …', 'Relativpronomen', 'Beispiel'],
      rows: [
        ['alles, etwas, nichts, vieles, das', 'was', 'Das ist **alles**, **was** ich **brauche**.'],
        ['Superlativ (neutral)', 'was', '**Das Beste**, **was** es in Zürich **gibt**, ist das Wasser.'],
        ['einem ganzen Satz', 'was', 'Die Trams sind pünktlich, **was** ich toll **finde**.'],
        ['Orten (Stadt, Viertel, Land …)', 'wo', 'Zürich-West ist ein Viertel, **wo** früher Fabriken **standen**.'],
        ['Städte- und Ländernamen', 'wo', 'Bianca besucht Sofia in Leipzig, **wo** sie jetzt **wohnt**.'],
      ],
      notes: [
        'Nach einem Nomen für einen Ort kann man statt *wo* auch Präposition + Relativpronomen benutzen: *die Stadt, **wo** ich wohne* = *die Stadt, **in der** ich wohne*.',
        'Nach Städte- und Ländernamen benutzt man **wo**: *in Leipzig, **wo** …*',
        'Für eine Richtung: **wohin** und **woher**: *das Land, **woher** Bianca kommt*.',
        'Nach Nomen wie *das Haus, das Buch* steht **das**, nicht *was*: *das Buch, **das** ich lese*.',
      ],
      en: 'Use was after alles, etwas, nichts, vieles and das, after a neuter superlative (das Beste, was ...) and to refer back to a whole sentence (..., was ich toll finde = which I think is great). Use wo after places, especially city and country names: die Stadt, wo ich wohne (the city where I live). After a place noun, wo can be replaced by preposition + relative pronoun (in der). The verb goes to the end, and a comma comes before the relative clause.',
    }),
    gap('t3-gap', ['Das ist alles, {{was}} ich weiß.', 'Leipzig ist die Stadt, {{wo|in der}} ich am liebsten wohne.', 'Das Schönste, {{was}} ich in Zürich gesehen habe, war der See.', 'Gibt es etwas, {{was}} man am Sonntag machen kann?', 'Plagwitz ist ein Viertel, {{wo|in dem}} früher viele Fabriken waren.', 'Er hat die Prüfung bestanden, {{was}} uns sehr freut.', 'Das ist das Café, {{in dem|wo}} wir uns kennengelernt haben.'],
      { task: 'was oder wo? Ergänze.', taskEn: 'Fill in was or wo. After a place noun, a preposition + relative pronoun (in der, in dem) is also correct.' }),
    order('t3-order', ['Das', 'ist', 'alles,', 'was', 'ich', 'brauche.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence. In the relative clause, the verb goes to the end.' }),
    phrases('t3-phr', 'Ein Programm für einen Stadtbesuch', {
      'Etwas vorschlagen': ['Am Freitagabend könnten wir …', 'Wie wäre es mit …?', 'Ich schlage vor, dass wir …'],
      'Etwas empfehlen': ['Du musst unbedingt … sehen.', 'Das Beste, was man hier machen kann, ist …', 'Lohnt sich sehr: …'],
      'Planen': ['Zuerst …, danach …, zum Schluss …', 'Am Vormittag / Am Nachmittag / Am Abend …', 'Wenn es regnet, gehen wir lieber …'],
    }),
    compose('t3-prog', 'Bianca besucht Sofia von Freitag bis Sonntag. Erstell ein Programm für ihren Besuch in Leipzig.', [
      ['Freitagabend', 'Friday evening', ['Am Freitagabend', 'essen', 'wir', 'bei Kenji', 'im Restaurant.']],
      ['Samstag', 'Saturday', ['Am Samstag', 'fahren', 'wir', 'mit dem Rad', 'zum Cospudener See.']],
      ['Sonntag', 'Sunday', ['Am Sonntagvormittag', 'steigen', 'wir', 'auf das Völkerschlachtdenkmal.']],
    ], { task: 'Bau das Programm.', taskEn: 'Build a weekend program for Bianca’s visit to Leipzig.' }),
    tip('t3-pt-tip', 'Prüfungstraining: Schreiben Teil 1', 'In **Schreiben Teil 1** schreibst du eine **private E-Mail** an einen Freund oder eine Freundin. Du hast 20 Minuten und schreibst etwa **80 Wörter**. In der Aufgabe stehen **drei Punkte**. Du musst zu **allen drei** etwas schreiben.\n\n1. Lies die drei Punkte genau: *beschreiben, begründen, einen Vorschlag machen* sind verschiedene Aufgaben.\n2. Schreib zu jedem Punkt zwei oder drei Sätze. Verbinde sie mit *weil, deshalb, aber, dann*.\n3. Vergiss **Anrede** und **Gruß** nicht: *Liebe Bianca, … Liebe Grüße, …*\n4. Schreib mit **du**, denn es ist eine Freundin.\n5. Lies den Text am Ende noch einmal: Steht das Verb richtig? Stimmen die Endungen?'),
    text('t3-pt-text', `**Aufgabe**

Deine Freundin Bianca aus Zürich besucht dich nächstes Wochenende in Leipzig. Sie hat geschrieben und gefragt, was ihr zusammen machen könnt. Leider musst du am Samstagvormittag arbeiten.

Schreib Bianca eine E-Mail:
- **Beschreib:** Was könnt ihr am Wochenende in Leipzig machen?
- **Begründe:** Warum hast du am Samstagvormittag keine Zeit?
- **Mach einen Vorschlag:** Wo und wann trefft ihr euch am Freitag?

Schreib etwa 80 Wörter. Vergiss Anrede und Gruß nicht.`,
      { kicker: 'Prüfungstraining', title: 'Schreiben Teil 1', task: 'Lies die Aufgabe. Was musst du schreiben?', taskEn: 'Read the exam task. You must answer all three points: describe, give a reason, make a suggestion.' }),
    mcq('t3-pt-q1', 'Wie beginnst du die E-Mail an Bianca?', ['Sehr geehrte Frau Bianca,', 'Liebe Bianca,', 'Sehr geehrte Damen und Herren,'], 1, { why: 'Bianca ist eine Freundin: Man schreibt informell mit „Liebe …“ oder „Hallo …“.' }),
    mcq('t3-pt-q2', 'Welcher Satz passt zu Punkt 2 (Begründen)?', ['Am Sonntag können wir zum See fahren.', 'Leider habe ich am Samstagvormittag keine Zeit, weil ich arbeiten muss.', 'Wollen wir uns am Hauptbahnhof treffen?'], 1, { why: 'Begründen heißt: sagen, warum. Hier mit „weil“.' }),
    compose('t3-pt-comp', 'Schreib die drei wichtigsten Sätze deiner E-Mail an Bianca.', [
      ['Beschreib, was ihr machen könnt.', 'Describe what you can do.', ['Am Sonntag', 'können', 'wir', 'zum Cospudener See', 'fahren.']],
      ['Begründe, warum du keine Zeit hast.', 'Explain why you are busy.', ['Leider', 'muss', 'ich', 'am Samstagvormittag', 'arbeiten.']],
      ['Mach einen Vorschlag.', 'Make a suggestion.', ['Wollen', 'wir', 'uns', 'am Freitag um sieben', 'am Hauptbahnhof treffen?']],
    ], { task: 'Bau die Sätze zu den drei Punkten.', taskEn: 'Build one sentence for each of the three points in the task.' }),
    mcq('t3-pt-q3', 'Welcher Schluss passt zu einer E-Mail an eine Freundin?', ['Mit freundlichen Grüßen', 'Hochachtungsvoll', 'Ich freu mich auf dich! Liebe Grüße'], 2, { why: '„Mit freundlichen Grüßen“ ist formell. An Freunde schreibt man „Liebe Grüße“ oder „Viele Grüße“.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 11: Die Anhörung', 'rose', 12,
  ['eine formelle E-Mail verstehen', 'eine Anhörung verstehen', 'an verschiedene Empfänger schreiben'], [
    text('wg-intro', 'Mittwoch, 14. Juli 2027. Seit dem Nachbarschaftstreffen im Juni haben die Mieterinnen und Mieter vom Fuchsbau Unterschriften gesammelt: auf dem Wochenmarkt, in Kenjis Restaurant und nach den Konzerten von Felix’ Band. 2.417 Menschen haben die Petition „Fuchsbau bleibt!“ unterschrieben. Heute ist die Anhörung im Petitionsausschuss des Stadtrats, im Neuen Rathaus. Eine Woche vorher hat Sofia eine E-Mail an die Stadt geschrieben.',
      { kicker: 'Die Geschichte', en: 'Wednesday, July 14, 2027. Since the neighborhood meeting in June, the tenants of the Fuchsbau have been collecting signatures: at the farmers market, in Kenji’s restaurant and after the concerts of Felix’s band. 2,417 people have signed the petition “Fuchsbau bleibt!” (The Fuchsbau stays). Today is the hearing at the city council’s petitions committee in the Neues Rathaus, Leipzig’s city hall. A week earlier, Sofia wrote an email to the city.' }),
    text('wg-mail', `**Betreff:** Anhörung zur Petition „Fuchsbau bleibt!“ am 14. Juli 2027

Sehr geehrte Damen und Herren,

vielen Dank für Ihre Einladung zur Anhörung im Petitionsausschuss am 14. Juli 2027 um 16 Uhr. Wir nehmen gern teil.

Ich schreibe Ihnen im Namen der Mietergruppe „Fuchsbau bleibt!“ und habe noch zwei Fragen:

1. Wie viele Personen aus unserer Gruppe dürfen in der Anhörung sprechen? Unsere Sprecherin, Frau Nele Wagner, möchte die Petition vorstellen. Außerdem möchte ein Nachbar, der seit 1968 im Haus wohnt, etwas über die Geschichte des Hauses erzählen.

2. Unser Nachbar ist nicht mehr gut zu Fuß. Gibt es im Neuen Rathaus einen Aufzug, den er benutzen kann?

Gern würden wir Ihnen vorher auch eine kurze Präsentation schicken. Wäre das möglich?

Für Ihre Antwort bedanke ich mich im Voraus.

Mit freundlichen Grüßen
Sofia
Mietergruppe „Fuchsbau bleibt!“, Karl-Heine-Straße, Leipzig-Plagwitz`,
      { kicker: 'Formell', title: 'Sofias E-Mail an die Stadt', task: 'Lies Sofias formelle E-Mail an die Stadt.', taskEn: 'Read Sofia’s formal email to the city.', en: 'Sofia thanks the city for the invitation to the hearing on July 14 at 4 p.m. and confirms that the group will come. She asks two questions: how many members of the group may speak (Nele will present the petition, and a neighbor who has lived in the building since 1968 wants to talk about its history), and whether there is an elevator in the city hall, because the neighbor cannot walk well anymore. She also asks if they may send a short presentation in advance. Notice the formal greeting, the Sie forms and the closing “Mit freundlichen Grüßen”.' }),
    audio('wg-audio', 'Folge 11: Die Anhörung', [
      ['moderatorin', 'Ich eröffne die Anhörung zur Petition „Fuchsbau bleibt!“. Als Erstes hat die Sprecherin der Mietergruppe das Wort. Bitte schön.'],
      ['nele', 'Vielen Dank. Wir haben 2.417 Unterschriften gesammelt. In Plagwitz gibt es kaum noch Wohnungen, die man mit einem normalen Gehalt bezahlen kann. Für viele von uns ist die Wohnung alles, was wir haben. Deshalb bitten wir die Stadt, eine soziale Erhaltungssatzung für unser Viertel zu prüfen.'],
      ['herrLehmann', 'Ich wohne seit 1968 in dem Haus. Das ist der Ort, wo ich meine Erika kennengelernt habe. Ich bin kein Politiker, ich bin nur ein Alter aus Plagwitz. Aber ich möchte da gern bleiben.'],
      ['moderatorin', 'Danke, Herr Lehmann. Herr Vogt, Sie vertreten den Eigentümer.'],
      ['herrVogt', 'Wir verstehen die Sorgen der Mieter. Aber das Gebäude braucht eine Sanierung, die Heizung ist fünfzig Jahre alt. Niemand will die Bewohner vertreiben.'],
      ['felix', 'Na ja, bei der Miete danach bleibt halt keiner von uns.'],
      ['moderatorin', 'Bitte lassen Sie Herrn Vogt ausreden.'],
      ['sofia', 'Darf ich kurz etwas sagen? Ich glaube, beide Seiten wollen eigentlich dasselbe: Das Haus soll gut saniert werden. Die Frage ist nur, wer das bezahlt. Was halten Sie davon, wenn wir uns noch einmal zusammensetzen?'],
      ['herrVogt', 'Ehrlich gesagt: Elbstein hat nichts gegen Gespräche. Wenn es einen seriösen Käufer gibt, sind wir offen.'],
      ['nele', 'Einen Käufer? Vielleicht haben wir ja einen: uns selbst. Als Genossenschaft.'],
      ['moderatorin', 'Das ist etwas Neues. Der Ausschuss prüft jetzt die Erhaltungssatzung und spricht mit allen Beteiligten. Im September berichten wir dem Stadtrat. Ich schließe die Anhörung.'],
    ], { task: 'Hör die Anhörung im Neuen Rathaus. Wer sagt was?', taskEn: 'Listen to the hearing in Leipzig’s city hall. Who says what? Erhaltungssatzung = an ordinance that protects a neighborhood from luxury renovation. Genossenschaft = cooperative. Notice how Sofia mediates between the tenants and Herr Vogt.' }),
    audio('wg-texte', 'Folge 11: Drei Texte, drei Empfänger', [
      ['sofia', 'Puh, was für ein Tag! Und ich muss heute noch drei Texte schreiben: eine Pressemitteilung, eine Nachricht an Bianca und eine Dankesmail an die Stadt.'],
      ['kenji', 'Erst wird gegessen. Ich hab euch was mitgebracht. Nichts Besonderes, nur Reste aus der Küche.'],
      ['amara', 'Reste von dir sind immer etwas Besonderes, Kenji. Sofia, zeig mal, was du schon hast.'],
      ['sofia', 'Für die Presse: „Am Mittwoch hat der Petitionsausschuss des Stadtrats über die Petition beraten.“ Ist das zu förmlich?'],
      ['nele', 'Nein, das ist genau richtig. Eine Pressemitteilung ist sachlich: Wer, was, wann, wo? Keine Gefühle, keine Ausrufezeichen.'],
      ['sofia', 'Und an Bianca schreibe ich: „Du glaubst nicht, was heute passiert ist!“ Mit drei Ausrufezeichen.'],
      ['amara', 'Ha, genau das ist der Unterschied. Bei Freunden darfst du ruhig emotional sein.'],
      ['nele', 'Und an die Stadt schreibst du kurz und höflich: „Sehr geehrte Damen und Herren, vielen Dank für …“, und am Ende „Mit freundlichen Grüßen“.'],
      ['kenji', 'Und was hat Herr Vogt jetzt eigentlich genau gesagt? Ich war ja in der Küche.'],
      ['nele', 'Dass Elbstein offen für Gespräche ist, wenn es einen seriösen Käufer gibt. Und ich habe gesagt: Vielleicht sind wir das ja.'],
      ['kenji', 'Wir? Das Haus kaufen? Mit welchem Geld denn? Ich hab keins.'],
      ['amara', 'Ich auch nicht. Aber in einer Genossenschaft gibt jeder ein bisschen. Zusammen ist das dann ganz schön viel.'],
      ['sofia', 'Okay, das kommt in die Nachricht an Bianca. In die Pressemitteilung kommt es lieber noch nicht.'],
    ], { task: 'Hör zu. Wie schreibt Sofia an die verschiedenen Empfänger?', taskEn: 'Listen. How does Sofia write to each recipient: the press, her friend Bianca and the city? Notice the pronouns (Ich hab keins) and adjectives as nouns (nichts Besonderes, etwas Besonderes).' }),
    text('wg-presse', `**Pressemitteilung der Mietergruppe „Fuchsbau bleibt!“**

Leipzig, 14. Juli 2027

**Stadtrat prüft Schutz für Mieter in Plagwitz**

Am Mittwoch, dem 14. Juli, hat der Petitionsausschuss des Leipziger Stadtrats im Neuen Rathaus über die Petition „Fuchsbau bleibt!“ beraten. 2.417 Bürgerinnen und Bürger haben die Petition unterschrieben. Die Mieterinnen und Mieter des Hauses in der Karl-Heine-Straße befürchten, dass die Mieten nach einer Modernisierung stark steigen.

Der Ausschuss will nun prüfen, ob für das Viertel eine soziale Erhaltungssatzung möglich ist. Ein Vertreter des Eigentümers, der Elbstein Immobilien GmbH, erklärte, dass das Unternehmen offen für Gespräche ist. Im September will der Ausschuss dem Stadtrat seine Ergebnisse vorstellen.

Kontakt: Nele Wagner, Sprecherin der Mietergruppe „Fuchsbau bleibt!“`,
      { kicker: 'Sachlich', title: 'Die Pressemitteilung', task: 'Lies Sofias Pressemitteilung.', taskEn: 'Read Sofia’s press release. It answers the questions who, what, when and where, without feelings or exclamation points.', en: 'Press release: On Wednesday, July 14, the city council’s petitions committee discussed the petition “Fuchsbau bleibt!” in the city hall. 2,417 people signed it. The tenants fear that rents will rise sharply after a modernization. The committee will now check whether a conservation ordinance is possible for the neighborhood. A representative of the owner, Elbstein Immobilien GmbH, said the company is open to talks. The committee will present its results to the city council in September.' }),
    mcq('wg-q1', 'Wie viele Menschen haben die Petition unterschrieben?', ['2.147', '2.417', '24.170'], 1),
    mcq('wg-q2', 'Was fragt Sofia in ihrer E-Mail an die Stadt?', ['ob es im Rathaus einen Aufzug gibt', 'wann das Rathaus geöffnet ist', 'wie viel die Anhörung kostet'], 0),
    mcq('wg-q3', 'Was sagt Herr Vogt in der Anhörung?', ['Elbstein will das Haus abreißen.', 'Elbstein ist offen für Gespräche, wenn es einen seriösen Käufer gibt.', 'Die Miete steigt nach der Sanierung nicht.'], 1),
    mcq('wg-q4', 'Wie vermittelt Sofia in der Anhörung?', ['Sie sagt, dass beide Seiten eigentlich dasselbe wollen, und schlägt ein Gespräch vor.', 'Sie gibt Felix recht.', 'Sie verlässt den Saal.'], 0),
    mcq('wg-q5', 'Was ist laut Nele typisch für eine Pressemitteilung?', ['viele Ausrufezeichen', 'Sie ist sachlich und sagt: wer, was, wann, wo.', 'Sie beginnt mit „Liebe Leute“.'], 1),
    mcq('wg-q6', 'Was prüft der Ausschuss jetzt?', ['eine soziale Erhaltungssatzung für das Viertel', 'einen neuen Radweg in Plagwitz', 'einen Verkauf an die Stadt'], 0),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['irgendein und irgendwelche', 'Possessivartikel als Pronomen', 'Wiederholung'], [
    grammar('g-1', 'irgendein, irgendeine, irgendwelche', {
      intro: '**irgendein** bedeutet: *ein, aber es ist egal, welcher* oder *ich weiß nicht genau, welcher*. Die Endungen sind wie bei **ein**. Im Plural sagt man **irgendwelche**.',
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [
        ['Nominativ', 'irgendein Bus', 'irgendein Café', 'irgendein**e** Bahn', 'irgendwelch**e** Leute'],
        ['Akkusativ', 'irgendein**en** Bus', 'irgendein Café', 'irgendein**e** Bahn', 'irgendwelch**e** Leute'],
        ['Dativ', 'irgendein**em** Bus', 'irgendein**em** Café', 'irgendein**er** Bahn', 'irgendwelch**en** Leuten'],
        ['ohne Nomen (Nominativ)', 'irgendein**er**', 'irgendein**s**', 'irgendein**e**', 'irgendwelch**e**'],
      ],
      notes: [
        '*Wir können **irgendeinen** Bus nehmen, alle fahren zum Hauptbahnhof.*',
        'Ohne Nomen wie *einer, eins, eine*: *Hast du einen Stift? Egal welchen, gib mir **irgendeinen**.*',
        'Ähnlich: **irgendwo** (an einem Ort), **irgendwann** (zu einer Zeit), **irgendwer** oder **irgendjemand** (eine Person), **irgendwas** (etwas).',
      ],
      en: 'irgendein means “some ... or other, it does not matter which” or “I do not know which”. It takes the same endings as ein: irgendeinen Bus, irgendeinem Café, irgendeiner Bahn. The plural is irgendwelche. Without a noun it works like einer/eins/eine: irgendeiner, irgendeins, irgendeine. Related words: irgendwo (somewhere), irgendwann (sometime), irgendwer (somebody).',
    }),
    grammar('g-2', 'Possessivartikel als Pronomen', {
      intro: 'Auch **mein, dein, sein, ihr, unser, euer, Ihr** können allein stehen. Die Endungen sind wie bei **kein**.',
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [
        ['Nominativ', 'mein**er**', 'mein**s**', 'mein**e**', 'mein**e**'],
        ['Akkusativ', 'mein**en**', 'mein**s**', 'mein**e**', 'mein**e**'],
        ['Dativ', 'mein**em**', 'mein**em**', 'mein**er**', 'mein**en**'],
      ],
      notes: [
        '*Ist das dein Fahrrad? Nein, **meins** steht im Hof.* *Ist das Ninas Jacke? Ja, das ist **ihre**.*',
        'Genauso: *deiner, seiner, ihrer, unserer, eurer, Ihrer*.',
        'Fragen mit **welch-**: *Welcher Bus fährt zum See? Welches Ticket brauche ich? Welche Bahn nehmen wir?*',
      ],
      en: 'Possessive articles can also stand alone as pronouns. They take the same endings as kein: meiner (m), meins (n), meine (f, plural). Example: Ist das dein Fahrrad? Nein, meins steht im Hof (No, mine is in the courtyard). The same works for deiner, seiner, ihrer, unserer, eurer, Ihrer.',
    }),
    mcq('g-q1', 'Ich brauche einen Stift. Hast du ___?', ['einer', 'einen', 'eins'], 1, { why: 'der Stift, Akkusativ: einen.' }),
    mcq('g-q2', 'Wir können ___ Bus nehmen. Alle fahren zum Bahnhof.', ['irgendeinen', 'irgendein', 'irgendeinem'], 0),
    mcq('g-q3', 'Das ist das Beste, ___ ich je gegessen habe.', ['das', 'was', 'wo'], 1, { why: 'Nach einem Superlativ wie „das Beste“ steht was.' }),
    mcq('g-q4', 'Ein ___ von mir wohnt in Zürich.', ['Bekannte', 'Bekannten', 'Bekannter'], 2, { why: 'Nach ein (maskulin, Nominativ) wie beim Adjektiv: ein Bekannter.' }),
    mcq('g-q5', 'Ist das dein Ticket? Nein, ___ ist in meiner Tasche.', ['meins', 'meiner', 'meine'], 0, { why: 'das Ticket: neutral, also meins.' }),
    mcq('g-q6', 'Hast du ___ Tipps für Leipzig? Egal, welche.', ['irgendeine', 'irgendwelche', 'irgendein'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Strategie: formell oder informell schreiben', 'Aussprache: Texte vorlesen'], [
    tip('u-tip', 'Strategie: Briefe und E-Mails an verschiedene Empfänger', 'Bevor du schreibst, frag dich: **Wer ist der Empfänger?** Davon hängt fast alles ab.\n\n**Formell** (Stadt, Firma, Hausverwaltung, Presse): *Sehr geehrte Frau …, Sehr geehrter Herr …, Sehr geehrte Damen und Herren, … Mit freundlichen Grüßen*. Du benutzt **Sie**, schreibst sachlich und in ganzen Sätzen.\n\n**Informell** (Freunde, Familie, gute Kollegen): *Liebe Bianca, Lieber Felix, Hallo ihr, … Viele Grüße, Liebe Grüße, Bis bald!* Du benutzt **du** oder **ihr** und darfst Gefühle zeigen.\n\nIn beiden Fällen: Nach der Anrede steht ein **Komma**, und der erste Satz beginnt **klein**: *Liebe Bianca, **d**u glaubst nicht, …*'),
    sort('u-sort', ['formell', 'informell'], [['Sehr geehrte Damen und Herren,', 0], ['Mit freundlichen Grüßen', 0], ['Für Ihre Antwort bedanke ich mich im Voraus.', 0], ['Könnten Sie mir bitte mitteilen, wann …?', 0], ['Hallo Felix,', 1], ['Liebe Grüße und bis bald!', 1], ['Du glaubst nicht, was heute passiert ist!', 1], ['Melde dich mal!', 1]],
      { task: 'Formell oder informell? Sortiere.', taskEn: 'Formal or informal? Sort the phrases.' }),
    compose('u-comp', 'Schreib eine kurze formelle E-Mail an die Stadt.', [
      ['Bedank dich für die Einladung.', 'Thank them for the invitation.', ['Vielen Dank', 'für', 'Ihre Einladung', 'zur Anhörung.']],
      ['Stell eine höfliche Frage.', 'Ask a polite question.', ['Könnten', 'Sie', 'mir', 'bitte', 'den Raum', 'mitteilen?']],
      ['Schreib einen höflichen Schluss.', 'Write a polite closing sentence.', ['Für Ihre Antwort', 'bedanke', 'ich mich', 'im Voraus.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences for a short formal email.' }),
    audio('u-aus', 'Aussprache: Texte vorlesen', [
      ['frauKlein', 'Heute lesen wir einen Text laut vor. Die Satzzeichen helfen dir dabei. Hör gut zu.'],
      ['frauKlein', 'Beim Komma machst du eine kleine Pause, und die Stimme bleibt oben: Im Sommer, wenn es heiß ist, schwimmen die Leute in der Limmat.'],
      ['frauKlein', 'Beim Punkt machst du eine längere Pause, und die Stimme geht nach unten: Leipzig ist eine grüne Stadt. Es gibt viele Seen.'],
      ['frauKlein', 'Bei einer Ja-Nein-Frage geht die Stimme nach oben: Kommst du mit zum See? Bei einer W-Frage geht sie meistens nach unten: Wann fährt die nächste Straßenbahn?'],
      ['frauKlein', 'Beim Ausrufezeichen sprichst du mit mehr Energie: Du glaubst nicht, was heute passiert ist!'],
      ['frauKlein', 'Mein Tipp: Lies den Text zuerst leise und markier die Pausen. Dann lies ihn laut und langsam. Probier es mal!'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. Punctuation helps you read aloud: a short pause at a comma, a longer pause and falling voice at a period, a rising voice in yes/no questions, more energy at an exclamation point.' }),
    mcq('u-q1', 'Was machst du beim Vorlesen bei einem Komma?', ['eine kleine Pause', 'eine lange Pause', 'gar keine Pause'], 0, { task: 'Was passt?', taskEn: 'Which answer fits?' }),
    mcq('u-q2', 'Wohin geht die Stimme bei der Frage „Kommst du mit zum See?“', ['nach oben', 'nach unten'], 0, { why: 'Bei Ja-Nein-Fragen geht die Stimme am Ende nach oben.' }),
    gap('u-gap', ['Ich habe keine Fahrkarte. Hast du {{eine}}?', 'Das ist alles, {{was}} ich für die Reise brauche.', 'Kennst du {{irgendein}} gutes Café in Plagwitz?', 'Für {{Jugendliche}} gibt es im Sommer ein Ferienprogramm. (jugendlich)', 'Zürich ist die Stadt, {{wo}} Bianca seit zwei Jahren lebt.'],
      { task: 'Ergänze.', taskEn: 'Fill in the gaps: pronouns, irgendein, adjectives as nouns and was/wo.' }),
    order('u-order', ['Leipzig', 'ist', 'die Stadt,', 'wo', 'Sofia', 'jetzt wohnt.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence with a relative clause with wo.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 12,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['der Verkehr', 'Autos, Busse und Räder auf der Straße', 'traffic'], ['die Straßenbahn', 'eine Bahn mitten in der Stadt', 'streetcar, tram'], ['der Stau', 'Die Autos stehen und kommen nicht weiter.', 'traffic jam'],
      ['der Radweg', 'ein Weg nur für Fahrräder', 'bike lane'], ['die Haltestelle', 'Hier hält der Bus.', 'stop (bus, streetcar)'], ['die Fußgängerzone', 'eine Straße ohne Autos', 'pedestrian zone'],
      ['das Viertel', 'ein Teil der Stadt', 'neighborhood'], ['der Stadtrat', 'die Politiker einer Stadt', 'city council'], ['die Petition', 'eine Bitte an die Politik mit vielen Unterschriften', 'petition'],
      ['lebenswert', 'Hier lebt man gern.', 'livable'], ['die Unterschrift', 'der eigene Name mit der Hand geschrieben', 'signature'], ['der Empfänger', 'Er bekommt den Brief.', 'recipient'],
    ]),
    phrases('w-phr', 'Über die eigene Stadt sprechen', {
      'Was mir gefällt': ['Das Beste an meiner Stadt ist …', 'Was ich besonders mag, ist …', 'Hier gibt es alles, was man braucht.'],
      'Was mich stört': ['Was mich nervt, ist der Verkehr.', 'Leider gibt es zu wenig …', 'Die Mieten sind in den letzten Jahren stark gestiegen.'],
      'Was ich mir wünsche': ['Ich wünsche mir mehr …', 'Die Stadt sollte …', 'Es wäre schön, wenn …'],
    }),
    match('w-match', [['die Straßenbahn', 'Sie fährt auf Schienen mitten durch die Stadt.'], ['die Ampel', 'Bei Rot musst du stehen bleiben.'], ['der Radweg', 'Hier fahren Fahrräder, aber keine Autos.'], ['die Haltestelle', 'Hier wartest du auf den Bus.'], ['der Zebrastreifen', 'Hier gehen Fußgänger sicher über die Straße.'], ['das Lastenrad', 'Damit transportiert man Kinder oder Einkäufe.'], ['das Parkhaus', 'Hier stellt man das Auto ab, auf vielen Etagen.'], ['der Fahrkartenautomat', 'Hier kaufst du ein Ticket.'], ['das Denkmal', 'Es erinnert an eine Person oder ein Ereignis.'], ['der Kanal', 'Ein Wasserweg, den Menschen gebaut haben.']],
      { task: 'Was ist was?', taskEn: 'Match each word to its description.' }),
    gap('w-gap', ['Am Freitagnachmittag gibt es oft {{Stau}} auf der Autobahn.', 'Sofia hat die {{Petition}} an den Stadtrat geschickt.', 'Nach der Anhörung hat Sofia eine {{Pressemitteilung}} geschrieben.', 'Zürich ist eine sehr {{lebenswerte}} Stadt.'],
      { bank: ['Stau', 'Petition', 'Pressemitteilung', 'lebenswerte'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
    checklist('w-check', ['Ich kann über das Leben in der Stadt sprechen.', 'Ich kann einen Magazintext über eine Stadt verstehen.', 'Ich kann sagen, was eine Stadt lebenswert macht.', 'Ich kann in einer Diskussion vermitteln.', 'Ich kann etwas mit was und wo näher beschreiben.', 'Ich kann Pronomen wie einer, keins und meiner benutzen.', 'Ich kann formell und informell an verschiedene Empfänger schreiben.', 'Ich kann ein Programm für einen Stadtbesuch machen.']),
  ]);

export const b1k11: Chapter = {
  id: 'b1-k11', number: 11, title: 'Stadt, Land, Fluss', theme: 'Leben in der Stadt, Verkehr, lebenswerte Städte, Leipzig und Zürich',
  grammar: 'Artikelwörter als Pronomen (einer, keins, meiner, welche). irgendein, irgendeine, irgendwelche. Adjektive als Nomen (der Bekannte, ein Bekannter, etwas Neues). Relativsätze mit was und wo.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['b1k11-sprint', 'b1k11-memory', 'b1k11-satzbau', 'b1k11-artikel'],
  exam: [
    x(1, mcq('x1', 'Gibt es hier einen Supermarkt? Ja, da drüben ist ___.', ['einer', 'einen', 'eins'], 0)),
    x(1, mcq('x2', 'Das ist alles, ___ ich weiß.', ['das', 'was', 'wo'], 1)),
    x(1, mcq('x3', 'Leipzig ist die Stadt, ___ ich geboren bin.', ['was', 'wohin', 'wo'], 2)),
    x(3, gap('x4', ['Ein {{Bekannter}} von mir arbeitet im Rathaus. (bekannt)', 'Gibt es etwas {{Neues}}? (neu)', 'Die {{Jugendlichen}} spielen im Park Fußball. (jugendlich)'], { task: 'Ergänze das Adjektiv als Nomen.', taskEn: 'Fill in the adjective used as a noun.' })),
    x(3, gap('x5', ['Ich habe kein Fahrrad. Hast du {{eins}}?', 'Wir können {{irgendeinen}} Bus nehmen.', 'Brauchst du Tüten? Ich habe noch {{welche}}.'], { task: 'Ergänze das Pronomen.', taskEn: 'Fill in the pronoun.' })),
    x(1, mcq('x6', 'Was passiert ab Montag mit der Straßenbahnlinie 14?', ['Sie fährt nur bis zum Felsenkeller.', 'Sie fährt gar nicht mehr.', 'Sie fährt öfter.'], 0),
      audio('x-st1', 'Hören: Verkehrsmeldungen', [
        ['moderatorin', 'Und jetzt die Verkehrsmeldungen für Leipzig und Umgebung.'],
        ['moderatorin', 'Wegen Bauarbeiten am Karl-Heine-Kanal fährt die Straßenbahnlinie 14 ab Montag nur bis zur Haltestelle Felsenkeller. Von dort gibt es Ersatzbusse. Die Bauarbeiten dauern voraussichtlich drei Wochen.'],
        ['moderatorin', 'Auf der A9 zwischen Leipzig-West und dem Schkeuditzer Kreuz gibt es nach einem Unfall fünf Kilometer Stau. Bitte fahren Sie vorsichtig.'],
        ['moderatorin', 'Und noch ein Hinweis für alle, die am Wochenende zum Cospudener See wollen: Die Parkplätze dort sind schnell voll. Nehmen Sie lieber das Fahrrad oder den Bus.'],
        ['moderatorin', 'Zum Schluss das Wetter: Sonne pur, bis zu 32 Grad. Ein perfekter Tag für alles, was mit Wasser zu tun hat.'],
      ])),
    x(1, mcq('x7', 'Wie soll man laut Radio am Wochenende zum Cospudener See fahren? (Hörtext oben)', ['mit dem Auto', 'mit dem Fahrrad oder dem Bus', 'mit dem Taxi'], 1)),
    x(1, mcq('x8', 'Wann gibt es die Kanutour?', ['jeden Tag im Sommer', 'am Wochenende von Mai bis September', 'nur im Winter'], 1),
      text('x-st2', '**Leipzig vom Wasser aus: Kanutour durch Plagwitz**\nEntdecken Sie das Viertel, wo früher Fabriken standen und heute Künstler arbeiten! Unsere Guides erzählen Ihnen alles, was Sie über die Geschichte der Kanäle wissen müssen.\nWann: Mai bis September, jeden Samstag und Sonntag, 10 und 14 Uhr\nDauer: zweieinhalb Stunden\nTreffpunkt: Bootsverleih am Karl-Heine-Kanal\nPreis: 25 Euro, Kinder bis 12 Jahre 15 Euro\nBitte bringen Sie etwas zu trinken mit. Schwimmwesten bekommen Sie bei uns.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was stimmt? (Text oben)', ['Man muss eine eigene Schwimmweste mitbringen.', 'Kinder bezahlen weniger.', 'Getränke sind im Preis inklusive.'], 1)),
    x(2, order('x10', ['Das Beste', 'an Leipzig', 'sind', 'die Seen.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' })),
    x(1, mcq('x11', 'Du schreibst eine E-Mail an die Stadtverwaltung. Wie beendest du sie?', ['Liebe Grüße, bis bald!', 'Mit freundlichen Grüßen', 'Tschüss und ciao!'], 1)),
    x(1, mcq('x12', 'In einer Diskussion streiten zwei Personen. Was sagst du, um zu vermitteln?', ['Das ist doch totaler Quatsch!', 'Wenn ich Sie richtig verstehe, wollen Sie beide dasselbe.', 'Mir ist das egal.'], 1)),
  ],
};

export const gamesB1k11: GameDef[] = [
  {
    id: 'b1k11-sprint', engine: 'sprint', title: 'Pronomen-Sprint', blurb: 'einer, keins, was oder wo? 60 Sekunden!', skill: 'Pronomen und Relativsätze', tone: 'mint', chapter: 11, emoji: '⚡',
    rules: 'Du siehst einen Satz mit einer Lücke. Tippe auf das Wort, das passt.', label: 'Was passt?',
    items: [
      { q: 'Gibt es hier einen Park? Ja, da ist ___.', a: 'einer', wrong: ['einen', 'eins'] }, { q: 'Hast du ein Ticket? Nein, ich habe ___.', a: 'keins', wrong: ['keiner', 'keinen'] },
      { q: 'Brauchst du eine Tüte? Ja, gib mir bitte ___.', a: 'eine', wrong: ['einer', 'eins'] }, { q: 'Hast du Briefmarken? Ja, ich habe noch ___.', a: 'welche', wrong: ['eine', 'eins'] },
      { q: 'Ist das dein Schlüssel? Ja, das ist ___.', a: 'meiner', wrong: ['meins', 'meinen'] }, { q: 'Ist das dein Fahrrad? Nein, das ist nicht ___.', a: 'meins', wrong: ['meiner', 'meinen'] },
      { q: 'Das ist alles, ___ ich brauche.', a: 'was', wrong: ['das', 'wo'] }, { q: 'Das ist die Stadt, ___ ich wohne.', a: 'wo', wrong: ['was', 'wohin'] },
      { q: 'Das Beste, ___ es hier gibt, ist der See.', a: 'was', wrong: ['das', 'wo'] }, { q: 'Ein ___ von mir wohnt in Zürich. (bekannt)', a: 'Bekannter', wrong: ['Bekannte', 'Bekannten'] },
      { q: 'Gibt es etwas ___? (neu)', a: 'Neues', wrong: ['Neue', 'Neuen'] }, { q: 'Wir nehmen ___ Bus, egal welchen.', a: 'irgendeinen', wrong: ['irgendein', 'irgendeinem'] },
    ],
  },
  {
    id: 'b1k11-memory', engine: 'memory', title: 'Stadt-Memory', blurb: 'Stadt und Verkehr: Deutsch und Englisch.', skill: 'Wortschatz Stadt und Verkehr', tone: 'lilac', chapter: 11, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein deutsches Wort und seine englische Bedeutung.', kinds: ['Deutsch', 'Englisch'],
    pairs: [['die Straßenbahn', 'streetcar'], ['der Stau', 'traffic jam'], ['die Ampel', 'traffic light'], ['der Radweg', 'bike lane'], ['die Haltestelle', 'stop'], ['der Fußgänger', 'pedestrian'], ['die Fußgängerzone', 'pedestrian zone'], ['das Rathaus', 'city hall'], ['der Stadtrat', 'city council'], ['die Unterschrift', 'signature']],
  },
  {
    id: 'b1k11-satzbau', engine: 'satzbau', title: 'Relativsatz-Baukasten', blurb: 'was oder wo, und das Verb ans Ende!', skill: 'Relativsätze mit was und wo', tone: 'sky', chapter: 11, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Im Relativsatz steht das Verb am Ende.',
    sentences: [
      { parts: ['Das ist alles,', 'was', 'ich', 'brauche.'], hint: 'was nach alles' },
      { parts: ['Leipzig ist die Stadt,', 'wo', 'Sofia', 'wohnt.'], hint: 'wo nach einem Ort' },
      { parts: ['Das Beste,', 'was', 'es hier gibt,', 'ist der See.'], hint: 'was nach Superlativ' },
      { parts: ['Plagwitz ist ein Viertel,', 'wo', 'früher Fabriken', 'standen.'], hint: 'wo nach einem Ort' },
      { parts: ['Gibt es etwas,', 'was', 'du', 'nicht', 'magst?'], hint: 'was nach etwas' },
      { parts: ['Die Trams sind pünktlich,', 'was', 'Bianca', 'toll', 'findet.'], hint: 'was nach einem ganzen Satz' },
      { parts: ['Zürich ist eine Stadt,', 'wo', 'man', 'im Fluss', 'schwimmen kann.'], hint: 'Modalverb ganz am Ende' },
      { parts: ['Ich glaube nicht alles,', 'was', 'in der Zeitung', 'steht.'], hint: 'was nach alles' },
    ],
  },
  {
    id: 'b1k11-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Stadt und Verkehr.', skill: 'Artikel', tone: 'rose', chapter: 11, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Verkehr, die Straßenbahn, der Stau, die Ampel, der Radweg, die Haltestelle, das Viertel, das Rathaus, der Stadtrat, die Petition, die Anhörung, das Denkmal, der Kanal, die Brücke, das Parkhaus, die Unterschrift, der Empfänger, das Lastenrad'),
  },
];
