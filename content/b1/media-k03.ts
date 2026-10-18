// Pictures and diagrams for B1 Kapitel 3: Veränderungen.
import { who } from '../a1/images';
import { v2, type Visual } from '../a1/visuals';

export const SCENES_B1_K3: Record<string, { id: string; prompt: string }> = {
  'b1-k3/e-over': { id: 'b1-k3-intro', prompt: `a gray November morning at an old Leipzig apartment building with tall windows, ${who('nele', 'amara', 'felix', 'sofia')} at the kitchen window looking down at a white envelope on the table` },
  'b1-k3/t1-text': { id: 'b1-k3-turning-points', prompt: 'three panels: a young mother with a baby in a sunny kitchen, a man in his forties planing wood in a carpenter workshop, a young woman with moving boxes in front of an Austrian old town' },
  'b1-k3-t2-audio': { id: 'b1-k3-radio', prompt: 'a friendly evening radio studio with a female host in headphones at a microphone, small bubbles showing a garden with tomatoes, a father holding a baby, and a young man playing guitar with friends' },
  'b1-k3/t3-text': { id: 'b1-k3-politeness', prompt: 'a polite scene split in three: two colleagues shaking hands in an office, a guest arriving on time with a clock on the wall, people at a dinner table waiting until everyone is served' },
  'b1-k3/t3-pt-text': { id: 'b1-k3-sofia-blog', prompt: `${who('sofia')} sitting on the floor of her room next to an unmounted wooden shelf and a drill, writing on a laptop, plants around her, Sunday morning light` },
  'b1-k3/wg-intro': { id: 'b1-k3-folge', prompt: `breakfast in the shared kitchen, ${who('sofia')} holding up a big white envelope, ${who('nele', 'amara', 'felix', 'kenji')} looking at it with worried faces` },
  'b1-k3-wg-audio': { id: 'b1-k3-folge', prompt: '' },
  'b1-k3/wg-brief': { id: 'b1-k3-letter', prompt: 'a formal business letter with a simple company logo and an opened envelope on a wooden kitchen table next to a coffee cup, no readable text' },
  'b1-k3-wg-lehmann': { id: 'b1-k3-lehmann-story', prompt: `${who('herrLehmann')} in his old-fashioned living room showing a black and white photo album, ${who('nele', 'sofia', 'kenji')} listening on the sofa, old photos of a factory and a brick building on the wall` },
  'b1-k3/w-match': { id: 'b1-k3-objects', prompt: 'life event objects on a table: a moving box, a wedding ring, a baby stroller, keys, a bouquet of flowers, no text' },
};

export const VOCAB_B1_K3: Record<string, string> = {
  'der Umzugskarton': 'a brown cardboard moving box, taped shut',
  'der Ehering': 'a simple gold wedding ring',
  'der Kinderwagen': 'a modern baby stroller',
  'der Mietvertrag': 'a rental contract with a pen and a signature line, no readable text',
  'der Briefkasten': 'a row of metal mailboxes in an old stairwell',
  'die Fabrik': 'an old red brick factory building with a chimney',
  'der Blumenstrauß': 'a colorful bouquet of flowers',
  'der Schlüssel': 'a ring with two apartment keys',
};

export const VISUALS_B1_K3: Record<string, Visual> = {
  'b1-k3/t1-gram': {
    kind: 'positions', title: 'Präteritum: das Verb auf Position 2', titleEn: 'Simple past: the verb in position 2',
    rows: [
      v2('regelmäßig', 'regular', ['Ich', 'wohnte', 'damals in Halle.']),
      v2('unregelmäßig', 'irregular', ['Mira', 'zog', 'nach Graz.']),
      v2('Modalverb', 'modal verb', ['Er', 'musste', 'früh', 'aufstehen.'], [1, 3]),
    ],
  },
  'b1-k3/t2-gram': {
    kind: 'positions', title: 'Zeitangabe vorne, dann das Verb', titleEn: 'Time expression first, then the verb',
    rows: [
      v2('während + Genitiv', 'during + genitive', ['Während des Kriegs', 'lebte', 'die Familie auf dem Land.']),
      v2('seit + Dativ', 'since + dative', ['Seit dem Sommer', 'wohnt', 'Sofia in Leipzig.']),
      v2('vor + Dativ', 'ago + dative', ['Vor zwei Jahren', 'bekam', 'Priya eine Tochter.']),
    ],
  },
};
