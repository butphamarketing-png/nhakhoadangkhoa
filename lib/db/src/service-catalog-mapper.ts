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

export function autoSeoFields(name: string, excerpt: string, categoryName: string) {
  const site = "Nha Khoa Đăng Khoa";
  const seoTitle = `${name} | ${categoryName} — ${site}`;
  const seoDescription =
    excerpt ||
    `Dịch vụ ${name} tại ${site}, Tây Ninh. Tư vấn miễn phí, quy trình chuẩn y khoa.`;
  return {
    seoTitle,
    seoDescription,
    ogTitle: seoTitle,
    ogDescription: seoDescription,
  };
}
