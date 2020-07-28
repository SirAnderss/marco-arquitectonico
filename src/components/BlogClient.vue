<template>
  <div class="blogs">
    <div class="blog-list">
      <div class="blog-items" v-for="(item, index) in blogs" :key="index">
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
              name: 'BlogView',
              params: { slug: item.slug },
              props: { search: item.slug },
            }"
            ><span v-text="item.title"></span
          ></router-link>
        </div>
      </div>
    </div>
    <div class="no-items" ref="notFound" :class="{ show: show }">
      <router-link to="/contact"
        >Contáctenos ya para solicitar una cotización de nuestros
        servicios</router-link
      >
    </div>
    <button @click="nextLoad" :class="{ hide: empty }" :disabled="empty">
      Siguiente
    </button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import 'firebase/firestore';
export default {
  name: "BlogClient",
  data() {
    return {
      blogs: [],
      last: null,
      noItems: false,
      empty: true,
      show: false,
    };
  },
  methods: {
    getPosts() {
      const db = firebase.firestore();
      db.collection("marco-arquitectonico")
        .limit(4)
        .orderBy("created", "desc")
        .get()
        .then((query) => {
          if (query.empty) {
            this.noItems = true;
          } else {
            this.last = query.docs[query.docs.length - 1];
            query.forEach((item) => {
              this.blogs.push(item.data());
            });
            this.empty = false;
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
    nextLoad() {
      const db = firebase.firestore();
      db.collection("marco-arquitectonico")
        .limit(2)
        .orderBy("created", "desc")
        .startAfter(this.last)
        .get()
        .then((query) => {
          if (!query.empty) {
            this.last = query.docs[query.docs.length - 1];
            query.forEach((item) => {
              this.blogs.push(item.data());
            });
          } else {
            // this.$refs.notFound.innerHTML = `<span class="not_found">No se encontraron mas posts.</span>`;
            this.show = true;
            this.empty = true;
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.blogs {
  width: 70%;
  margin: 60px auto;
  position: relative;
  margin-bottom: 80px;
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
  button {
    position: absolute;
    left: 50%;
    bottom: 20px;
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
    display: none;
    width: 100%;
    text-align: center;
    color: $main;
    text-transform: uppercase;
    font-size: 23px;
    font-weight: bold;
  }
}
.hide {
  display: none;
}

.show {
  display: block !important;
}
</style>
