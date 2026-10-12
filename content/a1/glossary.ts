import type { GlossaryEntry } from '../types';
import { glossaryA1k1 } from './k01';
import { glossaryA1k2 } from './k02';
import { glossaryA1k3 } from './k03';
import { glossaryA1k4 } from './k04';
import { glossaryA1k5 } from './k05';
import { glossaryA1k6 } from './k06';
import { glossaryA1k7 } from './k07';
import { glossaryA1k8 } from './k08';
import { glossaryA1k9 } from './k09';
import { glossaryA1k10 } from './k10';
import { glossaryA1k11 } from './k11';
import { glossaryA1k12 } from './k12';

// A1 word explanations: very simple German plus English.
export const glossaryA1: Record<string, GlossaryEntry> = {
  ...glossaryA1k1, ...glossaryA1k2, ...glossaryA1k3, ...glossaryA1k4, ...glossaryA1k5, ...glossaryA1k6,
  ...glossaryA1k7, ...glossaryA1k8, ...glossaryA1k9, ...glossaryA1k10, ...glossaryA1k11, ...glossaryA1k12,
};
