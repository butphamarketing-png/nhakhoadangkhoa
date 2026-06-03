import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import MediaPicker from "@/components/MediaPicker";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageToolbar from "@/components/PageToolbar";
import { cmsImageSrc } from "@/lib/media-api";
import { useContent } from "@/lib/use-content";
import { WEBSITE_DEFAULTS } from "@/lib/website-imports";
import { useToast } from "@/hooks/use-toast";

type MediaCms = {
  homePromotions: { id: string; title: string; image: string; href: string; badge: string }[];
  galleryPromotions: { id: string; image: string; title: string }[];
  galleryTestimonials: { id: string; image: string; name: string }[];
};

export default function ThuVienPage() {
  const fallback = WEBSITE_DEFAULTS.media as MediaCms;
  const { data, setData, saving, save } = useContent<MediaCms>("media", fallback);
  const [tab, setTab] = useState("home-promo");
  const { toast } = useToast();

  const persist = async () => {
    try {
      await save(data);
      toast({ title: "Đã lưu thư viện ảnh" });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  return (
    <AdminLayout title="Thư viện ảnh & Banner">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-sm text-gray-500 mb-4">
          Kéo thả hoặc tải ảnh từ máy cho banner và gallery. Nhớ bấm <strong>Lưu thư viện</strong> sau khi đổi ảnh.
        </p>
        <PageToolbar
          onSave={persist}
          onImport={() => save(fallback)}
          saving={saving}
          saveLabel="Lưu thư viện"
        />

        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="mb-4 flex-wrap h-auto">
            <TabsTrigger value="home-promo">Banner trang chủ</TabsTrigger>
            <TabsTrigger value="gallery-promo">Gallery ưu đãi</TabsTrigger>
            <TabsTrigger value="gallery-kh">Gallery khách hàng</TabsTrigger>
          </TabsList>

          <TabsContent value="home-promo" className="space-y-4">
            {data.homePromotions.map((item, i) => (
              <div key={item.id} className="bg-white rounded-2xl border p-4 grid md:grid-cols-2 gap-3">
                <div>
                  <Label>Tiêu đề</Label>
                  <Input
                    value={item.title}
                    onChange={(e) => {
                      const homePromotions = [...data.homePromotions];
                      homePromotions[i] = { ...item, title: e.target.value };
                      setData({ ...data, homePromotions });
                    }}
                  />
                </div>
                <div className="md:col-span-2">
                  <MediaPicker
                    label="Ảnh banner"
                    compact
                    value={item.image}
                    onChange={(image) => {
                      const homePromotions = [...data.homePromotions];
                      homePromotions[i] = { ...item, image };
                      setData({ ...data, homePromotions });
                    }}
                  />
                </div>
                <div>
                  <Label>Link</Label>
                  <Input
                    value={item.href}
                    onChange={(e) => {
                      const homePromotions = [...data.homePromotions];
                      homePromotions[i] = { ...item, href: e.target.value };
                      setData({ ...data, homePromotions });
                    }}
                  />
                </div>
                <div>
                  <Label>Nhãn</Label>
                  <Input
                    value={item.badge}
                    onChange={(e) => {
                      const homePromotions = [...data.homePromotions];
                      homePromotions[i] = { ...item, badge: e.target.value };
                      setData({ ...data, homePromotions });
                    }}
                  />
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="gallery-promo" className="grid sm:grid-cols-2 gap-4">
            {data.galleryPromotions.map((item, i) => (
              <div key={item.id} className="bg-white rounded-2xl border p-4 space-y-2">
                {item.image && (
                  <img src={cmsImageSrc(item.image)} alt="" className="w-full h-28 object-cover rounded-xl bg-gray-100" />
                )}
                <Input
                  placeholder="Tiêu đề"
                  value={item.title}
                  onChange={(e) => {
                    const galleryPromotions = [...data.galleryPromotions];
                    galleryPromotions[i] = { ...item, title: e.target.value };
                    setData({ ...data, galleryPromotions });
                  }}
                />
                <MediaPicker
                  label="Ảnh"
                  compact
                  value={item.image}
                  onChange={(image) => {
                    const galleryPromotions = [...data.galleryPromotions];
                    galleryPromotions[i] = { ...item, image };
                    setData({ ...data, galleryPromotions });
                  }}
                />
              </div>
            ))}
          </TabsContent>

          <TabsContent value="gallery-kh" className="grid sm:grid-cols-2 gap-4">
            {data.galleryTestimonials.map((item, i) => (
              <div key={item.id} className="bg-white rounded-2xl border p-4 space-y-2">
                {item.image && (
                  <img src={cmsImageSrc(item.image)} alt="" className="w-full h-28 object-cover rounded-xl bg-gray-100" />
                )}
                <Input
                  placeholder="Tên / mô tả"
                  value={item.name}
                  onChange={(e) => {
                    const galleryTestimonials = [...data.galleryTestimonials];
                    galleryTestimonials[i] = { ...item, name: e.target.value };
                    setData({ ...data, galleryTestimonials });
                  }}
                />
                <MediaPicker
                  label="Ảnh"
                  compact
                  value={item.image}
                  onChange={(image) => {
                    const galleryTestimonials = [...data.galleryTestimonials];
                    galleryTestimonials[i] = { ...item, image };
                    setData({ ...data, galleryTestimonials });
                  }}
                />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </motion.div>
    </AdminLayout>
  );
}
