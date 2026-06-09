/**
 * 4 dịch vụ chính — menu hover + trang /dich-vu
 */
import { SERVICE_GROUPS } from "./service-groups";

export type MainServiceCard = {
  id: string;
  title: string;
  desc: string;
  href: string;
  image: string;
};

export function buildMainServiceCards(): MainServiceCard[] {
  return SERVICE_GROUPS.map((g) => ({
    id: g.id,
    title: g.title,
    desc: g.intro,
    href: g.href,
    image: g.image,
  }));
}

export const MAIN_SERVICE_CARDS = buildMainServiceCards();
