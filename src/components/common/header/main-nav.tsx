"use client";

import { cn } from "@/lib/utils";
import { navConfig } from "@/components/common/header/config";

export function MainNav({ isScrolled }: { isScrolled: boolean }) {
  const baseText =
    "text-base font-semibold font-[family-name:var(--font-alata)] font-medium";
  const textColor = isScrolled ? "" : "text-white hover:text-white";

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-8">
        {navConfig.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              className={cn(
                "transition-colors hover:opacity-70",
                baseText,
                textColor,
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
