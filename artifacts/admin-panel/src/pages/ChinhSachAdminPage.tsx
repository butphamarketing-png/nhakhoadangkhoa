import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContent } from "@/lib/use-content";
import { WEBSITE_DEFAULTS } from "@/lib/website-imports";
import { useToast } from "@/hooks/use-toast";
import type { PolicyPage } from "@website/lib/policies-content";

export default function ChinhSachAdminPage() {
  const fallback = WEBSITE_DEFAULTS.policies as PolicyPage[];
  const { data, setData, saving, save } = useContent<PolicyPage[]>("policies", fallback);
  const { toast } = useToast();

  const update = (i: number, patch: Partial<PolicyPage>) => {
    const next = [...data];
    next[i] = { ...next[i], ...patch };
    setData(next);
  };

  return (
    <AdminLayout title="Chính sách & điều khoản">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex justify-end mb-4">
          <Button className="gold-gradient text-white border-0 rounded-xl" disabled={saving} onClick={async () => {
            try {
              await save(data);
              toast({ title: "Đã lưu chính sách" });
            } catch (e) {
              toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
            }
          }}>
            <Save className="w-4 h-4 mr-2" /> Lưu
          </Button>
        </div>
        <Tabs defaultValue={data[0]?.slug}>
          <TabsList className="flex-wrap h-auto mb-4">
            {data.map((p) => (
              <TabsTrigger key={p.slug} value={p.slug}>{p.title}</TabsTrigger>
            ))}
          </TabsList>
          {data.map((p, i) => (
            <TabsContent key={p.slug} value={p.slug} className="bg-white rounded-2xl border p-5 space-y-3">
              <div>
                <Label>Tiêu đề trang</Label>
                <Input value={p.title} className="mt-1 rounded-xl" onChange={(e) => update(i, { title: e.target.value })} />
              </div>
              <div>
                <Label>URL slug</Label>
                <Input value={p.slug} className="mt-1 rounded-xl font-mono text-sm" readOnly />
              </div>
              <div>
                <Label>Nội dung (Markdown đơn giản: ## tiêu đề)</Label>
                <Textarea value={p.body} rows={14} className="mt-1 rounded-xl font-mono text-sm" onChange={(e) => update(i, { body: e.target.value })} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </AdminLayout>
  );
}
