import AboutMe from "@/components/AboutMe";
import Certification from "@/components/Certification";
import ContactMe from "@/components/ContactMe";
import ProfessionalCaseStudies from "@/components/ProfessionalCaseStudies";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import TechnicalSkill from "@/components/TechnicalSkill";
import WorkFlow from "@/components/WorkFlow";

export default function HomePage() {
  return (
    <main
      id="inicio"
      className="relative w-full min-h-screen flex flex-col py-12"
    >
      <div className="max-w-360 w-full mx-auto px-6 grow flex flex-col justify-center gap-24">
        <AboutMe />
        <div id="habilidades">
          <TechnicalSkill />
        </div>
        <div id="certificaciones">
          <Certification />
        </div>
        <div id="experiencia">
          <ProfessionalExperience />
        </div>
        <div id="case-studies">
          <ProfessionalCaseStudies />
        </div>
        <div id="workflow">
          <WorkFlow />
        </div>
        <div id="contacto">
          <ContactMe />
        </div>
      </div>
    </main>
  );
}
