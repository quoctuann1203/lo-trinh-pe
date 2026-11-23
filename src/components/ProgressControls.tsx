'use client';

import Link from 'next/link';
import { topicKey, useProgress } from '@/lib/progress';

export type WeekSlugs = { number: number; slugs: string[] };

/** Số chủ đề đã hiểu của một tuần, hiện trên thẻ tuần ở trang lộ trình. */
export function WeekStatus({ week, slugs }: { week: number; slugs: string[] }) {
  const { progress } = useProgress();
  const done = slugs.filter((s) => progress.done[topicKey(week, s)]).length;
  if (done === 0) return <span className="rm-status">{slugs.length} chủ đề</span>;
  if (done === slugs.length) return <span className="rm-status is-done">Đã xong ✓</span>;
  return (
    <span className="rm-status is-going">
      {done}/{slugs.length} chủ đề đã hiểu
    </span>
  );
}

/** Nút đưa người học tới tuần đầu tiên chưa xong. */
export function ContinueLink({ weeks }: { weeks: WeekSlugs[] }) {
  const { progress } = useProgress();
  const started = weeks.some((w) => w.slugs.some((s) => progress.done[topicKey(w.number, s)]));
  const next = weeks.find((w) => w.slugs.some((s) => !progress.done[topicKey(w.number, s)])) ?? weeks[weeks.length - 1];
  return (
    <Link className="btn" href={`/tuan/${next.number}`}>
      {started ? `Học tiếp tuần ${next.number}` : `Bắt đầu từ tuần ${next.number}`}
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
