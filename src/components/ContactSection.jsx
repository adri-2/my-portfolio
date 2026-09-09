import { memo, useCallback, useState, useMemo } from "react";
import emailjs from "@emailjs/browser";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };
const MIN_MESSAGE_LENGTH = 10;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [errors, setErrors] = useState({});

  const prefersReducedMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Le nom est requis";
    if (!form.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!EMAIL_REGEX.test(form.email)) {
      newErrors.email = "Email invalide";
    }
    if (!form.subject.trim()) newErrors.subject = "Le sujet est requis";
    if (!form.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (form.message.trim().length < MIN_MESSAGE_LENGTH) {
      newErrors.message = `Le message doit contenir au moins ${MIN_MESSAGE_LENGTH} caractères`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form]);

  const handleChange = useCallback((e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  }, [errors]);

  const sendEmail = useCallback(
    async (e) => {
      e.preventDefault();

      if (!validateForm()) {
        setStatus(null);
        return;
      }

      setSending(true);
      setStatus(null);

      try {
        await emailjs.send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
          },
          import.meta.env.VITE_PUBLIC_KEY
        );
        setStatus("success");
        setForm(INITIAL_FORM);
        setErrors({});
      } catch (err) {
        console.error("Email send error:", err);
        setStatus("error");
      } finally {
        setSending(false);
      }
    },
    [form, validateForm]
  );

  return (
    <section
      className="section-shell min-h-screen py-20 text-white md:py-28"
      id="contact"
      style={
        prefersReducedMotion ? { animation: "none" } : {}
      }
    >
      <div className="surface-card relative mx-auto max-w-5xl overflow-hidden rounded-3xl p-6 sm:p-8 xl:p-16">
        <div className="background-ring background-ring--two pointer-events-none absolute -right-16 top-10 opacity-40"></div>

        <div className="mb-12 text-center">
          <h2 className="section-heading mb-4 text-4xl font-bold text-white md:text-5xl">
            Travaillons{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              ensemble
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Vous avez un projet, une opportunité ou simplement une question ? N'hésitez pas à me contacter. Je suis disponible pour des opportunités professionnelles, des projets freelance et des collaborations techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-8 justify-center">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Email */}
              <a
                href="mailto:adriensani237@gmail.com"
                className="flex flex-col items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 sm:p-6 transition hover:bg-primary/10 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20"
                title="Envoyer un email"
              >
                <div className="rounded-full border border-primary/40 bg-primary/10 p-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                    alt="Email"
                    className="w-6 h-6"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-sm sm:text-base">Email</h4>
                  <p className="text-xs sm:text-sm text-gray-400">adriensani237@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/adrien-sani-673b7b394/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 sm:p-6 transition hover:bg-primary/10 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20"
                title="Voir mon profil LinkedIn"
              >
                <div className="rounded-full border border-primary/40 bg-primary/10 p-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-sm sm:text-base">LinkedIn</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Adrien Sani</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/adri-2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 sm:p-6 transition hover:bg-primary/10 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20"
                title="Voir mon profil GitHub"
              >
                <div className="rounded-full border border-primary/40 bg-primary/10 p-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                    alt="GitHub"
                    className="w-6 h-6"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-sm sm:text-base">GitHub</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Mon code</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/+237678846493"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 sm:p-6 transition hover:bg-primary/10 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20"
                title="Me contacter sur WhatsApp"
              >
                <div className="rounded-full border border-primary/40 bg-primary/10 p-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                    alt="WhatsApp"
                    className="w-6 h-6"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-sm sm:text-base">WhatsApp</h4>
                  <p className="text-xs sm:text-sm text-gray-400">(+237) 678846493</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <span className="absolute top-0 right-0 w-1/2 h-2 border-t-2 border-r-2 border-primary rounded-tr-xl"></span>
            <span className="absolute bottom-0 left-0 w-1/2 h-2 border-b-2 border-l-2 border-secondary rounded-bl-xl"></span>
            <form
              onSubmit={sendEmail}
              className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-black/10 p-6 shadow-lg sm:p-8"
              noValidate
            >
              {/* Name */}
              <div>
                <label className="block text-gray-400 mb-2 font-medium" htmlFor="name">
                  Nom <span className="text-primary">*</span>
                </label>
                <input
                  value={form.name}
                  onChange={handleChange}
                  id="name"
                  type="text"
                  className={`w-full rounded-lg border bg-white/[0.06] p-3 text-white placeholder:text-slate-500 transition focus:outline-none ${
                    errors.name
                      ? "border-red-400 focus:border-red-400"
                      : "border-white/10 focus:border-secondary focus:bg-white/[0.1]"
                  }`}
                  placeholder="Votre nom complet"
                  aria-required="true"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-400 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-400 mb-2 font-medium" htmlFor="email">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  value={form.email}
                  onChange={handleChange}
                  id="email"
                  type="email"
                  className={`w-full rounded-lg border bg-white/[0.06] p-3 text-white placeholder:text-slate-500 transition focus:outline-none ${
                    errors.email
                      ? "border-red-400 focus:border-red-400"
                      : "border-white/10 focus:border-secondary focus:bg-white/[0.1]"
                  }`}
                  placeholder="votre.email@exemple.com"
                  aria-required="true"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-400 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-400 mb-2 font-medium" htmlFor="subject">
                  Sujet <span className="text-primary">*</span>
                </label>
                <input
                  value={form.subject}
                  onChange={handleChange}
                  id="subject"
                  type="text"
                  className={`w-full rounded-lg border bg-white/[0.06] p-3 text-white placeholder:text-slate-500 transition focus:outline-none ${
                    errors.subject
                      ? "border-red-400 focus:border-red-400"
                      : "border-white/10 focus:border-secondary focus:bg-white/[0.1]"
                  }`}
                  placeholder="De quoi s'agit-il ?"
                  aria-required="true"
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-red-400 text-sm mt-1">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-400 mb-2 font-medium" htmlFor="message">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={handleChange}
                  id="message"
                  rows={4}
                  className={`w-full rounded-lg border bg-white/[0.06] p-3 text-white placeholder:text-slate-500 transition resize-none focus:outline-none ${
                    errors.message
                      ? "border-red-400 focus:border-red-400"
                      : "border-white/10 focus:border-secondary focus:bg-white/[0.1]"
                  }`}
                  placeholder="Parlez-moi de votre projet..."
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
                <p className="text-gray-500 text-xs mt-1">
                  Minimum {MIN_MESSAGE_LENGTH} caractères
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={sending}
                className="rounded-lg bg-primary py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-orange-500 hover:shadow-lg hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:scale-100 disabled:hover:shadow-none"
                aria-busy={sending}
              >
                {sending ? "Envoi en cours..." : "Envoyer le message"}
              </button>

              {/* Success Message */}
              {status === "success" && (
                <div
                  className="rounded-lg bg-green-500/10 border border-green-500/30 p-4 text-green-400 text-sm text-center"
                  role="status"
                  aria-live="polite"
                >
                  ✓ Message envoyé avec succès ! Je vous répondrai très bientôt.
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div
                  className="rounded-lg bg-red-500/10 border border-red-500/30 p-4 text-red-400 text-sm text-center"
                  role="alert"
                  aria-live="assertive"
                >
                  ✕ Une erreur s'est produite. Veuillez réessayer ou me contacter directement par email.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ContactSection);
