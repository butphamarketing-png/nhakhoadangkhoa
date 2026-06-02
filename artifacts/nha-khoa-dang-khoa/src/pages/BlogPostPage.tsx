import { Link, useRoute } from "wouter";
import { Calendar, Clock, ChevronLeft, ExternalLink, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import MediaFrame from "@/components/ui/MediaFrame";
import { useBlogPosts } from "@/lib/use-blog-posts";
import { useBrand } from "@/lib/brand-context";
import NotFoundPage from "@/pages/NotFoundPage";

export default function BlogPostPage() {
  const [, params] = useRoute("/kien-thuc/:slug");
  const slug = params?.slug ?? "";
  const { posts, loading } = useBlogPosts();
  const BRAND = useBrand();
  const post = posts.find((p) => p.slug === slug);

  if (!loading && !post) return <NotFoundPage />;
  if (!post) {
    return (
      <div className="section-padding text-center text-gray-500">Đang tải bài viết...</div>
    );
  }

  return (
    <div>
      <PageHero
        label={post.category}
        breadcrumb="Kiến thức nha khoa"
        title={<span className="text-white">{post.title}</span>}
        subtitle={`${post.date} · ${post.readTime}`}
      />

      <article className="section-padding section-cream">
        <div className="container-custom container-narrow">
          <Link href="/kien-thuc">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-[#C89B3C] mb-8 cursor-pointer hover:gap-3 transition-all">
              <ChevronLeft className="w-4 h-4" />
              Quay lại danh sách
            </span>
          </Link>

          <div className="rounded-[24px] overflow-hidden shadow-xl mb-8">
            <MediaFrame src={post.image} alt={post.title} aspect="wide" className="rounded-[24px]" />
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-[#0D1B2A]/55 mb-8">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#C89B3C]" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C89B3C]" />
              {post.readTime}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] font-bold text-xs uppercase">
              {post.category}
            </span>
          </div>

          <div className="prose prose-lg max-w-none text-[#0D1B2A]/80 leading-relaxed space-y-4">
            <p className="text-lg font-medium text-[#0D1B2A]">{post.excerpt}</p>
            <p>
              Nội dung chuyên sâu được biên soạn từ kinh nghiệm điều trị tại Nha Khoa Đăng Khoa – Tây Ninh.
              Nếu bạn cần tư vấn cụ thể cho tình trạng của mình, hãy đặt lịch thăm khám miễn phí.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
            <Link href="/dat-lich">
              <span className="btn-gold inline-flex items-center justify-center gap-2 cursor-pointer !h-12 px-8">
                Đặt lịch tư vấn
              </span>
            </Link>
            <a href={`tel:${BRAND.hotlineRaw}`} className="btn-outline-gold inline-flex items-center justify-center gap-2 !h-12 px-8">
              <Phone className="w-4 h-4" />
              {BRAND.hotline}
            </a>
            {post.sourceUrl && (
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold text-[#0D1B2A]/60 hover:text-[#C89B3C] px-4"
              >
                Xem bài gốc
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
