import { useCallback, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import AdminLayout from "@/components/AdminLayout";
import SeoBlockEditor from "@/components/seo-editor/SeoBlockEditor";
import SeoScoreCard from "@/components/seo-editor/SeoScoreCard";
import SeoPreview from "@/components/SeoPreview";
import MediaPicker from "@/components/MediaPicker";
import { motion } from "framer-motion";
import {
  Plus,
  ChevronUp,
  ChevronDown,
  Edit2,
  Trash2,
  Download,
  Eye,
  EyeOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import {
  serviceCatalogApi,
  slugify,
  type ServiceCategoryRow,
  type ServiceFaq,
  type ServiceRow,
} from "@/lib/service-catalog-api";

function CategoryForm({
  initial,
  onSave,
  onCancel,
}: {
  initial?: Partial<ServiceCategoryRow>;
  onSave: (data: Partial<ServiceCategoryRow>) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(initial?.name ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [image, setImage] = useState(initial?.image ?? "");
  const [icon, setIcon] = useState(initial?.icon ?? "🦷");
  const [status, setStatus] = useState(initial?.status ?? "active");

  return (
    <div className="space-y-4">
      <div>
        <Label>Tên danh mục</Label>
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (!initial?.id) setSlug(slugify(e.target.value));
          }}
          className="mt-1 rounded-xl"
        />
      </div>
      <div>
        <Label>Slug URL</Label>
        <Input value={slug} onChange={(e) => setSlug(e.target.value)} className="mt-1 rounded-xl font-mono text-sm" />
        <p className="text-xs text-gray-400 mt-1">/dich-vu/{slug || "..."}</p>
      </div>
      <div>
        <Label>Icon (emoji)</Label>
        <Input value={icon} onChange={(e) => setIcon(e.target.value)} className="mt-1 rounded-xl w-24" />
      </div>
      <div>
        <MediaPicker label="Ảnh đại diện danh mục" value={image} onChange={setImage} />
      </div>
      <div>
        <Label>Mô tả</Label>
        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1 rounded-xl" rows={3} />
      </div>
      <div className="flex items-center gap-2">
        <Switch checked={status === "active"} onCheckedChange={(v) => setStatus(v ? "active" : "hidden")} />
        <Label>Hiển thị trên website</Label>
      </div>
      <div className="flex gap-2 justify-end pt-2">
        <Button variant="outline" onClick={onCancel} className="rounded-xl">
          Hủy
        </Button>
        <Button
          className="gold-gradient text-white border-0 rounded-xl"
          onClick={() => onSave({ name, slug, description, image, icon, status })}
        >
          Lưu danh mục
        </Button>
      </div>
    </div>
  );
}

function ServiceEditor({
  categoryId,
  categoryName,
  categories,
  initial,
  onSave,
  onCancel,
}: {
  categoryId: string;
  categoryName: string;
  categories: ServiceCategoryRow[];
  initial?: ServiceRow;
  onSave: (data: Record<string, unknown>) => void;
  onCancel: () => void;
}) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(categoryId);
  const [name, setName] = useState(initial?.name ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [thumbnail, setThumbnail] = useState(initial?.thumbnail ?? "");
  const [banner, setBanner] = useState(initial?.banner ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [seoTitle, setSeoTitle] = useState(initial?.seoTitle ?? "");
  const [seoDescription, setSeoDescription] = useState(initial?.seoDescription ?? "");
  const [ogTitle, setOgTitle] = useState(initial?.ogTitle ?? "");
  const [ogDescription, setOgDescription] = useState(initial?.ogDescription ?? "");
  const [ogImage, setOgImage] = useState(initial?.ogImage ?? "");
  const [canonicalUrl, setCanonicalUrl] = useState(initial?.canonicalUrl ?? "");
  const [focusKeyword, setFocusKeyword] = useState(initial?.focusKeyword ?? "");
  const [secondaryKeywords, setSecondaryKeywords] = useState(initial?.secondaryKeywords ?? "");
  const [robots, setRobots] = useState(initial?.robots ?? "index, follow");
  const [priceNote, setPriceNote] = useState(initial?.priceNote ?? "");
  const [ctaText, setCtaText] = useState(initial?.ctaText ?? "Đặt lịch khám");
  const [ctaLink, setCtaLink] = useState(initial?.ctaLink ?? "/dat-lich");
  const [status, setStatus] = useState(initial?.status ?? "active");
  const [faq, setFaq] = useState<ServiceFaq[]>(initial?.faq ?? []);
  const [benefits, setBenefits] = useState((initial?.benefits ?? []).join("\n"));
  const [audience, setAudience] = useState((initial?.audience ?? []).join("\n"));

  const activeCategory = categories.find((c) => c.id === selectedCategoryId);
  const activeCategoryName = activeCategory?.name ?? categoryName;

  const autoSeo = () => {
    const site = "Nha Khoa Đăng Khoa";
    const title = `${name} | ${activeCategoryName} — ${site}`;
    const desc = excerpt || `Dịch vụ ${name} tại ${site}, Tây Ninh.`;
    setSeoTitle(title);
    setSeoDescription(desc);
    setOgTitle(title);
    setOgDescription(desc);
    setFocusKeyword(name.toLowerCase());
  };

  return (
    <Tabs defaultValue="content" className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-4">
        <TabsTrigger value="content">Nội dung</TabsTrigger>
        <TabsTrigger value="seo">SEO</TabsTrigger>
        <TabsTrigger value="faq">FAQ</TabsTrigger>
        <TabsTrigger value="extra">Bổ sung</TabsTrigger>
      </TabsList>

      <TabsContent value="content" className="space-y-4">
        <div>
          <Label>Danh mục</Label>
          <select
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(e.target.value)}
            className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
          >
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.icon} {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label>Tên dịch vụ</Label>
            <Input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (!initial?.id) setSlug(slugify(e.target.value));
              }}
              className="mt-1 rounded-xl"
            />
          </div>
          <div>
            <Label>Slug</Label>
            <Input value={slug} onChange={(e) => setSlug(e.target.value)} className="mt-1 rounded-xl font-mono text-sm" />
            <p className="text-xs text-gray-400 mt-1">/dich-vu/.../{slug}</p>
          </div>
        </div>
        <div>
          <Label>Mô tả ngắn (excerpt)</Label>
          <Textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className="mt-1 rounded-xl" rows={2} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <MediaPicker label="Thumbnail" value={thumbnail} onChange={setThumbnail} />
          <MediaPicker label="Banner" value={banner} onChange={setBanner} />
        </div>
        <div>
          <Label>Nội dung bài SEO — Block Editor (TipTap)</Label>
          <p className="text-xs text-gray-400 mb-2">
            Chèn H1–H3, ảnh, CTA, FAQ, YouTube, Maps, bảng giá. Kéo thả ảnh trực tiếp vào vùng soạn.
          </p>
          <SeoBlockEditor value={content} onChange={setContent} serviceName={name} />
        </div>
        <div className="flex items-center gap-2">
          <Switch checked={status === "active"} onCheckedChange={(v) => setStatus(v ? "active" : "hidden")} />
          <Label>Hiển thị</Label>
        </div>
      </TabsContent>

      <TabsContent value="seo" className="space-y-4">
        <Button type="button" variant="outline" size="sm" className="rounded-xl" onClick={autoSeo}>
          Tự sinh SEO
        </Button>
        <div className="grid lg:grid-cols-[1fr_260px] gap-6">
          <div className="space-y-4">
            <div>
              <Label>Focus Keyword</Label>
              <Input value={focusKeyword} onChange={(e) => setFocusKeyword(e.target.value)} className="mt-1 rounded-xl" />
            </div>
            <div>
              <Label>Keywords phụ (phẩy)</Label>
              <Input value={secondaryKeywords} onChange={(e) => setSecondaryKeywords(e.target.value)} className="mt-1 rounded-xl" />
            </div>
            <div>
              <Label>SEO Title</Label>
              <Input value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="mt-1 rounded-xl" />
              <p className="text-xs text-gray-400">{seoTitle.length}/60 ký tự</p>
            </div>
            <div>
              <Label>Meta Description</Label>
              <Textarea value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} className="mt-1 rounded-xl" rows={3} />
              <p className="text-xs text-gray-400">{seoDescription.length}/160 ký tự</p>
            </div>
            <div>
              <Label>Canonical URL</Label>
              <Input value={canonicalUrl} onChange={(e) => setCanonicalUrl(e.target.value)} className="mt-1 rounded-xl font-mono text-sm" />
            </div>
            <div>
              <Label>Robots</Label>
              <select value={robots} onChange={(e) => setRobots(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2 text-sm">
                <option value="index, follow">index, follow</option>
                <option value="noindex, follow">noindex, follow</option>
                <option value="index, nofollow">index, nofollow</option>
                <option value="noindex, nofollow">noindex, nofollow</option>
              </select>
            </div>
            <div>
              <Label>Open Graph Title</Label>
              <Input value={ogTitle} onChange={(e) => setOgTitle(e.target.value)} className="mt-1 rounded-xl" />
            </div>
            <div>
              <Label>Open Graph Description</Label>
              <Textarea value={ogDescription} onChange={(e) => setOgDescription(e.target.value)} className="mt-1 rounded-xl" rows={2} />
            </div>
            <MediaPicker label="Open Graph Image" value={ogImage} onChange={setOgImage} />
            <SeoPreview
              seoTitle={seoTitle}
              seoDescription={seoDescription}
              slug={slug}
              ogTitle={ogTitle}
              ogDescription={ogDescription}
              ogImage={ogImage || banner || thumbnail}
              focusKeyword={focusKeyword}
            />
          </div>
          <SeoScoreCard
            contentHtml={content}
            seoTitle={seoTitle}
            seoDescription={seoDescription}
            focusKeyword={focusKeyword}
            excerpt={excerpt}
            faqCount={faq.length}
            hasBanner={Boolean(banner)}
          />
        </div>
      </TabsContent>

      <TabsContent value="faq" className="space-y-3">
        {faq.map((f, i) => (
          <div key={i} className="p-3 border rounded-xl space-y-2">
            <Input
              placeholder="Câu hỏi"
              value={f.q}
              onChange={(e) => {
                const next = [...faq];
                next[i] = { ...f, q: e.target.value };
                setFaq(next);
              }}
            />
            <Textarea
              placeholder="Trả lời"
              value={f.a}
              rows={2}
              onChange={(e) => {
                const next = [...faq];
                next[i] = { ...f, a: e.target.value };
                setFaq(next);
              }}
            />
            <Button type="button" variant="ghost" size="sm" onClick={() => setFaq(faq.filter((_, j) => j !== i))}>
              Xóa
            </Button>
          </div>
        ))}
        <Button type="button" variant="outline" className="rounded-xl" onClick={() => setFaq([...faq, { q: "", a: "" }])}>
          + Thêm FAQ
        </Button>
      </TabsContent>

      <TabsContent value="extra" className="space-y-4">
        <div>
          <Label>Lợi ích (mỗi dòng một mục)</Label>
          <Textarea value={benefits} onChange={(e) => setBenefits(e.target.value)} className="mt-1 rounded-xl" rows={4} />
        </div>
        <div>
          <Label>Đối tượng phù hợp (mỗi dòng)</Label>
          <Textarea value={audience} onChange={(e) => setAudience(e.target.value)} className="mt-1 rounded-xl" rows={3} />
        </div>
        <div>
          <Label>Ghi chú bảng giá</Label>
          <Textarea value={priceNote} onChange={(e) => setPriceNote(e.target.value)} className="mt-1 rounded-xl" rows={2} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label>CTA Text</Label>
            <Input value={ctaText} onChange={(e) => setCtaText(e.target.value)} className="mt-1 rounded-xl" />
          </div>
          <div>
            <Label>CTA Link</Label>
            <Input value={ctaLink} onChange={(e) => setCtaLink(e.target.value)} className="mt-1 rounded-xl" />
          </div>
        </div>
      </TabsContent>

      <div className="flex gap-2 justify-end pt-4 border-t mt-4">
        <Button variant="outline" onClick={onCancel} className="rounded-xl">
          Hủy
        </Button>
        <Button
          className="gold-gradient text-white border-0 rounded-xl"
          onClick={() =>
            onSave({
              categoryId: selectedCategoryId,
              name,
              slug,
              excerpt,
              thumbnail,
              banner,
              content,
              seoTitle,
              seoDescription,
              ogTitle,
              ogDescription,
              ogImage,
              canonicalUrl,
              focusKeyword,
              priceNote,
              ctaText,
              ctaLink,
              status,
              faq,
              benefits: benefits.split("\n").map((s) => s.trim()).filter(Boolean),
              audience: audience.split("\n").map((s) => s.trim()).filter(Boolean),
            })
          }
        >
          Lưu dịch vụ
        </Button>
      </div>
    </Tabs>
  );
}

export default function DichVuCatalogPage() {
  const qc = useQueryClient();
  const { toast } = useToast();
  const [selectedCatId, setSelectedCatId] = useState<string | null>(null);
  const [catDialog, setCatDialog] = useState<"new" | ServiceCategoryRow | null>(null);
  const [svcDialog, setSvcDialog] = useState<"new" | ServiceRow | null>(null);

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["admin-service-categories"],
    queryFn: serviceCatalogApi.listCategories,
  });

  const selectedCat = categories.find((c) => c.id === selectedCatId) ?? categories[0];

  useEffect(() => {
    if (!selectedCatId && categories[0]) setSelectedCatId(categories[0].id);
  }, [categories, selectedCatId]);

  const { data: services = [], refetch: refetchServices } = useQuery({
    queryKey: ["admin-services", selectedCat?.id],
    queryFn: () => serviceCatalogApi.listServices(selectedCat?.id),
    enabled: Boolean(selectedCat?.id),
  });

  const invalidate = useCallback(() => {
    qc.invalidateQueries({ queryKey: ["admin-service-categories"] });
    qc.invalidateQueries({ queryKey: ["admin-services"] });
  }, [qc]);

  const moveCategory = async (index: number, dir: -1 | 1) => {
    const next = index + dir;
    if (next < 0 || next >= categories.length) return;
    const ids = [...categories].sort((a, b) => a.sortOrder - b.sortOrder).map((c) => c.id);
    [ids[index], ids[next]] = [ids[next], ids[index]];
    await serviceCatalogApi.reorderCategories(ids);
    invalidate();
  };

  const moveService = async (index: number, dir: -1 | 1) => {
    const next = index + dir;
    if (next < 0 || next >= services.length) return;
    const ids = [...services].map((s) => s.id);
    [ids[index], ids[next]] = [ids[next], ids[index]];
    await serviceCatalogApi.reorderServices(ids);
    refetchServices();
  };

  const runSeed = async () => {
    if (!confirm("Import 9 danh mục + toàn bộ dịch vụ mẫu? Chỉ chạy khi database trống.")) return;
    try {
      const res = await serviceCatalogApi.seed();
      toast({ title: `Đã import ${res.categories} danh mục` });
      invalidate();
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  return (
    <AdminLayout title="Catalog dịch vụ (SEO)">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <p className="text-sm text-gray-500 max-w-xl">
            Quản lý danh mục → dịch vụ → bài SEO. Website, menu và sitemap cập nhật tự động từ database.
          </p>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-xl gap-2" onClick={runSeed}>
              <Download className="w-4 h-4" />
              Import mẫu
            </Button>
            <Button className="gold-gradient text-white border-0 rounded-xl gap-2" onClick={() => setCatDialog("new")}>
              <Plus className="w-4 h-4" />
              Danh mục
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-4 min-h-[480px]">
          <div className="lg:col-span-2 bg-white rounded-2xl border p-4">
            <h3 className="font-bold text-sm mb-3">Danh mục dịch vụ</h3>
            {isLoading ? (
              <p className="text-sm text-gray-400">Đang tải...</p>
            ) : categories.length === 0 ? (
              <p className="text-sm text-gray-500">Chưa có danh mục. Bấm Import mẫu hoặc thêm mới.</p>
            ) : (
              <ul className="space-y-1">
                {[...categories]
                  .sort((a, b) => a.sortOrder - b.sortOrder)
                  .map((cat, i) => (
                    <li
                      key={cat.id}
                      className={`flex items-center gap-1 p-2 rounded-xl cursor-pointer ${
                        selectedCat?.id === cat.id ? "bg-[#C89B3C]/10 border border-[#C89B3C]/30" : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedCatId(cat.id)}
                    >
                      <span className="text-lg">{cat.icon}</span>
                      <span className="flex-1 text-sm font-medium truncate">{cat.name}</span>
                      {cat.status === "hidden" ? <EyeOff className="w-3.5 h-3.5 text-gray-400" /> : null}
                      <div className="flex flex-col">
                        <button type="button" className="p-0.5" onClick={(e) => { e.stopPropagation(); moveCategory(i, -1); }}>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </button>
                        <button type="button" className="p-0.5" onClick={(e) => { e.stopPropagation(); moveCategory(i, 1); }}>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="p-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCatDialog(cat);
                        }}
                      >
                        <Edit2 className="w-3.5 h-3.5 text-gray-500" />
                      </button>
                    </li>
                  ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl border p-4">
            {selectedCat ? (
              <>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-sm">
                    {selectedCat.icon} {selectedCat.name}
                    <span className="text-gray-400 font-normal ml-2">/dich-vu/{selectedCat.slug}</span>
                  </h3>
                  <Button size="sm" className="gold-gradient text-white border-0 rounded-xl gap-1" onClick={() => setSvcDialog("new")}>
                    <Plus className="w-3.5 h-3.5" />
                    Dịch vụ
                  </Button>
                </div>
                <ul className="space-y-2">
                  {services.map((svc, i) => (
                    <li key={svc.id} className="flex items-center gap-2 p-3 border rounded-xl">
                      <div className="flex flex-col">
                        <button type="button" onClick={() => moveService(i, -1)}>
                          <ChevronUp className="w-4 h-4" />
                        </button>
                        <button type="button" onClick={() => moveService(i, 1)}>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{svc.name}</p>
                        <p className="text-xs text-gray-400 truncate">/{svc.slug}</p>
                      </div>
                      {svc.status === "hidden" ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-green-600" />}
                      <Button variant="ghost" size="sm" onClick={() => setSvcDialog(svc)}>
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={async () => {
                          if (!confirm("Xóa dịch vụ này?")) return;
                          await serviceCatalogApi.deleteService(svc.id);
                          refetchServices();
                          toast({ title: "Đã xóa" });
                        }}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </li>
                  ))}
                </ul>
                {services.length === 0 && <p className="text-sm text-gray-500">Chưa có dịch vụ trong danh mục này.</p>}
              </>
            ) : (
              <p className="text-sm text-gray-500">Chọn hoặc tạo danh mục.</p>
            )}
          </div>
        </div>
      </motion.div>

      <Dialog open={catDialog !== null} onOpenChange={() => setCatDialog(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{catDialog === "new" ? "Thêm danh mục" : "Sửa danh mục"}</DialogTitle>
          </DialogHeader>
          <CategoryForm
            initial={catDialog === "new" ? undefined : catDialog ?? undefined}
            onCancel={() => setCatDialog(null)}
            onSave={async (data) => {
              try {
                if (catDialog === "new") {
                  await serviceCatalogApi.createCategory(data);
                } else if (catDialog) {
                  await serviceCatalogApi.updateCategory(catDialog.id, data);
                }
                invalidate();
                setCatDialog(null);
                toast({ title: "Đã lưu danh mục" });
              } catch (e) {
                toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
              }
            }}
          />
          {catDialog && catDialog !== "new" && (
            <Button
              variant="destructive"
              className="w-full mt-2 rounded-xl"
              onClick={async () => {
                if (!confirm("Xóa danh mục và tất cả dịch vụ con?")) return;
                await serviceCatalogApi.deleteCategory(catDialog.id);
                invalidate();
                setCatDialog(null);
                setSelectedCatId(null);
              }}
            >
              Xóa danh mục
            </Button>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={svcDialog !== null && Boolean(selectedCat)} onOpenChange={() => setSvcDialog(null)}>
        <DialogContent className="max-w-[min(96vw,1200px)] w-full max-h-[96vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{svcDialog === "new" ? "Thêm dịch vụ SEO" : "Soạn bài dịch vụ SEO"}</DialogTitle>
          </DialogHeader>
          {selectedCat && (
            <ServiceEditor
              categoryId={selectedCat.id}
              categoryName={selectedCat.name}
              categories={categories}
              initial={svcDialog === "new" ? undefined : svcDialog ?? undefined}
              onCancel={() => setSvcDialog(null)}
              onSave={async (data) => {
                try {
                  if (svcDialog === "new") {
                    await serviceCatalogApi.createService(data);
                  } else if (svcDialog) {
                    await serviceCatalogApi.updateService(svcDialog.id, data);
                  }
                  refetchServices();
                  setSvcDialog(null);
                  toast({ title: "Đã lưu dịch vụ" });
                } catch (e) {
                  toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
                }
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
