import type { Chapter, GameDef, GlossaryEntry } from './types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, poll, section, sort, text, tip, x } from './helpers';

// Kapitel 5: theme Konsum. Grammar: Passiv (Zeitformen, mit Modalverben), temporale Präpositionen.

export const glossary5: Record<string, GlossaryEntry> = {
  Konsum: { de: 'Das Kaufen und Verbrauchen von Dingen.', en: 'consumption' },
  Werbung: { de: 'Texte, Bilder und Filme, die Menschen zum Kaufen bringen sollen.', en: 'advertising' },
  Schnäppchen: { de: 'Etwas, das man sehr günstig bekommt.', en: 'bargain' },
  ausleihen: { de: 'Etwas für kurze Zeit von jemandem bekommen und dann zurückgeben.', en: 'to borrow', ex: 'Ich leihe mir die Bohrmaschine aus.' },
  verleihen: { de: 'Etwas für kurze Zeit an jemanden geben.', en: 'to lend' },
  Bohrmaschine: { de: 'Ein Werkzeug, mit dem man Löcher in die Wand macht.', en: 'power drill' },
  Gebühr: { de: 'Geld, das man für eine Leistung bezahlt.', en: 'fee' },
  Mitglied: { de: 'Eine Person, die zu einem Verein oder einer Gruppe gehört.', en: 'member' },
  besitzen: { de: 'Etwas haben, das einem gehört.', en: 'to own' },
  tauschen: { de: 'Etwas geben und dafür etwas anderes bekommen.', en: 'to swap, to exchange' },
  Anteil: { de: 'Ein Teil von einem Ganzen, oft in Prozent.', en: 'share, proportion' },
  steigen: { de: 'Höher oder mehr werden.', en: 'to rise, to increase' },
  sinken: { de: 'Niedriger oder weniger werden.', en: 'to fall, to decrease' },
  Lieferung: { de: 'Waren werden zu dir nach Hause gebracht.', en: 'delivery' },
  Innenstadt: { de: 'Das Zentrum einer Stadt mit vielen Geschäften.', en: 'city center' },
  Minimalismus: { de: 'Ein Lebensstil mit wenigen Dingen.', en: 'minimalism' },
  Bedürfnis: { de: 'Etwas, das man wirklich braucht.', en: 'need' },
  Spontankauf: { de: 'Etwas kaufen, ohne es geplant zu haben.', en: 'impulse buy' },
  Reklamation: { de: 'Man sagt dem Geschäft, dass eine Ware kaputt oder falsch ist.', en: 'complaint about a product' },
  Kassenbon: { de: 'Der Zettel, den man an der Kasse nach dem Bezahlen bekommt.', en: 'receipt' },
  Garantie: { de: 'Die Zeit, in der der Hersteller ein kaputtes Gerät kostenlos repariert.', en: 'warranty' },
  umtauschen: { de: 'Eine Ware zurückbringen und eine andere dafür bekommen.', en: 'to exchange (a product)' },
  Gutschein: { de: 'Ein Papier oder Code, mit dem man später im Geschäft bezahlen kann.', en: 'voucher, store credit' },
  erstatten: { de: 'Geld zurückzahlen.', en: 'to refund', ex: 'Der Kaufpreis wird erstattet.' },
  defekt: { de: 'Kaputt, funktioniert nicht.', en: 'defective, broken' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Brauche ich das wirklich?', 'butter', 10,
  ['das Kapitel kennenlernen', 'über Kaufgewohnheiten sprechen'], [
    overview('e-over', 'Kapitel 5: Meins, deins, unsers',
      'In diesem Kapitel geht es um **Konsum**: Was kaufen wir, warum kaufen wir es, und brauchen wir es überhaupt? Du liest über Menschen, die Dinge lieber teilen als besitzen, lernst, eine Grafik zu beschreiben, und hörst einen Podcast über ein Jahr ohne Einkaufen. Im Alltagsteil übst du eine Situation, die jeder kennt: Etwas ist kaputt, und du möchtest dein Geld zurück.\n\nIn der Grammatik lernst du das **Passiv**. Damit sagt man, was gemacht wird, ohne zu sagen, wer es macht. Dazu kommen Zeitangaben mit Präpositionen wie *seit*, *vor*, *während* und *innerhalb*.',
      'This chapter is about consumption: sharing instead of owning, describing a chart, and a year without shopping. You practice returning a faulty product. Grammar: the passive voice in all tenses and with modal verbs, and time expressions with prepositions.',
      ['über Kaufen, Teilen und Verzichten sprechen', 'eine einfache Grafik beschreiben', 'eine Ware reklamieren, im Geschäft und schriftlich', 'das Passiv verstehen und bilden']),
    text('e-intro', '„Nur heute!“, „Zwei zum Preis von einem!“, „Das gönn ich mir.“ [[Werbung]] verspricht uns jeden Tag ein besseres Leben. Wie kaufst du ein?', { kicker: 'Zum Einstieg' }),
    poll('e-poll', [['online', 'im Geschäft'], ['neu', 'gebraucht'], ['mit Karte', 'bar'], ['lange vergleichen', 'schnell entscheiden'], ['Qualität', 'günstiger Preis']],
      { task: 'Wie kaufst du lieber ein?', taskEn: 'How do you prefer to shop? There is no wrong answer.' }),
    match('e-match', [['das Schnäppchen', 'etwas sehr Günstiges'], ['der Rabatt', 'ein niedrigerer Preis'], ['die Quittung', 'der Beleg nach dem Bezahlen'], ['der Spontankauf', 'ein Kauf ohne Plan'], ['die Lieferung', 'die Ware kommt nach Hause']],
      { task: 'Was bedeutet das? Verbinde.', taskEn: 'What does it mean? Match.' }),
    sort('e-sort', ['Geld ausgeben', 'Geld bekommen oder behalten'], [['etwas bestellen', 0], ['sparen', 1], ['eine Rechnung bezahlen', 0], ['etwas verkaufen', 1], ['Miete überweisen', 0], ['verdienen', 1], ['auf etwas verzichten', 1], ['etwas mieten', 0]],
      { task: 'Geld weg oder Geld da?', taskEn: 'Money out or money in?' }),
  ]);

const modul1 = section('modul-1', 'modul', 'Modul 1', 'Meins ist deins', 'mint', 25,
  ['Informationen über einen Trend verstehen', 'ein Konzept vorstellen', 'Grammatik: Passiv'], [
    text('m1-text', `Eine [[Bohrmaschine]] wird in ihrem ganzen Leben im Durchschnitt nur dreizehn Minuten benutzt. Trotzdem liegt in fast jedem Keller eine. In Leipzig wurde deshalb vor einigen Jahren ein besonderer Laden eröffnet: die „Leihbar“. Hier werden keine Dinge verkauft, sondern verliehen.

Das Prinzip ist einfach. Wer [[Mitglied]] ist, zahlt eine kleine [[Gebühr]] pro Jahr. Dafür können mehr als fünfhundert Gegenstände [[ausleihen|ausgeliehen]] werden: Werkzeug, Zelte, eine Nähmaschine, sogar ein Waffeleisen für den Kindergeburtstag. Jeder Gegenstand wird nach der Rückgabe geprüft und gereinigt. Was kaputt ist, wird im Reparaturcafé nebenan von Freiwilligen repariert.

Die Idee ist nicht neu. Schon früher wurden Bücher in Bibliotheken ausgeliehen und Maschinen unter Bauern geteilt. Neu ist, dass heute fast alles geteilt werden kann: Autos, Fahrräder, Gärten, Kleidung. In vielen Städten sind in den letzten Jahren Tauschregale aufgestellt worden, in die man Bücher legt und aus denen man andere mitnimmt.

Warum machen Menschen mit? Viele wollen Geld sparen. Anderen ist wichtig, dass weniger produziert und weggeworfen wird. Und manche haben einfach gemerkt, dass man Dinge nicht [[besitzen]] muss, um sie zu benutzen. Kritiker sagen allerdings, dass Teilen nur dort funktioniert, wo die Wege kurz sind. Auf dem Land muss für ein geliehenes Zelt oft dreißig Kilometer gefahren werden.`,
      { kicker: 'Lesen', title: 'Teilen statt kaufen', task: 'Lies den Text über einen Trend.', taskEn: 'Read the text about a trend. Notice the passive forms with werden.' }),
    mcq('m1-q1', 'Was ist die „Leihbar“?', ['ein Geschäft für gebrauchte Dinge', 'ein Laden, in dem man Dinge ausleihen kann', 'eine Bar mit Werkzeug'], 1, { task: 'Hast du den Text verstanden?', taskEn: 'Check your understanding.' }),
    mcq('m1-q2', 'Was passiert mit einem Gegenstand nach der Rückgabe?', ['Er wird verkauft.', 'Er wird weggeworfen.', 'Er wird geprüft und gereinigt.'], 2),
    mcq('m1-q3', 'Welches Problem nennen Kritiker?', ['Teilen ist zu teuer.', 'Auf dem Land sind die Wege zu lang.', 'Die Dinge gehen zu oft kaputt.'], 1),
    grammar('m1-gram', 'Das Passiv: Was wird gemacht?', {
      intro: 'Im Passiv ist die Handlung wichtig, nicht die Person. Man bildet es mit **werden** + **Partizip II**.',
      head: ['Zeitform', 'Bildung', 'Beispiel'],
      rows: [
        ['Präsens', 'wird + Partizip II', 'Der Gegenstand **wird geprüft**.'],
        ['Präteritum', 'wurde + Partizip II', 'Der Laden **wurde** vor einigen Jahren **eröffnet**.'],
        ['Perfekt', 'ist + Partizip II + **worden**', 'Tauschregale **sind aufgestellt worden**.'],
        ['mit Modalverb', 'Modalverb + Partizip II + **werden**', 'Fast alles **kann geteilt werden**.'],
      ],
      notes: [
        'Aktiv: *Freiwillige reparieren die Geräte.* → Passiv: *Die Geräte werden (von Freiwilligen) repariert.* Das Akkusativobjekt wird zum Subjekt.',
        'Wer etwas tut, kann man mit **von** + Dativ sagen. Meistens lässt man es weg.',
        'Im Perfekt heißt es **worden**, nicht geworden.',
      ],
      en: 'The passive focuses on the action: werden + past participle. Present: wird repariert. Simple past: wurde repariert. Perfect: ist repariert worden. With a modal: kann repariert werden. The doer can be added with von + dative.',
    }),
    sort('m1-sort', ['Aktiv', 'Passiv'], [['Die Firma liefert das Paket.', 0], ['Das Paket wird morgen geliefert.', 1], ['Der Laden wurde 2019 eröffnet.', 1], ['Wir werden nächstes Jahr umziehen.', 0], ['Die Rechnung ist schon bezahlt worden.', 1], ['Sie wird Ärztin.', 0]],
      { task: 'Aktiv oder Passiv?', taskEn: 'Active or passive? Careful: "werden" is also used for the future and for "to become".' }),
    gap('m1-gap', ['In der Leihbar {{werden}} keine Dinge verkauft.', 'Jedes Gerät {{wird}} nach der Rückgabe gereinigt.', 'Der Laden {{wurde}} vor fünf Jahren eröffnet. (Präteritum)', 'Früher {{wurden}} Maschinen unter Bauern geteilt. (Präteritum)', 'Das Zelt ist gestern zurückgebracht {{worden}}.', 'Die Gebühr muss einmal pro Jahr bezahlt {{werden}}.'],
      { task: 'Ergänze die richtige Form von werden.', taskEn: 'Fill in the right form of werden.' }),
    gap('m1-gap2', ['Man repariert die Geräte. → Die Geräte werden {{repariert}}.', 'Man eröffnete den Laden 2019. → Der Laden wurde 2019 {{eröffnet}}.', 'Man kann das Auto online buchen. → Das Auto kann online {{gebucht}} werden.', 'Man hat das Regal aufgestellt. → Das Regal ist {{aufgestellt}} worden.', 'Man darf die Bücher mitnehmen. → Die Bücher dürfen {{mitgenommen}} werden.'],
      { task: 'Vom Aktiv ins Passiv: Ergänze das Partizip.', taskEn: 'From active to passive: fill in the participle.' }),
    order('m1-order', ['In vielen Städten', 'sind', 'Tauschregale', 'aufgestellt', 'worden.'], { task: 'Bau den Satz im Passiv Perfekt.', taskEn: 'Build the sentence in the passive perfect.', hint: '„worden“ steht ganz am Ende.' }),
    compose('m1-comp', 'Stell das Konzept **Kleidertausch-Party** vor. Benutze das Passiv.', [
      ['Sag, was dort passiert.', 'Say what happens there.', ['Bei einer Kleidertausch-Party', 'wird Kleidung', 'nicht verkauft,', 'sondern getauscht.']],
      ['Erklär, was man mitbringt.', 'Explain what is brought.', ['Von jedem Gast', 'werden', 'fünf Kleidungsstücke', 'mitgebracht.']],
      ['Sag, was am Ende passiert.', 'Say what happens at the end.', ['Was übrig bleibt,', 'wird', 'an eine Organisation', 'gespendet.']],
      ['Nenne den Vorteil.', 'Name the benefit.', ['So', 'muss', 'weniger Kleidung', 'produziert werden.']],
    ], { task: 'Stell ein Konzept vor.', taskEn: 'Present a concept in four sentences.' }),
  ]);

const modul2 = section('modul-2', 'modul', 'Modul 2', 'Heute ein Muss, morgen vergessen?', 'sky', 20,
  ['einen Beitrag über zukünftige Entwicklungen verstehen', 'eine Grafik beschreiben', 'Informationen aus einer Grafik weitergeben'], [
    text('m2-text', `Noch vor zwanzig Jahren fuhr man am Samstag in die [[Innenstadt]], um einzukaufen. Heute wird ein großer Teil der Einkäufe auf dem Sofa erledigt. Besonders Kleidung, Elektronik und Bücher werden online bestellt. Der [[Anteil]] des Onlinehandels ist jahrelang gestiegen und erst zuletzt etwas langsamer gewachsen.

Für die Städte hat das Folgen. Viele kleine Läden mussten schließen, und manche Fußgängerzone wirkt leer. Stadtplaner glauben trotzdem nicht, dass die Innenstadt verschwinden wird. Sie wird sich nur verändern: weniger Geschäfte, dafür mehr Cafés, Werkstätten, Wohnungen und Orte, an denen man sich trifft.

Auch beim Einkaufen selbst wird einiges anders werden. Schon jetzt gibt es Supermärkte ohne Kasse, in denen die Waren von Kameras erkannt werden. In Zukunft könnten Pakete von kleinen Robotern gebracht werden. Gleichzeitig wächst ein Gegentrend: Immer mehr Menschen kaufen gebraucht, lassen reparieren oder fragen sich vor jedem Kauf, ob sie das Ding wirklich brauchen.`,
      { kicker: 'Lesen', title: 'Wie wir morgen einkaufen', task: 'Lies den Beitrag.', taskEn: 'Read the article about the future of shopping.' }),
    mcq('m2-q1', 'Was glauben Stadtplaner über die Innenstadt?', ['Sie wird verschwinden.', 'Sie wird sich verändern, aber bleiben.', 'Sie wird wieder so wie vor zwanzig Jahren.'], 1, { task: 'Hast du den Text verstanden?', taskEn: 'Check your understanding.' }),
    mcq('m2-q2', 'Welchen Gegentrend nennt der Text?', ['Die Menschen kaufen mehr im Ausland.', 'Die Menschen kaufen nur noch nachts ein.', 'Mehr Menschen kaufen gebraucht oder lassen reparieren.'], 2),
    grammar('m2-grafik', 'Grafik: Wo kaufen die Menschen Kleidung? (Beispieldaten, in Prozent)', {
      head: ['Altersgruppe', 'meistens online', 'meistens im Geschäft', 'gebraucht'],
      rows: [['18 bis 29 Jahre', '58', '24', '18'], ['30 bis 49 Jahre', '47', '41', '12'], ['50 bis 64 Jahre', '29', '64', '7'], ['65 Jahre und älter', '12', '85', '3']],
      notes: ['Die Zahlen sind ein Beispiel zum Üben und stammen nicht aus einer echten Studie.'],
    }),
    mcq('m2-q3', 'Welche Aussage passt zur Grafik?', ['Je älter die Menschen sind, desto häufiger kaufen sie im Geschäft.', 'Alle Altersgruppen kaufen am liebsten online.', 'Ältere Menschen kaufen am häufigsten gebraucht.'], 0, { task: 'Lies die Grafik.', taskEn: 'Read the chart.' }),
    mcq('m2-q4', 'In welcher Gruppe ist der Anteil der Onlinekäufe am höchsten?', ['65 Jahre und älter', '30 bis 49 Jahre', '18 bis 29 Jahre'], 2),
    tip('m2-tip', 'Strategie: Informationen aus einer Grafik weitergeben', 'Geh in drei Schritten vor: **1.** Thema nennen (Was zeigt die Grafik?). **2.** Das Auffälligste beschreiben (höchster und niedrigster Wert). **3.** Vergleichen (Unterschiede zwischen Gruppen). Nenne nicht jede Zahl, sondern nur die wichtigen.'),
    phrases('m2-phr', 'Redemittel: eine Grafik beschreiben', {
      'Thema': ['Die Grafik zeigt, wo Menschen Kleidung kaufen.', 'In der Grafik geht es um …', 'Die Angaben sind in Prozent.'],
      'Werte nennen': ['An erster Stelle steht …', 'Der Anteil liegt bei 58 Prozent.', 'Nur 3 Prozent kaufen gebraucht.', 'Mehr als die Hälfte … / Fast ein Drittel …'],
      'vergleichen': ['Im Vergleich zu den Jüngeren …', 'Der Anteil ist gestiegen / gesunken.', 'Je älter die Menschen sind, desto …'],
    }),
    gap('m2-gap', ['Die Grafik {{zeigt}}, wo Menschen Kleidung kaufen.', 'Bei den Jüngsten {{liegt}} der Anteil der Onlinekäufe bei 58 Prozent.', 'An erster {{Stelle}} steht bei den Älteren das Geschäft.', 'Im {{Vergleich}} zu den Jüngeren kaufen Ältere selten online.', 'Mehr als die {{Hälfte}} der 18- bis 29-Jährigen kauft online.'],
      { bank: ['Vergleich', 'Stelle', 'zeigt', 'Hälfte', 'liegt'], task: 'Ergänze die Redemittel.', taskEn: 'Complete the phrases.' }),
    match('m2-match', [['50 Prozent', 'die Hälfte'], ['33 Prozent', 'ein Drittel'], ['25 Prozent', 'ein Viertel'], ['75 Prozent', 'drei Viertel'], ['10 Prozent', 'jeder Zehnte']],
      { task: 'Wie sagt man das?', taskEn: 'How do you say it?' }),
    compose('m2-comp', 'Beschreib die Grafik oben für eine Kollegin.', [
      ['Nenne das Thema.', 'Name the topic.', ['Die Grafik zeigt,', 'wo Menschen', 'verschiedener Altersgruppen', 'Kleidung kaufen.']],
      ['Beschreib die Jüngsten.', 'Describe the youngest group.', ['Bei den 18- bis 29-Jährigen', 'kauft', 'mehr als die Hälfte', 'meistens online.']],
      ['Beschreib die Ältesten.', 'Describe the oldest group.', ['Bei den über 65-Jährigen', 'liegt', 'dieser Anteil', 'nur bei 12 Prozent.']],
      ['Zieh einen Vergleich.', 'Draw a comparison.', ['Je älter', 'die Menschen sind,', 'desto häufiger', 'kaufen sie', 'im Geschäft.']],
    ], { task: 'Bau eine Grafikbeschreibung.', taskEn: 'Build a chart description.' }),
  ]);

const modul3 = section('modul-3', 'modul', 'Modul 3', 'Weniger ist mehr', 'lilac', 25,
  ['einen Podcast zum Thema Konsum verstehen', 'Tipps geben', 'Grammatik: Zeitangaben mit Präpositionen'], [
    audio('m3-audio', 'Hören: Podcast „Alltagsfragen“, Folge: Ein Jahr nichts Neues', [
      ['ben', 'Willkommen bei „Alltagsfragen“. Meine Gästin heute hat zwölf Monate lang nichts Neues gekauft. Elif, wie kommt man auf so eine Idee?'],
      ['elif', 'Ganz ehrlich? Beim Umzug. Ich habe innerhalb von zwei Tagen vierzig Kartons gepackt und gedacht: Wem gehört das alles? Vor dem Umzug wusste ich gar nicht, dass ich drei Mixer habe.'],
      ['ben', 'Drei Mixer! Und dann hast du einfach aufgehört?'],
      ['elif', 'Ich habe mir Regeln gemacht. Seit dem ersten Januar letzten Jahres habe ich nur noch Essen, Medikamente und Seife gekauft. Alles andere habe ich geliehen, getauscht oder repariert.'],
      ['ben', 'Was war am schwersten?'],
      ['elif', 'Die ersten Wochen. Während der Arbeit habe ich ständig Angebote aufs Handy bekommen. Nach einem Monat habe ich alle Newsletter abbestellt. Danach wurde es leicht.'],
      ['ben', 'Gab es einen Moment, in dem du fast etwas gekauft hast?'],
      ['elif', 'Im Oktober ist mein Wintermantel kaputtgegangen. Ich stand schon im Laden. Dann habe ich bei einer Schneiderin gefragt, und in drei Tagen war der Mantel repariert, für zwanzig Euro.'],
      ['ben', 'Und heute? Kaufst du wieder ein?'],
      ['elif', 'Ja, aber anders. Bei jedem Kauf warte ich jetzt dreißig Tage. Am Ende des Monats will ich die meisten Sachen gar nicht mehr.'],
    ], { task: 'Was hat Elif ein Jahr lang gemacht?', taskEn: 'What did Elif do for a year? Listen for time expressions: vor, seit, während, nach, in, bei.' }),
    mcq('m3-q1', 'Wann hatte Elif die Idee?', ['beim Einkaufen', 'beim Umzug', 'im Urlaub'], 1, { task: 'Fragen zum Podcast', taskEn: 'Questions about the podcast.' }),
    mcq('m3-q2', 'Was hat sie in dem Jahr noch gekauft?', ['Essen, Medikamente und Seife', 'nur Kleidung', 'gar nichts'], 0),
    mcq('m3-q3', 'Was macht sie heute vor einem Kauf?', ['Sie fragt eine Freundin.', 'Sie wartet dreißig Tage.', 'Sie vergleicht Preise im Internet.'], 1),
    grammar('m3-gram', 'Zeitangaben mit Präpositionen', {
      head: ['Präposition', 'Kasus', 'Frage', 'Beispiel'],
      rows: [
        ['**an** (am)', 'Dativ', 'Wann? Tag, Datum, Tageszeit', '**am** Montag, **am** 1. Januar, **am** Abend'],
        ['**in** (im)', 'Dativ', 'Wann? Monat, Jahreszeit, Jahrhundert. Oder: nach welcher Zeit?', '**im** Oktober, **im** Winter, **in** drei Tagen'],
        ['**um**', 'Akkusativ', 'Wann? Uhrzeit', '**um** acht Uhr'],
        ['**vor** / **nach**', 'Dativ', 'früher / später als', '**vor** dem Umzug, **nach** einem Monat'],
        ['**seit**', 'Dativ', 'Seit wann? (dauert bis jetzt)', '**seit** dem ersten Januar, **seit** einem Jahr'],
        ['**bei**', 'Dativ', 'gleichzeitig mit einer Tätigkeit', '**beim** Umzug, **bei** jedem Kauf'],
        ['**ab** / **bis**', 'Dativ / Akkusativ', 'Beginn / Ende', '**ab** nächster Woche, **bis** nächsten Freitag'],
        ['**von … bis**', 'Dativ … Akkusativ', 'Zeitraum', '**von** Montag **bis** Freitag'],
        ['**während**, **innerhalb**, **außerhalb**', 'Genitiv', 'Zeitraum', '**während** der Arbeit, **innerhalb** eines Monats'],
      ],
      notes: ['Jahreszahlen stehen ohne Präposition: **2019** wurde der Laden eröffnet. Oder: **im Jahr** 2019.', '**seit** + Präsens, wenn etwas noch andauert: Ich wohne **seit** drei Jahren hier.'],
      en: 'Time prepositions: am (days, dates), im (months, seasons), um (clock time), vor/nach (before/after), seit (since, for: still going on), bei (during an activity), ab (from), bis (until), während/innerhalb (during/within, genitive). Years take no preposition.',
    }),
    gap('m3-gap', ['Der Kurs beginnt {{am}} Montag {{um}} neun Uhr.', '{{Im}} Sommer fahren wir ans Meer.', 'Ich wohne {{seit}} drei Jahren in Leipzig.', '{{Vor}} dem Essen wasche ich mir die Hände.', '{{Nach}} der Arbeit gehe ich einkaufen.', 'Das Paket kommt {{in}} zwei Tagen.'],
      { task: 'Welche Präposition passt?', taskEn: 'Which time preposition fits?' }),
    sort('m3-sort', ['+ Dativ', '+ Akkusativ', '+ Genitiv'], [['seit', 0], ['um', 1], ['während', 2], ['nach', 0], ['bis', 1], ['innerhalb', 2], ['vor', 0], ['außerhalb', 2], ['bei', 0]],
      { task: 'Welcher Kasus steht nach der Präposition (bei Zeitangaben)?', taskEn: 'Which case follows the preposition in time expressions?' }),
    gap('m3-gap2', ['Seit {{einem}} Jahr kaufe ich nichts Neues. (ein)', 'Während {{der}} Arbeit bekomme ich viele Angebote. (die)', 'Innerhalb {{eines}} Monats habe ich alle Newsletter abbestellt. (ein)', 'Vor {{dem}} Umzug hatte ich drei Mixer. (der)', 'Bei {{jedem}} Kauf warte ich dreißig Tage. (jeder)'],
      { task: 'Ergänze die richtige Form.', taskEn: 'Fill in the correct form.' }),
    order('m3-order', ['Nach einem Monat', 'habe ich', 'alle Newsletter', 'abbestellt.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.', hint: 'Nach der Zeitangabe kommt das Verb.' }),
    compose('m3-comp', 'Ein Freund kauft zu viel und fragt dich um Rat. Gib ihm vier Tipps.', [
      ['Tipp 1: vor dem Einkaufen.', 'Tip 1: before shopping.', ['Schreib', 'vor dem Einkaufen', 'immer', 'eine Liste.']],
      ['Tipp 2: bei teuren Dingen warten.', 'Tip 2: wait with expensive things.', ['Bei teuren Dingen', 'solltest du', 'eine Woche', 'warten.']],
      ['Tipp 3: Newsletter.', 'Tip 3: newsletters.', ['Bestell', 'noch heute', 'alle Newsletter', 'ab.']],
      ['Tipp 4: leihen statt kaufen.', 'Tip 4: borrow instead of buying.', ['Was du', 'nur selten brauchst,', 'kannst du', 'ausleihen.']],
    ], { task: 'Bau vier Tipps.', taskEn: 'Build four tips.' }),
  ]);

const kommunikation = section('kommunikation', 'kommunikation', 'Alltag und Beruf', 'Das möchte ich reklamieren', 'rose', 20,
  ['ein Reklamationsgespräch führen', 'eine Lösung aushandeln', 'eine Reklamation schreiben'], [
    text('k-intro', 'Du hast etwas gekauft, und es ist [[defekt]] oder das Falsche wurde geliefert. Dann machst du eine [[Reklamation]]. Wichtig sind drei Dinge: der [[Kassenbon]] oder die Bestellnummer, eine klare Beschreibung des Problems und ein konkreter Wunsch: reparieren, [[umtauschen]] oder Geld zurück.', { kicker: 'Zum Einstieg' }),
    audio('k-a1', 'Gespräch 1: Im Elektrogeschäft (Stuttgart)', [
      ['frauHaeberle', 'Grüß Gott, was kann i für Sie tun?'],
      ['tomasz', 'Guten Tag. Ich habe vor zwei Wochen diese Kaffeemaschine bei Ihnen gekauft. Seit gestern läuft unten Wasser heraus.'],
      ['frauHaeberle', 'Oh, des isch ärgerlich. Hend Sie den Kassenbon dabei?'],
      ['tomasz', 'Ja, hier, bitte.'],
      ['frauHaeberle', 'Gut. Also, das Gerät hat zwei Jahre Garantie. Mir könnet es einschicken, dann wird es repariert. Das dauert ungefähr drei Wochen.'],
      ['tomasz', 'Drei Wochen ohne Kaffee ist mir ehrlich gesagt zu lang. Wäre es möglich, die Maschine umzutauschen?'],
      ['frauHaeberle', 'Da muss i gucken, ob mir des Modell noch da hend. Ja, eine isch noch im Lager.'],
      ['tomasz', 'Wunderbar, dann nehme ich die.'],
      ['frauHaeberle', 'Gern. Und entschuldiget Sie bitte die Umstände.'],
    ], { task: 'Welche Lösung bekommt Tomasz?', taskEn: 'What solution does Tomasz get? Frau Häberle speaks Swabian.',
      note: 'Schwäbisch: **des isch** = das ist. **Hend Sie** = Haben Sie. **mir könnet** = wir können. **mir hend** = wir haben.' }),
    mcq('k-q1', 'Was ist das Problem mit der Kaffeemaschine?', ['Sie macht keinen Kaffee.', 'Es läuft Wasser heraus.', 'Sie ist zu laut.'], 1),
    mcq('k-q2', 'Welche Lösung wählt Tomasz?', ['Er lässt die Maschine reparieren.', 'Er bekommt sein Geld zurück.', 'Er tauscht die Maschine um.'], 2),
    audio('k-a2', 'Gespräch 2: Anruf beim Kundenservice (Wien)', [
      ['frauHuber', 'Modehaus Lindner, Kundenservice, Huber, grüß Gott.'],
      ['jule', 'Moin, Asmussen hier. Ich habe bei Ihnen online eine Jacke in Größe M bestellt, aber geliefert wurde Größe XL.'],
      ['frauHuber', 'Das tut mir leid. Haben Sie die Bestellnummer bei der Hand?'],
      ['jule', 'Ja: vier vier sieben, null neun zwei.'],
      ['frauHuber', 'Danke. Ja, da ist uns leider ein Fehler passiert. Die Größe M ist momentan nicht lagernd. Ich kann Ihnen einen Gutschein anbieten oder den Kaufpreis erstatten.'],
      ['jule', 'Dann hätte ich lieber das Geld zurück.'],
      ['frauHuber', 'Selbstverständlich. Sie bekommen heute noch ein Rücksendeetikett per E-Mail. Sobald das Paket bei uns ist, wird der Betrag innerhalb von fünf Werktagen überwiesen.'],
      ['jule', 'Und die Rücksendung kostet mich nichts?'],
      ['frauHuber', 'Nein, die Kosten übernehmen natürlich wir.'],
      ['jule', 'Super, dann machen wir das so. Danke!'],
    ], { task: 'Was wurde falsch geliefert?', taskEn: 'What was delivered wrong? Frau Huber speaks Viennese German.', note: 'Österreichisch: **bei der Hand haben** = gerade da haben. **lagernd** = auf Lager, vorhanden.' }),
    mcq('k-q3', 'Was möchte Jule?', ['einen Gutschein', 'ihr Geld zurück', 'die Jacke in XL behalten'], 1),
    mcq('k-q4', 'Wann bekommt sie das Geld?', ['sofort', 'innerhalb von fünf Werktagen, nachdem das Paket angekommen ist', 'in fünf Wochen'], 1),
    phrases('k-phr', 'Redemittel: reklamieren', {
      'das Problem beschreiben': ['Ich habe vor zwei Wochen … bei Ihnen gekauft.', 'Das Gerät funktioniert nicht richtig.', 'Geliefert wurde leider die falsche Größe.', 'Hier ist der Kassenbon.'],
      'eine Lösung fordern': ['Wäre es möglich, das Gerät umzutauschen?', 'Ich hätte gern mein Geld zurück.', 'Könnten Sie das Gerät reparieren?', 'Das dauert mir zu lange.'],
      'als Verkäufer reagieren': ['Das tut mir leid.', 'Haben Sie den Kassenbon dabei?', 'Ich kann Ihnen einen Gutschein anbieten.', 'Entschuldigen Sie bitte die Umstände.'],
    }),
    gap('k-gap', ['Wäre es möglich, die Maschine {{umzutauschen}}?', 'Das Gerät hat zwei Jahre {{Garantie}}.', 'Haben Sie den {{Kassenbon}} dabei?', 'Der Kaufpreis wird {{erstattet}}.', 'Ich kann Ihnen einen {{Gutschein}} anbieten.'],
      { bank: ['Kassenbon', 'Gutschein', 'erstattet', 'Garantie', 'umzutauschen'], task: 'Ergänze.', taskEn: 'Complete the sentences.' }),
    sort('k-sort', ['Das sagt die Kundin', 'Das sagt der Verkäufer'], [['Seit gestern funktioniert das Gerät nicht mehr.', 0], ['Haben Sie die Bestellnummer?', 1], ['Ich hätte gern mein Geld zurück.', 0], ['Wir schicken das Gerät zur Reparatur ein.', 1], ['Das dauert mir zu lange.', 0], ['Entschuldigen Sie bitte die Umstände.', 1]],
      { task: 'Wer sagt das?', taskEn: 'Who says it?' }),
    compose('k-comp', 'Du hast online Kopfhörer bestellt. Sie sind defekt. Schreib eine Reklamation per E-Mail.', [
      ['Nenne Bestellung und Datum.', 'Mention the order and date.', ['Sehr geehrte Damen und Herren,', 'am 3. Mai', 'habe ich bei Ihnen', 'Kopfhörer bestellt.']],
      ['Beschreib das Problem.', 'Describe the problem.', ['Leider', 'funktioniert', 'der linke Kopfhörer', 'nicht.']],
      ['Sag, was du möchtest.', 'Say what you want.', ['Ich bitte Sie,', 'mir', 'den Kaufpreis', 'zu erstatten.']],
      ['Schließ den Brief.', 'Close the letter.', ['Die Bestellnummer', 'finden Sie', 'im Anhang.']],
    ], { task: 'Bau eine schriftliche Reklamation.', taskEn: 'Build a written complaint.' }),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik im Blick', 'Alles auf einen Blick', 'peach', 12,
  ['Passiv wiederholen', 'temporale Präpositionen wiederholen'], [
    grammar('g-1', 'Passiv: alle Formen', {
      head: ['', 'Aktiv', 'Passiv'],
      rows: [['Präsens', 'Man repariert das Gerät.', 'Das Gerät **wird repariert**.'], ['Präteritum', 'Man reparierte das Gerät.', 'Das Gerät **wurde repariert**.'], ['Perfekt', 'Man hat das Gerät repariert.', 'Das Gerät **ist repariert worden**.'], ['mit Modalverb', 'Man muss das Gerät reparieren.', 'Das Gerät **muss repariert werden**.'], ['mit Modalverb, Präteritum', 'Man musste das Gerät reparieren.', 'Das Gerät **musste repariert werden**.']],
      notes: ['Die handelnde Person: **von** + Dativ. *Das Gerät wird **von einem Techniker** repariert.*'],
      en: 'Passive = a form of werden + past participle. In the perfect: sein + participle + worden. With modals: modal + participle + werden.',
    }),
    grammar('g-2', 'Zeitangaben', {
      head: ['Kasus', 'Präpositionen'],
      rows: [['Dativ', 'an, in, vor, nach, seit, bei, ab, von'], ['Akkusativ', 'um, bis, für, gegen'], ['Genitiv', 'während, innerhalb, außerhalb']],
    }),
    gap('g-gap', ['Die Pakete {{werden}} morgen geliefert.', 'Das Haus {{wurde}} 1920 gebaut.', 'Der Fehler ist schon korrigiert {{worden}}.', 'Die Rechnung muss bis Freitag bezahlt {{werden}}.', 'Gestern {{wurden}} zwei Fahrräder gestohlen.'],
      { task: 'Ergänze die Form von werden.', taskEn: 'Fill in the form of werden.' }),
    mcq('g-q1', 'Welcher Satz ist Passiv?', ['Ich werde morgen einkaufen.', 'Das Brot wird jeden Morgen frisch gebacken.', 'Es wird langsam kalt.'], 1, { task: 'Wähle den richtigen Satz.', taskEn: 'Choose the correct sentence.' }),
    mcq('g-q2', '„Man kann das Formular online ausfüllen.“ Im Passiv:', ['Das Formular kann online ausgefüllt werden.', 'Das Formular kann online ausfüllen werden.', 'Das Formular wird online ausfüllen können.'], 0),
    mcq('g-q3', '„Ich lerne ___ einem Jahr Deutsch.“', ['vor', 'seit', 'in'], 1, { why: '„seit“ + Präsens: Es dauert bis jetzt. „vor einem Jahr“ wäre ein Zeitpunkt in der Vergangenheit.' }),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training: Kaufen, Geld und Konsum', 'butter', 20,
  ['Wortschatz zum Thema Geld und Konsum festigen', 'Aussprache: lange Wörter sprechen'], [
    gap('u-gap1', ['Ich habe diesen Monat zu viel Geld {{ausgegeben}}.', 'Kannst du mir bitte fünfzig Euro {{leihen}}?', 'Die Miete wird am ersten jedes Monats {{überwiesen}}.', 'Wenn das Kleid nicht passt, kann ich es {{umtauschen}}.', 'Für den Urlaub müssen wir noch {{sparen}}.', 'Dieses Sofa habe ich im Internet {{bestellt}}.'],
      { bank: ['ausgegeben', 'leihen', 'überwiesen', 'umtauschen', 'sparen', 'bestellt'], task: 'Welches Verb passt?', taskEn: 'Which verb fits?' }),
    match('u-match', [['günstig', 'teuer'], ['kaufen', 'verkaufen'], ['ausgeben', 'sparen'], ['neu', 'gebraucht'], ['steigen', 'sinken'], ['verleihen', 'ausleihen']],
      { task: 'Finde das Gegenteil oder das Gegenstück.', taskEn: 'Find the opposite or counterpart.' }),
    tip('u-tip', 'Tipp: leihen, ausleihen, verleihen', '**sich etwas (aus)leihen** = etwas bekommen: *Ich leihe mir ein Zelt (aus).*\n\n**jemandem etwas (ver)leihen** = etwas geben: *Ich (ver)leihe mein Zelt an Paul.*\n\n„leihen“ allein geht in beide Richtungen. Das Pronomen zeigt, wer bekommt: *Ich leihe **mir** …* oder *Ich leihe **dir** …*'),
    mcq('u-q1', '„Kann ich ___ dein Fahrrad ausleihen?“', ['mir', 'dir', 'ihm'], 0),
    sort('u-sort', ['im Geschäft', 'online', 'beides'], [['an der Kasse anstehen', 0], ['in den Warenkorb legen', 1], ['bezahlen', 2], ['die Lieferadresse eingeben', 1], ['etwas anprobieren', 0], ['etwas umtauschen', 2]],
      { task: 'Wo macht man das?', taskEn: 'Where do you do this?' }),
    gap('u-gap2', ['Der Laden {{wurde}} 2019 eröffnet. (Präteritum)', 'Die Jacke {{ist}} gestern geliefert worden. (Perfekt)', 'Die Ware {{wird}} morgen verschickt. (Präsens)', 'Der Kaufpreis kann innerhalb von 14 Tagen erstattet {{werden}}.'],
      { task: 'Passiv: Ergänze.', taskEn: 'Passive: fill in.' }),
    audio('u-aus', 'Aussprache: lange Wörter sprechen', [
      ['erzaehler', 'Deutsche Wörter können sehr lang sein. Meistens sind es zwei oder drei Wörter, die zusammengesetzt sind. Der Akzent liegt auf dem ersten Teil.'],
      ['erzaehler', 'KAUF, Preis. KAUFpreis. KASSEN, Bon. KASSENbon.'],
      ['jonas', 'BESTELL, Nummer. BESTELLnummer. KUNDEN, Service. KUNDENservice.'],
      ['jonas', 'Und jetzt drei Teile: RÜCK, sende, Etikett. RÜCKsendeetikett.'],
      ['erzaehler', 'Sprich lange Wörter zuerst langsam, Teil für Teil. Dann schneller.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. In compound nouns the stress is on the first part.' }),
    mcq('u-q2', 'Welcher Teil ist in „Kundenservice“ betont?', ['KUNden', 'SERvice', 'beide gleich'], 0),
    mcq('u-q3', 'Welchen Artikel hat „die Bestellung“ + „die Nummer“ = Bestellnummer?', ['der', 'die', 'das'], 1, { why: 'Das letzte Wort bestimmt den Artikel: die Nummer → die Bestellnummer.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 10,
  ['die wichtigsten Wörter wiederholen', 'den eigenen Stand einschätzen'], [
    cards('w-cards', [
      ['etwas ausleihen', 'etwas für kurze Zeit bekommen', 'to borrow'], ['etwas besitzen', 'etwas haben, das einem gehört', 'to own'], ['tauschen', 'etwas geben und etwas anderes bekommen', 'to swap'],
      ['der Anteil', 'ein Teil vom Ganzen, oft in Prozent', 'share'], ['steigen', 'mehr werden', 'to rise'], ['sinken', 'weniger werden', 'to fall'],
      ['die Reklamation', 'man meldet eine kaputte oder falsche Ware', 'complaint'], ['der Kassenbon', 'der Zettel von der Kasse', 'receipt'], ['die Garantie', 'Zeit für kostenlose Reparatur', 'warranty'],
      ['umtauschen', 'zurückbringen und etwas anderes bekommen', 'to exchange'], ['erstatten', 'Geld zurückzahlen', 'to refund'], ['das Schnäppchen', 'etwas sehr Günstiges', 'bargain'],
    ]),
    checklist('w-check', ['Ich kann einen Text über einen Trend verstehen.', 'Ich kann das Passiv im Präsens, Präteritum und Perfekt bilden.', 'Ich kann das Passiv mit Modalverben benutzen.', 'Ich kann eine einfache Grafik beschreiben.', 'Ich kann Zeitangaben mit der richtigen Präposition machen.', 'Ich kann im Geschäft etwas reklamieren.', 'Ich kann eine schriftliche Reklamation formulieren.']),
    mcq('w-q1', '„Die Jacke ist gestern geliefert ___.“', ['geworden', 'worden', 'werden'], 1, { task: 'Letzter Check vor der Prüfung', taskEn: 'Last check before the exam.' }),
    mcq('w-q2', 'Du möchtest dein Geld zurück. Was sagst du?', ['Ich hätte gern einen Gutschein.', 'Könnten Sie mir bitte den Kaufpreis erstatten?', 'Können Sie das Gerät einschicken?'], 1),
  ]);

export const kapitel5: Chapter = {
  id: 'kapitel-5', number: 5, title: 'Meins, deins, unsers', theme: 'Konsum, Geld, Werbung',
  grammar: 'Passiv in allen Zeiten und mit Modalverben. Zeitangaben mit Präpositionen.',
  sections: [einstieg, modul1, modul2, modul3, kommunikation, grammatik, uebungen, wortschatz],
  games: ['k5-sprint', 'k5-memory', 'k5-satzbau', 'k5-artikel'],
  exam: [
    x(1, mcq('x1', '„Hier ___ Deutsch gesprochen.“', ['wird', 'werden', 'worden'], 0)),
    x(1, mcq('x2', '„Das Museum ___ 1905 gebaut.“', ['wird', 'wurde', 'worden'], 1)),
    x(1, mcq('x3', '„Die Tür muss abends geschlossen ___.“', ['worden', 'wird', 'werden'], 2)),
    x(4, gap('x4', ['Man bringt die Pakete morgen. → Die Pakete werden morgen {{gebracht}}.', 'Man hat den Fehler gefunden. → Der Fehler ist {{gefunden}} worden.', 'Man darf hier nicht rauchen. → Hier darf nicht {{geraucht}} werden.', 'Man verkaufte das Haus. → Das Haus wurde {{verkauft}}.'], { task: 'Ergänze das Partizip.' })),
    x(4, gap('x5', ['Wir treffen uns {{am}} Samstag.', 'Der Film beginnt {{um}} 20 Uhr.', 'Ich arbeite {{seit}} zwei Jahren hier.', '{{Im}} Dezember ist es oft kalt.'], { task: 'Ergänze die Präposition.' })),
    x(1, mcq('x6', 'Was ist ein Repair-Café?', ['ein Café, in dem man Kaffee repariert', 'ein Treffen, bei dem Freiwillige beim Reparieren helfen', 'eine Werkstatt, in der man Geräte kauft'], 1),
      text('x-st1', 'Einmal im Monat wird im Gemeindehaus von Oberwil ein Repair-Café veranstaltet. Wer einen kaputten Toaster, eine Lampe oder eine Hose mit Loch hat, kann vorbeikommen. An langen Tischen sitzen Freiwillige, viele von ihnen pensionierte Handwerker, und helfen beim Reparieren. Bezahlt werden muss nichts, aber Spenden sind willkommen. „Etwa zwei Drittel der Geräte können gerettet werden“, sagt die Organisatorin. Besonders stolz ist sie darauf, dass inzwischen auch Jugendliche kommen: „Sie lernen hier, dass man Dinge nicht sofort wegwerfen muss.“ Während der Wartezeit gibt es Kaffee und selbst gebackenen Kuchen.', { kicker: 'Lesen' })),
    x(1, mcq('x7', 'Wie viele Geräte können repariert werden? (Text oben)', ['etwa ein Drittel', 'etwa die Hälfte', 'etwa zwei Drittel'], 2)),
    x(1, mcq('x8', 'Was ist das Problem mit dem Staubsauger?', ['Er ist zu laut.', 'Er saugt nicht mehr richtig.', 'Er wurde nicht geliefert.'], 1),
      audio('x-st2', 'Hören: Reklamation im Geschäft', [
        ['herrLehmann', 'Guten Tag, kann ich Ihnen helfen?'],
        ['priya', 'Ja, bitte. Ich habe vor einem Monat diesen Staubsauger gekauft, und er saugt nicht mehr richtig.'],
        ['herrLehmann', 'Das tut mir leid. Haben Sie den Kassenbon dabei?'],
        ['priya', 'Ja, hier.'],
        ['herrLehmann', 'Wir können das Gerät einschicken. Die Reparatur dauert etwa zwei Wochen.'],
        ['priya', 'Wäre es auch möglich, das Geld zurückzubekommen?'],
        ['herrLehmann', 'Leider nicht sofort. Aber wenn die Reparatur nicht funktioniert, wird Ihnen der Kaufpreis erstattet.'],
        ['priya', 'Gut, dann machen wir das so.'],
      ])),
    x(1, mcq('x9', 'Was passiert jetzt mit dem Staubsauger? (Hörtext oben)', ['Er wird zur Reparatur eingeschickt.', 'Er wird sofort umgetauscht.', 'Priya bekommt sofort ihr Geld zurück.'], 0)),
    x(2, order('x10', ['Das Gerät', 'kann', 'innerhalb von 14 Tagen', 'zurückgegeben', 'werden.'], { task: 'Bau den Satz im Passiv.' })),
    x(2, order('x11', ['Wäre es möglich,', 'die Jacke', 'umzutauschen?'], { task: 'Bau die Frage.' })),
    x(3, gap('x12', ['Die Grafik {{zeigt}}, wie viel Geld die Menschen ausgeben.', 'Der Anteil ist von 20 auf 30 Prozent {{gestiegen}}.', 'An erster {{Stelle}} stehen die Kosten für das Wohnen.'], { bank: ['Stelle', 'gestiegen', 'zeigt'], task: 'Ergänze die Grafikbeschreibung.' })),
    x(1, mcq('x13', '50 Prozent sind …', ['ein Drittel', 'die Hälfte', 'ein Viertel'], 1)),
    x(1, mcq('x14', '„___ der Arbeit darf man nicht privat telefonieren.“', ['Seit', 'Während', 'Um'], 1)),
  ],
};

export const games5: GameDef[] = [
  {
    id: 'k5-sprint', engine: 'sprint', title: 'Passiv-Sprint', blurb: '60 Sekunden: wird, wurde, werden oder worden?', skill: 'Passiv', tone: 'mint', chapter: 5, emoji: '⚡',
    rules: 'Du siehst einen Passivsatz mit einer Lücke. Tippe auf die richtige Form. Du hast 60 Sekunden.', label: 'Welche Form?',
    items: [
      { q: 'Das Auto ___ heute repariert.', a: 'wird', wrong: ['werden', 'worden'] }, { q: 'Die Briefe ___ morgen verschickt.', a: 'werden', wrong: ['wird', 'worden'] },
      { q: 'Das Haus ___ 1950 gebaut.', a: 'wurde', wrong: ['wird', 'worden'] }, { q: 'Der Brief ist schon geschrieben ___.', a: 'worden', wrong: ['geworden', 'werden'] },
      { q: 'Das muss sofort gemacht ___.', a: 'werden', wrong: ['worden', 'wird'] }, { q: 'Gestern ___ zwei Räder gestohlen.', a: 'wurden', wrong: ['wurde', 'werden'] },
      { q: 'Hier ___ nicht geraucht.', a: 'wird', wrong: ['werden', 'worden'] }, { q: 'Die Kinder ___ um vier abgeholt.', a: 'werden', wrong: ['wird', 'worden'] },
      { q: 'Die Rechnung ist bezahlt ___.', a: 'worden', wrong: ['geworden', 'wurde'] }, { q: 'Der Müll ___ montags abgeholt.', a: 'wird', wrong: ['werden', 'wurden'] },
      { q: 'Das Paket konnte nicht geliefert ___.', a: 'werden', wrong: ['worden', 'wurde'] }, { q: 'Die Schule ___ letztes Jahr renoviert.', a: 'wurde', wrong: ['wird', 'wurden'] },
      { q: 'Die Fenster ___ gerade geputzt.', a: 'werden', wrong: ['wird', 'worden'] }, { q: 'Ich bin nicht gefragt ___.', a: 'worden', wrong: ['geworden', 'werden'] },
      { q: 'Das darf nicht vergessen ___.', a: 'werden', wrong: ['worden', 'wird'] }, { q: 'Früher ___ mehr Briefe geschrieben.', a: 'wurden', wrong: ['wurde', 'werden'] },
    ],
  },
  {
    id: 'k5-memory', engine: 'memory', title: 'Aktiv-Passiv-Memory', blurb: 'Finde die Paare: Aktivsatz und Passivsatz.', skill: 'Passiv', tone: 'lilac', chapter: 5, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Aktivsatz mit dem passenden Passivsatz.', kinds: ['Aktiv', 'Passiv'],
    pairs: [['Man baut ein Haus.', 'Ein Haus wird gebaut.'], ['Man baute ein Haus.', 'Ein Haus wurde gebaut.'], ['Man hat es gebaut.', 'Es ist gebaut worden.'], ['Man muss es bauen.', 'Es muss gebaut werden.'], ['Man liefert Pakete.', 'Pakete werden geliefert.'], ['Man lieferte Pakete.', 'Pakete wurden geliefert.'], ['Man kann es tauschen.', 'Es kann getauscht werden.'], ['Man repariert es.', 'Es wird repariert.'], ['Man hat ihn gefragt.', 'Er ist gefragt worden.'], ['Man darf es leihen.', 'Es darf geliehen werden.']],
  },
  {
    id: 'k5-satzbau', engine: 'satzbau', title: 'Reklamations-Werkstatt', blurb: 'Bau Passivsätze und Sätze für die Reklamation.', skill: 'Passiv und Reklamation', tone: 'sky', chapter: 5, emoji: '🧱',
    rules: 'Tippe die Satzteile in der richtigen Reihenfolge an. Im Passiv steht das Partizip am Ende.',
    sentences: [
      { parts: ['Das Gerät', 'wird', 'kostenlos', 'repariert.'], hint: 'Partizip am Ende' },
      { parts: ['Der Laden', 'wurde', 'vor fünf Jahren', 'eröffnet.'], hint: 'Präteritum Passiv' },
      { parts: ['Die Jacke', 'ist', 'gestern', 'geliefert', 'worden.'], hint: 'worden ganz am Ende' },
      { parts: ['Der Kaufpreis', 'kann', 'nicht', 'erstattet', 'werden.'], hint: 'Partizip + werden am Ende' },
      { parts: ['Ich habe', 'vor zwei Wochen', 'diese Lampe', 'gekauft.'], hint: 'Zeit vor Objekt' },
      { parts: ['Wäre es möglich,', 'das Gerät', 'umzutauschen?'], hint: 'Infinitiv mit zu' },
      { parts: ['Seit gestern', 'funktioniert', 'der Drucker', 'nicht mehr.'], hint: 'Zeitangabe, dann Verb' },
      { parts: ['Ich hätte', 'gern', 'mein Geld', 'zurück.'], hint: 'höflich mit hätte gern' },
      { parts: ['Die Grafik zeigt,', 'wie viel', 'die Menschen', 'online kaufen.'], hint: 'Verb am Ende' },
    ],
  },
  {
    id: 'k5-artikel', engine: 'regen', title: 'Artikelregen: Konsum', blurb: 'der, die oder das? Fang die Nomen aus Kapitel 5.', skill: 'Artikel', tone: 'rose', chapter: 5, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel, bevor es unten ankommt. Du hast drei Leben.', buckets: ['der', 'die', 'das'],
    words: artikel('der Konsum, die Werbung, das Schnäppchen, der Preis, die Gebühr, das Mitglied, der Anteil, die Lieferung, das Paket, der Kassenbon, die Garantie, das Gerät, der Gutschein, die Reklamation, das Geschäft, der Rabatt, die Rechnung, das Angebot, der Kunde, die Grafik, das Geld, der Laden, die Kasse, das Bedürfnis, der Trend'),
  },
];
