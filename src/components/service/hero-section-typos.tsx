"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
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

interface HeroSectionTyposProps {
  headlines: string[];
  breakIndex?: number;
  breakMarginIndex?: number;
}

export const HeroSectionTypos = ({
  headlines,
  breakIndex = 1,
  breakMarginIndex = 1,
}: HeroSectionTyposProps) => {
  return (
    <div className="w-full whitespace-pre tracking-tight">
      {headlines.map((line, rowIndex) => (
        <Row
          key={rowIndex}
          rowIndex={rowIndex}
          breakMarginIndex={breakMarginIndex}
        >
          {line.split("").map((char, charIndex) => (
            <TypoText
              key={charIndex}
              char={char}
              rowIndex={rowIndex}
              breakIndex={breakIndex}
            />
          ))}
        </Row>
      ))}
    </div>
  );
};

const Row = ({
  children,
  rowIndex,
  breakMarginIndex,
}: {
  children: React.ReactNode;
  rowIndex: number;
  breakMarginIndex: number;
}) => {
  return (
    <motion.div
      custom={rowIndex}
      variants={rowVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "flex h-auto flex-wrap items-center overflow-hidden",
        rowIndex === breakMarginIndex && "mb-8 md:mb-12",
      )}
    >
      {children}
    </motion.div>
  );
};

const TypoText = ({
  char,
  rowIndex,
  breakIndex,
}: {
  char: string;
  rowIndex: number;
  breakIndex: number;
}) => {
  return (
    <motion.div
      variants={textVariants}
      className={cn(
        "text-3xl md:text-5xl",
        rowIndex > breakIndex && "text-lg md:text-xl",
      )}
    >
      {char}
    </motion.div>
  );
};
