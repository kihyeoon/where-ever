"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

export const ContactButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 1 }}
    >
      <Link
        href="/contact"
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
      >
        <Magnetic intensity={0.2} actionArea="global" range={200}>
          <Button className="py-5 text-base">
            <Magnetic intensity={0.1} actionArea="global" range={200}>
              CONTACT
            </Magnetic>
          </Button>
        </Magnetic>
      </Link>
    </motion.div>
  );
};

export default ContactButton;
