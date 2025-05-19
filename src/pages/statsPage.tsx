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
      <Stats url={gihubStatsUrl} title="Github Stats" />
      <Stats url={githubTrophiesStatsLink} title="Github Trophies" />
      <Stats url={githubContributionTilesLink} title="Github Contributions" />
      <Stats url={leetcodeStatsLink} title="Leetcode Stats" />
    </div>
  );
};
