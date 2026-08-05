import { BRAND_HOURS_SUMMARY } from "./brand-hours";

export const BRAND = {
  name: "HỆ THỐNG NHA KHOA ĐĂNG KHOA",
  shortName: "Nha Khoa Đăng Khoa",
  slogan: "Uy tín – Chất lượng – Tận tâm",
  hotline: "08.86.86.87.86",
  hotlineRaw: "0886868786",
  email: "info@hethongnhakhoadangkhoa.vn",
  website: "hethongnhakhoadangkhoa.vn",
  address: "345 - 347 Điện Biên Phủ, Khu Phố Ninh Phúc, Phường Ninh Thạnh, Tỉnh Tây Ninh",
  hours: BRAND_HOURS_SUMMARY,
  facebook: "https://www.facebook.com/htnhakhoadangkhoa.vn",
  zalo: "https://zalo.me/0968759571",
  messenger: "https://m.me/htnhakhoadangkhoa.vn",
  youtube: "https://youtube.com/@nhakhoadangkhoa",
  tiktok: "https://www.tiktok.com/@dangkhoadentist",
  mapUrl:
    "https://www.google.com/maps?q=Nha+Khoa+%C4%90%C4%83ng+Khoa,+345+%C4%90i%E1%BB%87n+Bi%C3%AAn+Ph%E1%BB%A7,+Khu+ph%E1%BB%91+Ninh+Ph%C3%BAc,+Ninh+Th%E1%BA%A1nh,+T%C3%A2y+Ninh&ftid=0x310b6a3f2265a4c9:0xada66b3baa2ad387&entry=gps",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.118959816727!2d106.1304689!3d11.3260148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b6a3f2265a4c9%3A0xada66b3baa2ad387!2zTmhhIEtob2EgxJDEg25nIEtob2E!5e0!3m2!1svi!2s!4v1781767411397!5m2!1svi!2s",
};

export const SERVICES = [
  {
    id: "implant",
    name: "Implant Nha Khoa",
    href: "/dich-vu/implant",
    short: "Cấy ghép implant chuẩn quốc tế",
    desc: "Phục hồi răng vĩnh viễn với công nghệ implant hiện đại, tích hợp hoàn toàn với xương hàm.",
    icon: "Zap",
    color: "#C89B3C",
  },
  {
    id: "nieng-rang",
    name: "Niềng Răng Chỉnh Nha",
    href: "/dich-vu/nieng-rang",
    short: "Niềng răng mắc cài, Invisalign",
    desc: "Chỉnh nha thẩm mỹ toàn diện với niềng truyền thống và hệ thống Invisalign trong suốt.",
    icon: "Smile",
    color: "#2563eb",
  },
  {
    id: "rang-su",
    name: "Răng Sứ Thẩm Mỹ",
    href: "/dich-vu/tham-my-nha-khoa",
    short: "Veneer, Zirconia cao cấp",
    desc: "Phục hình răng sứ zirconia, veneer sứ – nụ cười hoàn hảo, tự nhiên như răng thật.",
    icon: "Star",
    color: "#7c3aed",
  },
  {
    id: "tay-trang",
    name: "Tẩy Trắng Răng",
    href: "/dich-vu/tham-my-nha-khoa/tay-trang-rang",
    short: "Laser whitening chuyên nghiệp",
    desc: "Tẩy trắng răng bằng công nghệ laser tiên tiến, an toàn, hiệu quả vượt trội.",
    icon: "Sun",
    color: "#d97706",
  },
  {
    id: "noi-nha",
    name: "Điều Trị Nội Nha",
    href: "/dich-vu/dieu-tri-noi-nha",
    short: "Điều trị tủy chuyên sâu",
    desc: "Chữa tủy răng, điều trị nhiễm trùng chuyên sâu với máy móc hiện đại, không đau.",
    icon: "Shield",
    color: "#059669",
  },
  {
    id: "nho-rang-khon",
    name: "Nhổ Răng Khôn",
    href: "/dich-vu/nho-rang/nho-rang-khon",
    short: "Nhổ không đau, phục hồi nhanh",
    desc: "Nhổ răng khôn bằng kỹ thuật tiên tiến, hạn chế tối đa đau đớn và thời gian hồi phục.",
    icon: "Activity",
    color: "#dc2626",
  },
];

export const DOCTORS = [
  {
    id: "pham-tran-tuyet-suong",
    name: "BS. Phạm Trần Tuyết Sương",
    title: "Bác sĩ chuyên sâu chỉnh nha",
    specialty: "Chỉnh nha, chỉnh hình răng mặt",
    experience: "Nhiều năm kinh nghiệm lâm sàng",
    education: "BSCKII Răng Hàm Mặt — ĐH Y Dược Cần Thơ",
    image: "/images/bs-pham-tran-tuyet-suong.png",
    bio: "Bác sĩ Phạm Trần Tuyết Sương — bác sĩ chuyên sâu chỉnh nha tại Nha Khoa Đăng Khoa. Có bằng chuyên khoa cấp II Răng Hàm Mặt (Đại học Y Dược Cần Thơ) và chứng chỉ đào tạo liên tục chỉnh hình răng mặt tại Bệnh viện Răng Hàm Mặt TP.HCM.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Nguyễn Thị Kim Hạnh",
    service: "Răng sứ thẩm mỹ",
    rating: 5,
    text: "Bọc răng sứ tại Nha Khoa Đăng Khoa — màu răng tự nhiên, hài hòa với gương mặt. Bác sĩ tư vấn kỹ, quy trình nhẹ nhàng, tôi rất hài lòng.",
    date: "Khách hàng Đăng Khoa",
  },
  {
    id: 2,
    name: "Nguyễn Đình Phương",
    service: "Implant",
    rating: 5,
    text: "Cấy ghép Implant chuẩn quy trình, ít đau hơn tôi nghĩ. Sau điều trị ăn nhai tốt, răng chắc và thẩm mỹ như mong muốn.",
    date: "Khách hàng Đăng Khoa",
  },
  {
    id: 3,
    name: "Nguyễn Thị Danh",
    service: "Răng sứ thẩm mỹ",
    rating: 5,
    text: "Làm răng sứ thẩm mỹ xong tự tin cười hơn hẳn. Đội ngũ nhiệt tình, phòng khám sạch sẽ, chi phí minh bạch ngay từ đầu.",
    date: "Khách hàng Đăng Khoa",
  },
  {
    id: 4,
    name: "Lê Thị Thủy",
    service: "Implant",
    rating: 5,
    text: "Trồng Implant tại Đăng Khoa — bác sĩ theo sát từng bước, hướng dẫn chăm sóc rõ ràng. Kết quả ổn định, ăn nhai bình thường.",
    date: "Khách hàng Đăng Khoa",
  },
  {
    id: 5,
    name: "Đàm Thị Lát",
    service: "Implant",
    rating: 5,
    text: "Tôi chọn Implant vì muốn phục hình lâu dài. Nha Khoa Đăng Khoa làm rất cẩn thận, tôi cảm thấy an tâm suốt quá trình điều trị.",
    date: "Khách hàng Đăng Khoa",
  },
  {
    id: 6,
    name: "Nguyễn Thị Ánh",
    service: "Implant",
    rating: 5,
    text: "Cấy Implant nhanh gọn, hồi phục tốt. Nhân viên hỗ trợ tận tình, giải đáp mọi thắc mắc. Tôi sẽ giới thiệu người thân đến đây.",
    date: "Khách hàng Đăng Khoa",
  },
];

export const PROMOTIONS = [
  {
    id: 1,
    title: "Niềng Răng Ưu Đãi",
    discount: "Giảm 20%",
    desc: "Niềng răng mắc cài kim loại và Invisalign. Trả góp 0% lãi suất 24 tháng.",
    expiry: "31/07/2024",
    badge: "HOT",
    color: "from-amber-500 to-yellow-400",
    href: "/uu-dai",
  },
  {
    id: 2,
    title: "Răng Sứ Thẩm Mỹ",
    discount: "Giảm 15%",
    desc: "Bọc sứ zirconia cao cấp, veneer thẩm mỹ. Bảo hành 5 năm.",
    expiry: "31/08/2024",
    badge: "MỚI",
    color: "from-purple-500 to-indigo-500",
    href: "/dich-vu/tham-my-nha-khoa",
  },
  {
    id: 3,
    title: "Implant Trọn Gói",
    discount: "Từ 15 triệu",
    desc: "Trọn gói cấy ghép implant Straumann, Osstem. Bao gồm mão sứ zirconia.",
    expiry: "30/06/2024",
    badge: "VIP",
    color: "from-emerald-500 to-teal-500",
    href: "/dich-vu/implant",
  },
  {
    id: 4,
    title: "Tẩy Trắng Laser",
    discount: "1.500.000đ",
    desc: "Tẩy trắng răng bằng công nghệ laser, hiệu quả ngay sau 1 buổi.",
    expiry: "30/09/2024",
    badge: "SALE",
    color: "from-blue-500 to-cyan-500",
    href: "/dich-vu/tham-my-nha-khoa/tay-trang-rang",
  },
];

export { BLOG_POSTS, BLOG_CATEGORIES } from "./blog-posts";
export type { BlogPost } from "./blog-posts";
