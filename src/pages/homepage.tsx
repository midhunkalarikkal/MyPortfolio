"use client";

import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { designationArray, gsapFromHomePageMainObject, gsapSetHomePageMainObject, logoLinks, navLinks } from "@/utils/constants";
import { CodeXml, Facebook, Github, Instagram, Linkedin, MenuIcon, TwitterIcon } from "lucide-react";

const iconMap = {
    Linkedin: <Linkedin />,
    Github: <Github />,
    CodeXml: <CodeXml />,
    TwitterIcon: <TwitterIcon />,
    Facebook: <Facebook />,
    Instagram: <Instagram />,
};

export const HomePage: React.FC = () => {

    const [showContent, setShowContent] = useState(false);
    const [designation, setDesignation] = useState(designationArray[0]);

    const midhunIntroImageRef = useRef(null);
    const introTextDivRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(".vi-mask-group", {
            rotate: 0,
            duration: 2,
            ease: "Power4.easeInOut",
            transformOrigin: "50% 50%",
        }).to(".vi-mask-group", {
            scale: 10,
            duration: 2,
            delay: -1.8,
            ease: "Expo.easeInOut",
            transformOrigin: "50% 50%",
            opacity: 0,
            onUpdate: function () {
                if (this.progress() >= 0.9) {
                    const svgElement = document.querySelector(".svg");
                    if (svgElement) {
                        svgElement.remove();
                    }
                    setShowContent(true);
                    this.kill();
                }
            },
        });
    });

    useGSAP(() => {
        if (!showContent) return;

        gsap.to(".main", {
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: -1,
            ease: "Expo.easeInOut",
        });

        gsap.to(".sky", {
            scale: 1.1,
            rotate: 0,
            duration: 2,
            delay: -0.8,
            ease: "Expo.easeInOut",
        });

        gsap.to(".bg", {
            scale: 1.1,
            rotate: 0,
            duration: 2,
            delay: -0.8,
            ease: "Expo.easeInOut",
        });

        gsap.to(".character", {
            scale: 1.4,
            x: "-50%",
            bottom: "-25%",
            rotate: 0,
            duration: 2,
            delay: -0.8,
            ease: "Expo.easeInOut",
        });

        gsap.to(".text", {
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: -0.8,
            ease: "Expo.easeInOut",
        });

        gsap.set(midhunIntroImageRef.current, gsapSetHomePageMainObject);

        gsap.from(midhunIntroImageRef.current, gsapFromHomePageMainObject);

        gsap.set(introTextDivRef.current, gsapSetHomePageMainObject);

        gsap.from(introTextDivRef.current, gsapFromHomePageMainObject);

    }, [showContent]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % designationArray.length;
            setDesignation(designationArray[index])
        }, 3000);

        return () => clearInterval(interval);

    }, [])

    return (
        <>
            <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
                <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <mask id="viMask">
                            <rect width="100%" height="100%" fill="black" />
                            <g className="vi-mask-group">
                                <text
                                    x="50%"
                                    y="50%"
                                    fontSize="60"
                                    textAnchor="middle"
                                    fill="white"
                                    dominantBaseline="middle"
                                    fontFamily="Arial Black"
                                >
                                    MIDHUN K PANIKER
                                </text>
                            </g>
                        </mask>
                    </defs>
                    <image
                        href="./LoadingBg.png"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#viMask)"
                    />
                </svg>
            </div>

            {showContent && (
                <div className="main w-full scale-[1.7]">
                    <div className="landing overflow-hidden relative w-full h-screen bg-black flex">

                        {/* backgoround image */}

                        <Image
                            src="/portfolioBg.jpg"
                            className="w-full h-screen relative"
                            alt="BackgroundImage"
                            width={1000}
                            height={1000}
                        />

                        <div className="w-full h-screen flex justify-center items-center absolute">
                            <div className="w-8/12 flex h-full">

                                {/* left side */}
                                <div className="flex items-center justify-center w-1/2 h-full text-white">
                                    <div className="w-full" ref={introTextDivRef}>
                                        <h1 className="text-5xl font-['audiowide']"> Midhun K Paniker </h1>
                                        <h2>
                                            {"I'm a passionate"}{" "}
                                            <span className="font-['audiowide'] text-[#18d26e] text-2xl">{designation}</span> from Kerala
                                        </h2>

                                        <nav id="navbar" className="mt-4">
                                            <ul className="flex gap-4 text-md">
                                                {navLinks.map((link, index) => (
                                                    <li key={index}><Link className="nav-link" href="#header">{link}</Link></li>
                                                ))}
                                            </ul>
                                            <MenuIcon className="text-2xl mt-2 cursor-pointer md:hidden" />
                                        </nav>

                                        <div className="social-links flex gap-6 mt-4 text-2xl">
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
                                    </div>
                                </div>


                                {/* right side */}
                                <div className="flex justify-center items-center w-1/2 h-full">
                                    <div
                                        id="into-image"
                                        className="w-full h-auto"
                                        ref={midhunIntroImageRef}
                                    >
                                        <Image
                                            src="/midhunIntro.png"
                                            alt="Image"
                                            className="w-full h-full"
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};
