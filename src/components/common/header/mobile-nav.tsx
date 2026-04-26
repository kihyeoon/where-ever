"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { navConfig } from "@/components/common/header/config";
import LogoSmall from "@/components/common/logo-small";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav({ isScrolled }: { isScrolled: boolean }) {
  const textColor = isScrolled ? "" : "text-white hover:text-white";
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden",
            textColor,
          )}
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0">
        <Link href="/" onClick={close} className="flex w-fit items-center">
          <LogoSmall type="grey" />
        </Link>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <ul className="flex flex-col gap-6 pt-6">
            {navConfig.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  onClick={close}
                  className="block text-lg font-medium"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
