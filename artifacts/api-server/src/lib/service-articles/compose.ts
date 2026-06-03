import type { ServiceArticleSpec } from "./types";

const SITE = "Nha Khoa Đăng Khoa";

export function composeArticleHtml(
  title: string,
  categoryImage: string,
  spec: ServiceArticleSpec,
): string {
  const blocks: string[] = [
    `<h1>${title}</h1>`,
    ...spec.intro.map((p) => `<p>${p}</p>`),
    `<img src="${categoryImage}" alt="${title} tại ${SITE}" class="rounded-xl w-full my-8" />`,
    `<h2>${title} là gì?</h2>`,
    ...spec.whatIs.map((p) => `<p>${p}</p>`),
    `<h2>Đối tượng phù hợp</h2>`,
    ...spec.audience.map((p) => `<p>${p}</p>`),
    `<h2>Lợi ích khi thực hiện ${title}</h2>`,
    ...spec.benefitsProse.map((p) => `<p>${p}</p>`),
    `<h2>Quy trình thực hiện tại ${SITE}</h2>`,
    ...spec.processProse.map((p) => `<p>${p}</p>`),
    `<img src="/images/cover-clinic.png" alt="Quy trình ${title}" class="rounded-xl w-full my-8" />`,
    `<h2>Vì sao chọn ${SITE}?</h2>`,
    ...spec.whyChoose.map((p) => `<p>${p}</p>`),
    `<p>Đặt lịch tư vấn miễn phí tại <a href="/dat-lich">trang đặt lịch</a> hoặc gọi hotline trên website. ${SITE} tại Tây Ninh luôn sẵn sàng đồng hành cùng sức khỏe răng miệng của bạn.</p>`,
  ];
  return blocks.join("\n\n");
}

export function countArticleWords(html: string): number {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return text ? text.split(" ").filter(Boolean).length : 0;
}
