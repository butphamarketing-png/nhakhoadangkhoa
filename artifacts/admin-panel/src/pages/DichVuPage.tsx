import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Download, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContent } from "@/lib/use-content";
import { WEBSITE_DEFAULTS } from "@/lib/website-imports";
import { useToast } from "@/hooks/use-toast";

type Service = {
  id: string;
  name: string;
  href: string;
  short: string;
  desc: string;
  icon: string;
  color: string;
};

type ServiceMenuGroup = {
  id: string;
  title: string;
  href: string;
  intro: string;
  items: { label: string; href: string; excerpt?: string }[];
};

export default function DichVuPage() {
  const servicesFb = WEBSITE_DEFAULTS.services as Service[];
  const menuFb = WEBSITE_DEFAULTS.service_menu as ServiceMenuGroup[];
  const services = useContent<Service[]>("services", servicesFb);
  const menu = useContent<ServiceMenuGroup[]>("service_menu", menuFb);
  const [tab, setTab] = useState("menu");
  const { toast } = useToast();

  const saveServices = async () => {
    try {
      await services.save(services.data);
      toast({ title: "Đã lưu dịch vụ (form)" });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  const saveMenu = async () => {
    try {
      await menu.save(menu.data);
      toast({ title: "Đã lưu menu dịch vụ" });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  return (
    <AdminLayout title="Quản lý dịch vụ">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="menu">Menu dịch vụ (Header)</TabsTrigger>
            <TabsTrigger value="form">Dịch vụ form đặt lịch</TabsTrigger>
          </TabsList>

          <TabsContent value="menu" className="space-y-4">
            <div className="flex gap-2 justify-end">
              <Button variant="outline" className="rounded-xl" onClick={() => menu.save(menuFb)} disabled={menu.saving}>
                <Download className="w-4 h-4 mr-2" />
                Import mặc định
              </Button>
              <Button className="gold-gradient text-white border-0 rounded-xl" onClick={saveMenu} disabled={menu.saving}>
                <Save className="w-4 h-4 mr-2" />
                Lưu menu
              </Button>
            </div>
            {menu.data.map((g, gi) => (
              <div key={g.id} className="bg-white rounded-2xl border p-5 space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <Label>Nhóm dịch vụ</Label>
                    <Input
                      value={g.title}
                      onChange={(e) => {
                        const next = [...menu.data];
                        next[gi] = { ...g, title: e.target.value };
                        menu.setData(next);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Intro</Label>
                    <Textarea
                      value={g.intro}
                      rows={2}
                      onChange={(e) => {
                        const next = [...menu.data];
                        next[gi] = { ...g, intro: e.target.value };
                        menu.setData(next);
                      }}
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-400">{g.items.length} mục con (chỉnh trên code hoặc đồng bộ toàn bộ)</p>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="form" className="space-y-4">
            <div className="flex gap-2 justify-end">
              <Button variant="outline" className="rounded-xl" onClick={() => services.save(servicesFb)} disabled={services.saving}>
                <Download className="w-4 h-4 mr-2" />
                Import mặc định
              </Button>
              <Button className="gold-gradient text-white border-0 rounded-xl" onClick={saveServices} disabled={services.saving}>
                <Save className="w-4 h-4 mr-2" />
                Lưu
              </Button>
            </div>
            {services.data.map((s, si) => (
              <div key={s.id} className="bg-white rounded-2xl border p-4 grid md:grid-cols-2 gap-3">
                <div>
                  <Label>Tên</Label>
                  <Input
                    value={s.name}
                    onChange={(e) => {
                      const next = [...services.data];
                      next[si] = { ...s, name: e.target.value };
                      services.setData(next);
                    }}
                  />
                </div>
                <div>
                  <Label>Mô tả ngắn</Label>
                  <Input
                    value={s.short}
                    onChange={(e) => {
                      const next = [...services.data];
                      next[si] = { ...s, short: e.target.value };
                      services.setData(next);
                    }}
                  />
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </motion.div>
    </AdminLayout>
  );
}
