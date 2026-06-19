export type GalleryImage = { id: string; src: string; alt: string };
export type GalleryVideo = { id: string; src: string; title: string; poster?: string };

export const GALLERY_IMAGES: GalleryImage[] = [];

export const GALLERY_VIDEOS: GalleryVideo[] = [];

export const GALLERY_PAGE_PATH = "/hinh-anh-video";
export const HOME_GALLERY_IMAGE_PREVIEW_COUNT = 6;
