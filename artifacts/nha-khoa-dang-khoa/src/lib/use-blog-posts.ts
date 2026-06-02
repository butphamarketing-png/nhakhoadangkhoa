import { useEffect, useState } from "react";
import { BLOG_POSTS, type BlogPost } from "./blog-posts";
import { fetchPublicContent } from "./cms";

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [loading, setLoading] = useState(!!import.meta.env.VITE_API_URL);

  useEffect(() => {
    fetchPublicContent<(BlogPost & { status?: string })[]>("blog").then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        const published = data.filter((p) => p.status !== "draft");
        setPosts(published.length ? published : data);
      }
      setLoading(false);
    });
  }, []);

  return { posts, loading };
}
