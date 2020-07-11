<template>
  <div id="app">
    <Info />
    <Navigation />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Nosotros</router-link> |
      <router-link to="/services">Servicios</router-link> |
      <router-link to="/contact">Contacto</router-link> |
      <router-link to="/blog">Blog</router-link>
    </div> -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Info from "@/components/Info.vue";
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Info,
    Navigation,
    Footer
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';
</style>
