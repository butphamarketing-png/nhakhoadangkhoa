import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WEBSITE_DEFAULTS } from "@/lib/website-imports";
import { SITE_CONTENT_KEYS, CMS_LABELS, type SiteContentKey } from "@/lib/cms-keys";
import { saveContent } from "@/lib/use-content";
import { useToast } from "@/hooks/use-toast";

export default function DongBoPage() {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState<SiteContentKey[]>([]);
  const { toast } = useToast();

  const syncAll = async () => {
    setRunning(true);
    setDone([]);
    const completed: SiteContentKey[] = [];
    try {
      for (const key of SITE_CONTENT_KEYS) {
        if (key === "pricing") continue;
        await saveContent(key, WEBSITE_DEFAULTS[key]);
        completed.push(key);
        setDone([...completed]);
      }
      toast({
        title: "Đồng bộ thành công",
        description: "Đã đẩy toàn bộ nội dung mặc định lên Supabase. Website sẽ dùng dữ liệu mới.",
      });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    } finally {
      setRunning(false);
    }
  };

  return (
    <AdminLayout title="Đồng bộ toàn bộ website">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm max-w-2xl">
          <p className="text-sm text-gray-600 mb-4">
            Import một lần toàn bộ nội dung từ code website hiện tại lên database (Supabase).
            Dùng khi mới cài admin hoặc muốn khôi phục mặc định. <strong>Bảng giá</strong> không ghi đè
            (chỉnh riêng tại mục Bảng giá).
          </p>
          <Button
            onClick={syncAll}
            disabled={running}
            className="gold-gradient text-white border-0 rounded-xl h-11 gap-2"
          >
            <Download className="w-4 h-4" />
            {running ? "Đang đồng bộ..." : "Đồng bộ toàn bộ từ website"}
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl">
          {SITE_CONTENT_KEYS.filter((k) => k !== "pricing").map((key) => (
            <div
              key={key}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 text-sm"
            >
              {done.includes(key) ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              ) : (
                <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" />
              )}
              <span className="text-gray-700">{CMS_LABELS[key]}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </AdminLayout>
  );
}
