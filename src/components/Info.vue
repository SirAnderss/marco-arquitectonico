<template>
  <div class="info">
    <span class="email">
      Correo electrónico:
      <a href="mailto:email@example.com">email@example.com</a>
    </span>
    <span class="phone">
      Teléfono:
      <a href="tel:+573177130574"> 317 713 0574</a>
    </span>
    <span class="city">
      Ciudad - Departamento
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.info {
  position: fixed;
  width: 100%;
  height: 30px;
  z-index: 9999;
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
  }
}

@media screen and (max-width: $small) {
  .info {
    display: none;
  }
}
</style>
