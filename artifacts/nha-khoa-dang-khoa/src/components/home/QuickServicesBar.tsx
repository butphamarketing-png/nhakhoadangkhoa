import { Link } from "wouter";
import { motion } from "framer-motion";
import { Zap, Smile, Star, Sun, Shield, Activity } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { QUICK_SERVICE_LABELS } from "@/lib/home-content";
import { fadeUp } from "@/lib/motion";

const iconMap: Record<string, React.ElementType> = {
  Zap, Smile, Star, Sun, Shield, Activity,
};

export default function QuickServicesBar() {
  return (
    <section className="relative z-10 -mt-4 md:-mt-6 mb-8 md:mb-12">
      <div className="container-custom">
        <div className="services-float-bar px-4 py-6 md:px-8 md:py-8 border border-[#C89B3C]/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Star;
              return (
                <motion.div key={service.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                  <Link href={service.href}>
                    <div
                      className="group flex flex-col items-center text-center py-2 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                      data-testid={`quick-service-${service.id}`}
                    >
                      <div className="w-14 h-14 mb-3 rounded-full bg-[#F8F6F1] flex items-center justify-center group-hover:bg-white group-hover:shadow-[0_8px_24px_rgba(200,155,60,0.2)] transition-all duration-300">
                        <Icon className="w-7 h-7 text-[#C89B3C]" strokeWidth={1.35} />
                      </div>
                      <span className="text-[10px] md:text-xs font-bold text-[#0D1B2A] leading-snug uppercase tracking-wide">
                        {QUICK_SERVICE_LABELS[service.id] ?? service.name}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
