<template>
  <div class="services">
    <transition name="slide-fade">
      <h2 class="title" v-show="showTitle">Servicios.</h2>
    </transition>
    <div class="services-container">
      <transition name="slide-fade">
        <div class="service col-3 first" v-show="showFist">
          <div class="content">
            <div class="green-square ms-4" style="margin-bottom: -20px"></div>
            <b-icon class="ms-2 mb-4 icono" icon="layout-text-window" font-scale="2"></b-icon>
            <h3><b>Diseño Web</b></h3>
            <p class="text-secondary">Diseños bonitos y elegantes con interfaces interactivas que resultan intuitivas, eficaces y agradables de usar para el usuario.</p>
          </div>
          <div class="custom-border"></div>
        </div>
      </transition>

      <transition name="slide-fade">
        <div class="service col-3 second" v-show="showSecond">
          <div class="content">
            <div class="green-square ms-4" style="margin-bottom: -20px"></div>
            <b-icon class="ms-2 mb-4 icono" icon="journal-code" font-scale="2"></b-icon>
            <h3><b>Desarrollo</b></h3>
            <p class="text-secondary">Desarrollo web personalizado adaptado a sus especificaciones, diseñado para ofrecer una experiencia de usuario impecable.</p>
          </div>
          <div class="custom-border"></div>
        </div>
      </transition>

      <transition name="slide-fade">
        <div class="service col-3 third" v-show="showThird">
          <div class="content">
            <div class="green-square ms-4" style="margin-bottom: -20px"></div>
            <b-icon class="ms-2 mb-4 icono" icon="tablet" font-scale="2"></b-icon>
            <h3><b>Diseño responsivo</b></h3>
            <p class="text-secondary">Desarrollo de sitios web que se adaptan perfectamente a cualquier dispositivo, brindando una experiencia de usuario óptima en todo momento.</p>
          </div>
          <div class="custom-border"></div>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesComponent",
  data() {
    return {
      showTitle: false,
      showFist: false,
      showSecond: false,
      showThird: false
    };
  },
  mounted() {
    this.showTitle = true;
    this.showFist = true;
    this.showSecond = true;
    this.showThird = true;
  }
}
</script>

<style scoped>

.services .title {
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 80px;
  width: 100%;
  text-align: center;
}

.services .services-container {
  display: flex;
  justify-content: space-around;
}

.services .services-container .service {
  position: relative;
  width: 25%;
  height: 370px;
}

.services .services-container .service .content {
  position: absolute;
  border: 5px solid black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 90px 20px 0 20px;
  z-index: 2;
  background-color: #e5e5e5;
}

.services .services-container .service .content .green-square {
  width: 30px;
  height: 30px;
  background-color: #68a506;
}

.services .services-container .service .content .icono {
  transition: transform 0.8s ease;
}

.services .services-container .service .custom-border {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 5px solid #68a506;
  z-index: 1;
  transition: 0.3s ease-in-out;
}

.services .services-container .service:hover .custom-border {
  transform: translate(1rem, 1rem);
}

.services .services-container .service:hover .content .icono {
  transform: rotateY(360deg);
}


.slide-fade-enter-active {
  transition: all 2s ease;
}

.slide-fade-leave-active {
  transition: all 4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(0%);
}

.slide-fade-enter-to,
.slide-fade-leave {
  opacity: 1;
  transform: translateX(0%);
}

.title.slide-fade-enter,
.title.slide-fade-leave-to {
  transform: translateY(-100%);
}

.first.slide-fade-enter,
.first.slide-fade-leave-to {
  transform: translateY(-30%);
}

.second.slide-fade-enter,
.second.slide-fade-leave-to {
  transform: translateY(-40%);
}

.third.slide-fade-enter,
.third.slide-fade-leave-to {
  transform: translateY(-60%);
}

@media screen and (max-width: 1200px) {
  .services .services-container .service .content {
    zoom: 95%;
  }
}

@media screen and (max-width: 1100px) {
  .services .services-container .service {
    width: 28%;
  }
}

@media screen and (max-width: 1000px) {
  .services .services-container .service .content {
    zoom: 90%;
  }
}

@media screen and (max-width: 900px) {
  .services .services-container {
    flex-direction: column;
    align-items: center;
  }

  .services .services-container .service {
    width: 40%;
    margin-bottom: 60px;
  }

  .services .services-container .service .content {
    zoom: 1;
  }

}

@media screen and (max-width: 750px) {
  .services .services-container .service {
    width: 70%;
  }
}

@media screen and (max-width: 450px) {
  .services .services-container .service {
    width: 90%;
  }
}

@media screen and (max-width: 360px) {
  .services .services-container {
    zoom: 90%;
  }
}




</style>