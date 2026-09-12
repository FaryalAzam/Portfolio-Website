import React, { Suspense, lazy } from "react";
import NavMain from "./components/Navbar/NavMain";
import HeroMain from "./components/heroSection/HeroMain";
import Layout from "./Layout";

// Lazy load below-the-fold components to improve initial load time
const AboutMain = lazy(() => import("./components/aboutSection/AboutMain"));
const SkillMain = lazy(() => import("./components/skillsSection/SkillMain"));
const ProjectMain = lazy(() => import("./components/projectSection/ProjectMain"));
const ExperienceMain = lazy(() => import("./components/experienceSection/ExperienceMain"));
const CertificationsMain = lazy(() => import("./components/certificationsSection/CertificationsMain"));
const ContactMain = lazy(() => import("./components/contactSection/ContactMain"));

function App() {
  return (
    <Layout>
      <NavMain />
      <HeroMain />
      <Suspense fallback={<div className="h-32 flex items-center justify-center text-cyan">Loading...</div>}>
        <AboutMain />
        <SkillMain />
        <ProjectMain />
        <ExperienceMain />
        <CertificationsMain />
        <ContactMain />
      </Suspense>
    </Layout>
  );
}

export default App;
