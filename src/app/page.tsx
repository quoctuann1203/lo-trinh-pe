import Link from 'next/link';
import { ContinueLink, WeekStatus } from '@/components/ProgressControls';
import { phases } from '@/content/roadmap';
import { getWeek, TOTAL_WEEKS, weeks } from '@/lib/content';

export default function Roadmap() {
  const ready = weeks.map((w) => ({ number: w.number, slugs: w.topics.map((t) => t.slug) }));

  return (
    <main className="roadmap">
      <header className="rm-head">
        <p className="when">
          {TOTAL_WEEKS} tuần, khoảng 10 giờ mỗi tuần · đã soạn {weeks.length} tuần
        </p>
        <h1>Lộ trình Product Engineer</h1>
        <p className="lead">
          Từ front-end developer lên product engineer trong một năm: vừa học backend, vừa tự xây và đưa một sản phẩm
          thật tới người dùng. Chọn một tuần để bắt đầu.
        </p>
        <ContinueLink weeks={ready} />
      </header>

      <ol className="phases">
        {phases.map((phase, p) => {
          const from = phase.weeks[0].number;
          const to = phase.weeks[phase.weeks.length - 1].number;
          return (
            <li key={phase.title} className="phase">
              <div className="phase-head">
                <span className="phase-n" aria-hidden="true">
                  {p + 1}
                </span>
                <div>
                  <p className="phase-range">
                    Giai đoạn {p + 1} · tuần {from}–{to}
                  </p>
                  <h2>{phase.title}</h2>
                  <p className="phase-sum">{phase.summary}</p>
                </div>
              </div>
              <ol className="rm-weeks">
                {phase.weeks.map((w) => {
                  const real = getWeek(w.number);
                  const title = real?.title ?? w.title;
                  return (
                    <li key={w.number}>
                      {real ? (
                        <Link className="rm-week is-open" href={`/tuan/${w.number}`}>
                          <span className="rm-n">Tuần {w.number}</span>
                          <span className="rm-title">{title}</span>
                          <WeekStatus week={w.number} slugs={real.topics.map((t) => t.slug)} />
                        </Link>
                      ) : (
                        <div className="rm-week" aria-label={`Tuần ${w.number}: ${title}, sắp có`}>
                          <span className="rm-n">Tuần {w.number}</span>
                          <span className="rm-title">{title}</span>
                          <span className="rm-status">Sắp có</span>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
