export default {
  methods: {
    makeParagraph(obj) {
      console.log(obj);
      return `<p class="blog_post_text">
                ${obj.data.text}
              </p>`
    },
    makeImage(obj) {
      this.imgUrl = obj.data.file.url;
      const caption = obj.data.caption ? `<div class="blog_caption">
                                            <p>${obj.data.caption}</p>
                                          </div>` : ''
      return `<div class="blog_image">
                <img src="${obj.data.file.url}" alt="${obj.data.caption}"/>
                ${caption}
              </div>`
    },
    makeEmbed(obj) {
      const caption = obj.data.caption ? `<div class="list_item_btm_text">
                                            <p class="nws3_text1"> ${obj.data.caption}</p>
                                          </div>` : ''
      return `<section class="nws3_sec4">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-10 col-lg-8">
                    <div class="list_item_btm">
                      <div class="list_item_btm_img">
                        <iframe width="730" height="415" src="${obj.data.embed}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                      ${caption}
                    </div>
                  </div>
                </div>
              </section>`
    },
    makeHeader(obj) {
      return `<h${obj.data.level} class="blog_post_h${obj.data.level}">${obj.data.text}</h${obj.data.level}>`
    },
    makeCode(obj) {
      return `<section class="nws3_sec4">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-10 col-lg-8">
                    <div class="news_code">
                      <pre>
                        <code class="html">
                          ${obj.data.code}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </section>`
    },
    makeList(obj) {
      if (obj.data.style === 'unordered') {
        const list = obj.data.items.map(item => {
          return `<li>${item}</li>`;
        });
        return `<ul class="blog_post_ul">
                  ${list.join('')}
                </ul>`;
      } else {
        const list = obj.data.items.map(item => {
          return `<li>${item}</li>`;
        });
        return `<ul class="blog_post_ul">
                  ${list.join('')}
                </ul>`
      }
    },
    makeQuote(obj) {
      return `<div class="post_qoute">
                <blockquote>
                  <p class="text_quote">
                    ${obj.data.text}
                  </p>
                </blockquote>
                <p>- ${obj.data.caption}</p>
              </div>`
    },
    makeWarning(obj) {
      return `<section class="blog_warning">
                <div class="table_warning">
                  <h3><span><i class="icon-notification"></i></span>${obj.data.title}</h3>
                  <p>${obj.data.message}</p>
                </div>
              </section>`
    },
    makeChecklist(obj) {
      const list = obj.data.items.map(item => {
        return `<div class="_1checkbox">
                  <span class="_1checkbox_round"></span>
                  ${item.text}
                </div>`;
      });
      return `<section class="nws3_sec4">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-10 col-lg-8">
                    <div class="table_top_sec">
                      ${list.join('')}
                    </div>
                  </div>
                </div>
              </section>`;
    },
    makeDelimeter(obj) {
      console.log(obj);
      return `<div class="ce-block">
                <div class="ce-block__content">
                  <div class="ce-delimiter cdx-block"></div>
                </div>
              </div>\n`
    },
    makeTable(obj) {
      console.log(obj.data.content);
      let table = `<table class="blog_table">`
      for (let i = 0; i < obj.data.content.length; i++) {
        table += `<tr>`;
        const x = obj.data.content[i];
        for (let j = 0; j < x.length; j++) {
          const y = x[j];
          table += `<td>${y}</td>`
        }
        table += `</tr>`;
      }
      table += `</table>`

      return table;
    }
  },
  computed: {
    imgUrl: {
      get() {
        return this.$store.state.imgUrl;
      },
      set(imgUrl) {
        this.$store.commit("SET_IMGURL", imgUrl);
      }
    },
  },
}