import { memo, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard.jsx";

import imageAdvisersAgency from "@/assets/projets/AdvisersAgency.png";
import CRM_Recrutement_Frontend from "@/assets/projets/CRMRecrutementFrontend.png";
import Simu_API from "@/assets/projets/SimuAPI.png";
import MangaLib from "@/assets/projets/MangaLib.png";
import bookapp from "@/assets/projets/bookapp.png";

// Modules Swiper déclarés une seule fois hors composant.
const SWIPER_MODULES = [EffectCoverflow, Navigation, Pagination];

const PROJECTS = [
  // =====================================================
  // PROJETS PROFESSIONNELS
  // =====================================================

  {
    title: "Boardgame",
    description:
      "Backend d'une application mobile de jeux multijoueurs (dames, ludo, échecs) avec matchmaking en temps réel, WebSockets, gestion des parties, système de mises en coins et tournois.",
    tags: [
      "NestJS",
      "TypeScript",
      "WebSocket",
      "Socket.IO",
      "PostgreSQL",
      "Docker",
    ],
    type: "professional",
  },

  {
    title: "Projet Blockchain",
    description:
      "Développement de fonctionnalités blockchain incluant la création et la gestion de wallets, les paiements en cryptomonnaies et l'interaction avec des smart contracts.",
    tags: [
      "Python",
      "Solidity",
      "Ethers.js",
      "Web3.py",
      "PostgreSQL",
      "Docker",
    ],
    type: "professional",
  },

  {
    title: "Deviora",
    description:
      "API REST dédiée à la gestion complète d'un pressing : clients, vêtements, commandes, suivi des traitements, facturation et paiements.",
    tags: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Docker",
    ],
    type: "professional",
  },

  {
    title: "INNO TIME",
    description:
      "Plateforme de gestion du pointage et de la paie des employés avec gestion des heures travaillées, heures supplémentaires, retards et génération de rapports.",
    tags: [
      "Python",
      "Django",
      "PostgreSQL",
    ],
    type: "professional",
  },

  {
    title: "Modules Odoo — Gestion métier",
    description:
      "Création et documentation de modules Odoo pour la gestion des pharmacies et d'un laboratoire d'analyses médicales.",
    tags: [
      "Python",
      "Odoo",
      "PostgreSQL",
      "JavaScript",
    ],
    type: "professional",
  },

  {
    title: "Student's Mag",
    description:
      "Migration d'un site Wix vers React.js et développement d'une API destinée à accompagner les étudiants dans leurs démarches de recherche de bourses pour étudier à l'étranger.",
    tags: [
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
    ],
    type: "professional",
  },

  // =====================================================
  // PROJETS PERSONNELS
  // =====================================================

  {
    title: "Architecture Microservices",
    description:
      "Plateforme basée sur une architecture microservices avec plusieurs services backend, communication asynchrone et interface frontend permettant de centraliser les fonctionnalités.",
    tags: [
      "Django",
      "FastAPI",
      "RabbitMQ",
      "Docker",
      "Traefik",
      "React",
      "PostgreSQL",
      "Redis",
    ],
    type: "personal",
  },

  {
    title: "TrackDo",
    description:
      "Application mobile de gestion des dépenses permettant d'enregistrer, suivre et organiser ses dépenses depuis son téléphone.",
    tags: [
      "React Native",
      "Expo",
    ],
    type: "personal",
  },

  {
    title: "Order Management",
    description:
      "Application de gestion des commandes permettant de gérer les commandes, leurs articles, leurs statuts et les différentes opérations métier associées.",
    tags: [
      "React",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
    ],
    type: "personal",
  },

  {
    title: "Gestion de bibliothèque",
    description:
      "Application web de gestion d'une bibliothèque permettant de gérer les livres, les utilisateurs et les opérations de location.",
    tags: [
      "Django",
      "Django REST Framework",
      "Django Tailwind",
      "PostgreSQL",
    ],
    type: "personal",
  },

  {
    title: "Advisers Agency",
    description:
      "Plateforme destinée aux élèves et étudiants à la recherche de bourses d'études.",
    image: imageAdvisersAgency,
    tags: [
      "React",
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
    ],
    liveLink: "https://advisers-agency-view.vercel.app/home",
    type: "personal",
  },

  {
    title: "CRM Recrutement",
    description:
      "Application CRM permettant de gérer les utilisateurs, les clients et les projets avec une séparation entre le frontend et le backend.",
    image: CRM_Recrutement_Frontend,
    tags: [
      "Vue.js",
      "Django",
      "Django REST Framework",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    liveLink: "https://crm-project.adrien-dev.me/",
    codeLink: "https://github.com/adri-2/crm-project.git",
    type: "personal",
  },

  {
    title: "SIMU API",
    description:
      "API backend développée avec Django REST Framework pour gérer différents scénarios et processus métiers.",
    image: Simu_API,
    tags: [
      "Django",
      "Django REST Framework",
      "PostgreSQL",
    ],
    codeLink: "https://github.com/adri-2/simu-api.git",
    type: "personal",
  },

  {
    title: "MangaLib",
    description:
      "Bibliothèque en ligne permettant de gérer et consulter une collection de mangas.",
    image: MangaLib,
    tags: [
      "Vue.js",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
    ],
    codeLink: "https://github.com/adri-2/mangalib.git",
    type: "personal",
  },

  {
    title: "Gestion Location de Livres",
    description:
      "Application Django permettant de gérer les livres et les opérations de location au sein d'une bibliothèque.",
    image: bookapp,
    tags: [
      "Django",
      "Django Tailwind",
      "PostgreSQL",
    ],
    codeLink: "https://github.com/adri-2/gestion-location-livres.git",
    type: "personal",
  },
];
function ProjectCarousel({ projects, type }) {
  // Objet de config recréé une seule fois (pas à chaque render du parent).
  const navigationOptions = useMemo(() => {
    const selector = `.swiper-projects-${type}`;
    return {
      nextEl: `${selector} .swiper-button-next`,
      prevEl: `${selector} .swiper-button-prev`,
    };
  }, [type]);
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
      <div className={`relative swiper-projects-${type}`}>
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
          {projects.map((project) => (
            <SwiperSlide
              key={project.title}
              className="max-w-[280px] rounded-2xl border border-white/10 bg-white/[0.03] px-2 py-6 shadow-md transition-all duration-300 hover:border-primary/50 md:max-w-[340px]"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveLink={project.liveLink}
                codeLink={project.codeLink}
                type={project.type}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
}

function ProjectSection() {
  const [filter, setFilter] = useState("all");
  const professionalProjects = PROJECTS.filter(
    (project) => project.type === "professional"
  );
  const personalProjects = PROJECTS.filter(
    (project) => project.type === "personal"
  );

  const visibleGroups =
    filter === "all"
      ? [["all", PROJECTS]]
      : [[filter, filter === "professional" ? professionalProjects : personalProjects]];

  return (
    <section
      id="projects"
      className="section-shell relative py-20 md:py-28"
      data-aos="fade-up"
    >
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary">
        Sélection de réalisations
      </p>
      <h2 className="section-heading mb-8 text-center text-4xl font-bold text-white md:text-5xl">
        <span className="mr-4 inline-block">Mes</span>
        <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
          Projets
        </span>
      </h2>

      <div className="mb-12 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Filtrer les projets">
        {[
          ["all", "Tous"],
          ["professional", "Professionnels"],
          ["personal", "Personnels"],
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={filter === value}
            onClick={() => setFilter(value)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              filter === value
                ? "border-primary bg-primary text-white shadow-lg shadow-primary/20"
                : "border-white/15 bg-white/[0.03] text-slate-300 hover:border-primary/60 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-16">
        {visibleGroups.map(([type, projects]) => (
          <div key={type} data-aos="fade-up">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px flex-1 bg-white/10" />
              <h3 className="text-center text-lg font-semibold text-white">
                {type === "all"
                  ? "Tous les projets"
                  : type === "professional"
                    ? "Projets professionnels"
                    : "Projets personnels"}
              </h3>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <ProjectCarousel projects={projects} type={type} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(ProjectSection);
