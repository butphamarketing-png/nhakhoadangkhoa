import { Link } from "wouter";
import { motion } from "framer-motion";
import { useHomeCms } from "@/lib/cms-provider";
import { fadeUp } from "@/lib/motion";
import { Scan, Monitor, Scissors, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";

const TECH_ICONS = [Scan, Monitor, Scissors, Sparkles];

export default function TechnologySection() {
  const { technologyItems: TECHNOLOGY_ITEMS } = useHomeCms();
  return (
    <section id="cong-nghe" className="section-padding section-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C89B3C]/0 via-[#C89B3C]/50 to-[#C89B3C]/0" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C89B3C' fill-opacity='1'%3E%3Cpath d='M36 34v-2h2v2h-2zm0-4v-2h2v2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="container-custom container-narrow relative">
        <SectionTitle label="Trang thiết bị" subtitle="Đầu tư hệ thống máy móc tiên tiến để chẩn đoán chính xác và điều trị an toàn">
          CÔNG NGHỆ HIỆN ĐẠI
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {TECHNOLOGY_ITEMS.map(({ title, desc }, i) => {
            const Icon = TECH_ICONS[i % TECH_ICONS.length];
            return (
              <motion.div
                key={`${title}-${i}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="card-luxury p-5 md:p-6 text-center !translate-y-0 hover:!translate-y-[-8px] group"
              >
                <div className="icon-ring-gold mx-auto mb-4 group-hover:gold-gradient group-hover:border-transparent transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#C89B3C] group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#0D1B2A] text-sm mb-2">{title}</h3>
                <p className="text-[#0D1B2A]/55 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
