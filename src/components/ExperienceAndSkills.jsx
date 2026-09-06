import { memo } from "react";

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

// Données statiques hors composant : pas de recréation à chaque render,
// contrairement à un ref() réinitialisé dans le composant.
const SKILLS = {
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
};

const CATEGORY_LABELS = {
  languages: "Langages de Programmation",
  frontend: "Frontend",
  backend: "Backend",
  tools: "Outils",
};

const CATEGORY_ICONS = {
  languages: jsIcon,
  frontend: reactIcon,
  backend: djangoIcon,
  tools: githubIcon,
};

const EXPERIENCES = [
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
    id: 5,
    title: "Développeur Full Stack",
    company: "Student's Mag",
    period: "02-2024 - 03-2025",
    description:
      "Migration d'un site wifix vers React js et creation de l'api pour l'aider a l'obtention de bourses pour l'etudiant qui veulent etudier a l'etranger.",
    skills: ["React", "Node.js", "Python", "PostgreSQL", "Git"],
    skillsIcons: [reactIcon, nodeIcon, pythonIcon, postgresIcon, gitIcon],
  },
];

function ExperienceAndSkills() {
  return (
    <>
      <section className="section-shell grid grid-cols-1 py-20 text-white md:py-28" id="skills">
       <div>
          <div className="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-full">
            <h2 className="section-heading mb-4 text-left text-4xl font-bold text-white md:text-5xl">
              Mes{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Compétences
              </span>
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {Object.entries(SKILLS).map(([key, category]) => (
                <div
                  key={key}
                  data-aos="fade-right"
                    className="surface-card rounded-2xl p-5 transition duration-500 hover:border-primary/60 hover:shadow-[0_1rem_3rem_rgba(254,90,0,0.08)]"
                >
                  <div className="flex gap-x-4 items-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 p-3 ring-1 ring-primary/30">
                      <img
                        src={CATEGORY_ICONS[key]}
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <h1 className="text-xl font-bold">
                      {CATEGORY_LABELS[key] ?? key}
                    </h1>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {category.map((skill) => (
                        <div key={skill.id} className="flex items-center">
                        <div className="flex h-16 w-full min-w-0 flex-row items-center gap-x-3 rounded-xl border border-white/10 bg-white/[0.04] p-2 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/[0.06]">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            loading="lazy"
                            className="w-8 h-8 object-contain"
                          />
                          <span className="truncate text-sm font-medium text-white">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-[110rem] h-full w-full justify-end pointer-events-none">
          <span className="flex opacity-20">
            <span className="w-16 h-80 rounded-l-full flex bg-primary blur-2xl"></span>
            <span className="w-16 h-80 rounded-l-full flex bg-primary blur-2xl mt-14"></span>
          </span>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28" id="experience" data-aos="fade-up">
        <div>
          <h2 className="section-heading mb-12 text-center text-4xl font-bold text-white md:text-5xl">
            Expérience{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Professionnelle
            </span>
          </h2>
          <div className="relative border-l border-primary/50">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="mb-10 ml-6 relative group" data-aos="fade-up">
                <span className="absolute -left-[0.45rem] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-[#0c0e14]"></span>
                <div className="surface-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-gray-300">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={skill}
                        className="flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-white"
                      >
                        {exp.skillsIcons[idx] && (
                          <img
                            src={exp.skillsIcons[idx]}
                            className="inline-block w-4 h-4 mr-1"
                            alt=""
                            loading="lazy"
                          />
                        )}
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(ExperienceAndSkills);
