<template>
  <div class="blog">
    <HeroName page="Blog" :images="projects" :smImages="smProjects" />
    <BlogClient />
  </div>
</template>

<script>
import HeroName from "@/components/HeroName.vue";
import BlogClient from "@/components/BlogClient.vue";

export default {
  components: {
    HeroName,
    BlogClient,
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
