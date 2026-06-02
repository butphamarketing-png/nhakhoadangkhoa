import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/blog/BlogCard";
import { BLOG_CATEGORIES } from "@/lib/blog-posts";
import { useBlogPosts } from "@/lib/use-blog-posts";

const PER_PAGE = 9;

export default function KienThucPage() {
  const { posts: BLOG_POSTS } = useBlogPosts();
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState<string>("Tất cả");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      const matchCat = activeCat === "Tất cả" || p.category === activeCat;
      const q = search.toLowerCase().trim();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeCat, BLOG_POSTS]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const onCatChange = (c: string) => {
    setActiveCat(c);
    setPage(1);
  };

  const onSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <div>
      <PageHero
        label="Blog nha khoa"
        breadcrumb="Kiến thức nha khoa"
        title={
          <>
            Kiến Thức <span className="text-[#C89B3C]">Nha Khoa</span>
          </>
        }
        subtitle="Cập nhật kiến thức chuyên môn từ đội ngũ bác sĩ Nha Khoa Đăng Khoa – Tây Ninh"
      />

      <section className="section-padding section-cream section-texture border-b border-[#C89B3C]/10">
        <div className="container-custom">
          <div className="relative max-w-lg mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0D1B2A]/40" />
            <Input
              placeholder="Tìm kiếm bài viết..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-12 rounded-full bg-white h-12 border-0 shadow-lg"
              data-testid="input-blog-search"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-10 p-1.5 rounded-full bg-white w-fit max-w-full border border-[#C89B3C]/15 shadow-sm">
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => onCatChange(c)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeCat === c
                    ? "gold-gradient text-white shadow-md"
                    : "text-[#0D1B2A]/60 hover:text-[#C89B3C]"
                }`}
                data-testid={`filter-cat-${c}`}
              >
                {c}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-[#0D1B2A]/40">Không tìm thấy bài viết phù hợp.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {paged.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  data-testid={`blog-card-${post.id}`}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
          )}

          {filtered.length > PER_PAGE && (
            <div className="flex justify-center gap-2 mt-10 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Button
                  key={p}
                  type="button"
                  variant={p === currentPage ? "default" : "outline"}
                  onClick={() => setPage(p)}
                  className={
                    p === currentPage
                      ? "gold-gradient text-white border-0 w-10 h-10 rounded-full p-0"
                      : "w-10 h-10 rounded-full p-0 border-[#C89B3C]/30 text-[#0D1B2A]"
                  }
                  data-testid={`page-${p}`}
                >
                  {p}
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
