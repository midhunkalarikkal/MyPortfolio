"use client";
import React from "react";
import { TracingBeam } from "../components/ui/tracing-beam";
import Image from "next/image";

export function TracingBeamDemo() {
  return (
    <>
      <div className="w-full pt-10">
        <div className="w-[77%] mx-auto px-4 md:px-8 lg:px-10 mt-6">
          <h2 className="text-lg md:text-4xl mb-4 text-white">
            Skills
          </h2>
        </div>
      </div>

      <TracingBeam className="h-auto max-w-6xl">
        <div className="text-white w-[90%] mx-auto antialiased pt-4 relative py-20">
          {skillsContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">

              <p className="text-xl mb-4">{item.title}</p>

              <div className="">
                {item.description}
              </div>

            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}


// Interface for Skill Item
interface SkillItem {
  label: string;
  image: React.ReactNode; // Changed to React.ReactNode
}

const languages: SkillItem[] = [
  { label: "JavaScript", image: <i className="devicon-javascript-plain colored"></i> },
  { label: "TypeScript", image: <i className="devicon-typescript-plain colored"></i> },
  { label: "MongoDB", image: <i className="devicon-mongodb-plain colored"></i> },
  { label: "C", image: <i className="devicon-c-plain colored"></i> },
  { label: "PostgreSQL", image: <i className="devicon-postgresql-plain colored"></i> },
  { label: "HTML5", image: <i className="devicon-html5-plain colored"></i> },
  { label: "(S)CSS", image: <i className="devicon-css3-plain colored"></i> }, // Corrected class name
];

const libraries: SkillItem[] = [
  { label: "Node.js", image: <i className="devicon-nodejs-plain colored"></i> },
  { label: "Express", image: <i className="devicon-express-original"></i> },
  { label: "React JS", image: <i className="devicon-react-original colored"></i> },
  { label: "Next JS", image: <i className="devicon-nextjs-plain"></i> },
  { label: "Tailwind", image: <i className="devicon-tailwindcss-plain colored"></i> },
  { label: "Bootstrap", image: <i className="devicon-bootstrap-plain colored"></i> },
  { label: "MUI", image: <i className="devicon-materialui-plain colored"></i> },
  { label: 'Socket.io', image: <Image src="/socketiologo.png" alt="socketio" width={1000} height={1000} className="w-4 h-4" /> },

];

const tools: SkillItem[] = [
  { label: "Git", image: <i className="devicon-git-plain colored"></i> },
  { label: "Postman", image: <i className="devicon-postman-plain colored"></i> },
  { label: "Jest", image: <i className="devicon-jest-plain colored"></i> },
  { label: "Render", image: <Image src="/render.logo.jpeg" alt="render" width={1000} height={1000} className="w-4 h-4" /> },
  { label: "Vercel", image: <i className="devicon-vercel-original"></i> },
  { label: "AWS", image: <i className="devicon-amazonwebservices-plain colored"></i> },
  { label: "Firebase", image: <i className="devicon-firebase-plain colored"></i> },
];

const designTools: SkillItem[] = [
  { label: 'Figma', image: <i className="devicon-figma-plain colored"></i> },
  { label: '', image: <span>Code<span className="text-[#4f46e5]">Planner</span></span> },
  { label: 'Photoshop', image: <i className="devicon-photoshop-plain"></i> },
];

const stateManagement: SkillItem[] = [
  { label: 'Context API', image: <Image src="/contextapilogo.png" alt="contextapi" width={1000} height={1000} className="w-4 h-4" /> }, // Placeholder
  { label: 'Redux', image: <i className="devicon-redux-plain colored"></i> },
  { label: 'Zustand', image: <Image src="/zustandlogo.png" alt="zustand" width={1000} height={1000} className="w-4 h-4" /> },  // Placeholder
];

const concepts: SkillItem[] = [
  { label: 'MVC Architecture', image: <Image src="/mvcarchitecturelogo.png" alt="mvcarchitecture" width={1000} height={1000} className="w-4 h-4" /> }, // Placeholder
  { label: 'Waterfall Model', image: <Image src="/waterfallmodellogo.png" alt="waterfallmodel" width={1000} height={1000} className="w-4 h-4 invert" /> }, // Placeholder
  { label: 'SOLID Principles', image: <Image src="/solidprincipleslogo.png" alt="solidprinciples" width={1000} height={1000} className="w-4 h-4" /> },  // Placeholder
];

const pursuing: SkillItem[] = [
  { label: 'Microservices', image: <Image src="/microservicelogo.png" alt="microservice" width={1000} height={1000} className="w-4 h-4 invert" /> }, // Placeholder
  { label: 'WebRTC', image: <Image src="/webrtclogo.png" alt="webrtc" width={1000} height={1000} className="w-4 h-4" /> }, // Placeholder
];

const skillsContent = [
  {
    title: "Languages",
    description: (
      <ul className="flex flex-wrap gap-4">
        {languages.map((lang) => (
          <li key={lang.label} className="flex items-center">
            {lang.image}
            <span className="ml-2">{lang.label}</span>
          </li>
        ))}
      </ul>
    ),
    badge: "Languages"
  },
  {
    title: "Libraries & Frameworks",
    description: (
      <ul className="flex flex-wrap gap-4">
        {libraries.map((lib) => (
          <li key={lib.label} className="flex items-center">
            {lib.image}
            <span className="ml-2">{lib.label}</span>
          </li>
        ))}
      </ul>
    ),
    badge: "Libraries & Frameworks"
  },
  {
    title: "Tools & Platforms",
    description: (
      <ul className="flex flex-wrap gap-4">
        {tools.map((tool) => (
          <li key={tool.label} className="flex items-center">
            {tool.image}
            <span className="ml-2">{tool.label}</span>
          </li>
        ))}
      </ul>
    ),
    badge: "Tools & Platforms"
  },
  {
    title: "Design & Prototyping",
    description: (
      <ul className="flex flex-wrap gap-4">
        {designTools.map((tool) => (
          <li key={tool.label} className="flex items-center">
            {tool.image}
            <span className="ml-2">{tool.label}</span>
          </li>
        ))}
      </ul>
    ),
    badge: "Design & Prototyping"
  },
  {
    title: "State Management & Architecture",
    description: (
      <ul className="flex flex-wrap gap-4">
        {stateManagement.map((state) => (
          <li key={state.label} className="flex items-center">
            {state.image}
            <span className="ml-2">{state.label}</span>
          </li>
        ))}
      </ul>
    ),
    badge: "State Management & Architecture"
  },
  {
    title: "Concepts & Models",
    description: (
      <ul className="flex flex-wrap gap-4">
        {concepts.map((concept) => (
          <li key={concept.label} className="flex items-center">
            {concept.image}
            <span className="ml-2">{concept.label}</span>
          </li>
        ))}
      </ul>
    ),
    badge: "Concepts & Models"
  },
  {
    title: "Currently Pursuing",
    description: (
      <ul className="flex flex-wrap gap-4">
        {pursuing.map((item) => (
          <li key={item.label} className="flex items-center">
            {item.image}
            <span className="ml-2">{item.label}</span>
          </li>
        ))}
      </ul>
    ),
    badge: "Currently Pursuing"
  }
];