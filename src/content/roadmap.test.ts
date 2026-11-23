// @vitest-environment node
import { describe, expect, test } from 'vitest';
import { TOTAL_WEEKS, weeks } from '@/lib/content';
import { phases } from './roadmap';

describe('lộ trình', () => {
  const all = phases.flatMap((p) => p.weeks);

  test('có đủ các tuần từ 1 tới TOTAL_WEEKS, đúng thứ tự, không trùng', () => {
    expect(all.map((w) => w.number)).toEqual(Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1));
  });

  test('mọi tuần và giai đoạn đều có tên', () => {
    for (const p of phases) expect(p.title.trim()).not.toBe('');
    for (const w of all) expect(w.title.trim()).not.toBe('');
  });

  test('tuần đã soạn nằm trong lộ trình', () => {
    const numbers = new Set(all.map((w) => w.number));
    for (const w of weeks) expect(numbers.has(w.number)).toBe(true);
  });
});
