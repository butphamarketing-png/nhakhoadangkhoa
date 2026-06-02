import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PRICING_CATALOG } from "@/lib/defaults";
import { useContent } from "@/lib/use-content";
import { useToast } from "@/hooks/use-toast";

export default function BangGiaPage() {
  const { data: prices, setData: setPrices, loading, saving, save } = useContent<Record<string, string>>(
    "pricing",
    {},
  );
  const { toast } = useToast();

  const persist = async () => {
    try {
      await save(prices);
      toast({ title: "Đã lưu bảng giá", description: "Website sẽ hiển thị giá mới sau khi tải lại." });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  return (
    <AdminLayout title="Quản lý bảng giá">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm text-gray-500 max-w-xl">
            Cập nhật giá hiển thị trên trang Bảng giá website. Để trống = hiển thị &quot;Liên hệ&quot;.
          </p>
          <Button
            onClick={persist}
            disabled={saving || loading}
            className="gold-gradient text-white border-0 rounded-xl h-10 gap-2"
          >
            <Save className="w-4 h-4" />
            {saving ? "Đang lưu..." : "Lưu bảng giá"}
          </Button>
        </div>

        {loading ? (
          <p className="text-sm text-gray-400">Đang tải...</p>
        ) : (
          <div className="space-y-6">
            {PRICING_CATALOG.map((group) => (
              <div key={group.group} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
                  <h2 className="font-extrabold text-[#0D1B2A]">{group.group}</h2>
                </div>
                <div className="divide-y divide-gray-50">
                  {group.items.map((item) => (
                    <div key={item.id} className="px-5 py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="text-sm text-gray-700 flex-1">{item.name}</span>
                      <Input
                        placeholder="VD: 15.000.000 – 35.000.000 ₫"
                        value={prices[item.id] ?? ""}
                        onChange={(e) =>
                          setPrices((prev) => ({ ...prev, [item.id]: e.target.value }))
                        }
                        className="sm:w-72 h-9 rounded-xl text-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </AdminLayout>
  );
}
