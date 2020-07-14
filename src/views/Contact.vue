<template>
  <div class="contact">
    <HeroName page="Contacto" />
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
};
</script>
