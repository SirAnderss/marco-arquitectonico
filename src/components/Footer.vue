<template>
  <div class="footer">
    <div class="social">
      <router-link to="/"
        ><img src="@/assets/img/logo.webp" alt="Marco Arquitectónico " srcset=""
      /></router-link>
      <div class="social-links">
        <a href="#!"><img src="@/assets/img/icons/fb.webp" alt="Facebook"/></a>
        <a href="#!"><img src="@/assets/img/icons/tw.webp" alt="Twitter"/></a>
        <a href="#!"><img src="@/assets/img/icons/li.webp" alt="LinkedIn"/></a>
        <a href="#!"><img src="@/assets/img/icons/in.webp" alt="Instagram"/></a>
        <a href="#!"><img src="@/assets/img/icons/rss.webp" alt="RSS"/></a>
      </div>
      <p class="copy">
        Copyright © {{ thisYear }} Todos los derechos reservados |
        <a href="https://github.com/SirAnderss">H&R Dev</a>
      </p>
    </div>
    <div class="navigation">
      <div class="foo-services">
        <h3>Servicios</h3>
        <router-link to="/servicios"
          >Consultoria en diseño y arquitectura</router-link
        >
        <router-link to="/servicios">Proyectos de construcción</router-link>
        <router-link to="/servicios">Mantenimiento P.H.</router-link>
        <router-link to="/servicios"
          >Recubrimientos arquitectónicos</router-link
        >
      </div>
      <div class="foo-menu">
        <h3>Menú</h3>
        <router-link to="/">Inicio</router-link>
        <router-link to="/nosotros">Nosotros</router-link>
        <router-link to="/servicios">Servicios</router-link>
        <router-link to="/contacto">Contactanos</router-link>
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
@import "@/assets/scss/_variables.scss";

.footer {
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  margin: 30px auto;

  a {
    color: $main;
  }

  .social {
    display: flex;
    flex-flow: column;
    align-items: center;

    img {
      width: 100px;
    }

    .social-links {
      margin: 10px auto;
      a {
        img {
          width: 30px;
          margin: 5px;
        }
      }
    }

    .copy{
      margin: auto 20px;
    }
  }

  .navigation {
    display: flex;
    flex-flow: row;
    justify-content: space-around;

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
      .foo-services{
        margin-bottom: 20px;
      }
    }
  }
}
</style>
