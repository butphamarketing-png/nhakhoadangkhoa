import { motion } from "framer-motion";
import { ABOUT_PROMO_IMAGE, WHY_CHOOSE } from "@/lib/home-content";
import { fadeUp } from "@/lib/motion";

export default function WhyChooseSection() {
  return (
    <section className="section-padding navy-gradient overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(200,155,60,0.12),transparent_60%)]" />
      <div className="container-custom container-narrow relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-[#E8C46A] text-xs font-bold uppercase tracking-[0.35em] mb-3">Lý do chọn chúng tôi</p>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-bold text-[#C89B3C] mb-1 leading-tight">
              TẠI SAO CHỌN
            </h2>
            <p className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold text-white mb-10 leading-tight">
              NHA KHOA ĐĂNG KHOA?
            </p>
            <div className="grid grid-cols-3 gap-x-4 gap-y-8 max-w-md">
              {WHY_CHOOSE.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group flex flex-col items-center text-center gap-3"
                >
                  <div className="w-14 h-14 rounded-full border border-[#C89B3C]/60 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:gold-gradient group-hover:border-transparent transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#E8C46A] group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/90 text-[11px] font-medium leading-snug">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:pl-8 before:hidden lg:before:block lg:before:absolute lg:before:left-0 lg:before:top-8 lg:before:bottom-8 lg:before:w-px lg:before:bg-[#C89B3C]/30"
          >
            <div className="gradient-border rounded-[28px] p-[2px]">
              <div className="rounded-[26px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)] bg-[#F8F6F1]">
                <img
                  src={ABOUT_PROMO_IMAGE}
                  alt="10.000+ ca răng sứ thành công — BS Nguyễn Đăng Khoa"
                  className="w-full h-auto object-contain object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
