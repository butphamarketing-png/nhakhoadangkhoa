import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";
import { Plus, Search, Edit2, Trash2, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { BlogPostAdmin } from "@/lib/types";
import { useContent } from "@/lib/use-content";
import { WEBSITE_DEFAULTS } from "@/lib/website-imports";
import { useToast } from "@/hooks/use-toast";
import { BLOG_POSTS } from "@website/lib/blog-posts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import MediaPicker from "@/components/MediaPicker";

export default function BaiVietPage() {
  const fallback = WEBSITE_DEFAULTS.blog as BlogPostAdmin[];
  const { data: posts, setData: setPosts, loading, saving, save } = useContent<BlogPostAdmin[]>("blog", fallback);
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState<BlogPostAdmin | null>(null);
  const { toast } = useToast();

  const saveAll = async (next: BlogPostAdmin[]) => {
    try {
      await save(next);
      toast({ title: "Đã lưu bài viết" });
    } catch (e) {
      toast({ title: "Lỗi", description: (e as Error).message, variant: "destructive" });
    }
  };

  const importFromWebsite = () => {
    const mapped: BlogPostAdmin[] = BLOG_POSTS.map((p) => ({
      ...p,
      status: "published" as const,
    }));
    saveAll(mapped);
  };

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  const saveEdit = async () => {
    if (!edit) return;
    const exists = posts.some((p) => p.id === edit.id);
    const next = exists
      ? posts.map((p) => (p.id === edit.id ? edit : p))
      : [...posts, edit];
    await saveAll(next);
    setEdit(null);
  };

  const remove = async (id: number) => {
    if (!confirm("Xóa bài viết này?")) return;
    await saveAll(posts.filter((p) => p.id !== id));
  };

  const newPost = () => {
    const id = posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
    setEdit({
      id,
      slug: `bai-viet-${id}`,
      href: `/kien-thuc/bai-viet-${id}`,
      title: "",
      category: "Implant",
      excerpt: "",
      date: new Date().toLocaleDateString("vi-VN"),
      readTime: "5 phút",
      image: "/images/blog/blog-implant-quy-trinh.png",
      status: "draft",
    });
  };

  return (
    <AdminLayout title="Quản lý bài viết">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Tìm bài viết..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-10 rounded-xl"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              className="rounded-xl h-10 gap-2"
              onClick={importFromWebsite}
              disabled={saving}
            >
              <Download className="w-4 h-4" />
              Import từ website
            </Button>
            <Button className="gold-gradient text-white border-0 rounded-xl h-10 gap-2" onClick={newPost}>
              <Plus className="w-4 h-4" />
              Viết bài
            </Button>
          </div>
        </div>

        {loading ? (
          <p className="text-sm text-gray-400">Đang tải...</p>
        ) : filtered.length === 0 ? (
          <p className="text-sm text-gray-500 bg-white rounded-2xl p-6 border">
            Chưa có bài trên database. Bấm &quot;Import từ website&quot; để đồng bộ {BLOG_POSTS.length} bài hiện có.
          </p>
        ) : (
          <div className="space-y-3">
            {filtered.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl px-5 py-4 border border-gray-100 flex items-center gap-4 group"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm text-[#0D1B2A] line-clamp-1">{post.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {post.category} · {post.date} · {post.status === "draft" ? "Nháp" : "Đã đăng"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setEdit(post)}
                    className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-[#0D1B2A] hover:text-white"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => remove(post.id)}
                    className="w-8 h-8 rounded-xl bg-red-50 text-red-400 flex items-center justify-center"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      <Dialog open={!!edit} onOpenChange={(o) => !o && setEdit(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{edit?.title ? "Sửa bài viết" : "Bài viết mới"}</DialogTitle>
          </DialogHeader>
          {edit && (
            <div className="space-y-3 pt-2">
              <div>
                <Label>Tiêu đề</Label>
                <Input value={edit.title} onChange={(e) => setEdit({ ...edit, title: e.target.value })} />
              </div>
              <div>
                <Label>Danh mục</Label>
                <Input value={edit.category} onChange={(e) => setEdit({ ...edit, category: e.target.value })} />
              </div>
              <div>
                <Label>Mô tả ngắn</Label>
                <Textarea value={edit.excerpt} onChange={(e) => setEdit({ ...edit, excerpt: e.target.value })} rows={3} />
              </div>
              <MediaPicker label="Ảnh bài viết" value={edit.image} onChange={(image) => setEdit({ ...edit, image })} />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Ngày</Label>
                  <Input value={edit.date} onChange={(e) => setEdit({ ...edit, date: e.target.value })} />
                </div>
                <div>
                  <Label>Trạng thái</Label>
                  <select
                    className="w-full h-10 rounded-md border px-2 text-sm"
                    value={edit.status ?? "published"}
                    onChange={(e) =>
                      setEdit({ ...edit, status: e.target.value as "published" | "draft" })
                    }
                  >
                    <option value="published">Đã đăng</option>
                    <option value="draft">Nháp</option>
                  </select>
                </div>
              </div>
              <Button className="w-full gold-gradient text-white border-0" onClick={saveEdit} disabled={saving}>
                Lưu bài viết
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
