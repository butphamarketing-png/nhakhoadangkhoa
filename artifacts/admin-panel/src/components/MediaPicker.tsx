import { useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Image, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { mediaApi, resolveMediaUrl } from "@/lib/media-api";
import { useToast } from "@/hooks/use-toast";

type Props = {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  altValue?: string;
  onAltChange?: (alt: string) => void;
};

export default function MediaPicker({ value, onChange, label = "Ảnh", altValue, onAltChange }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const qc = useQueryClient();
  const { toast } = useToast();

  const { data: items = [] } = useQuery({
    queryKey: ["media-library", search],
    queryFn: () => mediaApi.list(search || undefined),
    enabled: open,
  });

  const displayUrl = value ? (value.startsWith("/api/media/") ? resolveMediaUrl(value) : value) : "";

  const onFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const asset = await mediaApi.upload(file, file.name);
        onChange(resolveMediaUrl(asset.publicUrl));
        if (onAltChange) onAltChange(asset.alt || file.name);
      }
      qc.invalidateQueries({ queryKey: ["media-library"] });
      toast({ title: "Đã tải ảnh lên" });
      setOpen(false);
    } catch (e) {
      toast({ title: "Lỗi upload", description: (e as Error).message, variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  const pick = (publicUrl: string, alt?: string) => {
    onChange(resolveMediaUrl(publicUrl));
    if (onAltChange && alt) onAltChange(alt);
    setOpen(false);
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex gap-2">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="URL hoặc chọn từ thư viện"
          className="rounded-xl font-mono text-sm"
        />
        <Button type="button" variant="outline" className="rounded-xl shrink-0 gap-1" onClick={() => setOpen(true)}>
          <Image className="w-4 h-4" />
          Thư viện
        </Button>
      </div>
      {displayUrl && (
        <div className="relative w-full max-w-xs rounded-xl overflow-hidden border">
          <img src={displayUrl} alt={altValue || ""} className="w-full h-32 object-cover" />
          <button
            type="button"
            className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white"
            onClick={() => onChange("")}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Thư viện Media — kéo thả hoặc upload</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Tìm kiếm ảnh..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-xl flex-1"
              />
              <Button
                type="button"
                variant="outline"
                className="rounded-xl gap-1"
                disabled={uploading}
                onClick={() => fileRef.current?.click()}
              >
                <Upload className="w-4 h-4" />
                Upload
              </Button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => onFiles(e.target.files)}
              />
            </div>

            <div
              className="border-2 border-dashed rounded-xl p-8 text-center text-sm text-gray-400"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                onFiles(e.dataTransfer.files);
              }}
            >
              Kéo thả ảnh vào đây (tối đa 5MB)
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="group relative aspect-square rounded-lg overflow-hidden border hover:ring-2 hover:ring-[#C89B3C]"
                  onClick={() => pick(item.publicUrl, item.alt)}
                >
                  <img src={resolveMediaUrl(item.publicUrl)} alt={item.alt} className="w-full h-full object-cover" />
                  <span className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-[10px] p-1 truncate opacity-0 group-hover:opacity-100">
                    {item.alt || item.filename}
                  </span>
                </button>
              ))}
            </div>
            {items.length === 0 && (
              <p className="text-sm text-gray-400 text-center">Chưa có ảnh — upload để bắt đầu.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
