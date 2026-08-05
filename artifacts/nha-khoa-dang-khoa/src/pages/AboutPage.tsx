import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Award, Users, Clock, CheckCircle, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import { useBrand } from "@/lib/brand-context";
import { useAboutSections, useDoctors } from "@/lib/cms-provider";
import { IMAGES } from "@/lib/images";
import MediaFrame from "@/components/ui/MediaFrame";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const TIMELINE = [
  { year: "2010", title: "Thành lập", desc: "Nha Khoa Đăng Khoa được thành lập tại Tây Ninh với sứ mệnh mang dịch vụ nha khoa cao cấp đến người dân." },
  { year: "2014", title: "Mở rộng cơ sở", desc: "Đầu tư trang thiết bị hiện đại, mở rộng diện tích phòng khám lên 500m²." },
  { year: "2017", title: "Công nghệ CAD/CAM", desc: "Đầu tư hệ thống CAD/CAM, là đơn vị tiên phong ứng dụng công nghệ này tại Tây Ninh." },
  { year: "2020", title: "10.000 khách hàng", desc: "Cột mốc 10.000 khách hàng được điều trị thành công, củng cố vị thế số 1 tỉnh." },
  { year: "2022", title: "Implant chuẩn quốc tế", desc: "Ra mắt gói Implant chuẩn quốc tế với vật liệu Straumann – Thụy Sĩ." },
  { year: "2024", title: "Hệ thống hoàn thiện", desc: "Hoàn thiện hệ thống nha khoa toàn diện với 15.000+ khách hàng tin tưởng." },
];

const VALUES = [
  { icon: Shield, title: "Uy tín", desc: "Cam kết 100% trung thực trong tư vấn và điều trị, không bán dịch vụ không cần thiết." },
  { icon: Star, title: "Chất lượng", desc: "Sử dụng 100% vật liệu chính hãng, quy trình chuẩn y khoa quốc tế." },
  { icon: Users, title: "Tận tâm", desc: "Mỗi bệnh nhân là ưu tiên hàng đầu. Chúng tôi phục vụ như người thân." },
];

const doctorColors = ["from-amber-400 to-amber-600"];
const doctorInitials = ["PTS"];

export default function AboutPage() {
  const BRAND = useBrand();
  const ABOUT_SECTIONS = useAboutSections();
  const DOCTORS = useDoctors();

  return (
    <div>
      <PageHero
        label="Về chúng tôi"
        breadcrumb="Giới thiệu"
        title={
          <>
            Hệ Thống Nha Khoa
            <br />
            <span className="text-[#C89B3C]">Đăng Khoa</span>
          </>
        }
        subtitle={BRAND.slogan}
      />

      <section className="section-padding section-cream border-b border-[#C89B3C]/10">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-2">Khám phá Nha Khoa Đăng Khoa</h2>
            <p className="text-[#0D1B2A]/60 max-w-2xl mx-auto">Đội ngũ, cơ sở vật chất và quy trình chuẩn quốc tế</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ABOUT_SECTIONS.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link href={s.href}>
                  <div className="card-luxury overflow-hidden !p-0 !translate-y-0 hover:!translate-y-[-6px] group cursor-pointer h-full flex flex-col">
                    {s.image && <MediaFrame src={s.image} alt={s.label} aspect="video" />}
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-[10px] font-bold text-[#C89B3C] uppercase tracking-wider mb-1">{s.eyebrow}</p>
                      <h3 className="font-display font-bold text-lg text-[#0D1B2A] mb-2 group-hover:text-[#C89B3C] transition-colors">{s.label}</h3>
                      <p className="text-sm text-[#0D1B2A]/55 line-clamp-2 flex-1">{s.paragraphs[0]}</p>
                      <span className="inline-flex items-center gap-1 mt-4 text-xs font-bold text-[#C89B3C] uppercase">
                        Xem thêm <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="text-[#C89B3C] font-semibold text-sm uppercase tracking-widest mb-3">Câu chuyện thương hiệu</div>
              <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-5">Hành trình 14 năm vì nụ cười của bạn</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Được thành lập năm 2010 bởi đội ngũ bác sĩ tâm huyết, Nha Khoa Đăng Khoa khởi đầu với
                khát vọng mang dịch vụ nha khoa đẳng cấp quốc tế đến với người dân Tây Ninh.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sau hơn 14 năm phát triển, chúng tôi tự hào là hệ thống nha khoa hàng đầu tỉnh với hơn
                15.000 khách hàng đã tin tưởng và gắn bó. Mỗi nụ cười của bệnh nhân là động lực để
                chúng tôi không ngừng hoàn thiện.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "14+", label: "Năm thành lập" },
                  { value: "15K+", label: "Khách hàng" },
                  { value: "12+", label: "Bác sĩ" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 card-luxury !translate-y-0 !p-4">
                    <div className="text-2xl font-display font-bold text-[#C89B3C]">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={IMAGES.coverClinic} alt="Nha Khoa Đăng Khoa - BS. Phạm Trần Tuyết Sương" className="w-full rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-br from-amber-50 to-white">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Sứ mệnh & Tầm nhìn</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div {...fadeUp} className="bg-[#0D1B2A] rounded-3xl p-8 text-white">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-5">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#C89B3C]">Sứ mệnh</h3>
              <p className="text-white/70 leading-relaxed">
                Mang lại nụ cười khỏe đẹp và sự tự tin cho mỗi người dân Tây Ninh thông qua các dịch vụ
                nha khoa chuyên nghiệp, an toàn và tiên tiến nhất.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white border-2 border-amber-200 rounded-3xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0D1B2A] flex items-center justify-center mb-5">
                <Star className="w-6 h-6 text-[#C89B3C]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">Tầm nhìn</h3>
              <p className="text-gray-600 leading-relaxed">
                Trở thành hệ thống nha khoa số 1 tại Đông Nam Bộ vào năm 2030, với chuỗi phòng khám
                đạt chuẩn quốc tế, ứng dụng công nghệ AI trong chẩn đoán và điều trị.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Giá trị cốt lõi</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-3xl border border-amber-100 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding navy-gradient">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">Hành trình phát triển</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#C89B3C]/30 hidden md:block" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                      <div className="text-[#C89B3C] font-extrabold text-xl mb-1">{item.year}</div>
                      <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-10 h-10 rounded-full gold-gradient items-center justify-center flex-shrink-0 z-10">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Đội ngũ bác sĩ</h2>
          </motion.div>
          <div className="grid md:grid-cols-1 gap-6 mb-10 max-w-md mx-auto">
            {DOCTORS.map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className={`h-56 bg-gradient-to-br ${doctorColors[i]} flex items-center justify-center overflow-hidden`}>
                  {"image" in doc && doc.image ? (
                    <img
                      src={String(doc.image)}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span className="text-white font-extrabold text-3xl">{doctorInitials[i]}</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0D1B2A] text-lg">{doc.name}</h3>
                  <div className="text-[#C89B3C] text-sm font-semibold mb-1">{doc.specialty}</div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <Award className="w-3.5 h-3.5 text-[#C89B3C]" />
                    {doc.education}
                  </div>
                  <p className="text-gray-500 text-sm">{doc.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/dat-lich">
              <Button className="gold-gradient text-white border-0 rounded-xl px-8 h-12 font-bold"
                data-testid="button-about-booking">
                Đặt lịch với bác sĩ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gradient-to-br from-amber-50 to-white">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3">Chứng nhận & Giải thưởng</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Bộ Y tế cấp phép", desc: "Giấy phép hoạt động y tế số 123/BYT" },
              { title: "ISO 9001:2015", desc: "Chứng nhận hệ thống quản lý chất lượng" },
              { title: "Top 10 nha khoa", desc: "Bình chọn nha khoa uy tín Tây Ninh 2023" },
              { title: "Chứng chỉ Invisalign", desc: "Provider chính thức Invisalign Diamond" },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border border-amber-200 rounded-2xl p-5 text-center hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#0D1B2A] text-sm mb-1">{cert.title}</h3>
                <p className="text-gray-400 text-xs">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gold-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Sẵn sàng trải nghiệm dịch vụ?</h2>
          <p className="text-white/80 mb-8 text-lg">Đặt lịch khám ngay hôm nay – tư vấn miễn phí.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dat-lich">
              <Button className="bg-white text-[#C89B3C] rounded-xl h-12 px-8 font-bold hover:shadow-xl transition-all"
                data-testid="button-about-cta">
                Đặt lịch khám
              </Button>
            </Link>
            <a href={`tel:${BRAND.hotlineRaw}`}>
              <Button variant="outline" className="rounded-xl h-12 px-8 font-bold border-2 border-white text-white hover:bg-white/10">
                Gọi: {BRAND.hotline}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
