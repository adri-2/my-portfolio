<template>
  <section class="text-white mt-20" id="services">
    <div class="px-4 xl:pl-16">
      <!-- <h2 class="text-4xl font-bold text-white md-4">My Services</h2> -->
      <!-- Title -->
    <h2 class="text-center text-4xl font-bold mb-10 text-white">
      Mes <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
    </h2>
    </div>
    <div
      class="py-10 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:grid-cols-2 md:pt-12 "
    >
      <div
        v-for="service in services"
        :key="service.id"
        data-aos="fade-up"
        class="px-8 py-4 md:py-10 rounded-xl  flex flex-col justify-start bg-[#111a3e] shadow-lg border-2 border-primary"
      >
        <div class="mx-auto h-16 text-center xl:h-28 xl:w-28 mb-16 md:mb-0">
          <!-- <div> -->
            <img :src="service.icon" alt="service icon" class="h-56 md:h-28 object-contain" />
          <!-- </div> -->
        </div>
        <div class="text-center flex flex-col justify-end md:py-0 md:my-4 py-12 my-8">
          <h3
            class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary lg:text-xl"
          >
            {{ service.name }}
          </h3>
          <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- <script setup>
import { ref } from "vue";

const services = ref([
  {
    id: 1,
    icon: "src/assets/Developer back c.png",
    name: "DEVELOPMENT BACKEND",
    description: "Python / Django / Flask : Développement d’API performantes et sécurisées.",
  },
  {
    id: 2,
    icon: "src/assets/Developer font.png",
    name: "DEVELOPMENT FRONTEND",
    description: "Création d’interfaces réactives et performantes et Conception d’interfaces intuitives et esthétiques. Utilisation de Vue.js et React.",
  },
  {
    id: 3,
    icon: "src/assets/wireframe c.png",
    name: "CREATION D'INTERFACE FIGMA",
    description: " Conception d’interfaces intuitives et esthétiques.",
  },
  {
    id: 4,
    icon: "src/assets/Data extraction c.png",
    name: "DATA ANALYSIS",
    description: "Analyse de données, modélisation et prédictions avec Python.",
  }
]);
</script> -->
<script setup>
import { ref } from "vue"

import backendIcon from "@/assets/Developer back c.png"
import frontendIcon from "@/assets/Developer font.png"
import figmaIcon from "@/assets/wireframe c.png"
import dataIcon from "@/assets/Data extraction c.png"

const services = ref([
  {
    id: 1,
    icon: backendIcon,
    name: "DEVELOPMENT BACKEND",
    description: "Python / Django / Flask : Développement d’API performantes et sécurisées.",
  },
  {
    id: 2,
    icon: frontendIcon,
    name: "DEVELOPMENT FRONTEND",
    description: "Création d’interfaces réactives et performantes et Conception d’interfaces intuitives et esthétiques. Utilisation de Vue.js et React.",
  },
  {
    id: 3,
    icon: figmaIcon,
    name: "CREATION D'INTERFACE FIGMA",
    description: "Conception d’interfaces intuitives et esthétiques.",
  },
  {
    id: 4,
    icon: dataIcon,
    name: "DATA ANALYSIS",
    description: "Analyse de données, modélisation et prédictions avec Python.",
  }
])
</script>
