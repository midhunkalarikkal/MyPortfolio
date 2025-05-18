"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 40%", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    const updateSvgHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };

    updateSvgHeight();

    const resizeObserver = new ResizeObserver(updateSvgHeight);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, svgHeight]),
    {
      stiffness: 500,
      damping: 50,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 50,
    },
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full", className)}
    >
      <div className="absolute top-3 -left-4 md:-left-20">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "#10b981",
              borderColor: scrollYProgress.get() > 0 ? "white" : "#059669",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0 V -36 l 18 24 V ${svgHeight * 0.2} l -18 24 V ${svgHeight * 0.5} l 18 24 V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{ duration: 2, ease: "linear" }}
          ></motion.path>
          <motion.path
            d={`M 1 0 V -36 l 18 24 V ${svgHeight * 0.2} l -18 24 V ${svgHeight * 0.5} l 18 24 V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            className="motion-reduce:hidden"
            transition={{ duration: 2, ease: "linear" }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#05df72" stopOpacity="0"></stop>
              <stop stopColor="#b3ffe0"></stop>
              <stop offset="0.325" stopColor="#05df72"></stop>
              <stop offset="1" stopColor="#05df72" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
