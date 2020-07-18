<template>
  <div id="app">
    <Bot />
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
import Bot from "@/components/Bot.vue";

export default {
  components: {
    Info,
    Navigation,
    Footer,
    Bot
  },
  watch: {
    url: function() {
      window.scrollTo({
        top: 0,
      });
    },
  },
  computed: {
    url: {
      get() {
        return this.$route.name;
      },
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
@import "@/assets//scss/fonts.scss";
@import "toastr";
</style>
