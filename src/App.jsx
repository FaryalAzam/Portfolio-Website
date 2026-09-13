import React from "react";
import NavMain from "./components/Navbar/NavMain";
import HeroMain from "./components/heroSection/HeroMain";
import AboutMain from "./components/aboutSection/AboutMain";
import SkillMain from "./components/skillsSection/SkillMain";
import ProjectMain from "./components/projectSection/ProjectMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import CertificationsMain from "./components/certificationsSection/CertificationsMain";
import ContactMain from "./components/contactSection/ContactMain";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <NavMain />
      <HeroMain />
      <AboutMain />
      <SkillMain />
      <ProjectMain />
      <ExperienceMain />
      <CertificationsMain />
      <ContactMain />
    </Layout>
  );
}
export default App;
