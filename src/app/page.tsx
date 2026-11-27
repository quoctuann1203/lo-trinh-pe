import Link from 'next/link';
import { ContinueLink, OverallProgress, PhaseFold, WeekStatus } from '@/components/ProgressControls';
import { mapSections } from '@/content/fullstack-map';
import { phases, ROADMAP_URL } from '@/content/roadmap';
import { getWeek, TOTAL_WEEKS, weeks } from '@/lib/content';

export default function Roadmap() {
  const ready = weeks.map((w) => ({ number: w.number, slugs: w.topics.map((t) => t.slug) }));

  return (
    <main className="roadmap">
      <header className="rm-head">
        <p className="when">
          {TOTAL_WEEKS} tuần, khoảng 10 giờ mỗi tuần · đã soạn {weeks.length} tuần
        </p>
        <h1>Lộ trình Full Stack Developer</h1>
        <p className="lead">
          Trở thành full-stack developer trong một năm, bám theo{' '}
          <a href={ROADMAP_URL} target="_blank" rel="noreferrer">
            roadmap Full Stack của roadmap.sh
          </a>
          : backend với Node.js và PostgreSQL, nền tảng web, React và Tailwind, rồi tự đưa ứng dụng lên AWS. Tuần có
          nhãn Checkpoint là tuần làm dự án để chốt kiến thức. Chọn một tuần để bắt đầu.
        </p>
        <div className="rm-links">
          <ContinueLink weeks={ready} />
          <Link className="btn ghost" href="/ban-do">
            Bản đồ Full Stack: đánh dấu từng chủ đề
          </Link>
        </div>
        <OverallProgress weeks={ready} mapTotal={mapSections.reduce((n, s) => n + s.nodes.length, 0)} />
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
                  {phase.roadmapTopics.length > 0 && (
                    <ul className="rm-topics" aria-label="Chủ đề trên roadmap.sh">
                      {phase.roadmapTopics.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <PhaseFold weeks={phase.weeks.map((w) => w.number)} ready={ready}>
                <ol className="rm-weeks">
                  {phase.weeks.map((w) => {
                    const real = getWeek(w.number);
                    const title = real?.title ?? w.title;
                    const checkpoint = w.checkpoint && <span className="rm-cp">Checkpoint</span>;
                    const cpName = w.checkpoint && <span className="rm-meta">roadmap.sh: {w.checkpoint}</span>;
                    return (
                      <li key={w.number}>
                        {real ? (
                          <Link className="rm-week is-open" href={`/tuan/${w.number}`}>
                            <span className="rm-n">Tuần {w.number}</span>
                            {checkpoint}
                            <span className="rm-title">{title}</span>
                            {cpName}
                            <WeekStatus week={w.number} slugs={real.topics.map((t) => t.slug)} ready={ready} />
                          </Link>
                        ) : (
                          <div className="rm-week" aria-label={`Tuần ${w.number}: ${title}, sắp có`}>
                            <span className="rm-n">Tuần {w.number}</span>
                            {checkpoint}
                            <span className="rm-title">{title}</span>
                            {cpName}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </PhaseFold>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
