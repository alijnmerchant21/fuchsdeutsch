// Pictures and diagrams for B1 Kapitel 7: Zwischenmenschliches.
import { who } from '../a1/images';
import { v2, type Visual } from '../a1/visuals';

const end = (label: string, labelEn: string, parts: string[]) => v2(label, labelEn, parts, [parts.length - 1]);

export const SCENES_B1_K7: Record<string, { id: string; prompt: string }> = {
  'b1-k7/e-over': { id: 'b1-k7-intro', prompt: `a tense March evening in the shared kitchen of an old Leipzig apartment, ${who('nele')} with crossed arms at the table full of notes, ${who('felix')} in the doorway with a guitar case, both looking away from each other` },
  'b1-k7/t1-text': { id: 'b1-k7-friends', prompt: 'three panels: two young women hugging at an apartment door, two male students laughing in a university cafeteria, two older women with swim bags walking to a public pool, warm colors, no text' },
  'b1-k7-t2-audio': { id: 'b1-k7-podcast', prompt: 'a cozy podcast studio with a female host and two friends in their thirties, a woman and a man, laughing at microphones, a small poster of Lisbon trams on the wall, no readable text' },
  'b1-k7/t3-text': { id: 'b1-k7-couples', prompt: 'three historical scenes in a soft painted style: a 19th century woman playing a grand piano while a man listens, a woman and a man in a simple old laboratory with glass flasks, a woman in a long dress driving an early three-wheeled automobile with two boys on a country road' },
  'b1-k7-t3-pt-audio': { id: 'b1-k7-radio', prompt: 'a bright morning radio studio, a female host in headphones speaking into a microphone, small floating icons of people holding hands and a clock, no readable text' },
  'b1-k7/wg-intro': { id: 'b1-k7-folge', prompt: `late evening in the shared kitchen, ${who('nele')} standing angrily by the table with papers and lists, ${who('felix')} just coming in with a guitar case and an apologetic face, a clock on the wall` },
  'b1-k7-wg-audio': { id: 'b1-k7-folge', prompt: '' },
  'b1-k7-wg-schlichten': { id: 'b1-k7-mediation', prompt: `breakfast in the shared kitchen, ${who('sofia', 'lina')} sitting between ${who('nele', 'felix')} who are smiling again, ${who('amara')} entering with a phone in her hand, plants on the windowsill` },
  'b1-k7/u-fabel': { id: 'b1-k7-fable', prompt: 'a storybook illustration of a fox and a badger sitting together in front of a cozy burrow in an autumn forest, the badger with a small shovel, the fox with big ears keeping watch under a moon' },
  'b1-k7/w-match': { id: 'b1-k7-objects', prompt: 'friendship and memory objects on a wooden table: an old photo album, a handwritten love letter in an envelope, a wrapped gift, a postcard, a slice of cake, a guitar leaning on the wall, no text' },
};

export const VOCAB_B1_K7: Record<string, string> = {
  'das Klavier': 'an elegant black grand piano',
  'der Liebesbrief': 'a handwritten letter with a small red heart on the envelope, no readable text',
  'das Fotoalbum': 'an open old photo album with small pictures',
  'die Gitarre': 'an acoustic guitar',
  'der Kalender': 'a wall calendar with a few days circled, no readable text',
  'das Geschenk': 'a wrapped gift box with a ribbon',
  'die Umarmung': 'two friends hugging warmly',
  'die Postkarte': 'a holiday postcard showing a beach',
  'der Kuchen': 'a round homemade cake',
};

export const VISUALS_B1_K7: Record<string, Visual> = {
  'b1-k7/t1-nach': {
    kind: 'positions', title: 'nachdem: zuerst Nebensatz, dann sofort das Verb', titleEn: 'nachdem: the subordinate clause first, then the main verb right away',
    rows: [
      v2('mit hatte', 'with hatte', ['Nachdem er gegessen hatte,', 'ging', 'er.']),
      v2('mit war', 'with war', ['Nachdem sie umgezogen war,', 'schrieben', 'wir uns Briefe.']),
      end('Hauptsatz vorne', 'main clause first', ['Jule verzieh Ben,', 'nachdem', 'er sich', 'entschuldigt', 'hatte.']),
    ],
  },
  'b1-k7/t2-gram': {
    kind: 'positions', title: 'bevor, bis, während: das Verb steht am Ende', titleEn: 'bevor, bis, während: the verb goes to the end',
    rows: [
      end('bevor', 'before', ['Ben sagte ab,', 'bevor', 'sie', 'nach Portugal', 'flogen.']),
      end('bis', 'until', ['Sie schwiegen,', 'bis', 'Jule', 'Geburtstag', 'hatte.']),
      end('während', 'while', ['Ben schrieb ihr,', 'während', 'Jule', 'in Lissabon', 'war.']),
    ],
  },
};
