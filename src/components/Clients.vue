<template>
  <div id="client" class="client">
    <!-- <h2>NUESTROS CLIENTES OPINAN</h2>
    <p>
      Nos esforzamos en construir relaciones duraderas con nuestros clientes y
      garantizar su satisfacción. Ellos confiaron en nosotros y nos comparten su
      experiencia
    </p> -->
    <hooper :settings="clientHooperSettings">
      <slide>
        <img
          src="@/assets/img/logos/clients/abril.webp"
          alt="Constructora Abril"
        />
      </slide>
      <slide>
        <img src="@/assets/img/logos/clients/argos.webp" alt="Argos" />
      </slide>
      <slide>
        <img src="@/assets/img/logos/clients/artecma.webp" alt="Artecma" />
      </slide>
      <slide>
        <img src="@/assets/img/logos/clients/bulevar.webp" alt="Bulevar" />
      </slide>
      <slide>
        <img src="@/assets/img/logos/clients/byd.webp" alt="BYD" />
      </slide>
      <slide>
        <img
          src="@/assets/img/logos/clients/finlandia.webp"
          alt="Embajada de Finlandia"
        />
      </slide>
      <slide>
        <img
          src="@/assets/img/logos/clients/paloquemao.webp"
          alt="Paloquemao"
        />
      </slide>
      <slide>
        <img
          src="@/assets/img/logos/clients/polonia.webp"
          alt="Embajada de Polonia"
        />
      </slide>
      <slide>
        <img
          src="@/assets/img/logos/clients/prosperidad.webp"
          alt="Gobierno de Colombia"
        />
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Clients",
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      clientHooperSettings: {
        mouseDrag: false,
        playSpeed: 3000,
        transition: 500,
        centerMode: true,
        autoPlay: true,
        wheelControl: false,
        infiniteScroll: true,
        breakpoints: {
          120: {
            itemsToShow: 1,
          },
          576: {
            itemsToShow: 1,
          },
          768: {
            itemsToShow: 3,
          },
        },
      },
      carouselData: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.client {
  width: 95%;
  margin: 60px auto;
  text-align: center;
  color: $secondary;

  h2,
  p {
    margin-bottom: 20px;
  }

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 25px;
    padding: 0 60px;
  }
  .hooper {
    height: auto !important;
    .hooper-list {
      .hooper-track {
        .hooper-slide {
          text-align: center;
          img {
            margin: 0;
            height: 120px;
            opacity: 0.6;
          }
        }
      }
    }
  }
}
</style>
