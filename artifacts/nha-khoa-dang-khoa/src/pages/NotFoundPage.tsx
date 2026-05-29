import { Link } from "wouter";
import { motion } from "framer-motion";
import { Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] navy-gradient flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <div className="text-8xl md:text-9xl font-extrabold gold-shimmer mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Trang không tìm thấy</h1>
        <p className="text-white/60 mb-8 text-lg">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="gold-gradient text-white border-0 rounded-xl px-8 h-12 font-bold"
              data-testid="button-404-home">
              <Home className="w-4 h-4 mr-2" /> Về trang chủ
            </Button>
          </Link>
          <a href={`tel:${BRAND.hotlineRaw}`}>
            <Button variant="outline" className="rounded-xl px-8 h-12 font-bold border-2 border-white/30 text-white hover:bg-white/10"
              data-testid="button-404-phone">
              <Phone className="w-4 h-4 mr-2" /> {BRAND.hotline}
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
