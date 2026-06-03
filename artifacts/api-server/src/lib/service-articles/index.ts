import { composeArticleHtml, countArticleWords } from "./compose";
import { expandArticle } from "./expand";
import { getArticleFacts } from "./facts-all";
import type { ServiceArticleSpec } from "./types";

export type { ServiceArticleSpec };

export function buildFullServiceArticle(
  serviceName: string,
  categoryName: string,
  categorySlug: string,
  categoryImage: string,
): { spec: ServiceArticleSpec; content: string; wordCount: number } {
  const facts = getArticleFacts(categorySlug, serviceName);
  if (!facts) {
    throw new Error(`Thiếu nội dung bài viết: ${categorySlug}/${serviceName}`);
  }
  const spec = expandArticle(facts);
  const content = composeArticleHtml(serviceName, categoryImage, spec);
  return { spec, content, wordCount: countArticleWords(content) };
}

export function hasFullArticle(categorySlug: string, serviceName: string): boolean {
  return Boolean(getArticleFacts(categorySlug, serviceName));
}
