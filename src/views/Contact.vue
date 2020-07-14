<template>
  <div class="contact">
    <HeroName page="Contacto" />
    <ContactForm />
    <ContactInfo />
  </div>
</template>

<script>
import HeroName from "@/components/HeroName.vue";
import ContactForm from "@/components/ContactForm.vue";
import ContactInfo from "@/components/ContactInfo.vue";

export default {
  components: {
    HeroName,
    ContactForm,
    ContactInfo,
  },
};
</script>
