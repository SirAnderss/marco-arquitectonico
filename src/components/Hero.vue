<template>
  <div id="hero" class="hero">
    <div class="hero-message">
      <h1>
        Bienvenidos a Marco Arquitectónico
      </h1>
      <p>
        la magia de la Arquitectura y El Diseño que Transforma Espacios y
        Construye Identidad
      </p>
    </div>
    <hooper
      :settings="heroHooperSettings"
      ref="carousel"
      @slide="updateCarousel"
    >
      <slide>
        <div class="track architecture"></div>
      </slide>
      <slide>
        <div class="track proyect"></div>
      </slide>
      <slide>
        <div class="track maintenance"></div>
      </slide>
      <slide>
        <div class="track covering"></div>
      </slide>
    </hooper>
    <i @click.prevent="slidePrev" class="prev icon-arrow-left"></i>
    <i @click.prevent="slideNext" class="next icon-arrow-right"></i>
    <i @click="scrollToFirst" class="down icon-arrow-down"></i>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Hero",
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      heroHooperSettings: {
        mouseDrag: false,
        playSpeed: 8000,
        transition: 800,
        centerMode: true,
        autoPlay: true,
        wheelControl: false,
        infiniteScroll: true,
        breakpoints: {
          576: {
            touchDrag: true,
          },
          768: {
            touchDrag: true,
          },
          992: {
            touchDrag: true,
          },
        },
      },
      carouselData: 0,
    };
  },
  methods: {
    scrollToFirst() {
      window.scrollTo({
        top: 500,
        behavior: "smooth",
      });
    },
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    },
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.hero {
  margin-top: 140px !important;
  .hero-message {
    position: absolute;
    padding: 0 10%;
    width: 100%;
    z-index: 20;
    top: 50%;
    transform: translateY(-25%);
    text-align: center;
    text-transform: uppercase;
    h1,
    p {
      color: #fff;
      text-shadow: 0px 0px 21px $dark;
    }

    h1 {
      font-size: 57px;
      margin-bottom: 40px;
    }

    p {
      font-size: 25px;
      font-weight: bold;
    }
  }
  .hooper {
    height: calc(100vh - 120px);
    .hooper-list {
      .hooper-track {
        .hooper-slide {
          .track {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;

            &::after {
              content: "";
              width: 100%;
              height: 100%;
              background: linear-gradient(-340deg, $main, $secondary);
              opacity: 0.3;
              z-index: 10;
              position: absolute;
            }
          }

          .architecture {
            background: url("../assets/img/hero-oficina.webp") center;
          }
          .proyect {
            background: url("../assets/img/hero-supervision.webp") center;
          }
          .maintenance {
            background: url("../assets/img/hero-metalica.webp") center;
          }
          .covering {
            background: url("../assets/img/hero-bienestar.webp") center;
          }
        }
      }
    }
  }

  .prev,
  .next,
  .down {
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

  .down {
    top: 90%;
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

  .prev {
    left: 70px;
  }

  .next {
    right: 70px;
  }
}

@media screen and (min-width: $medium) {
  .hero {
    margin-top: 100px !important;
    .hero-message {
      h1 {
        font-size: 57px;
      }

      p {
        font-size: 25px;
      }
    }
    .hooper {
      height: calc(100vh - 100px);
    }

    .prev,
    .next {
      display: none;
    }

    .down {
      font-size: 20px;
      font-weight: 900;
    }
  }
}

@media screen and (max-width: $medium) {
  .hero {
    margin-top: 100px !important;
    .hero-message {
      h1 {
        font-size: 35px;
      }

      p {
        font-size: 22px;
      }
    }
    .hooper {
      height: calc(100vh - 100px);
    }

    .prev,
    .next {
      display: none;
    }

    .down {
      font-size: 20px;
      font-weight: 900;
    }
  }
}

@media screen and (min-width: $xlarge) {
  .hero {
    .hero-message {
      h1 {
        font-size: 100px;
      }

      p {
        font-size: 45px;
      }
    }
    .hooper {
      .hooper-list {
        .hooper-track {
          .hooper-slide {
            .track {
              background-size: cover;
            }
          }
        }
      }
    }

    .prev,
    .next,
    .down {
      font-size: 40px;
      font-weight: 900;
    }
  }
}
</style>
