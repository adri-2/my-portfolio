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
        <!-- v-for="skill in skills"
          :key="skill.id" -->
        <div
          class="mt-8 flex flex-col gap-y-4 bg-[#111A3E] rounded-xl shadow-lg border border-[#1f1641] p-4"
        >
          <div class="flex gap-x-4 items-center ">
            <div
              class="rounded-full bg-blue-500 p-2 w-12 h-12 flex items-center justify-center"
            >
              <i class="fa-solid fa-code"></i>
            </div>
            <h1 class="text-xl font-bold">Langage de Développeument</h1>
          </div>
          <div>
            <div
              v-for="skill in skills"
              :key="skill.id"
              class="flex items-center justify-between mb-2"
            >
              <div
                class="flex items-center gap-x-2 w-44 h-20 border-2 border-[#1f1641] rounded-lg p-2 bg-gradient-to-r from-primary to-secondary"
              >
                <img src="../assets/icons8-python.svg" alt="" />
                <span class="text-white">{{ skill.name }}</span>
              </div>
            </div>
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
  { id: 1, name: "PYTHON", icon: "../assets/icons8-python.svg" },
  { id: 2, name: "VUE JS", icon: "../assets/icons8-vue-js.svg" },
  { id: 3, name: "HTML & CSS", icon: "../assets/icons8-html-5.svg" },
  { id: 4, name: "TAILWIND CSS", icon: "../assets/icons8-tailwind-css.svg" },
  { id: 5, name: "CANVA", icon: "../assets/" },
  { id: 6, name: "FIGMA", icon: "../assets/" },
  { id: 7, name: "REACT JS", icon: "../assets/icons8-react-native.svg" },
  { id: 8, name: "DJANGO", icon: "../assets/" },
  { id: 9, name: "FLASK", icon: "../assets/" },
  { id: 10, name: "GIT", icon: "../assets/" },
  { id: 11, name: "GITHUB", icon: "../assets/icons8-logo-github.svg" },
  { id: 12, name: "SQL", icon: "../assets/" },
  { id: 13, name: "MYSQL", icon: "../assets/" },
  { id: 14, name: "POSTGRESQL", icon: "../assets/" },
  { id: 15, name: "WORDPRESS", icon: "../assets/" },
  { id: 16, name: "LINUX", icon: "../assets/" },
  { id: 17, name: "DOCKER", icon: "../assets/" },

]);
</script>
