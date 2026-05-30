import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { CLINIC_STATS } from "@/lib/home-content";
import StatCounter from "./StatCounter";

export default function StatsSection() {
  return (
    <section className="py-12 md:py-14 navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,155,60,0.15),transparent_55%)]" />
      <div className="container-custom container-narrow relative">
        <p className="text-center text-[#E8C46A]/90 text-xs font-bold uppercase tracking-[0.35em] mb-6 md:mb-8">
          Con số nói lên uy tín
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0">
          {CLINIC_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className={`text-center px-3 py-3 md:py-4 rounded-2xl md:rounded-none ${
                i > 0 ? "lg:border-l lg:border-[#C89B3C]/25" : ""
              }`}
            >
              <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#C89B3C] mb-1.5">
                <StatCounter value={stat.value} />
              </p>
              <p className="text-white/85 text-xs sm:text-sm font-medium leading-snug max-w-[160px] mx-auto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
