'use client'

import { LampPage } from "@/pages/lampPage";
import { HomePage } from "@/pages/homepage";
import { useEffect, useState } from "react";
import { StatsPage } from "@/pages/statsPage";
import { SkillsPage } from "@/pages/skillsPage";
import { FooterPage } from "@/pages/footerPage";
import { useCounterStore } from "@/utils/store";
import { LoadingPage } from "@/pages/loadingPage";
import { EducationPage } from "@/pages/educationPage";
import { MacScrollPage } from "@/pages/macScrollPage";
import { PortfolioPage } from "@/pages/portfolioPage";
import { ConnectForm } from "@/components/ConnectForm";
import { TracingBeam } from "@/components/ui/tracing-beam";


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const contactFormOpen = useCounterStore((state) => state.contactFormOpen);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <LoadingPage />

  if (contactFormOpen) return <ConnectForm />

  return (
    <>
      <TracingBeam className="h-auto w-full" >
        <HomePage />
        <SkillsPage />
        <EducationPage />
        <PortfolioPage />
        <StatsPage />
        <MacScrollPage />
        <div className="hidden md:block">
          <LampPage />
        </div>
      </TracingBeam>
      <FooterPage />
    </>
  )
}