import { motion } from "framer-motion";
import { memo } from "react";
import graduationCap from "@/assets/graduation-cap--v1.png";

const EDUCATION = [
  {
    id: 1,
    school: "IUT DE DOUALA",
    program: "Diplôme Universitaire de Technologie (DUT) en Informatique",
    year: "2024",
  },
  {
    id: 2,
    school: "IUT DE DOUALA",
    program: "Licence Professionnelle en Génie Logiciel",
    year: "2025",
  },
];

const BOX_INFOS = [
  { h: "+4", p: "Clients" },
  { h: "3", p: "Ans" },
  { h: "10", p: "Projets" },
  { h: "10", p: "Certifications" },
];

function AboutSection() {
  return (
    <section className="section-shell py-20 text-white md:py-28" id="about">
      <div className="items-center gap-12 md:grid md:grid-cols-2 xl:gap-20">
        <div
          className="mt-4 md:mt-0 text-left flex flex-col z-10 h-full"
          data-aos="flip-right"
        >
          <h2 className="section-heading mb-10 text-center text-4xl font-bold text-white md:text-5xl">
            Parcours{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Scolaire{" "}
            </span>
          </h2>
          <div className="space-y-8 py-8">
            {EDUCATION.map((element) => (
              <div
                key={element.id}
                data-aos="fade-up"
                data-aos-delay={element.id * 100}
                className="surface-card flex w-full items-center rounded-2xl transition duration-500 hover:-translate-y-1 hover:border-primary/60 md:w-[80%]"
              >
                <div className="w-1/4 p-2">
                  <img
                    src={graduationCap}
                    alt="graduation-cap--v1"
                    loading="lazy"
                  />
                </div>
                <div className="w-3/4 pl-4">
                  <h3 className="text-xl font-semibold uppercase text-primary lg:text-2xl">
                    {element.school}
                  </h3>
                  <p className="text-white">{element.program}</p>
                  <p className="text-white">{element.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="mt-4 md:mt-0 text-left flex flex-col z-10 h-full"
          data-aos="flip-right"
        >
          <h2 className="section-heading mt-4 text-left text-4xl font-bold text-white md:text-5xl md:text-center">
            En savoir{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Plus sur{" "}
            </span>
            Moi
          </h2>
          <p className="mt-8 max-w-xl py-4 text-base leading-8 text-slate-300 lg:text-lg">
            Je suis un développeur full-stack passionné par la création
            d’applications web performantes et visuellement soignées. Je
            combine Python, Vue.js, React et Figma pour concevoir des
            solutions robustes et intuitives.
          </p>

          <div className="grid max-w-lg grid-cols-2 gap-3 pt-8 sm:grid-cols-4">
            {BOX_INFOS.map((box_infor, idx) => (
              <motion.div
                key={idx}
                className="surface-card rounded-2xl p-3 transition duration-300 hover:-translate-y-1 hover:border-primary/60"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <h3 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl">
                  {box_infor.h}
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  {box_infor.p}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutSection);
