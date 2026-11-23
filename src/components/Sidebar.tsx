'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { topicKey, useProgress } from '@/lib/progress';

export type NavTopic = { slug: string; navTitle: string; day: string };
export type NavWeek = { number: number; title: string; topics: NavTopic[] };

export function Sidebar({ week, available, total }: { week: NavWeek; available: number[]; total: number }) {
  const pathname = usePathname();
  const router = useRouter();
  const { progress } = useProgress();
  const base = `/tuan/${week.number}`;
  const doneCount = week.topics.filter((t) => progress.done[topicKey(week.number, t.slug)]).length;
  const items = [{ href: base, label: `Tổng quan tuần ${week.number}`, n: '', day: '' }].concat(
    week.topics.map((t, i) => ({ href: `${base}/${t.slug}`, label: t.navTitle, n: String(i + 1), day: t.day })),
  );

  return (
    <>
      <div className="mobile-nav">
        <label htmlFor="m-select">Đang học</label>
        <select id="m-select" value={pathname} onChange={(e) => router.push(e.target.value)}>
          <option value="/">Về lộ trình 52 tuần</option>
          {available.map((w) => (
            <option key={`w${w}`} value={`/tuan/${w}`} hidden={w === week.number}>
              Chuyển sang tuần {w}
            </option>
          ))}
          {items.map((it) => (
            <option key={it.href} value={it.href}>
              {it.n ? `${it.n}. ` : ''}
              {it.label}
            </option>
          ))}
        </select>
      </div>

      <nav className="toc" aria-label={`Mục lục tuần ${week.number}`}>
        <p className="brand">
          <Link href="/">Lộ trình Product Engineer</Link>
          <small>{total} tuần, khoảng 10 giờ mỗi tuần</small>
        </p>
        <div className="weeks" role="group" aria-label="Chọn tuần">
          {available.map((w) => (
            <Link key={w} href={`/tuan/${w}`} aria-current={w === week.number ? 'true' : undefined}>
              {w}
            </Link>
          ))}
          <span title="Chưa soạn">{available.length + 1}</span>
          <span title="Chưa soạn">…</span>
          <span title="Chưa soạn">{total}</span>
        </div>
        <div className="progress">
          {doneCount}/{week.topics.length} chủ đề tuần {week.number} đã hiểu
          <div className="progress-bar">
            <i style={{ width: `${(doneCount / week.topics.length) * 100}%` }} />
          </div>
        </div>
        <ol>
          {items.map((it, i) => {
            const slug = i === 0 ? '' : week.topics[i - 1].slug;
            const done = slug && progress.done[topicKey(week.number, slug)];
            return (
              <li key={it.href}>
                <Link
                  href={it.href}
                  aria-current={pathname === it.href ? 'page' : undefined}
                  className={done ? 'is-done' : undefined}
                >
                  <span className="n">{it.n}</span>
                  <span>
                    {it.label}
                    {it.day && <span className="day">Đọc trước {it.day}</span>}
                  </span>
                  <span className="tick" aria-hidden="true">
                    ✓
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
