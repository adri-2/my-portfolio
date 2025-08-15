
<template>
  <section class="relative py-12 rounded-2xl shadow-lg bg-[#111A3E] max-w-6xl  mt-10 p-8 mx-auto overflow-hidden border border-[#1f1641]" id="testimonials">
    <!-- Decorative half borders -->
    <span class="absolute top-0 right-0 w-1/2 h-4 border-t-4 border-r-4 border-primary rounded-tr-2xl"></span>
    <span class="absolute bottom-0 left-0 w-1/2 h-4 border-b-4 border-l-4 border-secondary rounded-bl-2xl"></span>
    <!-- Background shapes -->
    <div class="absolute -left-20 top-0 flex flex-col gap-10 opacity-20 pointer-events-none">
      <span class="w-16 h-[332px] rounded-full bg-primary blur-2xl"></span>
      <span class="w-16 h-[332px] rounded-full bg-[#f88fc2] blur-2xl"></span>
    </div>

    <!-- Title -->
    <h2 class="text-center text-4xl font-bold mb-10 text-white">
      Témoignages <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Clients</span>
    </h2>

    <!-- Testimonials list -->
    <div class="flex flex-row flex-wrap gap-8 justify-center">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="relative bg-[#111A3E] border border-[#1f1641] rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 max-w-xs flex flex-col justify-between"
      >
        <!-- Decorative half borders for card -->
        <span class="absolute top-0 right-0 w-1/2 h-2 border-t-2 border-r-2 border-primary rounded-tr-xl"></span>
        <span class="absolute bottom-0 left-0 w-1/2 h-2 border-b-2 border-l-2 border-secondary rounded-bl-xl"></span>
        <p class="text-lg text-gray-300 italic mb-6">"{{ testimonial.text }}"</p>
        <div class="flex items-center gap-4">
          <img
            :src="testimonial.avatar"
            alt="Avatar"
            class="w-12 h-12 rounded-full object-cover border-2 border-primary"
          />
          <div>
            <span class="font-semibold text-white block">{{ testimonial.name }}</span>
            <span class="text-sm text-gray-400">{{ testimonial.role }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"

const testimonials = ref([
  {
    name: "Jane Doe",
    role: "CEO, Example Inc.",
    text: "This portfolio is outstanding! Highly recommended.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "John Smith",
    role: "CTO, TechCorp",
    text: "Professional and creative work. Will collaborate again.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emily White",
    role: "Designer, Creatives",
    text: "Amazing attention to detail and great communication.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
])
</script>
