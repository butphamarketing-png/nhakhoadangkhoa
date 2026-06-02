import { useMemo } from "react";
import { BLOG_POSTS, type BlogPost } from "./blog-posts";
import { useCms, useCmsData } from "./cms-provider";

export function useBlogPosts() {
  const { ready } = useCms();
  const cmsBlog = useCmsData<(BlogPost & { status?: string })[] | null>("blog", null);

  const posts = useMemo(() => {
    if (!cmsBlog || !Array.isArray(cmsBlog) || cmsBlog.length === 0) {
      return BLOG_POSTS;
    }
    const published = cmsBlog.filter((p) => p.status !== "draft");
    return published.length > 0 ? published : cmsBlog;
  }, [cmsBlog]);

  return { posts, loading: !!import.meta.env.VITE_API_URL && !ready };
}
