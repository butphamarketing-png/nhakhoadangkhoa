import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { DOCTORS, PROMOTIONS, SERVICES, TESTIMONIALS } from "./constants";
import { ABOUT_SECTIONS, type AboutSection } from "./about-content";
import { buildMainServiceCards, type MainServiceCard } from "./main-services";
import { SERVICE_MENU_GROUPS, type ServiceMenuGroup } from "./services-menu";
import { SERVICE_GROUPS, type ServiceGroup } from "./service-groups";
import {
  GALLERY_PROMOTIONS,
  GALLERY_TESTIMONIALS,
  HOME_PROMOTIONS,
} from "./home-content";
import { DEFAULT_HOME_CMS, mergeHomeCms, type HomeCmsData } from "./home-cms-defaults";
import { DEFAULT_FAQ, type FaqCategory } from "./faq-content";
import { DEFAULT_CAREERS, type CareersCms } from "./careers-content";
import { DEFAULT_POLICIES, type PolicyPage } from "./policies-content";
import { BLOG_POSTS, type BlogPost } from "./blog-posts";
import { fetchPublicContent } from "./cms";
import { setStoredPrices } from "./pricing-data";
import type { BrandInfo } from "./brand-context";
import { BRAND } from "./constants";

export type HomeCms = HomeCmsData;

export type MediaCms = {
  homePromotions: typeof HOME_PROMOTIONS;
  galleryPromotions: typeof GALLERY_PROMOTIONS;
  galleryTestimonials: typeof GALLERY_TESTIMONIALS;
};

type CmsCache = Partial<{
  site: Partial<BrandInfo>;
  pricing: Record<string, string>;
  blog: (BlogPost & { status?: string })[];
  doctors: typeof DOCTORS;
  testimonials: typeof TESTIMONIALS;
  services: typeof SERVICES;
  service_menu: ServiceMenuGroup[];
  about: AboutSection[];
  promotions: typeof PROMOTIONS;
  home: Partial<HomeCmsData>;
  media: MediaCms;
  faq: FaqCategory[];
  careers: CareersCms;
  policies: PolicyPage[];
}>;

const CmsContext = createContext<{ cache: CmsCache; ready: boolean }>({
  cache: {},
  ready: true,
});

const CMS_KEYS = [
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
  "faq",
  "careers",
  "policies",
] as const;

export function CmsProvider({ children }: { children: ReactNode }) {
  const [cache, setCache] = useState<CmsCache>({});
  const [ready, setReady] = useState(!import.meta.env.VITE_API_URL);

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");
    if (!api) return;

    Promise.all(
      CMS_KEYS.map(async (key) => {
        const data = await fetchPublicContent<unknown>(key);
        return [key, data] as const;
      }),
    ).then((pairs) => {
      const next: CmsCache = {};
      for (const [key, data] of pairs) {
        if (data != null) (next as Record<string, unknown>)[key] = data;
      }
      setCache(next);
      if (next.pricing) setStoredPrices(next.pricing);
      setReady(true);
    });
  }, []);

  return (
    <CmsContext.Provider value={{ cache, ready }}>{children}</CmsContext.Provider>
  );
}

export function useCms() {
  return useContext(CmsContext);
}

export function useCmsData<T>(key: keyof CmsCache, fallback: T): T {
  const { cache } = useCms();
  const data = cache[key];
  return (data as T) ?? fallback;
}

export function useDoctors() {
  return useCmsData("doctors", DOCTORS);
}

export function useTestimonials() {
  return useCmsData("testimonials", TESTIMONIALS);
}

export function useServices() {
  return useCmsData("services", SERVICES);
}

/** Menu dịch vụ — luôn bỏ cấp Giá & quy trình, chỉ giữ danh sách dịch vụ */
export function useServiceMenu() {
  const fromApi = useCmsData("service_menu", SERVICE_MENU_GROUPS);
  return fromApi.map((g) => {
    const fallback = SERVICE_MENU_GROUPS.find((x) => x.id === g.id);
    const items = g.items?.length ? g.items : (fallback?.items ?? []);
    return { ...g, items, subgroups: undefined };
  });
}

/** 10 nhóm dịch vụ — mega menu & trang chủ */
export function useServiceGroups(): ServiceGroup[] {
  const menu = useServiceMenu();
  return SERVICE_GROUPS.map((def) => {
    const fromCms = menu.find((m) => m.id === def.id);
    if (!fromCms) return def;
    return {
      ...def,
      title: fromCms.title || def.title,
      intro: fromCms.intro || def.intro,
      href: fromCms.href || def.href,
      items: fromCms.items.length
        ? fromCms.items.map((item, i) => ({
            id: def.items[i]?.id ?? `${def.id}-${i}`,
            name: item.label,
            href: item.href,
          }))
        : def.items,
    };
  });
}

/** 4 dịch vụ chính — menu & trang /dich-vu */
export function useMainServices(): MainServiceCard[] {
  return buildMainServiceCards();
}

export function useAboutSections() {
  return useCmsData("about", ABOUT_SECTIONS);
}

export function usePromotions() {
  return useCmsData("promotions", PROMOTIONS);
}

export function useHomeCms(): HomeCmsData {
  const partial = useCms().cache.home;
  return mergeHomeCms(partial);
}

export function useFaqCms() {
  return useCmsData("faq", DEFAULT_FAQ);
}

export function useCareersCms() {
  return useCmsData("careers", DEFAULT_CAREERS);
}

export function usePoliciesCms() {
  return useCmsData("policies", DEFAULT_POLICIES);
}

export function useSiteOverrides(): Partial<BrandInfo> {
  return useCms().cache.site ?? {};
}

export function useMediaCms(): MediaCms {
  return useCmsData("media", {
    homePromotions: HOME_PROMOTIONS,
    galleryPromotions: GALLERY_PROMOTIONS,
    galleryTestimonials: GALLERY_TESTIMONIALS,
  });
}

export { BRAND };
