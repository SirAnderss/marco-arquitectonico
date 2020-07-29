<template>
  <div class="welcome">
    <p>
      <span>
        Somos una empresa conformada por un equipo de profesionales
        especializados con más de 25 años de experiencia en el sector de la
        arquitectura y el diseño dirigido al bienestar de sus usuarios. </span
      ><br />
      <br />
      Ofrecemos a nuestros clientes los mejores servicios en Diseño y
      Construcción con estándares de alta calidad, seguridad, compromiso y
      cumplimiento de nuestros servicios. Buscamos la excelencia en la ejecución
      de todas las actividades de construcción en proyectos de Consultoría en
      Arquitectura, Adecuaciones Locativas Corporativas e Institucionales, Obras
      Civiles, Propiedad Horizontal, Acabados y Estructuras Metálicas aplicadas
      a soluciones de infraestructura.
    </p>
    <p>
      Permítanos ser su empresa aliada y ofrecerle las mejores alternativas para
      el desarrollo de sus proyectos con la generación, implementación,
      aseguramiento y mantenimiento de nuestro Sistema de Gestión de la Calidad
      y el cumplimiento de los requisitos de ley que regulan nuestra actividad.
    </p>
    <router-link to="/contact"
      >Contáctenos ya para solicitar una cotización<br />de nuestros
      servicios</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.welcome {
  margin: 75px 125px;
  position: relative;
  display: flex;
  flex-flow: column;
  text-align: justify;
  justify-content: center;

  h1 {
    margin: 0 auto;
    margin-bottom: 30px;
    font-size: 40px;
    text-transform: uppercase;
    color: $main;
  }

  p {
    margin-bottom: 18px;
    font-size: 22px;
    color: $secondary;

    span {
      text-transform: uppercase;
      font-weight: 600;
      color: $main;
    }
  }

  a {
    margin-top: 25px;
    color: $main;
    font-size: 25px;
    text-transform: uppercase;
    text-align: center;
  }

  button {
    position: absolute;
    left: 50%;
    top: 102%;
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
}

@media screen and (max-width: $large) {
  .welcome {
    margin: 50px 100px;
    margin-bottom: 100px;

    h1 {
      margin-bottom: 25px;
      font-size: 28px;
    }

    p {
      margin-bottom: 12px;
      font-size: 18px;
    }

    button {
      width: 180px;
      padding: 15px;
      font-size: 20px;
    }
  }
}

@media screen and (max-width: $medium) {
  .welcome {
    margin: 50px 75px;
    margin-bottom: 100px;

    h1 {
      font-size: 20px;
    }

    p {
      font-size: 17px;
    }
  }
}

@media screen and (max-width: $small) {
  .welcome {
    margin: 50px;
    margin-bottom: 100px;

    h1 {
      margin-bottom: 10px;
      font-size: 22px;
    }

    p {
      margin-bottom: 7px;
      font-size: 15px;
      // text-align: left;
    }
  }
}
</style>
