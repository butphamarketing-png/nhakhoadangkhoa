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

type Promotion = {
  id: number;
  title: string;
  discount: string;
  desc: string;
  expiry: string;
  badge: string;
  color: string;
  href?: string;
};

export default function UuDaiPage() {
  const fallback = WEBSITE_DEFAULTS.promotions as Promotion[];
  const { data, saving, save } = useContent<Promotion[]>("promotions", fallback);
  const [edit, setEdit] = useState<Promotion | null>(null);
  const { toast } = useToast();

  const persist = async (next: Promotion[]) => {
    try {
      await save(next);
      toast({ title: "Đã lưu ưu đãi" });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  return (
    <AdminLayout title="Ưu đãi / Khuyến mãi">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
        <div className="flex gap-2 justify-end">
          <Button variant="outline" className="rounded-xl h-10" onClick={() => persist(fallback)} disabled={saving}>
            <Download className="w-4 h-4 mr-2" />
            Import mặc định
          </Button>
          <Button
            className="gold-gradient text-white border-0 rounded-xl h-10"
            onClick={() =>
              setEdit({
                id: Date.now(),
                title: "",
                discount: "",
                desc: "",
                expiry: "",
                badge: "MỚI",
                color: "from-amber-500 to-yellow-400",
                href: "/uu-dai",
              })
            }
          >
            <Plus className="w-4 h-4 mr-2" />
            Thêm ưu đãi
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {data.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border p-4">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700">{p.badge}</span>
              <h3 className="font-extrabold text-[#0D1B2A] mt-2">{p.title}</h3>
              <p className="text-[#C89B3C] font-bold text-sm">{p.discount}</p>
              <p className="text-xs text-gray-500 mt-2 line-clamp-2">{p.desc}</p>
              <div className="flex gap-3 mt-3">
                <button type="button" onClick={() => setEdit(p)}>
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (confirm("Xóa?")) persist(data.filter((x) => x.id !== p.id));
                  }}
                >
                  <Trash2 className="w-4 h-4 text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <Dialog open={!!edit} onOpenChange={(o) => !o && setEdit(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ưu đãi</DialogTitle>
          </DialogHeader>
          {edit && (
            <div className="space-y-3 pt-2">
              {(
                [
                  ["title", "Tiêu đề"],
                  ["discount", "Giảm giá / Giá"],
                  ["href", "Link bài viết (vd: /uu-dai)"],
                  ["expiry", "Hết hạn"],
                  ["badge", "Nhãn"],
                ] as const
              ).map(([k, label]) => (
                <div key={k}>
                  <Label>{label}</Label>
                  <Input value={edit[k]} onChange={(e) => setEdit({ ...edit, [k]: e.target.value })} />
                </div>
              ))}
              <div>
                <Label>Mô tả</Label>
                <Textarea value={edit.desc} onChange={(e) => setEdit({ ...edit, desc: e.target.value })} rows={3} />
              </div>
              <Button
                className="w-full gold-gradient text-white border-0"
                disabled={saving}
                onClick={() => {
                  const exists = data.some((x) => x.id === edit.id);
                  const next = exists ? data.map((x) => (x.id === edit.id ? edit : x)) : [...data, edit];
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
