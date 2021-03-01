<template>
  <div class="blog">
    <HeroName page="Blog" :images="projects" :smImages="smProjects" />
    <BlogClient />
  </div>
</template>

<script>
import { hydrateWhenVisible } from "vue-lazy-hydration";
import firebase from "firebase/app";
import "firebase/analytics";

export default {
  components: {
    HeroName: hydrateWhenVisible(() => import("@/components/HeroName.vue")),
    BlogClient: hydrateWhenVisible(() => import("@/components/BlogClient.vue")),
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
        firebase.analytics().logEvent("blog_page_visited");
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    },
  },
};
</script>
