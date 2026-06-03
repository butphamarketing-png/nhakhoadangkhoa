/**
 * Menu dịch vụ: Danh mục → Danh sách dịch vụ (không có cấp Giá & quy trình)
 */

export type ServiceMenuItem = {
  label: string;
  href: string;
  excerpt?: string;
};

export type ServiceMenuSubGroup = {
  id: string;
  title: string;
  items: ServiceMenuItem[];
};

export type ServiceMenuGroup = {
  id: string;
  title: string;
  href: string;
  intro: string;
  /** @deprecated Chỉ dùng items — không hiển thị cấp Giá & quy trình */
  subgroups?: ServiceMenuSubGroup[];
  items: ServiceMenuItem[];
};

export const SERVICE_MENU_GROUPS: ServiceMenuGroup[] = [
  {
    id: "trong-rang-implant",
    title: "Trồng răng Implant",
    href: "/dich-vu/implant",
    intro:
      "Phục hồi răng mất bằng cấy ghép implant chuẩn quốc tế — ổn định, thẩm mỹ và chức năng ăn nhai lâu dài.",
    items: [
      { label: "Trồng răng Implant toàn hàm", href: "/dich-vu/implant/trong-rang-implant-toan-ham", excerpt: "All-on-4 / All-on-6 — phục hình cả hàm." },
      { label: "Cấy ghép Implant tức thì", href: "/dich-vu/implant/cay-ghep-implant-tuc-thi", excerpt: "Đặt trụ và răng tạm trong cùng ngày." },
      { label: "Trồng răng Implant đơn lẻ", href: "/dich-vu/implant/trong-rang-implant-don-le", excerpt: "Phục hồi từng răng mất." },
      { label: "Ghép xương Implant", href: "/dich-vu/implant/ghep-xuong-implant", excerpt: "Nâng xương khi tiêu xương." },
      { label: "Nâng xoang Implant", href: "/dich-vu/implant/nang-xoang-implant", excerpt: "Giải pháp xương hàm trên." },
      { label: "Implant cho người mất răng lâu năm", href: "/dich-vu/implant", excerpt: "Đánh giá toàn diện trước cấy ghép." },
    ],
  },
  {
    id: "rang-su",
    title: "Răng sứ",
    href: "/dich-vu/tham-my-nha-khoa",
    intro: "Bọc sứ thẩm mỹ, veneer — tái tạo form răng và màu sắc hài hòa với gương mặt.",
    items: [
      { label: "Bọc răng sứ thẩm mỹ", href: "/dich-vu/tham-my-nha-khoa/boc-rang-su-tham-my", excerpt: "Phục hình thẩm mỹ toàn hàm hoặc vùng cười." },
      { label: "Dán sứ Veneer", href: "/dich-vu/tham-my-nha-khoa/dan-su-veneer", excerpt: "Mặt dán sứ mỏng — bảo tồn men răng." },
      { label: "Thiết kế nụ cười", href: "/dich-vu/tham-my-nha-khoa/thiet-ke-nu-cuoi", excerpt: "Phác đồ thẩm mỹ nụ cười." },
      { label: "Tẩy trắng răng", href: "/dich-vu/tham-my-nha-khoa/tay-trang-rang", excerpt: "Tẩy trắng tại phòng khám." },
      { label: "Chỉnh hình răng thẩm mỹ", href: "/dich-vu/tham-my-nha-khoa/chinh-hinh-rang-tham-my", excerpt: "Chỉnh form răng cửa." },
    ],
  },
  {
    id: "nieng-rang",
    title: "Niềng răng",
    href: "/dich-vu/nieng-rang",
    intro: "Chỉnh nha mắc cài và khay trong suốt — cải thiện khớp cắn và thẩm mỹ nụ cười.",
    items: [
      { label: "Niềng răng mắc cài kim loại", href: "/dich-vu/nieng-rang/nieng-rang-mac-cai-kim-loai", excerpt: "Hiệu quả với nhiều dạng sai lệch." },
      { label: "Niềng răng mắc cài sứ", href: "/dich-vu/nieng-rang/nieng-rang-mac-cai-su", excerpt: "Thẩm mỹ hơn mắc cài kim loại." },
      { label: "Niềng răng trong suốt", href: "/dich-vu/nieng-rang/nieng-rang-trong-suot", excerpt: "Khay trong suốt tháo lắp." },
      { label: "Niềng răng tự buộc", href: "/dich-vu/nieng-rang/nieng-rang-tu-buoc", excerpt: "Giảm ma sát, thoải mái." },
      { label: "Chỉnh khớp cắn", href: "/dich-vu/nieng-rang/chinh-khop-can", excerpt: "Điều chỉnh khớp cắn." },
    ],
  },
  {
    id: "nha-khoa-tong-quat",
    title: "Nha khoa tổng quát",
    href: "/dich-vu/nha-khoa-tong-quat",
    intro: "Điều trị và phòng ngừa — chăm sóc răng miệng toàn diện cho mọi lứa tuổi.",
    items: [
      { label: "Khám răng định kỳ", href: "/dich-vu/nha-khoa-tong-quat/kham-rang-dinh-ky", excerpt: "Thăm khám và tư vấn định kỳ." },
      { label: "Cạo vôi răng", href: "/dich-vu/nha-khoa-tong-quat/cao-voi-rang", excerpt: "Lấy cao răng, đánh bóng." },
      { label: "Trám răng thẩm mỹ", href: "/dich-vu/nha-khoa-tong-quat/tram-rang-tham-my", excerpt: "Trám composite thẩm mỹ." },
      { label: "Điều trị tủy răng", href: "/dich-vu/dieu-tri-noi-nha/dieu-tri-tuy-rang", excerpt: "Chữa tủy — giữ răng thật." },
      { label: "Nhổ răng khôn", href: "/dich-vu/nho-rang/nho-rang-khon", excerpt: "Nhổ khôn mọc lệch." },
      { label: "Tẩy trắng răng", href: "/dich-vu/tham-my-nha-khoa/tay-trang-rang", excerpt: "Tẩy trắng an toàn." },
      { label: "Điều trị viêm nướu", href: "/dich-vu/nha-khoa-tong-quat/dieu-tri-viem-nuou", excerpt: "Điều trị viêm lợi." },
    ],
  },
];

export function getServiceSubgroups(group: ServiceMenuGroup): ServiceMenuSubGroup[] {
  return [{ id: "all", title: "Dịch vụ", items: group.items }];
}

export function getServiceDropdownItems(): ServiceMenuItem[] {
  return SERVICE_MENU_GROUPS.flatMap((g) => [
    { label: g.title, href: g.href, excerpt: g.intro },
    ...g.items.slice(0, 4),
  ]);
}
