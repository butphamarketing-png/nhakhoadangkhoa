import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Download, Save, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import MediaPicker from "@/components/MediaPicker";
import { useContent } from "@/lib/use-content";
import { WEBSITE_DEFAULTS } from "@/lib/website-imports";
import { useToast } from "@/hooks/use-toast";

type AboutSection = {
  slug: string;
  href: string;
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  highlights?: string[];
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function GioiThieuPage() {
  const fallback = WEBSITE_DEFAULTS.about as AboutSection[];
  const { data, setData, saving, save } = useContent<AboutSection[]>("about", fallback);
  const [edit, setEdit] = useState<AboutSection | null>(null);
  const { toast } = useToast();

  const persist = async (next: AboutSection[]) => {
    try {
      await save(next);
      toast({ title: "Đã lưu trang Giới thiệu" });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  return (
    <AdminLayout title="Giới thiệu">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <div className="flex gap-2 justify-end">
          <Button variant="outline" className="rounded-xl" onClick={() => persist(fallback)} disabled={saving}>
            <Download className="w-4 h-4 mr-2" />
            Import mặc định
          </Button>
          <Button className="gold-gradient text-white border-0 rounded-xl" onClick={() => persist(data)} disabled={saving}>
            <Save className="w-4 h-4 mr-2" />
            Lưu tất cả
          </Button>
        </div>

        <div className="space-y-3">
          {data.map((s) => (
            <div key={s.slug} className="bg-white rounded-2xl border p-4 flex justify-between items-start gap-4">
              <div>
                <div className="text-xs text-[#C89B3C] font-semibold">{s.label}</div>
                <h3 className="font-bold text-[#0D1B2A]">{s.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mt-1">{s.subtitle}</p>
              </div>
              <button type="button" onClick={() => setEdit(s)}>
                <Edit2 className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      <Dialog open={!!edit} onOpenChange={(o) => !o && setEdit(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{edit?.label}</DialogTitle>
          </DialogHeader>
          {edit && (
            <div className="space-y-3 pt-2">
              <div>
                <Label>Tiêu đề</Label>
                <Input value={edit.title} onChange={(e) => setEdit({ ...edit, title: e.target.value })} />
              </div>
              <div>
                <Label>Phụ đề</Label>
                <Input value={edit.subtitle} onChange={(e) => setEdit({ ...edit, subtitle: e.target.value })} />
              </div>
              <div>
                <Label>Nội dung (mỗi đoạn một dòng)</Label>
                <Textarea
                  rows={5}
                  value={edit.paragraphs.join("\n\n")}
                  onChange={(e) =>
                    setEdit({
                      ...edit,
                      paragraphs: e.target.value.split(/\n\n+/).filter(Boolean),
                    })
                  }
                />
              </div>
              <MediaPicker label="Ảnh minh họa" value={edit.image ?? ""} onChange={(image) => setEdit({ ...edit, image })} />
              <Button
                className="w-full gold-gradient text-white border-0"
                onClick={() => {
                  const next = data.map((x) => (x.slug === edit.slug ? edit : x));
                  persist(next);
                  setEdit(null);
                }}
              >
                Lưu mục này
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
