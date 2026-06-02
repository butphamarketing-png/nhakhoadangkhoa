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
      label: "Gọi",
      href: `tel:${BRAND.hotlineRaw}`,
      icon: Phone,
      testId: "button-float-phone",
    },
  ];

  return (
    <div
      className="fixed right-2 2xl:right-4 bottom-24 2xl:bottom-auto 2xl:top-1/2 2xl:-translate-y-1/2 z-40 hidden xl:flex flex-col gap-0.5 p-1.5 rounded-2xl bg-[#0D1B2A]/95 backdrop-blur-md border border-[#C89B3C]/20 shadow-xl"
      aria-label="Liên hệ nhanh"
    >
      {items.map((item) => {
        const inner = (
          <>
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                item.primary
                  ? "gold-gradient text-white"
                  : "bg-white/10 text-[#E8C46A] hover:bg-[#C89B3C]/25"
              }`}
            >
              {item.zalo ? (
                <span className="text-[9px] font-extrabold">Zalo</span>
              ) : (
                item.icon && <item.icon className="w-4 h-4" strokeWidth={2} />
              )}
            </div>
            <span className="text-[8px] font-semibold text-white/70 mt-0.5">{item.label}</span>
          </>
        );

        const className =
          "group flex flex-col items-center px-1.5 py-1.5 rounded-xl hover:bg-white/5 transition-colors";

        if (item.isButton) {
          return (
            <button
              key={item.label}
              type="button"
              onClick={item.onClick}
              className={className}
              data-testid={item.testId}
              aria-label={item.label}
            >
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
