import React from 'react';
import Link from 'next/link';
import { logoLinks } from '@/utils/constants';
import { CodeXml, Github, Linkedin } from "lucide-react";

interface LogoLinksInterface {
    className?: string
}

export const LogoLinks: React.FC<LogoLinksInterface> = ({
    className
}) => {

    const iconMap = {
        Linkedin: <Linkedin />,
        Github: <Github />,
        CodeXml: <CodeXml />,
    };

    return (
        <div className={`${className}`}>
            {logoLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#18d26e] transition-colors duration-200"
                    aria-label={link.target}
                >
                    {iconMap[link.icon]}
                </Link>
            ))}
        </div>
    )
}

