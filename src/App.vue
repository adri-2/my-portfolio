<template>
  <div class="bg-[#111827] min-h-screen">
    <NavBar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ExperienceAndSkills />
    <ProjectSection />

    <TestimonialsSection />
    <ContactSection />
    <!-- <CertificationsPage /> -->
    <FooterSection />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
// import AboutSection from "./components/AboutSection.vue";
// import NavBar from "./components/NavBar.vue";
const NavBar = defineAsyncComponent(() => import("./components/NavBar.vue"));
const HeroSection = defineAsyncComponent(() =>
  import("./components/HeroSection.vue")
);
const ServicesSection = defineAsyncComponent(() =>
  import("./components/ServicesSection.vue")
);
const AboutSection = defineAsyncComponent(() =>
  import("./components/AboutSection.vue")
);
const ExperienceAndSkills = defineAsyncComponent(() =>
  import("./components/ExperienceAndSkills.vue")
);

const ProjectSection = defineAsyncComponent(() =>
  import("./components/ProjectSection.vue")
);
const ContactSection = defineAsyncComponent(() =>
  import("./components/ContactSection.vue")
);
const TestimonialsSection = defineAsyncComponent(() =>
  import("./components/TestimonialsSection.vue")
);
const FooterSection = defineAsyncComponent(() =>
  import("./components/FooterSection.vue")
);
const CertificationsPage = defineAsyncComponent(() =>
  import("./pages/CertificationsPage.vue")
);
</script>
