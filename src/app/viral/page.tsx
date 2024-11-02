"use client";

import BackgroundInkDrops from "@/components/common/background-ink-drops";
import { ParallaxText } from "@/components/common/parallax-text";
// import { FAQSection } from "@/components/service/faq-section";
import { HeroSectionTypos } from "@/components/service/hero-section-typos";
import { WithImageCard } from "@/components/service/with-image-card";
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
      <section className="mx-auto mb-20 max-w-[1440px] px-5 pt-20 md:pt-28">
        <HeroSectionTypos
          headlines={viralHeadlines}
          breakIndex={0}
          breakMarginIndex={0}
        />
      </section>
      <section className="mx-auto mb-20 max-w-[1440px] px-5 pt-20 md:pt-28">
        <Separator className="mb-5 bg-foreground" />
        <h1 className="article-title">HOW TO</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <WithImageCard
            src="/images/keyboard-typing.jpg"
            title="맘카페 & 지식인 &블로그"
            description="잠재적 소비자가 가장 많은 지역, 분야의 커뮤니티에서 정보를 공유하는 서비스를 제공합니다."
          />
        </div>
      </section>
      {/* <FAQSection /> */}
    </main>
  );
};

export default page;
