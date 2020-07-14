<template>
  <div id="services" class="services">
    <h2>Explora nuestros servicios</h2>
    <hooper
      :settings="serviceHooperSettings"
      ref="service"
      @slide="updateCarousel"
    >
      <slide>
        <div class="service">
          <img
            src="@/assets/img/icons/consultoria.webp"
            alt="Consultoria"
            class="normal"
          />
          <img
            src="@/assets/img/icons/wconsultoria.webp"
            alt="Consultoria"
            class="white"
          />
          <h3>
            Proyectos de Consultoría.
          </h3>
          <p>
            Nuestro equipo de consultoría en arquitectura e ingeniería está
            listo para asesorar, orientar y acompañar el proceso de
            consolidación de sus proyectos.
          </p>
          <button>Leer más...</button>
        </div>
      </slide>
      <slide>
        <div class="service">
          <img
            src="@/assets/img/icons/construccion.webp"
            alt="Construcción"
            class="normal"
          />
          <img
            src="@/assets/img/icons/wconstruccion.webp"
            alt="Construcción"
            class="white"
          />
          <h3>
            Construcción.
          </h3>
          <p>
            En Marco Arquitectónico SAS ofrecemos un amplio portafolio de
            servicios de obra civil incluyendo, redes eléctricas, de voz y
            datos, hidráulicas y acabados.
          </p>
          <button>Leer más...</button>
        </div>
      </slide>
      <slide>
        <div class="service">
          <img
            src="@/assets/img/icons/mantenimiento.webp"
            alt="Mantenimiento"
            class="normal"
          />
          <img
            src="@/assets/img/icons/wmantenimiento.webp"
            alt="Mantenimiento"
            class="white"
          />
          <h3>
            Mantenimiento P.H.
          </h3>
          <p>
            Nos preocupamos por ayudarle a proteger su inversión y la salud de
            su familia, revalorice y proteja su inversión y su salud.
          </p>
          <button>Leer más...</button>
        </div>
      </slide>
      <slide>
        <div class="service">
          <img
            src="@/assets/img/icons/arquitectura.webp"
            alt="Recubrimiento arquitectónico"
            class="normal"
          />
          <img
            src="@/assets/img/icons/warquitectura.webp"
            alt="Recubrimiento arquitectónico"
            class="white"
          />
          <h3>
            Recubrimientos Arquitectónicos.
          </h3>
          <p>
            La tendencia arquitectónica en fachada incluye el uso de
            recubrimiento con alto nivel de aislamiento, durabilidad y
            expresividad estética.
          </p>
          <button>Leer más...</button>
        </div>
      </slide>
    </hooper>
    <i @click.prevent="slidePrev" class="prev icon-arrow-left"></i>
    <i @click.prevent="slideNext" class="next icon-arrow-right"></i>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "services",
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      serviceHooperSettings: {
        mouseDrag: false,
        playSpeed: 8000,
        transition: 800,
        centerMode: true,
        autoPlay: true,
        wheelControl: false,
        infiniteScroll: true,
        itemsToShow: 3,
        breakpoints: {
          120: {
            itemsToShow: 1,
          },
          576: {
            itemsToShow: 1,
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
    slidePrev() {
      this.$refs.service.slidePrev();
    },
    slideNext() {
      this.$refs.service.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    },
  },
  watch: {
    carouselData() {
      this.$refs.service.slideTo(this.carouselData);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets//scss/fonts.scss";

.services {
  background: $main;
  padding: 60px 0;
  position: relative;
  text-align: center;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.35);

  h2 {
    color: #fff;
    text-transform: uppercase;
    font-size: 40px;
  }

  .hooper {
    height: calc(100vh - 120px);
    .hooper-list {
      .hooper-track {
        .hooper-slide {
          .service {
            position: relative;
            margin: 60px;
            padding: 60px;
            height: 470px;
            margin-top: 50px;
            display: flex;
            flex-flow: column;
            align-items: center;
            background: #fff;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.35);
            transition: 0.7s;

            img {
              width: 90px;
            }

            .white {
              display: none;
            }
            h3,
            p {
              color: $dark;
              font-weight: 400;
            }

            h3 {
              font-size: 27px;
              margin-bottom: 20px;
            }

            p {
              text-align: start;
              font-size: 15px;
              margin-bottom: 25px;
            }

            button {
              position: absolute;
              left: 50%;
              bottom: 15%;
              transform: translateX(-50%);
              width: 120px;
              padding: 15px;
              cursor: pointer;
              text-transform: uppercase;
              font-size: 15px;
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
          }
        }
      }
    }
  }

  .prev,
  .next {
    border: none;
    position: absolute;
    top: 50%;
    cursor: pointer;
    color: rgb(255, 255, 255);
    text-shadow: 5px 7px 5px $dark;
    font-size: 25px;
    font-weight: 900;
    transition: 0.5s;

    &:hover {
      color: $main;
      text-shadow: 5px 5px 5px $dark;
    }
  }

  .prev {
    left: 35%;
  }

  .next {
    right: 35%;
  }

  .is-current {
    .service {
      border: 1px solid #fff;
      background: $main !important;
      height: 480px !important;
      margin-top: 25px !important;

      .white {
        display: inline-block !important;
      }

      .normal {
        display: none !important;
      }

      h3,
      p {
        color: #fff !important;
      }

      button {
        bottom: 15% !important;
        color: $main !important;
        background: #fff !important;
        border: 1px solid #fff !important;

        &:hover {
          background: $main !important;
          color: #fff !important;
          border: 1px solid #fff !important;
          border-bottom: 5px solid #fff !important;
          padding-bottom: 10px !important;
        }
      }
    }
  }
}

@media only screen and (max-width: $medium) {
  .services {
    padding-bottom: 20px;

    h2 {
      font-size: 30px;
    }

    .hooper {
      .hooper-list {
        .hooper-track {
          .hooper-slide {
            .service {
              img {
                width: 60px;
                margin-bottom: 10px;
              }
              h3,
              p {
                font-weight: 300;
              }
              h3 {
                font-size: 20px;
                margin-bottom: 20px;
              }
              p {
                text-align: start;
                font-size: 13px;
              }
              button {
                font-size: 15px;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: $small) and (max-width: $large) {
  .services {
    h2 {
      font-size: 33px;
    }

    .hooper {
      height: 70%;
      .hooper-list {
        .hooper-track {
          .hooper-slide {
            .service {
              padding: 85px;
              img {
                width: 80px;
                margin-bottom: 10px;
              }
              h3 {
                font-size: 30px;
                margin-bottom: 20px;
              }
              p {
                font-size: 17px;
              }
              button {
                font-size: 15px;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: $large) {
  .services {
    .prev,
    .next {
      display: none;
    }
  }
}
@media screen and (min-width: $xlarge) {
  .services {

    h2 {
      font-size: 40px;
    }

    .hooper {
      .hooper-list {
        .hooper-track {
          .hooper-slide {
            .service {
              height: 700px;
              margin-top: 60px;

              img {
                width: 150px;
              }
              h3 {
                font-weight: 800;
              }

              h3 {
                font-size: 47px;
              }

              p {
                font-size: 25px;
              }

              button {
                width: 180px;
                padding: 25px;
                font-size: 20px;

                &:hover {
                  border-bottom: 15px solid $main;
                }
              }
            }
          }
        }
      }
    }

    .prev,
    .next {
      font-size: 45px;
    }

    .prev {
      left: 32%;
    }

    .next {
      right: 32%;
    }

    .is-current {
      .service {
        height: 780px !important;

        button:hover {
          border-bottom: 15px solid #fff !important;
        }
      }
    }
  }
}
</style>
