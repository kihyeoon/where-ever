import { NavItemWithChildren } from "@/types/nav";

export const navConfig: NavItemWithChildren[] = [
  {
    title: "WHEREVER?",
    href: "/about",
    items: [],
  },
  {
    title: "Service",
    items: [
      {
        title: "플레이스 마케팅",
        href: "/",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
        items: [],
      },
      {
        title: "체험단 마케팅",
        href: "/",
        description:
          "For sighted users to preview content available behind a link.",
        items: [],
      },
      {
        title: "스마트 스토어 마케팅",
        href: "/",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
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
