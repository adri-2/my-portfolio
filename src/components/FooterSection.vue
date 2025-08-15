<template>
  <footer class="bg-[#111A3E] border-t-4 border-primary text-white py-8 mt-16 relative">
    <!-- Decorative half border bottom left -->
    <span class="absolute bottom-0 left-0 w-1/2 h-2 border-b-2 border-l-2 border-secondary rounded-bl-xl"></span>
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Logo or Name -->
      <div class="flex items-center gap-3">
        <img src="/public/logo skills.jpg" alt="Logo" class="w-40 h-40 rounded-full object-cover border-2 border-primary" />
        <span class="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Adrien Portfolio</span>
      </div>
      <!-- Navigation Links -->
      <nav class="flex gap-6 text-md">
        <a href="#skills" class="hover:text-secondary transition">Compétences</a>
        <a href="#experience" class="hover:text-secondary transition">Expérience</a>
        <a href="#testimonials" class="hover:text-secondary transition">Témoignages</a>
        <a href="#contact" class="hover:text-secondary transition">Contact</a>
      </nav>
      <!-- Social Icons -->
      <div class="flex gap-4">
        <a href="https://github.com/" target="_blank" class="hover:text-secondary transition">
          <i class="fa-brands fa-github text-2xl"></i>
        </a>
        <a href="https://linkedin.com/" target="_blank" class="hover:text-secondary transition">
          <i class="fa-brands fa-linkedin text-2xl"></i>
        </a>
        <a href="mailto:adrien@email.com" class="hover:text-secondary transition">
          <i class="fa-solid fa-envelope text-2xl"></i>
        </a>
      </div>
    </div>
    <div class="text-center text-gray-400 text-sm mt-8">
      © 2025 Adrien. Tous droits réservés.
    </div>

    <!-- Back To Top Button -->
    <button
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white px-2 py-2 rounded-full shadow-lg hover:scale-105 transition flex items-center justify-center "
      aria-label="Back to top"
    >
      <i class="fa-solid fa-arrow-up fa-xl active:animate-ping  "></i>
      <span class="hidden md:inline " data-aos="fade-up"></span>
    </button>
  </footer>
</template>

<script setup>
// Back To Top Button logic
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
footer {
  position: relative;
}
</style>
