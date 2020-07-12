<template>
  <div class="contact">
    <h2>Porque tú nos importas!</h2>
    <p>
      En Marco Arquitectónico SAS tenemos un amplio abanico de servicios en
      Asesoría, Diseño y Construcción orientado a materializar eso que sueña.
      Complete los datos en el formulario y solicite una cotización gratuita ya.
    </p>
    <form>
      <input
        type="text"
        name="name"
        v-model="data.name"
        class="form_field"
        placeholder="Nombre(s)"
      />
      <input
        type="text"
        name="lastName"
        v-model="data.lastName"
        class="form_field"
        placeholder="Apellido(s)"
      />
      <input
        type="text"
        name="phone"
        v-model="data.phone"
        class="form_field"
        @keypress="integer"
        placeholder="Teléfono"
      />
      <input
        type="email"
        name="email"
        v-model="data.email"
        class="form_field"
        placeholder="Correo electrónico"
      />
      <select name="service" v-model="service">
        <option value="0"
          >Click para seleccionar el área que desea consultar</option
        >
        <option value="1">Consultoria</option>
        <option value="2">Construcción</option>
        <option value="3">Mantenimiento P.H</option>
        <option value="4">Recubrimiento Arquitectónico</option>
      </select>
      <div v-if="service == 1" class="services">
        <div v-for="(item, index) in items.project" :key="index" class="items">
          <input type="checkbox" :value="item" v-model="data.interests" />
          <span v-text="item"></span>
        </div>
      </div>
      <div v-else-if="service == 2" class="services">
        <div v-for="(item, index) in items.building" :key="index" class="items">
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
    <button @click="sendEmail()">Contactanos</button>
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
  name: "Contact",
  components: {},
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
      toastOptions: {
        timeOut: 5000,
        closeButton: true,
        progressBar: true,
        positionClass: "toast-top-right",
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
    sendEmail() {
      emailjs
        .send(
          "marco_arquitectonico",
          "template_53Q140lO",
          this.data,
          "user_4yXxtxSLtB3vbzcGVljpi"
        )
        .then(
          (result) => {
            toastr.info("Tu mensaje ha sido enviado, muy pronto un asesor te contactara", this.toastOptions)
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            toastr.error("Lamentamos los inconvenientes, por favor intenta nuevamente", this.toastOptions)
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.contact {
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 60px;
  padding-bottom: 10px;
  color: $secondary;
  text-align: center;

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
    margin-bottom: 80px;
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
    bottom: 6%;
    transform: translateX(-50%);
    width: 320px;
    padding: 15px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 30px;
    color: #fff;
    background: $main;
    transition: 0.5s;
    border: 0;
    border-radius: 5px;

    &:hover {
      background: #fff;
      color: $main;
      border: 1px solid $main;
      border-bottom: 5px solid $main;
      padding-bottom: 10px;
    }
  }
  p {
    span {
      font-size: 10px;
    }
  }
}

@media screen and (max-width: $large) {
}

@media screen and (max-width: $medium) {
}

@media screen and (max-width: $small) {
}
</style>
