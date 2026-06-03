import AdminLayout from "@/components/AdminLayout";
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
    try {
      await save(data);
      toast({ title: "Đã lưu nội dung trang chủ" });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  return (
    <AdminLayout title="Trang chủ">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex gap-2 justify-end">
          <Button variant="outline" className="rounded-xl" onClick={() => save(fallback)} disabled={saving}>
            <Download className="w-4 h-4 mr-2" />
            Import mặc định
          </Button>
          <Button className="gold-gradient text-white border-0 rounded-xl" onClick={persist} disabled={saving}>
            <Save className="w-4 h-4 mr-2" />
            Lưu trang chủ
          </Button>
        </div>

        <section className="bg-white rounded-2xl border p-5 space-y-3">
          <h2 className="font-extrabold text-[#0D1B2A]">Banner Hero</h2>
          {data.heroSlides.map((slide, i) => (
            <div key={slide.id} className="grid md:grid-cols-2 gap-3 pb-4 border-b last:border-0">
              <MediaPicker
                label={`Banner ${i + 1}`}
                compact
                value={slide.src}
                altValue={slide.alt}
                onChange={(src) => {
                  const slides = [...data.heroSlides];
                  slides[i] = { ...slide, src };
                  setData({ ...data, heroSlides: slides });
                }}
                onAltChange={(alt) => {
                  const slides = [...data.heroSlides];
                  slides[i] = { ...slide, alt };
                  setData({ ...data, heroSlides: slides });
                }}
              />
            </div>
          ))}
        </section>

        <section className="bg-white rounded-2xl border p-5 space-y-3">
          <h2 className="font-extrabold text-[#0D1B2A]">Thống kê</h2>
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
          <h2 className="font-extrabold text-[#0D1B2A] mb-2">Đội ngũ trên trang chủ</h2>
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
