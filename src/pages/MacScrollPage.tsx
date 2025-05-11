import { MacbookScroll } from "@/components/ui/macbook-scroll";
import React from "react";

export const MacScrollPage: React.FC = () => {
    return (
    <div className="overflow-hidden bg-[#0B0B0F] w-full">
      <MacbookScroll
        title={
          <span>
            Midhun K Paniker
          </span>
        }
        src={`/midhunIntro.png`}
        showGradient={false}
      />
    </div>
  );
}
