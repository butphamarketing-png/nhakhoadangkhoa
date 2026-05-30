import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ABOUT_FEATURES, ABOUT_PROMO_IMAGE } from "@/lib/home-content";
import { fadeUp } from "@/lib/motion";

export default function AboutSection() {
  return (
    <section className="section-padding section-cream section-texture">
      <div className="container-custom container-narrow">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <p className="heading-gold text-xs uppercase tracking-[0.35em] mb-4">Giới thiệu</p>
            <h2 className="h2-section mb-5">
              VỀ NHA KHOA
              <br />
              <span className="gold-shimmer">ĐĂNG KHOA</span>
            </h2>
            <p className="text-body mb-6">
              Hệ thống nha khoa uy tín tại Tây Ninh — đội ngũ bác sĩ giàu kinh nghiệm,
              trang thiết bị hiện đại và quy trình chuẩn y khoa quốc tế.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["ISO vô trùng", "Vật liệu chính hãng", "Bảo hành dài hạn"].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#C89B3C]/40 text-[#C89B3C] bg-white/60">
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/gioi-thieu">
              <button type="button" className="btn-gold inline-flex items-center !h-12 text-sm" data-testid="button-about-more">
                TÌM HIỂU THÊM
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="lg:col-span-5"
          >
            <div className="gradient-border rounded-[28px] p-[2px]">
              <div className="rounded-[26px] overflow-hidden hero-image-glow bg-[#F8F6F1]">
                <img
                  src={ABOUT_PROMO_IMAGE}
                  alt="10.000+ ca răng sứ thành công — BS Nguyễn Đăng Khoa, Nha Khoa Đăng Khoa"
                  className="w-full h-auto object-contain object-center"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {ABOUT_FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="card-luxury p-5 !translate-y-0 hover:!translate-y-[-6px] group"
              >
                <div className="icon-ring-gold mb-3 group-hover:gold-gradient group-hover:border-transparent transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#C89B3C] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-[#0D1B2A] text-sm mb-1">{title}</h3>
                <p className="text-[#0D1B2A]/55 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
