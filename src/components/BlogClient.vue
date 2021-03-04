<template>
  <div class="blogs">
    <div class="blog-list">
      <div class="blog-items" v-for="(item, index) in blogs" :key="index">
        <div v-if="noItems">No hay posts disponibles.</div>
        <div class="card">
          <div class="card__image-container">
            <img
              v-if="item.img"
              class="card__image"
              :src="item.img"
              alt="Marco arquitectónico"
            />
            <img
              v-else
              class="card__image"
              :src="require('@/assets/img/marco.webp')"
              :alt="'Marco arquitectónico' + index"
            />
          </div>

          <svg class="card__svg" viewBox="0 0 800 500">
            <path
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
              stroke="transparent"
              fill="#fff"
            />
            <path
              class="card__line"
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
              stroke="#fff"
              stroke-width="3"
              fill="transparent"
            />
          </svg>

          <div class="card__content">
            <router-link
              :to="{
                name: 'BlogView',
                params: { slug: item.slug },
                props: { search: item.slug },
              }"
            >
              <p v-text="item.title"></p>
            </router-link>
          </div>
        </div>
        <!-- <div v-else class="blog-item">
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
        </div> -->
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
import "firebase/firestore";
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

    img {
      max-width: 100%;
    }
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

      .card {
        position: relative;
        width: 300px;
        height: 450px;
        border-radius: 6px;
        color: #aaa;
        box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2),
          0 0 1rem rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transition: all 0.3s ease-in-out;

        &__image-container {
          // margin: -2rem -2rem 1rem -4rem;
          height: 20rem;
          width: 100%;
        }

        &__line {
          opacity: 0;
          animation: LineFadeIn 0.8s 0.8s forwards ease-in;
        }

        &__image {
          opacity: 0;
          width: 100%;
          z-index: -1;
          animation: ImageFadeIn 0.8s 1.4s forwards;
        }

        &__content {
          display: flex;
          height: 6rem;
          align-items: center;
          // margin-top: 1rem;
          padding: 0 2rem;
          opacity: 0;
          animation: ContentFadeIn 0.8s 1.6s forwards;
          text-align: end;
          text-transform: uppercase;
          a {
            color: $main;
          }
        }

        &__svg {
          position: absolute;
          left: 0;
          top: 135px;
        }
        &:hover {
          &:hover {
            box-shadow: 7px 7px 25px $dark;

            img {
              filter: blur(2px);
            }
            a {
              font-weight: bold;
            }
          }
        }
      }

      @keyframes LineFadeIn {
        0% {
          opacity: 0;
          d: path(
            "M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 "
          );
          stroke: #fff;
        }
        50% {
          opacity: 1;
          d: path(
            "M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300"
          );
          stroke: #e27900;
        }
        100% {
          opacity: 1;
          d: path(
            "M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400"
          );
          stroke: #e27900;
        }
      }

      @keyframes ContentFadeIn {
        0% {
          transform: translateY(-1rem);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @keyframes ImageFadeIn {
        0% {
          transform: translate(-0.5rem, -0.5rem) scale(1.05);
          opacity: 0;
          filter: blur(2px);
        }
        50% {
          opacity: 1;
          filter: blur(2px);
        }
        100% {
          transform: translateY(0) scale(1);
          opacity: 1;
          filter: blur(0);
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

@media screen and (max-width: $medium) {
  .blogs {
    .blog-list {
      .card {
        &__image-container {
          height: 15rem;
        }

        &__content {
          padding: 0 0.2rem;
        }
      }
    }
  }
}

.hide {
  display: none;
}

.show {
  display: block !important;
}
</style>
