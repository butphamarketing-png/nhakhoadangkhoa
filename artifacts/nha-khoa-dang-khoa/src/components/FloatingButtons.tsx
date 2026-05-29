import { Phone, MessageCircle, Calendar } from "lucide-react";
import { BRAND } from "@/lib/constants";

interface FloatingButtonsProps {
  onBookingClick: () => void;
}

export default function FloatingButtons({ onBookingClick }: FloatingButtonsProps) {
  return (
    <div className="fixed right-4 bottom-24 md:bottom-8 z-40 flex flex-col gap-3">
      {/* Phone */}
      <a
        href={`tel:${BRAND.hotlineRaw}`}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg animate-pulse-gold transition-all duration-300 hover:scale-110"
        data-testid="button-float-phone"
        aria-label="Gọi ngay"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-14 bg-[#0D1B2A] text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Gọi ngay
        </span>
      </a>

      {/* Zalo */}
      <a
        href={BRAND.zalo}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110"
        data-testid="button-float-zalo"
        aria-label="Zalo"
      >
        <span className="font-bold text-sm">Za</span>
        <span className="absolute right-14 bg-[#0D1B2A] text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Zalo
        </span>
      </a>

      {/* Messenger */}
      <a
        href={BRAND.messenger}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110"
        data-testid="button-float-messenger"
        aria-label="Messenger"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="absolute right-14 bg-[#0D1B2A] text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Messenger
        </span>
      </a>

      {/* Booking */}
      <button
        onClick={onBookingClick}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full gold-gradient text-white shadow-lg gold-glow-sm transition-all duration-300 hover:scale-110"
        data-testid="button-float-booking"
        aria-label="Đặt lịch"
      >
        <Calendar className="w-5 h-5" />
        <span className="absolute right-14 bg-[#0D1B2A] text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Đặt lịch
        </span>
      </button>
    </div>
  );
}
