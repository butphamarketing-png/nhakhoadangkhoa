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
  "media",
  "media_library",
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
  media: "Thư viện ảnh / Banner",
  media_library: "Media Library (SEO)",
};

export const CMS_ROUTES: Record<SiteContentKey, string> = {
  site: "/cai-dat",
  pricing: "/bang-gia",
  blog: "/bai-viet",
  doctors: "/bac-si",
  testimonials: "/khach-hang",
  services: "/dich-vu",
  service_menu: "/dich-vu",
  about: "/gioi-thieu",
  promotions: "/uu-dai",
  home: "/trang-chu",
  media: "/thu-vien",
  media_library: "/media-library",
};
