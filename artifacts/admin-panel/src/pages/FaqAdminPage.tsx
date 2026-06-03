import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Plus, Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContent } from "@/lib/use-content";
import { WEBSITE_DEFAULTS } from "@/lib/website-imports";
import { useToast } from "@/hooks/use-toast";
import type { FaqCategory } from "@website/lib/faq-content";

export default function FaqAdminPage() {
  const fallback = WEBSITE_DEFAULTS.faq as FaqCategory[];
  const { data, setData, saving, save } = useContent<FaqCategory[]>("faq", fallback);
  const { toast } = useToast();

  const persist = async () => {
    try {
      await save(data);
      toast({ title: "Đã lưu FAQ" });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  return (
    <AdminLayout title="FAQ — Câu hỏi thường gặp">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <div className="flex justify-end">
          <Button className="gold-gradient text-white border-0 rounded-xl" onClick={persist} disabled={saving}>
            <Save className="w-4 h-4 mr-2" />
            Lưu FAQ
          </Button>
        </div>
        {data.map((cat, ci) => (
          <div key={ci} className="bg-white rounded-2xl border p-5 space-y-3">
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <Label>Danh mục</Label>
                <Input value={cat.cat} className="mt-1 rounded-xl" onChange={(e) => {
                  const next = [...data];
                  next[ci] = { ...cat, cat: e.target.value };
                  setData(next);
                }} />
              </div>
              <div>
                <Label>Màu (#hex)</Label>
                <Input value={cat.color} className="mt-1 rounded-xl font-mono" onChange={(e) => {
                  const next = [...data];
                  next[ci] = { ...cat, color: e.target.value };
                  setData(next);
                }} />
              </div>
            </div>
            {cat.items.map((item, ii) => (
              <div key={ii} className="border rounded-xl p-3 space-y-2">
                <Input placeholder="Câu hỏi" value={item.q} onChange={(e) => {
                  const next = [...data];
                  const items = [...cat.items];
                  items[ii] = { ...item, q: e.target.value };
                  next[ci] = { ...cat, items };
                  setData(next);
                }} />
                <Textarea placeholder="Trả lời" value={item.a} rows={3} onChange={(e) => {
                  const next = [...data];
                  const items = [...cat.items];
                  items[ii] = { ...item, a: e.target.value };
                  next[ci] = { ...cat, items };
                  setData(next);
                }} />
                <Button type="button" variant="ghost" size="sm" className="text-red-500" onClick={() => {
                  const next = [...data];
                  next[ci] = { ...cat, items: cat.items.filter((_, j) => j !== ii) };
                  setData(next);
                }}>
                  <Trash2 className="w-4 h-4 mr-1" /> Xóa câu
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" size="sm" className="rounded-xl" onClick={() => {
              const next = [...data];
              next[ci] = { ...cat, items: [...cat.items, { q: "", a: "" }] };
              setData(next);
            }}>
              <Plus className="w-4 h-4 mr-1" /> Thêm câu hỏi
            </Button>
          </div>
        ))}
        <Button type="button" variant="outline" className="rounded-xl" onClick={() => setData([...data, { cat: "Danh mục mới", color: "#C89B3C", items: [] }])}>
          <Plus className="w-4 h-4 mr-2" /> Thêm danh mục FAQ
        </Button>
      </motion.div>
    </AdminLayout>
  );
}
