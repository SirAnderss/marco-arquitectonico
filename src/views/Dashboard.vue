<template>
  <div class="dashboard">
    <h1>
      Dashboard
    </h1>
    <button @click="logout">Salir</button>
    <EditorBlog />
  </div>
</template>

<script>
import firebase from "firebase";
import EditorBlog from "@/components/EditorBlog.vue";
export default {
  name: "Dashboard",
  components: {
    EditorBlog,
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          let me = this;
          me.$router.replace("/");
        })
        .catch(function(error) {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss">
.dashboard {
  margin-top: 50px;
}
</style>