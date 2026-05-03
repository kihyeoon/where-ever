"use client";

import { motion } from "motion/react";
import ContactForm from "@/components/contact/contact-form";
import {
  containerVariants,
  itemVariants,
  viewportOnce,
} from "@/lib/motion";

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-24 md:px-14 md:py-32 lg:px-28 xl:px-44 2xl:px-56">
      <motion.header
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={containerVariants}
        className="mb-12 md:mb-16"
      >
        <motion.h2
          variants={itemVariants}
          className="font-[family-name:var(--font-alata)] text-4xl font-light tracking-tight md:text-6xl"
        >
          Contact us
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-4 text-sm text-foreground/60 md:text-base"
        >
          공간에 대한 어떤 이야기든 편하게 들려주세요
        </motion.p>
      </motion.header>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={containerVariants}
        className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:gap-16"
      >
        <motion.div variants={itemVariants}>
          <ContactForm />
        </motion.div>

        <motion.aside
          variants={itemVariants}
          className="space-y-10 lg:border-l lg:border-foreground/15 lg:pl-12"
        >
          <div>
            <h3 className="font-[family-name:var(--font-alata)] text-2xl tracking-wide">
              Email us
            </h3>
            <a
              href="mailto:wherever23@naver.com"
              className="mt-3 block text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              wherever23@naver.com
            </a>
            <p className="mt-2 text-sm text-foreground/70">
              월–금 9:00 AM – 6:00 PM
            </p>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}
