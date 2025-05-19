import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Heading } from "@/components/Heading";

export const MacScrollPage: React.FC = () => {
  return (
    <div className="w-full md:max-w-10/12">
      <Heading title="Connect with me" smallTitle="Midhun K Paniker" />
      <MacbookScroll
        src={`/midhunIntro.png`}
        showGradient={false}
      />
    </div>
  );
}
