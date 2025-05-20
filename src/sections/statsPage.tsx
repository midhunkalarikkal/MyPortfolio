"use client";

import gsap from "gsap";
import { Stats } from "@/components/stats";
import { Heading } from "@/components/Heading";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gihubStatsUrl, githubContributionTilesLink, leetcodeStatsLink } from "@/utils/constants";

export const StatsPage: React.FC = () => {

  const headingRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;

    gsap.set(headingRef.current, {
      opacity: 0,
      y: 90,
    });
    gsap.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 0%",
        toggleActions: "play play play play",
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="w-full md:max-w-10/12 pb-14">
      <div ref={headingRef}>
        <Heading title="Stats" smallTitle="Github & Leetcode" />
      </div>
      <Stats url={gihubStatsUrl} height={200} />
      <Stats url={githubContributionTilesLink} height={"auto"} />
      <Stats url={leetcodeStatsLink} height={200} />
    </div>
  );
};
