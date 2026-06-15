import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useHomeCms } from "@/lib/cms-provider";
import { cmsImageSrc } from "@/lib/media-url";
import { fadeUp } from "@/lib/motion";
import type { SmileModelCms } from "@/lib/home-cms-defaults";

function ModelDetails({ model, active }: { model: SmileModelCms; active: boolean }) {
  const benefits = model.benefits?.length ? model.benefits : [];
  return (
    <div className={`space-y-2 text-xs leading-relaxed ${active ? "text-white/95" : "text-white/75"}`}>
      {benefits.length > 0 && (
        <ul className="space-y-1">
          {benefits.map((item) => (
            <li key={item} className="flex gap-1.5">
              <span className="text-[#E8C46A] shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {model.faceMatch && (
        <p className={`pt-1 border-t ${active ? "border-[#C89B3C]/40" : "border-white/10"}`}>
          <span className="font-semibold text-[#E8C46A]">Gương mặt phù hợp: </span>
          {model.faceMatch}
        </p>
      )}
    </div>
  );
}

export default function SmileDesignSection() {
  const { smileModels: SMILE_MODELS } = useHomeCms();
  const [activeId, setActiveId] = useState(SMILE_MODELS[0]?.id ?? "m1");
  const active = SMILE_MODELS.find((m) => m.id === activeId) ?? SMILE_MODELS[0];

  const left = SMILE_MODELS.slice(0, 2);
  const right = SMILE_MODELS.slice(2, 4);

  const boxClass = (id: string) =>
    `text-left rounded-xl p-4 border transition-all ${
      activeId === id
        ? "border-[#C89B3C] bg-white/10 shadow-lg"
        : "border-white/10 bg-white/5 hover:border-[#C89B3C]/40"
    }`;

  return (
    <section className="section-padding navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(200,155,60,0.15),transparent_55%)]" />
      <div className="container-custom container-narrow relative">
        <SectionTitle light label="Thẩm mỹ" subtitle="Thiết kế nụ cười theo tỷ lệ vàng">
          CÔNG NGHỆ THIẾT KẾ NỤ CƯỜI DIGITAL SMILE DESIGN
        </SectionTitle>

        <div className="grid lg:grid-cols-[1fr_minmax(0,280px)_1fr] gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
          <div className="flex flex-col gap-6 justify-center">
            {left.map((model, i) => (
              <motion.button
                key={model.id}
                type="button"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                onClick={() => setActiveId(model.id)}
                className={boxClass(model.id)}
              >
                <p className="text-[10px] font-bold text-[#E8C46A] uppercase tracking-wider mb-1">{model.tag}</p>
                <p className="font-bold text-white text-sm uppercase leading-snug mb-3">{model.title}</p>
                <ModelDetails model={model as SmileModelCms} active={activeId === model.id} />
              </motion.button>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <div className="relative mx-auto w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#C89B3C]/40 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
              <img
                key={active?.id}
                src={cmsImageSrc(active?.image ?? "")}
                alt={active?.title ?? "Thiết kế nụ cười"}
                className="w-full h-full object-cover object-top transition-opacity duration-500"
              />
            </div>
            <p className="font-display text-xl md:text-2xl font-bold text-white mt-6 mb-1">Gương mặt của bạn,</p>
            <p className="text-white/85 text-sm md:text-base mb-6">phù hợp với dáng răng nào</p>
            <Link href="/dat-lich">
              <span className="inline-flex items-center justify-center btn-gold !h-12 !px-10 !text-sm cursor-pointer mx-auto">
                Tư vấn ngay
              </span>
            </Link>
          </motion.div>

          <div className="flex flex-col gap-6 justify-center">
            {right.map((model, i) => (
              <motion.button
                key={model.id}
                type="button"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 2}
                onClick={() => setActiveId(model.id)}
                className={boxClass(model.id)}
              >
                <p className="text-[10px] font-bold text-[#E8C46A] uppercase tracking-wider mb-1">{model.tag}</p>
                <p className="font-bold text-white text-sm uppercase leading-snug mb-3">{model.title}</p>
                <ModelDetails model={model as SmileModelCms} active={activeId === model.id} />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
