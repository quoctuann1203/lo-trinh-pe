import type { Metadata } from 'next';
// Phông chữ tự lưu từ npm (@fontsource), có bộ ký tự tiếng Việt, không cần mạng khi build.
import '@fontsource/be-vietnam-pro/400.css';
import '@fontsource/be-vietnam-pro/500.css';
import '@fontsource/be-vietnam-pro/600.css';
import '@fontsource/be-vietnam-pro/700.css';
import '@fontsource/be-vietnam-pro/800.css';
import '@fontsource/patrick-hand/400.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/600.css';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Lộ trình Full Stack Developer', template: '%s | Lộ trình Full Stack Developer' },
  description: 'Lộ trình 52 tuần trở thành full-stack developer, theo roadmap.sh/full-stack.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
