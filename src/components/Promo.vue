<template>
  <div id="promo-img" class="promo-img" :class="{ hide: hide }">
    <hooper :settings="promoHooperSettings" ref="promoCarousel">
      <slide>
        <div class="wide">
          <img src="@/assets/img/hero-supervision.webp" alt="promo-wide" />
        </div>
        <div class="portrait">
          <img src="@/assets/img/hero-oficina.webp" alt="promo-portrait" />
        </div>
      </slide>
      <slide>
        <div class="portrait">
          <img src="@/assets/img/hero-supervision.webp" alt="promo-wide" />
        </div>
        <div class="wide">
          <img src="@/assets/img/hero-oficina.webp" alt="promo-portrait" />
        </div>
      </slide>
    </hooper>
    <i @click="closePromo" class="icon-close close"></i>
    <i @click.prevent="slidePrev" class="icon-arrow-left prev"></i>
    <i @click.prevent="slideNext" class="icon-arrow-right next"></i>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "promos",
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      promoHooperSettings: {
        mouseDrag: false,
        playSpeed: 8000,
        transition: 800,
        centerMode: true,
        // autoPlay: true,
        wheelControl: false,
        infiniteScroll: true,
        itemsToShow: 1,
        touchDrag: true,
      },
      hide: false,
      carouselData: 0,
    };
  },
  methods: {
    closePromo() {
      this.hide = true;
    },
    slidePrev() {
      this.$refs.promoCarousel.slidePrev();
    },
    slideNext() {
      this.$refs.promoCarousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    },
  },
  watch: {
    carouselData() {
      this.$refs.promoCarousel.slideTo(this.carouselData);
    },
  },
  beforeDestroy(){
    this.hide = false;
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.promo-img {
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 1111;
  background: rgba(0, 0, 0, 0.5);
  .hooper {
    width: 100%;
    height: 100%;
    .hooper-list {
      .hooper-track {
        .hooper-slide {
          .portrait {
            display: none;
          }

          .wide,
          .portrait {
            width: 70%;
            margin: 70px auto;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    &:hover {
      color: $secondary;
    }
  }

  .prev,
  .next {
    border: none;
    position: absolute;
    cursor: pointer;
    color: rgb(255, 255, 255);
    text-shadow: 5px 7px 5px $dark;
    font-size: 25px;
    font-weight: 900;
  }

  .prev,
  .next {
    top: 50%;
  }

  .prev {
    left: 70px;
  }

  .next {
    right: 70px;
  }
}

.hide {
  display: none !important;
}
</style>
