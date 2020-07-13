<template>
  <div class="contact">
    <h2>Porque tú nos importas!</h2>
    <p>
      En Marco Arquitectónico SAS tenemos un amplio abanico de servicios en
      Asesoría, Diseño y Construcción orientado a materializar eso que sueña.
      Complete los datos en el formulario y solicite una cotización gratuita ya.
    </p>
    <router-link to="/contact"><button>Cotiza aqui</button></router-link>
  </div>
</template>

<script>
// import ContactForm from "@/components/ContactForm.vue";
export default {
  name: "Contact",
  components: {
    // ContactForm
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.contact {
  position: relative;
  height: 300px;
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

  button {
    position: absolute;
    left: 50%;
    bottom: 3%;
    transform: translateX(-50%);
    width: 320px;
    padding: 15px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold;
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
}

@media screen and (min-width: $small) and (max-width: $large) {
  .contact {
    width: 100%;
    padding: 30px 20px;
    padding-bottom: 10px;

    h2 {
      font-size: 35px;
    }

    p {
      font-size: 20px;
    }

    button {
      width: 210px;
      font-size: 25px;
    }
  }
}

@media screen and (max-width: $small) {
  .contact {
    width: 100%;
    padding: 30px 10px;

    h2 {
      font-size: 30px;
      margin-bottom: 15px;
    }

    p {
      font-size: 18px;
      margin-bottom: 24px;
    }
    button {
      bottom: 4%;
      width: 180px;
      font-size: 20px;
    }
  }
}

@media screen and (min-width: $xlarge) {
  .contact {
    h2 {
      font-size: 60px;
    }

    p {
      font-size: 24px;
    }
  }
}
</style>
