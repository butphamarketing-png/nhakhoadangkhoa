import { useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Search, Trash2, Upload } from "lucide-react";
import { mediaApi, resolveMediaUrl } from "@/lib/media-api";
import { useToast } from "@/hooks/use-toast";

export default function MediaLibraryPage() {
  const [search, setSearch] = useState("");
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const qc = useQueryClient();
  const { toast } = useToast();

  const { data: items = [], isLoading, refetch } = useQuery({
    queryKey: ["media-library", search],
    queryFn: () => mediaApi.list(search || undefined),
  });

  const onFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        await mediaApi.upload(file, file.name);
      }
      await qc.invalidateQueries({ queryKey: ["media-library"] });
      toast({ title: `Đã tải ${files.length} ảnh lên` });
    } catch (e) {
      toast({ title: "Lỗi upload", description: (e as Error).message, variant: "destructive" });
    } finally {
      setUploading(false);
      setDragOver(false);
    }
  };

  const removeItem = async (id: string) => {
    if (!confirm("Xóa ảnh này khỏi thư viện?")) return;
    try {
      await mediaApi.remove(id);
      await refetch();
      toast({ title: "Đã xóa ảnh" });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  const updateAlt = async (id: string, alt: string) => {
    try {
      await mediaApi.update(id, { alt });
      await refetch();
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  return (
    <AdminLayout title="Media Library">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <p className="text-sm text-gray-500">
          Tải ảnh từ máy (kéo thả hoặc chọn file) — dùng cho banner, dịch vụ, bài viết và SEO. Ảnh lưu trên database, website hiển thị tự động.
        </p>

        <div className="bg-white rounded-2xl border p-5 space-y-4">
          <p className="font-bold text-sm">Tải ảnh mới</p>
          <div
            className={`border-2 border-dashed rounded-2xl p-10 text-center transition-colors ${
              dragOver ? "border-[#C89B3C] bg-[#C89B3C]/5" : "border-gray-200 bg-gray-50"
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              void onFiles(e.dataTransfer.files);
            }}
          >
            <Upload className="w-10 h-10 mx-auto text-[#C89B3C] mb-3" />
            <p className="text-gray-700 font-medium mb-1">Kéo thả ảnh vào đây</p>
            <p className="text-sm text-gray-400 mb-4">hoặc chọn file từ máy tính</p>
            <Button
              type="button"
              className="gold-gradient text-white border-0 rounded-xl gap-2"
              disabled={uploading}
              onClick={() => fileRef.current?.click()}
            >
              <Upload className="w-4 h-4" />
              {uploading ? "Đang tải..." : "Chọn ảnh từ máy"}
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => void onFiles(e.target.files)}
            />
            <p className="text-xs text-gray-400 mt-3">JPG, PNG, WebP, GIF — tối đa 5MB / ảnh</p>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm kiếm theo tên, alt..."
            className="pl-10 rounded-xl"
          />
        </div>

        {isLoading ? (
          <p className="text-center text-gray-400 py-12">Đang tải thư viện...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-xl border overflow-hidden group">
                <div className="aspect-square relative">
                  <img
                    src={resolveMediaUrl(item.publicUrl)}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="p-3 space-y-2">
                  <Label className="text-[10px] text-gray-400">Alt text (SEO)</Label>
                  <Input
                    defaultValue={item.alt}
                    onBlur={(e) => {
                      if (e.target.value !== item.alt) updateAlt(item.id, e.target.value);
                    }}
                    placeholder="Mô tả ảnh"
                    className="text-xs rounded-lg"
                  />
                  <p className="text-[10px] text-gray-400 truncate">{item.filename}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && items.length === 0 && (
          <p className="text-center text-gray-400 py-12">Chưa có ảnh — kéo thả hoặc bấm &quot;Chọn ảnh từ máy&quot; ở trên.</p>
        )}
      </motion.div>
    </AdminLayout>
  );
}
