<template>
  <div class="quotation">
    <h2>Pide tu cotización <strong>GRATIS!!</strong></h2>
    <ContactForm />
    <div class="opinion" v-if="$route.name !== 'Contact'">
      <h2>NUESTROS CLIENTES OPINAN</h2>
      <p>
        Nos esforzamos en construir relaciones duraderas con nuestros clientes y
        garantizar su satisfacción. <br />
        Ellos confiaron en nosotros y nos comparten su experiencia
      </p>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
  name: "Contact",
  components: {
    ContactForm,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.quotation {
  padding-top: 60px;
  margin: 0 auto;
  color: $secondary;
  text-align: center;

  h2 {
    font-size: 40px;
    margin-bottom: 15px;
  }

  p {
    font-size: 22px;
    margin-bottom: 24px;
    padding: 0 60px;
  }

  a {
    margin-top: 25px;
    color: $main;
    font-size: 25px;
    text-transform: uppercase;
    text-align: center;
  }

  .opinion {
    margin: 40px auto;
  }
}

@media screen and (min-width: $small) and (max-width: $large) {
  .quotation {
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
  .quotation {
    width: 100%;
    padding: 20px 10px 0 10px;

    h2 {
      font-size: 30px;
      margin-bottom: 15px;
    }

    p {
      font-size: 18px;
      margin-bottom: 24px;
      padding: 0 20px;
    }
    button {
      bottom: 4%;
      width: 180px;
      font-size: 20px;
    }
  }
}

@media screen and (min-width: $xlarge) {
  .quotation {
    h2 {
      font-size: 60px;
    }

    p {
      font-size: 24px;
    }
  }
}
</style>
