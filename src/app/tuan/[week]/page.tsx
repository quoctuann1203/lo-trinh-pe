import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GoalsChecklist } from '@/components/ProgressControls';
import { getWeek, TOTAL_WEEKS } from '@/lib/content';

export async function generateMetadata({ params }: PageProps<'/tuan/[week]'>): Promise<Metadata> {
  const { week } = await params;
  return { title: `Tuần ${week}` };
}

export default async function WeekOverview({ params }: PageProps<'/tuan/[week]'>) {
  const { week: raw } = await params;
  const week = getWeek(Number(raw));
  if (!week) notFound();
  const index = new Map(week.topics.map((t, i) => [t.slug, i + 1]));

  return (
    <article className="view">
      <p className="when">
        Tuần {week.number} trên {TOTAL_WEEKS}
      </p>
      <h1>{week.title}</h1>
      <p className="lead">{week.lead}</p>

      <h2>Mục tiêu cuối tuần</h2>
      <GoalsChecklist week={week.number} goals={week.goals} />

      <h2>Bốn buổi trong tuần</h2>
      <div className="sessions">
        {week.sessions.map((s) => (
          <section key={s.day} className="session">
            <header>
              <h3>{s.day}</h3>
              <span className="hours">{s.hours} giờ</span>
            </header>
            <p className="focus">{s.focus}</p>
            <ol className="blocks">
              {s.blocks.map((b) => (
                <li key={b.time}>
                  <span className="time">{b.time}</span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ol>
            <p className="done-when">
              <strong>Xong khi:</strong> {s.doneWhen}
            </p>
            {s.read.length > 0 && (
              <p className="read">
                Đọc trước:{' '}
                {s.read.map((slug, i) => {
                  const t = week.topics.find((x) => x.slug === slug);
                  return (
                    <span key={slug}>
                      {i > 0 && ', '}
                      <Link href={`/tuan/${week.number}/${slug}`}>
                        {index.get(slug)}. {t?.navTitle}
                      </Link>
                    </span>
                  );
                })}
              </p>
            )}
          </section>
        ))}
      </div>

      <h2>Cách học mỗi chủ đề</h2>
      <ol className="list">
        <li>Xem video trước. Video phát ngay trong trang, phụ đề tiếng Anh được bật sẵn nếu video có.</li>
        <li>Đọc phần giải thích, gõ lại code ví dụ và chạy thử. Đừng chỉ đọc.</li>
        <li>Đọc phần bút đỏ: những câu nghe có vẻ đúng nhưng sai, và người phỏng vấn hay gài.</li>
        <li>Với mỗi câu hỏi phỏng vấn, tự trả lời thành tiếng trong 60 giây rồi mới mở cách trả lời.</li>
      </ol>
      <div className="finish">
        <span />
        <Link className="btn" href={`/tuan/${week.number}/${week.topics[0].slug}`}>
          Bắt đầu chủ đề 1
        </Link>
      </div>
    </article>
  );
}
