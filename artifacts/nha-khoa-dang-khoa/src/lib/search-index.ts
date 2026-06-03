import { BLOG_POSTS } from "./blog-posts";
import { ABOUT_SECTIONS } from "./about-content";
import { DEFAULT_SERVICE_CATALOG } from "./services/catalog-data";
import { categoryPath, servicePath } from "./services/slug";
import type { ServiceCatalog } from "./services/types";
import { BRAND } from "./constants";

export type SearchResult = {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  type: "Trang" | "Dịch vụ" | "Giới thiệu" | "Bài viết";
};

const STATIC_PAGES: SearchResult[] = [
  { id: "home", title: "Trang chủ", subtitle: BRAND.shortName, href: "/", type: "Trang" },
  { id: "about", title: "Giới thiệu", href: "/gioi-thieu", type: "Trang" },
  { id: "services", title: "Dịch vụ nha khoa", href: "/dich-vu", type: "Trang" },
  { id: "pricing", title: "Bảng giá", href: "/bang-gia", type: "Trang" },
  { id: "blog", title: "Kiến thức nha khoa", href: "/kien-thuc", type: "Trang" },
  { id: "customers", title: "Khách hàng", href: "/khach-hang", type: "Trang" },
  { id: "contact", title: "Liên hệ", href: "/lien-he", type: "Trang" },
  { id: "booking", title: "Đặt lịch hẹn", href: "/dat-lich", type: "Trang" },
  { id: "promo", title: "Ưu đãi", href: "/uu-dai", type: "Trang" },
  { id: "faq", title: "Câu hỏi thường gặp", href: "/faq", type: "Trang" },
];

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

export function buildSearchIndex(catalog: ServiceCatalog = DEFAULT_SERVICE_CATALOG): SearchResult[] {
  const about: SearchResult[] = ABOUT_SECTIONS.map((a) => ({
    id: `about-${a.slug}`,
    title: a.title,
    subtitle: a.label,
    href: a.href,
    type: "Giới thiệu" as const,
  }));

  const services: SearchResult[] = catalog.categories.flatMap((cat) => [
    {
      id: `cat-${cat.slug}`,
      title: cat.title,
      subtitle: "Danh mục dịch vụ",
      href: categoryPath(cat.slug),
      type: "Dịch vụ" as const,
    },
    ...cat.services.map((s) => ({
      id: `svc-${cat.slug}-${s.slug}`,
      title: s.title,
      subtitle: cat.title,
      href: servicePath(cat.slug, s.slug),
      type: "Dịch vụ" as const,
    })),
  ]);

  const posts: SearchResult[] = BLOG_POSTS.map((p) => ({
    id: `blog-${p.id}`,
    title: p.title,
    subtitle: p.category,
    href: p.href,
    type: "Bài viết" as const,
  }));

  return [...STATIC_PAGES, ...about, ...services, ...posts];
}

export function searchSite(query: string, limit = 8, catalog?: ServiceCatalog): SearchResult[] {
  const q = normalize(query.trim());
  if (!q) return [];

  const index = buildSearchIndex(catalog);
  const scored = index
    .map((item) => {
      const hay = normalize(`${item.title} ${item.subtitle ?? ""}`);
      if (hay.includes(q)) return { item, score: 100 };
      const words = q.split(/\s+/).filter(Boolean);
      const match = words.filter((w) => hay.includes(w)).length;
      return { item, score: match * 20 };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((x) => x.item);
}
