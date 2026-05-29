import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { stiffness: 500, damping: 35 });
  const springY = useSpring(y, { stiffness: 500, damping: 35 });

  const dotX = useSpring(x, { stiffness: 1000, damping: 40 });
  const dotY = useSpring(y, { stiffness: 1000, damping: 40 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const checkPointer = () => {
      const el = document.elementFromPoint(x.get(), y.get());
      const isInteractive =
        el?.matches("a, button, [role='button'], input, select, textarea, [tabindex]") ?? false;
      setIsPointer(isInteractive);
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", checkPointer);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkPointer);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, [x, y, isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: isPointer ? 44 : 28,
            height: isPointer ? 44 : 28,
            borderColor: isPointer ? "#C89B3C" : "rgba(200,155,60,0.5)",
            boxShadow: isPointer ? "0 0 12px rgba(200,155,60,0.4)" : "none",
          }}
          transition={{ duration: 0.2 }}
          style={{
            borderRadius: "50%",
            border: "1.5px solid rgba(200,155,60,0.5)",
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none w-1.5 h-1.5 rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          background: "#C89B3C",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Hide default cursor */}
      <style>{`body { cursor: none !important; } a, button, [role='button'], input, select, textarea { cursor: none !important; }`}</style>
    </>
  );
}
