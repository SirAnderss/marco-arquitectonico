<template>
  <div id="app">
    <Info />
    <Navigation />
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
    Footer,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
@import "toastr";
</style>
