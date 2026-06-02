import { Link, useRoute } from "wouter";
import { ChevronLeft, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import MediaFrame from "@/components/ui/MediaFrame";
import { getAboutSection } from "@/lib/about-content";
import NotFoundPage from "@/pages/NotFoundPage";

export default function AboutSectionPage() {
  const [, params] = useRoute("/gioi-thieu/:slug");
  const section = getAboutSection(params?.slug ?? "");

  if (!section) return <NotFoundPage />;

  return (
    <div>
      <PageHero
        label={section.eyebrow}
        breadcrumb="Giới thiệu"
        title={
          <>
            {section.title}
            <br />
            <span className="text-[#C89B3C]">{section.subtitle}</span>
          </>
        }
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <Link href="/gioi-thieu">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-[#C89B3C] mb-8 cursor-pointer hover:gap-3 transition-all">
              <ChevronLeft className="w-4 h-4" />
              Quay lại giới thiệu
            </span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-[#0D1B2A]/75 leading-relaxed mb-4 text-base md:text-lg">
                  {p}
                </p>
              ))}
              {section.highlights && (
                <ul className="mt-6 space-y-3">
                  {section.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[#0D1B2A]/80">
                      <CheckCircle className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.ctaHref && section.ctaLabel && (
                <Link href={section.ctaHref}>
                  <span className="btn-gold inline-flex mt-8 !h-12 px-8 cursor-pointer">{section.ctaLabel}</span>
                </Link>
              )}
            </div>
            {section.image && (
              <div className="gradient-border rounded-[24px] p-[2px]">
                <MediaFrame src={section.image} alt={section.label} aspect="video" className="rounded-[22px]" />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
