import { notFound } from 'next/navigation';
import { Sidebar } from '@/components/Sidebar';
import { getWeek, TOTAL_WEEKS, weeks } from '@/lib/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return weeks.map((w) => ({ week: String(w.number) }));
}

export default async function WeekLayout({ children, params }: LayoutProps<'/tuan/[week]'>) {
  const { week: raw } = await params;
  const week = getWeek(Number(raw));
  if (!week) notFound();

  const nav = {
    number: week.number,
    title: week.title,
    topics: week.topics.map((t) => ({ slug: t.slug, navTitle: t.navTitle, day: t.day })),
  };

  return (
    <div className="app">
      <Sidebar week={nav} available={weeks.map((w) => w.number)} total={TOTAL_WEEKS} />
      <main>
        <div className="page">{children}</div>
      </main>
    </div>
  );
}
