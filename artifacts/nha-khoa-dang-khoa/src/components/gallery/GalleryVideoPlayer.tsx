import type { GalleryVideo } from "@/lib/gallery-media";
import LogoWatermark from "./LogoWatermark";

type GalleryVideoPlayerProps = {
  video: GalleryVideo;
  className?: string;
};

export default function GalleryVideoPlayer({ video, className = "" }: GalleryVideoPlayerProps) {
  return (
    <LogoWatermark className={`aspect-video bg-[#0D1B2A] ${className}`}>
      <video src={video.src} controls playsInline className="w-full h-full object-contain" poster={video.poster}>
        Trình duyệt không hỗ trợ video.
      </video>
    </LogoWatermark>
  );
}
