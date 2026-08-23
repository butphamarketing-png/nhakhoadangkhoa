import {
  ABOUT_PROMO_IMAGE,
  CLINIC_STATS,
  FEATURED_SERVICE_GROUPS,
  HERO_SLIDES,
  HOME_DOCTORS,
  SMILE_MODELS,
  TECHNOLOGY_ITEMS,
  TESTIMONIAL_TABS,
  type HeroSlide,
} from "./home-content";
import { IMAGES } from "./images";

export type HomeDoctorCms = (typeof HOME_DOCTORS)[number];
export type SmileModelCms = {
  id: string;
  tag: string;
  title: string;
  image: string;
  benefits: string[];
  faceMatch: string;
};
export type TechnologyItemCms = { title: string; desc: string; image: string };
export type FeaturedServiceCms = {
  id: string;
  name: string;
  href: string;
  image: string;
  displayName: string;
};
export type TestimonialItemCms = {
  id: string;
  name: string;
  role: string;
  condition: string;
  quote: string;
  ratingLabel: string;
  image: string;
};
export type TestimonialTabCms = { id: string; label: string; items: TestimonialItemCms[] };

export type AboutSectionCms = {
  eyebrow: string;
  titleLine1: string;
  titleHighlight: string;
  body: string;
  tags: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type WhyChooseItemCms = { label: string; icon: string };
export type WhyChooseSectionCms = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  items: WhyChooseItemCms[];
};

export type CommitmentItemCms = { title: string; desc: string };
export type CommitmentsSectionCms = {
  label: string;
  subtitle: string;
  heading: string;
  items: CommitmentItemCms[];
};

export type HomeCmsData = {
  heroSlides: HeroSlide[];
  clinicStats: { value: string; label: string }[];
  homeDoctors: HomeDoctorCms[];
  aboutImage: string;
  aboutSection: AboutSectionCms;
  whyChooseImage: string;
  whyChooseSection: WhyChooseSectionCms;
  commitments: CommitmentsSectionCms;
  smileModels: SmileModelCms[];
  technologyItems: TechnologyItemCms[];
  featuredServices: FeaturedServiceCms[];
  testimonialTabs: TestimonialTabCms[];
};

const DEFAULT_ABOUT_SECTION: AboutSectionCms = {
  eyebrow: "Giới thiệu",
  titleLine1: "VỀ NHA KHOA",
  titleHighlight: "ĐĂNG KHOA",
  body: "Hệ thống nha khoa uy tín tại Tây Ninh — đội ngũ bác sĩ chuyên môn cao, trang thiết bị hiện đại và quy trình chuẩn y khoa quốc tế.",
  tags: ["ISO vô trùng", "Vật liệu chính hãng", "Bảo hành dài hạn"],
  ctaLabel: "TÌM HIỂU THÊM",
  ctaHref: "/gioi-thieu",
};

const DEFAULT_WHY_CHOOSE_SECTION: WhyChooseSectionCms = {
  eyebrow: "Lý do chọn chúng tôi",
  titleLine1: "TẠI SAO CHỌN",
  titleLine2: "NHA KHOA ĐĂNG KHOA?",
  items: [
    { icon: "Award", label: "Uy tín hàng đầu" },
    { icon: "Stethoscope", label: "Bác sĩ giỏi" },
    { icon: "Wrench", label: "Công nghệ 4.0" },
    { icon: "Shield", label: "Vật liệu chuẩn" },
    { icon: "CheckCircle", label: "Giá minh bạch" },
    { icon: "Heart", label: "Tận tâm phục vụ" },
  ],
};

const DEFAULT_COMMITMENTS: CommitmentsSectionCms = {
  label: "Cam kết",
  subtitle: "Cam kết chất lượng dịch vụ nha khoa cao cấp",
  heading: "5 CAM KẾT AN TOÀN HIỆU QUẢ",
  items: [
    { title: "Giá minh bạch", desc: "Báo giá rõ ràng, không phát sinh" },
    { title: "Thời gian nhanh", desc: "Quy trình tối ưu, hẹn đúng giờ" },
    { title: "Phục vụ tận tâm", desc: "Theo dõi sát sao từng ca" },
    { title: "An toàn hiệu quả", desc: "Vô trùng chuẩn y khoa" },
    { title: "Bảo hành chính hãng", desc: "Cam kết sau điều trị" },
  ],
};

export const DEFAULT_HOME_CMS: HomeCmsData = {
  heroSlides: HERO_SLIDES,
  clinicStats: CLINIC_STATS,
  homeDoctors: HOME_DOCTORS,
  aboutImage: ABOUT_PROMO_IMAGE,
  aboutSection: DEFAULT_ABOUT_SECTION,
  whyChooseImage: IMAGES.veChungToi,
  whyChooseSection: DEFAULT_WHY_CHOOSE_SECTION,
  commitments: DEFAULT_COMMITMENTS,
  smileModels: SMILE_MODELS,
  technologyItems: TECHNOLOGY_ITEMS,
  featuredServices: FEATURED_SERVICE_GROUPS.map((s) => ({
    id: s.id,
    name: s.name,
    href: s.href,
    image: s.image,
    displayName: s.displayName,
  })),
  testimonialTabs: TESTIMONIAL_TABS.map((tab) => ({
    id: tab.id,
    label: tab.label,
    items: tab.items.map((item) => ({ ...item })),
  })),
};

function mergeAboutSection(partial?: Partial<AboutSectionCms>): AboutSectionCms {
  if (!partial) return DEFAULT_ABOUT_SECTION;
  return {
    ...DEFAULT_ABOUT_SECTION,
    ...partial,
    tags: partial.tags?.length ? partial.tags : DEFAULT_ABOUT_SECTION.tags,
  };
}

function mergeWhyChooseSection(partial?: Partial<WhyChooseSectionCms>): WhyChooseSectionCms {
  if (!partial) return DEFAULT_WHY_CHOOSE_SECTION;
  return {
    ...DEFAULT_WHY_CHOOSE_SECTION,
    ...partial,
    items: partial.items?.length ? partial.items : DEFAULT_WHY_CHOOSE_SECTION.items,
  };
}

function mergeCommitments(partial?: Partial<CommitmentsSectionCms>): CommitmentsSectionCms {
  if (!partial) return DEFAULT_COMMITMENTS;
  return {
    ...DEFAULT_COMMITMENTS,
    ...partial,
    items: partial.items?.length ? partial.items : DEFAULT_COMMITMENTS.items,
  };
}

function mergeTechnologyItems(partial?: TechnologyItemCms[]): TechnologyItemCms[] {
  const defaults = DEFAULT_HOME_CMS.technologyItems;
  if (!partial?.length) return defaults;
  return defaults.map((def, i) => {
    const item = partial[i];
    if (!item) return def;
    const stalePrinterTitle = "Máy In Nội Nha 3 In 1";
    const cmsImage = item.image?.trim();
    const useDefaultImage =
      !cmsImage ||
      (def.title === "Công Nghệ Meta Endo" &&
        cmsImage.includes("tech-may-in-noi-nha-3in1"));
    const useDefaultTitle =
      !item.title?.trim() || item.title === stalePrinterTitle;
    return {
      title: useDefaultTitle ? def.title : item.title,
      desc: useDefaultTitle ? def.desc : item.desc || def.desc,
      image: useDefaultImage ? def.image : cmsImage,
    };
  });
}

function mergeFeaturedServices(partial?: FeaturedServiceCms[]): FeaturedServiceCms[] {
  const defaults = DEFAULT_HOME_CMS.featuredServices;
  if (!partial?.length) return defaults;
  return defaults.map((def) => {
    const item = partial.find((p) => p.id === def.id);
    if (!item) return def;
    return {
      id: def.id,
      name: item.name || def.name,
      href: item.href || def.href,
      image: item.image || def.image,
      displayName: item.displayName || def.displayName,
    };
  });
}

export function mergeSmileModels(items: SmileModelCms[] | undefined): SmileModelCms[] {
  if (!items?.length) return DEFAULT_HOME_CMS.smileModels;
  return DEFAULT_HOME_CMS.smileModels.map((def) => {
    const item = items.find((m) => m.id === def.id);
    if (!item) return def;
    return {
      ...def,
      ...item,
      benefits: item.benefits?.length ? item.benefits : def.benefits,
      faceMatch: item.faceMatch || def.faceMatch,
    };
  });
}

export function mergeHomeCms(partial: Partial<HomeCmsData> | null | undefined): HomeCmsData {
  if (!partial) return DEFAULT_HOME_CMS;
  return {
    ...DEFAULT_HOME_CMS,
    ...partial,
    heroSlides: partial.heroSlides?.length ? partial.heroSlides : DEFAULT_HOME_CMS.heroSlides,
    clinicStats: partial.clinicStats?.length ? partial.clinicStats : DEFAULT_HOME_CMS.clinicStats,
    homeDoctors: partial.homeDoctors?.length ? partial.homeDoctors : DEFAULT_HOME_CMS.homeDoctors,
    smileModels: mergeSmileModels(partial.smileModels),
    technologyItems: mergeTechnologyItems(partial.technologyItems),
    featuredServices: mergeFeaturedServices(partial.featuredServices),
    testimonialTabs: partial.testimonialTabs?.length
      ? partial.testimonialTabs
      : DEFAULT_HOME_CMS.testimonialTabs,
    aboutImage: partial.aboutImage || DEFAULT_HOME_CMS.aboutImage,
    whyChooseImage: partial.whyChooseImage || DEFAULT_HOME_CMS.whyChooseImage,
    aboutSection: mergeAboutSection(partial.aboutSection),
    whyChooseSection: mergeWhyChooseSection(partial.whyChooseSection),
    commitments: mergeCommitments(partial.commitments),
  };
}
