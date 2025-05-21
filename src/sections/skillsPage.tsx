"use client";

import gsap from "gsap";
import Image from "next/image";
import { SkillItem } from "@/utils/interface";
import { Heading } from "@/components/Heading";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { concepts, designTools, languages, libraries, stateManagement, tools } from "@/utils/constants";

gsap.registerPlugin(ScrollTrigger);

export const SkillsPage: React.FC = () => {
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
    <div className="text-white pt-10 pb-4 md:pt-4 md:pb-4 w-full md:max-w-10/12 min-h-screen pr-5 md:pr-0">

      <div ref={headingRef}>
        <Heading title="Skills" smallTitle="Tools and Languages" />
      </div>

      {skillsContent.map((item, index) => (
        <div key={`content-${index}`} className="mb-10" ref={(el) => {
          if (el) contentRefs.current[index] = el;
        }} >
          <p className="text- md:text-xl mb-4">{item.title}</p>
          <div className="">
            {item.description}
          </div>
        </div>
      ))}
    </div>

  );
}

const SkillList = ({ items }: { items: SkillItem[] }) => (
  <ul className="flex flex-wrap gap-4">
    {items.map((item) => (
      <li key={item.label} className="flex items-center">
        {item.isIcon ? (
          <i className={item.value}></i>
        ) : (
          <Image
            src={item.value}
            alt={item.label}
            width={1000}
            height={1000}
            className={`w-4 h-4 ${ item.invert && "invert" }`}
          />
        )}
        <span className="ml-2 text-sm md:text-lg">{item.label}</span>
      </li>
    ))}
  </ul>
);

const skillsContent = [
  { title: "Languages", items: languages },
  { title: "Libraries & Frameworks", items: libraries },
  { title: "Tools & Platforms", items: tools },
  { title: "Design & Prototyping", items: designTools },
  { title: "State Management & Architecture", items: stateManagement },
  { title: "Concepts & Models", items: concepts },
].map((section) => ({
  title: section.title,
  description: <SkillList items={section.items} />,
}));