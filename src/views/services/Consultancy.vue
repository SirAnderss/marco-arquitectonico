<template>
  <div>
    <HeroName
      page="Proyectos de consultoria"
      :images="projects"
      :smImages="smProjects"
    />
    <div class="consultancy">
      <img
        src="@/assets/img/services/consultoria.webp"
        alt="Consultoria en construcción"
      />
      <p>
        <span>
          ¿Cuántas veces ha escuchado que un proyecto no consigue entregar los
          beneficios estimados? ¿Es algo tan habitual? ¿A qué se debe?
        </span>
        Nuestro equipo de consultoría en arquitectura e ingeniería está listo
        para asesorar, orientar y acompañar el proceso de consolidación de sus
        proyectos, de acuerdo con la planificación estimada y acorde con su
        presupuesto, reduciendo el riesgo de imprevistos.
      </p>
      <p>
        Brindamos el diseño y gestión integral de proyectos de inversión e
        innovación tanto industriales como inmobiliarios, satisfaciendo las
        necesidades de espacios habitables óptimos en lo estético y lo
        tecnológico. Coordinamos todo el proceso constructivo para que se
        edifique en concordancia con los planos y especificaciones determinadas,
        asegurando cumplimiento de plazos y aplicación presupuestaria.
      </p>
      <p>
        Confíenos el éxito de su proyecto de inversión constructivo y hagamos
        realidad sus ideas juntos.
      </p>
      <router-link to="/contact"
        >Contáctenos ya para solicitar <br />una cotización de nuestros
        servicios</router-link
      >
    </div>
    <SubConsultancy />
  </div>
</template>

<script>
import HeroName from "@/components/HeroName.vue";
import SubConsultancy from "@/components/SubConsultancy.vue";

export default {
  components: {
    HeroName,
    SubConsultancy,
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
        "consultoria-sm.webp",
        // "covertura-sm.webp",
        // "mantenimiento-sm.webp",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/services.scss";
</style>
