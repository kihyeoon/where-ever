"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MainNav } from "@/components/common/header/main-nav";
import { MobileNav } from "@/components/common/header/mobile-nav";
import Logo from "@/components/common/logo";
import { useScroll } from "@/hooks/use-scroll";

const Header = () => {
  const scrollY = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleIsScrolled = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(scrollY >= window.innerHeight - 30);
      }
    };

    handleIsScrolled();
  }, [scrollY]);

  return (
    <header
      className={`fixed top-0 z-50 flex h-[60px] w-screen items-center justify-between px-4 transition-colors duration-300 md:px-14 ${
        isScrolled
          ? "border-b border-neutral-500 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Link href="/">
        <Logo type={isScrolled ? "color" : "mono"} />
      </Link>

      <MainNav isScrolled={isScrolled} />
      <MobileNav isScrolled={isScrolled} />
    </header>
  );
};

export default Header;
