/** Khung ảnh chuẩn — object-cover, không kéo méo ảnh nhỏ */
import { cmsImageSrc } from "@/lib/media-url";

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  fit?: "cover" | "contain";
};

const aspectClass = {
  square: "aspect-square",
  video: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/10]",
};

export default function MediaFrame({ src, alt, className = "", aspect = "video", fit = "cover" }: MediaFrameProps) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";
  return (
    <div
      className={`relative overflow-hidden bg-[#F0EDE6] ${aspectClass[aspect]} ${className}`}
    >
      <img
        src={cmsImageSrc(src)}
        alt={alt}
        className={`absolute inset-0 w-full h-full ${fitClass} object-center`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
