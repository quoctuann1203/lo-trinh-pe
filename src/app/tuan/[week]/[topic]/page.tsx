import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DoneButton } from '@/components/ProgressControls';
import { VideoPlayer } from '@/components/VideoPlayer';
import { getTopic, getWeek, readTopicBody, weeks } from '@/lib/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return weeks.flatMap((w) => w.topics.map((t) => ({ week: String(w.number), topic: t.slug })));
}

export async function generateMetadata({ params }: PageProps<'/tuan/[week]/[topic]'>): Promise<Metadata> {
  const { week: raw, topic: slug } = await params;
  const week = getWeek(Number(raw));
  const topic = week && getTopic(week, slug);
  return { title: topic ? `Tuần ${raw}: ${topic.navTitle}` : 'Không tìm thấy' };
}

export default async function TopicPage({ params }: PageProps<'/tuan/[week]/[topic]'>) {
  const { week: raw, topic: slug } = await params;
  const week = getWeek(Number(raw));
  const topic = week && getTopic(week, slug);
  if (!week || !topic) notFound();

  const i = week.topics.indexOf(topic);
  const next = week.topics[i + 1];
  const body = readTopicBody(week.number, topic.slug);

  return (
    <article className="view">
      <p className="when">
        Chủ đề {i + 1} trên {week.topics.length}, đọc trước buổi {topic.day}
      </p>
      <h1>{topic.title}</h1>
      <p className="lead" dangerouslySetInnerHTML={{ __html: topic.lead }} />
      <VideoPlayer videos={topic.videos} note={topic.videoNote} />
      <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
      <div className="finish">
        <DoneButton week={week.number} slug={topic.slug} />
        {next ? (
          <Link className="btn ghost" href={`/tuan/${week.number}/${next.slug}`}>
            Chủ đề tiếp: {next.navTitle}
          </Link>
        ) : (
          <Link className="btn ghost" href={`/tuan/${week.number}`}>
            Về tổng quan tuần {week.number}
          </Link>
        )}
      </div>
    </article>
  );
}
