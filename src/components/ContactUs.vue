<template>
  <div class="contact-us">
    <h2>Porque tú nos importas!</h2>
    <p>
      En Marco Arquitectónico SAS tenemos un amplio abanico de servicios en
      Asesoría, Diseño y Construcción orientado a materializar eso que sueña.
    </p>
    <router-link to="/contact"
      >Complete los datos en el formulario <br> y solicite una cotización gratuita
      ya.</router-link
    >
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.contact-us {
  padding: 60px 0;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  background: $main;

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
    color: $secondary;
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }
}

@media screen and (min-width: $small) and (max-width: $large) {
  .contact-us {
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
  .contact-us {
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
  .contact-us {
    h2 {
      font-size: 60px;
    }

    p {
      font-size: 24px;
    }
  }
}
</style>
