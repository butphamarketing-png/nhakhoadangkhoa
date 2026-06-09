import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import MediaFrame from "@/components/ui/MediaFrame";
import type { ServiceGroup } from "@/lib/service-groups";
import { fadeUp } from "@/lib/motion";

type Props = { groups: ServiceGroup[] };

function GroupCard({ group }: { group: ServiceGroup }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="card-luxury overflow-hidden !p-0 !translate-y-0"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
      >
        <MediaFrame src={group.image} alt={group.title} aspect="video" />
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display font-bold text-[#0D1B2A] text-lg mb-2">{group.title}</h3>
              <p className="text-sm text-[#0D1B2A]/60 leading-relaxed line-clamp-2">{group.intro}</p>
            </div>
            <ChevronDown className={`w-5 h-5 shrink-0 text-[#C89B3C] transition-transform ${open ? "rotate-180" : ""}`} />
          </div>
          <p className="mt-3 text-xs font-bold text-[#C89B3C]">{group.items.length} dịch vụ</p>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-black/[0.04] bg-[#FAFAF8]"
          >
            <ul className="py-2 px-2 max-h-64 overflow-y-auto">
              {group.items.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    <span className="flex items-center gap-2 px-3 py-2.5 text-sm text-[#0D1B2A]/80 hover:text-[#C89B3C] hover:bg-white rounded-lg">
                      <ChevronRight className="w-3.5 h-3.5 shrink-0 text-[#C89B3C]/60" />
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-4">
              <Link href={group.href}>
                <span className="text-sm font-bold text-[#C89B3C] hover:underline">Xem bảng giá nhóm →</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function ServiceGroupGrid({ groups }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {groups.map((g) => (
        <GroupCard key={g.id} group={g} />
      ))}
    </div>
  );
}
