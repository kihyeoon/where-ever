"use client";

import Link from "next/link";
import { ArrowIcon, DownloadIcon } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import useMediaQuery from "@/hooks/use-media-query";

const ContactSection = () => {
  const isMobile = useMediaQuery("md");

  return (
    <section className="relative mx-auto mb-20 w-full max-w-[1400px] px-5 pt-36">
      <div className="rounded-2xl bg-main px-5 py-10 md:flex md:items-center md:justify-between md:px-10 md:py-14">
        <p className="article-title mb-8 text-center text-white md:mb-0 md:text-start md:text-3xl">
          {isMobile ? (
            <>
              웨어에버와 함께,
              <br />
              여정을 시작해보세요!
            </>
          ) : (
            <>
              웨어에버와 함께,
              <br />
              여정을 시작해보세요!
            </>
          )}
        </p>
        <div className="flex justify-center gap-2">
          <Button className="gap-1 bg-white/20 font-semibold text-primary hover:bg-white/10">
            회사소개서
            <DownloadIcon strokeWidth={0.5} />
          </Button>
          <Link href="/contact">
            <Button
              className="gap-1 bg-foreground font-semibold text-main hover:bg-foreground/80"
              variant={"secondary"}
            >
              문의하기 <ArrowIcon strokeWidth={0.5} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
