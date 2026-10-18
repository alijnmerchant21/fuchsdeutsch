// Pictures for B1 (Season 3 of the Fuchsbau-WG). Same style and cast as A1, see content/a1/images.ts.
import { SCENES_B1_K1, VOCAB_B1_K1 } from './media-k01';
import { SCENES_B1_K2, VOCAB_B1_K2 } from './media-k02';
import { SCENES_B1_K3, VOCAB_B1_K3 } from './media-k03';

export const SCENES_B1: Record<string, { id: string; prompt: string }> = { ...SCENES_B1_K1, ...SCENES_B1_K2, ...SCENES_B1_K3 };
export const VOCAB_B1: Record<string, string> = { ...VOCAB_B1_K1, ...VOCAB_B1_K2, ...VOCAB_B1_K3 };
