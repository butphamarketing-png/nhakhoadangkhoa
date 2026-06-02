import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiFetch } from "@/lib/api";
import { DEFAULT_SITE } from "@/lib/defaults";
import type { SiteSettings } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

const FIELDS: { key: keyof SiteSettings; label: string }[] = [
  { key: "shortName", label: "Tên ngắn" },
  { key: "slogan", label: "Slogan" },
  { key: "hotline", label: "Hotline hiển thị" },
  { key: "hotlineRaw", label: "Số gọi (không dấu)" },
  { key: "email", label: "Email" },
  { key: "website", label: "Website" },
  { key: "address", label: "Địa chỉ" },
  { key: "hours", label: "Giờ làm việc" },
  { key: "facebook", label: "Facebook URL" },
  { key: "zalo", label: "Zalo URL" },
  { key: "messenger", label: "Messenger URL" },
  { key: "youtube", label: "YouTube URL" },
  { key: "tiktok", label: "TikTok URL" },
];

export default function CaiDatPage() {
  const [site, setSite] = useState<SiteSettings>(DEFAULT_SITE);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    apiFetch<SiteSettings>("/api/content/site", { auth: false })
      .then((data) => setSite({ ...DEFAULT_SITE, ...data }))
      .catch(() => setSite(DEFAULT_SITE))
      .finally(() => setLoading(false));
  }, []);

  const save = async () => {
    setSaving(true);
    try {
      await apiFetch("/api/content/site", {
        method: "PUT",
        body: JSON.stringify(site),
      });
      toast({ title: "Đã lưu cài đặt website" });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout title="Cài đặt website">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
        <div className="flex justify-end">
          <Button
            onClick={save}
            disabled={saving || loading}
            className="gold-gradient text-white border-0 rounded-xl h-10 gap-2"
          >
            <Save className="w-4 h-4" />
            {saving ? "Đang lưu..." : "Lưu cài đặt"}
          </Button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 grid gap-4 md:grid-cols-2">
          {FIELDS.map(({ key, label }) => (
            <div key={key} className={key === "address" || key === "hours" ? "md:col-span-2" : ""}>
              <Label className="text-xs text-gray-500 mb-1.5 block">{label}</Label>
              <Input
                value={site[key]}
                onChange={(e) => setSite((s) => ({ ...s, [key]: e.target.value }))}
                className="rounded-xl h-10"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </AdminLayout>
  );
}
