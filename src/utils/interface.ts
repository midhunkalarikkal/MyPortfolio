import { ReactNode } from "react";

// **** Portfolio Card Interface **** \\
export interface CardSpotlightHoverInterface {
  image: string;
  title: string;
  techStack: string[];
  description: string;
  techImageStack?: { url: string, className?: string }[];
  liveLink?: string;
  githubLink?: string
  frontendGithubLink?: string;
  backendGithubLink?: string;
  underDevelopment?: boolean;
}

// **** Education Data Interface **** \\
export interface EducationTimelineItem {
  title: string;
  heading: string;
  description: string;
  highlight: string;
}

// **** Heading Component Interface **** \\
export interface HeadingInterface {
  title: string;
  smallTitle?: string;
}

// **** Logo Links Interface **** \\
export interface LogoLinksInterface {
    className?: string
}

// **** Logo Map Interface **** \\
export interface IconMap {
  Linkedin: ReactNode;
  Github: ReactNode;
  CodeXml: ReactNode;
}

// **** Stats Component Interface **** \\
export interface StatsComponent {
  url: string;
  height: number | string;
}
