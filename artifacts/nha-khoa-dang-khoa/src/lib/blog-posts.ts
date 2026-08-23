/**
 * Kiến thức nha khoa — nội dung & ảnh tham chiếu từ hethongnhakhoadangkhoa.vn
 * Ảnh lưu tại /public/images/blog/
 */

const blogImg = (name: string) => `/images/blog/${name}`;

export type BlogPost = {
  id: number;
  slug: string;
  href: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  /** Bài gốc trên website hệ thống (nếu có) */
  sourceUrl?: string;
};

export const BLOG_CATEGORIES = [
  "Tất cả",
  "Implant",
  "Niềng Răng",
  "Răng Sứ",
  "Tẩy Trắng",
  "Điều Trị",
  "Nhổ Răng",
  "Vệ Sinh",
  "Thẩm Mỹ",
] as const;

const SOURCE = "https://hethongnhakhoadangkhoa.vn";

/** Thứ tự ưu tiên: bài mới & bài nổi bật trên trang chủ gốc */
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "implant-tai-tay-ninh-uy-tin",
    href: "/kien-thuc/implant-tai-tay-ninh-uy-tin",
    title: "Việc Cấy Ghép Implant Tại Tây Ninh Diễn Ra Như Thế Nào?",
    category: "Implant",
    excerpt:
      "Implant tại Tây Ninh được xem là tiểu phẩu nhỏ trong nha khoa; bài viết mô tả quy trình, thời gian và lưu ý để ca cấy ghép thành công, an toàn.",
    date: "09/04/2025",
    readTime: "6 phút",
    image: blogImg("blog-implant-quy-trinh.png"),
    sourceUrl: `${SOURCE}/implant-tai-tay-ninh-uy-tin/`,
  },
  {
    id: 2,
    slug: "trong-implant-tai-tay-ninh",
    href: "/kien-thuc/trong-implant-tai-tay-ninh",
    title: "Trồng Implant Tại Tây Ninh – Giải Pháp Phục Hồi Răng Mất Hiệu Quả, An Toàn",
    category: "Implant",
    excerpt:
      "Răng mất ảnh hưởng chức năng ăn nhai và thẩm mỹ. Trồng implant là giải pháp phục hình ổn định, được nhiều khách hàng tại Tây Ninh lựa chọn.",
    date: "11/04/2025",
    readTime: "7 phút",
    image: blogImg("blog-trong-implant.png"),
    sourceUrl: `${SOURCE}/trong-implant-tai-tay-ninh/`,
  },
  {
    id: 3,
    slug: "tram-rang-tai-tay-ninh",
    href: "/kien-thuc/tram-rang-tai-tay-ninh",
    title: "Trám Răng Tại Tây Ninh, Quy Trình Thực Hiện và Chi Phí",
    category: "Điều Trị",
    excerpt:
      "Trám răng là phương pháp thẩm mỹ nha khoa cơ bản để phục hồi răng sâu, mẻ. Tìm hiểu quy trình, vật liệu và mức chi phí tham khảo tại phòng khám.",
    date: "22/03/2023",
    readTime: "5 phút",
    image: blogImg("blog-tram-rang.jpg"),
    sourceUrl: `${SOURCE}/tram-rang-tai-tay-ninh/`,
  },
  {
    id: 4,
    slug: "cay-ghep-rang-implant",
    href: "/kien-thuc/cay-ghep-rang-implant",
    title: "Cấy Ghép Implant Tại Tây Ninh – Thông Tin Cần Biết Trước Khi Cấy",
    category: "Implant",
    excerpt:
      "Những điều cần chuẩn bị trước khi cấy ghép implant: chỉ định, chụp CT, lựa chọn trụ implant và chăm sóc sau phẫu thuật.",
    date: "22/03/2023",
    readTime: "6 phút",
    image: blogImg("blog-cay-ghep-implant.png"),
    sourceUrl: `${SOURCE}/cay-ghep-rang-implant/`,
  },
  {
    id: 5,
    slug: "phuc-hinh-rang-mat-tai-tay-ninh",
    href: "/kien-thuc/phuc-hinh-rang-mat-tai-tay-ninh",
    title: "Phục Hình Răng Mất Tại Tây Ninh – Giải Pháp Cho Người Mất Răng",
    category: "Implant",
    excerpt:
      "Phục hình răng mất bằng implant, cầu răng sứ hoặc hàm tháo lắp – so sánh ưu nhược để chọn phương án phù hợp từng trường hợp.",
    date: "10/04/2025",
    readTime: "6 phút",
    image: blogImg("blog-phuc-hinh-rang-mat.jpg"),
    sourceUrl: `${SOURCE}/phuc-hinh-rang-mat-tai-tay-ninh/`,
  },
  {
    id: 6,
    slug: "nieng-rang-tai-tay-ninh",
    href: "/kien-thuc/nieng-rang-tai-tay-ninh",
    title: "Niềng Răng Tại Tây Ninh – Lấy Lại Nụ Cười Tự Tin",
    category: "Niềng Răng",
    excerpt:
      "Răng hô, móm, khấp khểnh có thể cải thiện bằng niềng mắc cài hoặc khay trong suốt. Các bước thăm khám và thời gian điều trị tham khảo.",
    date: "23/03/2023",
    readTime: "7 phút",
    image: blogImg("blog-nieng-rang.jpg"),
    sourceUrl: `${SOURCE}/nieng-rang-tai-tay-ninh/`,
  },
  {
    id: 7,
    slug: "boc-rang-su-tai-tay-ninh",
    href: "/kien-thuc/boc-rang-su-tai-tay-ninh",
    title: "Bọc Răng Sứ Tại Tây Ninh – Giải Đáp Thắc Mắc Về Răng Sứ",
    category: "Răng Sứ",
    excerpt:
      "Bọc răng sứ giúp tái tạo thẩm mỹ và chức năng răng. Vật liệu sứ, thời gian thực hiện và bảo hành là những điểm khách hàng thường quan tâm.",
    date: "23/03/2023",
    readTime: "6 phút",
    image: blogImg("blog-boc-rang-su.jpg"),
    sourceUrl: `${SOURCE}/boc-rang-su-tai-tay-ninh/`,
  },
  {
    id: 8,
    slug: "boc-su-tai-tay-ninh",
    href: "/kien-thuc/boc-su-tai-tay-ninh",
    title: "Bọc Sứ Tại Tây Ninh – Bí Quyết Lấy Lại Nụ Cười Tự Tin",
    category: "Răng Sứ",
    excerpt:
      "Bọc sứ thẩm mỹ phù hợp khi răng xỉn màu, mẻ nhẹ hoặc form răng chưa hài hòa với gương mặt – cùng lưu ý chăm sóc sau bọc.",
    date: "22/03/2023",
    readTime: "5 phút",
    image: blogImg("blog-boc-su.jpg"),
    sourceUrl: `${SOURCE}/boc-su-tai-tay-ninh/`,
  },
  {
    id: 9,
    slug: "cau-rang-su",
    href: "/kien-thuc/cau-rang-su",
    title: "Làm Cầu Răng Sứ Tại Tây Ninh – Giải Pháp Khi Mất 1–2 Răng",
    category: "Răng Sứ",
    excerpt:
      "Cầu răng sứ là phương án phục hình cố định khi mất ít răng. Điều kiện làm cầu, ưu nhược so với implant được trình bày ngắn gọn.",
    date: "22/03/2023",
    readTime: "5 phút",
    image: blogImg("blog-cau-rang-su.jpg"),
    sourceUrl: `${SOURCE}/cau-rang-su/`,
  },
  {
    id: 10,
    slug: "tay-trang-rang-tai-tay-ninh",
    href: "/kien-thuc/tay-trang-rang-tai-tay-ninh",
    title: "Tẩy Trắng Răng Tại Tây Ninh – Cải Thiện Nụ Cười An Toàn",
    category: "Tẩy Trắng",
    excerpt:
      "Tẩy trắng tại phòng khám và tại nhà khác nhau về hiệu quả và độ an toàn. Cách duy trì màu răng sau tẩy trắng.",
    date: "23/03/2023",
    readTime: "5 phút",
    image: blogImg("blog-tay-trang.jpg"),
    sourceUrl: `${SOURCE}/tay-trang-rang-tai-tay-ninh/`,
  },
  {
    id: 11,
    slug: "nho-rang-khon-tai-tay-ninh",
    href: "/kien-thuc/nho-rang-khon-tai-tay-ninh",
    title: "Nhổ Răng Khôn Tại Tây Ninh – Địa Điểm Uy Tín",
    category: "Nhổ Răng",
    excerpt:
      "Răng khôn mọc lệch, gây đau hoặc viêm quanh răng cần được đánh giá và nhổ đúng chỉ định. Quy trình và chăm sóc sau nhổ.",
    date: "22/03/2023",
    readTime: "5 phút",
    image: blogImg("blog-nho-rang-khon.jpg"),
    sourceUrl: `${SOURCE}/nho-rang-khon-tai-tay-ninh/`,
  },
  {
    id: 12,
    slug: "dieu-tri-rang-khon-tai-tay-ninh",
    href: "/kien-thuc/dieu-tri-rang-khon-tai-tay-ninh",
    title: "Phải Làm Gì Khi Răng Khôn Không “Ngoan Ngoãn” Nằm Im?",
    category: "Nhổ Răng",
    excerpt:
      "Răng khôn ngầm, mọc xiên hoặc gây tổn thương răng bên cạnh – khi nào nên nhổ và những biến chứng nếu để lâu.",
    date: "22/03/2023",
    readTime: "4 phút",
    image: blogImg("blog-rang-khon.jpg"),
    sourceUrl: `${SOURCE}/dieu-tri-rang-khon-tai-tay-ninh/`,
  },
  {
    id: 13,
    slug: "dieu-tri-viem-nuou-tai-tay-ninh",
    href: "/kien-thuc/dieu-tri-viem-nuou-tai-tay-ninh",
    title: "Điều Trị Viêm Nướu Tại Tây Ninh – Nguyên Nhân Và Giải Pháp",
    category: "Điều Trị",
    excerpt:
      "Viêm nướu (viêm lợi) thường do vệ sinh kém hoặc cao răng. Triệu chứng, điều trị và phòng ngừa tái phát.",
    date: "22/03/2023",
    readTime: "5 phút",
    image: blogImg("blog-viem-nuou.jpg"),
    sourceUrl: `${SOURCE}/dieu-tri-viem-nuou-tai-tay-ninh/`,
  },
  {
    id: 14,
    slug: "dieu-tri-tuy-rang",
    href: "/kien-thuc/dieu-tri-tuy-rang",
    title: "Điều Trị Tủy Răng Tại Tây Ninh – Những Điều Cần Biết",
    category: "Điều Trị",
    excerpt:
      "Viêm tủy cần điều trị kịp thời để giữ răng thật. Dấu hiệu nhận biết và các bước điều trị tủy cơ bản.",
    date: "22/03/2023",
    readTime: "5 phút",
    image: blogImg("blog-dieu-tri-tuy.jpg"),
    sourceUrl: `${SOURCE}/dieu-tri-tuy-rang/`,
  },
  {
    id: 15,
    slug: "benh-nha-chu-tai-tay-ninh",
    href: "/kien-thuc/benh-nha-chu-tai-tay-ninh",
    title: "Bệnh Nha Chu Tại Tây Ninh Và Phương Pháp Điều Trị",
    category: "Điều Trị",
    excerpt:
      "Bệnh nha chu ảnh hưởng đến xương và mô nâng răng. Giai đoạn bệnh, điều trị và vai trò của vệ sinh tại nhà.",
    date: "22/03/2023",
    readTime: "6 phút",
    image: blogImg("blog-nha-chu.jpg"),
    sourceUrl: `${SOURCE}/benh-nha-chu-tai-tay-ninh/`,
  },
  {
    id: 16,
    slug: "cao-voi-rang-tai-tay-ninh",
    href: "/kien-thuc/cao-voi-rang-tai-tay-ninh",
    title: "Cạo Vôi Răng Tại Tây Ninh – Chi Phí Và Lưu Ý",
    category: "Vệ Sinh",
    excerpt:
      "Cao vôi răng giúp giảm viêm nướu, hôi miệng và bảo vệ men răng. Tần suất cạo vôi phù hợp theo từng người.",
    date: "22/03/2023",
    readTime: "4 phút",
    image: blogImg("blog-cao-voi.jpg"),
    sourceUrl: `${SOURCE}/cao-voi-rang-tai-tay-ninh/`,
  },
  {
    id: 17,
    slug: "cuoi-ho-loi",
    href: "/kien-thuc/cuoi-ho-loi",
    title: "Cười Hở Lợi Là Gì? – Cách Chữa Trị Hiệu Quả",
    category: "Thẩm Mỹ",
    excerpt:
      "Cười hở lợi (cười lộ nướu) có thể điều chỉnh bằng chỉnh nha, bọc sứ hoặc phẫu thuật hàm tùy mức độ và nguyên nhân.",
    date: "23/03/2023",
    readTime: "6 phút",
    image: blogImg("blog-cuoi-ho-loi.jpg"),
    sourceUrl: `${SOURCE}/cuoi-ho-loi/`,
  },
  {
    id: 18,
    slug: "phong-kham-nha-khoa-uy-tin-tai-tay-ninh",
    href: "/kien-thuc/phong-kham-nha-khoa-uy-tin-tai-tay-ninh",
    title: "Phòng Khám Nha Khoa Uy Tín Tại Tây Ninh – Tiêu Chí Đánh Giá",
    category: "Điều Trị",
    excerpt:
      "Chọn nha khoa uy tín dựa trên đội ngũ bác sĩ, trang thiết bị, quy trình vô trùng và chính sách bảo hành minh bạch.",
    date: "11/04/2025",
    readTime: "5 phút",
    image: blogImg("blog-phong-kham-uy-tin.jpg"),
    sourceUrl: `${SOURCE}/phong-kham-nha-khoa-uy-tin-tai-tay-ninh/`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
