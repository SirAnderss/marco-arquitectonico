<template>
  <div class="hero-name">
    <div class="hero-bg">
      <h1 v-text="page"></h1>
      <i @click="scrollToFirst" class="down icon-arrow-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroName",
  props: ["page"],
  methods: {
    scrollToFirst() {
      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.hero-name {
  width: 100%;
  height: 400px;

  &::after,
  &::before {
    content: "";
    width: 100%;
    height: 400px;
    position: absolute;
  }

  &::after {
    background: linear-gradient(-340deg, $main, $secondary);
    opacity: 0.25;
    z-index: 2;
  }

  &::before {
    background: url("../assets/img/hero-bg.webp") center;
    z-index: 1;
  }

  .hero-bg {
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 10;

    h1 {
      color: #fff;
      font-size: 40px;
      text-shadow: 5px 7px 10px $dark;
    }

    .down {
      border: none;
      position: absolute;
      cursor: pointer;
      color: rgb(255, 255, 255);
      text-shadow: 5px 7px 5px $dark;
      font-size: 25px;
      font-weight: 900;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);

      &:after {
        content: "\e604";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}

@media screen and (max-width: $small) {
  .hero-name {
    .hero-bg {
      h1 {
        font-size: 25px;
      }
    }
  }
}

@media screen and (min-width: $xlarge) {
  .hero-name {
    .hero-bg {
      h1 {
        font-size: 65px;
      }
    }
  }
}
</style>
