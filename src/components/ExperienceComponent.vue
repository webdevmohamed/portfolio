<template>
  <div class="experience">
    <h2 class="title">Experiencia.</h2>
    <div class="main-timeline">

      <!-- start experience section-->
      <div class="timeline">
        <div class="icon"></div>
        <div class="date-content">
          <div class="date-outer">
                                    <span class="date">
                                    <span class="years">3 años</span>
                                            <span class="year-range">2021 - 2024</span>
                                    </span>
          </div>
        </div>
        <div class="timeline-content">
          <h5 class="title">Desarrollador Web</h5>
          <div class="description">
            <ul>
              <li>Desarrollo integral de Landing Pages para líderes en turismo y ocio, destacando la implementación de diseño responsive y elementos interactivos para una experiencia óptima del usuario.</li>
              <li>Optimización de rendimiento: Implementación de estrategias para reducir significativamente los tiempos de carga de las Landing Pages, alcanzando una mejora del 70% mediante la optimización del flujo de funciones y llamadas asíncronas.</li>
              <li>Innovación en la experiencia de usuario: Liderazgo en el desarrollo de funcionalidades clave, como buscadores especializados para trenes, hoteles y actividades de ocio, abarcando desde la maquetación hasta la funcionalidad, contribuyendo así a mejorar la accesibilidad y la experiencia del usuario en la plataforma.</li>
              <li>Ampliación de responsabilidades: Expansión del rol más allá del Front-end para incluir tareas en el Back-end, como la integración de APIs de terceros, desarrollo de funciones personalizadas en PHP y gestión eficiente de bases de datos MySQL, demostrando habilidades multidisciplinarias y capacidad para colaborar en proyectos de gran escala.</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end experience section-->
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceComponent"
}
</script>

<style scoped>

.experience .title {
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 80px;
  width: 100%;
  text-align: center;
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
  border-radius: 50%;
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
  left: 3px
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
  width: 36.5%;
  height: 2px;
  background: #c6c6c6;
  margin: auto 0;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0
}

.experience .main-timeline .date-outer {
  width: 125px;
  height: 125px;
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
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.33s ease-out 0s
}

.experience .main-timeline .date-outer:before {
  background: #fff;
  border: 2px solid #68a506;
  left: -6px
}

.experience .main-timeline .date-outer:after {
  border: 2px solid #c6c6c6;
  left: 6px
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
  top: 30%;
  left: 0
}

.experience .main-timeline .year-range {
  font-size: 18px;
  font-weight: 700
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

.experience .main-timeline .title {
  font-size: 19px;
  font-weight: 700;
  line-height: 24px;
  margin: 0 0 15px 0;
  text-align: left;
}

.experience .main-timeline .description {
  margin-bottom: 0
}
.experience .main-timeline .description ul li {
  margin-bottom: 10px
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

@media only screen and (max-width: 991px) {
  .experience .main-timeline .date-content {
    margin-top: 35px
  }
  .experience .main-timeline .date-content:before {
    width: 22.5%
  }
  .experience .main-timeline .timeline-content {
    padding: 10px 0 10px 30px
  }
  .experience .main-timeline .title {
    font-size: 17px
  }
  .experience .main-timeline .timeline:nth-child(2n) .timeline-content {
    padding: 10px 30px 10px 0
  }
}

@media only screen and (max-width: 767px) {
  .experience .main-timeline:before {
    margin: 0;
    left: 7px
  }
  .experience .main-timeline .timeline {
    margin-bottom: 20px
  }
  .experience .main-timeline .timeline:last-child {
    margin-bottom: 0
  }
  .experience .main-timeline .icon {
    margin: auto 0
  }
  .experience .main-timeline .date-content {
    width: 95%;
    float: right;
    margin-top: 0
  }
  .experience .main-timeline .date-content:before {
    display: none
  }
  .experience .main-timeline .date-outer {
    width: 110px;
    height: 110px
  }
  .experience .main-timeline .date-outer:before,
  .experience .main-timeline .date-outer:after {
    width: 110px;
    height: 110px
  }
  .experience .main-timeline .date {
    top: 30%
  }
  .experience .main-timeline .year {
    font-size: 24px
  }
  .experience .main-timeline .timeline-content,
  .experience .main-timeline .timeline:nth-child(2n) .timeline-content {
    width: 95%;
    text-align: center;
    padding: 10px 0
  }
  .experience .main-timeline .title {
    margin-bottom: 10px
  }
}

</style>