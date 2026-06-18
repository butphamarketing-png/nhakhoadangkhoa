import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, Film, ImageIcon } from "lucide-react";
import SectionTitle from "./SectionTitle";
import {
  GALLERY_IMAGES,
  GALLERY_VIDEOS,
  GALLERY_PAGE_PATH,
  HOME_GALLERY_IMAGE_PREVIEW_COUNT,
} from "@/lib/gallery-media";
import { fadeUp } from "@/lib/motion";

export default function MediaGallerySection() {
  const previewImages = GALLERY_IMAGES.slice(0, HOME_GALLERY_IMAGE_PREVIEW_COUNT);
  const featuredVideo =
    GALLERY_VIDEOS.find((v) => v.src.includes("video-phong-kham")) ?? GALLERY_VIDEOS[0];

  return (
    <section className="section-padding section-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C89B3C'%3E%3Cpath d='M36 34v-2h2v2h-2zm0-4v-2h2v2h-2z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="container-custom container-narrow relative">
        <SectionTitle label="Thư viện" subtitle="Khoảnh khắc hoạt động, trang thiết bị và đội ngũ tại phòng khám">
          HÌNH ẢNH VÀ VIDEO
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="card-luxury p-0 overflow-hidden !translate-y-0"
          >
            <div className="flex items-center gap-2 px-5 py-4 border-b border-[#C89B3C]/15 bg-[#FAFAF8]">
              <Film className="w-4 h-4 text-[#C89B3C]" />
              <span className="text-sm font-bold text-[#0D1B2A]">Video</span>
            </div>
            <div className="aspect-video bg-[#0D1B2A] flex items-center justify-center">
              {featuredVideo ? (
                <video
                  src={featuredVideo.src}
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                  poster={featuredVideo.poster}
                >
                  Trình duyệt không hỗ trợ video.
                </video>
              ) : (
                <div className="text-center px-6 py-10">
                  <div className="w-16 h-16 rounded-full bg-[#C89B3C]/15 flex items-center justify-center mx-auto mb-4">
                    <Film className="w-8 h-8 text-[#C89B3C]" />
                  </div>
                  <p className="text-white/80 text-sm font-medium">Video sẽ được cập nhật sớm</p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="card-luxury p-0 overflow-hidden !translate-y-0 flex flex-col"
          >
            <div className="flex items-center gap-2 px-5 py-4 border-b border-[#C89B3C]/15 bg-[#FAFAF8]">
              <ImageIcon className="w-4 h-4 text-[#C89B3C]" />
              <span className="text-sm font-bold text-[#0D1B2A]">Hình ảnh</span>
            </div>
            <div className="p-4 md:p-5 flex-1">
              <div className="grid grid-cols-3 gap-2 md:gap-3 h-full">
                {previewImages.map((item) => (
                  <div
                    key={item.id}
                    className="aspect-square overflow-hidden rounded-xl bg-[#F8F6F1] ring-1 ring-[#C89B3C]/10"
                  >
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="text-center mt-8 md:mt-10"
        >
          <Link href={GALLERY_PAGE_PATH}>
            <span className="btn-gold inline-flex items-center !h-12 !px-8 cursor-pointer">
              Xem tất cả
              <ChevronRight className="w-4 h-4 ml-2" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
