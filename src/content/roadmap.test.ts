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

  test('đủ mọi checkpoint của roadmap.sh/full-stack, đúng thứ tự', () => {
    const order = [
      'Static Webpages', 'Interactivity', 'External Packages', 'Collaborative Work',
      'CLI Apps', 'Simple CRUD Apps', 'Frontend Apps', 'Complete App',
      'Deployment', 'Monitoring', 'CI / CD', 'Automation', 'Infrastructure',
    ];
    const seen = [...new Set(all.flatMap((w) => (w.checkpoint ? [w.checkpoint] : [])))];
    expect([...seen].sort()).toEqual([...order].sort());
    // Phần DevOps phải đi đúng thứ tự của roadmap.sh.
    const devops = seen.filter((c) => order.indexOf(c) >= order.indexOf('Deployment'));
    expect(devops).toEqual(order.slice(order.indexOf('Deployment')));
  });
});
