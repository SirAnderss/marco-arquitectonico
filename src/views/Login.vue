<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="email" v-model="user" placeholder="Usuario" />
      <input type="password" v-model="password" placeholder="Contraseña" />
      <input type="submit" value="Ingresar" />
    </form>
    <pre>
      {{ $data }}
    </pre>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user, this.password)
        .then((user) => this.$router.replace("/dashboard", user))
        .catch(function(error) {
          console.error(error.code);
          console.error(error.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: inherit;
    flex-direction: column;
  }
}
</style>
