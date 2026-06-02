import { Download, ExternalLink, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

const WEBSITE_URL =
  import.meta.env.VITE_WEBSITE_URL?.replace(/\/+$/, "") ||
  "https://hethongnhakhoadangkhoa.com";

type PageToolbarProps = {
  onSave?: () => void;
  onImport?: () => void;
  saving?: boolean;
  importLabel?: string;
  saveLabel?: string;
  showWebsiteLink?: boolean;
};

export default function PageToolbar({
  onSave,
  onImport,
  saving,
  importLabel = "Import mặc định",
  saveLabel = "Lưu thay đổi",
  showWebsiteLink = true,
}: PageToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
      {showWebsiteLink && (
        <a
          href={WEBSITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#C89B3C] font-semibold inline-flex items-center gap-1.5 hover:underline"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Xem website
        </a>
      )}
      <div className="flex flex-wrap gap-2 ml-auto">
        {onImport && (
          <Button variant="outline" className="rounded-xl h-10" onClick={onImport} disabled={saving}>
            <Download className="w-4 h-4 mr-2" />
            {importLabel}
          </Button>
        )}
        {onSave && (
          <Button
            className="gold-gradient text-white border-0 rounded-xl h-10"
            onClick={onSave}
            disabled={saving}
          >
            <Save className="w-4 h-4 mr-2" />
            {saving ? "Đang lưu..." : saveLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
