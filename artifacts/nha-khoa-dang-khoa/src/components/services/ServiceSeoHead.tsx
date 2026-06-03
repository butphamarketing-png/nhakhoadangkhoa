import { useEffect } from "react";
import type { BreadcrumbItem, ServiceCategory, ServiceItem } from "@/lib/services/types";
import { categoryPath, servicePath } from "@/lib/services/slug";

const SITE = "Nha Khoa Đăng Khoa";

type Props = {
  title: string;
  description: string;
  canonicalPath: string;
  breadcrumbs: BreadcrumbItem[];
  category?: ServiceCategory;
  service?: ServiceItem;
};

function absoluteUrl(path: string): string {
  if (typeof window === "undefined") return path;
  const base = window.location.origin;
  const basePath = import.meta.env.BASE_URL?.replace(/\/$/, "") ?? "";
  return `${base}${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

function toAbsoluteImage(url?: string): string | undefined {
  if (!url) return undefined;
  if (url.startsWith("http")) return url;
  return absoluteUrl(url);
}

export default function ServiceSeoHead({
  title,
  description,
  canonicalPath,
  breadcrumbs,
  category,
  service,
}: Props) {
  useEffect(() => {
    const pageTitle = title.includes(SITE) ? title : `${title} | ${SITE}`;
    document.title = pageTitle;

    const ogTitle = service?.ogTitle || title;
    const ogDescription = service?.ogDescription || description;
    const ogImageUrl = toAbsoluteImage(
      service?.ogImage || service?.banner || service?.thumbnail || category?.image,
    );
    const canonical = service?.canonicalUrl?.startsWith("http")
      ? service.canonicalUrl
      : absoluteUrl(canonicalPath);

    const setMeta = (name: string, content: string, prop = "name") => {
      let el = document.querySelector(`meta[${prop}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(prop, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    if (service?.robots) setMeta("robots", service.robots);
    setMeta("og:title", ogTitle, "property");
    setMeta("og:description", ogDescription, "property");
    setMeta("og:type", service ? "article" : "website", "property");
    setMeta("og:url", canonical, "property");
    if (ogImageUrl) setMeta("og:image", ogImageUrl, "property");

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;

    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.label,
        item: b.href ? absoluteUrl(b.href) : undefined,
      })),
    };

    const graphs: object[] = [breadcrumbLd];

    if (service && category) {
      graphs.push({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.shortDesc,
        provider: { "@type": "Dentist", name: SITE },
        areaServed: "Tây Ninh, Vietnam",
        url: absoluteUrl(servicePath(category.slug, service.slug)),
        ...(ogImageUrl ? { image: ogImageUrl } : {}),
      });
      if (service.faq?.length) {
        graphs.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        });
      }
    } else if (category) {
      graphs.push({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: `${category.title} — ${SITE}`,
        description: category.description,
        url: absoluteUrl(categoryPath(category.slug)),
      });
    }

    const scriptId = "service-json-ld";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(graphs.length === 1 ? graphs[0] : graphs);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [title, description, canonicalPath, breadcrumbs, category, service]);

  return null;
}
