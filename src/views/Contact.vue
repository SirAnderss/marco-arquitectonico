<template>
  <div class="contact">
    <HeroName page="Contacto" :images="projects" :smImages="smProjects" />
    <Quotation />
    <ContactInfo />
  </div>
</template>

<script>
import HeroName from "@/components/HeroName.vue";
import Quotation from "@/components/Quotation.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import firebase from "firebase/app";
import "firebase/analytics";

export default {
  components: {
    HeroName,
    Quotation,
    ContactInfo,
  },
  data() {
    return {
      projects: [
        "office.webp",
        "plaza.webp",
        "serv-oficina.webp",
        "commercial.webp",
      ],
      smProjects: [
        "construccion-sm.webp",
        "consultoria-sm.webp",
        "covertura-sm.webp",
        "mantenimiento-sm.webp",
      ],
    };
  },
  mounted() {
    this.logEvent();
  },
  methods: {
    logEvent() {
      try {
        firebase.analytics().logEvent("contact_page_visited");
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    },
  },
};
</script>
