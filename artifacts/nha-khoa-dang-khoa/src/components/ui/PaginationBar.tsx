type Props = {
  page: number;
  totalPages: number;
  onPage: (p: number) => void;
};

export default function PaginationBar({ page, totalPages, onPage }: Props) {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];
  if (totalPages <= 9) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (page > 4) pages.push("...");
    for (let i = Math.max(2, page - 2); i <= Math.min(totalPages - 1, page + 2); i++) {
      pages.push(i);
    }
    if (page < totalPages - 3) pages.push("...");
    pages.push(totalPages);
  }

  return (
    <nav className="flex flex-wrap items-center justify-center gap-1.5 mt-10" aria-label="Phân trang">
      <span className="text-sm text-[#0D1B2A]/50 mr-2">
        Trang {page} / {totalPages}
      </span>
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`e-${i}`} className="w-9 h-9 flex items-center justify-center text-[#0D1B2A]/40">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onPage(p)}
            className={`min-w-[36px] h-9 px-2 text-sm font-semibold border rounded-md transition-colors ${
              page === p
                ? "bg-[#0D1B2A] text-white border-[#0D1B2A]"
                : "bg-white text-[#0D1B2A] border-[#0D1B2A]/15 hover:border-[#C89B3C] hover:text-[#C89B3C]"
            }`}
          >
            {p}
          </button>
        ),
      )}
      {page < totalPages && (
        <button
          type="button"
          onClick={() => onPage(page + 1)}
          className="h-9 px-3 text-sm font-semibold border border-[#0D1B2A]/15 rounded-md hover:border-[#C89B3C] hover:text-[#C89B3C]"
        >
          Tiếp
        </button>
      )}
      {page < totalPages && (
        <button
          type="button"
          onClick={() => onPage(totalPages)}
          className="h-9 px-3 text-sm font-semibold border border-[#0D1B2A]/15 rounded-md hover:border-[#C89B3C] hover:text-[#C89B3C]"
        >
          Cuối
        </button>
      )}
    </nav>
  );
}
