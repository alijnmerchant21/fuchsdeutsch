// Pictures and diagrams for B1 Kapitel 1 "Gute Reise!". Same style and cast as A1, see content/a1/images.ts.
import { who } from '../a1/images';
import { v2, type Visual } from '../a1/visuals';

const end = (label: string, labelEn: string, parts: string[]) => v2(label, labelEn, parts, [parts.length - 1]);

/** Scene picture per block. Key: a scoped audio id, or "<chapter id>/<block id>" for other blocks. */
export const SCENES_B1_K1: Record<string, { id: string; prompt: string }> = {
  'b1-k1/e-over': { id: 'b1-k1-intro', prompt: `late summer in the Leipzig flat share: ${who('sofia')} arriving with a suitcase and a big potted plant, ${who('nele', 'amara', 'felix')} welcoming her at the door, ${who('kenji')} in a chef's apron waving from the stairs, a small restaurant sign with a fox and a yuzu fruit, no readable text` },
  'b1-k1/t1-text': { id: 'b1-k1-chat', prompt: `a split picture: on one side a sunny beach with ${who('sofia')} swimming, on the other side green mountains with ${who('nele')} on a summit eating a sandwich, ${who('felix')} in the middle shrugging at a pile of travel brochures` },
  'b1-k1-t2-audio': { id: 'b1-k1-planning', prompt: `evening in the shared kitchen, ${who('sofia')} showing train connections on a laptop, ${who('nele')} pointing at a map of a forested mountain region, ${who('amara')} laughing, ${who('felix')} looking sleepy and doubtful` },
  'b1-k1/t3-text': { id: 'b1-k1-alm', prompt: 'a young woman in work clothes on a high mountain pasture at sunrise, brown cows with bells, a wooden hut with flower boxes, a milk can, mountains in the background' },
  'b1-k1-t3-pt-audio': { id: 'b1-k1-station', prompt: 'a busy German train station platform, a red regional train arriving, a departure board with only icons and arrows, travelers with suitcases, a loudspeaker on a pillar' },
  'b1-k1/wg-intro': { id: 'b1-k1-departure', prompt: `early morning at a big station hall, ${who('sofia', 'nele', 'amara', 'felix')} with backpacks, Felix yawning, Amara holding a bento box of rice balls` },
  'b1-k1-wg-audio': { id: 'b1-k1-hut', prompt: `night in a cozy Black Forest wooden hut, ${who('sofia', 'nele', 'amara', 'felix')} happy and tired around a table with bowls of soup and candles, a smiling hut keeper with a ladle, a cuckoo clock on the wall` },
  'b1-k1/t3-land': { id: 'b1-k1-blackforest', prompt: 'a Black Forest landscape: dark fir forests, an old farmhouse with a huge sloping roof, a cuckoo clock, a slice of Black Forest cherry cake and a traditional hat with red pompoms' },
  'b1-k1/u-comp': { id: 'b1-k1-rain', prompt: 'a person in a raincoat laughing on a rainy Baltic Sea beach with a wicker beach chair and an umbrella turned inside out' },
};

/** Picture vocabulary: German word exactly as in the match exercise → what to draw. */
export const VOCAB_B1_K1: Record<string, string> = {
  'der Koffer': 'a travel suitcase on wheels',
  'der Rucksack': 'a hiking backpack',
  'das Zelt': 'a small camping tent',
  'der Schlafsack': 'a rolled-up sleeping bag',
  'die Wanderschuhe': 'a pair of sturdy hiking boots',
  'die Sonnencreme': 'a bottle of sunscreen',
  'die Fahrkarte': 'a paper train ticket',
  'der Bahnsteig': 'an empty train platform',
  'die Hütte': 'a small wooden mountain hut',
  'der Strand': 'a sandy beach with waves',
};

/** Diagrams. Key: "<chapter id>/<grammar block id>". */
export const VISUALS_B1_K1: Record<string, Visual> = {
  'b1-k1/t1-gram': {
    kind: 'positions', title: 'zu + Infinitiv steht am Ende', titleEn: 'zu + infinitive goes to the end',
    rows: [
      end('mit zu', 'with zu', ['Ich habe Lust,', 'einen Ausflug', 'zu machen.']),
      end('trennbar', 'separable', ['Ich hasse es,', 'früh', 'aufzustehen.']),
      v2('Modalverb: ohne zu', 'Modal verb: no zu', ['Ich', 'will', 'wandern.'], [1, 2]),
    ],
  },
  'b1-k1/t2-gram': {
    kind: 'positions', title: 'obwohl: das Verb geht ans Ende', titleEn: 'obwohl: the verb goes to the end',
    rows: [
      end('obwohl hinten', 'obwohl second', ['Wir wandern,', 'obwohl', 'es', 'stark', 'regnet.']),
      end('mit Modalverb', 'with a modal', ['Felix kommt mit,', 'obwohl', 'er', 'früh aufstehen', 'muss.']),
      v2('obwohl vorne', 'obwohl first', ['Obwohl es regnet,', 'wandern', 'wir.']),
    ],
  },
};
