'use client'

import { LampPage } from "@/sections/lampPage";
import { HomePage } from "@/sections/homepage";
import { useEffect, useState } from "react";
import { StatsPage } from "@/sections/statsPage";
import { SkillsPage } from "@/sections/skillsPage";
import { FooterPage } from "@/sections/footerPage";
import { useCounterStore } from "@/store/store";
import { ToastContainer } from "react-toastify";
import { EducationPage } from "@/sections/educationPage";
import { MacScrollPage } from "@/sections/macScrollPage";
import { PortfolioPage } from "@/sections/portfolioPage";
import { ConnectForm } from "@/components/ConnectForm";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { MultiStepLoader } from "@/sections/multiStepLoader";


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const contactFormOpen = useCounterStore((state) => state.contactFormOpen);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <MultiStepLoader onComplete={() => setIsLoading(false)} />;


  if (contactFormOpen) return <ConnectForm />

  return (
    <>
      <ToastContainer theme="dark" />
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