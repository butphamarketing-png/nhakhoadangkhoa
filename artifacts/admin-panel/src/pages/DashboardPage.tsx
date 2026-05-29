import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { Calendar, Users, DollarSign, TrendingUp, Star, CheckCircle2, Clock, XCircle } from "lucide-react";

const areaData = [
  { month: "T1", doanhThu: 120, lichHen: 45 },
  { month: "T2", doanhThu: 145, lichHen: 52 },
  { month: "T3", doanhThu: 132, lichHen: 48 },
  { month: "T4", doanhThu: 178, lichHen: 64 },
  { month: "T5", doanhThu: 190, lichHen: 70 },
  { month: "T6", doanhThu: 215, lichHen: 82 },
  { month: "T7", doanhThu: 248, lichHen: 91 },
  { month: "T8", doanhThu: 220, lichHen: 78 },
  { month: "T9", doanhThu: 262, lichHen: 95 },
  { month: "T10", doanhThu: 295, lichHen: 108 },
  { month: "T11", doanhThu: 310, lichHen: 115 },
  { month: "T12", doanhThu: 348, lichHen: 130 },
];

const serviceData = [
  { name: "Implant", value: 35 },
  { name: "Niềng răng", value: 28 },
  { name: "Răng sứ", value: 20 },
  { name: "Tẩy trắng", value: 10 },
  { name: "Khác", value: 7 },
];

const PIE_COLORS = ["#C89B3C", "#0D1B2A", "#E8C46A", "#8B5E20", "#D4A853"];

const recentAppointments = [
  { id: 1, name: "Nguyễn Văn An", service: "Implant", doctor: "BS. Đăng Khoa", time: "09:00", status: "confirmed" },
  { id: 2, name: "Trần Thị Bình", service: "Niềng răng", doctor: "BS. Minh Châu", time: "10:30", status: "pending" },
  { id: 3, name: "Lê Minh Cường", service: "Tẩy trắng", doctor: "BS. Anh Tuấn", time: "14:00", status: "confirmed" },
  { id: 4, name: "Phạm Thị Dung", service: "Răng sứ", doctor: "BS. Thu Hà", time: "15:30", status: "cancelled" },
  { id: 5, name: "Hoàng Văn Em", service: "Nhổ răng khôn", doctor: "BS. Đăng Khoa", time: "16:00", status: "pending" },
];

const statusConfig = {
  confirmed: { label: "Xác nhận", color: "text-emerald-600 bg-emerald-50", icon: CheckCircle2 },
  pending: { label: "Chờ duyệt", color: "text-amber-600 bg-amber-50", icon: Clock },
  cancelled: { label: "Hủy", color: "text-red-500 bg-red-50", icon: XCircle },
};

const STATS = [
  { label: "Lịch hẹn hôm nay", value: "24", change: "+3", icon: Calendar, color: "#C89B3C", bg: "bg-amber-50" },
  { label: "Bệnh nhân mới", value: "186", change: "+12%", icon: Users, color: "#0D1B2A", bg: "bg-slate-50" },
  { label: "Doanh thu tháng", value: "348M", change: "+18%", icon: DollarSign, color: "#16a34a", bg: "bg-emerald-50" },
  { label: "Đánh giá trung bình", value: "4.9 ★", change: "+0.1", icon: Star, color: "#d97706", bg: "bg-yellow-50" },
];

const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function DashboardPage() {
  return (
    <AdminLayout title="Tổng quan">
      <motion.div
        initial="hidden" animate="show"
        variants={{ show: { transition: { staggerChildren: 0.07 } } }}
        className="space-y-6"
      >
        {/* Stats row */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div key={i} variants={fade} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <span className="text-xs font-semibold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">{stat.change}</span>
              </div>
              <div className="text-2xl font-extrabold text-[#0D1B2A] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {/* Area chart */}
          <motion.div variants={fade} className="xl:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="font-extrabold text-[#0D1B2A] text-base">Doanh thu & Lịch hẹn</h2>
                <p className="text-sm text-gray-400">12 tháng gần nhất</p>
              </div>
              <div className="flex items-center gap-1 bg-gray-50 rounded-xl p-1">
                {["Năm", "Quý", "Tháng"].map((t) => (
                  <button key={t} className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${t === "Năm" ? "bg-white shadow-sm text-[#0D1B2A]" : "text-gray-400 hover:text-gray-600"}`}>{t}</button>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={areaData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradGold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C89B3C" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#C89B3C" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gradNavy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0D1B2A" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#0D1B2A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 12 }}
                  formatter={(val: number, name: string) => [
                    name === "doanhThu" ? `${val}M ₫` : `${val} lịch`,
                    name === "doanhThu" ? "Doanh thu" : "Lịch hẹn"
                  ]}
                />
                <Area type="monotone" dataKey="doanhThu" stroke="#C89B3C" strokeWidth={2.5} fill="url(#gradGold)" dot={false} />
                <Area type="monotone" dataKey="lichHen" stroke="#0D1B2A" strokeWidth={2} fill="url(#gradNavy)" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Pie chart */}
          <motion.div variants={fade} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h2 className="font-extrabold text-[#0D1B2A] text-base mb-1">Dịch vụ phổ biến</h2>
            <p className="text-sm text-gray-400 mb-4">Phân bổ tháng này</p>
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie data={serviceData} cx="50%" cy="50%" innerRadius={45} outerRadius={72} dataKey="value" paddingAngle={3}>
                  {serviceData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 10, border: "none", fontSize: 12 }} formatter={(v) => [`${v}%`, ""]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-2">
              {serviceData.map((s, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: PIE_COLORS[i] }} />
                    <span className="text-gray-600 text-xs">{s.name}</span>
                  </div>
                  <span className="font-semibold text-[#0D1B2A] text-xs">{s.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent appointments */}
        <motion.div variants={fade} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
            <h2 className="font-extrabold text-[#0D1B2A] text-base">Lịch hẹn hôm nay</h2>
            <a href="/lich-hen" className="text-xs text-[#C89B3C] hover:underline font-semibold">Xem tất cả →</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/60">
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-6 py-3">Bệnh nhân</th>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Dịch vụ</th>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Bác sĩ</th>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Giờ</th>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentAppointments.map((appt) => {
                  const st = statusConfig[appt.status as keyof typeof statusConfig];
                  return (
                    <tr key={appt.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#C89B3C] to-[#8B5E20] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                            {appt.name.charAt(0)}
                          </div>
                          <span className="font-semibold text-sm text-[#0D1B2A]">{appt.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-sm text-gray-600">{appt.service}</td>
                      <td className="px-4 py-3.5 text-sm text-gray-600">{appt.doctor}</td>
                      <td className="px-4 py-3.5 text-sm font-semibold text-[#0D1B2A]">{appt.time}</td>
                      <td className="px-4 py-3.5">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${st.color}`}>
                          <st.icon className="w-3 h-3" />
                          {st.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </AdminLayout>
  );
}
