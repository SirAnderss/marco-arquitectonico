<template>
  <nav
    class="nav-bar"
    :style="[position[1] > 150 ? { height: '100px' } : { height: '120px' }]"
  >
    <div class="logo">
      <router-link to="/"
        ><img
          src="@/assets/img/logos/logo.webp"
          alt="Marco Arquitectónico"
          :style="[position[1] > 150 ? { width: '60px' } : { width: '80px' }]"
      /></router-link>
    </div>
    <div class="menu-items" :class="{ open: mainMenu }">
      <ul>
        <li @click="closeMenu"><router-link to="/">Inicio</router-link></li>
        <li @click="openServices" class="services">
          <a href="#!">Servicios</a>
          <ul
            :class="{ open: services }"
            :style="[position[1] > 150 ? { top: '100px' } : { top: '120px' }]"
          >
            <li @click="closeMenu">
              <router-link to="/services/consultancy"
                >Consultoria en diseño y arquitectura</router-link
              >
            </li>
            <li @click="closeMenu">
              <router-link to="/services/building"
                >Proyectos de construcción</router-link
              >
            </li>
            <li @click="closeMenu">
              <router-link to="/services/maintenance"
                >Mantenimiento P.H.</router-link
              >
            </li>
            <li @click="closeMenu">
              <router-link to="/services/covering"
                >Recubrimientos arquitectónicos</router-link
              >
            </li>
            <li @click="closeMenu">
              <router-link to="/blog">Blog</router-link>
            </li>
          </ul>
        </li>
        <li @click="closeMenu" class="dropdown">
          <router-link to="/services"
            >Servicios<i class="icon-arrow-down"></i
          ></router-link>
          <ul
            :class="{ open: services }"
            :style="[position[1] > 150 ? { top: '100px' } : { top: '120px' }]"
          >
            <li @click="closeMenu">
              <router-link to="/services/consultancy"
                >Consultoria en diseño y arquitectura</router-link
              >
            </li>
            <li @click="closeMenu">
              <router-link to="/services/building"
                >Proyectos de construcción</router-link
              >
            </li>
            <li @click="closeMenu">
              <router-link to="/services/maintenance"
                >Mantenimiento P.H.</router-link
              >
            </li>
            <li @click="closeMenu">
              <router-link to="/services/covering"
                >Recubrimientos arquitectónicos</router-link
              >
            </li>
          </ul>
        </li>
        <li @click="closeMenu">
          <router-link to="/contact">Contactanos</router-link>
        </li>
        <li @click="closeMenu"><router-link to="/blog">Blog</router-link></li>
      </ul>
    </div>
    <div class="nav-mobile" @click="openMenu"><span></span></div>
  </nav>
</template>

<script>
import windowScrollPosition from "../window-scroll-position";
import { mapState, mapMutations } from "vuex";

export default {
  mixins: [windowScrollPosition("position")],
  name: "Navigation",
  computed: {
    ...mapState(["services", "mainMenu"]),
  },
  methods: {
    ...mapMutations(["openServices", "openMenu", "closeMenu"]),
    onResize() {
      if (screen.width > 991) {
        this.$store.commit("closeMenu", false);
      }
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style scoped lang="scss">
@import "@/assets//scss/_variables.scss";
@import "@/assets//scss/fonts.scss";

.nav-bar {
  display: grid;
  position: fixed;
  grid-template-columns: 20% 80%;
  background: #fff;
  width: 100%;
  z-index: 99;
  transition: 0.5s;
  box-shadow: 0 7px 12px rgba(0, 0, 0, 0.35);
  top: 30px;

  .logo {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: auto 15px;
  }

  .menu-items {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 20px;

    ul {
      height: 100%;
      display: flex;
      justify-content: space-between;

      li {
        cursor: pointer;
        list-style: none;
        transition: 0.3s;

        &:hover {
          border-bottom: 5px rgba(226, 121, 0, 0.6) solid;
          box-shadow: 0 7px 12px rgba(0, 0, 0, 0.35);
        }

        a {
          padding: 0 30px;
          height: 100%;
          display: flex;
          align-items: center;
          text-decoration: none;
          color: $secondary;
          font-weight: 550;

          i {
            margin-left: 15px;
            font-weight: bold;
          }
        }

        ul {
          display: none;
          position: absolute;
          margin: 0;
          padding: 0;
          height: auto;
          box-shadow: 5px 7px 12px rgba(0, 0, 0, 0.35);
          transition: all 800ms ease;
          font-size: 15px;
          background: #fff;
          transition: 0.3s;

          li {
            text-align: left;
            width: 100%;
            height: 50px;
            margin: 0;
            border-bottom: $secondary 1px solid;
            transition: 0.5s;

            &:hover {
              border-top: #2c3e50 1px solid;
              border-bottom: 5px rgba(226, 121, 0, 0.6) solid;
              width: 100%;
            }
          }
        }
      }

      .dropdown:hover {
        ul {
          display: block !important;
          transition: 0.5s;
        }
      }
    }
  }

  .nav-mobile {
    display: none;
  }

  .router-link-exact-active {
    color: $main !important;
  }
}

.open {
  display: block !important;
  transition: 0.5s;
}

@media screen and (min-width: $xlarge) {
  .nav-bar {
    .menu-items {
      ul {
        .dropdown {
          display: block;
        }

        .services {
          display: none;
        }
      }
    }
  }
}

@media screen and (min-width: $large) {
  .nav-bar {
    .menu-items {
      ul {
        .dropdown {
          display: block;
        }

        .services {
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: $large) {
  .nav-bar {
    height: 100px !important;
    transition: all 1s;
    position: absolute;

    .menu-items {
      display: none;
      top: 100px;
      position: absolute;

      ul {
        display: block;
        height: 100px;
        width: 100%;

        li {
          background: #fff;
          transition: ease 0.8;

          a {
            padding: 15px;
            line-height: 20px;
          }

          ul {
            position: static;
            z-index: -1;

            li {
              :hover {
                width: 100%;
              }
            }
          }
        }
        .dropdown {
          display: none;
        }

        .services {
          display: block;
        }
      }
    }

    .nav-mobile {
      display: block;
      position: absolute;
      right: 20px;
      top: 50%;
      cursor: pointer;
      padding: 0 35px;

      span,
      :before,
      :after {
        cursor: pointer;
        height: 6px;
        width: 6px;
        border-radius: 50%;
        position: absolute;
        display: block;
        content: "";
        background: $secondary;
      }

      :before {
        top: -10px;
      }

      :after {
        bottom: -10px;
      }
    }
  }
}

@media screen and (max-width: $small) {
  .nav-bar {
    top: 0;
  }
}
</style>
