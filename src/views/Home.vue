<template>
  <div class="home">
    <Hero />
    <Welcome />
    <Services />
    <Quotation />
    <Reviews />
    <Clients />
    <ContactUs />
  </div>
</template>

<script>
import { hydrateWhenVisible } from "vue-lazy-hydration";
import firebase from "firebase/app";
import "firebase/analytics";

export default {
  components: {
    Hero: hydrateWhenVisible(() => import("@/components/Hero.vue")),
    Welcome: hydrateWhenVisible(() => import("@/components/Welcome.vue")),
    Services: hydrateWhenVisible(() => import("@/components/Services.vue")),
    Quotation: hydrateWhenVisible(() => import("@/components/Quotation.vue")),
    Clients: hydrateWhenVisible(() => import("@/components/Clients.vue")),
    Reviews: hydrateWhenVisible(() => import("@/components/Reviews.vue")),
    ContactUs: hydrateWhenVisible(() => import("@/components/ContactUs.vue")),
  },
  mounted() {
    this.logEvent();
  },
  methods: {
    logEvent() {
      try {
        firebase.analytics().logEvent("home_page_visited");
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    },
  },
};
</script>
