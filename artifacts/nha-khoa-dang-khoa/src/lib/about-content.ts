/**
 * Nội dung Giới thiệu — tham chiếu cấu trúc nhakhoano1.com/gioi-thieu/
 */

import { IMAGES } from "./images";

export type AboutSection = {
  slug: string;
  href: string;
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  highlights?: string[];
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export const ABOUT_SECTIONS: AboutSection[] = [
  {
    slug: "doi-ngu-nhan-vien",
    href: "/gioi-thieu/doi-ngu-nhan-vien",
    label: "Đội ngũ nhân viên",
    eyebrow: "NHA KHOA ĐĂNG KHOA",
    title: "Đội Ngũ Chuyên Nghiệp",
    subtitle: "Bác sĩ có trình độ chuyên môn cao, tận tâm với từng ca điều trị",
    paragraphs: [
      "Đội ngũ bác sĩ tại Nha Khoa Đăng Khoa là yếu tố then chốt tạo nên uy tín và chất lượng dịch vụ. Các bác sĩ được đào tạo bài bản, thường xuyên cập nhật kỹ thuật mới trong implant, chỉnh nha và thẩm mỹ nha khoa.",
      "Chúng tôi tự hào với đội ngũ bác sĩ chuyên môn cao tại Tây Ninh, luôn lắng nghe và đồng hành cùng khách hàng trong suốt quá trình điều trị.",
    ],
    highlights: [
      "Bác sĩ chuyên sâu chỉnh nha — BSCKII",
      "Chuyên môn implant, chỉnh nha, răng sứ",
      "Tư vấn trung thực — không ép dịch vụ",
      "Theo dõi tái khám định kỳ",
    ],
    image: IMAGES.coverClinic,
    ctaLabel: "Gặp bác sĩ",
    ctaHref: "/dat-lich",
  },
  {
    slug: "phong-kham",
    href: "/gioi-thieu/phong-kham",
    label: "Phòng khám",
    eyebrow: "NHA KHOA ĐĂNG KHOA",
    title: "Phòng Khám",
    subtitle: "Không gian hiện đại, ấm cúng — kiểm tra và tư vấn miễn phí",
    paragraphs: [
      "Nha Khoa Đăng Khoa được xây dựng với mục tiêu mang đến trải nghiệm nha khoa cao cấp tại Tây Ninh: phòng điều trị riêng tư, khu chờ thoải mái và quy trình tiếp đón chuyên nghiệp.",
      "Chúng tôi cung cấp dịch vụ kiểm tra răng miệng và tư vấn miễn phí, đồng thời xây dựng phác đồ điều trị phù hợp ngân sách và nhu cầu của từng khách hàng.",
    ],
    highlights: [
      "345 – 347 Điện Biên Phủ, Tây Ninh",
      "Giờ làm việc linh hoạt Thứ 2 – Chủ nhật",
      "Đặt lịch hẹn — không chờ đợi lâu",
    ],
    image: IMAGES.coverClinic,
    ctaLabel: "Xem bản đồ",
    ctaHref: "/lien-he",
  },
  {
    slug: "he-thong-vo-trung",
    href: "/gioi-thieu/he-thong-vo-trung",
    label: "Hệ thống vô trùng",
    eyebrow: "HỆ THỐNG",
    title: "Vô Trùng",
    subtitle: "An toàn tuyệt đối — ưu tiên hàng đầu trong mọi ca điều trị",
    paragraphs: [
      "Tại Nha Khoa Đăng Khoa, quy trình vô trùng được thực hiện nghiêm ngặt: khử khuẩn dụng cụ, túi bọc sterilization và kiểm soát vùng điều trị sạch.",
      "Hệ thống vô trùng chuẩn kép giúp giảm thiểu rủi ro nhiễm trùng, đặc biệt quan trọng với implant và phẫu thuật nhổ răng khôn.",
    ],
    highlights: [
      "Khử khuẩn & hấp tiệt trùng dụng cụ",
      "Găng tay, khẩu trang, váy chống khuẩn",
      "Vùng điều trị được bảo vệ riêng biệt",
    ],
    image: IMAGES.services.itero,
  },
  {
    slug: "he-thong-labo",
    href: "/gioi-thieu/he-thong-labo",
    label: "Hệ thống Labo",
    eyebrow: "PHÒNG THÍ NGHIỆM",
    title: "Nha Khoa",
    subtitle: "Răng sứ, phục hình được chế tác chính xác — thẩm mỹ tự nhiên",
    paragraphs: [
      "Phục hình răng sứ và răng giả được thực hiện theo tiêu chuẩn thẩm mỹ: form răng, màu sắc và khớp cắn được kiểm tra kỹ trước khi gắn cho khách hàng.",
      "Phối hợp labo chuyên nghiệp giúp rút ngắn thời gian điều trị bọc sứ, veneer và cầu răng, đồng thời đảm bảo độ khít sát và bền chắc.",
    ],
    highlights: [
      "Răng sứ zirconia, cercon, veneer",
      "Thử răng trước khi gắn chính thức",
      "Bảo hành theo từng loại vật liệu",
    ],
    image: IMAGES.aboutRangSu10000,
  },
  {
    slug: "trang-thiet-bi",
    href: "/gioi-thieu/trang-thiet-bi",
    label: "Trang thiết bị",
    eyebrow: "TRANG THIẾT BỊ",
    title: "Hiện Đại",
    subtitle: "Công nghệ hỗ trợ chẩn đoán và điều trị chính xác",
    paragraphs: [
      "Nha Khoa Đăng Khoa đầu tư máy chụp CT Cone Beam 3D, scan trong miệng, máy cạo vôi siêu âm và hệ thống hỗ trợ implant — giúp bác sĩ lập kế hoạch điều trị an toàn, có dự báo.",
      "Trang thiết bị hiện đại góp phần giảm thời gian thực hiện, tăng độ chính xác và mang lại trải nghiệm nhẹ nhàng hơn cho khách hàng.",
    ],
    highlights: [
      "CT Cone Beam 3D",
      "Scan trong miệng / iTero",
      "Máy cạo vôi siêu âm",
      "Phẫu thuật implant guided",
    ],
    image: IMAGES.coverClinic,
    ctaLabel: "Xem công nghệ",
    ctaHref: "/#cong-nghe",
  },
];

export function getAboutSection(slug: string): AboutSection | undefined {
  return ABOUT_SECTIONS.find((s) => s.slug === slug);
}
