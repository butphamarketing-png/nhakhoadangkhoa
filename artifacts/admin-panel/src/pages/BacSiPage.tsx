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

type Doctor = {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  education: string;
  bio: string;
};

const emptyDoctor = (): Doctor => ({
  id: `bs-${Date.now()}`,
  name: "",
  title: "",
  specialty: "",
  experience: "",
  education: "",
  bio: "",
});

export default function BacSiPage() {
  const fallback = WEBSITE_DEFAULTS.doctors as Doctor[];
  const { data: doctors, loading, saving, save } = useContent<Doctor[]>("doctors", fallback);
  const [edit, setEdit] = useState<Doctor | null>(null);
  const { toast } = useToast();

  const persist = async (next: Doctor[]) => {
    try {
      await save(next);
      toast({ title: "Đã lưu danh sách bác sĩ" });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  return (
    <AdminLayout title="Quản lý bác sĩ">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
        <div className="flex flex-wrap gap-2 justify-between">
          <p className="text-sm text-gray-500">{doctors.length} bác sĩ · hiển thị trang Giới thiệu</p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="rounded-xl h-10"
              onClick={() => persist(fallback)}
              disabled={saving}
            >
              <Download className="w-4 h-4 mr-2" />
              Import mặc định
            </Button>
            <Button className="gold-gradient text-white border-0 rounded-xl h-10" onClick={() => setEdit(emptyDoctor())}>
              <Plus className="w-4 h-4 mr-2" />
              Thêm bác sĩ
            </Button>
          </div>
        </div>

        {loading ? (
          <p className="text-sm text-gray-400">Đang tải...</p>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {doctors.map((doc) => (
              <div key={doc.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <h3 className="font-extrabold text-[#0D1B2A]">{doc.name}</h3>
                <p className="text-xs text-[#C89B3C] font-semibold mt-1">{doc.title}</p>
                <p className="text-xs text-gray-500 mt-2">{doc.specialty}</p>
                <div className="flex gap-2 mt-4">
                  <button type="button" onClick={() => setEdit(doc)} className="text-xs text-[#C89B3C] font-semibold">
                    <Edit2 className="w-3.5 h-3.5 inline mr-1" />
                    Sửa
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm("Xóa bác sĩ này?")) persist(doctors.filter((d) => d.id !== doc.id));
                    }}
                    className="text-xs text-red-400 font-semibold"
                  >
                    <Trash2 className="w-3.5 h-3.5 inline mr-1" />
                    Xóa
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      <Dialog open={!!edit} onOpenChange={(o) => !o && setEdit(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Bác sĩ</DialogTitle>
          </DialogHeader>
          {edit && (
            <div className="space-y-3 pt-2">
              {(
                [
                  ["name", "Họ tên"],
                  ["title", "Chức danh"],
                  ["specialty", "Chuyên khoa"],
                  ["experience", "Kinh nghiệm"],
                  ["education", "Đào tạo"],
                ] as const
              ).map(([key, label]) => (
                <div key={key}>
                  <Label>{label}</Label>
                  <Input
                    value={edit[key]}
                    onChange={(e) => setEdit({ ...edit, [key]: e.target.value })}
                  />
                </div>
              ))}
              <div>
                <Label>Tiểu sử</Label>
                <Textarea value={edit.bio} onChange={(e) => setEdit({ ...edit, bio: e.target.value })} rows={3} />
              </div>
              <Button
                className="w-full gold-gradient text-white border-0"
                disabled={saving}
                onClick={() => {
                  const exists = doctors.some((d) => d.id === edit.id);
                  const next = exists ? doctors.map((d) => (d.id === edit.id ? edit : d)) : [...doctors, edit];
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
