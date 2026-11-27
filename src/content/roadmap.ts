/**
 * Khung lộ trình 52 tuần, hiển thị ở trang chủ. Bám theo roadmap Full Stack Developer
 * của roadmap.sh (https://roadmap.sh/full-stack), gồm cả các checkpoint dự án của roadmap đó.
 *
 * Tuần nào đã soạn (có trong `weeks` của src/lib/content.ts) sẽ dùng tên thật từ file tuần đó
 * và bấm vào được; các tuần còn lại hiện tên dự kiến ở đây với nhãn "Sắp có".
 * Sửa thoải mái tên tuần, tên giai đoạn cho khớp kế hoạch của bạn.
 */
export type RoadmapWeek = {
  number: number;
  title: string;
  /** Tên checkpoint trên roadmap.sh nếu tuần này là tuần làm dự án checkpoint. */
  checkpoint?: string;
};

export type Phase = {
  title: string;
  summary: string;
  /** Các chủ đề trên roadmap.sh mà giai đoạn này phủ. */
  roadmapTopics: string[];
  weeks: RoadmapWeek[];
};

export const ROADMAP_URL = 'https://roadmap.sh/full-stack';

export const phases: Phase[] = [
  {
    title: 'Backend với Node.js và PostgreSQL',
    summary:
      'Viết được API có test, lưu dữ liệu vào PostgreSQL, đăng nhập bằng JWT và tăng tốc bằng Redis. roadmap.sh cho phép học backend trước React và Tailwind.',
    roadmapTopics: ['Node.js', 'PostgreSQL', 'RESTful APIs', 'JWT Auth', 'Redis'],
    weeks: [
      { number: 1, title: 'TypeScript phía server và kiểm chứng ý tưởng' },
      { number: 2, title: 'Kiểm thử API và ra quyết định' },
      { number: 3, title: 'SQL và PostgreSQL căn bản' },
      { number: 4, title: 'Thiết kế schema và migration' },
      { number: 5, title: 'Nối API với database, transaction' },
      { number: 6, title: 'Node.js: file, stream, tham số dòng lệnh', checkpoint: 'CLI Apps' },
      { number: 7, title: 'Thiết kế RESTful API: tài nguyên, status code, phân trang' },
      { number: 8, title: 'API ghi chú hoàn chỉnh trên PostgreSQL', checkpoint: 'Simple CRUD Apps' },
      { number: 9, title: 'Mật khẩu và đăng nhập bằng JWT' },
      { number: 10, title: 'Refresh token, phân quyền và bảo vệ API' },
      { number: 11, title: 'Redis: cache, lưu phiên, giới hạn tần suất' },
      { number: 12, title: 'Ôn tập giai đoạn 1' },
    ],
  },
  {
    title: 'Nền tảng web: HTML, CSS, JavaScript, npm, Git',
    summary:
      'Lấp chỗ hổng nền tảng theo đúng thứ tự của roadmap.sh, mỗi phần kết thúc bằng một checkpoint nhỏ. Phần nào đã vững thì làm nhanh checkpoint rồi đi tiếp.',
    roadmapTopics: ['HTML', 'CSS', 'JavaScript', 'npm', 'Git', 'GitHub'],
    weeks: [
      { number: 13, title: 'HTML ngữ nghĩa, form và khả năng truy cập' },
      { number: 14, title: 'CSS: box model, flexbox, grid, responsive' },
      { number: 15, title: 'Trang giới thiệu bản thân bằng HTML và CSS', checkpoint: 'Static Webpages' },
      { number: 16, title: 'JavaScript trong trình duyệt: DOM, sự kiện, fetch' },
      { number: 17, title: 'Thêm tương tác cho trang tĩnh', checkpoint: 'Interactivity' },
      { number: 18, title: 'npm: package.json, semver, lockfile, Vite' },
      { number: 19, title: 'Dùng thư viện ngoài trong dự án', checkpoint: 'External Packages' },
      { number: 20, title: 'Git: commit, nhánh, merge, rebase' },
      { number: 21, title: 'GitHub: pull request, review, issue', checkpoint: 'Collaborative Work' },
      { number: 22, title: 'Ôn tập giai đoạn 2' },
    ],
  },
  {
    title: 'React, Tailwind và ứng dụng hoàn chỉnh',
    summary:
      'Dựng giao diện bằng React và Tailwind, nối với API của giai đoạn 1, rồi làm công cụ thu học phí cho giáo viên: ứng dụng full-stack hoàn chỉnh đầu tiên của bạn.',
    roadmapTopics: ['React', 'Tailwind CSS'],
    weeks: [
      { number: 23, title: 'React: component, props, state' },
      { number: 24, title: 'React: effect, form và gọi API' },
      { number: 25, title: 'React: định tuyến và quản lý dữ liệu từ server' },
      { number: 26, title: 'Tailwind CSS: utility class, responsive, dark mode' },
      { number: 27, title: 'Ứng dụng React gọi API thật', checkpoint: 'Frontend Apps' },
      { number: 28, title: 'Next.js: Server Components, Server Actions' },
      { number: 29, title: 'Công cụ học phí: lớp, học sinh, khoản thu và API', checkpoint: 'Complete App' },
      { number: 30, title: 'Công cụ học phí: đăng nhập giáo viên và phụ huynh', checkpoint: 'Complete App' },
      { number: 31, title: 'Công cụ học phí: giao diện tạo lớp, thu phí, báo lỗi', checkpoint: 'Complete App' },
      { number: 32, title: 'Công cụ học phí: phiếu thu, mã QR, đối soát', checkpoint: 'Complete App' },
      { number: 33, title: 'Test end-to-end với Playwright' },
      { number: 34, title: 'Ôn tập giai đoạn 3' },
    ],
  },
  {
    title: 'DevOps: Linux, AWS, CI/CD và hạ tầng bằng code',
    summary:
      'Tự đưa công cụ học phí lên server AWS, theo dõi nó, tự động deploy, rồi viết toàn bộ hạ tầng thành code.',
    roadmapTopics: ['Linux Basics', 'AWS: EC2, VPC, S3, Route53, SES', 'Monit', 'GitHub Actions', 'Ansible', 'Terraform'],
    weeks: [
      { number: 35, title: 'Linux: shell, file, quyền, tiến trình' },
      { number: 36, title: 'Linux: SSH, systemd, Nginx, HTTPS' },
      { number: 37, title: 'AWS: tài khoản, IAM, EC2' },
      { number: 38, title: 'AWS: VPC, subnet, security group' },
      { number: 39, title: 'AWS: S3, Route53 và gửi email nhắc phí bằng SES' },
      { number: 40, title: 'Đưa công cụ học phí lên EC2 với tên miền', checkpoint: 'Deployment' },
      { number: 41, title: 'Theo dõi server bằng Monit, log và cảnh báo', checkpoint: 'Monitoring' },
      { number: 42, title: 'Tự động test và deploy bằng GitHub Actions', checkpoint: 'CI / CD' },
      { number: 43, title: 'Cấu hình server bằng Ansible', checkpoint: 'Automation' },
      { number: 44, title: 'Dựng hạ tầng AWS bằng Terraform', checkpoint: 'Infrastructure' },
    ],
  },
  {
    title: 'Đưa sản phẩm tới người dùng và đi làm',
    summary:
      'Phần thêm ngoài roadmap.sh: cho giáo viên thật dùng công cụ học phí, đo xem họ dùng thế nào, sửa theo phản hồi. Cuối năm bạn có cả nền full-stack lẫn một sản phẩm thật để kể khi phỏng vấn.',
    roadmapTopics: [],
    weeks: [
      { number: 45, title: 'Ôn tập giai đoạn 4' },
      { number: 46, title: 'Đưa công cụ học phí cho 3 giáo viên dùng thử' },
      { number: 47, title: 'Product analytics: sự kiện, phễu, tỉ lệ kích hoạt' },
      { number: 48, title: 'Phỏng vấn người dùng và sửa theo phản hồi' },
      { number: 49, title: 'System design: thiết kế lại công cụ học phí' },
      { number: 50, title: 'Case study sản phẩm, portfolio và CV' },
      { number: 51, title: 'Phỏng vấn thử: kỹ thuật và product sense' },
      { number: 52, title: 'Tổng kết năm: đi tiếp Full Stack hay Product Engineer' },
    ],
  },
];
