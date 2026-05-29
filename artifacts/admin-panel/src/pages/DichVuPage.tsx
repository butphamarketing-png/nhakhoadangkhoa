import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, ToggleLeft, ToggleRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { id: 1, name: "Implant Nha Khoa", category: "Phục hình", price: "15.000.000 – 35.000.000", duration: "60–90 phút", bookings: 142, active: true, icon: "🦷" },
  { id: 2, name: "Niềng Răng Mắc Cài", category: "Chỉnh nha", price: "20.000.000 – 45.000.000", duration: "60 phút", bookings: 98, active: true, icon: "✨" },
  { id: 3, name: "Răng Sứ Thẩm Mỹ", category: "Thẩm mỹ", price: "3.500.000 – 8.000.000", duration: "90–120 phút", bookings: 215, active: true, icon: "💎" },
  { id: 4, name: "Tẩy Trắng Răng", category: "Thẩm mỹ", price: "1.500.000 – 3.500.000", duration: "45–60 phút", bookings: 310, active: true, icon: "⚡" },
  { id: 5, name: "Nội Nha (Chữa Tủy)", category: "Điều trị", price: "500.000 – 2.000.000", duration: "60–90 phút", bookings: 87, active: true, icon: "🔬" },
  { id: 6, name: "Nhổ Răng Khôn", category: "Phẫu thuật", price: "500.000 – 2.500.000", duration: "30–60 phút", bookings: 178, active: false, icon: "🏥" },
];

const categories = ["Tất cả", "Phục hình", "Chỉnh nha", "Thẩm mỹ", "Điều trị", "Phẫu thuật"];

export default function DichVuPage() {
  const [activeList, setActiveList] = useState(services);
  const [cat, setCat] = useState("Tất cả");

  const toggle = (id: number) =>
    setActiveList(prev => prev.map(s => s.id === id ? { ...s, active: !s.active } : s));

  const filtered = cat === "Tất cả" ? activeList : activeList.filter(s => s.category === cat);

  return (
    <AdminLayout title="Quản lý dịch vụ">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">

        {/* Header actions */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`text-sm px-4 py-2 rounded-xl font-medium transition-all ${cat === c ? "bg-[#0D1B2A] text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-[#C89B3C]"}`}
                data-testid={`filter-cat-${c}`}>
                {c}
              </button>
            ))}
          </div>
          <Button className="gold-gradient text-white border-0 rounded-xl h-10 gap-2 text-sm font-semibold"
            data-testid="btn-add-service">
            <Plus className="w-4 h-4" /> Thêm dịch vụ
          </Button>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map(s => (
            <motion.div key={s.id} layout
              className={`bg-white rounded-2xl p-5 border shadow-sm transition-all group ${s.active ? "border-gray-100 hover:border-[#C89B3C]/30 hover:shadow-md" : "border-gray-100 opacity-60"}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-2xl">{s.icon}</div>
                  <div>
                    <div className="font-extrabold text-[#0D1B2A] text-sm leading-tight">{s.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{s.category}</div>
                  </div>
                </div>
                <button onClick={() => toggle(s.id)} className="mt-1" data-testid={`btn-toggle-${s.id}`}>
                  {s.active
                    ? <ToggleRight className="w-8 h-8 text-[#C89B3C]" />
                    : <ToggleLeft className="w-8 h-8 text-gray-300" />}
                </button>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Giá</span>
                  <span className="font-semibold text-[#C89B3C]">{s.price} ₫</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Thời gian</span>
                  <span className="text-gray-600">{s.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Lượt đặt</span>
                  <span className="font-bold text-[#0D1B2A]">{s.bookings}</span>
                </div>
              </div>

              <div className="h-px bg-gray-50 mb-4" />

              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-xl bg-gray-50 text-gray-600 hover:bg-[#0D1B2A] hover:text-white transition-colors"
                  data-testid={`btn-edit-service-${s.id}`}>
                  <Edit2 className="w-3.5 h-3.5" /> Chỉnh sửa
                </button>
                <button className="flex items-center justify-center w-10 py-2 text-xs rounded-xl bg-red-50 text-red-400 hover:bg-red-100 transition-colors"
                  data-testid={`btn-delete-service-${s.id}`}>
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
