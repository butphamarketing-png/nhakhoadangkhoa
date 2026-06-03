export type ServiceFaqRow = { q: string; a: string };
export type ServiceProcessRow = { step: string; title: string; desc: string };

/** Nội dung bài viết đầy đủ — mỗi dịch vụ một bộ riêng */
export type ServiceArticleSpec = {
  excerpt: string;
  focusKeyword: string;
  secondaryKeywords: string;
  intro: string[];
  whatIs: string[];
  audience: string[];
  benefitsProse: string[];
  processProse: string[];
  whyChoose: string[];
  benefits: string[];
  audienceList: string[];
  process: ServiceProcessRow[];
  faq: ServiceFaqRow[];
  priceNote?: string;
  ctaText?: string;
};

export type ServiceArticleKey = `${string}/${string}`;
