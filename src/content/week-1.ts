import type { Week } from './types';

export const week1: Week = {
  number: 1,
  title: 'TypeScript phía server và kiểm chứng ý tưởng',
  lead: 'Cuối tuần này bạn có một API sách 5 endpoint chạy được, một landing page có danh sách chờ, và ít nhất 3 cuộc phỏng vấn giáo viên đã chốt giờ.',
  goals: [
    "Node từ 22.12 trở lên, Docker và Git chạy được",
    "API sách 5 endpoint qua hết 15 dòng kiểm tra curl",
    "Landing page có link công khai, gửi thử form thành công",
    "Bài đăng ở ít nhất 3 group và 10 tin nhắn riêng",
    "Ít nhất 3 cuộc phỏng vấn có ngày giờ cụ thể",
    "README tiếng Anh và một bản ghi âm 3 phút"
  ],
  sessions: [
    {
      "day": "Thứ Ba",
      "hours": 2,
      "focus": "Cài môi trường và lý thuyết async",
      "read": [
        "node",
        "event-loop",
        "promise",
        "loi"
      ],
      "blocks": [
        {
          "time": "0:00–0:25",
          "text": "Cài Node 24 (hoặc 26) bằng fnm, Docker, Git, GitHub CLI"
        },
        {
          "time": "0:25–0:55",
          "text": "Event loop, làm bài đoán thứ tự in"
        },
        {
          "time": "0:55–1:30",
          "text": "async/await và cách lỗi lan, làm bài đoán lỗi"
        },
        {
          "time": "1:30–1:50",
          "text": "zod cơ bản, viết schema buổi học"
        },
        {
          "time": "1:50–2:00",
          "text": "Trả lời câu hỏi phỏng vấn của 4 chủ đề vào notes/week-01.md"
        }
      ],
      "doneWhen": "node -v ra v24 hoặc v26, docker run --rm hello-world chạy được, và notes/week-01.md có dự đoán cùng kết quả thật của hai bài đoán."
    },
    {
      "day": "Thứ Năm",
      "hours": 2,
      "focus": "Tự tay viết API sách bằng Hono",
      "read": [
        "http",
        "zod",
        "hono"
      ],
      "blocks": [
        {
          "time": "0:00–0:15",
          "text": "npm create hono@latest books-api, tách app.ts khỏi index.ts"
        },
        {
          "time": "0:15–0:40",
          "text": "Schema zod và kho dữ liệu dùng Map"
        },
        {
          "time": "0:40–1:20",
          "text": "5 endpoint: GET danh sách, GET một cuốn, POST, PATCH, DELETE"
        },
        {
          "time": "1:20–1:45",
          "text": "AppError, app.onError, app.notFound"
        },
        {
          "time": "1:45–2:00",
          "text": "Chạy bảng 15 lệnh curl, commit, push, rồi mới nhờ AI review"
        }
      ],
      "doneWhen": "Cả 15 lệnh curl ra đúng mã. Đặc biệt PATCH chỉ đổi title vẫn giữ nguyên tags, và PATCH {} trả 422."
    },
    {
      "day": "Thứ Bảy",
      "hours": 4,
      "focus": "Kiểm chứng ý tưởng công cụ thu học phí",
      "read": [
        "kiem-chung"
      ],
      "blocks": [
        {
          "time": "0:00–0:45",
          "text": "Viết validation/hypotheses.md: khách hàng, vấn đề, giả thuyết rủi ro, định nghĩa cam kết trả trước"
        },
        {
          "time": "0:45–2:15",
          "text": "Landing page Next.js xuất tĩnh lên Cloudflare Pages, form Google Forms"
        },
        {
          "time": "2:15–3:00",
          "text": "Đăng bài ở 3–5 group, nhắn riêng 10 người, lập bảng theo dõi"
        },
        {
          "time": "3:00–3:45",
          "text": "Đọc bộ câu hỏi phỏng vấn, phỏng vấn thử với người quen"
        },
        {
          "time": "3:45–4:00",
          "text": "Chốt lịch, gửi tin xác nhận"
        }
      ],
      "doneWhen": "Landing page có link công khai, gửi thử form thấy dòng mới trong Google Sheet, và ít nhất 3 lịch phỏng vấn có ngày giờ."
    },
    {
      "day": "Chủ nhật",
      "hours": 2,
      "focus": "README, nói 3 phút, làm lại bài",
      "read": [],
      "blocks": [
        {
          "time": "0:00–0:40",
          "text": "Tự viết README tiếng Anh cho API sách, rồi nhờ AI sửa ngữ pháp"
        },
        {
          "time": "0:40–1:10",
          "text": "Ghi từ khoá, thu âm 3 lần, sửa 3 lỗi hay mắc"
        },
        {
          "time": "1:10–1:50",
          "text": "Viết lại phần lõi API sách từ trang trắng trong 30 phút"
        },
        {
          "time": "1:50–2:00",
          "text": "Tổng kết tuần: đã xong, chưa xong, một điều sẽ đổi"
        }
      ],
      "doneWhen": "Lệnh curl trong README chạy được, bản thu cuối dài 2:45–3:15, bản làm lại qua dòng 2–8 của bảng curl."
    }
  ],
  topics: [
    {
      "slug": "node",
      "title": "Node.js là gì",
      "navTitle": "Node.js là gì",
      "day": "Thứ Ba",
      "lead": "Node.js là chương trình chạy JavaScript bên ngoài trình duyệt. Code JS của bạn chạy trên một luồng, nhưng Node không bao giờ đứng chờ ổ đĩa hay mạng. Đó là lý do một server Node phục vụ được rất nhiều người cùng lúc.",
      "videos": [
        {
          "id": "ENrzD9HAZK4",
          "title": "Node.js Ultimate Beginner's Guide in 7 Easy Steps",
          "source": "Fireship",
          "why": "Phần đầu giải thích Node là gì và vì sao nó không chặn. Phần sau dựng app bằng Express, không bắt buộc xem."
        }
      ],
      "videoNote": null
    },
    {
      "slug": "event-loop",
      "title": "Event loop từng bước",
      "navTitle": "Event loop",
      "day": "Thứ Ba",
      "lead": "Event loop là vòng lặp quyết định callback nào được chạy tiếp theo. Chỉ cần nắm một quy tắc: chạy hết code đồng bộ, xả hết microtask, rồi mới tới timer và I/O.",
      "videos": [
        {
          "id": "8aGhZQkoFbQ",
          "title": "What the heck is the event loop anyway?",
          "source": "Philip Roberts, JSConf EU 2014",
          "why": "Bài nói kinh điển. Ví dụ dùng trình duyệt, nhưng call stack và hàng đợi callback hoạt động y như trong Node. Xem trước tiên."
        },
        {
          "id": "eiC58R16hb8",
          "title": "JavaScript Visualized: Event Loop, Web APIs, (Micro)task Queue",
          "source": "Lydia Hallie",
          "why": "Hình động rất rõ về khác nhau giữa microtask và task queue. Xem sau video trên."
        },
        {
          "id": "PNa9OMajw9w",
          "title": "Everything You Need to Know About Node.js Event Loop",
          "source": "Bert Belder, keynote Node.js Interactive",
          "why": "Đúng về Node: các pha, thread pool, những hình vẽ sai hay gặp trên mạng. Khó hơn, xem khi đã nắm hai video trên."
        }
      ],
      "videoNote": null
    },
    {
      "slug": "promise",
      "title": "Promise và async/await từ gốc",
      "navTitle": "Promise và async/await",
      "day": "Thứ Ba",
      "lead": "Promise là một object đại diện cho giá trị sẽ có trong tương lai, giống tờ phiếu hẹn trả kết quả xét nghiệm. async/await chỉ là cách viết dễ đọc hơn cho cùng cơ chế đó.",
      "videos": [
        {
          "id": "RvYYCGs45L4",
          "title": "JavaScript Promise in 100 Seconds",
          "source": "Fireship",
          "why": "Khởi động nhanh trước khi đọc."
        },
        {
          "id": "Xs1EMmBLpn4",
          "title": "JavaScript Visualized: Promise Execution",
          "source": "Lydia Hallie",
          "why": "Thấy tận mắt promise được tạo, resolve, và đưa callback vào microtask queue thế nào."
        },
        {
          "id": "vn3tm0quoqE",
          "title": "The Async Await Episode I Promised",
          "source": "Fireship",
          "why": "Viết async/await cho gọn, chạy tuần tự hay song song, và các bẫy trong vòng lặp."
        }
      ],
      "videoNote": null
    },
    {
      "slug": "loi",
      "title": "Lỗi đi đâu trong Node",
      "navTitle": "Lỗi trong Node",
      "day": "Thứ Ba",
      "lead": "Lỗi có ba con đường: đi ngược call stack, đi theo chuỗi promise, hoặc tới listener của sự kiện <code>'error'</code>. Lỗi không ai bắt sẽ làm process sập, và với lỗi lập trình thì sập rồi khởi động lại là đúng.",
      "videos": [
        {
          "id": "vAH4GRWbAQw",
          "title": "How to handle Node.js errors like a Pro?",
          "source": "YouTube",
          "why": "Xử lý lỗi tập trung, thoát process an toàn, tự định nghĩa lớp lỗi. Video dùng Express, nhưng ý tưởng y hệt khi làm với Hono."
        }
      ],
      "videoNote": null
    },
    {
      "slug": "http",
      "title": "HTTP căn bản và từng mã trạng thái",
      "navTitle": "HTTP căn bản",
      "day": "Thứ Năm",
      "lead": "Mã trạng thái cho client biết nên sửa request (4xx) hay thử lại sau (5xx). Chọn đúng mã là viết đúng hợp đồng mà cả cache, hệ thống theo dõi và thư viện client đều đọc.",
      "videos": [
        {
          "id": "iYM2zFP3Zn0",
          "title": "HTTP Crash Course & Exploration",
          "source": "Traversy Media",
          "why": "Vòng request/response, method, header, body, mã trạng thái. Có phần demo bằng Postman và Express."
        },
        {
          "id": "nb0xQUcxVj4",
          "title": "Every HTTP Status Code Explained in 8 Minutes",
          "source": "YouTube",
          "why": "Đi lần lượt 200, 201, 204, 400, 401, 403, 404, 405, 409, 422, 429, 500, 502. Hợp để ôn nhanh."
        }
      ],
      "videoNote": null
    },
    {
      "slug": "zod",
      "title": "Validate input và zod",
      "navTitle": "Validate và zod",
      "day": "Thứ Năm",
      "lead": "Mọi dữ liệu từ bên ngoài đều không đáng tin. Parse nó một lần ngay ở cửa vào thành giá trị có kiểu rõ ràng, hoặc từ chối nó. Phần còn lại của code tin vào kiểu đó.",
      "videos": [
        {
          "id": "IcyjtsAdKRs",
          "title": "Zod Validation Tutorial for Beginners",
          "source": "YouTube, khoảng 40 phút",
          "why": "Schema, parse, thông báo lỗi tuỳ chỉnh, object lồng nhau. Video có thể dùng cú pháp zod 3, xem ghi chú bên dưới."
        },
        {
          "id": "XELUwKDdy7k",
          "title": "Zod v4 is Out… These Features are a Game Changer!",
          "source": "YouTube",
          "why": "Những gì đổi ở zod 4, bản bạn đang dùng."
        }
      ],
      "videoNote": "Video zod 3 viết <code>z.string().email()</code>, <code>z.string().uuid()</code>. Ở zod 4 nên viết <code>z.email()</code>, <code>z.uuid()</code>, <code>z.iso.date()</code>, và import bằng <code>import * as z from 'zod'</code>."
    },
    {
      "slug": "hono",
      "title": "Hono và cách một web framework hoạt động",
      "navTitle": "Hono và web framework",
      "day": "Thứ Năm",
      "lead": "Web framework là gì, vì sao viết API không nên tự làm từ đầu, Hono xử lý một request qua những bước nào, và cách viết API đầu tiên bằng Hono trong 5 phút.",
      "videos": [
        {
          "id": "1XyL9cbFooE",
          "title": "You Should Drop Express and Try Hono",
          "source": "Syntax",
          "why": "Vì sao Hono khác Express: chuẩn Web, chạy nhiều runtime, kiểu TypeScript tốt. Dạng trò chuyện, hợp để luyện nghe."
        },
        {
          "id": "IkrP0FtLR38",
          "title": "Hono.js Basic Routing Tutorial",
          "source": "YouTube",
          "why": "GET, POST, PUT, DELETE với ví dụ ngắn. Gần với bài luyện API sách."
        },
        {
          "id": "AILhb53OhTg",
          "title": "Honc Out #5: All About Hono Validation Middleware",
          "source": "YouTube",
          "why": "Middleware validate input trong Hono. Xem sau khi đã tự làm bài Thứ Năm, để so cách làm."
        }
      ],
      "videoNote": "Video không thay được tài liệu chính thức: <a href=\"https://hono.dev/docs/getting-started/basic\" rel=\"noopener\" target=\"_blank\">hono.dev</a>."
    },
    {
      "slug": "kiem-chung",
      "title": "Kiểm chứng ý tưởng sản phẩm",
      "navTitle": "Kiểm chứng ý tưởng",
      "day": "Thứ Bảy",
      "lead": "Rủi ro lớn nhất của sản phẩm mới thường không phải \"có làm được không\", mà là \"có ai cần đến mức trả tiền không\". Hai tuần nói chuyện với 10 giáo viên rẻ hơn nhiều so với ba tháng xây một công cụ không ai dùng.",
      "videos": [
        {
          "id": "FG1Fa-t4AEQ",
          "title": "The big mistakes of customer conversations",
          "source": "Rob Fitzpatrick, tác giả The Mom Test",
          "why": "Những lỗi lớn khi nói chuyện với khách hàng và cách sửa. Xem trước khi soạn câu hỏi phỏng vấn."
        },
        {
          "id": "OBac5a8rDbY",
          "title": "How to do customer interviews?",
          "source": "Rob Fitzpatrick",
          "why": "Nên hỏi gì ở từng giai đoạn của sản phẩm."
        }
      ],
      "videoNote": null
    }
  ],
};
