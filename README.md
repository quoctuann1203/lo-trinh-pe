# Lộ trình Full Stack Developer

Web app học theo lộ trình 52 tuần để trở thành full-stack developer, bám theo [roadmap Full Stack của roadmap.sh](https://roadmap.sh/full-stack). Năm giai đoạn: backend với Node.js và PostgreSQL (Node.js, PostgreSQL, RESTful API, JWT, Redis), nền tảng web (HTML, CSS, JavaScript, npm, Git, GitHub), React và Tailwind cùng một ứng dụng hoàn chỉnh, DevOps (Linux, AWS, Monit, GitHub Actions, Ansible, Terraform), và ôn tập đi làm. Các checkpoint dự án của roadmap.sh được gắn nhãn trên từng tuần. Lộ trình gắn công cụ thu học phí cho giáo viên làm dự án hoàn chỉnh, và có thêm vài tuần về sản phẩm (người dùng thật, analytics, phỏng vấn người dùng). Trang `/ban-do` là bản đồ kiểu roadmap.sh: mỗi chủ đề có mô tả, link học lấy từ roadmap.sh và ô để đánh dấu đã xong. Trang chủ là bản đồ lộ trình 52 tuần; hiện đã soạn tuần 1 tới 5. Mỗi tuần có kế hoạch bốn buổi và 8 chủ đề. Mỗi chủ đề có video phát ngay trong trang, phần giải thích từ gốc, các lỗi hay nhầm, và câu hỏi phỏng vấn kèm cách trả lời.

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
    ban-do/page.tsx                ← bản đồ Full Stack: chủ đề roadmap.sh, link học, đánh dấu đã xong
    tuan/[week]/page.tsx           ← tổng quan tuần: mục tiêu, bốn buổi
    tuan/[week]/[topic]/page.tsx   ← trang một chủ đề
  components/
    VideoPlayer.tsx                ← trình phát YouTube, chỉ tải khi bấm phát
    Sidebar.tsx                    ← mục lục, tiến độ, chọn tuần
    ProgressControls.tsx           ← nút "đã hiểu", checklist mục tiêu
    FullStackMap.tsx               ← các ô chủ đề và bảng chi tiết của trang bản đồ
  content/
    types.ts                       ← kiểu dữ liệu Week, Topic, Video, Session
    roadmap.ts                     ← 5 giai đoạn, 52 tuần và checkpoint theo roadmap.sh
    fullstack-map.ts               ← chủ đề, mô tả và link học của trang bản đồ
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

### Khung một chủ đề

Mỗi file `week-N/<slug>.html` đi theo đúng thứ tự này, để người học luôn biết mình đang ở đâu trong bài:

| Phần | Viết thế nào |
| --- | --- |
| `<div class="tldr">` Trong một câu | Nó là gì trong 1–2 câu, kèm một ví dụ đời thường |
| `<h2>Vì sao cần …</h2>` | Không có nó thì vướng gì, tốt nhất có đoạn code "làm tay" để thấy rõ cái khó |
| `<h2>Từ khoá cần biết</h2>` + `<dl class="terms">` | Mọi thuật ngữ mới dùng trong bài, giải thích bằng lời thường |
| `<h2>… hoạt động thế nào</h2>` | Từng bước (`<ol class="steps">`), có sơ đồ nếu được |
| `<h2>Làm thử …</h2>` | Ví dụ nhỏ nhất chạy được, chia bước, có kết quả mong đợi |
| `<h2>Dùng trong …</h2>` | Áp vào API sách hoặc hocphi |
| `<h2>Bút đỏ …</h2>` | Những câu nghe đúng mà sai |
| `<h2>Tự kiểm tra</h2>` | 3 câu tự hỏi, đáp án ẩn trong `<details>` |
| `<h2>Câu hỏi phỏng vấn</h2>` | Câu hỏi và cách trả lời |
| `<div class="recap">` Nhớ 3 ý | Ba ý chính của bài |

Test kiểm mọi chủ đề có đủ các phần trên. Mẫu: `src/content/week-1/hono.html`.

Mã video là 11 ký tự sau `v=` trong link YouTube. Nếu chủ sở hữu tắt chế độ nhúng, video sẽ không phát trong trang. Khi đó dùng link "Mở trên YouTube" ngay dưới khung video, hoặc thay bằng video khác.

## Ghi chú kỹ thuật

- Video dùng `youtube-nocookie.com` và chỉ tải khi người học bấm phát, nên trang mở nhanh. Phụ đề tiếng Anh được bật sẵn nếu video có.
- Phông chữ được tự lưu qua các gói `@fontsource` trên npm (có bộ ký tự tiếng Việt), nên build không cần gọi tới Google Fonts.
- Tiến độ học chỉ lưu trong trình duyệt đang dùng, không đồng bộ giữa các máy.
- Next.js 16 có thay đổi lớn so với tài liệu cũ. Đọc `AGENTS.md` và `node_modules/next/dist/docs/` trước khi sửa code.
