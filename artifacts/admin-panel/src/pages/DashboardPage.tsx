import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  CheckCircle2,
  RefreshCw,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { apiFetch } from "@/lib/api";
import type { AppointmentRow } from "@/lib/types";
import {
  SITE_CONTENT_KEYS,
  CMS_LABELS,
  CMS_ROUTES,
  type SiteContentKey,
} from "@/lib/cms-keys";

type Stats = {
  totals: { total: number; pending: number; confirmed: number; cancelled: number };
  todayCount: number;
  recent: AppointmentRow[];
};

export default function DashboardPage() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: () => apiFetch<Stats>("/api/admin/stats"),
  });

  const { data: contentStatus } = useQuery({
    queryKey: ["content-status"],
    queryFn: () => apiFetch<Record<string, boolean>>("/api/admin/content-status"),
  });

  const pending = stats?.totals.pending ?? 0;

  const STAT_CARDS = [
    { label: "Lịch hẹn hôm nay", value: stats?.todayCount, href: "/lich-hen" },
    { label: "Chờ duyệt", value: pending, href: "/lich-hen", highlight: pending > 0 },
    { label: "Đã xác nhận", value: stats?.totals.confirmed },
    { label: "Tổng lịch hẹn", value: stats?.totals.total },
  ];

  const contentKeys = SITE_CONTENT_KEYS.filter((k) => k !== "pricing");

  return (
    <AdminLayout title="Tổng quan">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        {pending > 0 && (
          <Link href="/lich-hen">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex items-center gap-3 hover:bg-amber-100/80 transition-colors">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <p className="text-sm text-amber-900 flex-1">
                <strong>{pending}</strong> lịch hẹn đang chờ duyệt — bấm để xử lý
              </p>
              <ArrowRight className="w-4 h-4 text-amber-600" />
            </div>
          </Link>
        )}

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {STAT_CARDS.map((stat, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-5 shadow-sm border ${
                stat.highlight ? "border-amber-300 ring-1 ring-amber-200" : "border-gray-100"
              }`}
            >
              <div className="text-2xl font-extrabold text-[#0D1B2A] mb-1">
                {isLoading ? "…" : (stat.value ?? "—")}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
              {stat.href && (
                <Link href={stat.href} className="text-xs text-[#C89B3C] font-semibold mt-2 inline-block hover:underline">
                  Chi tiết →
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-extrabold text-[#0D1B2A]">Trạng thái nội dung</h2>
              <Link href="/dong-bo" className="text-xs text-[#C89B3C] font-semibold hover:underline inline-flex items-center gap-1">
                <RefreshCw className="w-3 h-3" />
                Đồng bộ
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {contentKeys.map((key) => {
                const ok = contentStatus?.[key];
                return (
                  <Link
                    key={key}
                    href={CMS_ROUTES[key as SiteContentKey]}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 hover:border-[#C89B3C]/40 text-sm transition-colors"
                  >
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${ok ? "bg-emerald-500" : "bg-gray-300"}`}
                    />
                    <span className="text-gray-700 truncate">{CMS_LABELS[key as SiteContentKey]}</span>
                  </Link>
                );
              })}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Chấm xanh = đã có trên Supabase. Chưa có → vào <strong>Đồng bộ website</strong>.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <h2 className="font-extrabold text-[#0D1B2A] text-sm">Lịch hẹn mới</h2>
              <Link href="/lich-hen" className="text-xs text-[#C89B3C] font-semibold hover:underline">
                Tất cả →
              </Link>
            </div>
            <ul className="divide-y divide-gray-50 max-h-[280px] overflow-y-auto">
              {(stats?.recent ?? []).map((appt) => (
                <li key={appt.id} className="px-5 py-3 flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm truncate">{appt.name}</div>
                    <div className="text-xs text-gray-400 truncate">{appt.service}</div>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      appt.status === "pending"
                        ? "bg-amber-50 text-amber-700"
                        : appt.status === "confirmed"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {appt.status === "pending" ? "Chờ" : appt.status === "confirmed" ? "OK" : "Hủy"}
                  </span>
                </li>
              ))}
              {!isLoading && !stats?.recent?.length && (
                <li className="px-5 py-8 text-center text-sm text-gray-400">Chưa có lịch hẹn</li>
              )}
            </ul>
          </div>
        </div>
      </motion.div>
    </AdminLayout>
  );
}
