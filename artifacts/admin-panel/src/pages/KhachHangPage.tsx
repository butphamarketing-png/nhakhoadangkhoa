import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useContent } from "@/lib/use-content";
import { WEBSITE_DEFAULTS } from "@/lib/website-imports";
import { useToast } from "@/hooks/use-toast";

type Testimonial = {
  id: number;
  name: string;
  service: string;
  rating: number;
  text: string;
  date: string;
};

export default function KhachHangPage() {
  const fallback = WEBSITE_DEFAULTS.testimonials as Testimonial[];
  const { data: items, loading, saving, save } = useContent<Testimonial[]>("testimonials", fallback);
  const [edit, setEdit] = useState<Testimonial | null>(null);
  const { toast } = useToast();

  const persist = async (next: Testimonial[]) => {
    try {
      await save(next);
      toast({ title: "Đã lưu đánh giá khách hàng" });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  return (
    <AdminLayout title="Đánh giá khách hàng">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
        <div className="flex flex-wrap gap-2 justify-end">
          <Button variant="outline" className="rounded-xl h-10" onClick={() => persist(fallback)} disabled={saving}>
            <Download className="w-4 h-4 mr-2" />
            Import mặc định
          </Button>
          <Button
            className="gold-gradient text-white border-0 rounded-xl h-10"
            onClick={() =>
              setEdit({
                id: Date.now(),
                name: "",
                service: "",
                rating: 5,
                text: "",
                date: new Date().toLocaleDateString("vi-VN", { month: "long", year: "numeric" }),
              })
            }
          >
            <Plus className="w-4 h-4 mr-2" />
            Thêm đánh giá
          </Button>
        </div>

        {loading ? (
          <p className="text-sm text-gray-400">Đang tải...</p>
        ) : (
          <div className="space-y-3">
            {items.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-4 border border-gray-100 flex gap-4">
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm text-[#0D1B2A]">{t.name}</div>
                  <div className="text-xs text-[#C89B3C]">{t.service}</div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{t.text}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button type="button" onClick={() => setEdit(t)}>
                    <Edit2 className="w-4 h-4 text-gray-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm("Xóa?")) persist(items.filter((x) => x.id !== t.id));
                    }}
                  >
                    <Trash2 className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      <Dialog open={!!edit} onOpenChange={(o) => !o && setEdit(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Đánh giá</DialogTitle>
          </DialogHeader>
          {edit && (
            <div className="space-y-3 pt-2">
              <div>
                <Label>Tên khách</Label>
                <Input value={edit.name} onChange={(e) => setEdit({ ...edit, name: e.target.value })} />
              </div>
              <div>
                <Label>Dịch vụ</Label>
                <Input value={edit.service} onChange={(e) => setEdit({ ...edit, service: e.target.value })} />
              </div>
              <div>
                <Label>Nội dung</Label>
                <Textarea value={edit.text} onChange={(e) => setEdit({ ...edit, text: e.target.value })} rows={4} />
              </div>
              <Button
                className="w-full gold-gradient text-white border-0"
                disabled={saving}
                onClick={() => {
                  const exists = items.some((x) => x.id === edit.id);
                  const next = exists ? items.map((x) => (x.id === edit.id ? edit : x)) : [...items, edit];
                  persist(next);
                  setEdit(null);
                }}
              >
                Lưu
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
