import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CoursesSection from "../components/portfolio/CoursesSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import FooterSection from "@/components/portfolio/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <CoursesSection />
      <SkillsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
