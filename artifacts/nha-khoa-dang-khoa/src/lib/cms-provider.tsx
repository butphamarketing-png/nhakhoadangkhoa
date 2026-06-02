import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { DOCTORS, PROMOTIONS, SERVICES, TESTIMONIALS } from "./constants";
import { ABOUT_SECTIONS, type AboutSection } from "./about-content";
import { SERVICE_MENU_GROUPS, type ServiceMenuGroup } from "./services-menu";
import {
  CLINIC_STATS,
  GALLERY_PROMOTIONS,
  GALLERY_TESTIMONIALS,
  HERO_SLIDES,
  HOME_DOCTORS,
  HOME_PROMOTIONS,
  type HeroSlide,
} from "./home-content";
import { BLOG_POSTS, type BlogPost } from "./blog-posts";
import { fetchPublicContent } from "./cms";
import { setStoredPrices } from "./pricing-data";
import type { BrandInfo } from "./brand-context";
import { BRAND } from "./constants";

export type HomeCms = {
  heroSlides: HeroSlide[];
  clinicStats: { value: string; label: string }[];
  homeDoctors: typeof HOME_DOCTORS;
};

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
  home: HomeCms;
  media: MediaCms;
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

export function useServiceMenu() {
  return useCmsData("service_menu", SERVICE_MENU_GROUPS);
}

export function useAboutSections() {
  return useCmsData("about", ABOUT_SECTIONS);
}

export function usePromotions() {
  return useCmsData("promotions", PROMOTIONS);
}

export function useHomeCms(): HomeCms {
  return useCmsData("home", {
    heroSlides: HERO_SLIDES,
    clinicStats: CLINIC_STATS,
    homeDoctors: HOME_DOCTORS,
  });
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
