import { memo } from "react";

const TESTIMONIALS = [
  {
    name: "Jane Doe",
    role: "CEO, Example Inc.",
    text: "This portfolio is outstanding! Highly recommended.",
  },
  {
    name: "John Smith",
    role: "CTO, TechCorp",
    text: "Professional and creative work. Will collaborate again.",
  },
  {
    name: "Emily White",
    role: "Designer, Creatives",
    text: "Amazing attention to detail and great communication.",
  },
];

function TestimonialsSection() {
  return (
    <section
      className="section-shell relative my-10 overflow-hidden rounded-3xl border border-white/10 bg-[#13161f] py-16 shadow-lg md:my-20"
      id="testimonials"
    >
      {/* Decorative half borders */}
      <span className="absolute top-0 right-0 w-1/2 h-4 border-t-4 border-r-4 border-primary rounded-tr-2xl"></span>
      <span className="absolute bottom-0 left-0 w-1/2 h-4 border-b-4 border-l-4 border-secondary rounded-bl-2xl"></span>

      {/* Background shapes */}
      <div className="absolute -left-20 top-0 flex flex-col gap-10 opacity-20 pointer-events-none">
        <span className="w-16 h-[332px] rounded-full bg-primary blur-2xl"></span>
        <span className="w-16 h-[332px] rounded-full bg-primary blur-2xl"></span>
      </div>

      <h2 className="section-heading mb-10 text-center text-4xl font-bold text-white md:text-5xl">
        Témoignages{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Clients
        </span>
      </h2>

      <div className="flex flex-row flex-wrap gap-8 justify-center">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 120}
            className="surface-card relative flex max-w-xs flex-col justify-between rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50"
          >
            <span className="absolute top-0 right-0 w-1/2 h-2 border-t-2 border-r-2 border-primary rounded-tr-xl"></span>
            <span className="absolute bottom-0 left-0 w-1/2 h-2 border-b-2 border-l-2 border-secondary rounded-bl-xl"></span>
            <p className="text-lg text-gray-300 italic mb-6">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-4">
              <div>
                <span className="font-semibold text-white block">
                  {testimonial.name}
                </span>
                <span className="text-sm text-gray-400">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);
