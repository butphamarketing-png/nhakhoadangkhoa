/**
 * Menu dịch vụ 3 cấp: Danh mục L1 → L2 → Bài viết
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
  /** Danh mục cấp 2 */
  subgroups?: ServiceMenuSubGroup[];
  /** Danh sách phẳng (tương thích CMS cũ) */
  items: ServiceMenuItem[];
};

export const SERVICE_MENU_GROUPS: ServiceMenuGroup[] = [
  {
    id: "trong-rang-implant",
    title: "Trồng răng Implant",
    href: "/dich-vu/trong-rang-implant",
    intro:
      "Phục hồi răng mất bằng cấy ghép implant chuẩn quốc tế — ổn định, thẩm mỹ và chức năng ăn nhai lâu dài.",
    subgroups: [
      {
        id: "implant-giai-phap",
        title: "Giải pháp Implant",
        items: [
          { label: "Trồng răng Implant toàn hàm", href: "/dich-vu/implant", excerpt: "All-on-4 / All-on-6 — phục hình cả hàm." },
          { label: "Cấy ghép Implant tức thì", href: "/dich-vu/implant", excerpt: "Đặt trụ và răng tạm trong cùng ngày." },
          { label: "Trồng răng Implant Hàn Quốc", href: "/dich-vu/implant", excerpt: "Trụ Osstem — chi phí hợp lý." },
          { label: "Trồng răng Implant Mỹ", href: "/dich-vu/implant", excerpt: "Nobel Biocare và dòng implant Mỹ." },
          { label: "Trồng răng Implant Thụy Sĩ", href: "/dich-vu/implant", excerpt: "Straumann — tiêu chuẩn vàng." },
          { label: "Implant cho người mất răng lâu năm", href: "/dich-vu/implant", excerpt: "Nâng xương, ghép xương." },
        ],
      },
      {
        id: "implant-tu-van",
        title: "Giá & quy trình",
        items: [
          { label: "Trồng răng Implant giá bao nhiêu", href: "/bang-gia#trong-rang-implant", excerpt: "Bảng giá implant tại phòng khám." },
          { label: "Quy trình trồng răng Implant", href: "/kien-thuc/implant-tai-tay-ninh-uy-tin", excerpt: "Các bước thăm khám, chụp CT, cấy trụ." },
          { label: "Địa chỉ trồng răng Implant uy tín", href: "/gioi-thieu", excerpt: "Nha Khoa Đăng Khoa — Tây Ninh." },
        ],
      },
    ],
    items: [
      { label: "Trồng răng Implant giá bao nhiêu", href: "/bang-gia#trong-rang-implant", excerpt: "Tham khảo bảng giá implant tại phòng khám." },
      { label: "Trồng răng Implant toàn hàm", href: "/dich-vu/implant", excerpt: "All-on-4 / All-on-6 — phục hình cả hàm trên công nghệ implant." },
      { label: "Cấy ghép Implant tức thì", href: "/dich-vu/implant", excerpt: "Đặt trụ và răng tạm trong cùng ngày khi đủ điều kiện xương." },
      { label: "Trồng răng Implant Hàn Quốc", href: "/dich-vu/implant", excerpt: "Trụ Osstem và tương đương — chi phí hợp lý, chất lượng ổn định." },
      { label: "Trồng răng Implant Mỹ", href: "/dich-vu/implant", excerpt: "Nobel Biocare và dòng implant Mỹ cao cấp." },
      { label: "Trồng răng Implant Thụy Sĩ", href: "/dich-vu/implant", excerpt: "Straumann — tiêu chuẩn vàng trong cấy ghép implant." },
      { label: "Implant cho người mất răng lâu năm", href: "/dich-vu/implant", excerpt: "Nâng xương, ghép xương — giải pháp khi tiêu xương." },
      { label: "Quy trình trồng răng Implant", href: "/kien-thuc/implant-tai-tay-ninh-uy-tin", excerpt: "Các bước thăm khám, chụp CT, cấy trụ và phục hình." },
      { label: "Địa chỉ trồng răng Implant uy tín", href: "/gioi-thieu", excerpt: "Nha Khoa Đăng Khoa — Tây Ninh." },
    ],
  },
  {
    id: "rang-su",
    title: "Răng sứ",
    href: "/dich-vu/rang-su",
    intro: "Bọc sứ thẩm mỹ, veneer — tái tạo form răng và màu sắc hài hòa với gương mặt.",
    subgroups: [
      {
        id: "rang-su-dich-vu",
        title: "Bọc & dán sứ",
        items: [
          { label: "Bọc răng sứ thẩm mỹ", href: "/dich-vu/rang-su", excerpt: "Phục hình thẩm mỹ toàn hàm hoặc vùng cười." },
          { label: "Bọc răng sứ cho răng hô", href: "/dich-vu/rang-su", excerpt: "Chỉnh form và màu răng cửa hô." },
          { label: "Dán sứ Veneer", href: "/dich-vu/rang-su", excerpt: "Mặt dán sứ mỏng — bảo tồn men răng." },
          { label: "Nên bọc răng sứ loại nào", href: "/dich-vu/rang-su", excerpt: "Zirconia, Lava, Cercon — tư vấn theo tình trạng." },
        ],
      },
      {
        id: "rang-su-tu-van",
        title: "Giá & tư vấn",
        items: [
          { label: "Bọc răng sứ giá bao nhiêu tiền", href: "/bang-gia#rang-su", excerpt: "Bảng giá tham khảo bọc sứ." },
          { label: "Bọc răng sứ có tốt không", href: "/dich-vu/rang-su", excerpt: "Ưu nhược điểm và độ bền răng sứ." },
          { label: "Bọc răng sứ có đau không", href: "/dich-vu/rang-su", excerpt: "Quy trình êm, gây tê tại chỗ." },
          { label: "Địa chỉ làm răng sứ uy tín", href: "/lien-he", excerpt: "Đặt lịch thăm khám Nha Khoa Đăng Khoa." },
        ],
      },
    ],
    items: [
      { label: "Bọc răng sứ giá bao nhiêu tiền", href: "/bang-gia#rang-su", excerpt: "Bảng giá tham khảo bọc sứ tại phòng khám." },
      { label: "Nên bọc răng sứ loại nào", href: "/dich-vu/rang-su", excerpt: "Zirconia, Lava, Cercon — tư vấn theo tình trạng răng." },
      { label: "Bọc răng sứ thẩm mỹ", href: "/dich-vu/rang-su", excerpt: "Phục hình thẩm mỹ toàn hàm hoặc vùng cười." },
      { label: "Bọc răng sứ cho răng hô", href: "/dich-vu/rang-su", excerpt: "Chỉnh form và màu răng cửa hô." },
      { label: "Bọc răng sứ có tốt không", href: "/dich-vu/rang-su", excerpt: "Ưu nhược điểm và độ bền răng sứ." },
      { label: "Bọc răng sứ có đau không", href: "/dich-vu/rang-su", excerpt: "Quy trình êm, gây tê tại chỗ." },
      { label: "Dán sứ Veneer", href: "/dich-vu/rang-su", excerpt: "Mặt dán sứ mỏng — bảo tồn men răng." },
      { label: "Địa chỉ làm răng sứ uy tín", href: "/lien-he", excerpt: "Đặt lịch thăm khám Nha Khoa Đăng Khoa." },
    ],
  },
  {
    id: "nieng-rang",
    title: "Niềng răng",
    href: "/dich-vu/nieng-rang",
    intro: "Chỉnh nha mắc cài và khay trong suốt — cải thiện khớp cắn và thẩm mỹ nụ cười.",
    subgroups: [
      {
        id: "nieng-phuong-phap",
        title: "Phương pháp chỉnh nha",
        items: [
          { label: "Niềng răng mắc cài", href: "/dich-vu/nieng-rang", excerpt: "Kim loại, sứ — hiệu quả với nhiều dạng sai lệch." },
          { label: "Niềng răng Invisalign", href: "/dich-vu/nieng-rang", excerpt: "Khay trong suốt tháo lắp — thẩm mỹ cao." },
          { label: "Niềng răng hô", href: "/dich-vu/nieng-rang", excerpt: "Điều chỉnh răng hô, móm, khấp khểnh." },
        ],
      },
      {
        id: "nieng-doi-tuong",
        title: "Đối tượng & giá",
        items: [
          { label: "Niềng răng cho người lớn", href: "/dich-vu/nieng-rang", excerpt: "Phác đồ riêng, thời gian linh hoạt." },
          { label: "Bảng giá niềng răng", href: "/bang-gia#nieng-rang", excerpt: "Tham khảo chi phí chỉnh nha." },
        ],
      },
    ],
    items: [
      { label: "Niềng răng mắc cài", href: "/dich-vu/nieng-rang", excerpt: "Kim loại, sứ — hiệu quả với nhiều dạng sai lệch." },
      { label: "Niềng răng cho người lớn", href: "/dich-vu/nieng-rang", excerpt: "Phác đồ riêng, thời gian điều trị linh hoạt." },
      { label: "Niềng răng Invisalign", href: "/dich-vu/nieng-rang", excerpt: "Khay trong suốt tháo lắp — thẩm mỹ cao." },
      { label: "Niềng răng hô", href: "/dich-vu/nieng-rang", excerpt: "Điều chỉnh răng hô, móm, khấp khểnh." },
    ],
  },
  {
    id: "nha-khoa-tong-quat",
    title: "Nha khoa tổng quát",
    href: "/dich-vu/nha-khoa-tong-quat",
    intro: "Điều trị và phòng ngừa — chăm sóc răng miệng toàn diện cho mọi lứa tuổi.",
    subgroups: [
      {
        id: "tong-quat-dieu-tri",
        title: "Điều trị",
        items: [
          { label: "Nhổ răng", href: "/dich-vu/nha-khoa-tong-quat", excerpt: "Nhổ răng sâu, răng lung lay." },
          { label: "Nhổ răng khôn", href: "/dich-vu/nho-rang-khon", excerpt: "Nhổ khôn mọc lệch — kỹ thuật nhẹ nhàng." },
          { label: "Trám răng", href: "/kien-thuc/tram-rang-tai-tay-ninh", excerpt: "Trám composite, trám thẩm mỹ." },
          { label: "Điều trị tủy răng", href: "/dich-vu/noi-nha", excerpt: "Chữa tủy — giữ răng thật." },
          { label: "Viêm tủy răng", href: "/dich-vu/noi-nha", excerpt: "Nhận biết và xử lý viêm tủy." },
        ],
      },
      {
        id: "tong-quat-phong-ngua",
        title: "Phòng ngừa & thẩm mỹ",
        items: [
          { label: "Cạo vôi răng", href: "/kien-thuc/cao-voi-rang-tai-tay-ninh", excerpt: "Lấy cao răng, đánh bóng." },
          { label: "Tẩy trắng răng", href: "/dich-vu/tay-trang", excerpt: "Tẩy trắng tại phòng khám." },
          { label: "Làm răng giả", href: "/dich-vu/nha-khoa-tong-quat", excerpt: "Hàm tháo lắp, cầu răng sứ." },
          { label: "Viêm nướu – Nha chu", href: "/kien-thuc/dieu-tri-viem-nuou-tai-tay-ninh", excerpt: "Điều trị viêm lợi." },
          { label: "Cười hở lợi", href: "/kien-thuc/cuoi-ho-loi", excerpt: "Điều chỉnh cười hở lợi." },
          { label: "Đau khớp thái dương hàm", href: "/lien-he", excerpt: "Tư vấn và điều trị TMD." },
        ],
      },
    ],
    items: [
      { label: "Nhổ răng", href: "/dich-vu/nha-khoa-tong-quat", excerpt: "Nhổ răng sâu, răng lung lay theo chỉ định." },
      { label: "Nhổ răng khôn", href: "/dich-vu/nho-rang-khon", excerpt: "Nhổ khôn mọc lệch, mọc ngầm — kỹ thuật nhẹ nhàng." },
      { label: "Trám răng", href: "/kien-thuc/tram-rang-tai-tay-ninh", excerpt: "Trám composite, trám thẩm mỹ răng sâu." },
      { label: "Trám răng thẩm mỹ", href: "/dich-vu/nha-khoa-tong-quat", excerpt: "Phục hồi thẩm mỹ răng cửa, răng cối nhỏ." },
      { label: "Trám răng sâu", href: "/dich-vu/nha-khoa-tong-quat", excerpt: "Điều trị sâu răng kịp thời." },
      { label: "Làm răng giả", href: "/dich-vu/nha-khoa-tong-quat", excerpt: "Hàm tháo lắp, cầu răng sứ." },
      { label: "Cạo vôi răng", href: "/kien-thuc/cao-voi-rang-tai-tay-ninh", excerpt: "Lấy cao răng, đánh bóng — phòng viêm nướu." },
      { label: "Tẩy trắng răng", href: "/dich-vu/tay-trang", excerpt: "Tẩy trắng tại phòng khám, an toàn." },
      { label: "Điều trị tủy răng", href: "/dich-vu/noi-nha", excerpt: "Chữa tủy — giữ răng thật." },
      { label: "Viêm nướu – Nha chu", href: "/kien-thuc/dieu-tri-viem-nuou-tai-tay-ninh", excerpt: "Điều trị viêm lợi, bệnh nha chu." },
      { label: "Cười hở lợi", href: "/kien-thuc/cuoi-ho-loi", excerpt: "Điều chỉnh cười hở lợi theo nguyên nhân." },
      { label: "Đau khớp thái dương hàm", href: "/lien-he", excerpt: "Tư vấn và điều trị TMD." },
      { label: "Viêm tủy răng", href: "/dich-vu/noi-nha", excerpt: "Nhận biết và xử lý viêm tủy kịp thời." },
    ],
  },
];

export function getServiceSubgroups(group: ServiceMenuGroup): ServiceMenuSubGroup[] {
  if (group.subgroups?.length) return group.subgroups;
  return [{ id: "all", title: "Tất cả", items: group.items }];
}

export function getServiceDropdownItems(): ServiceMenuItem[] {
  return SERVICE_MENU_GROUPS.flatMap((g) => [
    { label: g.title, href: g.href, excerpt: g.intro },
    ...g.items.slice(0, 4),
  ]);
}
