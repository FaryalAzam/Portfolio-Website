import NavMain from "./components/Navbar/NavMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMain from "./components/aboutSection/AboutMain";
import HelperSection from "./components/HelperSection";
import SkillMain from "./components/skillsSection/SkillMain";
import ProjectMain from "./components/projectSection/ProjectMain";
import Contact from "./components/Contact/Contact";
import FooterMain from "./components/footer/FooterMain";

function App() {
  return (
   <main className="font-body">
<NavMain />
<HeroMain />
<HeroGradient />
<SubHeroSection />
<AboutMain />
<SkillMain />
<ProjectMain />
<Contact />
<FooterMain />
<HelperSection />
   </main>
  );
}

export default App;
