<template>
  <div>
    <div class="blog-view">
      <h1 class="blog_post_h1" v-text="title"></h1>
      <div ref="post"></div>
      <Back />
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import 'firebase/firestore';
import Back from "@/components/Back.vue";
export default {
  name: "Blogview",
  props: ["slug"],
  components: {
    Back,
  },
  data() {
    return {
      title: null,
      post: null,
    };
  },
  methods: {
    getPost() {
      const db = firebase.firestore();
      const post = db.collection("marco-arquitectonico").doc(this.slug);

      post
        .get()
        .then((query) => {
          this.title = query.data().title;
          this.post = query.data().post;
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
  },
  watch: {
    post: function() {
      this.$refs.post.innerHTML = this.post;
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/blog.css";
</style>
