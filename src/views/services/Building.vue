<template>
  <div>
    <HeroName
      page="Proyectos de construcción"
      :images="projects"
      :smImages="smProjects"
    />
    <div class="building">
      <img src="@/assets/img/services/construccion.webp" alt="Construcción" />
      <p>
        <span>
          ¿Pensando en la construcción, adecuación y/o remodelación de sus
          espacios comercial o de vivienda? </span
        >En Marco Arquitectónico SAS ofrecemos un amplio portafolio de servicios
        de obra civil incluyendo, redes eléctricas, de voz y datos, hidráulicas
        y acabados, siempre orientados por los valores de calidad, control
        presupuestal, responsabilidad y compromiso.
      </p>
      <p>
        Garantizamos una ejecución de excelentes terminados en el tiempo justo,
        adaptados a las necesidades del cliente. No importa si su proyecto sea
        la adecuación de un espacio en su hogar o la edificación de nuevas
        instalaciones comerciales de gran superficie, estamos listos para poner
        manos a la obra.
      </p>
      <p>
        Hacer realidad su sueño de una mejor calidad de vida y crecimiento
        profesional o comercial está a sólo un click de distancia.
      </p>
      <router-link to="/contact"
        >Contáctenos ya para solicitar <br />una cotización de nuestros
        servicios</router-link
      >
    </div>
    <SubBuilding />
  </div>
</template>

<script>
import HeroName from "@/components/HeroName.vue";
import SubBuilding from "@/components/SubBuilding.vue";

export default {
  components: {
    HeroName,
    SubBuilding,
  },
  data() {
    return {
      projects: [
        "office.webp",
        "plaza.webp",
        "serv-oficina.webp",
        "commercial.webp",
      ],
      smProjects: [
        "construccion-sm.webp",
        "monitoreo.webp",
        "sa-6.webp"
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/services.scss";
</style>

<style lang="scss" scoped>
@import "@/assets/scss/services.scss";
</style>
