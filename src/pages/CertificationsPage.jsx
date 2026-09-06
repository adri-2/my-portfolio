import { memo, useCallback, useState } from "react";

const CERTIFICATIONS = [
  {
    title: "Certification Python",
    issuer: "OpenClassrooms",
    date: "Juin 2024",
    image: "/medias/certif-python.png",
  },
  {
    title: "Certification Web",
    issuer: "Udemy",
    date: "Mai 2023",
    image: "/medias/certif-web.png",
  },
  {
    title: "Certification Data",
    issuer: "Coursera",
    date: "Mars 2022",
    image: "/medias/certif-data.png",
  },
];

function CertificationsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = CERTIFICATIONS[currentIndex];

  const prev = useCallback(() => {
    setCurrentIndex(
      (i) => (i - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length
    );
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % CERTIFICATIONS.length);
  }, []);

  const goTo = useCallback((idx) => setCurrentIndex(idx), []);

  return (
    <section className="min-h-[500px] md:min-h-screen sm:min-h-44 py-16 px-4 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-2xl mx-auto">
        <button
          onClick={prev}
          aria-label="Certification précédente"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex justify-center items-center bg-primary text-white rounded-full p-3 shadow-lg hover:scale-110 transition z-10"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="overflow-hidden rounded-xl shadow-xl bg-[#1f1641] flex items-center justify-center h-80 sm:h-96 md:h-[28rem]">
          <div
            key={currentIndex}
            className="flex flex-col items-center justify-center w-full h-full p-8 animate-[fadeIn_0.5s_ease-in-out]"
          >
            <img
              src={current.image}
              alt={`Certification ${current.title}`}
              loading="lazy"
              className="sm:w-72 w-32 h-32 sm:h-72 object-contain mb-6 rounded-lg border-2 border-primary bg-white transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-2xl font-semibold text-white mb-2">
              {current.title}
            </h3>
            <p className="text-md text-gray-300 mb-2">{current.issuer}</p>
            <span className="text-sm text-secondary">{current.date}</span>
          </div>
        </div>

        <button
          onClick={next}
          aria-label="Certification suivante"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex justify-center items-center bg-secondary text-white rounded-full p-3 shadow-lg hover:scale-110 transition z-10"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="flex gap-2 justify-center mt-8">
        {CERTIFICATIONS.map((cert, idx) => (
          <span
            key={cert.title}
            onClick={() => goTo(idx)}
            className={`w-4 h-4 rounded-full cursor-pointer border-2 transition duration-300 ${
              currentIndex === idx
                ? "bg-primary border-secondary scale-110"
                : "bg-[#1f1641] border-primary hover:bg-primary/40"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default memo(CertificationsPage);
