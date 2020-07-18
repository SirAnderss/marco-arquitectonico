<template>
  <div class="hero-name">
    <div class="slider">
      <hooper :settings="subheroHooperSettings">
        <slide v-for="(item, index) in pictures" :key="index">
          <img
            :src="require('@/assets/img/' + item)"
            :alt="'Nuestro trabajo' + index"
          />
        </slide>
      </hooper>
    </div>
    <div class="hero-bg">
      <h1 v-text="page"></h1>
      <i @click="scrollToFirst" class="down icon-arrow-down"></i>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "HeroName",
  props: ["page", "images", "smImages"],
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      subheroHooperSettings: {
        mouseDrag: false,
        playSpeed: 8000,
        transition: 800,
        centerMode: true,
        autoPlay: true,
        wheelControl: false,
        infiniteScroll: true,
      },
      windowWidth: "",
      mobile: false,
      pictures: [],
    };
  },
  methods: {
    scrollToFirst() {
      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
    },
    onResize() {
      this.windowWidth = window.screen.width;
    },
  },
  watch: {
    windowWidth: function() {
      if (this.windowWidth < 576) {
        this.pictures = this.smImages;
      } else {
        this.pictures = this.images;
      }
    },
  },
  mounted() {
    this.onResize();
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
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
    opacity: 0.2;
    z-index: 2;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 400px;
    .hooper {
      height: 400px;
      img {
        width: 100%;
        height: 400px;
      }
    }
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
        font-size: 50px;
      }
    }
  }
}
</style>
