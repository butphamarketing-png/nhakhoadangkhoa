import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, Plus, Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MediaPicker from "@/components/MediaPicker";
import { cmsImageSrc, mediaApi, resolveMediaUrl } from "@/lib/media-api";
import { useToast } from "@/hooks/use-toast";

export type HeroSlide = { id: string; src: string; alt: string };

function newSlideId() {
  return `slide-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

type Props = {
  slides: HeroSlide[];
  onChange: (slides: HeroSlide[]) => void;
};

export default function HeroSlideshowEditor({ slides, onChange }: Props) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const update = (index: number, patch: Partial<HeroSlide>) => {
    const next = [...slides];
    next[index] = { ...next[index], ...patch };
    onChange(next);
  };

  const move = (index: number, dir: -1 | 1) => {
    const next = index + dir;
    if (next < 0 || next >= slides.length) return;
    const copy = [...slides];
    [copy[index], copy[next]] = [copy[next], copy[index]];
    onChange(copy);
  };

  const remove = (index: number) => {
    if (slides.length <= 1) {
      toast({ title: "Cần ít nhất 1 slide", variant: "destructive" });
      return;
    }
    if (!confirm("Xóa slide này khỏi slideshow?")) return;
    onChange(slides.filter((_, i) => i !== index));
  };

  const addEmpty = () => {
    onChange([...slides, { id: newSlideId(), src: "", alt: "" }]);
  };

  const onFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    setUploading(true);
    try {
      const added: HeroSlide[] = [];
      for (const file of Array.from(files)) {
        const asset = await mediaApi.upload(file, file.name);
        added.push({
          id: newSlideId(),
          src: resolveMediaUrl(asset.publicUrl),
          alt: file.name.replace(/\.[^.]+$/, ""),
        });
      }
      onChange([...slides, ...added]);
      toast({ title: `Đã thêm ${added.length} slide vào slideshow` });
    } catch (e) {
      toast({ title: "Lỗi upload", description: (e as Error).message, variant: "destructive" });
    } finally {
      setUploading(false);
      setDragOver(false);
    }
  };

  return (
    <section className="bg-white rounded-2xl border p-5 space-y-4">
      <div className="flex flex-wrap gap-3 justify-between items-start">
        <div>
          <h2 className="font-bold text-[#0D1B2A] text-lg">Slideshow banner trang chủ</h2>
          <p className="text-sm text-gray-500 mt-1">
            Ảnh ngang khuyến nghị <strong>1920×720</strong>. Thứ tự slide = thứ tự hiển thị trên website.
          </p>
        </div>
        <Button type="button" variant="outline" className="rounded-xl gap-1.5" onClick={addEmpty}>
          <Plus className="w-4 h-4" />
          Thêm slide
        </Button>
      </div>

      <div
        className={`border-2 border-dashed rounded-2xl p-6 text-center transition-colors ${
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
        <Upload className="w-8 h-8 mx-auto text-[#C89B3C] mb-2" />
        <p className="text-sm text-gray-600 mb-3">Kéo thả nhiều ảnh vào đây để thêm slide hàng loạt</p>
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
      </div>

      <div className="space-y-4">
        {slides.map((slide, i) => (
          <div key={slide.id} className="rounded-xl border border-gray-100 p-4 bg-gray-50/50">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-sm font-bold text-[#0D1B2A]">
                Slide {i + 1}
                {slide.src ? "" : " — chưa có ảnh"}
              </span>
              <div className="flex gap-1">
                <Button type="button" variant="ghost" size="icon" className="h-8 w-8" disabled={i === 0} onClick={() => move(i, -1)}>
                  <ChevronUp className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  disabled={i === slides.length - 1}
                  onClick={() => move(i, 1)}
                >
                  <ChevronDown className="w-4 h-4" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-red-500" onClick={() => remove(i)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-[200px_1fr] gap-4">
              {slide.src ? (
                <div className="rounded-xl overflow-hidden border bg-white aspect-[16/7]">
                  <img src={cmsImageSrc(slide.src)} alt={slide.alt} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="rounded-xl border border-dashed bg-white aspect-[16/7] flex items-center justify-center text-xs text-gray-400">
                  Chưa có ảnh
                </div>
              )}
              <div className="space-y-3">
                <MediaPicker
                  label="Ảnh slide"
                  compact
                  value={slide.src}
                  altValue={slide.alt}
                  onChange={(src) => update(i, { src })}
                  onAltChange={(alt) => update(i, { alt })}
                />
                <div>
                  <Label className="text-xs">Mô tả ảnh (SEO / accessibility)</Label>
                  <Input
                    value={slide.alt}
                    onChange={(e) => update(i, { alt: e.target.value })}
                    placeholder="VD: Nha Khoa Đăng Khoa — phòng khám Tây Ninh"
                    className="mt-1 rounded-xl text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {slides.length === 0 && (
        <p className="text-center text-gray-400 py-6 text-sm">Chưa có slide — thêm ảnh ở trên.</p>
      )}
    </section>
  );
}
