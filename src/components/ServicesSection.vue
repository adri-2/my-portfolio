<template>
  <section class="text-white mt-20" id="services">
    <div class="px-4 xl:pl-16">
      <h2 class="text-4xl font-bold text-white md-4">My Services</h2>
    </div>
    <div
      class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:grap-10 md:pt-12 lg:grid-cols-3"
    >
      <div
        v-for="service in services"
        :key="service.id"
        data-aos="fade-up"
        class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
      >
        <div class="mx-auto h-24 text-center xl:h-28 xl:w-28">
          <div>
            <img :src="service.icon" alt="service icon" />
          </div>
        </div>
        <div class="text-center">
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
<script setup>
import { ref } from "vue";
const services = ref([
  {
    id: 1,
    icon: "src/assets/google-code.png",
    name: "WEB DEVELOPMENT",
    description: "lonknkazsexdrgvybuhnjmk,l ghj nk",
  },
  {
    id: 2,
    icon: "src/assets/google-code.png",
    name: "WEB DEVELOPMENT",
    description: "lonknkazsexdrgvybuhnjmk,l ghj nk",
  },
  {
    id: 3,
    icon: "src/assets/google-code.png",
    name: "WEB DEVELOPMENT",
    description: "lonknkazsexdrgvybuhnjmk,l ghj nk",
  },
  {
    id: 4,
    icon: "src/assets/google-code.png",
    name: "WEB DEVELOPMENT",
    description: "lonknkazsexdrgvybuhnjmk,l ghj nk",
  },
  {
    id: 5,
    icon: "src/assets/google-code.png",
    name: "WEB DEVELOPMENT",
    description: "lonknkazsexdrgvybuhnjmk,l ghj nk",
  },
  {
    id: 6,
    icon: "src/assets/google-code.png",
    name: "WEB DEVELOPMENT",
    description: "lonknkazsexdrgvybuhnjmk,l ghj nk",
  },
]);
</script>
