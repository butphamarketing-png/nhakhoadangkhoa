import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { Search, ChevronRight } from "lucide-react";
import { searchSite, type SearchResult } from "@/lib/search-index";

export default function SiteSearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [, navigate] = useLocation();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length < 1) {
      setResults([]);
      return;
    }
    setResults(searchSite(query, 8));
    setOpen(true);
  }, [query]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setQuery("");
    navigate(href);
  };

  return (
    <div ref={wrapRef} className="relative w-full max-w-3xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0D1B2A]/40 pointer-events-none" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setOpen(true)}
          placeholder="Tìm dịch vụ, bài viết, trang..."
          className="w-full h-11 pl-11 pr-4 rounded-full bg-[#F8F6F1] border border-[#C89B3C]/15 text-sm text-[#0D1B2A] placeholder:text-[#0D1B2A]/40 focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/35 focus:bg-white transition-all"
          data-testid="site-search-input"
          aria-label="Tìm kiếm trên website"
          autoComplete="off"
        />
      </div>

      {open && results.length > 0 && (
        <ul
          className="absolute z-[70] left-0 right-0 mt-2 py-2 bg-white rounded-2xl shadow-[0_20px_60px_rgba(13,27,42,0.15)] border border-[#C89B3C]/15 max-h-[min(360px,50vh)] overflow-y-auto"
          role="listbox"
        >
          {results.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-[#F8F6F1] transition-colors"
                onClick={() => go(r.href)}
                data-testid={`search-suggest-${r.id}`}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C89B3C] shrink-0 w-16">
                  {r.type}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-semibold text-[#0D1B2A] truncate">{r.title}</span>
                  {r.subtitle && (
                    <span className="block text-xs text-[#0D1B2A]/50 truncate">{r.subtitle}</span>
                  )}
                </span>
                <ChevronRight className="w-4 h-4 text-[#C89B3C] shrink-0" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {open && query.trim().length > 1 && results.length === 0 && (
        <p className="absolute z-[70] left-0 right-0 mt-2 px-4 py-3 text-sm text-[#0D1B2A]/50 bg-white rounded-2xl border border-black/5 shadow-lg">
          Không tìm thấy kết quả phù hợp.
        </p>
      )}
    </div>
  );
}
