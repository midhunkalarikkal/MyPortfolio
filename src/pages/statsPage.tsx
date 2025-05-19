"use client";

import React from "react";
import { Stats } from "@/components/stats";
import { gihubStatsUrl, githubContributionTilesLink, leetcodeStatsLink } from "@/utils/constants";
import { Heading } from "@/components/Heading";


export const StatsPage: React.FC = () => {
  return (
    <div className="w-full md:max-w-10/12 pb-14">
      <Heading title="Stats" smallTitle="Github & Leetcode"/>
      <Stats url={gihubStatsUrl} height={200}/>
      <Stats url={githubContributionTilesLink} height={"auto"}/>
      <Stats url={leetcodeStatsLink}height={200} />
    </div>
  );
};
