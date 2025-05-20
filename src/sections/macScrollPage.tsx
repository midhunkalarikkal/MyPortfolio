'use client'

import gsap from "gsap";
import { Heading } from "@/components/Heading";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export const MacScrollPage: React.FC = () => {

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
    <div className="w-full md:max-w-10/12">
      <div ref={headingRef}>
        <Heading title="Connect with me" smallTitle="Midhun K Paniker" />
      </div>
      <MacbookScroll
        src={`/LoadingBg.png`}
        showGradient={false}
      />
    </div>
  );
}
