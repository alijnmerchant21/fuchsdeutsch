import { addDays, daysBetween, today } from './dates';

/**
 * Block rule. Days left until the exam decide the block length:
 * 28 or more: weekly blocks. 8 to 27: four blocks of days/4 (at least 2). 7 or fewer: 2-day blocks.
 */
export function blockLength(daysLeft: number): number {
  if (daysLeft >= 28) return 7;
  if (daysLeft >= 8) return Math.max(2, Math.round(daysLeft / 4));
  return 2;
}

/** Suggested dates for the next block, starting tomorrow, never past the day before the exam. */
export function nextBlockWindow(examDate: string, from = today()) {
  const start = addDays(from, 1);
  const left = daysBetween(start, examDate);
  const len = blockLength(left);
  const end = addDays(start, Math.min(len, Math.max(1, left)) - 1);
  return { starts_on: start, ends_on: end, days_left: left, block_length: len, last_block: daysBetween(end, examDate) <= len };
}
