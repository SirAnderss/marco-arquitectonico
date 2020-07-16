<template>
  <div class="sub-consultancy">
    <div class="management sub-service">
      <h3>Gerencia de proyectos</h3>
      <div class="content">
        <hooper :settings="consultancyHooperSettings">
          <slide>
            <img
              src="@/assets/img/consultoria-sm.webp"
              alt="Gerencia de proyectos"
            />
          </slide>
          <slide>
            <img
              src="@/assets/img/oficina-sm.webp"
              alt="Gerencia de proyectos"
            />
          </slide>
        </hooper>
        <div>
          <p>
            Consolidamos proyectos que serán desarrollados de acuerdo con la
            planeación y acorde con su presupuesto de la mano de arquitectura y
            la ingeniería
          </p>
        </div>
      </div>
    </div>
    <div class="dai sub-service">
      <h3>Diseño, Arquitectura, ingeniería</h3>
      <div class="content">
        <hooper :settings="consultancyHooperSettings">
          <slide>
            <img
              src="@/assets/img/arquitectura.webp"
              alt="Diseño, Arquitectura, ingeniería"
            />
          </slide>
          <slide>
            <img
              src="@/assets/img/ingenieria.webp"
              alt="Diseño, Arquitectura, ingeniería"
            />
          </slide>
        </hooper>
        <div>
          <p>
            Consolidamos proyectos que serán desarrollados de acuerdo con la
            planeación y acorde con su presupuesto de la mano de arquitectura y
            la ingeniería
          </p>
        </div>
      </div>
    </div>
    <div class="direction sub-service">
      <h3>Dirección de obra</h3>
      <div class="content">
        <hooper :settings="consultancyHooperSettings">
          <slide>
            <img src="@/assets/img/direccion.webp" alt="Dirección de obra" />
          </slide>
          <slide>
            <img src="@/assets/img/monitoreo.webp" alt="Dirección de obra" />
          </slide>
        </hooper>
        <div>
          <p>
            Consolidamos proyectos que serán desarrollados de acuerdo con la
            planeación y acorde con su presupuesto de la mano de arquitectura y
            la ingeniería
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      consultancyHooperSettings: {
        mouseDrag: false,
        playSpeed: 10000,
        transition: 500,
        centerMode: true,
        autoPlay: true,
        wheelControl: false,
        infiniteScroll: true,
        itemsToShow: 1,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/services.scss";
</style>
