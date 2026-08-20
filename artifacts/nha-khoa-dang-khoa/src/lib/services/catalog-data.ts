/** @deprecated Chỉ dùng cho seed mẫu qua Admin → Import. Website lấy dữ liệu từ API /api/services/catalog */
import { IMAGES } from "@/lib/images";
import type { ServiceCatalog, ServiceCategory, ServiceItem } from "./types";
import { slugify } from "./slug";

const CAT_IMAGES: Record<string, string> = {
  "nha-khoa-tong-quat": IMAGES.coverClinic,
  "dieu-tri-noi-nha": IMAGES.congnghe.metaEndo,
  "nho-rang": IMAGES.services.nhoRangKhon,
  "tham-my-nha-khoa": IMAGES.aboutRangSu10000,
  "phuc-hinh-rang": IMAGES.aboutRangSu10000,
  implant: IMAGES.services.implant,
  "nieng-rang": IMAGES.services.niengRang,
  "nha-khoa-tre-em": IMAGES.coverClinic,
  "dich-vu-chuyen-sau": IMAGES.services.itero,
};

function items(titles: string[], categorySlug: string): ServiceItem[] {
  return titles.map((title) => ({
    slug: slugify(title),
    title,
    shortDesc: `Dịch vụ ${title} — tư vấn và điều trị tại Nha Khoa Đăng Khoa, Tây Ninh.`,
  }));
}

function cat(
  slug: string,
  title: string,
  icon: string,
  description: string,
  serviceTitles: string[],
): ServiceCategory {
  return {
    id: slug,
    slug,
    title,
    icon,
    description,
    image: CAT_IMAGES[slug] ?? IMAGES.coverClinic,
    services: items(serviceTitles, slug),
  };
}

export const DEFAULT_SERVICE_CATALOG: ServiceCatalog = {
  version: 1,
  categories: [
    cat(
      "nha-khoa-tong-quat",
      "Nha khoa tổng quát",
      "🦷",
      "Khám, phòng ngừa và điều trị răng miệng cơ bản — nền tảng cho sức khỏe nụ cười bền vững.",
      [
        "Khám răng định kỳ",
        "Tư vấn sức khỏe răng miệng",
        "Cạo vôi răng",
        "Đánh bóng răng",
        "Điều trị viêm nướu",
        "Điều trị nha chu",
        "Trám răng thẩm mỹ",
        "Điều trị ê buốt răng",
      ],
    ),
    cat(
      "dieu-tri-noi-nha",
      "Điều trị nội nha",
      "🦷",
      "Bảo tồn răng thật — điều trị tủy và nhiễm trùng trong ống tủy an toàn, hiệu quả.",
      ["Điều trị tủy răng", "Chữa tủy răng sữa", "Điều trị tủy lại", "Điều trị áp xe răng"],
    ),
    cat(
      "nho-rang",
      "Nhổ răng",
      "🦷",
      "Nhổ răng và tiểu phẫu nhẹ nhàng — giải quyết sâu răng, răng khôn mọc lệch.",
      [
        "Nhổ răng sữa",
        "Nhổ răng sâu",
        "Nhổ răng khôn",
        "Tiểu phẫu răng khôn mọc lệch",
        "Nhổ chân răng",
      ],
    ),
    cat(
      "tham-my-nha-khoa",
      "Thẩm mỹ nha khoa",
      "😁",
      "Cải thiện thẩm mỹ nụ cười — tẩy trắng, veneer, bọc sứ và thiết kế nụ cười.",
      [
        "Tẩy trắng răng",
        "Dán sứ Veneer",
        "Bọc răng sứ thẩm mỹ",
        "Thiết kế nụ cười",
        "Chỉnh hình răng thẩm mỹ",
      ],
    ),
    cat(
      "phuc-hinh-rang",
      "Phục hình răng",
      "🦷",
      "Phục hồi chức năng ăn nhai và thẩm mỹ — cầu răng, hàm tháo lắp và phục hình toàn hàm.",
      [
        "Làm cầu răng sứ",
        "Hàm tháo lắp",
        "Hàm khung liên kết",
        "Răng giả bán phần",
        "Răng giả toàn hàm",
      ],
    ),
    cat(
      "implant",
      "Implant",
      "🦷",
      "Trồng răng Implant chuẩn quốc tế — phục hình ổn định, thẩm mỹ và chức năng lâu dài.",
      [
        "Trồng răng Implant đơn lẻ",
        "Trồng răng Implant toàn hàm",
        "Cấy ghép Implant tức thì",
        "Ghép xương Implant",
        "Nâng xoang Implant",
      ],
    ),
    cat(
      "nieng-rang",
      "Niềng răng – Chỉnh nha",
      "😁",
      "Chỉnh nha thẩm mỹ — mắc cài, khay trong suốt và chỉnh khớp cắn.",
      [
        "Niềng răng mắc cài kim loại",
        "Niềng răng mắc cài sứ",
        "Niềng răng tự buộc",
        "Niềng răng trong suốt",
        "Chỉnh khớp cắn",
      ],
    ),
    cat(
      "nha-khoa-tre-em",
      "Nha khoa trẻ em",
      "👶",
      "Chăm sóc răng miệng cho trẻ — thân thiện, nhẹ nhàng, phòng ngừa sâu răng.",
      [
        "Khám răng trẻ em",
        "Trám răng sữa",
        "Nhổ răng sữa",
        "Điều trị sâu răng trẻ em",
        "Bôi Fluor chống sâu răng",
        "Hướng dẫn chăm sóc răng miệng cho trẻ",
      ],
    ),
    cat(
      "dich-vu-chuyen-sau",
      "Dịch vụ chuyên sâu",
      "🔬",
      "Điều trị chuyên sâu — cười hở lợi, khớp thái dương hàm, nha chu và tiêu xương.",
      [
        "Điều trị cười hở lợi",
        "Điều trị khớp thái dương hàm",
        "Điều trị hôi miệng",
        "Điều trị tiêu xương hàm",
        "Phẫu thuật nha chu",
      ],
    ),
  ],
};
