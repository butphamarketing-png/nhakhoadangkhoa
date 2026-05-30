import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Search, Clock, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

const ALL_POSTS = [
  { id: 1, href: "/kien-thuc/implant-co-dau-khong", title: "Implant nha khoa có đau không? Những điều bạn cần biết", cat: "Implant", date: "15/05/2024", readTime: "5 phút", excerpt: "Nhiều người lo ngại cấy ghép implant sẽ đau đớn. Bài viết này giải đáp toàn bộ thắc mắc của bạn về quá trình và cảm giác khi cấy implant." },
  { id: 2, href: "/kien-thuc/invisalign-vs-mac-cai", title: "Niềng răng Invisalign vs Niềng mắc cài: Nên chọn loại nào?", cat: "Niềng Răng", date: "10/05/2024", readTime: "7 phút", excerpt: "So sánh chi tiết hai phương pháp niềng răng phổ biến nhất hiện nay để giúp bạn đưa ra lựa chọn phù hợp với nhu cầu và ngân sách." },
  { id: 3, href: "/kien-thuc/cham-soc-rang-mieng", title: "Cách chăm sóc răng miệng đúng chuẩn từ chuyên gia", cat: "Chăm Sóc", date: "05/05/2024", readTime: "4 phút", excerpt: "Hướng dẫn chi tiết từ các nha sĩ hàng đầu về cách đánh răng, dùng chỉ nha khoa và thói quen hàng ngày để bảo vệ hàm răng." },
  { id: 4, href: "/kien-thuc", title: "Răng sứ Zirconia: Ưu điểm vượt trội so với răng sứ thông thường", cat: "Răng Sứ", date: "01/05/2024", readTime: "6 phút", excerpt: "Tìm hiểu tại sao răng sứ Zirconia được coi là vật liệu tốt nhất cho phục hình răng sứ hiện nay." },
  { id: 5, href: "/kien-thuc", title: "Tẩy trắng răng tại nhà và tại phòng khám: Cái nào tốt hơn?", cat: "Tẩy Trắng", date: "28/04/2024", readTime: "5 phút", excerpt: "Phân tích ưu nhược điểm của hai phương pháp để bạn có lựa chọn phù hợp nhất." },
  { id: 6, href: "/kien-thuc", title: "Khi nào cần nhổ răng khôn? 5 dấu hiệu cần lưu ý", cat: "Nhổ Răng", date: "22/04/2024", readTime: "4 phút", excerpt: "Không phải ai cũng cần nhổ răng khôn. Hãy tìm hiểu các dấu hiệu cho thấy bạn cần gặp nha sĩ ngay." },
];

const CATS = ["Tất cả", "Implant", "Niềng Răng", "Chăm Sóc", "Răng Sứ", "Tẩy Trắng", "Nhổ Răng"];

export default function KienThucPage() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("Tất cả");

  const filtered = ALL_POSTS.filter((p) => {
    const matchCat = activeCat === "Tất cả" || p.cat === activeCat;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

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
        subtitle="Cập nhật kiến thức chuyên môn từ đội ngũ bác sĩ Nha Khoa Đăng Khoa"
      />

      <section className="section-padding section-cream section-texture border-b border-[#C89B3C]/10">
        <div className="container-custom">
          <div className="relative max-w-lg mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0D1B2A]/40" />
            <Input
              placeholder="Tìm kiếm bài viết..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 rounded-full bg-white h-12 border-0 shadow-lg"
              data-testid="input-blog-search"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-10 p-1.5 rounded-full bg-white w-fit border border-[#C89B3C]/15 shadow-sm">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
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
              {filtered.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  data-testid={`blog-card-${post.id}`}
                >
                  <Link href={post.href}>
                    <div className="card-luxury overflow-hidden !p-0 !translate-y-0 hover:!translate-y-[-8px] group cursor-pointer h-full flex flex-col">
                      <div className="h-1.5 gold-gradient" />
                      <div className="p-6 flex flex-col flex-1">
                        <span className="inline-block text-[10px] font-bold text-[#C89B3C] uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full bg-[#C89B3C]/10 w-fit">
                          {post.cat}
                        </span>
                        <h3 className="font-display font-bold text-[#0D1B2A] text-base mb-2 line-clamp-2 leading-snug group-hover:text-[#C89B3C] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-[#0D1B2A]/55 text-sm mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-[#0D1B2A]/40 pt-4 border-t border-black/[0.05]">
                          <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</div>
                          <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</div>
                        </div>
                        <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-[#C89B3C] uppercase tracking-wide group-hover:gap-2 transition-all">
                          Đọc thêm <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {filtered.length > 0 && (
            <div className="flex justify-center gap-2 mt-10">
              {[1, 2, 3].map((p) => (
                <Button
                  key={p}
                  variant={p === 1 ? "default" : "outline"}
                  className={p === 1 ? "gold-gradient text-white border-0 w-10 h-10 rounded-full p-0" : "w-10 h-10 rounded-full p-0 border-[#C89B3C]/30 text-[#0D1B2A]"}
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
