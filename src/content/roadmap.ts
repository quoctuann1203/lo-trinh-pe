/**
 * Khung lộ trình 52 tuần, hiển thị ở trang chủ.
 * Tuần nào đã soạn (có trong `weeks` của src/lib/content.ts) sẽ dùng tên thật từ file tuần đó
 * và bấm vào được; các tuần còn lại hiện tên dự kiến ở đây với nhãn "Sắp có".
 * Sửa thoải mái tên tuần, tên giai đoạn cho khớp kế hoạch của bạn.
 */
export type RoadmapWeek = { number: number; title: string };

export type Phase = {
  title: string;
  summary: string;
  weeks: RoadmapWeek[];
};

export const phases: Phase[] = [
  {
    title: 'Nền tảng backend và kiểm chứng ý tưởng',
    summary: 'Viết được API có test, làm việc với database, và biết ý tưởng sản phẩm có ai cần hay không.',
    weeks: [
      { number: 1, title: 'TypeScript phía server và kiểm chứng ý tưởng' },
      { number: 2, title: 'Kiểm thử API và ra quyết định' },
      { number: 3, title: 'SQL và PostgreSQL căn bản' },
      { number: 4, title: 'Thiết kế schema và migration' },
      { number: 5, title: 'Nối API với database, transaction' },
      { number: 6, title: 'Đăng nhập: session, cookie, mật khẩu' },
      { number: 7, title: 'Next.js phía server: Server Components, Server Actions' },
      { number: 8, title: 'Deploy bản đầu tiên và ôn tập giai đoạn 1' },
    ],
  },
  {
    title: 'Xây MVP sản phẩm đầu tiên',
    summary: 'Từ repo trống tới công cụ thu học phí có giáo viên thật dùng thử.',
    weeks: [
      { number: 9, title: 'Mô hình dữ liệu: lớp, học sinh, học phí' },
      { number: 10, title: 'Luồng tạo lớp và thêm học sinh' },
      { number: 11, title: 'Form, validate hai đầu, báo lỗi dễ hiểu' },
      { number: 12, title: 'Phiếu thu và mã QR chuyển khoản' },
      { number: 13, title: 'Gửi thông báo qua email và tin nhắn' },
      { number: 14, title: 'Đối soát thanh toán' },
      { number: 15, title: 'Phân quyền nhiều vai trò' },
      { number: 16, title: 'Test end-to-end với Playwright' },
      { number: 17, title: 'CI với GitHub Actions' },
      { number: 18, title: 'Đưa MVP cho 3 giáo viên đầu tiên' },
      { number: 19, title: 'Ghi log và theo dõi lỗi' },
      { number: 20, title: 'Sửa theo phản hồi và ôn tập giai đoạn 2' },
    ],
  },
  {
    title: 'Đo lường và tăng trưởng',
    summary: 'Biết người dùng làm gì trong sản phẩm, và ra quyết định dựa trên số liệu.',
    weeks: [
      { number: 21, title: 'Product analytics: sự kiện và phễu' },
      { number: 22, title: 'Chỉ số North Star và tỉ lệ kích hoạt' },
      { number: 23, title: 'Onboarding người dùng mới' },
      { number: 24, title: 'Feature flag và A/B test' },
      { number: 25, title: 'Gói trả phí và cổng thanh toán' },
      { number: 26, title: 'Email vòng đời và giữ chân người dùng' },
      { number: 27, title: 'Phỏng vấn lần hai: vì sao người dùng rời đi' },
      { number: 28, title: 'SEO và landing page chuyển đổi' },
      { number: 29, title: 'Hiệu năng web và Core Web Vitals' },
      { number: 30, title: 'Khả năng truy cập (accessibility)' },
      { number: 31, title: 'Viết PRD, changelog và tài liệu sản phẩm' },
      { number: 32, title: 'Ôn tập giai đoạn 3' },
    ],
  },
  {
    title: 'Hệ thống vững và mở rộng',
    summary: 'Sản phẩm chạy ổn khi có nhiều người dùng, an toàn và rẻ để vận hành.',
    weeks: [
      { number: 33, title: 'Caching và tối ưu truy vấn' },
      { number: 34, title: 'Background job và hàng đợi' },
      { number: 35, title: 'Webhook và tích hợp bên thứ ba' },
      { number: 36, title: 'Bảo mật web: OWASP Top 10' },
      { number: 37, title: 'Rate limiting và chống lạm dụng' },
      { number: 38, title: 'Sao lưu, khôi phục và di chuyển dữ liệu' },
      { number: 39, title: 'Observability: metrics, tracing, cảnh báo' },
      { number: 40, title: 'Thiết kế API công khai và versioning' },
      { number: 41, title: 'Nhiều tổ chức trên một hệ thống (multi-tenant)' },
      { number: 42, title: 'Tính năng AI có ích cho người dùng' },
      { number: 43, title: 'Tối ưu chi phí hạ tầng' },
      { number: 44, title: 'Ôn tập giai đoạn 4' },
    ],
  },
  {
    title: 'Sự nghiệp product engineer',
    summary: 'Kể lại được những gì đã làm, và vượt qua vòng phỏng vấn.',
    weeks: [
      { number: 45, title: 'System design: cách trình bày khi phỏng vấn' },
      { number: 46, title: 'System design: thiết kế hệ thống thu học phí' },
      { number: 47, title: 'Viết case study sản phẩm' },
      { number: 48, title: 'Portfolio và GitHub' },
      { number: 49, title: 'CV và LinkedIn tiếng Anh' },
      { number: 50, title: 'Phỏng vấn thử: kỹ thuật' },
      { number: 51, title: 'Phỏng vấn thử: hành vi và product sense' },
      { number: 52, title: 'Tổng kết năm và kế hoạch tiếp theo' },
    ],
  },
];
