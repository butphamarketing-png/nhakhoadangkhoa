/** Ảnh thương hiệu Nha Khoa Đăng Khoa — /public/images */

const img = (name: string) => `/images/${name}`;

export const IMAGES = {
  logo: img("logo-dang-khoa.jpg"),
  coverClinic: img("cover-clinic.png"),
  /** Banner 10.000+ ca răng sứ — section Giới thiệu */
  aboutRangSu10000: img("about-rang-su-10000.png"),
  designReference: img("design-reference.png"),
  coverPage: img("COVER PAGE.jpg"),
  veChungToi: img("Ve-chung-tôi.jpg"),

  /**
   * Banner hero slideshow — mỗi file là 1 ảnh ngang (~1920×720).
   * Chữ, nút, sidebar 4 icon nên được thiết kế sẵn trong ảnh (PNG/JPG).
   */
  heroSlides: {
    /** Banner thương hiệu vàng — slide 1 */
    brand: img("hero-banner-brand.png"),
    coverPage: img("COVER PAGE.jpg"),
    banner01: img("hero-banner-brand.png"),
    banner02: img("cover-clinic.png"),
    banner03: img("promo-mua-vang-chinh-nha.png"),
    banner04: img("promo-nieng-rang-he.png"),
  },

  services: {
    implant: img("service-implant.png"),
    niengRang: img("service-nieng-rang.png"),
    nhoRangKhon: img("service-nho-rang-khon.png"),
    itero: img("service-cong-nghe-itero.png"),
  },

  promos: {
    muaVangChinhNha: img("promo-mua-vang-chinh-nha.png"),
    chinhNha10: img("promo-chinh-nha-10.png"),
    canTiepSom: img("promo-can-tiep-som.png"),
    niengRangHe: img("promo-nieng-rang-he.png"),
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
  },
} as const;
