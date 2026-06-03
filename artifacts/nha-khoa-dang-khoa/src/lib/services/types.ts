export type ServiceFaq = { q: string; a: string };

export type ServiceProcessStep = { step: string; title: string; desc: string };

/** Bài viết SEO — /dich-vu/{category}/{service} */
export type ServiceItem = {
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
  process?: ServiceProcessStep[];
  priceNote?: string;
  faq?: ServiceFaq[];
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

/** Danh mục — /dich-vu/{category} */
export type ServiceCategory = {
  id: string;
  slug: string;
  title: string;
  icon: string;
  description: string;
  image: string;
  services: ServiceItem[];
};

export type ServiceCatalog = {
  version: number;
  categories: ServiceCategory[];
};

export type BreadcrumbItem = { label: string; href?: string };
