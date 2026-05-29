import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Search, Clock, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ALL_POSTS = [
  { id: 1, title: "Implant nha khoa có đau không? Những điều bạn cần biết", cat: "Implant", date: "15/05/2024", readTime: "5 phút", color: "from-amber-400 to-orange-500", excerpt: "Nhiều người lo ngại cấy ghép implant sẽ đau đớn. Bài viết này giải đáp toàn bộ thắc mắc của bạn về quá trình và cảm giác khi cấy implant." },
  { id: 2, title: "Niềng răng Invisalign vs Niềng mắc cài: Nên chọn loại nào?", cat: "Niềng Răng", date: "10/05/2024", readTime: "7 phút", color: "from-blue-400 to-indigo-500", excerpt: "So sánh chi tiết hai phương pháp niềng răng phổ biến nhất hiện nay để giúp bạn đưa ra lựa chọn phù hợp với nhu cầu và ngân sách." },
  { id: 3, title: "Cách chăm sóc răng miệng đúng chuẩn từ chuyên gia", cat: "Chăm Sóc", date: "05/05/2024", readTime: "4 phút", color: "from-emerald-400 to-teal-500", excerpt: "Hướng dẫn chi tiết từ các nha sĩ hàng đầu về cách đánh răng, dùng chỉ nha khoa và thói quen hàng ngày để bảo vệ hàm răng." },
  { id: 4, title: "Răng sứ Zirconia: Ưu điểm vượt trội so với răng sứ thông thường", cat: "Răng Sứ", date: "01/05/2024", readTime: "6 phút", color: "from-purple-400 to-violet-500", excerpt: "Tìm hiểu tại sao răng sứ Zirconia được coi là vật liệu tốt nhất cho phục hình răng sứ hiện nay." },
  { id: 5, title: "Tẩy trắng răng tại nhà và tại phòng khám: Cái nào tốt hơn?", cat: "Tẩy Trắng", date: "28/04/2024", readTime: "5 phút", color: "from-yellow-400 to-amber-500", excerpt: "Phân tích ưu nhược điểm của hai phương pháp để bạn có lựa chọn phù hợp nhất." },
  { id: 6, title: "Khi nào cần nhổ răng khôn? 5 dấu hiệu cần lưu ý", cat: "Nhổ Răng", date: "22/04/2024", readTime: "4 phút", color: "from-red-400 to-rose-500", excerpt: "Không phải ai cũng cần nhổ răng khôn. Hãy tìm hiểu các dấu hiệu cho thấy bạn cần gặp nha sĩ ngay." },
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
      <div className="navy-gradient py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Kiến thức nha khoa</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Kiến Thức <span className="text-[#C89B3C]">Nha Khoa</span>
          </h1>
          <div className="relative max-w-lg mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Tìm kiếm bài viết..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 rounded-xl bg-white h-12"
              data-testid="input-blog-search"
            />
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 mb-8">
            {CATS.map((c) => (
              <button key={c} onClick={() => setActiveCat(c)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeCat === c ? "gold-gradient text-white" : "bg-gray-100 text-gray-600 hover:bg-amber-50 hover:text-[#C89B3C]"}`}
                data-testid={`filter-cat-${c}`}>
                {c}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">Không tìm thấy bài viết phù hợp.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <motion.div key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                  data-testid={`blog-card-${post.id}`}
                >
                  <div className={`h-44 bg-gradient-to-br ${post.color} relative flex items-end p-4`}>
                    <span className="bg-white/90 text-[#0D1B2A] text-xs font-bold px-3 py-1 rounded-full">{post.cat}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#0D1B2A] text-base mb-2 line-clamp-2 leading-snug">{post.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</div>
                      <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <Link href="/kien-thuc">
                        <span className="text-[#C89B3C] font-semibold text-sm hover:underline cursor-pointer" data-testid={`link-read-${post.id}`}>
                          Đọc thêm →
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filtered.length > 0 && (
            <div className="flex justify-center gap-2 mt-10">
              {[1, 2, 3].map((p) => (
                <Button key={p} variant={p === 1 ? "default" : "outline"}
                  className={p === 1 ? "gold-gradient text-white border-0 w-10 h-10 rounded-xl p-0" : "w-10 h-10 rounded-xl p-0 border-gray-200"}
                  data-testid={`page-${p}`}>
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
