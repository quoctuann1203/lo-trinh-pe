import type { Week } from './types';

export const week2: Week = {
  number: 2,
  title: 'Kiểm thử API và ra quyết định',
  lead: 'Cuối tuần này mọi endpoint của API sách đều có test, API phân biệt được 401 và 403, bạn đã nói chuyện đủ 10 giáo viên, quyết định làm tiếp hay đổi ý tưởng đã được ghi lại, và repo sản phẩm đã được khởi tạo.',
  goals: [
    'npm test xanh, có ít nhất 20 test cho 5 endpoint, độ phủ dòng của src/ từ 90% trở lên',
    'Thêm API key: thiếu key trả 401, key chỉ đọc mà ghi trả 403, cả hai có test',
    'Đủ 10 cuộc phỏng vấn, mỗi cuộc có file ghi chép',
    'Bảng tổng hợp 10 người và file decision.md ghi rõ làm tiếp hay đổi ý tưởng',
    'Repo sản phẩm Next.js + TypeScript + Vitest trên GitHub, npm test và npm run build đều chạy',
    'README phần Testing bằng tiếng Anh và một bản ghi âm 3 phút về quyết định',
  ],
  sessions: [
    {
      day: 'Thứ Ba',
      hours: 2,
      focus: 'Lý thuyết kiểm thử, Vitest, 401/403 và cách chọn mã trạng thái',
      read: ['kiem-thu', 'vitest', 'chon-ma', 'xac-thuc'],
      blocks: [
        { time: '0:00–0:25', text: 'Kiểm thử là gì, nên test cái gì. Cài vitest vào books-api' },
        { time: '0:25–1:05', text: 'Vitest cơ bản. Bài luyện: viết hàm tinhHocPhi và 6 test cho nó, tự tay' },
        { time: '1:05–1:40', text: 'Cây quyết định mã trạng thái, xác thực và phân quyền' },
        { time: '1:40–2:00', text: 'Trả lời câu hỏi phỏng vấn của 4 chủ đề vào notes/week-02.md' },
      ],
      doneWhen: 'npx vitest run in ra 6 test qua cho tinhHocPhi, trong đó có test.each và một test toThrow, và bạn vẽ lại được cây chọn mã trạng thái trên giấy mà không nhìn.',
    },
    {
      day: 'Thứ Năm',
      hours: 2,
      focus: 'Test mọi endpoint của API sách và thêm API key',
      read: ['test-api'],
      blocks: [
        { time: '0:00–0:15', text: 'Tạo test/helpers.ts: hàm req() gửi JSON, reset kho trước mỗi test' },
        { time: '0:15–1:00', text: 'Biến 15 dòng của bảng curl tuần 1 thành test, mỗi endpoint một describe' },
        { time: '1:00–1:35', text: 'Thêm middleware API key: GET công khai, ghi cần key, key chỉ đọc bị 403. Viết test trước, code sau' },
        { time: '1:35–2:00', text: 'Chạy coverage, bổ sung test cho dòng chưa phủ, commit, rồi mới nhờ AI review test' },
      ],
      doneWhen: 'npm test xanh, ít nhất 20 test, coverage dòng của src/ từ 90% trở lên, và mỗi mã 400, 401, 403, 404, 409, 422, 500 xuất hiện trong ít nhất một test.',
    },
    {
      day: 'Thứ Bảy',
      hours: 4,
      focus: 'Đủ 10 phỏng vấn, ra quyết định, khởi tạo repo',
      read: ['tong-hop-phong-van', 'quyet-dinh', 'khoi-tao-repo'],
      blocks: [
        { time: '0:00–2:00', text: 'Phỏng vấn những người còn lại cho đủ 10. Từ cuộc thứ 4 trở đi, thêm lời mời đặt cọc ở cuối' },
        { time: '2:00–2:45', text: 'Lập bảng tổng hợp 10 người, đếm mẫu lặp lại, đếm số người đã chuyển cọc' },
        { time: '2:45–3:15', text: 'Viết decision.md theo luật đã định từ tuần 1' },
        { time: '3:15–4:00', text: 'Khởi tạo repo Next.js + TypeScript + Vitest, đẩy lên GitHub' },
      ],
      doneWhen: 'Có 10 file ghi chép phỏng vấn, bảng tổng hợp, decision.md có con số cam kết thật, và repo mới chạy được cả npm test lẫn npm run build.',
    },
    {
      day: 'Chủ nhật',
      hours: 2,
      focus: 'README, nói 3 phút, làm lại bài tuần 1',
      read: [],
      blocks: [
        { time: '0:00–0:30', text: 'Thêm phần Testing và Authentication vào README tiếng Anh của API sách' },
        { time: '0:30–1:00', text: 'Nói 3 phút: quyết định của bạn và vì sao, dựa trên con số nào' },
        { time: '1:00–1:50', text: 'Làm lại bài tuần 1: API sách từ trang trắng trong 45 phút, không mở code cũ' },
        { time: '1:50–2:00', text: 'Tổng kết tuần, chạy lại bộ test của tuần 2 lên bản làm lại' },
      ],
      doneWhen: 'Bản làm lại qua được bộ test bạn viết hôm Thứ Năm. Đây là cách kiểm tra cả bản làm lại lẫn bộ test.',
    },
  ],
  topics: [
    {
      slug: 'kiem-thu',
      title: 'Kiểm thử là gì và nên test cái gì',
      navTitle: 'Kiểm thử là gì',
      day: 'Thứ Ba',
      lead: 'Một bài test là một đoạn code chạy code của bạn rồi kiểm tra kết quả. Mục tiêu không phải số lượng test, mà là sự tự tin để sửa code mà không sợ làm hỏng thứ khác.',
      videos: [
        { id: 'u6QfIXgjwGQ', title: 'Kiểm thử phần mềm và TDD trong 100 giây', source: 'Fireship', why: 'Khởi động nhanh: vì sao phải test, và ý tưởng viết test trước rồi mới viết code.' },
        { id: 'oSqUybBlgHQ', title: 'How to balance Unit, Integration, and E2E tests?', source: 'YouTube', why: 'So sánh ba loại test theo tốc độ, công viết, độ tự tin, và bàn về kim tự tháp test. Có chia chương, dễ xem từng đoạn.' },
      ],
    },
    {
      slug: 'vitest',
      title: 'Vitest từ gốc',
      navTitle: 'Vitest từ gốc',
      day: 'Thứ Ba',
      lead: 'Vitest chạy các file <code>*.test.ts</code>, gọi từng hàm <code>test</code>, và báo cái nào qua, cái nào hỏng. Nắm năm thứ là đủ dùng: <code>test</code>, <code>expect</code>, <code>describe</code>, <code>beforeEach</code>, và <code>vi</code>.',
      videos: [
        { id: 'qtm3wjM2eGI', title: 'Vitest Crash Course', source: 'Web Dev Simplified', why: 'Từ cài đặt đến matcher, test async và mock. Xem trọn trước buổi Thứ Ba.' },
        { id: 'uX5SF94RBNI', title: 'Unit Testing (Vitest) Tutorial #11: Mock Functions', source: 'YouTube', why: 'Riêng phần vi.fn và mock, xem khi đọc tới mục mock.' },
      ],
    },
    {
      slug: 'chon-ma',
      title: 'Chọn mã trạng thái: một cây quyết định',
      navTitle: 'Cây chọn mã trạng thái',
      day: 'Thứ Ba',
      lead: 'Gặp một lỗi, hãy hỏi lần lượt sáu câu: bạn là ai, bạn có được làm việc này không, server đọc được request không, dữ liệu có đúng quy tắc không, tài nguyên có tồn tại không, có xung đột không. Câu đầu tiên trả lời sai quyết định mã trạng thái.',
      videos: [
        { id: 'nDvDFAOpvWg', title: '401 vs 403 vs 409: When to use What?', source: 'YouTube', why: 'Ba mã hay nhầm nhất, có ví dụ cụ thể.' },
        { id: 'nb0xQUcxVj4', title: 'Every HTTP Status Code Explained in 8 Minutes!', source: 'YouTube', why: 'Ôn lại toàn bộ các mã thường gặp sau khi đọc cây quyết định.' },
      ],
    },
    {
      slug: 'xac-thuc',
      title: 'Xác thực và phân quyền: 401 và 403 trong thực tế',
      navTitle: 'Xác thực và phân quyền',
      day: 'Thứ Ba',
      lead: 'Xác thực (authentication) trả lời "bạn là ai". Phân quyền (authorization) trả lời "bạn được làm gì". Sai ở bước đầu là 401, sai ở bước sau là 403.',
      videos: [
        { id: 'JwlvD4fc9ug', title: 'Authentication & Authorization Explained in 5 Minutes', source: 'YouTube', why: 'Ngắn, rõ, và nhấn mạnh rằng phân quyền phải chạy ở mọi request.' },
        { id: 'F4jLpIJGyS4', title: 'Difference between authentication and authorization', source: 'YouTube', why: 'Một cách giải thích khác cho cùng khái niệm, để chắc bạn không nhầm hai từ này.' },
      ],
    },
    {
      slug: 'test-api',
      title: 'Test API Hono bằng app.request',
      navTitle: 'Test API Hono',
      day: 'Thứ Năm',
      lead: 'Hono cho phép gửi một request giả vào app bằng <code>app.request()</code> mà không cần mở cổng. Mỗi test gửi một request và kiểm tra mã trạng thái, header, và body, đúng như bạn đã làm bằng curl ở tuần 1.',
      videos: [
        { id: 'TLccnKIMggA', title: 'Static, Unit, Integration, and End-to-End Tests Explained', source: 'Lucas Paganini', why: 'Đặt bài test API vào đúng chỗ của nó: đây là integration test, chạy nhanh mà vẫn kiểm tra cả route, validate và xử lý lỗi.' },
      ],
      videoNote: 'Tài liệu chính thức nên đọc kèm: <a href="https://hono.dev/docs/guides/testing" target="_blank" rel="noopener noreferrer">Hono Testing</a> và <a href="https://vitest.dev/guide/" target="_blank" rel="noopener noreferrer">Vitest Guide</a>.',
    },
    {
      slug: 'tong-hop-phong-van',
      title: 'Phỏng vấn đủ 10 người và tổng hợp',
      navTitle: 'Tổng hợp phỏng vấn',
      day: 'Thứ Bảy',
      lead: 'Một cuộc phỏng vấn cho bạn một câu chuyện. Mười cuộc cho bạn một mẫu. Việc của Thứ Bảy là biến 10 file ghi chép thành một bảng, rồi nhìn xem điều gì lặp lại.',
      videos: [
        { id: 'MT4Ig2uqjTc', title: 'How to Talk to Users', source: 'Eric Migicovsky, Y Combinator', why: 'Năm câu hỏi cốt lõi khi nói chuyện với người dùng, và cách tránh nghe nhầm lời khen thành tín hiệu.' },
        { id: 'z1iF1c8w5Lg', title: 'How To Talk To Users', source: 'Gustaf Alströmer, Y Combinator Startup School', why: 'Lời khuyên không hiển nhiên khi tìm người phỏng vấn và đặt câu hỏi.' },
      ],
    },
    {
      slug: 'quyet-dinh',
      title: 'Ra quyết định và ghi lại',
      navTitle: 'Ra quyết định',
      day: 'Thứ Bảy',
      lead: 'Một quyết định tốt có ba phần: bối cảnh lúc quyết định, lựa chọn đã chọn, và hệ quả bạn chấp nhận. Viết ra để ba tháng sau bạn nhớ vì sao, và để người phỏng vấn thấy bạn ra quyết định bằng bằng chứng.',
      videos: [
        { id: '7Gqn2dbt_JY', title: 'Architecture Decision Records (ADR): The Basics', source: 'YouTube', why: 'Mẫu ghi quyết định của kỹ sư. Bạn sẽ dùng đúng cấu trúc này cho một quyết định sản phẩm.' },
        { id: '-JqraBhrrjI', title: 'Architecture Decision Record (ADR), Michael Keeling', source: 'Podcast, tập 113', why: 'Dạng trò chuyện, sâu hơn về lý do nên ghi quyết định. Hợp để luyện nghe.' },
      ],
    },
    {
      slug: 'khoi-tao-repo',
      title: 'Khởi tạo repo Next.js, TypeScript và Vitest',
      navTitle: 'Khởi tạo repo sản phẩm',
      day: 'Thứ Bảy',
      lead: 'Repo sản phẩm bắt đầu với ba thứ chạy được ngay: <code>npm run dev</code>, <code>npm test</code>, <code>npm run build</code>. Đặt nền đúng từ ngày đầu rẻ hơn nhiều so với sửa lại sau.',
      videos: [
        { id: 'T-3SdQUauYs', title: 'Learn the new Next.js App Router in a 1.5 hour crash course', source: 'YouTube', why: 'Giải thích App Router, layout, server component và client component. Xem 30 phút đầu là đủ cho buổi này.' },
      ],
      videoNote: 'Video quay với Next.js 13. Bạn sẽ dùng Next.js 16, nơi <code>params</code> của page là một Promise phải <code>await</code>. Khi khác nhau, tin tài liệu đi kèm trong <code>node_modules/next/dist/docs/</code>.',
    },
  ],
};
