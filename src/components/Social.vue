<template>
  <div class="social">
    <div class="ph">
      <a href="tel:+573155597866"><i class="icon-phone-call"></i></a>
    </div>
    <div class="fb">
      <a href="https://www.facebook.com/usecheDyC" target="_blank"
        ><i class="icon-facebook"></i
      ></a>
    </div>
    <div class="tw">
      <a href="https://twitter.com/@UsecheDyC" target="_blank"
        ><i class="icon-twitter"></i
      ></a>
    </div>
    <div class="in">
      <a href="https://www.instagram.com/usechedyc/" target="_blank"
        ><i class="icon-instagram"></i
      ></a>
    </div>
    <div class="hb">
      <a
        href="https://empresas.habitissimo.com.co/pro/useche-diseno-y-construcciones-s-a-s"
        target="_blank"
        ><img src="@/assets/img/icons/hb.webp" alt="Habitissimo"
      /></a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.social {
  position: fixed;
  z-index: 99;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  display: flex;
  flex-direction: column;

  .fb,
  .tw,
  .in,
  .hb,
  .ph {
    width: 30px;
    height: 30px;
    font-size: 25px;
    padding: 10px;
    transition: all 0.3s ease-in-out;

    &:hover {
      width: 60px;
      a {
        transform: translateX(25px);
      }
      padding-left: 25px;
    }
    a {
      color: #fff;

      &:hover {
        text-decoration: none;
      }
    }

    img {
      width: 25px;
    }
  }
  .fb {
    background: #3a5795bf;
    border-right: 4px solid #3a5795;
  }
  .tw {
    background: #5ea9ddbf;
    border-right: 4px solid #5ea9dd;
  }
  .in {
    background: #b5197ebf;
    border-right: 4px solid #b5197e;
  }
  .hb {
    background: #e20000bf;
    border-right: 4px solid #e20000;
  }
  .ph {
    background: #bbbbbbbf;
    border-right: 4px solid #bbbbbb;
    display: none;
  }
}

@media screen and (max-width: $small) {
  .social {

    .fb,
    .tw,
    .in,
    .hb,
    .ph {
      width: 30px;
      height: 30px;
      font-size: 20px;
      padding: 5px;

      img {
        width: 19px;
      }
    }
    .ph {
      display: block;
    }
  }
}
</style>
