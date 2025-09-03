<template>
  <section
    id="projects"
    class="relative w-[95%] px-4 md:px-16 mx-auto py-16 md:py-24"
  >
    <h2 class="text-4xl font-bold text-center mb-12 text-white">
      <span class="inline-block mb-2">Mes</span>
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >Projets</span
      >
    </h2>

    <div class="relative">
      <button
        class="swiper-button-prev absolute top-1/2 left-[-1rem] md:left-[-2rem] transform -translate-y-1/2 z-10 bg-primary bg-opacity-75 hover:bg-yellow-600 text-white p-3 md:p-4 shadow-lg rounded-full transition-all duration-300"
        aria-label="Previous Project"
      >
        <i class="fas fa-chevron-left hidden"></i>
      </button>
      <button
        class="swiper-button-next absolute top-1/2 right-[-1rem] md:right-[-2rem] transform -translate-y-1/2 z-10 bg-primary bg-opacity-75 hover:bg-yellow-600 text-white p-3 md:p-4 shadow-lg rounded-full transition-all duration-300"
        aria-label="Next Project"
      >
        <i class="fas fa-chevron-right hidden"></i>
      </button>
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :navigation="navigationOptions"
        :loop="true"
        :pagination="{ clickable: true }"
        :modules="swiperModules"
        class="max-w-full mt-8 md:mt-16"
      >
        <swiper-slide
          class="max-w-[280px] md:max-w-[340px] px-2 py-6 rounded-md shadow-md bg-gray-800 bg-opacity-75 hover:bg-gray-700 transition-all duration-300"
          v-for="(project, index) in projects"
          :key="index"
        >
          <ProjectCard
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :tags="project.tags"
            :liveLink="project.liveLink"
            :codeLink="project.codeLink"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { ref } from "vue";

import image2 from "@/assets/projets/api.png";
import imageAdvisersAgency from "@/assets/projets/AdvisersAgency.png";
import CRM_Recrutement_Frontend from "@/assets/projets/CRMRecrutementFrontend.png";
import Portfolio from "@/assets/projets/Portfolio.png";
import Simu_API from "@/assets/projets/SimuAPI.png";
import MangaLib from "@/assets/projets/MangaLib.png";
import bookapp from "@/assets/projets/bookapp.png";

const navigationOptions = {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
};

const swiperModules = [EffectCoverflow, Navigation, Pagination];

const projects = ref([
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
    // codeLink: "https://github.com/adri-2/advisers-agency-view.git",
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
    description:
      "Mon portfolio personnel développé avec Vue.js et TailwindCSS.",
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
    description:
      "Bibliothèque en ligne pour la gestion et la lecture de mangas.",
    image: MangaLib,
    tags: ["Vue.js", "Django", "Django Rest Framework", "PostgreSQL"],
    liveLink: "",
    codeLink: "https://github.com/adri-2/mangalib.git",
  },
  {
    title: "WeatherApp API",
    description:
      "API météo pour récupérer les données climatiques en temps réel.",
    image: image2,
    tags: ["Django", "Django Rest Framework", "PostgreSQL"],
    liveLink: "",
    codeLink: "https://github.com/adri-2/weatherapp-api.git",
  },
]);
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  width: 60px;
  padding: 10px;
  height: 60px;
  /* padding: 20px; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white; /* Assurez-vous que la couleur de la flèche est visible */
}
</style>
