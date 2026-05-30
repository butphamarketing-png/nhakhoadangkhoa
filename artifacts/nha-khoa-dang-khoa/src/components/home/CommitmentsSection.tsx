import { motion } from "framer-motion";
import { Award, Clock, Heart, Shield, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { fadeUp } from "@/lib/motion";

const COMMITMENTS = [
  { icon: Sparkles, title: "Giá minh bạch", desc: "Báo giá rõ ràng, không phát sinh" },
  { icon: Clock, title: "Thời gian nhanh", desc: "Quy trình tối ưu, hẹn đúng giờ" },
  { icon: Heart, title: "Phục vụ tận tâm", desc: "Theo dõi sát sao từng ca" },
  { icon: Shield, title: "An toàn hiệu quả", desc: "Vô trùng chuẩn y khoa" },
  { icon: Award, title: "Bảo hành chính hãng", desc: "Cam kết sau điều trị" },
];

export default function CommitmentsSection() {
  return (
    <section className="section-padding section-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C89B3C]/0 via-[#C89B3C]/50 to-[#C89B3C]/0" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C89B3C' fill-opacity='1'%3E%3Cpath d='M36 34v-2h2v2h-2zm0-4v-2h2v2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="container-custom container-narrow relative">
        <SectionTitle label="Cam kết" subtitle="Cam kết chất lượng dịch vụ nha khoa cao cấp">
          5 CAM KẾT AN TOÀN HIỆU QUẢ
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {COMMITMENTS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
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
          ))}
        </div>
      </div>
    </section>
  );
}
