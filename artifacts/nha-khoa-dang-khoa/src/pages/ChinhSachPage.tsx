import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { usePoliciesCms } from "@/lib/cms-provider";
import { DEFAULT_POLICIES } from "@/lib/policies-content";

interface ChinhSachPageProps {
  slug: string;
}

function renderBody(body: string) {
  return body.split(/\n\n+/).map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-xl font-bold text-[#0D1B2A] mt-8 mb-4">
          {block.replace(/^##\s+/, "")}
        </h2>
      );
    }
    return (
      <p key={i} className="text-gray-600 leading-relaxed whitespace-pre-line">
        {block}
      </p>
    );
  });
}

export default function ChinhSachPage({ slug }: ChinhSachPageProps) {
  const policies = usePoliciesCms();
  const page = policies.find((p) => p.slug === slug) ?? DEFAULT_POLICIES.find((p) => p.slug === slug);
  const title = page?.title ?? "Chính sách";
  const body = page?.body ?? "";

  return (
    <div>
      <div className="navy-gradient py-16">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{title}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h1>
        </div>
      </div>

      <div className="container-custom py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
          {renderBody(body)}
        </motion.div>
      </div>
    </div>
  );
}
