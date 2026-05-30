import { Phone, MessageCircle, Calendar, MapPin } from "lucide-react";
import { BRAND } from "@/lib/constants";

interface FloatingButtonsProps {
  onBookingClick: () => void;
}

export default function FloatingButtons({ onBookingClick }: FloatingButtonsProps) {
  const items = [
    {
      label: "Địa chỉ",
      href: "https://maps.google.com/?q=345+Dien+Bien+Phu+Tay+Ninh",
      icon: MapPin,
      testId: "button-float-map",
      external: true,
    },
    {
      label: "Đặt lịch",
      onClick: onBookingClick,
      icon: Calendar,
      testId: "button-float-booking",
      isButton: true,
      primary: true,
    },
    {
      label: "Zalo",
      href: BRAND.zalo,
      testId: "button-float-zalo",
      external: true,
      zalo: true,
    },
    {
      label: "Messenger",
      href: BRAND.messenger,
      icon: MessageCircle,
      testId: "button-float-messenger",
      external: true,
    },
    {
      label: "Gọi ngay",
      href: `tel:${BRAND.hotlineRaw}`,
      icon: Phone,
      testId: "button-float-phone",
    },
  ];

  return (
    <div
      className="fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-0.5 p-2 rounded-[28px] bg-[#0D1B2A]/95 backdrop-blur-xl border border-[#C89B3C]/25"
      style={{ boxShadow: "0 16px 48px rgba(13,27,42,0.35), 0 0 0 1px rgba(200,155,60,0.08)" }}
      aria-label="Liên hệ nhanh"
    >
      {items.map((item) => {
        const inner = (
          <>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                item.primary
                  ? "gold-gradient text-white animate-pulse-gold"
                  : "bg-white/10 text-[#E8C46A] group-hover:bg-[#C89B3C]/20 group-hover:text-[#F5E6B8]"
              }`}
            >
              {item.zalo ? (
                <span className="text-[10px] font-extrabold tracking-tight">Zalo</span>
              ) : (
                item.icon && <item.icon className="w-5 h-5" strokeWidth={2} />
              )}
            </div>
            <span className="text-[9px] font-semibold text-white/75 mt-1 group-hover:text-[#E8C46A] transition-colors">
              {item.label}
            </span>
          </>
        );

        const className =
          "group flex flex-col items-center justify-center px-2 py-2 rounded-2xl hover:bg-white/5 transition-all duration-300";

        if (item.isButton) {
          return (
            <button key={item.label} type="button" onClick={item.onClick} className={className} data-testid={item.testId} aria-label={item.label}>
              {inner}
            </button>
          );
        }

        return (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className={className}
            data-testid={item.testId}
            aria-label={item.label}
          >
            {inner}
          </a>
        );
      })}
    </div>
  );
}
