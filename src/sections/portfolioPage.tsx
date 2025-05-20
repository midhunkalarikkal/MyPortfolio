'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Heading } from "@/components/Heading";
import { portfolioData } from "@/utils/constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardSpotlightHover } from "@/components/CardSpotlightDemo";

gsap.registerPlugin(ScrollTrigger);

export const PortfolioPage: React.FC = () => {

  const headingRef = useRef<HTMLDivElement | null>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);
  contentRefs.current = [];

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

    contentRefs.current.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 90 });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 0%",
          toggleActions: "play play play play",
        },
      });
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="text-white min-h-screen px-4 md:px-12 py-8">
      <div ref={headingRef}>
        <Heading title="Portfolio" smallTitle="Code & Creations" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {portfolioData.map((data, index) => (
          <div key={index} ref={(el) => {
            if (el) contentRefs.current[index] = el;
          }}>
            <CardSpotlightHover
              image={data.image}
              title={data.title}
              techStack={data.techStack}
              description={data.description}
              techImageStack={data.techImageStack}
              liveLink={data.liveLink}
              githubLink={data.githubLink}
              frontendGithubLink={data.frontendGithubLink}
              backendGithubLink={data.backendGithubLink}
              underDevelopment={data.underDevelopment}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
