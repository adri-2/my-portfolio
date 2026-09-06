import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { memo, useEffect, useState } from "react";
import profileImg from "@/assets/photo-user.jpg";

function HeroSection() {
  const roles = ["Full Stack Developer", "Backend Developer", "API Developer", "Software Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return undefined;
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 3200);
    return () => window.clearInterval(timer);
  }, [roles.length, shouldReduceMotion]);

  return (
    <section id="top" className="relative w-full overflow-visible" data-aos="zoom-in-up">
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-12 lg:px-8">
        <div className="relative mx-auto grid max-w-3xl gap-8 pb-10 pt-4 lg:min-h-[calc(100svh-5rem)] lg:max-w-none lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pb-12 lg:pt-8">
          <div className="lg:py-4" data-aos="fade-right">
            <div className="text-center lg:text-left">
              {/* <p className="eyebrow mb-5 text-xs font-medium uppercase text-primary">Portfolio développeur · 2025</p> */}
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-400">Hello, I&apos;m...</p>
              <h1 className="pt-2 text-5xl font-bold leading-[0.98] tracking-[-0.06em] text-white md:text-7xl lg:text-[5.5rem]">
                Adrien <span className="text-primary">Sani</span>
              </h1>
              <div className="mt-6 h-10 overflow-hidden text-2xl font-semibold text-slate-200 md:text-3xl">
                <AnimatePresence mode="wait">
                  <motion.span key={roles[roleIndex]} initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }} transition={{ duration: shouldReduceMotion ? 0 : 0.45 }} className="inline-block">
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
            <p className="mx-auto max-w-xl pt-6 text-center text-base leading-8 text-slate-300 lg:mx-0 lg:text-left">
              <span className="text-xl font-semibold text-primary">
                Développeur full-stack
              </span>{" "}
              passionné, expert en Python, Vue.js et React, je conçois des
              applications web performantes et ergonomiques. Mon savoir-faire
              s’étend aussi à l’analyse de données, au machine learning, et à
              des domaines connexes comme la cybersécurité et l’administration
              système.
            </p>
            <div className="flex flex-col items-center gap-3 pt-9 sm:mx-auto sm:w-max sm:flex-row lg:mx-0" data-aos="fade-up" data-aos-delay="250">
              <a
                href="#projects"
                className="relative flex w-full justify-center rounded-full bg-primary px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/30 sm:w-max"
              >
                Voir mes projets
              </a>

              <a
                href="/medias/cv adrien.pdf"
                className="w-full rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-white transition duration-300 hover:scale-[1.03] hover:border-primary hover:bg-primary/10 sm:w-max"
              >
                   Télécharger le CV
              </a>
            </div>
           
          </div>

          <div className="mt-0 flex items-center justify-center lg:h-full">
            <div className="relative flex w-full items-center justify-center">
              <div className="hero-orbit relative z-10 flex h-56 w-56 shrink-0 items-end justify-center rounded-full border-8 border-primary/90 p-2 shadow-2xl shadow-primary/20 sm:h-72 sm:w-72" data-aos="zoom-in" data-aos-delay="200">
                <img
                  src={profileImg}
                  alt="Adrien"
                  width={250}
                  height={250}
                  loading="eager"
                  fetchpriority="high"
                  className="h-full w-full rounded-full object-cover"
                />
                <div className="floating-badge absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow -m-7 hover:scale-110 transition-all duration-300 ease-in-out">
                  <i className="fa-brands fa-css3-alt fa-2xl hover:text-blue-900 hover:scale-110 transition-all duration-300 ease-in-out"></i>
                </div>
                <div className="floating-badge absolute top-1/2 -left-5 transform -translate-y-1/2 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow -m-7 hover:scale-110 transition-all duration-300 ease-in-out">
                  <i className="fa-brands fa-github fa-xl"></i>
                </div>
                <div className="floating-badge absolute top-1/2 -right-5 transform -translate-y-1/2 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow -m-10 hover:scale-110 transition-all duration-300 ease-in-out">
                  <i className="fa-brands fa-vuejs hover:fa-2xl fa-xl hover:text-green-700 hover:scale-110 transition-all duration-300 ease-in-out"></i>
                </div>
                <div className="absolute -bottom-4 left-1/2 -right-4 transform -translate-x-1/2 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow -m-12 hover:scale-110 transition-all duration-300 ease-in-out">
                  <i className="fa-brands fa-html5 fa-xl hover:fa-2xl hover:text-orange-500"></i>
                </div>
                <div className="absolute -bottom-2 right-2 transform -translate-x-1/2 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow -m-7 hover:scale-110 transition-all duration-300 ease-in-out group">
                  <i className="fa-brands fa-python fa-xl python-gradient group-hover:hidden transition-all duration-300 ease-in-out"></i>
                  <svg
                    className="hidden group-hover:block transition-all duration-300 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0277BD"
                      d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35
         c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104
         c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672
         C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498
         c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                    ></path>
                    <path
                      fill="#FFC107"
                      d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35
         c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104
         c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672
         C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498
         c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                    ></path>
                  </svg>
                </div>
                <div className="absolute -right-2 -top-2 transform -translate-x-1/2 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow -m-7 hover:scale-110 transition-all duration-300 ease-in-out">
                  <i className="fa-brands fa-react fa-xl hover:text-[#1E88E5] hover:scale-110 transition-all duration-300 ease-in-out"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#services" className="mx-auto flex w-fit flex-col items-center gap-2 text-xs uppercase tracking-[0.22em] text-slate-500 transition hover:text-primary" aria-label="Descendre vers les services">
          <span>Scroll to explore</span>
          <span className="h-10 w-px bg-linear-to-b from-primary to-transparent"></span>
        </a>
      </div>
    </section>
  );
}

export default memo(HeroSection);
