import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ServiceCategory } from "@/lib/services/types";
import { categoryPath } from "@/lib/services/slug";
import { fadeUp } from "@/lib/motion";
import MediaFrame from "@/components/ui/MediaFrame";

type Props = { categories: ServiceCategory[] };

export default function ServiceCategoryGrid({ categories }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {categories.map((cat) => (
        <motion.div key={cat.slug} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Link href={categoryPath(cat.slug)} className="block h-full group">
            <article className="card-luxury h-full flex flex-col overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_60px_rgba(200,155,60,0.15)]">
              {cat.image && (
                <div className="relative h-44 overflow-hidden">
                  <MediaFrame
                    src={cat.image}
                    alt={cat.title}
                    aspect="video"
                    className="h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-3xl" aria-hidden>
                    {cat.icon}
                  </span>
                </div>
              )}
              <div className="p-6 md:p-7 flex flex-col flex-1">
                {!cat.image && (
                  <span className="text-4xl mb-4" aria-hidden>
                    {cat.icon}
                  </span>
                )}
                <h2 className="font-display text-xl font-bold text-[#0D1B2A] mb-3 group-hover:text-[#C89B3C] transition-colors">
                  {cat.title}
                </h2>
                <p className="text-sm text-[#0D1B2A]/60 leading-relaxed flex-1 mb-4">{cat.description}</p>
                <p className="text-xs font-bold text-[#C89B3C] uppercase tracking-wider mb-5">
                  {cat.services.length} dịch vụ
                </p>
                <span className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-[#C89B3C] text-[#C89B3C] text-xs font-bold uppercase tracking-wider group-hover:gold-gradient group-hover:text-white group-hover:border-transparent transition-all">
                  Xem chi tiết
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
