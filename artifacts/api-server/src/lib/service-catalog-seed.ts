/** Dữ liệu mẫu import vào DB — không phụ thuộc ảnh website */
export type SeedCategory = {
  slug: string;
  name: string;
  icon: string;
  description: string;
  image: string;
  services: { name: string }[];
};

export const SERVICE_CATALOG_SEED: SeedCategory[] = [
  {
    slug: "nha-khoa-tong-quat",
    name: "Nha khoa tổng quát",
    icon: "🦷",
    description:
      "Khám, phòng ngừa và điều trị răng miệng cơ bản — nền tảng cho sức khỏe nụ cười bền vững.",
    image: "/images/cover-clinic.jpg",
    services: [
      { name: "Khám răng định kỳ" },
      { name: "Tư vấn sức khỏe răng miệng" },
      { name: "Cạo vôi răng" },
      { name: "Đánh bóng răng" },
      { name: "Điều trị viêm nướu" },
      { name: "Điều trị nha chu" },
      { name: "Trám răng thẩm mỹ" },
      { name: "Điều trị ê buốt răng" },
    ],
  },
  {
    slug: "dieu-tri-noi-nha",
    name: "Điều trị nội nha",
    icon: "🦷",
    description: "Bảo tồn răng thật — điều trị tủy và nhiễm trùng trong ống tủy an toàn, hiệu quả.",
    image: "/images/services/nho-rang-khon.jpg",
    services: [
      { name: "Điều trị tủy răng" },
      { name: "Chữa tủy răng sữa" },
      { name: "Điều trị tủy lại" },
      { name: "Điều trị áp xe răng" },
    ],
  },
  {
    slug: "nho-rang",
    name: "Nhổ răng",
    icon: "🦷",
    description: "Nhổ răng và tiểu phẫu nhẹ nhàng — giải quyết sâu răng, răng khôn mọc lệch.",
    image: "/images/services/nho-rang-khon.jpg",
    services: [
      { name: "Nhổ răng sữa" },
      { name: "Nhổ răng sâu" },
      { name: "Nhổ răng khôn" },
      { name: "Tiểu phẫu răng khôn mọc lệch" },
      { name: "Nhổ chân răng" },
    ],
  },
  {
    slug: "tham-my-nha-khoa",
    name: "Thẩm mỹ nha khoa",
    icon: "😁",
    description: "Cải thiện thẩm mỹ nụ cười — tẩy trắng, veneer, bọc sứ và thiết kế nụ cười.",
    image: "/images/about/rang-su-10000.jpg",
    services: [
      { name: "Tẩy trắng răng" },
      { name: "Dán sứ Veneer" },
      { name: "Bọc răng sứ thẩm mỹ" },
      { name: "Thiết kế nụ cười" },
      { name: "Chỉnh hình răng thẩm mỹ" },
    ],
  },
  {
    slug: "phuc-hinh-rang",
    name: "Phục hình răng",
    icon: "🦷",
    description: "Phục hồi chức năng ăn nhai và thẩm mỹ — cầu răng, hàm tháo lắp và phục hình toàn hàm.",
    image: "/images/about/rang-su-10000.jpg",
    services: [
      { name: "Làm cầu răng sứ" },
      { name: "Hàm tháo lắp" },
      { name: "Hàm khung liên kết" },
      { name: "Răng giả bán phần" },
      { name: "Răng giả toàn hàm" },
    ],
  },
  {
    slug: "implant",
    name: "Implant",
    icon: "🦷",
    description: "Trồng răng Implant chuẩn quốc tế — phục hình ổn định, thẩm mỹ và chức năng lâu dài.",
    image: "/images/services/implant.jpg",
    services: [
      { name: "Trồng răng Implant đơn lẻ" },
      { name: "Trồng răng Implant toàn hàm" },
      { name: "Cấy ghép Implant tức thì" },
      { name: "Ghép xương Implant" },
      { name: "Nâng xoang Implant" },
    ],
  },
  {
    slug: "nieng-rang",
    name: "Niềng răng",
    icon: "😁",
    description: "Chỉnh nha thẩm mỹ — mắc cài, khay trong suốt và chỉnh khớp cắn.",
    image: "/images/services/nieng-rang.jpg",
    services: [
      { name: "Niềng răng mắc cài kim loại" },
      { name: "Niềng răng mắc cài sứ" },
      { name: "Niềng răng tự buộc" },
      { name: "Niềng răng trong suốt" },
      { name: "Chỉnh khớp cắn" },
    ],
  },
  {
    slug: "nha-khoa-tre-em",
    name: "Nha khoa trẻ em",
    icon: "👶",
    description: "Chăm sóc răng miệng cho trẻ — thân thiện, nhẹ nhàng, phòng ngừa sâu răng.",
    image: "/images/cover-clinic.jpg",
    services: [
      { name: "Khám răng trẻ em" },
      { name: "Trám răng sữa" },
      { name: "Nhổ răng sữa" },
      { name: "Điều trị sâu răng trẻ em" },
      { name: "Bôi Fluor chống sâu răng" },
      { name: "Hướng dẫn chăm sóc răng miệng cho trẻ" },
    ],
  },
  {
    slug: "dich-vu-chuyen-sau",
    name: "Dịch vụ chuyên sâu",
    icon: "🔬",
    description: "Điều trị chuyên sâu — cười hở lợi, khớp thái dương hàm, nha chu và tiêu xương.",
    image: "/images/services/itero.jpg",
    services: [
      { name: "Điều trị cười hở lợi" },
      { name: "Điều trị khớp thái dương hàm" },
      { name: "Điều trị hôi miệng" },
      { name: "Điều trị tiêu xương hàm" },
      { name: "Phẫu thuật nha chu" },
    ],
  },
];
