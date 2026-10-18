import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// B1 Kapitel 12: Geld regiert die Welt? Bank, Geld, Globalisierung. Staffelfinale der Fuchsbau-WG.
// Grammar: je …, desto / umso …, Partizip II als Adjektiv, Partizip I als Adjektiv.
// Aussprache: Wortakzent. Strategie: in Diskussionen zu Wort kommen. Landeskunde: Fuggerei, Tauschring. Plattform 4 (K10 bis K12) am Ende.

export const glossaryB1k12: Record<string, GlossaryEntry> = {
  Girokonto: { de: 'Ein normales Bankkonto für den Alltag. Darauf kommt zum Beispiel das Gehalt, und davon bezahlt man die Miete.', en: 'checking account' },
  Kredit: { de: 'Geld, das man von einer Bank leiht und später mit Zinsen zurückzahlt.', en: 'loan' },
  Zinsen: { de: 'Geld, das man für einen Kredit an die Bank zahlt. Oder Geld, das man fürs Sparen von der Bank bekommt.', en: 'interest' },
  Eigenkapital: { de: 'Das eigene Geld, das man schon hat, zum Beispiel für einen Hauskauf. Den Rest leiht man von der Bank.', en: 'equity, own capital' },
  Überweisung: { de: 'Man schickt Geld von einem Bankkonto auf ein anderes Konto.', en: 'bank transfer' },
  Dispo: { de: 'Kurz für Dispositionskredit: Man darf das Konto ein bisschen überziehen, also mehr Geld ausgeben, als darauf ist. Das kostet hohe Zinsen.', en: 'overdraft' },
  Genossenschaft: { de: 'Ein Unternehmen, das allen Mitgliedern gemeinsam gehört. Jedes Mitglied hat eine Stimme.', en: 'cooperative' },
  Genossenschaftsanteil: { de: 'Ein Teil einer Genossenschaft, den man kauft. Damit wird man Mitglied.', en: 'cooperative share' },
  Mitgliederversammlung: { de: 'Ein Treffen, bei dem alle Mitglieder zusammen wichtige Dinge entscheiden.', en: 'general meeting of members' },
  Vorstand: { de: 'Die Gruppe von Personen, die einen Verein oder eine Genossenschaft leitet.', en: 'board, executive board' },
  Globalisierung: { de: 'Die Länder der Welt sind durch Handel, Reisen und Internet immer enger miteinander verbunden.', en: 'globalization' },
  Fuggerei: { de: 'Eine Siedlung in Augsburg, die Jakob Fugger 1521 für arme Menschen gegründet hat. Die Miete ist bis heute sehr niedrig.', en: 'the Fuggerei, the world’s oldest social housing complex still in use (Augsburg, 1521)' },
  Tauschring: { de: 'Eine Gruppe, in der Menschen Hilfe gegen Hilfe tauschen, ohne Geld. Eine Stunde ist immer eine Stunde wert.', en: 'local exchange network, time bank' },
  Grundrecht: { de: 'Ein wichtiges Recht, das jeder Mensch hat, zum Beispiel die Meinungsfreiheit.', en: 'fundamental right' },
  Partizip: { de: 'Eine Verbform, zum Beispiel *steigend* (Partizip I) oder *renoviert* (Partizip II). Man kann sie wie ein Adjektiv benutzen.', en: 'participle' },
  Direktkredit: { de: 'Privatpersonen leihen einem Projekt direkt Geld, ohne Bank.', en: 'direct loan from private supporters' },
  Notar: { de: 'Ein Jurist, bei dem man wichtige Verträge unterschreibt, zum Beispiel beim Kauf eines Hauses.', en: 'notary' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Alles eine Frage des Geldes?', 'butter', 8,
  ['das Kapitel kennenlernen', 'Wörter rund ums Geld'], [
    overview('e-over', 'Kapitel 12: Geld regiert die Welt?',
      'August in Leipzig. Seit Monaten kämpfen die Mieterinnen und Mieter für ihr Haus, und jetzt geht es ums Geld. In Kapitel 12 lernst du, wie man auf der Bank ein [[Girokonto]] eröffnet, nach einem [[Kredit]] fragt und [[Zinsen]] versteht. Du liest einen informativen Text über die [[Genossenschaft|Wohnungsgenossenschaft]], diskutierst über [[Globalisierung]] und lernst die [[Fuggerei]] in Augsburg kennen, die älteste noch bestehende Sozialsiedlung der Welt. In der Grammatik geht es um Sätze wie *Je mehr Leute mitmachen, desto besser* und um das [[Partizip]] als Adjektiv: *die steigenden Mieten, die unterschriebenen Verträge*.\n\nIn der letzten Folge der Staffel sitzen Nele und Herr Lehmann bei der Bank. Bekommt die neue „Fuchsbau eG“ das Geld für das Haus? Amara muss sich endlich entscheiden: Hamburg oder Leipzig? Und im Hof wird gefeiert.',
      'This is the season finale. You learn how to talk at the bank (open an account, ask about a loan, understand interest), read a website about housing cooperatives, discuss globalization and how we spend money, and learn about the Fuggerei in Augsburg, social housing since 1521, and about local exchange networks (Tauschring). Grammar: je …, desto / umso … (the more …, the more …) and participles used as adjectives: die steigenden Mieten (the rising rents), die unterschriebenen Verträge (the signed contracts). In the story, the tenants found a housing cooperative and ask a bank for a loan to buy the building, Amara makes her decision, and everyone celebrates in the courtyard. The chapter ends with Plattform 4, a review of chapters 10 to 12.',
      ['Bankgespräche verstehen und führen', 'Informationen auf einer Webseite verstehen', 'nach Tätigkeiten fragen', 'Argumente verstehen und äußern', 'über Verhalten diskutieren', 'eine schwierige Situation beschreiben', 'über etwas berichten']),
    match('e-match', [['der Geldautomat', '🏧'], ['die Kreditkarte', '💳'], ['das Sparschwein', '🐷'], ['die Münze', '🪙'], ['der Geldschein', '💶'], ['das Portemonnaie', '👛'], ['die Rechnung', '🧾']],
      { task: 'Welches Wort passt zum Bild?', taskEn: 'Match each money word to the picture.' }),
    sort('e-sort', ['Geld bekommen', 'Geld ausgeben'], [['das Gehalt am Monatsende', 0], ['Taschengeld von den Eltern', 0], ['Zinsen für das Sparkonto', 0], ['ein Geldgeschenk von Oma', 0], ['die Miete überweisen', 1], ['eine Rechnung bezahlen', 1], ['Zinsen für einen Kredit', 1], ['im Supermarkt einkaufen', 1]],
      { task: 'Bekommst du Geld oder gibst du Geld aus? Sortiere.', taskEn: 'Do you get money or spend money? Sort. Careful: Zinsen can go either way.' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Auf der Bank', 'mint', 15,
  ['ein Bankgespräch verstehen und führen', 'nach Tätigkeiten fragen', 'je …, desto / umso …'], [
    audio('t1-audio', 'Hören: Ein Konto für die Band', [
      ['frauHaeberle', 'Guten Tag! Sie sind der Herr mit dem Termin um zehn, richtig? Nehmen Sie doch Platz. Was kann ich für Sie tun?'],
      ['felix', 'Danke. Ja, genau. Ich möchte ein Konto eröffnen, aber nicht für mich privat, sondern für meine Band.'],
      ['frauHaeberle', 'Ah, schön. Darf ich fragen, was Sie beruflich machen? Und womit verdient die Band ihr Geld?'],
      ['felix', 'Ich bin Musiker und gebe auch Gitarrenunterricht. Die Band spielt Konzerte, und seit unserem Video verkaufen wir halt auch T-Shirts. Im Moment landet das ganze Geld auf meinem Privatkonto. Das ist ein totales Chaos.'],
      ['frauHaeberle', 'Das glaube ich. Dafür gibt es ein Geschäftskonto. Das kostet sieben Euro im Monat, mit Karte und Onlinebanking.'],
      ['felix', 'Sieben Euro? Hm. Gibt es auch was Günstigeres?'],
      ['frauHaeberle', 'Es gibt noch unser Basiskonto für drei Euro. Aber je mehr Buchungen Sie haben, desto mehr lohnt sich das Geschäftskonto. Wie viele Überweisungen machen Sie denn ungefähr im Monat?'],
      ['felix', 'Keine Ahnung … zwanzig? Dreißig? Nach jedem Konzert überweisen wir jedem in der Band seinen Anteil.'],
      ['frauHaeberle', 'Dann nehmen Sie lieber das Geschäftskonto. Und wer soll Zugriff auf das Konto haben?'],
      ['felix', 'Ich und unsere Bassistin. Das haben wir in der Band so beschlossen.'],
      ['frauHaeberle', 'Gut, dann brauche ich von Ihnen beiden einen Ausweis. Ach, und noch etwas: Möchten Sie einen Dispo für das Konto?'],
      ['felix', 'Bloß nicht! Schulden haben wir keine, und das soll auch so bleiben.'],
      ['frauHaeberle', 'Sehr vernünftig. Dann füllen wir jetzt zusammen das Formular aus.'],
    ], { task: 'Hör zu. Felix ist bei der Bank. Was möchte er?', taskEn: 'Listen. Felix is at the bank. What does he want? Geschäftskonto = business account, Buchung = transaction, Dispo = overdraft.' }),
    mcq('t1-q1', 'Für wen möchte Felix ein Konto eröffnen?', ['für sich privat', 'für seine Band', 'für Lina'], 1),
    mcq('t1-q2', 'Warum empfiehlt Frau Häberle das Geschäftskonto?', ['Es ist billiger als das Basiskonto.', 'Die Band macht viele Überweisungen.', 'Felix braucht einen Kredit.'], 1),
    mcq('t1-q3', 'Was möchte Felix auf keinen Fall?', ['einen Dispo', 'Onlinebanking', 'eine Karte'], 0),
    phrases('t1-phr', 'Auf der Bank', {
      'Als Kundin oder Kunde': ['Ich möchte ein Konto eröffnen.', 'Was kostet das Konto im Monat?', 'Wie hoch sind die Zinsen?', 'Ich möchte Geld überweisen / abheben / einzahlen.'],
      'Als Bankberaterin oder Bankberater': ['Was kann ich für Sie tun?', 'Ich brauche noch Ihren Ausweis.', 'Unterschreiben Sie bitte hier.'],
      'Nach Tätigkeiten fragen': ['Was machen Sie beruflich?', 'Womit verdienen Sie Ihr Geld?', 'Was gehört zu Ihren Aufgaben?', 'Wie sieht ein normaler Arbeitstag bei Ihnen aus?'],
    }),
    grammar('t1-gram', 'Sätze mit je …, desto / umso …', {
      intro: 'Mit **je …, desto …** sagt man: Wenn eine Sache stärker wird, dann wird auch eine andere Sache stärker (oder schwächer). Nach **je** und nach **desto / umso** steht ein **Komparativ**.',
      head: ['je + Komparativ … Verb am Ende,', 'desto / umso + Komparativ + Verb …'],
      rows: [
        ['**Je** mehr Buchungen Sie **haben**,', '**desto** mehr **lohnt** sich das Geschäftskonto.'],
        ['**Je** länger man **spart**,', '**desto** mehr Geld **hat** man.'],
        ['**Je** höher die Zinsen **sind**,', '**desto** teurer **wird** der Kredit.'],
        ['**Je** mehr Leute **mitmachen**,', '**umso** besser **ist** es.'],
      ],
      notes: [
        'Der **je**-Teil ist ein Nebensatz: Das Verb steht **am Ende**.',
        'Nach **desto / umso + Komparativ** kommt sofort das **Verb**, dann das Subjekt: *desto teurer **wird** der Kredit*.',
        '**desto** und **umso** bedeuten das Gleiche. **umso** hört man beim Sprechen etwas öfter.',
        'Kurze Form ohne Verben: *Je früher, desto besser! Je mehr, umso besser!*',
      ],
      en: 'je …, desto / umso … means "the more …, the more …". Both parts use a comparative (mehr, länger, besser). The je part is a subordinate clause, so its verb goes to the end. After desto or umso plus the comparative, the verb comes next, then the subject. desto and umso mean the same. Short form without verbs: Je früher, desto besser! (The sooner, the better!)',
    }),
    gap('t1-gap', ['Je {{mehr}} Leute mitmachen, desto besser. (viel)', 'Je {{länger}} du sparst, desto mehr Geld hast du. (lang)', 'Je {{früher}} wir anfangen, desto schneller sind wir fertig. (früh)', 'Je teurer die Mieten werden, desto {{schwieriger}} wird es für Familien. (schwierig)', 'Je {{besser}} das Konzert ist, umso mehr T-Shirts verkauft die Band. (gut)'],
      { task: 'Ergänze den Komparativ.', taskEn: 'Fill in the comparative of the word in brackets.' }),
    order('t1-order', ['Je mehr', 'Konzerte', 'die Band', 'spielt,', 'desto', 'bekannter', 'wird', 'sie.'], { task: 'Bau den Satz mit je … desto.', taskEn: 'Build the sentence with je … desto. The verb goes to the end of the je part and right after the comparative in the desto part.' }),
    compose('t1-comp', 'Du bist auf der Bank und möchtest ein Konto eröffnen.', [
      ['Sag, was du möchtest.', 'Say what you want.', ['Ich', 'möchte', 'ein Girokonto', 'eröffnen.']],
      ['Frag nach dem Preis.', 'Ask about the price.', ['Was', 'kostet', 'das Konto', 'im Monat?']],
      ['Frag nach den Unterlagen.', 'Ask which documents you need.', ['Welche Unterlagen', 'brauchen', 'Sie', 'von mir?']],
    ], { task: 'Bau die Sätze für das Bankgespräch.', taskEn: 'Build the sentences for your conversation at the bank.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Gemeinsam statt allein', 'sky', 15,
  ['Informationen auf einer Webseite verstehen', 'einen informativen Text verstehen', 'Partizip II als Adjektiv'], [
    text('t2-text', `**Wohnen in der Genossenschaft: die wichtigsten Fragen**

**Was ist eine Wohnungsgenossenschaft?** Eine Genossenschaft ist ein Unternehmen, das seinen Mitgliedern gehört. In einer Wohnungsgenossenschaft schließen sich Menschen zusammen, um gemeinsam Häuser zu bauen oder zu kaufen. Das Ziel ist nicht Gewinn, sondern gutes und bezahlbares Wohnen.

**Wie wird man Mitglied?** Wer Mitglied werden will, kauft Genossenschaftsanteile. Oft kostet ein Anteil zwischen 200 und 1.000 Euro, und für eine Wohnung braucht man mehrere Anteile. Wenn man später auszieht und austritt, bekommt man das eingezahlte Geld zurück.

**Wer entscheidet?** Alle Mitglieder zusammen, in der Mitgliederversammlung. Dabei gilt: ein Mitglied, eine Stimme. Es ist egal, ob jemand drei oder dreißig Anteile hat. Die Mitglieder wählen auch den Vorstand, der die Geschäfte führt.

**Wie hoch ist die Miete?** Mitglieder zahlen keine Miete im klassischen Sinn, sondern ein Nutzungsentgelt. Es ist meistens günstiger als auf dem freien Markt, weil die Genossenschaft keinen Gewinn machen muss. Das Geld wird für Kredite, Reparaturen und Modernisierungen verwendet.

**Kann man gekündigt werden?** Mitglieder haben ein dauerhaftes Wohnrecht. Eine Kündigung wegen Eigenbedarf gibt es nicht, denn das Haus gehört ja allen gemeinsam.

**Gibt es das oft?** In Deutschland gibt es rund 2.000 Wohnungsgenossenschaften mit über zwei Millionen Wohnungen. Die ersten wurden schon im 19. Jahrhundert gegründet.`,
      { kicker: 'Lesen: Webseite', title: 'Fragen und Antworten', task: 'Lies die Informationen auf der Webseite. Wie funktioniert eine Wohnungsgenossenschaft?', taskEn: 'Read the FAQ page of a website. How does a housing cooperative work?', en: 'A housing cooperative is a company owned by its members. Members buy shares (often 200 to 1,000 euros each) and get the money back when they leave. All decisions are made at the general meeting: one member, one vote, no matter how many shares someone has. Members pay a usage fee instead of rent, usually cheaper because the cooperative does not need to make a profit. Members have a permanent right to live there. Germany has about 2,000 housing cooperatives with over two million apartments.' }),
    mcq('t2-q1', 'Wem gehört eine Genossenschaft?', ['dem Staat', 'ihren Mitgliedern', 'einer Bank'], 1),
    mcq('t2-q2', 'Wie viele Stimmen hat ein Mitglied mit dreißig Anteilen?', ['dreißig', 'eine', 'zehn'], 1, { why: 'Ein Mitglied, eine Stimme. Die Zahl der Anteile ist egal.' }),
    mcq('t2-q3', 'Warum ist das Nutzungsentgelt meistens günstiger als eine normale Miete?', ['Die Genossenschaft muss keinen Gewinn machen.', 'Die Stadt bezahlt einen Teil.', 'Die Mitglieder renovieren alles selbst.'], 0),
    mcq('t2-q4', 'Was passiert mit dem Geld für die Anteile, wenn man austritt?', ['Man bekommt es zurück.', 'Es bleibt in der Genossenschaft.', 'Man muss es spenden.'], 0),
    grammar('t2-gram', 'Partizip II als Adjektiv', {
      intro: 'Das **Partizip II** (renoviert, unterschrieben) kann wie ein Adjektiv vor einem Nomen stehen. Dann bekommt es die normalen **Adjektivendungen**. Die Bedeutung ist **passiv** oder **abgeschlossen**: Der Flur **wurde** renoviert → der renovierte Flur.',
      head: ['Satz', 'Partizip II als Adjektiv'],
      rows: [
        ['Der Flur wurde renoviert.', 'der renoviert**e** Flur'],
        ['Das Dach ist repariert.', 'das repariert**e** Dach'],
        ['Die Verträge wurden unterschrieben.', 'die unterschrieben**en** Verträge'],
        ['Das Geld wurde eingezahlt.', 'das eingezahlt**e** Geld'],
        ['Man hat einen Vorstand gewählt.', 'ein gewählt**er** Vorstand'],
        ['Die Bank hat den Kredit genehmigt.', 'mit dem genehmigt**en** Kredit'],
      ],
      notes: [
        'Die Endungen sind die gleichen wie bei anderen Adjektiven: *das neu**e** Haus → das renoviert**e** Haus*.',
        'Nach *sein* ohne Nomen gibt es keine Endung: *Das Haus ist renoviert.*',
        'Auch unregelmäßige Partizipien funktionieren so: *die geschrieben**e** E-Mail, das verloren**e** Geld, die gefunden**en** Schlüssel*.',
      ],
      en: 'A past participle (renoviert, unterschrieben) can be used like an adjective before a noun and then takes normal adjective endings: der renovierte Flur (the renovated hallway), die unterschriebenen Verträge (the signed contracts). The meaning is passive or completed: something was done to the noun. After sein, without a noun, there is no ending: Das Haus ist renoviert.',
    }),
    gap('t2-gap', ['Das Haus wurde 1904 gebaut. → das 1904 {{gebaute}} Haus', 'Der Kredit wurde genehmigt. → der {{genehmigte}} Kredit', 'Die Anteile wurden verkauft. → die {{verkauften}} Anteile', 'Das Formular ist ausgefüllt. → das {{ausgefüllte}} Formular', 'Wir trinken auf den {{unterschriebenen}} Vertrag! (unterschreiben)'],
      { task: 'Ergänze das Partizip II mit der richtigen Endung.', taskEn: 'Fill in the past participle with the correct adjective ending.' }),
    sort('t2-sort', ['normale Mietwohnung', 'Genossenschaftswohnung'], [['Der Vermieter will Gewinn machen.', 0], ['Der Besitzer kann das Haus jederzeit verkaufen.', 0], ['Eine Kündigung wegen Eigenbedarf ist möglich.', 0], ['Man kauft Anteile und wird Mitglied.', 1], ['Jedes Mitglied hat eine Stimme.', 1], ['Man hat ein dauerhaftes Wohnrecht.', 1]],
      { task: 'Was passt zu welcher Wohnung? Sortiere.', taskEn: 'Sort: a regular rental apartment or an apartment in a cooperative?' }),
    text('t2-fugger', `**Die Fuggerei: Wohnen für 88 Cent im Jahr**

Augsburg, Anfang des 16. Jahrhunderts: Der Kaufmann Jakob Fugger ist einer der reichsten Menschen seiner Zeit. Er verdient sein Geld mit Handel, Bergwerken und Krediten an Kaiser und Könige. Einen Teil davon will er armen Menschen geben. Deshalb gründet er 1521 mitten in Augsburg eine kleine Siedlung für Familien, die ohne eigene Schuld in Not geraten sind: die Fuggerei.

Heute ist sie die älteste Sozialsiedlung der Welt, die noch bewohnt ist. In mehr als 60 Häusern gibt es rund 140 kleine Wohnungen. Die Kaltmiete für ein ganzes Jahr ist bis heute symbolisch: 0,88 Euro, so viel wie früher ein rheinischer Gulden. Heizung und Strom zahlt man extra. Dafür gibt es ein paar Regeln: Die Bewohnerinnen und Bewohner müssen aus Augsburg kommen, katholisch und bedürftig sein. Außerdem sollen sie jeden Tag für die Familie Fugger beten. Um 22 Uhr werden die Tore geschlossen. Wer später kommt, zahlt dem Nachtwächter eine kleine Gebühr.

Die Fuggerei wird bis heute von den Stiftungen der Familie Fugger finanziert. Touristen können die Siedlung besuchen und in einem kleinen Museum sehen, wie man dort früher gewohnt hat.`,
      { kicker: 'Landeskunde', title: 'Sozialer Wohnungsbau seit 1521', task: 'Lies den Text über die Fuggerei in Augsburg.', taskEn: 'Read the text about the Fuggerei in Augsburg, the oldest social housing complex in the world.', en: 'In 1521, the rich merchant Jakob Fugger founded a small settlement in Augsburg for families in need through no fault of their own. Today it has more than 60 houses with about 140 small apartments. The annual base rent is still symbolic: 0.88 euros, the value of an old Rhenish guilder (utilities are extra). Residents must be from Augsburg, Catholic and in need, and they are asked to pray daily for the Fugger family. The gates close at 10 p.m. It is still financed by the Fugger family foundations.' }),
    mcq('t2-fq1', 'Wie viel kostet die Kaltmiete in der Fuggerei?', ['0,88 Euro im Monat', '0,88 Euro im Jahr', '88 Euro im Jahr'], 1),
    mcq('t2-fq2', 'Wer darf in der Fuggerei wohnen?', ['alle, die Augsburg besuchen', 'bedürftige katholische Augsburgerinnen und Augsburger', 'nur Mitglieder der Familie Fugger'], 1),
    compose('t2-comp', 'Berichte einer Freundin in deinen eigenen Worten über die Fuggerei.', [
      ['Sag, was die Fuggerei ist.', 'Say what the Fuggerei is.', ['Die Fuggerei', 'ist', 'eine alte Sozialsiedlung', 'in Augsburg.']],
      ['Sag, wer sie wann gegründet hat.', 'Say who founded it and when.', ['Jakob Fugger', 'gründete', 'sie', 'im Jahr 1521.']],
      ['Nenne das Besondere.', 'Name what is special about it.', ['Die Kaltmiete', 'beträgt', 'nur 88 Cent', 'im Jahr.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences to report on the Fuggerei in your own words.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Billig oder fair?', 'lilac', 15,
  ['Argumente verstehen und äußern', 'über Verhalten diskutieren', 'Partizip I als Adjektiv'], [
    audio('t3-audio', 'Hören: Billig oder fair?', [
      ['moderatorin', 'Willkommen bei „Leipzig am Abend“! Geld regiert die Welt, heißt es. Aber wie gehen wir selbst mit unserem Geld um? Kaufen wir billig oder fair? Bei mir sind Priya, Jonas und, aus Graz zugeschaltet, Herr Yılmaz. Priya, fangen Sie an?'],
      ['priya', 'Gern. Ich finde, wir kaufen viel zu viel. Ein T-Shirt für fünf Euro, das ist doch verrückt! Irgendjemand zahlt den Preis, zum Beispiel die Näherinnen in Bangladesch. Deshalb kaufe ich fast alles gebraucht.'],
      ['jonas', 'Darf ich da kurz einhaken? Das ist ja schön und gut, aber nicht jeder kann sich faire Mode leisten. Bei den steigenden Mieten bleibt vielen Familien am Monatsende einfach nichts übrig.'],
      ['priya', 'Das stimmt schon. Aber gebraucht ist ja oft sogar billiger als neu.'],
      ['moderatorin', 'Herr Yılmaz, Sie sind Stadtplaner, aber Ihre Familie hat eine kleine Firma in Graz. Wie sehen Sie das?'],
      ['herrYilmaz', 'Meine Familie stellt Fahrradteile her und verkauft sie in zwanzig Länder. Ohne Globalisierung gäbe es unsere Firma nicht. Ich sehe also auch die Vorteile: Handel schafft Arbeitsplätze, auch bei uns in Österreich.'],
      ['jonas', 'Ja, aber profitieren wirklich alle davon? Die wachsenden Konzerne werden immer reicher, und die kleinen Läden bei uns im Viertel machen zu.'],
      ['herrYilmaz', 'Da muss ich widersprechen. Nicht jede Firma, die international handelt, ist ein Konzern. Wir haben vierzig Mitarbeiter.'],
      ['moderatorin', 'Ein wichtiger Punkt. Und was kann man als Einzelner tun?'],
      ['priya', 'Weniger kaufen, mehr reparieren, tauschen. Ich bin in einem Tauschring. Da tausche ich Nachhilfe in Mathe gegen Fahrradreparaturen.'],
      ['jonas', 'Okay, das gefällt mir. Je mehr Leute so etwas machen, desto weniger Macht hat das große Geld.'],
      ['moderatorin', 'Ein schönes Schlusswort. Vielen Dank an alle drei!'],
    ], { task: 'Hör die Diskussion im Radio. Welche Argumente hörst du?', taskEn: 'Listen to the radio discussion. Which arguments do you hear? Näherin = seamstress, Konzern = large corporation, einhaken = to cut in.' }),
    mcq('t3-q1', 'Warum kauft Priya fast alles gebraucht?', ['weil billige Mode oft unfair produziert wird', 'weil sie sehr wenig Geld hat', 'weil es in Leipzig keine Geschäfte gibt'], 0),
    mcq('t3-q2', 'Was ist Jonas’ wichtigstes Argument?', ['Faire Mode ist langweilig.', 'Nicht jeder kann sich faire Produkte leisten.', 'Gebrauchte Kleidung ist zu teuer.'], 1),
    mcq('t3-q3', 'Wie sieht Herr Yılmaz die Globalisierung?', ['nur negativ', 'Er sieht auch Vorteile.', 'Sie ist ihm egal.'], 1),
    grammar('t3-gram', 'Partizip I als Adjektiv', {
      intro: 'Das **Partizip I** bildet man so: **Infinitiv + d**: steigen → steigen**d**, lachen → lachen**d**. Vor einem Nomen bekommt es Adjektivendungen. Die Bedeutung ist **aktiv** und **gleichzeitig**: Etwas passiert gerade.',
      head: ['Relativsatz', 'Partizip I als Adjektiv'],
      rows: [
        ['die Mieten, die steigen', 'die steigend**en** Mieten'],
        ['ein Kind, das lacht', 'ein lachend**es** Kind'],
        ['die Konzerne, die wachsen', 'die wachsend**en** Konzerne'],
        ['der Preis, der sinkt', 'der sinkend**e** Preis'],
        ['ein Problem, das wächst', 'ein wachsend**es** Problem'],
        ['Leute, die warten', 'wartend**e** Leute'],
      ],
      notes: [
        'Vergleich: Partizip I = **aktiv, jetzt**: *das schlafende Kind* (es schläft gerade). Partizip II = **passiv oder fertig**: *das renovierte Haus* (es wurde renoviert).',
        'Das Partizip I steht fast immer **vor einem Nomen**.',
        'Manche Partizipien kennst du schon als Adjektive: *spannend, dringend, überzeugend*.',
      ],
      en: 'The present participle is the infinitive + d (steigend, lachend). Before a noun it takes adjective endings: die steigenden Mieten (the rising rents), ein lachendes Kind (a laughing child). It describes an action that is happening at the same time. Compare: das schlafende Kind (the child is sleeping right now) and das renovierte Haus (the house was renovated).',
    }),
    gap('t3-gap', ['Die Mieten steigen. → die {{steigenden}} Mieten', 'Das Kind lacht. → ein {{lachendes}} Kind', 'Die Preise sinken. → die {{sinkenden}} Preise', 'Der Zug fährt. → Spring nie auf einen {{fahrenden}} Zug!', 'Die Leute warten. → Vor der Bank stehen viele {{wartende}} Leute.'],
      { task: 'Ergänze das Partizip I mit der richtigen Endung.', taskEn: 'Fill in the present participle (infinitive + d) with the correct adjective ending.' }),
    sort('t3-sort', ['pro Globalisierung', 'contra Globalisierung'], [['Handel schafft Arbeitsplätze.', 0], ['Viele Produkte werden billiger.', 0], ['Man kann Waren aus der ganzen Welt kaufen.', 0], ['Lange Transportwege schaden der Umwelt.', 1], ['Kleine Läden müssen schließen.', 1], ['In manchen Ländern sind die Arbeitsbedingungen schlecht.', 1]],
      { task: 'Argument für oder gegen die Globalisierung? Sortiere.', taskEn: 'Is it an argument for or against globalization? Sort.' }),
    phrases('t3-phr', 'Argumente äußern und über Verhalten diskutieren', {
      'Ein Argument nennen': ['Ein wichtiges Argument für … ist, dass …', 'Dafür spricht, dass …', 'Dagegen spricht, dass …'],
      'Zustimmen': ['Da hast du völlig recht.', 'Das sehe ich genauso.', 'Das ist ein guter Punkt.'],
      'Widersprechen': ['Da muss ich widersprechen.', 'Das stimmt so nicht ganz.', 'Ja, aber man darf nicht vergessen, dass …'],
      'Über Verhalten sprechen': ['Ich finde es nicht in Ordnung, wenn …', 'Man sollte lieber …', 'Es wäre besser, wenn alle …'],
    }),
    text('t3-tausch', `**Zeit statt Geld: der Tauschring**

In vielen deutschen Städten gibt es Tauschringe. Die Idee ist einfach: Man tauscht Hilfe gegen Hilfe, ganz ohne Euro. Wer eine Stunde lang einem Nachbarn den Computer repariert, bekommt eine Stunde auf seinem Zeitkonto. Mit dieser Stunde kann man sich später etwas anderes holen: Nachhilfe in Mathe, einen Haarschnitt oder Hilfe beim Umzug.

Wichtig ist: Jede Stunde ist gleich viel wert, egal ob jemand Ärztin oder Student ist. Viele Mitglieder sagen, dass sie im Tauschring nicht nur Geld sparen, sondern auch ihre Nachbarn kennenlernen. Kritiker meinen dagegen, dass das System nur in kleinen Gruppen funktioniert, in denen sich alle vertrauen.`,
      { kicker: 'Landeskunde', title: 'Ohne Geld bezahlen', task: 'Lies den Text. Wie funktioniert ein Tauschring?', taskEn: 'Read the text. How does a local exchange network (Tauschring) work?', en: 'In a Tauschring, people trade help for help without money. One hour of work earns one hour on your time account, which you can spend later on something else, like tutoring, a haircut or help with a move. Every hour has the same value, whatever your job. Members say they save money and get to know their neighbors. Critics say it only works in small groups where everyone trusts each other.' }),
    mcq('t3-tq1', 'Was bekommt man im Tauschring für eine Stunde Hilfe?', ['zehn Euro', 'eine Stunde auf dem Zeitkonto', 'einen Gutschein für den Supermarkt'], 1),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 12: Unser Haus', 'rose', 14,
  ['ein Bankgespräch verstehen', 'einen Rundbrief verstehen', 'eine schwierige Situation beschreiben'], [
    text('wg-intro', 'Ein heißer Tag Anfang August. Nach den Protesten und der Anhörung im Rathaus ist die Elbstein Immobilien GmbH bereit, das Haus zu verkaufen, für 2,1 Millionen Euro. Die Mieterinnen und Mieter haben eine Wohnungsgenossenschaft gegründet: die „Fuchsbau eG“. Jetzt sitzen Nele und Herr Lehmann in einem kühlen Büro der Stadtteilbank. Ihnen gegenüber sitzt Frau Häberle, die Bankberaterin. Sie kennt Felix schon. Aber heute geht es nicht um ein kleines Bandkonto, sondern um einen großen Kredit.',
      { kicker: 'Die Geschichte', en: 'A hot day at the beginning of August. After the protests and the hearing at city hall, Elbstein Immobilien GmbH is willing to sell the building for 2.1 million euros. The tenants have founded a housing cooperative, the "Fuchsbau eG". Now Nele and Herr Lehmann are sitting in the bank office of Frau Häberle, the bank advisor who already knows Felix. This time it is not about a small band account, but a big loan.' }),
    audio('wg-bank', 'Folge 12: Bei der Bank', [
      ['frauHaeberle', 'So, dann schauen wir mal. Sie möchten also für die Fuchsbau eG das Haus in der Karl-Heine-Straße kaufen. Der Kaufpreis liegt bei 2,1 Millionen Euro, richtig?'],
      ['nele', 'Genau. Und dazu kommen noch ungefähr 200.000 Euro für das kaputte Dach und die alte Heizung.'],
      ['frauHaeberle', 'Und wie viel Eigenkapital haben Sie?'],
      ['nele', 'Unsere Mitglieder haben Anteile für 380.000 Euro gekauft. Ein Anteil kostet 500 Euro. Seit Felix’ Video melden sich jeden Tag neue Leute, sogar aus Brasilien und Japan. Dazu kommen 120.000 Euro als Direktkredite von Freunden und Nachbarn.'],
      ['frauHaeberle', 'Also eine halbe Million. Nicht schlecht. Und den Rest, 1,8 Millionen, sollen wir finanzieren.'],
      ['herrLehmann', 'Nu, so ist es. Ich weiß, das ist viel Geld. Aber wir zahlen doch heute schon Miete. Das Geld geht dann eben an die Bank statt nach München.'],
      ['frauHaeberle', 'Das ist ein gutes Argument. Wie hoch sind denn die Mieteinnahmen im Jahr?'],
      ['nele', 'Mit dem Restaurant ungefähr 130.000 Euro. Wir haben alles genau ausgerechnet. Hier ist unser Finanzplan, vom ganzen Vorstand unterschrieben.'],
      ['frauHaeberle', 'Sehr ordentlich, das sieht man selten. Bei 3,5 Prozent Zinsen und dreißig Jahren Laufzeit könnte das funktionieren. Aber je mehr Eigenkapital Sie haben, desto besser sind die Konditionen.'],
      ['nele', 'Wir sammeln weiter. Bis Ende des Monats wollen wir noch 50.000 Euro schaffen.'],
      ['frauHaeberle', 'Gut. Und wer ist bei Ihnen im Vorstand?'],
      ['nele', 'Ich und zwei andere Mitglieder. Die Mitgliederversammlung hat uns letzte Woche gewählt.'],
      ['frauHaeberle', 'Dann gebe ich Ihre Unterlagen an unseren Kreditausschuss weiter. Sie hören in einer Woche von mir. Und unter uns: Ich drücke Ihnen die Daumen.'],
      ['herrLehmann', 'Danke, Frau Häberle. Wissen Sie, ich wohne seit 1968 in diesem Haus. So nah dran waren wir noch nie.'],
    ], { task: 'Hör zu. Bekommt die Genossenschaft den Kredit?', taskEn: 'Listen. Will the cooperative get the loan? Laufzeit = loan term, Konditionen = terms, Kreditausschuss = loan committee, die Daumen drücken = to keep your fingers crossed.' }),
    text('wg-brief', `**Rundbrief Nr. 1 der Fuchsbau eG**

Leipzig, 21. August 2027

Liebe Mitglieder, liebe Unterstützerinnen und Unterstützer,

wir haben es geschafft! Die Stadtteilbank hat unseren Kredit genehmigt, und gestern haben wir beim Notar den Kaufvertrag unterschrieben. Herr Vogt war für die Elbstein Immobilien GmbH dabei und hat uns sogar gratuliert. Ab dem 1. Oktober gehört das Haus in der Karl-Heine-Straße uns allen.

Ohne euch wäre das nicht möglich gewesen: 812 Menschen aus 14 Ländern haben Anteile gekauft. Viele kennen den Fuchsbau nur aus dem Video der Fuchsbande. Je mehr Leute mitgemacht haben, desto mutiger sind wir geworden.

Wie geht es weiter? Zuerst wird das kaputte Dach repariert, dann kommt eine neue Heizung. Die Mieten bleiben stabil. Der neu gewählte Vorstand trifft sich jeden ersten Montag im Monat im „Fuchs & Yuzu“. Alle Mitglieder sind herzlich willkommen.

Und jetzt wird gefeiert: Sommerfest im Hof, Samstag, 28. August, ab 16 Uhr. Malte aus dem Fuchs & Yuzu grillt, die Fuchsbande spielt. Bringt gute Laune mit!

Für den Vorstand
Nele`,
      { kicker: 'Zwei Wochen später', title: 'Post von der Genossenschaft', task: 'Lies den Rundbrief. Was ist passiert?', taskEn: 'Read the cooperative’s newsletter. What has happened?', en: 'The bank approved the loan, and yesterday they signed the purchase contract at the notary’s office. Herr Vogt was there for Elbstein and even congratulated them. From October 1, the building belongs to all members. 812 people from 14 countries bought shares, many of whom only know the Fuchsbau from the band’s video. Next steps: repair the roof, then new heating, and rents stay stable. The newly elected board meets on the first Monday of every month at Kenji’s restaurant. Invitation: summer party in the courtyard, Saturday, August 28, from 4 p.m., with food from Malte and music by the Fuchsbande.' }),
    audio('wg-fest', 'Folge 12: Das Sommerfest', [
      ['sofia', 'Leute, wisst ihr, was heute für ein Tag ist? Vor fast genau einem Jahr bin ich hier mit dreiundzwanzig Pflanzen eingezogen!'],
      ['felix', 'Und jetzt sind es wie viele? Hundert?'],
      ['sofia', 'Sechsundvierzig. Aber der halbe Hof gehört ja jetzt auch mir. Also uns allen!'],
      ['kenji', 'Probiert mal die gegrillten Maiskolben mit Miso-Butter. Die hat übrigens Malte gemacht, mein Souschef. Ich habe heute frei. Stellt euch das mal vor!'],
      ['nele', 'Kenji hat frei? Das ist ja fast spannender als der Kaufvertrag.'],
      ['amara', 'Leute, ich muss euch was sagen. Ich habe gestern Herrn Adler in Hamburg angerufen und abgesagt.'],
      ['nele', 'Echt jetzt? Amara! Du bleibst?'],
      ['amara', 'Ich bleibe. Es war wirklich keine leichte Entscheidung. Aber mein Krankenhaus hat mir die Leitung der neuen Station angeboten, und dazu eine Weiterbildung zur Pflegedienstleitung. Und ehrlich gesagt: Je länger ich überlegt habe, desto klarer war es. Mein Zuhause ist hier.'],
      ['felix', 'Darauf spielen wir gleich einen Song! Aber zuerst: Ruhe bitte! Herr Lehmann möchte etwas sagen.'],
      ['herrLehmann', 'Nu, ich mache es kurz. Ich bin 1968 in dieses Haus gezogen. Ich habe hier meine Erika kennengelernt, die Wende erlebt und das halb leere Haus in den Neunzigern. Oft habe ich gedacht: Geld regiert die Welt, da kann man nichts machen.'],
      ['herrLehmann', 'Aber ihr habt mir gezeigt, dass das nicht stimmt. Ein Haus gehört nicht dem, der am meisten bezahlt, sondern denen, die darin leben. Auf den Fuchsbau!'],
      ['sofia', 'Auf den Fuchsbau!'],
      ['felix', 'Eins, zwei, drei, vier: „Unser Haus“!'],
    ], { task: 'Hör zu. Was erzählen die Personen auf dem Sommerfest?', taskEn: 'Listen. What do the friends share at the summer party? Souschef = sous-chef, absagen = to decline, Weiterbildung = further training.' }),
    mcq('wg-q1', 'Wie viel Geld soll die Bank finanzieren?', ['500.000 Euro', '1,8 Millionen Euro', '2,1 Millionen Euro'], 1),
    mcq('wg-q2', 'Woher kommt das Eigenkapital der Genossenschaft?', ['von der Stadt Leipzig', 'aus Anteilen und Direktkrediten', 'von der Elbstein Immobilien GmbH'], 1),
    mcq('wg-q3', 'Was ist am 20. August passiert?', ['Der Kaufvertrag wurde unterschrieben.', 'Das Dach wurde repariert.', 'Das Sommerfest hat stattgefunden.'], 0),
    mcq('wg-q4', 'Warum bleibt Amara in Leipzig?', ['Hamburg hat ihr abgesagt.', 'Sie bekommt eine neue Station und eine Weiterbildung, und Leipzig ist ihr Zuhause.', 'Sie möchte in Kenjis Restaurant arbeiten.'], 1),
    mcq('wg-q5', 'Was sagt Herr Lehmann in seiner Rede?', ['Geld regiert die Welt, da kann man nichts machen.', 'Ein Haus gehört denen, die darin leben.', 'Er zieht bald aus.'], 1),
    phrases('wg-phr', 'Eine schwierige Situation beschreiben', {
      'Das Problem beschreiben': ['Ich war in einer schwierigen Lage.', 'Ich wusste nicht, was ich machen sollte.', 'Das war keine leichte Entscheidung.'],
      'Abwägen': ['Auf der einen Seite …, auf der anderen Seite …', 'Für Hamburg sprach, dass …', 'Je länger ich überlegt habe, desto …'],
      'Die Lösung': ['Am Ende habe ich mich für … entschieden.', 'Zum Glück hat sich alles geklärt.', 'Jetzt bin ich froh, dass …'],
    }),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Komparativ in je … desto', 'Partizip I und II im Vergleich'], [
    grammar('g-1', 'je … desto: wichtige Komparative', {
      intro: 'In Sätzen mit **je … desto / umso** brauchst du immer den **Komparativ**. Viele kurze Adjektive bekommen einen **Umlaut**, manche sind ganz unregelmäßig.',
      head: ['Adjektiv', 'Komparativ', 'Beispiel'],
      rows: [
        ['viel', '**mehr**', 'Je **mehr** wir sparen, desto …'],
        ['gut', '**besser**', '… desto **besser** sind die Konditionen.'],
        ['gern', '**lieber**', 'Je **lieber** ich hier wohne, …'],
        ['hoch', '**höher**', 'Je **höher** die Zinsen sind, …'],
        ['teuer', '**teurer**', '… desto **teurer** wird der Kredit.'],
        ['lang / alt / groß', '**länger / älter / größer**', 'Je **älter** das Haus ist, …'],
      ],
      notes: [
        'Wortstellung: **Je + Komparativ** … Verb am Ende, **desto / umso + Komparativ + Verb** + Subjekt …',
        'Der **je**-Teil steht meistens vorne. Man kann ihn aber auch nach hinten stellen: *Die Konditionen sind **umso** besser, **je** mehr Eigenkapital Sie haben.*',
      ],
      en: 'Sentences with je … desto / umso always need comparatives. Many short adjectives take an umlaut (höher, älter, größer, länger), and some are irregular (viel → mehr, gut → besser, gern → lieber). hoch loses the c (höher), and teuer loses an e (teurer). The je part usually comes first, but it can also come second.',
    }),
    grammar('g-2', 'Partizip I und Partizip II als Adjektiv', {
      head: ['', 'Partizip I', 'Partizip II'],
      rows: [
        ['Bildung', 'Infinitiv + **d**: steigen**d**, lachen**d**', '**ge**mach**t**, **ge**schrieb**en**, renovier**t**'],
        ['Bedeutung', 'aktiv, passiert gerade', 'passiv oder abgeschlossen'],
        ['Beispiel', 'die steigend**e** Miete', 'die unterschrieben**en** Verträge'],
        ['Vergleich', 'das kochend**e** Wasser (es kocht gerade)', 'das gekocht**e** Ei (es ist fertig)'],
        ['als Relativsatz', 'die Miete, **die steigt**', 'die Verträge, **die unterschrieben wurden**'],
      ],
      notes: [
        'Beide bekommen **Adjektivendungen**: *der renoviert**e** Flur, das repariert**e** Dach, die steigend**e** Miete, die unterschrieben**en** Verträge*.',
        'Partizipien als Adjektive findest du oft in Zeitungen und informativen Texten. Sie machen Sätze kürzer.',
      ],
      en: 'Present participle (Partizip I): infinitive + d, active meaning, happening right now: die steigende Miete (the rising rent). Past participle (Partizip II): passive or completed meaning: die unterschriebenen Verträge (the signed contracts). Both take normal adjective endings before a noun. They are common in newspapers and informative texts because they make sentences shorter.',
    }),
    mcq('g-q1', 'Je ___ du kommst, desto besser.', ['früher', 'früh', 'am frühesten'], 0),
    mcq('g-q2', 'Je mehr wir sparen, desto schneller ___.', ['wir können das Haus kaufen', 'können wir das Haus kaufen', 'wir das Haus kaufen können'], 1, { why: 'Nach desto + Komparativ kommt sofort das Verb.' }),
    mcq('g-q3', 'Hier ist der ___ Vertrag. (unterschreiben)', ['unterschreibende', 'unterschriebene', 'unterschrieben'], 1),
    mcq('g-q4', 'Im Hof spielt ein ___ Kind. (lachen)', ['gelachtes', 'lachendes', 'lachende'], 1, { why: 'Partizip I: Das Kind lacht gerade. ein + neutral: -es.' }),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 18,
  ['Strategie: in Diskussionen zu Wort kommen', 'Aussprache: Wortakzent', 'Prüfungstraining: Schreiben Teil 2'], [
    tip('u-tip', 'Strategie: In Diskussionen zu Wort kommen', 'In einer lebhaften Diskussion reden oft alle durcheinander. Wie kommst du zu Wort, ohne unhöflich zu sein?\n\n1. Warte auf eine **kurze Pause** und melde dich mit einer festen Formel: *Darf ich da kurz einhaken?*\n2. Nimm Blickkontakt auf oder heb kurz die Hand.\n3. Wenn dich jemand unterbricht, bleib freundlich, aber klar: *Moment, ich bin noch nicht fertig.*\n4. Gib das Wort am Ende weiter: *Wie siehst du das?* So wirkst du fair und kompetent.'),
    phrases('u-phr', 'Zu Wort kommen', {
      'Sich zu Wort melden': ['Darf ich kurz etwas sagen?', 'Darf ich da kurz einhaken?', 'Ich möchte dazu etwas ergänzen.'],
      'Wenn man unterbrochen wird': ['Moment, ich bin noch nicht fertig.', 'Lass mich bitte ausreden.', 'Darf ich den Gedanken noch zu Ende bringen?'],
      'Das Wort weitergeben': ['Was meinst du dazu?', 'Wie siehst du das?'],
    }),
    mcq('u-q1', 'In einer Diskussion möchtest du etwas sagen, aber Jonas redet und redet. Was sagst du höflich?', ['Sei endlich still!', 'Darf ich da kurz einhaken?', 'Das ist falsch, Jonas.'], 1),
    audio('u-aus', 'Aussprache: Wortakzent', [
      ['frauKlein', 'Heute geht es um den Wortakzent. Die meisten deutschen Wörter betonen die erste Silbe. Hör mal: Konto. Sparen. Geld. Rechnung.'],
      ['frauKlein', 'Bei zusammengesetzten Wörtern ist meistens der erste Teil betont: Sparschwein. Geldautomat. Mietvertrag.'],
      ['frauKlein', 'Trennbare Verben betonen auch den Anfang: abheben, einzahlen, mitmachen.'],
      ['frauKlein', 'Aber Achtung: Bei Verben mit be-, ver- oder ge- ist die zweite Silbe betont: bezahlen, verdienen, genehmigen.'],
      ['frauKlein', 'Und viele Wörter aus anderen Sprachen betonen eine spätere Silbe: Kredit. Prozent. finanzieren. Globalisierung. Hör noch einmal: Globalisierung.'],
      ['frauKlein', 'Mein Tipp: Klopf beim Sprechen leise auf den Tisch, genau bei der betonten Silbe. Dann merkst du dir den Akzent besser.'],
    ], { task: 'Hör zu und sprich nach. Wo ist der Akzent?', taskEn: 'Listen and repeat. Which syllable is stressed? Most German words stress the first syllable (KON-to, SPAR-schwein, AB-heben). Verbs with be-, ver-, ge- stress the second syllable (be-ZAH-len), and many loanwords stress a later syllable (Kre-DIT, Pro-ZENT, Globali-SIE-rung).' }),
    sort('u-sort', ['Akzent auf der ersten Silbe', 'Akzent nicht auf der ersten Silbe'], [['das Konto', 0], ['sparen', 0], ['abheben', 0], ['der Geldautomat', 0], ['der Kredit', 1], ['bezahlen', 1], ['das Prozent', 1], ['verdienen', 1]],
      { task: 'Wo ist der Akzent? Sprich die Wörter laut und sortiere.', taskEn: 'Where is the stress? Say each word out loud and sort.' }),
    tip('u-pt-tip', 'Prüfungstraining: Schreiben Teil 2', 'In **Schreiben Teil 2** liest du eine Meinung zu einem Thema, zum Beispiel im Online-Forum einer Fernsehsendung. Dann schreibst du **deine Meinung** (circa 80 Wörter). Du hast dafür etwa 25 Minuten.\n\n1. **Beziehe dich** am Anfang kurz auf den Beitrag: *Ich habe den Beitrag von … gelesen.*\n2. Sag klar **deine Meinung** und **begründe** sie.\n3. Nenne ein **Beispiel** aus deinem Leben oder deinem Land.\n4. Schreib einen kurzen **Schluss**. Eine Anrede und ein Gruß sind im Forum nicht nötig, aber auch nicht falsch.\n5. Benutze Konnektoren: *weil, deshalb, außerdem, je … desto*.'),
    text('u-pt-text', `**Online-Forum „Leipzig am Abend“: Sollte Wohnen ein Grundrecht sein?**

**Klaus_M:** Wohnen ist ein Markt wie jeder andere. Wer ein Haus kauft, trägt das Risiko und darf damit auch Geld verdienen. Wenn der Staat die Mieten kontrolliert, baut niemand mehr neue Wohnungen. Am Ende gibt es noch weniger Wohnraum, und alle haben ein Problem. Ich finde: Wer eine schöne Wohnung will, muss eben mehr arbeiten.

**Aufgabe:** Du hast im Radio eine Diskussion zum Thema „Sollte Wohnen ein Grundrecht sein?“ gehört. Im Online-Forum der Sendung findest du diese Meinung. Schreib nun deine Meinung (circa 80 Wörter).`,
      { kicker: 'Prüfungstraining', title: 'Schreiben Teil 2', task: 'Lies den Beitrag und die Aufgabe.', taskEn: 'Read the forum post and the task. You will write your own opinion of about 80 words.' }),
    mcq('u-pt-q1', 'Welcher Satz ist ein guter Anfang für deinen Beitrag?', ['Hallo Klaus, du hast keine Ahnung.', 'Ich habe den Beitrag von Klaus gelesen und sehe das etwas anders.', 'Wohnen. Grundrecht. Ja.'], 1, { task: 'Was passt am besten?', taskEn: 'Which sentence fits best?' }),
    mcq('u-pt-q2', 'Was gehört unbedingt in deinen Beitrag?', ['deine Meinung mit Begründung und einem Beispiel', 'eine Liste mit allen Mietpreisen in Leipzig', 'deine Adresse und Telefonnummer'], 0),
    compose('u-pt-comp', 'Schreib deinen Forumsbeitrag: Sollte Wohnen ein Grundrecht sein?', [
      ['Beziehe dich auf den Beitrag.', 'Refer to the post.', ['Ich', 'sehe', 'das', 'ganz anders', 'als Klaus.']],
      ['Sag deine Meinung.', 'Give your opinion.', ['Meiner Meinung nach', 'sollte', 'Wohnen', 'ein Grundrecht', 'sein.']],
      ['Begründe sie mit je … desto.', 'Give a reason with je … desto.', ['Je teurer', 'die Mieten', 'werden,', 'desto mehr', 'Menschen', 'verlieren', 'ihr Zuhause.']],
    ], { task: 'Bau die Sätze für deinen Beitrag.', taskEn: 'Build the sentences for your forum post. Then add an example (for instance the Fuggerei) and a short conclusion yourself.' }),
    phrases('u-pt-phr', 'Die eigene Meinung im Forum', {
      'Einleitung': ['Ich habe deinen Beitrag gelesen und …', 'Zu diesem Thema möchte ich auch etwas sagen.'],
      'Meinung': ['Meiner Meinung nach …', 'Ich bin davon überzeugt, dass …', 'Ich bin (nicht) der Meinung, dass …'],
      'Begründen': ['Ein wichtiger Grund ist, dass …', 'Das sieht man zum Beispiel an …', 'Außerdem …'],
      'Schluss': ['Deshalb finde ich, dass …', 'Zusammenfassend kann man sagen: …'],
    }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 14,
  ['Wörter wiederholen', 'den Stand einschätzen', 'Plattform 4: Kapitel 10 bis 12'], [
    cards('w-cards', [
      ['das Konto', 'dort ist dein Geld bei der Bank', 'bank account'], ['der Kredit', 'geliehenes Geld von der Bank', 'loan'], ['die Zinsen', 'Geld, das man für einen Kredit zahlt oder fürs Sparen bekommt', 'interest'],
      ['sparen', 'Geld nicht ausgeben, sondern behalten', 'to save'], ['abheben', 'Geld vom Konto holen', 'to withdraw'], ['überweisen', 'Geld auf ein anderes Konto schicken', 'to transfer'],
      ['die Schulden', 'Geld, das man jemandem zurückzahlen muss', 'debt'], ['das Gehalt', 'Geld, das man jeden Monat für die Arbeit bekommt', 'salary'], ['die Genossenschaft', 'eine Firma, die allen Mitgliedern gehört', 'cooperative'],
      ['der Anteil', 'ein Teil von einer Firma, den man kauft', 'share'], ['die Globalisierung', 'die Welt wächst durch Handel zusammen', 'globalization'], ['sich leisten', 'genug Geld für etwas haben', 'to afford'],
    ]),
    phrases('w-phr', 'Über Geld sprechen und berichten', {
      'Sparen': ['Ich spare jeden Monat ein bisschen.', 'Ich lege Geld für den Urlaub zur Seite.'],
      'Ausgeben': ['Das kann ich mir nicht leisten.', 'Dafür gebe ich gern Geld aus.', 'Das ist rausgeschmissenes Geld.'],
      'Über etwas berichten': ['Zuerst …, danach …, am Ende …', 'Das Wichtigste war, dass …', 'Zum Schluss hat es geklappt.'],
    }),
    match('w-match', [['der Tresor', 'Darin liegen in der Bank Geld und Gold sicher.'], ['der Taschenrechner', 'Damit rechnet man schnell Zahlen aus.'], ['der Kassenbon', 'Den bekommt man an der Kasse nach dem Einkauf.'], ['der Kaufvertrag', 'Den unterschreibt man, wenn man zum Beispiel ein Haus kauft.'], ['der Stempel', 'Damit macht man ein offizielles Zeichen auf ein Dokument.'], ['der Kontoauszug', 'Darauf sieht man, wie viel Geld auf dem Konto ist.'], ['der Container', 'Darin transportieren Schiffe Waren um die ganze Welt.']],
      { task: 'Was ist was?', taskEn: 'Match each object to its description.' }),
    gap('w-gap', ['Die Bank gibt der Genossenschaft einen {{Kredit}}.', 'Für den Kredit zahlt man jedes Jahr {{Zinsen}}.', 'Die Mitglieder kaufen {{Anteile}}.', 'Nele ist jetzt im {{Vorstand}} der Fuchsbau eG.'],
      { bank: ['Kredit', 'Zinsen', 'Anteile', 'Vorstand'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
    checklist('w-check', ['Ich kann auf der Bank ein Konto eröffnen und nach Kosten fragen.', 'Ich kann Informationen auf einer Webseite verstehen.', 'Ich kann nach Tätigkeiten fragen.', 'Ich kann Argumente verstehen und meine Meinung begründen.', 'Ich kann Sätze mit je … desto bilden.', 'Ich kann Partizipien als Adjektive benutzen.', 'Ich kann über die Fuggerei berichten.']),
    text('w-pf-intro', '**Plattform 4: Kapitel 10 bis 12.** Das Ende der Staffel! Wiederhole noch einmal: das Passiv, Artikelwörter als Pronomen, Adjektive als Nomen, Relativsätze mit was und wo, je … desto und Partizipien als Adjektive.',
      { kicker: 'Plattform 4', en: 'Plattform 4: a short review of chapters 10 to 12, the last review of the B1 course.' }),
    gap('w-pf-gap', ['Der Antrag {{wird}} von der Bank geprüft. (Passiv Präsens)', 'Der Vertrag {{wurde}} im August unterschrieben. (Passiv Präteritum)', 'Das Dach muss bald repariert {{werden}}. (Passiv mit Modalverb)'],
      { task: 'Passiv: Ergänze die Form von werden.', taskEn: 'Passive voice: fill in the right form of werden.' }),
    mcq('w-pf-q1', 'Hast du einen Kuli? – Ja, hier ist ___.', ['einer', 'eins', 'ein'], 0, { task: 'Was passt?', taskEn: 'Which word fits?', why: 'einer steht für „ein Kuli“ (maskulin, Nominativ).' }),
    mcq('w-pf-q2', 'Viele ___ haben Felix’ Video geteilt. (jugendlich)', ['Jugendliche', 'Jugendlichen', 'Jugendlicher'], 0, { why: 'Adjektiv als Nomen: viele + Plural ohne Artikel: -e.' }),
    mcq('w-pf-q3', 'Leipzig ist die Stadt, ___ ich mich zu Hause fühle.', ['was', 'wo', 'die'], 1, { why: 'wo steht nach einem Ort.' }),
    mcq('w-pf-q4', 'Das ist das Beste, ___ uns passieren konnte.', ['was', 'das', 'wo'], 0, { why: 'Nach das Beste, alles, nichts oder etwas steht was.' }),
    order('w-pf-order', ['Je länger', 'ich', 'hier', 'wohne,', 'desto', 'besser', 'gefällt', 'es', 'mir.'], { task: 'Bau den Satz mit je … desto.', taskEn: 'Build the sentence with je … desto.' }),
    mcq('w-pf-q5', 'Wegen der ___ Mieten haben die Mieter protestiert. (steigen)', ['steigenden', 'steigende', 'steigend'], 0, { why: 'Partizip I mit Endung: der (Genitiv Plural) + -en.' }),
  ]);

export const b1k12: Chapter = {
  id: 'b1-k12', number: 12, title: 'Geld regiert die Welt?', theme: 'Bank, Geld, Globalisierung',
  grammar: 'Sätze mit je …, desto / umso … Partizip II als Adjektiv (das renovierte Haus). Partizip I als Adjektiv (die steigenden Mieten).',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['b1k12-sprint', 'b1k12-memory', 'b1k12-satzbau', 'b1k12-artikel'],
  exam: [
    x(1, mcq('x1', 'Je mehr man arbeitet, ___ weniger Freizeit hat man.', ['desto', 'dann', 'als'], 0)),
    x(1, mcq('x2', 'Je ___ die Zinsen sind, desto teurer ist der Kredit.', ['hoch', 'höher', 'am höchsten'], 1)),
    x(1, mcq('x3', 'Das ___ Haus gefällt allen. (renovieren)', ['renovierte', 'renovierende', 'renoviert'], 0)),
    x(3, gap('x4', ['die {{steigenden}} Preise (steigen)', 'der {{unterschriebene}} Vertrag (unterschreiben)', 'ein {{weinendes}} Kind (weinen)'], { task: 'Ergänze das Partizip mit der richtigen Endung.', taskEn: 'Fill in the participle with the correct ending.' })),
    x(3, gap('x5', ['Ich möchte gern ein Konto {{eröffnen}}.', 'Ich möchte 100 Euro {{abheben}}.', 'Für den Kredit zahlen wir 3,5 Prozent {{Zinsen}}.'], { bank: ['eröffnen', 'abheben', 'Zinsen'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' })),
    x(1, mcq('x6', 'Warum überweist Sofia Geld nach Brasilien?', ['Ihre Schwester heiratet.', 'Sie kauft dort eine Wohnung.', 'Ihre Mutter hat Geburtstag.'], 0),
      audio('x-st1', 'Hören: Geld nach Brasilien', [
        ['frauHaeberle', 'Guten Tag, was kann ich für Sie tun?'],
        ['sofia', 'Hallo! Ich möchte Geld nach Brasilien überweisen, an meine Schwester. Sie heiratet im Oktober.'],
        ['frauHaeberle', 'Oh, herzlichen Glückwunsch! Wie viel möchten Sie denn überweisen?'],
        ['sofia', 'Fünfhundert Euro. Was kostet das?'],
        ['frauHaeberle', 'Eine Überweisung in ein Land außerhalb Europas kostet bei uns fünfzehn Euro. Dazu kommt noch der Wechselkurs. Und es dauert drei bis fünf Arbeitstage.'],
        ['sofia', 'Fünf Tage? Okay, das reicht. Die Hochzeit ist ja erst in sechs Wochen.'],
        ['frauHaeberle', 'Gut. Dann brauche ich die Kontodaten Ihrer Schwester und den Namen ihrer Bank.'],
        ['sofia', 'Moment, die hat sie mir geschickt. Hier, auf dem Handy.'],
      ])),
    x(1, mcq('x7', 'Was kostet die Überweisung? (Hörtext oben)', ['fünf Euro', 'fünfzehn Euro', 'fünfzig Euro'], 1)),
    x(1, mcq('x8', 'Wie oft trifft sich der Tauschring?', ['jeden Donnerstag', 'einmal im Monat', 'zweimal im Monat'], 1),
      text('x-st2', '**Tauschring Plagwitz: Neue Mitglieder willkommen!**\nDu kannst Fahrräder reparieren, kochen oder Englisch unterrichten? Bei uns tauschst du deine Zeit gegen die Zeit anderer Leute. Eine Stunde ist immer eine Stunde wert.\nTreffen: am zweiten Donnerstag im Monat, 19 Uhr, im „Fuchs & Yuzu“, Karl-Heine-Straße\nMitgliedsbeitrag: 12 Euro im Jahr\nBitte bring zum ersten Treffen eine Liste mit: Was kannst du anbieten?', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was sollst du zum ersten Treffen mitbringen? (Text oben)', ['12 Euro in bar', 'eine Liste mit deinen Angeboten', 'ein Fahrrad'], 1)),
    x(2, order('x10', ['Je früher', 'wir', 'anfangen,', 'desto schneller', 'sind', 'wir fertig.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' })),
    x(1, mcq('x11', 'In einer Diskussion möchtest du widersprechen. Was sagst du?', ['Da muss ich widersprechen.', 'Das sehe ich genauso.', 'Da hast du völlig recht.'], 0)),
    x(1, mcq('x12', 'Was ist eine Genossenschaft?', ['eine Firma, die ihren Mitgliedern gehört', 'eine Bank, die dem Staat gehört', 'ein Verein ohne Mitglieder'], 0)),
  ],
};

export const gamesB1k12: GameDef[] = [
  {
    id: 'b1k12-sprint', engine: 'sprint', course: 'b1', title: 'Partizip-Sprint', blurb: 'steigend oder gestiegen? Welche Form passt? 60 Sekunden!', skill: 'Partizip als Adjektiv', tone: 'mint', chapter: 12, emoji: '⚡',
    rules: 'Du siehst ein Nomen mit Lücke und ein Verb. Tippe auf die richtige Partizip-Form mit der richtigen Endung.', label: 'Partizip als Adjektiv',
    items: [
      { q: 'die ___ Miete (steigen)', a: 'steigende', wrong: ['steigend', 'steigenden'] },
      { q: 'das ___ Dach (reparieren)', a: 'reparierte', wrong: ['reparierten', 'repariert'] },
      { q: 'die ___ Verträge (unterschreiben)', a: 'unterschriebenen', wrong: ['unterschriebene', 'unterschreibten'] },
      { q: 'ein ___ Kind (lachen)', a: 'lachendes', wrong: ['lachende', 'gelachtes'] },
      { q: 'der ___ Flur (renovieren)', a: 'renovierte', wrong: ['renovierten', 'renoviert'] },
      { q: 'mit dem ___ Kredit (genehmigen)', a: 'genehmigten', wrong: ['genehmigte', 'genehmigtem'] },
      { q: 'die ___ Preise (sinken)', a: 'sinkenden', wrong: ['sinkende', 'gesinkten'] },
      { q: 'ein ___ Problem (wachsen)', a: 'wachsendes', wrong: ['wachsender', 'gewachstes'] },
      { q: 'das ___ Geld (sparen)', a: 'gesparte', wrong: ['gesparten', 'sparte'] },
      { q: 'der ___ Zug (fahren)', a: 'fahrende', wrong: ['fahrenden', 'gefahrte'] },
      { q: 'die ___ Anteile (verkaufen)', a: 'verkauften', wrong: ['verkaufte', 'verkauft'] },
      { q: 'ein ___ Vorstand (wählen)', a: 'gewählter', wrong: ['gewählte', 'gewählten'] },
    ],
  },
  {
    id: 'b1k12-memory', engine: 'memory', course: 'b1', title: 'Geld-Memory', blurb: 'Bank und Geld: Finde die Paare.', skill: 'Wortschatz Bank und Geld', tone: 'lilac', chapter: 12, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein deutsches Wort und seine englische Bedeutung.', kinds: ['Deutsch', 'Englisch'],
    pairs: [['das Konto', 'account'], ['der Kredit', 'loan'], ['die Zinsen', 'interest'], ['der Anteil', 'share'], ['die Überweisung', 'bank transfer'], ['das Gehalt', 'salary'], ['die Schulden', 'debt'], ['sparen', 'to save'], ['abheben', 'to withdraw'], ['die Genossenschaft', 'cooperative']],
  },
  {
    id: 'b1k12-satzbau', engine: 'satzbau', course: 'b1', title: 'Je-desto-Baukasten', blurb: 'Je mehr du übst, desto besser!', skill: 'je … desto, Partizipien', tone: 'sky', chapter: 12, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Im je-Teil steht das Verb am Ende, nach desto + Komparativ kommt sofort das Verb.',
    sentences: [
      { parts: ['Je mehr', 'Leute', 'mitmachen,', 'desto besser.'], hint: 'Kurzform ohne Verb im zweiten Teil' },
      { parts: ['Je länger', 'Felix', 'übt,', 'desto besser', 'spielt', 'er.'], hint: 'desto + Komparativ + Verb' },
      { parts: ['Je höher', 'die Zinsen', 'sind,', 'umso teurer', 'wird', 'der Kredit.'], hint: 'umso = desto' },
      { parts: ['Je mehr', 'wir', 'sparen,', 'desto schneller', 'können', 'wir das Haus', 'kaufen.'], hint: 'Modalverb nach desto + Komparativ' },
      { parts: ['Das', 'renovierte', 'Haus', 'gehört', 'jetzt', 'allen.'], hint: 'Partizip II als Adjektiv' },
      { parts: ['Die', 'steigenden', 'Mieten', 'sind', 'ein großes Problem.'], hint: 'Partizip I als Adjektiv' },
      { parts: ['Nele', 'zeigt', 'den', 'unterschriebenen', 'Vertrag.'], hint: 'Akkusativ: den …-en' },
      { parts: ['Ein', 'lachendes', 'Kind', 'spielt', 'im Hof.'], hint: 'ein + neutral: -es' },
    ],
  },
  {
    id: 'b1k12-artikel', engine: 'regen', course: 'b1', title: 'Artikel-Regen', blurb: 'der, die oder das? Bank, Geld und Genossenschaft.', skill: 'Artikel', tone: 'rose', chapter: 12, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('das Konto, der Kredit, die Bank, das Geld, die Genossenschaft, der Anteil, die Überweisung, das Gehalt, die Rechnung, der Vertrag, die Globalisierung, das Eigenkapital, der Vorstand, die Miete, der Geldautomat, die Münze, das Sparschwein, der Zins'),
  },
];
