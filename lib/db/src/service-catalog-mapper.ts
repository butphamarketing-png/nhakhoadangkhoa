import type { ServiceFaqRow, ServiceProcessRow } from "./schema/service-catalog";

/** Shape consumed by public website */
export type ApiServiceItem = {
  slug: string;
  title: string;
  shortDesc: string;
  image?: string;
  thumbnail?: string;
  banner?: string;
  content?: string;
  intro?: string;
  benefits?: string[];
  audience?: string[];
  process?: ServiceProcessRow[];
  priceNote?: string;
  faq?: ServiceFaqRow[];
  seoTitle?: string;
  seoDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  focusKeyword?: string;
  robots?: string;
  ctaText?: string;
  ctaLink?: string;
  status?: string;
};

export type ApiServiceCategory = {
  id: string;
  slug: string;
  title: string;
  icon: string;
  description: string;
  image: string;
  services: ApiServiceItem[];
};

export type ApiServiceCatalog = {
  version: number;
  categories: ApiServiceCategory[];
};

type DbCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  sortOrder: number;
  status: string;
};

type DbService = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  excerpt: string;
  thumbnail: string;
  banner: string;
  content: string;
  faq: ServiceFaqRow[];
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonicalUrl: string;
  focusKeyword: string;
  robots: string;
  benefits: string[];
  audience: string[];
  process: ServiceProcessRow[];
  priceNote: string;
  ctaText: string;
  ctaLink: string;
  sortOrder: number;
  status: string;
};

export function mapRowToServiceItem(row: DbService, categoryImage: string): ApiServiceItem {
  const image = row.banner || row.thumbnail || categoryImage;
  return {
    slug: row.slug,
    title: row.name,
    shortDesc: row.excerpt,
    image,
    thumbnail: row.thumbnail,
    banner: row.banner,
    content: row.content,
    intro: row.excerpt,
    benefits: row.benefits?.length ? row.benefits : undefined,
    audience: row.audience?.length ? row.audience : undefined,
    process: row.process?.length ? row.process : undefined,
    priceNote: row.priceNote || undefined,
    faq: row.faq?.length ? row.faq : undefined,
    seoTitle: row.seoTitle || undefined,
    seoDescription: row.seoDescription || undefined,
    ogTitle: row.ogTitle || undefined,
    ogDescription: row.ogDescription || undefined,
    ogImage: row.ogImage || undefined,
    canonicalUrl: row.canonicalUrl || undefined,
    focusKeyword: row.focusKeyword || undefined,
    robots: row.robots || undefined,
    ctaText: row.ctaText,
    ctaLink: row.ctaLink,
    status: row.status,
  };
}

export function buildCatalog(
  categories: DbCategory[],
  services: DbService[],
  options?: { includeHidden?: boolean },
): ApiServiceCatalog {
  const includeHidden = options?.includeHidden ?? false;
  const visibleCats = categories
    .filter((c) => includeHidden || c.status === "active")
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return {
    version: 2,
    categories: visibleCats.map((cat) => {
      const catServices = services
        .filter((s) => s.categoryId === cat.id && (includeHidden || s.status === "active"))
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((s) => mapRowToServiceItem(s, cat.image));

      return {
        id: cat.id,
        slug: cat.slug,
        title: cat.name,
        icon: cat.icon,
        description: cat.description,
        image: cat.image,
        services: catServices,
      };
    }),
  };
}

function trimMeta(text: string, max = 160): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}

export function autoSeoFields(name: string, excerpt: string, categoryName: string) {
  const site = "Nha Khoa Đăng Khoa";
  const seoTitle = trimMeta(`${name} | ${categoryName} — ${site}`, 60);
  const seoDescription = trimMeta(
    excerpt ||
      `${name} tại ${site}, Tây Ninh — ${categoryName}. Tư vấn miễn phí, quy trình chuẩn y khoa, báo giá minh bạch. Đặt lịch ngay.`,
    160,
  );
  return {
    seoTitle,
    seoDescription,
    ogTitle: seoTitle,
    ogDescription: seoDescription,
  };
}
