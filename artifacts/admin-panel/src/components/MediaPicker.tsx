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
import { mediaApi, resolveMediaUrl, cmsImageSrc } from "@/lib/media-api";
import { useToast } from "@/hooks/use-toast";

type Props = {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  altValue?: string;
  onAltChange?: (alt: string) => void;
  compact?: boolean;
};

export default function MediaPicker({ value, onChange, label = "Ảnh", altValue, onAltChange, compact }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const qc = useQueryClient();
  const { toast } = useToast();

  const { data: items = [] } = useQuery({
    queryKey: ["media-library", search],
    queryFn: () => mediaApi.list(search || undefined),
    enabled: open,
  });

  const displayUrl = value ? cmsImageSrc(value) : "";

  const onFiles = async (files: FileList | null, closeAfter = false) => {
    if (!files?.length) return;
    setUploading(true);
    try {
      let lastUrl = value;
      for (const file of Array.from(files)) {
        const asset = await mediaApi.upload(file, file.name);
        lastUrl = resolveMediaUrl(asset.publicUrl);
        onChange(lastUrl);
        if (onAltChange) onAltChange(asset.alt || file.name);
      }
      qc.invalidateQueries({ queryKey: ["media-library"] });
      toast({ title: "Đã tải ảnh lên" });
      if (closeAfter) setOpen(false);
    } catch (e) {
      toast({ title: "Lỗi upload", description: (e as Error).message, variant: "destructive" });
    } finally {
      setUploading(false);
      setDragOver(false);
    }
  };

  const pick = (publicUrl: string, alt?: string) => {
    onChange(resolveMediaUrl(publicUrl));
    if (onAltChange && alt) onAltChange(alt);
    setOpen(false);
  };

  const dropZone = (
    <div
      className={`border-2 border-dashed rounded-xl text-center transition-colors ${
        compact ? "p-4" : "p-6"
      } ${dragOver ? "border-[#C89B3C] bg-[#C89B3C]/5" : "border-gray-200 bg-gray-50/80"}`}
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
      <Upload className={`mx-auto text-[#C89B3C] ${compact ? "w-6 h-6 mb-1" : "w-8 h-8 mb-2"}`} />
      <p className={`text-gray-600 ${compact ? "text-xs" : "text-sm"}`}>
        Kéo thả ảnh vào đây hoặc bấm <strong>Tải từ máy</strong>
      </p>
      <p className="text-[10px] text-gray-400 mt-1">JPG, PNG, WebP — tối đa 5MB</p>
    </div>
  );

  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          className="gold-gradient text-white border-0 rounded-xl gap-1.5"
          disabled={uploading}
          onClick={() => fileRef.current?.click()}
        >
          <Upload className="w-4 h-4" />
          {uploading ? "Đang tải..." : "Tải từ máy"}
        </Button>
        <Button type="button" variant="outline" className="rounded-xl gap-1.5" onClick={() => setOpen(true)}>
          <Image className="w-4 h-4" />
          Thư viện
        </Button>
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => void onFiles(e.target.files)}
      />

      {!compact && dropZone}

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Hoặc dán URL ảnh"
        className="rounded-xl font-mono text-sm"
      />

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
            <DialogTitle>Chọn ảnh từ thư viện</DialogTitle>
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
            </div>

            {dropZone}

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
              <p className="text-sm text-gray-400 text-center">Chưa có ảnh — tải lên để bắt đầu.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
