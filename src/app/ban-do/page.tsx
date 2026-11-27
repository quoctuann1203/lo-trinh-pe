import Link from 'next/link';
import type { Metadata } from 'next';
import { FullStackMap } from '@/components/FullStackMap';
import { mapSections } from '@/content/fullstack-map';
import { ROADMAP_URL } from '@/content/roadmap';
import { weeks } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Bản đồ Full Stack',
  description: 'Các chủ đề của roadmap.sh/full-stack kèm link học, đánh dấu từng mục khi học xong.',
};

export default function MapPage() {
  return (
    <main className="roadmap">
      <header className="rm-head">
        <p className="when">
          <Link href="/">← Lộ trình 52 tuần</Link>
        </p>
        <h1>Bản đồ Full Stack</h1>
        <p className="lead">
          Mọi chủ đề và checkpoint của{' '}
          <a href={ROADMAP_URL} target="_blank" rel="noreferrer">
            roadmap.sh/full-stack
          </a>
          , theo đúng thứ tự trên đó. Bấm vào một mục để xem cần nắm gì và link học. Tự học xong thì tích vào ô vuông
          để đánh dấu đã xong. Tiến độ được lưu trong trình duyệt này.
        </p>
      </header>
      <FullStackMap sections={mapSections} readyWeeks={weeks.map((w) => w.number)} />
    </main>
  );
}
