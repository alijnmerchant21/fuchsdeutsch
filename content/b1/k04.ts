import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// B1 Kapitel 4: Arbeitswelt. Gespräche bei der Arbeit, Bewerbung, Telefonieren.
// Grammar: Konjunktiv II (würde, wäre, hätte, könnte, müsste, sollte), irreale Bedingungssätze, Verben mit Präposition,
// Pronominaladverbien (worauf, darauf) und Präposition + Pronomen für Personen, Verb mit Präposition + Nebensatz.
// Aussprache: freundlich oder unfreundlich? Strategie: Texte strukturieren. Prüfungstraining: Schreiben Teil 3.

export const glossaryB1k4: Record<string, GlossaryEntry> = {
  Arbeitswelt: { de: 'Alles, was mit Arbeit und Beruf zu tun hat: Firmen, Kollegen, Bewerbungen.', en: 'the world of work' },
  Stellenanzeige: { de: 'Ein kurzer Text, in dem eine Firma neue Mitarbeiter sucht.', en: 'job ad' },
  Bewerbung: { de: 'Die Unterlagen (Anschreiben, Lebenslauf, Zeugnisse), mit denen man sich um eine Stelle bewirbt.', en: 'job application' },
  Lebenslauf: { de: 'Eine Tabelle mit Schule, Ausbildung und Berufserfahrung.', en: 'CV, résumé' },
  Anschreiben: { de: 'Ein Brief zur Bewerbung: Warum möchte ich die Stelle, und was kann ich?', en: 'cover letter' },
  Vorstellungsgespräch: { de: 'Ein Gespräch mit der Firma, nachdem man sich beworben hat.', en: 'job interview' },
  'Konjunktiv II': { de: 'Eine Verbform für Wünsche, Ratschläge, höfliche Bitten und Dinge, die nicht real sind: ich wäre, ich hätte, ich würde.', en: 'subjunctive II (would, could, should)' },
  Pflegedienstleitung: { de: 'Die Chefin oder der Chef von allen Pflegekräften in einem Krankenhaus oder in einem großen Bereich.', en: 'director of nursing' },
  Stationsleiterin: { de: 'Sie leitet das Pflegeteam auf einer Station im Krankenhaus.', en: 'ward manager (female)' },
  Personalabteilung: { de: 'Die Abteilung in einer Firma, die sich um Mitarbeiter, Verträge und Bewerbungen kümmert.', en: 'HR department' },
  Gehalt: { de: 'Das Geld, das man jeden Monat für seine Arbeit bekommt.', en: 'salary' },
  Schicht: { de: 'Eine feste Arbeitszeit, zum Beispiel Frühdienst oder Nachtdienst.', en: 'shift' },
  Probezeit: { de: 'Die ersten Monate in einer neuen Stelle. In dieser Zeit kann man leichter kündigen.', en: 'probation period' },
  Pronominaladverb: { de: 'Ein Wort wie darauf, daran, dafür oder worauf. Es steht für eine Präposition plus eine Sache.', en: 'pronominal adverb (darauf = on it, worauf = on what)' },
  Intonation: { de: 'Die Melodie der Stimme beim Sprechen.', en: 'intonation' },
  Weiterbildung: { de: 'Ein Kurs, in dem man im Beruf Neues lernt.', en: 'further training, professional development' },
  Aushilfe: { de: 'Eine Person, die nur ein paar Stunden pro Woche in einer Firma hilft.', en: 'part-time helper, temp' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Arbeit, Job, Beruf', 'butter', 8,
  ['das Kapitel kennenlernen', 'Wörter zur Arbeitssuche'], [
    overview('e-over', 'Kapitel 4: Arbeitswelt',
      'Dezember in Leipzig. Amara bekommt eine E-Mail aus Hamburg: Ein Krankenhaus bietet ihr eine Stelle als [[Pflegedienstleitung]] an. Mehr Geld, ein größeres Team, aber auch ein Abschied vom Fuchsbau? In Kapitel 4 geht es um die [[Arbeitswelt]]: Gespräche mit Kollegen, Entschuldigungen, [[Stellenanzeige|Stellenanzeigen]] und [[Bewerbung|Bewerbungen]].\n\nDu lernst den [[Konjunktiv II]]: *Ich hätte gern …, Könnten Sie …?, Wenn ich mehr Zeit hätte, würde ich …* Du liest Tipps für [[Lebenslauf]], [[Anschreiben]] und [[Vorstellungsgespräch]] und benutzt Verben mit Präposition und [[Pronominaladverb|Pronominaladverbien]] wie *darauf* und *worauf*. Felix ruft wegen einer Anzeige an, und du übst die [[Intonation]]: Wie klingt man freundlich? Im Prüfungstraining schreibst du eine formelle E-Mail.',
      'This chapter is about the world of work: conversations with colleagues, apologizing and reacting to apologies, job ads, applications and job interviews. Grammar: the Konjunktiv II (subjunctive) for wishes, advice and polite requests (ich hätte gern, könnten Sie, du solltest) and for unreal conditions (Wenn ich mehr Zeit hätte, würde ich …). You also learn verbs with fixed prepositions (sich bewerben um, warten auf) and pronominal adverbs (darauf, worauf). In the story, a hospital in Hamburg offers Amara a director of nursing job, and she has a video interview. Exam training: Goethe B1 Schreiben Teil 3, a short formal email.',
      ['Gespräche bei der Arbeit verstehen', 'sich entschuldigen und reagieren', 'Wünsche und Irreales ausdrücken (Konjunktiv II)', 'am Telefon nach Informationen fragen', 'Bewerbungstipps verstehen und austauschen', 'einen Text strukturieren']),
    match('e-match', [['die Stellenanzeige', '📰'], ['die Bewerbung', '✉️'], ['das Vorstellungsgespräch', '🤝'], ['die Unterschrift', '✍️'], ['das Gehalt', '💶'], ['die Teilzeit', '🕐'], ['das Team', '👥'], ['die Videokonferenz', '💻']],
      { task: 'Welches Wort passt zum Bild?', taskEn: 'Match each work word to the picture.' }),
    sort('e-sort', ['Arbeitssuche', 'Arbeitsalltag'], [['Stellenanzeigen lesen', 0], ['einen Lebenslauf schreiben', 0], ['zu einem Vorstellungsgespräch gehen', 0], ['an einem Meeting teilnehmen', 1], ['eine Schicht übernehmen', 1], ['mit Kollegen Mittag essen', 1]],
      { task: 'Arbeit suchen oder arbeiten? Sortiere.', taskEn: 'Sort: is it part of looking for a job or of everyday work?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Entschuldigung, das war mein Fehler', 'mint', 15,
  ['Gespräche bei der Arbeit verstehen', 'sich entschuldigen und reagieren', 'Konjunktiv II: höflich bitten, Wünsche, Ratschläge'], [
    audio('t1-audio', 'Hören: Drei Gespräche bei der Arbeit', [
      ['amara', 'Elif, hast du einen Moment? Bei Herrn Krause fehlt deine Unterschrift im Übergabeprotokoll.'],
      ['elif', 'Oh nein, das tut mir leid! Das habe ich in der Hektik total vergessen. Ich mache das sofort.'],
      ['amara', 'Kein Problem, das kann passieren. Aber könntest du in Zukunft bitte gleich nach der Übergabe unterschreiben?'],
      ['elif', 'Klar, mache ich. Kommt nicht wieder vor.'],
      ['jonas', 'Ah, Sofia, da bist du ja! Wir haben im Meeting um neun auf dich gewartet.'],
      ['sofia', 'Ich weiß, entschuldige bitte! Die Straßenbahn ist einfach nicht gekommen, und mein Handy war leer. Ich hätte euch so gern Bescheid gesagt.'],
      ['jonas', 'Halb so wild. Wir haben eh nur kurz über die neue App gesprochen. Würdest du dir das Protokoll mal anschauen?'],
      ['sofia', 'Mache ich gleich. Und morgen bin ich pünktlich, versprochen.'],
      ['kenji', 'Guten Tag, hier ist Kenji Tanaka vom Restaurant Fuchs & Yuzu. Sie haben mir heute Morgen zehn Kilo Kartoffeln geliefert. Ich hatte aber Karotten bestellt.'],
      ['atze', 'Ach du meine Güte! Da ist bei uns was schiefgelaufen. Ich bitte vielmals um Entschuldigung, Herr Tanaka.'],
      ['kenji', 'Na ja, das ist ärgerlich. Ich bräuchte die Karotten wirklich heute noch, am Abend kommt eine große Gruppe.'],
      ['atze', 'Verstehe. Ich schicke Ihnen sofort einen Fahrer. In einer Stunde sind die Karotten bei Ihnen, und die Kartoffeln nimmt er wieder mit. Natürlich kostenlos.'],
      ['kenji', 'Das wäre toll. Danke, das ist sehr nett von Ihnen.'],
    ], { task: 'Hör die drei Gespräche. Wer entschuldigt sich, und wofür?', taskEn: 'Listen to three conversations at work: in the hospital, at Sofia’s startup and on the phone with Kenji’s supplier. Who apologizes, and for what? Halb so wild = no big deal.' }),
    mcq('t1-q1', 'Was hat Elif vergessen?', ['ihre Unterschrift im Protokoll', 'einen Patienten', 'ihre Schicht'], 0),
    mcq('t1-q2', 'Warum kam Sofia zu spät?', ['Sie hat verschlafen.', 'Die Straßenbahn ist nicht gekommen.', 'Sie war beim Arzt.'], 1),
    mcq('t1-q3', 'Wie löst der Lieferant das Problem?', ['Er schickt die Karotten in einer Stunde.', 'Er gibt Kenji das Geld zurück.', 'Kenji soll die Karotten selbst abholen.'], 0),
    phrases('t1-phr', 'Sich entschuldigen und reagieren', {
      'Sich entschuldigen (informell)': ['Entschuldige bitte!', 'Tut mir echt leid.', 'Das war mein Fehler.', 'Kommt nicht wieder vor.'],
      'Sich entschuldigen (formell)': ['Entschuldigen Sie bitte.', 'Ich bitte vielmals um Entschuldigung.', 'Es tut mir sehr leid, dass …'],
      'Auf eine Entschuldigung reagieren': ['Kein Problem, das kann passieren.', 'Halb so wild.', 'Schon gut, mach dir keine Sorgen.', 'Na ja, das ist ärgerlich, aber …'],
    }),
    sort('t1-sort', ['sich entschuldigen', 'auf eine Entschuldigung reagieren'], [['Das tut mir wirklich leid.', 0], ['Entschuldige bitte, das war mein Fehler.', 0], ['Das kommt nicht wieder vor.', 0], ['Ich bitte vielmals um Entschuldigung.', 0], ['Kein Problem, das kann passieren.', 1], ['Halb so wild.', 1], ['Schon gut, mach dir keine Sorgen.', 1], ['Entschuldigung angenommen.', 1]],
      { task: 'Entschuldigung oder Reaktion? Sortiere.', taskEn: 'Sort: is the person apologizing or reacting to an apology?' }),
    grammar('t1-gram', 'Der Konjunktiv II', {
      intro: 'Mit dem **Konjunktiv II** bittet man höflich, äußert Wünsche und gibt Ratschläge. Bei **sein, haben** und den **Modalverben** benutzt man eine eigene Form. Bei fast allen anderen Verben nimmt man **würde + Infinitiv**.',
      head: ['', 'sein', 'haben', 'werden', 'können', 'müssen', 'sollen'],
      rows: [
        ['ich', 'w**ä**re', 'h**ä**tte', 'w**ü**rde', 'k**ö**nnte', 'm**ü**sste', 'sollte'],
        ['du', 'w**ä**rst', 'h**ä**ttest', 'w**ü**rdest', 'k**ö**nntest', 'm**ü**sstest', 'solltest'],
        ['er/sie/es', 'w**ä**re', 'h**ä**tte', 'w**ü**rde', 'k**ö**nnte', 'm**ü**sste', 'sollte'],
        ['wir', 'w**ä**ren', 'h**ä**tten', 'w**ü**rden', 'k**ö**nnten', 'm**ü**ssten', 'sollten'],
        ['ihr', 'w**ä**rt', 'h**ä**ttet', 'w**ü**rdet', 'k**ö**nntet', 'm**ü**sstet', 'solltet'],
        ['sie/Sie', 'w**ä**ren', 'h**ä**tten', 'w**ü**rden', 'k**ö**nnten', 'm**ü**ssten', 'sollten'],
      ],
      notes: [
        'Höflich bitten: **Könnten** Sie mir helfen? **Würden** Sie bitte zurückrufen? Ich **hätte** gern einen Termin.',
        'Wünsche: *Ich **würde** gern in Teilzeit arbeiten. Ich **wäre** jetzt gern im Urlaub.*',
        'Ratschläge: *Du **solltest** dich bewerben. An deiner Stelle **würde** ich das Angebot annehmen.*',
        'Andere Verben: **würde + Infinitiv** am Ende: *Ich **würde** gern mehr **verdienen**.* Nur ein paar Verben benutzt man oft auch allein: *es **gäbe**, ich **wüsste**, ich **bräuchte***.',
        'Achtung: **sollen** hat keinen Umlaut: *ich sollte*. Und *ich konnte* (Präteritum) ist nicht *ich könnte* (Konjunktiv II)!',
      ],
      en: 'The Konjunktiv II is used for polite requests (Könnten Sie …? Ich hätte gern …), wishes (Ich würde gern …) and advice (Du solltest …). sein, haben and the modal verbs have their own forms, usually with an umlaut: wäre, hätte, könnte, müsste. sollen has no umlaut: sollte. For most other verbs, use würde plus the infinitive at the end. Careful: konnte (could, past) is not könnte (could, would be able to).',
    }),
    gap('t1-gap', ['{{Könnten}} Sie mir bitte helfen? (können)', 'Ich {{hätte}} gern einen Termin am Montag. (haben)', 'Du {{solltest}} dich mal richtig ausruhen. (sollen)', '{{Würdest}} du mir das Protokoll schicken? (werden)', 'Ich {{wäre}} jetzt gern am Meer. (sein)', 'Wir {{müssten}} eigentlich früher anfangen. (müssen)'],
      { task: 'Ergänze den Konjunktiv II.', taskEn: 'Fill in the Konjunktiv II form of the verb in brackets.' }),
    sort('t1-sort2', ['höflich bitten', 'einen Wunsch äußern', 'einen Rat geben'], [['Könnten Sie das Fenster öffnen?', 0], ['Würdest du mir kurz helfen?', 0], ['Ich würde gern im Ausland arbeiten.', 1], ['Ich hätte gern mehr Freizeit.', 1], ['Du solltest mit deiner Chefin sprechen.', 2], ['An deiner Stelle würde ich kündigen.', 2]],
      { task: 'Bitte, Wunsch oder Rat? Sortiere.', taskEn: 'Is each sentence a polite request, a wish or a piece of advice? Sort.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Was wäre, wenn …?', 'sky', 15,
  ['über Wünsche und Träume im Beruf lesen', 'irreale Bedingungssätze', 'am Telefon nach Informationen fragen'], [
    text('t2-text', `**Was wäre, wenn …? Vier Menschen über ihren Traumjob**

**Hannah (26), Pflegekraft:** Ich mag meinen Beruf, aber die Schichten sind hart. Wenn ich mehr Zeit für die Patienten hätte, wäre ich viel zufriedener. Mein Traum ist ein Krankenhaus mit genug Personal. Dann müsste niemand mehr am Wochenende einspringen.

**Murat (38), Busfahrer:** Wenn ich noch mal zwanzig wäre, würde ich Koch werden. Ich koche jeden Abend für meine Familie und probiere neue Rezepte aus. Aber mit drei Kindern kann ich nicht einfach eine neue Ausbildung anfangen. Ein eigenes kleines Lokal? Das wäre schön, aber das Risiko wäre mir zu groß.

**Clara (45), Architektin:** Ich würde gern nur vier Tage pro Woche arbeiten. Dann hätte ich endlich Zeit für meinen Garten und für meine Eltern. Mein Chef sagt, das geht nicht. Ich finde, er sollte es wenigstens ausprobieren. In anderen Firmen klappt das ja auch.

**Tim (19), Schüler:** Ich weiß noch gar nicht, was ich werden will. Wenn ich könnte, würde ich nach dem Abitur ein Jahr reisen und in verschiedenen Ländern jobben. Meine Eltern finden, ich sollte lieber sofort studieren. Aber ich wäre gern sicher, dass ich das Richtige mache.`,
      { kicker: 'Lesen', title: 'Aus einem Stadtmagazin', task: 'Lies die Texte. Was wünschen sich die vier Personen?', taskEn: 'Read what four people say about their dream job. What do they wish for? Notice the forms wäre, hätte, würde.', en: 'Hannah, a nurse, would be happier with more time for her patients and wishes for a hospital with enough staff. Murat, a bus driver, would become a cook if he were twenty again, but with three kids the risk of his own restaurant would be too big. Clara, an architect, would like a four-day week; her boss says no, but she thinks he should at least try it. Tim, 19, would travel and work abroad for a year after school; his parents think he should study right away.' }),
    mcq('t2-q1', 'Was würde Hannah zufriedener machen?', ['mehr Geld', 'mehr Zeit für die Patienten', 'weniger Kollegen'], 1),
    mcq('t2-q2', 'Warum wird Murat nicht Koch?', ['Er kocht nicht gern.', 'Das Risiko wäre ihm zu groß.', 'Seine Frau möchte das nicht.'], 1),
    mcq('t2-q3', 'Was findet Clara?', ['Ihr Chef sollte die Vier-Tage-Woche ausprobieren.', 'Sie sollte die Firma wechseln.', 'Eine Vier-Tage-Woche klappt nirgends.'], 0),
    grammar('t2-gram', 'Irreale Bedingungssätze', {
      intro: 'Ein **irrealer Bedingungssatz** beschreibt eine Situation, die **nicht real** ist. Beide Teile stehen im **Konjunktiv II**. Im wenn-Satz steht das Verb **am Ende**.',
      head: ['wenn-Satz (Bedingung)', 'Hauptsatz (Folge)', 'Die Realität'],
      rows: [
        ['Wenn ich mehr Zeit **hätte**,', '**würde** ich öfter **kochen**.', 'Ich habe keine Zeit.'],
        ['Wenn ich noch mal zwanzig **wäre**,', '**würde** ich Koch **werden**.', 'Ich bin 38.'],
        ['Wenn es mehr Personal **gäbe**,', '**müsste** niemand **einspringen**.', 'Es gibt zu wenig Personal.'],
        ['Wenn ich **könnte**,', '**würde** ich ein Jahr **reisen**.', 'Ich kann nicht.'],
      ],
      notes: [
        'Steht der wenn-Satz **vorne**, beginnt der Hauptsatz mit dem **Verb**: *Wenn ich Zeit hätte, **würde** ich kommen.*',
        'Der Hauptsatz kann auch vorne stehen: *Ich **würde** kommen, wenn ich Zeit **hätte**.*',
        'Real oder irreal? *Wenn ich Zeit **habe**, komme ich.* (Das ist möglich.) *Wenn ich Zeit **hätte**, **würde** ich kommen.* (Aber ich habe keine.)',
        'Ein Wunsch ohne Hauptsatz: *Wenn ich **doch** mehr Zeit **hätte**!*',
      ],
      en: 'Unreal conditional sentences describe situations that are not true right now. Both parts use the Konjunktiv II: Wenn ich mehr Zeit hätte, würde ich öfter kochen (If I had more time, I would cook more often). In the wenn-clause the verb goes to the end. If the wenn-clause comes first, the main clause starts with the verb. Compare: Wenn ich Zeit habe, komme ich (real, possible) and Wenn ich Zeit hätte, würde ich kommen (unreal).',
    }),
    gap('t2-gap', ['Wenn ich mehr Geld {{hätte}}, würde ich weniger arbeiten. (haben)', 'Wenn Murat jünger {{wäre}}, würde er Koch werden. (sein)', 'Wenn Clara nur vier Tage arbeiten {{könnte}}, hätte sie mehr Zeit. (können)', 'Wenn es mehr Personal gäbe, {{müsste}} niemand einspringen. (müssen)', 'Wenn ich Zeit hätte, {{würde}} ich dich besuchen. (werden)'],
      { task: 'Ergänze die irrealen Bedingungssätze.', taskEn: 'Complete the unreal conditional sentences with the Konjunktiv II.' }),
    match('t2-match', [['Wenn ich im Lotto gewinnen würde,', 'würde ich eine Weltreise machen.'], ['Wenn ich besser Deutsch könnte,', 'hätte ich mehr Chancen im Job.'], ['Wenn der Bus pünktlich wäre,', 'käme ich nicht zu spät zur Arbeit.'], ['Wenn ich nicht so müde wäre,', 'würde ich noch mit ins Kino kommen.'], ['Wenn wir ein Auto hätten,', 'könnten wir am Wochenende ans Meer fahren.']],
      { task: 'Was passt zusammen?', taskEn: 'Match each wenn-clause to the most logical main clause.' }),
    order('t2-order', ['Wenn ich mehr Zeit hätte,', 'würde', 'ich', 'Gitarre', 'lernen.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence. After the wenn-clause, the verb comes first.' }),
    text('t2-anzeige', `**Musikhaus Kranz, Leipzig-Südvorstadt**

Wir suchen ab Januar 2027 eine **Aushilfe (m/w/d) im Verkauf**, 15 bis 20 Stunden pro Woche.

**Ihre Aufgaben:** Kundinnen und Kunden beraten, Instrumente vorführen, Kasse und Lager.

**Sie bringen mit:** gute Kenntnisse über Gitarren und Verstärker, Freude am Umgang mit Menschen, Zuverlässigkeit. Erfahrung im Verkauf ist ein Plus, aber kein Muss.

**Wir bieten:** flexible Arbeitszeiten, ein nettes Team und 20 % Rabatt auf alle Instrumente.

Fragen? Rufen Sie uns an: Montag bis Freitag, 10 bis 18 Uhr. Ihre Bewerbung schicken Sie bitte per E-Mail an Ben Kranz.`,
      { kicker: 'Lesen', title: 'Eine Stellenanzeige', task: 'Lies die Anzeige. Felix interessiert sich für die Stelle.', taskEn: 'Read the job ad. Felix is interested in the job. (m/w/d) = male, female, diverse: the job is open to everyone.', en: 'A music shop in Leipzig is looking for a part-time sales assistant from January 2027, 15 to 20 hours a week: advising customers, demonstrating instruments, register and stockroom. They want good knowledge of guitars and amplifiers, people skills and reliability; sales experience is a plus. They offer flexible hours, a nice team and a 20 percent discount on instruments.' }),
    audio('t2-tel', 'Hören: Felix ruft an', [
      ['ben', 'Musikhaus Kranz, guten Tag, Sie sprechen mit Ben Kranz.'],
      ['felix', 'Grüß Gott, äh, guten Tag! Mein Name ist Felix Huber. Ich rufe wegen Ihrer Anzeige an. Ist die Stelle als Aushilfe denn noch frei?'],
      ['ben', 'Ja, noch ist sie frei. Was möchten Sie denn wissen?'],
      ['felix', 'Ich hätte ein paar Fragen. Könnten Sie mir sagen, wie die Arbeitszeiten genau sind? Ich spiele nämlich in einer Band und habe abends oft Probe.'],
      ['ben', 'Das passt eigentlich gut. Wir bräuchten jemanden vor allem vormittags und am Samstag. Abends haben wir ja ab sechs zu.'],
      ['felix', 'Super. Und wäre es möglich, auch mal nur zehn Stunden zu arbeiten? Zum Beispiel, wenn wir Konzerte haben?'],
      ['ben', 'Hm, das müssten wir besprechen. Mindestens fünfzehn Stunden wären uns schon wichtig.'],
      ['felix', 'Verstehe. Eine letzte Frage: Was sollte ich der Bewerbung beilegen?'],
      ['ben', 'Ein kurzes Anschreiben und Ihren Lebenslauf. Zeugnisse brauchen wir erst beim Gespräch.'],
      ['felix', 'Alles klar. Und an wen schicke ich die E-Mail?'],
      ['ben', 'An mich. Die Adresse steht in der Anzeige. Ich würde mich freuen, von Ihnen zu hören.'],
      ['felix', 'Vielen Dank für die Auskunft. Auf Wiederhören!'],
    ], { task: 'Hör das Telefongespräch. Was möchte Felix wissen?', taskEn: 'Listen to the phone call. What does Felix want to know? Notice how he asks politely with the Konjunktiv II: Ich hätte …, Könnten Sie …, Wäre es möglich …' }),
    mcq('t2-tq1', 'Wann braucht das Musikhaus vor allem Hilfe?', ['abends', 'vormittags und am Samstag', 'nur am Sonntag'], 1),
    mcq('t2-tq2', 'Wie viele Stunden pro Woche sind dem Musikhaus mindestens wichtig?', ['zehn', 'fünfzehn', 'zwanzig'], 1),
    mcq('t2-tq3', 'Was soll Felix mit der Bewerbung schicken?', ['ein Anschreiben und den Lebenslauf', 'nur seine Zeugnisse', 'ein Video von der Band'], 0),
    phrases('t2-phr', 'Am Telefon', {
      'Sich vorstellen': ['Guten Tag, mein Name ist …', 'Ich rufe wegen Ihrer Anzeige an.', 'Ich rufe an, weil …'],
      'Nach Informationen fragen': ['Ich hätte eine Frage zu …', 'Könnten Sie mir sagen, ob / wann / wie …?', 'Wäre es möglich, …?', 'Ich würde gern wissen, …'],
      'Informationen geben': ['Ja, gern. Also, …', 'Das müsste ich kurz nachfragen.', 'Das steht auch in der Anzeige.'],
      'Das Gespräch beenden': ['Vielen Dank für die Auskunft.', 'Dann melde ich mich wieder.', 'Auf Wiederhören!'],
    }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Die perfekte Bewerbung', 'lilac', 15,
  ['Bewerbungstipps verstehen', 'über Bewerbungen sprechen', 'Verben mit Präposition'], [
    text('t3-text', `**Bewerben in Deutschland: Fünf Tipps**

Wer sich in Deutschland um eine Stelle bewirbt, schickt normalerweise drei Dinge: ein Anschreiben, einen Lebenslauf und Zeugnisse. Das klingt einfach, aber es gibt ein paar Regeln.

**1. Das Anschreiben:** Es sollte nicht länger als eine Seite sein. Schreiben Sie, warum Sie sich für genau diese Stelle interessieren und was Sie mitbringen. Der Satz „Hiermit bewerbe ich mich“ ist langweilig. Beginnen Sie lieber mit etwas Persönlichem.

**2. Der Lebenslauf:** In Deutschland ist er tabellarisch und meistens nicht länger als zwei Seiten. Die neueste Station steht oben. Ein Foto ist keine Pflicht mehr, viele Firmen freuen sich aber trotzdem darüber.

**3. Lücken erklären:** Sie waren ein Jahr auf Reisen oder haben sich um Ihre Kinder gekümmert? Kein Problem. Schreiben Sie es ehrlich in den Lebenslauf.

**4. Das Vorstellungsgespräch:** Bereiten Sie sich gut darauf vor. Informieren Sie sich über die Firma und überlegen Sie, welche Fragen kommen könnten. Seien Sie pünktlich, auch beim Videogespräch. Stellen Sie am Ende selbst Fragen, zum Beispiel nach dem Team oder nach Weiterbildungen.

**5. Du oder Sie?** Im Gespräch siezt man sich normalerweise. In vielen Start-ups duzen sich aber alle, manchmal schon in der Stellenanzeige. Wenn man Sie duzt, dürfen Sie auch duzen. Wenn Sie unsicher sind, bleiben Sie beim „Sie“.

Nach dem Gespräch warten viele ungeduldig auf eine Antwort. Wenn nach zwei Wochen nichts kommt, dürfen Sie freundlich nachfragen.`,
      { kicker: 'Landeskunde', title: 'Bewerbung und Vorstellungsgespräch', task: 'Lies die Tipps. Was ist in Deutschland bei einer Bewerbung wichtig?', taskEn: 'Read the tips. What matters when you apply for a job in Germany? Look for verbs with prepositions: sich bewerben um, sich interessieren für, warten auf.', en: 'In Germany you usually send a cover letter, a CV and certificates. The cover letter should be one page at most and say why you want exactly this job; start with something personal. The CV is a table, usually no longer than two pages, with the most recent position at the top; a photo is no longer required but many companies still like it. Explain gaps honestly. Prepare well for the interview, be on time (also for video calls) and ask your own questions at the end. In interviews people usually use Sie, but in many startups everyone uses du; if they use du with you, you may do the same. If there is no answer after two weeks, you may follow up politely.' }),
    mcq('t3-q1', 'Wie lang sollte ein Anschreiben sein?', ['höchstens eine Seite', 'zwei Seiten', 'so lang wie der Lebenslauf'], 0),
    mcq('t3-q2', 'Was steht im Lebenslauf ganz oben?', ['die Schulzeit', 'die neueste Station', 'die Hobbys'], 1),
    mcq('t3-q3', 'Ein Start-up duzt dich in der Stellenanzeige. Was darfst du tun?', ['auch duzen', 'nur siezen', 'gar nicht antworten'], 0),
    mcq('t3-q4', 'Nach zwei Wochen ist noch keine Antwort da. Was rät der Text?', ['die Bewerbung noch einmal schicken', 'freundlich nachfragen', 'eine andere Stelle suchen'], 1),
    grammar('t3-gram', 'Verben mit Präposition', {
      intro: 'Viele Verben haben eine **feste Präposition**. Die Präposition bestimmt den **Kasus**. Lern Verb und Präposition immer **zusammen**.',
      head: ['Verb', 'Präposition + Kasus', 'Beispiel'],
      rows: [
        ['sich bewerben', '**um** + Akkusativ', 'Felix bewirbt sich **um eine** Stelle.'],
        ['warten', '**auf** + Akkusativ', 'Amara wartet **auf eine** Antwort.'],
        ['sich freuen', '**auf** + Akkusativ (Zukunft)', 'Ich freue mich **auf das** Wochenende.'],
        ['sich freuen', '**über** + Akkusativ (jetzt, schon passiert)', 'Sie freut sich **über das** Angebot.'],
        ['denken', '**an** + Akkusativ', 'Ich denke oft **an meine** Familie.'],
        ['sich interessieren', '**für** + Akkusativ', 'Er interessiert sich **für den** Job.'],
        ['sich kümmern', '**um** + Akkusativ', 'Sie kümmert sich **um die** Dienstpläne.'],
        ['träumen', '**von** + Dativ', 'Murat träumt **von einem** eigenen Lokal.'],
        ['fragen', '**nach** + Dativ', 'Frag **nach dem** Gehalt!'],
        ['Angst haben', '**vor** + Dativ', 'Sie hat Angst **vor dem** Gespräch.'],
      ],
      notes: [
        '**sich freuen auf** = etwas kommt noch. **sich freuen über** = etwas ist schon da.',
        'Nach **auf, an, über, vor** kann Akkusativ oder Dativ stehen. Das hängt vom **Verb** ab: *warten **auf den** Bus*, aber *Angst haben **vor dem** Hund*.',
        'Auch: *sich vorbereiten **auf**, sich informieren **über**, teilnehmen **an** + Dativ, sprechen **mit** + Dativ*.',
      ],
      en: 'Many verbs come with a fixed preposition, and the preposition decides the case: sich bewerben um (apply for) + accusative, warten auf (wait for) + accusative, träumen von (dream of) + dative. sich freuen auf means looking forward to something in the future; sich freuen über means being happy about something that already happened. Always learn the verb together with its preposition.',
    }),
    gap('t3-gap', ['Felix bewirbt sich {{um}} eine Stelle im Musikhaus.', 'Amara wartet {{auf}} eine E-Mail aus Hamburg.', 'Sofia interessiert sich {{für}} Design und Pflanzen.', 'Kenji denkt immer {{an}} sein Restaurant.', 'Informier dich vorher {{über}} die Firma!', 'Im Gespräch kannst du {{nach}} Weiterbildungen fragen.'],
      { bank: ['um', 'auf', 'für', 'an', 'über', 'nach'], task: 'Ergänze die Präposition.', taskEn: 'Fill in the preposition that goes with each verb.' }),
    match('t3-match', [['sich bewerben', 'um eine Stelle'], ['sich vorbereiten', 'auf das Gespräch'], ['sich interessieren', 'für die Firma'], ['sich kümmern', 'um die Kinder'], ['fragen', 'nach dem Gehalt'], ['träumen', 'von einem eigenen Café'], ['sprechen', 'mit der Chefin']],
      { task: 'Welche Präposition passt zum Verb?', taskEn: 'Match each verb to the phrase with the right preposition.' }),
    phrases('t3-phr', 'Über Bewerbungen sprechen und Tipps geben', {
      'Erzählen': ['Ich habe mich um eine Stelle als … beworben.', 'Ich warte noch auf eine Antwort.', 'Nächste Woche habe ich ein Vorstellungsgespräch.'],
      'Gefühle': ['Ich freue mich schon darauf.', 'Ehrlich gesagt habe ich ein bisschen Angst davor.', 'Ich denke die ganze Zeit daran.'],
      'Tipps geben': ['Du solltest dich gut vorbereiten.', 'An deiner Stelle würde ich nach dem Team fragen.', 'Es wäre gut, wenn du pünktlich bist.', 'Mein Tipp: …'],
    }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 4: Das Angebot', 'rose', 12,
  ['eine Geschichte hören', 'eine formelle E-Mail verstehen', 'ein Vorstellungsgespräch verstehen'], [
    text('wg-intro', 'Anfang Dezember. Draußen ist es dunkel und kalt, in der Küche riecht es nach Suppe. Es ist Sonntag, Kenjis Restaurant hat Ruhetag, deshalb isst er oben mit der WG. Amara kommt aus ihrem Zimmer, das Handy in der Hand. Sie hat eine E-Mail bekommen, und sie sieht gleichzeitig glücklich und nervös aus.',
      { kicker: 'Die Geschichte', en: 'Early December. It is dark and cold outside, and the kitchen smells of soup. It is Sunday, Kenji’s restaurant is closed, so he is eating upstairs with the flat share. Amara comes out of her room with her phone in her hand. She got an email, and she looks happy and nervous at the same time.' }),
    text('wg-mail', `**Betreff: Stelle als Pflegedienstleitung, Einladung zu einem Videogespräch**

Sehr geehrte Frau Owusu,

Ihre frühere Kollegin Jule Petersen hat uns von Ihnen erzählt, und Ihr Profil hat uns sehr beeindruckt. Zum 1. Juli 2027 suchen wir eine neue Pflegedienstleitung für unseren Bereich Innere Medizin. Sie wären für ein Team von rund achtzig Pflegekräften verantwortlich.

Wir bieten Ihnen ein attraktives Gehalt, Weiterbildungen und Hilfe bei der Wohnungssuche in Hamburg.

Wir würden Sie gern kennenlernen. Hätten Sie am Mittwoch, dem 9. Dezember, um 16 Uhr Zeit für ein Videogespräch? Den Link schicken wir Ihnen dann rechtzeitig.

Uns ist klar, dass so eine Entscheidung Zeit braucht. Nach dem Gespräch hätten Sie deshalb bis Ende März Zeit, uns Ihre Antwort zu geben.

Mit freundlichen Grüßen
Henning Adler
Pflegedirektor, Nordklinikum Hamburg`,
      { kicker: 'Die E-Mail', title: 'Post aus Hamburg', task: 'Lies die E-Mail an Amara.', taskEn: 'Read the email to Amara.', en: 'Henning Adler, director of nursing at a hospital in Hamburg, writes that Amara’s former colleague Jule recommended her. From July 1, 2027, they need a new director of nursing for internal medicine, responsible for about eighty nurses. They offer an attractive salary, further training and help finding an apartment. He invites her to a video interview on Wednesday, December 9, at 4 p.m. After the interview she would have until the end of March to give her answer.' }),
    audio('wg-audio', 'Folge 4: Das Angebot', [
      ['amara', 'Leute, habt ihr kurz Zeit? Ich muss euch was erzählen.'],
      ['felix', 'Klingt ernst. Ist was passiert?'],
      ['amara', 'Nein, nichts Schlimmes. Ein Krankenhaus in Hamburg hat mir eine Stelle angeboten. Pflegedienstleitung, mit achtzig Leuten im Team.'],
      ['nele', 'Wow, Amara! Herzlichen Glückwunsch! Das ist ja ein Riesenschritt.'],
      ['kenji', 'Hamburg … Das ist aber weit weg.'],
      ['amara', 'Eben. Ich freue mich total darüber, aber gleichzeitig habe ich Angst davor. Ich denke die ganze Zeit daran.'],
      ['sofia', 'Also, wenn ich du wäre, würde ich das Gespräch auf jeden Fall machen. Danach kannst du ja immer noch Nein sagen.'],
      ['felix', 'Stimmt schon. Aber ehrlich gesagt: Ich würde dich voll vermissen. Wer würde dann meine Lieder kritisieren?'],
      ['amara', 'Haha, das könnte doch Lina übernehmen.'],
      ['nele', 'Und gerade jetzt, wo das Haus verkauft ist … Ohne dich wäre der Fuchsbau nicht mehr derselbe.'],
      ['kenji', 'Nele, das ist Amaras Entscheidung. Amara, du solltest an dich denken. Was wünschst du dir denn?'],
      ['amara', 'Wenn ich das nur wüsste! Mehr Verantwortung, ja. Aber ich hänge an Leipzig, an meinem Team und an euch.'],
      ['sofia', 'Dann bereite dich erst mal gut auf Mittwoch vor. Wir üben das Gespräch zusammen, okay?'],
    ], { task: 'Hör zu. Was sagen die Mitbewohner zu dem Angebot?', taskEn: 'Listen. What do the flatmates say about the job offer? Listen for advice with the Konjunktiv II: wenn ich du wäre, du solltest. Riesenschritt = huge step. an etwas hängen = to be attached to something.' }),
    audio('wg-interview', 'Folge 4: Das Videogespräch', [
      ['herrAdler', 'Guten Tag, Frau Owusu! Können Sie mich hören? Ihr Bild ist leider noch schwarz.'],
      ['amara', 'Oh, Entschuldigung! Einen Moment bitte … die Kamera war noch aus. So, sehen Sie mich jetzt?'],
      ['herrAdler', 'Ja, perfekt. Kein Problem, das passiert uns allen. Erzählen Sie doch mal: Was machen Sie zurzeit genau?'],
      ['amara', 'Ich bin seit einem Jahr Stationsleiterin in einem Krankenhaus in Leipzig. Ich leite ein Team von zweiundzwanzig Pflegekräften und kümmere mich auch um die Dienstpläne.'],
      ['herrAdler', 'Bei uns wären es fast achtzig Kolleginnen und Kollegen. Wie würden Sie mit Konflikten im Team umgehen?'],
      ['amara', 'Ich würde zuerst mit allen einzeln sprechen. Mir ist wichtig, dass jeder sagen kann, was ihn ärgert. Dann suchen wir zusammen eine Lösung.'],
      ['herrAdler', 'Das klingt gut. Haben Sie noch Fragen an uns?'],
      ['amara', 'Ja, zwei. Gäbe es die Möglichkeit, eine Weiterbildung im Management zu machen? Und wie genau sieht die Hilfe bei der Wohnungssuche aus?'],
      ['herrAdler', 'Die Kosten für die Weiterbildung würden wir übernehmen. Und unsere Personalabteilung hat eine Liste mit Wohnungen für neue Mitarbeiter.'],
      ['amara', 'Das freut mich zu hören. Ich muss aber ehrlich sein: Die Entscheidung fällt mir nicht leicht.'],
      ['herrAdler', 'Das verstehe ich gut. Lassen Sie sich Zeit. Es reicht, wenn Sie uns bis Ende März Bescheid geben. Wir würden uns sehr freuen.'],
      ['amara', 'Vielen Dank, Herr Adler. Ich melde mich bei Ihnen.'],
    ], { task: 'Hör das Videogespräch. Welche Fragen stellt Amara?', taskEn: 'Listen to the video interview. What questions does Amara ask at the end? Notice how she apologizes for the camera and how Herr Adler reacts.' }),
    mcq('wg-q1', 'Was bietet das Krankenhaus in Hamburg Amara an?', ['eine Stelle als Pflegedienstleitung', 'ein Praktikum', 'eine Stelle als Ärztin'], 0),
    mcq('wg-q2', 'Was rät Sofia?', ['Amara sollte sofort absagen.', 'Amara sollte das Gespräch auf jeden Fall machen.', 'Amara sollte zuerst mit Herrn Vogt sprechen.'], 1),
    mcq('wg-q3', 'Welches Problem gibt es am Anfang des Videogesprächs?', ['Der Ton funktioniert nicht.', 'Amaras Kamera ist aus.', 'Herr Adler kommt zu spät.'], 1),
    mcq('wg-q4', 'Was würde das Krankenhaus bezahlen?', ['eine Weiterbildung', 'die Wohnung', 'den Umzug'], 0),
    mcq('wg-q5', 'Bis wann soll Amara sich entscheiden?', ['bis Mittwoch', 'bis Ende Dezember', 'bis Ende März'], 2),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Pronominaladverbien: darauf, worauf', 'Präposition + Pronomen bei Personen', 'Verb mit Präposition + Nebensatz'], [
    grammar('g-1', 'Pronominaladverbien: worauf? darauf!', {
      intro: 'Bei **Sachen** benutzt man statt Präposition + Pronomen ein **Pronominaladverb**: Frage mit **wo(r)-**, Antwort mit **da(r)-**. Bei **Personen** bleibt es bei **Präposition + Pronomen**.',
      head: ['Präposition', 'Frage (Sache)', 'Antwort (Sache)', 'Frage und Antwort (Person)'],
      rows: [
        ['auf', '**Wor**auf wartest du?', 'Ich warte **dar**auf.', 'Auf wen? Auf **ihn**.'],
        ['an', '**Wor**an denkst du?', 'Ich denke **dar**an.', 'An wen? An **sie**.'],
        ['über', '**Wor**über freust du dich?', 'Ich freue mich **dar**über.', 'Über wen? Über **dich**.'],
        ['um', '**Wor**um kümmerst du dich?', 'Ich kümmere mich **dar**um.', 'Um wen? Um **sie**.'],
        ['für', '**Wo**für interessierst du dich?', 'Ich interessiere mich **da**für.', 'Für wen? Für **ihn**.'],
        ['von', '**Wo**von träumst du?', 'Ich träume **da**von.', 'Von wem? Von **ihr**.'],
        ['mit', '**Wo**mit fährst du?', 'Ich fahre **da**mit.', 'Mit wem? Mit **ihm**.'],
        ['nach', '**Wo**nach fragst du?', 'Ich frage **da**nach.', 'Nach wem? Nach **ihr**.'],
      ],
      notes: [
        'Beginnt die Präposition mit einem **Vokal** (a, ü, u …), kommt ein **-r-** dazu: *wo**r**auf, da**r**an, da**r**über*.',
        'Beginnt sie mit einem **Konsonanten**, gibt es kein -r-: *wofür, davon, damit, danach*.',
        'Personen: *Denkst du an **Felix**? Ja, ich denke oft **an ihn**.* (Nicht: *daran*.)',
      ],
      en: 'For things, German replaces preposition plus pronoun with a pronominal adverb: questions use wo(r)- (Worauf wartest du? What are you waiting for?), answers use da(r)- (Ich warte darauf. I am waiting for it.). Add -r- when the preposition starts with a vowel: worauf, daran. For people, keep the preposition plus a pronoun: Auf wen wartest du? Auf ihn.',
    }),
    grammar('g-2', 'Verb mit Präposition + Nebensatz', {
      intro: 'Nach einem Verb mit Präposition kann statt eines Nomens auch ein **dass-Satz** oder **zu + Infinitiv** kommen. Dann steht im Hauptsatz das **Pronominaladverb** (darauf, daran …).',
      head: ['mit Nomen', 'mit dass-Satz', 'mit zu + Infinitiv'],
      rows: [
        ['Ich freue mich **auf** deinen Besuch.', 'Ich freue mich **darauf**, **dass** du kommst.', 'Ich freue mich **darauf**, dich **zu sehen**.'],
        ['Amara wartet **auf** eine Antwort.', 'Amara wartet **darauf**, **dass** Hamburg anruft.', '–'],
        ['Sie denkt **an** einen Umzug.', 'Sie denkt **daran**, **dass** sie umziehen könnte.', 'Sie denkt **daran**, nach Hamburg **zu ziehen**.'],
        ['Er träumt **von** einer Tour.', 'Er träumt **davon**, **dass** die Band berühmt wird.', 'Er träumt **davon**, auf Tour **zu gehen**.'],
      ],
      notes: [
        'Das Pronominaladverb steht am Ende des Hauptsatzes, danach kommen **Komma** und Nebensatz.',
        'zu + Infinitiv geht nur, wenn beide Teile das **gleiche Subjekt** haben: *Ich freue mich darauf, (ich) dich zu sehen.*',
      ],
      en: 'Instead of a noun, a verb with a preposition can be followed by a dass-clause or by zu plus infinitive. Then the main clause uses the pronominal adverb as a placeholder: Ich freue mich darauf, dass du kommst (I am looking forward to you coming). Use zu plus infinitive only when the subject is the same in both parts: Ich freue mich darauf, dich zu sehen.',
    }),
    mcq('g-q1', '___ wartest du? – Auf den Bus.', ['Worauf', 'Wofür', 'Woran'], 0),
    mcq('g-q2', 'Denkst du oft an deine Mutter? – Ja, ich denke oft ___.', ['an sie', 'daran', 'darauf'], 0, { why: 'Bei Personen: Präposition + Pronomen, also an sie.' }),
    mcq('g-q3', 'Freust du dich auf den Urlaub? – Ja, ich freue mich sehr ___.', ['darauf', 'dafür', 'davon'], 0, { why: 'sich freuen auf + Sache: darauf.' }),
    mcq('g-q4', 'Amara denkt ___, nach Hamburg zu ziehen.', ['daran', 'darauf', 'damit'], 0, { why: 'denken an: daran.' }),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Strategie: Texte strukturieren', 'Aussprache: freundlich oder unfreundlich?', 'Prüfungstraining: Schreiben Teil 3'], [
    tip('u-tip', 'Strategie: Einen Text strukturieren', 'Ein guter Text hat drei Teile. Das hilft dem Leser und dir selbst.\n\n1. **Einleitung:** Warum schreibst du? *Ich schreibe Ihnen, weil … / In Ihrer Anzeige habe ich gelesen, dass …*\n2. **Hauptteil:** Deine Punkte, einer nach dem anderen. Verbinde sie mit **Konnektoren**: *zuerst, außerdem, ein weiterer Punkt ist, zum Beispiel, deshalb*.\n3. **Schluss:** Fass kurz zusammen oder bitte um eine Antwort: *Ich würde mich über eine Antwort freuen.*\n\nVergiss bei E-Mails nicht die **Anrede** am Anfang und den **Gruß** am Ende.'),
    sort('u-sort', ['Einleitung', 'Hauptteil', 'Schluss'], [['Ich schreibe Ihnen, weil …', 0], ['In Ihrer Anzeige habe ich gelesen, dass …', 0], ['Außerdem …', 1], ['Ein weiterer Punkt ist …', 1], ['Zum Beispiel …', 1], ['Zum Schluss möchte ich noch sagen, …', 2], ['Ich würde mich über eine Antwort freuen.', 2], ['Ich freue mich, von Ihnen zu hören.', 2]],
      { task: 'Wo passt der Satzanfang? Sortiere.', taskEn: 'Where does each phrase belong: introduction, main part or conclusion?' }),
    order('u-order', ['Außerdem', 'hätte', 'ich', 'gern', 'mehr Verantwortung.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence. After a connector like außerdem, the verb comes next.' }),
    audio('u-aus', 'Aussprache: freundlich oder unfreundlich?', [
      ['frauKlein', 'Hallo! Heute geht es um die Melodie. Derselbe Satz kann freundlich oder unfreundlich klingen. Das hängt von deiner Stimme ab, nicht nur von den Wörtern.'],
      ['frauKlein', 'Hör mal: Könnten Sie mir bitte helfen? Die Stimme ist weich und ruhig, sie geht am Ende nach oben. Das klingt freundlich.'],
      ['frauKlein', 'Und jetzt so: Könnten Sie mir bitte helfen! Kurz, hart und laut. Das klingt ungeduldig, fast unfreundlich.'],
      ['frauKlein', 'Noch ein Beispiel: Entschuldigung, darf ich mal vorbei? Freundlich, mit einem Lächeln. Und so klingt es genervt: Entschuldigung! Darf ich mal vorbei!'],
      ['frauKlein', 'Mein Tipp: Lächle beim Sprechen, auch am Telefon. Man hört das wirklich! Und sprich nicht zu schnell. Jetzt du: Sprich die Sätze freundlich nach.'],
    ], { task: 'Hör zu und sprich nach. Klingt der Satz freundlich oder unfreundlich?', taskEn: 'Listen and repeat. The same sentence can sound friendly or unfriendly, depending on the melody of your voice. Smile while you speak, even on the phone.' }),
    mcq('u-aus-q', 'Was macht einen Satz am Telefon freundlicher?', ['lächeln und nicht zu schnell sprechen', 'sehr laut sprechen', 'kurze und harte Sätze'], 0, { task: 'Was sagt Frau Klein?', taskEn: 'What does Frau Klein say?' }),
    sort('u-sort2', ['klingt freundlich', 'klingt unfreundlich'], [['Könnten Sie mir bitte kurz helfen?', 0], ['Würden Sie bitte die Tür schließen?', 0], ['Wären Sie so nett, mich zurückzurufen?', 0], ['Machen Sie die Tür zu!', 1], ['Helfen Sie mir jetzt!', 1], ['Rufen Sie halt zurück.', 1]],
      { task: 'Freundlich oder unfreundlich? Sortiere und sprich die Sätze laut.', taskEn: 'Friendly or unfriendly? Sort, then say the sentences out loud. The Konjunktiv II makes requests sound much more polite.' }),
    tip('u-pt-tip', 'Prüfungstraining: Schreiben Teil 3', 'In **Schreiben Teil 3** schreibst du eine kurze **formelle E-Mail** (etwa 40 Wörter), zum Beispiel an deinen Kursleiter oder deine Chefin. Oft musst du dich **entschuldigen**, weil du einen Termin nicht wahrnehmen kannst. Du hast 15 Minuten.\n\n1. Lies die Aufgabe genau: An **wen** schreibst du, und was musst du tun?\n2. Beginne mit der **Anrede**: *Sehr geehrte Frau …, / Sehr geehrter Herr …,*\n3. Entschuldige dich, nenne den **Grund** und mach einen **Vorschlag** (neuer Termin).\n4. Benutze den **Konjunktiv II**: *Wäre es möglich …? Hätten Sie …?* Das klingt höflich.\n5. Ende mit dem **Gruß**: *Mit freundlichen Grüßen* und deinem Namen. Und: immer **Sie**!'),
    text('u-pt-text', '**Aufgabe:** Dein Kursleiter, Herr Bauer, hat dich zu einem Gespräch über deine Prüfung eingeladen. Der Termin ist am Freitag um 10 Uhr. Du kannst nicht kommen.\n\nSchreib Herrn Bauer eine E-Mail. Entschuldige dich höflich und erkläre, warum du nicht kommen kannst. Schlag einen neuen Termin vor. Schreib etwa 40 Wörter.',
      { kicker: 'Prüfungstraining', title: 'Schreiben Teil 3', task: 'Lies die Aufgabe.', taskEn: 'Read the exam task: write a polite formal email to your course teacher, apologize, explain why you cannot come, and suggest a new appointment.' }),
    phrases('u-pt-phr', 'Redemittel für die E-Mail', {
      'Anrede': ['Sehr geehrter Herr Bauer,', 'Sehr geehrte Frau Schneider,'],
      'Sich entschuldigen': ['Leider kann ich am … nicht kommen.', 'Es tut mir sehr leid, aber …', 'Bitte entschuldigen Sie, dass ich den Termin absagen muss.'],
      'Den Grund nennen': ['Ich muss an diesem Tag …', 'Ich habe leider einen wichtigen Termin beim Arzt.', 'Mein Kind ist krank.'],
      'Einen Vorschlag machen': ['Wäre es möglich, den Termin zu verschieben?', 'Hätten Sie vielleicht am Montag Zeit?', 'Ich könnte auch am … kommen.'],
      'Schluss und Gruß': ['Vielen Dank für Ihr Verständnis.', 'Mit freundlichen Grüßen'],
    }),
    compose('u-pt-comp', 'Schreib die E-Mail an Herrn Bauer.', [
      ['Entschuldige dich.', 'Apologize and say you cannot come.', ['Leider', 'kann', 'ich', 'am Freitag', 'nicht', 'zu unserem Gespräch', 'kommen.']],
      ['Nenne den Grund.', 'Give the reason.', ['Ich', 'muss', 'an diesem Tag', 'zu einem Vorstellungsgespräch', 'nach Dresden', 'fahren.']],
      ['Mach einen Vorschlag.', 'Suggest a new appointment.', ['Wäre', 'es', 'möglich,', 'das Gespräch', 'auf Montag', 'zu verschieben?']],
    ], { task: 'Bau die Sätze für deine E-Mail.', taskEn: 'Build the three key sentences of your email: apology, reason, suggestion.' }),
    gap('u-pt-gap', ['Betreff: {{Absage}} des Termins am Freitag', '{{Sehr}} geehrter Herr Bauer,', 'es tut mir sehr {{leid}}, aber ich kann am Freitag nicht kommen.', 'Ich würde mich freuen, {{wenn}} wir einen neuen Termin finden.', 'Mit freundlichen {{Grüßen}}'],
      { bank: ['Absage', 'Sehr', 'leid', 'wenn', 'Grüßen'], task: 'Ergänze die E-Mail.', taskEn: 'Complete the frame of the formal email.' }),
    mcq('u-pt-q1', 'Welche Anrede passt in eine formelle E-Mail an Frau Schneider?', ['Hallo Schneider,', 'Sehr geehrte Frau Schneider,', 'Hi Frau Schneider!'], 1, { task: 'Was passt?', taskEn: 'Which greeting fits a formal email?' }),
    mcq('u-pt-q2', 'Welcher Satz passt NICHT in eine formelle Entschuldigung?', ['Vielen Dank für Ihr Verständnis.', 'Sorry, hab’s total vergessen!', 'Es tut mir sehr leid, dass ich absagen muss.'], 1, { task: 'Was passt nicht?', taskEn: 'Which sentence does NOT fit a formal apology?', why: '„Sorry, hab’s total vergessen!“ ist umgangssprachlich. In einer formellen E-Mail schreibt man ganze, höfliche Sätze.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 12,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['die Stelle', 'ein Arbeitsplatz in einer Firma', 'job, position'], ['sich bewerben (um)', 'eine Stelle haben wollen und Unterlagen schicken', 'to apply (for)'], ['die Bewerbung', 'Anschreiben, Lebenslauf und Zeugnisse', 'application'],
      ['der Lebenslauf', 'Tabelle mit Schule, Ausbildung und Berufen', 'CV, résumé'], ['das Vorstellungsgespräch', 'Gespräch mit der Firma nach der Bewerbung', 'job interview'], ['das Gehalt', 'Geld für die Arbeit, jeden Monat', 'salary'],
      ['die Teilzeit', 'weniger Stunden als normal arbeiten', 'part-time'], ['die Erfahrung', 'das, was man schon gemacht und gelernt hat', 'experience'], ['die Schicht', 'feste Arbeitszeit, z. B. Nachtdienst', 'shift'],
      ['die Weiterbildung', 'ein Kurs für den Beruf', 'further training'], ['zuverlässig', 'man kann sich auf die Person verlassen', 'reliable'], ['die Absage', 'die Antwort „Nein“', 'rejection, cancellation'],
    ]),
    phrases('w-phr', 'Bei der Arbeit', {
      'Höflich bitten': ['Könntest du mir kurz helfen?', 'Würden Sie mir die Unterlagen schicken?', 'Hätten Sie einen Moment Zeit?'],
      'Wünsche': ['Ich würde gern mehr Verantwortung übernehmen.', 'Ich wäre gern im Team von …', 'Wenn ich könnte, würde ich …'],
      'Ratschläge': ['Du solltest …', 'An deiner Stelle würde ich …', 'Es wäre besser, wenn …'],
    }),
    match('w-match', [['der Lebenslauf', 'eine Tabelle mit Schule, Ausbildung und Berufserfahrung'], ['das Anschreiben', 'ein Brief, in dem man erklärt, warum man die Stelle möchte'], ['das Bewerbungsfoto', 'ein freundliches Porträt für die Bewerbung'], ['das Arbeitszeugnis', 'Das schreibt der alte Arbeitgeber über deine Arbeit.'], ['die Stellenanzeige', 'Hier sucht eine Firma neue Mitarbeiter.'], ['der Arbeitsvertrag', 'Den unterschreibt man, wenn man die Stelle bekommt.'], ['das Headset', 'Damit telefoniert man, ohne das Handy zu halten.'], ['der Dienstplan', 'Hier steht, wer wann arbeiten muss.'], ['das Namensschild', 'Das trägt man an der Kleidung, damit alle den Namen sehen.']],
      { task: 'Was ist was?', taskEn: 'Match each word to its description.' }),
    gap('w-gap', ['Wenn Amara in Hamburg {{wäre}}, würden alle sie vermissen.', 'Felix wartet {{darauf}}, dass das Musikhaus antwortet.', 'Freust du dich auf Hamburg? – Ich weiß noch nicht, ob ich mich {{darauf}} freue.', '{{Könnten}} Sie mich bitte zurückrufen?'],
      { task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
    checklist('w-check', ['Ich kann Gespräche bei der Arbeit verstehen.', 'Ich kann mich entschuldigen und auf Entschuldigungen reagieren.', 'Ich kann mit dem Konjunktiv II höflich bitten, Wünsche äußern und Ratschläge geben.', 'Ich kann irreale Bedingungen ausdrücken: Wenn ich … hätte, würde ich …', 'Ich kann am Telefon nach Informationen fragen.', 'Ich kann Bewerbungstipps verstehen und über Bewerbungen sprechen.', 'Ich kann Verben mit Präposition und darauf, worauf benutzen.', 'Ich kann eine kurze formelle E-Mail mit Einleitung, Hauptteil und Schluss schreiben.']),
  ]);

export const b1k4: Chapter = {
  id: 'b1-k4', number: 4, title: 'Arbeitswelt', theme: 'Gespräche bei der Arbeit, Stellenanzeigen, Bewerbung, Telefonieren',
  grammar: 'Konjunktiv II (würde, wäre, hätte, könnte, müsste, sollte) für Bitten, Wünsche und Ratschläge. Irreale Bedingungssätze. Verben mit Präposition, Pronominaladverbien (darauf, worauf), Präposition + Pronomen bei Personen, Verb mit Präposition + Nebensatz.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['b1k4-sprint', 'b1k4-memory', 'b1k4-satzbau', 'b1k4-artikel'],
  exam: [
    x(1, mcq('x1', 'Wenn ich Zeit ___, würde ich dir helfen.', ['hätte', 'habe', 'hatte'], 0)),
    x(1, mcq('x2', '___ Sie mir bitte sagen, wo das Büro ist?', ['Könnten', 'Konnten', 'Kannst'], 0)),
    x(1, mcq('x3', 'Wenn ich du ___, würde ich mich bewerben.', ['wäre', 'war', 'bin'], 0)),
    x(3, gap('x4', ['Ich warte schon seit zehn Minuten {{auf}} den Bus.', 'Sie bewirbt sich {{um}} eine Stelle in Hamburg.', 'Denkst du noch {{an}} den Termin morgen?'], { task: 'Ergänze die Präposition.', taskEn: 'Fill in the preposition.' })),
    x(3, gap('x5', ['Worauf wartest du? – Ich warte {{darauf}}, dass er anruft.', '{{Wofür}} interessierst du dich? – Für Musik.', 'Denkst du an deinen Bruder? – Ja, ich denke oft an {{ihn}}.'], { task: 'Ergänze.', taskEn: 'Fill in the pronominal adverb or the pronoun.' })),
    x(1, mcq('x6', 'Warum ruft Frau Shah an?', ['Sie muss den Termin verschieben.', 'Herr Kaya hat die Stelle bekommen.', 'Sie braucht noch Zeugnisse.'], 0),
      audio('x-st1', 'Hören: Eine Nachricht auf der Mailbox', [
        ['priya', 'Guten Tag, Herr Kaya, hier spricht Priya Shah von der Personalabteilung der Firma Holzwerk in Berlin. Sie haben sich ja bei uns um die Stelle als Grafikdesigner beworben, und wir haben Sie für Donnerstag zum Vorstellungsgespräch eingeladen.'],
        ['priya', 'Leider muss ich den Termin verschieben, denn unser Chef ist an diesem Tag nicht da. Es tut mir wirklich leid. Wäre es für Sie möglich, am Montag um elf Uhr zu kommen? Das Gespräch würde dann bei uns im Büro in der Torstraße stattfinden, nicht online.'],
        ['priya', 'Bitte rufen Sie mich kurz zurück oder schreiben Sie mir eine E-Mail. Sie erreichen mich heute bis 16 Uhr. Vielen Dank und bis bald!'],
      ])),
    x(1, mcq('x7', 'Wo soll das Gespräch am Montag stattfinden? (Hörtext oben)', ['online', 'im Büro in der Torstraße', 'in einem Café'], 1)),
    x(1, mcq('x8', 'Wann muss man im Café vor allem arbeiten?', ['am Wochenende', 'nachts', 'montags'], 0),
      text('x-st2', '**Café Kaffeesatz, Leipzig-Gohlis**\nWir suchen ab sofort eine **Servicekraft (m/w/d)** in Teilzeit, 20 Stunden pro Woche, vor allem am Wochenende.\nWir wünschen uns: Erfahrung im Service, gute Laune und Deutsch auf B1-Niveau.\nWir bieten: 15 Euro pro Stunde, Trinkgeld und ein kostenloses Mittagessen.\nInteresse? Schicken Sie uns Ihren Lebenslauf per E-Mail. Fragen beantworten wir gern am Telefon: Mittwoch bis Freitag ab 14 Uhr.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Wann kann man im Café anrufen? (Text oben)', ['jeden Morgen', 'Mittwoch bis Freitag ab 14 Uhr', 'nur am Wochenende'], 1)),
    x(2, order('x10', ['Wenn ich mehr Geld hätte,', 'würde', 'ich', 'weniger', 'arbeiten.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' })),
    x(1, mcq('x11', 'Deine Kollegin sagt: „Entschuldigung, ich habe deine E-Mail vergessen.“ Was antwortest du freundlich?', ['Kein Problem, das kann passieren.', 'Das ist dein Problem.', 'Entschuldigung, das war mein Fehler.'], 0)),
    x(1, mcq('x12', 'Wofür interessierst du dich? – ___', ['Für Musik.', 'An Musik.', 'Auf Musik.'], 0)),
  ],
};

export const gamesB1k4: GameDef[] = [
  {
    id: 'b1k4-sprint', engine: 'sprint', title: 'Konjunktiv-Sprint', blurb: 'wäre, hätte, könnte: 60 Sekunden!', skill: 'Konjunktiv II', tone: 'mint', chapter: 4, emoji: '⚡',
    rules: 'Du siehst einen Infinitiv. Tippe auf die richtige Form im Konjunktiv II.', label: 'Konjunktiv II',
    items: [
      { q: 'haben → ich ___', a: 'hätte', wrong: ['hatte', 'habe'] }, { q: 'sein → ich ___', a: 'wäre', wrong: ['war', 'würde'] },
      { q: 'können → ich ___', a: 'könnte', wrong: ['konnte', 'kann'] }, { q: 'müssen → ich ___', a: 'müsste', wrong: ['musste', 'muss'] },
      { q: 'sollen → du ___', a: 'solltest', wrong: ['söllest', 'sollst'] }, { q: 'werden → ich ___', a: 'würde', wrong: ['wurde', 'werde'] },
      { q: 'dürfen → ich ___', a: 'dürfte', wrong: ['durfte', 'darf'] }, { q: 'wissen → ich ___', a: 'wüsste', wrong: ['wusste', 'weiß'] },
      { q: 'geben → es ___', a: 'gäbe', wrong: ['gab', 'gibt'] }, { q: 'sein → wir ___', a: 'wären', wrong: ['waren', 'sind'] },
      { q: 'haben → du ___', a: 'hättest', wrong: ['hattest', 'hast'] }, { q: 'können → Sie ___', a: 'könnten', wrong: ['konnten', 'können'] },
    ],
  },
  {
    id: 'b1k4-memory', engine: 'memory', title: 'Präpositionen-Memory', blurb: 'Verb und Frage: Finde die Paare.', skill: 'Verben mit Präposition', tone: 'lilac', chapter: 4, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Verb mit Präposition und die passende Frage mit wo(r)-.', kinds: ['Verb', 'Frage'],
    pairs: [['sich bewerben um', 'Worum bewirbst du dich?'], ['warten auf', 'Worauf wartest du?'], ['denken an', 'Woran denkst du?'], ['sich freuen über', 'Worüber freust du dich?'], ['sich interessieren für', 'Wofür interessierst du dich?'], ['träumen von', 'Wovon träumst du?'], ['fragen nach', 'Wonach fragst du?'], ['Angst haben vor', 'Wovor hast du Angst?'], ['sich ärgern über', 'Worüber ärgerst du dich?'], ['teilnehmen an', 'Woran nimmst du teil?']],
  },
  {
    id: 'b1k4-satzbau', engine: 'satzbau', title: 'Wenn-Baukasten', blurb: 'Konjunktiv II und darauf: Bau die Sätze!', skill: 'Konjunktiv II und Pronominaladverbien', tone: 'sky', chapter: 4, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Nach dem wenn-Satz kommt sofort das Verb.',
    sentences: [
      { parts: ['Wenn ich mehr Zeit hätte,', 'würde', 'ich', 'öfter', 'kochen.'], hint: 'irreale Bedingung' },
      { parts: ['Ich', 'würde', 'gern', 'in Teilzeit', 'arbeiten.'], hint: 'Wunsch mit würde' },
      { parts: ['Könnten', 'Sie', 'mir', 'bitte', 'helfen?'], hint: 'höfliche Bitte' },
      { parts: ['An deiner Stelle', 'würde', 'ich', 'das Angebot', 'annehmen.'], hint: 'Ratschlag' },
      { parts: ['Amara', 'wartet', 'auf', 'eine Antwort', 'aus Hamburg.'], hint: 'warten auf + Akkusativ' },
      { parts: ['Ich', 'freue mich', 'darauf,', 'dass', 'du kommst.'], hint: 'Pronominaladverb + dass' },
      { parts: ['Worauf', 'wartest', 'du', 'denn?'], hint: 'Frage mit wor-' },
      { parts: ['Felix', 'bewirbt sich', 'um', 'eine Stelle', 'im Musikhaus.'], hint: 'sich bewerben um' },
    ],
  },
  {
    id: 'b1k4-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Arbeit und Bewerbung.', skill: 'Artikel', tone: 'rose', chapter: 4, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('die Bewerbung, der Lebenslauf, das Anschreiben, die Stelle, das Vorstellungsgespräch, der Arbeitsvertrag, das Gehalt, die Schicht, der Dienstplan, das Zeugnis, die Teilzeit, der Betrieb, das Praktikum, die Erfahrung, der Kollege, das Team, die Absage, der Urlaub'),
  },
];
