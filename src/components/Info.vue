<template>
  <div class="info">
    <span class="email">
      Correo electrónico:
      <a href="mailto:ucconstruccion@gmail.com">ucconstruccion@gmail.com</a>
    </span>
    <span class="phone">
      Teléfono:
      <a href="tel:+570318052967"> 031 805 2967</a> -
      <a href="tel:+573155597866"> 315 559 7866</a>
    </span>
    <span class="city">
      Bogotá DC
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.info {
  position: fixed;
  width: 100%;
  height: 30px;
  z-index: 99;
  background: #fff;
  top: 0;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  span {
    font-weight: 600;
    color: $secondary;

    a {
      color: $main;
    }
  }
}

@media screen and (max-width: $medium) {
  .info {
    .city {
      display: none;
    }
    span {
      font-weight: 400;
      font-size: 15px;
    }
  }
}

@media screen and (max-width: $small) {
  .info {
    display: none;
  }
}
</style>
