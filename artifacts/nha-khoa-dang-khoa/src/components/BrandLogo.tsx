import { IMAGES } from "@/lib/images";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  variant?: "light" | "dark";
  className?: string;
}

const sizes = {
  sm: "w-9 h-9",
  md: "w-11 h-11 md:w-12 md:h-12",
  lg: "w-16 h-16",
};

export default function BrandLogo({
  size = "md",
  showText = true,
  variant = "dark",
  className = "",
}: BrandLogoProps) {
  const titleClass = variant === "light" ? "text-white" : "text-[#0D1B2A]";
  const sloganClass = variant === "light" ? "text-[#E8C46A]" : "text-[#C89B3C]";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={IMAGES.logo}
        alt="Nha Khoa Đăng Khoa"
        className={`${sizes[size]} rounded-full object-cover ring-2 ring-[#C89B3C]/40 shadow-md flex-shrink-0`}
      />
      {showText && (
        <div className="hidden sm:block min-w-0">
          <div className={`font-extrabold ${titleClass} text-xs md:text-sm leading-tight tracking-wide truncate`}>
            NHA KHOA ĐĂNG KHOA
          </div>
          <div className={`text-[10px] ${sloganClass} font-medium tracking-wider truncate`}>
            Uy tín – Chất lượng – Tận tâm
          </div>
        </div>
      )}
    </div>
  );
}
