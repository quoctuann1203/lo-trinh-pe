'use client';

import { useState } from 'react';
import type { Video } from '@/content/types';

/** Ảnh thu nhỏ không tải được thì ẩn đi, để lại nền tối thay vì biểu tượng ảnh hỏng. */
const hideBroken = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.visibility = 'hidden';
};

/**
 * Trình phát kiểu "danh sách phát": một khung lớn và danh sách video bên dưới.
 * Chỉ tải iframe YouTube khi người học bấm phát, để trang mở nhanh.
 */
export function VideoPlayer({ videos, note }: { videos: Video[]; note?: string | null }) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const v = videos[current];
  if (!v) return null;

  const embed =
    `https://www.youtube-nocookie.com/embed/${v.id}` +
    '?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=en&hl=vi';

  return (
    <section className="player" aria-label="Video xem trước">
      <div className="screen">
        {playing ? (
          <iframe
            key={v.id}
            src={embed}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button type="button" className="poster" onClick={() => setPlaying(true)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" onError={hideBroken} />
            <span className="poster-play" aria-hidden="true" />
            <span className="sr-only">Phát video: {v.title}</span>
          </button>
        )}
      </div>
      <div className="now">
        <p className="now-title">{v.title}</p>
        <p className="now-src">{v.source}</p>
        <p className="now-why">{v.why}</p>
        <a className="now-link" href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer">
          Mở trên YouTube nếu video không phát được
        </a>
      </div>
      {videos.length > 1 && (
        <ol className="playlist">
          {videos.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                aria-current={i === current ? 'true' : undefined}
                onClick={() => {
                  setCurrent(i);
                  setPlaying(true);
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://i.ytimg.com/vi/${item.id}/mqdefault.jpg`} alt="" loading="lazy" onError={hideBroken} />
                <span>
                  <span className="pl-order">Video {i + 1}</span>
                  <span className="pl-title">{item.title}</span>
                  <span className="pl-src">{item.source}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      )}
      {note && <p className="vnote" dangerouslySetInnerHTML={{ __html: note }} />}
    </section>
  );
}
