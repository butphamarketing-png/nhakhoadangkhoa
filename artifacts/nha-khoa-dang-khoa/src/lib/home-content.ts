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
    id: "cover-page",
    src: IMAGES.heroSlides.coverPage,
    alt: "BS. Phạm Trần Tuyết Sương — Bác sĩ chuyên sâu chỉnh nha",
  },
];

export const CLINIC_RECEPTION = IMAGES.coverClinic;
export const ABOUT_PROMO_IMAGE = IMAGES.veChungToi;
export const FAMILY_IMG = IMAGES.testimonials.nguyenThiKimHanh;
export const DENTIST_IMG = IMAGES.info.anhHuongSucKhoe;

export const CLINIC_STATS = [
  { value: "BSCKII", label: "Trình độ chuyên khoa Răng Hàm Mặt" },
  { value: "100%", label: "Trang thiết bị & vật liệu chính hãng" },
  { value: "5.000+", label: "Khách hàng tin tưởng điều trị" },
  { value: "24/7", label: "Hỗ trợ tư vấn qua hotline" },
];

export const HOME_DOCTORS = [
  {
    id: "pham-tran-tuyet-suong",
    name: "BS. Phạm Trần Tuyết Sương",
    degree: "Bác sĩ chuyên sâu chỉnh nha",
    image: IMAGES.bsPhamTranTuyetSuong,
    credentials: [
      "BSCKII Răng Hàm Mặt — ĐH Y Dược Cần Thơ",
      "Chứng chỉ chỉnh hình răng mặt — BV RHM TP.HCM",
      "Bác sĩ chuyên sâu chỉnh nha",
      "Đơn vị công tác: Nha Khoa Đăng Khoa — Tây Ninh",
    ],
  },
];

export const SMILE_MODELS = [
  {
    id: "m1",
    tag: "Mẫu 1",
    title: "Răng thỏ đáng yêu",
    image: IMAGES.smileModels.mau1RangTho,
    benefits: ["Trẻ trung, dễ thương", "Nụ cười tươi, gần gũi", "Răng cửa nhỏ nhẹ"],
    faceMatch: "Mặt tròn, trái xoan — thích nụ cười hiền, nữ tính",
  },
  {
    id: "m2",
    tag: "Mẫu 2",
    title: "Răng nanh phá cách",
    image: IMAGES.smileModels.mau2RangNanh,
    benefits: ["Cá tính, khác biệt", "Điểm nhấn khi cười", "Phong cách trẻ trung"],
    faceMatch: "Góc cạnh vừa — thích nổi bật, không theo khuôn mẫu",
  },
  {
    id: "m3",
    tag: "Mẫu 3",
    title: "Oval tự nhiên",
    image: IMAGES.smileModels.mau3Oval,
    benefits: ["Hài hòa như răng thật", "Dễ phối với màu da", "An toàn, không lỗi thời"],
    faceMatch: "Mặt oval, trung tính — phù hợp đa số khuôn mặt",
  },
  {
    id: "m4",
    tag: "Mẫu 4",
    title: "Vuông vắn bản lĩnh",
    image: IMAGES.smileModels.mau4VuongVan,
    benefits: ["Tin cậy, chuyên nghiệp", "Nụ cười vững chắc", "Hình ảnh lãnh đạo"],
    faceMatch: "Mặt vuông, hàm rõ — nam giới & người cần uy tín",
  },
];

export const TESTIMONIAL_TABS = [
  {
    id: "all",
    label: "Cảm nhận khách hàng",
    items: [
      {
        id: "testimonial1",
        name: "Khách hàng 1",
        role: "Khách hàng Đăng Khoa",
        condition: "Trước & sau điều trị",
        quote: "Rất hài lòng với kết quả điều trị.",
        ratingLabel: "Rất tốt",
        image: IMAGES.blog.testimonial1,
      },
      {
        id: "testimonial2",
        name: "Khách hàng 2",
        role: "Khách hàng Đăng Khoa",
        condition: "Trước & sau điều trị",
        quote: "Bác sĩ tư vấn rất kỹ lưỡng.",
        ratingLabel: "Hài lòng",
        image: IMAGES.blog.testimonial2,
      },
      {
        id: "testimonial3",
        name: "Khách hàng 3",
        role: "Khách hàng Đăng Khoa",
        condition: "Trước & sau điều trị",
        quote: "Kết quả vượt mong đợi!",
        ratingLabel: "Hài lòng",
        image: IMAGES.blog.testimonial3,
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
    desc: "BS. Phạm Trần Tuyết Sương – chuyên sâu chỉnh nha.",
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
  {
    title: "Hệ Thống Chụp CT Cone Beam 3D",
    desc: "Chẩn đoán hình ảnh 3D chính xác, hỗ trợ lập kế hoạch điều trị hiệu quả.",
    image: IMAGES.congnghe.ctAxeos,
  },
  {
    title: "Hệ Thống Scan Dấu Răng Kỹ Thuật Số",
    desc: "Lấy dấu răng nhanh chóng, chính xác, không gây khó chịu như phương pháp truyền thống.",
    image: IMAGES.congnghe.implantGuide,
  },
  {
    title: "Máy Scan iTero Lumina",
    desc: "Quét hàm 3D trong miệng, mô phỏng nụ cười và lập kế hoạch chỉnh nha — chính xác, thoải mái cho bệnh nhân.",
    image: IMAGES.congnghe.iteroLumina,
  },
  {
    title: "Robot Hỗ Trợ Phẫu Thuật Nha Khoa",
    desc: "Ứng dụng công nghệ hiện đại giúp nâng cao độ chính xác và an toàn trong điều trị.",
    image: IMAGES.congnghe.xGuide,
  },
  {
    title: "Robot Định Vị Cấy Ghép Implant",
    desc: "Hỗ trợ cấy ghép Implant chuẩn xác theo dữ liệu số hóa, tăng tỷ lệ thành công và độ bền lâu dài.",
    image: IMAGES.congnghe.xnavImplant,
  },
  {
    title: "Máy In Nội Nha 3 In 1",
    desc: "In guide điều trị nội nha, mão tạm và phục hình theo dữ liệu số — nhanh, chính xác, tiết kiệm thời gian.",
    image: IMAGES.congnghe.mayInNoiNha3in1,
  },
  {
    title: "Máy In Shining 3D",
    desc: "In mô hình, khay chỉnh nha và phục hình 3D chất lượng cao, hỗ trợ lập kế hoạch điều trị trực quan.",
    image: IMAGES.congnghe.shining3d,
  },
  {
    title: "Piezotom",
    desc: "Cắt xương bằng siêu âm, nhẹ nhàng và an toàn — đặc biệt hiệu quả khi nhổ răng khôn và phẫu thuật nha khoa.",
    image: IMAGES.congnghe.piezotom,
  },
];

export const BOOKING_BENEFITS: { icon: LucideIcon; label: string }[] = [
  { icon: CheckCircle, label: "Tư vấn miễn phí" },
  { icon: Shield, label: "An toàn – Không đau" },
  { icon: Users, label: "Không chờ đợi lâu" },
  { icon: Shield, label: "Bảo mật thông tin" },
];

import { SERVICE_GROUPS } from "./service-groups";

export const FEATURED_SERVICE_GROUPS = SERVICE_GROUPS.map((g) => ({
  id: g.id,
  name: g.title,
  href: g.href,
  image: g.image,
  displayName: g.title,
  intro: g.intro,
  itemCount: g.items.length,
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
