"use client";

import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
// import "remixicon/fonts/remixicon.css";

export const HomePage: React.FC = () => {

    const [showContent, setShowContent] = useState(false);

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

        const main = document.querySelector(".main");
        main?.addEventListener("mousemove", function (e: Event) {
            const mouseEvent = e as MouseEvent;
            const xMove = (mouseEvent.clientX / window.innerWidth - 0.5) * 40;
            gsap.to(".main .text", {
                x: `${xMove * 0.4}%`,
            });
            gsap.to(".sky", {
                x: xMove,
            });
            gsap.to(".bg", {
                x: xMove * 1.7,
            });
        });
    }, [showContent]);

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
                        href="./midhunBg.jpg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#viMask)"
                    />
                </svg>
            </div>

            {showContent && (
                <div className="main w-full rotate-[-10deg] scale-[1.7]">
                    <div className="landing overflow-hidden relative w-full h-screen bg-black flex">
                        {/* backgoround image */}
                        <Image
                            src="/portfolioBg.jpg"
                            className="w-full h-screen relative"
                            alt="BackgroundImage"
                            width={1000}
                            height={1000}
                        />
                        <div className="w-full h-full flex justify-center items-center absolute">
                            <div className="w-8/12 flex h-full">
                                {/* left side */}
                                <div className="flex flex-col text-white w-1/2 h-full justify-center items-center">
                                    <h1 className="text-6xl">Midhun K Paniker</h1>
                                    <div className="mt-2">
                                        <h2 className="text-3xl">MERN Stack Developer</h2>
                                        <h2 className="text-3xl">Software Engineer</h2>
                                    </div>
                                </div>


                                {/* right side */}
                                <div className="flex justify-center items-center w-1/2 h-full">
                                    <div className="w-full h-auto">
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
                    <div className="w-full h-screen">
                        <Image
                            src="/portfolioBg.jpg"
                            className="w-full h-screen relative"
                            alt="BackgroundImage"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            )}
        </>
    );
};
