"use client";

import Image from "next/image";
import Link from "next/link";
import Article from "@/components/common/article/article";
import BackgroundInkDrops from "@/components/common/background-ink-drops";
import {
  AdvertisingIcon,
  DonateIcon,
  FinePrintIcon,
  SettingsIcon,
} from "@/components/common/icons";
import { Button } from "@/components/ui/button";
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
    <section className="relative mx-auto mb-20 w-full max-w-[1400px] px-5 pt-36">
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
        <ul className="mt-6 flex flex-col gap-4 md:mt-14 md:grid md:grid-cols-2 md:justify-center md:gap-6 xl:flex xl:flex-row">
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

        {/* card */}
        <div className="relative mt-8 h-[450px] overflow-hidden rounded-2xl bg-black md:mt-14">
          <Image
            className="h-full w-full object-cover opacity-70"
            src="/images/buildings.jpg"
            width={800}
            height={450}
            alt="overview"
          />
          <div className="absolute inset-0 flex flex-col px-8 py-9 md:items-start md:px-24 md:py-20 md:text-start">
            <p className="article-title text-white md:text-3xl">
              {isMobile ? (
                <>
                  비즈니스 성장을 위한
                  <br /> 최적의 파트너
                </>
              ) : (
                "비즈니스 성장을 위한 최적의 파트너"
              )}
            </p>
            <p className="article-description text-white md:text-lg">
              우리는 사업이 올바르게 성장하여 지속적인 성공을 이뤄낼 수 있는
              진정한 마케팅을 합니다.
              <br />
              혼자만의 힘으로 해결할 수 없는 부분을 서포트하여 결과로 증명해
              드리겠습니다.
            </p>
            <p className="article-description text-white">
              웨어에버 온라인 마케팅 전문가들의 관리를 통해 비즈니스 성장을
              이뤄보세요.
            </p>
            <Link className="mt-auto" href="/about">
              <Button
                variant="outline"
                className="w-fit rounded-full bg-transparent font-bold text-white"
              >
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </Article>
    </section>
  );
};

export default OverviewSection;
