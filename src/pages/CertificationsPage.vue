<template>
  <section
    class="min-h-screen py-16 px-4 flex flex-col items-center justify-center"
  >
    <!-- Titre -->
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
      Mes
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
      >
        Certifications
      </span>
    </h2>

    <!-- Carousel -->
    <div class="relative w-full max-w-2xl mx-auto">
      <!-- Bouton gauche -->
      <button
        @click="prev"
        aria-label="Certification précédente"
        class="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex justify-center items-center bg-primary text-white rounded-full p-3 shadow-lg hover:scale-110 transition z-10"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      <!-- Slide -->
      <div
        class="overflow-hidden rounded-xl shadow-xl bg-[#1f1641] flex items-center justify-center h-80 sm:h-96 md:h-[28rem]"
      >
        <transition name="fade" mode="out-in">
          <div
            :key="currentIndex"
            class="flex flex-col items-center justify-center w-full h-full p-8"
          >
            <img
              :src="certifications[currentIndex].image"
              :alt="`Certification ${certifications[currentIndex].title}`"
              class="sm:w-72 w-32 h-32 sm:h-72 object-contain mb-6 rounded-lg border-2 border-primary bg-white transition-transform duration-300 hover:scale-105"
            />
            <h3 class="text-2xl font-semibold text-white mb-2">
              {{ certifications[currentIndex].title }}
            </h3>
            <p class="text-md text-gray-300 mb-2">
              {{ certifications[currentIndex].issuer }}
            </p>
            <span class="text-sm text-secondary">{{
              certifications[currentIndex].date
            }}</span>
          </div>
        </transition>
      </div>

      <!-- Bouton droit -->
      <button
        @click="next"
        aria-label="Certification suivante"
        class="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex justify-center items-center bg-secondary text-white rounded-full p-3 shadow-lg hover:scale-110 transition z-10"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>

    <!-- Dots -->
    <div class="flex gap-2 justify-center mt-8">
      <span
        v-for="(cert, idx) in certifications"
        :key="idx"
        @click="goTo(idx)"
        :class="[
          'w-4 h-4 rounded-full cursor-pointer border-2 transition duration-300',
          currentIndex === idx
            ? 'bg-primary border-secondary scale-110'
            : 'bg-[#1f1641] border-primary hover:bg-primary/40',
        ]"
      >
      </span>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const certifications = ref([
  {
    title: "Certification Python",
    issuer: "OpenClassrooms",
    date: "Juin 2024",
    image: "/medias/certif-python.png", // pas besoin de /public
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
]);

const currentIndex = ref(0);

function prev() {
  currentIndex.value =
    (currentIndex.value - 1 + certifications.value.length) %
    certifications.value.length;
}
function next() {
  currentIndex.value = (currentIndex.value + 1) % certifications.value.length;
}
function goTo(idx) {
  currentIndex.value = idx;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
