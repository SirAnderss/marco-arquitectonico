<template>
  <div class="edit">
    <AdminNav />
    <div class="content">
      <h1>
        Edit
      </h1>
      <BlogForm />
    </div>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav.vue";
import BlogForm from "@/components/BlogForm.vue";
export default {
  name: "Edit",
  components: {
    BlogForm,
    AdminNav,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/fonts.css";
@import "@/assets/scss/_variables.scss";
.edit {
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
