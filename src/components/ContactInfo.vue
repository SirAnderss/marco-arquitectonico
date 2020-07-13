<template>
  <div class="contact-info">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.8776727397412!2d-74.06094089844984!3d4.665975656555532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a58acba24a3%3A0x2a56fce1b365ff98!2zQ3JhLiAxOCAjIzc4LTc0LCBCb2dvdMOh!5e0!3m2!1ses!2sco!4v1594609267316!5m2!1ses!2sco"
      frameborder="0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
    <div class="info">
      <h3>Información de contacto:</h3>
      <router-link to="/"
        ><img src="@/assets/img/logos/logo.webp" alt="Marco Arquitectónico"
      /></router-link>
      <p class="words">
        Calidad, servicio y cumplimiento <br />
        para desarrollar tú proyecto.
      </p>
      <p class="address">
        Carrera 18 # 78 - 74 <br />
        Oficina 507 <br />
        Antiguo Country <br />
        Bogotá DC
      </p>
      <p class="phone">
        Teléfono: <span>031 805 2967</span> <br />
        Celular: <span>315 559 7866</span>
      </p>
      <p class="email">
        Correo electrónico:
        <span
          ><a href="mailto:ucconstruccion@gmail.com"
            >ucconstruccion@gmail.com</a
          ></span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.contact-info {
  width: 100%;
  padding: 60px 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  color: $secondary;

  iframe {
    width: calc(100% - 45%);
    height: 400px;
    border: 0;
  }

  .info {
    display: inherit;
    flex-flow: column;
    justify-content: space-around;
    padding: 20px 50px;

    h3 {
      font-size: 25px;
    }

    p {
      font-size: 15px;
    }

    .words {
      font-size: 20px;
    }

    a {
      color: $main;
    }
  }
}

@media screen and (max-width: $large) {
  .contact-info {
    padding: 20px 0;
    flex-direction: column;

    iframe {
      width: 100%;
      height: 300px;
      border: 0;
    }

    .info {
      margin: 0 auto;
      display: inherit;
      flex-flow: column;
      justify-content: space-around;
      padding: 30px;
    }
  }
}
</style>
