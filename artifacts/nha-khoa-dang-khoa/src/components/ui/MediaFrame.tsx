/** Khung ảnh chuẩn — object-cover, không kéo méo ảnh nhỏ */
type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
};

const aspectClass = {
  square: "aspect-square",
  video: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/10]",
};

export default function MediaFrame({ src, alt, className = "", aspect = "video" }: MediaFrameProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[#F0EDE6] ${aspectClass[aspect]} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
