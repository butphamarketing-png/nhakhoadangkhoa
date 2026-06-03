import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PageToolbar from "@/components/PageToolbar";
import { useContent } from "@/lib/use-content";
import { createMediaItem, EMPTY_MEDIA_LIBRARY, type MediaLibrary } from "@/lib/media-library";
import { useToast } from "@/hooks/use-toast";
import { Search, Trash2 } from "lucide-react";

export default function MediaLibraryPage() {
  const { data, setData, saving, save } = useContent<MediaLibrary>("media_library", EMPTY_MEDIA_LIBRARY);
  const [search, setSearch] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newAlt, setNewAlt] = useState("");
  const { toast } = useToast();

  const filtered = data.items.filter(
    (item) =>
      !search ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.alt.toLowerCase().includes(search.toLowerCase()) ||
      item.url.toLowerCase().includes(search.toLowerCase()),
  );

  const persist = async (next: MediaLibrary) => {
    try {
      await save(next);
      toast({ title: "Đã lưu thư viện media" });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  const addItem = () => {
    if (!newUrl.trim()) return;
    const next = { items: [createMediaItem(newUrl.trim(), newAlt.trim()), ...data.items] };
    setData(next);
    persist(next);
    setNewUrl("");
    setNewAlt("");
  };

  const updateAlt = (id: string, alt: string) => {
    const items = data.items.map((item) => (item.id === id ? { ...item, alt } : item));
    const next = { items };
    setData(next);
  };

  const removeItem = (id: string) => {
    const next = { items: data.items.filter((item) => item.id !== id) };
    setData(next);
    persist(next);
  };

  return (
    <AdminLayout title="Media Library">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <p className="text-sm text-gray-500">
          Quản lý ảnh dùng chung cho bài dịch vụ, banner và nội dung SEO. Upload qua URL — không cần tải lại nhiều lần.
        </p>

        <PageToolbar onSave={() => persist(data)} saving={saving} saveLabel="Lưu thay đổi" />

        <div className="bg-white rounded-2xl border p-5 space-y-3">
          <p className="font-bold text-sm">Thêm ảnh mới</p>
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <Label>URL ảnh</Label>
              <Input value={newUrl} onChange={(e) => setNewUrl(e.target.value)} placeholder="https://... hoặc /images/..." className="mt-1 rounded-xl" />
            </div>
            <div>
              <Label>Alt text (SEO)</Label>
              <Input value={newAlt} onChange={(e) => setNewAlt(e.target.value)} placeholder="Mô tả ảnh" className="mt-1 rounded-xl" />
            </div>
          </div>
          <Button type="button" className="gold-gradient text-white border-0 rounded-xl" onClick={addItem}>
            Thêm vào thư viện
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm kiếm theo tên, alt, URL..."
            className="pl-10 rounded-xl"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border overflow-hidden group">
              <div className="aspect-square relative">
                <img src={item.url} alt={item.alt} className="w-full h-full object-cover" />
                <button
                  type="button"
                  className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="p-3 space-y-2">
                <Input
                  value={item.alt}
                  onChange={(e) => updateAlt(item.id, e.target.value)}
                  placeholder="Alt text"
                  className="text-xs rounded-lg"
                />
                <p className="text-[10px] text-gray-400 truncate font-mono">{item.url}</p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-12">Chưa có ảnh trong thư viện.</p>
        )}
      </motion.div>
    </AdminLayout>
  );
}
