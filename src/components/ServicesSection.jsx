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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Services
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 pt-10 sm:grid-cols-2 md:pt-14">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            data-aos="fade-up"
            data-aos-delay={service.id * 100}
            className="surface-card group rounded-2xl px-7 py-8 transition duration-500 hover:-translate-y-2 hover:border-primary/70 hover:shadow-[0_1rem_3rem_rgba(254,90,0,0.1)] md:py-10"
          >
            <div className="mx-auto h-16 text-center xl:h-28 xl:w-28 mb-16 md:mb-0">
              <img
                src={service.icon}
                alt={service.name}
                loading="lazy"
                className="h-56 object-contain transition duration-500 group-hover:scale-105 md:h-28"
              />
            </div>
            <div className="text-center flex flex-col justify-end md:py-0 md:my-4 py-12 my-8">
              <h3 className="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary lg:text-xl">
                {service.name}
              </h3>
              <p className="pt-4 text-sm leading-7 text-slate-300 md:text-base">
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
