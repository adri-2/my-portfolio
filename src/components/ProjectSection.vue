<template>
  <section id="projects" class="relative w-[95%] px-4 md:px-16 mx-auto py-16 md:py-24">
    
    <h2 class="text-4xl font-bold text-center mb-12 text-white">
      <span class="inline-block mb-2">Mes</span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projets</span>
    </h2>

    <div class="relative ">
      <button
        class="swiper-button-prev absolute top-1/2 left-[-1rem] md:left-[-2rem] transform -translate-y-1/2 z-10 bg-primary bg-opacity-75 hover:bg-yellow-600 text-white p-3 md:p-4 shadow-lg rounded-full transition-all duration-300"
        aria-label="Previous Project"
      >
        <i class="fas fa-chevron-left hidden"></i>
      </button>
      <button
        class="swiper-button-next absolute top-1/2 right-[-1rem] md:right-[-2rem] transform -translate-y-1/2 z-10 bg-primary bg-opacity-75 hover:bg-yellow-600 text-white p-3 md:p-4 shadow-lg rounded-full transition-all duration-300"
        aria-label="Next Project"
      >
        <i class="fas fa-chevron-right hidden"></i>
      </button>
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :navigation="navigationOptions"
        :loop="true"
        :pagination="{ clickable: true }"
        :modules="swiperModules"
        class="max-w-full mt-8 md:mt-16"
      >
        <swiper-slide
          class="max-w-[280px] md:max-w-[340px] px-2 py-6 rounded-md shadow-md bg-gray-800 bg-opacity-75 hover:bg-gray-700 transition-all duration-300"
          v-for="(project, index) in projects"
          :key="index"
        >
          <ProjectCard
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :tags="project.tags"
            :liveLink="project.liveLink"
            :codeLink="project.codeLink"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { ref } from "vue";

import image1 from "@/assets/image (1).png";
import image2 from "@/assets/image (2).png";
// import image3 from "@/assets/image (3).png";

const navigationOptions = {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev"
};

const swiperModules = [EffectCoverflow, Navigation, Pagination];

const projects = ref([
  {
    title: "E-commerce Platform",
    description: "A fully functional e-commerce platform with user authentication, product catalog, shopping cart, and checkout process.",
    image: image1,
    tags: ["Vue.js", "Vuex", "Node.js", "Express", "MongoDB"],
    liveLink: "https://ecommerce-example.com",
    codeLink: "https://github.com/user/ecommerce-platform"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application allowing users to create, assign, and track tasks in real-time.",
    image: image2,
    tags: ["React", "Redux", "Firebase", "Styled Components"],
    liveLink: "https://task-manager-app.net",
    codeLink: "https://github.com/user/task-management-app"
  },
  {
    title: "E-commerce Platform",
    description: "A fully functional e-commerce platform with user authentication, product catalog, shopping cart, and checkout process.",
    image: image1,
    tags: ["Vue.js", "Vuex", "Node.js", "Express", "MongoDB"],
    liveLink: "https://ecommerce-example.com",
    codeLink: "https://github.com/user/ecommerce-platform"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application allowing users to create, assign, and track tasks in real-time.",
    image: image2,
    tags: ["React", "Redux", "Firebase", "Styled Components"],
    liveLink: "https://task-manager-app.net",
    codeLink: "https://github.com/user/task-management-app"
  },
  {
    title: "E-commerce Platform",
    description: "A fully functional e-commerce platform with user authentication, product catalog, shopping cart, and checkout process.",
    image: image1,
    tags: ["Vue.js", "Vuex", "Node.js", "Express", "MongoDB"],
    liveLink: "https://ecommerce-example.com",
    codeLink: "https://github.com/user/ecommerce-platform"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application allowing users to create, assign, and track tasks in real-time.",
    image: image2,
    tags: ["React", "Redux", "Firebase", "Styled Components"],
    liveLink: "https://task-manager-app.net",
    codeLink: "https://github.com/user/task-management-app"
  },
  // {
  //   title: "Portfolio Website",
  //   description: "A personal portfolio website to showcase projects, skills, and experience.",
  //   image: image3,
  //   tags: ["Nuxt.js", "Tailwind CSS", "Netlify"],
  //   liveLink: "https://my-portfolio.online",
  //   codeLink: "https://github.com/user/portfolio-website"
  // }
]);
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  width: 60px;
  padding: 10px;
  height: 60px;
  /* padding: 20px; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white; /* Assurez-vous que la couleur de la flèche est visible */
}
</style>