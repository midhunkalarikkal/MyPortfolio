import { HomePage } from "@/pages/homepage";
import { StatsPage } from "@/pages/statsPage";
import { SkillsPage } from "@/pages/skillsPage";
import { EducationPage } from "@/pages/educationPage";
import { MacScrollPage } from "@/pages/macScrollPage";
import { PortfolioPage } from "@/pages/portfolioPage";
import { TracingBeam } from "@/components/ui/tracing-beam";


export default function home() {
    return (
        <>
            <TracingBeam className="h-auto w-full" >
                <HomePage />
                <SkillsPage />
                <EducationPage />
                <PortfolioPage />
                <StatsPage />
                <MacScrollPage />
            </TracingBeam>
        </>
    )
}


{/* <p className="text-neutral-300 text-sm md:text-base hidden">
    {"As a passionate computer enthusiast, I’ve always been fascinated by how games and applications work beneath the surface. This curiosity to explore the inner workings of software and understand the technology powering interactive experiences naturally led me to pursue a path in Computer Science. My academic journey has been driven by a desire to not just use technology, but to truly understand, build, and innovate within it—especially in areas that blend creativity and logic, like game development and application design."}
</p> */}
