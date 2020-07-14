<template>
  <div class="services">
    <HeroName page="Servicios" />
    <div class="consultancy">
      <h2>Proyectos de consultoria</h2>
      <div>
        <img
          src="@/assets/img/consultoria.webp"
          alt="Consultoria en construcción"
        />
        <p>
          ¿Cuántas veces ha escuchado que un proyecto no consigue entregar los
          beneficios estimados? ¿Es algo tan habitual? ¿A qué se debe? Nuestro
          equipo de consultoría en arquitectura e ingeniería está listo para
          asesorar, orientar y acompañar el proceso de consolidación de sus
          proyectos, de acuerdo con la planificación estimada y acorde con su
          presupuesto, reduciendo el riesgo de imprevistos. <br />
          <router-link to="/services/consultancy"
            ><button>Leer más...</button></router-link
          >
        </p>
      </div>
    </div>
    <div class="building">
      <h2>Construcción</h2>
      <div>
        <img src="@/assets/img/construccion.webp" alt="Construcción" />
        <p>
          ¿Pensando en la construcción, adecuación y/o remodelación de sus
          espacios comercial o de vivienda? En Marco Arquitectónico SAS
          ofrecemos un amplio portafolio de servicios de obra civil incluyendo,
          redes eléctricas, de voz y datos, hidráulicas y acabados, siempre
          orientados por los valores de calidad, control presupuestal,
          responsabilidad y compromiso. <br />
          <router-link to="/services/consultancy"
            ><button>Leer más...</button></router-link
          >
        </p>
      </div>
    </div>
    <div class="mantenance">
      <h2>Mantenimiento P.H.</h2>
      <div>
        <img src="@/assets/img/mantenimiento.webp" alt="Mantenimiento P.H." />
        <p>
          Factores climáticos y de contaminación como la alta polución en
          nuestras principales ciudades contribuyen en el deterioro no sólo de
          los materiales de la fachada, sino además de su estética. Todo ello
          afecta la vida útil de la edificación y resta valor a su inversión.
          <br />
          <router-link to="/services/maintenance">
            <button>Leer más...</button></router-link
          >
        </p>
      </div>
    </div>
    <div class="covering">
      <h2>Recubrimiento Arquitectónico</h2>
      <div>
        <img
          src="@/assets/img/revestimiento.webp"
          alt="Recubrimiento Arquitectónico"
        />
        <p>
          El impacto visual de su proyecto de inversión constructivo es un
          factor clave para la identidad y valores corporativos que se quieren
          transmitir. La tendencia arquitectónica en fachada incluye el uso de
          recubrimiento con alto nivel de aislamiento, durabilidad y
          expresividad estética, resaltando una apariencia prestigiosa,
          estéticamente agradable y sostenible. <br />
          <router-link to="/services/covering"
            ><button>Leer más...</button></router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HeroName from "@/components/HeroName.vue";

export default {
  components: {
    HeroName,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.services {
  width: 100%;
  .hero-name {
    margin-bottom: 80px;
  }
  .consultancy,
  .building,
  .mantenance,
  .covering {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    padding: 0 10%;
    padding-bottom: 80px;
    display: flex;
    flex-flow: column;

    h2 {
      font-size: 60px;
      margin: 15px 0;
    }
    div {
      display: inherit;
      justify-content: space-between;
      align-items: center;
      img,
      p {
        width: calc(50% - 15px);
      }

      img {
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
        border-radius: 5px;
      }

      p {
        font-size: 22px;
        left: 40px;
        text-align: justify;
      }

      button {
        margin-top: 20px;
        width: 140px;
        padding: 15px;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: bold;
        transition: 0.5s;
        border-radius: 5px;
      }
    }
  }

  .consultancy,
  .mantenance {
    color: $secondary;
    div {
      button {
        border: 0;
        background: $main;
        color: #fff;

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

  .building,
  .covering {
    background: $main;
    color: #fff;
    div {
      img {
        order: 1;
      }

      button {
        float: right;
        border: 0;
        color: $main;

        &:hover {
          background: $main;
          color: #fff;
          border: 1px solid #fff;
          border-bottom: 5px solid #fff;
          padding-bottom: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: $large) {
  .services {
    .consultancy,
    .building,
    .mantenance,
    .covering {
      padding-bottom: 40px;
      div {
        flex-flow: column;
        img,
        p {
          width: 80%;
        }
        p {
          margin-top: 30px;
        }
      }
    }

    .building,
    .covering {
      div {
        img {
          order: 0;
        }

        button {
          float: left;
        }
      }
    }
  }
}

@media screen and (max-width: $small) {
  .services {
    .consultancy,
    .building,
    .mantenance,
    .covering {
      h2 {
        font-size: 25px;
      }
      div {
        p {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
