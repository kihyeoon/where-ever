"use client";

import Article from "@/components/common/article/article";
import BackgroundInkDrops from "@/components/common/background-ink-drops";
import {
  AdvertisingIcon,
  DonateIcon,
  FinePrintIcon,
  SettingsIcon,
} from "@/components/common/icons";
import useMediaQuery from "@/hooks/use-media-query";

const OverviewSection = () => {
  const isMobile = useMediaQuery("md");

  const listItem = [
    {
      contents: (
        <>
          최상의 성과를 위한 <br />
          다양한 마케팅 서비스
        </>
      ),
      icon: <AdvertisingIcon size={40} />,
    },
    {
      contents: (
        <>
          독보적인 기술의 <br />
          스토어 마케팅 솔루션
        </>
      ),
      icon: <SettingsIcon size={40} />,
    },
    {
      contents: (
        <>
          철저한 검수 관리 및 <br />
          맞춤형 피드백
        </>
      ),
      icon: <FinePrintIcon size={40} />,
    },
    {
      contents: (
        <>
          높은 만족도를 자랑하는 <br />
          합리적인 비용
        </>
      ),
      icon: <DonateIcon size={40} />,
    },
  ];

  return (
    <section className="relative mb-20 w-full">
      <BackgroundInkDrops />
      <Article
        title={
          isMobile ? (
            <>
              업계 최고 수준의 <br /> 최적화 마케팅 솔루션
            </>
          ) : (
            "업계 최고 수준의 최적화 마케팅 솔루션"
          )
        }
        subtitle="Overview"
        description={
          isMobile ? (
            "대한민국 최초의 스토어 마케팅 솔루션을 개발하여 다년간의 마케팅 경험과 IT 기술의 완벽한 조화로 높은 퀄리티의 검증된 성과를 제공합니다."
          ) : (
            <>
              대한민국 최초의 스토어 마케팅 솔루션을 개발하여
              <br />
              다년간의 마케팅 경험과 IT 기술의 완벽한 조화로 높은 퀄리티의
              검증된 성과를 제공합니다.
            </>
          )
        }
      >
        <ul className="mt-6 flex flex-col gap-4 md:grid md:grid-cols-2 md:justify-center md:gap-6 xl:flex xl:flex-row">
          {listItem.map(({ contents, icon }, index) => (
            <li
              key={index}
              className="flex items-center gap-4 rounded-2xl border p-6 text-left text-lg font-semibold leading-tight md:flex-1"
            >
              {icon}
              {contents}
            </li>
          ))}
        </ul>
      </Article>
    </section>
  );
};

export default OverviewSection;
