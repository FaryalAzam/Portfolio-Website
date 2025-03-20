import React from "react";
import NavMain from "./components/Navbar/NavMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMain from "./components/aboutSection/AboutMain";
import HelperSection from "./components/HelperSection";
import SkillMain from "./components/skillsSection/SkillMain";
import ProjectMain from "./components/projectSection/ProjectMain";
import Contact from "./components/Contact/Contact";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <NavMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMain />
      <SkillMain />
      <ProjectMain />
      <Contact />
      <HelperSection />
    </Layout>
  );
}

export default App;
