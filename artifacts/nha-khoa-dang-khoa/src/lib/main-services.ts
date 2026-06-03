/**
 * 4 dịch vụ chính — menu hover + trang /dich-vu
 */
import { IMAGES } from "./images";
import { SERVICE_MENU_GROUPS } from "./services-menu";

export type MainServiceCard = {
  id: string;
  title: string;
  desc: string;
  href: string;
  image: string;
};

const CARD_LINKS: { groupId: string; href: string; image: string }[] = [
  { groupId: "trong-rang-implant", href: "/dich-vu/implant", image: IMAGES.services.implant },
  { groupId: "rang-su", href: "/dich-vu/tham-my-nha-khoa", image: IMAGES.aboutRangSu10000 },
  { groupId: "nieng-rang", href: "/dich-vu/nieng-rang", image: IMAGES.services.niengRang },
  { groupId: "nha-khoa-tong-quat", href: "/dich-vu/nha-khoa-tong-quat", image: IMAGES.services.nhoRangKhon },
];

export function buildMainServiceCards(
  groups: typeof SERVICE_MENU_GROUPS = SERVICE_MENU_GROUPS,
): MainServiceCard[] {
  return CARD_LINKS.map((cfg) => {
    const g = groups.find((x) => x.id === cfg.groupId);
    return {
      id: cfg.groupId,
      title: g?.title ?? cfg.groupId,
      desc: g?.intro ?? "",
      href: cfg.href,
      image: cfg.image,
    };
  });
}

export const MAIN_SERVICE_CARDS = buildMainServiceCards();
