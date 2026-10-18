import type { GlossaryEntry } from '../types';
import { glossaryB1k1 } from './k01';
import { glossaryB1k2 } from './k02';
import { glossaryB1k3 } from './k03';
import { glossaryB1k4 } from './k04';
import { glossaryB1k5 } from './k05';
import { glossaryB1k6 } from './k06';
import { glossaryB1k7 } from './k07';
import { glossaryB1k8 } from './k08';
import { glossaryB1k9 } from './k09';
import { glossaryB1k10 } from './k10';
import { glossaryB1k11 } from './k11';
import { glossaryB1k12 } from './k12';

// B1 word explanations: simple German plus English.
export const glossaryB1: Record<string, GlossaryEntry> = { ...glossaryB1k1, ...glossaryB1k2, ...glossaryB1k3, ...glossaryB1k4, ...glossaryB1k5, ...glossaryB1k6, ...glossaryB1k7, ...glossaryB1k8, ...glossaryB1k9, ...glossaryB1k10, ...glossaryB1k11, ...glossaryB1k12 };
