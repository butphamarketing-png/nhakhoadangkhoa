import AdminLayout from "@/components/AdminLayout";
import HomeCmsEditor from "@/components/HomeCmsEditor";
import { motion } from "framer-motion";
import { Download, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContent } from "@/lib/use-content";
import { WEBSITE_DEFAULTS } from "@/lib/website-imports";
import { useToast } from "@/hooks/use-toast";
import type { HomeCmsData } from "@website/lib/home-cms-defaults";

export default function TrangChuPage() {
  const fallback = WEBSITE_DEFAULTS.home as HomeCmsData;
  const { data, setData, saving, save } = useContent<HomeCmsData>("home", fallback);
  const { toast } = useToast();

  const persist = async () => {
    if (data.heroSlides.some((s) => !s.src.trim())) {
      toast({ title: "Slideshow thiếu ảnh", variant: "destructive" });
      return;
    }
    try {
      await save(data);
      toast({ title: "Đã lưu toàn bộ trang chủ" });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  return (
    <AdminLayout title="Trang chủ — quản lý toàn bộ">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <p className="text-sm text-gray-500">
          Quản lý slideshow, ảnh từng section, dịch vụ nổi bật, cảm nhận khách hàng… Kéo thả hoặc tải ảnh từ máy.
        </p>
        <div className="flex gap-2 justify-end">
          <Button variant="outline" className="rounded-xl" onClick={() => save(fallback)} disabled={saving}>
            <Download className="w-4 h-4 mr-2" />
            Import mặc định
          </Button>
          <Button className="gold-gradient text-white border-0 rounded-xl" onClick={persist} disabled={saving}>
            <Save className="w-4 h-4 mr-2" />
            {saving ? "Đang lưu..." : "Lưu trang chủ"}
          </Button>
        </div>
        <HomeCmsEditor data={data} onChange={setData} />
      </motion.div>
    </AdminLayout>
  );
}
