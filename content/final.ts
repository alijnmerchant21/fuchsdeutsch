import type { ExamItem } from './types';
import { audio, gap, mcq, order, text, x } from './helpers';

// Final exam in the format of the Goethe-Zertifikat: four modules, each scored out of 100 percent,
// each passed at 60. Every task is checked automatically. Schreiben and Sprechen test the building
// blocks of writing and speaking (sentence building, connectors, the right reaction in a situation).

const viertage = text('f-l1', `Ein Ingenieurbüro in Freiburg hat vor zwei Jahren die Viertagewoche eingeführt. Die 34 Mitarbeitenden arbeiten seitdem von Montag bis Donnerstag, bei gleichem Gehalt. „Am Anfang hatten wir Angst, dass die Arbeit liegen bleibt“, erzählt die Geschäftsführerin Ilka Thamm. „Das Gegenteil ist passiert.“

Bevor das Büro die neue Woche einführte, hatte ein Team drei Monate lang alle Besprechungen gezählt. Das Ergebnis: Fast ein Drittel der Arbeitszeit ging für Treffen verloren, die niemand brauchte. Heute dauert keine Besprechung länger als 25 Minuten, und zwischen neun und zwölf Uhr werden keine internen Mails geschrieben.

Nicht alle waren sofort begeistert. Einige ältere Kolleginnen und Kollegen fanden die langen Tage anstrengend. Für sie gibt es inzwischen eine zweite Möglichkeit: fünf kürzere Tage. Die Zahl der Krankheitstage ist seit der Umstellung deutlich gesunken, und auf freie Stellen bewerben sich dreimal so viele Menschen wie früher.`, { kicker: 'Lesen, Teil 1', title: 'Vier Tage arbeiten, fünf Tage Lohn?' });

const nachbarn = text('f-l2', `**Liebe Nachbarinnen und Nachbarn,**

unser Haus bekommt ein Tauschregal! Ab dem 1. Juni steht es im Erdgeschoss neben den Briefkästen. Dort kann alles abgestellt werden, was noch gut ist, aber nicht mehr gebraucht wird: Bücher, Geschirr, Spielzeug, kleine Elektrogeräte. Kleidung bitte nur gewaschen. Was nach vier Wochen noch im Regal liegt, wird von uns zu einer Hilfsorganisation gebracht.

Damit das Regal ordentlich bleibt, suchen wir zwei Personen, die einmal pro Woche nachsehen. Wer Lust hat, meldet sich bitte bis zum 20. Mai bei Familie Okafor im dritten Stock.

Übrigens: Am Samstag, dem 7. Juni, feiern wir die Eröffnung mit einem kleinen Hoffest. Wer einen Kuchen mitbringen könnte, trägt sich bitte in die Liste an der Haustür ein.`, { kicker: 'Lesen, Teil 2', title: 'Aushang im Treppenhaus' });

export const finalLesen: ExamItem[] = [
  x(4, mcq('f-l1a', 'Was hat sich für die Mitarbeitenden geändert?', ['Sie arbeiten einen Tag weniger und verdienen weniger.', 'Sie arbeiten einen Tag weniger und verdienen gleich viel.', 'Sie arbeiten fünf kürzere Tage.'], 1), viertage),
  x(4, mcq('f-l1b', 'Was hatte das Team vor der Umstellung herausgefunden?', ['Viele Besprechungen waren unnötig.', 'Es wurden zu wenige Mails geschrieben.', 'Ein Drittel der Mitarbeitenden war oft krank.'], 0)),
  x(4, mcq('f-l1c', 'Warum gibt es eine zweite Möglichkeit?', ['Weil die Kundschaft freitags anruft.', 'Weil manche die langen Tage zu anstrengend fanden.', 'Weil das Gehalt zu niedrig war.'], 1)),
  x(4, mcq('f-l1d', 'Welche Folge nennt der Text?', ['Es gibt weniger Bewerbungen.', 'Es gibt mehr Besprechungen.', 'Die Mitarbeitenden sind seltener krank.'], 2)),
  x(3, mcq('f-l2a', 'Was darf man in das Tauschregal stellen?', ['nur Bücher', 'gut erhaltene Dinge, die man nicht mehr braucht', 'kaputte Elektrogeräte'], 1), nachbarn),
  x(3, mcq('f-l2b', 'Was passiert mit Dingen, die niemand nimmt?', ['Sie werden weggeworfen.', 'Sie bleiben für immer im Regal.', 'Sie werden nach vier Wochen gespendet.'], 2)),
  x(3, mcq('f-l2c', 'Was soll man bis zum 20. Mai tun, wenn man helfen will?', ['sich bei Familie Okafor melden', 'einen Kuchen backen', 'sich in die Liste an der Haustür eintragen'], 0)),
];

const schlaf = audio('f-h1', 'Hören, Teil 1: Radiointerview „Besser schlafen“', [
  ['erzaehler', 'Willkommen bei „Wissen am Morgen“. Mein Gast ist heute die Schlafforscherin Doktor Carla Wenning. Frau Wenning, warum sind so viele Menschen morgens müde?'],
  ['frauBaumann', 'Weil die meisten gegen ihre innere Uhr leben. Schule und Arbeit beginnen für viele einfach zu früh.'],
  ['erzaehler', 'Kann man seine innere Uhr nicht umstellen?'],
  ['frauBaumann', 'Nur ein bisschen. Tageslicht am Morgen hilft. Wer nach dem Aufstehen zwanzig Minuten draussen ist, wird abends früher müde.'],
  ['erzaehler', 'Und das Handy im Bett?'],
  ['frauBaumann', 'Das Licht ist nicht das grösste Problem. Schlimmer ist, dass uns Nachrichten wach halten. Ich empfehle, das Telefon eine Stunde vor dem Schlafen wegzulegen.'],
  ['erzaehler', 'Was halten Sie vom Mittagsschlaf?'],
  ['frauBaumann', 'Sehr viel, aber kurz. Nach zwanzig Minuten sollte Schluss sein, sonst fühlt man sich danach schlechter als vorher.'],
]);

const durchsage = audio('f-h2', 'Hören, Teil 2: Drei kurze Nachrichten', [
  ['moderatorin', 'Nummer eins. Eine Durchsage am Bahnhof.'],
  ['erzaehler', 'Achtung an Gleis sieben. Der Intercity nach München, planmäßige Abfahrt vierzehn Uhr zwölf, fährt heute wegen einer Störung von Gleis neun. Er wird voraussichtlich zwanzig Minuten später abfahren.'],
  ['moderatorin', 'Nummer zwei. Eine Nachricht auf dem Anrufbeantworter.'],
  ['frauHuber', 'Grüß Gott, Ordination Doktor Lechner. Leider müssen wir Ihren Termin am Donnerstag absagen, weil die Frau Doktor krank ist. Bitte rufen Sie uns zurück, damit wir einen neuen Termin vereinbaren können.'],
  ['moderatorin', 'Nummer drei. Eine Sprachnachricht von einem Kollegen.'],
  ['seppi', 'Servus, hier ist der Sepp. Die Besprechung morgen ist von zehn auf elf verschoben worden. Der Raum bleibt gleich. Und bring bitte deinen Laptop mit, wir schauen uns die neuen Zahlen an.'],
]);

export const finalHoeren: ExamItem[] = [
  x(4, mcq('f-h1a', 'Warum sind laut Frau Wenning viele Menschen morgens müde?', ['Sie gehen zu spät ins Bett.', 'Der Tag beginnt früher, als ihre innere Uhr es will.', 'Sie trinken zu wenig Kaffee.'], 1), schlaf),
  x(4, mcq('f-h1b', 'Was hilft, um abends früher müde zu werden?', ['morgens Zeit im Tageslicht verbringen', 'abends Sport machen', 'länger schlafen'], 0)),
  x(4, mcq('f-h1c', 'Was ist am Handy im Bett das größere Problem?', ['das helle Licht', 'die Nachrichten, die wach halten', 'der Wecker'], 1)),
  x(4, mcq('f-h1d', 'Was sagt sie über den Mittagsschlaf?', ['Er sollte höchstens 20 Minuten dauern.', 'Er ist ungesund.', 'Er sollte mindestens eine Stunde dauern.'], 0)),
  x(3, mcq('f-h2a', 'Von welchem Gleis fährt der Zug nach München heute?', ['Gleis 7', 'Gleis 9', 'Gleis 12'], 1), durchsage),
  x(3, mcq('f-h2b', 'Was soll man nach der Nachricht der Arztpraxis tun?', ['am Donnerstag kommen', 'nichts, der Termin bleibt', 'zurückrufen und einen neuen Termin vereinbaren'], 2)),
  x(3, mcq('f-h2c', 'Wann beginnt die Besprechung morgen?', ['um 10 Uhr', 'um 11 Uhr', 'um 12 Uhr'], 1)),
];

// Schreiben: the building blocks of a good text. Connectors, forms and sentence structure.
export const finalSchreiben: ExamItem[] = [
  x(5, gap('f-s1', [
    'Ich schreibe Ihnen, {{weil}} ich mich für den Kurs interessiere.',
    'Die Wohnung ist klein. {{Trotzdem}} gefällt sie mir sehr.',
    '{{Nachdem}} ich die Ausbildung abgeschlossen hatte, zog ich nach Wien.',
    'Ich lerne jeden Tag, {{um}} die Prüfung zu bestehen.',
    'Der Zug hatte Verspätung, {{deshalb}} kam ich zu spät.',
  ], { bank: ['weil', 'Trotzdem', 'Nachdem', 'um', 'deshalb'], task: 'Schreiben, Teil 1: Verbinde die Sätze mit dem passenden Wort.' })),
  x(3, order('f-s2', ['Sehr geehrte Damen und Herren,', 'hiermit bewerbe ich mich', 'um die Stelle', 'im Kundenservice.'], { task: 'Schreiben, Teil 2: Bau den Anfang eines Anschreibens.' })),
  x(3, order('f-s3', ['Könnten Sie', 'mir bitte mitteilen,', 'bis wann', 'ich mich', 'anmelden kann?'], { task: 'Bau die höfliche Frage.' })),
  x(3, order('f-s4', ['Leider', 'funktioniert', 'das Gerät', 'seit gestern', 'nicht mehr.'], { task: 'Bau den Satz für eine Reklamation.' })),
  x(3, order('f-s5', ['Wenn ich', 'mehr Zeit hätte,', 'würde ich', 'einen Sprachkurs', 'besuchen.'], { task: 'Bau den Satz im Konjunktiv II.' })),
  x(4, gap('f-s6', [
    'Die Rechnung {{wurde}} gestern bezahlt. (Passiv Präteritum)',
    'Das ist die Kollegin, {{die}} mir geholfen hat.',
    'Wegen {{des}} schlechten Wetters bleiben wir zu Hause.',
    'Ich freue mich {{auf}} Ihre Antwort.',
  ], { task: 'Schreiben, Teil 3: Ergänze das fehlende Wort.' })),
  x(2, mcq('f-s7', 'Welcher Schluss passt zu einem formellen Brief?', ['Tschüss und bis bald!', 'Mit freundlichen Grüßen', 'Liebe Grüße und Küsse'], 1)),
  x(2, mcq('f-s8', 'Welcher Satz passt in einen Forumsbeitrag mit eigener Meinung?', ['Meiner Meinung nach sollte man öfter reparieren, statt neu zu kaufen.', 'Sehr geehrte Frau Doktor, hiermit teile ich Ihnen mit.', 'Zuerst wird die Baumwolle geerntet.'], 0)),
];

// Sprechen: the right reaction in typical speaking situations.
export const finalSprechen: ExamItem[] = [
  x(3, mcq('f-p1', 'Du rufst in einer Arztpraxis an und brauchst einen Termin. Was sagst du?', ['Ich will sofort kommen.', 'Guten Tag, ich hätte gern einen Termin. Wann könnte ich vorbeikommen?', 'Haben Sie Zeit?'], 1, { task: 'Sprechen, Teil 1: Was sagst du in dieser Situation?' })),
  x(3, mcq('f-p2', 'Du hast ein Wort nicht verstanden. Was sagst du?', ['Entschuldigung, könnten Sie das bitte wiederholen?', 'Was?', 'Das ist mir egal.'], 0)),
  x(3, mcq('f-p3', 'Ein Kollege hat starke Rückenschmerzen. Welcher Rat ist passend formuliert?', ['Du musst sofort zum Arzt!', 'An deiner Stelle würde ich zum Arzt gehen.', 'Das ist dein Problem.'], 1)),
  x(3, mcq('f-p4', 'Du möchtest in einem Geschäft dein Geld zurück. Was sagst du?', ['Geben Sie mir mein Geld!', 'Das Gerät ist schlecht.', 'Das Gerät funktioniert leider nicht. Wäre es möglich, den Kaufpreis zu erstatten?'], 2)),
  x(3, mcq('f-p5', 'Du bist anderer Meinung als deine Gesprächspartnerin. Was sagst du in einer Diskussion?', ['Das ist Unsinn.', 'Das sehe ich etwas anders, weil …', 'Du hast keine Ahnung.'], 1)),
  x(3, mcq('f-p6', 'Du beginnst einen Kurzvortrag. Welcher Satz passt?', ['In meinem Vortrag geht es um das Thema Zeitdruck im Alltag.', 'Vielen Dank fürs Zuhören.', 'Zusammenfassend kann man sagen …'], 0)),
  x(4, order('f-p7', ['Ich schlage vor,', 'dass wir', 'uns am Samstag', 'treffen.'], { task: 'Sprechen, Teil 2: Bau deinen Vorschlag für ein gemeinsames Vorhaben.' })),
  x(3, order('f-p8', ['Das ist', 'ein Gerät,', 'mit dem man', 'Wäsche', 'trocknet.'], { task: 'Dir fällt das Wort „Trockner“ nicht ein. Umschreib es.' })),
];
