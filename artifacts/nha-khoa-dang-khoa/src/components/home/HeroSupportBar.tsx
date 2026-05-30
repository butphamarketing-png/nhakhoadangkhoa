import { useState } from "react";
import { Phone, Headphones } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function HeroSupportBar() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById("booking-form");
    el?.scrollIntoView({ behavior: "smooth" });
    if (name) sessionStorage.setItem("prefill_name", name);
    if (phone) sessionStorage.setItem("prefill_phone", phone);
  };

  return (
    <section className="relative z-10 bg-[#0D1B2A] border-y border-[#C89B3C]/25">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(200,155,60,0.1),transparent_55%)]" />
      <div className="container-custom py-5 md:py-6 relative">
        <div className="rounded-[20px] border border-[#C89B3C]/15 bg-white/[0.03] backdrop-blur-sm p-4 md:p-5">
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
            <div className="flex items-center gap-3 text-white shrink-0">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shadow-lg animate-pulse-gold">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[#E8C46A] text-[10px] font-bold uppercase tracking-[0.25em] mb-0.5">Hỗ trợ 24/7</p>
                <p className="font-bold text-sm md:text-base text-white">Tư vấn nhanh — Miễn phí</p>
                <a href={`tel:${BRAND.hotlineRaw}`} className="text-[#C89B3C] font-bold text-lg hover:text-[#E8C46A] transition-colors">
                  {BRAND.hotline}
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col sm:flex-row gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Họ và tên"
                className="flex-1 h-12 px-4 rounded-xl bg-[#0D1B2A] border border-white/15 text-white placeholder:text-white/40 focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/25 outline-none text-sm"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Số điện thoại"
                className="flex-1 h-12 px-4 rounded-xl bg-[#0D1B2A] border border-white/15 text-white placeholder:text-white/40 focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/25 outline-none text-sm"
              />
              <button type="submit" className="btn-gold !h-12 !px-8 shrink-0 inline-flex items-center justify-center gap-2 !text-sm">
                <Phone className="w-4 h-4" />
                Nhận tư vấn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
