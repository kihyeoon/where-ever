import BackgroundInkDrops from "@/components/common/background-ink-drops";
import { ParallaxText } from "@/components/common/parallax-text";
import { HeroSectionTypos } from "@/components/service/hero-section-typos";
import { WithImageCard } from "@/components/service/with-image-card";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <main>
      <BackgroundInkDrops />
      <section className="mt-44 md:mt-64">
        <ParallaxText baseVelocity={-3}>Place Marketing</ParallaxText>
      </section>
      <section className="mx-auto mb-20 max-w-[1440px] px-5 pt-20 md:pt-28">
        <HeroSectionTypos />
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
      <section className="mx-auto mb-20 max-w-[1440px] px-5 pt-20 md:pt-28">
        <Separator className="mb-5 bg-foreground" />
        <h1 className="article-title">FAQ</h1>
        <p className="text-5xl">자주 묻는 질문에 답변드려요.</p>
      </section>
    </main>
  );
};

export default page;
