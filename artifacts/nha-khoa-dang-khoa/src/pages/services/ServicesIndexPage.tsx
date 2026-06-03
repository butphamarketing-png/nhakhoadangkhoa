import { Link } from "wouter";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import ServiceCategoryGrid from "@/components/services/ServiceCategoryGrid";
import ServiceSeoHead from "@/components/services/ServiceSeoHead";
import { useServiceCatalog, useServiceCatalogStatus } from "@/lib/services/use-service-catalog";
import { buildServiceBreadcrumbs } from "@/lib/services/catalog";
import { BRAND } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";

export default function ServicesIndexPage() {
  const catalog = useServiceCatalog();
  const { loading, isEmpty, hasApi } = useServiceCatalogStatus();
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
        subtitle="Chăm sóc, điều trị và thẩm mỹ nha khoa toàn diện."
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
              Chọn nhóm dịch vụ phù hợp — mỗi danh mục gồm nhiều phương án điều trị chi tiết.
            </p>
            {loading ? (
              <p className="text-center text-[#0D1B2A]/50">Đang tải danh mục dịch vụ...</p>
            ) : isEmpty ? (
              <p className="text-center text-[#0D1B2A]/60 bg-[#FAFAF8] rounded-2xl p-8 border border-[#C89B3C]/15">
                {hasApi
                  ? "Chưa có dịch vụ trên hệ thống. Vui lòng đăng nhập Admin → Catalog dịch vụ → Import dữ liệu mẫu."
                  : "Đang hiển thị dữ liệu mẫu. Cấu hình VITE_API_URL và import database để đồng bộ từ Admin."}
              </p>
            ) : (
              <ServiceCategoryGrid categories={catalog.categories} />
            )}
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
