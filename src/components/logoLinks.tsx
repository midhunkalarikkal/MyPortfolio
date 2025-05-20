import Link from "next/link";
import {
  Github,
  Linkedin,
  CodeXml,
  Mail,
  Phone
} from "lucide-react";
import { LogoLinksInterface } from "@/utils/interface";

// A mapping from string to the corresponding Lucide icon component
const iconComponents = {
  Github: Github,
  Linkedin: Linkedin,
  CodeXml: CodeXml,
  Mail: Mail,
  Phone: Phone,
};

// Your array of links
export const logoLinks: { href: string; target: string; icon: keyof typeof iconComponents }[] = [
  { href: "https://www.linkedin.com/in/midhun-k-paniker-726226231", target: "LinkedIn", icon: "Linkedin" },
  { href: "https://github.com/midhunkalarikkal", target: "Github", icon: "Github" },
  { href: "https://leetcode.com/u/midhunkpaniker/", target: "LeetCode", icon: "CodeXml" },
  { href: "mailto:midhunkpaniker@gmail.com", target: "Email", icon: "Mail" },
  { href: "tel:+918157974230", target: "Phone", icon: "Phone" },
];

export const LogoLinks:React.FC<LogoLinksInterface> = ({
    className
}) => {
  return (
    <div className={`flex mt-4 ${className}`}>
      {logoLinks.map(({ href, target, icon }, index) => {
        const IconComponent = iconComponents[icon];
        return (
          <Link
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={target}
            className="hover:text-[#18d26e] transition-colors duration-200"
          >
            <IconComponent className="size-4 md:size-6" />
          </Link>
        );
      })}
    </div>
  );
}
