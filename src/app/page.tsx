import AboutMe from "@/components/AboutMe";
import Certification from "@/components/Certification";
import ContactMe from "@/components/ContactMe";
import MyProyect from "@/components/MyProyect";
import TechnicalSkill from "@/components/TechnicalSkill";
import WorkFlow from "@/components/WorkFlow";

export default function HomePage() {


  return (
    <main className="relative w-full min-h-screen flex flex-col py-12">
      <div className="max-w-5xl w-full mx-auto px-6 grow flex flex-col justify-center gap-24">
        <AboutMe />
        <TechnicalSkill />
        <Certification />
        <MyProyect />
        <WorkFlow />
        <ContactMe />
      </div>

    </main>
  );
}
