/**
 * Bảng giá Nha Khoa Đăng Khoa — 10 nhóm, 61 dịch vụ (theo bảng giá phòng khám)
 */

export type PricingCatalogItem = { id: string; name: string; defaultPrice: string };

export type PricingCatalogGroup = {
  id: string;
  group: string;
  items: PricingCatalogItem[];
};

export const PRICING_CATALOG: PricingCatalogGroup[] = [
  {
    id: "cay-ghep-implant",
    group: "Cấy ghép Implant",
    items: [
      { id: "implant-han-quoc", name: "Implant Hàn Quốc", defaultPrice: "9.800.000/trụ" },
      { id: "implant-osstem-sa", name: "Implant Osstem SA (Hàn Quốc)", defaultPrice: "15.000.000/trụ" },
      { id: "implant-hiossen", name: "Implant Hiossen (Mỹ)", defaultPrice: "18.000.000/trụ" },
      { id: "implant-osstem-soi", name: "Implant Osstem SOI (Hàn Quốc)", defaultPrice: "20.000.000/trụ" },
      { id: "implant-neodent", name: "Implant Neodent (Thụy Sĩ)", defaultPrice: "30.000.000/trụ" },
      { id: "implant-straumann", name: "Implant Straumann (Thụy Sĩ)", defaultPrice: "40.000.000/trụ" },
    ],
  },
  {
    id: "dan-su-veneer",
    group: "Dán sứ Veneer",
    items: [
      { id: "veneer-emax", name: "Emax Press Veneer", defaultPrice: "6.000.000" },
      { id: "veneer-lisi", name: "Lisi Press Veneer", defaultPrice: "10.000.000" },
      { id: "veneer-non-prep", name: "Non-Prep Veneer (Đóng khe thưa)", defaultPrice: "10.000.000" },
    ],
  },
  {
    id: "phuc-hinh-co-dinh",
    group: "Phục hình cố định",
    items: [
      { id: "su-kim-loai", name: "Kim loại", defaultPrice: "1.000.000/răng" },
      { id: "su-titan", name: "Titan", defaultPrice: "1.500.000/răng" },
      { id: "su-titan-vita", name: "Titan Vita", defaultPrice: "1.800.000/răng" },
      { id: "su-hop-kim", name: "Hợp kim cao cấp", defaultPrice: "2.200.000/răng" },
      { id: "su-crom-coban", name: "Crom Coban", defaultPrice: "2.400.000/răng" },
      { id: "su-zirconia", name: "Zirconia (Đức)", defaultPrice: "3.000.000/răng" },
      { id: "su-cercon-ht", name: "Cercon HT", defaultPrice: "5.000.000/răng" },
      { id: "su-ht-smile", name: "HT Smile", defaultPrice: "6.000.000/răng" },
      { id: "su-lava-esthetic", name: "Lava Esthetic", defaultPrice: "8.000.000/răng" },
      { id: "su-lava-plus", name: "Lava Plus 3M", defaultPrice: "10.000.000/răng" },
      { id: "su-orodent-gold", name: "OroDent Gold", defaultPrice: "12.000.000/răng" },
      { id: "su-orodent-multi", name: "OroDent Multi Layer", defaultPrice: "18.000.000/răng" },
      { id: "su-orodent-bleach", name: "OroDent Bleach Innovation", defaultPrice: "25.000.000/răng" },
    ],
  },
  {
    id: "nho-rang",
    group: "Nhổ răng",
    items: [
      { id: "nho-rach-apxe", name: "Rạch áp xe răng", defaultPrice: "300.000 - 500.000/răng" },
      { id: "nho-nao-tui", name: "Nạo túi nha chu", defaultPrice: "300.000 - 500.000/răng" },
      { id: "nho-1-chan", name: "Nhổ răng 1 chân + chân răng", defaultPrice: "300.000 - 500.000/răng" },
      { id: "nho-nhieu-chan", name: "Nhổ răng nhiều chân", defaultPrice: "500.000 - 1.000.000/răng" },
      { id: "nho-cat-chop", name: "Phẫu thuật nạo răng cắt chóp", defaultPrice: "1.000.000 - 2.000.000/răng" },
      { id: "nho-rang-8", name: "Nhổ răng số 8", defaultPrice: "1.000.000 - 2.500.000/răng" },
      { id: "nho-prf", name: "Nhổ răng PRF", defaultPrice: "4.000.000 - 5.000.000/răng" },
    ],
  },
  {
    id: "nha-chu",
    group: "Nha chu",
    items: [
      { id: "nc-cao-voi", name: "Cạo vôi + đánh bóng", defaultPrice: "150.000 - 300.000" },
      { id: "nc-dieu-tri", name: "Điều trị nha chu (bao gồm thuốc)", defaultPrice: "1.000.000 - 1.500.000" },
    ],
  },
  {
    id: "tram-rang-noi-nha",
    group: "Trám răng – Nội nha",
    items: [
      { id: "tram-rang-sua", name: "Trám răng sữa", defaultPrice: "50.000 - 100.000/răng" },
      { id: "tram-rang-tham-my", name: "Trám răng thẩm mỹ", defaultPrice: "200.000 - 500.000/răng" },
      { id: "noi-nha-rang-sua", name: "Điều trị tủy răng sữa", defaultPrice: "600.000/răng" },
      { id: "noi-nha-tram", name: "Điều trị tủy + trám", defaultPrice: "800.000 - 1.500.000/răng" },
      { id: "noi-nha-mta", name: "Điều trị tủy MTA", defaultPrice: "2.000.000/răng" },
    ],
  },
  {
    id: "tay-trang-hot-xoan",
    group: "Tẩy trắng răng – Gắn hột xoàn",
    items: [
      { id: "tt-tai-nha", name: "Tẩy trắng răng tại nhà (kèm thuốc)", defaultPrice: "1.000.000" },
      { id: "tt-laser", name: "Tẩy trắng tại phòng bằng Laser", defaultPrice: "1.500.000 - 2.000.000 / 2 hàm" },
      { id: "hx-khach", name: "Gắn hột xoàn của khách", defaultPrice: "300.000 - 500.000" },
      { id: "hx-nha-khoa", name: "Gắn hột xoàn của nha khoa", defaultPrice: "1.000.000 - 2.000.000" },
    ],
  },
  {
    id: "nieng-rang",
    group: "Niềng răng chỉnh nha",
    items: [
      { id: "cn-trainer", name: "Chỉnh nha hàm Trainer cho bé (6 - 12 tuổi)", defaultPrice: "3.500.000 / 2 hàm" },
      { id: "cn-face-mask", name: "Chỉnh Face Mask cho bé (9 - 14 tuổi)", defaultPrice: "10.000.000 - 20.000.000" },
      { id: "cn-twin-block", name: "Chỉnh nha + khí cụ Twin Block cho bé (8 - 13 tuổi)", defaultPrice: "25.000.000 - 30.000.000" },
      { id: "cn-mac-kim-loai", name: "Mắc cài kim loại thường (buộc chun)", defaultPrice: "25.000.000 - 35.000.000" },
      { id: "cn-mac-tu-buoc", name: "Mắc cài kim loại tự buộc", defaultPrice: "30.000.000 - 40.000.000" },
      { id: "cn-mac-pha-le", name: "Mắc cài pha lê", defaultPrice: "35.000.000 - 50.000.000" },
      { id: "cn-mac-su", name: "Mắc cài sứ tự buộc", defaultPrice: "45.000.000 - 55.000.000" },
      { id: "cn-invisalign", name: "Niềng khay trong suốt Invisalign", defaultPrice: "80.000.000 - 120.000.000" },
    ],
  },
  {
    id: "ho-loi",
    group: "Điều trị hở lợi",
    items: [
      { id: "ho-loi-smile", name: "Chữa cười hở lợi - Smile Design (cắt nướu)", defaultPrice: "8.000.000 - 12.000.000" },
    ],
  },
  {
    id: "phuc-hinh-thao-lap",
    group: "Phục hình tháo lắp",
    items: [
      { id: "tl-viet-nam", name: "Tháo lắp Việt Nam", defaultPrice: "300.000/răng" },
      { id: "tl-duc", name: "Tháo lắp Đức", defaultPrice: "400.000/răng" },
      { id: "tl-my", name: "Tháo lắp Mỹ", defaultPrice: "500.000/răng" },
      { id: "tl-composite", name: "Tháo lắp Composite", defaultPrice: "600.000/răng" },
      { id: "tl-su-thuong", name: "Tháo lắp sứ thường", defaultPrice: "800.000/răng" },
      { id: "tl-su-cao-cap", name: "Tháo lắp sứ cao cấp", defaultPrice: "1.000.000 - 1.500.000/răng" },
      { id: "tl-mac-luoi", name: "Mắc lưới", defaultPrice: "800.000" },
      { id: "tl-mac-cai-don", name: "Mắc cài đơn", defaultPrice: "1.500.000/cái" },
      { id: "tl-khung-kim-loai", name: "Hàm khung kim loại", defaultPrice: "2.000.000 - 2.500.000" },
      { id: "tl-khung-titan", name: "Hàm khung titan", defaultPrice: "3.000.000 - 4.000.000" },
      { id: "tl-nen-deo", name: "Nền dẻo", defaultPrice: "2.000.000 - 3.000.000" },
      { id: "tl-nen-nhat", name: "Nền hàm nhựa cường lực Nhật", defaultPrice: "5.000.000" },
    ],
  },
];

/** Map id → giá mặc định */
export function defaultPricingMap(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const g of PRICING_CATALOG) {
    for (const item of g.items) {
      out[item.id] = item.defaultPrice;
    }
  }
  return out;
}

/** Nhóm cho trang /bang-gia */
export function pricingGroupsForWebsite() {
  return PRICING_CATALOG.map((g) => ({
    id: g.id,
    service: g.group,
    items: g.items.map((item) => ({ id: item.id, name: item.name })),
  }));
}
