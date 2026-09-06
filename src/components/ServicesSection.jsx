import { memo } from "react";
import backendIcon from "@/assets/Developer back c.png";
import frontendIcon from "@/assets/Developer font.png";
import figmaIcon from "@/assets/wireframe c.png";
import dataIcon from "@/assets/Data extraction c.png";

const SERVICES = [
  {
    id: 1,
    icon: backendIcon,
    name: "DEVELOPMENT BACKEND",
    description:
      "Python / Django / Flask : Développement d’API performantes et sécurisées.",
  },
  {
    id: 2,
    icon: frontendIcon,
    name: "DEVELOPMENT FRONTEND",
    description:
      "Conception d’interfaces réactives, performantes intuitives et esthétiques. Utilisation de Vue.js et React.",
  },
  {
    id: 3,
    icon: figmaIcon,
    name: "CREATION D'INTERFACE FIGMA",
    description: "Conception d’interfaces intuitives et esthétiques.",
  },
  {
    id: 4,
    icon: dataIcon,
    name: "DATA ANALYSIS",
    description: "Analyse de données et modélisation avec Python.",
  },
];

function ServicesSection() {
  return (
    <section className="section-shell py-20 text-white md:py-28" id="services">
      <div className="px-4 xl:pl-16">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary">Ce que je construis</p>
        <h2 className="section-heading text-center text-4xl font-bold text-white md:text-5xl">
          Mes{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
            Services
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 px-3 pt-8 sm:grid-cols-2 sm:px-6 md:gap-5 md:px-10 md:pt-10 xl:px-16">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            data-aos="fade-up"
            data-aos-delay={service.id * 100}
            className="surface-card group flex min-h-72 flex-col rounded-2xl px-5 py-5 transition duration-500 hover:-translate-y-2 hover:border-primary/70 hover:shadow-[0_1rem_3rem_rgba(254,90,0,0.1)] sm:min-h-76 sm:px-6 sm:py-6"
          >
            <div className="mx-auto flex h-24 w-24 items-center justify-center text-center sm:h-28 sm:w-28">
              <img
                src={service.icon}
                alt={service.name}
                loading="lazy"
                className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center text-center">
              <h3 className="pt-4 text-base font-semibold uppercase text-transparent bg-clip-text bg-linear-to-tr from-primary to-secondary sm:text-lg">
                {service.name}
              </h3>
              <p className="pt-3 text-sm leading-6 text-slate-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(ServicesSection);
