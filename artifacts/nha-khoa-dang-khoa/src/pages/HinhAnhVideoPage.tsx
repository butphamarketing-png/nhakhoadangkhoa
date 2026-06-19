import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Film, ImageIcon } from "lucide-react";
import PageHero from "@/components/PageHero";
import GalleryImageGrid from "@/components/gallery/GalleryImageGrid";
import { GALLERY_IMAGES, GALLERY_VIDEOS } from "@/lib/gallery-media";

type TabId = "video" | "hinh-anh";

function parseTab(hash: string): TabId {
  return hash === "#video" ? "video" : "hinh-anh";
}

export default function HinhAnhVideoPage() {
  const [location] = useLocation();
  const [tab, setTab] = useState<TabId>(() => parseTab(typeof window !== "undefined" ? window.location.hash : ""));

  useEffect(() => {
    const onHash = () => setTab(parseTab(window.location.hash));
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => window.removeEventListener("hashchange", onHash);
  }, [location]);

  const switchTab = (next: TabId) => {
    setTab(next);
    window.history.replaceState(null, "", next === "video" ? "#video" : "#hinh-anh");
  };

  return (
    <div>
      <PageHero
        label="Thư viện"
        breadcrumb="Hình ảnh và video"
        title={
          <>
            Hình Ảnh <span className="text-[#C89B3C]">Và Video</span>
          </>
        }
        subtitle="Khám phá hoạt động, trang thiết bị và không gian Nha Khoa Đăng Khoa"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 p-1.5 rounded-full bg-[#F8F6F1] w-fit mx-auto border border-[#C89B3C]/15">
            <button
              type="button"
              onClick={() => switchTab("video")}
              className={`inline-flex items-center gap-2 px-5 md:px-7 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                tab === "video"
                  ? "gold-gradient text-white shadow-[0_6px_20px_rgba(200,155,60,0.35)]"
                  : "text-[#0D1B2A]/70 hover:text-[#C89B3C] bg-transparent"
              }`}
            >
              <Film className="w-4 h-4" />
              Video
            </button>
            <button
              type="button"
              onClick={() => switchTab("hinh-anh")}
              className={`inline-flex items-center gap-2 px-5 md:px-7 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                tab === "hinh-anh"
                  ? "gold-gradient text-white shadow-[0_6px_20px_rgba(200,155,60,0.35)]"
                  : "text-[#0D1B2A]/70 hover:text-[#C89B3C] bg-transparent"
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              Hình ảnh
            </button>
          </div>

          {tab === "video" ? (
            <motion.div
              key="video-tab"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {GALLERY_VIDEOS.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {GALLERY_VIDEOS.map((video) => (
                    <div key={video.id} className="card-luxury p-0 overflow-hidden !translate-y-0">
                      <div className="aspect-video bg-[#0D1B2A]">
                        <video src={video.src} controls playsInline className="w-full h-full object-contain" poster={video.poster}>
                          Trình duyệt không hỗ trợ video.
                        </video>
                      </div>
                      <p className="px-5 py-4 text-sm font-semibold text-[#0D1B2A]">{video.title}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 px-6 rounded-[24px] bg-[#F8F6F1] border border-[#C89B3C]/15 max-w-xl mx-auto">
                  <div className="w-16 h-16 rounded-full bg-[#C89B3C]/15 flex items-center justify-center mx-auto mb-4">
                    <Film className="w-8 h-8 text-[#C89B3C]" />
                  </div>
                  <h2 className="text-lg font-bold text-[#0D1B2A] mb-2">Video đang được cập nhật</h2>
                  <p className="text-[#0D1B2A]/60 text-sm">Phần video sẽ bổ sung trong thời gian tới. Vui lòng xem tab Hình ảnh.</p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="images-tab"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {GALLERY_IMAGES.length > 0 ? (
                <GalleryImageGrid images={GALLERY_IMAGES} columns="4" />
              ) : (
                <div className="text-center py-16 px-6 rounded-[24px] bg-[#F8F6F1] border border-[#C89B3C]/15 max-w-xl mx-auto">
                  <div className="w-16 h-16 rounded-full bg-[#C89B3C]/15 flex items-center justify-center mx-auto mb-4">
                    <ImageIcon className="w-8 h-8 text-[#C89B3C]" />
                  </div>
                  <h2 className="text-lg font-bold text-[#0D1B2A] mb-2">Hình ảnh đang được cập nhật</h2>
                  <p className="text-[#0D1B2A]/60 text-sm">Phần hình ảnh sẽ bổ sung trong thời gian tới.</p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
