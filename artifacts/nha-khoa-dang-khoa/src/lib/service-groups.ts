/**
 * 10 nhóm dịch vụ cấp 1 — khớp bảng giá / mega menu / trang chủ
 */
import { PRICING_CATALOG } from "./pricing-catalog";
import { IMAGES } from "./images";

export type ServiceGroupItem = {
  id: string;
  name: string;
  href: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  intro: string;
  image: string;
  href: string;
  items: ServiceGroupItem[];
};

const GROUP_META: Record<string, { intro: string; image: string }> = {
  "cay-ghep-implant": {
    intro: "Trụ implant chuẩn quốc tế — phục hình ổn định, thẩm mỹ và chức năng ăn nhai lâu dài.",
    image: IMAGES.services.implant,
  },
  "dan-su-veneer": {
    intro: "Mặt sứ veneer mỏng — cải thiện nụ cười, bảo tồn men răng tối đa.",
    image: IMAGES.aboutRangSu10000,
  },
  "phuc-hinh-co-dinh": {
    intro: "Bọc sứ, cầu răng cố định — phục hồi chức năng và thẩm mỹ toàn diện.",
    image: IMAGES.aboutRangSu10000,
  },
  "nho-rang": {
    intro: "Nhổ răng và tiểu phẫu nhẹ nhàng — an toàn, giảm đau tối đa.",
    image: IMAGES.services.nhoRangKhon,
  },
  "nha-chu": {
    intro: "Cạo vôi, điều trị viêm nướu và bệnh quanh răng — nền tảng sức khỏe răng miệng.",
    image: IMAGES.coverClinic,
  },
  "tram-rang-noi-nha": {
    intro: "Trám thẩm mỹ, chữa tủy — bảo tồn răng thật, điều trị an toàn.",
    image: IMAGES.blog.tramRang,
  },
  "tay-trang-hot-xoan": {
    intro: "Tẩy trắng răng và gắn hột xoàn — nụ cười sáng, tự tin hơn.",
    image: IMAGES.services.itero,
  },
  "nieng-rang": {
    intro: "Mắc cài, Invisalign — chỉnh nha thẩm mỹ, cải thiện khớp cắn.",
    image: IMAGES.services.niengRang,
  },
  "ho-loi": {
    intro: "Smile Design, cắt nướu — điều chỉnh cười hở lợi hài hòa.",
    image: IMAGES.blog.implantQuyTrinh,
  },
  "phuc-hinh-thao-lap": {
    intro: "Hàm tháo lắp, phục hình thay thế linh hoạt — phù hợp mọi nhu cầu.",
    image: IMAGES.coverClinic,
  },
};

function groupHref(id: string) {
  return `/bang-gia#${id}`;
}

export function buildServiceGroups(): ServiceGroup[] {
  return PRICING_CATALOG.map((g) => {
    const meta = GROUP_META[g.id];
    return {
      id: g.id,
      title: g.group,
      intro: meta?.intro ?? `Dịch vụ ${g.group} tại Nha Khoa Đăng Khoa.`,
      image: meta?.image ?? IMAGES.coverClinic,
      href: groupHref(g.id),
      items: g.items.map((item) => ({
        id: item.id,
        name: item.name,
        href: groupHref(g.id),
      })),
    };
  });
}

export const SERVICE_GROUPS = buildServiceGroups();
