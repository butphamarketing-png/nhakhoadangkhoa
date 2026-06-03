import { useCallback, useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Search, Upload, Trash2, ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { mediaApi, resolveMediaUrl, type MediaAsset } from "@/lib/media-api";
import { useToast } from "@/hooks/use-toast";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onSelect: (url: string, alt: string) => void;
};

export default function MediaLibraryDialog({ open, onOpenChange, onSelect }: Props) {
  const [q, setQ] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const qc = useQueryClient();
  const { toast } = useToast();

  const { data: items = [], isLoading } = useQuery({
    queryKey: ["media-library", q],
    queryFn: () => mediaApi.list(q || undefined),
    enabled: open,
  });

  const onFiles = useCallback(
    async (files: FileList | null) => {
      if (!files?.length) return;
      setUploading(true);
      try {
        for (const file of Array.from(files)) {
          await mediaApi.upload(file, file.name);
        }
        qc.invalidateQueries({ queryKey: ["media-library"] });
        toast({ title: "Đã tải ảnh lên thư viện" });
      } catch (e) {
        toast({ title: "Lỗi upload", description: (e as Error).message, variant: "destructive" });
      } finally {
        setUploading(false);
      }
    },
    [qc, toast],
  );

  const pick = (item: MediaAsset) => {
    onSelect(resolveMediaUrl(item.publicUrl), item.alt || item.filename);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Thư viện Media</DialogTitle>
        </DialogHeader>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Tìm ảnh..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-9 rounded-xl"
            />
          </div>
          <Button
            type="button"
            className="rounded-xl gap-2"
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
          className="flex-1 overflow-y-auto border-2 border-dashed border-gray-200 rounded-xl p-4 min-h-[280px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            onFiles(e.dataTransfer.files);
          }}
        >
          {isLoading ? (
            <p className="text-sm text-gray-400 text-center py-12">Đang tải...</p>
          ) : items.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <ImageIcon className="w-10 h-10 mx-auto mb-2 opacity-40" />
              <p className="text-sm">Kéo thả ảnh vào đây hoặc bấm Upload</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {items.map((item) => (
                <div key={item.id} className="group relative rounded-xl overflow-hidden border bg-gray-50">
                  <button type="button" className="w-full aspect-square" onClick={() => pick(item)}>
                    <img
                      src={resolveMediaUrl(item.publicUrl)}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <button
                    type="button"
                    className="absolute top-1 right-1 p-1 rounded bg-white/90 opacity-0 group-hover:opacity-100"
                    onClick={async () => {
                      if (!confirm("Xóa ảnh này?")) return;
                      await mediaApi.remove(item.id);
                      qc.invalidateQueries({ queryKey: ["media-library"] });
                    }}
                  >
                    <Trash2 className="w-3.5 h-3.5 text-red-500" />
                  </button>
                  <p className="text-[10px] px-2 py-1 truncate text-gray-500">{item.filename}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
