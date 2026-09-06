import { memo, useState } from "react";

function ProjectCard({
  title = "Project Title",
  description = "Project Description",
  image,
  tags = ["DJANGO", "TAILWIND CSS", "VUE.JS"],
  liveLink = null,
  codeLink = null,
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="surface-card group relative max-w-sm overflow-hidden rounded-2xl transition duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_1rem_3rem_rgba(254,90,0,0.12)]">
      {/* image section */}
      <figure>
        {!imageLoaded && (
          <div className="w-full h-48 bg-gray-800 animate-pulse rounded"></div>
        )}
        <img
          src={image}
          alt={title}
          className={`h-52 w-full object-cover transition duration-700 ease-out group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </figure>
      {/* content section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-gradient-to-t from-[#0c0e14] via-transparent to-transparent opacity-70" />
      <section className="relative px-6 pb-3 pt-5">
        <header>
          <h3 className="m-2 text-xl font-bold tracking-tight text-white">{title}</h3>
        </header>
        <p className="text-sm leading-6 text-slate-300">{description}</p>
      </section>
      {/* tags section */}
      <footer className="px-6 pb-2 pt-4">
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[0.68rem] text-slate-300"
            >
              #{tag}
            </li>
          ))}
        </ul>
      </footer>
      {/* actions section */}
      <div className="flex items-center justify-between px-6 pb-5 pt-2">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-orange-500"
          >
            Live Demo
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.03] hover:border-primary hover:text-primary"
          >
            View Code
          </a>
        )}
      </div>
    </article>
  );
}

// memo + comparaison superficielle : évite de re-rendre chaque carte quand
// Swiper re-rend le carrousel (ex: pendant le swipe) sans que ses props
// n'aient changé.
export default memo(ProjectCard);
