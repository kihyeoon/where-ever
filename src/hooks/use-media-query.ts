import { SIZE, SizeKey, size } from "@/constants";
import { useEffect, useState } from "react";

export default function useMediaQuery(width: number | SizeKey) {
  const targetWidth = typeof width === "number" ? `${width}px` : size[width];
  const isMobileSize =
    (typeof width === "number" && width <= SIZE.md) || targetWidth === size.md;

  const [targetReached, setTargetReached] = useState<boolean>(isMobileSize);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${targetWidth})`);

    const updateTarget = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    };

    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, [targetWidth]);

  return targetReached;
}
