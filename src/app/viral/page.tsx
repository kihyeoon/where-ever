"use client";

import BackgroundInkDrops from "@/components/common/background-ink-drops";
import { ParallaxText } from "@/components/common/parallax-text";
import ContactSection from "@/components/home/contact-section";
import { HeroSectionTypos } from "@/components/service/hero-section-typos";
import { Separator } from "@/components/ui/separator";

const viralHeadlines = [
  "입소문 = 바이럴 (Viral)",
  "사람에서 사람으로 퍼져나가는 방식으로 단시간에 타겟 영역에",
  "높은 노출을 기대할 수 있습니다.",
  "바이럴 효과를 통해 노출되는 컨텐츠는 많은 사람들이 공유하기 때문에",
  "전달하려는 메세지가 강력하게 전달될 수 있습니다.",
];

const page = () => {
  return (
    <main>
      <BackgroundInkDrops />
      <section className="mt-44 md:mt-64">
        <ParallaxText baseVelocity={-3}>Viral Marketing</ParallaxText>
      </section>
      <div className="lg:mx-auto lg:flex lg:max-w-[1440px] lg:items-center lg:gap-10 lg:px-5">
        <section className="mx-auto max-w-[1440px] px-5 pt-20 md:mb-10 lg:mx-0 lg:mb-20 lg:px-0 lg:pt-28">
          <HeroSectionTypos
            headlines={viralHeadlines}
            breakIndex={0}
            breakMarginIndex={0}
          />
          <Separator className="mt-10 md:mt-20 lg:hidden" />
        </section>
        <ContactSection buttonText="견적 상담" showNotice={false} />
      </div>
    </main>
  );
};

export default page;
