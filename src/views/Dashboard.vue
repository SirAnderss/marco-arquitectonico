<template>
  <div class="dashboard">
    <AdminNav />
    <button
      @click="showEditor = !showEditor"
      v-if="this.$route.name === 'Dashboard'"
      :class="{ rotate: showEditor }"
      class="add"
    >
      +
    </button>
    <div class="content">
      <h1>
        Dashboard
      </h1>
      <BlogForm v-if="showEditor" newEditor="true" />
      <div v-if="!showEditor" class="search">
        <input
          type="text"
          v-model="search"
          placeholder="Ingrese la URL del post"
        />
        <button @click="searchPost">Buscar</button>
      </div>
      <div v-if="!showEditor" class="blogs">
        <div class="blog-list">
          <div class="blog-items" v-for="(item, index) in posts" :key="index">
            <div v-if="noItems">No hay posts disponibles.</div>
            <div v-else class="blog-item">
              <div v-if="item.img">
                <img :src="item.img" alt="Marco arquitectónico" />
              </div>
              <div v-else>
                <img
                  :src="require('@/assets/img/marco.webp')"
                  :alt="'Marco arquitectónico' + index"
                />
              </div>
              <router-link
                :to="{
                  name: 'Edit',
                  params: { slug: item.slug },
                  props: { search: item.slug },
                }"
                ><span v-text="item.title"></span
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import AdminNav from "@/components/AdminNav.vue";
import BlogForm from "@/components/BlogForm.vue";
export default {
  name: "Dashboard",
  components: {
    BlogForm,
    AdminNav,
  },
  data() {
    return {
      search: "",
      noItems: false,
      posts: [],
      empty: false,
      showEditor: false,
    };
  },
  methods: {
    getPost(param) {
      const db = firebase.firestore();
      db.collection("marco-arquitectonico")
        .doc(param)
        .get()
        .then((query) => {
          if (query.empty) {
            this.noItems = true;
          } else {
            this.posts.push(query.data());
            this.empty = false;
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
    searchPost() {
      const search = this.search.split("/");

      for (let i = 0; i < search.length; i++) {
        if (i == 4) {
          this.getPost(search[i]);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/fonts.css";
@import "@/assets/scss/_variables.scss";
.dashboard {
  width: 100%;
  color: $secondary;
  .content {
    width: 80%;
    margin: 0 auto;
    h1,
    .search {
      margin: 20px auto;
      text-align: center;
    }

    .search {
      width: 60%;
      margin: 0 auto;

      input {
        width: 100%;
        height: 50px;
        border: 2px double $secondary;
        border-radius: 10px;
        padding-left: 10px;
        font-size: 20px;
        color: $secondary;
        transition: all 0.5s ease;

        &:hover {
          border: 2px double $main;
        }
      }

      button {
        margin-top: 20px;
        border: 2px solid $main;
        border-radius: 5px;
        padding: 15px 40px;
        font-size: 20px;
        background: #fff;
        color: $main;
        transition: all 0.3s ease;

        &:hover {
          border: 2px solid #fff;
          background: $main;
          color: #fff;
        }
      }
    }
    .blogs {
      width: 70%;
      margin: 60px auto;
      position: relative;
      margin-bottom: 100px;
      .blog-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .blog-items {
          margin: 40px;
          .blog-item {
            width: 300px;
            height: 350px;
            box-shadow: 7px 7px 25px $secondary;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            transition: all 0.3s ease-in-out;

            &:hover {
              box-shadow: 7px 7px 25px $dark;

              img {
                filter: blur(2px);
              }
              a {
                font-weight: bold;
              }
            }
            div {
              width: 100%;
              margin: auto 0;
              img {
                width: 100%;
                max-height: 290px;
              }
            }
            a {
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              width: 100%;
              padding: 20px;
              text-transform: uppercase;
              color: $main;
              text-align: right;
            }
          }
        }
      }
      button,
      .no-items {
        position: absolute;
        left: 50%;
        bottom: 10px;
        transform: translate(-50%, 80px);
      }
      button {
        width: 120px;
        padding: 15px;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: bold;
        color: #fff;
        background: $main;
        transition: 0.5s;
        border: 1px solid #fff;
        border-radius: 5px;

        &:hover {
          background: #fff;
          color: $main;
          border: 1px solid $main;
          border-bottom: 5px solid $main;
          padding-bottom: 10px;
        }
      }
      .no-items {
        padding: 15px;
        color: $main;
        font-size: 22px;
        font-weight: bold;
      }
    }
  }
}

.add {
  position: fixed;
  right: 50px;
  bottom: 50px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid transparent;
  color: #fff;
  background: $main;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.8;
  box-shadow: 5px 5px 10px $secondary;
  transition: all 0.5s ease;

  &:hover {
    opacity: 1;
  }
}

.rotate {
  transform: rotate(45deg);
}
</style>
