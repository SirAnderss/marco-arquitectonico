<template>
  <div class="editor-blog">
    <h1>Editor</h1>
    <editor
      autofocus
      ref="editor"
      holder-id="codex-editor"
      save-button-id="save-button"
      :init-data="initData"
      :save="onSave"
      :config="config"
      class="editor-box"
      :initialized="onInitialized"
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
    <button @click="save">Guardar</button>
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
                        console.log(imgUrl);
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
    };
  },
  methods: {
    onSave(response) {
      console.log(response);
    },
    async save() {
      this.$refs.editor;
    },
    onInitialized(editor) {
      console.log(editor);
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
  font-size: 14px;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  color: #515a6e;
  background-color: #fff;
  background-image: none;
  z-index: -1;

  &:hover {
    border: 1px solid #57a3f3;
  }

  .codex-editor__redactor {
    padding-bottom: 70px !important;
    width: 80%;
    margin: 0 auto;

    .ce-block {
      border-bottom: $secondary 1px solid;
    }
    .ce-block--focused {
      border-bottom: chocolate 1px solid;
    }
  }
}
</style>
