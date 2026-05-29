import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Plus, Search, Star, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const customers = [
  { id: 1, name: "Nguyễn Văn An", phone: "0901 234 567", email: "an.nguyen@gmail.com", visits: 8, lastVisit: "15/05/2026", totalSpent: "45.000.000", rating: 5, tag: "VIP" },
  { id: 2, name: "Trần Thị Bình", phone: "0912 345 678", email: "binh.tran@gmail.com", visits: 3, lastVisit: "20/05/2026", totalSpent: "12.500.000", rating: 5, tag: "Thường" },
  { id: 3, name: "Lê Minh Cường", phone: "0923 456 789", email: "cuong.le@gmail.com", visits: 12, lastVisit: "01/05/2026", totalSpent: "68.000.000", rating: 5, tag: "VIP" },
  { id: 4, name: "Phạm Thị Dung", phone: "0934 567 890", email: "dung.pham@gmail.com", visits: 1, lastVisit: "28/05/2026", totalSpent: "3.500.000", rating: 4, tag: "Mới" },
  { id: 5, name: "Hoàng Văn Em", phone: "0945 678 901", email: "em.hoang@gmail.com", visits: 5, lastVisit: "10/05/2026", totalSpent: "22.000.000", rating: 5, tag: "Thường" },
  { id: 6, name: "Vũ Thị Phương", phone: "0956 789 012", email: "phuong.vu@gmail.com", visits: 15, lastVisit: "25/05/2026", totalSpent: "95.000.000", rating: 5, tag: "VIP" },
  { id: 7, name: "Đinh Quốc Hùng", phone: "0967 890 123", email: "hung.dinh@gmail.com", visits: 2, lastVisit: "22/05/2026", totalSpent: "8.000.000", rating: 4, tag: "Thường" },
  { id: 8, name: "Mai Thị Lan", phone: "0978 901 234", email: "lan.mai@gmail.com", visits: 7, lastVisit: "18/05/2026", totalSpent: "38.500.000", rating: 5, tag: "VIP" },
];

const tagStyles: Record<string, string> = {
  VIP: "bg-amber-50 text-amber-700 border border-amber-200",
  Thường: "bg-blue-50 text-blue-600",
  Mới: "bg-emerald-50 text-emerald-600",
};

export default function KhachHangPage() {
  const [search, setSearch] = useState("");
  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search)
  );

  return (
    <AdminLayout title="Quản lý khách hàng">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">

        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Tổng khách hàng", value: "1.284", color: "#C89B3C" },
            { label: "Khách VIP", value: "187", color: "#d97706" },
            { label: "Mới tháng này", value: "48", color: "#16a34a" },
            { label: "Hoạt động hôm nay", value: "24", color: "#0D1B2A" },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm">
              <div className="text-2xl font-extrabold mb-1" style={{ color: s.color }}>{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Tìm khách hàng..." value={search} onChange={e => setSearch(e.target.value)}
              className="pl-9 h-10 rounded-xl border-gray-200 text-sm" data-testid="input-search-customers" />
          </div>
          <Button className="gold-gradient text-white border-0 rounded-xl h-10 gap-2 text-sm font-semibold"
            data-testid="btn-add-customer">
            <Plus className="w-4 h-4" /> Thêm khách
          </Button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((c) => (
            <motion.div key={c.id} layout
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#C89B3C]/30 hover:shadow-md transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl gold-gradient flex items-center justify-center text-white font-bold flex-shrink-0">
                    {c.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#0D1B2A] text-sm">{c.name}</div>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < c.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${tagStyles[c.tag]}`}>{c.tag}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Lượt thăm</div>
                  <div className="font-bold text-[#0D1B2A]">{c.visits}</div>
                </div>
                <div className="bg-amber-50 rounded-xl p-3">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Chi tiêu</div>
                  <div className="font-bold text-[#C89B3C] text-sm">{c.totalSpent} ₫</div>
                </div>
              </div>
              <div className="space-y-1.5 text-xs text-gray-500">
                <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-gray-400" />{c.phone}</div>
                <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-gray-400" />{c.email}</div>
              </div>
              <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex-1 py-1.5 text-xs font-semibold rounded-lg bg-[#0D1B2A] text-white hover:bg-[#0D1B2A]/90 transition-colors" data-testid={`btn-view-customer-${c.id}`}>Xem hồ sơ</button>
                <button className="flex-1 py-1.5 text-xs font-semibold rounded-lg border border-[#C89B3C] text-[#C89B3C] hover:bg-amber-50 transition-colors" data-testid={`btn-book-customer-${c.id}`}>Đặt lịch</button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AdminLayout>
  );
}
