import { useEffect, useRef, useState, useMemo } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: string;
  className?: string;
}

/** Chỉ animate số đơn giản: 10+, 100%, 5.000+ */
function parseStat(value: string): { target: number; suffix: string; useGrouping: boolean } | null {
  const trimmed = value.trim();
  if (trimmed.includes("/")) return null;

  const plusMatch = trimmed.match(/^([\d.,]+)\+$/);
  if (plusMatch) {
    const target = parseInt(plusMatch[1].replace(/\./g, ""), 10);
    if (!Number.isNaN(target)) {
      return { target, suffix: "+", useGrouping: plusMatch[1].includes(".") };
    }
  }

  const pctMatch = trimmed.match(/^([\d.,]+)%$/);
  if (pctMatch) {
    const target = parseInt(pctMatch[1].replace(/\./g, ""), 10);
    if (!Number.isNaN(target)) {
      return { target, suffix: "%", useGrouping: false };
    }
  }

  return null;
}

function formatNumber(n: number, useGrouping: boolean): string {
  if (useGrouping) return n.toLocaleString("vi-VN");
  return String(n);
}

export default function StatCounter({ value, className = "" }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const parsed = useMemo(() => parseStat(value), [value]);

  const [display, setDisplay] = useState(() => {
    if (!parsed) return value;
    return `${formatNumber(0, parsed.useGrouping)}${parsed.suffix}`;
  });

  useEffect(() => {
    if (!parsed) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    const duration = 1600;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(parsed.target * eased);
      setDisplay(`${formatNumber(current, parsed.useGrouping)}${parsed.suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, parsed]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
