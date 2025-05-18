import { HomePage } from "@/pages/homepage";
import { EducationPage } from "@/pages/educationPage";
import { MacScrollPage } from "@/pages/macScrollPage";
import { PortfolioPage } from "@/pages/portfolioPage";
import { TracingBeamDemo } from "@/pages/TracingBeamDemo";


export default function home() {
    return (
        <>
            <HomePage />
            <TracingBeamDemo />
            <EducationPage />
            <PortfolioPage />
            <MacScrollPage />
        </>
    )
}


{/* <p className="text-neutral-300 text-sm md:text-base hidden">
    {"As a passionate computer enthusiast, I’ve always been fascinated by how games and applications work beneath the surface. This curiosity to explore the inner workings of software and understand the technology powering interactive experiences naturally led me to pursue a path in Computer Science. My academic journey has been driven by a desire to not just use technology, but to truly understand, build, and innovate within it—especially in areas that blend creativity and logic, like game development and application design."}
</p> */}
