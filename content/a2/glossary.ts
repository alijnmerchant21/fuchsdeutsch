import type { GlossaryEntry } from '../types';
import { glossaryA2k1 } from './k01';
import { glossaryA2k2 } from './k02';
import { glossaryA2k3 } from './k03';
import { glossaryA2k4 } from './k04';
import { glossaryA2k5 } from './k05';
import { glossaryA2k6 } from './k06';
import { glossaryA2k7 } from './k07';
import { glossaryA2k8 } from './k08';
import { glossaryA2k9 } from './k09';
import { glossaryA2k10 } from './k10';
import { glossaryA2k11 } from './k11';
import { glossaryA2k12 } from './k12';

// A2 word explanations: simple German plus English.
export const glossaryA2: Record<string, GlossaryEntry> = {
  ...glossaryA2k1, ...glossaryA2k2, ...glossaryA2k3, ...glossaryA2k4, ...glossaryA2k5, ...glossaryA2k6,
  ...glossaryA2k7, ...glossaryA2k8, ...glossaryA2k9, ...glossaryA2k10, ...glossaryA2k11, ...glossaryA2k12,
};
