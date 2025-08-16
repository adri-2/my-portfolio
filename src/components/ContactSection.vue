<template>
  <section class="mt-16 text-white p-4" id="contact">
    <div
      class="max-w-5xl mx-auto bg-[#10172a] rounded-3xl shadow-xl p-8 xl:p-16 relative overflow-hidden border-2 border-primary"
    >
      <div
        class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#1e293b] to-[#111a3e] rounded-full opacity-30 blur-2xl"
      ></div>
      <!-- <h2 class="text-4xl font-bold mb-6">Let's Connect</h2> -->
      <!-- Title -->
      <h2 class="text-center text-4xl font-bold mb-10 text-white">
        Contactez
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >Moi</span
        >
      </h2>
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="flex flex-col gap-8 justify-center">
          <p class="text-[#adb7be] mb-4 text-lg">
            N'hésitez pas à me contacter pour une collaboration. Je suis
            toujours ouvert aux nouvelles opportunités !
          </p>
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-4">
              <div
                class="p-3 bg-[#111a3e] rounded-full border border-[#233876] shadow-lg"
              >
                <a
                  href="https://wa.me/+237678846493"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                    alt="WhatsApp"
                    class="w-7 h-7"
                  />
                </a>
              </div>
              <div>
                <h4 class="font-semibold text-lg">Téléphone</h4>
                <a
                  href="https://wa.me/+237678846493"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p class="text-[#adb7be]">(237) 6788846493</p>
                </a>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div
                class="p-3 bg-[#111a3e] rounded-full border border-[#233876] shadow-lg"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  class="w-7 h-7"
                />
              </div>
              <div>
                <h4 class="font-semibold text-lg">LinkedIn</h4>
                <p>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    class="underline text-[#adb7be] hover:text-white transition"
                    >linkedin.com/in/yourprofile</a
                  >
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div
                class="p-3 bg-[#111a3e] rounded-full border border-[#233876] shadow-lg"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                  alt="Email"
                  class="w-7 h-7"
                />
              </div>
              <div>
                <h4 class="font-semibold text-lg">Email</h4>
                <p>
                  <a
                    href="mailto:Email@gmail.com"
                    class="underline text-[#adb7be] hover:text-white transition"
                    >adriensani237@gmail.com</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Contact Form -->

        <div class="relative">
          <!-- Decorative half borders for card -->
          <span
            class="absolute top-0 right-0 w-1/2 h-2 border-t-2 border-r-2 border-primary rounded-tr-xl"
          ></span>
          <span
            class="absolute bottom-0 left-0 w-1/2 h-2 border-b-2 border-l-2 border-secondary rounded-bl-xl"
          ></span>
          <form
            class="flex flex-col gap-6 bg-[#0f172a] rounded-2xl p-8 shadow-lg"
          >
            <div>
              <label class="block text-[#adb7be] mb-2" for="name">Nom</label>
              <input
                id="name"
                type="text"
                class="w-full p-3 rounded-lg bg-[#1e293b] text-white border border-[#233876] focus:outline-none focus:ring-2 focus:ring-[#233876]"
                placeholder="Votre Nom"
              />
            </div>
            <div>
              <label class="block text-[#adb7be] mb-2" for="email">Email</label>
              <input
                id="email"
                type="email"
                class="w-full p-3 rounded-lg bg-[#1e293b] text-white border border-[#233876] focus:outline-none focus:ring-2 focus:ring-[#233876]"
                placeholder="Votre Email"
              />
            </div>
            <div>
              <label class="block text-[#adb7be] mb-2" for="message"
                >Message</label
              >
              <textarea
                id="message"
                rows="4"
                class="w-full p-3 rounded-lg bg-[#1e293b] text-white border border-[#233876] focus:outline-none focus:ring-2 focus:ring-[#233876]"
                placeholder="Votre Message"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-gradient-to-r from-[#233876] to-[#111a3e] text-white font-semibold py-3 rounded-lg hover:scale-105 transition"
            >
              Envoyer le Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic for static UI/UX demo
</script>
