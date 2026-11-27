/**
 * Bản đồ Full Stack theo roadmap.sh/full-stack, hiển thị ở /ban-do.
 * Mô tả và link học lấy từ roadmap.sh (dịch tóm tắt sang tiếng Việt); phần "Sản phẩm" là phần thêm.
 * `weeks` là các tuần trong lộ trình 52 tuần học chủ đề đó.
 * File này được sinh một lần rồi sửa tay thoải mái.
 */
export type ResourceType = 'roadmap' | 'official' | 'article' | 'video' | 'course' | 'opensource';

export type Resource = { type: ResourceType; title: string; url: string };

export type MapNode = {
  id: string;
  kind: 'topic' | 'checkpoint';
  title: string;
  summary: string;
  /** Những gì cần nắm. */
  learn: string[];
  /** Ý tưởng dự án (cho checkpoint). */
  projects: string[];
  resources: Resource[];
  weeks: number[];
  /** roadmap.sh cho phép để sau. */
  optional: boolean;
};

export type MapSection = { id: string; title: string; note: string; nodes: MapNode[] };

export const mapSections: MapSection[] = [
  {
    id: 'frontend',
    title: 'Nền tảng frontend',
    note: 'Phần mở đầu của roadmap.sh: cấu trúc trang, giao diện, tương tác, thư viện và làm việc nhóm.',
    nodes: [
      {
        id: 'html',
        kind: 'topic',
        title: 'HTML',
        summary:
          'Ngôn ngữ đánh dấu tạo khung cho trang web: tiêu đề, đoạn văn, liên kết, form. CSS lo giao diện, JavaScript lo tương tác.',
        weeks: [13],
        learn: [
          'Thẻ ngữ nghĩa: header, main, nav, article, section',
          'Form và các loại input, label',
          'Ảnh, liên kết, bảng, danh sách',
          'Thuộc tính cơ bản cho khả năng truy cập (alt, aria-label)',
        ],
        projects: [],
        resources: [
          {
            type: 'roadmap',
            title: 'Visit the Dedicated HTML Roadmap',
            url: 'https://roadmap.sh/html',
          },
          {
            type: 'video',
            title: 'HTML Full Course for Beginners',
            url: 'https://youtu.be/mJgBOIoGihA',
          },
          {
            type: 'video',
            title: 'HTML Full Course - Build a Website Tutorial',
            url: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
          },
        ],
        optional: false,
      },
      {
        id: 'css',
        kind: 'topic',
        title: 'CSS',
        summary: 'Ngôn ngữ định dạng giao diện: màu sắc, khoảng cách, bố cục, responsive.',
        weeks: [14],
        learn: [
          'Selector, độ ưu tiên (specificity), cascade',
          'Box model, margin, padding, border',
          'Flexbox và Grid',
          'Media query và thiết kế responsive',
        ],
        projects: [],
        resources: [
          {
            type: 'roadmap',
            title: 'Visit the Dedicated CSS Roadmap',
            url: 'https://roadmap.sh/css',
          },
          {
            type: 'article',
            title: 'Web.dev by Google — Learn CSS',
            url: 'https://web.dev/learn/css/',
          },
          {
            type: 'video',
            title: 'CSS Complete Course',
            url: 'https://youtu.be/n4R2E7O-Ngo',
          },
          {
            type: 'video',
            title: 'HTML and CSS Tutorial',
            url: 'https://www.youtube.com/watch?v=D-h8L5hgW-w',
          },
        ],
        optional: false,
      },
      {
        id: 'cp-static',
        kind: 'checkpoint',
        title: 'Checkpoint: Trang tĩnh',
        summary:
          'Học xong HTML và CSS, bạn phải tự dựng được trang tĩnh. Khi xem khoá học, hãy code theo; sau đó tự làm lại dự án 2–3 lần không nhìn video, rồi làm một dự án tương tự.',
        weeks: [15],
        learn: ['Dựng lại được một giao diện có sẵn mà không cần xem hướng dẫn'],
        projects: [
          'Chép lại giao diện của một website bạn thích',
          'Dựng lại mẫu blog đơn giản trên Figma, hoặc các trang của cs.fyi',
          'Lấy cảm hứng từ portfolio của người khác rồi làm portfolio của bạn',
        ],
        resources: [
          {
            type: 'article',
            title: 'Mẫu blog đơn giản trên Figma',
            url: 'https://www.figma.com/file/nh0V05z3NB87ue9v5PcO3R/writings.dev?type=design&node-id=0%3A1&t=2iQplaIojU3ydAfW-1',
          },
          {
            type: 'article',
            title: 'cs.fyi (trang để dựng lại)',
            url: 'https://cs.fyi/',
          },
          {
            type: 'article',
            title: 'Portfolio mẫu trên Astro Showcase',
            url: 'https://astro.build/showcase/',
          },
        ],
        optional: false,
      },
      {
        id: 'javascript',
        kind: 'topic',
        title: 'JavaScript',
        summary: 'Ngôn ngữ thêm tương tác cho trang: slider, bấm nút, popup, gọi API.',
        weeks: [16],
        learn: [
          'Biến, kiểu dữ liệu, điều kiện, vòng lặp, hàm',
          'Mảng, object và cách truy cập dữ liệu',
          'DOM: chọn phần tử, thêm/xoá phần tử và class',
          'Sự kiện, fetch, Promise, async/await',
        ],
        projects: [],
        resources: [
          {
            type: 'roadmap',
            title: 'Visit Dedicated JavaScript Roadmap',
            url: 'https://roadmap.sh/javascript',
          },
          {
            type: 'article',
            title: 'The Modern JavaScript Tutorial',
            url: 'https://javascript.info/',
          },
          {
            type: 'article',
            title: 'Build 30 Javascript projects in 30 days',
            url: 'https://javascript30.com/',
          },
          {
            type: 'video',
            title: 'JavaScript Crash Course for Beginners',
            url: 'https://youtu.be/hdI2bqOjy3c?t=2',
          },
        ],
        optional: false,
      },
      {
        id: 'cp-interactivity',
        kind: 'checkpoint',
        title: 'Checkpoint: Tương tác',
        summary: 'Lúc này bạn phải tự thêm tương tác cho trang bằng JavaScript.',
        weeks: [17],
        learn: [
          'Chọn phần tử DOM, gắn sự kiện click, focus, submit',
          'Thêm, xoá phần tử và class bằng JavaScript',
          'Gọi API ngoài bằng fetch',
          'Lưu dữ liệu vào localStorage',
        ],
        projects: [
          'Ứng dụng to-do có tìm kiếm, thêm, sửa, xoá; dữ liệu lưu ở localStorage',
          'Nhập username GitHub để xem hồ sơ qua API của GitHub, có validate và báo lỗi',
          'Máy tính bỏ túi với các phép tính cơ bản',
        ],
        resources: [
          {
            type: 'official',
            title: 'GitHub API: ví dụ lấy thông tin người dùng',
            url: 'https://api.github.com/users/nilbuild',
          },
        ],
        optional: false,
      },
      {
        id: 'npm',
        kind: 'topic',
        title: 'npm',
        summary: 'Trình quản lý gói mặc định của Node.js: cài, cập nhật và chạy thư viện bên ngoài.',
        weeks: [18],
        learn: [
          'package.json, dependencies và devDependencies',
          'Semver và package-lock.json',
          'npm scripts',
          'Tìm và đọc tài liệu gói trên npmjs.com',
        ],
        projects: [],
        resources: [
          {
            type: 'opensource',
            title: 'How to NPM',
            url: 'https://github.com/workshopper/how-to-npm',
          },
          {
            type: 'article',
            title: 'Modern JavaScript for Dinosaurs',
            url: 'https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html',
          },
          {
            type: 'article',
            title: 'An Absolute Beginners Guide to Using npm',
            url: 'https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/',
          },
          {
            type: 'video',
            title: 'NPM Crash Course',
            url: 'https://www.youtube.com/watch?v=jHDhaSSKmB0',
          },
        ],
        optional: false,
      },
      {
        id: 'cp-packages',
        kind: 'checkpoint',
        title: 'Checkpoint: Thư viện ngoài',
        summary:
          'Bạn phải cài và dùng được thư viện từ npm, hiểu package.json. Chưa cần bundler: chỉ cần nạp file trong node_modules bằng thẻ link và script.',
        weeks: [19],
        learn: ['Cài gói bằng npm và dùng nó trong trang HTML'],
        projects: [
          'Trang hiện giờ hiện tại của người dùng bằng dayjs',
          'Thêm micromodal: bấm nút mở hộp thoại chọn múi giờ, chọn xong thì cập nhật giờ trên trang',
        ],
        resources: [
          {
            type: 'official',
            title: 'npmjs.com',
            url: 'https://npmjs.com/',
          },
          {
            type: 'official',
            title: 'Day.js',
            url: 'https://day.js.org/',
          },
          {
            type: 'official',
            title: 'Micromodal',
            url: 'https://micromodal.vercel.app/#introduction',
          },
        ],
        optional: false,
      },
      {
        id: 'git',
        kind: 'topic',
        title: 'Git',
        summary: 'Hệ thống quản lý phiên bản phân tán, miễn phí và mã nguồn mở.',
        weeks: [20],
        learn: ['commit, log, diff', 'Nhánh, merge, rebase', 'Xử lý xung đột', 'Hoàn tác thay đổi an toàn'],
        projects: [],
        resources: [
          {
            type: 'roadmap',
            title: 'Visit Dedicated Git & GitHub Roadmap',
            url: 'https://roadmap.sh/git-github',
          },
          {
            type: 'course',
            title: 'Why use Git? (Interactive Lesson)',
            url: 'https://inter-git.com/lessons/introduction',
          },
          {
            type: 'article',
            title: 'Tutorial: Git for Absolutely Everyone',
            url: 'https://thenewstack.io/tutorial-git-for-absolutely-everyone/',
          },
          {
            type: 'video',
            title: 'Git & GitHub Crash Course For Beginners',
            url: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc',
          },
        ],
        optional: false,
      },
      {
        id: 'github',
        kind: 'topic',
        title: 'GitHub',
        summary: 'Nơi lưu repo Git trên mạng, kèm pull request, review code và issue để làm việc nhóm.',
        weeks: [21],
        learn: ['Đẩy repo lên GitHub', 'Pull request và review code', 'Issue và GitHub Flow'],
        projects: [],
        resources: [
          {
            type: 'official',
            title: 'GitHub Documentation',
            url: 'https://docs.github.com/en/get-started/quickstart',
          },
          {
            type: 'article',
            title: 'How to Use Git in a Professional Dev Team',
            url: 'https://ooloo.io/project/github-flow',
          },
          {
            type: 'video',
            title: "Git vs. GitHub: What's the difference?",
            url: 'https://www.youtube.com/watch?v=wpISo9TNjfU',
          },
          {
            type: 'video',
            title: 'Git and GitHub for Beginners',
            url: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
          },
        ],
        optional: false,
      },
      {
        id: 'cp-collab',
        kind: 'checkpoint',
        title: 'Checkpoint: Làm việc nhóm',
        summary: 'Học xong Git và GitHub, hãy dựng hồ sơ GitHub và đẩy mọi dự án đã làm lên đó.',
        weeks: [21],
        learn: [
          'Tên repo viết thường, nối bằng gạch ngang (vd. todo-app)',
          'Mỗi repo có README rõ ràng: dự án là gì, chạy trên máy thế nào',
          'README có ảnh chụp màn hình',
          'Mỗi repo có file LICENSE',
        ],
        projects: ['Đẩy toàn bộ dự án từ đầu roadmap lên GitHub theo các quy tắc trên'],
        resources: [
          {
            type: 'article',
            title: 'Chọn license: choosealicense.com',
            url: 'https://choosealicense.com/',
          },
          {
            type: 'opensource',
            title: 'Ví dụ README tốt: aws-cost-cli',
            url: 'https://github.com/nilbuild/aws-cost-cli',
          },
        ],
        optional: false,
      },
    ],
  },
  {
    id: 'react',
    title: 'React và Tailwind',
    note: 'roadmap.sh cho phép bỏ qua phần này và quay lại sau khi học backend. Lộ trình 52 tuần của bạn đang làm đúng như vậy.',
    nodes: [
      {
        id: 'react',
        kind: 'topic',
        title: 'React',
        summary:
          'Thư viện frontend phổ biến nhất để dựng giao diện. Có thể render phía server bằng Node và làm app di động bằng React Native.',
        weeks: [23, 24, 25],
        learn: [
          'Component, props, state',
          'Effect và gọi API',
          'Form có kiểm tra dữ liệu',
          'Định tuyến và dữ liệu từ server',
        ],
        projects: [],
        resources: [
          {
            type: 'roadmap',
            title: 'Visit Dedicated React Roadmap',
            url: 'https://roadmap.sh/react',
          },
          {
            type: 'official',
            title: 'Getting Started with React',
            url: 'https://react.dev/learn/tutorial-tic-tac-toe',
          },
          {
            type: 'video',
            title: 'React JS Course for Beginners',
            url: 'https://www.youtube.com/watch?v=nTeuhbP7wdE',
          },
          {
            type: 'video',
            title: 'React Course - Beginners Tutorial for React',
            url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          },
        ],
        optional: true,
      },
      {
        id: 'tailwind',
        kind: 'topic',
        title: 'Tailwind CSS',
        summary:
          'Framework CSS dạng utility class như flex, pt-4, text-center, ghép lại để dựng mọi thiết kế ngay trong markup.',
        weeks: [26],
        learn: ['Utility class và cách ghép', 'Responsive và dark mode', 'Tách component để tránh lặp class'],
        projects: [],
        resources: [
          {
            type: 'official',
            title: 'Tailwind CSS',
            url: 'https://tailwindcss.com',
          },
          {
            type: 'video',
            title: 'Tailwind CSS Full Course for Beginners',
            url: 'https://www.youtube.com/watch?v=lCxcTsOHrjo',
          },
          {
            type: 'video',
            title: 'Tailwind CSS Crash Course',
            url: 'https://www.youtube.com/watch?v=UBOj6rqRUME',
          },
          {
            type: 'video',
            title: 'Should You Use Tailwind CSS?',
            url: 'https://www.youtube.com/watch?v=hdGsFpZ0J2E',
          },
        ],
        optional: true,
      },
      {
        id: 'cp-frontend',
        kind: 'checkpoint',
        title: 'Checkpoint: Ứng dụng frontend',
        summary:
          'Bạn phải dựng được một ứng dụng frontend hoàn chỉnh. Nếu bỏ qua React và Tailwind thì làm bằng HTML, CSS, JavaScript thuần cũng được, nhưng sớm muộn nên học một framework.',
        weeks: [27],
        learn: [
          'HTML, CSS và JavaScript cùng DOM API',
          'Fetch API, Promise và async/await',
          'Cài thư viện bằng npm',
          'Quản lý code bằng Git và đẩy lên GitHub',
        ],
        projects: ['Ứng dụng React gọi API bạn đã viết ở phần backend'],
        resources: [
          {
            type: 'roadmap',
            title: 'Frontend roadmap (học sâu hơn về sau)',
            url: 'https://roadmap.sh/frontend',
          },
        ],
        optional: false,
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    note: 'Có thể chọn ngôn ngữ backend bất kỳ; roadmap.sh khuyên Node.js vì bạn đã quen JavaScript.',
    nodes: [
      {
        id: 'nodejs',
        kind: 'topic',
        title: 'Node.js',
        summary:
          'Môi trường chạy JavaScript ngoài trình duyệt trên engine V8. Chạy một tiến trình duy nhất với I/O bất đồng bộ, nên không chặn khi chờ file hay mạng.',
        weeks: [1, 6],
        learn: [
          'Event loop và I/O bất đồng bộ',
          'Module, fs, path, process',
          'Viết HTTP server',
          'Đọc tham số dòng lệnh',
        ],
        projects: [],
        resources: [
          {
            type: 'roadmap',
            title: 'Visit Dedicated Node.js Roadmap',
            url: 'https://roadmap.sh/nodejs',
          },
          {
            type: 'official',
            title: 'Node.js Website',
            url: 'https://nodejs.org/en/about/',
          },
          {
            type: 'official',
            title: 'Learn Node.js Official Website',
            url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
          },
          {
            type: 'video',
            title: 'Node.js and Express.js Full Course',
            url: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
          },
        ],
        optional: false,
      },
      {
        id: 'cp-cli',
        kind: 'checkpoint',
        title: 'Checkpoint: Ứng dụng dòng lệnh',
        summary: 'Bạn phải viết được ứng dụng dòng lệnh bằng Node.js.',
        weeks: [6],
        learn: [
          'Đọc và ghi file',
          'Đọc tham số dòng lệnh',
          'Gọi HTTP và đọc JSON',
          'Dùng thư viện ngoài (vd. đọc CSV) và API bên thứ ba',
        ],
        projects: [
          'Nhận URL và CSS selector, in ra nội dung phần tử khớp (gợi ý: cheerio)',
          'Nhận hai ngày, in các repo GitHub nhiều sao nhất trong khoảng đó (GitHub search API)',
          'Đổi tên hàng loạt file trong thư mục (fs, path)',
          'Nén mọi ảnh trong thư mục, có tuỳ chọn thư mục đầu ra (gợi ý: sharp)',
        ],
        resources: [
          {
            type: 'opensource',
            title: 'cheerio',
            url: 'https://github.com/cheeriojs/cheerio',
          },
          {
            type: 'official',
            title: 'GitHub search API',
            url: 'https://developer.github.com/v3/search/#search-repositories',
          },
          {
            type: 'official',
            title: 'Node.js fs',
            url: 'https://nodejs.org/api/fs.html',
          },
          {
            type: 'official',
            title: 'Node.js path',
            url: 'https://nodejs.org/api/path.html',
          },
          {
            type: 'opensource',
            title: 'sharp',
            url: 'https://github.com/lovell/sharp',
          },
        ],
        optional: false,
      },
      {
        id: 'postgresql',
        kind: 'topic',
        title: 'PostgreSQL',
        summary: 'Hệ quản trị cơ sở dữ liệu quan hệ miễn phí, mã nguồn mở, tuân thủ chuẩn SQL và dễ mở rộng.',
        weeks: [3, 4, 5],
        learn: [
          'SELECT, JOIN, GROUP BY',
          'Ràng buộc và chỉ mục',
          'Thiết kế schema và migration',
          'Transaction và truy cập đồng thời',
        ],
        projects: [],
        resources: [
          {
            type: 'roadmap',
            title: 'Visit Dedicated PostgreSQL DBA Roadmap',
            url: 'https://roadmap.sh/postgresql-dba',
          },
          {
            type: 'official',
            title: 'PostgreSQL Website',
            url: 'https://www.postgresql.org/',
          },
          {
            type: 'article',
            title: 'Learn PostgreSQL - Full Tutorial for Beginners',
            url: 'https://www.postgresqltutorial.com/',
          },
          {
            type: 'video',
            title: 'Postgres tutorial for Beginners',
            url: 'https://www.youtube.com/watch?v=eMIxuk0nOkU',
          },
        ],
        optional: false,
      },
      {
        id: 'cp-crud',
        kind: 'checkpoint',
        title: 'Checkpoint: Ứng dụng CRUD',
        summary: 'CRUD là Tạo, Đọc, Sửa, Xoá. Chưa cần API: hãy viết ứng dụng dòng lệnh thao tác thẳng với database.',
        weeks: [8],
        learn: ['Thực hiện đủ bốn thao tác CRUD trên PostgreSQL'],
        projects: [
          'Ứng dụng to-do dòng lệnh với --new, --list [all|pending|done], --done [id], --delete [id], --help, --version',
        ],
        resources: [
          {
            type: 'official',
            title: 'node-postgres (pg)',
            url: 'https://node-postgres.com/',
          },
          {
            type: 'opensource',
            title: 'commander.js: đọc tham số dòng lệnh',
            url: 'https://github.com/tj/commander.js',
          },
        ],
        optional: false,
      },
      {
        id: 'rest',
        kind: 'topic',
        title: 'RESTful API',
        summary: 'Kiểu kiến trúc chuẩn để các hệ thống trên web nói chuyện với nhau qua HTTP.',
        weeks: [7],
        learn: [
          'Tài nguyên và URL',
          'Phương thức HTTP và status code',
          'Phân trang, lọc, sắp xếp',
          'Định dạng lỗi thống nhất',
        ],
        projects: [],
        resources: [
          {
            type: 'roadmap',
            title: 'Visit the Dedicated API Design Roadmap',
            url: 'https://roadmap.sh/api-design',
          },
          {
            type: 'article',
            title: 'What is a REST API?',
            url: 'https://www.redhat.com/en/topics/api/what-is-a-rest-api',
          },
          {
            type: 'article',
            title: 'Learn REST: A RESTful Tutorial',
            url: 'https://restapitutorial.com/',
          },
          {
            type: 'video',
            title: 'What Is A RESTful API? Explanation of REST & HTTP',
            url: 'https://www.youtube.com/watch?v=Q-BpqyOT3a8',
          },
        ],
        optional: false,
      },
      {
        id: 'jwt',
        kind: 'topic',
        title: 'Xác thực JWT',
        summary:
          'JSON Web Token: chuẩn mở để truyền thông tin dạng JSON có chữ ký giữa client và server, gọn, an toàn khi đặt trong URL và hợp với SSO.',
        weeks: [9, 10],
        learn: [
          'Cấu trúc header.payload.signature',
          'Access token và refresh token',
          'Lưu token an toàn phía client',
          'Phân quyền theo vai trò',
        ],
        projects: [],
        resources: [
          {
            type: 'official',
            title: 'Introduction to JSON Web Tokens',
            url: 'https://jwt.io/introduction',
          },
          {
            type: 'article',
            title: 'What is JWT?',
            url: 'https://www.akana.com/blog/what-is-jwt',
          },
          {
            type: 'video',
            title: 'What Is JWT and Why Should You Use JWT',
            url: 'https://www.youtube.com/watch?v=7Q17ubqLfaM',
          },
          {
            type: 'video',
            title: 'JWT Authentication Tutorial - Node.js',
            url: 'https://www.youtube.com/watch?v=mbsmsi7l3r4',
          },
        ],
        optional: false,
      },
      {
        id: 'redis',
        kind: 'topic',
        title: 'Redis',
        summary:
          'Kho dữ liệu trong bộ nhớ, dùng làm cache, message broker, lưu phiên. Có nhiều cấu trúc dữ liệu như string, hash, list, set, sorted set.',
        weeks: [11],
        learn: ['Cache kết quả truy vấn và hết hạn (TTL)', 'Lưu phiên đăng nhập', 'Giới hạn tần suất gọi API'],
        projects: [],
        resources: [
          {
            type: 'roadmap',
            title: 'Visit Dedicated Redis Roadmap',
            url: 'https://roadmap.sh/redis',
          },
          {
            type: 'official',
            title: 'Redis Documentation',
            url: 'https://redis.io/docs/latest/',
          },
          {
            type: 'video',
            title: 'Redis in 100 Seconds',
            url: 'https://www.youtube.com/watch?v=G1rOthIU-uo',
          },
          {
            type: 'video',
            title: 'Redis Caching in Node.js',
            url: 'https://www.youtube.com/watch?v=oaJq1mQ3dFI',
          },
        ],
        optional: false,
      },
      {
        id: 'cp-complete',
        kind: 'checkpoint',
        title: 'Checkpoint: Ứng dụng hoàn chỉnh',
        summary:
          'Bạn đã đủ kiến thức để làm một ứng dụng hoàn chỉnh. Trong lộ trình của bạn, đó là công cụ thu học phí cho giáo viên.',
        weeks: [29, 30, 31, 32],
        learn: ['Frontend responsive cho người dùng thao tác', 'API backend bảo vệ bằng JWT', 'Database lưu dữ liệu'],
        projects: [
          'Công cụ thu học phí: giáo viên tạo lớp, thêm học sinh, tạo khoản thu, phụ huynh xem và trả phí (dự án của bạn)',
          'Gợi ý của roadmap.sh: blog có đăng ký, đăng nhập và viết bài',
          'Gợi ý của roadmap.sh: trang bán hàng có người bán và người mua',
        ],
        resources: [
          {
            type: 'roadmap',
            title: 'Ý tưởng dự án Full Stack trên roadmap.sh',
            url: 'https://roadmap.sh/full-stack/projects',
          },
        ],
        optional: false,
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    note: 'Tự đưa ứng dụng lên AWS, theo dõi, tự động deploy, rồi viết hạ tầng thành code.',
    nodes: [
      {
        id: 'linux',
        kind: 'topic',
        title: 'Linux căn bản',
        summary: 'Hầu hết code bạn viết sẽ chạy trên máy Linux, nên phải quen làm việc trên nó.',
        weeks: [35, 36],
        learn: [
          'Lệnh shell, file, quyền truy cập',
          'Tiến trình và systemd',
          'SSH vào server',
          'Nginx làm reverse proxy',
        ],
        projects: [],
        resources: [
          {
            type: 'roadmap',
            title: 'Visit Dedicated Linux Roadmap',
            url: 'https://roadmap.sh/linux',
          },
          {
            type: 'course',
            title: 'Coursera - Unix Courses',
            url: 'https://www.coursera.org/courses?query=unix',
          },
          {
            type: 'article',
            title: 'Unix / Linux Tutorial',
            url: 'https://www.tutorialspoint.com/unix/index.htm',
          },
          {
            type: 'video',
            title: 'Linux Operating System - Crash Course',
            url: 'https://www.youtube.com/watch?v=ROjZy1WbCIA',
          },
        ],
        optional: false,
      },
      {
        id: 'aws',
        kind: 'topic',
        title: 'Dịch vụ AWS căn bản',
        summary: 'AWS có rất nhiều dịch vụ nhưng bạn không cần biết hết. Bắt đầu với EC2, VPC, S3, Route 53 và SES.',
        weeks: [37],
        learn: ['Tài khoản, IAM, đặt cảnh báo chi phí'],
        projects: [],
        resources: [
          {
            type: 'roadmap',
            title: 'Visit the Dedicated AWS Roadmap',
            url: 'https://roadmap.sh/aws',
          },
          {
            type: 'article',
            title: 'VPC Basics',
            url: 'https://cloudcasts.io/course/vpc-basics',
          },
          {
            type: 'article',
            title: 'EC2 Essentials',
            url: 'https://cloudcasts.io/course/ec2-essentials',
          },
          {
            type: 'video',
            title: 'Deploy Node App on AWS EC2',
            url: 'https://youtu.be/oHAQ3TzUTro',
          },
        ],
        optional: false,
      },
      {
        id: 'ec2',
        kind: 'topic',
        title: 'AWS EC2',
        summary: 'Máy chủ ảo (instance) thuê theo nhu cầu, tăng giảm cấu hình dễ dàng.',
        weeks: [37],
        learn: [],
        projects: [],
        resources: [
          {
            type: 'official',
            title: 'Amazon AWS EC2',
            url: 'https://aws.amazon.com/ec2/',
          },
          {
            type: 'article',
            title: 'Up and Running with AWS EC2',
            url: 'https://cs.fyi/guide/up-and-running-with-aws-ec2',
          },
          {
            type: 'article',
            title: 'EC2 Essentials',
            url: 'https://cloudcasts.io/course/ec2-essentials',
          },
          {
            type: 'video',
            title: 'Deploy Node App on AWS EC2',
            url: 'https://youtu.be/oHAQ3TzUTro',
          },
        ],
        optional: false,
      },
      {
        id: 'vpc',
        kind: 'topic',
        title: 'AWS VPC',
        summary: 'Mạng riêng ảo trên AWS: tự định nghĩa mạng, subnet và luật truy cập cho tài nguyên của bạn.',
        weeks: [38],
        learn: [],
        projects: [],
        resources: [
          {
            type: 'official',
            title: 'Amazon AWS VPC',
            url: 'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html',
          },
          {
            type: 'article',
            title: 'Up and Running with AWS VPC',
            url: 'https://cs.fyi/guide/up-and-running-with-aws-vpc',
          },
          {
            type: 'article',
            title: 'VPC Basics',
            url: 'https://cloudcasts.io/course/vpc-basics',
          },
          {
            type: 'video',
            title: 'AWS VPC & Subnets For Beginners',
            url: 'https://youtu.be/TUTqYEZZUdc',
          },
        ],
        optional: false,
      },
      {
        id: 's3',
        kind: 'topic',
        title: 'AWS S3',
        summary: 'Dịch vụ lưu file trên cloud và phục vụ file đó cho người dùng.',
        weeks: [39],
        learn: [],
        projects: [],
        resources: [
          {
            type: 'official',
            title: 'Amazon AWS S3',
            url: 'https://aws.amazon.com/s3/',
          },
          {
            type: 'video',
            title: 'Upload Images to S3 from Node Back End',
            url: 'https://www.youtube.com/watch?v=NZElg91l_ms',
          },
          {
            type: 'video',
            title: 'S3 Bucket Hosting a Static Website',
            url: 'https://www.youtube.com/watch?v=RoY3ekCCxKc&list=PL0X6fGhFFNTcU-_MCPe9dkH6sqmgfhy_M',
          },
        ],
        optional: false,
      },
      {
        id: 'route53',
        kind: 'topic',
        title: 'AWS Route 53',
        summary: 'Dịch vụ DNS của AWS: quản lý tên miền và trỏ tên miền tới ứng dụng.',
        weeks: [39],
        learn: [],
        projects: [],
        resources: [
          {
            type: 'official',
            title: 'Route53',
            url: 'https://aws.amazon.com/route53/',
          },
          {
            type: 'video',
            title: 'Amazon Route 53',
            url: 'https://www.youtube.com/watch?v=RGWgfhZByAI',
          },
          {
            type: 'video',
            title: 'AWS Route 53 Domain Name',
            url: 'https://www.youtube.com/watch?v=jDz4j_kkyLA',
          },
          {
            type: 'video',
            title: 'DNS with AWS Route 53',
            url: 'https://www.youtube.com/watch?v=yRIY7BJohfo&t=2s',
          },
        ],
        optional: false,
      },
      {
        id: 'ses',
        kind: 'topic',
        title: 'AWS SES',
        summary: 'Dịch vụ gửi email của AWS: email giao dịch, thông báo, marketing với tỉ lệ vào hộp thư cao.',
        weeks: [39],
        learn: [],
        projects: [],
        resources: [
          {
            type: 'official',
            title: 'Amazon AWS SES',
            url: 'https://aws.amazon.com/ses/',
          },
          {
            type: 'video',
            title: 'Contact Form Submission With AWS SES',
            url: 'https://www.youtube.com/watch?v=HiHflLTqiwU',
          },
        ],
        optional: false,
      },
      {
        id: 'cp-deploy',
        kind: 'checkpoint',
        title: 'Checkpoint: Deploy',
        summary: 'Đưa ứng dụng của bạn lên AWS bằng tay, từng bước một.',
        weeks: [40],
        learn: [
          'Tạo EC2 (vd. Ubuntu mới nhất) và SSH vào bằng key pair',
          'Cài Node.js, Git, PostgreSQL rồi clone ứng dụng từ GitHub',
          'Mở HTTP và HTTPS trong security group, truy cập bằng IP công khai',
          'Trỏ tên miền bằng Route 53 và bật HTTPS bằng certbot',
        ],
        projects: ['Đưa công cụ học phí lên EC2 với tên miền riêng và HTTPS'],
        resources: [
          {
            type: 'video',
            title: 'Deploy Node App on AWS EC2',
            url: 'https://youtu.be/oHAQ3TzUTro',
          },
          {
            type: 'article',
            title: 'Cài và tự gia hạn chứng chỉ SSL (certbot)',
            url: 'https://roadmap.sh/guides/setup-and-auto-renew-ssl-certificates',
          },
        ],
        optional: false,
      },
      {
        id: 'monit',
        kind: 'topic',
        title: 'Monit',
        summary:
          'Công cụ đơn giản để theo dõi và tự khởi động lại dịch vụ, tiến trình, file, ổ đĩa, kết nối mạng khi có sự cố.',
        weeks: [41],
        learn: [],
        projects: [],
        resources: [
          {
            type: 'official',
            title: 'Monit Documentation',
            url: 'https://mmonit.com/monit/documentation/',
          },
        ],
        optional: false,
      },
      {
        id: 'cp-monitoring',
        kind: 'checkpoint',
        title: 'Checkpoint: Theo dõi',
        summary: 'Theo dõi và tự khởi động lại ứng dụng bằng Monit (hoặc pm2 cho phần tự khởi động lại).',
        weeks: [41],
        learn: [
          'Theo dõi CPU, bộ nhớ, ổ đĩa, mạng',
          'Theo dõi dịch vụ và tiến trình còn sống',
          'Dùng cấu hình có sẵn trong /etc/monit/conf-available',
        ],
        projects: ['Gắn Monit cho công cụ học phí và PostgreSQL trên EC2'],
        resources: [
          {
            type: 'official',
            title: 'pm2',
            url: 'https://pm2.keymetrics.io/',
          },
        ],
        optional: false,
      },
      {
        id: 'github-actions',
        kind: 'topic',
        title: 'GitHub Actions',
        summary: 'Công cụ tự động hoá quy trình ngay trong GitHub: chạy test, build, deploy.',
        weeks: [42],
        learn: [],
        projects: [],
        resources: [
          {
            type: 'roadmap',
            title: 'Visit Dedicated Git & GitHub Roadmap',
            url: 'https://roadmap.sh/git-github',
          },
          {
            type: 'official',
            title: 'GitHub Actions Documentation',
            url: 'https://docs.github.com/en/actions',
          },
          {
            type: 'video',
            title: '5 Ways to DevOps-ify your App',
            url: 'https://www.youtube.com/watch?v=eB0nUzAI7M8',
          },
          {
            type: 'video',
            title: 'DevOps CI/CD Explained in 100 Seconds',
            url: 'https://www.youtube.com/watch?v=scEDHsr3APg',
          },
        ],
        optional: false,
      },
      {
        id: 'cp-cicd',
        kind: 'checkpoint',
        title: 'Checkpoint: CI/CD',
        summary:
          'Tự động hoá deploy: mỗi lần đẩy code lên nhánh chính, GitHub Actions tự chạy test rồi deploy lên AWS.',
        weeks: [42],
        learn: ['Chạy test tự động trên mỗi lần push', 'Deploy lên AWS (vd. bằng rsync)'],
        projects: ['Workflow GitHub Actions: test rồi deploy công cụ học phí'],
        resources: [
          {
            type: 'video',
            title: 'DevOps CI/CD Explained in 100 Seconds',
            url: 'https://www.youtube.com/watch?v=scEDHsr3APg',
          },
          {
            type: 'opensource',
            title: 'Mẫu workflow deploy bằng rsync',
            url: 'https://gist.github.com/nilbuild/1e94b412006040f38e24b9443b2da41a',
          },
        ],
        optional: false,
      },
      {
        id: 'ansible',
        kind: 'topic',
        title: 'Ansible',
        summary: 'Công cụ cấu hình server và deploy ứng dụng bằng YAML. Không cần cài agent, chỉ cần SSH.',
        weeks: [43],
        learn: [],
        projects: [],
        resources: [
          {
            type: 'official',
            title: 'Ansible Documentation',
            url: 'https://docs.ansible.com/',
          },
          {
            type: 'official',
            title: 'Ansible Getting Started Guide',
            url: 'https://www.ansible.com/resources/get-started',
          },
          {
            type: 'video',
            title: 'Ansible Full Course for Beginners',
            url: 'https://www.youtube.com/watch?v=9Ua2b06oAr4',
          },
        ],
        optional: false,
      },
      {
        id: 'cp-automation',
        kind: 'checkpoint',
        title: 'Checkpoint: Tự động hoá',
        summary:
          'Viết playbook Ansible làm lại mọi bước bạn đã làm tay khi dựng EC2: cài Node.js, Git, PostgreSQL, chạy ứng dụng.',
        weeks: [43],
        learn: ['Dựng một EC2 mới mà không phải SSH vào cài tay'],
        projects: ['Playbook Ansible dựng server cho công cụ học phí'],
        resources: [
          {
            type: 'official',
            title: 'Ansible: Getting started',
            url: 'https://docs.ansible.com/ansible/latest/getting_started/index.html',
          },
        ],
        optional: false,
      },
      {
        id: 'terraform',
        kind: 'topic',
        title: 'Terraform',
        summary:
          'Công cụ hạ tầng bằng code (IaC) phổ biến, làm việc với nhiều nhà cung cấp cloud; file state theo dõi trạng thái hạ tầng thật.',
        weeks: [44],
        learn: [],
        projects: [],
        resources: [
          {
            type: 'roadmap',
            title: 'Visit Dedicated Terraform Roadmap',
            url: 'https://roadmap.sh/terraform',
          },
          {
            type: 'official',
            title: 'Terraform Documentation',
            url: 'https://www.terraform.io/docs',
          },
          {
            type: 'official',
            title: 'Terraform Tutorials',
            url: 'https://learn.hashicorp.com/terraform',
          },
          {
            type: 'video',
            title: 'Intro to Terraform',
            url: 'https://www.youtube.com/watch?v=h970ZBgKINg&ab_channel=HashiCorp',
          },
        ],
        optional: false,
      },
      {
        id: 'cp-infra',
        kind: 'checkpoint',
        title: 'Checkpoint: Hạ tầng',
        summary:
          'Dựng toàn bộ hạ tầng AWS bằng Terraform thay vì bấm tay trên console. Xong bước này là bạn đã đi hết roadmap.',
        weeks: [44],
        learn: [
          'Hạ tầng dựng bằng Terraform',
          'Cấu hình server bằng Ansible',
          'CI/CD bằng GitHub Actions',
          'Theo dõi bằng Monit',
        ],
        projects: ['Xoá hết rồi dựng lại toàn bộ môi trường của công cụ học phí chỉ bằng code'],
        resources: [
          {
            type: 'official',
            title: 'Terraform: Get Started - AWS',
            url: 'https://developer.hashicorp.com/terraform/tutorials/aws-get-started',
          },
        ],
        optional: false,
      },
    ],
  },
  {
    id: 'product',
    title: 'Sản phẩm (thêm ngoài roadmap.sh)',
    note: 'Phần này không có trên roadmap.sh. Nó giúp bạn giữ được hướng Product Engineer.',
    nodes: [
      {
        id: 'pm-users',
        kind: 'checkpoint',
        title: 'Checkpoint: Có người dùng thật',
        summary: 'Đưa công cụ học phí cho 3 giáo viên thật dùng trong lớp của họ.',
        weeks: [46],
        learn: ['Tìm và mời người dùng đầu tiên', 'Hướng dẫn họ dùng, ghi lại chỗ họ vướng'],
        projects: ['3 giáo viên dùng công cụ để thu học phí ít nhất một kỳ'],
        resources: [
          {
            type: 'article',
            title: 'How to Talk to Users (YC)',
            url: 'https://www.ycombinator.com/library/Iq-how-to-get-users-and-grow',
          },
          {
            type: 'article',
            title: 'The Mom Test',
            url: 'https://www.momtestbook.com/',
          },
        ],
        optional: false,
      },
      {
        id: 'pm-analytics',
        kind: 'topic',
        title: 'Product analytics',
        summary: 'Ghi lại sự kiện người dùng làm trong sản phẩm, dựng phễu và tìm chỉ số kích hoạt.',
        weeks: [47],
        learn: ['Đặt tên và ghi sự kiện', 'Phễu chuyển đổi', 'Chỉ số kích hoạt (activation)'],
        projects: [],
        resources: [
          {
            type: 'official',
            title: 'PostHog: Product analytics',
            url: 'https://posthog.com/docs/product-analytics',
          },
          {
            type: 'official',
            title: 'PostHog: Funnels',
            url: 'https://posthog.com/docs/product-analytics/funnels',
          },
          {
            type: 'article',
            title: 'How we found our activation metric (PostHog)',
            url: 'https://posthog.com/product-engineers/activation-metrics',
          },
        ],
        optional: false,
      },
      {
        id: 'pm-interview',
        kind: 'topic',
        title: 'Phỏng vấn người dùng',
        summary: 'Hỏi đúng cách để biết người dùng thật sự cần gì, không bị họ nói dối cho vui lòng.',
        weeks: [48],
        learn: ['Hỏi về việc đã xảy ra, không hỏi ý kiến về tương lai', 'Ghi chép và gom phản hồi thành việc cần làm'],
        projects: [],
        resources: [
          {
            type: 'article',
            title: 'The Mom Test',
            url: 'https://www.momtestbook.com/',
          },
          {
            type: 'article',
            title: 'Intercom on Jobs-to-be-Done',
            url: 'https://www.intercom.com/resources/books/intercom-jobs-to-be-done',
          },
          {
            type: 'article',
            title: 'How to Talk to Users (YC)',
            url: 'https://www.ycombinator.com/library/Iq-how-to-get-users-and-grow',
          },
        ],
        optional: false,
      },
      {
        id: 'pm-case-study',
        kind: 'checkpoint',
        title: 'Checkpoint: Case study sản phẩm',
        summary:
          'Viết lại câu chuyện công cụ học phí: vấn đề, quyết định, số liệu, bài học. Đây là thứ để kể khi phỏng vấn.',
        weeks: [50],
        learn: ['Kể theo thứ tự vấn đề → giải pháp → kết quả có số liệu'],
        projects: ['Một trang case study trong portfolio'],
        resources: [
          {
            type: 'article',
            title: "Product engineer's hub (PostHog)",
            url: 'https://posthog.com/product-engineers',
          },
          {
            type: 'article',
            title: 'The Real Product Market Fit (YC)',
            url: 'https://www.ycombinator.com/library/5z-the-real-product-market-fit',
          },
        ],
        optional: false,
      },
    ],
  },
];
