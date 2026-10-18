import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// B1 Kapitel 7: Zwischenmenschliches. Beziehungen, Freundschaft, Konflikte, berühmte Paare, Fabeln.
// Grammar: Plusquamperfekt (hatte/war + Partizip II), temporale Nebensätze mit nachdem, bevor, bis, während, seit/seitdem.
// Aussprache: Intonation bei Modalpartikeln. Strategie: Texte gut betonen. Prüfungstraining: Hören Teil 2.

export const glossaryB1k7: Record<string, GlossaryEntry> = {
  Zwischenmenschliches: { de: 'Alles, was zwischen Menschen passiert: Freundschaft, Liebe, Streit.', en: 'interpersonal matters, relationships between people' },
  Beziehung: { de: 'Die Verbindung zwischen zwei Menschen, zum Beispiel in einer Freundschaft oder in einer Partnerschaft.', en: 'relationship' },
  Freundschaft: { de: 'Eine enge Beziehung zwischen Menschen, die sich mögen und vertrauen.', en: 'friendship' },
  Konflikt: { de: 'Ein Streit oder ein Problem zwischen Menschen, die verschiedene Wünsche haben.', en: 'conflict' },
  Vorwurf: { de: 'Man sagt jemandem, dass er etwas falsch gemacht hat.', en: 'reproach, accusation' },
  'Ich-Botschaft': { de: 'Ein Satz über die eigenen Gefühle, zum Beispiel: Ich fühle mich allein, wenn …', en: 'I-statement (talking about your own feelings instead of blaming)' },
  Kompromiss: { de: 'Eine Lösung, bei der beide Seiten ein bisschen nachgeben.', en: 'compromise' },
  Plusquamperfekt: { de: 'Eine Zeitform für etwas, das noch früher passiert ist als eine andere Sache in der Vergangenheit: Ich hatte gegessen.', en: 'past perfect tense' },
  Nebensatz: { de: 'Ein Satz, der mit einem Wort wie weil, dass oder nachdem beginnt. Das Verb steht am Ende.', en: 'subordinate clause' },
  Modalpartikel: { de: 'Ein kleines Wort wie doch, mal, ja oder eben. Es zeigt Gefühle oder macht einen Satz freundlicher.', en: 'modal particle (small word that adds tone)' },
  Fabel: { de: 'Eine kurze Geschichte, in der Tiere wie Menschen sprechen und handeln. Am Ende steht oft eine Lehre.', en: 'fable' },
  Moral: { de: 'Die Lehre am Ende einer Geschichte: Was soll man daraus lernen?', en: 'moral (of a story)' },
  vermitteln: { de: 'Zwischen zwei Personen helfen, die Streit haben, damit sie eine Lösung finden.', en: 'to mediate' },
  Mietertreffen: { de: 'Ein Treffen, bei dem die Mieterinnen und Mieter eines Hauses über ihre Probleme sprechen.', en: 'tenants’ meeting' },
  Bandprobe: { de: 'Die Zeit, in der eine Band zusammen übt.', en: 'band rehearsal' },
  zuverlässig: { de: 'Man kann sich auf diese Person verlassen. Sie macht, was sie verspricht.', en: 'reliable' },
  versöhnen: { de: 'Sich nach einem Streit wieder vertragen.', en: 'to make up, to reconcile' },
  Missverständnis: { de: 'Wenn jemand etwas falsch versteht.', en: 'misunderstanding' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Freunde, Streit und Versöhnung', 'butter', 8,
  ['das Kapitel kennenlernen', 'Wörter rund um Beziehungen benennen'], [
    overview('e-over', 'Kapitel 7: Zwischenmenschliches',
      'März in Leipzig. Im Fuchsbau ist die Stimmung schlecht: Nele und Felix haben Streit. In Kapitel 7 geht es um [[Zwischenmenschliches]]: um [[Freundschaft]], Liebe und [[Konflikt|Konflikte]]. Du liest, wie Menschen beste Freunde geworden sind, und erzählst mit dem [[Plusquamperfekt]], was vorher passiert war. Mit *nachdem, bevor, bis, während* und *seitdem* bringst du Ereignisse in die richtige Reihenfolge.\n\nIn einem Podcast erzählen zwei Freunde von ihrem großen Streit. Du lernst, wie man mit einer [[Ich-Botschaft]] statt mit einem [[Vorwurf]] spricht und einen [[Kompromiss]] findet. Außerdem stellst du ein berühmtes Paar vor, liest eine [[Fabel]] und übst, einen Text lebendig vorzulesen. In der WG müssen Lina und Sofia [[vermitteln]].',
      'This chapter is about relationships: friendship, love and conflict. You read stories about how people became friends and use the Plusquamperfekt (past perfect: hatte gegessen, war gegangen) for things that happened even earlier. You connect events in time with the conjunctions nachdem (after), bevor (before), bis (until), während (while) and seitdem (since). You learn to argue fairly with I-statements instead of reproaches and to find a compromise. You also present a famous couple, read a fable and practice reading a text aloud with good expression. In the story, Nele and Felix have a fight, and Lina and Sofia help them make up.',
      ['Freundschaftsgeschichten verstehen', 'zeitliche Abfolgen ausdrücken', 'über Konflikte sprechen', 'Konfliktgespräche führen', 'ein Paar vorstellen', 'über Fabeln sprechen', 'einen Text lebendig vorlesen']),
    match('e-match', [['die Freundschaft', '🤝'], ['der Streit', '😠'], ['die Versöhnung', '🫂'], ['die Liebe', '❤️'], ['die Eifersucht', '😒'], ['das Vertrauen', '🔐'], ['die Enttäuschung', '😞'], ['der Kompromiss', '⚖️']],
      { task: 'Welches Wort passt zum Bild?', taskEn: 'Match each word about relationships to the picture.' }),
    sort('e-sort', ['Das ist gut für eine Freundschaft.', 'Das schadet einer Freundschaft.'], [['ehrlich sein', 0], ['zuhören können', 0], ['zuverlässig sein', 0], ['sich entschuldigen', 0], ['Geheimnisse weitererzählen', 1], ['oft Termine absagen', 1], ['immer recht haben wollen', 1], ['eifersüchtig sein', 1]],
      { task: 'Was ist gut für eine Freundschaft, was schadet ihr?', taskEn: 'What is good for a friendship and what harms it? Sort.' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Wie wir Freunde wurden', 'mint', 15,
  ['Freundschaftsgeschichten verstehen', 'das Plusquamperfekt', 'nachdem'], [
    text('t1-text', `**Wie wir Freunde wurden: Drei Geschichten**

**Jule (31), Halle:** Meine beste Freundin Hanna habe ich im Kindergarten kennengelernt. Wir waren unzertrennlich. Als wir zehn waren, zog ihre Familie nach Hamburg. Nachdem sie umgezogen war, schrieben wir uns jahrelang Briefe. Später verloren wir uns leider aus den Augen. Vor fünf Jahren stand Hanna plötzlich vor meiner Tür. Sie hatte meine Adresse im Internet gefunden und war extra nach Halle gefahren. Seitdem telefonieren wir jeden Sonntag.

**Jonas (26), Leipzig:** Ich hatte gerade mein Studium angefangen und kannte in Leipzig niemanden. In der ersten Vorlesung saß Timo neben mir. Er hatte seinen Kugelschreiber vergessen, also lieh ich ihm meinen. Nach der Vorlesung gingen wir zusammen in die Mensa und redeten drei Stunden lang. Heute wohnen wir zusammen in einer WG. Den Kugelschreiber hat er übrigens nie zurückgegeben.

**Frau Baumann (68), Leipzig:** Meine Nachbarin Gisela und ich hatten uns dreißig Jahre lang nur im Treppenhaus gegrüßt. Erst nachdem mein Mann gestorben war, kamen wir ins Gespräch. Sie hatte mir einen Kuchen und eine Karte vor die Tür gestellt. Ich klingelte bei ihr, um mich zu bedanken, und blieb den ganzen Nachmittag. Seitdem gehen wir jeden Donnerstag zusammen schwimmen. Ich hätte nie gedacht, dass man mit fast siebzig noch eine beste Freundin findet.`,
      { kicker: 'Lesen', title: 'Aus einem Magazin', task: 'Lies die drei Geschichten. Wie haben sich die Freunde kennengelernt?', taskEn: 'Read the three stories from a magazine. How did the friends meet? Notice the forms with hatte or war + participle (hatte gefunden, war gestorben): they describe what had happened even earlier.' }),
    mcq('t1-q1', 'Wie hat Hanna Jule wiedergefunden?', ['durch einen alten Brief', 'Sie hatte ihre Adresse im Internet gefunden.', 'Sie haben sich zufällig in Hamburg getroffen.'], 1),
    mcq('t1-q2', 'Wie begann die Freundschaft von Jonas und Timo?', ['Jonas lieh Timo einen Kugelschreiber.', 'Sie wohnten im gleichen Haus.', 'Timo zeigte Jonas die Mensa.'], 0),
    mcq('t1-q3', 'Wann kamen Frau Baumann und Gisela ins Gespräch?', ['im Schwimmbad', 'vor dreißig Jahren', 'nachdem Frau Baumanns Mann gestorben war'], 2),
    grammar('t1-gram', 'Das Plusquamperfekt', {
      intro: 'Mit dem **Plusquamperfekt** erzählt man, was **vor** einem anderen Ereignis in der Vergangenheit passiert war. Man bildet es wie das Perfekt, aber mit **hatte** oder **war** (Präteritum) + **Partizip II**.',
      head: ['', 'mit haben', 'mit sein'],
      rows: [
        ['ich', '**hatte** … gefunden', '**war** … gefahren'],
        ['du', '**hattest** … gefunden', '**warst** … gefahren'],
        ['er/sie/es', '**hatte** … gefunden', '**war** … gefahren'],
        ['wir', '**hatten** … gefunden', '**waren** … gefahren'],
        ['ihr', '**hattet** … gefunden', '**wart** … gefahren'],
        ['sie/Sie', '**hatten** … gefunden', '**waren** … gefahren'],
      ],
      notes: [
        'Verben mit **sein** im Perfekt haben auch im Plusquamperfekt **war**: *Sie ist umgezogen → Sie **war** umgezogen.*',
        'Das Partizip steht am Ende: *Timo **hatte** seinen Kugelschreiber **vergessen**.*',
        'Zuerst: *Hanna hatte die Adresse gefunden* (Plusquamperfekt). Danach: *Sie stand vor der Tür* (Präteritum).',
      ],
      en: 'The Plusquamperfekt (past perfect) describes something that had already happened before another past event. Form it like the Perfekt, but put haben or sein in the Präteritum: hatte gefunden (had found), war gefahren (had driven). Verbs that use sein in the Perfekt also use war here. The participle goes to the end of the clause.',
    }),
    grammar('t1-nach', 'Nebensätze mit nachdem', {
      intro: '**nachdem** sagt: Zuerst passiert der Nebensatz, dann der Hauptsatz. Die Zeitformen sind verschieden: Der Nebensatz ist **eine Zeitstufe früher**.',
      head: ['Nebensatz mit nachdem', 'Hauptsatz', 'Beispiel'],
      rows: [
        ['Plusquamperfekt', 'Präteritum oder Perfekt', '**Nachdem** sie umgezogen **war**, **schrieben** wir uns Briefe.'],
        ['Perfekt', 'Präsens oder Futur', '**Nachdem** ich gegessen **habe**, **gehe** ich spazieren.'],
      ],
      notes: [
        'Im Nebensatz steht das konjugierte Verb (**hatte, war**) ganz am **Ende**.',
        'Steht der Nebensatz vorne, beginnt der Hauptsatz mit dem **Verb**: *Nachdem er gegessen hatte, **ging** er.*',
        'Im Gespräch hört man oft einfacher: *Erst hat er gegessen, dann ist er gegangen.*',
      ],
      en: 'nachdem (after) introduces a subordinate clause, so its conjugated verb goes to the end. The nachdem clause is one tense step earlier than the main clause: Plusquamperfekt with a Präteritum or Perfekt main clause (for the past), or Perfekt with a Präsens main clause (for now or the future). If the nachdem clause comes first, the main clause starts with its verb.',
    }),
    gap('t1-gap', ['Jonas {{hatte}} gerade sein Studium angefangen.', 'Timo hatte seinen Kugelschreiber {{vergessen}}. (vergessen)', 'Hannas Familie {{war}} nach Hamburg gezogen.', 'Nachdem wir {{gegessen}} hatten, gingen wir spazieren. (essen)', 'Gisela {{hatte}} einen Kuchen vor die Tür gestellt.', 'Hanna war extra nach Halle {{gefahren}}. (fahren)'],
      { task: 'Ergänze das Plusquamperfekt: hatte, war oder das Partizip.', taskEn: 'Complete the Plusquamperfekt: fill in hatte, war or the participle of the verb in brackets.' }),
    match('t1-match', [['ich habe gegessen', 'ich hatte gegessen'], ['sie ist gegangen', 'sie war gegangen'], ['wir haben gestritten', 'wir hatten gestritten'], ['du bist geblieben', 'du warst geblieben'], ['ihr habt gewartet', 'ihr hattet gewartet'], ['er ist eingeschlafen', 'er war eingeschlafen']],
      { task: 'Perfekt und Plusquamperfekt', taskEn: 'Match each Perfekt form to its Plusquamperfekt form.' }),
    sort('t1-sort', ['mit hatte', 'mit war'], [['gefunden', 0], ['vergessen', 0], ['angefangen', 0], ['gestritten', 0], ['umgezogen', 1], ['gestorben', 1], ['gekommen', 1], ['geblieben', 1]],
      { task: 'Plusquamperfekt mit hatte oder mit war?', taskEn: 'Does the participle go with hatte or with war in the Plusquamperfekt? Tip: verbs of movement and change (and bleiben) take war.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Als es richtig gekracht hat', 'sky', 15,
  ['einen Podcast über einen Streit verstehen', 'über Konflikte sprechen', 'bevor, bis, während, seitdem'], [
    audio('t2-audio', 'Hören: Podcast „Zwischen uns“', [
      ['moderatorin', 'Willkommen bei „Zwischen uns“, dem Podcast über Freundschaft. Heute sind Jule und Ben bei mir. Ihr seid seit der Schulzeit befreundet, aber vor zwei Jahren hat es richtig gekracht. Was ist passiert?'],
      ['jule', 'Wir hatten zusammen eine Reise nach Portugal geplant. Zwei Tage, bevor wir fliegen wollten, hat Ben abgesagt. Per Nachricht!'],
      ['ben', 'Ja, das war echt nicht okay. Ich hatte gerade einen neuen Job angefangen, und mein Chef wollte, dass ich bleibe. Ich habe mich halt nicht getraut, Nein zu sagen.'],
      ['moderatorin', 'Und dann?'],
      ['jule', 'Ich bin allein gefahren. Während ich in Lissabon war, hat Ben mir dreimal geschrieben. Ich habe nicht geantwortet. Ich war einfach zu enttäuscht.'],
      ['moderatorin', 'Wie lange habt ihr nicht miteinander gesprochen?'],
      ['ben', 'Fast ein halbes Jahr. Bis Jule Geburtstag hatte. Da habe ich allen Mut zusammengenommen und mit einem Kuchen vor ihrer Tür gestanden.'],
      ['jule', 'Und nachdem er sich richtig entschuldigt hatte, konnte ich ihm auch verzeihen. Wir haben stundenlang geredet.'],
      ['moderatorin', 'Was habt ihr aus dem Streit gelernt?'],
      ['ben', 'Dass man Probleme nicht per Nachricht löst. Seitdem rufen wir uns an, wenn etwas nicht stimmt.'],
      ['jule', 'Genau. Und die Reise nach Portugal haben wir letzten Sommer nachgeholt. Zusammen!'],
    ], { task: 'Hör den Podcast. Warum hatten Jule und Ben Streit, und wie haben sie sich versöhnt?', taskEn: 'Listen to the podcast. Why did Jule and Ben fall out, and how did they make up? Listen for bevor, während, bis, nachdem and seitdem. es hat gekracht = there was a big fight.' }),
    mcq('t2-q1', 'Wann hat Ben die Reise abgesagt?', ['zwei Wochen vor dem Flug', 'zwei Tage vor dem Flug', 'am Flughafen'], 1),
    mcq('t2-q2', 'Was hat Jule gemacht, während sie in Lissabon war?', ['Sie hat Ben angerufen.', 'Sie hat Ben einen Brief geschrieben.', 'Sie hat Bens Nachrichten nicht beantwortet.'], 2),
    mcq('t2-q3', 'Wie lange haben die beiden nicht miteinander gesprochen?', ['bis zu Jules Geburtstag', 'zwei Jahre', 'bis zum nächsten Sommer'], 0),
    grammar('t2-gram', 'Temporale Nebensätze: bevor, bis, während, seitdem', {
      intro: 'Diese Konjunktionen leiten einen **Nebensatz** ein. Das konjugierte Verb steht am **Ende**.',
      head: ['Konjunktion', 'Bedeutung', 'Beispiel'],
      rows: [
        ['bevor', 'Der Nebensatz passiert **später**.', 'Ben hat abgesagt, **bevor** sie geflogen **sind**.'],
        ['bis', 'Etwas dauert bis zu einem **Endpunkt**.', 'Sie sprachen nicht miteinander, **bis** Jule Geburtstag **hatte**.'],
        ['während', 'Zwei Dinge passieren **gleichzeitig**.', '**Während** Jule in Lissabon **war**, schrieb Ben ihr.'],
        ['seit / seitdem', 'Es hat in der Vergangenheit **begonnen** und dauert **noch an**.', '**Seitdem** sie sich versöhnt **haben**, rufen sie sich öfter an.'],
        ['nachdem', 'Der Nebensatz passiert **früher**.', '**Nachdem** er sich entschuldigt **hatte**, verzieh sie ihm.'],
      ],
      notes: [
        'Bei **bevor, bis, während** haben beide Sätze meistens die **gleiche** Zeitform.',
        '**seit** und **seitdem** bedeuten als Konjunktion das Gleiche. Der Hauptsatz steht meistens im **Präsens**.',
        '**während** kennst du schon als Präposition mit Genitiv: *während des Urlaubs*. Als Konjunktion kommt danach ein ganzer Satz: *während ich im Urlaub war*.',
        'Nebensatz vorne → im Hauptsatz kommt sofort das Verb: *Bevor Amara sich entscheidet, **möchte** sie …*',
      ],
      en: 'These time conjunctions start a subordinate clause, so the conjugated verb goes to the end. bevor = before (the clause happens later), bis = until (an end point), während = while (at the same time), seit or seitdem = since (started in the past and still true, main clause usually in the present), nachdem = after (the clause happens earlier). With bevor, bis and während, both clauses usually use the same tense. If the subordinate clause comes first, the main clause begins with its verb.',
    }),
    gap('t2-gap', ['Ben hat abgesagt, {{bevor}} sie nach Portugal fliegen wollten.', '{{Während}} Jule in Lissabon war, schrieb Ben ihr dreimal.', 'Sie sprachen nicht miteinander, {{bis}} Jule Geburtstag hatte.', '{{Nachdem}} Ben sich entschuldigt hatte, verzieh Jule ihm.', '{{Seitdem|Seit}} sie sich versöhnt haben, rufen sie sich öfter an.'],
      { bank: ['bevor', 'Während', 'bis', 'Nachdem', 'Seitdem'], task: 'Ergänze die passende Konjunktion.', taskEn: 'Fill in the right time conjunction.' }),
    match('t2-match', [['bevor', 'before'], ['nachdem', 'after'], ['bis', 'until'], ['während', 'while'], ['seitdem', 'since']],
      { task: 'Was bedeutet die Konjunktion?', taskEn: 'Match each German conjunction to its English meaning.' }),
    order('t2-order', ['Bevor', 'Felix', 'zur Probe', 'geht,', 'schreibt', 'er Nele', 'eine Nachricht.'], { task: 'Bau den Satz mit bevor.', taskEn: 'Build the sentence with bevor. The subordinate clause comes first, then the verb of the main clause.' }),
    compose('t2-comp', 'Erzähl von einem Streit mit einer Freundin oder einem Freund.', [
      ['Was war das Problem?', 'What was the problem?', ['Mein Freund', 'hatte', 'meinen Geburtstag', 'vergessen.']],
      ['Wie lange?', 'How long did it last?', ['Wir', 'sprachen', 'nicht miteinander,', 'bis er anrief.']],
      ['Wie ist es heute?', 'How is it today?', ['Seitdem', 'verstehen', 'wir uns', 'besser.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences about a fight with a friend.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Zusammen stark: berühmte Paare', 'lilac', 15,
  ['kurzen Texten Informationen zuordnen', 'ein Paar vorstellen', 'Prüfungstraining: Hören Teil 2'], [
    text('t3-text', `**Berühmte Paare: Zusammen stark**

**Clara und Robert Schumann:** Clara Wieck war schon als Kind eine bekannte Pianistin. Robert Schumann nahm bei ihrem Vater Klavierunterricht und wohnte eine Zeit lang bei der Familie. Später verliebten sich die beiden. Claras Vater war gegen die Beziehung, deshalb gingen sie vor Gericht. Erst nachdem das Gericht entschieden hatte, durften sie 1840 heiraten. Robert komponierte, Clara gab Konzerte in ganz Europa und bekam acht Kinder. Nachdem Robert 1856 gestorben war, spielte sie seine Musik noch viele Jahre lang auf ihren Konzerten.

**Marie und Pierre Curie:** Marie Skłodowska kam aus Warschau. Dort durften Frauen damals nicht an der Universität studieren, deshalb ging sie nach Paris. 1894 lernte sie den Physiker Pierre Curie kennen, ein Jahr später heirateten sie. Zusammen erforschten sie radioaktive Stoffe und bekamen 1903, gemeinsam mit Henri Becquerel, den Nobelpreis für Physik. Nachdem Pierre 1906 bei einem Unfall gestorben war, übernahm Marie seine Professur. 1911 bekam sie einen zweiten Nobelpreis, diesmal allein.

**Bertha und Carl Benz:** Carl Benz hatte 1886 eines der ersten Autos der Welt gebaut, aber kaum jemand interessierte sich dafür. Bertha hatte schon vor der Hochzeit Geld in seine Firma gesteckt. Im August 1888 nahm sie das Auto, ohne Carl etwas zu sagen, und fuhr mit ihren zwei Söhnen von Mannheim nach Pforzheim, über hundert Kilometer. Den Treibstoff kaufte sie unterwegs in einer Apotheke. Nach dieser Fahrt wurde das Auto endlich bekannt.`,
      { kicker: 'Landeskunde', title: 'Drei Paare', task: 'Lies die drei kurzen Texte über berühmte Paare.', taskEn: 'Read the three short texts about famous couples: the composer Robert Schumann and the pianist Clara Schumann, the scientists Marie and Pierre Curie, and the car pioneers Bertha and Carl Benz.' }),
    sort('t3-sort', ['Clara und Robert Schumann', 'Marie und Pierre Curie', 'Bertha und Carl Benz'], [['Der Vater der Frau war gegen die Hochzeit.', 0], ['Die Frau gab Konzerte in ganz Europa.', 0], ['Die Frau studierte im Ausland.', 1], ['Die Frau bekam zwei Nobelpreise.', 1], ['Die Frau machte eine Reise, ohne ihrem Mann etwas zu sagen.', 2], ['Die Frau hatte Geld in die Firma ihres Mannes gesteckt.', 2]],
      { task: 'Welche Information passt zu welchem Paar?', taskEn: 'Which piece of information belongs to which couple? Sort.' }),
    mcq('t3-q1', 'Warum gingen Clara und Robert vor Gericht?', ['Claras Vater war gegen die Hochzeit.', 'Robert hatte kein Geld.', 'Sie wollten sich trennen.'], 0),
    mcq('t3-q2', 'Was machte Marie Curie, nachdem Pierre gestorben war?', ['Sie ging zurück nach Warschau.', 'Sie übernahm seine Professur.', 'Sie hörte mit der Forschung auf.'], 1),
    phrases('t3-phr', 'Ein Paar vorstellen', {
      'Einleitung': ['Ich möchte euch heute ein berühmtes Paar vorstellen: …', 'Kennt ihr …? Die beiden waren …'],
      'Wie alles anfing': ['Sie lernten sich … kennen.', 'Sie verliebten sich, nachdem …', 'Bevor sie heirateten, …'],
      'Was das Paar besonders macht': ['Zusammen haben sie …', 'Besonders beeindruckend finde ich, dass …', 'Ohne sie / ihn wäre … nicht möglich gewesen.'],
    }),
    compose('t3-comp', 'Stell ein berühmtes Paar vor.', [
      ['Leite ein.', 'Introduce the couple.', ['Ich möchte', 'euch', 'ein berühmtes Paar', 'vorstellen.']],
      ['Sag, wie sie sich kennengelernt haben.', 'Say how they met.', ['Sie', 'lernten sich', '1894 in Paris', 'kennen.']],
      ['Sag, was danach passierte.', 'Say what happened afterward.', ['Nachdem', 'sie geheiratet hatten,', 'forschten', 'sie zusammen.']],
    ], { task: 'Bau die Sätze für deine Präsentation.', taskEn: 'Build the sentences for a short presentation about a famous couple.' }),
    tip('t3-pt-tip', 'Prüfungstraining: Hören Teil 2', 'In **Hören Teil 2** hörst du einen längeren Text von einer Person, zum Beispiel eine Führung, einen Vortrag oder eine Radiosendung. Du hörst ihn **einmal**. Dazu gibt es fünf Aufgaben mit **a, b** oder **c**.\n\n1. Du hast vorher Zeit: Lies alle Aufgaben genau und markiere die Schlüsselwörter.\n2. Die Aufgaben kommen in der **gleichen Reihenfolge** wie im Text.\n3. Oft kommen alle drei Lösungen im Text vor. Hör genau zu: Was ist **wirklich** die Antwort auf die Frage?\n4. Hast du eine Antwort verpasst? Nicht ärgern, sofort auf die nächste Aufgabe konzentrieren.'),
    audio('t3-pt-audio', 'Prüfungstraining: Wissen am Morgen', [
      ['moderatorin', 'Guten Morgen und willkommen bei „Wissen am Morgen“. Heute geht es um Freundschaft. Wie viele Freunde hat ein Mensch eigentlich? Der britische Forscher Robin Dunbar meint: Wir können ungefähr 150 Menschen wirklich kennen. Aber enge Freunde, mit denen wir alles teilen, haben die meisten nur etwa fünf.'],
      ['moderatorin', 'Wie wird aus einem Kollegen ein Freund? Gemeinsame Hobbys helfen, aber vor allem braucht man Zeit. Ein Forscher aus den USA hat berechnet: Bis aus einem Bekannten ein enger Freund wird, verbringt man etwa 200 Stunden zusammen.'],
      ['moderatorin', 'Interessant ist auch: Viele Menschen haben mit Mitte zwanzig die meisten Freunde. Danach wird der Kreis langsam kleiner, weil Arbeit und Familie viel Zeit kosten.'],
      ['moderatorin', 'Was hält eine Freundschaft zusammen? Nicht unbedingt tägliche Treffen. Viel wichtiger ist, dass man ehrlich ist und sich aufeinander verlassen kann. Und auch Streit gehört dazu: Freunde, die einen Konflikt zusammen gelöst haben, haben danach oft eine stärkere Beziehung als vorher.'],
      ['moderatorin', 'Unser Tipp für heute: Rufen Sie doch mal einen alten Freund an, mit dem Sie lange nicht gesprochen haben. Nach der Musik spricht meine Kollegin mit einer Psychologin über Freundschaften im Internet. Bleiben Sie dran!'],
    ], { task: 'Hör die Radiosendung. Du hörst den Text einmal. Wähle bei jeder Aufgabe a, b oder c.', taskEn: 'Exam practice: listen to the radio show once. For each question, choose a, b or c.' }),
    mcq('t3-pt-q1', 'Wie viele enge Freunde haben die meisten Menschen?', ['a) etwa 150', 'b) etwa fünf', 'c) etwa fünfzig'], 1, { why: 'Wir kennen etwa 150 Menschen, aber enge Freunde haben die meisten nur etwa fünf.' }),
    mcq('t3-pt-q2', 'Was braucht man vor allem, damit aus einem Bekannten ein Freund wird?', ['a) gemeinsame Hobbys', 'b) einen gemeinsamen Arbeitsplatz', 'c) viel gemeinsame Zeit'], 2, { why: 'Hobbys helfen, aber „vor allem braucht man Zeit“: etwa 200 Stunden.' }),
    mcq('t3-pt-q3', 'Wann haben viele Menschen die meisten Freunde?', ['a) mit Mitte zwanzig', 'b) in der Schulzeit', 'c) nach der Rente'], 0),
    mcq('t3-pt-q4', 'Was passiert oft, nachdem Freunde einen Konflikt gelöst haben?', ['a) Sie treffen sich seltener.', 'b) Ihre Beziehung wird stärker.', 'c) Sie streiten bald wieder.'], 1),
    mcq('t3-pt-q5', 'Was kommt nach der Musik?', ['a) ein Gespräch über Freundschaften im Internet', 'b) die Nachrichten', 'c) Anrufe von Hörern'], 0),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 7: Dicke Luft', 'rose', 12,
  ['einen Streit verstehen', 'Ich-Botschaften und Vorwürfe unterscheiden', 'einen Kompromiss finden'], [
    text('wg-intro', 'Mittwochabend im März, kurz vor elf. Nele sitzt allein in der Küche, vor ihr liegen Listen und Notizen vom Mietertreffen im „Fuchs & Yuzu“. Die Gruppe „Fuchsbau bleibt!“ hatte heute einen Brief an die Hausverwaltung geschrieben. Felix hatte versprochen, einen Flyer mitzubringen. Aber Felix war nicht gekommen, schon zum zweiten Mal. Jetzt hört Nele den Schlüssel in der Tür.',
      { kicker: 'Die Geschichte', en: 'Wednesday evening in March, shortly before eleven. Nele is sitting alone in the kitchen with lists and notes from the tenants’ meeting at Fuchs & Yuzu, Kenji’s restaurant. The group “Fuchsbau bleibt!” had written a letter to the property management today. Felix had promised to bring a flyer. But Felix had not come, for the second time. Now Nele hears the key in the door.' }),
    audio('wg-audio', 'Folge 7: Dicke Luft', [
      ['nele', 'Ach, da bist du ja. Das Treffen im „Fuchs & Yuzu“ ist seit einer Stunde vorbei.'],
      ['felix', 'Ich weiß, sorry. Die Probe hat länger gedauert. Wir müssen doch für das Festival üben.'],
      ['nele', 'Das hast du letzte Woche auch schon gesagt. Du hattest versprochen, den Flyer mitzubringen. Ich musste allen erklären, warum es keinen gibt.'],
      ['felix', 'Jetzt mach mal halblang. Es war doch nur ein Treffen.'],
      ['nele', 'Nein, es waren zwei! Immer ist dir die Band wichtiger als das Haus.'],
      ['felix', 'Das stimmt doch gar nicht! Du tust ja so, als ob mir alles egal wäre.'],
      ['nele', 'Ich fühle mich echt allein gelassen, wenn ich alles organisieren muss. Herr Lehmann hat auch nach dir gefragt.'],
      ['felix', 'Und ich fühle mich unter Druck gesetzt. Nie fragst du, wie es mir geht. Ich schlafe seit Wochen kaum, weil ich nachts noch Songs schreibe.'],
      ['nele', 'Das wusste ich nicht. Aber warum sagst du denn nichts?'],
      ['felix', 'Weil du eben immer so gestresst bist! Ach, ich habe keine Lust mehr auf diese Diskussion.'],
      ['nele', 'Super. Dann geh doch. Typisch Felix.'],
    ], { task: 'Hör zu. Warum streiten Nele und Felix?', taskEn: 'Listen. Why are Nele and Felix fighting? Listen for reproaches (immer, nie, du tust ja so) and I-statements (ich fühle mich …). Mach mal halblang = calm down, don’t exaggerate.' }),
    phrases('wg-phr', 'Konfliktgespräche führen', {
      'Ich-Botschaften: über eigene Gefühle sprechen': ['Ich fühle mich …, wenn …', 'Ich ärgere mich, weil …', 'Mir ist wichtig, dass …', 'Ich brauche …'],
      'Vorwürfe: besser vermeiden': ['Immer machst du …!', 'Nie hörst du mir zu!', 'Du tust ja so, als ob …', 'Typisch!'],
      'Einen Kompromiss finden': ['Was hältst du davon, wenn …?', 'Wie wäre es, wenn wir …?', 'Ich schlage vor, dass …', 'Damit kann ich leben.', 'Das ist fair.'],
      'Sich entschuldigen': ['Das tut mir leid.', 'Ich war unfair.', 'Das war nicht so gemeint.'],
    }),
    sort('wg-sort', ['Ich-Botschaft', 'Vorwurf'], [['Ich fühle mich allein gelassen.', 0], ['Mir ist wichtig, dass ich mich auf dich verlassen kann.', 0], ['Ich ärgere mich, weil der Flyer fehlt.', 0], ['Immer ist dir die Band wichtiger!', 1], ['Nie fragst du, wie es mir geht.', 1], ['Du tust ja so, als ob mir alles egal wäre.', 1]],
      { task: 'Ich-Botschaft oder Vorwurf? Sortiere.', taskEn: 'I-statement or reproach? Sort the sentences from the fight.' }),
    audio('wg-schlichten', 'Folge 7: Am nächsten Morgen', [
      ['sofia', 'So, ihr zwei. Seit gestern Abend redet ihr kein Wort miteinander. Das halte ich nicht aus.'],
      ['lina', 'Felix hat mir alles erzählt. Nele, darf ich mal was sagen? Ich glaube, ihr wollt eigentlich beide das Gleiche: dass das Haus bleibt.'],
      ['nele', 'Ja, schon. Aber ich kann nicht alles allein machen.'],
      ['sofia', 'Okay, dann machen wir es wie bei uns im Team: Jeder sagt, was er braucht. Ohne „immer“ und ohne „nie“. Nele, du fängst an.'],
      ['nele', 'Ich brauche, dass ich mich auf dich verlassen kann, Felix. Wenn du nicht kommen kannst, sag mir bitte vorher Bescheid.'],
      ['felix', 'Das ist fair. Und ich brauche ein bisschen Verständnis. Bis zum Festival proben wir jeden Mittwoch, genau dann, wenn ihr euch trefft. Das hätte ich dir früher sagen sollen. Tut mir leid.'],
      ['nele', 'Mir tut es auch leid. Ich war gestern echt unfair. Was hältst du davon, wenn ihr eure Probe auf Donnerstag legt? Oder du kommst nach der Probe, um 21 Uhr.'],
      ['felix', 'Gute Idee! Ich frage die Band, Donnerstag geht bestimmt. Und sonst komme ich um 21 Uhr nach. Den Flyer mache ich bis Montag, versprochen. Und vielleicht schreibe ich sogar einen Song über unser Haus.'],
      ['lina', 'Na also. Geht doch!'],
      ['amara', 'Guten Morgen! Oh, ihr redet wieder miteinander? Schön. Ich habe auch Neuigkeiten: Ich habe in Hamburg angerufen und um mehr Zeit gebeten. Sie warten bis zum Sommer auf meine Antwort.'],
      ['sofia', 'Und? Bist du erleichtert?'],
      ['amara', 'Sehr. Bevor ich mich entscheide, möchte ich wissen, was mit dem Haus passiert.'],
    ], { task: 'Hör zu. Wie helfen Lina und Sofia? Welchen Kompromiss finden Nele und Felix?', taskEn: 'Listen. How do Lina and Sofia help? What compromise do Nele and Felix find? Bescheid sagen = to let someone know.' }),
    mcq('wg-q1', 'Warum ist Nele sauer auf Felix?', ['Er hat zu laut Musik gemacht.', 'Er ist zweimal nicht zum Mietertreffen gekommen.', 'Er hat Herrn Lehmann geärgert.'], 1),
    mcq('wg-q2', 'Was hatte Felix versprochen?', ['einen Flyer mitzubringen', 'den Brief zu schreiben', 'Kuchen zu backen'], 0),
    mcq('wg-q3', 'Warum schläft Felix seit Wochen kaum?', ['Er hat Streit mit Lina.', 'Die Nachbarn sind zu laut.', 'Er schreibt nachts Songs.'], 2),
    mcq('wg-q4', 'Welchen Kompromiss finden Nele und Felix?', ['Felix verlässt die Band.', 'Die Band probt am Donnerstag, oder Felix kommt nach der Probe.', 'Nele kommt zu den Bandproben.'], 1),
    mcq('wg-q5', 'Was hat Amara gemacht?', ['Sie hat in Hamburg um mehr Zeit gebeten.', 'Sie hat die Stelle in Hamburg abgesagt.', 'Sie hat den Vertrag in Hamburg unterschrieben.'], 0),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Plusquamperfekt', 'temporale Nebensätze', 'seit, seitdem und während'], [
    grammar('g-1', 'Was war zuerst? Zeitformen mit nachdem', {
      intro: 'Erzählt man von zwei Ereignissen in der Vergangenheit, steht das **frühere** Ereignis im **Plusquamperfekt**.',
      head: ['1. zuerst (Plusquamperfekt)', '2. danach (Präteritum)'],
      rows: [
        ['Felix **hatte** den Flyer **vergessen**.', 'Nele **war** sauer.'],
        ['Hannas Familie **war** **umgezogen**.', 'Die Mädchen **schrieben** sich Briefe.'],
        ['**Nachdem** Ben sich entschuldigt **hatte**,', '**verzieh** Jule ihm.'],
      ],
      notes: ['Das Plusquamperfekt benutzt man nicht allein, sondern immer im Zusammenhang mit einem späteren Ereignis.', 'Bei **bevor** ist es umgekehrt: Der Nebensatz passiert **später**. Beide Sätze haben meistens die gleiche Zeitform: *Bevor sie flogen, sagte Ben ab.*'],
      en: 'When you talk about two past events, the earlier one goes in the Plusquamperfekt and the later one in the Präteritum (or Perfekt). The Plusquamperfekt is never used on its own: it always relates to a later event. With bevor, the subordinate clause is the later event, so you normally use the same tense in both clauses.',
    }),
    grammar('g-2', 'seit, seitdem und während', {
      head: ['Wort', 'Wortart', 'danach kommt', 'Beispiel'],
      rows: [
        ['seit', 'Präposition', 'Nomen im Dativ', '**Seit** dem Streit reden sie nicht mehr.'],
        ['seit / seitdem', 'Konjunktion', 'Nebensatz, Verb am Ende', '**Seitdem** sie sich versöhnt haben, **sind** sie glücklich.'],
        ['seitdem', 'Adverb', 'Verb auf Position 2', 'Sie haben sich versöhnt. **Seitdem** **telefonieren** sie oft.'],
        ['während', 'Präposition', 'Nomen im Genitiv', '**Während** der Probe ist Felix nicht erreichbar.'],
        ['während', 'Konjunktion', 'Nebensatz, Verb am Ende', '**Während** Felix **probt**, organisiert Nele das Treffen.'],
      ],
      notes: ['**seitdem** kann auch allein am Satzanfang stehen (= seit dieser Zeit). Dann folgt direkt das Verb.', 'Nach **seit/seitdem** benutzt man für etwas, das noch andauert, meistens das **Präsens**.'],
      en: 'seit is a preposition with the dative (seit dem Streit). seit or seitdem can also be a conjunction that starts a subordinate clause with the verb at the end. seitdem on its own can also be an adverb meaning "since then", followed directly by the verb. während is either a preposition with the genitive (während der Probe) or a conjunction meaning "while" (während Felix probt).',
    }),
    mcq('g-q1', 'Nachdem Felix nach Hause gekommen ___, stritten sie.', ['war', 'hatte', 'ist'], 0, { why: 'kommen bildet das Perfekt mit sein, also Plusquamperfekt mit war.' }),
    mcq('g-q2', 'Ich warte hier, ___ du fertig bist.', ['nachdem', 'bis', 'seitdem'], 1),
    mcq('g-q3', '___ der Probe hat Felix sein Handy aus.', ['Während', 'Bevor', 'Nachdem'], 0, { why: 'während + Genitiv: während der Probe.' }),
    mcq('g-q4', 'Sie haben sich versöhnt. Seitdem ___ sie sich jeden Sonntag.', ['sie treffen', 'treffen', 'getroffen'], 1, { why: 'seitdem als Adverb am Satzanfang: Das Verb kommt direkt danach.' }),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['über Fabeln sprechen', 'Strategie: Texte gut betonen', 'Aussprache: Intonation bei Modalpartikeln'], [
    tip('u-tip', 'Strategie: Texte gut betonen', 'Ein Text wird lebendig, wenn du ihn gut **betonst**. So geht es:\n\n1. Lies den Text zuerst still und markiere die **wichtigen Wörter** in jedem Satz. Diese Wörter sprichst du etwas lauter und langsamer.\n2. Mach nach einem Punkt eine kleine **Pause**, vor einer wichtigen Information auch.\n3. Gib den Figuren eine eigene **Stimme**: Der Fuchs spricht süß und freundlich, der Dachs brummig.\n4. Bei Fragen geht die Stimme meist nach oben, bei Aussagen nach unten.\n5. Üb laut, nimm dich mit dem Handy auf und hör dir zu.'),
    text('u-fabel', `**Der Fuchs und der Dachs**

Es war einmal ein Dachs, der hatte im Wald einen großen Bau gegraben. Er hatte viele Wochen lang gearbeitet, und nun war der Bau warm, trocken und gemütlich. Eines Abends im Herbst klopfte ein Fuchs an. „Lieber Dachs“, sagte er mit seiner schönsten Stimme, „draußen ist es so kalt. Darf ich nicht bei dir wohnen? Platz hast du ja genug.“ Der Dachs war gutmütig und ließ ihn herein.

Doch nachdem der Fuchs eingezogen war, änderte sich alles. Er schlief bis mittags, ließ Knochen herumliegen und half nie beim Graben. Während der Dachs arbeitete, lag der Fuchs in der Sonne. Eines Tages hatte der Dachs genug. „Immer muss ich alles allein machen!“, rief er. „Und du denkst nur an dich!“ Der Fuchs war beleidigt. „Ich bin eben kein Gräber“, sagte er. „Aber ich habe gute Ohren und sehe nachts besser als du.“

Drei Tage lang sprachen die beiden kein Wort. Dann setzten sie sich zusammen und redeten. Seitdem gräbt der Dachs am Tag, und der Fuchs hält in der Nacht Wache, bis die Sonne aufgeht. Und wenn ein Jäger kommt, warnt er seinen Freund rechtzeitig.

**Die Moral:** Wer zusammen wohnt, muss miteinander reden und nicht übereinander.`,
      { kicker: 'Eine Fabel', title: 'Der Fuchs und der Dachs', task: 'Lies die Fabel. Lies sie dann laut und betone gut.', taskEn: 'Read the fable. Then read it aloud with good expression, using the strategy above. Fun fact: in nature, foxes really do often live in burrows that badgers have dug.', en: 'A badger had dug a big, warm burrow. One cold autumn evening a fox asked, very sweetly, if he could live there too, and the kind badger let him in. But after the fox had moved in, he slept until noon, left bones lying around and never helped dig. One day the badger shouted: "I always have to do everything alone!" The offended fox answered that he was no digger, but he had good ears and saw better at night. For three days they did not speak. Then they sat down and talked. Since then the badger digs by day and the fox keeps watch at night and warns his friend when a hunter comes. The moral: people who live together must talk with each other, not about each other.' }),
    mcq('u-q1', 'Was hatte der Dachs gemacht, bevor der Fuchs kam?', ['Er hatte einen Bau gegraben.', 'Er hatte einen Jäger gesehen.', 'Er hatte den Fuchs eingeladen.'], 0),
    mcq('u-q2', 'Welche Lösung finden die beiden Tiere?', ['Der Fuchs zieht wieder aus.', 'Jeder macht das, was er gut kann.', 'Sie graben zusammen einen neuen Bau.'], 1),
    audio('u-aus', 'Aussprache: Modalpartikeln', [
      ['frauKlein', 'Modalpartikeln wie doch, mal, ja und eben sind kleine Wörter, aber sie verändern die Melodie und das Gefühl eines Satzes. Meistens sind sie unbetont: kurz und leise. Hör mal.'],
      ['frauKlein', 'Komm doch rein! Das klingt freundlich und einladend. Aber: Komm DOCH rein! Mit Betonung klingt es ungeduldig.'],
      ['frauKlein', 'Das ist ja toll! Hier ist ja ganz leise, die Stimme geht bei toll nach oben. So zeigst du Überraschung.'],
      ['frauKlein', 'Kannst du mal kurz helfen? Das kleine mal macht die Bitte weicher und höflicher.'],
      ['frauKlein', 'Das ist eben so. Hier fällt die Stimme am Ende nach unten. Das bedeutet: Da kann man nichts machen.'],
      ['frauKlein', 'Jetzt du! Sprich nach: Mach doch mal Pause! … Das ist ja super! … So ist das eben.'],
    ], { task: 'Hör zu und sprich nach. Achte auf die Melodie.', taskEn: 'Listen and repeat. Pay attention to the melody: modal particles like doch, mal, ja and eben are usually short and unstressed, but they change the tone of the sentence.' }),
    gap('u-gap', ['Komm {{doch|mal}} rein! Es ist kalt draußen.', 'Kannst du {{mal}} das Fenster aufmachen?', 'Das ist {{ja}} eine tolle Überraschung!', 'So ist das {{eben}}. Da kann man nichts machen.'],
      { bank: ['doch', 'mal', 'ja', 'eben'], task: 'Welche Modalpartikel passt?', taskEn: 'Which modal particle fits? doch makes an invitation friendly, mal softens a request, ja shows surprise, eben means "that’s just how it is".' }),
    order('u-order', ['Nachdem', 'der Fuchs', 'eingezogen', 'war,', 'änderte', 'sich', 'alles.'], { task: 'Bau den Satz mit nachdem.', taskEn: 'Build the sentence with nachdem. The verb of the main clause comes right after the comma.' }),
    gap('u-gap2', ['Der Dachs arbeitete. Danach war er müde. → Nachdem der Dachs gearbeitet {{hatte}}, war er müde.', 'Der Fuchs zog ein. Danach half er nie. → Nachdem der Fuchs eingezogen {{war}}, half er nie.', 'Sie redeten. Danach fanden sie eine Lösung. → Nachdem sie {{geredet}} hatten, fanden sie eine Lösung.'],
      { task: 'Verbinde die Sätze mit nachdem.', taskEn: 'Combine the two sentences with nachdem. The first event goes into the Plusquamperfekt.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 12,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['die Freundschaft', 'eine enge Beziehung zwischen Freunden', 'friendship'], ['die Beziehung', 'die Verbindung zwischen Menschen', 'relationship'], ['der Streit', 'wenn Menschen laut verschiedener Meinung sind', 'fight, argument'],
      ['sich versöhnen', 'nach einem Streit wieder Frieden machen', 'to make up'], ['der Vorwurf', 'man sagt: Du hast etwas falsch gemacht', 'reproach'], ['der Kompromiss', 'beide geben ein bisschen nach', 'compromise'],
      ['zuverlässig', 'man kann sich auf jemanden verlassen', 'reliable'], ['enttäuscht', 'traurig, weil etwas nicht so war wie erwartet', 'disappointed'], ['verzeihen', 'nicht mehr böse sein', 'to forgive'],
      ['sich verlieben', 'plötzlich Liebe für jemanden fühlen', 'to fall in love'], ['eifersüchtig', 'Angst haben, einen Menschen an andere zu verlieren', 'jealous'], ['das Vertrauen', 'man glaubt an einen anderen Menschen', 'trust'],
    ]),
    phrases('w-phr', 'Von Freundschaften erzählen', {
      'Wie alles anfing': ['Wir haben uns … kennengelernt.', 'Wir kennen uns seit …', 'Am Anfang konnte ich ihn / sie gar nicht leiden.'],
      'Was uns verbindet': ['Wir können über alles reden.', 'Auf sie / ihn kann ich mich immer verlassen.', 'Wir haben den gleichen Humor.'],
      'Höhen und Tiefen': ['Einmal hatten wir einen großen Streit, weil …', 'Nachdem wir geredet hatten, …', 'Seitdem sind wir noch bessere Freunde.'],
    }),
    match('w-match', [['das Klavier', 'Darauf spielte Clara Schumann.'], ['der Liebesbrief', 'Darin schreibt man, dass man jemanden liebt.'], ['das Fotoalbum', 'Darin klebt man Bilder von früher ein.'], ['die Gitarre', 'Dieses Instrument spielt Felix.'], ['der Kalender', 'Darin schreibt man seine Termine auf.'], ['das Geschenk', 'Das bekommt man zum Geburtstag.'], ['die Umarmung', 'So zeigt man einem Freund, dass man ihn gern hat.'], ['die Postkarte', 'Die schickt man aus dem Urlaub.'], ['der Kuchen', 'Den brachte Ben zu Jules Geburtstag mit.']],
      { task: 'Was ist was?', taskEn: 'Match each word to its description.' }),
    gap('w-gap', ['Nele und Felix hatten sich {{gestritten}}.', 'Lina und Sofia helfen, einen {{Kompromiss}} zu finden.', 'Felix ist nicht immer {{zuverlässig}}.', 'Am Ende {{versöhnen}} sich die beiden.'],
      { bank: ['gestritten', 'Kompromiss', 'zuverlässig', 'versöhnen'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
    checklist('w-check', ['Ich kann Geschichten über Freundschaften verstehen.', 'Ich kann mit dem Plusquamperfekt sagen, was vorher passiert war.', 'Ich kann Sätze mit nachdem, bevor, bis, während und seitdem bilden.', 'Ich kann in einem Streit Ich-Botschaften benutzen.', 'Ich kann einen Kompromiss vorschlagen.', 'Ich kann ein berühmtes Paar vorstellen.', 'Ich kann eine Fabel lebendig vorlesen.']),
  ]);

export const b1k7: Chapter = {
  id: 'b1-k7', number: 7, title: 'Zwischenmenschliches', theme: 'Beziehungen, Freundschaft, Konflikte, berühmte Paare, Fabeln',
  grammar: 'Plusquamperfekt (hatte/war + Partizip II). Temporale Nebensätze mit nachdem, bevor, bis, während, seit/seitdem.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['b1k7-sprint', 'b1k7-memory', 'b1k7-satzbau', 'b1k7-artikel'],
  exam: [
    x(1, mcq('x1', 'Nachdem er gegessen ___, ging er schlafen.', ['war', 'hatte', 'hat'], 1)),
    x(1, mcq('x2', '___ ich ins Bett gehe, putze ich mir die Zähne.', ['Nachdem', 'Seitdem', 'Bevor'], 2)),
    x(1, mcq('x3', 'Als ich ankam, war sie schon ___.', ['gegangen', 'gehen', 'ging'], 0)),
    x(3, gap('x4', ['Ich {{hatte}} den Termin leider vergessen.', 'Wir {{waren}} schon nach Hause gegangen.', 'Nachdem sie angekommen {{war}}, rief sie mich an.'], { task: 'Ergänze hatte oder war in der richtigen Form.', taskEn: 'Fill in the right form of hatte or war.' })),
    x(3, gap('x5', ['Warte hier, {{bis}} ich zurückkomme.', '{{Während}} Felix übt, kocht Nele.', '{{Seitdem|Seit}} wir uns ausgesprochen haben, verstehen wir uns besser.'], { task: 'Ergänze die Konjunktion.', taskEn: 'Fill in the conjunction.' })),
    x(1, mcq('x6', 'Warum ist Priya verärgert?', ['Jonas ist zu spät gekommen.', 'Jonas hat das Projekt allein präsentiert.', 'Jonas hat ihre Arbeit verloren.'], 1),
      audio('x-st1', 'Hören: Ärger im Büro', [
        ['priya', 'Jonas, hast du kurz Zeit? Ich muss mal etwas loswerden.'],
        ['jonas', 'Klar. Was ist denn los?'],
        ['priya', 'Gestern hast du unser Projekt beim Chef präsentiert. Allein. Ich hatte drei Wochen daran gearbeitet, und du hast nicht einmal meinen Namen gesagt.'],
        ['jonas', 'Oh. Ehrlich gesagt hatte ich gedacht, du hast an dem Tag frei.'],
        ['priya', 'Ich war doch im Büro. Du hättest mich ja fragen können. Ich habe mich echt übergangen gefühlt.'],
        ['jonas', 'Das verstehe ich. Das war nicht fair von mir. Tut mir leid.'],
        ['priya', 'Danke. Was hältst du davon, wenn wir dem Chef nächste Woche zusammen die Ergebnisse zeigen?'],
        ['jonas', 'Gute Idee. Und ich schreibe ihm heute noch, dass das Projekt von uns beiden ist.'],
      ])),
    x(1, mcq('x7', 'Was schlägt Priya vor? (Hörtext oben)', ['Jonas soll sich beim Chef entschuldigen.', 'Sie will das Projekt allein weitermachen.', 'Sie wollen die Ergebnisse zusammen zeigen.'], 2)),
    x(1, mcq('x8', 'Was kostet die Streitschlichtung?', ['nichts', 'zehn Euro pro Termin', 'Das hängt vom Konflikt ab.'], 0),
      text('x-st2', '**Streit mit den Nachbarn? Wir helfen!**\nLaute Musik, Müll im Hof, Ärger im Treppenhaus: Nicht jeder Konflikt muss vor Gericht enden. Die Streitschlichtung Plagwitz hilft kostenlos. Zwei ausgebildete Vermittlerinnen hören beiden Seiten zu und suchen mit Ihnen zusammen eine Lösung.\nSprechstunde: jeden zweiten Dienstag im Monat, 17 bis 19 Uhr, im Stadtteilladen Plagwitz.\nBitte vereinbaren Sie vorher telefonisch einen Termin. Wichtig: Beide Seiten müssen freiwillig kommen.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was muss man machen, bevor man zur Sprechstunde geht? (Text oben)', ['einen Brief an den Nachbarn schreiben', 'anrufen und einen Termin vereinbaren', 'zum Gericht gehen'], 1)),
    x(2, order('x10', ['Nachdem', 'sie', 'geredet', 'hatten,', 'versöhnten', 'sie sich.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' })),
    x(1, mcq('x11', 'Welcher Satz ist eine Ich-Botschaft?', ['Du kommst immer zu spät!', 'Ich ärgere mich, wenn ich lange warten muss.', 'Typisch, nie hörst du zu!'], 1)),
    x(1, mcq('x12', 'Du möchtest einen Kompromiss vorschlagen. Was sagst du?', ['Was hältst du davon, wenn wir uns abwechseln?', 'Das ist allein deine Schuld.', 'Mach doch, was du willst.'], 0)),
  ],
};

export const gamesB1k7: GameDef[] = [
  {
    id: 'b1k7-sprint', engine: 'sprint', title: 'hatte oder war?', blurb: 'Plusquamperfekt im Eiltempo: 60 Sekunden!', skill: 'Plusquamperfekt', tone: 'mint', chapter: 7, emoji: '⚡',
    rules: 'Du siehst einen Satz im Plusquamperfekt. Tippe auf die richtige Form von haben oder sein.', label: 'hatte oder war?',
    items: [
      { q: 'Er ___ den Termin vergessen.', a: 'hatte', wrong: ['war', 'hat'] }, { q: 'Sie ___ nach Hamburg gezogen.', a: 'war', wrong: ['hatte', 'ist'] },
      { q: 'Wir ___ schon gegessen.', a: 'hatten', wrong: ['waren', 'haben'] }, { q: 'Ich ___ zu spät gekommen.', a: 'war', wrong: ['hatte', 'bin'] },
      { q: 'Du ___ lange geschlafen.', a: 'hattest', wrong: ['warst', 'hast'] }, { q: 'Ihr ___ zu Hause geblieben.', a: 'wart', wrong: ['hattet', 'seid'] },
      { q: 'Nele und Felix ___ sich gestritten.', a: 'hatten', wrong: ['waren', 'haben'] }, { q: 'Das Baby ___ eingeschlafen.', a: 'war', wrong: ['hatte', 'ist'] },
      { q: 'Hanna ___ die Adresse gefunden.', a: 'hatte', wrong: ['war', 'hat'] }, { q: 'Was ___ passiert?', a: 'war', wrong: ['hatte', 'ist'] },
      { q: 'Ben ___ Jule angerufen.', a: 'hatte', wrong: ['war', 'hat'] }, { q: 'Der Fuchs ___ eingezogen.', a: 'war', wrong: ['hatte', 'ist'] },
    ],
  },
  {
    id: 'b1k7-memory', engine: 'memory', title: 'Partizip-Memory', blurb: 'Infinitiv und Partizip II: Finde die Paare.', skill: 'Partizip II', tone: 'lilac', chapter: 7, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Infinitiv und sein Partizip II.', kinds: ['Infinitiv', 'Partizip II'],
    pairs: [['streiten', 'gestritten'], ['verzeihen', 'verziehen'], ['versprechen', 'versprochen'], ['enttäuschen', 'enttäuscht'], ['kennenlernen', 'kennengelernt'], ['umziehen', 'umgezogen'], ['sterben', 'gestorben'], ['bleiben', 'geblieben'], ['finden', 'gefunden'], ['helfen', 'geholfen']],
  },
  {
    id: 'b1k7-satzbau', engine: 'satzbau', title: 'Zeit-Baukasten', blurb: 'nachdem, bevor, bis: Wohin gehört das Verb?', skill: 'temporale Nebensätze', tone: 'sky', chapter: 7, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Im Nebensatz steht das Verb am Ende, danach kommt sofort das Verb des Hauptsatzes.',
    sentences: [
      { parts: ['Nachdem', 'er', 'gegessen', 'hatte,', 'ging', 'er.'], hint: 'nachdem + Plusquamperfekt' },
      { parts: ['Bevor', 'Amara', 'sich', 'entscheidet,', 'wartet', 'sie.'], hint: 'bevor: Verb am Ende' },
      { parts: ['Während', 'Felix', 'probt,', 'schreibt', 'Nele den Brief.'], hint: 'während = gleichzeitig' },
      { parts: ['Wir', 'warten,', 'bis', 'alle', 'da', 'sind.'], hint: 'bis: Verb am Ende' },
      { parts: ['Seitdem', 'sie', 'reden,', 'geht', 'es', 'besser.'], hint: 'seitdem: Verb am Ende' },
      { parts: ['Hanna', 'hatte', 'die Adresse', 'im Internet', 'gefunden.'], hint: 'Plusquamperfekt: Partizip am Ende' },
      { parts: ['Nachdem', 'Pierre', 'gestorben', 'war,', 'übernahm', 'Marie', 'seine Professur.'], hint: 'war + Partizip' },
      { parts: ['Der Dachs', 'hatte', 'lange', 'gegraben.'], hint: 'hatte auf Position 2' },
    ],
  },
  {
    id: 'b1k7-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Freundschaft und Streit.', skill: 'Artikel', tone: 'rose', chapter: 7, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('die Freundschaft, der Streit, die Beziehung, das Vertrauen, der Kompromiss, die Versöhnung, der Vorwurf, das Missverständnis, die Eifersucht, der Konflikt, das Paar, die Fabel, der Fuchs, der Dachs, das Gefühl, die Enttäuschung, der Flyer, die Probe'),
  },
];
