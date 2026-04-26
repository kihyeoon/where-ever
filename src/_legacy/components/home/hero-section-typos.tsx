"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";
import Dot from "@/components/common/dot";

const rowVariants = {
  hidden: {},
  visible: (i: number) => ({
    transition: {
      staggerChildren: 0.05,
      delayChildren: i * 0.2, // 각 줄에 시간 차를 둠
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

const textRows = ["WHEREVER", "어디서나,", "어디서든,", "가능합니다."];

export const HeroSectionTypos = () => {
  return (
    <div className="absolute top-1/2 w-full -translate-y-1/2 transform space-y-6 px-8 md:space-y-4 md:px-32">
      {textRows.map((row, rowIndex) => (
        <Row key={rowIndex} index={rowIndex}>
          {row.split("").map((char, charIndex) => (
            <TypoText key={charIndex} char={char} />
          ))}
        </Row>
      ))}
    </div>
  );
};

const Row = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      custom={index}
      variants={rowVariants}
      initial="hidden"
      animate="visible"
      className="flex h-12 items-center overflow-hidden md:h-24"
    >
      {children}
    </motion.div>
  );
};

const TypoText = ({ char }: { char: string }) => {
  const isPeriodChar = char === ".";

  return (
    <motion.div
      variants={textVariants}
      className={cn("text-6xl md:text-8xl", isPeriodChar ? "m-1 self-end" : "")}
    >
      {isPeriodChar ? <Dot className="size-3 md:size-6" /> : char}
    </motion.div>
  );
};
