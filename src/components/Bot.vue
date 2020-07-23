<template>
  <div class="bot-manager">
    <div class="content-bot">
      <div class="promo-img" :class="{ show: promo }">
        <hooper :settings="promoHooperSettings" ref="promoCarousel">
          <slide>
            <div class="wide">
              <img src="@/assets/img/hero-supervision.webp" alt="promo-wide" />
            </div>
            <div class="portrait">
              <img src="@/assets/img/hero-oficina.webp" alt="promo-portrait" />
            </div>
          </slide>
          <slide>
            <div class="portrait">
              <img src="@/assets/img/hero-supervision.webp" alt="promo-wide" />
            </div>
            <div class="wide">
              <img src="@/assets/img/hero-oficina.webp" alt="promo-portrait" />
            </div>
          </slide>
        </hooper>
        <i @click="closePromo" class="icon-close close"></i>
        <i @click.prevent="slidePrev" class="icon-arrow-left prev"></i>
        <i @click.prevent="slideNext" class="icon-arrow-right next"></i>
      </div>
      <div class="marco" @click="showMarco">
        <img
          class="bot-face"
          src="@/assets/img/chat/chatbot.webp"
          alt="Chat bot"
        />
        <!-- <p>1</p> -->
      </div>
      <div class="text">
        <div class="talk">
          <div
            :class="{ show: botSteps.phrase }"
            class="phrase"
            @mouseover="showButtonPhrase"
            @mouseleave="hideButtonPhrase"
            @click="showOptions"
          >
            <div
              :class="{ show: close.phrase }"
              class="close-chat"
              @click="closeChatPhrase"
            >
              <i class="icon-close"></i>
            </div>
            <span>
              Hola, un placer atenderle. Mi nombre es Marcos
              <img src="@/assets/img/face.png" alt=" &#128119;" /> su asistente
              virtual en Marco Arquitectónico, en qué puedo servirle?
            </span>
          </div>
          <div
            :class="{ show: botSteps.promo }"
            class="promo"
            @mouseover="showButtonPromo"
            @mouseleave="hideButtonPromo"
          >
            <div
              :class="{ show: close.promo }"
              class="close-chat"
              @click="closeChatPromo"
            >
              <i class="icon-close"></i>
            </div>
            <span @click="showPromo">
              ¿Conoce nuestras promociones y ofertas?
            </span>
          </div>
          <div
            :class="{ show: botSteps.quota }"
            class="quota"
            @mouseover="showButtonQuota"
            @mouseleave="hideButtonQuota"
            @click="closeAll"
          >
            <div
              :class="{ show: close.quota }"
              class="close-chat"
              @click="closeChatQuota"
            >
              <i class="icon-close"></i>
            </div>
            <span>
              También puede solicitar información sobre nuestros servicios
              diligenciando el
              <router-link to="/contact">formulario de cotizaciones</router-link
              >, será un gusto atenderle.
            </span>
          </div>
          <div
            @mouseover="showButtonOptions"
            @mouseleave="hideButtonOptions"
            :class="{ show: botSteps.options }"
            class="bot-functions"
          >
            <div
              :class="{ show: close.options }"
              class="close-chat"
              @click="closeChatOptions"
            >
              <i class="icon-close"></i>
            </div>
            <span
              @click="showOffer"
              class="options"
              :class="{ show: botSteps.select.offer }"
              >Quiero conocer sus promociones y ofertas.</span
            >
            <span
              @click="showAttention"
              class="options"
              :class="{ show: botSteps.select.attention }"
              >Quiero conocer sus horarios de atención.</span
            >
            <span
              @click="showProfessional"
              class="options"
              :class="{ show: botSteps.select.professional }"
              >Quiero programar una visita profesional gratuita.</span
            >
            <span class="options" :class="{ show: botSteps.contact }"
              >Puedes contactarnos mediante nuestro
              <div @click="closeAll">
                <router-link to="/contact"
                  >formulario de cotizaciones</router-link
                >
              </div>
              y te contactaremos en breve.</span
            >
          </div>
          <div
            @mouseover="showButtonAnswers"
            @mouseleave="hideButtonAnswers"
            :class="{ show: botSteps.answers }"
            class="answers-functions"
          >
            <div
              :class="{ show: close.answers }"
              class="close-chat"
              @click="closeChatAnswers"
            >
              <i class="icon-close"></i>
            </div>
            <span class="answers" :class="{ show: botSteps.answer.offer }"
              >Puedes conocer nuestras promociones y ofertas dando click
              <strong @click="showPromo">aquí</strong>.
            </span>
            <span class="answers" :class="{ show: botSteps.answer.attention }"
              >Puede llamarnos al
              <a href="tel:+573155597866">3155597866</a> durante nuestro horario
              de atención de lunes a viernes de 8:00 AM a 6:00 PM y sábados de
              9:00 AM a 2:00 PM.</span
            >
            <div v-if="day == 6">
              <div v-if="hour >= 9 && hour <= 14">
                <span
                  class="answers"
                  :class="{
                    show: botSteps.answer.professional,
                  }"
                  >Para programar una visita profesional gratuita y conocer sus
                  requerimientos por favor contacte a uno de nuestros agentes.
                  <br />
                  <a href="#!">Sofia</a><br /><a href="#!">Eduardo</a><br /><a
                    href="#!"
                    >Ana</a
                  ></span
                >
              </div>
              <div v-else>
                <span
                  class="answers"
                  :class="{
                    show: botSteps.answer.professional,
                  }"
                  >Nuestros horarios de atención son de lunes a viernes de
                  8:00AM a 6:00PM y sábados de 9:00AM a 2:00 PM, por favor
                  diligencie nuestro
                  <div @click="closeAll">
                    <router-link to="/contact"
                      >formulario de cotizaciones</router-link
                    >
                  </div>
                  y te contactaremos en breve.</span
                >
              </div>
            </div>
            <div v-if="day == 0">
              <span
                class="answers"
                :class="{
                  show: botSteps.answer.professional,
                }"
                >Nuestros horarios de atención son de lunes a viernes de 8:00AM
                a 6:00PM y sábados de 9:00AM a 2:00 PM, por favor diligencie
                nuestro
                <router-link to="/contact"
                  >formulario de cotizaciones</router-link
                >
                y te contactaremos en breve.</span
              >
            </div>
            <div v-if="day != 0 && day < 6">
              <div v-if="hour >= 8 && hour <= 21">
                <span
                  class="answers"
                  :class="{
                    show: botSteps.answer.professional,
                  }"
                  >Para programar una visita profesional gratuita y conocer sus
                  requerimientos por favor contacte a uno de nuestros agentes.
                  <br />
                  <a href="#!">Sofia</a><br /><a href="#!">Eduardo</a><br /><a
                    href="#!"
                    >Ana</a
                  ></span
                >
              </div>
              <div v-else>
                <span
                  class="answers"
                  :class="{
                    show: botSteps.answer.professional,
                  }"
                  >Nuestros horarios de atención son de lunes a viernes de
                  8:00AM a 6:00PM y sábados de 9:00AM a 2:00 PM, por favor
                  diligencie nuestro
                  <router-link to="/contact"
                    >formulario de cotizaciones</router-link
                  >
                  y te contactaremos en breve.</span
                >
              </div>
            </div>
            <span class="answers" :class="{ show: botSteps.answer.help }"
              >¿Te puedo ayudar en algo más? <br />
              <button class="btn" @click="reOpen">Si</button>
              <button class="btn" @click="botExit">No</button></span
            >
            <span class="answers" :class="{ show: botSteps.answer.exit }"
              >Gracias por consultar nuestros servicios, somos Marco
              Arquitectónico SAS, Construyendo Identidad</span
            >
          </div>
        </div>
      </div>
      <div class="chat" :class="{ 'chat-text': chat }">
        <input
          type="text"
          v-model="chatme"
          class="chatme"
          placeholder="Escribenos"
          @keyup.enter="waMe"
        />
        <img src="@/assets/img/send.svg" alt=" " class="send" @click="waMe" />
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "Bot",
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      promoHooperSettings: {
        mouseDrag: false,
        playSpeed: 8000,
        transition: 800,
        centerMode: true,
        wheelControl: false,
        infiniteScroll: true,
        itemsToShow: 1,
        touchDrag: true,
      },
      chatme: "",
      hour: 0,
      minutes: 0,
      day: 0,
      startCounter: 0,
      helpTime: 0,
      botLeave: 0,
      chat: false,
      promo: true,
      timer: {
        start: 0,
        help: 0,
        exit: 0,
      },
      close: {
        phrase: false,
        options: false,
        answers: false,
        promo: false,
        quota: false,
      },
      botSteps: {
        phrase: false,
        welcome: false,
        options: false,
        answers: false,
        contact: false,
        waiting: false,
        promo: false,
        quota: false,
        select: { offer: false, attention: false, professional: false },
        answer: {
          offer: false,
          attention: false,
          professional: false,
          help: true,
          exit: false,
        },
      },
    };
  },
  methods: {
    getDateTime() {
      let tempDate = new Date();
      this.hour = tempDate.getHours();
      this.minutes = tempDate.getMinutes();
      this.day = tempDate.getDay();
    },
    waMe() {
      let url = "https://wa.me/3134810480?text="; // Cambiar numero
      let text = this.chatme.replace(/ /g, "%20");
      let link = url + text;

      window.open(link, "_blank");
      this.chatme = "";
    },
    botStart() {
      this.timer.start = 0;
      this.startCounter = setInterval(() => {
        this.timer.start++;
      }, 1000);
    },
    helpStart() {
      this.timer.help = 0;
      this.helpTime = setInterval(() => {
        this.timer.help++;
      }, 1000);
    },
    leaveBot() {
      this.timer.exit = 0;
      this.botLeave = setInterval(() => {
        this.timer.exit++;
      }, 1000);
    },
    showMarco() {
      this.botSteps.select.offer = true;
      this.botSteps.select.attention = true;
      this.botSteps.select.professional = true;
      this.botSteps.answer.help = false;
      this.botSteps.answer.exit = false;
      this.botSteps.answers = false;
      this.botSteps.contact = false;
      this.chat = !this.chat;
      this.botSteps.options = !this.botSteps.options;
    },
    showButtonPhrase() {
      this.close.phrase = true;
    },
    hideButtonPhrase() {
      this.close.phrase = false;
    },
    closeChatPhrase() {
      this.botSteps.phrase = false;
    },
    showButtonPromo() {
      this.close.promo = true;
    },
    hideButtonPromo() {
      this.close.promo = false;
    },
    closeChatPromo() {
      this.botSteps.promo = false;
    },
    showButtonQuota() {
      this.close.quota = true;
    },
    hideButtonQuota() {
      this.close.quota = false;
    },
    closeChatQuota() {
      this.botSteps.quota = false;
    },
    showButtonOptions() {
      this.close.options = true;
    },
    hideButtonOptions() {
      this.close.options = false;
    },
    closeChatOptions() {
      this.chat = false;
      this.botSteps.options = false;
    },
    showButtonAnswers() {
      this.close.answers = true;
    },
    hideButtonAnswers() {
      this.close.answers = false;
    },
    closeChatAnswers() {
      this.botSteps.answers = false;
      this.botSteps.answer.help = false;
      this.botSteps.answer.exit = false;
      this.chat = false;
    },
    showPromo() {
      this.promo = true;
    },
    showOptions() {
      this.botSteps.answers = false;
      this.botSteps.answer.attention = false;
      this.botSteps.answer.professional = false;
      this.botSteps.answer.offer = false;
      this.botSteps.answer.exit = false;
      this.botSteps.answer.help = false;
      this.botSteps.select.offer = false;
      this.botSteps.contact = false;
      this.botSteps.phrase = false;
      this.botSteps.select.offer = true;
      this.botSteps.select.attention = true;
      this.botSteps.select.professional = true;
      this.botSteps.options = true;
    },
    showOffer() {
      this.botSteps.answers = true;
      this.botSteps.answer.attention = false;
      this.botSteps.answer.professional = false;
      this.botSteps.answer.offer = true;
      this.botSteps.answer.exit = false;
      this.botSteps.answer.help = false;
      this.botSteps.select.offer = false;
      this.botSteps.contact = false;
      this.botSteps.options = false;
      this.helpStart();
    },
    showAttention() {
      this.botSteps.answers = true;
      this.botSteps.answer.offer = false;
      this.botSteps.answer.professional = false;
      this.botSteps.answer.attention = true;
      this.botSteps.answer.exit = false;
      this.botSteps.answer.help = false;
      this.botSteps.select.attention = false;
      this.botSteps.contact = false;
      this.botSteps.options = false;
      this.helpStart();
    },
    showProfessional() {
      this.botSteps.answers = true;
      this.botSteps.answer.attention = false;
      this.botSteps.answer.offer = false;
      this.botSteps.answer.professional = true;
      this.botSteps.answer.exit = false;
      this.botSteps.answer.help = false;
      this.botSteps.select.professional = false;
      this.botSteps.contact = false;
      this.botSteps.options = false;
      this.helpStart();
    },
    reOpen() {
      this.botSteps.answers = false;
      this.botSteps.options = true;
      if (
        this.botSteps.select.offer == false &&
        this.botSteps.select.attention == false &&
        this.botSteps.select.professional == false
      ) {
        this.botSteps.contact = true;
        this.leaveBot();
      }
    },
    botExit() {
      this.botSteps.answer.attention = false;
      this.botSteps.answer.professional = false;
      this.botSteps.answer.offer = false;
      this.botSteps.answer.help = false;
      this.botSteps.answer.exit = true;
      this.chat = false;
      this.leaveBot();
    },
    closeAll() {
      this.botSteps.contact = false;
      this.botSteps.phrase = false;
      this.botSteps.promo = false;
      this.botSteps.quota = false;
      this.botSteps.options = false;
      this.botSteps.answers = false;
      this.botSteps.select.offer = false;
      this.botSteps.select.attention = false;
      this.botSteps.select.professional = false;
      this.botSteps.answer.attention = false;
      this.botSteps.answer.professional = false;
      this.botSteps.answer.offer = false;
      this.botSteps.answer.help = false;
      this.botSteps.answer.exit = false;
      this.chat = false;
    },
    closePromo() {
      this.promo = false;
    },
    slidePrev() {
      this.$refs.promoCarousel.slidePrev();
    },
    slideNext() {
      this.$refs.promoCarousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    },
  },
  watch: {
    "timer.start": function() {
      if (this.timer.start == 60) {
        this.botSteps.phrase = true;
        this.botSteps.welcome = true;
        this.botSteps.waiting = true;
      } else if (this.timer.start == 120) {
        this.botSteps.phrase = false;
        this.botSteps.promo = true;
        this.botSteps.quota = false;
      } else if (this.timer.start == 180) {
        this.botSteps.phrase = false;
        this.botSteps.promo = false;
        this.botSteps.quota = true;
      } else if (this.timer.start == 200) {
        this.botSteps.phrase = false;
        this.botSteps.promo = false;
        this.botSteps.quota = false;
        clearInterval(this.startCounter);
      }
    },
    "timer.exit": function() {
      if (this.timer.exit == 8) {
        this.closeAll();
        clearInterval(this.botLeave);
      }
    },
    "timer.help": function() {
      if (this.timer.help === 8) {
        this.botSteps.answer.help = true;
        clearInterval(this.helpTime);
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.startCounter);
    clearInterval(this.botLeave);
    clearInterval(this.helpTime);
  },
  mounted() {
    this.promo = false;
    this.botStart();
    this.getDateTime();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets//scss/fonts.scss";
.bot-manager {
  .marco {
    position: fixed;
    top: 80%;
    left: 90%;
    z-index: 999;
    cursor: pointer;

    .bot-face {
      margin-top: 15px;
      padding: 15px;
      width: 100px;
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
    }
    p{
      position: absolute;
      top: 25px;
      right: 20px;
      background: red;
      color: #fff;
      padding: 2px 4px;
      font-size: 12px;
      font-weight: 200;
      border-radius: 50%;
    }
  }
  .text {
    position: fixed;
    bottom: 20%;
    left: 62%;
    z-index: 999;

    .talk {
      margin-right: 80px;
      span {
        font-weight: 300;
        line-height: 20px;

        img {
          width: 20px;
        }
        a, strong {
          cursor: pointer;
          color: $secondary;
          font-weight: 600;
          text-transform: uppercase;
        }
      }
      .bot-functions,
      .answers-functions,
      .promo,
      .phrase,
      .quota {
        position: relative;
        background: $main;
        width: 400px;
        color: #fff;
        border-radius: 15px 15px 0 15px;
        box-shadow: 0 1px 5px $dark;
        opacity: 0.9;

        &:hover {
          opacity: 1;
        }
      }
      .phrase,
      .promo,
      .quota {
        display: none;
        cursor: pointer;
        padding: 20px;
      }
      .promo,
      .quota {
        margin-top: 20px;
      }
      .bot-functions,
      .answers-functions {
        margin-top: 20px;
        display: none;
        transition: 0.3;
        padding-top: 20px;

        span:nth-of-type(1n) {
          padding: 0 20px;
          padding-bottom: 20px;
        }
        span {
          cursor: pointer;
          &:hover {
            font-weight: 600;
          }
        }

        .options,
        .answers {
          display: none;
        }
      }
      .answers-functions {
        span {
          cursor: unset;
          &:hover {
            font-weight: 400;
          }
        }
      }
    }
  }
  .chat {
    position: fixed;
    top: 87%;
    right: 15%;
    z-index: 999;
    display: flex;
    align-items: center;
    opacity: 0.8;
    display: none;
    &:hover {
      opacity: 1;
    }
    .chatme {
      width: 300px;
      height: 40px;
      border-radius: 5px;
      border: 0;
      font-size: 22px;
      padding-left: 10px;
      color: $secondary;
      border: 2px solid $main;

      &:hover {
        border: 2px solid $secondary;
      }
    }
    .send {
      right: -50px;
      position: absolute;
      background: $main;
      padding: 10px;
      border-radius: 50%;
      border: 1px solid #fff;
      cursor: pointer;

      &:hover {
        background: $secondary;
      }
    }
  }
  .promo-img {
    display: none;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 1111;
    background: rgba(0, 0, 0, 0.5);
    .hooper {
      width: 100%;
      height: 100%;
      .hooper-list {
        .hooper-track {
          .hooper-slide {
            width: 100%;
            .wide,
            .portrait {
              width: 70%;
              margin: 70px auto;
              img {
                width: 100%;
              }
            }
            .portrait {
              display: none;
            }
          }
        }
      }
    }
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #fff;
      font-size: 30px;
      cursor: pointer;
      &:hover {
        color: $secondary;
      }
    }

    .prev,
    .next {
      border: none;
      position: absolute;
      cursor: pointer;
      color: rgb(255, 255, 255);
      text-shadow: 5px 7px 5px $dark;
      font-size: 25px;
      font-weight: 900;
    }

    .prev,
    .next {
      top: 50%;
    }

    .prev {
      left: 70px;
    }

    .next {
      right: 70px;
    }
  }
}

@media screen and (max-width: $medium) {
  .bot-manager {
    .marco {
      left: 5%;

      .bot-face {
        width: 90px;
      }
    }
    .text {
      left: 10%;

      .talk {
        span {
          line-height: 15px;

          img {
            width: 15px;
          }
          a {
            font-weight: 500;
          }
        }
        .bot-functions,
        .answers-functions,
        .promo,
        .phrase,
        .quota {
          width: 300px;
          border-radius: 15px 15px 15px 0;
          font-size: 13px;
        }
      }
    }
    .chat {
      top: 82%;
      left: 100px;
      .chatme {
        width: 200px;
        height: 30px;
        font-size: 15px;
      }
      .send {
        left: 210px;
        width: 30px;
        padding: 5px;
      }
    }
    .promo-img {
      display: none;
      position: fixed;
      top: 0;
      width: 100%;
      height: 100vh;
      z-index: 1111;
      background: rgba(0, 0, 0, 0.5);
      .hooper {
        width: 100%;
        height: 100%;
        .hooper-list {
          .hooper-track {
            .hooper-slide {
              width: 100%;
              .wide {
                display: none;
              }
              .portrait {
                display: block;
              }
            }
          }
        }
      }

      .prev,
      .next {
        display: none;
      }
    }
  }
}

.close-chat {
  position: absolute;
  display: none;
  top: -8px;
  right: -5px;
  background: $secondary;
  border-radius: 50%;
  box-shadow: 1px 1px 5px $dark;
  height: 16px;
  cursor: pointer;
  &:hover {
    color: $dark;
    background: #fff;
  }
}
.btn {
  height: 30px;
  width: 30px;
  padding: 5px;
  margin: 5px;
  background: #fff;
  color: $main;
  font-weight: bold;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background: $main;
    color: #fff;
    border: 1px solid #fff;
    box-shadow: 0 0 10px $dark;
  }
}
.show,
.show-promo {
  display: block !important;
}
.chat-text {
  display: flex !important;
}
</style>
