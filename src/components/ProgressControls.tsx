'use client';

import Link from 'next/link';
import { useState } from 'react';
import { topicKey, useProgress } from '@/lib/progress';

export type WeekSlugs = { number: number; slugs: string[] };

/** Tuần đang học: tuần đầu tiên còn chủ đề chưa hiểu, hết thì tuần cuối đã soạn. */
function currentWeek(weeks: WeekSlugs[], done: Record<string, boolean>) {
  const next = weeks.find((w) => w.slugs.some((s) => !done[topicKey(w.number, s)]));
  return (next ?? weeks[weeks.length - 1])?.number;
}

/** Số chủ đề đã hiểu của một tuần, hiện trên thẻ tuần ở trang lộ trình. */
export function WeekStatus({ week, slugs, ready }: { week: number; slugs: string[]; ready: WeekSlugs[] }) {
  const { progress } = useProgress();
  const done = slugs.filter((s) => progress.done[topicKey(week, s)]).length;
  if (done === slugs.length) return <span className="rm-status is-done">Đã xong ✓</span>;
  if (currentWeek(ready, progress.done) === week) {
    return <span className="rm-status is-current">Đang học{done > 0 ? ` · ${done}/${slugs.length}` : ''}</span>;
  }
  if (done === 0) return <span className="rm-status">{slugs.length} chủ đề</span>;
  return (
    <span className="rm-status is-going">
      {done}/{slugs.length} chủ đề đã hiểu
    </span>
  );
}

/** Tiến độ chung ở đầu trang chủ. */
export function OverallProgress({ weeks, mapTotal }: { weeks: WeekSlugs[]; mapTotal: number }) {
  const { progress } = useProgress();
  const total = weeks.reduce((n, w) => n + w.slugs.length, 0);
  const done = weeks.reduce((n, w) => n + w.slugs.filter((s) => progress.done[topicKey(w.number, s)]).length, 0);
  const mapDone = Object.values(progress.map).filter(Boolean).length;
  return (
    <div className="rm-overall" aria-live="polite">
      Đã hiểu{' '}
      <strong>
        {done}/{total}
      </strong>{' '}
      chủ đề đã soạn · bản đồ Full Stack{' '}
      <strong>
        {mapDone}/{mapTotal}
      </strong>{' '}
      mục
      <div className="progress-bar">
        <i style={{ width: `${total ? (done / total) * 100 : 0}%` }} />
      </div>
    </div>
  );
}

/** Trên điện thoại, giai đoạn không chứa tuần đang học được thu gọn. */
export function PhaseFold({
  weeks,
  ready,
  children,
}: {
  weeks: number[];
  ready: WeekSlugs[];
  children: React.ReactNode;
}) {
  const { progress } = useProgress();
  const [toggled, setToggled] = useState<boolean | null>(null);
  const current = currentWeek(ready, progress.done);
  const open = toggled ?? (current !== undefined && weeks.includes(current));
  return (
    <div className={`fold${open ? '' : ' is-folded'}`}>
      {children}
      <button type="button" className="fold-btn" aria-expanded={open} onClick={() => setToggled(!open)}>
        {open ? 'Thu gọn' : `Xem ${weeks.length} tuần`}
      </button>
    </div>
  );
}

/** Nút đưa người học tới tuần đầu tiên chưa xong. */
export function ContinueLink({ weeks }: { weeks: WeekSlugs[] }) {
  const { progress } = useProgress();
  const started = weeks.some((w) => w.slugs.some((s) => progress.done[topicKey(w.number, s)]));
  const next = currentWeek(weeks, progress.done) ?? 1;
  return (
    <Link className="btn" href={`/tuan/${next}`}>
      {started ? `Học tiếp tuần ${next}` : `Bắt đầu từ tuần ${next}`}
    </Link>
  );
}

export function DoneButton({ week, slug }: { week: number; slug: string }) {
  const { progress, toggleDone } = useProgress();
  const done = !!progress.done[topicKey(week, slug)];
  return (
    <button type="button" className="btn" aria-pressed={done} onClick={() => toggleDone(topicKey(week, slug))}>
      {done ? 'Đã hiểu ✓' : 'Tôi đã hiểu chủ đề này'}
    </button>
  );
}

export function GoalsChecklist({ week, goals }: { week: number; goals: string[] }) {
  const { progress, toggleGoal } = useProgress();
  return (
    <ul className="checklist">
      {goals.map((g, i) => {
        const key = `${week}/${i}`;
        const id = `goal-${week}-${i}`;
        return (
          <li key={key}>
            <label htmlFor={id}>
              <input id={id} type="checkbox" checked={!!progress.goals[key]} onChange={() => toggleGoal(key)} />
              <span>{g}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}
