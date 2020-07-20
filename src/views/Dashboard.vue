<template>
  <div class="dashboard">
    <h1>
      Dashboard
    </h1>
    <button @click="logout">Salir</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Dashboard",
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

<style lang="scss" scoped>
.dashboard {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
