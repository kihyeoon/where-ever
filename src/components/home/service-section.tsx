"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import BackgroundInkDrops from "@/components/common/background-ink-drops";
import { ArrowIcon } from "@/components/common/icons";
import { Separator } from "@/components/ui/separator";
import useMediaQuery from "@/hooks/use-media-query";

const ServiceSection = () => {
  const isMobile = useMediaQuery("md");

  return (
    <section className="relative mx-auto mb-20 w-full max-w-[1440px] px-5 pt-36">
      <BackgroundInkDrops />

      <Separator className="mb-5 bg-foreground" />
      <h1 className="article-title">SERVICE</h1>
      <p className="text-3xl leading-tight tracking-tight md:text-5xl">
        한 매체에 집중하는 것이 아닌 마케팅을 다각화함으로서 타겟 영역을
        점진적으로 확장하여 언제든, 어디서든 신뢰받는 기업이 될 수 있도록 최선을
        다 하고 있습니다.
      </p>

      <Separator className="mt-10 bg-foreground" />
      <div className="flex h-[80rem] flex-col gap-2 pt-2 md:h-[30rem] md:flex-row md:pt-0">
        <div className="flex-1 md:pt-2">
          <Link href="/place">
            <Card
              title="플레이스 마케팅"
              description="지도와 연계되어 가게의 기본 정보뿐만 아니라 영업시간, 메뉴, 위치, 사진, 그리고 고객들의 리뷰까지 모두 확인할 수 있는 플랫폼입니다. 플레이스 순위상승에 핵심적인 서비스 제공으로 타겟 고객의 유입을 유도합니다."
            />
          </Link>
        </div>

        <Separator
          className="bg-foreground"
          orientation={isMobile ? "horizontal" : "vertical"}
        />
        <div className="flex-1 md:pt-2">
          <Link href="/sns">
            <Card
              title="인스타 마케팅"
              description="MZ세대의 활발한 SNS활동으로 카톡 대신 인스타 DM을 통해 소통을 하는 비중이 지속적으로 늘고 있기에 소통을 넘어 더욱 중요한 매체로 자리잡고 있습니다. 또한 인스타그램 마케팅은 특정 타겟층을 목표로 설정할 수 있어 매우 효과적입니다."
            />
          </Link>
        </div>

        <Separator
          className="bg-foreground"
          orientation={isMobile ? "horizontal" : "vertical"}
        />
        <div className="flex-1 md:pt-2">
          <Link href="/viral">
            <Card
              title="바이럴 마케팅"
              description="사람에서 사람으로 퍼져나가는 방식으로 단시간에 타겟 영역에 높은 노출을 기대할 수 있습니다. 바이럴 효과를 통해 노출되는 컨텐츠는 많은 사람들이 공유하기 때문에 전달하려는 메세지가 강력하게 전달될 수 있습니다."
            />
          </Link>
        </div>

        <Separator
          className="bg-foreground"
          orientation={isMobile ? "horizontal" : "vertical"}
        />
        <div className="flex-1 md:pt-2">
          <Link href="/branding">
            <Card
              title="브랜딩"
              description="브랜드의 비전, 핵심 가치를 정의, 이해하고, 이를 기반으로 브랜드 아이덴티티와 포지셔닝을 설계합니다. 브랜딩은 다양한 SNS를 활용해 브랜드의 인지도를 높이고, 목표 시장에서 브랜드를 더욱 강력하게 만들어 타겟 영역을 점진적으로 넓혀나갑니다."
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

function Card({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col items-start justify-between rounded-2xl bg-main p-4 transition-colors duration-500 md:justify-end md:bg-transparent md:hover:bg-main",
        className,
      )}
    >
      <h2 className="text-2xl md:absolute md:top-1/2 md:-translate-y-1/2">
        {title}
      </h2>
      <ArrowIcon className="absolute right-4 top-1/2 size-6 -translate-y-1/2 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />
      <p className="w-1/2 leading-tight tracking-tight transition-opacity duration-500 md:w-auto md:opacity-0 md:group-hover:opacity-100">
        {description}
      </p>
    </div>
  );
}
