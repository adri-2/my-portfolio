import { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// NavBar et HeroSection sont visibles immédiatement (above-the-fold) :
// on les importe en statique pour ne pas retarder le LCP avec un
// chargement asynchrone inutile.
import NavBar from "./components/NavBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AnimatedBackground from "./components/AnimatedBackground.jsx";

// Le reste est chargé à la demande (code-splitting), comme le faisait
// defineAsyncComponent côté Vue : chaque section devient son propre chunk,
// téléchargé au moment du rendu plutôt que dans le bundle initial.
const ServicesSection = lazy(() => import("./components/ServicesSection.jsx"));
const AboutSection = lazy(() => import("./components/AboutSection.jsx"));
const ExperienceAndSkills = lazy(() =>
  import("./components/ExperienceAndSkills.jsx")
);
const ProjectSection = lazy(() => import("./components/ProjectSection.jsx"));
// const TestimonialsSection = lazy(() =>
//   import("./components/TestimonialsSection.jsx")
// );
const ContactSection = lazy(() => import("./components/ContactSection.jsx"));
const FooterSection = lazy(() => import("./components/FooterSection.jsx"));
// const CertificationsPage = lazy(() => import("./pages/CertificationsPage.jsx"));

// Fallback neutre : un simple espace réservé pour limiter le layout shift
// pendant le téléchargement du chunk, sans spinner intrusif.
const SectionFallback = () => <div className="min-h-40" aria-hidden="true" />;

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

        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ExperienceAndSkills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ProjectSection />
        </Suspense>
        {/* Témoignages temporairement désactivés. */}
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
        {/* <CertificationsPage /> */}
        <Suspense fallback={<SectionFallback />}>
          <FooterSection />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
