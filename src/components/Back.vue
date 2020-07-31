<template>
  <div class="back">
    <router-link to="/contact"
      >Contáctenos ya para solicitar una cotización<br />de nuestros
      servicios</router-link
    ><br><br>
    <!--<button @click="back">
      Volver
    </button>-->
  </div>
</template>

<script>
export default {
  name: "Back",
  methods: {
    back() {
      this.$router.push("/blog");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.back {
  position: relative;
  width: 100%;
  text-align: center;
  top: 20px;
  button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    padding: 15px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    background: $main;
    transition: 0.5s;
    border: 1px solid #fff;
    border-radius: 5px;

    &:hover {
      background: #fff;
      color: $main;
      border: 1px solid $main;
      border-bottom: 5px solid $main;
      padding-bottom: 10px;
    }
  }
  a{
    text-transform: uppercase;
    font-size: 30px;
  }
}
</style>
