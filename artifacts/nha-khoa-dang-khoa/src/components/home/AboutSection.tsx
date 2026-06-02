import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ABOUT_PROMO_IMAGE } from "@/lib/home-content";
import MediaFrame from "@/components/ui/MediaFrame";
import { fadeUp } from "@/lib/motion";

export default function AboutSection() {
  return (
    <section className="section-padding section-cream section-texture">
      <div className="container-custom container-narrow">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex flex-col justify-center"
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
                <span key={tag} className="pill-tag">
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
          >
            <div className="gradient-border rounded-[24px] p-[2px] overflow-hidden hero-image-glow">
              <MediaFrame
                src={ABOUT_PROMO_IMAGE}
                alt="10.000+ ca răng sứ thành công — BS Nguyễn Đăng Khoa"
                aspect="wide"
                className="rounded-[22px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
