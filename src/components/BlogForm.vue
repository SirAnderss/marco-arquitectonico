<template>
  <div>
    <div v-if="!noItems">
      <div class="editor-blog">
        <div class="editor-box">
          <input
            type="text"
            v-model="data.title"
            class="_input_field"
            placeholder="Título"
          />
          <editor
            v-if="openEditor || newEditor"
            ref="editor"
            :init-data="initData"
            :config="config"
            header
            list
            inlineCode
            personality
            embed
            linkTool
            marker
            raw
            delimiter
            quote
            image
            warning
            paragraph
            checklist
          />
          <button @click="preview">
            Vista previa
          </button>
          <button
            v-if="$route.name === 'Dashboard'"
            @click="save"
            :loading="isCreating"
            :disabled="isCreating"
          >
            {{ isCreating ? "Creando post..." : "Crear post" }}
          </button>
          <button
            v-if="$route.name === 'Edit'"
            @click="update"
            :loading="isCreating"
            :disabled="isCreating"
          >
            {{ isCreating ? "Actualizando post..." : "Actualizar post" }}
          </button>
        </div>
      </div>
      <div class="blog-view content" ref="preview"></div>
    </div>
    <div v-else class="back">
      <h3>No se han encontrado posts con los criterios de busqueda</h3>
      <router-link to="/dashboard">Volver</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import toastr from "toastr";
import header from "@editorjs/header";
import list from "@editorjs/list";
import paragraph from "@editorjs/paragraph";
import embed from "@editorjs/embed";
import table from "@editorjs/table";
import marker from "@editorjs/marker";
import warning from "@editorjs/warning";
import quote from "@editorjs/quote";
import inlineCode from "@editorjs/inline-code";
import delimiter from "@editorjs/delimiter";
import image from "@editorjs/image";
export default {
  name: "BlogForm",
  props: ["newEditor"],
  data() {
    return {
      toastOptions: {
        timeOut: 5000,
        closeButton: true,
        progressBar: true,
        positionClass: "toast-bottom-right",
        showDuration: 300,
        hideDuration: 1000,
        extendedTimeOut: 1000,
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
      },
      config: {
        autofocus: true,
        i18n: {
          messages: {
            ui: {},
            toolNames: {},
            tools: {},
            blockTunes: {},
          },
        },
        tools: {
          header: {
            class: header,
            config: {
              placeholder: "Ingrese un texto de encabezado",
              levels: [2, 3, 4],
              defaultLevel: 2,
            },
          },
          list: {
            class: list,
            inlineToolbar: true,
          },
          paragraph: {
            class: paragraph,
            config: {
              placeholder: "Ingrese el texto",
            },
          },
          embed: {
            class: embed,
            config: {
              services: {
                youtube: true,
                coub: true,
                imgur: true,
              },
            },
          },
          table: {
            class: table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
            },
          },
          marker: {
            class: marker,
            shortcut: "CMD+SHIFT+M",
          },
          warning: {
            class: warning,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+W",
            config: {
              titlePlaceholder: "Title",
              messagePlaceholder: "Message",
            },
          },
          quote: {
            class: quote,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+O",
            config: {
              quotePlaceholder: "Ingrese una cita",
              captionPlaceholder: "Autor de la cita",
            },
          },
          inlineCode: {
            class: inlineCode,
            shortcut: "CMD+SHIFT+M",
          },
          delimiter: delimiter,
          image: {
            class: image,
            config: {
              uploader: {
                uploadByFile(file) {
                  const uuid = uuidv4();
                  const storageRef = firebase.storage().ref();
                  return storageRef
                    .child("img/" + uuid)
                    .put(file)
                    .then(async (snapshot) => {
                      try {
                        let imgUrl = await snapshot.ref.getDownloadURL();
                        return {
                          success: 1,
                          file: {
                            url: imgUrl,
                          },
                        };
                      } catch (error) {
                        console.error(error.message);
                        return {
                          success: 0,
                        };
                      }
                    });
                },
              },
            },
          },
        },
        data: {},
      },
      noItems: false,
      openEditor: false,
      initData: null,
      data: {
        title: "",
        post: "",
        slug: "",
        jsonData: null,
      },
      // searchPost: "",
      image: null,
      articleHTML: "",
      isCreating: false,
    };
  },
  methods: {
    async save() {
      const db = firebase.firestore();
      const response = await this.$refs.editor.state.editor
        .save()
        .then((res) => res);
      let data = response;
      await this.outputHtml(data.blocks);
      this.data.post = this.articleHTML;
      this.data.jsonData = JSON.stringify(data);
      if (this.data.title.trim() === "") {
        toastr.error(
          "Para crear el post debe agregar un título",
          "Error!",
          this.toastOptions
        );
        return;
      }
      if (this.data.post.trim() === "") {
        toastr.error(
          "Para crear el post debe agregar el contenido",
          "Error!",
          this.toastOptions
        );
        return;
      }

      this.isCreating = true;

      let checkPost = db.collection("marco-arquitectonico").doc(this.data.slug);

      await checkPost
        .get()
        .then((doc) => {
          if (doc.exists) {
            toastr.warning(
              "Ya existe un post con el título : " +
                this.data.title.toUpperCase(),
              "Advertencia!",
              this.toastOptions
            );
          } else {
            let title = this.data.title;
            let post = this.data.post.replace(/\s+/gi, " ");
            let slug = this.data.slug;
            let jsonData = this.data.jsonData;
            let img = this.$store.state.imgUrl;
            let toastOptions;

            db.collection("marco-arquitectonico")
              .doc(slug)
              .set({
                title: title,
                post: post,
                img: img,
                slug: slug,
                jsonData: jsonData,
                created: firebase.firestore.FieldValue.serverTimestamp(),
              })
              .then(() => {
                toastr.success(
                  "El post ha sido crado exitosamente",
                  "Éxito!",
                  toastOptions
                );

                this.clearInputs();
              })
              .catch((error) => {
                toastr.error(
                  "Hubo un problema creando el post, intente nuevamente",
                  "Error!",
                  toastOptions
                );
                console.error("Error writing document: ", error);
              });
          }
        })
        .catch(function(error) {
          toastr.error(
            "Hubo un problema de comunicación con el servidor, intente nuevamente}",
            "Error!",
            this.toastOptions
          );
          console.log("Error getting document:", error);
        });
    },
    async update() {
      const db = firebase.firestore();
      const response = await this.$refs.editor.state.editor
        .save()
        .then((res) => res);
      let data = response;
      await this.outputHtml(data.blocks);
      this.data.post = this.articleHTML;
      this.data.jsonData = JSON.stringify(data);
      if (this.data.title.trim() === "") {
        toastr.error(
          "Para crear el post debe agregar un título",
          "Error!",
          this.toastOptions
        );
        return;
      }
      if (this.data.post.trim() === "") {
        toastr.error(
          "Para crear el post debe agregar el contenido",
          "Error!",
          this.toastOptions
        );
        return;
      }

      this.isCreating = true;
      let title = this.data.title;
      let post = this.data.post.replace(/\s+/gi, " ");
      let slug = this.data.slug;
      let jsonData = this.data.jsonData;
      let img = this.$store.state.imgUrl;
      let toastOptions;

      db.collection("marco-arquitectonico")
        .doc(slug)
        .set({
          title: title,
          post: post,
          img: img,
          slug: slug,
          jsonData: jsonData,
          created: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          toastr.success(
            "El post ha sido crado exitosamente",
            "Éxito!",
            toastOptions
          );
          this.clearInputs();
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          toastr.error(
            "Hubo un problema actualizando el post, intente nuevamente",
            "Error!",
            toastOptions
          );
          console.error("Error writing document: ", error);
        });
    },
    getImage(imgUrl) {
      this.image = imgUrl;
    },
    outputHtml(articleObj) {
      articleObj.map((obj) => {
        switch (obj.type) {
          case "paragraph":
            this.articleHTML += this.makeParagraph(obj);
            break;
          case "image":
            this.articleHTML += this.makeImage(obj);
            break;
          case "header":
            this.articleHTML += this.makeHeader(obj);
            break;
          case "raw":
            this.articleHTML += `<div class="ce-block">
                                  <div class="ce-block__content">
                                    <div class="ce-code">
                                      <code>${obj.data.html}</code>
                                    </div>
                                  </div>
                                </div>\n`;
            break;
          case "code":
            this.articleHTML += this.makeCode(obj);
            break;
          case "list":
            this.articleHTML += this.makeList(obj);
            break;
          case "quote":
            this.articleHTML += this.makeQuote(obj);
            break;
          case "warning":
            this.articleHTML += this.makeWarning(obj);
            break;
          case "checklist":
            this.articleHTML += this.makeChecklist(obj);
            break;
          case "embed":
            this.articleHTML += this.makeEmbed(obj);
            break;
          case "delimiter":
            this.articleHTML += this.makeDelimeter(obj);
            break;
          case "table":
            this.articleHTML += this.makeTable(obj);
            break;
          default:
            return "";
        }
      });
    },
    async clearInputs() {
      this.isCreating = false;
      this.articleHTML = "";
      await this.$refs.editor.state.editor.clear();
      this.data.title = "";
      console.log("Inputs cleared");
    },
    async preview() {
      const response = await this.$refs.editor.state.editor
        .save()
        .then((res) => res);
      let data = response;
      await this.outputHtml(data.blocks);
      this.$refs.preview.innerHTML =
        `<h1 class="blog_post_h1">${this.data.title}</h1><br/>` +
        this.articleHTML;
      this.articleHTML = "";
    },
    async search() {
      const db = firebase.firestore();
      await db
        .collection("marco-arquitectonico")
        .doc(this.$route.params.slug)
        .get()
        .then((query) => {
          if (query.empty) {
            this.noItems = true;
          } else {
            let data = query.data();
            this.config.data = JSON.parse(data.jsonData);
            this.data.title = data.title;
            this.data.jsonData = data.jsonData;
            this.openEditor = true;
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
    onInitialized(editor) {
      console.log(editor);
    },
  },
  watch: {
    "data.title": function() {
      const cleanSlug = this.data.title.toLowerCase().replace(/\s+/gi, " ");
      const tempSlug = cleanSlug.replace(/ /g, "-");

      const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      };

      const slug = removeAccents(tempSlug);
      this.data.slug = slug;
    },
  },
  computed: {
    ...mapState(["searchPost"]),
  },
  created() {
    if (this.$route.params.slug) {
      this.search();
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "../assets/css/blog.css";
.editor-box {
  width: 70%;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 14px;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  color: #515a6e;
  background-color: #fff;
  background-image: none;
  z-index: -1;

  ._input_field {
    position: relative;
    transform: translateX(-50%);
    width: 60%;
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
    margin: 5px auto;
    left: 50%;

    &:hover {
      border: 1px solid $main;
    }
  }

  &:hover {
    border: 1px solid #57a3f3;
  }

  button {
    width: 200px;
    padding: 15px;
    margin-right: 15px;
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
}

.content {
  border: 1px solid #dcdee2;
  margin: 60px auto !important;
}

.back {
  widows: 100%;
  text-align: center;
  margin: 40px auto;
  line-height: 2em;
}
</style>
