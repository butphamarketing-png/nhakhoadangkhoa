import { Phone, Calendar } from "lucide-react";
import { BRAND } from "@/lib/constants";

interface MobileBottomBarProps {
  onBookingClick: () => void;
}

export default function MobileBottomBar({ onBookingClick }: MobileBottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pointer-events-none">
      <div
        className="flex rounded-2xl overflow-hidden pointer-events-auto border border-[#C89B3C]/20 backdrop-blur-xl"
        style={{ boxShadow: "0 -8px 32px rgba(13,27,42,0.2)" }}
      >
        <a
          href={`tel:${BRAND.hotlineRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#0D1B2A]/95 text-white font-bold text-sm"
          data-testid="button-mobile-bottom-phone"
        >
          <Phone className="w-4 h-4 text-[#C89B3C]" />
          Gọi ngay
        </a>
        <button
          type="button"
          onClick={onBookingClick}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 gold-gradient text-white font-bold text-sm"
          data-testid="button-mobile-bottom-booking"
        >
          <Calendar className="w-4 h-4" />
          Đặt lịch
        </button>
      </div>
    </div>
  );
}
