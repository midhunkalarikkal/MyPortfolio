'use client'

import { HomePage } from "@/pages/homepage";
import { useEffect, useState } from "react";
import { StatsPage } from "@/pages/statsPage";
import { SkillsPage } from "@/pages/skillsPage";
import { FooterPage } from "@/pages/footerPage";
import { LoadingPage } from "@/pages/loadingPage";
import { EducationPage } from "@/pages/educationPage";
import { MacScrollPage } from "@/pages/macScrollPage";
import { PortfolioPage } from "@/pages/portfolioPage";
import { TracingBeam } from "@/components/ui/tracing-beam";


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <LoadingPage />

  return (
    <>
      <TracingBeam className="h-auto w-full" >
        <HomePage />
        <SkillsPage />
        <EducationPage />
        <PortfolioPage />
        <StatsPage />
        <MacScrollPage />
      </TracingBeam>
      <FooterPage />
    </>
  )
}