import BackgroundInkDrops from "@/components/common/background-ink-drops";
import { ParallaxText } from "@/components/common/parallax-text";
// import { FAQSection } from "@/components/service/faq-section";
import { HeroSectionTypos } from "@/components/service/hero-section-typos";
import { WithImageCard } from "@/components/service/with-image-card";
import { Separator } from "@/components/ui/separator";

const placeHeadlines = [
  "소비자 정보 탐색 시 가장 먼저",
  "확인하는 장소 1위",
  "지도와 연계되어 가게의 기본 정보뿐만 아니라 영업시간, 메뉴, 위치, 사진, ",
  "그리고 고객들의 리뷰까지 모두 확인할 수 있는 플랫폼입니다. ",
  "플레이스 순위상승에 핵심적인 서비스 제공으로 타겟 고객의 유입을 유도합니다.",
];

const page = () => {
  return (
    <main>
      <BackgroundInkDrops />
      <section className="mt-44 md:mt-64">
        <ParallaxText baseVelocity={-3}>Place Marketing</ParallaxText>
      </section>
      <section className="mx-auto mb-20 max-w-[1440px] px-5 pt-20 md:pt-28">
        <HeroSectionTypos
          headlines={placeHeadlines}
          breakIndex={1}
          breakMarginIndex={1}
        />
      </section>
      <section className="mx-auto mb-20 max-w-[1440px] px-5 pt-20 md:pt-28">
        <Separator className="mb-5 bg-foreground" />
        <h1 className="article-title">HOW TO</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <WithImageCard
            src="/images/keyboard-typing.jpg"
            title="블로그 리뷰"
            description="리뷰는 곧 신뢰입니다, 리뷰를 통해 방문율을 높이고, 쌓이는 리뷰는 시각적으로 인기있는 업장으로 인식됩니다."
          />
          <WithImageCard
            src="/images/making-coffee.jpg"
            title="실방문 트래픽"
            description="실제 이용자들이 검색, 플레이스 방문까지 함으로써 순위상승에 중요한 트래픽을 제공합니다."
          />
          <WithImageCard
            src="/images/buildings.jpg"
            title="저장하기"
            description="순위상승 기준의 핵심인 플레이스 저장을 실제 이용자들을 통해 제공합니다."
          />
        </div>
      </section>
      {/* <FAQSection /> */}
    </main>
  );
};

export default page;
