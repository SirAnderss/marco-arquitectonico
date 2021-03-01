<template>
  <div>
    <HeroName
      page="Mantener es Cuidar Nuestro Entorno y Calidad de Vida"
      :images="projects"
      :sm-images="smProjects"
    />
    <div class="mantenance">
      <img
        src="@/assets/img/services/mantenimiento.webp"
        alt="Mantenimiento P.H."
      />
      <p>
        <span>
          Factores climáticos y de contaminación como la alta polución en
          nuestras principales ciudades contribuyen en el deterioro no sólo de
          los materiales de la fachada, sino además de su estética.
        </span>
      </p>
      <p>
        Todo ello afecta la vida útil de la edificación y resta valor a su
        inversión. Nos preocupamos por ayudarle a proteger su inversión y la
        salud de su familia.
      </p>
      <p>
        Nuestro programa de rehabilitación integral de fachadas le devuelve la
        calidad de vida y estatus a su familia.
      </p>
      <p>
        Incluye además la impermeabilización de fachadas, cubiertas y tanques de
        agua potable, corrigiendo daños por humedad como hongos, filtraciones,
        moho y demás factores de riesgo sanitario, previniendo su reaparición.
      </p>
      <p>
        Revalorice y proteja su inversión y su salud. Solicite ahora mismo una
        visita técnica profesional gratuita.
      </p>
      <router-link to="/contact"
        >Contáctenos ya para solicitar <br />una cotización de nuestros
        servicios</router-link
      >
    </div>
    <SubMaintenance />
  </div>
</template>

<script>
import { hydrateWhenVisible } from "vue-lazy-hydration";
import firebase from "firebase/app";
import "firebase/analytics";

export default {
  components: {
    HeroName: hydrateWhenVisible(() => import("@/components/HeroName.vue")),
    SubMaintenance: hydrateWhenVisible(() =>
      import("@/components/SubMaintenance.vue")
    ),
  },
  data() {
    return {
      projects: ["galas.webp", "antes-3.webp", "antes-4.webp"],
      smProjects: ["sa-5.webp", "sa-6.webp"],
    };
  },
  mounted() {
    this.logEvent();
  },
  methods: {
    logEvent() {
      try {
        firebase.analytics().logEvent("maintenance_page_visited");
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/services.scss";
</style>
