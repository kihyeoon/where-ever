"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Card from "./card";

const cards = [
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

const CardsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const [transformValue, setTransformValue] = useState(0);

  const calculateTransformValue = () => {
    return -((window.innerWidth - 32) * cards.length + 128 - window.innerWidth);
  };

  useEffect(() => {
    setTransformValue(calculateTransformValue());

    const handleResize = () => {
      setTransformValue(calculateTransformValue());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const x = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, transformValue]),
    {
      stiffness: 400,
      damping: 90,
    },
  );

  // useMotionValueEvent(x, "change", (latest) => {
  //   console.log(latest);
  // });

  return (
    <section ref={sectionRef} className="relative mb-20 h-[600vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-neutral-700 pb-5 pt-20">
        <motion.div
          style={{ x }}
          className="relative flex h-full w-[calc((100vw-2rem)*5+8rem)] items-center gap-8 px-8"
        >
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CardsSection;
