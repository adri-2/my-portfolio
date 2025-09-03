<template>
  <section class="text-white mt-18 pb-10 grid grid-cols-1" id="skills">
    <div class="py-4 xl:px-16">
      <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-full">
        <h2 class="text-4xl font-bold text-white text-left mb-4 pl-4">
          Mes
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            Compétences
          </span>
        </h2>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          <div
            v-for="(category, key) in skills"
            :key="key"
            data-aos="fade-right"
            class="bg-[#111A3E] rounded-xl shadow-lg p-4 border-2 border-primary"
          >
            <div class="flex gap-x-4 items-center mb-4" data-aos="fade-right">
              <div
                class="rounded-full bg-blue-500 p-4 w-12 h-12 flex items-center justify-center"
                data-aos="fade-right"
              >
                <i v-if="key === 'languages'" class="fa-solid fa-code"></i>
                <i
                  v-else-if="key === 'frontend'"
                  class="fa-solid fa-desktop"
                ></i>
                <i v-else-if="key === 'backend'" class="fa-solid fa-server"></i>
                <i v-else-if="key === 'tools'" class="fa-solid fa-toolbox"></i>
              </div>
              <h1 class="text-xl font-bold">
                {{
                  key === "languages"
                    ? "Langages de Programmation"
                    : key === "frontend"
                    ? "Frontend"
                    : key === "backend"
                    ? "Backend"
                    : key === "tools"
                    ? "Outils"
                    : key
                }}
              </h1>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <div
                v-for="skill in category"
                :key="skill.id"
                class="flex items-center"
                data-aos="fade-right"
              >
                <div
                  class="flex flex-row items-center gap-x-4 w-full h-16 border-2 border-[#1f1641] rounded-lg p-2 bg-gradient-to-r from-primary to-secondary"
                >
                  <img
                    :src="skill.icon"
                    alt=""
                    class="w-8 h-8 object-contain"
                  />
                  <span class="text-white font-normal text-md text-nowrap">
                    {{ skill.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute right-0 top-[110rem] h-full w-full justify-end pointer-events-none"
    >
      <span class="flex opacity-20">
        <span class="w-16 h-80 rounded-l-full flex bg-primary blur-2xl"></span>
        <span
          class="w-16 h-80 rounded-l-full flex bg-[#f88fc2] blur-2xl mt-14"
        ></span>
      </span>
    </div>
  </section>

  <section class="py-16" id="experience" data-aos="fade-up">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-12 text-white">
        Expérience
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >
          Professionnelle
        </span>
      </h2>
      <div class="relative border-l-4 border-primary">
        <div
          v-for="exp in experiences"
          :key="exp.id"
          class="mb-10 ml-6 relative group"
          data-aos="fade-up"
        >
          <span
            class="absolute -left-3 top-1 w-6 h-6 bg-primary rounded-full border-4 border-[#111A3E]"
          ></span>
          <div
            class="bg-[#111A3E] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1f1641]"
          >
            <h3 class="text-xl font-semibold text-white">{{ exp.title }}</h3>
            <p class="text-sm text-gray-400 mb-2">
              {{ exp.company }} • {{ exp.period }}
            </p>
            <p class="text-gray-300">{{ exp.description }}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              <template v-for="(skill, idx) in exp.skills" :key="skill">
                <span
                  class="flex items-center px-3 py-1 text-sm bg-gradient-to-r from-primary to-secondary text-white rounded-full"
                >
                  <img
                    v-if="exp.skillsIcons[idx]"
                    :src="exp.skillsIcons[idx]"
                    class="inline-block w-4 h-4 mr-1"
                    alt=""
                  />
                  {{ skill }}
                </span>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Imports
import pythonIcon from "@/assets/icons8-python.svg";
import tailwindIcon from "@/assets/icons8-tailwind-css.svg";
import sqlIcon from "@/assets/icons8-sql-48.png";
import mysqlIcon from "@/assets/icons8-logo-de-mysql.svg";
import postgresIcon from "@/assets/icons8-postgresql.svg";
import mongoIcon from "@/assets/icons8-mongo-db-48.png";

import vueIcon from "@/assets/icons8-vue-js.svg";
import reactIcon from "@/assets/icons8-react-native.svg";
import htmlIcon from "@/assets/icons8-html-5.svg";
import cssIcon from "@/assets/icons8-logo-css.svg";
import jsIcon from "@/assets/icons8-javascript.svg";

import djangoIcon from "@/assets/icons8-django.svg";
import wordpressIcon from "@/assets/icons8-wordpress.svg";
import nodeIcon from "@/assets/icons8-nodejs.svg";
import expressIcon from "@/assets/icons8-express-js.svg";

import githubIcon from "@/assets/icons8-logo-github.svg";
import gitIcon from "@/assets/icons8-git.svg";
import postmanIcon from "@/assets/postman-icon.svg";
import canvaIcon from "@/assets/icons8-toile.svg";
import figmaIcon from "@/assets/icons8-figma.svg";
import linuxIcon from "@/assets/icons8-linux-48.png";
import dockerIcon from "@/assets/icons8-logo-docker.svg";
import powerBiIcon from "@/assets/icons8-puissance-bi-2021.svg";
import odooIcon from "@/assets/logo-odoo.png";

// import pandasIcon from "@/assets/icons8-pandas.svg"; // Ajouté pour Data Analyst

const skills = ref({
  languages: [
    { id: 1, name: "PYTHON", icon: pythonIcon },
    { id: 3, name: "TAILWIND CSS", icon: tailwindIcon },
    { id: 4, name: "SQL", icon: sqlIcon },
    { id: 5, name: "MYSQL", icon: mysqlIcon },
    { id: 6, name: "POSTGRESQL", icon: postgresIcon },
    { id: 21, name: "MONGODB", icon: mongoIcon },
  ],
  frontend: [
    { id: 7, name: "VUE JS", icon: vueIcon },
    { id: 8, name: "REACT JS", icon: reactIcon },
    { id: 9, name: "HTML", icon: htmlIcon },
    { id: 10, name: "CSS", icon: cssIcon },
    { id: 11, name: "JAVASCRIPT", icon: jsIcon },
  ],
  backend: [
    { id: 12, name: "DJANGO", icon: djangoIcon },
    { id: 14, name: "WORDPRESS", icon: wordpressIcon },
    { id: 15, name: "NODE JS", icon: nodeIcon },
    { id: 16, name: "EXPRESS JS", icon: expressIcon },
  ],
  tools: [
    { id: 15, name: "GITHUB", icon: githubIcon },
    { id: 16, name: "GIT", icon: gitIcon },
    { id: 22, name: "POSTMAN", icon: postmanIcon },
    { id: 17, name: "CANVA", icon: canvaIcon },
    { id: 18, name: "FIGMA", icon: figmaIcon },
    { id: 19, name: "LINUX", icon: linuxIcon },
    { id: 20, name: "DOCKER", icon: dockerIcon },
    { id: 23, name: "POWER BI", icon: powerBiIcon },
  ],
});

const experiences = ref([
  {
    id: 1,
    title: "Développeur Backend",
    company: "Innovations-Groups",
    period: "03-2024 - 07-2024",
    description:
      "Développement d'une plateforme(INNO TIME) de gestion de paie des employés avec Django et optimisation des performances backend.",
    skills: ["Python", "Django", "PostgreSQL", "HTML & CSS", "Git"],
    skillsIcons: [pythonIcon, djangoIcon, postgresIcon, htmlIcon, gitIcon],
  },
  {
    id: 2,
    title: "Développeur Odoo",
    company: "Innovations-Groups",
    period: "12-2024 - 01-2025",
    description:
      "Creation et Documentation de modules Odoo pour la gestion des pharmacies, et une pour la gestion d'un laboratoire d'analyses médicales.",
    skills: ["Python", "Odoo", "PostgreSQL", "HTML & CSS", "Javascript"],
    skillsIcons: [pythonIcon, odooIcon, postgresIcon, htmlIcon, jsIcon],
  },
  {
    id: 3,
    title: "Développeur Backend",
    company: "Innovations-Groups",
    period: "01-2024 - 02-2025",
    description: "Mise a jour des fonctionnalites de la plateforme INNO TIME ",
    skills: ["Python", "Django", "PostgreSQL", "HTML & CSS", "Git"],
    skillsIcons: [pythonIcon, djangoIcon, postgresIcon, htmlIcon, gitIcon],
  },
  {
    id: 4,
    title: "Développeur WordPress",
    company: "Innovations-Groups",
    period: "02-2024 - 03-2025",
    description:
      "Conception d'une maquette figma et réalisation d'un site de location de voiture avec wordpress.",
    skills: ["WordPress", "Figma", "HTML & CSS", "Canva"],
    skillsIcons: [wordpressIcon, figmaIcon, htmlIcon, canvaIcon],
  },
  {
    id: 4,
    title: "Développeur Full Stack",
    company: "Student's Mag",
    period: "02-2024 - 03-2025",
    description:
      "Migration d'un site wifix vers React js et creation de l'api pour l'aider a l'obtention de bourses pour l'etudiant qui veulent etudier a l'etranger.",
    skills: ["React", "Node.js", "Python", "PostgreSQL", "Git"],
    skillsIcons: [reactIcon, nodeIcon, pythonIcon, postgresIcon, gitIcon],
  },
]);
</script>
