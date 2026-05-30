import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { CLINIC_STATS } from "@/lib/home-content";
import StatCounter from "./StatCounter";

export default function StatsSection() {
  return (
    <section className="py-14 md:py-16 navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,155,60,0.18),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C]/40 to-transparent" />
      <div className="container-custom container-narrow relative">
        <p className="text-center text-[#E8C46A] text-[11px] font-bold uppercase tracking-[0.35em] mb-8 md:mb-10">
          Con số nói lên uy tín
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CLINIC_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="stat-glass text-center px-4 py-6 md:py-8 hover:bg-white/[0.09] transition-colors duration-300"
            >
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#E8C46A] mb-2 drop-shadow-sm">
                <StatCounter value={stat.value} />
              </p>
              <p className="text-white/85 text-xs sm:text-sm font-medium leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
