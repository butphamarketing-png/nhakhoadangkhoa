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
import type { CareersCms } from "@website/lib/careers-content";

export default function TuyenDungAdminPage() {
  const fallback = WEBSITE_DEFAULTS.careers as CareersCms;
  const { data, setData, saving, save } = useContent<CareersCms>("careers", fallback);
  const { toast } = useToast();

  return (
    <AdminLayout title="Tuyển dụng">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <div className="flex justify-end">
          <Button className="gold-gradient text-white border-0 rounded-xl" disabled={saving} onClick={async () => {
            try {
              await save(data);
              toast({ title: "Đã lưu tuyển dụng" });
            } catch (e) {
              toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
            }
          }}>
            <Save className="w-4 h-4 mr-2" /> Lưu
          </Button>
        </div>
        <div className="bg-white rounded-2xl border p-5">
          <Label>Giới thiệu trang tuyển dụng</Label>
          <Textarea value={data.intro} rows={3} className="mt-1 rounded-xl" onChange={(e) => setData({ ...data, intro: e.target.value })} />
        </div>
        <div className="space-y-3">
          <h3 className="font-bold text-sm">Vị trí tuyển dụng</h3>
          {data.jobs.map((job, i) => (
            <div key={i} className="bg-white rounded-2xl border p-4 grid md:grid-cols-2 gap-2">
              <Input value={job.title} placeholder="Chức danh" onChange={(e) => {
                const jobs = [...data.jobs];
                jobs[i] = { ...job, title: e.target.value };
                setData({ ...data, jobs });
              }} />
              <Input value={job.dept} placeholder="Phòng ban" onChange={(e) => {
                const jobs = [...data.jobs];
                jobs[i] = { ...job, dept: e.target.value };
                setData({ ...data, jobs });
              }} />
              <Input value={job.type} placeholder="Loại hình" onChange={(e) => {
                const jobs = [...data.jobs];
                jobs[i] = { ...job, type: e.target.value };
                setData({ ...data, jobs });
              }} />
              <Input value={job.level} placeholder="Cấp bậc" onChange={(e) => {
                const jobs = [...data.jobs];
                jobs[i] = { ...job, level: e.target.value };
                setData({ ...data, jobs });
              }} />
              <Button type="button" variant="ghost" size="sm" className="text-red-500 md:col-span-2" onClick={() => setData({ ...data, jobs: data.jobs.filter((_, j) => j !== i) })}>
                <Trash2 className="w-4 h-4" /> Xóa
              </Button>
            </div>
          ))}
          <Button type="button" variant="outline" className="rounded-xl" onClick={() => setData({ ...data, jobs: [...data.jobs, { title: "", dept: "", type: "Toàn thời gian", level: "", color: "#C89B3C" }] })}>
            <Plus className="w-4 h-4 mr-1" /> Thêm vị trí
          </Button>
        </div>
        <div className="space-y-3">
          <h3 className="font-bold text-sm">Phúc lợi</h3>
          {data.benefits.map((b, i) => (
            <div key={i} className="bg-white rounded-2xl border p-4 space-y-2">
              <Input value={b.title} placeholder="Tiêu đề" onChange={(e) => {
                const benefits = [...data.benefits];
                benefits[i] = { ...b, title: e.target.value };
                setData({ ...data, benefits });
              }} />
              <Textarea value={b.desc} placeholder="Mô tả" rows={2} onChange={(e) => {
                const benefits = [...data.benefits];
                benefits[i] = { ...b, desc: e.target.value };
                setData({ ...data, benefits });
              }} />
            </div>
          ))}
        </div>
      </motion.div>
    </AdminLayout>
  );
}
