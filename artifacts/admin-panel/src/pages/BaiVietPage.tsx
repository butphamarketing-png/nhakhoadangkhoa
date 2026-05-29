import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Plus, Search, Edit2, Trash2, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const posts = [
  { id: 1, title: "Implant Nha Khoa Là Gì? Những Điều Cần Biết Trước Khi Đặt Implant", category: "Implant", author: "BS. Đăng Khoa", date: "20/05/2026", views: 4820, status: "published" },
  { id: 2, title: "Niềng Răng Trong Suốt Invisalign: Ưu Nhược Điểm Và Giá Cả", category: "Chỉnh nha", author: "BS. Minh Châu", date: "18/05/2026", views: 3215, status: "published" },
  { id: 3, title: "Top 5 Lý Do Nên Chọn Răng Sứ Toàn Sứ Thay Vì Răng Sứ Kim Loại", category: "Thẩm mỹ", author: "BS. Anh Tuấn", date: "15/05/2026", views: 2980, status: "published" },
  { id: 4, title: "Cách Chăm Sóc Răng Miệng Sau Tẩy Trắng Để Giữ Màu Răng Lâu Dài", category: "Thẩm mỹ", author: "BS. Thu Hà", date: "12/05/2026", views: 1850, status: "published" },
  { id: 5, title: "Nhổ Răng Khôn Có Đau Không? Quá Trình Và Hậu Phẫu Thuật", category: "Phẫu thuật", author: "BS. Đăng Khoa", date: "10/05/2026", views: 5640, status: "draft" },
  { id: 6, title: "Chữa Tủy Răng: Khi Nào Cần Và Quy Trình Thực Hiện", category: "Điều trị", author: "BS. Thu Hà", date: "08/05/2026", views: 0, status: "draft" },
];

const catColors: Record<string, string> = {
  "Implant": "bg-amber-50 text-amber-700",
  "Chỉnh nha": "bg-blue-50 text-blue-600",
  "Thẩm mỹ": "bg-purple-50 text-purple-600",
  "Phẫu thuật": "bg-red-50 text-red-500",
  "Điều trị": "bg-emerald-50 text-emerald-600",
};

export default function BaiVietPage() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"all" | "published" | "draft">("all");

  const filtered = posts.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchTab = tab === "all" || p.status === tab;
    return matchSearch && matchTab;
  });

  return (
    <AdminLayout title="Quản lý bài viết">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">

        {/* Tabs + actions */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex bg-white border border-gray-200 rounded-xl p-1 gap-1">
            {(["all", "published", "draft"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)}
                className={`text-sm px-4 py-2 rounded-lg font-medium transition-all ${tab === t ? "bg-[#0D1B2A] text-white" : "text-gray-500 hover:text-gray-700"}`}
                data-testid={`tab-${t}`}>
                {t === "all" ? "Tất cả" : t === "published" ? "Đã đăng" : "Bản nháp"}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Tìm bài viết..." value={search} onChange={e => setSearch(e.target.value)}
                className="pl-9 h-10 rounded-xl border-gray-200 text-sm" data-testid="input-search-posts" />
            </div>
            <Button className="gold-gradient text-white border-0 rounded-xl h-10 gap-2 text-sm font-semibold whitespace-nowrap"
              data-testid="btn-add-post">
              <Plus className="w-4 h-4" /> Viết bài
            </Button>
          </div>
        </div>

        {/* Posts list */}
        <div className="space-y-3">
          {filtered.map(post => (
            <motion.div key={post.id} layout
              className="bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm hover:border-[#C89B3C]/30 hover:shadow-md transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C89B3C] to-[#8B5E20] flex-shrink-0 flex items-center justify-center text-white text-lg font-extrabold">
                {post.title.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-3 flex-wrap">
                  <h3 className="font-bold text-[#0D1B2A] text-sm leading-snug line-clamp-1 flex-1">{post.title}</h3>
                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${post.status === "published" ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"}`}>
                    {post.status === "published" ? "Đã đăng" : "Nháp"}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${catColors[post.category] || "bg-gray-50 text-gray-500"}`}>{post.category}</span>
                  <span className="text-xs text-gray-400">{post.author}</span>
                  <span className="text-xs text-gray-300">•</span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                  {post.status === "published" && (
                    <>
                      <span className="text-xs text-gray-300">•</span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Eye className="w-3 h-3" />{post.views.toLocaleString()} lượt xem
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                <button className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#0D1B2A] hover:text-white transition-colors"
                  data-testid={`btn-edit-post-${post.id}`}>
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button className="w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center text-red-400 hover:bg-red-100 transition-colors"
                  data-testid={`btn-delete-post-${post.id}`}>
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AdminLayout>
  );
}
