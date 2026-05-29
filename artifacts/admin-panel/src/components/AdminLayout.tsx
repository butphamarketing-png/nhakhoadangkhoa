import Sidebar from "./Sidebar";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center gap-4 flex-shrink-0">
          <div className="lg:hidden w-10" />
          <div className="flex-1 max-w-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Tìm kiếm..." className="pl-9 h-9 bg-gray-50 border-gray-200 text-sm rounded-xl" />
            </div>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <button className="relative w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-amber-50 transition-colors" data-testid="btn-notifications">
              <Bell className="w-4 h-4 text-gray-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#C89B3C]" />
            </button>
            <div className="w-9 h-9 rounded-xl gold-gradient flex items-center justify-center text-white text-sm font-bold cursor-pointer" data-testid="btn-user-avatar">A</div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {title && (
            <div className="px-6 py-4 border-b border-gray-100 bg-white">
              <h1 className="text-xl font-extrabold text-[#0D1B2A]">{title}</h1>
            </div>
          )}
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
