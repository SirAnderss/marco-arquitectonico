<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="email" v-model="user" placeholder="Correo electrónico" />
      <input type="password" v-model="password" placeholder="Contraseña" />
      <input type="submit" value="Ingresar" />
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import toastr from "toastr";

export default {
  name: "Login",
  data() {
    return {
      user: "",
      password: "",
      toastOptions: {
        timeOut: 5000,
        closeButton: true,
        progressBar: true,
        positionClass: "toast-bottom-right",
        showDuration: 300,
        hideDuration: 1000,
        extendedTimeOut: 1000,
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
      },
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user, this.password)
        .then((user) => this.$router.replace("/dashboard", user))
        .catch((error) => {
          toastr.error(error, "Usuario o contraseña incorrectos", {
            timeOut: 5000,
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-right",
            showDuration: 300,
            hideDuration: 1000,
            extendedTimeOut: 1000,
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
          });
          console.error(error.code);
          console.error(error.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $secondary;
  h2 {
    text-transform: uppercase;
    font-size: 35px;
    margin-bottom: 30px;
  }
  form {
    display: inherit;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;
    background: $main;
    border: 1px solid transparent;
    border-radius: 5px;

    input {
      margin: 20px;
      border: 0;
      padding: 10px;
      font-size: 18px;
    }

    input:nth-of-type(1n) {
      width: 80%;
    }

    input:last-of-type {
      width: 50%;
      text-transform: uppercase;
      font-weight: bold;
      background: #fff;
      border: 2px solid transparent;
      border-radius: 5px;
      color: $secondary;
      cursor: pointer;

      &:hover {
        background: $main;
        border: 2px solid #fff;
        color: #fff;
      }
    }
  }
}
</style>
