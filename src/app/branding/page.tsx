"use client";

import BackgroundInkDrops from "@/components/common/background-ink-drops";
import { ParallaxText } from "@/components/common/parallax-text";
// import { FAQSection } from "@/components/service/faq-section";
import { HeroSectionTypos } from "@/components/service/hero-section-typos";
// import { WithImageCard } from "@/components/service/with-image-card";
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
        <Separator className="mb-5 bg-foreground" />
        <h1 className="article-title">HOW TO</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* <WithImageCard
            src="/images/branding-1.jpg"
            title="브랜드 아이덴티티"
            description="브랜드의 비전과 핵심 가치를 정의하고, 이를 기반으로 브랜드 아이덴티티와 포지셔닝을 설계합니다."
          />
          <WithImageCard
            src="/images/branding-2.jpg"
            title="브랜드 인지도"
            description="다양한 SNS를 활용해 브랜드의 인지도를 높이고, 목표 시장에서 브랜드를 더욱 강력하게 만들어갑니다."
          /> */}
        </div>
      </section>
      {/* <FAQSection /> */}
    </main>
  );
};

export default page;
