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
  Mail: ReactNode;
  Phone: ReactNode;
}

// **** Stats Component Interface **** \\
export interface StatsComponent {
  url: string;
  height: number | string;
}

// **** LogogLinkSection Interface **** \\
export interface LogoLinksInterface {
    className?: string;
}

// **** Handle Submit Connect Form for Contact Interface **** \\
export interface handleSubmitInterface {
    e: React.FormEvent;
    inputValue: string;
    textAreaValue: string;
    setInputValue: (data: string) => void;
    setTextAreaValue: (data: string) => void;
    contactFormOpen: boolean;
    closeConnectForm: () => void;
    setOpenForm: (data: boolean) => void;
    setLoading: (data: boolean) => void;
}

// **** Connect Button Interface **** \\
export interface ConnectButtonInterface {
    className: string;
    setOpenForm?: (data: boolean) => void;
    openConnectForm?: () => void;
    lgForm: boolean;
}

// **** Skills Page Data Interface **** \\
export interface SkillItem {
  label: string;
  isIcon: boolean;
  value: string;
  invert?: boolean;
}
