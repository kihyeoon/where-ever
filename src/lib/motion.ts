import type { Variants } from "motion/react";

export const ease = [0.16, 1, 0.3, 1] as const;

export const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const gridContainerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease },
    transitionEnd: { transform: "none", filter: "none" },
  },
};

export const photoVariants: Variants = {
  hidden: { opacity: 0, scale: 1.06, filter: "blur(8px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease },
    transitionEnd: { transform: "none", filter: "none" },
  },
};

export const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 1, ease, delay: 0.15 },
  },
};

export const viewportOnce = { once: true, margin: "-15% 0px" } as const;
