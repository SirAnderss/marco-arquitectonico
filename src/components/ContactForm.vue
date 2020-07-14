<template>
  <div class="contact-form">
    <form>
      <input
        type="text"
        name="name"
        v-model="data.name"
        :class="{ error: errors }"
        class="form_field"
        placeholder="Nombre(s)"
      />
      <input
        type="text"
        name="lastName"
        v-model="data.lastName"
        :class="{ error: errors }"
        class="form_field"
        placeholder="Apellido(s)"
      />
      <input
        type="text"
        name="phone"
        v-model="data.phone"
        :class="{ error: errors }"
        class="form_field"
        @keypress="integer"
        placeholder="Teléfono"
      />
      <input
        type="email"
        name="email"
        v-model="data.email"
        :class="{ error: errors }"
        class="form_field"
        placeholder="Correo electrónico"
      />
      <div class="service">
        <div>
          <input type="radio" v-model="service" value="1" />
          <label for="male">Consultoria en arquitectura</label>
        </div>
        <div>
          <input type="radio" v-model="service" value="2" />
          <label for="female">Construcción</label>
        </div>
        <div>
          <input type="radio" v-model="service" value="3" />
          <label for="other">Mantenimiento P.H</label>
        </div>
        <div>
          <input type="radio" v-model="service" value="4" />
          <label for="other">Revestimiento Arquitectónico</label>
        </div>
        <div :class="{ 'sub-service': service }">
          <div v-if="service == 1" class="services">
            <div
              v-for="(item, index) in items.project"
              :key="index"
              class="items"
            >
              <input type="checkbox" :value="item" v-model="data.interests" />
              <span v-text="item"></span>
            </div>
          </div>
          <div v-else-if="service == 2" class="services">
            <div
              v-for="(item, index) in items.building"
              :key="index"
              class="items"
            >
              <input type="checkbox" :value="item" v-model="data.interests" />
              <span v-text="item"></span>
            </div>
          </div>
          <div v-else-if="service == 3" class="services">
            <div
              v-for="(item, index) in items.maintenance"
              :key="index"
              class="items"
            >
              <input type="checkbox" :value="item" v-model="data.interests" />
              <span v-text="item"></span>
            </div>
          </div>
          <div v-else-if="service == 4" class="services">
            <div
              v-for="(item, index) in items.architecture"
              :key="index"
              class="items"
            >
              <input type="checkbox" :value="item" v-model="data.interests" />
              <span v-text="item"></span>
            </div>
          </div>
        </div>
      </div>
      <input
        type="text"
        name="aprox"
        v-model="data.aprox"
        class="form_field"
        @keypress="integer"
        placeholder="Aproximado en m2"
      />
      <textarea
        type="text"
        name="description"
        v-model="data.description"
        class="form_field"
        rows="3"
        placeholder="Requerimientos adicionales"
      />
    </form>
    <button @click="sendEmail()">Enviar</button>
    <p>
      <span>* Respetamos su privacidad de acuerdo a Ley 581 de 2012.</span>
    </p>
  </div>
</template>

<script>
import services from "@/assets/json/services.json";
import emailjs from "emailjs-com";
import toastr from "toastr";
export default {
  name: "ContactForm",
  data() {
    return {
      data: {
        aprox: "",
        description: "",
        name: "",
        lastName: "",
        phone: "",
        email: "",
        interests: [],
      },
      items: services,
      service: 0,
      errors: false,
      errorMsj: [],
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
    };
  },
  watch: {
    service: function() {
      this.interests = [];
    },
  },
  methods: {
    integer(e) {
      var key = window.event ? e.which : e.keyCode;
      if (key < 48 || key > 57) {
        e.preventDefault();
      }
    },
    checkInputs() {
      if (!this.data.name) this.errorMsj.push("* Por favor ingresa el nombre.");
      if (!this.data.lastName)
        this.errorMsj.push("* Por favor ingresa el apellido.");
      if (!this.data.phone)
        this.errorMsj.push("* Es necesario un teléfono de contacto.");
      if (!this.data.email)
        this.errorMsj.push(
          "* Ingresa una dirección de email para responderte."
        );
      if (!this.data.interests.length)
        this.errorMsj.push(
          "* Selecciona uno de nuestros servicios para darte una atención apropiada."
        );

      if (this.errorMsj.length) {
        this.errors = true;
      } else {
        this.errors = false;
      }

      return this.errors;
    },
    async sendEmail() {
      this.errorMsj = [];
      await this.checkInputs();

      if (this.errors) {
        let errors = this.errorMsj;
        errors.forEach((element) => {
          toastr.warning(element, "Error!", this.toastOptions);
        });

        return;
      }

      await emailjs
        .send(
          "marco_arquitectonico",
          "template_53Q140lO",
          this.data,
          "user_4yXxtxSLtB3vbzcGVljpi"
        )
        .then(
          (result) => {
            toastr.info(
              "Tu mensaje ha sido enviado, muy pronto un asesor te contactara",
              this.toastOptions
            );
            this.data.name = "";
            this.data.lastName = "";
            this.data.phone = "";
            this.data.email = "";
            this.data.aprox = "";
            this.data.description = "";
            this.service = 0;
            this.errors = false;
            console.info("SUCCESS!", result.status, result.text);
          },
          (error) => {
            toastr.error(
              "Lamentamos los inconvenientes, por favor intenta nuevamente",
              this.toastOptions
            );
            console.info("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.contact-form {
  position: relative;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 20px 0;
  color: $secondary;
  text-align: center;
  background: $main;
  border: 1px solid $secondary;

  &::before {
    content: "";
    margin: 0 auto;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: url("../assets/img/hero-bg.webp");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 15px;
  }

  p {
    font-size: 22px;
    margin-bottom: 24px;
  }

  form {
    margin: 0 auto;
    display: block;
    position: relative;
    width: 80%;
    margin-bottom: 90px;
    z-index: 2;
    input,
    select,
    textarea {
      margin: 10px 20px;
      border: none;
      border-bottom: solid 1px $secondary;
      font-size: 22px;
      overflow: visible;

      &:focus {
        outline: none;
        border-bottom: solid 2px $main;
      }
    }

    .error {
      border-bottom: solid 2px rgb(248, 103, 103);
    }

    .service {
      width: 100%;
      color: #fff;
      font-size: 22px;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      // flex-wrap: wrap;

      .sub-service {
        border: 2px solid #fff;
        padding: 25px;
        .services {
          display: flex;
          flex-flow: row;
          justify-content: space-around;
          flex-wrap: wrap;
        }
      }
    }

    select {
      color: $secondary;
      width: calc(100% - 30px);
      background: #fff;
      appearance: none;
      cursor: pointer;
    }

    textarea {
      width: calc(100% - 30px);
      resize: vertical;
    }

    .form_field {
      width: calc(100% -10px);
      padding: 10px;
    }
  }
  button {
    position: absolute;
    left: 50%;
    bottom: 4%;
    transform: translateX(-50%);
    width: 240px;
    padding: 15px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold;
    color: $main;
    background: #fff;
    transition: 0.5s;
    border: 0;
    border-radius: 5px;
    z-index: 2;

    &:hover {
      background: $main;
      color: #fff;
      border: 1px solid #fff;
      border-bottom: 5px solid #fff;
      padding-bottom: 10px;
    }
  }
  p {
    span {
      position: absolute;
      font-size: 10px;
      left: 50%;
      transform: translateX(-50%);
      bottom: 1%;
      color: #fff;
      z-index: 2;
    }
  }
}

@media screen and (min-width: $small) and (max-width: $large) {
  .contact-form {
    width: 100%;
    padding: 30px 20px;
    padding-bottom: 10px;

    h2 {
      font-size: 35px;
    }

    p {
      font-size: 20px;
    }

    form {
      width: 100%;
      input,
      select,
      textarea {
        margin: 15px 0;
        font-size: 18px;
      }

      .form_field {
        width: 100%;
      }
    }
    button {
      width: 210px;
      font-size: 25px;
    }
    p {
      span {
        font-size: 10px;
      }
    }
  }
}

@media screen and (max-width: $small) {
  .contact-form {
    width: 100%;
    padding: 30px 20px;

    h2 {
      font-size: 30px;
      margin-bottom: 15px;
    }

    p {
      font-size: 18px;
      margin-bottom: 24px;
    }

    form {
      width: 100%;
      input,
      select,
      textarea {
        margin: 15px 0;
        font-size: 15px;
      }

      .form_field {
        width: 100%;
      }
    }
    button {
      bottom: 6%;
      width: 180px;
      font-size: 20px;
    }
    p {
      span {
        font-size: 9px;
      }
    }
  }
}

@media screen and (min-width: $xlarge) {
  .contact-form {
    h2 {
      font-size: 60px;
    }

    p {
      font-size: 24px;
    }

    form {
      input,
      select,
      textarea {
        font-size: 25px;
      }

      select {
        width: 70%;
      }

      textarea {
        width: 70%;
      }
    }
    p {
      span {
        font-size: 12px;
      }
    }
  }
}
</style>
