import { memo, useCallback, useState } from "react";
import emailjs from "@emailjs/browser";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = useCallback((e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }, []);

  const sendEmail = useCallback(
    async (e) => {
      e.preventDefault();
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
            message: `Nom: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`,
          },
          import.meta.env.VITE_PUBLIC_KEY
        );
        setStatus("success");
        setForm(INITIAL_FORM);
      } catch (err) {
        console.error(err);
        setStatus("error");
      } finally {
        setSending(false);
      }
    },
    [form]
  );

  return (
    <section className="section-shell min-h-screen py-20 text-white md:py-28" id="contact">
      <div className="surface-card relative mx-auto max-w-5xl overflow-hidden rounded-3xl p-6 sm:p-8 xl:p-16">
        <div className="background-ring background-ring--two pointer-events-none absolute -right-16 top-10 opacity-40"></div>

        <h2 className="section-heading mb-10 text-center text-4xl font-bold text-white md:text-5xl">
          Contactez{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
            Moi
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-8 justify-center">
            <p className="text-[#adb7be] mb-4 text-lg">
              N'hésitez pas à me contacter pour une collaboration. Je suis
              toujours ouvert aux nouvelles opportunités !
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full border border-primary/30 bg-primary/10 p-3 shadow-lg shadow-primary/10">
                  <a
                    href="https://wa.me/+237678846493"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                      alt="WhatsApp"
                      className="w-7 h-7"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Téléphone</h4>
                  <a
                    href="https://wa.me/+237678846493"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-[#adb7be]">(+237) 678846493</p>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full border border-primary/30 bg-primary/10 p-3 shadow-lg shadow-primary/10">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="LinkedIn"
                    className="w-7 h-7"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">LinkedIn</h4>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/adrien-sani-2890312aa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-[#adb7be] hover:text-white transition"
                    >
                      linkedin.com/in/adrien-sani
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full border border-primary/30 bg-primary/10 p-3 shadow-lg shadow-primary/10">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                    alt="Email"
                    className="w-7 h-7"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p>
                    <a
                      href="mailto:adriensani237@gmail.com"
                      className="underline text-[#adb7be] hover:text-white transition"
                    >
                      adriensani237@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <span className="absolute top-0 right-0 w-1/2 h-2 border-t-2 border-r-2 border-primary rounded-tr-xl"></span>
            <span className="absolute bottom-0 left-0 w-1/2 h-2 border-b-2 border-l-2 border-secondary rounded-bl-xl"></span>
            <form
              onSubmit={sendEmail}
              className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-black/10 p-6 shadow-lg sm:p-8"
            >
              <div>
                <label className="block text-[#adb7be] mb-2" htmlFor="name">
                  Nom
                </label>
                <input
                  value={form.name}
                  onChange={handleChange}
                  id="name"
                  type="text"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.06] p-3 text-white placeholder:text-slate-500 transition focus:border-secondary focus:bg-white/[0.1] focus:outline-none"
                  placeholder="Votre Nom"
                  required
                />
              </div>
              <div>
                <label className="block text-[#adb7be] mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  value={form.email}
                  onChange={handleChange}
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.06] p-3 text-white placeholder:text-slate-500 transition focus:border-secondary focus:bg-white/[0.1] focus:outline-none"
                  placeholder="Votre Email"
                  required
                />
              </div>
              <div>
                <label className="block text-[#adb7be] mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={handleChange}
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.06] p-3 text-white placeholder:text-slate-500 transition focus:border-secondary focus:bg-white/[0.1] focus:outline-none"
                  placeholder="Votre Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="rounded-lg bg-primary py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Envoi..." : "Envoyer le Message"}
              </button>
              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  Message envoyé avec succès !
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Erreur lors de l'envoi. Vérifie tes IDs EmailJS.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ContactSection);
