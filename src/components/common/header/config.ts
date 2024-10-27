import { NavItemWithChildren } from "@/types/nav";

export const navConfig: NavItemWithChildren[] = [
  {
    title: "WHEREVER?",
    href: "/about",
    items: [],
  },
  {
    title: "Marketing",
    items: [
      {
        title: "플레이스",
        href: "/place",
        items: [],
      },
      {
        title: "인스타",
        href: "/sns",
        items: [],
      },
      {
        title: "바이럴",
        href: "/viral",
        items: [],
      },
      {
        title: "브랜딩",
        href: "/branding",
        items: [],
      },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
    items: [],
  },
];
