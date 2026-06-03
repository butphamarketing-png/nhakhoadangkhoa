import { Link } from "wouter";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useBlogPosts } from "@/lib/use-blog-posts";
import SectionTitle from "./SectionTitle";
import { fadeUp } from "@/lib/motion";
import BlogCard from "@/components/blog/BlogCard";

export default function KnowledgeSection() {
  const { posts } = useBlogPosts();
  const slice = posts.slice(0, 3);

  return (
    <section className="section-padding section-cream section-texture">
      <div className="container-custom container-narrow">
        <SectionTitle label="Blog" subtitle="Cập nhật kiến thức nha khoa từ chuyên gia">
          KIẾN THỨC NHA KHOA
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {slice.map((post, i) => (
            <motion.div
              key={post.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
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
