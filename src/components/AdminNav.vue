<template>
  <div>
    <nav class="admin-nav">
      <div class="logo">
        <router-link to="/"
          ><img src="@/assets/img/logos/logo.webp" alt="Marco Arquitectónico"
        /></router-link>
      </div>
      <div class="profile">
        <img
          src="@/assets/img/profile.webp"
          alt="perfil"
          @click="show = !show"
        /><i class="icon-circle-down" @click="show = !show"></i>
        <div class="exit" :class="{ show: show }">
          <ul>
            <!-- <router-link to="/new"><li>Nuevo</li></router-link>
            <router-link to="/edit"> <li>Editar</li></router-link> -->
            <li @click="logout">Salir</li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "AdminNav",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          let me = this;
          me.$router.replace("/");
        })
        .catch(function(error) {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets//scss/_variables.scss";
.admin-nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background: rgb(78, 78, 78);
  height: 120px;
  box-shadow: 1px 1px 7px $secondary;

  .logo {
    padding: 10px;
    margin-left: 60px;
    img {
      width: 90px;
    }
  }

  .profile {
    padding: 10px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    i {
      color: #fff;
      cursor: pointer;
    }
    img {
      width: 80px;
      opacity: 0.7;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
    .exit {
      position: absolute;
      top: 120px;
      right: 25px;
      width: 160px;
      height: auto;
      border: 1px solid transparent;
      border-radius: 0 0 3px 3px;
      font-size: 20px;
      box-shadow: 2px 2px 10px $secondary;
      display: none;

      ul {
        list-style: none;
        li,
        a {
          padding: 0 15px;
          padding-top: 15px;
          text-decoration: none;
          color: $secondary;
          cursor: pointer;
          &:hover {
            font-weight: bold;
          }
        }

        &:last-child {
          padding-bottom: 15px;
        }
      }
    }
  }
}

@media screen and (max-width: $small) {
  .admin-nav {
    padding: 5px;
    height: 110px;

    .logo {
      padding: 15px;
      margin-left: 5px;
      img {
        width: 70px;
      }
    }

    .profile {
      .exit {
        top: 110px;
      }
    }
  }
}

.show {
  display: block !important;
}
</style>
