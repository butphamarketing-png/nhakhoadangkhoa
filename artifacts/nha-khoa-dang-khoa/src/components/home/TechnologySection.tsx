import { motion } from "framer-motion";
import { useHomeCms } from "@/lib/cms-provider";
import { fadeUp } from "@/lib/motion";
import SectionTitle from "./SectionTitle";

type TechnologyItem = { title: string; desc: string; image: string };

function TechnologyCard({ title, desc, image, index }: TechnologyItem & { index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index}
      className="card-luxury p-0 overflow-hidden !translate-y-0 hover:!translate-y-[-8px] group"
    >
      <div className="aspect-[4/3] overflow-hidden bg-[#F8F6F1]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 md:p-5 text-center">
        <h3 className="font-bold text-[#0D1B2A] text-sm mb-2">{title}</h3>
        <p className="text-[#0D1B2A]/55 text-xs leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function TechnologySection() {
  const { technologyItems } = useHomeCms();
  const topRow = technologyItems.slice(0, 4);
  const bottomRow = technologyItems.slice(4);

  return (
    <section id="cong-nghe" className="section-padding section-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C89B3C]/0 via-[#C89B3C]/50 to-[#C89B3C]/0" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C89B3C' fill-opacity='1'%3E%3Cpath d='M36 34v-2h2v2h-2zm0-4v-2h2v2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="container-custom container-narrow relative">
        <SectionTitle
          label="Trang thiết bị"
          subtitle="Đầu tư hệ thống máy móc tiên tiến để chẩn đoán chính xác và điều trị an toàn"
        >
          CÔNG NGHỆ HIỆN ĐẠI
        </SectionTitle>

        <div className="space-y-4 md:space-y-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {topRow.map((item, i) => (
              <TechnologyCard key={`${item.title}-${i}`} {...item} index={i} />
            ))}
          </div>

          {bottomRow.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {bottomRow.map((item, i) => (
                <TechnologyCard key={`${item.title}-${i + 4}`} {...item} index={i + 4} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
