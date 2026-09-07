import { memo, useState } from "react";

function ProjectCard({
  title = "Project Title",
  description = "Project Description",
  image,
  tags = ["DJANGO", "TAILWIND CSS", "VUE.JS"],
  liveLink = null,
  codeLink = null,
  type = "personal",
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="surface-card group relative max-w-sm overflow-hidden rounded-2xl transition duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_1rem_3rem_rgba(254,90,0,0.12)]">
      {/* image section */}
      <figure>
        {image ? (
          <>
            {!imageLoaded && (
              <div className="h-48 w-full animate-pulse rounded bg-gray-800" />
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
          </>
        ) : (
          <div className="flex h-52 items-center justify-center bg-gradient-to-br from-primary/20 via-[#191d28] to-[#0c0e14]">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80">
              {type === "professional" ? "Backend / API" : "Full-stack"}
            </span>
          </div>
        )}
      </figure>
      {/* content section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-gradient-to-t from-[#0c0e14] via-transparent to-transparent opacity-70" />
      <section className="relative px-6 pb-3 pt-5">
        <header className="flex items-start justify-between gap-3">
          <h3 className="m-2 text-xl font-bold tracking-tight text-white">{title}</h3>
          <span className="mt-2 shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-wide text-primary">
            {type === "professional" ? "Professionnel" : "Personnel"}
          </span>
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
