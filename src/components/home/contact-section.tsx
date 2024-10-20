"use client";

import Link from "next/link";
import BackgroundInkDrops from "@/components/common/background-ink-drops";
import { ArrowIcon, DownloadIcon } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import useMediaQuery from "@/hooks/use-media-query";

const ContactSection = () => {
  const isMobile = useMediaQuery("md");

  return (
    <section className="relative mx-auto mb-20 w-full max-w-[1400px] px-5 pt-36">
      <BackgroundInkDrops />
      <div className="rounded-2xl bg-[#91273a] px-5 py-10 md:flex md:items-center md:justify-between md:px-10 md:py-14">
        <p className="article-title mb-8 text-center text-white md:mb-0 md:text-start md:text-3xl">
          {isMobile ? (
            <>
              비즈니스 성장을 위한
              <br />
              마케팅 솔루션, 지금 웨어에버와
              <br />
              함께하세요
            </>
          ) : (
            <>
              비즈니스 성장을 위한 마케팅 솔루션,
              <br /> 지금 웨어에버와 함께하세요
            </>
          )}
        </p>
        <div className="flex justify-center gap-2">
          <Button className="gap-1 bg-white/20 font-semibold hover:bg-white/10">
            회사소개서
            <DownloadIcon strokeWidth={0.5} />
          </Button>
          <Link href="/contact">
            <Button
              className="gap-1 font-semibold text-[#91273a]"
              variant={"secondary"}
            >
              도입 문의하기 <ArrowIcon strokeWidth={0.5} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
