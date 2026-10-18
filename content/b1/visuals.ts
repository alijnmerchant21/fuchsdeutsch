// Visual grammar for B1. Key: "<chapter id>/<grammar block id>". Kinds are drawn in components/GrammarVisual.tsx.
import type { Visual } from '../a1/visuals';
import { VISUALS_B1_K1 } from './media-k01';
import { VISUALS_B1_K2 } from './media-k02';
import { VISUALS_B1_K3 } from './media-k03';

export const VISUALS_B1: Record<string, Visual> = { ...VISUALS_B1_K1, ...VISUALS_B1_K2, ...VISUALS_B1_K3 };
