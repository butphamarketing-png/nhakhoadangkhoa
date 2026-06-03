/** Dữ liệu mặc định từ website — dùng khi Import đồng bộ */
import { DOCTORS, PROMOTIONS, SERVICES, TESTIMONIALS } from "@website/lib/constants";
import { ABOUT_SECTIONS } from "@website/lib/about-content";
import { SERVICE_MENU_GROUPS } from "@website/lib/services-menu";
import { BLOG_POSTS } from "@website/lib/blog-posts";
import {
  CLINIC_STATS,
  GALLERY_PROMOTIONS,
  GALLERY_TESTIMONIALS,
  HERO_SLIDES,
  HOME_DOCTORS,
  HOME_PROMOTIONS,
} from "@website/lib/home-content";
import { DEFAULT_SITE } from "./defaults";
import type { SiteContentKey } from "./cms-keys";

export const WEBSITE_DEFAULTS: Record<SiteContentKey, unknown> = {
  site: DEFAULT_SITE,
  pricing: {},
  blog: BLOG_POSTS.map((p) => ({ ...p, status: "published" as const })),
  doctors: DOCTORS,
  testimonials: TESTIMONIALS,
  services: SERVICES,
  service_menu: SERVICE_MENU_GROUPS,
  about: ABOUT_SECTIONS,
  promotions: PROMOTIONS,
  home: {
    heroSlides: HERO_SLIDES,
    clinicStats: CLINIC_STATS,
    homeDoctors: HOME_DOCTORS,
  },
  media: {
    homePromotions: HOME_PROMOTIONS,
    galleryPromotions: GALLERY_PROMOTIONS,
    galleryTestimonials: GALLERY_TESTIMONIALS,
  },
  media_library: { items: [] },
};
