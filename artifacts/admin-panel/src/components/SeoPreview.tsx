type Props = {
  siteUrl?: string;
  seoTitle: string;
  seoDescription: string;
  slug: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  focusKeyword?: string;
};

const DEFAULT_SITE = "https://nhakhoadangkhoa.vercel.app";

export default function SeoPreview({
  siteUrl = DEFAULT_SITE,
  seoTitle,
  seoDescription,
  slug,
  ogTitle,
  ogDescription,
  ogImage,
  focusKeyword,
}: Props) {
  const base = siteUrl.replace(/\/$/, "");
  const url = `${base}/dich-vu/.../${slug || "..."}`;
  const displayTitle = seoTitle || "Tiêu đề SEO";
  const displayDesc =
    seoDescription ||
    "Mô tả meta sẽ hiển thị trên Google. Viết 150–160 ký tự, chứa từ khóa chính.";

  return (
    <div className="space-y-4">
      {focusKeyword && (
        <p className="text-xs text-gray-500">
          Focus keyword: <span className="font-semibold text-[#C89B3C]">{focusKeyword}</span>
        </p>
      )}

      <div className="rounded-xl border bg-white p-4">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Google Search</p>
        <div className="font-sans max-w-xl">
          <p className="text-sm text-[#202124] truncate">{url}</p>
          <p className="text-xl text-[#1a0dab] hover:underline cursor-default leading-snug mt-0.5 line-clamp-2">
            {displayTitle}
          </p>
          <p className="text-sm text-[#4d5156] mt-1 line-clamp-2">{displayDesc}</p>
        </div>
      </div>

      <div className="rounded-xl border bg-white p-4">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Facebook Share</p>
        <div className="border rounded-lg overflow-hidden max-w-md bg-[#f0f2f5]">
          {ogImage ? (
            <img src={ogImage} alt="" className="w-full h-40 object-cover bg-gray-200" />
          ) : (
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
              Chưa có OG Image
            </div>
          )}
          <div className="bg-[#f0f2f5] px-3 py-2 border-t">
            <p className="text-[10px] text-gray-500 uppercase">{base.replace(/^https?:\/\//, "")}</p>
            <p className="font-semibold text-sm text-[#050505] line-clamp-2">{ogTitle || displayTitle}</p>
            <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">{ogDescription || displayDesc}</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-white p-4">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Zalo Share</p>
        <div className="border rounded-lg overflow-hidden max-w-md flex">
          {ogImage ? (
            <img src={ogImage} alt="" className="w-24 h-24 object-cover shrink-0 bg-gray-200" />
          ) : (
            <div className="w-24 h-24 bg-gray-200 shrink-0 flex items-center justify-center text-gray-400 text-xs">
              Ảnh
            </div>
          )}
          <div className="p-2 flex-1 min-w-0 bg-white">
            <p className="font-semibold text-sm text-[#0D1B2A] line-clamp-2">{ogTitle || displayTitle}</p>
            <p className="text-xs text-gray-500 line-clamp-2 mt-1">{ogDescription || displayDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
