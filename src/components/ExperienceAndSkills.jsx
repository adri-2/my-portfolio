import { memo } from "react";
import { Code2, Database, Monitor, Server, Wrench } from "lucide-react";

import pythonIcon from "@/assets/icons8-python.svg";
import tailwindIcon from "@/assets/icons8-tailwind-css.svg";
import sqlIcon from "@/assets/icons8-sql-48.png";
import postgresIcon from "@/assets/icons8-postgresql.svg";
import mongoIcon from "@/assets/icons8-mongo-db-48.png";

import reactIcon from "@/assets/icons8-react-native.svg";
import htmlIcon from "@/assets/icons8-html-5.svg";
import cssIcon from "@/assets/icons8-logo-css.svg";
import jsIcon from "@/assets/icons8-javascript.svg";

import djangoIcon from "@/assets/icons8-django.svg";
import wordpressIcon from "@/assets/icons8-wordpress.svg";
import nodeIcon from "@/assets/icons8-nodejs.svg";

import githubIcon from "@/assets/icons8-logo-github.svg";
import gitIcon from "@/assets/icons8-git.svg";
import postmanIcon from "@/assets/postman-icon.svg";
import figmaIcon from "@/assets/icons8-figma.svg";
import linuxIcon from "@/assets/icons8-linux-48.png";
import dockerIcon from "@/assets/icons8-logo-docker.svg";
import odooIcon from "@/assets/logo-odoo.png";

const BRAND_ICONS = {
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  reactNative: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  drf: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  gitlab: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  nestjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  sqlite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  solidity: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
  web3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/web3js/web3js-original.svg",
  ethers: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethers/ethers-original.svg",
  redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  rabbitmq: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
  traefik: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/traefik/traefik-plain.svg",
  nginx: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
};

const SKILLS = {
  languages: [
    { id: 1, name: "PYTHON", icon: pythonIcon },
    { id: 2, name: "JAVASCRIPT", icon: jsIcon },
    { id: 3, name: "TYPESCRIPT", icon: BRAND_ICONS.typescript },
    // { id: 4, name: "HTML", icon: htmlIcon },
    // { id: 5, name: "CSS", icon: cssIcon },
    
    // { id: 6, name: "SQL", icon: sqlIcon },
    {id: 29, name: "SOLIDITY", icon: BRAND_ICONS.solidity}
  ],

  frontend: [
    { id: 7, name: "REACT", icon: reactIcon },
    { id: 8, name: "REACT NATIVE", icon: BRAND_ICONS.reactNative },
    { id: 9, name: "TAILWIND CSS", icon: tailwindIcon },
  ],

  backend: [
    { id: 10, name: "DJANGO", icon: djangoIcon },
    { id: 11, name: "DJANGO REST FRAMEWORK", icon: BRAND_ICONS.drf },
    { id: 12, name: "FASTAPI", icon: BRAND_ICONS.fastapi },
    { id: 15, name: "NESTJS", icon: BRAND_ICONS.nestjs },
  ],

  databases: [
    { id: 16, name: "POSTGRESQL", icon: postgresIcon },
    { id: 17, name: "MYSQL", icon: BRAND_ICONS.mysql },
    { id: 18, name: "MONGODB", icon: mongoIcon },
    { id: 19, name: "SQLITE", icon: BRAND_ICONS.sqlite },
  ],

  tools: [
    { id: 20, name: "GIT", icon: gitIcon },
    { id: 21, name: "GITHUB", icon: githubIcon },
    { id: 22, name: "GITLAB", icon: BRAND_ICONS.gitlab },
    { id: 23, name: "DOCKER", icon: dockerIcon },
    { id: 24, name: "LINUX", icon: linuxIcon },
    { id: 25, name: "POSTMAN", icon: postmanIcon },
    { id: 26, name: "FIGMA", icon: figmaIcon },
    { id: 27, name: "WORDPRESS", icon: wordpressIcon },
    { id: 28, name: "REDIS", icon: BRAND_ICONS.redis },
    { id: 29, name: "RABBITMQ", icon: BRAND_ICONS.rabbitmq },
    { id: 30, name: "NGINX", icon: BRAND_ICONS.nginx },
    { id: 31, name: "TRAEFIK", icon: BRAND_ICONS.traefik },
    { id: 32, name: "ODOO", icon: odooIcon },
  ],
};

const CATEGORY_LABELS = {
  languages: "Langages de programmation",
  frontend: "Frontend",
  backend: "Backend",
  databases: "Bases de données",
  tools: "Outils",
};

const CATEGORY_ICONS = {
  languages: Code2,
  frontend: Monitor,
  backend: Server,
  databases: Database,
  tools: Wrench,
};

const EXPERIENCES = [
  {
    id: 1,
    title: "Développeur Backend — Boardgame",
    company: "Projet Boardgame",
    period: "07-2026 - 08-2026",
    description:
      "Développement du backend d'une application mobile de jeux multijoueurs (dames, ludo, échecs), avec matchmaking en temps réel, communication WebSocket, gestion des parties et de leur état, système de mises en coins et organisation de tournois.",
    skills: [
      "NestJS",
      "TypeScript",
      "WebSocket",
      "Socket.IO",
      "PostgreSQL",
      "Docker",
      "Git/GitHub",
      "Postman",
    ],
    skillsIcons: [
      BRAND_ICONS.nestjs,
      BRAND_ICONS.typescript,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      postgresIcon,
      dockerIcon,
      githubIcon,
      postmanIcon,
    ],
  },
  {
    id: 2,
    title: "Stagiaire technique Blockchain",
    company: "SangoTech Sarl",
    period: "05-2026 - 06-2026",
    description:
      "Développement de fonctionnalités blockchain incluant la création et la gestion de wallets, l'intégration de paiements en cryptomonnaies et l'interaction avec des smart contracts.",
    skills: [
      "Python",
      "Solidity",
      "Ethers.js",
      "Web3.py",
      "PostgreSQL",
      "Docker",
      "React",
      "Tailwind CSS",
      "Git/GitHub",
    ],
    skillsIcons: [
      pythonIcon,
      BRAND_ICONS.solidity,
      BRAND_ICONS.ethers,
      BRAND_ICONS.web3,
      postgresIcon,
      dockerIcon,
      reactIcon,
      tailwindIcon,
      githubIcon,
    ],
  },
  {
    id: 3,
    title: "Développeur Backend",
    company: "Deviora",
    period: "01-2026 - 02-2026",
    description:
      "Conception et développement d'une API REST pour la gestion complète d'un pressing, couvrant la gestion des clients, des vêtements, des commandes, du suivi des traitements, de la facturation et des paiements.",
    skills: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Docker", "Git"],
    skillsIcons: [pythonIcon, djangoIcon, BRAND_ICONS.drf, postgresIcon, dockerIcon, gitIcon],
  },
  {
    id: 4,
    title: "Stagiaire Développeur Full Stack",
    company: "Student's Mag",
    period: "05-2025 - 07-2025",
    description:
      "Migration d'un site Wix vers React.js et développement d'une API destinée à accompagner les étudiants dans leurs démarches d'obtention de bourses pour étudier à l'étranger.",
    skills: ["React", "Node.js", "Python", "PostgreSQL", "Git/GitHub"],
    skillsIcons: [reactIcon, nodeIcon, pythonIcon, postgresIcon, githubIcon],
  },
  {
    id: 5,
    title: "Développeur Full Stack",
    company: "Innovations-Groups Sarl",
    period: "12-2024 - 02-2025",
    description:
      "Intervention sur plusieurs projets de l'entreprise : développement et maintenance de la plateforme INNO TIME avec Django, création et documentation de modules Odoo pour la gestion de pharmacies et d'un laboratoire d'analyses médicales, ainsi que conception d'une maquette Figma et réalisation d'un site de location de voitures avec WordPress.",
    skills: [
      "Python",
      "Django",
      "Odoo",
      "PostgreSQL",
      "JavaScript",
      "WordPress",
      "Figma",
      "Git",
    ],
    skillsIcons: [
      pythonIcon,
      djangoIcon,
      odooIcon,
      postgresIcon,
      jsIcon,
      wordpressIcon,
      figmaIcon,
      gitIcon,
    ],
  },
  {
    id: 6,
    title: "Stagiaire Développeur Python/Django",
    company: "Innovations-Groups Sarl",
    period: "03-2024 - 08-2024",
    description:
      "Participation au développement de plusieurs solutions métiers, notamment la plateforme INNO TIME avec Django pour la gestion du pointage et de la paie des employés, ainsi que la création et la documentation de modules Odoo pour la gestion des pharmacies et d'un laboratoire d'analyses médicales.",
    skills: ["Python", "Django", "Odoo", "PostgreSQL", "HTML & CSS", "JavaScript", "Git"],
    skillsIcons: [pythonIcon, djangoIcon, odooIcon, postgresIcon, htmlIcon, jsIcon, gitIcon],
  },
];











function ExperienceAndSkills() {
  return (
    <>
      <section className="section-shell grid grid-cols-1 py-20 text-white md:py-28" id="skills">
        <div>
          <div className="mt-4 md:mt-0  text-left flex flex-col z-10 h-full w-full">
            <h2 className="section-heading mb-4 text-left text-4xl font-bold text-white md:text-5xl">
              Mes <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Compétences</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {Object.entries(SKILLS).map(([key, category]) => {
                const isWideCategory = key === "tools";
                const skillGridClass = isWideCategory
                  ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  : "grid-cols-2 md:grid-cols-2 lg:grid-cols-3";

                return (
                  <div
                    key={key}
                    data-aos="fade-right"
                    className={`surface-card rounded-2xl p-5 transition duration-500 hover:border-primary/60 hover:shadow-[0_1rem_3rem_rgba(254,90,0,0.08)] ${
                      isWideCategory ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 p-3 ring-1 ring-primary/30">
                      {(() => {
                        const CategoryIcon = CATEGORY_ICONS[key] ?? Code2;
                        return (
                          <CategoryIcon
                            className="h-full w-full text-primary"
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                        );
                      })()}
                    </div>
                    <h3 className="text-xl font-bold">{CATEGORY_LABELS[key] ?? key}</h3>
                  </div>

                    <div className={`grid gap-2 ${skillGridClass}`}>
                      {category.map((skill) => (
                        <div key={skill.id} className="flex items-center">
                          <div className="flex h-16 w-full min-w-0 flex-row items-center gap-x-3 rounded-xl border border-white/10 bg-white/4 p-2 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/6">
                            {skill.icon ? (
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                loading="lazy"
                                className="h-8 w-8 object-contain"
                              />
                            ) : (
                              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-[10px] font-bold text-primary">
                                {skill.name.slice(0, 2)}
                              </span>
                            )}
                            <span className="truncate text-sm font-medium text-white">{skill.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-0 top-[110rem] h-full w-full justify-end">
          <span className="flex opacity-20">
            <span className="flex h-80 w-16 rounded-l-full bg-primary blur-2xl"></span>
            <span className="mt-14 flex h-80 w-16 rounded-l-full bg-primary blur-2xl"></span>
          </span>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28" id="experience" data-aos="fade-up">
        <div>
          <h2 className="section-heading mb-12 text-center text-4xl font-bold text-white md:text-5xl">
            Expérience <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Professionnelle</span>
          </h2>

          <div className="relative border-l border-primary/50">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative mb-10 ml-6 group" data-aos="fade-up">
                <span className="absolute left-[-0.45rem] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-[#0c0e14]"></span>
                <div className="surface-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="mb-2 text-sm text-gray-400">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-gray-300">{exp.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={skill}
                        className="flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-white"
                      >
                        {exp.skillsIcons[idx] && (
                          <img
                            src={exp.skillsIcons[idx]}
                            className="mr-1 inline-block h-4 w-4"
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
