<template>
  <div class="blog-view">
    <h1 class="blog_post_h1" v-text="title"></h1>
    <div ref="post"></div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Blogview",
  props: ["slug"],
  data() {
    return {
      title: null,
      post: null,
    };
  },
  methods: {
    getPost() {
      const db = firebase.firestore();
      const post = db
        .collection("marco-arquitectonico")
        .doc("post-de-referencia");

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

<style>
.blog-view {
  margin: 160px auto;
  width: 70%;
  padding: 40px;
  margin-bottom: 100px;
  font-size: 20px;
  color: #3c3d3d;
}

.blog_post_text {
  text-align: justify;
  margin-bottom: 10px;
}

.blog_post_h1,
.blog_post_h2,
.blog_post_h3,
.blog_post_h4 {
  color: #e27900;
  text-transform: uppercase;
}
.blog_post_h1 {
  text-align: center;
  margin-bottom: 25px;
}
.blog_post_h2 {
  margin-bottom: 15px;
}
.blog_post_h3 {
  margin-bottom: 13px;
}
.blog_post_h4 {
  margin-bottom: 10px;
}

.blog_post_ul {
  margin-left: 10px;
  margin-bottom: 10px;
  list-style: none;
  line-height: 20px;
}

.blog_table {
  width: 80%;
  margin: 20px auto;
  border-collapse: collapse;
}

td {
  padding: 5px;
  text-align: justify;
}

.blog_table > tbody > :first-of-type {
  border-bottom: 1px solid #e27900;
  text-align: center;
  font-weight: bold;
}

.blog_table > tbody > tr > td:first-of-type {
  border-right: 1px solid #e27900;
  text-align: right;
  font-weight: bold;
}

.blog_warning {
  width: 60%;
  margin: 20px auto;
  color: #571515;
  background-color: #ebc5c5;
  border-color: #e6c3c3;
  border: 1px solid transparent;
  border-radius: 7px;
}

.blog_warning > .table_warning > h3 {
  padding: 15px;
  text-align: center;
  font-size: 25px;
  background-color: #eeb6b6;
}

.blog_warning > .table_warning > h3 > span {
  margin-right: 15px;
}
.blog_warning > .table_warning > p {
  padding: 15px;
  text-align: center;
}

.post_qoute {
  width: 60%;
  margin: 20px auto;
}

.post_qoute > blockquote {
  background: #e5e5e57a;
  padding: 15px;
  font-size: 27px;
  border: 1px solid transparent;
  border-radius: 5px;
}

.post_qoute > p,
.blog_caption {
  text-align: right;
  font-style: italic;
  font-size: 15px;
}

.blog_image {
  width: 100%;
}

.blog_image > img {
  width: 100%;
}

/* @media screen and (max-width: 576px) {
  .blog-view {
    margin: 120px auto;
    width: 85%;
    padding: 10px;
    margin-bottom: 60px;
    font-size: 15px;
  }

  .blog_post_text {
    text-align: left;
  }

  .blog_table {
    width: 100%;
  }

  .blog_warning {
    width: 90%;
  }

  .blog_warning > .table_warning > h3 {
    padding: 10px;
    text-align: center;
    font-size: 18px;
  }
  .blog_warning > .table_warning > p {
    padding: 15px;
    text-align: left;
  }

  .post_qoute {
    width: 90%;
  }

  .post_qoute > p,
  .blog_caption {
    font-size: 12px;
  }
} */

@media screen and (max-width: 992px) {
  .blog-view {
    margin: 140px auto;
    width: 85%;
    padding: 10px;
    margin-bottom: 60px;
    font-size: 17px;
  }

  .blog_post_text {
    text-align: left;
  }

  .blog_table {
    width: 100%;
  }

  .blog_warning {
    width: 90%;
  }

  .blog_warning > .table_warning > h3 {
    padding: 10px;
    text-align: center;
    font-size: 18px;
  }
  .blog_warning > .table_warning > p {
    padding: 15px;
    text-align: left;
  }

  .post_qoute {
    width: 90%;
  }

  .post_qoute > p,
  .blog_caption {
    font-size: 12px;
  }
}
</style>
