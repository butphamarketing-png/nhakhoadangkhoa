import {
  Award,
  CheckCircle,
  Heart,
  Microscope,
  Shield,
  Stethoscope,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "./constants";
import { IMAGES } from "./images";

export type HeroSlide = {
  id: string;
  src: string;
  alt: string;
};

/** Banner hero slideshow — mỗi ảnh ngang ~1920×720, hiển thị full width */
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "brand",
    src: IMAGES.heroSlides.brand,
    alt: "Nha Khoa Đăng Khoa — Địa chỉ nha khoa uy tín hàng đầu Tây Ninh",
  },
];

export const CLINIC_RECEPTION = IMAGES.coverClinic;
export const ABOUT_PROMO_IMAGE = IMAGES.aboutRangSu10000;
export const FAMILY_IMG = IMAGES.testimonials.nguyenThiKimHanh;
export const DENTIST_IMG = IMAGES.info.anhHuongSucKhoe;

export const CLINIC_STATS = [
  { value: "10+", label: "Năm kinh nghiệm đội ngũ bác sĩ" },
  { value: "100%", label: "Trang thiết bị & vật liệu chính hãng" },
  { value: "5.000+", label: "Khách hàng tin tưởng điều trị" },
  { value: "24/7", label: "Hỗ trợ tư vấn qua hotline" },
];

export const HOME_DOCTORS = [
  {
    id: "nguyen-dang-khoa",
    name: "BS. Nguyễn Đăng Khoa",
    degree: "Bác sĩ Răng Hàm Mặt",
    image: IMAGES.logo,
    credentials: [
      "Bác sĩ Răng Hàm Mặt — chuyên khoa",
      "Giám đốc chuyên môn Nha Khoa Đăng Khoa",
      "Chuyên Implant, chỉnh nha & thẩm mỹ nha khoa",
      "Đơn vị công tác: Nha Khoa Đăng Khoa — Tây Ninh",
    ],
  },
  {
    id: "nguyen-van-an",
    name: "BS. Nguyễn Văn An",
    degree: "Bác sĩ tốt nghiệp ĐH Y Dược",
    image: IMAGES.coverClinic,
    credentials: [
      "Đại học Y Dược TP. Hồ Chí Minh",
      "Chuyên Implant & phẫu thuật hàm mặt",
      "Hơn 15 năm kinh nghiệm lâm sàng",
      "Nha Khoa Đăng Khoa — Tây Ninh",
    ],
  },
  {
    id: "tran-thi-mai",
    name: "BS. Trần Thị Mai",
    degree: "Trưởng khoa Chỉnh nha",
    image: IMAGES.services.niengRang,
    credentials: [
      "Đại học Y Hà Nội — Răng Hàm Mặt",
      "Chuyên gia niềng răng & Invisalign",
      "Hơn 12 năm kinh nghiệm chỉnh nha",
      "Nha Khoa Đăng Khoa — Tây Ninh",
    ],
  },
];

export const SMILE_MODELS = [
  { id: "m1", tag: "Mẫu 1", title: "Răng thỏ đáng yêu", image: IMAGES.services.niengRang },
  { id: "m2", tag: "Mẫu 2", title: "Răng nanh phá cách", image: IMAGES.services.implant },
  { id: "m3", tag: "Mẫu 3", title: "Oval tự nhiên", image: IMAGES.services.itero },
  { id: "m4", tag: "Mẫu 4", title: "Vuông vắn bản lĩnh", image: IMAGES.services.nhoRangKhon },
];

export const TESTIMONIAL_TABS = [
  {
    id: "rang-su",
    label: "Bọc răng sứ",
    items: [
      {
        id: "lat",
        name: "Đàm Thị Lát",
        role: "Khách hàng Đăng Khoa",
        condition: "Răng nhiễm màu, không đều",
        quote: "Rất hài lòng với dáng răng mới — tự nhiên và tự tin hơn rất nhiều.",
        ratingLabel: "Rất tốt",
        image: IMAGES.testimonials.damThiLat,
      },
      {
        id: "hanh",
        name: "Nguyễn Thị Kim Hạnh",
        role: "Khách hàng Đăng Khoa",
        condition: "Răng sứ thẩm mỹ",
        quote: "Bác sĩ tư vấn kỹ, màu răng hài hòa với gương mặt.",
        ratingLabel: "Hài lòng",
        image: IMAGES.testimonials.nguyenThiKimHanh,
      },
      {
        id: "phuong",
        name: "Nguyễn Đình Phương",
        role: "Khách hàng Đăng Khoa",
        condition: "Bọc sứ toàn hàm",
        quote: "Quy trình nhẹ nhàng, kết quả vượt mong đợi.",
        ratingLabel: "Hài lòng",
        image: IMAGES.testimonials.nguyenDinhPhuong,
      },
    ],
  },
  {
    id: "implant",
    label: "Trồng răng Implant",
    items: [
      {
        id: "truoc-sau",
        name: "Khách hàng Implant",
        role: "Trồng răng Implant",
        condition: "Mất răng hàm",
        quote: "Ăn nhai thoải mái, răng chắc như răng thật.",
        ratingLabel: "Rất tốt",
        image: IMAGES.testimonials.truocSau,
      },
      {
        id: "thuy",
        name: "Lê Thị Thủy",
        role: "Khách hàng Implant",
        condition: "Mất 2 răng cửa",
        quote: "Cấy Implant nhanh, hồi phục tốt sau điều trị.",
        ratingLabel: "Dịch vụ tốt",
        image: IMAGES.testimonials.leThiThuy,
      },
    ],
  },
  {
    id: "nieng-rang",
    label: "Niềng răng",
    items: [
      {
        id: "nieng-1",
        name: "Khách hàng chỉnh nha",
        role: "Niềng răng mắc cài",
        condition: "Răng hô, lệch lạc",
        quote: "Sau chỉnh nha nụ cười đều và đẹp hơn hẳn.",
        ratingLabel: "Hài lòng",
        image: IMAGES.promos.niengRangHe,
      },
      {
        id: "nieng-2",
        name: "Khách hàng Invisalign",
        role: "Niềng trong suốt",
        condition: "Răng thưa",
        quote: "Niềng trong suốt tiện lợi, không ảnh hưởng công việc.",
        ratingLabel: "Rất tốt",
        image: IMAGES.promos.muaVangChinhNha,
      },
    ],
  },
];

export const QUICK_SERVICE_LABELS: Record<string, string> = {
  implant: "IMPLANT NHA KHOA",
  "nieng-rang": "NIỀNG RĂNG CHỈNH NHA",
  "rang-su": "RĂNG SỨ THẨM MỸ",
  "tay-trang": "TẨY TRẮNG RĂNG",
  "noi-nha": "ĐIỀU TRỊ NỘI NHA",
  "nho-rang-khon": "NHỔ RĂNG KHÔN",
};

export const ABOUT_FEATURES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Award,
    title: "Bác sĩ chuyên môn cao",
    desc: "BS. Nguyễn Đăng Khoa – chuyên khoa Răng Hàm Mặt.",
  },
  {
    icon: Wrench,
    title: "Trang thiết bị hiện đại",
    desc: "Máy CT Cone Beam 3D, Scan iTero, Piezotome.",
  },
  {
    icon: Microscope,
    title: "Quy trình chuẩn y khoa",
    desc: "Vô trùng tuyệt đối, theo dõi sát sao từng ca điều trị.",
  },
  {
    icon: Users,
    title: "Bảo hành dài hạn",
    desc: "Chế độ bảo hành rõ ràng – hỗ trợ sau điều trị.",
  },
];

export const WHY_CHOOSE: { icon: LucideIcon; label: string }[] = [
  { icon: Award, label: "Uy tín hàng đầu" },
  { icon: Stethoscope, label: "Bác sĩ giỏi" },
  { icon: Wrench, label: "Công nghệ 4.0" },
  { icon: Shield, label: "Vật liệu chuẩn" },
  { icon: CheckCircle, label: "Giá minh bạch" },
  { icon: Heart, label: "Tận tâm phục vụ" },
];

export const SERVICE_IMAGES: Record<string, string> = {
  implant: IMAGES.services.implant,
  "nieng-rang": IMAGES.services.niengRang,
  "rang-su": IMAGES.services.implant,
  "tay-trang": IMAGES.services.itero,
  "noi-nha": IMAGES.services.nhoRangKhon,
  "nho-rang-khon": IMAGES.services.nhoRangKhon,
};

export const TECHNOLOGY_ITEMS = [
  { title: "Máy CT Cone Beam 3D", image: IMAGES.coverClinic },
  { title: "Máy Scan iTero 5D Plus", image: IMAGES.services.itero },
  { title: "Piezotome nhổ răng khôn", image: IMAGES.services.nhoRangKhon },
  { title: "Cấy ghép Implant", image: IMAGES.services.implant },
];

export const BOOKING_BENEFITS: { icon: LucideIcon; label: string }[] = [
  { icon: CheckCircle, label: "Tư vấn miễn phí" },
  { icon: Shield, label: "An toàn – Không đau" },
  { icon: Users, label: "Không chờ đợi lâu" },
  { icon: Shield, label: "Bảo mật thông tin" },
];

export const FEATURED_SERVICES = SERVICES.map((s) => ({
  ...s,
  image: SERVICE_IMAGES[s.id] ?? SERVICE_IMAGES.implant,
  displayName: s.name.toUpperCase(),
}));

export const HOME_PROMOTIONS = [
  {
    id: "mua-vang",
    title: "Mùa vàng chỉnh nha",
    image: IMAGES.promos.muaVangChinhNha,
    href: "/uu-dai",
    badge: "HOT",
  },
  {
    id: "chinh-nha-10",
    title: "Ưu đãi chỉnh nha 10%",
    image: IMAGES.promos.chinhNha10,
    href: "/uu-dai",
    badge: "-10%",
  },
  {
    id: "nieng-he",
    title: "Niềng răng mùa hè",
    image: IMAGES.promos.niengRangHe,
    href: "/dich-vu/nieng-rang",
    badge: "MÙA HÈ",
  },
];

export const GALLERY_PROMOTIONS = [
  { id: "mua-vang", image: IMAGES.promos.muaVangChinhNha, title: "Mùa vàng chỉnh nha" },
  { id: "chinh-10", image: IMAGES.promos.chinhNha10, title: "Ưu đãi chỉnh nha 10%" },
  { id: "can-tiep", image: IMAGES.promos.canTiepSom, title: "Can thiệp sớm" },
  { id: "nieng-he", image: IMAGES.promos.niengRangHe, title: "Niềng răng mùa hè" },
  { id: "implant", image: IMAGES.services.implant, title: "Trồng răng Implant" },
  { id: "piezo", image: IMAGES.services.nhoRangKhon, title: "Nhổ răng khôn Piezotome" },
  { id: "itero", image: IMAGES.services.itero, title: "Quét hàm iTero 3D" },
  { id: "nieng-rang", image: IMAGES.services.niengRang, title: "Vì sao chọn chỉnh nha" },
];

export const GALLERY_TESTIMONIALS = [
  { id: "truoc-sau", image: IMAGES.testimonials.truocSau, name: "Trước & sau điều trị" },
  { id: "lat", image: IMAGES.testimonials.damThiLat, name: "Đàm Thị Lát" },
  { id: "hanh", image: IMAGES.testimonials.nguyenThiKimHanh, name: "Nguyễn Thị Kim Hạnh" },
  { id: "thuy", image: IMAGES.testimonials.leThiThuy, name: "Lê Thị Thủy" },
  { id: "phuong", image: IMAGES.testimonials.nguyenDinhPhuong, name: "Nguyễn Đình Phương" },
];

export const HOME_TESTIMONIALS = [
  {
    id: "truoc-sau",
    name: "Khách hàng Đăng Khoa",
    image: IMAGES.testimonials.truocSau,
    href: "/truoc-sau",
  },
  {
    id: "dam-thi-lat",
    name: "Đàm Thị Lát",
    image: IMAGES.testimonials.damThiLat,
    href: "/khach-hang",
  },
  {
    id: "kim-hanh",
    name: "Nguyễn Thị Kim Hạnh",
    image: IMAGES.testimonials.nguyenThiKimHanh,
    href: "/khach-hang",
  },
  {
    id: "le-thi-thuy",
    name: "Lê Thị Thủy",
    image: IMAGES.testimonials.leThiThuy,
    href: "/khach-hang",
  },
  {
    id: "dinh-phuong",
    name: "Nguyễn Đình Phương",
    image: IMAGES.testimonials.nguyenDinhPhuong,
    href: "/khach-hang",
  },
];
