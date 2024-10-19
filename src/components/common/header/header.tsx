import Image from "next/image";
import Link from "next/link";
import { MainNav } from "@/components/common/header/main-nav";
import { MobileNav } from "@/components/common/header/mobile-nav";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mx-4 flex h-[60px] items-center justify-between md:mx-14">
      <Link href="/">
        <Image
          src="/images/logo-color.png"
          alt="Wherever logo"
          width={180}
          height={30}
        />
      </Link>

      <MainNav />
      <MobileNav />
    </header>
  );
};

export default Header;
