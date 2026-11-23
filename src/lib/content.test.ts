// @vitest-environment node
import { existsSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';
import { markComments, weeks } from './content';

describe.each(weeks.map((w) => [w.number, w] as const))('tuần %i', (_n, week) => {
  test('có đúng 8 chủ đề, slug không trùng', () => {
    const slugs = week.topics.map((t) => t.slug);
    expect(slugs).toHaveLength(8);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  test.each(week.topics.map((t) => [t.slug, t] as const))('chủ đề %s có file nội dung và video hợp lệ', (slug, topic) => {
    const file = path.join(process.cwd(), 'src', 'content', `week-${week.number}`, `${slug}.html`);
    expect(existsSync(file)).toBe(true);
    expect(topic.videos.length).toBeGreaterThan(0);
    for (const v of topic.videos) expect(v.id).toMatch(/^[\w-]{11}$/);
  });

  test('mỗi buổi chỉ trỏ tới chủ đề có thật', () => {
    const slugs = new Set(week.topics.map((t) => t.slug));
    for (const s of week.sessions) for (const r of s.read) expect(slugs.has(r)).toBe(true);
  });

  test('có đủ bốn buổi Thứ Ba, Thứ Năm, Thứ Bảy, Chủ nhật', () => {
    expect(week.sessions.map((s) => s.day)).toEqual(['Thứ Ba', 'Thứ Năm', 'Thứ Bảy', 'Chủ nhật']);
  });
});

describe('markComments', () => {
  test('tô comment trong code, bỏ qua URL', () => {
    const out = markComments("<pre><code>const a = 1; // ghi chú\nfetch('https://x.vn')</code></pre>");
    expect(out).toContain('<span class="c">// ghi chú</span>');
    expect(out).not.toContain('<span class="c">//x.vn');
  });
});
