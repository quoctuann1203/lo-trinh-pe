import { readFileSync } from 'node:fs';
import path from 'node:path';
import { week1 } from '@/content/week-1';
import { week2 } from '@/content/week-2';
import { week3 } from '@/content/week-3';
import { week4 } from '@/content/week-4';
import { week5 } from '@/content/week-5';
import type { Topic, Week } from '@/content/types';

/** Các tuần đã soạn. Thêm tuần mới: tạo week-N.ts + thư mục week-N/ rồi thêm vào đây. */
export const weeks: Week[] = [week1, week2, week3, week4, week5];

export const TOTAL_WEEKS = 52;

export function getWeek(n: number): Week | undefined {
  return weeks.find((w) => w.number === n);
}

export function getTopic(week: Week, slug: string): Topic | undefined {
  return week.topics.find((t) => t.slug === slug);
}

/** Tô nghiêng phần comment `// ...` trong các khối code chưa được đánh dấu sẵn. */
export function markComments(html: string): string {
  return html.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g, (block, inner: string) => {
    if (inner.includes('class="c"')) return block;
    const marked = inner.replace(/(^|[^:'"])(\/\/[^\n<]*)/gm, '$1<span class="c">$2</span>');
    return `<pre><code>${marked}</code></pre>`;
  });
}

/** Đọc phần thân của một chủ đề lúc build. */
export function readTopicBody(weekNumber: number, slug: string): string {
  const file = path.join(process.cwd(), 'src', 'content', `week-${weekNumber}`, `${slug}.html`);
  return markComments(readFileSync(file, 'utf8'));
}
