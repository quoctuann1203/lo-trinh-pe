export type Day = 'Thứ Ba' | 'Thứ Năm' | 'Thứ Bảy' | 'Chủ nhật';

export type Video = {
  /** Mã video YouTube, 11 ký tự (phần sau v= trong URL). */
  id: string;
  title: string;
  source: string;
  why: string;
};

export type Topic = {
  /** Dùng làm URL: /tuan/1/<slug>. Nội dung chi tiết nằm ở src/content/week-N/<slug>.html */
  slug: string;
  title: string;
  navTitle: string;
  day: Day;
  /** Câu dẫn, cho phép HTML nội tuyến như <code>. */
  lead: string;
  videos: Video[];
  /** Ghi chú dưới video, cho phép HTML nội tuyến. */
  videoNote?: string | null;
};

export type Block = { time: string; text: string };

export type Session = {
  day: Day;
  hours: number;
  focus: string;
  blocks: Block[];
  doneWhen: string;
  /** slug các chủ đề nên đọc trước buổi này */
  read: string[];
};

export type Week = {
  number: number;
  title: string;
  lead: string;
  goals: string[];
  sessions: Session[];
  topics: Topic[];
};
