import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Calendar, Users, Clock, CheckCircle2, XCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { apiFetch } from "@/lib/api";
import type { AppointmentRow } from "@/lib/types";

type Stats = {
  totals: { total: number; pending: number; confirmed: number; cancelled: number };
  todayCount: number;
  recent: AppointmentRow[];
};

const statusConfig = {
  confirmed: { label: "Xác nhận", color: "text-emerald-600 bg-emerald-50", icon: CheckCircle2 },
  pending: { label: "Chờ duyệt", color: "text-amber-600 bg-amber-50", icon: Clock },
  cancelled: { label: "Hủy", color: "text-red-500 bg-red-50", icon: XCircle },
};

export default function DashboardPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: () => apiFetch<Stats>("/api/admin/stats"),
  });

  const STATS = [
    { label: "Lịch hẹn hôm nay", value: String(data?.todayCount ?? "—"), icon: Calendar, bg: "bg-amber-50", color: "#C89B3C" },
    { label: "Tổng lịch hẹn", value: String(data?.totals.total ?? "—"), icon: Users, bg: "bg-slate-50", color: "#0D1B2A" },
    { label: "Chờ duyệt", value: String(data?.totals.pending ?? "—"), icon: Clock, bg: "bg-yellow-50", color: "#d97706" },
    { label: "Đã xác nhận", value: String(data?.totals.confirmed ?? "—"), icon: CheckCircle2, bg: "bg-emerald-50", color: "#16a34a" },
  ];

  return (
    <AdminLayout title="Tổng quan">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-4`}>
                <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>
              <div className="text-2xl font-extrabold text-[#0D1B2A] mb-1">{isLoading ? "…" : stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
            <h2 className="font-extrabold text-[#0D1B2A] text-base">Lịch hẹn gần đây</h2>
            <Link href="/lich-hen" className="text-xs text-[#C89B3C] hover:underline font-semibold">
              Xem tất cả →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/60">
                  {["Bệnh nhân", "Dịch vụ", "SĐT", "Trạng thái"].map((h) => (
                    <th key={h} className="text-left text-xs font-semibold text-gray-400 uppercase px-6 py-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {(data?.recent ?? []).map((appt) => {
                  const st = statusConfig[appt.status];
                  return (
                    <tr key={appt.id}>
                      <td className="px-6 py-3.5 font-semibold text-sm">{appt.name}</td>
                      <td className="px-4 py-3.5 text-sm text-gray-600">{appt.service}</td>
                      <td className="px-4 py-3.5 text-sm text-gray-500">{appt.phone}</td>
                      <td className="px-4 py-3.5">
                        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${st.color}`}>
                          <st.icon className="w-3 h-3" />
                          {st.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
                {!isLoading && !data?.recent?.length && (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-sm text-gray-400">
                      Chưa có lịch hẹn
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </AdminLayout>
  );
}
