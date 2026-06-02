import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { BOOKING_BENEFITS } from "@/lib/home-content";
import { fadeUp } from "@/lib/motion";

interface BookingCtaSectionProps {
  onBookingClick: () => void;
}

export default function BookingCtaSection({ onBookingClick }: BookingCtaSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 cta-gold-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,255,255,0.15),transparent_50%)]" />

      <div className="container-custom relative py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:max-w-none">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-[#0D1B2A]/70 text-xs font-bold uppercase tracking-[0.3em] mb-3">
                Đặt lịch nhanh
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-3 leading-tight">
                ĐẶT LỊCH KHÁM NGAY
              </h2>
              <p className="text-[#0D1B2A]/80 text-sm md:text-base mb-6">
                Tư vấn miễn phí — Xác nhận nhanh — Phục vụ tận tâm
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href={`tel:${BRAND.hotlineRaw}`}>
                  <button
                    type="button"
                    className="btn-outline-gold !bg-white inline-flex items-center justify-center w-full sm:w-auto !h-12 !text-sm"
                    data-testid="button-cta-phone"
                  >
                    <Phone className="w-4 h-4 mr-2 text-[#C89B3C]" />
                    {BRAND.hotline}
                  </button>
                </a>
                <button
                  type="button"
                  onClick={onBookingClick}
                  className="bg-[#0D1B2A] hover:bg-[#162840] text-white rounded-full h-12 px-8 font-bold text-sm shadow-lg transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                  data-testid="button-cta-booking"
                >
                  Đặt lịch ngay
                </button>
              </div>
              <Link href="/dat-lich" className="sr-only">
                Đặt lịch
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="grid grid-cols-2 gap-3"
            >
              {BOOKING_BENEFITS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-white/90 border border-[#C89B3C]/25 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-[#0D1B2A] text-xs font-bold leading-snug">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
