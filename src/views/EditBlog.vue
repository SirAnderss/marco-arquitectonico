<template>
  <div class="dashboard">
    <AdminNav />
    <div class="content">
      <h1>
        Dashboard
      </h1>
      <BlogForm />
    </div>
  </div>
</template>

<script>
// import firebase from "firebase";
import AdminNav from "@/components/AdminNav.vue";
import BlogForm from "@/components/BlogForm.vue";
export default {
  name: "Dashboard",
  components: {
    BlogForm,
    AdminNav,
  },
  data() {
    return {
      noItems: null,
      posts: [],
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.dashboard {
  width: 100%;
  color: $secondary;
  .content {
    width: 80%;
    margin: 0 auto;
    h1 {
      margin: 20px auto;
      text-align: center;
    }
  }
}
</style>
