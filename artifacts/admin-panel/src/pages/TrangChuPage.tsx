import AdminLayout from "@/components/AdminLayout";
import HeroSlideshowEditor from "@/components/HeroSlideshowEditor";
import MediaPicker from "@/components/MediaPicker";
import { motion } from "framer-motion";
import { Download, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContent } from "@/lib/use-content";
import { WEBSITE_DEFAULTS } from "@/lib/website-imports";
import { useToast } from "@/hooks/use-toast";

type HomeCms = {
  heroSlides: { id: string; src: string; alt: string }[];
  clinicStats: { value: string; label: string }[];
  homeDoctors: { id: string; name: string; degree: string; image: string; credentials: string[] }[];
};

export default function TrangChuPage() {
  const fallback = WEBSITE_DEFAULTS.home as HomeCms;
  const { data, setData, saving, save } = useContent<HomeCms>("home", fallback);
  const { toast } = useToast();

  const persist = async () => {
    const empty = data.heroSlides.some((s) => !s.src.trim());
    if (empty) {
      toast({
        title: "Thiếu ảnh slide",
        description: "Mỗi slide cần có ảnh trước khi lưu.",
        variant: "destructive",
      });
      return;
    }
    try {
      await save(data);
      toast({ title: "Đã lưu slideshow & trang chủ" });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  return (
    <AdminLayout title="Trang chủ — Slideshow & nội dung">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
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

        <HeroSlideshowEditor
          slides={data.heroSlides}
          onChange={(heroSlides) => setData({ ...data, heroSlides })}
        />

        <section className="bg-white rounded-2xl border p-5 space-y-3">
          <h2 className="font-bold text-[#0D1B2A]">Thống kê</h2>
          {data.clinicStats.map((stat, i) => (
            <div key={i} className="grid grid-cols-2 gap-3">
              <div>
                <Label>Giá trị</Label>
                <Input
                  value={stat.value}
                  onChange={(e) => {
                    const clinicStats = [...data.clinicStats];
                    clinicStats[i] = { ...stat, value: e.target.value };
                    setData({ ...data, clinicStats });
                  }}
                />
              </div>
              <div>
                <Label>Nhãn</Label>
                <Input
                  value={stat.label}
                  onChange={(e) => {
                    const clinicStats = [...data.clinicStats];
                    clinicStats[i] = { ...stat, label: e.target.value };
                    setData({ ...data, clinicStats });
                  }}
                />
              </div>
            </div>
          ))}
        </section>

        <section className="bg-white rounded-2xl border p-5">
          <h2 className="font-bold text-[#0D1B2A] mb-2">Đội ngũ trên trang chủ</h2>
          <p className="text-sm text-gray-500">{data.homeDoctors.length} bác sĩ — chỉnh chi tiết tại mục Bác sĩ hoặc sửa tên/ảnh tại đây.</p>
          {data.homeDoctors.map((d, i) => (
            <div key={d.id} className="grid md:grid-cols-2 gap-3 mt-3 pt-3 border-t">
              <div>
                <Label>Tên</Label>
                <Input
                  value={d.name}
                  onChange={(e) => {
                    const homeDoctors = [...data.homeDoctors];
                    homeDoctors[i] = { ...d, name: e.target.value };
                    setData({ ...data, homeDoctors });
                  }}
                />
              </div>
              <MediaPicker
                label="Ảnh bác sĩ"
                compact
                value={d.image}
                onChange={(image) => {
                  const homeDoctors = [...data.homeDoctors];
                  homeDoctors[i] = { ...d, image };
                  setData({ ...data, homeDoctors });
                }}
              />
            </div>
          ))}
        </section>
      </motion.div>
    </AdminLayout>
  );
}
