import { EducationPage } from "@/pages/EducationPage";
import { HomePage } from "@/pages/HomePage";
import { MacScrollPage } from "@/pages/MacScrollPage";
import { SkillsPage } from "@/pages/SkillsPage";

export default function home() {
    return (
        <>
            <HomePage />
            <MacScrollPage />
            <EducationPage />
            <SkillsPage />
        </>
    )
}