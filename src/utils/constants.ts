import { Power3 } from "gsap";

// Home page designation strings
export const designationArray: string[] = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Software Engineer",
    "Gamer",
]

// Home page navlinks
export const navLinks: string[] = [
    "Home", "About", "Resume", "Skills", "Portfolio", "Contact"
]

// Home page icons
type IconKey = "Linkedin" | "Github" | "CodeXml" | "TwitterIcon" | "Facebook" | "Instagram";
export const logoLinks: { href: string; target: string; icon: IconKey }[] = [
    { href: "https://www.linkedin.com/in/midhun-k-paniker-726226231", target: "LinkedIn", icon: "Linkedin" },
    { href: "https://github.com/midhunkalarikkal", target: "Github", icon: "Github" },
    { href: "https://leetcode.com/u/midhunkpaniker/", target: "LeetCode", icon: "CodeXml" },
    { href: "https://x.com/Midhun_k__?t=628ZJ1W-dZl53LikH4F2hg&s=09", target: "X", icon: "TwitterIcon" },
    { href: "https://www.facebook.com/midhunpaniker1?mibextid=ZbWKwL", target: "Facebook", icon: "Facebook" },
    { href: "https://instagram.com/midhun_kalarikkal__?igshid=OGQ5ZDc2ODk2ZA==", target: "Instagram", icon: "Instagram" },
];

// GSPA animation objects

export const gsapSetHomePageMainObject = {
    opacity: 1,
    y: 0,
}

export const gsapFromHomePageMainObject = {
    duration: 2,
    opacity: 0,
    y: -50,
    ease: Power3.easeOut,
}

export const gsapToNameMaskGroupFirstObject = {
    rotate: 0,
    duration: 2,
    ease: "Power4.easeInOut",
    transformOrigin: "50% 50%",
}

export const gsapToNameMaskGroupSecondObject = {
    scale: 10,
    duration: 2,
    delay: -1.8,
    ease: "Expo.easeInOut",
    transformOrigin: "50% 50%",
    opacity: 0,
}

export const gsapToMainObject = {
    scale: 1,
    rotate: 0,
    duration: 2,
    delay: -1,
    ease: "Expo.easeInOut",
}