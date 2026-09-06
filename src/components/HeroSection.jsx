import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { memo, useEffect, useState } from "react";
import profileImg from "@/assets/photo-user.jpg";
import pythonIcon from "@/assets/icons8-python.svg";
import reactIcon from "@/assets/icons8-react-native.svg";
import vueIcon from "@/assets/icons8-vue-js.svg";
import djangoIcon from "@/assets/icons8-django.svg";
import dockerIcon from "@/assets/icons8-logo-docker.svg";
import postgresIcon from "@/assets/icons8-postgresql.svg";

const HERO_SKILLS = [
  { name: "Python", icon: pythonIcon, position: "-top-10 left-1/2 -translate-x-1/2" },
  { name: "React", icon: reactIcon, position: "-right-7 -top-7" },
  { name: "Vue.js", icon: vueIcon, position: "-right-10 top-1/2 -translate-y-1/2" },
  { name: "Docker", icon: dockerIcon, position: "-bottom-9 right-7" },
  { name: "PostgreSQL", icon: postgresIcon, position: "-bottom-9 left-1/2 -translate-x-1/2" },
  { name: "Django", icon: djangoIcon, position: "-left-10 top-1/2 -translate-y-1/2" },
];

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

          <div className="mt-0 flex items-center justify-center px-6 py-8 sm:px-10 sm:py-10 lg:h-full lg:px-14">
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
                {HERO_SKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    className={`floating-badge absolute ${skill.position} flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-[#f2f4fb] p-2 shadow-lg shadow-black/30 transition-all duration-300 hover:scale-125`}
                    title={skill.name}
                  >
                    <img src={skill.icon} alt={skill.name} className="h-full w-full object-contain" />
                  </div>
                ))}
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
