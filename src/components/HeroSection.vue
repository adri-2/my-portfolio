<template>
  <section class="relative w-full" data-aos="zoom-in-up">
    <div class="absolute top-0 inset-x-0 h-64 flex items-start">
      <div
        class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"
      ></div>
      <div
        class="h-24 w-2/3 bg-gradient-to-br from-[#670caf] opacity-40 blur-2xl"
      ></div>
    </div>
    <div
      class="w-full px-5 sm:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative"
    >
      <div
        class="grid lg:grid-cols-2 gap-10 xl:grap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto"
      >
        <div class="lg:py-6">
          <div class="text-cnter lg:text-left">
            <h1
              class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl"
            >
              Hi, I'm
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500"
              >
                Adrien </span
              >😁
            </h1>
          </div>
          <p
            class="text-gray-300 pt-8 text-center  lg:text-left mx-auto max-w-xl"
          >
            Qui suis-je ? Je suis un développeur full-stack passionné,
            spécialisé dans la création d’applications web performantes et
            visuellement soignées. Je combine Python (web et data), Vue.js,
            React et Figma pour concevoir des solutions robustes et
            ergonomiques. Mon expertise couvre également l’analyse de données et
            le machine learning. Toujours curieux d’apprendre, j’explore aussi
            des domaines comme la cybersécurité et l’administration système.
          </p>
          <div
            class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0"
          >
            <button
              class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
            >
              <span
                class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent"
              ></span>
              <span
                class="relative flex items-center justify-center text-white whitespace-nowrap"
                >Hire Me</span
              >
            </button>

            <button
              class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full justify-center"
            >
              <div
                class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative"
              >
                <div class="svg-container">
                  <svg class="download-icon" width="18" height="22">
                    <path></path>
                    <path></path>
                  </svg>
                  <div class="download-loader text-white hidden"></div>
                </div>
                <a
                  href="/resume.pdf"
                  download="resume.pdf"
                  class="pl-2 text-primary"
                  >Download resume</a
                >
              </div>
            </button>
          </div>
        </div>
        <!--  -->
        <div
          class="lg:h-full md:flex lg:items-center mt-4 sm-mt-8 min-sm:mt-12"
        >
          <div
            class="flex w-full h-full min-h-[25rem] lg:w-full lg:h-full items-end relative justify-center  "
          >
            <!-- <div
              class="absolute z-0 top-1/2 -translate-y-1/2 lg:min-h-[none] w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl"
            ></div> -->

            <div
              class=" h-90 w-90 z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-14 rounded-full shadow-lg border border-primary flex justify-center items-end"
            >
              <img
                src="../assets/photo-user.jpg"
                alt=""
                width="250"
                height="250"
                loading="lazy"
                class="w-50 h-50 rounded-full object-fill"
              />
              <div
                class="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow  -m-7 hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <i
                  class="fa-brands fa-css3-alt fa-2xl hover:text-blue-900 hover:scale-110 transition-all duration-300 ease-in-out"
                ></i>
              </div>
              <div
                class="absolute top-1/2 -left-5 transform -translate-y-1/2 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow  -m-7 hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <i class="fa-brands fa-github fa-xl"></i>
              </div>
              <div
                class="absolute top-1/2  -right-5  transform -translate-y-1/2 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow  -m-10 hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <i
                  class="fa-brands fa-vuejs hover:fa-2xl fa-xl hover:text-green-700 hover:scale-110 transition-all duration-300 ease-in-out"
                ></i>
              </div>
              <div
                class="absolute -bottom-4 left-1/2 -right-4 transform -translate-x-1/2 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow -m-12 hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <i
                  class="fa-brands fa-html5 fa-xl hover:fa-2xl  hover:text-orange-500"
                ></i>
              </div>
              <div
                class="absolute -bottom-2 right-2 transform -translate-x-1/2 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow -m-7 hover:scale-110 transition-all duration-300 ease-in-out group"
              >
                <!-- Icône Font Awesome Python -->
                <i
                  class="fa-brands fa-python fa-xl python-gradient group-hover:hidden transition-all duration-300 ease-in-out"
                ></i>

                <!-- Logo SVG Python officiel -->
                <svg
                  class="hidden group-hover:block transition-all duration-300 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0277BD"
                    d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35
         c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104
         c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672
         C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498
         c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                  ></path>
                  <path
                    fill="#FFC107"
                    d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35
         c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104
         c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672
         C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498
         c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                  ></path>
                </svg>
              </div>

              <div
                class="absolute   -right-2 -top-2 transform -translate-x-1/2 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow -m-7 hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <i
                  class="fa-brands fa-react fa-xl  hover:text-[#1E88E5] hover:scale-110 transition-all duration-300 ease-in-out"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
</script>
