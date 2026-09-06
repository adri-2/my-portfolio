import { memo, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard.jsx";

import image2 from "@/assets/projets/api.png";
import imageAdvisersAgency from "@/assets/projets/AdvisersAgency.png";
import CRM_Recrutement_Frontend from "@/assets/projets/CRMRecrutementFrontend.png";
import Portfolio from "@/assets/projets/Portfolio.png";
import Simu_API from "@/assets/projets/SimuAPI.png";
import MangaLib from "@/assets/projets/MangaLib.png";
import bookapp from "@/assets/projets/bookapp.png";

// Modules Swiper déclarés une seule fois hors composant.
const SWIPER_MODULES = [EffectCoverflow, Navigation, Pagination];

const PROJECTS = [
  {
    title: "Advisers Agency",
    description:
      "Plateforme pour les élèves et étudiants à la recherche de bourses.",
    image: imageAdvisersAgency,
    tags: [
      "React.js",
      "Python",
      "Django",
      "Django Rest Framework",
      "PostgreSQL",
    ],
    liveLink: "https://advisers-agency-view.vercel.app/home",
  },
  {
    title: "CRM Recrutement Backend",
    description:
      "API backend pour un CRM, gestion des utilisateurs et des projets.",
    image: image2,
    tags: ["Django", "Django Rest Framework", "PostgreSQL"],
    liveLink: "",
    codeLink: "https://github.com/adri-2/crm-projet-backemd.git",
  },
  {
    title: "CRM Recrutement Frontend",
    description:
      "Frontend d'un CRM pour la gestion des clients et des projets.",
    image: CRM_Recrutement_Frontend,
    tags: ["Vue.js", "TailwindCSS"],
    liveLink: "https://crm-project.adrien-dev.me/",
    codeLink: "https://github.com/adri-2/crm-project.git",
  },
  {
    title: "Portfolio",
    description: "Mon portfolio personnel développé avec Vue.js et TailwindCSS.",
    image: Portfolio,
    tags: ["Vue.js", "TailwindCSS"],
    liveLink: "https://adrien-dev.me/",
    codeLink: "https://github.com/adri-2/my-portfolio.git",
  },
  {
    title: "Simu API",
    description: "API de simulation pour différents scénarios métiers.",
    image: Simu_API,
    tags: ["Django", "Django Rest Framework", "PostgreSQL"],
    liveLink: "",
    codeLink: "https://github.com/adri-2/simu-api.git",
  },
  {
    title: "Gestion Location de Livres",
    description: "Projet Django pour la gestion de location des livres.",
    image: bookapp,
    tags: ["Django", "Django Rest Framework", "PostgreSQL"],
    liveLink: "",
    codeLink: "https://github.com/adri-2/gestion-location-livres.git",
  },
  {
    title: "MangaLib",
    description: "Bibliothèque en ligne pour la gestion et la lecture de mangas.",
    image: MangaLib,
    tags: ["Vue.js", "Django", "Django Rest Framework", "PostgreSQL"],
    liveLink: "",
    codeLink: "https://github.com/adri-2/mangalib.git",
  },
  {
    title: "WeatherApp API",
    description: "API météo pour récupérer les données climatiques en temps réel.",
    image: image2,
    tags: ["Django", "Django Rest Framework", "PostgreSQL"],
    liveLink: "",
    codeLink: "https://github.com/adri-2/weatherapp-api.git",
  },
];

function ProjectSection() {
  // Objet de config recréé une seule fois (pas à chaque render du parent).
  const navigationOptions = useMemo(
    () => ({
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }),
    []
  );
  const coverflowEffect = useMemo(
    () => ({
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }),
    []
  );

  return (
    <section
      id="projects"
      className="section-shell relative py-20 md:py-28"
    >
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary">Sélection de réalisations</p>
      <h2 className="section-heading mb-12 text-center text-4xl font-bold text-white md:text-5xl">
        <span className="inline-block mb-2 mr-4">Mes</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Projets
        </span>
      </h2>

      <div className="relative">
        <button
          className="swiper-button-prev absolute top-1/2 left-[-1rem] md:left-[-2rem] transform -translate-y-1/2 z-10 bg-primary bg-opacity-75 hover:bg-yellow-600 text-white p-3 md:p-4 shadow-lg rounded-full transition-all duration-300"
          aria-label="Previous Project"
        >
          <i className="fas fa-chevron-left hidden"></i>
        </button>
        <button
          className="swiper-button-next absolute top-1/2 right-[-1rem] md:right-[-2rem] transform -translate-y-1/2 z-10 bg-primary bg-opacity-75 hover:bg-yellow-600 text-white p-3 md:p-4 shadow-lg rounded-full transition-all duration-300"
          aria-label="Next Project"
        >
          <i className="fas fa-chevron-right hidden"></i>
        </button>
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={coverflowEffect}
          navigation={navigationOptions}
          loop
          pagination={{ clickable: true }}
          modules={SWIPER_MODULES}
          className="max-w-full mt-8 md:mt-16 swiper-projects"
        >
          {PROJECTS.map((project, index) => (
            <SwiperSlide
              key={index}
              className="max-w-[280px] rounded-2xl border border-white/10 bg-white/[0.03] px-2 py-6 shadow-md transition-all duration-300 hover:border-primary/50 md:max-w-[340px]"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveLink={project.liveLink}
                codeLink={project.codeLink}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default memo(ProjectSection);
