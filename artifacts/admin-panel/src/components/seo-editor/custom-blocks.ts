import { Node, mergeAttributes } from "@tiptap/core";

export const CtaBlock = Node.create({
  name: "ctaBlock",
  group: "block",
  atom: true,
  draggable: true,
  addAttributes: {
    text: { default: "Đặt lịch khám ngay" },
    href: { default: "/dat-lich" },
  },
  parseHTML() {
    return [{ tag: 'div[data-type="cta-block"]' }];
  },
  renderHTML({ node, HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, { "data-type": "cta-block", class: "my-8 text-center" }),
      [
        "a",
        {
          href: node.attrs.href,
          class:
            "inline-flex items-center px-8 py-4 rounded-full bg-[#C89B3C] text-white font-bold text-sm uppercase tracking-wider",
        },
        node.attrs.text,
      ],
    ];
  },
});

export const BannerCtaBlock = Node.create({
  name: "bannerCta",
  group: "block",
  atom: true,
  draggable: true,
  addAttributes: {
    title: { default: "Đặt lịch tư vấn miễn phí" },
    subtitle: { default: "Phản hồi nhanh — tư vấn chuyên sâu" },
    href: { default: "/dat-lich" },
  },
  parseHTML() {
    return [{ tag: 'section[data-type="banner-cta"]' }];
  },
  renderHTML({ node, HTMLAttributes }) {
    return [
      "section",
      mergeAttributes(HTMLAttributes, {
        "data-type": "banner-cta",
        class: "my-10 p-8 md:p-12 rounded-2xl bg-[#0D1B2A] text-center text-white",
      }),
      ["h3", { class: "text-2xl font-bold mb-2" }, node.attrs.title],
      ["p", { class: "text-white/70 mb-6" }, node.attrs.subtitle],
      [
        "a",
        {
          href: node.attrs.href,
          class: "inline-flex px-8 py-3 rounded-full bg-[#C89B3C] text-white font-bold",
        },
        "Đặt lịch ngay",
      ],
    ];
  },
});

export const FaqBlock = Node.create({
  name: "faqBlock",
  group: "block",
  atom: true,
  draggable: true,
  addAttributes: {
    items: { default: [{ q: "Câu hỏi?", a: "Trả lời." }] },
  },
  parseHTML() {
    return [{ tag: 'div[data-type="faq-block"]' }];
  },
  renderHTML({ node, HTMLAttributes }) {
    const items = (node.attrs.items as { q: string; a: string }[]) || [];
    return [
      "div",
      mergeAttributes(HTMLAttributes, { "data-type": "faq-block", class: "my-8 space-y-3" }),
      ...items.flatMap((item) => [
        ["details", { class: "border rounded-xl p-4 bg-[#FAFAF8]" }, [
          ["summary", { class: "font-semibold cursor-pointer" }, item.q],
          ["p", { class: "mt-2 text-sm text-gray-600" }, item.a],
        ]],
      ]),
    ];
  },
});

export const PricingTableBlock = Node.create({
  name: "pricingTable",
  group: "block",
  atom: true,
  draggable: true,
  addAttributes: {
    rows: {
      default: [
        { name: "Gói cơ bản", price: "Liên hệ" },
        { name: "Gói tiêu chuẩn", price: "Liên hệ" },
      ],
    },
  },
  parseHTML() {
    return [{ tag: 'table[data-type="pricing-table"]' }];
  },
  renderHTML({ node, HTMLAttributes }) {
    const rows = (node.attrs.rows as { name: string; price: string }[]) || [];
    return [
      "table",
      mergeAttributes(HTMLAttributes, {
        "data-type": "pricing-table",
        class: "my-8 w-full border-collapse rounded-xl overflow-hidden",
      }),
      [
        "thead",
        {},
        [
          "tr",
          { class: "bg-[#0D1B2A] text-white" },
          [
            ["th", { class: "p-3 text-left" }, "Dịch vụ"],
            ["th", { class: "p-3 text-left" }, "Giá tham khảo"],
          ],
        ],
      ],
      [
        "tbody",
        {},
        ...rows.map((r) => [
          "tr",
          { class: "border-b" },
          [
            ["td", { class: "p-3" }, r.name],
            ["td", { class: "p-3 font-semibold text-[#C89B3C]" }, r.price],
          ],
        ]),
      ],
    ];
  },
});

export const GoogleMapsBlock = Node.create({
  name: "googleMaps",
  group: "block",
  atom: true,
  draggable: true,
  addAttributes: {
    embedUrl: {
      default:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.118959816727!2d106.1304689!3d11.3260148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b6a3f2265a4c9%3A0xada66b3baa2ad387!2zTmhhIEtob2EgxJDEg25nIEtob2E!5e0!3m2!1svi!2s!4v1781767411397!5m2!1svi!2s",
    },
  },
  parseHTML() {
    return [{ tag: 'div[data-type="google-maps"]' }];
  },
  renderHTML({ node, HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, { "data-type": "google-maps", class: "my-8 rounded-2xl overflow-hidden aspect-video" }),
      [
        "iframe",
        {
          src: node.attrs.embedUrl,
          width: "100%",
          height: "100%",
          style: "border:0",
          loading: "lazy",
          title: "Google Maps",
        },
      ],
    ];
  },
});

export const ImageCaptionBlock = Node.create({
  name: "imageCaption",
  group: "block",
  atom: true,
  draggable: true,
  addAttributes: {
    src: { default: "" },
    alt: { default: "" },
    caption: { default: "" },
  },
  parseHTML() {
    return [{ tag: 'figure[data-type="image-caption"]' }];
  },
  renderHTML({ node, HTMLAttributes }) {
    return [
      "figure",
      mergeAttributes(HTMLAttributes, { "data-type": "image-caption", class: "my-8" }),
      ["img", { src: node.attrs.src, alt: node.attrs.alt, class: "w-full rounded-xl" }],
      ["figcaption", { class: "text-sm text-center text-gray-500 mt-2" }, node.attrs.caption],
    ];
  },
});

export const ImageGalleryBlock = Node.create({
  name: "imageGallery",
  group: "block",
  atom: true,
  draggable: true,
  addAttributes: {
    images: { default: [] as { src: string; alt: string }[] },
  },
  parseHTML() {
    return [{ tag: 'div[data-type="image-gallery"]' }];
  },
  renderHTML({ node, HTMLAttributes }) {
    const images = (node.attrs.images as { src: string; alt: string }[]) || [];
    return [
      "div",
      mergeAttributes(HTMLAttributes, {
        "data-type": "image-gallery",
        class: "my-8 grid grid-cols-2 md:grid-cols-3 gap-3",
      }),
      ...images.map((img) => [
        "img",
        { src: img.src, alt: img.alt, class: "w-full h-40 object-cover rounded-xl" },
      ]),
    ];
  },
});

export const ImageSideBlock = Node.create({
  name: "imageSide",
  group: "block",
  atom: true,
  draggable: true,
  addAttributes: {
    src: { default: "" },
    alt: { default: "" },
    side: { default: "left" },
    text: { default: "Nội dung mô tả bên cạnh hình ảnh." },
  },
  parseHTML() {
    return [{ tag: 'div[data-type="image-side"]' }];
  },
  renderHTML({ node, HTMLAttributes }) {
    const isLeft = node.attrs.side === "left";
    return [
      "div",
      mergeAttributes(HTMLAttributes, {
        "data-type": "image-side",
        "data-side": node.attrs.side,
        class: `my-8 grid md:grid-cols-2 gap-6 items-center ${isLeft ? "" : "[&>img]:md:order-2"}`,
      }),
      ["img", { src: node.attrs.src, alt: node.attrs.alt, class: "w-full rounded-xl" }],
      ["div", { class: "prose" }, ["p", {}, node.attrs.text]],
    ];
  },
});
