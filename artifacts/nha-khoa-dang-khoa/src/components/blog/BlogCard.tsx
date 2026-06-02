import { Link } from "wouter";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";
import MediaFrame from "@/components/ui/MediaFrame";

type BlogCardProps = {
  post: BlogPost;
  className?: string;
};

export default function BlogCard({ post, className = "" }: BlogCardProps) {
  return (
    <Link href={post.href}>
      <article
        className={`card-luxury overflow-hidden !p-0 !translate-y-0 hover:!translate-y-[-6px] group cursor-pointer h-full flex flex-col bg-white ${className}`}
      >
        <MediaFrame src={post.image} alt={post.title} aspect="video" />
        <div className="p-5 flex flex-col flex-1">
          <span className="inline-block text-[10px] font-bold text-[#C89B3C] uppercase tracking-wider mb-2 px-2.5 py-1 rounded-full bg-[#C89B3C]/10 w-fit">
            {post.category}
          </span>
          <h3 className="font-display font-bold text-[#0D1B2A] text-base leading-snug mb-2 line-clamp-2 group-hover:text-[#C89B3C] transition-colors">
            {post.title}
          </h3>
          <p className="text-[#0D1B2A]/60 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-black/[0.05] text-xs text-[#0D1B2A]/45">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-[#C89B3C] uppercase group-hover:gap-2 transition-all">
            Đọc thêm
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </article>
    </Link>
  );
}
