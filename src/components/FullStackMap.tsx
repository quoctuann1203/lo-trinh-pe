'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { MapNode, MapSection, ResourceType } from '@/content/fullstack-map';
import { useProgress } from '@/lib/progress';

const TYPE_LABEL: Record<ResourceType, string> = {
  roadmap: 'Roadmap',
  official: 'Chính thức',
  article: 'Bài viết',
  video: 'Video',
  course: 'Khoá học',
  opensource: 'Mã nguồn',
};

function weekText(weeks: number[]) {
  if (weeks.length === 0) return '';
  const sorted = [...weeks].sort((a, b) => a - b);
  const contiguous = sorted.every((w, i) => i === 0 || w === sorted[i - 1] + 1);
  if (sorted.length > 1 && contiguous) return `Tuần ${sorted[0]}–${sorted[sorted.length - 1]}`;
  return `Tuần ${sorted.join(', ')}`;
}

export function FullStackMap({ sections, readyWeeks }: { sections: MapSection[]; readyWeeks: number[] }) {
  const { progress, toggleMap } = useProgress();
  const [openId, setOpenId] = useState<string | null>(null);
  const [hideDone, setHideDone] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  const all = sections.flatMap((s) => s.nodes);
  const doneCount = all.filter((n) => progress.map[n.id]).length;
  const open = all.find((n) => n.id === openId) ?? null;

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <>
      <div className="map-progress" aria-live="polite">
        <div className="map-progress-text">
          <strong>
            {doneCount}/{all.length}
          </strong>{' '}
          mục đã xong
          <label className="map-hide">
            <input type="checkbox" checked={hideDone} onChange={(e) => setHideDone(e.target.checked)} />
            Ẩn mục đã xong
          </label>
        </div>
        <div className="progress-bar">
          <i style={{ width: `${(doneCount / all.length) * 100}%` }} />
        </div>
      </div>

      <ol className="map-sections">
        {sections.map((s, si) => {
          const sDone = s.nodes.filter((n) => progress.map[n.id]).length;
          const nodes = hideDone ? s.nodes.filter((n) => !progress.map[n.id]) : s.nodes;
          const complete = sDone === s.nodes.length;
          return (
            <li
              key={s.id}
              className={`map-section${s.id === 'product' ? ' is-extra' : ''}${complete ? ' is-complete' : ''}`}
            >
              <span className="phase-n" aria-hidden="true">
                {complete ? '✓' : si + 1}
              </span>
              <div className="map-section-head">
                <h2>{s.title}</h2>
                <span className="map-count">
                  {sDone}/{s.nodes.length}
                </span>
              </div>
              <div className="progress-bar map-section-bar" aria-hidden="true">
                <i style={{ width: `${(sDone / s.nodes.length) * 100}%` }} />
              </div>
              {complete ? (
                <p className="map-complete">Xong cả phần này rồi, giỏi lắm! Sang phần tiếp theo nhé.</p>
              ) : (
                <p className="map-note">{s.note}</p>
              )}
              {nodes.length === 0 ? null : (
                <ul className="map-nodes">
                  {nodes.map((n) => (
                    <NodeCard
                      key={n.id}
                      node={n}
                      done={!!progress.map[n.id]}
                      onOpen={() => setOpenId(n.id)}
                      onToggle={() => toggleMap(n.id)}
                    />
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ol>

      <dialog
        ref={dialog}
        className="map-drawer"
        aria-labelledby="map-drawer-title"
        onClose={() => setOpenId(null)}
        onClick={(e) => {
          // Bấm ra vùng tối bên ngoài thì đóng.
          if (e.target === e.currentTarget) setOpenId(null);
        }}
      >
        {open && (
          <Details
            node={open}
            done={!!progress.map[open.id]}
            readyWeeks={readyWeeks}
            onToggle={() => toggleMap(open.id)}
            onClose={() => setOpenId(null)}
          />
        )}
      </dialog>
    </>
  );
}

function NodeCard({
  node,
  done,
  onOpen,
  onToggle,
}: {
  node: MapNode;
  done: boolean;
  onOpen: () => void;
  onToggle: () => void;
}) {
  const id = `done-${node.id}`;
  return (
    <li className={`map-node is-${node.kind}${done ? ' is-done' : ''}`}>
      <input
        id={id}
        type="checkbox"
        className="map-check"
        checked={done}
        onChange={onToggle}
        aria-label={`Đánh dấu "${node.title}" là đã xong`}
      />
      <button type="button" className="map-open" onClick={onOpen} aria-haspopup="dialog">
        {node.kind === 'checkpoint' && <span className="map-tag">Checkpoint</span>}
        <span className="map-title">{node.title.replace(/^Checkpoint: /, '')}</span>
        <span className="map-meta">
          {weekText(node.weeks)}
          {node.optional && ' · có thể để sau'}
          {' · '}
          {node.resources.length} tài liệu
        </span>
      </button>
    </li>
  );
}

function Details({
  node,
  done,
  readyWeeks,
  onToggle,
  onClose,
}: {
  node: MapNode;
  done: boolean;
  readyWeeks: number[];
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="map-drawer-body">
      <div className="map-drawer-top">
        <span className="map-tag">{node.kind === 'checkpoint' ? 'Checkpoint' : 'Chủ đề'}</span>
        <button type="button" className="map-close" onClick={onClose} aria-label="Đóng">
          ✕
        </button>
      </div>
      <h2 id="map-drawer-title">{node.title.replace(/^Checkpoint: /, '')}</h2>
      <p>{node.summary}</p>

      <button type="button" className={`btn map-done${done ? ' is-done' : ''}`} aria-pressed={done} onClick={onToggle}>
        {done ? 'Đã xong ✓' : 'Đánh dấu là đã xong'}
      </button>

      {node.weeks.length > 0 && (
        <p className="map-weeks">
          Trong lộ trình 52 tuần:{' '}
          {node.weeks.map((w, i) => (
            <span key={w}>
              {i > 0 && ', '}
              {readyWeeks.includes(w) ? <Link href={`/tuan/${w}`}>tuần {w}</Link> : <>tuần {w} (sắp có)</>}
            </span>
          ))}
        </p>
      )}

      {node.learn.length > 0 && (
        <>
          <h3>{node.kind === 'checkpoint' ? 'Bạn phải làm được' : 'Cần nắm'}</h3>
          <ul>
            {node.learn.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </>
      )}

      {node.projects.length > 0 && (
        <>
          <h3>Ý tưởng dự án</h3>
          <ul>
            {node.projects.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </>
      )}

      {node.resources.length > 0 && (
        <>
          <h3>Tài liệu học</h3>
          <ul className="map-res">
            {node.resources.map((r) => (
              <li key={r.url}>
                <span className={`map-res-type is-${r.type}`}>{TYPE_LABEL[r.type]}</span>
                <a href={r.url} target="_blank" rel="noreferrer">
                  {r.title}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
