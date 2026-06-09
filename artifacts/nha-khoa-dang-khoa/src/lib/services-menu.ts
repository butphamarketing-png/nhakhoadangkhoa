/**
 * Menu dịch vụ — 10 nhóm cấp 1, danh sách con từ bảng giá
 */
import { SERVICE_GROUPS } from "./service-groups";

export type ServiceMenuItem = {
  label: string;
  href: string;
  excerpt?: string;
};

export type ServiceMenuSubGroup = {
  id: string;
  title: string;
  items: ServiceMenuItem[];
};

export type ServiceMenuGroup = {
  id: string;
  title: string;
  href: string;
  intro: string;
  subgroups?: ServiceMenuSubGroup[];
  items: ServiceMenuItem[];
};

export const SERVICE_MENU_GROUPS: ServiceMenuGroup[] = SERVICE_GROUPS.map((g) => ({
  id: g.id,
  title: g.title,
  href: g.href,
  intro: g.intro,
  items: g.items.map((item) => ({
    label: item.name,
    href: item.href,
  })),
}));

export function getServiceSubgroups(group: ServiceMenuGroup): ServiceMenuSubGroup[] {
  return [{ id: "all", title: "Dịch vụ", items: group.items }];
}

export function getServiceDropdownItems(): ServiceMenuItem[] {
  return SERVICE_MENU_GROUPS.flatMap((g) => [
    { label: g.title, href: g.href, excerpt: g.intro },
    ...g.items.slice(0, 4),
  ]);
}
