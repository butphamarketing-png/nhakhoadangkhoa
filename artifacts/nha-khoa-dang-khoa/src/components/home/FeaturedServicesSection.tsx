import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import PaginationBar from "@/components/ui/PaginationBar";
import { useHomeCms, useServiceGroups } from "@/lib/cms-provider";
import { fadeUp } from "@/lib/motion";
import MediaFrame from "@/components/ui/MediaFrame";
import type { ServiceGroup } from "@/lib/service-groups";

const PER_PAGE = 4;

function ServiceGroupCard({
  group,
  expanded,
  onToggle,
}: {
  group: ServiceGroup & { displayName: string };
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="card-luxury overflow-hidden group h-full flex flex-col !p-0 !translate-y-0 hover:!translate-y-[-4px]">
      <button
        type="button"
        onClick={onToggle}
        className="text-left w-full flex flex-col flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] rounded-[inherit]"
        data-testid={`link-service-${group.id}`}
      >
        {/* Mobile: hàng ngang — Desktop: ảnh trên */}
        <div className="flex gap-4 p-4 sm:p-0 sm:flex-col sm:gap-0">
          <div className="w-[88px] h-[88px] sm:w-full sm:h-auto shrink-0 rounded-2xl sm:rounded-none overflow-hidden ring-1 ring-black/[0.06] sm:ring-0">
            <MediaFrame
              src={group.image}
              alt={group.title}
              aspect="square"
              className="!aspect-square sm:!aspect-[16/10] h-full w-full"
            />
          </div>

          <div className="flex-1 min-w-0 sm:p-5 md:p-6 flex flex-col">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C89B3C] mb-1.5">
              {group.items.length} dịch vụ
            </p>
            <h3 className="font-display font-bold text-[#0D1B2A] text-[15px] sm:text-lg leading-snug mb-1.5 sm:mb-2">
              {group.displayName}
            </h3>
            <p className="text-xs text-[#0D1B2A]/55 leading-relaxed line-clamp-2 sm:line-clamp-3 flex-1">
              {group.intro}
            </p>
          </div>
        </div>

        <div className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6 mt-auto">
          <span
            className={`inline-flex items-center justify-center gap-1.5 w-full py-2.5 sm:py-3 rounded-full border-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              expanded
                ? "gold-gradient text-white border-transparent"
                : "border-[#C89B3C] text-[#C89B3C] group-hover:gold-gradient group-hover:text-white group-hover:border-transparent"
            }`}
          >
            {expanded ? "Thu gọn" : "Xem danh sách"}
            <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/[0.04] bg-[#FAFAF8]"
          >
            <ul className="py-2 px-3 max-h-52 overflow-y-auto">
              {group.items.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    <span className="flex items-center gap-2 px-3 py-2 text-sm text-[#0D1B2A]/80 hover:text-[#C89B3C] hover:bg-white rounded-lg transition-colors">
                      <ChevronRight className="w-3.5 h-3.5 shrink-0 text-[#C89B3C]/60" />
                      <span className="leading-snug">{item.name}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-3">
              <Link href={group.href}>
                <span className="text-xs font-bold text-[#C89B3C] hover:underline">Xem bảng giá →</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default function FeaturedServicesSection() {
  const { featuredServices } = useHomeCms();
  const serviceGroups = useServiceGroups();
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const cards = serviceGroups.map((g) => {
    const cms = featuredServices.find((f) => f.id === g.id);
    return {
      ...g,
      displayName: cms?.displayName ?? g.title,
      image: cms?.image ?? g.image,
    };
  });

  const totalPages = Math.max(1, Math.ceil(cards.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const slice = cards.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  return (
    <section id="services" className="section-padding section-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C]/25 to-transparent" />
      <div className="container-custom container-narrow">
        <SectionTitle label="Dịch vụ" subtitle="10 nhóm dịch vụ — bấm vào từng danh mục để xem chi tiết">
          DỊCH VỤ NỔI BẬT
        </SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-stretch">
          {slice.map((group, i) => (
            <motion.div
              key={group.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              custom={i}
              className="h-full"
            >
              <ServiceGroupCard
                group={group}
                expanded={expandedId === group.id}
                onToggle={() => setExpandedId(expandedId === group.id ? null : group.id)}
              />
            </motion.div>
          ))}
        </div>

        <PaginationBar page={safePage} totalPages={totalPages} onPage={(p) => { setPage(p); setExpandedId(null); }} />
      </div>
    </section>
  );
}
