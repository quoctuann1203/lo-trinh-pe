// @vitest-environment node
import { describe, expect, test } from 'vitest';
import { TOTAL_WEEKS } from '@/lib/content';
import { mapSections } from './fullstack-map';
import { phases } from './roadmap';

describe('bản đồ Full Stack', () => {
  const nodes = mapSections.flatMap((s) => s.nodes);

  test('id các mục không trùng', () => {
    const ids = nodes.map((n) => n.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test('mọi mục có mô tả, tài liệu học dạng https và tuần hợp lệ', () => {
    for (const n of nodes) {
      expect(n.summary.trim(), n.id).not.toBe('');
      expect(n.resources.length, n.id).toBeGreaterThan(0);
      for (const r of n.resources) expect(r.url, n.id).toMatch(/^https:\/\//);
      expect(n.weeks.length, n.id).toBeGreaterThan(0);
      for (const w of n.weeks) expect(w >= 1 && w <= TOTAL_WEEKS, `${n.id} tuần ${w}`).toBe(true);
    }
  });

  test('checkpoint nào trong lộ trình 52 tuần cũng có trên bản đồ, đúng tuần', () => {
    const titles: Record<string, string> = {
      'Static Webpages': 'cp-static',
      Interactivity: 'cp-interactivity',
      'External Packages': 'cp-packages',
      'Collaborative Work': 'cp-collab',
      'CLI Apps': 'cp-cli',
      'Simple CRUD Apps': 'cp-crud',
      'Frontend Apps': 'cp-frontend',
      'Complete App': 'cp-complete',
      Deployment: 'cp-deploy',
      Monitoring: 'cp-monitoring',
      'CI / CD': 'cp-cicd',
      Automation: 'cp-automation',
      Infrastructure: 'cp-infra',
    };
    for (const w of phases.flatMap((p) => p.weeks)) {
      if (!w.checkpoint) continue;
      const id = titles[w.checkpoint];
      const node = nodes.find((n) => n.id === id);
      expect(node, w.checkpoint).toBeDefined();
      expect(node!.weeks, w.checkpoint).toContain(w.number);
    }
  });
});
