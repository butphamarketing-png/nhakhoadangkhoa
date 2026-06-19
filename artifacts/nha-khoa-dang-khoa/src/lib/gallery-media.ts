export type GalleryImage = { id: string; src: string; alt: string };
export type GalleryVideo = { id: string; src: string; title: string; poster?: string };

const img = (name: string) => `/images/gallery/${name}`;
const vid = (name: string) => `/videos/${name}`;

export const GALLERY_WATERMARK_LOGO = "/images/watermark-logo.png";

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "img-1", src: img("1781810851124_412064267014708642_5510338328824650605_5c5548bc1051130dd4a48616abb58682.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 1" },
  { id: "img-2", src: img("1781810851172_412064267014708642_5510338328824650605_da929aab805e815effc9a22a11199830.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 2" },
  { id: "img-3", src: img("1781810851261_412064267014708642_5510338328824650605_3ffd61bbc2535e7cd982d6fd0e333edc.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 3" },
  { id: "img-4", src: img("1781810851270_412064267014708642_5510338328824650605_6fb63ed6a73c3177264a44db2b26922b.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 4" },
  { id: "img-5", src: img("1781810851284_412064267014708642_5510338328824650605_39e6c122c1bb1ac2b605bbb7e2e6b15f.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 5" },
  { id: "img-6", src: img("1781810851329_412064267014708642_5510338328824650605_5ef02a53fdc6ca7a1a52921405acd0eb.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 6" },
  { id: "img-7", src: img("1781810851336_412064267014708642_5510338328824650605_25de53c7afc82546f1e2c47178aa79ba.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 7" },
  { id: "img-8", src: img("1781810928545_5510338328824650605_5510338328824650605_30201178b6662de1bf1ed4f36f277a29.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 8" },
  { id: "img-9", src: img("1781810928789_5510338328824650605_5510338328824650605_fde55d3e1bc190af45caac273f541443.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 9" },
  { id: "img-10", src: img("1781810930818_5510338328824650605_5510338328824650605_ebcb890684eefd75f8694c0926b44e83.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 10" },
  { id: "img-11", src: img("1781838536047_5777623190452523323_5777623190452523323_9d421c6908e76f0020947751ae2ed8c7.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 11" },
  { id: "img-12", src: img("1781838541434_5777623190452523323_5777623190452523323_f6a43f3dc2a0d7ae1cc0761474951011.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 12" },
  { id: "img-13", src: img("1781838550673_5777623190452523323_5777623190452523323_9025237197d6c80ac156c661e2a50a3d.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 13" },
  { id: "img-14", src: img("1781838690323_5777623190452523323_5777623190452523323_768505ac86c1ae09a183abd8c997c25e.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 14" },
  { id: "img-15", src: img("z7626539459754_a72a7226eec5a1d8c071f67e0327e544.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 15" },
];

export const GALLERY_VIDEOS: GalleryVideo[] = [
  { id: "vid-1", src: vid("video-hoat-dong.mp4"), title: "Hoạt động Nha Khoa Đăng Khoa" },
  { id: "vid-2", src: vid("video-dang-khoa-wtmm.mp4"), title: "Đăng Khoa WTMM" },
  { id: "vid-3", src: vid("video-nk-dang-khoa-2.mp4"), title: "Nha Khoa Đăng Khoa" },
];

export const GALLERY_PAGE_PATH = "/hinh-anh-video";
export const HOME_GALLERY_IMAGE_PREVIEW_COUNT = 6;
