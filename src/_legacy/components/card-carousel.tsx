"use client";

import autoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const cardDatas = [
  {
    title: (
      <>
        유입증가의 핵심 <br />
        <span className="font-extrabold">리워드 트래픽</span>
      </>
    ),
    description: "실제 사용자들의 트래픽으로 고객 유입률 증가",
    imageSrc: "/images/about-1.png",
    imageAlt: "플레이스 검색 광고",
  },
  {
    title: (
      <>
        순위상승의 핵심 <br />
        <span className="font-extrabold">저장하기</span>
      </>
    ),
    description: (
      <>
        인기있는 업장으로 인지하게 하는 핵심 <br />
        저장하기 제공
      </>
    ),
    imageSrc: "/images/about-2.png",
    imageAlt: "플레이스 저장하기",
  },
  {
    title: (
      <>
        간접 방문의 핵심 <br />
        <span className="font-extrabold">블로그 리뷰</span>
      </>
    ),
    description: "우리 업장의 장점을 살리는 퀄리티의 리뷰 제공",
    imageSrc: "/images/about-3.png",
    imageAlt: "블로그 리뷰",
  },
  {
    title: <>인스타그램 컨텐츠 서비스</>,
    description: (
      <>
        SNS에서 빠질 수 없는 인스타의 <br />
        다양한 컨텐츠 서비스를 활용하는 브랜딩
      </>
    ),
    imageSrc: "/images/about-4.png",
    imageAlt: "인스타그램 컨텐츠 서비스",
  },
  {
    title: (
      <>
        꾸준한 관리의 마케팅으로 <br />
        쌓이는 성공사례
      </>
    ),
    description: (
      <>
        꾸준한 관리와 만족을 느낄 수 있는 <br />
        마케팅으로 함께 성장해나가고 있습니다.
      </>
    ),
    imageSrc: "/images/about-5.png",
    imageAlt: "꾸준한 마케팅 관리",
  },
];

export function CardCarousel() {
  const plugin = React.useRef(autoScroll({ stopOnInteraction: false }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full py-10 md:py-20"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {cardDatas.map(({ title, description, imageSrc, imageAlt }, index) => (
          <CarouselItem
            key={index}
            className="md:min-w-[700px] md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-[4/3] flex-col items-center justify-center p-6 md:flex-row md:justify-between md:py-16">
                  <div className="flex h-[130px] flex-col gap-4 text-center md:w-[50%] md:translate-x-8 md:text-left">
                    <h2 className="text-2xl font-semibold md:text-3xl">
                      {title}
                    </h2>
                    <p className="text-pretty break-keep font-semibold text-neutral-400 md:text-lg">
                      {description}
                    </p>
                  </div>
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={700}
                    height={700}
                    className="aspect-square object-cover md:max-w-[50%]"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
