import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Plus, Search, Filter, CheckCircle2, Clock, XCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const appointments = [
  { id: 1, name: "Nguyễn Văn An", phone: "0901 234 567", service: "Implant", doctor: "BS. Đăng Khoa", date: "29/05/2026", time: "09:00", status: "confirmed", note: "" },
  { id: 2, name: "Trần Thị Bình", phone: "0912 345 678", service: "Niềng răng", doctor: "BS. Minh Châu", date: "29/05/2026", time: "10:30", status: "pending", note: "Lần đầu tư vấn" },
  { id: 3, name: "Lê Minh Cường", phone: "0923 456 789", service: "Tẩy trắng", doctor: "BS. Anh Tuấn", date: "29/05/2026", time: "14:00", status: "confirmed", note: "" },
  { id: 4, name: "Phạm Thị Dung", phone: "0934 567 890", service: "Răng sứ", doctor: "BS. Thu Hà", date: "29/05/2026", time: "15:30", status: "cancelled", note: "Bệnh nhân hủy" },
  { id: 5, name: "Hoàng Văn Em", phone: "0945 678 901", service: "Nhổ răng khôn", doctor: "BS. Đăng Khoa", date: "29/05/2026", time: "16:00", status: "pending", note: "" },
  { id: 6, name: "Vũ Thị Phương", phone: "0956 789 012", service: "Niềng răng", doctor: "BS. Minh Châu", date: "30/05/2026", time: "08:30", status: "confirmed", note: "Khám định kỳ" },
  { id: 7, name: "Đinh Quốc Hùng", phone: "0967 890 123", service: "Implant", doctor: "BS. Đăng Khoa", date: "30/05/2026", time: "11:00", status: "pending", note: "" },
  { id: 8, name: "Mai Thị Lan", phone: "0978 901 234", service: "Tẩy trắng", doctor: "BS. Thu Hà", date: "30/05/2026", time: "13:30", status: "confirmed", note: "" },
];

const statusConfig = {
  confirmed: { label: "Xác nhận", color: "text-emerald-600 bg-emerald-50", icon: CheckCircle2 },
  pending: { label: "Chờ duyệt", color: "text-amber-600 bg-amber-50", icon: Clock },
  cancelled: { label: "Đã hủy", color: "text-red-500 bg-red-50", icon: XCircle },
};

const FILTERS = ["Tất cả", "Chờ duyệt", "Xác nhận", "Đã hủy"];

export default function LichHenPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Tất cả");

  const filtered = appointments.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.phone.includes(search);
    const matchFilter = filter === "Tất cả"
      ? true
      : filter === "Chờ duyệt" ? a.status === "pending"
      : filter === "Xác nhận" ? a.status === "confirmed"
      : a.status === "cancelled";
    return matchSearch && matchFilter;
  });

  return (
    <AdminLayout title="Quản lý lịch hẹn">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`text-sm px-4 py-2 rounded-xl font-medium transition-all ${filter === f ? "bg-[#0D1B2A] text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-[#C89B3C]"}`}
                data-testid={`filter-${f}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Tìm tên, SĐT..." value={search} onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-10 rounded-xl border-gray-200 text-sm" data-testid="input-search-appointments" />
            </div>
            <Button className="gold-gradient text-white border-0 rounded-xl h-10 gap-2 text-sm font-semibold whitespace-nowrap"
              data-testid="btn-add-appointment">
              <Plus className="w-4 h-4" /> Thêm lịch
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/70">
                  {["Bệnh nhân", "Liên hệ", "Dịch vụ", "Bác sĩ", "Ngày hẹn", "Giờ", "Trạng thái", ""].map((h) => (
                    <th key={h} className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 py-3 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((appt) => {
                  const st = statusConfig[appt.status as keyof typeof statusConfig];
                  return (
                    <tr key={appt.id} className="hover:bg-amber-50/20 transition-colors group">
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl gold-gradient flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                            {appt.name.charAt(0)}
                          </div>
                          <span className="font-semibold text-sm text-[#0D1B2A] whitespace-nowrap">{appt.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-sm text-gray-500 whitespace-nowrap">{appt.phone}</td>
                      <td className="px-4 py-3.5 text-sm text-gray-600 whitespace-nowrap">{appt.service}</td>
                      <td className="px-4 py-3.5 text-sm text-gray-600 whitespace-nowrap">{appt.doctor}</td>
                      <td className="px-4 py-3.5 text-sm text-gray-600 whitespace-nowrap">{appt.date}</td>
                      <td className="px-4 py-3.5 text-sm font-semibold text-[#0D1B2A]">{appt.time}</td>
                      <td className="px-4 py-3.5">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${st.color}`}>
                          <st.icon className="w-3 h-3" />
                          {st.label}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-xs text-[#C89B3C] hover:underline font-semibold" data-testid={`btn-edit-${appt.id}`}>Sửa</button>
                          <span className="text-gray-300">|</span>
                          <button className="text-xs text-red-400 hover:underline font-semibold" data-testid={`btn-delete-${appt.id}`}>Xóa</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-50 bg-gray-50/30">
            <span className="text-sm text-gray-500">Hiển thị <strong>{filtered.length}</strong> / <strong>{appointments.length}</strong> lịch hẹn</span>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#C89B3C] transition-colors" data-testid="btn-prev-page">
                <ChevronLeft className="w-4 h-4 text-gray-500" />
              </button>
              <button className="w-8 h-8 rounded-lg gold-gradient text-white text-sm font-bold flex items-center justify-center">1</button>
              <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#C89B3C] transition-colors text-sm text-gray-600">2</button>
              <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#C89B3C] transition-colors" data-testid="btn-next-page">
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AdminLayout>
  );
}
