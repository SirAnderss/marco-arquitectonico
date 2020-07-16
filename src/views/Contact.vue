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
};
</script>
