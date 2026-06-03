import { useCallback, useEffect, useState } from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Youtube from "@tiptap/extension-youtube";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Link2,
  ImageIcon,
  Table2,
  Youtube as YoutubeIcon,
  LayoutTemplate,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MediaLibraryDialog from "./MediaLibraryDialog";
import {
  BannerCtaBlock,
  CtaBlock,
  FaqBlock,
  GoogleMapsBlock,
  ImageCaptionBlock,
  ImageGalleryBlock,
  ImageSideBlock,
  PricingTableBlock,
} from "./custom-blocks";
import { mediaApi, resolveMediaUrl } from "@/lib/media-api";

type Props = {
  value: string;
  onChange: (html: string) => void;
  serviceName?: string;
};

const SEO_TEMPLATE = (name: string) => `
<h1>${name || "Tên dịch vụ"} Tại Tây Ninh Uy Tín</h1>
<p>Mô tả ngắn 150–300 ký tự về dịch vụ, lợi ích và cam kết tại Nha Khoa Đăng Khoa.</p>
<h2>${name || "Dịch vụ"} là gì?</h2>
<p>Giới thiệu dịch vụ...</p>
<h2>Đối tượng phù hợp</h2>
<ul><li>Khách hàng cần...</li></ul>
<h2>Lợi ích</h2>
<ul><li>Lợi ích 1</li><li>Lợi ích 2</li></ul>
<h2>Quy trình thực hiện</h2>
<ol><li>Thăm khám</li><li>Điều trị</li><li>Tái khám</li></ol>
<h2>Bảng giá tham khảo</h2>
<p>Xem chi tiết tại <a href="/bang-gia">bảng giá</a>.</p>
<h2>Vì sao chọn Nha Khoa Đăng Khoa</h2>
<p>Uy tín — trang thiết bị — bác sĩ giàu kinh nghiệm.</p>
<h2>Câu hỏi thường gặp</h2>
<p></p>
`.trim();

export default function SeoBlockEditor({ value, onChange, serviceName }: Props) {
  const [mediaOpen, setMediaOpen] = useState(false);
  const [mediaMode, setMediaMode] = useState<"inline" | "gallery" | "side-left" | "side-right" | "caption">("inline");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
      Underline,
      Link.configure({ openOnClick: false, HTMLAttributes: { class: "text-[#C89B3C] underline" } }),
      Image.configure({ HTMLAttributes: { class: "rounded-xl max-w-full h-auto my-4" } }),
      Placeholder.configure({ placeholder: "Soạn nội dung SEO — gõ / hoặc dùng thanh công cụ để chèn khối..." }),
      Youtube.configure({ width: 640, height: 360, HTMLAttributes: { class: "rounded-xl my-6 w-full aspect-video" } }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      CtaBlock,
      BannerCtaBlock,
      FaqBlock,
      PricingTableBlock,
      GoogleMapsBlock,
      ImageCaptionBlock,
      ImageGalleryBlock,
      ImageSideBlock,
    ],
    content: value || "",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm md:prose-base max-w-none min-h-[360px] p-4 focus:outline-none",
      },
      handleDrop: (view, event) => {
        const files = event.dataTransfer?.files;
        if (!files?.length) return false;
        const file = files[0];
        if (!file.type.startsWith("image/")) return false;
        event.preventDefault();
        void uploadAndInsert(file);
        return true;
      },
      handlePaste: (view, event) => {
        const items = event.clipboardData?.items;
        if (!items) return false;
        for (const item of items) {
          if (item.type.startsWith("image/")) {
            const file = item.getAsFile();
            if (file) {
              event.preventDefault();
              void uploadAndInsert(file);
              return true;
            }
          }
        }
        return false;
      },
    },
    onUpdate: ({ editor: ed }) => onChange(ed.getHTML()),
  });

  const uploadAndInsert = useCallback(
    async (file: File) => {
      if (!editor) return;
      try {
        const asset = await mediaApi.upload(file, file.name);
        const url = resolveMediaUrl(asset.publicUrl);
        editor.chain().focus().setImage({ src: url, alt: asset.alt }).run();
      } catch {
        /* toast handled by caller if needed */
      }
    },
    [editor],
  );

  useEffect(() => {
    if (!editor) return;
    if (value !== editor.getHTML()) {
      editor.commands.setContent(value || "", false);
    }
  }, [value, editor]);

  const insertFromMedia = (url: string, alt: string) => {
    if (!editor) return;
    switch (mediaMode) {
      case "gallery":
        editor.chain().focus().insertContent({ type: "imageGallery", attrs: { images: [{ src: url, alt }] } }).run();
        break;
      case "caption":
        editor
          .chain()
          .focus()
          .insertContent({ type: "imageCaption", attrs: { src: url, alt, caption: alt } })
          .run();
        break;
      case "side-left":
        editor.chain().focus().insertContent({ type: "imageSide", attrs: { src: url, alt, side: "left" } }).run();
        break;
      case "side-right":
        editor.chain().focus().insertContent({ type: "imageSide", attrs: { src: url, alt, side: "right" } }).run();
        break;
      default:
        editor.chain().focus().setImage({ src: url, alt }).run();
    }
  };

  const openMedia = (mode: typeof mediaMode) => {
    setMediaMode(mode);
    setMediaOpen(true);
  };

  if (!editor) return null;

  const ToolBtn = ({
    onClick,
    active,
    children,
    title,
  }: {
    onClick: () => void;
    active?: boolean;
    children: React.ReactNode;
    title: string;
  }) => (
    <Button
      type="button"
      variant={active ? "secondary" : "ghost"}
      size="sm"
      className="h-8 w-8 p-0"
      title={title}
      onClick={onClick}
    >
      {children}
    </Button>
  );

  return (
    <div className="border rounded-2xl overflow-hidden bg-white shadow-sm">
      <div className="flex flex-wrap gap-0.5 p-2 border-b bg-[#FAFAF8]">
        <ToolBtn title="H1" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive("heading", { level: 1 })}>
          <Heading1 className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn title="H2" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive("heading", { level: 2 })}>
          <Heading2 className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn title="H3" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive("heading", { level: 3 })}>
          <Heading3 className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn title="Đậm" onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")}>
          <Bold className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn title="Nghiêng" onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")}>
          <Italic className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn title="Gạch chân" onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive("underline")}>
          <UnderlineIcon className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn title="Bullet" onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")}>
          <List className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn title="Numbered" onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")}>
          <ListOrdered className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn title="Trích dẫn" onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive("blockquote")}>
          <span className="text-xs font-serif">❝</span>
        </ToolBtn>
        <ToolBtn title="Link" onClick={() => {
          const url = window.prompt("URL:");
          if (url) editor.chain().focus().setLink({ href: url }).run();
        }}>
          <Link2 className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn title="Ảnh" onClick={() => openMedia("inline")}>
          <ImageIcon className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn title="Bảng" onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
          <Table2 className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn title="YouTube" onClick={() => {
          const url = window.prompt("URL YouTube:");
          if (url) editor.commands.setYoutubeVideo({ src: url });
        }}>
          <YoutubeIcon className="w-4 h-4" />
        </ToolBtn>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button type="button" variant="outline" size="sm" className="h-8 text-xs rounded-lg ml-1">
              + Khối nội dung
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="max-h-[70vh] overflow-y-auto">
            <DropdownMenuItem onClick={() => editor.chain().focus().insertContent({ type: "ctaBlock" }).run()}>Nút CTA</DropdownMenuItem>
            <DropdownMenuItem onClick={() => editor.chain().focus().insertContent({ type: "bannerCta" }).run()}>Banner CTA</DropdownMenuItem>
            <DropdownMenuItem onClick={() => editor.chain().focus().insertContent({ type: "faqBlock" }).run()}>FAQ</DropdownMenuItem>
            <DropdownMenuItem onClick={() => editor.chain().focus().insertContent({ type: "pricingTable" }).run()}>Bảng giá</DropdownMenuItem>
            <DropdownMenuItem onClick={() => editor.chain().focus().insertContent({ type: "googleMaps" }).run()}>Google Maps</DropdownMenuItem>
            <DropdownMenuItem onClick={() => openMedia("caption")}>Ảnh + mô tả</DropdownMenuItem>
            <DropdownMenuItem onClick={() => openMedia("gallery")}>Bộ sưu tập ảnh</DropdownMenuItem>
            <DropdownMenuItem onClick={() => openMedia("side-left")}>Ảnh trái — nội dung phải</DropdownMenuItem>
            <DropdownMenuItem onClick={() => openMedia("side-right")}>Ảnh phải — nội dung trái</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-8 text-xs rounded-lg gap-1"
          onClick={() => editor.commands.setContent(SEO_TEMPLATE(serviceName ?? ""), false)}
        >
          <LayoutTemplate className="w-3.5 h-3.5" />
          Mẫu SEO
        </Button>
      </div>

      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="flex gap-1 bg-white border rounded-lg shadow-lg p-1">
            <ToolBtn title="Đậm" onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")}>
              <Bold className="w-3.5 h-3.5" />
            </ToolBtn>
            <ToolBtn title="H2" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
              <Heading2 className="w-3.5 h-3.5" />
            </ToolBtn>
          </div>
        </BubbleMenu>
      )}

      <EditorContent editor={editor} />

      <MediaLibraryDialog open={mediaOpen} onOpenChange={setMediaOpen} onSelect={insertFromMedia} />
    </div>
  );
}
