import { Phone } from "lucide-react";
import { BRAND } from "@/lib/constants";

interface MobileBottomBarProps {
  onBookingClick: () => void;
}

export default function MobileBottomBar({ onBookingClick }: MobileBottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="flex">
        <a
          href={`tel:${BRAND.hotlineRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#0D1B2A] text-white font-bold text-sm"
          data-testid="button-mobile-bottom-phone"
        >
          <Phone className="w-4 h-4" />
          {BRAND.hotline}
        </a>
        <button
          onClick={onBookingClick}
          className="flex-1 py-3 gold-gradient text-white font-bold text-sm"
          data-testid="button-mobile-bottom-booking"
        >
          Đặt lịch ngay
        </button>
      </div>
    </div>
  );
}
