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
  const lineClass = light ? "bg-gradient-to-r from-transparent via-[#C89B3C]/80 to-transparent" : "bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent";
  const titleClass = light ? "text-white" : "text-[#0D1B2A]";
  const labelClass = light ? "text-[#E8C46A]" : "text-[#C89B3C]";

  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      {label && (
        <p className={`text-center text-[11px] font-bold uppercase tracking-[0.35em] mb-4 ${labelClass}`}>
          {label}
        </p>
      )}
      <div className="flex items-center justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
        <span className={`h-px flex-1 max-w-[100px] md:max-w-[160px] ${lineClass}`} />
        <span className="relative flex h-3 w-3 shrink-0 items-center justify-center" aria-hidden>
          <span className="absolute inset-0 rotate-45 border border-[#C89B3C] bg-[#C89B3C]/20" />
          <span className="h-1 w-1 rotate-45 bg-[#C89B3C]" />
        </span>
        <h2
          className={`font-display text-xl sm:text-2xl md:text-[1.85rem] lg:text-[2rem] font-bold tracking-wide text-center leading-snug ${titleClass}`}
        >
          {children}
        </h2>
        <span className="relative flex h-3 w-3 shrink-0 items-center justify-center" aria-hidden>
          <span className="absolute inset-0 rotate-45 border border-[#C89B3C] bg-[#C89B3C]/20" />
          <span className="h-1 w-1 rotate-45 bg-[#C89B3C]" />
        </span>
        <span className={`h-px flex-1 max-w-[100px] md:max-w-[160px] ${lineClass}`} />
      </div>
      {subtitle && (
        <p
          className={`mt-5 text-sm md:text-base text-center max-w-2xl mx-auto leading-relaxed ${
            light ? "text-white/75" : "text-[#0D1B2A]/55"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
