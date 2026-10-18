// All grammar diagrams, keyed "<chapter id>/<grammar block id>".
import { VISUALS as VISUALS_A1, type Visual } from './a1/visuals';
import { VISUALS_A2 } from './a2/visuals';
import { VISUALS_B1 } from './b1/visuals';
import { VISUALS_B21 } from './b2/media';

export type { Visual };
export const VISUALS: Record<string, Visual> = { ...VISUALS_A1, ...VISUALS_A2, ...VISUALS_B1, ...VISUALS_B21 };
