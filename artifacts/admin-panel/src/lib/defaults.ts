import type { SiteSettings } from "./types";

export const DEFAULT_SITE: SiteSettings = {
  name: "HỆ THỐNG NHA KHOA ĐĂNG KHOA",
  shortName: "Nha Khoa Đăng Khoa",
  slogan: "Uy tín – Chất lượng – Tận tâm",
  hotline: "08.86.86.87.86",
  hotlineRaw: "0886868786",
  email: "info@hethongnhakhoadangkhoa.vn",
  website: "hethongnhakhoadangkhoa.vn",
  address: "345 - 347 Điện Biên Phủ, Khu Phố Ninh Phúc, Phường Ninh Thạnh, Tỉnh Tây Ninh",
  hours: "Thứ 2 – Thứ 7: 8:00 – 20:00 | Chủ nhật: 8:00 – 17:00",
  facebook: "https://www.facebook.com/nhakhoaphuongdong.bsdangkhoa/",
  zalo: "https://zalo.me/0886868786",
  messenger: "https://m.me/nhakhoaphuongdong.bsdangkhoa",
  youtube: "https://youtube.com/@nhakhoadangkhoa",
  tiktok: "https://www.tiktok.com/@nhakhoadangkhoa",
};

/** Nhóm dịch vụ + dòng giá (id khớp website pricing-data) */
export const PRICING_CATALOG: { group: string; items: { id: string; name: string }[] }[] = [
  {
    group: "Trồng răng Implant",
    items: [
      { id: "trong-rang-implant-0", name: "Trồng răng Implant giá bao nhiêu" },
      { id: "trong-rang-implant-1", name: "Trồng răng Implant toàn hàm" },
      { id: "trong-rang-implant-2", name: "Cấy ghép Implant tức thì" },
      { id: "trong-rang-implant-3", name: "Trồng răng Implant Hàn Quốc" },
      { id: "trong-rang-implant-4", name: "Trồng răng Implant Mỹ" },
      { id: "trong-rang-implant-5", name: "Trồng răng Implant Thụy Sĩ" },
      { id: "trong-rang-implant-6", name: "Implant cho người mất răng lâu năm" },
      { id: "trong-rang-implant-7", name: "Quy trình trồng răng Implant" },
      { id: "trong-rang-implant-8", name: "Địa chỉ trồng răng Implant uy tín" },
    ],
  },
  {
    group: "Răng sứ",
    items: [
      { id: "rang-su-0", name: "Bọc răng sứ giá bao nhiêu tiền" },
      { id: "rang-su-1", name: "Nên bọc răng sứ loại nào" },
      { id: "rang-su-2", name: "Bọc răng sứ thẩm mỹ" },
      { id: "rang-su-3", name: "Bọc răng sứ cho răng hô" },
      { id: "rang-su-4", name: "Bọc răng sứ có tốt không" },
      { id: "rang-su-5", name: "Bọc răng sứ có đau không" },
      { id: "rang-su-6", name: "Dán sứ Veneer" },
      { id: "rang-su-7", name: "Địa chỉ làm răng sứ uy tín" },
    ],
  },
  {
    group: "Niềng răng",
    items: [
      { id: "nieng-rang-0", name: "Niềng răng mắc cài" },
      { id: "nieng-rang-1", name: "Niềng răng cho người lớn" },
      { id: "nieng-rang-2", name: "Niềng răng Invisalign" },
      { id: "nieng-rang-3", name: "Niềng răng hô" },
    ],
  },
  {
    group: "Nha khoa tổng quát",
    items: [
      { id: "nha-khoa-tong-quat-0", name: "Nhổ răng" },
      { id: "nha-khoa-tong-quat-1", name: "Nhổ răng khôn" },
      { id: "nha-khoa-tong-quat-2", name: "Trám răng" },
      { id: "nha-khoa-tong-quat-3", name: "Trám răng thẩm mỹ" },
      { id: "nha-khoa-tong-quat-4", name: "Trám răng sâu" },
      { id: "nha-khoa-tong-quat-5", name: "Làm răng giả" },
      { id: "nha-khoa-tong-quat-6", name: "Cạo vôi răng" },
      { id: "nha-khoa-tong-quat-7", name: "Tẩy trắng răng" },
      { id: "nha-khoa-tong-quat-8", name: "Điều trị tủy răng" },
    ],
  },
];
