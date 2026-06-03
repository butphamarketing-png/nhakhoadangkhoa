import { computeSeoScore } from "@/lib/seo-score";
import { Progress } from "@/components/ui/progress";

type Props = {
  contentHtml: string;
  seoTitle: string;
  seoDescription: string;
  focusKeyword: string;
  excerpt: string;
  faqCount: number;
  hasBanner: boolean;
};

export default function SeoScoreCard(props: Props) {
  const { score, checks } = computeSeoScore(props);
  const color = score >= 80 ? "text-green-600" : score >= 50 ? "text-amber-600" : "text-red-600";

  return (
    <div className="rounded-2xl border bg-white p-4 space-y-3 sticky top-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-gray-700">SEO Score</span>
        <span className={`text-2xl font-extrabold ${color}`}>{score}</span>
      </div>
      <Progress value={score} className="h-2" />
      <ul className="space-y-1.5 max-h-[320px] overflow-y-auto text-xs">
        {checks.map((c) => (
          <li key={c.id} className={`flex gap-2 ${c.ok ? "text-green-700" : "text-gray-500"}`}>
            <span>{c.ok ? "✓" : "○"}</span>
            <span>{c.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
