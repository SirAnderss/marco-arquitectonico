<template>
  <div id="app">
    <Bot :class="{ hide: hide }" />
    <Info :class="{ hide: hide }" />
    <Navigation :class="{ hide: hide }" />
    <router-view />
    <Footer :class="{ hide: hide }" />
    <Social :class="{ hide: hide }" />
  </div>
</template>

<script>
import Info from "@/components/Info.vue";
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import Bot from "@/components/Bot.vue";
import Social from "@/components/Social.vue";

export default {
  components: {
    Info,
    Navigation,
    Footer,
    Bot,
    Social,
  },
  data() {
    return {
      hide: true,
    };
  },
  methods: {
    hideElements() {},
  },
  watch: {
    url: function() {
      window.scrollTo({
        top: 0,
      });
      if (
        this.url === "Dashboard" ||
        this.url === "Login" ||
        this.url === "EditBlog"
      ) {
        this.hide = true;
      } else {
        this.hide = false;
      }
    },
  },
  computed: {
    url: {
      get() {
        return this.$route.name;
      },
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
@import "toastr";

.hide {
  display: none !important;
}
</style>
