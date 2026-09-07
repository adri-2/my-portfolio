import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// NavBar et HeroSection sont visibles immédiatement (above-the-fold) :
// on les importe en statique pour ne pas retarder le LCP avec un
// chargement asynchrone inutile.
import NavBar from "./components/NavBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ExperienceAndSkills from "./components/ExperienceAndSkills.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import FooterSection from "./components/FooterSection.jsx";
// const CertificationsPage = lazy(() => import("./pages/CertificationsPage.jsx"));

function App() {
  // AOS est initialisé une seule fois pour toute l'app (au lieu d'un
  // AOS.init() répété dans chaque section comme dans la version Vue).
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
      offset: 80,
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  return (
    <div className="app-shell min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <NavBar />
      <main className="relative">
        <HeroSection />

        <ServicesSection />
        <AboutSection />
        <ExperienceAndSkills />
        <ProjectSection />
        {/* Témoignages temporairement désactivés. */}
        <ContactSection />
        {/* <CertificationsPage /> */}
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
