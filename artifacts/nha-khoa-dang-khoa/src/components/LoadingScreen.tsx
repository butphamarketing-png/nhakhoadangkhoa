import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "done">("loading");

  useEffect(() => {
    const duration = 2200;
    const interval = 30;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const eased = Math.min(100, Math.round((1 - Math.pow(1 - current / steps, 3)) * 100));
      setProgress(eased);
      if (eased >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setPhase("done");
          setTimeout(onComplete, 700);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #050e1a 0%, #0D1B2A 40%, #0a1520 100%)" }}
        >
          {/* Ambient gold glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
              style={{
                background: "radial-gradient(circle, #C89B3C 0%, transparent 70%)",
                animation: "pulse-gold 3s ease-in-out infinite",
              }}
            />
            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: "#C89B3C",
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  opacity: 0.3 + Math.random() * 0.4,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Logo + content */}
          <div className="relative flex flex-col items-center gap-8 px-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #C89B3C, #E8C46A, #C89B3C)",
                  filter: "blur(16px)",
                  opacity: 0.5,
                  transform: "scale(1.3)",
                  animation: "pulse-gold 2s ease-in-out infinite",
                }}
              />
              {/* Logo box */}
              <div
                className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #C89B3C 0%, #E8C46A 50%, #C89B3C 100%)" }}
              >
                {/* Shimmer sweep */}
                <motion.div
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                  }}
                />
                <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                  <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 1 2C1 7 4 12 6.5 14.5C7.5 15.5 8.5 16 9.5 16C9.5 18 10 20 12 22C14 20 14.5 18 14.5 16C15.5 16 16.5 15.5 17.5 14.5C20 12 23 7 23 2C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" />
                </svg>
              </div>
            </motion.div>

            {/* Clinic name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <div
                className="text-2xl md:text-3xl font-extrabold tracking-widest uppercase mb-2"
                style={{
                  background: "linear-gradient(90deg, #C89B3C 0%, #E8C46A 40%, #F0D080 60%, #C89B3C 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gold-shimmer 2.5s linear infinite",
                }}
              >
                NHA KHOA ĐĂNG KHOA
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-sm tracking-[0.3em] uppercase"
                style={{ color: "rgba(200,155,60,0.7)" }}
              >
                Uy tín – Chất lượng – Tận tâm
              </motion.div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: "0%" }}
              animate={{ opacity: 1, width: "240px" }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="relative"
              style={{ width: 240 }}
            >
              <div className="h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(200,155,60,0.2)" }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #C89B3C, #E8C46A, #C89B3C)",
                    boxShadow: "0 0 8px rgba(200,155,60,0.8)",
                    transition: "width 0.08s linear",
                  }}
                />
              </div>
              <div
                className="text-center mt-3 text-xs font-mono tabular-nums"
                style={{ color: "rgba(200,155,60,0.5)" }}
              >
                {progress}%
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
