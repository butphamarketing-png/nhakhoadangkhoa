import { Link, useLocation } from "wouter";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Scissors,
  UserCheck,
  FileText,
  LogOut,
  Menu,
  X,
  ChevronRight,
  DollarSign,
  Settings,
  Home,
  BookOpen,
  Gift,
  Image,
} from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";

type NavItem = { label: string; icon: typeof LayoutDashboard; href: string; badge?: number };

const NAV_GROUPS: { title: string; items: NavItem[] }[] = [
  {
    title: "Vận hành",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, href: "/" },
      { label: "Lịch hẹn", icon: Calendar, href: "/lich-hen" },
    ],
  },
  {
    title: "Nội dung website",
    items: [
      { label: "Trang chủ", icon: Home, href: "/trang-chu" },
      { label: "Thư viện ảnh", icon: Image, href: "/thu-vien" },
      { label: "Upload ảnh", icon: Image, href: "/media-library" },
      { label: "Giới thiệu", icon: BookOpen, href: "/gioi-thieu" },
      { label: "Menu dịch vụ", icon: Scissors, href: "/dich-vu" },
      { label: "Catalog dịch vụ", icon: Scissors, href: "/catalog-dich-vu" },
      { label: "Bảng giá", icon: DollarSign, href: "/bang-gia" },
      { label: "Bài viết", icon: FileText, href: "/bai-viet" },
      { label: "Bác sĩ", icon: UserCheck, href: "/bac-si" },
      { label: "Khách hàng", icon: Users, href: "/khach-hang" },
      { label: "Ưu đãi", icon: Gift, href: "/uu-dai" },
      { label: "FAQ", icon: FileText, href: "/faq-admin" },
      { label: "Tuyển dụng", icon: FileText, href: "/tuyen-dung-admin" },
      { label: "Chính sách", icon: FileText, href: "/chinh-sach" },
    ],
  },
  {
    title: "Hệ thống",
    items: [{ label: "Cài đặt", icon: Settings, href: "/cai-dat" }],
  },
];

export default function Sidebar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const { data: stats } = useQuery({
    queryKey: ["admin-stats-sidebar"],
    queryFn: () =>
      apiFetch<{ totals: { pending: number } }>("/api/admin/stats").catch(() => null),
    refetchInterval: 60_000,
  });

  const pending = stats?.totals.pending ?? 0;

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  const NavContent = () => (
    <div className="flex flex-col h-full">
      <div className="px-6 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 1 2C1 7 4 12 6.5 14.5C7.5 15.5 8.5 16 9.5 16C9.5 18 10 20 12 22C14 20 14.5 18 14.5 16C15.5 16 16.5 15.5 17.5 14.5C20 12 23 7 23 2C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-white text-sm leading-tight">Đăng Khoa</div>
            <div className="text-white/40 text-xs">Quản trị website</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-5">
        {NAV_GROUPS.map((group) => (
          <div key={group.title}>
            <p className="text-white/30 text-[10px] uppercase tracking-widest font-semibold px-3 mb-2">
              {group.title}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const active = isActive(item.href);
                const badge = item.href === "/lich-hen" && pending > 0 ? pending : undefined;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                      active
                        ? "bg-[#C89B3C]/15 text-[#C89B3C] border-l-2 border-[#C89B3C] -ml-px pl-[13px]"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <item.icon
                      className={`w-4 h-4 flex-shrink-0 ${active ? "text-[#C89B3C]" : "text-white/40 group-hover:text-white/70"}`}
                    />
                    <span className="flex-1">{item.label}</span>
                    {badge != null && (
                      <span className="min-w-[20px] h-5 px-1.5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                        {badge > 99 ? "99+" : badge}
                      </span>
                    )}
                    {active && !badge && (
                      <ChevronRight className="w-3.5 h-3.5 text-[#C89B3C]/60" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="px-3 pb-5 border-t border-white/10 pt-4">
        <Link
          href="/login"
          onClick={() => localStorage.removeItem("dk-admin-token")}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-all text-sm font-medium w-full"
        >
          <LogOut className="w-4 h-4" />
          Đăng xuất
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 rounded-xl bg-[#0D1B2A] flex items-center justify-center text-white shadow-lg"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setMobileOpen(false)} />
      )}

      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-40 w-64 transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ background: "#0D1B2A" }}
      >
        <NavContent />
      </div>

      <aside
        className="hidden lg:flex flex-col w-64 flex-shrink-0 h-screen sticky top-0"
        style={{ background: "#0D1B2A" }}
      >
        <NavContent />
      </aside>
    </>
  );
}
