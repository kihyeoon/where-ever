"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { ArrowIcon } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { GlowEffect } from "@/components/ui/glow-effect";
import { Spotlight } from "@/components/ui/spotlight";
import { TextEffect } from "@/components/ui/text-effect";

interface Props {
  buttonText?: string;
  showNotice?: boolean;
}

const ContactSection = ({
  buttonText = "문의하기",
  showNotice = true,
}: Props) => {
  const [isInView, setIsInView] = useState(false);

  return (
    <section className="relative mx-auto mb-20 w-full max-w-[1440px] px-5 pt-20">
      <motion.div
        className="mx-auto aspect-video max-w-xl rounded-2xl bg-border p-[1.5px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        onViewportEnter={() => {
          setIsInView(true);
        }}
        viewport={{ once: true, amount: "all" }}
      >
        <Spotlight
          className="from-red-800 via-red-600 to-red-400 blur-2xl dark:from-red-900 dark:via-red-500 dark:to-red-900"
          size={64}
          springOptions={{
            bounce: 0.3,
            duration: 0.1,
          }}
        />
        <div className="relative flex h-full w-full flex-col items-center justify-evenly rounded-2xl bg-background">
          <div className="flex flex-col items-center gap-2">
            <TextEffect
              preset="fade-in-blur"
              trigger={isInView}
              speedReveal={1.5}
              speedSegment={0.3}
              delay={0.5}
              className="text-2xl font-bold text-white md:text-3xl"
            >
              웨어에버와 함께,
            </TextEffect>
            <TextEffect
              preset="fade-in-blur"
              trigger={isInView}
              speedReveal={1.5}
              speedSegment={0.3}
              delay={1}
              className="text-2xl font-bold text-white md:text-3xl"
            >
              여정을 시작해보세요!
            </TextEffect>
          </div>
          <div className="relative">
            <GlowEffect
              colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
              mode="colorShift"
              blur="soft"
              duration={3}
              scale={1}
            />
            <Button
              className="relative inline-flex items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1.5 text-sm text-zinc-50 outline outline-1 outline-[#fff2f21f] hover:bg-zinc-950"
              asChild
            >
              <Link href="/contact">
                {buttonText} <ArrowIcon strokeWidth={0.5} />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
      {showNotice && (
        <p className="mx-auto mt-5 max-w-xl break-words break-keep text-left text-sm text-gray-600">
          ※ 전자상거래법 제 17조에 의거하여, 계약 체결일로부터 7일 이내로 청약
          철회가 가능하나, 계약 당일로부터 청약 철회일까지 집행된 서비스 비용을
          제외하고 환불 가능한 점 유의 바랍니다.
        </p>
      )}
    </section>
  );
};

export default ContactSection;
