<template>
  <div id="review" class="review">
    <!-- <div class="img">
      <img src="@/assets/img/facade.webp" alt="Fachada en ladrillo" />
    </div> -->
    <div class="slider">
      <hooper :settings="reviewHooperSettings">
        <slide>
          <h3>Carlos Panesso</h3>
          <h4>
            Directivo Consejo de Administración de la Corporación de
            Comerciantes Plaza de Mercado de Paloquemao
          </h4>
          <p>
            Marco Arquitectónico SAS fue una de las ocho compañías de
            consultoría que contactamos y la única que respondió nuestra
            solicitud de cotización con prontitud y nos aseguraba el mejor
            precio. Por la naturaleza de nuestras instalaciones, el cumplimiento
            en el tiempo de ejecución es muy importante y en ese sentido estamos
            muy satisfechos con el trabajo y el servicio prestado a nuestra
            organización y definitivamente los recomendamos.
          </p>
          <img
            src="@/assets/img/logos/clients/paloquemao.webp"
            alt="Paloquemao"
          />
        </slide>
        <slide>
          <h3>Leidy Viviana Vera Mendivelso</h3>
          <h4>
            Secretaria Consular Embajada de Finlandia
          </h4>
          <p>
            El proyecto que confiamos a Marco Arquitectónico SAS incluyó obras
            civiles para la adecuación de nuestras oficinas, con instalación de
            cableado de voz y datos, cámaras y el diseño de la distribución de
            los espacios de trabajo y protocolo. No podríamos estar más felices
            con el trabajo realizado, tanto por el cuidado de los detalles como
            por el precio ofrecido. ¡Gracias!
          </p>
          <img
            src="@/assets/img/logos/clients/finlandia.webp"
            alt="Embajada de Finlandia"
          />
        </slide>
        <slide>
          <h3>Mario Botía Aponte</h3>
          <h4>
            Gerente General en Artecma SAS
          </h4>
          <p>
            Para nosotros es primordial contar con un contratista confiable que
            nos ayude en nuestro proceso de expansión y adecuación de nuestra
            planta. Por eso hemos trabajado en varios proyectos de
            infraestructura comercial con Marco Arquitectónico SAS en los
            últimos años y debido a su desempeño y profesionalismo siempre
            contamos con ellos en cada requerimiento constructivo y de diseño.
            Son nuestros aliados en nuestro proceso de crecimiento y
            recomendarlos es un placer.
          </p>
          <img src="@/assets/img/logos/clients/artecma.webp" alt="Artecma" />
        </slide>
        <slide>
          <h3>Cecilia Clavijo</h3>
          <h4>
            Administradora de Propiedad Horizontal
          </h4>
          <p>
            Administrar conjuntos de propiedad horizontal suele ser un trabajo
            exigente y estresante y hemos encontrado en Marco Arquitectónico SAS
            un equipo profesional con la experiencia suficiente para atender no
            sólo el mantenimiento programado de las propiedades que
            administramos, sino además las emergencias que se nos han
            presentado. Haberlos escogido como nuestro contratista de confianza
            fue la mejor decisión que hemos tomado en nuestra administradora.
          </p>
          <img
            src="@/assets/img/logos/clients/girl.webp"
            alt="Cecilia Clavijo"
          />
        </slide>
        <slide>
          <h3>Misael Murcia</h3>
          <h4>
            Propietario bien inmueble
          </h4>
          <p>
            Cuando decidimos adecuar la terraza para disfrutar en familia,
            solicitamos cotizaciones a muchas empresas que se anuncian en
            internet, pero la mayoría no contaba con la experiencia suficiente o
            sus ideas de diseño y arquitectónicas eran simples y para nada
            innovadoras. Marco Arquitectónico SAS nos presentó un diseño que
            resumía todo lo que anhelamos, interpretando fielmente eso que
            soñamos para nuestro nuevo espacio en el hogar. Se lo recomendaría a
            cualquiera que tenga un proyecto para hacer más acogedor su hogar y
            mejorar su calidad de vida.
          </p>
          <img
            src="@/assets/img/logos/clients/boy.webp"
            alt="Misael Murcia"
          />
        </slide>
      </hooper>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Reviews",
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      reviewHooperSettings: {
        mouseDrag: false,
        playSpeed: 45000,
        transition: 500,
        centerMode: true,
        autoPlay: true,
        wheelControl: false,
        infiniteScroll: true,
        itemsToShow: 1,
        vertical: true,
        hoverPause: false
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.review {
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  .img {
    width: 50%;
    img {
      width: 100%;
      background: linear-gradient(-340deg, $main, $secondary);
      opacity: 0.8;
      box-shadow: 15px 10px 30px $dark;
    }
  }
  .slider {
    width: 80%;
    margin: 0 auto;
    border: 1px solid transparent;
    border-radius: 7px;
    box-shadow: 5px 7px 25px $dark;
    .hooper {
      .hooper-list {
        .hooper-track {
          .hooper-slide {
            display: flex;
            flex-flow: column;
            justify-content: center;
            padding: 50px;
            color: $secondary;

            h3 {
              font-size: 33px;
            }

            h4 {
              font-size: 22px;
              font-weight: 400;
            }

            p {
              font-size: 16px;
              text-align: justify;
            }

            h4,
            p,
            img {
              margin-bottom: 15px;
              margin-right: 60px;
            }

            img {
              display: inherit;
              align-self: flex-start;
              margin: 0;
              height: 80px;
              opacity: 0.7;
              border-radius: 50%;
            }
          }
        }
      }
    }

    .is-vertical {
      height: 400px !important;
    }
  }
}

@media screen and (max-width: $large) {
  .review {
    flex-direction: column;
    .img {
      width: 90%;
      margin: 0 auto;
      img {
        width: 100%;
        box-shadow: 1px 5px 15px $dark;
      }
    }
    .slider {
      width: 95%;
      margin: 0 auto;
      .hooper {
        .hooper-list {
          .hooper-track {
            .hooper-slide {
              width: 100%;
              padding: 0 40px;

              h3 {
                font-size: 30px;
              }

              h4 {
                font-size: 24px;
              }

              p {
                font-size: 18px;
              }

              h4,
              p,
              img {
                margin-right: 0;
              }

              img {
                height: 60px;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: $small) {
  .review {
    .slider {
      .hooper {
        .hooper-list {
          .hooper-track {
            .hooper-slide {
              padding: 0 40px;

              h3 {
                font-size: 18px;
              }

              h4 {
                font-size: 14px;
              }

              p {
              font-size: 12px;
              }

              h4,
              p,
              img {
                margin-right: 0;
              }

              img {
                height: 60px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
