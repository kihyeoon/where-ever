"use client";

import BackgroundInkDrops from "@/components/common/background-ink-drops";
import { ParallaxText } from "@/components/common/parallax-text";
import ContactSection from "@/components/home/contact-section";
import { HeroSectionTypos } from "@/components/service/hero-section-typos";
import { Separator } from "@/components/ui/separator";

const brandingHeadlines = [
  "브랜딩",
  "브랜드의 비전, 핵심 가치를 정의, 이해하고, 이를 기반으로",
  "브랜드 아이덴티티와 포지셔닝을 설계합니다.",
  "브랜딩은 다양한 SNS를 활용해 브랜드의 인지도를 높이고,",
  "목표 시장에서 브랜드를 더욱 강력하게 만들어",
  "타겟 영역을 점진적으로 넓혀나갑니다.",
];

const page = () => {
  return (
    <main>
      <BackgroundInkDrops />
      <section className="mt-44 md:mt-64">
        <ParallaxText baseVelocity={-3}>Brand Marketing</ParallaxText>
      </section>
      <section className="mx-auto mb-20 max-w-[1440px] px-5 pt-20 md:pt-28">
        <HeroSectionTypos
          headlines={brandingHeadlines}
          breakIndex={0}
          breakMarginIndex={0}
        />
      </section>
      <section className="mx-auto mb-20 max-w-[1440px] px-5 pt-20 md:pt-28">
        <Separator className="mb-5" />
      </section>
      <ContactSection buttonText="견적 상담" showNotice={false} />
    </main>
  );
};

export default page;
