/** Ảnh thương hiệu Nha Khoa Đăng Khoa — /public/images */

const img = (name: string) => `/images/${name}`;

export const IMAGES = {
  logo: img("logo-dang-khoa.jpg"),
  /** Ảnh bác sĩ chuyên sâu chỉnh nha — BS. Phạm Trần Tuyết Sương */
  bsPhamTranTuyetSuong: img("bs-pham-tran-tuyet-suong.png"),
  /** Banner ngang 16:9 dùng cho hero và các section rộng */
  bannerBsPhamTranTuyetSuong: img("banner-bs-pham-tran-tuyet-suong-16x9.png"),
  /** @deprecated alias — giữ tương thích CMS cũ */
  bsNguyenDangKhoa: img("bs-pham-tran-tuyet-suong.png"),
  coverClinic: img("banner-bs-pham-tran-tuyet-suong-16x9.png"),
  /** Banner giới thiệu bác sĩ / chuyên môn — BS. Phạm Trần Tuyết Sương */
  aboutRangSu10000: img("banner-bs-pham-tran-tuyet-suong-16x9.png"),
  designReference: img("design-reference.png"),
  coverPage: img("banner-bs-pham-tran-tuyet-suong-16x9.png"),
  veChungToi: img("banner-bs-pham-tran-tuyet-suong-16x9.png"),

  /**
   * Banner hero slideshow — mỗi file là 1 ảnh ngang (~1920×720).
   * Chữ, nút, sidebar 4 icon nên được thiết kế sẵn trong ảnh (PNG/JPG).
   */
  heroSlides: {
    /** Banner thương hiệu ngang — BS. Phạm Trần Tuyết Sương */
    brand: img("banner-bs-pham-tran-tuyet-suong-16x9.png"),
    coverPage: img("banner-bs-pham-tran-tuyet-suong-16x9.png"),
    banner01: img("banner-bs-pham-tran-tuyet-suong-16x9.png"),
    banner02: img("banner-bs-pham-tran-tuyet-suong-16x9.png"),
    banner03: img("promo-mua-vang-chinh-nha.png"),
    banner04: img("promo-nieng-rang-he.png"),
  },

  services: {
    implant: img("service-implant.png"),
    niengRang: img("service-nieng-rang.png"),
    nhoRangKhon: img("service-nho-rang-khon.png"),
    itero: img("service-cong-nghe-itero.png"),
  },

  /** Ảnh danh mục dịch vụ cấp 1 — /public/images/danh-muc/ */
  danhMuc: {
    cayGhepImplant: img("danh-muc/cay-ghep-implant.jpg"),
    danSuVeneer: img("danh-muc/dan-su-veneer.png"),
    phucHinhCoDinh: img("danh-muc/phuc-hinh-co-dinh.png"),
    nhoRang: img("danh-muc/nho-rang.png"),
    nhaChu: img("danh-muc/nha-chu.png"),
    tramRangNoiNha: img("danh-muc/tram-rang-noi-nha.png"),
    tayTrangHotXoan: img("danh-muc/tay-trang.png"),
    niengRang: img("danh-muc/nieng-rang.png"),
    hoLoi: img("danh-muc/ho-loi.png"),
    phucHinhThaoLap: img("danh-muc/phuc-hinh-thao-lap.png"),
  },

  /** Ảnh trang thiết bị — /public/images/congnghe/ */
  congnghe: {
    ctAxeos: img("congnghe/tech-ct-axeos.jpg"),
    implantGuide: img("congnghe/tech-implant-guide.jpg"),
    xGuide: img("congnghe/tech-xguide.jpg"),
    xnavImplant: img("congnghe/tech-xnav-implant.jpg"),
    mayInNoiNha3in1: img("congnghe/tech-may-in-noi-nha-3in1.jpg"),
    iteroLumina: img("congnghe/tech-itero-lumina.jfif"),
    shining3d: img("congnghe/tech-shining-3d.jpg"),
    piezotom: img("congnghe/tech-piezotom.jpg"),
  },

  promos: {
    muaVangChinhNha: img("promo-mua-vang-chinh-nha.png"),
    chinhNha10: img("promo-chinh-nha-10.png"),
    canTiepSom: img("promo-can-tiep-som.png"),
    niengRangHe: img("promo-nieng-rang-he.png"),
  },

  smileModels: {
    mau1RangTho: img("smile-models/mau-1-rang-tho-dang-yeu.png"),
    mau2RangNanh: img("smile-models/mau-2-rang-nanh-pha-cach.png"),
    mau3Oval: img("smile-models/mau-3-oval-tu-nhien.png"),
    mau4VuongVan: img("smile-models/mau-4-vuong-van-ban-linh.png"),
  },

  testimonials: {
    damThiLat: img("testimonial-dam-thi-lat.png"),
    nguyenDinhPhuong: img("testimonial-nguyen-dinh-phuong.png"),
    truocSau: img("testimonial-truoc-sau.png"),
    nguyenThiKimHanh: img("testimonial-nguyen-thi-kim-hanh.png"),
    leThiThuy: img("testimonial-le-thi-thuy.png"),
  },

  info: {
    anhHuongSucKhoe: img("info-anh-huong-suc-khoe.png"),
  },

  /** Ảnh bài viết kiến thức — /public/images/blog/ */
  blog: {
    implantQuyTrinh: img("blog/blog-implant-quy-trinh.jpg"),
    trongImplant: img("blog/blog-trong-implant.jpg"),
    tramRang: img("blog/blog-tram-rang.jpg"),
    testimonial1: img("blog/1780712429213_5777623190452523323_g8951108936608082733_f90e44a47c2327636cf5c1cb5fbbf606.jpg"),
    testimonial2: img("blog/1780712460263_5777623190452523323_g8951108936608082733_33fbda2d43f8f0dcca0a67b5373c6ddb.jpg"),
    testimonial3: img("blog/1780712429184_5777623190452523323_g8951108936608082733_2121b59c5613abbef413d9d2a0015db2.jpg"),
  },
} as const;
