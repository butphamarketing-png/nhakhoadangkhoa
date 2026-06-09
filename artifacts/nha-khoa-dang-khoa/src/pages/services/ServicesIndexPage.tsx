import { Link } from "wouter";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import ServiceGroupGrid from "@/components/services/ServiceGroupGrid";
import ServiceSeoHead from "@/components/services/ServiceSeoHead";
import { useServiceGroups } from "@/lib/cms-provider";
import { buildServiceBreadcrumbs } from "@/lib/services/catalog";
import { BRAND } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";

export default function ServicesIndexPage() {
  const groups = useServiceGroups();
  const breadcrumbs = buildServiceBreadcrumbs();

  return (
    <div>
      <ServiceSeoHead
        title="Dịch vụ nha khoa"
        description="Chăm sóc, điều trị và thẩm mỹ nha khoa toàn diện tại Nha Khoa Đăng Khoa, Tây Ninh."
        canonicalPath="/dich-vu"
        breadcrumbs={breadcrumbs}
      />

      <PageHero
        label="Dịch vụ"
        breadcrumb="Dịch vụ nha khoa"
        title={
          <>
            DỊCH VỤ <span className="text-[#C89B3C]">NHA KHOA ĐĂNG KHOA</span>
          </>
        }
        subtitle="10 nhóm dịch vụ — bấm vào danh mục để xem danh sách chi tiết và bảng giá."
        cta={
          <Link href="/dat-lich">
            <span className="btn-gold inline-flex items-center !h-12 !px-8 cursor-pointer">Đặt lịch ngay</span>
          </Link>
        }
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B2A] text-center mb-4">
              Danh mục dịch vụ
            </h2>
            <p className="text-center text-[#0D1B2A]/60 max-w-2xl mx-auto mb-12">
              Chọn nhóm dịch vụ phù hợp — mỗi danh mục gồm nhiều phương án điều trị và mức giá tham khảo.
            </p>
            <ServiceGroupGrid groups={groups} />
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 cta-gold-gradient">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-4">Cần tư vấn dịch vụ phù hợp?</h2>
          <p className="text-[#0D1B2A]/70 mb-8">Đội ngũ chuyên gia sẵn sàng tư vấn miễn phí</p>
          <a href={`tel:${BRAND.hotlineRaw}`} className="btn-gold inline-flex items-center !h-12 animate-phone-ring">
            Gọi {BRAND.hotline}
          </a>
        </div>
      </section>
    </div>
  );
}
