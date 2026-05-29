import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  Zap, Smile, Star, Sun, Shield, Activity,
  CheckCircle, ChevronRight, Play, ArrowRight,
  Award, Users, Clock, Wrench
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, SERVICES, TESTIMONIALS, PROMOTIONS, BLOG_POSTS, DOCTORS } from "@/lib/constants";
import clinicImg from "@assets/image_1780078863194.png";

const iconMap: Record<string, React.ElementType> = {
  Zap, Smile, Star, Sun, Shield, Activity
};

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ label, value, suffix, icon: Icon }: { label: string; value: number; suffix: string; icon: React.ElementType }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, 2000, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:gold-glow-sm transition-all hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-3xl font-extrabold text-[#0D1B2A]">
        {count}{suffix}
      </div>
      <div className="text-gray-500 text-sm mt-1 font-medium">{label}</div>
    </motion.div>
  );
}

const WHY_REASONS = [
  { icon: Award, title: "Bác sĩ giàu kinh nghiệm", desc: "Đội ngũ bác sĩ trên 10 năm kinh nghiệm, được đào tạo tại các đại học y khoa danh tiếng." },
  { icon: Wrench, title: "Công nghệ hiện đại", desc: "Trang bị máy CT Cone Beam 3D, máy Scan Itero, hệ thống CAD/CAM và laser whitening." },
  { icon: CheckCircle, title: "Vật liệu chính hãng", desc: "100% vật liệu nhập khẩu từ các thương hiệu hàng đầu Mỹ, Hàn Quốc, Thụy Sĩ." },
  { icon: Star, title: "Chi phí minh bạch", desc: "Báo giá rõ ràng trước điều trị, không phát sinh. Hỗ trợ trả góp 0% lãi suất." },
  { icon: Users, title: "Hỗ trợ trả góp", desc: "Hợp tác với các ngân hàng và ví điện tử, trả góp linh hoạt từ 6–24 tháng." },
  { icon: Clock, title: "Chăm sóc sau điều trị", desc: "Hỗ trợ tư vấn, tái khám miễn phí trong thời gian bảo hành theo hợp đồng." },
];

const FEATURES = [
  { icon: Award, title: "Đội ngũ bác sĩ chuyên môn cao" },
  { icon: Wrench, title: "Trang thiết bị hiện đại" },
  { icon: CheckCircle, title: "Quy trình chuẩn y khoa" },
  { icon: Shield, title: "Bảo hành dài hạn rõ ràng" },
  { icon: Star, title: "Không gian sang trọng" },
  { icon: Users, title: "Chăm sóc tận tâm" },
];

const TECHS = [
  {
    title: "Máy CT Cone Beam 3D",
    desc: "Chụp X-quang 3 chiều giúp chuẩn đoán chính xác 100%, lập kế hoạch điều trị tối ưu.",
    bg: "from-blue-600 to-blue-800",
  },
  {
    title: "Máy Scan Itero 5D Plus",
    desc: "Lấy dấu kỹ thuật số chính xác, không cần vật liệu lấy dấu truyền thống, thoải mái hơn cho bệnh nhân.",
    bg: "from-purple-600 to-purple-800",
  },
  {
    title: "Công nghệ CAD/CAM",
    desc: "Thiết kế và phay răng sứ ngay tại phòng khám với độ chính xác cao, tiết kiệm thời gian.",
    bg: "from-emerald-600 to-emerald-800",
  },
  {
    title: "Máy Tẩy Trắng Laser",
    desc: "Công nghệ tẩy trắng laser hiện đại nhất, hiệu quả vượt trội, an toàn tuyệt đối.",
    bg: "from-amber-600 to-amber-800",
  },
];

const doctorColors = ["from-amber-400 to-amber-600", "from-blue-400 to-blue-600", "from-emerald-400 to-emerald-600"];
const doctorInitials = ["NVA", "TTM", "LMD"];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-amber-50 via-white to-blue-50 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />

        <div className="container-custom w-full py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-[#C89B3C] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C] animate-pulse" />
                {BRAND.slogan}
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0D1B2A] leading-tight mb-4">
                TỰ TIN{" "}
                <span className="gold-shimmer">TỎA SÁNG</span>
              </h1>
              <p className="text-xl text-gray-500 font-medium mb-8">
                Cùng Hệ Thống Nha Khoa Đăng Khoa
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {["Uy tín", "Chất lượng", "Tận tâm"].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 bg-white border border-amber-200 px-4 py-2 rounded-xl shadow-sm">
                    <CheckCircle className="w-4 h-4 text-[#C89B3C]" />
                    <span className="font-semibold text-[#0D1B2A] text-sm">{tag}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/dat-lich">
                  <Button
                    className="gold-gradient text-white border-0 rounded-xl h-13 px-8 text-base font-bold shadow-lg hover:scale-105 transition-transform gold-glow"
                    data-testid="button-hero-booking"
                  >
                    <span>Đặt lịch khám</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/lien-he">
                  <Button
                    variant="outline"
                    className="rounded-xl h-13 px-8 text-base font-bold border-2 border-[#0D1B2A] text-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white transition-all"
                    data-testid="button-hero-consult"
                  >
                    Tư vấn miễn phí
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {doctorColors.map((c, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full bg-gradient-to-br ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                      {doctorInitials[i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-[#0D1B2A] text-sm">15.000+ khách hàng</div>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#C89B3C] fill-[#C89B3C]" />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">5.0 Google Reviews</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-lg">
                {/* Gold glow ring */}
                <div className="absolute inset-0 rounded-3xl gold-gradient opacity-20 blur-2xl scale-105 animate-pulse" />
                {/* Main image */}
                <img
                  src={clinicImg}
                  alt="Nha Khoa Đăng Khoa – Phòng khám hiện đại"
                  className="relative w-full rounded-3xl shadow-2xl object-cover max-h-[500px]"
                />
                {/* Floating stat card 1 */}
                <div className="absolute -left-6 top-12 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-extrabold text-[#0D1B2A] text-lg leading-none">15,000+</div>
                    <div className="text-xs text-gray-400">Khách hàng</div>
                  </div>
                </div>
                {/* Floating stat card 2 */}
                <div className="absolute -right-6 bottom-16 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D1B2A] flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#C89B3C]" />
                  </div>
                  <div>
                    <div className="font-extrabold text-[#0D1B2A] text-lg leading-none">10+</div>
                    <div className="text-xs text-gray-400">Năm kinh nghiệm</div>
                  </div>
                </div>
                {/* Hotline badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0D1B2A] text-white rounded-2xl px-5 py-2.5 shadow-xl flex items-center gap-2 whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-bold text-sm">Hotline: {BRAND.hotline}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STATS ===== */}
      <section className="section-padding bg-gradient-to-b from-white to-amber-50/30">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="text-[#C89B3C] font-semibold text-sm uppercase tracking-widest mb-2">Tại sao chọn chúng tôi</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A]">Những con số nói lên tất cả</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <StatCard label="Năm kinh nghiệm" value={10} suffix="+" icon={Award} />
            <StatCard label="Khách hàng hài lòng" value={15000} suffix="+" icon={Users} />
            <StatCard label="Bác sĩ chuyên môn" value={12} suffix="+" icon={CheckCircle} />
            <StatCard label="Thiết bị hiện đại" value={20} suffix="+" icon={Wrench} />
            <StatCard label="Dịch vụ nha khoa" value={30} suffix="+" icon={Star} />
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="text-[#C89B3C] font-semibold text-sm uppercase tracking-widest mb-2">Dịch vụ của chúng tôi</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mb-3">Dịch Vụ Nổi Bật</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Cung cấp đầy đủ các dịch vụ nha khoa cao cấp với công nghệ hiện đại và đội ngũ bác sĩ chuyên môn.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Star;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="h-40 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${service.color}22, ${service.color}44)` }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: `${service.color}33` }}>
                        <Icon className="w-10 h-10" style={{ color: service.color }} />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#0D1B2A] text-lg mb-2">{service.name}</h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.desc}</p>
                    <Link href={service.href}>
                      <span className="inline-flex items-center gap-2 text-[#C89B3C] font-semibold text-sm hover:gap-3 transition-all cursor-pointer"
                        data-testid={`link-service-${service.id}`}>
                        Xem chi tiết
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/dich-vu">
              <Button className="gold-gradient text-white border-0 rounded-xl px-8 h-12 font-bold"
                data-testid="button-all-services">
                Xem tất cả dịch vụ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="section-padding bg-gradient-to-br from-amber-50/40 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div {...fadeUp} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-200">
                <img src={clinicImg} alt="Nha Khoa Đăng Khoa" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#0D1B2A]/20" />
                {/* Play button */}
                <button className="absolute inset-0 flex items-center justify-center group"
                  data-testid="button-play-video">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-[#C89B3C] ml-1" />
                  </div>
                </button>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#0D1B2A] text-white rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-extrabold text-[#C89B3C]">10+</div>
                <div className="text-sm text-white/70">Năm kinh nghiệm</div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[#C89B3C] font-semibold text-sm uppercase tracking-widest mb-3">Về chúng tôi</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mb-5">
                Về Nha Khoa <br />Đăng Khoa
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nha Khoa Đăng Khoa là hệ thống nha khoa uy tín tại Tây Ninh với đội ngũ bác sĩ giàu
                kinh nghiệm, trang thiết bị hiện đại và quy trình chuẩn y khoa. Chúng tôi cam kết
                mang đến cho khách hàng dịch vụ chăm sóc răng miệng trải nghiệm cao cấp, chuyên nghiệp.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {FEATURES.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-amber-100">
                    <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-[#0D1B2A]">{f.title}</span>
                  </div>
                ))}
              </div>
              <Link href="/gioi-thieu">
                <Button className="gold-gradient text-white border-0 rounded-xl px-8 h-12 font-bold"
                  data-testid="button-about-more">
                  Tìm hiểu thêm
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-padding navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-[#C89B3C]" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border-2 border-[#C89B3C]" />
        </div>
        <div className="container-custom relative">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="text-[#C89B3C] font-semibold text-sm uppercase tracking-widest mb-2">Lý do lựa chọn</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Tại Sao Chọn Nha Khoa Đăng Khoa?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Hơn 15.000 khách hàng đã tin tưởng. Đây là lý do tại sao.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_REASONS.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{reason.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOCTORS ===== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="text-[#C89B3C] font-semibold text-sm uppercase tracking-widest mb-2">Chuyên gia của chúng tôi</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mb-3">Đội Ngũ Bác Sĩ</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Gặp gỡ các chuyên gia nha khoa hàng đầu của chúng tôi</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DOCTORS.map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className={`h-52 bg-gradient-to-br ${doctorColors[i]} flex items-center justify-center relative overflow-hidden`}>
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white font-extrabold text-2xl">{doctorInitials[i]}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0D1B2A] text-lg">{doc.name}</h3>
                  <div className="text-[#C89B3C] text-sm font-semibold mb-1">{doc.title}</div>
                  <div className="text-gray-500 text-sm mb-3">{doc.specialty}</div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                    <Award className="w-3.5 h-3.5 text-[#C89B3C]" />
                    {doc.experience}
                  </div>
                  <Link href={`/bac-si/${doc.id}`}>
                    <Button variant="outline" className="w-full rounded-xl border-[#C89B3C] text-[#C89B3C] hover:bg-[#C89B3C] hover:text-white transition-all text-sm"
                      data-testid={`button-doctor-${doc.id}`}>
                      Xem hồ sơ
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY ===== */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="text-[#C89B3C] font-semibold text-sm uppercase tracking-widest mb-2">Trang thiết bị</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mb-3">Công Nghệ Hiện Đại</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Đầu tư vào công nghệ tiên tiến nhất để mang lại kết quả điều trị tốt nhất.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TECHS.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className={`h-40 bg-gradient-to-br ${tech.bg} flex items-center justify-center relative`}>
                  <Wrench className="w-16 h-16 text-white/30" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <h3 className="font-bold text-white text-base leading-tight">{tech.title}</h3>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <p className="text-sm text-gray-500 leading-relaxed">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="text-[#C89B3C] font-semibold text-sm uppercase tracking-widest mb-2">Đánh giá</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mb-3">Khách Hàng Nói Gì</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-amber-100 rounded-3xl p-8 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C89B3C] fill-[#C89B3C]" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                  "{TESTIMONIALS[activeTestimonial].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {TESTIMONIALS[activeTestimonial].name.split(" ").pop()?.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-[#0D1B2A]">{TESTIMONIALS[activeTestimonial].name}</div>
                    <div className="text-sm text-[#C89B3C]">{TESTIMONIALS[activeTestimonial].service}</div>
                  </div>
                  <div className="ml-auto text-xs text-gray-400">{TESTIMONIALS[activeTestimonial].date}</div>
                </div>
              </motion.div>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === activeTestimonial ? "bg-[#C89B3C] w-6" : "bg-gray-300"}`}
                  data-testid={`dot-testimonial-${i}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROMOTIONS ===== */}
      <section className="section-padding bg-gradient-to-br from-amber-50 to-white">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="text-[#C89B3C] font-semibold text-sm uppercase tracking-widest mb-2">Chương trình ưu đãi</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mb-3">Ưu Đãi Đặc Biệt</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROMOTIONS.map((promo, i) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`bg-gradient-to-br ${promo.color} rounded-2xl p-5 text-white hover:scale-105 transition-transform cursor-pointer relative overflow-hidden`}
                data-testid={`card-promo-${promo.id}`}
              >
                <div className="absolute top-3 right-3 bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-lg">
                  {promo.badge}
                </div>
                <div className="text-3xl font-extrabold mb-1">{promo.discount}</div>
                <div className="font-bold text-lg mb-2">{promo.title}</div>
                <div className="text-white/80 text-sm mb-4 leading-relaxed">{promo.desc}</div>
                <div className="text-white/60 text-xs mb-3">HSD: {promo.expiry}</div>
                <Link href="/uu-dai">
                  <span className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 rounded-xl px-3 py-1.5 text-sm font-semibold transition-colors"
                    data-testid={`link-promo-${promo.id}`}>
                    Xem chi tiết <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="text-[#C89B3C] font-semibold text-sm uppercase tracking-widest mb-2">Kiến thức nha khoa</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mb-3">Bài Viết Mới Nhất</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                data-testid={`card-blog-${post.id}`}
              >
                <div className={`h-44 bg-gradient-to-br ${post.color} flex items-center justify-center relative`}>
                  <div className="absolute top-3 left-3 bg-white/90 text-[#0D1B2A] text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                  <div className="text-white/20">
                    <Star className="w-20 h-20" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0D1B2A] text-base mb-2 line-clamp-2 leading-snug">{post.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link href="/kien-thuc">
                      <span className="inline-flex items-center gap-1 text-[#C89B3C] font-semibold text-sm hover:gap-2 transition-all cursor-pointer"
                        data-testid={`link-blog-${post.id}`}>
                        Đọc thêm <ChevronRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/kien-thuc">
              <Button variant="outline" className="rounded-xl px-8 h-12 font-bold border-2 border-[#0D1B2A] text-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white"
                data-testid="button-all-blogs">
                Xem tất cả bài viết
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BOOKING CTA ===== */}
      <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(135deg, #C89B3C 0%, #E8C46A 40%, #C89B3C 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="text-white/80 font-semibold text-sm uppercase tracking-widest mb-3">Đặt lịch ngay</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Đặt Lịch Khám Ngay Hôm Nay
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Đội ngũ tư vấn viên sẵn sàng hỗ trợ bạn 24/7. Khám miễn phí – tư vấn tận tâm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BRAND.hotlineRaw}`}
                  className="flex items-center justify-center gap-2 bg-white text-[#C89B3C] rounded-xl h-12 px-8 font-bold hover:shadow-xl transition-all"
                  data-testid="button-cta-phone"
                >
                  Gọi: {BRAND.hotline}
                </a>
                <Link href="/dat-lich">
                  <Button className="bg-[#0D1B2A] text-white border-0 rounded-xl h-12 px-8 font-bold hover:bg-[#162840] transition-all w-full sm:w-auto"
                    data-testid="button-cta-booking">
                    Đặt lịch trực tuyến
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 mt-8">
                {["Tư vấn miễn phí", "Không chờ đợi", "Bảo mật thông tin"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex justify-center"
            >
              <div className="w-72 h-72 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-5xl font-extrabold">{BRAND.hotline}</div>
                    <div className="text-white/70 mt-2 font-medium">Hotline 24/7</div>
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
