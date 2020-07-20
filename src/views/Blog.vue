<template>
  <div>
    <Bot />
    <Info />
    <Navigation />
    <div class="blog">
      <h1>This is an blog page</h1>
    </div>
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
}
</script>