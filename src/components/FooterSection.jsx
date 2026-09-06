import { memo, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";
import { useScrolledPast } from "@/hooks/useScrolledPast.js";

function FooterSection() {
  const showButton = useScrolledPast(200);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <footer className="relative border-t border-white/10 bg-[#0c0e14] p-8 text-white">
        <span className="absolute bottom-0 left-0 w-1/2 h-2 border-b-2 border-l-2 border-secondary rounded-bl-xl"></span>

        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Nom */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Adrien Portfolio"
              loading="lazy"
              className="w-20 h-20 rounded-full object-cover border-2 border-primary shadow-lg"
            />
            <span className="font-bold text-xl bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
              Adrien Portfolio
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 text-md font-medium">
            <a href="#skills" className="hover:text-secondary transition-colors duration-300">
              Compétences
            </a>
            <a href="#experience" className="hover:text-secondary transition-colors duration-300">
              Expérience
            </a>
            <a href="#testimonials" className="hover:text-secondary transition-colors duration-300">
              Témoignages
            </a>
            <a href="#contact" className="hover:text-secondary transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Réseaux sociaux */}
          <div className="flex gap-5">
            <a
              href="https://github.com/adri-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-transform transform hover:scale-110"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/adrien-sani-2890312aa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-transform transform hover:scale-110"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
            <a
              href="mailto:adriensani237@gmail.com"
              aria-label="Email"
              className="hover:text-primary transition-transform transform hover:scale-110"
            >
              <i className="fa-solid fa-envelope text-2xl"></i>
            </a>
            <a
              href="https://wa.me/+237678846493"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-primary transition-transform transform hover:scale-110"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-8">
          © {new Date().getFullYear()} Adrien. Tous droits réservés.
        </div>
      </footer>

      {/* Back To Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-linear-to-r from-primary to-secondary text-white rounded-full shadow-lg hover:scale-110 transition flex items-center justify-center"
          aria-label="Retour en haut"
        >
          <ArrowUp size={30} strokeWidth={2.2} aria-hidden="true" />
        </button>
      )}
    </>
  );
}

export default memo(FooterSection);
