// All grammar diagrams, keyed "<chapter id>/<grammar block id>".
import { VISUALS as VISUALS_A1, type Visual } from './a1/visuals';
import { VISUALS_A2 } from './a2/visuals';

export type { Visual };
export const VISUALS: Record<string, Visual> = { ...VISUALS_A1, ...VISUALS_A2 };
