"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const recontainerReff = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: recontainerReff,
    offset: ["start start", "end start"],
  });

  const getPath = () => {
  if (screenSize === "sm") {
    return `M 1 0 V 
                -36 l 18 24 V 
                ${svgHeight * 0.13} 
                l -10 24 V 
                ${svgHeight * 0.23} 
                l 10 24 V 
                 ${svgHeight * 0.86} 
                l -10 24 V 
                ${svgHeight * 0.92} 
                l 10 24 V 
                ${svgHeight} 
                `;
  } else if (screenSize === "md") {
    return `M 1 0 V 
                -36 l 18 24 V 
                ${svgHeight * 0.25} 
                l -18 24 V 
                ${svgHeight * 0.6} 
                l 18 24 V 
                ${svgHeight} 
                `;
  } else {
    return `M 1 0 V 
                -36 l 18 24 V 
                ${svgHeight * 0.18} 
                l -18 24 V 
                ${svgHeight * 0.31} 
                l 18 24 V 
                ${svgHeight * 0.69} 
                l -18 24 V 
                ${svgHeight * 0.78} 
                l 18 24 V 
                ${svgHeight} 
                `;
  }
};

  const [svgHeight, setSvgHeight] = useState(0);

  const [screenSize, setScreenSize] = useState<"sm" | "md" | "lg">("md");

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("sm");
      } else if (width >= 768 && width < 1024) {
        setScreenSize("md");
      } else {
        setScreenSize("lg");
      }
    };

    checkScreen(); // Initial check
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

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

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });

  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
    stiffness: 500,
    damping: 90,
  });


  return (
    <motion.div
      ref={recontainerReff}
      className={cn("relative w-full flex", className)}
    >
      {/* Left side: Beam */}
      <div className="w-[10%] md:w-[20%] flex justify-center relative mt-10">
        <div className="absolute top-6 w-full flex justify-center flex-col items-center">
          <motion.div
            transition={{ duration: 0.2 }}
            animate={{
              boxShadow:
                scrollYProgress.get() > 0
                  ? "none"
                  : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            className="border-netural-200 flex h-4 w-4 items-center justify-center rounded-full border shadow-sm bg-green-200"
          >
            <motion.div
              transition={{ duration: 0.2 }}
              animate={{
                backgroundColor: scrollYProgress.get() > 0 ? "white" : "#10b981",
                borderColor: scrollYProgress.get() > 0 ? "white" : "#059669",
              }}
              className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
            />
          </motion.div>

          <svg
            viewBox={`10 0 20 ${svgHeight}`}
            width="100"
            height={svgHeight}
            className="block mt-2"
            aria-hidden="true"
          >
            <motion.path
              d={getPath()}
              fill="none"
              stroke="#9091A0"
              strokeOpacity="0.16"
              transition={{ duration: 2, ease: "linear" }}
            />
            <motion.path
              d={getPath()}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              className="motion-reduce:hidden"
              transition={{ duration: 2, ease: "linear" }}
            />
            <defs>
              <motion.linearGradient
                id="gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1}
                y2={y2}
              >
                <stop stopColor="#05df72" stopOpacity="0" />
                <stop stopColor="#b3ffe0" />
                <stop offset="0.325" stopColor="#05df72" />
                <stop offset="1" stopColor="#05df72" stopOpacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Right side: Children */}
      <div ref={contentRef} className="w-[90%] md:w-[80%]">
        {children}
      </div>
    </motion.div>
  );
};
