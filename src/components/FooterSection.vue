<template>
  <!-- <div class="m-12 min-h-screen sm:h-20 py-16 px-4"></div> -->
  <footer
    class="bg-[#111A3E] border-t-4 border-primary relative text-white py-10"
  >
    <!-- Decorative half border bottom left -->
    <span
      class="absolute bottom-0 left-0 w-1/2 h-2 border-b-2 border-l-2 border-secondary rounded-bl-xl"
    ></span>

    <div
      class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <!-- Logo + Nom -->
      <div class="flex items-center gap-3">
        <img
          :src="logo"
          alt="Logo Adrien Portfolio"
          class="w-20 h-20 rounded-full object-cover border-2 border-primary shadow-lg"
        />
        <span
          class="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Adrien Portfolio
        </span>
      </div>

      <!-- Navigation -->
      <nav class="flex flex-wrap gap-6 text-md font-medium">
        <a
          href="#skills"
          class="hover:text-secondary transition-colors duration-300"
          >Compétences</a
        >
        <a
          href="#experience"
          class="hover:text-secondary transition-colors duration-300"
          >Expérience</a
        >
        <a
          href="#testimonials"
          class="hover:text-secondary transition-colors duration-300"
          >Témoignages</a
        >
        <a
          href="#contact"
          class="hover:text-secondary transition-colors duration-300"
          >Contact</a
        >
      </nav>

      <!-- Réseaux sociaux -->
      <div class="flex gap-5">
        <a
          href="https://github.com/"
          target="_blank"
          aria-label="GitHub"
          class="hover:text-secondary transition-transform transform hover:scale-110"
        >
          <i class="fa-brands fa-github text-2xl"></i>
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          aria-label="LinkedIn"
          class="hover:text-secondary transition-transform transform hover:scale-110"
        >
          <i class="fa-brands fa-linkedin text-2xl"></i>
        </a>
        <a
          href="mailto:adrien@email.com"
          aria-label="Email"
          class="hover:text-secondary transition-transform transform hover:scale-110"
        >
          <i class="fa-solid fa-envelope text-2xl"></i>
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center text-gray-400 text-sm mt-8">
      © {{ new Date().getFullYear() }} Adrien. Tous droits réservés.
    </div>
  </footer>
  <!-- Back To Top Button -->
  <button
    v-show="showButton"
    @click="scrollToTop"
    class="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg hover:scale-110 transition flex items-center justify-center"
    aria-label="Retour en haut"
  >
    <i class="fa-solid fa-arrow-up fa-lg"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import logo from "../../public/logo skills.jpg";

// Gestion bouton "Back to Top"
const showButton = ref(false);

const scrollHandler = () => {
  showButton.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", scrollHandler);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandler);
});
</script>
