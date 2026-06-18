export type GalleryImage = { id: string; src: string; alt: string };
export type GalleryVideo = { id: string; src: string; title: string; poster?: string };

const img = (name: string) => `/images/gallery/${name}`;
const vid = (name: string) => `/videos/${name}`;

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "img-1", src: img("1781700438192_5510338328824650605_5510338328824650605_d5a0cc508f8fff50671538421d565415.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 1" },
  { id: "img-2", src: img("1781700438211_5510338328824650605_5510338328824650605_5bcea3e03320cc0ff6b6477ebae65427.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 2" },
  { id: "img-3", src: img("1781700438229_5510338328824650605_5510338328824650605_01d5db4429271f1065c405e971ea3508.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 3" },
  { id: "img-4", src: img("1781700438248_5510338328824650605_5510338328824650605_15bb6e5963f811ab3af8bb0c6ad8b429.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 4" },
  { id: "img-5", src: img("1781700438276_5510338328824650605_5510338328824650605_58fe7a7cea65c3dea9bc5a3bb4456589.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 5" },
  { id: "img-6", src: img("1781700438294_5510338328824650605_5510338328824650605_999e7ca9653f0ad5247d4894fe12e2fb.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 6" },
  { id: "img-7", src: img("1781700438313_5510338328824650605_5510338328824650605_fcc22dc93f6a5e31a58c6d735ab53893.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 7" },
  { id: "img-8", src: img("1781700438333_5510338328824650605_5510338328824650605_6b82755a5bb4cecfe7b2385038c055af.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 8" },
  { id: "img-9", src: img("1781700438354_5510338328824650605_5510338328824650605_65c256912b1405f0be070d6a3eb9245c.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 9" },
  { id: "img-10", src: img("1781700438386_5510338328824650605_5510338328824650605_f5c196687860bff28bf866cae46f4764.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 10" },
  { id: "img-11", src: img("1781700438406_5510338328824650605_5510338328824650605_adeefe5f6ce132fa1f1ca08888d15967.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 11" },
  { id: "img-12", src: img("1781700438433_5510338328824650605_5510338328824650605_6fec7738019edded59571dedf2fd210e.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 12" },
  { id: "img-13", src: img("1781700438467_5510338328824650605_5510338328824650605_504892228c92583b7d1fd8bc68ccb7d7.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 13" },
  { id: "img-14", src: img("1781700438487_5510338328824650605_5510338328824650605_3079393460548b7fdfe4c3449867e083.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 14" },
  { id: "img-15", src: img("1781700438507_5510338328824650605_5510338328824650605_c3ebae6070ce8a6f2c4ef86637907d47.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 15" },
  { id: "img-16", src: img("1781700438529_5510338328824650605_5510338328824650605_6dfd42a8f70f27c6fd6de3bb03f773ce.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 16" },
  { id: "img-17", src: img("1781700438561_5510338328824650605_5510338328824650605_33298869e71727d4ed82a3d2065f74f8.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 17" },
  { id: "img-18", src: img("1781700438583_5510338328824650605_5510338328824650605_773bcb4ec125eee07612b33cf3777c22.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 18" },
  { id: "img-19", src: img("1781700438601_5510338328824650605_5510338328824650605_aea71cef063972478c5c4a8b06d1e9aa.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 19" },
  { id: "img-20", src: img("1781806537393_5510338328824650605_5510338328824650605_cba3ccb9f5dbaba03845c83ab2ae7992.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 20" },
  { id: "img-21", src: img("1781806537408_5510338328824650605_5510338328824650605_c88676f25e0f47ec4670ec4cc4333d7b.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 21" },
  { id: "img-22", src: img("1781806537421_5510338328824650605_5510338328824650605_973a19a76f11e88af977a8c345b65c1b.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 22" },
  { id: "img-23", src: img("1781806537433_5510338328824650605_5510338328824650605_25c6ee271f0d2f02830b9397aab0e916.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 23" },
  { id: "img-24", src: img("1781806537444_5510338328824650605_5510338328824650605_20eb0b7955de518d7f02f7a96cb76e90.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 24" },
  { id: "img-25", src: img("1781807169764_5510338328824650605_5510338328824650605_12af7a5da6702d04465fc416825d99a0.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 25" },
  { id: "img-26", src: img("1781807169787_5510338328824650605_5510338328824650605_1382927b2488ad5414970d150aafd4f8.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 26" },
  { id: "img-27", src: img("1781807169802_5510338328824650605_5510338328824650605_f0c5fef16f73cb7b0a53818dd3413cc2.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 27" },
  { id: "img-28", src: img("1781807169813_5510338328824650605_5510338328824650605_1bf9df66e80d6a89cc40a15f4bc1351d.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 28" },
  { id: "img-29", src: img("1781807169823_5510338328824650605_5510338328824650605_d86129b4f0261466aa83bb0d80bdf1b8.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 29" },
  { id: "img-30", src: img("1781807932432_5510338328824650605_5510338328824650605_8a046b02f170ee0dae9fc9e87ce2fd1b.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 30" },
  { id: "img-31", src: img("1781808397918_5510338328824650605_5510338328824650605_ca39f2842e15d45e2ec6aefb1ec36195.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 31" },
  { id: "img-32", src: img("1781808751120_5510338328824650605_5510338328824650605_4c6b7bb8f6d7ec06d9beee27441db4a8.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 32" },
  { id: "img-33", src: img("1781808751123_5510338328824650605_5510338328824650605_80a1d75d658abd2fedeff44478a05c98.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 33" },
  { id: "img-34", src: img("1781808751125_5510338328824650605_5510338328824650605_78561df81eda1024ae0ddb3d0d8df545.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 34" },
  { id: "img-35", src: img("1781808751128_5510338328824650605_5510338328824650605_75c1c139155b82f2fa4954ddf704da65.jpg"), alt: "Hình ảnh Nha Khoa Đăng Khoa 35" },
  { id: "img-36", src: img("le-ky-ket-chuyen-giao-cong-nghe-01.png"), alt: "Hình ảnh Nha Khoa Đăng Khoa 36" },
];

export const GALLERY_VIDEOS: GalleryVideo[] = [
  { id: "vid-1", src: vid("1781808751116_5510338328824650605_5510338328824650605.mp4"), title: "Video Nha Khoa Đăng Khoa 1" },
];

export const GALLERY_PAGE_PATH = "/hinh-anh-video";
export const HOME_GALLERY_IMAGE_PREVIEW_COUNT = 6;
