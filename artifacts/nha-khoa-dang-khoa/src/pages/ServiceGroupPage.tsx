import { Link, useRoute } from "wouter";
import { ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SERVICE_MENU_GROUPS } from "@/lib/services-menu";
import NotFoundPage from "@/pages/NotFoundPage";

export default function ServiceGroupPage() {
  const [, params] = useRoute("/dich-vu/:groupId");
  const group = SERVICE_MENU_GROUPS.find((g) => g.id === params?.groupId);

  if (!group) return <NotFoundPage />;

  return (
    <div>
      <PageHero
        label="Dịch vụ"
        breadcrumb="Dịch vụ nha khoa"
        title={
          <>
            {group.title}
          </>
        }
        subtitle={group.intro}
      />

      <section className="section-padding section-cream">
        <div className="container-custom container-narrow">
          <div className="mb-8 flex flex-wrap gap-3">
            <Link href="/dich-vu">
              <span className="text-sm font-bold text-[#C89B3C] hover:underline cursor-pointer">← Tất cả dịch vụ</span>
            </Link>
          </div>

          <div className="grid gap-3">
            {group.items.map((item) => (
              <Link key={item.label} href={item.href}>
                <div className="card-luxury !p-0 !translate-y-0 hover:!translate-y-[-4px] group cursor-pointer flex items-stretch overflow-hidden">
                  <div className="w-1 gold-gradient shrink-0" />
                  <div className="flex-1 p-5 md:p-6 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-[#0D1B2A] text-base md:text-lg group-hover:text-[#C89B3C] transition-colors">
                        {item.label}
                      </h3>
                      {item.excerpt && (
                        <p className="text-sm text-[#0D1B2A]/55 mt-1 line-clamp-2">{item.excerpt}</p>
                      )}
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#C89B3C] shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
