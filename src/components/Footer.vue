<template>
  <div class="footer">
    <div class="social">
      <router-link to="/"
        ><img
          class="logo"
          src="@/assets/img/logos/logo.webp"
          alt="Marco Arquitectónico "
          srcset=""
      /></router-link>
      <div class="social-links">
        <a href="https://www.facebook.com/markoarkitecto" target="_blank"
          ><i class="icon-facebook"></i
        ></a>
        <a href="https://twitter.com/@markoarkitecto" target="_blank"
          ><i class="icon-twitter"></i
        ></a>
        <a href="https://www.instagram.com/markoarkitecto/" target="_blank"
          ><i class="icon-instagram"></i
        ></a>
        <a
          href="https://empresas.habitissimo.com.co/pro/useche-diseno-y-construcciones-s-a-s"
          target="_blank"
          ><img src="@/assets/img/icons/hb.webp" alt="Habitissimo"
        /></a>
        <a href="mailto:contacto@marcoarquitectonico.com.co"
          ><i class="icon-rss"></i
        ></a>
      </div>
      <p class="copy">
        Copyright © {{ thisYear }} Todos los derechos reservados |
        <a href="https://github.com/SirAnderss">H&R Dev</a>
      </p>
    </div>
    <div class="navigation">
      <div class="foo-services">
        <h3>Servicios</h3>
        <router-link to="/services/consultancy"
          >Consultoria en diseño y arquitectura</router-link
        >
        <router-link to="/services/building"
          >Proyectos de construcción</router-link
        >
        <router-link to="/services/maintenance">Mantenimiento P.H.</router-link>
        <router-link to="/services/covering"
          >Recubrimientos arquitectónicos</router-link
        >
      </div>
      <div class="foo-menu">
        <h3>Menú</h3>
        <router-link to="/">Inicio</router-link>
        <router-link to="/services">Servicios</router-link>
        <router-link to="/contact">Contactanos</router-link>
        <router-link to="/blog">Blog</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentDate: "",
      thisYear: "",
    };
  },
  methods: {
    currentYear() {
      this.thisYear = new Date().getFullYear();
    },
  },
  mounted() {
    this.currentYear();
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/fonts.css";
@import "@/assets/scss/_variables.scss";

.footer {
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  margin: 0 auto;
  background: #333;
  padding: 30px 0;

  a {
    color: $main;
  }

  .social {
    display: flex;
    flex-flow: column;
    align-items: center;
    color: #fff;

    .logo {
      width: 100px;
      border: 1px solid transparent;
      border-radius: 50%;
      background: #fff;
    }

    .social-links {
      margin: 10px auto;
      a {
        font-size: 25px;
        margin-left: 10px;
        color: #fff;

        img {
          width: 25px;
        }
      }
    }

    .copy {
      margin: auto 20px;
    }
  }

  .navigation {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    color: #fff;

    .foo-services,
    .foo-menu {
      display: inherit;
      flex-flow: column;

      h3 {
        margin: 7px;
      }

      a {
        margin: 5px;
        font-weight: 550;
      }
    }
  }
}

@media screen and (max-width: $medium) {
  .footer {
    grid-template-columns: 100%;
    padding: 40px;

    .social {
      order: 1;
      margin-top: 30px;
    }
  }
}

@media screen and (max-width: $small) {
  .footer {
    .navigation {
      flex-flow: column;
      .foo-services {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
