<template>
  <section class="text-white mt-18 pb-10 " id>
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
    <div class=" py-4 xl:px-16 ">
      <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-full">
        <h2 class="text-4xl font-bold text-white text-left mb-4">
          My
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Skills
          </span>
        </h2>
        <div class="mt-8 grid grid-cols-2  gap-x-4 gap-y-6">
          <div
            v-for="(category, key) in skills"
            :key="key"
            class="bg-[#111A3E] rounded-xl  shadow-lg border  border-[#1f1641] p-4 "
          >
            <div class="flex gap-x-4 items-center mb-4 ">
              <div class="rounded-full bg-blue-500 p-4 w-12 h-12 flex items-center justify-center">
                <i
                  v-if="key === 'languages'"
                  class="fa-solid fa-code"
                ></i>
                <i
                  v-else-if="key === 'frontend'"
                  class="fa-solid fa-desktop"
                ></i>
                <i
                  v-else-if="key === 'backend'"
                  class="fa-solid fa-server"
                ></i>
                <i
                  v-else-if="key === 'tools'"
                  class="fa-solid fa-toolbox"
                ></i>
              </div>
              <h1 class="text-xl font-bold">
                {{
                  key === 'languages' ? 'Programming Languages'
                  : key === 'frontend' ? 'Frontend'
                  : key === 'backend' ? 'Backend'
                  : key === 'tools' ? 'Tools'
                  : key
                }}
              </h1>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
              <div
                v-for="skill in category"
                :key="skill.id"
                class="flex items-center"
              >
                <div class="flex flex-row items-center gap-x-4 w-96 h-16 border-2 border-[#1f1641] rounded-lg p-2 bg-gradient-to-r from-primary to-secondary">
                  <img :src="skill.icon" alt="" class="w-8 h-8 object-contain" />
                  <span class="text-white font-medium text-md text-nowrap ">{{ skill.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Experience section placeholder -->
      <!--
      <div data-aos="flip-left">
        <h2 class="text-4xl font-bold text-white text-left md:text-center mt-8">
          My Experiences
        </h2>
        <div class=""></div>
      </div>
      -->
    </div>


    <!-- div -->
  </section>
</template>

<script setup>
import { ref } from "vue";

// Imports
import pythonIcon from "@/assets/icons8-python.svg";
import tailwindIcon from "@/assets/icons8-tailwind-css.svg";
import sqlIcon from "@/assets/icons8-sql-48.png";
import mysqlIcon from "@/assets/icons8-logo-de-mysql.svg";
import postgresIcon from "@/assets/icons8-postgresql.svg";
import mongoIcon from "@/assets/icons8-mongo-db-48.png";

import vueIcon from "@/assets/icons8-vue-js.svg";
import reactIcon from "@/assets/icons8-react-native.svg";
import htmlIcon from "@/assets/icons8-html-5.svg";
import cssIcon from "@/assets/icons8-logo-css.svg";
import jsIcon from "@/assets/icons8-javascript.svg";

import djangoIcon from "@/assets/icons8-django.svg";
import wordpressIcon from "@/assets/icons8-wordpress.svg";
import nodeIcon from "@/assets/icons8-nodejs.svg";
import expressIcon from "@/assets/icons8-express-js.svg";

import githubIcon from "@/assets/icons8-logo-github.svg";
import gitIcon from "@/assets/icons8-git.svg";
import postmanIcon from "@/assets/postman-icon.svg";
import canvaIcon from "@/assets/icons8-toile.svg";
import figmaIcon from "@/assets/icons8-figma.svg";
import linuxIcon from "@/assets/icons8-linux-48.png";
import dockerIcon from "@/assets/icons8-logo-docker.svg";

const skills = ref({
  languages: [
    { id: 1, name: "PYTHON", icon: pythonIcon },
    { id: 3, name: "TAILWIND CSS", icon: tailwindIcon },
    { id: 4, name: "SQL", icon: sqlIcon },
    { id: 5, name: "MYSQL", icon: mysqlIcon },
    { id: 6, name: "POSTGRESQL", icon: postgresIcon },
    { id: 21, name: "MONGODB", icon: mongoIcon }
  ],
  frontend: [
    { id: 7, name: "VUE JS", icon: vueIcon },
    { id: 8, name: "REACT JS", icon: reactIcon },
    { id: 9, name: "HTML", icon: htmlIcon },
    { id: 10, name: "CSS", icon: cssIcon },
    { id: 11, name: "JAVASCRIPT", icon: jsIcon },
  ],
  backend: [
    { id: 12, name: "DJANGO", icon: djangoIcon },
    { id: 14, name: "WORDPRESS", icon: wordpressIcon },
    { id: 15, name: "NODE JS", icon: nodeIcon },
    { id: 16, name: "EXPRESS JS", icon: expressIcon },
  ],
  tools: [
    { id: 15, name: "GITHUB", icon: githubIcon },
    { id: 16, name: "GIT", icon: gitIcon },
    { id: 22, name: "POSTMAN", icon: postmanIcon },
    { id: 17, name: "CANVA", icon: canvaIcon },
    { id: 18, name: "FIGMA", icon: figmaIcon },
    { id: 19, name: "LINUX", icon: linuxIcon },
    { id: 20, name: "DOCKER", icon: dockerIcon },
  ],
});
</script>


<!-- <script setup>
import { ref } from "vue";
const skills = ref({
  languages: [
    { id: 1, name: "PYTHON", icon: "src/assets/icons8-python.svg" },
    // { id: 2, name: "HTML & CSS", icon: "src/assets/icons8-html-5.svg" },
    { id: 3, name: "TAILWIND CSS", icon: "src/assets/icons8-tailwind-css.svg" },
    { id: 4, name: "SQL", icon: "src/assets/icons8-sql-48.png" },
    { id: 5, name: "MYSQL", icon: "src/assets/icons8-logo-de-mysql.svg" },
    { id: 6, name: "POSTGRESQL", icon: "src/assets/icons8-postgresql.svg" },
    { id: 21, name: "MONGODB", icon: "src/assets/icons8-mongo-db-48.png" }
  ],
  frontend: [
    { id: 7, name: "VUE JS", icon: "src/assets/icons8-vue-js.svg" },
    { id: 8, name: "REACT JS", icon: "src/assets/icons8-react-native.svg" },
    { id: 9, name: "HTML", icon: "src/assets/icons8-html-5.svg" },
    { id: 10, name: "CSS", icon: "src/assets/icons8-logo-css.svg" },
    { id: 11, name: "JAVASCRIPT", icon: "src/assets/icons8-javascript.svg" },
  ],
  backend: [
    { id: 12, name: "DJANGO", icon: "src/assets/icons8-django.svg" },
  
    { id: 14, name: "WORDPRESS", icon: "src/assets/icons8-wordpress.svg" },
    { id: 15, name: "NODE JS", icon: "src/assets/icons8-nodejs.svg" },
    { id: 16, name: "EXPRESS JS", icon: "src/assets/icons8-express-js.svg" },
    
  ],
  tools: [
    { id: 15, name: "GITHUB", icon: "src/assets/icons8-logo-github.svg" },
    { id: 16, name: "GIT", icon: "src/assets/icons8-git.svg" },
    { id: 22, name: "POSTMAN", icon: "src/assets/postman-icon.svg" },
    { id: 17, name: "CANVA", icon: "src/assets/icons8-toile.svg" },
    { id: 18, name: "FIGMA", icon: "src/assets/icons8-figma.svg" },
    { id: 19, name: "LINUX", icon: "src/assets/icons8-linux-48.png" },
    { id: 20, name: "DOCKER", icon: "src/assets/icons8-logo-docker.svg" },
  ],
});
</script> -->
