"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import BackgroundInkDrops from "@/components/common/background-ink-drops";
import { ArrowIcon } from "@/components/common/icons";
import { Separator } from "@/components/ui/separator";

const ServiceSection = () => {
  return (
    <section className="relative mx-auto mb-20 w-full max-w-[1440px] px-5 pt-36">
      <BackgroundInkDrops />

      <Separator className="mb-5 bg-foreground" />
      <h1 className="article-title">MARKETING</h1>
      <p className="text-3xl leading-tight tracking-tight md:text-5xl">
        어떤 마케팅에 관심있으세요?
      </p>

      <div className="mt-6 grid h-fit grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex-1">
          <Link href="/place">
            <Card title="플레이스 마케팅" imgSrc="/images/making-coffee.jpg" />
          </Link>
        </div>

        <div className="flex-1">
          <Link href="/sns">
            <Card title="인스타 마케팅" imgSrc="/images/instagram.jpg" />
          </Link>
        </div>

        <div className="flex-1">
          <Link href="/viral">
            <Card title="바이럴 마케팅" imgSrc="/images/keyboard-typing.jpg" />
          </Link>
        </div>

        <div className="flex-1">
          <Link href="/branding">
            <Card title="브랜딩" imgSrc="/images/branding.jpg" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

function Card({
  title,
  imgSrc,
  className,
}: {
  title: string;
  imgSrc: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex aspect-video flex-col items-start justify-center overflow-hidden rounded-2xl bg-background transition-transform duration-500 hover:translate-y-[-5px]",
        className,
      )}
    >
      <Image
        className="h-full w-full object-cover opacity-50"
        src={imgSrc}
        width={800}
        height={450}
        alt="overview"
      />
      <div className="absolute inset-0 flex items-end px-8 py-9">
        <h2 className="text-xl font-bold leading-tight sm:text-2xl">{title}</h2>
        <ArrowIcon className="size-6 -rotate-45 transition-transform duration-500 group-hover:rotate-0 sm:size-8" />
      </div>
    </div>
  );
}
