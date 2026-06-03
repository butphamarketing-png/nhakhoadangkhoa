export type SeoCheck = { id: string; label: string; ok: boolean; weight: number };

export type SeoScoreResult = { score: number; checks: SeoCheck[] };

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(text: string): number {
  const t = stripHtml(text);
  if (!t) return 0;
  return t.split(/\s+/).filter(Boolean).length;
}

function hasKeyword(text: string, keyword: string): boolean {
  if (!keyword.trim()) return false;
  return text.toLowerCase().includes(keyword.trim().toLowerCase());
}

export function computeSeoScore(input: {
  contentHtml: string;
  seoTitle: string;
  seoDescription: string;
  focusKeyword: string;
  excerpt: string;
  faqCount: number;
  hasBanner: boolean;
}): SeoScoreResult {
  const html = input.contentHtml || "";
  const plain = stripHtml(html).toLowerCase();
  const kw = input.focusKeyword.trim();
  const wc = wordCount(html);

  const checks: SeoCheck[] = [
    { id: "h1", label: "Có tiêu đề H1", ok: /<h1[\s>]/i.test(html), weight: 12 },
    {
      id: "keyword",
      label: "Từ khóa chính trong nội dung / title",
      ok:
        hasKeyword(input.seoTitle, kw) ||
        hasKeyword(plain, kw) ||
        hasKeyword(input.excerpt, kw),
      weight: 14,
    },
    {
      id: "meta",
      label: "Meta Description (120–160 ký tự)",
      ok: input.seoDescription.length >= 120 && input.seoDescription.length <= 165,
      weight: 12,
    },
    {
      id: "alt",
      label: "Hình ảnh có thuộc tính ALT",
      ok: !/<img(?![^>]*alt=)/i.test(html) || !/<img/i.test(html),
      weight: 8,
    },
    { id: "words", label: "Tối thiểu ~800 từ", ok: wc >= 800, weight: 14 },
    { id: "h2", label: "Có tiêu đề H2", ok: /<h2[\s>]/i.test(html), weight: 10 },
    {
      id: "faq",
      label: "Có FAQ (khối hoặc tab)",
      ok: input.faqCount > 0 || /data-type="faq-block"/i.test(html),
      weight: 10,
    },
    {
      id: "internal",
      label: "Có internal link",
      ok: /href=["']\/(dich-vu|bang-gia|dat-lich|kien-thuc|gioi-thieu)/i.test(html),
      weight: 10,
    },
    {
      id: "cta",
      label: "Có CTA đặt lịch",
      ok:
        /data-type="cta-block"/i.test(html) ||
        /data-type="banner-cta"/i.test(html) ||
        /dat-lich/i.test(html),
      weight: 10,
    },
    { id: "banner", label: "Đã có Banner", ok: input.hasBanner, weight: 5 },
    {
      id: "title-len",
      label: "SEO Title ≤ 60 ký tự",
      ok: input.seoTitle.length > 0 && input.seoTitle.length <= 60,
      weight: 5,
    },
  ];

  const totalWeight = checks.reduce((s, c) => s + c.weight, 0);
  const earned = checks.filter((c) => c.ok).reduce((s, c) => s + c.weight, 0);
  const score = totalWeight ? Math.round((earned / totalWeight) * 100) : 0;

  return { score, checks };
}
