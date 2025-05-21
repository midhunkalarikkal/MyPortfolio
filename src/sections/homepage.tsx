"use client";

import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { LogoLinks } from "@/components/logoLinks";
import { useEffect, useRef, useState } from "react";
import { designationArray, gsapFromHomePageMainObject, gsapSetHomePageMainObject, gsapToMainObject, gsapToNameMaskGroupFirstObject, gsapToNameMaskGroupSecondObject, navLinks } from "@/utils/constants";

export const HomePage: React.FC = () => {

    const [showContent, setShowContent] = useState(false);
    const [designation, setDesignation] = useState(designationArray[0]);

    const midhunIntroImageRef = useRef(null);
    const introTextDivRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(".name-mask-group", gsapToNameMaskGroupFirstObject)
            .to(".name-mask-group", {
                ...gsapToNameMaskGroupSecondObject,
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

        gsap.to(".main", gsapToMainObject);
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
                            <g className="name-mask-group">
                                <text
                                    x="50%"
                                    y="50%"
                                    fontSize="60"
                                    textAnchor="middle"
                                    fill="white"
                                    dominantBaseline="middle"
                                    fontFamily="Arial Black"
                                    stroke="#18d26e"
                                    strokeWidth="0"
                                    paintOrder="stroke"
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
                        className="hidden md:block"
                    />
                    <image
                        href="./LoadingPhoneBg.png"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#viMask)"
                        className="block md:hidden"
                    />
                </svg>
            </div>

            {showContent && (
                <div className="main w-full pr-5 md:pr-0 md:max-w-10/12 scale-[1.7] min-h-screen">
                    <div className="landing overflow-hidden relative w-full h-screen flex">
                        <div className="w-full h-screen flex justify-center items-center absolute">
                            <div className="w-full flex flex-col md:flex-row h-full">

                                <div className="md:hidden flex items-end w-full h-1/2">
                                    <div
                                        id="into-image"
                                        className="w-full h-auto flex justify-center"
                                        ref={midhunIntroImageRef}
                                    >
                                        <Image
                                            src="/midhunIntro.png"
                                            alt="Image"
                                            className="w-8/12 h-full"
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-start mt-6 md:mt-0 md:items-center justify-center w-full md:w-1/2 h-1/2 md:h-full text-white">
                                    <div className="w-full text-center md:text-left px-2 md:px-0" ref={introTextDivRef}>
                                        <h1 className="text-3xl md:text-5xl font-['audiowide']"> Midhun K Paniker </h1>
                                        <h2>
                                            {"I'm a passionate"}{" "}
                                            <span className="font-['audiowide'] text-[#18d26e] text-lg md:text-2xl">{designation}</span> from Kerala
                                        </h2>

                                        <nav id="navbar" className="mt-4">
                                            <ul className="hidden md:flex md:justify-start md:gap-4 text-md">
                                                {navLinks.map((link, index) => (
                                                    <li key={index}><Link className="nav-link" href="#header">{link}</Link></li>
                                                ))}
                                            </ul>
                                        </nav>
                                        <LogoLinks className="justify-center md:justify-start gap-5"/>
                                    </div>
                                </div>

                                <div className="hidden md:flex justify-center items-center w-1/2 h-full">
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
