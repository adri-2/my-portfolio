import { memo, useCallback, useEffect, useState } from "react";
import logo from "@/assets/logo.png";

// Données statiques définies hors composant : elles ne sont créées
// qu'une seule fois (au chargement du module), pas à chaque render.
const MENU = [
  { name: "Services", href: "#services" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Témoignages", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    const sections = MENU.map(({ href }) => document.querySelector(href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0.1, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = useCallback((e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b px-5 py-3 transition-all duration-500 sm:px-8 ${isScrolled ? "border-white/10 bg-[#0c0e14]/80 shadow-2xl shadow-black/20 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
      <a href="#top" aria-label="Retour à l'accueil" className="rounded-full">
        <img src={logo} className="h-12 w-12 rounded-full border border-white/20 object-cover shadow-lg sm:h-14 sm:w-14" alt="Logo Adrien Portfolio" />
      </a>

      {/* Mobile Toggle Button */}
      <div className="z-30 md:hidden">
        <button
          type="button"
          className="rounded-lg p-2 text-white transition hover:bg-white/10"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="text-2xl" aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {/* Navbar Link */}
      <nav
        className={`fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#080d1c]/95 backdrop-blur-xl md:relative md:inset-auto md:flex-row md:justify-between md:bg-transparent md:backdrop-blur-none ${
          isMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <ul className="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          {MENU.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`relative block rounded-lg px-3 py-2 text-lg font-medium transition hover:text-white md:text-sm ${activeSection === item.href ? "text-primary" : "text-slate-300"}`}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </header>
  );
}

// memo évite un re-render de la navbar quand le parent (App) re-rend
// pour une raison sans rapport avec elle.
export default memo(NavBar);
