import type { Chapter, Section } from './types';

// Kapitel 1: theme Zeit. Grammar: Tempusformen der Vergangenheit, Verben und Ergänzungen.
// All texts, dialogues and exercises are original.

const einstieg: Section = {
  id: 'einstieg',
  kind: 'einstieg',
  label: 'Einstieg',
  title: 'Eule oder Lerche?',
  goals: ['über Gewohnheiten sprechen', 'Vorlieben nennen und begründen'],
  minutes: 8,
  tone: 'butter',
  blocks: [
    {
      t: 'text', id: 'e-intro',
      body: 'Manche Menschen springen um sechs Uhr aus dem Bett. Andere werden erst um Mitternacht richtig wach. Bist du eine [[Eule]] oder eine [[Lerche]]? Planst du alles, oder bist du lieber [[spontan]]?',
    },
    {
      t: 'poll', id: 'e-poll',
      task: 'Was passt besser zu dir? Tippe auf eine Seite.',
      taskEn: 'Which one fits you better? Tap one side. There is no wrong answer.',
      pairs: [
        ['Nachtmensch', 'Frühaufsteher'],
        ['geplant', 'spontan'],
        ['pünktlich', 'immer fünf Minuten zu spät'],
        ['Winter', 'Sommer'],
        ['spazieren gehen', 'joggen'],
        ['Frühstück', 'Abendessen'],
      ],
    },
    {
      t: 'phrases', id: 'e-phr', title: 'So sagst du es',
      groups: [
        { label: 'Vorlieben nennen', items: ['Ich mag … lieber als …', 'Ich bin eher ein Nachtmensch.', 'Am liebsten …'] },
        { label: 'begründen', items: ['…, weil ich abends mehr Energie habe.', '…, denn morgens ist es ruhig.', 'Das liegt daran, dass …'] },
      ],
    },
    {
      t: 'match', id: 'e-match',
      task: 'Was gehört zusammen? Verbinde die Gegensätze.',
      taskEn: 'Match the opposites.',
      pairs: [
        ['der Nachtmensch', 'der Frühaufsteher'],
        ['geplant', 'spontan'],
        ['pünktlich', 'verspätet'],
        ['die Hektik', 'die Ruhe'],
        ['früher', 'heutzutage'],
      ],
    },
    {
      t: 'write', id: 'e-write',
      task: 'Stell dich vor.',
      taskEn: 'Introduce yourself in 3 to 4 sentences.',
      prompt: 'Schreib drei bis vier Sätze: Bist du Eule oder Lerche? Planst du gern? Begründe mit **weil** oder **denn**.',
      minWords: 25,
      hints: ['Ich bin eher …', 'Ich mag … lieber als …, weil …'],
      sample: 'Ich bin eher eine Eule, weil ich abends die besten Ideen habe. Morgens brauche ich zuerst einen Kaffee und viel Ruhe. Ich plane meine Woche gern, denn so vergesse ich nichts. Am Wochenende bin ich aber lieber spontan.',
    },
  ],
};

const modul1: Section = {
  id: 'modul-1',
  kind: 'modul',
  label: 'Modul 1',
  title: 'Früher war alles ruhiger, oder?',
  goals: ['einen Text über Stress früher und heute verstehen', 'über Vergangenes berichten', 'Grammatik: Tempusformen der Vergangenheit'],
  minutes: 25,
  tone: 'mint',
  blocks: [
    {
      t: 'text', id: 'm1-text', kicker: 'Lesen', title: 'Omas Backstube und mein Handy',
      task: 'Lies die Kolumne.',
      taskEn: 'Read the column. Tap the underlined words for an explanation.',
      body: `Letzten Dienstag kam meine Kollegin Nadja zwanzig Minuten zu spät ins Büro. „Frag nicht“, sagte sie nur. Ich fragte natürlich trotzdem. „Ich habe heute schon drei Mails beantwortet, zwei Brote geschmiert und einen Turnschuh gesucht“, erzählte sie. „Nachdem ich den Schuh endlich gefunden hatte, war die Bahn weg.“ Wir lachten beide. Der ganz normale [[Wahnsinn]].

Am Abend dachte ich an meine Großmutter Hedwig. Sie führte vierzig Jahre lang eine kleine Bäckerei. Jeden Morgen stand sie um halb drei auf und ging in die [[Backstube]]. Bis mittags verkaufte sie Brot, danach kümmerte sie sich um den [[Haushalt]], den Garten und vier Kinder. Urlaub machte sie nie. Wenn ich sie später nach dieser Zeit fragte, sagte sie: „Viel Arbeit war das. Aber um sieben war [[Feierabend]], und dann war wirklich Schluss.“

Und wir? Ich arbeite 38 Stunden pro Woche, habe eine Spülmaschine und sechs Wochen Urlaub. Trotzdem [[hetzen|hetze]] ich durch den Tag. Warum eigentlich? Oma musste nie [[gleichzeitig]] kochen und Nachrichten lesen. Niemand erwartete, dass sie um 22 Uhr noch [[erreichbar]] war. Sie [[erledigen|erledigte]] eine Sache nach der anderen. Ich erledige fünf Sachen halb.

Auch meine Freizeit ist voll: Sport, Freunde, Serien, ein Sprachkurs. Alles ist schön, und alles steht im Kalender. Manchmal habe ich Angst, etwas zu [[verpassen]]. Oma kannte dieses Gefühl nicht. War sie deshalb glücklicher? Ich weiß es nicht. Sie war müde, aber [[zufrieden]]. Ich bin ausgeschlafen, aber unruhig.

Tauschen möchte ich nicht. Aber ich habe etwas von ihr gelernt: Seit einem Monat lege ich das Handy um acht Uhr abends in die Küche. Feierabend.`,
    },
    {
      t: 'mcq', id: 'm1-q1', task: 'Hast du den Text verstanden?', taskEn: 'Check your understanding.',
      q: 'Warum kam Nadja zu spät?',
      options: ['Sie hatte verschlafen.', 'Sie hatte am Morgen zu viel zu tun und verpasste die Bahn.', 'Sie musste noch Brot kaufen.'],
      answer: 1, why: 'Sie hatte Mails beantwortet, Brote geschmiert und einen Schuh gesucht. Danach war die Bahn weg.',
    },
    {
      t: 'mcq', id: 'm1-q2',
      q: 'Was war in Hedwigs Alltag anders als heute?',
      options: ['Sie hatte mehr Freizeit.', 'Sie arbeitete weniger Stunden.', 'Nach der Arbeit war wirklich Schluss.'],
      answer: 2, why: '„Um sieben war Feierabend, und dann war wirklich Schluss.“',
    },
    {
      t: 'mcq', id: 'm1-q3',
      q: 'Was meint die Autorin mit „Ich erledige fünf Sachen halb“?',
      options: ['Sie macht viele Dinge gleichzeitig und keines richtig.', 'Sie arbeitet nur halbtags.', 'Sie hat nur fünf Aufgaben pro Tag.'],
      answer: 0,
    },
    {
      t: 'mcq', id: 'm1-q4',
      q: 'Möchte die Autorin so leben wie ihre Großmutter?',
      options: ['Ja, sie will auch eine Bäckerei führen.', 'Nein, aber sie hat eine Idee von ihr übernommen.', 'Das steht nicht im Text.'],
      answer: 1,
    },
    {
      t: 'grammar', id: 'm1-gram', title: 'Über Vergangenes berichten',
      intro: 'Im Deutschen gibt es drei Formen für die Vergangenheit. Welche du brauchst, hängt von der Situation ab.',
      head: ['Form', 'Wann?', 'Beispiel aus dem Text'],
      rows: [
        ['[[Perfekt]]', 'beim Sprechen, in Mails und Chats', 'Ich **habe** drei Mails **beantwortet**.'],
        ['[[Präteritum]]', 'in geschriebenen Texten: Artikel, Romane, Berichte. Bei haben, sein und Modalverben auch beim Sprechen.', 'Sie **führte** eine Bäckerei. Um sieben **war** Feierabend.'],
        ['[[Plusquamperfekt]]', 'für etwas, das vor einem anderen Ereignis in der Vergangenheit passiert ist', 'Nachdem ich den Schuh **gefunden hatte**, war die Bahn weg.'],
      ],
      notes: [
        '**Perfekt** = haben/sein im Präsens + Partizip II.',
        '**Plusquamperfekt** = haben/sein im Präteritum + Partizip II.',
        'Nach **nachdem** steht oft das Plusquamperfekt, im Hauptsatz dann Präteritum oder Perfekt.',
      ],
      en: 'Perfekt is the everyday spoken past. Präteritum is the written, storytelling past (but war, hatte, konnte, musste are normal in speech too). Plusquamperfekt is the "past before the past": something had already happened before another past event.',
    },
    {
      t: 'sort', id: 'm1-sort', task: 'Welche Zeitform ist das? Ordne zu.', taskEn: 'Which tense is it? Tap a sentence, then tap its category.',
      cats: ['Präteritum', 'Perfekt', 'Plusquamperfekt'],
      items: [
        { text: 'Jeden Morgen stand sie um halb drei auf.', cat: 0 },
        { text: 'Ich habe heute zwei Brote geschmiert.', cat: 1 },
        { text: 'Sie hatte den Schuh endlich gefunden.', cat: 2 },
        { text: 'Niemand erwartete das von ihr.', cat: 0 },
        { text: 'Wir sind zu spät gekommen.', cat: 1 },
        { text: 'Die Bahn war schon abgefahren.', cat: 2 },
      ],
    },
    {
      t: 'grammar', id: 'm1-gram2', title: 'Partizip II bilden',
      head: ['Verbtyp', 'regelmäßig', 'unregelmäßig'],
      rows: [
        ['ohne Präfix', 'machen → **ge**mach**t**', 'gehen → **ge**gang**en**'],
        ['trennbar', 'einkaufen → ein**ge**kauf**t**', 'aufstehen → auf**ge**stand**en**'],
        ['untrennbar (be-, ver-, er-, ent-, zer-)', 'erzählen → erzähl**t**', 'verstehen → verstand**en**'],
        ['auf -ieren', 'telefonieren → telefonier**t**', 'kein ge-!'],
      ],
      notes: ['Mischverben: kennen → gekannt, denken → gedacht, bringen → gebracht, wissen → gewusst.', 'Bewegung von A nach B oder Veränderung: Perfekt mit **sein** (ist gegangen, ist aufgewacht, ist geblieben).'],
      en: 'Regular participles end in -t, irregular ones in -en. Separable verbs put ge- in the middle. Verbs with be-, ver-, er-, ent-, zer- and verbs ending in -ieren take no ge- at all.',
    },
    {
      t: 'gap', id: 'm1-gap1', task: 'Ergänze das Partizip II.', taskEn: 'Fill in the past participle.',
      lines: [
        'Gestern habe ich bis Mitternacht {{gearbeitet}}. (arbeiten)',
        'Wir sind am Sonntag sehr früh {{aufgestanden}}. (aufstehen)',
        'Hast du den Termin schon {{vereinbart}}? (vereinbaren)',
        'Meine Oma hat nie viel über diese Zeit {{erzählt}}. (erzählen)',
        'Ich habe den ganzen Abend mit Paula {{telefoniert}}. (telefonieren)',
        'Daran habe ich gar nicht {{gedacht}}. (denken)',
      ],
    },
    {
      t: 'gap', id: 'm1-gap2', task: 'Was ist zuerst passiert? Ergänze im Plusquamperfekt.', taskEn: 'What happened first? Use the past perfect (hatte/war + participle).',
      lines: [
        'Nachdem Hedwig das Brot {{verkauft hatte}}, ging sie in den Garten. (verkaufen)',
        'Als ich am Bahnhof ankam, {{war}} der Zug schon {{abgefahren}}. (abfahren)',
        'Nachdem wir {{gegessen hatten}}, räumten wir die Küche auf. (essen)',
        'Er war müde, weil er schlecht {{geschlafen hatte}}. (schlafen)',
      ],
    },
    {
      t: 'audio', id: 'm1-audio', title: 'Hören: Opa, wie war das früher?',
      task: 'Lena fragt ihren Opa an der Nordsee. Hör zu.', taskEn: 'Lena asks her grandfather on the North Sea coast. Listen. He speaks slowly, with a northern accent.',
      note: 'Norddeutsch: **Moin** = Hallo (den ganzen Tag). **Deern** = Mädchen. **Klönschnack** = ein gemütliches Gespräch. **Dat** = das.',
      lines: [
        { speaker: 'lena', text: 'Moin, Opa! Sag mal, hattet ihr früher eigentlich auch Stress?' },
        { speaker: 'opaFiete', text: 'Moin, mien Deern. Stress? Dat Wort kannten wir gar nicht. Wir hatten Arbeit.' },
        { speaker: 'lena', text: 'Und wie sah dein Tag aus?' },
        { speaker: 'opaFiete', text: 'Ich bin um vier aufgestanden und mit dem Kutter rausgefahren. Mittags waren wir zurück. Dann haben wir die Netze repariert.' },
        { speaker: 'lena', text: 'Jeden Tag? Auch am Wochenende?' },
        { speaker: 'opaFiete', text: 'Sonntags nicht. Sonntags gab es Kuchen und Klönschnack. Da hat keiner gearbeitet.' },
        { speaker: 'lena', text: 'Und wenn du mal keine Lust hattest?' },
        { speaker: 'opaFiete', text: 'Die Fische haben nicht gefragt, ob ich Lust hatte. Aber weißt du was? Abends war ich fertig mit dem Tag. Du guckst abends noch drei Stunden in dein Telefon.' },
        { speaker: 'lena', text: 'Okay, Punkt für dich.' },
      ],
    },
    {
      t: 'mcq', id: 'm1-aq1', q: 'Was machte Opa Fiete am Nachmittag?',
      options: ['Er fuhr mit dem Kutter aufs Meer.', 'Er reparierte die Netze.', 'Er aß Kuchen.'], answer: 1,
    },
    {
      t: 'mcq', id: 'm1-aq2', q: 'Was will Opa Fiete mit dem letzten Satz sagen?',
      options: ['Lena soll ihm das Telefon erklären.', 'Früher war die Arbeit leichter.', 'Lena hat auch abends keine richtige Ruhe.'], answer: 2,
    },
    {
      t: 'write', id: 'm1-write', task: 'Und bei dir?', taskEn: 'Write about your own life 10 years ago. Use Präteritum for war/hatte and Perfekt for the rest.',
      prompt: 'Wie war dein Leben vor zehn Jahren? Schreib fünf Sätze. Benutze **war** und **hatte** im Präteritum, die anderen Verben im Perfekt.',
      minWords: 40,
      hints: ['Vor zehn Jahren war ich …', 'Damals hatte ich …', 'Ich habe oft …'],
      sample: 'Vor zehn Jahren war ich noch Studentin und hatte sehr wenig Geld. Ich habe in einer kleinen Wohnung mit zwei Freundinnen gewohnt. Abends haben wir oft zusammen gekocht und lange geredet. Am Wochenende bin ich mit dem Fahrrad zu meinen Eltern gefahren. Ich hatte kein Smartphone, aber ich hatte viel mehr Zeit.',
    },
  ],
};

const modul2: Section = {
  id: 'modul-2',
  kind: 'modul',
  label: 'Modul 2',
  title: 'Noch fünf Minuten',
  goals: ['einen gesprochenen Text mit Rhythmus verstehen', 'über Werte und Haltungen sprechen'],
  minutes: 20,
  tone: 'sky',
  blocks: [
    {
      t: 'text', id: 'm2-intro',
      body: 'Jeden Tag dasselbe: Der [[Wecker]] klingelt, du stehst auf, putzt Zähne, kochst Kaffee, checkst Nachrichten. Und wenn du einfach liegen bleibst? Mira aus Leipzig hat darüber einen Text für die Bühne geschrieben.',
    },
    {
      t: 'audio', id: 'm2-audio', title: 'Hören: Noch fünf Minuten (Poetry-Slam)',
      task: 'Hör den Text zuerst, ohne mitzulesen. Was will Mira nicht machen?', taskEn: 'Listen first without reading. What does Mira not want to do? A poetry slam is spoken with rhythm, like a song without music.',
      lines: [
        { speaker: 'mira', text: 'Der Wecker schreit. Ich schreie nicht zurück. Ich drücke nur die Schlummertaste, mein kleines Stück vom Glück.' },
        { speaker: 'mira', text: 'Draußen ruft die Pflicht: Steh auf, zieh dich an, sei fleißig, sei schnell, sei pünktlich, sei dran!' },
        { speaker: 'mira', text: 'Die Mails wollen Antwort. Der Chef will Zahlen. Die Bahn will, dass ich renne. Ich will gar nichts. Ich will malen.' },
        { speaker: 'mira', text: 'Noch fünf Minuten. Nur noch fünf. Die Welt dreht sich auch ohne mich, das hab ich nachgeprüft.' },
        { speaker: 'mira', text: 'Mein Nachbar sagt: Wer rastet, der rostet. Ich sage: Wer hetzt, weiß nicht, was das kostet.' },
        { speaker: 'mira', text: 'Noch fünf Minuten. Nur noch fünf. Und dann, ganz vielleicht, steh ich auf. Oder ich bleibe und schlafe aus.' },
      ],
    },
    {
      t: 'mcq', id: 'm2-q1', task: 'Fragen zum Hörtext', taskEn: 'Questions about the audio.',
      q: 'Was macht Mira, als der Wecker klingelt?', options: ['Sie steht sofort auf.', 'Sie drückt die Schlummertaste.', 'Sie wirft den Wecker weg.'], answer: 1,
    },
    {
      t: 'mcq', id: 'm2-q2', q: 'Welche Gründe nennt sie für das Liegenbleiben?',
      options: ['Sie ist krank.', 'Sie hat Urlaub.', 'Alle wollen etwas von ihr, und die Welt funktioniert auch ohne sie.'], answer: 2,
    },
    {
      t: 'mcq', id: 'm2-q3', q: '„Wer rastet, der rostet“ bedeutet:',
      options: ['Wer Pausen macht, wird alt und unbeweglich.', 'Wer schläft, verliert Geld.', 'Wer zu Hause bleibt, hat Ruhe.'], answer: 0,
      why: 'Das Sprichwort sagt: Man soll aktiv bleiben. rasten = Pause machen, rosten = wie altes Metall kaputtgehen.',
    },
    {
      t: 'text', id: 'm2-werte', kicker: 'Mediation', title: 'Was denken die Leute?',
      body: 'Stell dir vor, jemand lebt wirklich so wie Mira im Text. In vielen deutschsprachigen Regionen gelten Pünktlichkeit und [[Fleiß]] als wichtige [[Wert|Werte]]. Wer oft liegen bleibt, gilt schnell als [[faul]]. Gleichzeitig sprechen heute viele Menschen über Erholung und sagen: Pausen sind kein Luxus. Wie ist das in deinem Land? Was ist dort [[selbstverständlich]]?',
    },
    {
      t: 'phrases', id: 'm2-phr', title: 'Über Werte und Haltungen sprechen',
      groups: [
        { label: 'Was normal ist', items: ['Bei uns in … ist es normal, dass …', 'Für viele Leute ist … etwas Selbstverständliches.', 'Viele Leute finden es wichtig, dass …'] },
        { label: 'Was erwartet wird', items: ['Die meisten Leute erwarten, dass …', 'Manche Leute glauben, dass man … muss, um erfolgreich zu sein.', 'Wer …, gilt schnell als …'] },
      ],
    },
    {
      t: 'gap', id: 'm2-gap', task: 'Ergänze die Redemittel.', taskEn: 'Complete the phrases with words from the box.',
      bank: ['normal', 'erwarten', 'wichtig', 'gilt', 'Selbstverständliches'],
      lines: [
        'Bei uns ist es {{normal}}, dass man zu einer Party eine halbe Stunde später kommt.',
        'Viele Leute finden es {{wichtig}}, dass die Familie am Sonntag zusammen isst.',
        'Die meisten Chefs {{erwarten}}, dass man pünktlich ist.',
        'Für meine Eltern ist frühes Aufstehen etwas {{Selbstverständliches}}.',
        'Wer am Wochenende arbeitet, {{gilt}} bei uns als fleißig.',
      ],
    },
    {
      t: 'order', id: 'm2-order', task: 'Bau den Satz.', taskEn: 'Put the words in order.',
      words: ['dass', 'ist', 'normal,', 'Bei uns', 'es', 'man', 'pünktlich', 'kommt.'],
      answers: ['Bei uns ist es normal, dass man pünktlich kommt.'],
    },
    { t: 'video', id: 'm2-video', title: 'Video zum Thema Alltag', source: 'Videoplatz für dieses Modul', url: null },
    {
      t: 'write', id: 'm2-write', task: 'Stell ein Lied vor.', taskEn: 'Present a song from your country about time or everyday life.',
      prompt: 'Kennst du ein Lied zum Thema **Zeit** oder **Alltag** aus deinem Land? Stell es kurz vor: Wer singt? Worum geht es? Wie findest du es?',
      minWords: 40,
      hints: ['Ich möchte das Lied … von … vorstellen.', 'In dem Lied geht es um …', 'Ich finde den Text …, weil …'],
      sample: 'Ich möchte das Lied „Kal Ho Naa Ho“ aus Indien vorstellen. Es ist aus einem Film von 2003. In dem Lied geht es darum, dass man jeden Moment genießen soll, weil niemand weiß, was morgen kommt. Die Melodie ist ruhig und ein bisschen traurig. Ich finde den Text schön, weil er mich daran erinnert, nicht alles auf später zu verschieben.',
    },
  ],
};

const modul3: Section = {
  id: 'modul-3',
  kind: 'modul',
  label: 'Modul 3',
  title: 'Wo ist die Zeit geblieben?',
  goals: ['einen Sachtext über Zeitempfinden verstehen', 'Notizen machen und zusammenfassen', 'Grammatik: Verben und Ergänzungen'],
  minutes: 25,
  tone: 'lilac',
  blocks: [
    {
      t: 'phrases', id: 'm3-sprache', title: 'Sprache im Alltag: Zeit',
      groups: [{ label: 'Das sagt man so', items: ['Kommt Zeit, kommt Rat.', 'Zeit ist Geld.', 'Besser spät als nie.', 'Die Zeit heilt alle Wunden.', 'Alles zu seiner Zeit.'] }],
    },
    {
      t: 'match', id: 'm3-match', task: 'Was bedeuten die Nomen? Verbinde.', taskEn: 'What do the nouns mean? Match each with its explanation.',
      pairs: [
        ['der Vorgang', 'etwas, das Schritt für Schritt abläuft'],
        ['das Sinnesorgan', 'zum Beispiel Auge, Ohr oder Nase'],
        ['der Rhythmus', 'etwas wiederholt sich regelmäßig'],
        ['das Gehirn', 'das Organ, mit dem wir denken'],
        ['die Schichtarbeit', 'Arbeit zu wechselnden Zeiten'],
      ],
    },
    {
      t: 'text', id: 'm3-textA', kicker: 'Lesen, Text A', title: 'Die Uhr in uns',
      task: 'Lies Text A und mach dir Notizen.', taskEn: 'Read text A and take notes. You will summarize it afterwards.',
      body: `Für das Sehen haben wir Augen, für das Hören Ohren. Für die Zeit gibt es kein [[Sinnesorgan]]. Trotzdem spüren wir sie. Der Grund ist unsere [[innere Uhr]]: ein biologischer Rhythmus, über den jeder Mensch [[verfügen|verfügt]]. Er steuert viele [[Vorgang|Vorgänge]] im Körper, zum Beispiel wann wir müde werden und wann wir Hunger bekommen.

Diese Uhr läuft nicht bei allen gleich. Forschende unterscheiden verschiedene [[Chronotyp|Chronotypen]]. Die „Lerchen“ sind früh wach und haben vormittags die meiste Energie. Abends werden sie schnell müde, und Nachtarbeit schadet ihrer Gesundheit besonders. Die „Eulen“ kommen morgens schwer aus dem Bett. Der frühe Schulbeginn gefällt ihnen gar nicht. Dafür können sie sich abends lange auf eine Aufgabe konzentrieren.

Die meisten Menschen liegen irgendwo dazwischen. Der Chronotyp ist zum großen Teil angeboren, aber er ändert sich im Lauf des Lebens: Jugendliche sind oft Eulen, ältere Menschen eher Lerchen. Wer gegen seine innere Uhr lebt, etwa bei [[Schichtarbeit]], fühlt sich häufig so, als hätte er ständig Jetlag.`,
    },
    {
      t: 'text', id: 'm3-textB', kicker: 'Lesen, Text B', title: 'Warum die Ferien so schnell vorbei sind',
      body: `Eine Stunde im Wartezimmer kann endlos sein. Ein Abend mit Freunden ist dagegen vorbei, bevor er richtig angefangen hat. Wie wir Zeit wahrnehmen, ist sehr subjektiv. Unser [[Zeitempfinden]] hängt davon ab, wie viel Neues unser [[Gehirn]] [[verarbeiten]] muss.

Bekanntes hilft dem Gehirn enorm: Es ordnet solche Informationen schnell ein und speichert kaum etwas ab. Neues braucht mehr Arbeit. Deshalb kommt es zu einem [[Widerspruch]]. Wenn wir uns [[langweilen|sichLangweilen]], [[vergehen|vergeht]] die Zeit im Moment langsam. Im [[Rückblick]] scheint sie aber kurz, weil nichts im Gedächtnis geblieben ist. Wenn wir viel Neues erleben, fliegt die Zeit. Später erinnern wir uns an viele Einzelheiten, und der Zeitraum fühlt sich lang an.

Das erklärt auch, warum die Jahre scheinbar immer schneller vergehen. Kindern begegnet jeden Tag etwas Unbekanntes. Erwachsenen fehlt dieses Neue oft, denn der Alltag stiehlt ihnen die Überraschungen. Wer das ändern will, braucht keinen teuren Urlaub. Ein neuer Weg zur Arbeit oder ein unbekanntes Rezept reicht schon.`,
    },
    {
      t: 'tip', id: 'm3-strat', title: 'Strategie: Notizen machen',
      body: 'Markiere zuerst die wichtigen Informationen. Notiere sie dann sehr kurz: ohne Artikel und Pronomen, mit Symbolen wie **+**, **→** oder **≠**.\n\nBeispiel: *Zeitempfinden → subjektiv, z. B. Wartezimmer ≠ Abend mit Freunden*',
    },
    {
      t: 'mcq', id: 'm3-q1', task: 'Welche Antwort passt?', taskEn: 'Choose the correct answer.',
      q: 'Text A: Warum können wir Zeit wahrnehmen, obwohl wir kein Sinnesorgan dafür haben?',
      options: ['Weil wir eine innere Uhr haben.', 'Weil wir auf die Uhr schauen.', 'Weil wir die Sonne sehen.'], answer: 0,
    },
    {
      t: 'mcq', id: 'm3-q2', q: 'Text A: Was ist richtig?',
      options: ['Der Chronotyp bleibt das ganze Leben gleich.', 'Jugendliche sind oft Eulen.', 'Lerchen arbeiten nachts am besten.'], answer: 1,
    },
    {
      t: 'mcq', id: 'm3-q3', q: 'Text B: Wann vergeht die Zeit im Moment schnell?',
      options: ['Wenn wir warten.', 'Wenn wir uns langweilen.', 'Wenn wir viel Neues erleben.'], answer: 2,
    },
    {
      t: 'mcq', id: 'm3-q4', q: 'Text B: Warum scheinen die Jahre für Erwachsene schneller zu vergehen?',
      options: ['Erwachsene schlafen weniger.', 'Im Alltag gibt es wenig Neues, das im Gedächtnis bleibt.', 'Erwachsene haben mehr Termine.'], answer: 1,
    },
    {
      t: 'grammar', id: 'm3-gram', title: 'Verben und Ergänzungen',
      intro: 'Das Verb ist der Chef im Satz. Es bestimmt, welche [[Ergänzung|Ergänzungen]] stehen müssen und in welchem Kasus.',
      head: ['Verb +', 'Beispiel', 'Infinitiv'],
      rows: [
        ['Nominativ', 'Der Chronotyp ist **angeboren**. Sie wird **Ärztin**.', 'sein, werden, bleiben'],
        ['Akkusativ', 'Neues braucht **mehr Arbeit**.', 'brauchen, haben, erleben'],
        ['Dativ', 'Der frühe Schulbeginn gefällt **ihnen** nicht.', 'gefallen, helfen, fehlen, schaden, begegnen'],
        ['Dativ + Akkusativ', 'Der Alltag stiehlt **ihnen die Überraschungen**.', 'stehlen, geben, schenken, erklären'],
        ['Präposition + Akkusativ', 'Jeder Mensch verfügt **über einen Rhythmus**.', 'verfügen über, sich konzentrieren auf, sich erinnern an'],
        ['Präposition + Dativ', 'Das hängt **von der Situation** ab.', 'abhängen von, sich beschäftigen mit, sprechen von'],
      ],
      notes: [
        'Position: Dativ steht vor Akkusativ. *Hast du **dem Chef die Mail** geschrieben?*',
        'Aber: Ein Akkusativ-Pronomen steht vor dem Dativ. *Hast du **sie dem Chef** geschrieben? Hast du **sie ihm** geschrieben?*',
      ],
      en: 'The verb decides which objects are needed and in which case. Learn verbs together with their case or preposition (helfen + Dativ, verfügen über + Akkusativ). Word order: dative before accusative, unless the accusative is a pronoun, then it comes first.',
    },
    {
      t: 'sort', id: 'm3-sort', task: 'Welche Ergänzung braucht das Verb?', taskEn: 'Which complement does the verb take? Tap a verb, then its group.',
      cats: ['+ Akkusativ', '+ Dativ', '+ Präposition'],
      items: [
        { text: 'helfen', cat: 1 }, { text: 'brauchen', cat: 0 }, { text: 'sich konzentrieren auf', cat: 2 },
        { text: 'fehlen', cat: 1 }, { text: 'erleben', cat: 0 }, { text: 'abhängen von', cat: 2 },
        { text: 'schaden', cat: 1 }, { text: 'sich beschäftigen mit', cat: 2 }, { text: 'kennen', cat: 0 },
      ],
    },
    {
      t: 'gap', id: 'm3-gap', task: 'Ergänze die richtige Form.', taskEn: 'Fill in the correct article or pronoun.',
      lines: [
        'Nachtarbeit schadet {{der}} Gesundheit.',
        'Ich kann mich abends gut auf {{die}} Arbeit konzentrieren.',
        'Bekanntes hilft {{dem}} Gehirn.',
        'Das hängt von {{dem}} Chronotyp ab.',
        'Meiner Schwester fehlt die Zeit. Der Alltag stiehlt {{ihr}} jede freie Minute.',
        'Wir beschäftigen uns heute mit {{dem}} Thema Zeit.',
      ],
    },
    {
      t: 'order', id: 'm3-order1', task: 'Dativ oder Akkusativ zuerst? Bau den Satz.', taskEn: 'Dative or accusative first? Build the sentence.',
      words: ['Ich', 'schenke', 'einen Wecker.', 'meinem Bruder'],
      answers: ['Ich schenke meinem Bruder einen Wecker.'],
      hint: 'Zwei Nomen: Dativ vor Akkusativ.',
    },
    {
      t: 'order', id: 'm3-order2',
      words: ['Ich', 'schenke', 'meinem Bruder.', 'ihn'],
      answers: ['Ich schenke ihn meinem Bruder.'],
      hint: 'Akkusativ-Pronomen steht vor dem Dativ.',
    },
    {
      t: 'write', id: 'm3-write', task: 'Fass einen Text zusammen.', taskEn: 'Summarize text A or B in 4 to 5 sentences using your notes.',
      prompt: 'Wähle Text A oder Text B. Fass ihn mit deinen Notizen in vier bis fünf Sätzen zusammen, für eine Person, die den Text nicht gelesen hat.',
      minWords: 45,
      hints: ['In dem Text geht es um …', 'Der Text erklärt, warum …', 'Ein Beispiel dafür ist …'],
      sample: 'In Text B geht es um unser Zeitempfinden. Der Text erklärt, dass wir Zeit sehr subjektiv wahrnehmen. Wenn wir uns langweilen, vergeht die Zeit langsam, aber später erinnern wir uns kaum daran. Wenn wir viel Neues erleben, vergeht sie schnell, und im Rückblick scheint sie lang. Deshalb haben Erwachsene oft das Gefühl, dass die Jahre immer schneller vergehen.',
    },
  ],
};

const kommunikation: Section = {
  id: 'kommunikation',
  kind: 'kommunikation',
  label: 'Alltag und Beruf',
  title: 'Passt Ihnen Dienstag?',
  goals: ['einen Termin vereinbaren', 'einen Termin verschieben', 'einen Termin absagen'],
  minutes: 20,
  tone: 'rose',
  blocks: [
    {
      t: 'text', id: 'k-intro',
      body: 'Drei Anrufe, drei Städte, drei Arten zu sprechen. Einen [[Termin]] kann man [[vereinbaren]], [[verschieben]] oder [[absagen]]. Hör genau hin: In Wien, Berlin und Zürich klingt Deutsch ganz verschieden.',
    },
    {
      t: 'audio', id: 'k-a1', title: 'Gespräch 1: In der Ordination (Wien)',
      task: 'Wer ruft an und warum?', taskEn: 'Who is calling and why? Frau Huber speaks Viennese German.',
      note: 'Österreichisch: **Grüß Gott** = Guten Tag. **die Ordination** = die Arztpraxis. **heuer** = dieses Jahr. **Das geht sich aus** = Das klappt, die Zeit reicht.',
      lines: [
        { speaker: 'frauHuber', text: 'Ordination Doktor Lechner, Huber, grüß Gott!' },
        { speaker: 'herrYilmaz', text: 'Grüß Gott, hier spricht Emre Yılmaz. Ich hätte gern einen Termin für eine Kontrolle. Wann könnte ich denn mal vorbeikommen?' },
        { speaker: 'frauHuber', text: 'Schauen wir einmal. Waren Sie heuer schon bei uns?' },
        { speaker: 'herrYilmaz', text: 'Ja, im Februar.' },
        { speaker: 'frauHuber', text: 'Gut. Ich könnte Ihnen den Donnerstag um neun anbieten.' },
        { speaker: 'herrYilmaz', text: 'Vormittags arbeite ich leider. Ginge es auch am späten Nachmittag?' },
        { speaker: 'frauHuber', text: 'Am Dienstag um halb sechs hätte ich noch etwas frei. Passt Ihnen das?' },
        { speaker: 'herrYilmaz', text: 'Ja, das geht sich aus. Vielen Dank, dann bis Dienstag um halb sechs.' },
        { speaker: 'frauHuber', text: 'Sehr gern. Auf Wiederhören!' },
      ],
    },
    {
      t: 'mcq', id: 'k-q1', q: 'Wann ist der Termin von Herrn Yılmaz?',
      options: ['Donnerstag um 9:00 Uhr', 'Dienstag um 17:30 Uhr', 'Dienstag um 18:30 Uhr'], answer: 1,
      why: '„Halb sechs“ ist 17:30 Uhr, also eine halbe Stunde vor sechs.',
    },
    {
      t: 'audio', id: 'k-a2', title: 'Gespräch 2: Der Handwerker (Berlin)',
      task: 'Was möchte Priya ändern?', taskEn: 'What does Priya want to change? Atze speaks Berlin dialect.',
      note: 'Berlinerisch: **ick** = ich. **wat** = was. **dit** = das. **nee** = nein. **jut** = gut. **Allet klar** = Alles klar.',
      lines: [
        { speaker: 'atze', text: 'Sanitär Krawczyk, Atze am Apparat. Wat kann ick für Sie tun?' },
        { speaker: 'priya', text: 'Guten Tag, Priya Nair hier. Wir hatten für Donnerstag um zehn einen Termin wegen der Heizung ausgemacht. Leider ist mir etwas dazwischengekommen, ich muss an dem Tag nach Hamburg.' },
        { speaker: 'atze', text: 'Nee, dit is doof. Und nu?' },
        { speaker: 'priya', text: 'Könnten wir den Termin vielleicht auf Freitag verschieben?' },
        { speaker: 'atze', text: 'Freitag, Freitag … Vormittags bin ick in Spandau. Um zwei könnt ick bei Ihnen sein.' },
        { speaker: 'priya', text: 'Um vierzehn Uhr wäre mir sehr recht. Vielen Dank, dass das so kurzfristig klappt.' },
        { speaker: 'atze', text: 'Allet klar, jut. Freitag um zwei. Schönen Tach noch!' },
      ],
    },
    {
      t: 'mcq', id: 'k-q2', q: 'Warum verschiebt Priya den Termin?',
      options: ['Die Heizung funktioniert wieder.', 'Sie muss am Donnerstag nach Hamburg.', 'Atze hat am Donnerstag keine Zeit.'], answer: 1,
    },
    {
      t: 'audio', id: 'k-a3', title: 'Gespräch 3: Die Sprachschule (Zürich)',
      task: 'Was passiert mit dem Termin?', taskEn: 'What happens to the appointment? Frau Baumann speaks Swiss Standard German, slowly and clearly.',
      note: 'Schweizerisch: **Grüezi** = Guten Tag. **Merci vielmal** = Vielen Dank. **Adieu** = Auf Wiedersehen. Die Schweiz schreibt kein ß: **Strasse**, **Gruss**.',
      lines: [
        { speaker: 'frauBaumann', text: 'Sprachschule Lindenhof, Baumann, grüezi.' },
        { speaker: 'tomasz', text: 'Guten Tag, hier spricht Tomasz Nowak. Ich habe morgen um Viertel vor elf einen Beratungstermin bei Ihnen. Den muss ich leider absagen.' },
        { speaker: 'frauBaumann', text: 'Das ist schade, Herr Nowak. Aber gut, dass Sie Bescheid sagen. Möchten Sie gleich einen neuen Termin ausmachen?' },
        { speaker: 'tomasz', text: 'Nein, danke. Ich melde mich wieder, wenn ich meinen neuen Arbeitsplan kenne.' },
        { speaker: 'frauBaumann', text: 'In Ordnung, dann streiche ich den Termin. Merci vielmal für den Anruf.' },
        { speaker: 'tomasz', text: 'Ich danke Ihnen. Auf Wiederhören.' },
        { speaker: 'frauBaumann', text: 'Adieu, Herr Nowak.' },
      ],
    },
    {
      t: 'mcq', id: 'k-q3', q: 'Was macht Tomasz?',
      options: ['Er sagt den Termin ab und macht keinen neuen aus.', 'Er verschiebt den Termin auf nächste Woche.', 'Er vereinbart einen ersten Termin.'], answer: 0,
    },
    {
      t: 'phrases', id: 'k-phr', title: 'Redemittel: Termine',
      groups: [
        { label: 'vereinbaren', items: ['Ich hätte gern einen Termin für …', 'Wann könnte ich denn mal vorbeikommen?', 'Ginge es auch am Nachmittag?', 'Passt Ihnen Dienstag um halb sechs?', 'Dann bis Dienstag.'] },
        { label: 'verschieben', items: ['Wir hatten für Donnerstag einen Termin ausgemacht.', 'Leider ist mir etwas dazwischengekommen.', 'Könnten wir den Termin auf Freitag verschieben?', 'Das wäre mir sehr recht.'] },
        { label: 'absagen', items: ['Ich muss den Termin leider absagen.', 'Möchten Sie einen neuen Termin ausmachen?', 'Ich melde mich wieder.', 'Danke, dass Sie Bescheid sagen.'] },
      ],
    },
    {
      t: 'gap', id: 'k-gap', task: 'Ergänze den Dialog.', taskEn: 'Complete the dialogue with the words from the box.',
      bank: ['dazwischengekommen', 'verschieben', 'ausgemacht', 'recht', 'passt', 'vorbeikommen'],
      lines: [
        'Guten Tag, wir hatten für Montag einen Termin {{ausgemacht}}.',
        'Leider ist mir etwas {{dazwischengekommen}}.',
        'Könnten wir den Termin auf Mittwoch {{verschieben}}?',
        'Ja, natürlich. {{Passt}} Ihnen 15 Uhr?',
        'Das wäre mir sehr {{recht}}.',
        'Gut, dann können Sie am Mittwoch um drei {{vorbeikommen}}.',
      ],
    },
    {
      t: 'sort', id: 'k-sort', task: 'Vereinbaren, verschieben oder absagen?', taskEn: 'Arrange, reschedule or cancel? Sort the sentences.',
      cats: ['vereinbaren', 'verschieben', 'absagen'],
      items: [
        { text: 'Hätten Sie nächste Woche noch etwas frei?', cat: 0 },
        { text: 'Ginge es auch einen Tag später?', cat: 1 },
        { text: 'Ich kann leider doch nicht kommen.', cat: 2 },
        { text: 'Ich hätte gern einen Termin zur Beratung.', cat: 0 },
        { text: 'Bitte streichen Sie meinen Termin.', cat: 2 },
        { text: 'Könnten wir uns statt Montag am Mittwoch treffen?', cat: 1 },
      ],
    },
    {
      t: 'write', id: 'k-write', task: 'Schreib eine kurze Nachricht.', taskEn: 'Write a short, polite message to reschedule a hairdresser appointment.',
      prompt: 'Du hast am Samstag um 11 Uhr einen Termin beim Friseur. Du kannst nicht kommen. Schreib eine höfliche Nachricht: Entschuldige dich, nenne kurz den Grund und schlag einen neuen Termin vor.',
      minWords: 35,
      hints: ['Leider ist mir etwas dazwischengekommen.', 'Könnten wir den Termin auf … verschieben?', 'Vielen Dank für Ihr Verständnis.'],
      sample: 'Guten Tag, ich habe am Samstag um 11 Uhr einen Termin bei Ihnen. Leider ist mir etwas dazwischengekommen, weil ich am Wochenende arbeiten muss. Könnten wir den Termin auf Dienstag oder Mittwoch nach 17 Uhr verschieben? Vielen Dank für Ihr Verständnis. Mit freundlichen Grüßen, Dana Okafor',
    },
  ],
};

const grammatik: Section = {
  id: 'grammatik',
  kind: 'grammatik',
  label: 'Grammatik im Blick',
  title: 'Alles auf einen Blick',
  goals: ['Tempusformen wiederholen', 'Verben und Ergänzungen wiederholen'],
  minutes: 12,
  tone: 'peach',
  blocks: [
    {
      t: 'grammar', id: 'g-1', title: 'Tempusformen der Vergangenheit',
      head: ['', 'Präteritum', 'Perfekt', 'Plusquamperfekt'],
      rows: [
        ['Verwendung', 'schriftlich berichten; haben, sein, Modalverben', 'mündlich berichten, Mails, Chats', 'ein Ereignis vor einem anderen in der Vergangenheit'],
        ['Bildung', 'Stamm + -te (machte) oder eigener Stamm (ging)', 'haben/sein (Präsens) + Partizip II', 'haben/sein (Präteritum) + Partizip II'],
        ['Beispiel', 'Sie arbeitete. Er kam.', 'Sie hat gearbeitet. Er ist gekommen.', 'Sie hatte gearbeitet. Er war gekommen.'],
      ],
      notes: ['Im Präteritum haben 1. und 3. Person Singular keine Endung: ich **ging**, er **ging**. Bei regelmäßigen Verben: ich **machte**, er **machte**.'],
      en: 'Three past tenses: Präteritum (written), Perfekt (spoken), Plusquamperfekt (earlier past). In Präteritum the ich and er/sie/es forms are identical.',
    },
    {
      t: 'grammar', id: 'g-2', title: 'Wichtige unregelmäßige Verben',
      head: ['Infinitiv', 'Präteritum', 'Perfekt'],
      rows: [
        ['gehen', 'ging', 'ist gegangen'], ['kommen', 'kam', 'ist gekommen'], ['stehen', 'stand', 'hat gestanden'],
        ['finden', 'fand', 'hat gefunden'], ['schreiben', 'schrieb', 'hat geschrieben'], ['nehmen', 'nahm', 'hat genommen'],
        ['bleiben', 'blieb', 'ist geblieben'], ['denken', 'dachte', 'hat gedacht'], ['wissen', 'wusste', 'hat gewusst'],
      ],
    },
    {
      t: 'grammar', id: 'g-3', title: 'Position der Ergänzungen',
      head: ['Regel', 'Beispiel'],
      rows: [
        ['Dativ vor Akkusativ', 'Hast du **dem Chef eine Mail** geschrieben?'],
        ['Pronomen vor Nomen', 'Hast du **ihm eine Mail** geschrieben?'],
        ['Akkusativ-Pronomen vor Dativ', 'Hast du **sie dem Chef** geschrieben? Hast du **sie ihm** geschrieben?'],
      ],
      en: 'Two nouns: dative first. A pronoun always moves in front of a noun. Two pronouns: accusative first.',
    },
    {
      t: 'gap', id: 'g-gap', task: 'Präteritum: Ergänze die Form.', taskEn: 'Fill in the simple past form.',
      lines: [
        'Meine Großmutter {{stand}} jeden Tag um halb drei auf. (stehen)',
        'Wir {{kamen}} erst um Mitternacht nach Hause. (kommen)',
        'Er {{schrieb}} ihr jeden Monat einen Brief. (schreiben)',
        'Ich {{wusste}} die Antwort nicht. (wissen)',
        'Sie {{blieben}} drei Wochen in Wien. (bleiben)',
      ],
    },
    {
      t: 'mcq', id: 'g-q1', task: 'Welcher Satz ist richtig?', taskEn: 'Which sentence is correct?',
      q: 'Ich habe die Mail geschrieben. (die Mail → sie, an den Chef)',
      options: ['Ich habe dem Chef sie geschrieben.', 'Ich habe sie dem Chef geschrieben.', 'Ich habe sie den Chef geschrieben.'], answer: 1,
    },
    {
      t: 'mcq', id: 'g-q2', q: '„Nachdem ich gefrühstückt ___, fuhr ich zur Arbeit.“',
      options: ['habe', 'hatte', 'war'], answer: 1, why: 'Nach „nachdem“ steht das Plusquamperfekt: hatte + Partizip II.',
    },
  ],
};

const uebungen: Section = {
  id: 'uebungen',
  kind: 'uebung',
  label: 'Übungen',
  title: 'Training: Wörter rund um die Zeit',
  goals: ['Wortschatz zum Thema Zeit festigen', 'eine Kurzbiografie schreiben', 'Aussprache: Betonung im Satz'],
  minutes: 20,
  tone: 'butter',
  blocks: [
    {
      t: 'gap', id: 'u-adj', task: 'Vom Nomen zum Adjektiv.', taskEn: 'Turn the noun into an adjective (Woche → wöchentlich).',
      lines: [
        'Der Kurs findet einmal pro Woche statt. Er findet {{wöchentlich}} statt.',
        'Die Miete zahle ich jeden Monat. Ich zahle sie {{monatlich}}.',
        'Wir treffen uns jedes Jahr. Wir treffen uns {{jährlich}}.',
        'Nehmen Sie die Tropfen jeden Tag. Nehmen Sie sie {{täglich}}.',
        'Der Bus fährt jede Stunde. Er fährt {{stündlich}}.',
      ],
    },
    {
      t: 'sort', id: 'u-adv', task: 'Vergangenheit, Gegenwart oder Zukunft?', taskEn: 'Past, present or future? Sort the time adverbs.',
      cats: ['Vergangenheit', 'Gegenwart', 'Zukunft'],
      items: [
        { text: 'damals', cat: 0 }, { text: 'gerade', cat: 1 }, { text: 'bald', cat: 2 }, { text: 'neulich', cat: 0 },
        { text: 'heutzutage', cat: 1 }, { text: 'übermorgen', cat: 2 }, { text: 'vorgestern', cat: 0 }, { text: 'jetzt', cat: 1 }, { text: 'demnächst', cat: 2 },
      ],
    },
    {
      t: 'tip', id: 'u-tip', title: 'Tipp: gerade',
      body: '**gerade** + Präsens = jetzt, in diesem Moment: *Ich habe gerade keine Zeit.*\n\n**gerade** + Perfekt = vor sehr kurzer Zeit: *Ich habe gerade mit ihr gesprochen.*',
    },
    {
      t: 'gap', id: 'u-adv2', task: 'Welches Zeitadverb passt?', taskEn: 'Which time adverb fits?',
      bank: ['bald', 'früher', 'neulich', 'damals', 'gerade'],
      lines: [
        'Nur noch zwei Wochen Schule. Stimmt, {{bald}} sind Ferien.',
        'Hast du Frau Okafor gesehen? Ja, sie ist {{gerade}} gekommen.',
        'Als ich ein Kind war, gab es kein Internet. Wie habt ihr {{damals}} Hausaufgaben gemacht?',
        '{{Früher}} bin ich viel gereist, heute bleibe ich lieber zu Hause.',
        'Rate mal, wen ich {{neulich}} im Supermarkt getroffen habe!',
      ],
    },
    {
      t: 'match', id: 'u-verben', task: 'Verben mit „Zeit“. Was passt zusammen?', taskEn: 'Verbs that go with "Zeit". Match the halves.',
      pairs: [
        ['Im Urlaub vergeht die Zeit', 'immer viel zu schnell.'],
        ['Mit der App kann man', 'viel Zeit sparen.'],
        ['Wegen des Staus haben wir', 'eine Stunde Zeit verloren.'],
        ['Nimm dir ruhig Zeit,', 'wir haben es nicht eilig.'],
        ['Im Wartezimmer vertreibe ich mir', 'die Zeit mit einem Podcast.'],
      ],
    },
    {
      t: 'text', id: 'u-bio', kicker: 'Schreiben', title: 'Eine Kurzbiografie',
      body: `**Selin Aydın** wurde 1991 in Dortmund geboren. Schon als Kind zeichnete sie Comics. Nach dem Abitur studierte sie Grafikdesign in Münster. 2015 zog sie nach Hamburg und arbeitete dort drei Jahre lang in einer Werbeagentur. Nachdem sie ihren ersten Comic veröffentlicht hatte, machte sie sich selbstständig. Heute lebt sie mit ihrer Familie in Lübeck und unterrichtet an einer Kunstschule.`,
    },
    {
      t: 'write', id: 'u-biow', task: 'Schreib eine Kurzbiografie.', taskEn: 'Write a short biography in Präteritum about someone you know (or invent a person).',
      prompt: 'Schreib eine Kurzbiografie über eine Person aus deiner Familie oder eine erfundene Person. Benutze das **Präteritum** und mindestens einen Satz mit **nachdem**.',
      minWords: 50,
      hints: ['… wurde … in … geboren.', 'Nach der Schule …', 'Nachdem er/sie … hatte, …'],
      sample: 'Mein Großvater Rahim wurde 1948 in Pune geboren. Als junger Mann arbeitete er in einer Druckerei. 1975 heiratete er meine Großmutter und zog mit ihr nach Mumbai. Nachdem er zehn Jahre gespart hatte, eröffnete er einen kleinen Buchladen. Er las jeden Abend und kannte fast jedes Buch im Laden. Mit 70 Jahren ging er in Rente, aber samstags stand er immer noch hinter der Kasse.',
    },
    {
      t: 'audio', id: 'u-aus', title: 'Aussprache: Informationen im Satz betonen',
      task: 'Hör zu und sprich nach. Welches Wort ist betont?', taskEn: 'Listen and repeat. The stressed word carries the new information.',
      note: 'Die wichtigste oder neue Information ist am stärksten betont. Wenn du ein anderes Wort betonst, ändert sich die Bedeutung.',
      lines: [
        { speaker: 'erzaehler', text: 'Ich komme am DIENSTAG. Nicht am Montag.' },
        { speaker: 'jonas', text: 'Ich komme am Dienstag um DREI. Nicht um zwei.' },
        { speaker: 'erzaehler', text: 'ICH komme am Dienstag. Meine Kollegin kommt nicht.' },
        { speaker: 'jonas', text: 'Können wir den Termin VERSCHIEBEN? Ich will ihn nicht absagen.' },
      ],
    },
    {
      t: 'mcq', id: 'u-ausq', q: '„Wir treffen uns am Freitag um ACHT.“ Was ist die wichtige Information?',
      options: ['der Tag', 'die Uhrzeit', 'die Personen'], answer: 1,
    },
  ],
};

const wortschatz: Section = {
  id: 'wortschatz',
  kind: 'wortschatz',
  label: 'Wortschatz und Check',
  title: 'Das kann ich jetzt',
  goals: ['die wichtigsten Wörter wiederholen', 'den eigenen Stand einschätzen'],
  minutes: 10,
  tone: 'mint',
  blocks: [
    {
      t: 'cards', id: 'w-cards', task: 'Dreh die Karten um. Kennst du das Wort?', taskEn: 'Flip the cards. Do you know the word?',
      cards: [
        { front: 'der Feierabend', back: 'die freie Zeit nach der Arbeit', en: 'end of the working day' },
        { front: 'etwas erledigen', back: 'eine Aufgabe fertig machen', en: 'to get something done' },
        { front: 'erreichbar sein', back: 'man kann mich anrufen oder mir schreiben', en: 'to be reachable' },
        { front: 'etwas verpassen', back: 'etwas nicht erleben, weil man zu spät ist', en: 'to miss something' },
        { front: 'das Zeitempfinden', back: 'das Gefühl, wie schnell die Zeit vergeht', en: 'perception of time' },
        { front: 'die innere Uhr', back: 'der natürliche Rhythmus des Körpers', en: 'body clock' },
        { front: 'einen Termin vereinbaren', back: 'zusammen eine feste Zeit planen', en: 'to make an appointment' },
        { front: 'einen Termin verschieben', back: 'auf eine andere Zeit legen', en: 'to reschedule' },
        { front: 'einen Termin absagen', back: 'sagen, dass man nicht kommt', en: 'to cancel' },
        { front: 'Mir ist etwas dazwischengekommen.', back: 'Etwas ist passiert, mein Plan geht nicht mehr.', en: 'Something came up.' },
        { front: 'neulich', back: 'vor kurzer Zeit', en: 'recently' },
        { front: 'damals', back: 'in einer Zeit, die lange vorbei ist', en: 'back then' },
      ],
    },
    {
      t: 'checklist', id: 'w-check', task: 'Sei ehrlich: Was kannst du schon?', taskEn: 'Be honest: tick what you can already do. Unticked items are your review list.',
      items: [
        'Ich kann einen Text über Stress früher und heute verstehen.',
        'Ich kann über Vergangenes berichten und die passende Zeitform wählen.',
        'Ich kann einen gesprochenen Text mit Rhythmus verstehen.',
        'Ich kann über Werte und Haltungen sprechen.',
        'Ich kann mit Notizen einen Text zusammenfassen.',
        'Ich weiß, welche Ergänzungen wichtige Verben brauchen.',
        'Ich kann einen Termin vereinbaren, verschieben und absagen.',
        'Ich kann eine Kurzbiografie schreiben.',
      ],
    },
    {
      t: 'mcq', id: 'w-q1', task: 'Letzter Check vor der Prüfung', taskEn: 'Last check before the exam.',
      q: '„Um 18 Uhr habe ich ___.“ Die Arbeit ist dann zu Ende.', options: ['Termin', 'Feierabend', 'Sprechstunde'], answer: 1,
    },
    {
      t: 'mcq', id: 'w-q2', q: 'Du kannst morgen nicht zum Arzt und willst keinen neuen Termin. Was machst du?',
      options: ['Ich vereinbare den Termin.', 'Ich verschiebe den Termin.', 'Ich sage den Termin ab.'], answer: 2,
    },
  ],
};

export const kapitel1: Chapter = {
  id: 'kapitel-1',
  number: 1,
  title: 'Zeit ist relativ',
  theme: 'Zeit, Alltag, Termine',
  grammar: 'Vergangenheit: Präteritum, Perfekt, Plusquamperfekt. Verben und Ergänzungen.',
  sections: [einstieg, modul1, modul2, modul3, kommunikation, grammatik, uebungen, wortschatz],
  games: ['partizip-sprint', 'zeit-memory', 'satzbau', 'zeitstrahl'],
  exam: [
    { points: 1, q: { t: 'mcq', id: 'x1', q: 'In einer WhatsApp-Nachricht an eine Freundin schreibst du am besten:', options: ['Ich ging gestern ins Kino.', 'Ich bin gestern ins Kino gegangen.', 'Ich war gestern ins Kino gegangen.'], answer: 1 } },
    { points: 1, q: { t: 'mcq', id: 'x2', q: '„Als wir ankamen, ___ der Film schon ___.“', options: ['hat … angefangen', 'hatte … angefangen', 'ist … angefangen'], answer: 1 } },
    { points: 1, q: { t: 'mcq', id: 'x3', q: 'Welches Partizip ist richtig?', options: ['Ich habe mit ihr getelefoniert.', 'Ich habe mit ihr telefoniert.', 'Ich habe mit ihr telefonieren.'], answer: 1 } },
    { points: 4, q: { t: 'gap', id: 'x4', task: 'Ergänze das Partizip II.', lines: ['Er ist heute sehr früh {{aufgestanden}}. (aufstehen)', 'Ich habe das nicht {{verstanden}}. (verstehen)', 'Hast du schon {{eingekauft}}? (einkaufen)', 'Sie hat mir ein Buch {{gebracht}}. (bringen)'] } },
    { points: 3, q: { t: 'gap', id: 'x5', task: 'Ergänze im Präteritum.', lines: ['Früher {{ging}} mein Vater zu Fuß zur Arbeit. (gehen)', 'Sie {{nahm}} jeden Morgen den Bus um sechs. (nehmen)', 'Wir {{fanden}} die Idee sehr gut. (finden)'] } },
    {
      points: 1,
      stimulus: { t: 'text', id: 'x-st1', kicker: 'Lesen', body: 'Kasimir ist Krankenpfleger und arbeitet seit acht Jahren im Schichtdienst. „Die Nachtschicht war für mich nie ein Problem“, sagt er. „Ich bin eine Eule. Schlimm sind die Wochen mit Frühdienst. Da klingelt der Wecker um halb fünf, und ich fühle mich den ganzen Tag wie nach einem langen Flug.“ Seit einem Jahr darf er seine Schichten selbst wählen. Seitdem schläft er besser und ist seltener krank.' },
      q: { t: 'mcq', id: 'x6', q: 'Was ist für Kasimir schwierig?', options: ['die Nachtschicht', 'der Frühdienst', 'das Wochenende'], answer: 1 },
    },
    { points: 1, q: { t: 'mcq', id: 'x7', q: 'Was hat sich für Kasimir vor einem Jahr geändert? (Text oben)', options: ['Er hat den Beruf gewechselt.', 'Er kann seine Arbeitszeiten selbst bestimmen.', 'Er arbeitet nur noch am Tag.'], answer: 1 } },
    { points: 1, q: { t: 'mcq', id: 'x8', q: '„Die Musik gefällt ___ nicht.“ (mein Bruder)', options: ['meinen Bruder', 'meinem Bruder', 'mein Bruder'], answer: 1 } },
    { points: 1, q: { t: 'mcq', id: 'x9', q: '„Ich kann mich heute nicht ___ konzentrieren.“', options: ['an die Arbeit', 'mit der Arbeit', 'auf die Arbeit'], answer: 2 } },
    { points: 2, q: { t: 'order', id: 'x10', task: 'Bau den Satz.', words: ['Sie', 'erklärt', 'die Regel.', 'den Studenten'], answers: ['Sie erklärt den Studenten die Regel.'] } },
    { points: 2, q: { t: 'order', id: 'x11', task: 'Bau den Satz.', words: ['Hast du', 'gegeben?', 'ihm', 'es'], answers: ['Hast du es ihm gegeben?'] } },
    {
      points: 1,
      stimulus: {
        t: 'audio', id: 'x-st2', title: 'Hören: Ein Anruf in der Zahnarztpraxis',
        lines: [
          { speaker: 'priya', text: 'Zahnarztpraxis Doktor Sommer, guten Tag.' },
          { speaker: 'jonas', text: 'Hallo, Jonas Brandt hier. Ich habe am Mittwoch um Viertel nach vier einen Termin. Leider ist mir etwas dazwischengekommen. Könnten wir das verschieben?' },
          { speaker: 'priya', text: 'Einen Moment. Am Montag darauf um acht Uhr hätte ich etwas frei.' },
          { speaker: 'jonas', text: 'Morgens ist schwierig. Ginge es auch nach der Arbeit?' },
          { speaker: 'priya', text: 'Dann am Montag um Viertel vor sechs?' },
          { speaker: 'jonas', text: 'Perfekt, das passt mir. Vielen Dank!' },
        ],
      },
      q: { t: 'mcq', id: 'x12', q: 'Wann war der alte Termin?', options: ['Mittwoch um 15:45 Uhr', 'Mittwoch um 16:15 Uhr', 'Montag um 8:00 Uhr'], answer: 1 },
    },
    { points: 1, q: { t: 'mcq', id: 'x13', q: 'Wann ist der neue Termin? (Hörtext oben)', options: ['Montag um 17:45 Uhr', 'Montag um 18:15 Uhr', 'Mittwoch um 17:45 Uhr'], answer: 0 } },
    { points: 3, q: { t: 'gap', id: 'x14', task: 'Ergänze die Redemittel.', bank: ['absagen', 'vorbeikommen', 'Bescheid'], lines: ['Wann könnte ich denn mal {{vorbeikommen}}?', 'Ich muss den Termin leider {{absagen}}.', 'Danke, dass Sie {{Bescheid}} sagen.'] } },
    { points: 1, q: { t: 'mcq', id: 'x15', q: '„Ich habe ___ mit ihr gesprochen, vor zwei Minuten.“', options: ['damals', 'gerade', 'bald'], answer: 1 } },
    { points: 1, q: { t: 'mcq', id: 'x16', q: 'Wenn wir viel Neues erleben, …', options: ['vergeht die Zeit im Moment langsam.', 'scheint die Zeit im Rückblick lang.', 'erinnern wir uns später an nichts.'], answer: 1 } },
  ],
};
