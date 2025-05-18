import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export const MacScrollPage: React.FC = () => {
    return (
    <div className="overflow-hidden bg-[#0B0B0F] w-full">
      <MacbookScroll
        title={
          <>
          <span> Thank You For Your Visit</span> <br />
          <p className="text-lg mt-2 text-green-400">Connect me</p>
          </>

        }
        src={`/midhunIntro.png`}
        showGradient={false}
      />
    </div>
  );
}
