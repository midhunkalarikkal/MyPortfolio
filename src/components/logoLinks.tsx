import React from 'react';
import Link from 'next/link';
import { logoLinks } from '@/utils/constants';
import { CodeXml, Github, Linkedin, Mail, Phone } from "lucide-react";
import { IconMap, LogoLinksInterface } from '@/utils/interface';

export const LogoLinks: React.FC<LogoLinksInterface> = ({
    className
}) => {

    const iconMap: IconMap = {
        Linkedin: <Linkedin />,
        Github: <Github />,
        CodeXml: <CodeXml />,
        Mail: <Mail />,
        Phone: <Phone />
    };

    return (
        <div className={`${className}`}>
            {logoLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-[#18d26e] transition-colors duration-200"
                    aria-label={link.target}
                >
                    {iconMap[link.icon]}
                </Link>
            ))}
        </div>
    )
}

