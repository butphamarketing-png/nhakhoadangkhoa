import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ChevronRight, Award, Clock, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBrand } from "@/lib/brand-context";
import { useDoctors } from "@/lib/cms-provider";

const doctorColors: Record<string, string> = {
  "nguyen-dang-khoa": "from-amber-400 to-amber-600",
};
const doctorInitialsMap: Record<string, string> = {
  "nguyen-dang-khoa": "NDK",
};

export default function BacSiPage() {
  const BRAND = useBrand();
  const DOCTORS = useDoctors();
  const params = useParams<{ id: string }>();
  const doctor = DOCTORS.find((d) => d.id === params.id);

  if (!doctor) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-4">Không tìm thấy bác sĩ</h2>
          <Link href="/gioi-thieu">
            <Button className="gold-gradient text-white border-0 rounded-xl px-6 h-11 font-bold">
              Về trang Giới thiệu
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const color = doctorColors[doctor.id] || "from-amber-400 to-amber-600";
  const initials = doctorInitialsMap[doctor.id] || "BS";

  return (
    <div>
      <div className="navy-gradient py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/"><span className="hover:text-white cursor-pointer">Trang chủ</span></Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/gioi-thieu"><span className="hover:text-white cursor-pointer">Giới thiệu</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{doctor.name}</span>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg sticky top-28">
                <div className={`h-56 bg-gradient-to-br ${color} flex items-center justify-center`}>
                  <span className="text-white font-extrabold text-4xl">{initials}</span>
                </div>
                <div className="p-5">
                  <h1 className="font-extrabold text-[#0D1B2A] text-xl mb-1">{doctor.name}</h1>
                  <div className="text-[#C89B3C] font-semibold text-sm mb-3">{doctor.title}</div>
                  <div className="space-y-2 text-sm text-gray-600 mb-5">
                    <div className="flex items-center gap-2"><Award className="w-4 h-4 text-[#C89B3C]" />{doctor.specialty}</div>
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#C89B3C]" />{doctor.experience}</div>
                    <div className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-[#C89B3C]" />{doctor.education}</div>
                  </div>
                  <Link href="/dat-lich">
                    <Button className="w-full gold-gradient text-white border-0 rounded-xl h-11 font-bold"
                      data-testid="button-doctor-booking">
                      Đặt lịch với bác sĩ
                    </Button>
                  </Link>
                  <a href={`tel:${BRAND.hotlineRaw}`} className="block mt-2">
                    <Button variant="outline" className="w-full rounded-xl h-11 font-bold border-2 border-[#0D1B2A] text-[#0D1B2A]"
                      data-testid="button-doctor-phone">
                      Gọi tư vấn ngay
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-extrabold text-[#0D1B2A] mb-3">Giới thiệu</h2>
                <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h3 className="font-bold text-[#0D1B2A] mb-3">Chuyên môn</h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.specialty.split(",").map((s, i) => (
                    <span key={i} className="bg-white border border-amber-200 text-[#C89B3C] text-sm font-semibold px-3 py-1.5 rounded-xl">
                      {s.trim()}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#0D1B2A] mb-3">Đào tạo</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0D1B2A] text-sm">{doctor.education}</div>
                      <div className="text-gray-400 text-xs">Tốt nghiệp chuyên ngành Răng Hàm Mặt</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
