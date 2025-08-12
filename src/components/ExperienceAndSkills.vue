<template>
  <section class="text-white mt-18 pb-10" id>
    <div class="absolute rigth-0 top-[110rem] h-full w-full justify-end">
      <span class="flex opacity-20">
        <span class="w-16-h-332 rounded-l-full flex bg-primary blur-2xl">
        </span>
        <span
          class="w-16-h-332 rounded-l-full flex bg-[#f88fc2] blur-2xl mt-14"
        >
        </span>
      </span>
    </div>
    <div class="md:grid md:grid-cols-2 gap-8 items-center py-4 xl:px-16">
      <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-[80%]">
        <h2 class="text-4xl font-bold text-white text-left md-b">
          My
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >Skills</span
          >
        </h2>
        <div class="mt-8 " v-for="skill in skills" :key="skill.id">
          <div class="flex items-end justify-between" data-aos="fade-right">
            <h4 class="font-semibold uppercase text-white">
              {{ skill.name }}
            </h4>
            <h3 class="text-2xl font-bold text-white">{{ skill.width }}</h3>
          </div>
          <div class="mt-2 h-1 w-full bg-[#131d30] rounded-full">
            <div
              class="h-1 rounded-full bg-primary"
              :style="`width:${skill.width}`"
            ></div>
          </div>
        </div>
      </div>
      <div data-aos="flip-left">
        <h2
          class="text-4xl font-bold text-white text-left md-8 md:text-center md:mt-0 mt-8"
        >
          My Experiences
        </h2>
        <div class=""></div>
      </div>
      <div class="mt-30"></div>
    </div>
    <!-- div -->
  </section>
</template>
<script setup>
import { ref } from "vue";
const skills = ref([
  { id: 1, name: "PYTHON", width: "80%" },
  { id: 2, name: "JAVASCRIPT", width: "40%" },
  { id: 3, name: "HTML & CSS", width: "40%" },
  { id: 4, name: "JAVA", width: "40%" },
  { id: 5, name: "CANVA", width: "40%" },
  { id: 6, name: "FIGMA", width: "40%" },
]);
</script>
