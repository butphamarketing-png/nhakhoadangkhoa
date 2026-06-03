/** Dữ liệu mặc định từ website — dùng khi Import đồng bộ */
import { DOCTORS, PROMOTIONS, SERVICES, TESTIMONIALS } from "@website/lib/constants";
import { ABOUT_SECTIONS } from "@website/lib/about-content";
import { SERVICE_MENU_GROUPS } from "@website/lib/services-menu";
import { BLOG_POSTS } from "@website/lib/blog-posts";
import { DEFAULT_HOME_CMS } from "@website/lib/home-cms-defaults";
import { DEFAULT_FAQ } from "@website/lib/faq-content";
import { DEFAULT_CAREERS } from "@website/lib/careers-content";
import { DEFAULT_POLICIES } from "@website/lib/policies-content";
import {
  GALLERY_PROMOTIONS,
  GALLERY_TESTIMONIALS,
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
  home: DEFAULT_HOME_CMS,
  media: {
    homePromotions: HOME_PROMOTIONS,
    galleryPromotions: GALLERY_PROMOTIONS,
    galleryTestimonials: GALLERY_TESTIMONIALS,
  },
  faq: DEFAULT_FAQ,
  careers: DEFAULT_CAREERS,
  policies: DEFAULT_POLICIES,
  media_library: { items: [] },
};
