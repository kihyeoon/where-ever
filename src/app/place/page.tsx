import Image from "next/image";
import BackgroundInkDrops from "@/components/common/background-ink-drops";
import { ParallaxText } from "@/components/common/parallax-text";
import ContactSection from "@/components/home/contact-section";
import { HeroSectionTypos } from "@/components/service/hero-section-typos";
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
      <section className="mx-auto mb-10 max-w-[1440px] px-5 pt-20 md:mb-20 md:pt-28">
        <HeroSectionTypos
          headlines={placeHeadlines}
          breakIndex={1}
          breakMarginIndex={1}
        />
      </section>
      <section className="mx-auto max-w-[1440px] px-5 py-10 md:py-20">
        <Separator className="mb-20 md:mb-40" />
        <Image
          priority
          src="/images/service-place.png"
          alt="place"
          width={840}
          height={560}
          className="mx-auto w-full rounded-lg md:w-4/5 lg:w-3/5"
        />
      </section>
      <ContactSection />
    </main>
  );
};

export default page;
