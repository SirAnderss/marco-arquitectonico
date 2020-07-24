<template>
  <div class="dashboard">
    <AdminNav />
    <div class="content">
      <h1>
        Dashboard
      </h1>
      <BlogForm />
      <div class="blogs">
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
                  name: 'BlogView',
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
import firebase from "firebase";
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
      noItems: null,
      posts: [],
    };
  },
  methods: {
    getPosts() {
      const db = firebase.firestore();
      db.collection("marco-arquitectonico")
        .limit(1)
        .orderBy("created", "desc")
        .get()
        .then((query) => {
          if (query.empty) {
            this.noItems = true;
          } else {
            this.last = query.docs[query.docs.length - 1];
            query.forEach((item) => {
              this.posts.push(item.data());
            });
            this.empty = false;
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
.dashboard {
  width: 100%;
  color: $secondary;
  .content {
    width: 80%;
    margin: 0 auto;
    h1 {
      margin: 20px auto;
      text-align: center;
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
</style>
