<template>
  <div class="sub-maintenance">
    <div class="facade sub-service">
      <h3>Impermeabilizacion de Fachadas</h3>
      <div class="content">
        <hooper :settings="maintenanceHooperSettings">
          <slide>
            <img
              src="@/assets/img/mantenimiento-sm.webp"
              alt="Impermeabilizacion de fachadas"
            />
          </slide>
          <slide>
            <img
              src="@/assets/img/mantenimiento.webp"
              alt="Impermeabilizacion de fachadas"
            />
          </slide>
        </hooper>
        <div>
          <p>
            Protección hidrorepelente para fachadas o estructuras expuestas a la
            intemperie, ya sean de Ladrillo, Bloques de Cemento, piedras
            naturales o artificiales, para reducir y elimina las florescencias y
            el deterioro de su acabado tanto interior como exterior, incluye:
            <br />
            <br />
          </p>
          <ul>
            <li>
              Fachadas en Ladrillo
            </li>
            <li>Reparación de Piezas Afectadas</li>
            <li>Pintura de Fachadas</li>
            <li>Limpieza de Vidrios</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="cover sub-service">
      <h3>Impermeabilizacion de Cubiertas</h3>
      <div class="content">
        <hooper :settings="maintenanceHooperSettings">
          <slide>
            <img
              src="@/assets/img/cubierta-2.webp"
              alt="Impermeabilizacion de cubiertas"
            />
          </slide>
          <slide>
            <img
              src="@/assets/img/cubierta-3.webp"
              alt="Impermeabilizacion de cubiertas"
            />
          </slide>
          <slide>
            <img
              src="@/assets/img/cubierta.webp"
              alt="Impermeabilizacion de cubiertas"
            />
          </slide>
        </hooper>
        <div>
          <p>
            Impermeabilización a base de asfaltos modificados y reforzados con
            poliéster que garantizan resistencia a la humedad, plasticidad y
            elasticidad, incluye:
            <br />
            <br />
          </p>
          <ul>
            <li>Terraza en Concreto</li>
            <li>Cubiertas en Teja</li>
            <li>Parqueaderos</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tank sub-service">
      <h3>Impermeabilizacion de Tanques de Agua Potable</h3>
      <div class="content">
        <hooper :settings="maintenanceHooperSettings">
          <slide>
            <img
              src="@/assets/img/tanque-2.webp"
          alt="Impermeabilizacion de tanques de agua potable"
            />
          </slide>
          <slide>
            <img
              src="@/assets/img/tanque.webp"
          alt="Impermeabilizacion de tanques de agua potable"
            />
          </slide>
        </hooper>
        <div>
          <p>
            Garantizamos la estanquidad e higiene por años, evitando la
            contaminación del agua. Además, protegemos y rehabilitamos las
            estructuras de concreto expuestas a la acción de los productos
            químicos utilizados en plantas de tratamiento de agua, incluye:
            <br />
            <br />
          </p>
          <ul>
            <li>
              Tanques de Agua Potable
            </li>
            <li>Automatización de Equipos de Bombeo</li>
            <li>
              Redes Contra Incendio
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="lobby sub-service">
      <h3>Construcción de Porterías de Acceso</h3>
      <div class="content">
        <hooper :settings="maintenanceHooperSettings">
          <slide>
            <img
              src="@/assets/img/port-2.webp"
          alt="Construcción de porterías de acceso"
            />
          </slide>
          <slide>
            <img
              src="@/assets/img/port.webp"
          alt="Construcción de porterías de acceso"
            />
          </slide>
        </hooper>
        <div>
          <p>
            Proyectos enfocados a mejorar el Bienestar y seguridad para tú
            Copropiedad, fortaleciendo el sentido de pertenecía de sus usuarios,
            construyendo identidad, incluye:
            <br />
            <br />
          </p>
          <ul>
            <li>
              Protege Tú Comunidad
            </li>
            <li>Construcción de Obra Civil y Arquitectónica</li>
            <li>
              Control de Acceso
            </li>
            <li>
              CCTV
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="park sub-service">
      <h3>Construcción de Senderos Peatonales</h3>
      <div class="content">
        <hooper :settings="maintenanceHooperSettings">
          <slide>
            <img
              src="@/assets/img/sendero.webp"
          alt="Construcción de senderos peatonales"
            />
          </slide>
          <slide>
            <img
              src="@/assets/img/peaton.webp"
          alt="Construcción de senderos peatonales"
            />
          </slide>
        </hooper>
        <div>
          <p>
            Garantizar el Bienestar, reconstruyendo e impermeabilizando las
            plazoletas que resguardan Tú zona de Parqueaderos, con membranas,
            mantos y poliuretanos líquidos, que harán de tu unidad un gran lugar
            para vivir, incluye:
            <br />
            <br />
          </p>
          <ul>
            <li>
              Construcción de Senderos Peatonales
            </li>
            <li>
              Impermeabilización de Jardineras
            </li>
            <li>
              Construcción de Plazoletas
            </li>
            <li>
              Impermeabilización de Parqueaderos
            </li>
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
      maintenanceHooperSettings: {
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
