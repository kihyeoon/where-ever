"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const rowVariants = {
  hidden: {},
  visible: (i: number) => ({
    transition: {
      staggerChildren: 0.01,
      delayChildren: i * 0.1, // 각 줄에 시간 차를 둠
    },
  }),
};

const textVariants = {
  hidden: { y: 96 },
  visible: {
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const textRows = [
  "소비자 정보 탐색 시 가장 먼저",
  "확인하는 장소 1위",
  "지도와 연계되어 가게의 기본 정보뿐만 아니라 영업시간, 메뉴, 위치, 사진, ",
  "그리고 고객들의 리뷰까지 모두 확인할 수 있는 플랫폼입니다. ",
  "플레이스 순위상승에 핵심적인 서비스 제공으로 타겟 고객의 유입을 유도합니다.",
];

export const HeroSectionTypos = () => {
  return (
    <div className="w-full whitespace-pre">
      {textRows.map((row, rowIndex) => (
        <Row key={rowIndex} rowIndex={rowIndex}>
          {row.split("").map((char, charIndex) => (
            <TypoText key={charIndex} char={char} rowIndex={rowIndex} />
          ))}
        </Row>
      ))}
    </div>
  );
};

const Row = ({
  children,
  rowIndex,
}: {
  children: React.ReactNode;
  rowIndex: number;
}) => {
  return (
    <motion.div
      custom={rowIndex}
      variants={rowVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "flex h-auto flex-wrap items-center overflow-hidden",
        rowIndex === 1 && "mb-8 md:mb-12",
      )}
    >
      {children}
    </motion.div>
  );
};

const TypoText = ({ char, rowIndex }: { char: string; rowIndex: number }) => {
  return (
    <motion.div
      variants={textVariants}
      className={cn(
        "text-3xl md:text-5xl",
        rowIndex > 1 && "text-lg md:text-xl",
      )}
    >
      {char}
    </motion.div>
  );
};
