<template>
  <section class="text-white mt-18" id="about">
    <div class="absolute z-0 top-[93rem] inset-x-0-h-64 flex items-start">
      <div
        class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"
      ></div>
    </div>
    <div
      class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1"
    >
      <div data-aos="flip-right">
        <h2 class="text-4xl font-bold text-white text-left mb-8">
          My Education
        </h2>
        <div class="space-y-8 py-8">
          <div
            v-for="element in education"
            :key="element.id"
            class="flex items-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
          >
            <div class="w-1/4 p-2">
              <img
                src="../assets/graduation-cap--v1.png"
                alt="graduation-cap--v1"
              />
            </div>
            <div class="w-3/4 pl-4">
              <h3
                class="text-2xl font-semibold uppercase text-tramsparent bg-gradient-to-r from-primary to-secondary lg:tex-xl"
              >
                {{ element.school }}
              </h3>
              <p class="text-white">{{ element.program }}</p>
              <p class="text-white">{{ element.year }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full"
        data-aos="flip-right"
      >
        <h2 class="text-4xl font-bold text-white md:text-center text-left md-4">
          More
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >About</span
          >
          Me
        </h2>
        <p class="text-base lg:text-lg mt-8 py-8">
          Je suis un développeur full-stack passionné par la création
          d’applications web performantes et visuellement soignées. Je combine
          Python, Vue.js, React et Figma pour concevoir des solutions robustes
          et intuitives.
        </p>

        <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
          <div
            class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3"
            v-for="box_infor in box_infors"
          >
            <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">
              {{ box_infor.h }}
            </h3>
            <p class="text-sm sm:text-base text-gray-300">{{ box_infor.p }}</p>
          </div>
        </div>
      </div>
      <!-- section box -->
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const education = ref([
  {
    id: 1,
    school: "IUT DE DOUALA",
    program: "Diplôme Universitaire de Technologie (DUT) en Informatique",
    year: "2024",
  },
  {
    id: 2,
    school: "IUT DE DOUALA",
    program: "Licence Professionnelle en Génie Logiciel",
    year: "2025",
  },
]);

const box_infors = ref([
  { h: "+4", p: "Happy client" },
  { h: "3", p: "Years" },
  { h: "10", p: "Porjets" },
  { h: "10", p: "Certifications" },
]);
</script>
