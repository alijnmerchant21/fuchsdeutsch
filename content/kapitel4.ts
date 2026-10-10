import type { Chapter, GameDef, GlossaryEntry } from './types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, poll, section, sort, text, tip, x } from './helpers';

// Kapitel 4: theme Arbeit und Beruf. Grammar: Genitiv, Präpositionen mit Genitiv, Kausal-, Konzessiv- und Konsekutivsätze.

export const glossary4: Record<string, GlossaryEntry> = {
  Quereinsteiger: { de: 'Eine Person, die in einem Beruf arbeitet, den sie nicht gelernt hat.', en: 'career changer' },
  Ausbildung: { de: 'Das Lernen eines Berufs, meistens zwei bis drei Jahre in Betrieb und Schule.', en: 'vocational training, apprenticeship' },
  Schichtdienst: { de: 'Arbeit zu wechselnden Zeiten: früh, spät oder nachts.', en: 'shift work' },
  Gehalt: { de: 'Das Geld, das man jeden Monat für seine Arbeit bekommt.', en: 'salary' },
  kündigen: { de: 'Sagen, dass man die Arbeitsstelle verlässt. Oder: jemandem die Stelle wegnehmen.', en: 'to quit; to dismiss', ex: 'Sie hat nach zehn Jahren gekündigt.' },
  Werkstatt: { de: 'Ein Raum, in dem man Dinge baut oder repariert.', en: 'workshop' },
  Umschulung: { de: 'Ein Erwachsener lernt einen ganz neuen Beruf.', en: 'retraining' },
  Stellenanzeige: { de: 'Ein Text, mit dem eine Firma neue Mitarbeitende sucht.', en: 'job ad' },
  Bewerbung: { de: 'Die Unterlagen, die man schickt, wenn man eine Stelle haben möchte.', en: 'job application' },
  Anschreiben: { de: 'Der Brief in einer Bewerbung, in dem man erklärt, warum man die Stelle möchte.', en: 'cover letter' },
  Lebenslauf: { de: 'Ein Dokument mit Schule, Ausbildung und Berufserfahrung.', en: 'CV, résumé' },
  Vorstellungsgespräch: { de: 'Das Gespräch zwischen Bewerber und Firma.', en: 'job interview' },
  Berufserfahrung: { de: 'Die Zeit, die man schon in einem Beruf gearbeitet hat.', en: 'work experience' },
  Anforderung: { de: 'Was man für eine Stelle können oder mitbringen muss.', en: 'requirement' },
  zuverlässig: { de: 'Man kann sich auf diese Person verlassen.', en: 'reliable' },
  Teilzeit: { de: 'Man arbeitet weniger Stunden als normal, zum Beispiel 20 pro Woche.', en: 'part-time' },
  Überstunden: { de: 'Stunden, die man länger arbeitet als im Vertrag steht.', en: 'overtime' },
  sparsam: { de: 'Man gibt wenig Geld aus.', en: 'thrifty, frugal' },
  Rente: { de: 'Das Geld, das man im Alter bekommt, wenn man nicht mehr arbeitet.', en: 'pension; retirement', ex: 'Er geht mit 67 in Rente.' },
  Sinn: { de: 'Hier: der Grund, warum etwas wichtig oder wertvoll ist.', en: 'meaning, purpose' },
  Ehrenamt: { de: 'Arbeit, die man freiwillig und ohne Geld macht.', en: 'volunteer work' },
  Kaffeeküche: { de: 'Ein kleiner Raum im Büro, in dem man Kaffee kocht und kurz redet.', en: 'office kitchenette' },
  Feierabend: { de: 'Das Ende des Arbeitstages.', en: 'end of the working day' },
  pendeln: { de: 'Jeden Tag zwischen Wohnort und Arbeitsort hin- und herfahren.', en: 'to commute' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Traumjob gesucht', 'butter', 10,
  ['das Kapitel kennenlernen', 'über Berufe und Arbeitsbedingungen sprechen'], [
    overview('e-over', 'Kapitel 4: Von Beruf',
      'In diesem Kapitel geht es um die **Arbeit**. Du lernst Menschen kennen, die mitten im Leben den Beruf gewechselt haben, liest Tipps für eine gute Bewerbung und hörst ein Interview mit einer Frau, die mit 44 Jahren aufgehört hat zu arbeiten. Außerdem übst du etwas, das im Büro genauso wichtig ist wie Fachwissen: Small Talk in der Kaffeeküche.\n\nIn der Grammatik lernst du den **Genitiv** und Präpositionen wie *wegen* und *trotz*. Und du lernst, Gründe, Gegengründe und Folgen zu verbinden: mit *weil*, *obwohl*, *deshalb*, *trotzdem* und *sodass*.',
      'This chapter is about work: career changes, job applications, and a woman who stopped working at 44. You also practice small talk at the office. Grammar: the genitive case, prepositions with genitive (wegen, trotz, während), and linking reasons, contrasts and results (weil, obwohl, deshalb, trotzdem, sodass).',
      ['über den eigenen Beruf und Berufsweg sprechen', 'eine Stellenanzeige verstehen und ein Anschreiben bauen', 'Gründe, Gegengründe und Folgen ausdrücken', 'ein Small-Talk-Gespräch führen']),
    text('e-intro', 'Fragt der Chef den neuen Mitarbeiter: „Was können Sie eigentlich?“ Der Mitarbeiter: „Nichts.“ Der Chef: „Tut mir leid, die gut bezahlten Stellen sind schon alle besetzt.“\n\nWitze über die Arbeit gibt es in jeder Sprache. Aber was ist dir im Beruf wirklich wichtig?', { kicker: 'Zum Einstieg' }),
    poll('e-poll', [['Homeoffice', 'Büro'], ['im Team', 'allein'], ['feste Arbeitszeiten', 'flexible Arbeitszeiten'], ['hohes Gehalt', 'viel Freizeit'], ['sicherer Job', 'spannender Job']],
      { task: 'Was ist dir wichtiger?', taskEn: 'What matters more to you? There is no wrong answer.' }),
    match('e-match', [['die Erzieherin', 'betreut Kinder im Kindergarten'], ['der Pfleger', 'kümmert sich um kranke Menschen'], ['die Schreinerin', 'baut Möbel aus Holz'], ['der Steuerberater', 'hilft bei Finanzen und Steuern'], ['die Bauingenieurin', 'plant Brücken und Gebäude'], ['der Lokführer', 'fährt Züge']],
      { task: 'Wer macht was?', taskEn: 'Who does what?' }),
    sort('e-sort', ['Das ist ein Vorteil', 'Das ist ein Nachteil'], [['ein gutes Gehalt', 0], ['viele Überstunden', 1], ['nette Kolleginnen und Kollegen', 0], ['ein langer Arbeitsweg', 1], ['dreißig Tage Urlaub', 0], ['Schichtdienst am Wochenende', 1]],
      { task: 'Vorteil oder Nachteil?', taskEn: 'Advantage or disadvantage?' }),
  ]);

const modul1 = section('modul-1', 'modul', 'Modul 1', 'Und was machen Sie beruflich?', 'mint', 25,
  ['berufliche Entwicklungen verstehen', 'über Berufe sprechen', 'Grammatik: Genitiv und Präpositionen mit Genitiv'], [
    text('m1-text', `**Vom Schreibtisch in die Werkstatt.** Fünfzehn Jahre lang war Ines Kowalczyk Controllerin in der Zentrale einer großen Versicherung. Das [[Gehalt]] war gut, das Büro lag im zwölften Stock. „Aber am Ende des Tages wusste ich nie, was ich eigentlich geschafft hatte“, sagt sie. Während eines Urlaubs in Südtirol besuchte sie die [[Werkstatt]] eines alten Geigenbauers. Wegen dieses Nachmittags änderte sie ihr Leben: Mit 39 Jahren [[kündigen|kündigte]] sie und begann eine [[Ausbildung]] zur Geigenbauerin. Trotz des viel niedrigeren Einkommens hat sie die Entscheidung nie bereut. Heute repariert sie in ihrer eigenen kleinen Werkstatt die Instrumente der Musikschule ihrer Stadt.

**Vom Lkw ins Klassenzimmer.** Der Rücken von Goran Petrović machte nach zwanzig Jahren auf der Autobahn nicht mehr mit. Aufgrund seiner Gesundheit musste er den Beruf des Fernfahrers aufgeben. Das Arbeitsamt bot ihm eine [[Umschulung]] an. Innerhalb eines Jahres lernte er, was man als Schulbegleiter wissen muss. Jetzt unterstützt er Kinder mit Behinderung im Unterricht einer Grundschule. „Statt des Motors höre ich jetzt den ganzen Tag Kinderstimmen“, lacht er. „Das ist lauter, aber schöner.“ Dank seiner ruhigen Art ist er der Liebling der dritten Klasse. Als [[Quereinsteiger]] verdient er weniger als früher, doch er ist jeden Abend zu Hause.`,
      { kicker: 'Lesen', title: 'Zwei Porträts: Noch einmal von vorn', task: 'Lies die zwei Porträts.', taskEn: 'Read the two portraits. Notice the genitive forms: des, der, eines, einer.' }),
    mcq('m1-q1', 'Warum hat Ines ihren alten Beruf aufgegeben?', ['Sie verdiente zu wenig.', 'Sie sah am Ende des Tages kein Ergebnis ihrer Arbeit.', 'Ihre Firma musste schließen.'], 1, { task: 'Hast du den Text verstanden?', taskEn: 'Check your understanding.' }),
    mcq('m1-q2', 'Warum konnte Goran nicht mehr als Fernfahrer arbeiten?', ['wegen seines Rückens', 'wegen seines Alters', 'wegen seiner Familie'], 0),
    mcq('m1-q3', 'Was haben Ines und Goran gemeinsam?', ['Beide arbeiten jetzt mit Kindern.', 'Beide haben eine eigene Firma.', 'Beide verdienen weniger als früher und sind trotzdem zufrieden.'], 2),
    grammar('m1-gram', 'Der Genitiv', {
      intro: 'Der Genitiv zeigt, zu wem oder wozu etwas gehört. Frage: **Wessen?**',
      head: ['', 'maskulin', 'feminin', 'neutral', 'Plural'],
      rows: [
        ['bestimmt', 'die Werkstatt **des** Geigenbauer**s**', 'die Zentrale **der** Versicherung', 'der Rücken **des** Kind**es**', 'die Instrumente **der** Schüler'],
        ['unbestimmt', 'die Werkstatt **eines** Geigenbauer**s**', 'die Zentrale **einer** Versicherung', 'der Rücken **eines** Kind**es**', 'die Instrumente **von** Schülern'],
      ],
      notes: [
        'Maskuline und neutrale Nomen bekommen **-s** oder **-es**. Kurze Nomen und Nomen auf -s, -ß, -z, -x meistens **-es**: des Tag**es**, des Haus**es**.',
        'Adjektive im Genitiv enden mit Artikel immer auf **-en**: des alt**en** Geigenbauers, einer groß**en** Versicherung.',
        'Namen: **Ines’** Werkstatt, **Gorans** Rücken. Beim Sprechen sagt man oft **von** + Dativ: die Werkstatt von Ines.',
      ],
      en: 'The genitive shows possession (whose?). Masculine/neuter: des or eines, and the noun adds -s or -es. Feminine and plural: der or einer, no noun ending. In speech people often use "von" + dative instead.',
    }),
    grammar('m1-gram2', 'Präpositionen mit Genitiv', {
      head: ['Präposition', 'Bedeutung', 'Beispiel'],
      rows: [
        ['wegen, aufgrund', 'Grund', '**Wegen** dieses Nachmittags änderte sie ihr Leben.'],
        ['dank', 'positiver Grund', '**Dank** seiner ruhigen Art mögen ihn die Kinder.'],
        ['trotz', 'Gegengrund', '**Trotz** des niedrigeren Einkommens ist sie zufrieden.'],
        ['während', 'Zeit', '**Während** eines Urlaubs besuchte sie eine Werkstatt.'],
        ['innerhalb, außerhalb', 'Zeit oder Ort', '**Innerhalb** eines Jahres lernte er den neuen Beruf.'],
        ['statt, anstelle', 'Alternative', '**Statt** des Motors hört er Kinderstimmen.'],
      ],
      notes: ['Beim Sprechen hört man nach *wegen*, *trotz* und *während* oft den Dativ: wegen dem Wetter. In geschriebenen Texten steht der Genitiv.'],
      en: 'These prepositions take the genitive: wegen/aufgrund (because of), dank (thanks to), trotz (despite), während (during), innerhalb (within), statt (instead of).',
    }),
    gap('m1-gap', ['Das ist das Büro {{des}} Chefs.', 'Die Tür {{der}} Werkstatt ist offen.', 'Am Ende {{des}} Tages bin ich müde.', 'Das ist die Meinung {{einer}} Kollegin.', 'Der Beruf {{eines}} Fernfahrers ist anstrengend.', 'Die Gehälter {{der}} Mitarbeiter steigen.'],
      { task: 'Ergänze den Artikel im Genitiv.', taskEn: 'Fill in the genitive article: des, der, eines or einer.' }),
    sort('m1-sort', ['Grund', 'Gegengrund', 'Zeit'], [['wegen', 0], ['trotz', 1], ['während', 2], ['aufgrund', 0], ['innerhalb', 2], ['dank', 0]],
      { task: 'Was drückt die Präposition aus?', taskEn: 'What does the preposition express?' }),
    gap('m1-gap2', ['{{Wegen}} des schlechten Wetters fahre ich heute mit dem Bus.', '{{Trotz}} der vielen Überstunden mag sie ihren Job.', '{{Während}} der Besprechung hat sein Handy geklingelt.', '{{Dank}} deiner Hilfe bin ich pünktlich fertig geworden.', '{{Statt}} eines Autos hat er sich ein Fahrrad gekauft.'],
      { bank: ['Statt', 'Dank', 'Wegen', 'Während', 'Trotz'], task: 'Welche Präposition passt?', taskEn: 'Which preposition fits?' }),
    order('m1-order', ['Trotz', 'des niedrigeren Einkommens', 'hat sie', 'die Entscheidung', 'nie bereut.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.', hint: 'Nach der Präposition mit Genitiv kommt das Verb.' }),
    compose('m1-comp', 'Stell den Berufsweg einer Person vor: **Aylin, früher Bankkauffrau, heute Gärtnerin.**', [
      ['Sag, was sie früher war.', 'Say what she used to be.', ['Aylin', 'war zehn Jahre lang', 'Bankkauffrau', 'in der Filiale', 'einer großen Bank.']],
      ['Nenne den Grund für den Wechsel.', 'Give the reason for the change.', ['Wegen', 'des ständigen Stresses', 'hat sie', 'gekündigt.']],
      ['Sag, was sie danach gemacht hat.', 'Say what she did next.', ['Innerhalb', 'von zwei Jahren', 'hat sie', 'eine Ausbildung', 'gemacht.']],
      ['Sag, wie es ihr heute geht.', 'Say how she is today.', ['Trotz', 'des niedrigeren Gehalts', 'ist sie', 'heute', 'zufriedener.']],
    ], { task: 'Bau ein kurzes Porträt.', taskEn: 'Build a short portrait.' }),
  ]);

const modul2 = section('modul-2', 'modul', 'Modul 2', 'Ein neuer Job', 'sky', 20,
  ['Tipps zur Bewerbung verstehen', 'eine Stellenanzeige verstehen', 'ein Bewerbungsanschreiben bauen'], [
    text('m2-text', `**1. Lesen Sie die Anzeige genau.** In jeder [[Stellenanzeige]] stehen [[Anforderung|Anforderungen]]. Markieren Sie, was „notwendig“ ist und was nur „wünschenswert“. Sie müssen nicht alles erfüllen. Wer siebzig Prozent mitbringt, sollte sich bewerben.

**2. Schreiben Sie kein Standard-Anschreiben.** Personalabteilungen erkennen sofort, ob ein [[Anschreiben]] an zwanzig Firmen gegangen ist. Nennen Sie die Firma, die Stelle und einen konkreten Grund, warum Sie genau dort arbeiten möchten.

**3. Zeigen Sie Beispiele statt Adjektive.** „Ich bin teamfähig und [[zuverlässig]]“ schreibt jeder. Besser: „In meinem letzten Projekt habe ich mit fünf Kolleginnen ein neues Bestellsystem eingeführt.“

**4. Halten Sie den Lebenslauf aktuell und lückenlos.** Der [[Lebenslauf]] beginnt mit der neuesten Station. Lücken von mehr als drei Monaten erklärt man kurz, zum Beispiel mit „Elternzeit“ oder „Sprachkurs“.

**5. Lassen Sie jemanden Korrektur lesen.** Ein einziger Tippfehler im Namen der Firma kann das Ende Ihrer [[Bewerbung]] sein. Bitten Sie eine Person mit sehr gutem Deutsch, alles zu prüfen.`,
      { kicker: 'Lesen', title: 'Fünf Tipps für Ihre Bewerbung', task: 'Lies die Tipps.', taskEn: 'Read the tips for a job application in German-speaking countries.' }),
    mcq('m2-q1', 'Wann sollte man sich laut Text bewerben?', ['nur, wenn man alle Anforderungen erfüllt', 'wenn man etwa 70 Prozent der Anforderungen erfüllt', 'immer, egal was in der Anzeige steht'], 1, { task: 'Hast du den Text verstanden?', taskEn: 'Check your understanding.' }),
    mcq('m2-q2', 'Was ist besser als „Ich bin teamfähig“?', ['ein konkretes Beispiel aus der Arbeit', 'noch mehr Adjektive', 'ein Foto vom Team'], 0),
    mcq('m2-q3', 'Womit beginnt ein Lebenslauf?', ['mit der Grundschule', 'mit den Hobbys', 'mit der neuesten Station'], 2),
    text('m2-anzeige', '**Wir suchen ab 1. September: Mitarbeiter/in im Kundenservice (m/w/d), Teilzeit 25 Std./Woche.**\n\nIhre Aufgaben: Kundenanfragen per Telefon und E-Mail beantworten, Bestellungen bearbeiten.\n\nDas bringen Sie mit: abgeschlossene Ausbildung, sehr gute Deutschkenntnisse (mind. B2), freundliches Auftreten. Berufserfahrung im Kundenservice ist wünschenswert.\n\nWir bieten: flexible Arbeitszeiten, 30 Tage Urlaub, ein nettes Team. Bewerbungen bitte bis 15. Juli an Frau Dr. Albers.', { kicker: 'Lesen', title: 'Eine Stellenanzeige' }),
    mcq('m2-q4', 'Was ist für die Stelle notwendig?', ['Berufserfahrung im Kundenservice', 'Deutsch auf B2-Niveau', 'ein Führerschein'], 1, { why: 'Berufserfahrung ist nur „wünschenswert“, also ein Plus, aber keine Bedingung.' }),
    match('m2-match', [['m/w/d', 'männlich, weiblich, divers'], ['Teilzeit', 'weniger Stunden als eine volle Stelle'], ['wünschenswert', 'gut, aber nicht notwendig'], ['mind.', 'mindestens'], ['Std.', 'Stunden']],
      { task: 'Was bedeutet das in einer Stellenanzeige?', taskEn: 'What does it mean in a job ad?' }),
    phrases('m2-phr', 'Redemittel: Bewerbungsanschreiben', {
      'Anfang': ['Sehr geehrte Frau Dr. Albers,', 'mit großem Interesse habe ich Ihre Anzeige gelesen.', 'Hiermit bewerbe ich mich um die Stelle als …'],
      'über sich': ['Ich habe eine Ausbildung als … abgeschlossen.', 'Seit drei Jahren arbeite ich als …', 'Zu meinen Aufgaben gehört es, … zu …'],
      'Schluss': ['Über eine Einladung zu einem Gespräch würde ich mich sehr freuen.', 'Mit freundlichen Grüßen'],
    }),
    gap('m2-gap', ['Mit großem {{Interesse}} habe ich Ihre Anzeige gelesen.', 'Hiermit {{bewerbe}} ich mich um die Stelle im Kundenservice.', 'Ich habe eine Ausbildung als Kauffrau {{abgeschlossen}}.', 'Über eine {{Einladung}} zu einem Gespräch würde ich mich freuen.', 'Mit freundlichen {{Grüßen}}'],
      { bank: ['Grüßen', 'Einladung', 'Interesse', 'abgeschlossen', 'bewerbe'], task: 'Ergänze das Anschreiben.', taskEn: 'Complete the cover letter.' }),
    compose('m2-comp', 'Du bewirbst dich auf die Anzeige oben. Bau dein Anschreiben.', [
      ['Beginn mit der Anrede und dem Anlass.', 'Start with why you are writing.', ['Sehr geehrte Frau Dr. Albers,', 'hiermit bewerbe ich mich', 'um die Stelle', 'im Kundenservice.']],
      ['Sag etwas über deine Ausbildung.', 'Say something about your training.', ['Ich habe', 'eine Ausbildung', 'als Hotelfachfrau', 'abgeschlossen.']],
      ['Nenne deine Erfahrung.', 'Mention your experience.', ['Seit drei Jahren', 'beantworte ich', 'täglich', 'die Fragen', 'unserer Gäste.']],
      ['Schließ höflich.', 'Close politely.', ['Über eine Einladung', 'zu einem Gespräch', 'würde ich mich', 'sehr freuen.']],
    ], { task: 'Bau ein Anschreiben.', taskEn: 'Build a cover letter.' }),
  ]);

const modul3 = section('modul-3', 'modul', 'Modul 3', 'Nie wieder arbeiten?', 'lilac', 25,
  ['ein Interview verstehen', 'die eigene Meinung sagen', 'Grammatik: Gründe, Gegengründe und Folgen verbinden'], [
    audio('m3-audio', 'Hören: Radiointerview „Mit 44 in Rente“', [
      ['moderatorin', 'Mein Gast hat mit 44 Jahren aufgehört zu arbeiten. Jule Asmussen aus Hamburg, wie geht das? Haben Sie im Lotto gewonnen?'],
      ['jule', 'Nee, leider nicht. Ich habe zwanzig Jahre lang ungefähr die Hälfte meines Gehalts gespart. Ich war sehr sparsam: kein Auto, kleine Wohnung, Urlaub mit dem Zelt.'],
      ['moderatorin', 'Warum wollten Sie denn so früh aufhören? Mochten Sie Ihren Beruf nicht?'],
      ['jule', 'Doch, ich war gern Ingenieurin. Aber ich hatte nie Zeit, weil ich fünfzig Stunden pro Woche gearbeitet habe. Ich wollte nicht warten, bis ich 67 bin.'],
      ['moderatorin', 'Und jetzt liegen Sie den ganzen Tag am Strand?'],
      ['jule', 'Das habe ich drei Wochen lang gemacht. Dann war mir so langweilig, dass ich mir ein Ehrenamt gesucht habe. Ich repariere jetzt zweimal pro Woche Fahrräder für Kinder.'],
      ['moderatorin', 'Sie arbeiten also doch.'],
      ['jule', 'Ja, obwohl ich nicht mehr muss. Das ist der Unterschied. Ich bekomme kein Geld dafür, trotzdem gehe ich jeden Dienstag gern hin.'],
      ['moderatorin', 'Was sagen Sie Leuten, die das egoistisch finden?'],
      ['jule', 'Ich verstehe die Kritik. Nicht jeder verdient genug, um zu sparen, deshalb ist mein Weg kein Modell für alle. Aber über den Sinn von Arbeit sollte jeder einmal nachdenken.'],
    ], { task: 'Warum hat Jule aufgehört zu arbeiten?', taskEn: 'Why did Jule stop working? Listen for weil, obwohl, deshalb and trotzdem.', note: 'Norddeutsch: **Nee** = Nein.' }),
    mcq('m3-q1', 'Wie konnte Jule so früh aufhören?', ['Sie hat im Lotto gewonnen.', 'Sie hat viele Jahre lang die Hälfte ihres Gehalts gespart.', 'Sie hat geerbt.'], 1, { task: 'Fragen zum Interview', taskEn: 'Questions about the interview.' }),
    mcq('m3-q2', 'Warum hat sie sich ein Ehrenamt gesucht?', ['Sie brauchte Geld.', 'Ihr war langweilig.', 'Ihre Familie wollte das.'], 1),
    mcq('m3-q3', 'Was sagt Jule zur Kritik?', ['Ihr Weg ist nicht für alle möglich.', 'Jeder kann so leben wie sie.', 'Kritik interessiert sie nicht.'], 0),
    grammar('m3-gram', 'Sätze verbinden: Grund, Gegengrund, Folge', {
      head: ['', 'Nebensatz (Verb am Ende)', 'Hauptsatz (Verb auf Position 2)'],
      rows: [
        ['**Grund** (kausal)', '**weil**, **da**: Ich hatte nie Zeit, **weil** ich viel gearbeitet **habe**.', '**denn** (Position 0): …, **denn** ich **habe** viel gearbeitet.'],
        ['**Gegengrund** (konzessiv)', '**obwohl**: Sie arbeitet, **obwohl** sie nicht mehr **muss**.', '**trotzdem**, **dennoch**: Sie muss nicht mehr. **Trotzdem arbeitet** sie.'],
        ['**Folge** (konsekutiv)', '**sodass**, **so … dass**: Mir war **so** langweilig, **dass** ich ein Ehrenamt gesucht **habe**.', '**deshalb**, **deswegen**, **darum**, **daher**, **also**: Nicht jeder verdient genug. **Deshalb ist** das kein Modell für alle.'],
      ],
      notes: [
        '**weil**/**obwohl** + Verb am Ende. **deshalb**/**trotzdem** + Verb direkt danach.',
        '**denn** steht zwischen zwei Hauptsätzen und verändert die Wortstellung nicht: …, **denn** ich **hatte** keine Zeit.',
        '**da** steht oft am Satzanfang und klingt formeller als **weil**: **Da** er krank war, blieb er zu Hause.',
      ],
      en: 'Reason: weil/da (verb last) or denn (normal order). Contrast: obwohl (verb last) or trotzdem (verb right after). Result: sodass (verb last) or deshalb/deswegen/darum/daher (verb right after).',
    }),
    tip('m3-tip', 'Tipp: Position von denn', '**denn** zählt nicht als Position. Danach geht der Satz ganz normal weiter:\n\n*Ich bleibe zu Hause, **denn** ich **bin** krank.* (Subjekt, dann Verb)\n\n*Ich bleibe zu Hause, **weil** ich krank **bin**.* (Verb am Ende)'),
    sort('m3-sort', ['Grund', 'Gegengrund', 'Folge'], [['weil', 0], ['obwohl', 1], ['deshalb', 2], ['denn', 0], ['trotzdem', 1], ['sodass', 2], ['da', 0], ['dennoch', 1], ['daher', 2]],
      { task: 'Was drückt das Wort aus?', taskEn: 'What does the connector express: reason, contrast or result?' }),
    gap('m3-gap', ['Ich habe gekündigt, {{weil}} ich mehr Zeit für meine Familie haben wollte.', 'Er verdient sehr gut. {{Trotzdem}} ist er unzufrieden.', 'Sie geht jeden Tag arbeiten, {{obwohl}} sie schon 70 ist.', 'Der Bus kam nicht, {{deshalb}} bin ich zu Fuß gegangen.', 'Es war so laut im Büro, {{dass}} ich mich nicht konzentrieren konnte.', 'Ich nehme den Job nicht, {{denn}} der Arbeitsweg ist zu lang.'],
      { bank: ['weil', 'obwohl', 'Trotzdem', 'deshalb', 'dass', 'denn'], task: 'Welches Wort passt?', taskEn: 'Which connector fits? Watch the verb position.' }),
    order('m3-order1', ['Sie arbeitet', 'ehrenamtlich,', 'obwohl', 'sie', 'kein Geld', 'dafür bekommt.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.', hint: 'obwohl + Verb am Ende' }),
    order('m3-order2', ['Ich war krank,', 'deshalb', 'bin ich', 'zu Hause', 'geblieben.'], { hint: 'Nach deshalb kommt das Verb.' }),
    compose('m3-comp', 'Thema: **„Mit 44 aufhören zu arbeiten: gute Idee?“** Sag deine Meinung.', [
      ['Sag deine Meinung.', 'Give your opinion.', ['Ich finde', 'die Idee', 'interessant,', 'aber', 'nicht für jeden möglich.']],
      ['Nenne einen Grund mit „weil“.', 'Give a reason with "weil".', ['Viele Leute', 'können nicht sparen,', 'weil', 'ihr Gehalt', 'zu niedrig ist.']],
      ['Nenne einen Gegengrund mit „obwohl“.', 'Add a contrast with "obwohl".', ['Obwohl', 'ich meine Arbeit mag,', 'hätte ich', 'gern', 'mehr Freizeit.']],
      ['Zieh ein Fazit mit „deshalb“.', 'Conclude with "deshalb".', ['Deshalb', 'würde ich', 'lieber', 'in Teilzeit', 'arbeiten.']],
    ], { task: 'Bau deine Meinung.', taskEn: 'Build your opinion in four sentences.' }),
  ]);

const kommunikation = section('kommunikation', 'kommunikation', 'Alltag und Beruf', 'Schönes Wetter heute, oder?', 'rose', 20,
  ['Small-Talk-Gespräche führen', 'passende und unpassende Themen erkennen', 'ein Gespräch freundlich beenden'], [
    text('k-intro', 'Small Talk ist das kurze, leichte Gespräch mit Menschen, die man nicht gut kennt: im Aufzug, in der [[Kaffeeküche]], vor einer Besprechung. Viele finden ihn überflüssig. Aber wer nie mit den Kollegen redet, erfährt auch nie, was in der Firma wirklich passiert.', { kicker: 'Zum Einstieg' }),
    audio('k-a1', 'Gespräch 1: In der Kaffeeküche (Köln)', [
      ['elif', 'Morgen! Du bist doch der Neue aus der IT, oder? Ich bin Elif aus dem Vertrieb.'],
      ['tomasz', 'Guten Morgen. Ja, Tomasz, ich habe am Montag angefangen.'],
      ['elif', 'Na, dann herzlich willkommen! Und, hast du dich schon ein bisschen eingelebt?'],
      ['tomasz', 'Es geht. Ich suche noch jeden Morgen den richtigen Flur.'],
      ['elif', 'Das ging mir am Anfang genauso, dat Jebäude is e Labyrinth. Wohnst du hier in Köln?'],
      ['tomasz', 'Nein, in Bonn. Ich pendle mit der Bahn.'],
      ['elif', 'Oh, dann kennst du ja schon die Verspätungen. Sag mal, warst du schon in der Kantine? Donnerstags gibt es Reibekuchen, die musst du probieren.'],
      ['tomasz', 'Das klingt gut. Vielleicht gehen wir mal zusammen hin?'],
      ['elif', 'Gern! So, ich muss los, mein Meeting fängt an. Schönen Tag dir noch!'],
      ['tomasz', 'Danke, dir auch!'],
    ], { task: 'Über welche Themen sprechen Elif und Tomasz?', taskEn: 'What topics do Elif and Tomasz talk about? Elif speaks with a Cologne accent.',
      note: 'Rheinisch: **dat Jebäude is e Labyrinth** = das Gebäude ist ein Labyrinth. **Reibekuchen** = gebratene Kartoffelpuffer.' }),
    mcq('k-q1', 'Worüber sprechen die beiden **nicht**?', ['über den Arbeitsweg', 'über das Gehalt', 'über das Essen in der Kantine'], 1),
    mcq('k-q2', 'Wie beendet Elif das Gespräch?', ['Sie nennt einen Grund und wünscht einen schönen Tag.', 'Sie geht einfach weg.', 'Sie sagt, dass sie keine Lust mehr hat.'], 0),
    audio('k-a2', 'Gespräch 2: Im Aufzug auf der Messe (München)', [
      ['seppi', 'Grüß Gott. Auch in den vierten Stock?'],
      ['frauBaumann', 'Grüezi. Ja, bitte. Ist das voll hier heute!'],
      ['seppi', 'Mei, des is jedes Jahr so. Sind Sie zum ersten Mal auf der Messe?'],
      ['frauBaumann', 'Ja, ich komme aus Zürich. Ich bin gestern Abend angereist.'],
      ['seppi', 'Ah, aus der Schweiz! Hatten Sie eine gute Fahrt?'],
      ['frauBaumann', 'Sehr angenehm, vier Stunden mit dem Zug. Und das Wetter in München ist ja herrlich.'],
      ['seppi', 'Da haben S’ Glück, letzte Woche hat’s nur gregnet. Wenn Sie am Abend Zeit haben: Der Biergarten gleich hinter der Halle is wirklich schön.'],
      ['frauBaumann', 'Danke für den Tipp! Oh, hier muss ich raus. Es war nett, mit Ihnen zu plaudern.'],
      ['seppi', 'Gleichfalls. Einen erfolgreichen Tag noch!'],
    ], { task: 'Was erfährt man über Frau Baumann?', taskEn: 'What do you learn about Frau Baumann? Sepp speaks Bavarian, she speaks Swiss Standard German.',
      note: 'Bairisch: **Mei, des is …** = Ach, das ist … **haben S’** = haben Sie. **gregnet** = geregnet. Schweizerisch: **Grüezi** = Guten Tag.' }),
    mcq('k-q3', 'Wie ist Frau Baumann nach München gekommen?', ['mit dem Flugzeug', 'mit dem Auto', 'mit dem Zug'], 2),
    sort('k-sort', ['Gutes Thema für Small Talk', 'Lieber nicht'], [['das Wetter', 0], ['das Gehalt', 1], ['die Anreise', 0], ['Krankheiten', 1], ['das Essen in der Kantine', 0], ['Politik und Religion', 1], ['Urlaubspläne', 0], ['Probleme mit dem Chef', 1]],
      { task: 'Worüber spricht man beim Small Talk?', taskEn: 'What do you talk about in small talk in German-speaking offices?' }),
    phrases('k-phr', 'Redemittel: Small Talk', {
      'beginnen': ['Sind Sie zum ersten Mal hier?', 'Hast du dich schon eingelebt?', 'Hatten Sie eine gute Anreise?', 'Ist das voll hier heute!'],
      'weiterführen': ['Das ging mir am Anfang genauso.', 'Und wie gefällt es Ihnen hier?', 'Ach, wirklich? Erzählen Sie mal.'],
      'beenden': ['So, ich muss leider los.', 'Es war nett, mit Ihnen zu plaudern.', 'Schönen Tag noch!', 'Gleichfalls.'],
    }),
    gap('k-gap', ['Hast du dich schon ein bisschen {{eingelebt}}?', 'Hatten Sie eine gute {{Anreise}}?', 'Das ging mir am Anfang {{genauso}}.', 'So, ich muss leider {{los}}.', 'Es war nett, mit Ihnen zu {{plaudern}}.'],
      { bank: ['plaudern', 'los', 'genauso', 'Anreise', 'eingelebt'], task: 'Ergänze die Redemittel.', taskEn: 'Complete the phrases.' }),
    mcq('k-q4', 'Eine Kollegin sagt: „Schönes Wochenende!“ Was antwortest du?', ['Ja.', 'Danke, gleichfalls!', 'Warum?'], 1),
    compose('k-comp', 'Du triffst eine neue Kollegin am Kaffeeautomaten. Bau deinen Teil des Gesprächs.', [
      ['Begrüß sie und stell dich vor.', 'Greet her and introduce yourself.', ['Hallo,', 'ich bin Karim', 'aus der', 'Buchhaltung.']],
      ['Stell eine freundliche Frage.', 'Ask a friendly question.', ['Hast du dich', 'schon', 'ein bisschen', 'eingelebt?']],
      ['Gib einen Tipp.', 'Give a tip.', ['Der Kaffee', 'im zweiten Stock', 'ist übrigens', 'viel besser.']],
      ['Beende das Gespräch freundlich.', 'End the chat politely.', ['So,', 'ich muss leider los,', 'schönen Tag', 'dir noch!']],
    ], { task: 'Bau ein Small-Talk-Gespräch.', taskEn: 'Build a small-talk exchange.' }),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik im Blick', 'Alles auf einen Blick', 'peach', 12,
  ['Genitiv wiederholen', 'Konnektoren wiederholen'], [
    grammar('g-1', 'Genitiv', {
      head: ['', 'maskulin / neutral', 'feminin / Plural'],
      rows: [['Artikel', 'des, eines, meines + Nomen mit -(e)s', 'der, einer, meiner'], ['Beispiel', 'das Auto **des** Chef**s**, **eines** Kollege**n**', 'das Büro **der** Chefin, **der** Kollegen'], ['Präpositionen', 'wegen, trotz, während, innerhalb, außerhalb, statt, aufgrund, dank', '']],
      notes: ['Einige maskuline Nomen (n-Deklination) haben -n statt -s: des Kolleg**en**, des Kund**en**, des Student**en**.'],
    }),
    grammar('g-2', 'Konnektoren', {
      head: ['Bedeutung', 'Verb am Ende', 'Verb auf Position 2', 'Präposition + Genitiv'],
      rows: [['Grund', 'weil, da', 'denn (Position 0), nämlich', 'wegen, aufgrund'], ['Gegengrund', 'obwohl', 'trotzdem, dennoch', 'trotz'], ['Folge', 'sodass, so … dass', 'deshalb, deswegen, darum, daher, also', 'infolge']],
      en: 'The same idea can be expressed three ways: a subordinating conjunction (verb last), an adverb (verb right after), or a preposition with genitive.',
    }),
    gap('g-gap', ['Wegen {{des}} Streiks fährt heute kein Zug.', 'Trotz {{der}} Kälte gehen wir spazieren.', 'Während {{des}} Essens klingelte das Telefon.', 'Das ist der Schreibtisch {{meines}} Kollegen. (mein)', 'Die Mutter {{meiner}} Freundin ist Ärztin. (mein)'],
      { task: 'Ergänze die Genitivform.', taskEn: 'Fill in the genitive form.' }),
    mcq('g-q1', 'Welcher Satz ist richtig?', ['Ich komme nicht, weil ich bin krank.', 'Ich komme nicht, weil ich krank bin.', 'Ich komme nicht, weil krank ich bin.'], 1, { task: 'Wähle den richtigen Satz.', taskEn: 'Choose the correct sentence.' }),
    mcq('g-q2', 'Welcher Satz ist richtig?', ['Es regnet. Trotzdem wir gehen spazieren.', 'Es regnet. Trotzdem gehen wir spazieren.', 'Es regnet. Trotzdem spazieren wir gehen.'], 1),
    mcq('g-q3', '„Obwohl es regnet, gehen wir spazieren.“ Mit Präposition:', ['Wegen des Regens gehen wir spazieren.', 'Trotz des Regens gehen wir spazieren.', 'Während des Regens gehen wir spazieren.'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training: Wörter rund um die Arbeit', 'butter', 20,
  ['Wortschatz zum Thema Arbeit festigen', 'Aussprache: freundlich sprechen'], [
    gap('u-gap1', ['Ich arbeite nur 20 Stunden pro Woche, also in {{Teilzeit}}.', 'Diese Woche habe ich schon acht {{Überstunden}} gemacht.', 'Nach der Schule hat er eine {{Ausbildung}} als Koch gemacht.', 'Mein {{Gehalt}} kommt immer am Monatsende.', 'Morgen habe ich ein {{Vorstellungsgespräch}} bei einer neuen Firma.', 'Um fünf Uhr habe ich {{Feierabend}}.'],
      { bank: ['Teilzeit', 'Überstunden', 'Ausbildung', 'Gehalt', 'Vorstellungsgespräch', 'Feierabend'], task: 'Welches Wort passt?', taskEn: 'Which word fits?' }),
    match('u-match', [['eine Stelle', 'suchen'], ['einen Vertrag', 'unterschreiben'], ['sich um eine Stelle', 'bewerben'], ['Überstunden', 'machen'], ['in Rente', 'gehen'], ['Urlaub', 'beantragen']],
      { task: 'Welches Verb passt?', taskEn: 'Which verb fits?' }),
    sort('u-sort', ['Bewerbung', 'Arbeitsalltag', 'Ende der Arbeit'], [['das Anschreiben', 0], ['die Besprechung', 1], ['die Rente', 2], ['der Lebenslauf', 0], ['die Überstunden', 1], ['die Kündigung', 2], ['das Vorstellungsgespräch', 0], ['die Kantine', 1], ['der Feierabend', 2]],
      { task: 'Wohin gehört das Wort?', taskEn: 'Where does the word belong?' }),
    gap('u-gap2', ['der Chef → das Büro {{des Chefs}}', 'die Firma → der Name {{der Firma}}', 'das Team → die Aufgaben {{des Teams}}', 'die Kollegen → die Meinung {{der Kollegen}}', 'ein Kunde → die Frage {{eines Kunden}}'],
      { task: 'Bilde den Genitiv.', taskEn: 'Form the genitive (two words).' }),
    tip('u-tip', 'Tipp: -s oder -es?', '**-es** steht meistens bei kurzen Nomen (des Tag**es**, des Jahr**es**) und immer nach -s, -ß, -z, -x (des Haus**es**, des Platz**es**).\n\n**-s** steht bei langen Nomen und bei Nomen auf -er, -el, -en, -chen: des Lehrer**s**, des Mädchen**s**, des Urlaub**s**.'),
    audio('u-aus', 'Aussprache: freundlich sprechen', [
      ['erzaehler', 'Derselbe Satz kann freundlich oder unfreundlich klingen. Freundlich heißt: Die Stimme geht nach oben und unten, und man spricht nicht zu schnell.'],
      ['elif', 'Guten Morgen! Wie geht es Ihnen heute?'],
      ['elif', 'Könnten Sie mir kurz helfen? Das wäre sehr nett.'],
      ['jonas', 'Vielen Dank! Schönen Feierabend!'],
      ['erzaehler', 'Sprich die Sätze nach und lächle dabei. Man hört ein Lächeln.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. A friendly voice moves up and down and is not rushed.' }),
    mcq('u-q1', 'Was macht einen Satz beim Sprechen freundlicher?', ['sehr schnell sprechen', 'eine Stimme, die nach oben und unten geht', 'sehr leise sprechen'], 1),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 10,
  ['die wichtigsten Wörter wiederholen', 'den eigenen Stand einschätzen'], [
    cards('w-cards', [
      ['die Ausbildung', 'das Lernen eines Berufs', 'vocational training'], ['die Umschulung', 'ein Erwachsener lernt einen neuen Beruf', 'retraining'], ['kündigen', 'die Arbeitsstelle verlassen', 'to quit'],
      ['die Stellenanzeige', 'eine Firma sucht Mitarbeitende', 'job ad'], ['die Bewerbung', 'Unterlagen für eine Stelle', 'application'], ['das Vorstellungsgespräch', 'Gespräch mit der Firma', 'job interview'],
      ['das Gehalt', 'Geld für die Arbeit pro Monat', 'salary'], ['die Überstunden', 'Arbeit über die normale Zeit hinaus', 'overtime'], ['die Teilzeit', 'weniger Stunden pro Woche', 'part-time'],
      ['das Ehrenamt', 'freiwillige Arbeit ohne Geld', 'volunteer work'], ['pendeln', 'täglich zur Arbeit und zurück fahren', 'to commute'], ['zuverlässig', 'man kann sich auf die Person verlassen', 'reliable'],
    ]),
    checklist('w-check', ['Ich kann Texte über Berufswege verstehen.', 'Ich kann den Genitiv bilden und Präpositionen wie wegen und trotz benutzen.', 'Ich kann eine Stellenanzeige verstehen.', 'Ich kann ein kurzes Anschreiben formulieren.', 'Ich kann Gründe, Gegengründe und Folgen ausdrücken.', 'Ich kann ein Small-Talk-Gespräch beginnen, führen und beenden.']),
    mcq('w-q1', '„___ des Staus kam sie pünktlich.“', ['Wegen', 'Trotz', 'Während'], 1, { task: 'Letzter Check vor der Prüfung', taskEn: 'Last check before the exam.' }),
    mcq('w-q2', 'Welches Thema passt nicht zum Small Talk mit neuen Kollegen?', ['das Wetter', 'der Arbeitsweg', 'das Gehalt'], 2),
  ]);

export const kapitel4: Chapter = {
  id: 'kapitel-4', number: 4, title: 'Von Beruf', theme: 'Arbeit, Berufswege, Bewerbung',
  grammar: 'Genitiv und Präpositionen mit Genitiv. Kausal-, Konzessiv- und Konsekutivsätze.',
  sections: [einstieg, modul1, modul2, modul3, kommunikation, grammatik, uebungen, wortschatz],
  games: ['k4-sprint', 'k4-memory', 'k4-satzbau', 'k4-artikel'],
  exam: [
    x(1, mcq('x1', '„Das ist das Auto ___ Nachbarn.“', ['des', 'dem', 'der'], 0)),
    x(1, mcq('x2', '„Die Tasche ___ Lehrerin liegt auf dem Tisch.“', ['des', 'der', 'den'], 1)),
    x(1, mcq('x3', '„___ der Besprechung darf man nicht telefonieren.“', ['Trotz', 'Während', 'Statt'], 1)),
    x(4, gap('x4', ['Wegen {{des}} Wetters bleiben wir zu Hause.', 'Trotz {{der}} Probleme macht ihr die Arbeit Spaß.', 'Das ist die Idee {{eines}} Kollegen.', 'Innerhalb {{einer}} Woche bekam sie eine Antwort.'], { task: 'Ergänze den Artikel im Genitiv.' })),
    x(4, gap('x5', ['Ich habe mich beworben, {{weil}} mich die Stelle interessiert.', 'Er hat wenig Erfahrung. {{Trotzdem}} hat er den Job bekommen.', 'Sie blieb im Büro, {{obwohl}} sie schon Feierabend hatte.', 'Der Zug fiel aus, {{deshalb}} kam ich zu spät.'], { bank: ['deshalb', 'obwohl', 'weil', 'Trotzdem'], task: 'Welcher Konnektor passt?' })),
    x(1, mcq('x6', 'Warum hat Mirela den Beruf gewechselt?', ['Sie wollte mehr verdienen.', 'Sie wollte nicht mehr nachts und am Wochenende arbeiten.', 'Ihr Restaurant musste schließen.'], 1),
      text('x-st1', 'Mirela Stan hat zwölf Jahre lang als Köchin in einem Hotelrestaurant gearbeitet. Sie liebte ihren Beruf, aber wegen der Arbeitszeiten sah sie ihre Kinder fast nur schlafend: Abends, an Wochenenden und an Feiertagen stand sie in der Küche. Mit 36 entschied sie sich für eine Umschulung. Heute kocht sie immer noch, allerdings in der Kantine eines Krankenhauses. Dort beginnt ihr Dienst um sechs Uhr morgens und endet um halb drei. Obwohl die Arbeit weniger kreativ ist als früher, möchte sie nicht zurück. „Ich koche jetzt für achthundert Menschen statt für vierzig“, sagt sie, „und um drei hole ich meine Tochter von der Schule ab.“', { kicker: 'Lesen' })),
    x(1, mcq('x7', 'Was ist ein Nachteil ihrer neuen Stelle? (Text oben)', ['Die Arbeit ist weniger kreativ.', 'Sie verdient weniger.', 'Der Dienst endet spät.'], 0)),
    x(1, mcq('x8', 'Warum ruft Herr Brandt an?', ['Er möchte kündigen.', 'Er hat eine Frage zu einer Stellenanzeige.', 'Er hat einen Termin vergessen.'], 1),
      audio('x-st2', 'Hören: Anruf bei einer Firma', [
        ['priya', 'Firma Albers und Söhne, Personalabteilung, Nair am Apparat.'],
        ['jonas', 'Guten Tag, Brandt mein Name. Ich habe Ihre Anzeige für die Stelle im Kundenservice gelesen und hätte eine Frage.'],
        ['priya', 'Gern.'],
        ['jonas', 'In der Anzeige steht Teilzeit. Könnten Sie mir sagen, ob die Arbeitszeit vormittags oder nachmittags ist?'],
        ['priya', 'Das ist flexibel, aber die meisten arbeiten von acht bis dreizehn Uhr.'],
        ['jonas', 'Das passt gut. Und bis wann kann ich mich bewerben?'],
        ['priya', 'Bis zum fünfzehnten Juli, am besten per E-Mail.'],
      ])),
    x(1, mcq('x9', 'Bis wann kann man sich bewerben? (Hörtext oben)', ['bis zum 5. Juli', 'bis zum 15. Juli', 'bis zum 15. Juni'], 1)),
    x(2, order('x10', ['Trotz', 'des schlechten Wetters', 'sind wir', 'spazieren gegangen.'], { task: 'Bau den Satz.' })),
    x(2, order('x11', ['Sie hat gekündigt,', 'weil', 'sie', 'mehr Zeit', 'haben wollte.'], { task: 'Bau den Satz.' })),
    x(3, gap('x12', ['Mit großem {{Interesse}} habe ich Ihre Anzeige gelesen.', 'Ich habe eine {{Ausbildung}} als Koch abgeschlossen.', 'Über eine {{Einladung}} zu einem Gespräch würde ich mich freuen.'], { bank: ['Einladung', 'Interesse', 'Ausbildung'], task: 'Ergänze das Anschreiben.' })),
    x(1, mcq('x13', 'Jemand sagt im Aufzug: „Ist das voll hier heute!“ Was passt als Antwort?', ['Ja, das stimmt. Sind Sie zum ersten Mal hier?', 'Das ist mir egal.', 'Wie viel verdienen Sie?'], 0)),
    x(1, mcq('x14', '„Er ist krank, ___ kommt er heute nicht.“', ['weil', 'obwohl', 'deshalb'], 2, { why: 'Nach „deshalb“ steht das Verb direkt. Nach „weil“ und „obwohl“ stünde es am Ende.' })),
  ],
};

export const games4: GameDef[] = [
  {
    id: 'k4-sprint', engine: 'sprint', title: 'Genitiv-Sprint', blurb: '60 Sekunden: des, der, eines oder einer?', skill: 'Genitiv', tone: 'mint', chapter: 4, emoji: '⚡',
    rules: 'Du siehst einen Satz mit einer Lücke. Tippe auf die richtige Genitivform. Du hast 60 Sekunden.', label: 'Welche Form?',
    items: [
      { q: 'das Büro ___ Chefs', a: 'des', wrong: ['der', 'dem'] }, { q: 'die Tasche ___ Kollegin', a: 'der', wrong: ['des', 'den'] },
      { q: 'wegen ___ Wetters', a: 'des', wrong: ['dem', 'der'] }, { q: 'trotz ___ Kälte', a: 'der', wrong: ['des', 'die'] },
      { q: 'während ___ Pause', a: 'der', wrong: ['des', 'die'] }, { q: 'am Ende ___ Jahres', a: 'des', wrong: ['der', 'dem'] },
      { q: 'die Meinung ___ Kunden (Plural)', a: 'der', wrong: ['des', 'den'] }, { q: 'der Name ___ Firma', a: 'der', wrong: ['des', 'dem'] },
      { q: 'statt ___ Autos', a: 'eines', wrong: ['einer', 'einem'] }, { q: 'innerhalb ___ Woche', a: 'einer', wrong: ['eines', 'einem'] },
      { q: 'die Arbeit ___ Teams', a: 'des', wrong: ['der', 'dem'] }, { q: 'dank ___ Hilfe', a: 'deiner', wrong: ['deines', 'deinem'] },
      { q: 'der Rat ___ Freundes', a: 'eines', wrong: ['einer', 'einem'] }, { q: 'aufgrund ___ Krankheit', a: 'einer', wrong: ['eines', 'einem'] },
      { q: 'die Tür ___ Hauses', a: 'des', wrong: ['der', 'dem'] }, { q: 'außerhalb ___ Stadt', a: 'der', wrong: ['des', 'die'] },
      { q: 'der Beginn ___ Kurses', a: 'des', wrong: ['der', 'dem'] }, { q: 'die Fragen ___ Gäste', a: 'der', wrong: ['des', 'den'] },
    ],
  },
  {
    id: 'k4-memory', engine: 'memory', title: 'Berufe-Memory', blurb: 'Finde die Paare: Beruf und Tätigkeit.', skill: 'Wortschatz Arbeit', tone: 'lilac', chapter: 4, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Beruf mit dem, was man dort tut.', kinds: ['Beruf', 'Tätigkeit'],
    pairs: [['die Erzieherin', 'Kinder betreuen'], ['der Pfleger', 'Kranke versorgen'], ['die Schreinerin', 'Möbel bauen'], ['der Lokführer', 'Züge fahren'], ['die Köchin', 'Essen zubereiten'], ['der Bäcker', 'Brot backen'], ['die Anwältin', 'vor Gericht vertreten'], ['der Friseur', 'Haare schneiden'], ['die Journalistin', 'Artikel schreiben'], ['der Gärtner', 'Pflanzen pflegen']],
  },
  {
    id: 'k4-satzbau', engine: 'satzbau', title: 'Weil, obwohl, deshalb', blurb: 'Bau Sätze mit Grund, Gegengrund und Folge.', skill: 'Konnektoren', tone: 'sky', chapter: 4, emoji: '🧱',
    rules: 'Tippe die Satzteile in der richtigen Reihenfolge an. Achte darauf, wo das Verb steht.',
    sentences: [
      { parts: ['Ich bleibe zu Hause,', 'weil', 'ich', 'krank bin.'], hint: 'weil + Verb am Ende' },
      { parts: ['Ich bin krank,', 'deshalb', 'bleibe ich', 'zu Hause.'], hint: 'deshalb + Verb' },
      { parts: ['Obwohl', 'er müde war,', 'arbeitete er', 'weiter.'], hint: 'Nebensatz zuerst, dann Verb' },
      { parts: ['Er war müde.', 'Trotzdem', 'arbeitete er', 'weiter.'], hint: 'trotzdem + Verb' },
      { parts: ['Sie geht früh,', 'denn', 'sie hat', 'einen Termin.'], hint: 'denn + normale Wortstellung' },
      { parts: ['Es war so laut,', 'dass', 'ich', 'nichts verstanden habe.'], hint: 'so … dass + Verb am Ende' },
      { parts: ['Wegen', 'des Streiks', 'fahren', 'keine Züge.'], hint: 'wegen + Genitiv, dann Verb' },
      { parts: ['Da', 'er kein Auto hat,', 'pendelt er', 'mit der Bahn.'], hint: 'da = weil, am Satzanfang' },
      { parts: ['Hiermit', 'bewerbe ich mich', 'um die Stelle', 'als Köchin.'], hint: 'sich bewerben um' },
    ],
  },
  {
    id: 'k4-artikel', engine: 'regen', title: 'Artikelregen: Arbeit', blurb: 'der, die oder das? Fang die Nomen aus Kapitel 4.', skill: 'Artikel', tone: 'rose', chapter: 4, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel, bevor es unten ankommt. Du hast drei Leben.', buckets: ['der', 'die', 'das'],
    words: artikel('das Gehalt, die Ausbildung, der Beruf, die Stelle, das Büro, der Vertrag, die Bewerbung, das Anschreiben, der Lebenslauf, die Erfahrung, das Team, der Feierabend, die Kantine, das Ehrenamt, der Urlaub, die Rente, das Gespräch, der Kunde, die Firma, das Projekt, der Arbeitsweg, die Kündigung, das Interesse, der Kollege, die Werkstatt'),
  },
];
