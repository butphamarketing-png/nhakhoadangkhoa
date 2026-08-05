import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Facebook } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

/** Trang khách thấy khi website đang bảo trì. */
export default function MaintenanceScreen() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <div
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center overflow-y-auto px-6 py-12"
      style={{ background: "linear-gradient(135deg, #050e1a 0%, #0D1B2A 40%, #0a1520 100%)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C89B3C 0%, transparent 70%)" }}
      />

      <div className="relative flex flex-col items-center gap-8 text-center max-w-xl">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(135deg, #C89B3C, #E8C46A, #C89B3C)",
              filter: "blur(16px)",
              opacity: 0.5,
              transform: "scale(1.3)",
            }}
          />
          <div
            className="relative w-24 h-24 rounded-full flex items-center justify-center overflow-hidden ring-2 ring-[#C89B3C]/50"
            style={{ background: "linear-gradient(135deg, #C89B3C 0%, #E8C46A 50%, #C89B3C 100%)" }}
          >
            <img
              src={IMAGES.logo}
              alt={BRAND.shortName}
              className="relative w-20 h-20 rounded-full object-cover ring-2 ring-white/30"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div
            className="text-2xl md:text-3xl font-extrabold tracking-widest uppercase mb-3"
            style={{
              background: "linear-gradient(90deg, #C89B3C 0%, #E8C46A 40%, #F0D080 60%, #C89B3C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {BRAND.name}
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-white mb-4">
            Website đang được nâng cấp
          </h1>
          <p className="text-white/70 leading-relaxed">
            Chúng tôi đang hoàn thiện nội dung để mang đến trải nghiệm tốt hơn.
            Trong thời gian này, quý khách vui lòng liên hệ trực tiếp để được tư vấn
            và đặt lịch hẹn.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
        >
          <a
            href={`tel:${BRAND.hotlineRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[#0D1B2A] transition-transform hover:scale-105"
            style={{ background: "linear-gradient(135deg, #C89B3C 0%, #E8C46A 50%, #C89B3C 100%)" }}
          >
            <Phone className="w-4 h-4" />
            {BRAND.hotline}
          </a>
          <a
            href={BRAND.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white ring-1 ring-[#C89B3C]/50 hover:bg-white/5 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat Zalo
          </a>
          <a
            href={BRAND.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white ring-1 ring-[#C89B3C]/50 hover:bg-white/5 transition-colors"
          >
            <Facebook className="w-4 h-4" />
            Facebook
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-sm text-white/50 space-y-1"
        >
          <div>{BRAND.address}</div>
          <div>{BRAND.hours}</div>
        </motion.div>
      </div>
    </div>
  );
}
