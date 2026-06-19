import type { ReactNode } from "react";
import { GALLERY_WATERMARK_LOGO } from "@/lib/gallery-media";

type LogoWatermarkProps = {
  children: ReactNode;
  className?: string;
};

/** Khung media có đóng dấu logo ở trên cùng bên trái — chỉ dùng cho hình ảnh & video thư viện. */
export default function LogoWatermark({ children, className = "" }: LogoWatermarkProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <img
        src={GALLERY_WATERMARK_LOGO}
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-0.5 md:top-1 left-1.5 md:left-2 z-10 w-[38%] max-w-[240px] min-w-[96px] h-auto select-none"
        draggable={false}
      />
    </div>
  );
}
