<template>
  <div class="home">
    <Hero />
    <Welcome />
    <Services />
    <Quotation />
    <Clients />
    <Reviews />
    <ContactUs />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Welcome from "@/components/Welcome.vue";
import Services from "@/components/Services.vue";
import Quotation from "@/components/Quotation.vue";
import Clients from "@/components/Clients.vue";
import Reviews from "@/components/Reviews.vue";
import ContactUs from "@/components/ContactUs.vue";

export default {
  components: {
    Hero,
    Welcome,
    Services,
    Quotation,
    Clients,
    Reviews,
    ContactUs
  },
};
</script>
