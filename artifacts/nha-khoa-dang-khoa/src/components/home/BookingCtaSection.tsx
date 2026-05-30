import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { BOOKING_BENEFITS, DENTIST_IMG } from "@/lib/home-content";
import { fadeUp } from "@/lib/motion";

const dentistPhoto = DENTIST_IMG || IMAGES.coverClinic;

interface BookingCtaSectionProps {
  onBookingClick: () => void;
}

export default function BookingCtaSection({ onBookingClick }: BookingCtaSectionProps) {
  return (
    <section className="relative overflow-hidden -mt-4">
      <div className="absolute inset-0 cta-gold-gradient" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <div className="container-custom relative py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-3 hidden md:flex justify-center lg:justify-start -mb-12 lg:-mb-16 relative z-10"
          >
            <img
              src={dentistPhoto}
              alt="Bác sĩ Nha Khoa Đăng Khoa"
              className="max-h-[340px] lg:max-h-[380px] w-auto object-contain object-bottom drop-shadow-[0_24px_48px_rgba(13,27,42,0.25)]"
            />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="lg:col-span-5 text-center lg:text-left">
            <p className="text-white/80 text-xs font-bold uppercase tracking-[0.3em] mb-3">Đặt lịch nhanh</p>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-bold text-white mb-3 drop-shadow-sm">
              ĐẶT LỊCH KHÁM NGAY
            </h2>
            <p className="text-white/95 text-body mb-8 font-medium">
              Tư vấn miễn phí — Xác nhận nhanh — Phục vụ tận tâm
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={`tel:${BRAND.hotlineRaw}`}>
                <button type="button" className="btn-outline-gold !bg-white inline-flex items-center w-full sm:w-auto" data-testid="button-cta-phone">
                  <Phone className="w-5 h-5 mr-2 text-[#C89B3C]" />
                  {BRAND.hotline}
                </button>
              </a>
              <button
                type="button"
                onClick={onBookingClick}
                className="bg-[#0D1B2A] hover:bg-[#162840] text-white rounded-full h-14 px-10 font-bold shadow-[0_12px_32px_rgba(13,27,42,0.35)] transition-all hover:-translate-y-0.5 uppercase tracking-wide w-full sm:w-auto border border-[#C89B3C]/30"
                data-testid="button-cta-booking"
              >
                Đặt lịch ngay
              </button>
            </div>
            <Link href="/dat-lich" className="sr-only">Đặt lịch</Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="lg:col-span-4 grid grid-cols-2 gap-4">
            {BOOKING_BENEFITS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-[#0D1B2A]/20 backdrop-blur-sm border border-white/20">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#E8C46A]" />
                </div>
                <span className="text-white text-xs font-semibold leading-snug">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
