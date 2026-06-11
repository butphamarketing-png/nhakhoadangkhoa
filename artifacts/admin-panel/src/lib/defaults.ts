import type { SiteSettings } from "./types";
import { PRICING_CATALOG } from "@website/lib/pricing-catalog";
import { BRAND_HOURS_SUMMARY } from "@website/lib/brand-hours";

export const DEFAULT_SITE: SiteSettings = {
  name: "HỆ THỐNG NHA KHOA ĐĂNG KHOA",
  shortName: "Nha Khoa Đăng Khoa",
  slogan: "Uy tín – Chất lượng – Tận tâm",
  hotline: "08.86.86.87.86",
  hotlineRaw: "0886868786",
  email: "info@hethongnhakhoadangkhoa.vn",
  website: "hethongnhakhoadangkhoa.vn",
  address: "345 - 347 Điện Biên Phủ, Khu Phố Ninh Phúc, Phường Ninh Thạnh, Tỉnh Tây Ninh",
  hours: BRAND_HOURS_SUMMARY,
  facebook: "https://www.facebook.com/nhakhoaphuongdong.bsdangkhoa/",
  zalo: "https://zalo.me/0886868786",
  messenger: "https://m.me/nhakhoaphuongdong.bsdangkhoa",
  youtube: "https://youtube.com/@nhakhoadangkhoa",
  tiktok: "https://www.tiktok.com/@nhakhoadangkhoa",
};

/** Bảng giá 10 nhóm — khớp website /bang-gia */
export const PRICING_CATALOG_ADMIN = PRICING_CATALOG.map((g) => ({
  group: g.group,
  items: g.items.map((item) => ({ id: item.id, name: item.name })),
}));
