<template>
  <div class="sub-building">
    <div class="cellar sub-service">
      <h3>Bodegas industriales</h3>
      <div class="content">
        <hooper :settings="buildingHooperSettings">
          <slide>
            <img src="@/assets/img/bodega-1.webp" alt="Bodegas industriales" />
          </slide>
          <slide>
            <img src="@/assets/img/bodega-2.webp" alt="Bodegas industriales" />
          </slide>
        </hooper>
        <div>
          <p>
            Mejorar la producción y el almacenamiento, para garantizar un
            bienestar humano con una óptima integración entre el obrero y las
            máquinas, incluye: <br />
            <br />
          </p>
          <ul>
            <li>Excavación y Cimentación</li>
            <li>Estructura Metálica</li>
            <li>Concreto</li>
            <li>Cubiertas</li>
            <li>Redes Contra Incendios</li>
            <li>Acondicionamiento e Instalaciones</li>
            <li>Remodelación y Rehabilitación</li>
            <li>Desmantelamiento y Demolición</li>
            <li>Trabajos de Pintura</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="office sub-service">
      <h3>Oficinas</h3>
      <div class="content">
        <hooper :settings="buildingHooperSettings">
          <slide>
            <img src="@/assets/img/consultoria-sm.webp" alt="Oficinas" />
          </slide>
          <slide>
            <img src="@/assets/img/oficina-sm.webp" alt="Oficinas" />
          </slide>
        </hooper>
        <div>
          <p>
            Para Optimalizar el Rendimiento y garantizar el bienestar Laboral de
            tú Corporación, que crece con identidad, incluye: <br />
            <br />
          </p>
          <ul>
            <li>Diseño y Distribucion Arquitectónica</li>
            <li>Remodelacion y Adecuación</li>
            <li>Mobiliario de Oficina</li>
            <li>Obras Locativas</li>
            <li>Divisiones de Oficina</li>
            <li>Redes Contra Incendios</li>
            <li>Red Eléctrica e Iluminación</li>
            <li>Red de Voz y Datos (Cableado Estructucturado)</li>
            <li>CCTV</li>
            <li>Control de Acceso</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="hotel sub-service">
      <h3>Hoteles</h3>
      <div class="content">
        <hooper :settings="buildingHooperSettings">
          <slide>
            <img src="@/assets/img/hotel.webp" alt="Hoteles" />
          </slide>
          <slide>
            <img src="@/assets/img/flotante.webp" alt="Hoteles" />
          </slide>
        </hooper>
        <div>
          <p>
            Conceptualizamos su proyecto para ofrecer una mejora en el retorno
            económico, reducir el impacto ecológico del proceso de construcción,
            sin descuidar el impacto visual de su infraestructura, dejando una
            huella en cada huésped, incluye: <br />
            <br />
          </p>
          <ul>
            <li>Diseño y Distribución Arquitectónico</li>
            <li>Excavación y Cimentación</li>
            <li>Estructura Metálica y Concreto</li>
            <li>Cubiertas</li>
            <li>Recubrimiento de Fachada</li>
            <li>Redes Contra Incendios</li>
            <li>Remodelación y Rehabilitación</li>
            <li>Red Eléctrica e Iluminación</li>
            <li>Red de Voz y Datos (Cableado Estructurado – Rack)</li>
            <li>Diseño y Distribucion Arquitectónica</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="commercial sub-service">
      <h3>Locales Comerciales</h3>
      <div class="content">
        <hooper :settings="buildingHooperSettings">
          <slide>
            <img src="@/assets/img/local.webp" alt="Locales comerciales" />
          </slide>
          <slide>
            <img
              src="@/assets/img/construccion-sm.webp"
              alt="Locales comerciales"
            />
          </slide>
        </hooper>
        <div>
          <p>
            Diseñamos la base de tu legado patrimonial, resaltando tu identidad
            corporativa, otorgándole una distribución comercial ideal para
            aumentar las ventas y brindar una experiencia agradable a tus
            consumidores, incluye: <br />
            <br />
          </p>
          <ul>
            <li>Diseño y Distribución Arquitectónico</li>
            <li>Excavación y Cimentación</li>
            <li>Estructura Metálica y concreto</li>
            <li>Cubiertas</li>
            <li>Recubrimiento de Fachada</li>
            <li>Redes Contra Incendios</li>
            <li>Acondicionamiento e Instalaciones</li>
            <li>Remodelación y Rehabilitación</li>
            <li>CCTV</li>
            <li>Control de Acceso.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="house sub-service">
      <h3>Vivienda</h3>
      <div class="content">
        <hooper :settings="buildingHooperSettings">
          <slide>
            <img src="@/assets/img/casa.webp" alt="Vivienda" />
          </slide>
          <slide>
            <img src="@/assets/img/casa-sm.webp" alt="Vivienda" />
          </slide>
        </hooper>
        <div>
          <p>
            La tranquilidad de nuestra libertad, garantiza una vida sin igual,
            que marca un precedente en tú hogar. hacemos un oasis para tu
            familia, incluye: <br />
            <br />
          </p>
          <ul>
            <li>Diseño y Distribución Arquitectónico</li>
            <li>Excavación y Cimentación</li>
            <li>Estructura</li>
            <li>Cubiertas</li>
            <li>Recubrimiento de Fachada</li>
            <li>Acondicionamiento e Instalaciones</li>
            <li>Remodelación y Rehabilitación</li>
            <li>CCTV</li>
            <li>Control de Acceso</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      buildingHooperSettings: {
        mouseDrag: false,
        playSpeed: 10000,
        transition: 500,
        centerMode: true,
        autoPlay: true,
        wheelControl: false,
        infiniteScroll: true,
        itemsToShow: 1,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/services.scss';
</style>
