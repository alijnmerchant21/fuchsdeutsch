import type { GlossaryEntry } from '../types';
import { glossaryB1k1 } from './k01';
import { glossaryB1k2 } from './k02';
import { glossaryB1k3 } from './k03';

// B1 word explanations: simple German plus English.
export const glossaryB1: Record<string, GlossaryEntry> = { ...glossaryB1k1, ...glossaryB1k2, ...glossaryB1k3 };
