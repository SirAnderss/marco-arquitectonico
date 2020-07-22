<template>
  <div>
    <div class="editor-blog">
      <h1>Editor</h1>
      <button @click="showEditor = true">Abrir editor</button>
      <div v-if="showEditor" class="editor-box">
        <input
          type="text"
          v-model="data.title"
          class="_input_field"
          placeholder="Título"
        />
        <editor
          autofocus
          ref="editor"
          :init-data="initData"
          :config="config"
          header
          list
          code
          inlineCode
          personality
          embed
          linkTool
          marker
          table
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
        <button @click="save" :loading="isCreating" :disabled="isCreating">
          {{ isCreating ? "Creando post..." : "Crear post" }}
        </button>
      </div>
    </div>
    <div class="blog-preview" ref="preview"></div>
  </div>
</template>

<script>
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import CodeTool from "@editorjs/code";
import Paragraph from "@editorjs/paragraph";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Checklist from "@editorjs/checklist";
import Marker from "@editorjs/marker";
import Warning from "@editorjs/warning";
import RawTool from "@editorjs/raw";
import Quote from "@editorjs/quote";
import InlineCode from "@editorjs/inline-code";
import Delimiter from "@editorjs/delimiter";
import ImageTool from "@editorjs/image";
export default {
  name: "EditorBlog",
  data() {
    return {
      showEditor: true,
      config: {
        tools: {
          header: {
            class: Header,
            config: {
              placeholder: "Enter a header",
              levels: [2, 3, 4],
              defaultLevel: 2,
            },
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          code: {
            class: CodeTool,
          },
          paragraph: {
            class: Paragraph,
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
                imgur: true,
              },
            },
          },
          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
            },
          },
          checklist: {
            class: Checklist,
          },
          Marker: {
            class: Marker,
            shortcut: "CMD+SHIFT+M",
          },
          warning: {
            class: Warning,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+W",
            config: {
              titlePlaceholder: "Title",
              messagePlaceholder: "Message",
            },
          },
          raw: RawTool,
          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+O",
            config: {
              quotePlaceholder: "Enter a quote",
              captionPlaceholder: "Quote's author",
            },
          },
          inlineCode: {
            class: InlineCode,
            shortcut: "CMD+SHIFT+M",
          },
          delimiter: Delimiter,
          image: {
            class: ImageTool,
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
      },
      initData: null,
      data: {
        title: "",
        post: "",
        slug: "",
        jsonData: null,
      },
      articleHTML: "",
      category: [],
      tag: [],
      isCreating: false,
    };
  },
  methods: {
    async save() {
      const response = await this.$refs.editor.state.editor
        .save()
        .then((res) => res);
      let data = response;
      await this.outputHtml(data.blocks);
      this.data.post = this.articleHTML;
      this.data.jsonData = JSON.stringify(data);
      if (this.data.post.trim() == "") return "Post is required";
      if (this.data.title.trim() == "") return "Title is required";

      this.isCreating = true;

      // Script guardar

      this.isCreating = false;
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
          case "delimeter":
            this.articleHTML += this.makeDelimeter(obj);
            break;
          default:
            return "";
        }
      });
    },
    async preview() {
      const response = await this.$refs.editor.state.editor
        .save()
        .then((res) => res);
      let data = response;
      await this.outputHtml(data.blocks);
      this.$refs.preview.innerHTML = `<h1>${this.data.title}</h1><br/>`+this.articleHTML;
      this.articleHTML = "";
    },
    clear() {
      if (this.$refs.preview.innerHTML) {
        this.articleHTML = "";
        this.$refs.preview.innerHTML = "";
      }
    },
  },
  watch: {
    "data.title": function() {
      let tempSlug = this.data.title.toLowerCase().replace(/\s+/gi, " ");
      this.data.slug = tempSlug.replace(/ /g, "-");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.editor-box {
  width: 70%;
  margin: 0 auto;
  padding: 4px 7px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  color: #515a6e;
  background-color: #fff;
  background-image: none;
  z-index: -1;
  ._input_field {
    width: 60%;
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
  }

  &:hover {
    border: 1px solid #57a3f3;
  }

  .codex-editor__redactor {
    padding-bottom: 70px !important;
    width: 80%;
    margin: 0 auto;
    text-align: left;

    .ce-block {
      border-bottom: $secondary 1px solid;
    }
    .ce-block--focused {
      border-bottom: chocolate 1px solid;
    }
  }
}
</style>
