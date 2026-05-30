import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";
import SectionTitle from "./SectionTitle";
import { fadeUp } from "@/lib/motion";

export default function KnowledgeSection() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="section-padding section-cream section-texture">
      <div className="container-custom container-narrow">
        <SectionTitle label="Blog" subtitle="Cập nhật kiến thức nha khoa từ chuyên gia">
          KIẾN THỨC NHA KHOA
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <Link href={post.href}>
                <div className="card-luxury overflow-hidden !p-0 !translate-y-0 hover:!translate-y-[-8px] group cursor-pointer h-full flex flex-col">
                  <div className="h-1.5 gold-gradient" />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block text-[10px] font-bold text-[#C89B3C] uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full bg-[#C89B3C]/10 w-fit">
                      {post.category}
                    </span>
                    <h3 className="font-display font-bold text-[#0D1B2A] text-base md:text-lg leading-snug mb-3 line-clamp-2 group-hover:text-[#C89B3C] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#0D1B2A]/60 text-sm leading-relaxed line-clamp-3 mb-5 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-black/[0.05]">
                      <span className="text-xs text-[#0D1B2A]/45">{post.date} · {post.readTime}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C89B3C] uppercase tracking-wide group-hover:gap-2 transition-all">
                        Đọc thêm
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/kien-thuc">
            <span className="btn-outline-gold inline-flex items-center !h-11 !text-sm cursor-pointer gap-2">
              <BookOpen className="w-4 h-4" />
              Xem thêm bài viết
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
