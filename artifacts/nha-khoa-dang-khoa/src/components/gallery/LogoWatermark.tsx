import type { ReactNode } from "react";
import { GALLERY_WATERMARK_LOGO } from "@/lib/gallery-media";

type LogoWatermarkProps = {
  children: ReactNode;
  className?: string;
};

/** Khung media có đóng dấu logo ở trên cùng, căn giữa — chỉ dùng cho hình ảnh & video thư viện. */
export default function LogoWatermark({ children, className = "" }: LogoWatermarkProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <img
        src={GALLERY_WATERMARK_LOGO}
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-2 md:top-3 left-1/2 -translate-x-1/2 z-10 w-[32%] max-w-[200px] min-w-[80px] h-auto select-none"
        draggable={false}
      />
    </div>
  );
}
