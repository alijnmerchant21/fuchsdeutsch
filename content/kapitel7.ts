import type { Chapter, GameDef, GlossaryEntry } from './types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, poll, section, sort, text, tip, x } from './helpers';

// Kapitel 7: theme Zusammenleben. Grammar: Relativsätze, temporale Nebensätze.

export const glossary7: Record<string, GlossaryEntry> = {
  Zusammenhalt: { de: 'Wenn Menschen in einer Gruppe füreinander da sind.', en: 'solidarity, cohesion' },
  Rücksicht: { de: 'Man denkt an die anderen und stört sie nicht. „Rücksicht nehmen auf“ + Akkusativ.', en: 'consideration', ex: 'Nimm bitte Rücksicht auf die Nachbarn.' },
  Ehrlichkeit: { de: 'Die Eigenschaft, die Wahrheit zu sagen.', en: 'honesty' },
  Zuverlässigkeit: { de: 'Man macht, was man versprochen hat.', en: 'reliability' },
  Toleranz: { de: 'Man akzeptiert, dass andere anders leben und denken.', en: 'tolerance' },
  Respekt: { de: 'Man behandelt andere Menschen mit Achtung.', en: 'respect' },
  Gemeinschaft: { de: 'Eine Gruppe von Menschen, die zusammengehören.', en: 'community' },
  Hallig: { de: 'Eine sehr kleine, flache Insel in der Nordsee ohne Deich.', en: 'a tiny low-lying island in the North Sea' },
  Warft: { de: 'Ein kleiner künstlicher Hügel, auf dem die Häuser einer Hallig stehen.', en: 'dwelling mound' },
  Sturmflut: { de: 'Sehr hohes Wasser an der Küste bei starkem Sturm.', en: 'storm surge' },
  Fähre: { de: 'Ein Schiff, das Menschen und Autos über das Wasser bringt.', en: 'ferry' },
  aufeinander: { de: '„aufeinander angewiesen sein“: Einer braucht den anderen.', en: 'to depend on each other' },
  Streit: { de: 'Ein lauter Konflikt mit Worten.', en: 'argument, quarrel' },
  sichEinigen: { de: 'Nach einer Diskussion eine gemeinsame Lösung finden.', en: 'to come to an agreement' },
  Kompromiss: { de: 'Eine Lösung, bei der jeder ein bisschen nachgibt.', en: 'compromise' },
  Heimweh: { de: 'Das traurige Gefühl, wenn man sein Zuhause vermisst.', en: 'homesickness' },
  sichEinleben: { de: 'Sich an einem neuen Ort langsam zu Hause fühlen.', en: 'to settle in' },
  Verein: { de: 'Eine Gruppe mit einem gemeinsamen Hobby oder Ziel, zum Beispiel ein Sportverein.', en: 'club, association' },
  Behörde: { de: 'Ein Amt des Staates oder der Stadt.', en: 'public authority, office' },
  Aufenthaltstitel: { de: 'Das Dokument, das erlaubt, in einem Land zu leben.', en: 'residence permit' },
  umschreiben: { de: 'Etwas mit anderen Worten erklären, wenn man das genaue Wort nicht kennt.', en: 'to paraphrase' },
  Werkzeug: { de: 'Dinge, mit denen man repariert oder baut: Hammer, Zange, Säge.', en: 'tool(s)' },
  Wasserwaage: { de: 'Ein Werkzeug mit einer kleinen Luftblase. Es zeigt, ob etwas gerade ist.', en: 'spirit level' },
  Sieb: { de: 'Ein Küchengerät mit vielen kleinen Löchern, zum Beispiel für Nudeln.', en: 'sieve, colander' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Zusammen sind wir stark', 'butter', 10,
  ['das Kapitel kennenlernen', 'über Formen des Zusammenlebens sprechen'], [
    overview('e-over', 'Kapitel 7: Miteinander',
      'In diesem Kapitel geht es um das **Zusammenleben**. Was ist Menschen im Umgang miteinander wichtig? Wie lebt eine Gemeinschaft von sechzehn Personen auf einer winzigen Insel? Und wie fühlt es sich an, irgendwo ganz neu anzufangen? Du hörst eine Straßenumfrage über Werte, liest einen Zeitungsartikel und zwei Lebensgeschichten und lernst etwas sehr Praktisches: Wie man ein Wort erklärt, das einem gerade nicht einfällt.\n\nIn der Grammatik lernst du **Relativsätze**, mit denen man Personen und Dinge genauer beschreibt, und **Zeitsätze** mit *als*, *wenn*, *nachdem*, *bevor*, *während* und *seitdem*.',
      'This chapter is about living together: values, a community of sixteen people on a tiny island, and starting over in a new place. You also learn to explain a word you cannot remember. Grammar: relative clauses, and time clauses with als, wenn, nachdem, bevor, während, seitdem.',
      ['über Werte und Regeln im Zusammenleben sprechen', 'Personen und Dinge mit Relativsätzen genauer beschreiben', 'berichten, wann etwas passiert ist', 'unbekannte Wörter erklären und umschreiben']),
    text('e-intro', 'Kein Mensch lebt ganz allein. Wir teilen Wohnungen, Treppenhäuser, Büros und Straßenbahnen. Manche Gemeinschaften suchen wir uns aus, in andere werden wir hineingeboren. Wo fühlst du dich zugehörig?', { kicker: 'Zum Einstieg' }),
    match('e-match', [['die Wohngemeinschaft', 'mehrere Personen teilen eine Wohnung'], ['das Mehrgenerationenhaus', 'Jung und Alt wohnen unter einem Dach'], ['der Verein', 'Menschen mit einem gemeinsamen Hobby'], ['die Nachbarschaftshilfe', 'Nachbarn unterstützen sich im Alltag'], ['die Patchworkfamilie', 'Eltern mit Kindern aus früheren Beziehungen']],
      { task: 'Formen des Zusammenlebens: Was ist was?', taskEn: 'Ways of living together: which is which?' }),
    poll('e-poll', [['viele Bekannte', 'wenige enge Freunde'], ['Konflikte ansprechen', 'Konflikte vermeiden'], ['Dorf, jeder kennt jeden', 'Großstadt, niemand kennt mich'], ['im Verein', 'lieber für mich'], ['feste Regeln', 'spontane Absprachen']],
      { task: 'Was passt eher zu dir?', taskEn: 'Which fits you better? There is no wrong answer.' }),
    sort('e-sort', ['Das stärkt das Zusammenleben', 'Das stört das Zusammenleben'], [['zuhören', 0], ['Lärm nach Mitternacht', 1], ['einander helfen', 0], ['hinter dem Rücken reden', 1], ['sich entschuldigen', 0], ['Absprachen vergessen', 1], ['Rücksicht nehmen', 0]],
      { task: 'Hilft das oder stört das?', taskEn: 'Does it help or hurt?' }),
  ]);

const modul1 = section('modul-1', 'modul', 'Modul 1', 'Das finde ich wichtig', 'mint', 25,
  ['eine Straßenumfrage verstehen', 'über Werte diskutieren', 'Grammatik: Relativsätze'], [
    audio('m1-audio', 'Hören: Straßenumfrage „Was ist Ihnen im Zusammenleben wichtig?“', [
      ['moderatorin', 'Wir fragen heute: Was ist Ihnen im Zusammenleben mit anderen am wichtigsten?'],
      ['jule', 'Ehrlichkeit. Ich brauche Menschen, die mir sagen, was sie denken. Ein Freund, der mir nur nach dem Mund redet, hilft mir nicht.'],
      ['moderatorin', 'Und Ihnen?'],
      ['herrLehmann', 'Nu, Zuverlässigkeit. Wenn mir jemand sagt, er kommt um drei, dann soll er um drei da sein. Ich hatte mal einen Nachbarn, dem ich mein Auto geliehen habe. Der hat es eine Woche später zurückgebracht, ohne Benzin.'],
      ['elif', 'Für mich ist es Respekt. In dem Haus, in dem ich wohne, leben Leute aus elf Ländern. Wir feiern verschiedene Feste und essen verschiedene Sachen. Das funktioniert nur, wenn jeder den anderen so lässt, wie er ist.'],
      ['urs', 'Mir ist Freiheit wichtig. Ich mag Menschen, mit denen ich etwas unternehmen kann, die aber auch verstehen, wenn ich einmal allein sein will.'],
      ['moderatorin', 'Gibt es etwas, das Sie gar nicht mögen?'],
      ['urs', 'Ja. Leute, deren Handy im Restaurant auf dem Tisch liegt und alle zwei Minuten klingelt.'],
    ], { task: 'Vier Personen, vier Werte. Hör zu.', taskEn: 'Four people, four values. Listen for relative clauses: Menschen, die …; ein Freund, der …', note: 'Sächsisch: **Nu** = Ja, also. Redewendung: **jemandem nach dem Mund reden** = immer nur sagen, was der andere hören will.' }),
    match('m1-match', [['Jule', 'Ehrlichkeit'], ['Herr Lehmann', 'Zuverlässigkeit'], ['Elif', 'Respekt'], ['Urs', 'Freiheit']],
      { task: 'Wem ist was wichtig?', taskEn: 'What matters to whom?' }),
    mcq('m1-q1', 'Was hat der Nachbar von Herrn Lehmann gemacht?', ['Er hat das Auto nie zurückgebracht.', 'Er hat das Auto spät und ohne Benzin zurückgebracht.', 'Er hat das Auto kaputt gemacht.'], 1),
    mcq('m1-q2', 'Was stört Urs?', ['wenn jemand allein sein will', 'wenn jemand zu spät kommt', 'wenn im Restaurant ständig ein Handy klingelt'], 2),
    grammar('m1-gram', 'Relativsätze: etwas genauer beschreiben', {
      intro: 'Ein Relativsatz beschreibt ein Nomen genauer. Er steht direkt hinter dem Nomen, das Verb steht **am Ende**. Das Relativpronomen sieht fast immer aus wie der bestimmte Artikel.',
      head: ['', 'maskulin', 'feminin', 'neutral', 'Plural'],
      rows: [['Nominativ', 'der', 'die', 'das', 'die'], ['Akkusativ', 'den', 'die', 'das', 'die'], ['Dativ', 'dem', 'der', 'dem', '**denen**'], ['Genitiv', '**dessen**', '**deren**', '**dessen**', '**deren**']],
      notes: [
        '**Genus und Numerus** kommen vom Nomen davor. Der **Kasus** kommt vom Verb im Relativsatz: *ein Nachbar, **dem** ich mein Auto geliehen habe* (leihen + Dativ).',
        'Mit Präposition: Die Präposition steht vor dem Relativpronomen. *das Haus, **in dem** ich wohne · Menschen, **mit denen** ich etwas unternehme*',
        'Genitiv zeigt Besitz: *Leute, **deren** Handy klingelt* (= das Handy der Leute).',
      ],
      en: 'A relative clause describes a noun and has the verb at the end. Gender and number come from the noun; the case comes from the role inside the relative clause. Forms equal the definite article except denen (dative plural) and dessen/deren (genitive). A preposition goes before the pronoun: in dem, mit denen.',
    }),
    gap('m1-gap', ['Ich brauche einen Freund, {{der}} ehrlich ist.', 'Das ist die Nachbarin, {{die}} mir immer hilft.', 'Das ist der Kollege, {{den}} ich gestern getroffen habe.', 'Das ist das Kind, {{dem}} ich das Buch geschenkt habe.', 'Das sind die Leute, {{die}} über mir wohnen.', 'Das ist die Frau, {{der}} das Auto gehört.'],
      { task: 'Ergänze das Relativpronomen.', taskEn: 'Fill in the relative pronoun. Ask: what role does it play in the relative clause?' }),
    gap('m1-gap2', ['Das ist das Haus, in {{dem}} ich aufgewachsen bin.', 'Das sind Freunde, mit {{denen}} ich oft koche.', 'Das ist die Stadt, aus {{der}} ich komme.', 'Das ist ein Thema, über {{das}} wir oft sprechen.', 'Das ist der Nachbar, {{dessen}} Hund immer bellt.'],
      { task: 'Mit Präposition und im Genitiv.', taskEn: 'With a preposition, and one in the genitive.' }),
    order('m1-order1', ['Ich mag', 'Menschen,', 'mit denen', 'ich', 'lachen kann.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.', hint: 'Präposition + Relativpronomen, Verb am Ende' }),
    order('m1-order2', ['Der Nachbar,', 'dem ich', 'mein Auto', 'geliehen habe,', 'ist umgezogen.'], { hint: 'Der Relativsatz steht in der Mitte, zwischen zwei Kommas.' }),
    match('m1-match2', [['ehrlich', 'die Ehrlichkeit'], ['zuverlässig', 'die Zuverlässigkeit'], ['tolerant', 'die Toleranz'], ['frei', 'die Freiheit'], ['hilfsbereit', 'die Hilfsbereitschaft'], ['pünktlich', 'die Pünktlichkeit']],
      { task: 'Vom Adjektiv zum Nomen.', taskEn: 'From adjective to noun.' }),
    compose('m1-comp', 'Was ist dir im Zusammenleben wichtig? Bau vier Sätze mit Relativsätzen.', [
      ['Sag, welche Freunde du magst.', 'Say what kind of friends you like.', ['Ich mag', 'Freunde,', 'die', 'ehrlich', 'zu mir sind.']],
      ['Sag, was du brauchst.', 'Say what you need.', ['Ich brauche', 'Nachbarn,', 'auf die', 'ich mich', 'verlassen kann.']],
      ['Sag, was dich stört.', 'Say what bothers you.', ['Mich stören', 'Leute,', 'die', 'nie', 'zuhören.']],
      ['Nenne deinen wichtigsten Wert.', 'Name your most important value.', ['Respekt', 'ist ein Wert,', 'der', 'mir', 'sehr wichtig ist.']],
    ], { task: 'Sprich über deine Werte.', taskEn: 'Talk about your values.' }),
  ]);

const modul2 = section('modul-2', 'modul', 'Modul 2', 'Am Ende der Welt', 'sky', 20,
  ['einen Zeitungsartikel verstehen', 'über Regeln fürs Zusammenleben diskutieren', 'mit unbekannten Wörtern umgehen'], [
    text('m2-text', `Die [[Hallig]] Lüttoog (der Name ist für diesen Text erfunden) ist kaum größer als sechzig Fußballfelder. Wer hier lebt, sieht vom Küchenfenster aus in alle Richtungen das Meer. Sechzehn Menschen wohnen auf zwei [[Warft|Warften]], den kleinen Hügeln, die die Häuser vor dem Wasser schützen. Bei [[Sturmflut]] steht alles andere unter Wasser. „Land unter“ nennen die Bewohner das, und es passiert bis zu dreißigmal im Jahr.

Die [[Fähre]] zum Festland fährt nur, wenn das Wetter es erlaubt. Es gibt keinen Supermarkt, keinen Arzt und eine Schule mit drei Kindern. Was auf dem Festland jeder für sich erledigt, wird hier gemeinsam organisiert: Wer zum Einkaufen fährt, bringt für alle mit. Wer ein Schaf verliert, dem helfen die anderen beim Suchen.

„Man ist [[aufeinander]] angewiesen“, sagt Wiebke Jensen, die seit zwanzig Jahren hier lebt. „Deshalb kann man es sich nicht leisten, lange [[Streit]] zu haben.“ Es gibt ungeschriebene Regeln: Probleme werden sofort und direkt angesprochen. Niemand redet über jemanden, der nicht im Raum ist. Und wenn zwei sich nicht [[sichEinigen|einigen]] können, entscheidet am Ende die Versammlung aller Bewohner.

Ist das nicht eng? „Doch“, lacht sie. „Aber ich habe hier mehr Freiheit als in jeder Stadt. Ich muss nur mit fünfzehn Leuten auskommen. Sie mit dreihunderttausend.“`,
      { kicker: 'Lesen', title: 'Zeitung: Sechzehn Menschen und das Meer', task: 'Lies den Artikel. Du musst nicht jedes Wort kennen.', taskEn: 'Read the article. You do not need to know every word. Guess from context first.' }),
    mcq('m2-q1', 'Was bedeutet „Land unter“?', ['Die Fähre fährt nicht.', 'Die Hallig steht bis auf die Hügel unter Wasser.', 'Die Bewohner ziehen aufs Festland.'], 1, { task: 'Hast du den Text verstanden?', taskEn: 'Check your understanding.' }),
    mcq('m2-q2', 'Warum können sich die Bewohner keinen langen Streit leisten?', ['Weil sie einander brauchen.', 'Weil Streit verboten ist.', 'Weil sie verwandt sind.'], 0),
    mcq('m2-q3', 'Was passiert, wenn zwei Bewohner sich nicht einigen können?', ['Einer muss die Hallig verlassen.', 'Die Polizei kommt vom Festland.', 'Die Versammlung aller Bewohner entscheidet.'], 2),
    mcq('m2-q4', 'Was meint Wiebke Jensen mit ihrem letzten Satz?', ['In der Stadt muss man mit viel mehr Menschen zurechtkommen.', 'In der Stadt gibt es mehr Freiheit.', 'Auf der Hallig leben zu wenige Menschen.'], 0),
    tip('m2-tip', 'Strategie: Umgang mit unbekannten Wörtern', '**1. Kontext:** Was steht davor und danach? *„Warften, den kleinen Hügeln, die die Häuser schützen“*: Der Text erklärt das Wort selbst.\n\n**2. Wortteile:** *Sturm + Flut*, *Fest + Land*. Kennst du einen Teil?\n\n**3. Andere Sprachen:** *Fähre* klingt wie englisch *ferry*.\n\n**4. Brauche ich das Wort?** Wenn du den Satz auch ohne verstehst, lies weiter.'),
    match('m2-match', [['das Festland', 'das große Land, keine Insel'], ['die Sturmflut', 'sehr hohes Wasser bei Sturm'], ['aufeinander angewiesen sein', 'einander brauchen'], ['mit jemandem auskommen', 'ohne Streit zusammenleben'], ['ungeschriebene Regeln', 'Regeln, die alle kennen, aber nirgends stehen']],
      { task: 'Erschließ die Bedeutung aus dem Text.', taskEn: 'Work out the meaning from the text.' }),
    phrases('m2-phr', 'Redemittel: über Regeln diskutieren', {
      'eine Regel vorschlagen': ['Ich schlage vor, dass …', 'Wir sollten vereinbaren, dass …', 'Wie wäre es, wenn …?'],
      'zustimmen oder widersprechen': ['Das halte ich für sinnvoll.', 'Damit bin ich einverstanden.', 'Das geht mir zu weit.', 'Ich sehe da ein Problem: …'],
      'einen Kompromiss finden': ['Können wir uns darauf einigen, dass …?', 'Dann machen wir es so: …', 'Das wäre ein guter Kompromiss.'],
    }),
    gap('m2-gap', ['Ich {{schlage}} vor, dass wir einen Putzplan machen.', 'Damit bin ich {{einverstanden}}.', 'Das geht mir zu {{weit}}.', 'Können wir uns darauf {{einigen}}, dass ab 22 Uhr Ruhe ist?', 'Das wäre ein guter {{Kompromiss}}.'],
      { bank: ['Kompromiss', 'einigen', 'weit', 'schlage', 'einverstanden'], task: 'Ergänze die Redemittel.', taskEn: 'Complete the phrases.' }),
    sort('m2-sort', ['Vorschlag', 'Zustimmung', 'Widerspruch'], [['Wie wäre es, wenn wir abwechselnd kochen?', 0], ['Das halte ich für sinnvoll.', 1], ['Das geht mir zu weit.', 2], ['Wir sollten vereinbaren, dass jeder seinen Müll rausbringt.', 0], ['Damit bin ich einverstanden.', 1], ['Ich sehe da ein Problem.', 2]],
      { task: 'Was macht die Person?', taskEn: 'What is the speaker doing?' }),
    compose('m2-comp', 'In deiner WG gibt es Streit um die Küche. Schlag Regeln vor.', [
      ['Sprich das Problem direkt an.', 'Raise the problem directly.', ['Ich möchte', 'mit euch', 'über die Küche', 'sprechen.']],
      ['Schlag eine Regel vor.', 'Suggest a rule.', ['Ich schlage vor,', 'dass jeder', 'sein Geschirr', 'sofort abwäscht.']],
      ['Schlag eine zweite Regel vor.', 'Suggest a second rule.', ['Außerdem', 'sollten wir', 'einen Putzplan', 'machen.']],
      ['Frag nach Zustimmung.', 'Ask for agreement.', ['Können wir', 'uns darauf', 'einigen?']],
    ], { task: 'Bau deinen Beitrag für die WG-Besprechung.', taskEn: 'Build your contribution to the flat meeting.' }),
  ]);

const modul3 = section('modul-3', 'modul', 'Modul 3', 'Neu hier?', 'lilac', 25,
  ['biografische Informationen verstehen', 'berichten, wann etwas passiert ist', 'Grammatik: temporale Nebensätze'], [
    text('m3-text', `**Thanh, 34, Pflegefachmann in Graz.** Als ich vor sechs Jahren aus Hanoi nach Österreich kam, verstand ich im Krankenhaus fast alles, aber in der Straßenbahn nichts. Niemand hatte mir gesagt, dass die Leute hier Dialekt sprechen. Bevor ich meine erste Stelle antreten konnte, musste ich bei einer [[Behörde]] elf Dokumente abgeben. Während ich auf die Anerkennung meines Diploms wartete, arbeitete ich in einer Großküche. Das [[Heimweh]] war im ersten Winter am schlimmsten. Seitdem ich im Volleyball-[[Verein]] spiele, habe ich Freunde, die mich „Tonerl“ nennen. Immer wenn ich jetzt nach Hanoi fliege, vermisse ich nach zwei Wochen die Berge.

**Ximena, 41, Bauingenieurin in Rostock.** Nachdem ich in Bogotá mein Studium abgeschlossen hatte, bewarb ich mich bei einer Firma in Norddeutschland. Sobald der Vertrag unterschrieben war, begann ich, jeden Abend Deutsch zu lernen. Als ich ankam, regnete es, und es hörte drei Wochen lang nicht auf. Ich wollte nur ein Jahr bleiben, bis das Projekt fertig war. Dann lernte ich beim Segeln meinen Mann kennen. Seit wir zusammen ein altes Boot renovieren, kenne ich mehr deutsche Wörter für Werkzeug als für Gefühle. Ich habe mich [[sichEinleben|eingelebt]], aber an das Abendessen um sechs Uhr werde ich mich nie gewöhnen.`,
      { kicker: 'Lesen', title: 'Zwei Geschichten vom Ankommen', task: 'Lies die zwei Geschichten.', taskEn: 'Read the two stories. Notice the time words: als, bevor, während, seitdem, nachdem, sobald, bis.' }),
    mcq('m3-q1', 'Was war für Thanh am Anfang schwierig?', ['die Fachsprache im Krankenhaus', 'der Dialekt im Alltag', 'das Essen'], 1, { task: 'Hast du die Texte verstanden?', taskEn: 'Check your understanding.' }),
    mcq('m3-q2', 'Was machte Thanh, während er auf die Anerkennung wartete?', ['Er arbeitete in einer Großküche.', 'Er studierte noch einmal.', 'Er flog zurück nach Hanoi.'], 0),
    mcq('m3-q3', 'Warum ist Ximena länger geblieben als geplant?', ['Das Projekt wurde nicht fertig.', 'Sie lernte ihren Mann kennen.', 'Sie bekam keinen Rückflug.'], 1),
    mcq('m3-q4', 'Was passierte zuerst?', ['Ximena kam in Rostock an.', 'Ximena unterschrieb den Vertrag.', 'Ximena schloss ihr Studium ab.'], 2),
    grammar('m3-gram', 'Zeitangaben machen: temporale Nebensätze', {
      head: ['Konnektor', 'Bedeutung', 'Beispiel'],
      rows: [
        ['**als**', 'einmal in der Vergangenheit', '**Als** ich ankam, regnete es.'],
        ['**wenn**', 'jedes Mal (Vergangenheit) oder Gegenwart und Zukunft', '**Immer wenn** ich nach Hanoi fliege, vermisse ich die Berge.'],
        ['**während**', 'gleichzeitig', '**Während** ich wartete, arbeitete ich in einer Küche.'],
        ['**bevor**', 'B passiert später als A', '**Bevor** ich anfangen konnte, musste ich Dokumente abgeben.'],
        ['**nachdem**', 'A passiert früher als B', '**Nachdem** ich das Studium abgeschlossen hatte, bewarb ich mich.'],
        ['**seit / seitdem**', 'von einem Zeitpunkt bis jetzt', '**Seitdem** ich im Verein spiele, habe ich Freunde.'],
        ['**bis**', 'Endpunkt', 'Ich wollte bleiben, **bis** das Projekt fertig war.'],
        ['**sobald**', 'sofort danach', '**Sobald** der Vertrag unterschrieben war, lernte ich Deutsch.'],
      ],
      notes: ['In allen diesen Nebensätzen steht das Verb **am Ende**. Steht der Nebensatz vorn, folgt im Hauptsatz sofort das Verb.'],
      en: 'Time clauses (verb at the end): als = one time in the past; wenn = whenever, or present/future; während = while; bevor = before; nachdem = after; seit(dem) = since; bis = until; sobald = as soon as.',
    }),
    tip('m3-tip', 'Tipp: Tempuswechsel bei nachdem', 'Der **nachdem**-Satz ist immer eine Zeitstufe früher als der Hauptsatz.\n\n**Vergangenheit:** *Nachdem ich gegessen **hatte** (Plusquamperfekt), **ging** ich spazieren (Präteritum).*\n\n**Gegenwart:** *Nachdem ich gegessen **habe** (Perfekt), **gehe** ich spazieren (Präsens).*'),
    mcq('m3-q5', '„___ ich ein Kind war, wohnten wir auf dem Land.“', ['Wenn', 'Als', 'Wann'], 1, { task: 'als oder wenn?', taskEn: 'als or wenn?', why: 'Einmal in der Vergangenheit, auch ein langer Zeitraum: als.' }),
    mcq('m3-q6', '„Jedes Mal, ___ ich meine Oma besuchte, gab es Kuchen.“', ['wenn', 'als', 'wann'], 0, { why: 'Wiederholung in der Vergangenheit: (immer) wenn.' }),
    gap('m3-gap', ['{{Als}} ich nach Deutschland kam, konnte ich kein Wort Deutsch.', '{{Bevor}} du gehst, mach bitte das Licht aus.', '{{Während}} ich koche, höre ich gern Radio.', '{{Nachdem}} er gefrühstückt hatte, fuhr er zur Arbeit.', '{{Seitdem}} sie in Rostock lebt, segelt sie.', 'Warte hier, {{bis}} ich zurückkomme.'],
      { bank: ['Als', 'Bevor', 'Während', 'Nachdem', 'Seitdem', 'bis'], task: 'Welcher Konnektor passt?', taskEn: 'Which connector fits?' }),
    gap('m3-gap2', ['Nachdem ich die Prüfung bestanden {{hatte}}, feierten wir.', 'Nachdem ich gegessen {{habe}}, gehe ich spazieren.', 'Nachdem sie angekommen {{war}}, rief sie ihre Eltern an.'],
      { task: 'nachdem: Ergänze das Hilfsverb in der richtigen Zeit.', taskEn: 'nachdem: fill in the auxiliary in the right tense.' }),
    order('m3-order', ['Seitdem', 'ich im Verein spiele,', 'habe ich', 'viele Freunde.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.', hint: 'Nebensatz zuerst, dann Verb.' }),
    compose('m3-comp', 'Erzähl die Geschichte von **Amara**, die vor fünf Jahren nach Wien gezogen ist.', [
      ['Ankunft, mit „als“.', 'Arrival, with "als".', ['Als Amara', 'nach Wien kam,', 'kannte sie', 'niemanden.']],
      ['Vor der Arbeit, mit „bevor“.', 'Before work, with "bevor".', ['Bevor sie', 'arbeiten durfte,', 'musste sie', 'einen Deutschkurs', 'machen.']],
      ['Nach dem Kurs, mit „nachdem“.', 'After the course, with "nachdem".', ['Nachdem sie', 'die Prüfung', 'bestanden hatte,', 'fand sie', 'eine Stelle.']],
      ['Bis heute, mit „seitdem“.', 'Up to today, with "seitdem".', ['Seitdem sie', 'im Chor singt,', 'fühlt sie sich', 'zu Hause.']],
    ], { task: 'Bau eine kurze Lebensgeschichte.', taskEn: 'Build a short life story.' }),
  ]);

const kommunikation = section('kommunikation', 'kommunikation', 'Alltag und Beruf', 'Wie heißt das noch mal?', 'rose', 20,
  ['unbekannte Wörter erklären', 'umschreiben, was man meint', 'nachfragen'], [
    text('k-intro', 'Jeder kennt das: Du stehst im Geschäft und das Wort fällt dir nicht ein. Kein Problem. Du kannst es [[umschreiben]]: Wozu braucht man das Ding? Wie sieht es aus? Was ist das Gegenteil? Genau dafür sind Relativsätze gemacht.', { kicker: 'Zum Einstieg' }),
    audio('k-a1', 'Gespräch 1: Im Baumarkt (Berlin)', [
      ['priya', 'Entschuldigung, ich suche etwas, aber ich weiß nicht, wie das auf Deutsch heißt.'],
      ['atze', 'Na, denn beschreiben Se mal. Wat is et denn?'],
      ['priya', 'Es ist ein Werkzeug, mit dem man prüft, ob ein Regal gerade hängt. Es ist lang und flach, und in der Mitte ist ein kleines Glas mit einer Luftblase.'],
      ['atze', 'Ah, ne Wasserwaage meinen Se!'],
      ['priya', 'Wasserwaage, genau! Das Wort kannte ich nicht. Und dann brauche ich noch diese kleinen Dinger aus Plastik, die man in die Wand steckt, bevor man eine Schraube hineindreht.'],
      ['atze', 'Dübel. Dit sind Dübel. Jang drei, links, direkt neben die Schrauben.'],
      ['priya', 'Dübel. Können Sie das bitte buchstabieren?'],
      ['atze', 'D, Ü, B, E, L. Sonst noch wat?'],
      ['priya', 'Nein, das war alles. Vielen Dank für Ihre Geduld!'],
      ['atze', 'Da nich für. Viel Erfolg beim Aufhängen!'],
    ], { task: 'Welche zwei Dinge sucht Priya?', taskEn: 'Which two things is Priya looking for? Atze speaks Berlin dialect.',
      note: 'Berlinerisch: **Wat is et** = Was ist es. **Se** = Sie. **dit** = das. **Jang drei** = Gang drei. **Da nich für** = Gern geschehen.' }),
    mcq('k-q1', 'Wie beschreibt Priya die Wasserwaage?', ['durch ihren Preis', 'durch ihre Funktion und ihr Aussehen', 'durch ein Foto'], 1),
    mcq('k-q2', 'Was macht Priya, um sich das neue Wort zu merken?', ['Sie bittet darum, es zu buchstabieren.', 'Sie schreibt es nicht auf.', 'Sie fragt nach dem englischen Wort.'], 0),
    audio('k-a2', 'Gespräch 2: In der WG-Küche (Hamburg)', [
      ['tomasz', 'Jule, wo ist denn dieses … wie sagt man … das Ding für die Nudeln?'],
      ['jule', 'Welches Ding? Der Topf?'],
      ['tomasz', 'Nein, nicht der Topf. Das, was man benutzt, wenn die Nudeln fertig sind. Es hat viele Löcher, und das Wasser läuft unten raus.'],
      ['jule', 'Ach so, das Sieb! Das hängt neben dem Kühlschrank.'],
      ['tomasz', 'Sieb. Danke. Und wie nennt man das, wenn die Nudeln noch ein bisschen hart sind? Bei uns gibt es dafür ein Wort.'],
      ['jule', 'Bissfest. Oder man sagt es italienisch: al dente.'],
      ['tomasz', 'Bissfest. Das ist so etwas Ähnliches wie „noch nicht ganz weich“?'],
      ['jule', 'Genau. Du erklärst das übrigens richtig gut.'],
    ], { task: 'Welches Wort fehlt Tomasz?', taskEn: 'Which word is Tomasz missing?' }),
    mcq('k-q3', 'Was ist ein Sieb?', ['ein Topf für Nudeln', 'ein Küchengerät mit vielen Löchern', 'ein Löffel für Suppe'], 1),
    phrases('k-phr', 'Redemittel: Wörter erklären und umschreiben', {
      'sagen, dass ein Wort fehlt': ['Ich weiß nicht, wie das auf Deutsch heißt.', 'Mir fällt das Wort gerade nicht ein.', 'Wie sagt man …?'],
      'umschreiben': ['Das ist ein Ding, mit dem man …', 'Das ist etwas, was man benutzt, wenn …', 'Das ist so etwas Ähnliches wie …', 'Das ist das Gegenteil von …', 'Es sieht aus wie …'],
      'nachfragen': ['Meinen Sie vielleicht …?', 'Können Sie das bitte buchstabieren?', 'Was bedeutet …?', 'Könnten Sie das bitte wiederholen?'],
    }),
    match('k-match', [['ein Gerät, mit dem man Wäsche glatt macht', 'das Bügeleisen'], ['ein Ding, mit dem man Flaschen öffnet', 'der Flaschenöffner'], ['etwas, was man bei Regen über den Kopf hält', 'der Regenschirm'], ['ein Möbelstück, in das man Kleidung hängt', 'der Kleiderschrank'], ['eine Person, die Briefe bringt', 'die Briefträgerin'], ['ein Ort, an dem man Bücher ausleiht', 'die Bibliothek']],
      { task: 'Was ist gemeint?', taskEn: 'What is being described?' }),
    gap('k-gap', ['Das ist ein Werkzeug, mit {{dem}} man Nägel in die Wand schlägt.', 'Das ist eine Person, {{die}} kranke Tiere behandelt.', 'Das ist etwas, {{was}} man zum Schreiben braucht.', 'Das ist ein Ort, an {{dem}} man Züge nimmt.', 'Mir {{fällt}} das Wort gerade nicht ein.'],
      { task: 'Ergänze.', taskEn: 'Fill in.' }),
    mcq('k-q4', 'Du verstehst ein Wort nicht. Was sagst du?', ['Was bedeutet das? Könnten Sie das bitte erklären?', 'Das ist falsch.', 'Ich weiß.'], 0),
    compose('k-comp', 'Du suchst im Geschäft einen **Korkenzieher**, aber das Wort fällt dir nicht ein. Umschreib es.', [
      ['Sag, dass dir das Wort fehlt.', 'Say that you are missing the word.', ['Entschuldigung,', 'mir fällt', 'das Wort', 'gerade nicht ein.']],
      ['Beschreib die Funktion.', 'Describe what it is for.', ['Ich suche', 'ein Ding,', 'mit dem man', 'Weinflaschen', 'öffnet.']],
      ['Beschreib das Aussehen.', 'Describe what it looks like.', ['Es ist', 'aus Metall', 'und hat', 'eine Spirale.']],
      ['Frag nach dem Wort.', 'Ask for the word.', ['Können Sie', 'mir sagen,', 'wie das', 'heißt?']],
    ], { task: 'Bau eine Umschreibung.', taskEn: 'Build a paraphrase.' }),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik im Blick', 'Alles auf einen Blick', 'peach', 12,
  ['Relativsätze wiederholen', 'temporale Nebensätze wiederholen'], [
    grammar('g-1', 'Relativpronomen', {
      head: ['', 'maskulin', 'feminin', 'neutral', 'Plural'],
      rows: [['Nom.', 'der', 'die', 'das', 'die'], ['Akk.', 'den', 'die', 'das', 'die'], ['Dat.', 'dem', 'der', 'dem', 'denen'], ['Gen.', 'dessen', 'deren', 'dessen', 'deren']],
      notes: ['Der Relativsatz steht direkt hinter dem Nomen: *Die Frau, **die** dort steht, ist meine Chefin.*', 'Präposition vor dem Pronomen: *der Freund, **auf den** ich warte*'],
    }),
    grammar('g-2', 'Temporale Nebensätze', {
      head: ['Wann?', 'Konnektoren'],
      rows: [['gleichzeitig', 'während, als, wenn, solange'], ['A vor B', 'nachdem, sobald'], ['A nach B', 'bevor, ehe'], ['Dauer bis jetzt', 'seit, seitdem'], ['Endpunkt', 'bis']],
      notes: ['**als** = einmal in der Vergangenheit. **wenn** = jedes Mal, oder Gegenwart und Zukunft.'],
    }),
    gap('g-gap', ['Das ist der Film, {{den}} ich dir empfohlen habe.', 'Die Kollegin, mit {{der}} ich zusammenarbeite, kommt aus Graz.', 'Die Kinder, {{denen}} wir geholfen haben, sind sehr dankbar.', '{{Als}} ich jung war, wollte ich Pilotin werden.', 'Ruf mich an, {{sobald}} du angekommen bist.'],
      { task: 'Ergänze.', taskEn: 'Fill in.' }),
    mcq('g-q1', 'Welcher Satz ist richtig?', ['Der Mann, der ich gestern getroffen habe, ist Arzt.', 'Der Mann, den ich gestern getroffen habe, ist Arzt.', 'Der Mann, dem ich gestern getroffen habe, ist Arzt.'], 1, { task: 'Wähle den richtigen Satz.', taskEn: 'Choose the correct sentence.' }),
    mcq('g-q2', '„Zuerst habe ich geduscht. Dann habe ich gefrühstückt.“ In einem Satz:', ['Bevor ich geduscht hatte, frühstückte ich.', 'Nachdem ich geduscht hatte, frühstückte ich.', 'Während ich geduscht hatte, frühstückte ich.'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training: Zusammen leben', 'butter', 20,
  ['Wortschatz zum Thema Zusammenleben festigen', 'Fehler erkennen', 'Aussprache: Nachfragen stellen'], [
    gap('u-gap1', ['In einer WG muss man {{Rücksicht}} auf die anderen nehmen.', 'Nach langer Diskussion haben wir einen {{Kompromiss}} gefunden.', 'Im ersten Jahr hatte sie großes {{Heimweh}}.', 'Er ist Mitglied in einem {{Verein}} und spielt dort Schach.', 'Wir hatten gestern {{Streit}}, aber heute ist alles wieder gut.', 'In unserem Haus gibt es einen starken {{Zusammenhalt}}.'],
      { bank: ['Rücksicht', 'Kompromiss', 'Heimweh', 'Verein', 'Streit', 'Zusammenhalt'], task: 'Welches Wort passt?', taskEn: 'Which word fits?' }),
    match('u-match', [['sich streiten', 'sich vertragen'], ['ankommen', 'abreisen'], ['gemeinsam', 'allein'], ['einverstanden sein', 'dagegen sein'], ['sich einleben', 'sich fremd fühlen'], ['zuhören', 'unterbrechen']],
      { task: 'Finde das Gegenteil.', taskEn: 'Find the opposite.' }),
    sort('u-sort', ['als', 'wenn'], [['___ ich 2019 nach Graz zog, …', 0], ['Immer ___ es regnet, …', 1], ['___ meine Tochter geboren wurde, …', 0], ['___ du Zeit hast, ruf mich an.', 1], ['Jedes Mal, ___ wir uns sahen, …', 1], ['___ ich gestern nach Hause kam, …', 0]],
      { task: 'als oder wenn?', taskEn: 'als or wenn?' }),
    mcq('u-q1', 'In welchem Satz ist ein Fehler?', ['Das ist die Frau, die ich gestern gesehen habe.', 'Das ist der Mann, der mir geholfen hat.', 'Das ist das Kind, die im Garten spielt.'], 2, { task: 'Fehlerkorrektur', taskEn: 'Spot the mistake.', why: 'Richtig: das Kind, **das** im Garten spielt.' }),
    mcq('u-q2', 'In welchem Satz ist ein Fehler?', ['Als ich klein war, hatte ich einen Hund.', 'Wenn ich gestern ankam, regnete es.', 'Wenn ich Zeit habe, lese ich.'], 1, { why: 'Einmal in der Vergangenheit: **Als** ich gestern ankam, …' }),
    gap('u-gap2', ['Das ist ein Mensch, auf {{den}} man sich verlassen kann.', 'Das ist die Insel, auf {{der}} nur sechzehn Menschen leben.', 'Das sind Nachbarn, mit {{denen}} wir oft grillen.', 'Das ist das Boot, an {{dem}} wir seit zwei Jahren arbeiten.'],
      { task: 'Relativpronomen nach Präposition.', taskEn: 'Relative pronoun after a preposition.' }),
    audio('u-aus', 'Aussprache: Nachfragen stellen', [
      ['erzaehler', 'Wenn du etwas nicht verstanden hast, fragst du nach. Bei einer Nachfrage geht die Stimme am Ende deutlich nach oben.'],
      ['jule', 'Um wie viel Uhr? Um drei?'],
      ['jule', 'Wie heißt das? Wasserwaage?'],
      ['jonas', 'Entschuldigung, wie bitte? Könnten Sie das wiederholen?'],
      ['erzaehler', 'Du kannst auch nur das Wort wiederholen, das du nicht verstanden hast: Am Donnerstag? Mit wem?'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. In a follow-up question the voice rises clearly at the end.' }),
    mcq('u-q3', 'Wie geht die Stimme am Ende einer Nachfrage wie „Um drei?“', ['nach unten', 'nach oben', 'sie bleibt gleich'], 1),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 10,
  ['die wichtigsten Wörter wiederholen', 'den eigenen Stand einschätzen'], [
    cards('w-cards', [
      ['die Gemeinschaft', 'eine Gruppe, die zusammengehört', 'community'], ['der Zusammenhalt', 'füreinander da sein', 'solidarity'], ['Rücksicht nehmen', 'an die anderen denken', 'to be considerate'],
      ['die Zuverlässigkeit', 'man hält, was man verspricht', 'reliability'], ['der Streit', 'ein lauter Konflikt', 'argument'], ['sich einigen', 'eine gemeinsame Lösung finden', 'to agree'],
      ['der Kompromiss', 'jeder gibt ein bisschen nach', 'compromise'], ['das Heimweh', 'man vermisst sein Zuhause', 'homesickness'], ['sich einleben', 'sich langsam zu Hause fühlen', 'to settle in'],
      ['die Behörde', 'ein Amt', 'authority'], ['umschreiben', 'mit anderen Worten erklären', 'to paraphrase'], ['Mir fällt das Wort nicht ein.', 'Ich weiß das Wort gerade nicht.', 'I can’t think of the word.'],
    ]),
    checklist('w-check', ['Ich kann eine Umfrage über Werte verstehen.', 'Ich kann Personen und Dinge mit Relativsätzen genauer beschreiben.', 'Ich kann Regeln vorschlagen und einen Kompromiss finden.', 'Ich kann unbekannte Wörter aus dem Kontext erschließen.', 'Ich kann mit als, wenn, bevor, nachdem und seitdem erzählen, wann etwas passiert ist.', 'Ich kann ein Wort umschreiben, das mir nicht einfällt.']),
    mcq('w-q1', '„Das sind die Freunde, mit ___ ich in den Urlaub fahre.“', ['die', 'den', 'denen'], 2, { task: 'Letzter Check vor der Prüfung', taskEn: 'Last check before the exam.' }),
    mcq('w-q2', '„___ ich die Schule beendet hatte, machte ich eine Ausbildung.“', ['Nachdem', 'Bevor', 'Während'], 0),
  ]);

export const kapitel7: Chapter = {
  id: 'kapitel-7', number: 7, title: 'Miteinander', theme: 'Zusammenleben, Werte, Regeln',
  grammar: 'Relativsätze. Temporale Nebensätze.',
  sections: [einstieg, modul1, modul2, modul3, kommunikation, grammatik, uebungen, wortschatz],
  games: ['k7-sprint', 'k7-memory', 'k7-satzbau', 'k7-artikel'],
  exam: [
    x(1, mcq('x1', '„Das ist der Lehrer, ___ mir Deutsch beigebracht hat.“', ['den', 'der', 'dem'], 1)),
    x(1, mcq('x2', '„Das ist die Freundin, ___ ich oft schreibe.“', ['die', 'der', 'den'], 1, { why: 'schreiben + Dativ (jemandem schreiben): der Freundin → der.' })),
    x(1, mcq('x3', '„Das ist das Café, in ___ wir uns kennengelernt haben.“', ['das', 'der', 'dem'], 2)),
    x(4, gap('x4', ['Hier ist das Buch, {{das}} du gesucht hast.', 'Das sind die Nachbarn, {{die}} neu eingezogen sind.', 'Der Kollege, {{dem}} ich geholfen habe, hat sich bedankt.', 'Die Stadt, in {{der}} ich lebe, ist klein.'], { task: 'Ergänze das Relativpronomen.' })),
    x(4, gap('x5', ['{{Als}} ich zehn war, zogen wir um.', '{{Bevor}} wir essen, waschen wir uns die Hände.', '{{Seitdem}} ich Sport mache, schlafe ich besser.', '{{Während}} sie telefonierte, kochte er.'], { bank: ['Während', 'Seitdem', 'Als', 'Bevor'], task: 'Welcher Konnektor passt?' })),
    x(1, mcq('x6', 'Warum zog Farid in das Mehrgenerationenhaus?', ['Weil die Miete dort am niedrigsten war.', 'Weil er nach dem Tod seiner Frau nicht allein leben wollte.', 'Weil seine Kinder dort wohnen.'], 1),
      text('x-st1', 'Farid Rahimi ist 72 und wohnt seit drei Jahren in einem Mehrgenerationenhaus in Kassel. Nachdem seine Frau gestorben war, wollte er nicht allein in der großen Wohnung bleiben. In dem Haus, in dem er jetzt lebt, gibt es zwölf Wohnungen, einen gemeinsamen Garten und eine Küche, in der zweimal pro Woche zusammen gekocht wird. Farid, der früher Mathematiklehrer war, hilft den Kindern im Haus bei den Hausaufgaben. Dafür trägt ihm der Student aus dem dritten Stock die Einkäufe hoch. „Am Anfang hatte ich Angst, dass es zu laut wird“, sagt er. „Aber es gibt klare Regeln, und wenn es Streit gibt, sprechen wir sofort darüber.“', { kicker: 'Lesen' })),
    x(1, mcq('x7', 'Was macht Farid für die Gemeinschaft? (Text oben)', ['Er kocht jeden Tag.', 'Er hilft Kindern bei den Hausaufgaben.', 'Er kümmert sich um den Garten.'], 1)),
    x(1, mcq('x8', 'Was sucht die Kundin?', ['einen Dosenöffner', 'einen Flaschenöffner', 'einen Korkenzieher'], 0),
      audio('x-st2', 'Hören: Im Haushaltswarengeschäft', [
        ['priya', 'Guten Tag. Ich suche etwas für die Küche, aber mir fällt das Wort nicht ein.'],
        ['herrLehmann', 'Kein Problem. Beschreiben Sie es einfach.'],
        ['priya', 'Es ist ein kleines Gerät, mit dem man Dosen aufmacht. Zum Beispiel eine Dose Tomaten.'],
        ['herrLehmann', 'Ah, Sie meinen einen Dosenöffner. Die haben wir dort hinten, im Regal neben den Töpfen.'],
        ['priya', 'Dosenöffner, danke. Und was kostet der?'],
        ['herrLehmann', 'Der einfache sechs Euro, der elektrische neunzehn.'],
        ['priya', 'Dann nehme ich den einfachen.'],
      ])),
    x(1, mcq('x9', 'Wie viel bezahlt sie? (Hörtext oben)', ['6 Euro', '16 Euro', '19 Euro'], 0)),
    x(2, order('x10', ['Das ist ein Gerät,', 'mit dem', 'man', 'Wäsche', 'trocknet.'], { task: 'Bau die Umschreibung.' })),
    x(2, order('x11', ['Nachdem', 'wir gegessen hatten,', 'gingen wir', 'spazieren.'], { task: 'Bau den Satz.' })),
    x(3, gap('x12', ['Ich {{schlage}} vor, dass wir abwechselnd putzen.', 'Damit bin ich {{einverstanden}}.', 'Mir {{fällt}} das Wort gerade nicht ein.'], { bank: ['fällt', 'schlage', 'einverstanden'], task: 'Ergänze.' })),
    x(1, mcq('x13', '„Immer ___ ich Heimweh hatte, rief ich meine Schwester an.“', ['als', 'wenn', 'wann'], 1)),
    x(1, mcq('x14', '„Das ist die Nachbarin, ___ Katze immer in unseren Garten kommt.“', ['deren', 'dessen', 'der'], 0)),
  ],
};

export const games7: GameDef[] = [
  {
    id: 'k7-sprint', engine: 'sprint', title: 'Relativ-Sprint', blurb: '60 Sekunden: der, den, dem oder denen?', skill: 'Relativpronomen', tone: 'mint', chapter: 7, emoji: '⚡',
    rules: 'Du siehst einen Satz mit einer Lücke. Tippe auf das richtige Relativpronomen. Du hast 60 Sekunden.', label: 'Welches Relativpronomen?',
    items: [
      { q: 'der Mann, ___ dort steht', a: 'der', wrong: ['den', 'dem'] }, { q: 'der Mann, ___ ich kenne', a: 'den', wrong: ['der', 'dem'] },
      { q: 'der Mann, ___ ich helfe', a: 'dem', wrong: ['der', 'den'] }, { q: 'die Frau, ___ hier arbeitet', a: 'die', wrong: ['der', 'den'] },
      { q: 'die Frau, ___ ich danke', a: 'der', wrong: ['die', 'den'] }, { q: 'das Kind, ___ lacht', a: 'das', wrong: ['der', 'dem'] },
      { q: 'das Kind, ___ ich ein Eis kaufe', a: 'dem', wrong: ['das', 'den'] }, { q: 'die Leute, ___ wir treffen', a: 'die', wrong: ['denen', 'der'] },
      { q: 'die Leute, ___ wir helfen', a: 'denen', wrong: ['die', 'den'] }, { q: 'der Film, ___ ich gesehen habe', a: 'den', wrong: ['der', 'dem'] },
      { q: 'das Haus, in ___ ich wohne', a: 'dem', wrong: ['das', 'den'] }, { q: 'die Stadt, in ___ ich lebe', a: 'der', wrong: ['die', 'dem'] },
      { q: 'Freunde, mit ___ ich reise', a: 'denen', wrong: ['die', 'der'] }, { q: 'der Stuhl, auf ___ ich sitze', a: 'dem', wrong: ['den', 'der'] },
      { q: 'die Tasche, ___ ich gekauft habe', a: 'die', wrong: ['der', 'den'] }, { q: 'der Bus, auf ___ wir warten', a: 'den', wrong: ['dem', 'der'] },
      { q: 'der Nachbar, ___ Hund bellt', a: 'dessen', wrong: ['deren', 'der'] }, { q: 'die Kollegin, ___ Auto kaputt ist', a: 'deren', wrong: ['dessen', 'die'] },
    ],
  },
  {
    id: 'k7-memory', engine: 'memory', title: 'Werte-Memory', blurb: 'Finde die Paare: Adjektiv und Nomen.', skill: 'Wortbildung', tone: 'lilac', chapter: 7, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Adjektiv mit dem passenden Nomen.', kinds: ['Adjektiv', 'Nomen'],
    pairs: [['ehrlich', 'die Ehrlichkeit'], ['zuverlässig', 'die Zuverlässigkeit'], ['frei', 'die Freiheit'], ['tolerant', 'die Toleranz'], ['pünktlich', 'die Pünktlichkeit'], ['höflich', 'die Höflichkeit'], ['geduldig', 'die Geduld'], ['mutig', 'der Mut'], ['treu', 'die Treue'], ['gerecht', 'die Gerechtigkeit']],
  },
  {
    id: 'k7-satzbau', engine: 'satzbau', title: 'Als, wenn, nachdem', blurb: 'Bau Zeitsätze und Relativsätze.', skill: 'Nebensätze', tone: 'sky', chapter: 7, emoji: '🧱',
    rules: 'Tippe die Satzteile in der richtigen Reihenfolge an. Im Nebensatz steht das Verb am Ende.',
    sentences: [
      { parts: ['Als ich', 'nach Wien kam,', 'kannte ich', 'niemanden.'], hint: 'als = einmal in der Vergangenheit' },
      { parts: ['Bevor du', 'gehst,', 'mach bitte', 'das Fenster zu.'], hint: 'Nebensatz zuerst, dann Verb' },
      { parts: ['Nachdem wir', 'gegessen hatten,', 'spielten wir', 'Karten.'], hint: 'nachdem + Plusquamperfekt' },
      { parts: ['Seitdem ich', 'hier wohne,', 'fahre ich', 'viel Fahrrad.'], hint: 'seitdem + Präsens' },
      { parts: ['Das ist', 'die Kollegin,', 'die mir', 'geholfen hat.'], hint: 'Relativsatz, Verb am Ende' },
      { parts: ['Das ist', 'ein Ding,', 'mit dem man', 'Flaschen öffnet.'], hint: 'Präposition + Relativpronomen' },
      { parts: ['Ich warte,', 'bis', 'der Regen', 'aufhört.'], hint: 'bis + Verb am Ende' },
      { parts: ['Immer wenn', 'ich Heimweh habe,', 'rufe ich', 'meine Mutter an.'], hint: 'wenn = jedes Mal' },
      { parts: ['Ich schlage vor,', 'dass wir', 'einen Putzplan', 'machen.'], hint: 'dass + Verb am Ende' },
    ],
  },
  {
    id: 'k7-artikel', engine: 'regen', title: 'Artikelregen: Miteinander', blurb: 'der, die oder das? Fang die Nomen aus Kapitel 7.', skill: 'Artikel', tone: 'rose', chapter: 7, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel, bevor es unten ankommt. Du hast drei Leben.', buckets: ['der', 'die', 'das'],
    words: artikel('der Zusammenhalt, die Rücksicht, das Heimweh, der Streit, die Gemeinschaft, das Fest, der Kompromiss, die Regel, das Werkzeug, der Verein, die Behörde, das Dokument, der Respekt, die Freiheit, das Sieb, der Nachbar, die Insel, das Meer, der Wert, die Fähre, das Boot, der Sturm, die Versammlung, das Gefühl, der Dialekt'),
  },
];
