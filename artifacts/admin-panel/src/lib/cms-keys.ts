export const SITE_CONTENT_KEYS = [
  "site",
  "pricing",
  "blog",
  "doctors",
  "testimonials",
  "services",
  "service_menu",
  "about",
  "promotions",
  "home",
] as const;

export type SiteContentKey = (typeof SITE_CONTENT_KEYS)[number];

export const CMS_LABELS: Record<SiteContentKey, string> = {
  site: "Thông tin liên hệ",
  pricing: "Bảng giá",
  blog: "Bài viết / Kiến thức",
  doctors: "Bác sĩ",
  testimonials: "Đánh giá khách hàng",
  services: "Dịch vụ (form đặt lịch)",
  service_menu: "Menu dịch vụ",
  about: "Giới thiệu",
  promotions: "Ưu đãi",
  home: "Trang chủ",
};
