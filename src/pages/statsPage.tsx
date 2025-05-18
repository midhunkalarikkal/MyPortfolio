"use client";

import React from "react";
import { Stats } from "@/components/stats";
import { gihubStatsUrl, githubContributionTilesLink, githubTrophiesStatsLink, leetcodeStatsLink } from "@/utils/constants";


export const StatsPage: React.FC = () => {
  return (
    <div className="w-full pt-10">
      <h2 className="text-lg md:text-4xl text-white my-10">
        Stats
      </h2>
      <Stats url={gihubStatsUrl} width={500} height={200} title="Github Stats" />
      <Stats url={githubTrophiesStatsLink} width={1000} height={200} title="Github Trophies" />
      <Stats url={githubContributionTilesLink} width={1000} height={200} title="Github Contributions" />
      <Stats url={leetcodeStatsLink} width={400} height={200} title="Leetcode Stats" />
    </div>
  );
};
