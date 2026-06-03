import { buildFullServiceArticle } from "./service-articles";

function autoSeoFields(name: string, excerpt: string, categoryName: string) {
  const site = "Nha Khoa Đăng Khoa";
  const trim = (t: string, max: number) => {
    const s = t.replace(/\s+/g, " ").trim();
    if (s.length <= max) return s;
    const cut = s.slice(0, max - 1);
    const sp = cut.lastIndexOf(" ");
    return (sp > 40 ? cut.slice(0, sp) : cut).trim() + "…";
  };
  const seoTitle = trim(`${name} | ${categoryName} — ${site}`, 60);
  const seoDescription = trim(
    excerpt ||
      `${name} tại ${site}, Tây Ninh — ${categoryName}. Tư vấn miễn phí, quy trình chuẩn y khoa.`,
    160,
  );
  return { seoTitle, seoDescription, ogTitle: seoTitle, ogDescription: seoDescription };
}

/** Nội dung + SEO đầy đủ cho seed — 48 bài riêng biệt, mỗi bài ≥800 từ */
export function buildSeedServiceFields(
  serviceName: string,
  categoryName: string,
  categorySlug: string,
  categoryImage: string,
) {
  const { spec, content } = buildFullServiceArticle(
    serviceName,
    categoryName,
    categorySlug,
    categoryImage,
  );
  const seo = autoSeoFields(serviceName, spec.excerpt, categoryName);

  return {
    excerpt: spec.excerpt,
    thumbnail: categoryImage,
    banner: categoryImage,
    content,
    faq: spec.faq,
    benefits: spec.benefits,
    audience: spec.audienceList,
    process: spec.process,
    priceNote: spec.priceNote ?? "",
    focusKeyword: spec.focusKeyword,
    secondaryKeywords: spec.secondaryKeywords,
    robots: "index, follow",
    ctaText: spec.ctaText ?? `Đặt lịch ${serviceName.toLowerCase()}`,
    ctaLink: "/dat-lich",
    seoTitle: seo.seoTitle,
    seoDescription: seo.seoDescription,
    ogTitle: seo.ogTitle,
    ogDescription: seo.ogDescription,
  };
}

export type { ServiceFaqRow, ServiceProcessRow };
