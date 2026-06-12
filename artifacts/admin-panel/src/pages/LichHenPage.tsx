import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Search, CheckCircle2, Clock, XCircle, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import type { AppointmentRow } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

const statusConfig = {
  confirmed: { label: "Xác nhận", color: "text-emerald-600 bg-emerald-50", icon: CheckCircle2 },
  pending: { label: "Chờ duyệt", color: "text-amber-600 bg-amber-50", icon: Clock },
  cancelled: { label: "Đã hủy", color: "text-red-500 bg-red-50", icon: XCircle },
};

const FILTERS = ["Tất cả", "Chờ duyệt", "Xác nhận", "Đã hủy"] as const;

export default function LichHenPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tất cả");
  const { toast } = useToast();
  const qc = useQueryClient();

  const { data: appointments = [], isLoading, isError, error, refetch } = useQuery({
    queryKey: ["appointments"],
    queryFn: () => apiFetch<AppointmentRow[]>("/api/appointments"),
    retry: 1,
    staleTime: 30_000,
  });

  const updateStatus = useMutation({
    mutationFn: ({ id, status }: { id: number; status: AppointmentRow["status"] }) =>
      apiFetch(`/api/appointments/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["appointments"] });
      qc.invalidateQueries({ queryKey: ["admin-stats"] });
    },
    onError: (e: Error) => toast({ title: "Lỗi", description: e.message, variant: "destructive" }),
  });

  const remove = useMutation({
    mutationFn: (id: number) =>
      apiFetch(`/api/appointments/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["appointments"] });
      toast({ title: "Đã xóa lịch hẹn" });
    },
    onError: (e: Error) => toast({ title: "Lỗi", description: e.message, variant: "destructive" }),
  });

  const filtered = appointments.filter((a) => {
    const matchSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) || a.phone.includes(search);
    const matchFilter =
      filter === "Tất cả"
        ? true
        : filter === "Chờ duyệt"
          ? a.status === "pending"
          : filter === "Xác nhận"
            ? a.status === "confirmed"
            : a.status === "cancelled";
    return matchSearch && matchFilter;
  });

  return (
    <AdminLayout title="Quản lý lịch hẹn">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-sm px-4 py-2 rounded-xl font-medium transition-all ${filter === f ? "bg-[#0D1B2A] text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-[#C89B3C]"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Tìm tên, SĐT..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-10 rounded-xl border-gray-200 text-sm"
            />
          </div>
        </div>

        {isError && (
          <div className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3 space-y-2">
            <p>{(error as Error).message}</p>
            <p className="text-red-500/80 text-xs">
              Nếu báo lỗi database: kiểm tra SUPABASE_PROJECT_REF + SUPABASE_DB_PASSWORD trên Vercel, hoặc mở /api/healthz/db.
            </p>
            <button type="button" onClick={() => refetch()} className="text-xs font-semibold underline">
              Thử tải lại
            </button>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/70">
                  {["Bệnh nhân", "Liên hệ", "Dịch vụ", "Ngày hẹn", "Giờ", "Ghi chú", "Trạng thái", ""].map((h) => (
                    <th
                      key={h}
                      className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 py-3 whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {isLoading && !isError && (
                  <tr>
                    <td colSpan={8} className="px-4 py-8 text-center text-sm text-gray-400">
                      Đang tải...
                    </td>
                  </tr>
                )}
                {!isLoading && !isError && filtered.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-4 py-8 text-center text-sm text-gray-400">
                      Chưa có lịch hẹn từ website
                    </td>
                  </tr>
                )}
                {filtered.map((appt) => {
                  const st = statusConfig[appt.status];
                  return (
                    <tr key={appt.id} className="hover:bg-amber-50/20 transition-colors group">
                      <td className="px-4 py-3.5 font-semibold text-sm text-[#0D1B2A]">{appt.name}</td>
                      <td className="px-4 py-3.5 text-sm text-gray-500">{appt.phone}</td>
                      <td className="px-4 py-3.5 text-sm text-gray-600">{appt.service}</td>
                      <td className="px-4 py-3.5 text-sm text-gray-600">{appt.date || "—"}</td>
                      <td className="px-4 py-3.5 text-sm font-semibold">{appt.time || "—"}</td>
                      <td className="px-4 py-3.5 text-sm text-gray-500 max-w-[160px] truncate">
                        {appt.note || "—"}
                      </td>
                      <td className="px-4 py-3.5">
                        <select
                          value={appt.status}
                          onChange={(e) =>
                            updateStatus.mutate({
                              id: appt.id,
                              status: e.target.value as AppointmentRow["status"],
                            })
                          }
                          className={`text-xs font-semibold px-2 py-1 rounded-lg border-0 ${st.color}`}
                        >
                          <option value="pending">Chờ duyệt</option>
                          <option value="confirmed">Xác nhận</option>
                          <option value="cancelled">Đã hủy</option>
                        </select>
                      </td>
                      <td className="px-4 py-3.5">
                        <button
                          type="button"
                          onClick={() => {
                            if (confirm("Xóa lịch hẹn này?")) remove.mutate(appt.id);
                          }}
                          className="text-red-400 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3.5 border-t border-gray-50 bg-gray-50/30 text-sm text-gray-500">
            Hiển thị <strong>{filtered.length}</strong> / <strong>{appointments.length}</strong> lịch hẹn
          </div>
        </div>
      </motion.div>
    </AdminLayout>
  );
}
