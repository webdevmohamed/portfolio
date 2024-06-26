<template>
  <div class="experience">
    <transition name="slide-fade">
      <h2 class="title" v-show="showTitle">Experiencia.</h2>
    </transition>
    <div class="main-timeline">
      <div class="timeline">
        <div class="icon"></div>
        <transition name="slide-fade">
          <div class="date-content" v-show="showDateContent">
            <div class="date-outer">
              <span class="date">
                <span class="years">3 años</span>
                <span class="year-range"><i>2021 - 2024</i></span>
              </span>
            </div>
          </div>
        </transition>
        <transition name="slide-fade">
          <img :src="require('@/assets/experience.svg')" class="img-fluid experience-img" alt="" v-show="showImg">
        </transition>
        <div class="timeline-content">
          <transition name="slide-fade">
            <h5 class="job-title" v-show="showJobTitle">Desarrollador Web <i> - Cysval Consultoría y Servicios</i></h5>
          </transition>
          <div class="description">
            <ul style="list-style: square;">
              <transition name="slide-fade">
                <li class="first-point" v-show="showFirstPoint">Desarrollo integral de Landing Pages para líderes en
                  turismo y ocio, destacando la implementación de
                  diseño responsive y elementos interactivos para una experiencia óptima del usuario.
                </li>
              </transition>
              <transition name="slide-fade">
                <li class="second-point" v-show="showSecondPoint">Optimización de rendimiento: Implementación de
                  estrategias para reducir significativamente los
                  tiempos de carga de las Landing Pages, alcanzando una mejora del 70% mediante la optimización del
                  flujo de funciones y llamadas asíncronas.
                </li>
              </transition>
              <transition name="slide-fade">
                <li class="third-point" v-show="showThirdPoint">Innovación en la experiencia de usuario: Liderazgo en el
                  desarrollo de funcionalidades clave, como
                  buscadores especializados para trenes, hoteles y actividades de ocio, abarcando desde la maquetación
                  hasta la funcionalidad, contribuyendo así a mejorar la accesibilidad y la experiencia del usuario en
                  la plataforma.
                </li>
              </transition>
              <transition name="slide-fade">
                <li class="fourth-point" v-show="showFourthPoint">Ampliación de responsabilidades: Expansión del rol más
                  allá del Front-end para incluir tareas en el
                  Back-end, como la integración de APIs de terceros, desarrollo de funciones personalizadas en PHP y
                  gestión eficiente de bases de datos MySQL, demostrando habilidades multidisciplinarias y capacidad
                  para colaborar en proyectos de gran escala.
                </li>
              </transition>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceComponent",
  data() {
    return {
      showDateContent: false,
      showImg: false,
      showJobTitle: false,
      showTitle: false,
      showFirstPoint: false,
      showSecondPoint: false,
      showThirdPoint: false,
      showFourthPoint: false,
    };
  },
  mounted() {
    this.showDateContent = true;
    this.showImg = true;
    this.showJobTitle = true;
    this.showTitle = true;
    this.showFirstPoint = true;
    this.showSecondPoint = true;
    this.showThirdPoint = true;
    this.showFourthPoint = true;

  }
}
</script>

<style scoped>
.experience .title {
  font-weight: bold;
  font-size: 50px;
  margin: 0px auto 80px auto;
  width: fit-content;
  text-align: center;
  position: relative;
  z-index: 1;
}


.experience .title::before {
  content: "";
  position: absolute;
  width: 70px;
  height: 50px;
  background-color: #68a506;
  opacity: 0.3;
  right: 0;
  top: 15px;
  z-index: -1;
}

.experience .main-timeline {
  position: relative
}

.experience .main-timeline:before {
  content: "";
  display: block;
  width: 2px;
  height: 100%;
  background: #c6c6c6;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0
}

.experience .main-timeline .timeline {
  margin-bottom: 40px;
  position: relative
}

.experience .main-timeline .timeline .experience-img {
  width: 50%;
  position: absolute;
  left: 0;
  bottom: 0;
}

.experience .main-timeline .timeline:after {
  content: "";
  display: block;
  clear: both
}

.experience .main-timeline .icon {
  width: 20px;
  height: 20px;
  line-height: 18px;
  margin: auto;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0
}

.experience .main-timeline .icon:before,
.experience .main-timeline .icon:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.33s ease-out 0s
}

.experience .main-timeline .icon:before {
  background: #fff;
  border: 2px solid #68a506;
  left: -3px
}

.experience .main-timeline .icon:after {
  border: 2px solid #c6c6c6;
  left: 3px;
  top: 3px;
}

.experience .main-timeline .timeline:hover .icon:before {
  left: 3px
}

.experience .main-timeline .timeline:hover .icon:after {
  left: -3px
}

.experience .main-timeline .date-content {
  width: 50%;
  float: left;
  margin-top: 22px;
  position: relative
}

.experience .main-timeline .date-content:before {
  content: "";
  width: 36%;
  height: 2px;
  background: #c6c6c6;
  margin: auto 0;
  position: absolute;
  top: 0;
  right: 11px;
  bottom: 0
}

.experience .main-timeline .date-outer {
  width: 135px;
  height: 135px;
  font-size: 16px;
  text-align: center;
  margin: auto;
  z-index: 1
}

.experience .main-timeline .date-outer:before,
.experience .main-timeline .date-outer:after {
  content: "";
  width: 135px;
  height: 135px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.33s ease-out 0s
}

.experience .main-timeline .date-outer:before {
  background: #fff;
  border: 2px solid #68a506;
  left: -6px;
  top: -6px;
}

.experience .main-timeline .date-outer:after {
  border: 2px solid #c6c6c6;
  left: 6px;
}

.experience .main-timeline .timeline:hover .date-outer:before {
  left: 6px
}

.experience .main-timeline .timeline:hover .date-outer:after {
  left: -6px
}

.experience .main-timeline .date {
  width: 100%;
  margin: auto;
  position: absolute;
  top: 25%;
  left: 0
}

.experience .main-timeline .year-range {
  font-size: 15px;
  font-weight: 100
}

.experience .main-timeline .years {
  display: block;
  font-size: 30px;
  font-weight: 700;
  color: #232323;
  line-height: 36px
}

.experience .main-timeline .timeline-content {
  width: 50%;
  padding: 20px 0 20px 50px;
  float: right
}

.experience .main-timeline .job-title {
  font-size: 19px;
  font-weight: 700;
  line-height: 24px;
  margin: 0 0 15px 0;
  text-align: left;
}

.experience .main-timeline .job-title i {
  font-weight: normal;
  font-size: 17px;
}

.experience .main-timeline .description {
  margin-bottom: 0
}

.experience .main-timeline .description ul li {
  margin-bottom: 10px
}

.experience .main-timeline .description ul li::marker {
  color: #68a506;
  font-size: 20px;
}


.experience .main-timeline .timeline:nth-child(2n) .date-content {
  float: right
}

.experience .main-timeline .timeline:nth-child(2n) .date-content:before {
  left: 10px
}

.experience .main-timeline .timeline:nth-child(2n) .timeline-content {
  padding: 20px 50px 20px 0;
  text-align: right
}


.slide-fade-enter-active {
  transition: all 2s ease;
}

li.slide-fade-enter-active {
  transition: all 2.5s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(0);
}

.slide-fade-enter-to,
.slide-fade-leave {
  opacity: 1;
  transform: translateX(0);
}

.title.slide-fade-enter,
.title.slide-fade-leave-to {
  transform: translateY(-100%);
}

.job-title.slide-fade-enter,
.job-title.slide-fade-leave-to {
  transform: translateX(10%);
}

.date-content.slide-fade-enter,
.date-content.slide-fade-leave-to {
  transform: translateX(-20%);
}

.experience-img.slide-fade-enter,
.experience-img.slide-fade-leave-to {
  transform: translateX(-30%);
}

.first-point.slide-fade-enter,
.first-point.slide-fade-leave-to {
  transform: translateX(20%);
}

.second-point.slide-fade-enter,
.second-point.slide-fade-leave-to {
  transform: translateX(40%);
}

.third-point.slide-fade-enter,
.third-point.slide-fade-leave-to {
  transform: translateX(60%);
}

.fourth-point.slide-fade-enter,
.fourth-point.slide-fade-leave-to {
  transform: translateX(80%);
}

@media screen and (max-width: 1200px) {
  .experience .main-timeline:before {
    margin: 0;
    left: 7px
  }

  .experience .main-timeline .timeline {
    margin-bottom: 20px
  }

  .experience .main-timeline .timeline .experience-img {
    display: none;
  }

  .experience .main-timeline .timeline:last-child {
    margin-bottom: 0
  }

  .experience .main-timeline .icon {
    margin: auto 0;
    top: 166px;
  }

  .experience .main-timeline .date-content {
    width: 100%;
    float: right;
    margin-top: 0
  }

  .experience .main-timeline .date-content:before {
    display: none
  }

  .experience .main-timeline .timeline-content,
  .experience .main-timeline .timeline:nth-child(2n) .timeline-content {
    width: 100%;
    text-align: center;
    padding: 10px 0
  }

  .experience .main-timeline .job-title {
    margin: 20px 40px;
    text-align: center;
  }

  .experience .main-timeline .description {
    text-align: left;
    width: 95%;
    float: right;
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(0);
    /* Mantén la posición inicial */
  }

  .slide-fade-enter-to,
  .slide-fade-leave {
    opacity: 1;
    transform: translateY(0);
  }

  .date-content.slide-fade-enter,
  .date-content.slide-fade-leave-to {
    transform: translateY(-30%);
  }

  .job-title.slide-fade-enter,
  .job-title.slide-fade-leave-to {
    transform: translateY(10%);
  }

  .first-point.slide-fade-enter,
  .first-point.slide-fade-leave-to {
    transform: translateY(20%);
  }

  .second-point.slide-fade-enter,
  .second-point.slide-fade-leave-to {
    transform: translateY(40%);
  }

  .third-point.slide-fade-enter,
  .third-point.slide-fade-leave-to {
    transform: translateY(60%);
  }

  .fourth-point.slide-fade-enter,
  .fourth-point.slide-fade-leave-to {
    transform: translateY(80%);
  }

}

@media screen and (max-width: 450px) {
  .experience .main-timeline .description {
    font-size: 15px;
  }

}
</style>