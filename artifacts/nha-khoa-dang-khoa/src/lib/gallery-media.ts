export type GalleryImage = { id: string; src: string; alt: string };
export type GalleryVideo = { id: string; src: string; title: string; poster?: string };

const img = (name: string) => `/images/gallery/${name}`;
const vid = (name: string) => `/videos/${name}`;

export const GALLERY_WATERMARK_LOGO = "/images/watermark-logo.png";

/**
 * Gallery công khai — đã bỏ ảnh có BS. Nguyễn Đăng Khoa.
 * Giữ ảnh khách hàng / không gian phòng khám.
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "img-11",
    src: img("1781838536047_5777623190452523323_5777623190452523323_9d421c6908e76f0020947751ae2ed8c7.jpg"),
    alt: "Khách hàng tại quầy lễ tân Nha Khoa Đăng Khoa",
  },
  {
    id: "img-12",
    src: img("1781838541434_5777623190452523323_5777623190452523323_f6a43f3dc2a0d7ae1cc0761474951011.jpg"),
    alt: "Khách hàng trải nghiệm tại Nha Khoa Đăng Khoa",
  },
  {
    id: "img-14",
    src: img("1781838690323_5777623190452523323_5777623190452523323_768505ac86c1ae09a183abd8c997c25e.jpg"),
    alt: "Hành trình thay đổi diện mạo — niềng răng",
  },
  {
    id: "img-15",
    src: img("z7626539459754_a72a7226eec5a1d8c071f67e0327e544.jpg"),
    alt: "Khách hàng phục hình thẩm mỹ tại Nha Khoa Đăng Khoa",
  },
];

export const GALLERY_VIDEOS: GalleryVideo[] = [
  { id: "vid-1", src: vid("video-hoat-dong.mp4"), title: "Hoạt động Nha Khoa Đăng Khoa" },
  { id: "vid-2", src: vid("video-dang-khoa-wtmm.mp4"), title: "Đăng Khoa WTMM" },
  { id: "vid-3", src: vid("video-nk-dang-khoa-2.mp4"), title: "Nha Khoa Đăng Khoa" },
];

export const GALLERY_PAGE_PATH = "/hinh-anh-video";
export const HOME_GALLERY_IMAGE_PREVIEW_COUNT = 6;
