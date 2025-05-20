'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Heading } from "@/components/Heading";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from "@/components/ui/timeline";
import { EducationTimelineItem } from "@/utils/interface";
import { educationTimelineData } from "@/utils/constants";

export const EducationPage: React.FC = () => {

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

  const formattedData = educationTimelineData.map((item: EducationTimelineItem, index) => ({
    title: item.title,
    content: (
      <div ref={(el) => {
        if (el) contentRefs.current[index] = el;
      }}>
        <h1 className="text-white text-xl md:text-3xl font-bold">
          {item.heading}
        </h1>
        <p className="mb-8 text-sm md:text-lg font-normal text-neutral-200 text-justify">
          {item.description.split(item.highlight).map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <span className="text-green-400">{item.highlight}</span>
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </p>
      </div>
    ),
  }));

  return (
    <div className="relative w-full md:max-w-10/12">
      <div ref={headingRef}>
        <Heading title="Education" smallTitle="Academic Journey" />
      </div>
      <Timeline data={formattedData} />
    </div>
  );
};
