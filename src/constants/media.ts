export const SIZE = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const size = {
  sm: `${SIZE.sm}px`,
  md: `${SIZE.md}px`,
  lg: `${SIZE.lg}px`,
  xl: `${SIZE.xl}px`,
} as const;

export type SizeKey = keyof typeof size;
