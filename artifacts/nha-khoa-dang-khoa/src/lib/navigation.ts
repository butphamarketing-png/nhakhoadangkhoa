/** Menu thống nhất toàn site — đồng bộ Header & Footer */

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const MAIN_NAV: NavItem[] = [
  { label: "TRANG CHỦ", href: "/" },
  {
    label: "GIỚI THIỆU",
    href: "/gioi-thieu",
    children: [
      { label: "Về chúng tôi", href: "/gioi-thieu", description: "Tổng quan hệ thống Nha Khoa Đăng Khoa" },
      { label: "Đội ngũ nhân viên", href: "/gioi-thieu/doi-ngu-nhan-vien", description: "Bác sĩ và đội ngũ chuyên môn" },
      { label: "Phòng khám", href: "/gioi-thieu/phong-kham", description: "Không gian phòng khám hiện đại" },
      { label: "Hệ thống vô trùng", href: "/gioi-thieu/he-thong-vo-trung", description: "Quy trình vô trùng chuẩn kép" },
      { label: "Hệ thống Labo", href: "/gioi-thieu/he-thong-labo", description: "Phòng thí nghiệm nha khoa riêng" },
      { label: "Trang thiết bị", href: "/gioi-thieu/trang-thiet-bi", description: "Công nghệ & máy móc hiện đại" },
    ],
  },
  {
    label: "DỊCH VỤ",
    href: "/dich-vu",
    children: [], // điền từ SERVICE_MENU_GROUPS trong Header
  },
  { label: "BẢNG GIÁ", href: "/bang-gia" },
  { label: "KIẾN THỨC", href: "/kien-thuc" },
  { label: "KHÁCH HÀNG", href: "/khach-hang" },
  { label: "LIÊN HỆ", href: "/lien-he" },
];
