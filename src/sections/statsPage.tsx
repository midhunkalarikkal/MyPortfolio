"use client";

import gsap from "gsap";
import { Stats } from "@/components/stats";
import { Heading } from "@/components/Heading";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gihubStatsUrl, githubContributionTilesLink, leetcodeStatsLink } from "@/utils/constants";

export const StatsPage: React.FC = () => {

  const componentRef = useRef(null);

  useEffect(() => {
    if (!componentRef.current) return;

    gsap.set(componentRef.current, {
      opacity: 0,
      y: 90,
    });
    gsap.to(componentRef.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: componentRef.current,
        start: "top 0%",
        toggleActions: "play play play play",
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="w-full md:max-w-10/12 pb-14">
      <div ref={componentRef}>
        <Heading title="Stats" smallTitle="Github & Leetcode" />
      </div>
      <div ref={componentRef}>
        <Stats url={gihubStatsUrl} height={200} />
      </div>
      <div ref={componentRef}>
        <Stats url={githubContributionTilesLink} height={"auto"} />
      </div>
      <div ref={componentRef}>
        <Stats url={leetcodeStatsLink} height={200} />
      </div>
    </div>
  );
};
