interface SectionTitleProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
  subtitle?: string;
  label?: string;
}

export default function SectionTitle({
  children,
  light = false,
  className = "",
  subtitle,
  label,
}: SectionTitleProps) {
  const lineClass = light ? "bg-[#C89B3C]/70" : "bg-[#C89B3C]";
  const titleClass = light ? "text-white" : "text-[#0D1B2A]";
  const labelClass = light ? "text-[#E8C46A]" : "text-[#C89B3C]";

  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      {label && (
        <p className={`text-center text-xs font-bold uppercase tracking-[0.3em] mb-3 ${labelClass}`}>
          {label}
        </p>
      )}
      <div className="flex items-center justify-center gap-3 md:gap-5">
        <span className={`h-px flex-1 max-w-[80px] md:max-w-[140px] ${lineClass}`} />
        <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C] shrink-0" aria-hidden />
        <h2
          className={`font-display text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] font-bold tracking-wide text-center max-w-[min(100%,28rem)] leading-snug ${titleClass}`}
        >
          {children}
        </h2>
        <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C] shrink-0" aria-hidden />
        <span className={`h-px flex-1 max-w-[80px] md:max-w-[140px] ${lineClass}`} />
      </div>
      {subtitle && (
        <p className={`mt-4 text-sm md:text-[15px] text-center max-w-xl mx-auto leading-relaxed ${light ? "text-white/70" : "text-[#0D1B2A]/55"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
