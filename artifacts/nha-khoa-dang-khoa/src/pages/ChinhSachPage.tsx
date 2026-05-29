import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { BRAND } from "@/lib/constants";

interface ChinhSachPageProps {
  title: string;
}

export default function ChinhSachPage({ title }: ChinhSachPageProps) {
  return (
    <div>
      {/* Hero */}
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

      {/* Content */}
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto prose prose-lg"
        >
          <p className="text-gray-600 leading-relaxed">
            Tại <strong>Hệ Thống Nha Khoa Đăng Khoa</strong>, chúng tôi cam kết đảm bảo quyền lợi tốt nhất cho khách hàng.
            Chính sách này được xây dựng dựa trên tiêu chuẩn y tế quốc tế và quy định pháp luật Việt Nam.
          </p>
          <h2 className="text-xl font-bold text-[#0D1B2A] mt-8 mb-4">1. Cam kết của chúng tôi</h2>
          <p className="text-gray-600 leading-relaxed">
            Nha Khoa Đăng Khoa đảm bảo tất cả dịch vụ được thực hiện theo quy trình chuẩn y khoa,
            sử dụng vật liệu chính hãng và thiết bị hiện đại nhất.
          </p>
          <h2 className="text-xl font-bold text-[#0D1B2A] mt-8 mb-4">2. Quyền lợi khách hàng</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Được tư vấn đầy đủ trước khi điều trị</li>
            <li>Báo giá chi tiết và minh bạch</li>
            <li>Bảo hành theo điều khoản hợp đồng</li>
            <li>Hỗ trợ 24/7 qua hotline {BRAND.hotline}</li>
          </ul>
          <h2 className="text-xl font-bold text-[#0D1B2A] mt-8 mb-4">3. Liên hệ</h2>
          <p className="text-gray-600">
            Mọi thắc mắc vui lòng liên hệ: <strong>{BRAND.email}</strong> hoặc hotline <strong>{BRAND.hotline}</strong>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
