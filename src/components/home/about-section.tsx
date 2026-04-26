"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  containerVariants,
  itemVariants,
  lineVariants,
  photoVariants,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type Beat = {
  num: string;
  title: string;
  lines: string[];
  img: string;
  alt: string;
  photoSide: "right" | "left";
  photoOffset: string;
};

const beats: Beat[] = [
  {
    num: "01",
    title: "Speak Through Space",
    lines: ["공간을 통해 브랜드의", "가치를 전달합니다."],
    img: "/images/about/beat-01.jpg",
    alt: "공용홀 라운지 인테리어",
    photoSide: "right",
    photoOffset: "lg:translate-y-0",
  },
  {
    num: "02",
    title: "Shape the Flow",
    lines: [
      "지금까지, 그리고 앞으로 쌓아갈 경험을 바탕으로",
      "고객의 시선과 흐름까지",
      "고려한 공간을 만듭니다.",
    ],
    img: "/images/about/beat-02.jpg",
    alt: "그린 루버와 회의 공간",
    photoSide: "left",
    photoOffset: "lg:translate-y-16",
  },
  {
    num: "03",
    title: "Become a Choice",
    lines: [
      "단순히 보기 좋은 공간이 아닌,",
      "머무르고 싶고,",
      "선택하게 되는 공간.",
    ],
    img: "/images/about/beat-03.jpg",
    alt: "공용홀 입구의 빛과 동선",
    photoSide: "right",
    photoOffset: "lg:-translate-y-8",
  },
  {
    num: "04",
    title: "Live in Detail",
    lines: [
      "디테일 하나까지 고민하며",
      "당신의 브랜드가",
      "가장 잘 드러나는 순간을 완성합니다.",
    ],
    img: "/images/about/beat-04.jpg",
    alt: "정돈된 회의실 디테일",
    photoSide: "left",
    photoOffset: "lg:translate-y-12",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-4 py-24 md:px-14 md:py-32 lg:px-28 xl:px-44 2xl:px-56"
    >
      <motion.header
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-15% 0px" }}
        variants={containerVariants}
      >
        <motion.p
          variants={itemVariants}
          className="text-xs uppercase tracking-[0.3em] text-foreground/50"
        >
          About us
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="mt-6 font-[family-name:var(--font-alata)] text-5xl font-light tracking-tight md:text-7xl lg:text-8xl"
        >
          WHEREVER?
        </motion.h2>
        <motion.div
          variants={lineVariants}
          className="mt-8 h-px max-w-md origin-left bg-foreground/30"
        />
      </motion.header>

      <div className="mt-24 space-y-28 md:mt-32 md:space-y-40 lg:space-y-48">
        {beats.map((beat) => {
          const photoRight = beat.photoSide === "right";
          return (
            <motion.article
              key={beat.num}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={containerVariants}
              className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-12"
            >
              <motion.div
                variants={containerVariants}
                className={cn(
                  "lg:col-span-5",
                  photoRight
                    ? "lg:order-1 lg:col-start-1"
                    : "lg:order-2 lg:col-start-8",
                )}
              >
                <motion.div
                  variants={itemVariants}
                  className="flex items-baseline gap-5"
                >
                  <span className="font-[family-name:var(--font-alata)] text-5xl font-light leading-none text-foreground/15 md:text-7xl lg:text-8xl">
                    {beat.num}
                  </span>
                  <motion.span
                    variants={lineVariants}
                    className="h-px flex-1 origin-left bg-foreground/20"
                  />
                </motion.div>

                <motion.h3
                  variants={itemVariants}
                  className="mt-7 font-[family-name:var(--font-alata)] text-3xl font-light tracking-tight md:mt-9 md:text-4xl lg:text-5xl"
                >
                  {beat.title}
                </motion.h3>

                <div className="mt-6 space-y-3 text-lg font-light leading-snug tracking-tight text-foreground/80 md:mt-7 md:text-xl lg:text-[1.375rem] lg:leading-[1.4]">
                  {beat.lines.map((line, i) => (
                    <motion.p
                      key={i}
                      variants={itemVariants}
                      className="break-keep"
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={photoVariants}
                className={cn(
                  "lg:col-span-5",
                  photoRight
                    ? "lg:order-2 lg:col-start-8"
                    : "lg:order-1 lg:col-start-1",
                  beat.photoOffset,
                )}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-foreground/5 lg:aspect-[5/6]">
                  <Image
                    src={beat.img}
                    alt={beat.alt}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </motion.article>
          );
        })}
      </div>

    </section>
  );
}
