"use client";

import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";

export const LampPage:React.FC = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-green-100 to-green-100 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
      >
        {"Let's Connect"} <br /> {"&"} <br /> {"Build something AMAZING"}
      </motion.h1>
    </LampContainer>
  );
}
