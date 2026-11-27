'use client';

import { useSyncExternalStore } from 'react';

/** Tiến độ học lưu trong localStorage của trình duyệt này. */
/** `map` là các mục đã xong trên bản đồ Full Stack (/ban-do), theo id của mục. */
type Progress = { done: Record<string, boolean>; goals: Record<string, boolean>; map: Record<string, boolean> };

const KEY = 'pe-roadmap-progress-v1';
const EMPTY: Progress = { done: {}, goals: {}, map: {} };
const listeners = new Set<() => void>();
let cache: Progress | null = null;

function read(): Progress {
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(KEY);
    cache = raw ? { ...EMPTY, ...(JSON.parse(raw) as Partial<Progress>) } : EMPTY;
  } catch {
    cache = EMPTY;
  }
  return cache;
}

function write(next: Progress) {
  cache = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Trình duyệt chặn lưu trữ: tiến độ chỉ giữ trong phiên này.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useProgress() {
  const progress = useSyncExternalStore(subscribe, read, () => EMPTY);
  return {
    progress,
    toggleDone(key: string) {
      const p = read();
      write({ ...p, done: { ...p.done, [key]: !p.done[key] } });
    },
    toggleGoal(key: string) {
      const p = read();
      write({ ...p, goals: { ...p.goals, [key]: !p.goals[key] } });
    },
    toggleMap(id: string) {
      const p = read();
      write({ ...p, map: { ...p.map, [id]: !p.map[id] } });
    },
  };
}

export const topicKey = (week: number, slug: string) => `${week}/${slug}`;
