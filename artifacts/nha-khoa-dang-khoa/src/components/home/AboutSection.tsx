import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useHomeCms } from "@/lib/cms-provider";
import MediaFrame from "@/components/ui/MediaFrame";
import { fadeUp } from "@/lib/motion";

export default function AboutSection() {
  const { aboutImage, aboutSection } = useHomeCms();
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
            <p className="heading-gold text-xs uppercase tracking-[0.35em] mb-4">{aboutSection.eyebrow}</p>
            <h2 className="h2-section mb-5">
              {aboutSection.titleLine1}
              <br />
              <span className="gold-shimmer">{aboutSection.titleHighlight}</span>
            </h2>
            <p className="text-body mb-6">{aboutSection.body}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {aboutSection.tags.map((tag) => (
                <span key={tag} className="pill-tag">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={aboutSection.ctaHref}>
              <button type="button" className="btn-gold inline-flex items-center !h-12 text-sm" data-testid="button-about-more">
                {aboutSection.ctaLabel}
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
                src={aboutImage}
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
