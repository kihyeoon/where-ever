"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const ContactButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 1 }}
    >
      <Link
        href="/contact"
        className="absolute bottom-16 left-1/2 z-50 -translate-x-1/2"
      >
        <Button
          variant="outline"
          className="bg-background/50 py-5 text-base backdrop-blur-md"
        >
          CONTACT
        </Button>
      </Link>
    </motion.div>
  );
};

export default ContactButton;
