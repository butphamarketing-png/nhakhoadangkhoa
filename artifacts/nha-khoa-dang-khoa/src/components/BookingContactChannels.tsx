import { Link } from "wouter";
import { ChevronRight, Facebook, MapPin, MessageCircle, Phone } from "lucide-react";
import { useBrand } from "@/lib/brand-context";

export default function BookingContactChannels() {
  const brand = useBrand();

  const channels = [
    {
      id: "facebook",
      label: "Fanpage Facebook",
      desc: "Theo dõi để cập nhật kiến thức nha khoa mỗi ngày",
      href: brand.facebook,
      icon: Facebook,
    },
    {
      id: "zalo",
      label: "Chat Zalo",
      desc: "Tư vấn nhanh qua Zalo",
      href: brand.zalo,
      icon: MessageCircle,
    },
    {
      id: "maps",
      label: "Google Maps",
      desc: "Chỉ đường đến phòng khám",
      href: brand.mapEmbed.replace("&output=embed", "").replace("?output=embed", ""),
      icon: MapPin,
    },
  ];

  return (
    <div className="mt-8 space-y-3">
      <p className="text-[#E8C46A] text-xs font-bold uppercase tracking-[0.2em] mb-2">Kết nối với chúng tôi</p>
      {channels.map(({ id, label, desc, href, icon: Icon }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-2xl bg-[#0a1520] border border-[#C89B3C]/25 hover:border-[#C89B3C]/50 transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-[#C89B3C]/15 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-[#E8C46A]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-white text-sm">{label}</p>
            <p className="text-white/70 text-xs mt-0.5">{desc}</p>
          </div>
          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-[#E8C46A] shrink-0" />
        </a>
      ))}
      <a
        href={`tel:${brand.hotlineRaw}`}
        className="flex items-center gap-3 p-4 rounded-2xl bg-[#0a1520] border border-[#C89B3C]/25 hover:border-[#C89B3C]/50 transition-colors group"
      >
        <div className="w-10 h-10 rounded-full bg-[#C89B3C]/15 flex items-center justify-center shrink-0">
          <Phone className="w-5 h-5 text-[#E8C46A]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-white text-sm">Hotline 24/7</p>
          <p className="text-[#E8C46A] font-bold text-sm mt-0.5">{brand.hotline}</p>
        </div>
        <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-[#E8C46A] shrink-0" />
      </a>
      <Link href="/dat-lich">
        <span className="flex items-center gap-3 p-4 rounded-2xl bg-[#0a1520] border border-[#C89B3C]/25 hover:border-[#C89B3C]/50 transition-colors cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-[#C89B3C]/15 flex items-center justify-center shrink-0 text-lg">
            📅
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-white text-sm">Đặt lịch hẹn</p>
            <p className="text-white/70 text-xs mt-0.5">Đặt lịch trực tuyến</p>
          </div>
          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-[#E8C46A] shrink-0" />
        </span>
      </Link>
    </div>
  );
}
