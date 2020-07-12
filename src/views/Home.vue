<template>
  <div class="home">
    <Hero />
    <Welcome />
    <Services />
    <Contact />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Welcome from "@/components/Welcome.vue";
import Services from "@/components/Services.vue";
import Contact from "@/components/Contact.vue";

export default {
  components: {
    Hero,
    Welcome,
    Services,
    Contact
  },
};
</script>
