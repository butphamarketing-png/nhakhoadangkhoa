import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, MapPin, Clock, CheckCircle, Users, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";
import { useCareersCms } from "@/lib/cms-provider";

const BENEFIT_ICONS = [Award, Star, Users, CheckCircle];

export default function TuyenDungPage() {
  const { intro, jobs: JOBS, benefits: BENEFITS } = useCareersCms();

  return (
    <div>
      <div className="navy-gradient py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Tuyển dụng</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Cơ Hội <span className="text-[#C89B3C]">Nghề Nghiệp</span>
          </h1>
          <p className="text-white/70 text-lg">{intro}</p>
        </div>
      </div>

      <section className="section-padding bg-gradient-to-br from-amber-50 to-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Tại sao gia nhập chúng tôi?</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b, i) => {
              const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 text-center hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[#0D1B2A] mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Vị trí đang tuyển dụng</h2>
          </motion.div>
          <div className="space-y-4">
            {JOBS.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                style={{ borderLeft: `4px solid ${job.color}` }}
                data-testid={`job-${i}`}
              >
                <div>
                  <div className="font-extrabold text-[#0D1B2A] text-lg">{job.title}</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg">{job.dept}</span>
                    <span className="text-xs font-medium bg-blue-50 text-blue-600 px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {job.type}
                    </span>
                    <span className="text-xs font-medium bg-amber-50 text-amber-700 px-2.5 py-1 rounded-lg">{job.level}</span>
                    <span className="text-xs font-medium bg-green-50 text-green-600 px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Tây Ninh
                    </span>
                  </div>
                </div>
                <a href={`mailto:${BRAND.email}?subject=Ứng tuyển: ${job.title}`}>
                  <Button className="gold-gradient text-white border-0 rounded-xl px-5 h-10 font-bold text-sm whitespace-nowrap" data-testid={`button-apply-${i}`}>
                    Ứng tuyển
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 bg-[#0D1B2A] rounded-3xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-3">Không tìm thấy vị trí phù hợp?</h3>
            <p className="text-white/70 mb-5 text-sm">Gửi CV của bạn cho chúng tôi để cân nhắc cho các vị trí trong tương lai.</p>
            <a href={`mailto:${BRAND.email}?subject=CV tự ứng tuyển`}>
              <Button className="gold-gradient text-white border-0 rounded-xl px-8 h-11 font-bold" data-testid="button-send-cv">
                Gửi CV của bạn
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
