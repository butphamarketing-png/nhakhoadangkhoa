import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";
import MediaFrame from "@/components/ui/MediaFrame";
import { IMAGES } from "@/lib/images";

const SERVICES_LIST = [
  "Nhổ răng & nhổ răng khôn",
  "Trám răng thẩm mỹ",
  "Điều trị tủy — nội nha",
  "Cạo vôi & tẩy trắng",
  "Điều trị viêm nướu — nha chu",
];

export default function NhaKhoaTongQuatPage() {
  return (
    <div>
      <div className="navy-gradient py-20 relative overflow-hidden">
        <div className="container-custom relative">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/">
              <span className="hover:text-white cursor-pointer">Trang chủ</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/dich-vu">
              <span className="hover:text-white cursor-pointer">Dịch vụ</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Nha khoa tổng quát</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Nha Khoa <span className="text-[#C89B3C]">Tổng Quát</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Điều trị và phòng ngừa toàn diện — chăm sóc răng miệng cho mọi lứa tuổi, an toàn và nhẹ nhàng.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <MediaFrame src={IMAGES.coverClinic} alt="Nha khoa tổng quát" aspect="wide" className="rounded-2xl" />
            <div>
              <h2 className="font-display text-2xl font-bold text-[#0D1B2A] mb-4">Dịch vụ tổng quát</h2>
              <ul className="space-y-3">
                {SERVICES_LIST.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[#0D1B2A]/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/dat-lich">
                <Button className="btn-gold mt-8 !h-12">Đặt lịch khám</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 navy-gradient text-center">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-white mb-4">Tư vấn miễn phí</h2>
          <a href={`tel:${BRAND.hotlineRaw}`} className="btn-gold inline-flex !h-12">
            Gọi {BRAND.hotline}
          </a>
        </div>
      </section>
    </div>
  );
}
