<template>
  <div class="sub-covering">
    <div class="metallica sub-service">
      <h3>Estructuras metálicas</h3>
      <div class="content">
        <hooper :settings="coveringHooperSettings">
          <slide>
            <img
              src="@/assets/img/metalica-sm.webp"
              alt="Estructuras metálicas"
            />
          </slide>
          <slide>
            <img
              src="@/assets/img/metalica-2.webp"
              alt="Estructuras metálicas"
            />
          </slide>
          <slide>
            <img
              src="@/assets/img/metalica-3.webp"
              alt="Estructuras metálicas"
            />
          </slide>
        </hooper>
        <div>
          <p>
            Garantizar La estabilidad de Tú Legado, construyendo un espacio
            equilibrado, de la unión de la Arquitectura y la Ingeniería que
            harán de Tú Proyecto un gran lugar para transitar, incluye: <br />
            <br />
          </p>
          <ul>
            <li>Estructura metálica</li>
            <li>
              Mezanine metálico
            </li>
            <li>
              Cubiertas metálicas
            </li>
            <li>
              Estructuras IPE y HAE
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="float-facade sub-service">
      <h3>Fachadas flotantes</h3>
      <div class="content">
        <hooper :settings="coveringHooperSettings">
          <slide>
            <img src="@/assets/img/flotante.webp" alt="Fachadas flotantes" />
          </slide>
          <slide>
            <img src="@/assets/img/flotante-2.webp" alt="Fachadas flotantes" />
          </slide>
          <slide>
            <img src="@/assets/img/metalica-3.webp" alt="Fachadas flotantes" />
          </slide>
        </hooper>
        <div>
          <p>
            El éxito se presenta con la innovación y la calidad, que consolida
            tú identidad, con una alta resistencia a condiciones climáticas de
            adversidad, incluye: <br />
            <br />
          </p>
          <ul>
            <li>Panel compuesto de aluminio</li>
            <li>
              Panel fenólico fundermax
            </li>
            <li>
              Panel de fibrocemento
            </li>
            <li>
              Paneles metálicos y microperforados
            </li>
            <li>Persianas metálicas</li>
          </ul>
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
      coveringHooperSettings: {
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
