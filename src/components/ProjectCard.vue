<template>
  <article
    class="max-w-sm overflow-hidden shadow-lg rounded border-primary bg-[#111A3E]"
  >
    <!-- image section -->
    <figure>
      <img :src="image" :alt="title" class="w-full h-48" />
    </figure>
    <!-- content section -->
    <section class="px-6 py-4">
      <header>
        <h3 class="font-bold text-xl m-2 text-white">{{ title }}</h3>
      </header>
      <p class="text-gray-300 text-sm">{{ description }}</p>
    </section>
    <!-- tags section -->
    <footer class="px-6 pt-4 pb-2">
      <ul class="flex flex-wrap gap-2">
        <li
          v-for="(tags, index) in tags"
          :key="index"
          class="inline-block border-[#1f1641] text-gray-200 rounded-full px-3 py-1 text-sm"
        >
          #{{ tags }}
        </li>
      </ul>
    </footer>
    <!-- actions section -->
    <div class="px-6 pb-4 justify-between flex items-center">
      <a
        :href="liveLink"
        v-if="liveLink"
        class="inline-block bg-primary text-white rounded px-4 py-2 text-sm"
        >Live Demo</a
      >
      <a
        :href="codeLink"
        v-if="codeLink"
        class="inline-block bg-gray-700 text-white rounded px-4 py-2 text-sm"
        >View Code</a
      >
    </div>
  </article>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: "Project Title",
  },
  description: {
    type: String,
    required: true,
    default: "Project Description",
  },
  image: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
    default: () => ["DJANGO", "TAILWIND CSS", "VUE.JS"],
  },
  liveLink: {
    type: String,
    required: false,
    default: null,
  },
  codeLink: {
    type: String,
    required: false,
    default: null,
  },
});
</script>
