# Lộ trình Product Engineer

Web app học theo lộ trình 52 tuần, từ front-end developer lên product engineer. Trang chủ là bản đồ lộ trình 52 tuần; hiện đã soạn tuần 1 tới 5. Mỗi tuần có kế hoạch bốn buổi và 8 chủ đề. Mỗi chủ đề có video phát ngay trong trang, phần giải thích từ gốc, các lỗi hay nhầm, và câu hỏi phỏng vấn kèm cách trả lời.

## Chạy trên máy

Cần Node.js 22.12 trở lên (nên dùng 24 LTS).

```bash
npm install
npm run dev          # http://localhost:3000
```

## Các lệnh

| Lệnh | Làm gì |
| --- | --- |
| `npm run dev` | Chạy chế độ phát triển |
| `npm run build` | Build bản production, tạo sẵn mọi trang tĩnh |
| `npm start` | Chạy bản đã build |
| `npm test` | Vitest ở chế độ theo dõi |
| `npm run test:run` | Chạy test một lần |
| `npm run typecheck` | Sinh kiểu route của Next.js rồi kiểm tra TypeScript |
| `npm run lint` | ESLint |

## Đưa lên mạng

Đây là app tĩnh, deploy được ở bất kỳ đâu chạy Next.js. Cách nhanh nhất là Vercel: đẩy repo lên GitHub, rồi bấm "Import Project" trên vercel.com. Gói Hobby miễn phí chỉ dành cho dự án cá nhân, phi thương mại. Trang học của riêng bạn thuộc loại này.

```bash
git add -A && git commit -m "feat: lộ trình học"
gh repo create lo-trinh-pe --private --source=. --push
```

## Cấu trúc

```
src/
  app/
    page.tsx                       ← trang chủ: bản đồ lộ trình 52 tuần
    tuan/[week]/page.tsx           ← tổng quan tuần: mục tiêu, bốn buổi
    tuan/[week]/[topic]/page.tsx   ← trang một chủ đề
  components/
    VideoPlayer.tsx                ← trình phát YouTube, chỉ tải khi bấm phát
    Sidebar.tsx                    ← mục lục, tiến độ, chọn tuần
    ProgressControls.tsx           ← nút "đã hiểu", checklist mục tiêu
  content/
    types.ts                       ← kiểu dữ liệu Week, Topic, Video, Session
    roadmap.ts                     ← tên 5 giai đoạn và 52 tuần trên trang chủ
    week-1.ts … week-5.ts          ← danh sách chủ đề, video, kế hoạch buổi
    week-N/*.html                  ← phần giải thích chi tiết của từng chủ đề
  lib/
    content.ts                     ← đọc nội dung lúc build
    content.test.ts                ← test kiểm tra nội dung không thiếu, không sai
    progress.ts                    ← tiến độ học lưu trong localStorage
```

## Thêm một tuần mới

1. Tạo `src/content/week-6.ts` theo mẫu `week-5.ts`: 8 chủ đề, bốn buổi, mục tiêu.
2. Tạo thư mục `src/content/week-6/` với một file `<slug>.html` cho mỗi chủ đề.
3. Thêm `week6` vào mảng `weeks` trong `src/lib/content.ts`.
4. Chạy `npm run test:run`. Test sẽ báo nếu thiếu file nội dung, mã video sai định dạng, hay buổi học trỏ tới chủ đề không tồn tại.

Mã video là 11 ký tự sau `v=` trong link YouTube. Nếu chủ sở hữu tắt chế độ nhúng, video sẽ không phát trong trang. Khi đó dùng link "Mở trên YouTube" ngay dưới khung video, hoặc thay bằng video khác.

## Ghi chú kỹ thuật

- Video dùng `youtube-nocookie.com` và chỉ tải khi người học bấm phát, nên trang mở nhanh. Phụ đề tiếng Anh được bật sẵn nếu video có.
- Phông chữ được tự lưu qua các gói `@fontsource` trên npm (có bộ ký tự tiếng Việt), nên build không cần gọi tới Google Fonts.
- Tiến độ học chỉ lưu trong trình duyệt đang dùng, không đồng bộ giữa các máy.
- Next.js 16 có thay đổi lớn so với tài liệu cũ. Đọc `AGENTS.md` và `node_modules/next/dist/docs/` trước khi sửa code.
