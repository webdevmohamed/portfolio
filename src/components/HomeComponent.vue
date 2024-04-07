<template>
  <div class="home">
    <transition name="slide-fade">
      <div class="name-description-container left-container" v-show="showLeft">
        <h1 class="name">Hola, soy <span>Mohamed</span></h1>
        <div class="description">
          <div class="border-description"></div>
          <p class="text-description">
            <b>Desarrollador Web,</b> gran apasionado de la programación y la fotografía.
          </p>
        </div>
        <div class="scroll-down-container">
            <div class="flecha-scroll-down" @click="scrollDown()">
              <div class="scroll-down"></div>
            </div>
          <p class="text-scroll-down">Scroll Down</p>
        </div>
        <img class="tachado" :src="require('@/assets/tachado.png')" alt="" />
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="img-container right-container" v-show="showRight">
        <img class="img-flecha" :src="require('@/assets/flecha.png')" alt="" />
        <div class="img-border-container">
          <div class="img-border"></div>
          <img :src="require('@/assets/foto-perfil.jpeg')" alt="" />
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLeft: false,
      showRight: false,
    };
  },
   mounted() {
      this.showLeft = true;
      this.showRight = true;
  },
  methods: {
    scrollDown() {
      this.$emit('scroll-down');
    }
  }
};
</script>
<style scoped>
.home {
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  flex-direction: row;
}

.home .name {
  font-weight: bold;
  font-size: 45px;
  margin-bottom: 30px;
  width: 100%;
  margin-top: 80px;
}

.home .name span {
  color: #68a506;
}

.home .description {
  display: flex;
  flex-direction: row;
}

.home .description .border-description {
  width: 30px;
  border-top: 3px solid black;
  margin-top: 15px;
  margin-right: 15px;
}

.home .description .text-description {
  font-size: 25px;
  width: 434px;
}

.home .description .text-description b {
  background: rgb(104, 165, 6);
  background: linear-gradient(
    90deg,
    rgba(104, 165, 6, 0.7175245098039216) 0%,
    rgba(104, 165, 6, 0) 100%
  );
}

.home .name-description-container .scroll-down-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 80px;
}

.home .name-description-container .scroll-down-container .text-scroll-down {
  margin-bottom: 0;
  margin-left: 15px;
}

.home .name-description-container .scroll-down-container .flecha-scroll-down {
  background-color: black;
  width: 50px;
  height: 50px;
  position: relative;
  cursor: pointer;
}

.home
  .name-description-container
  .scroll-down-container
  .flecha-scroll-down
  .scroll-down {
  position: absolute;
  font-size: 20px;
  text-decoration: none;
  text-shadow: none;
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  -webkit-transform: translate(-50%, 0%) rotate(45deg);
  -moz-transform: translate(-50%, 0%) rotate(45deg);
  transform: translate(-50%, 0%) rotate(45deg);
  -webkit-animation: fade_move_down 3s ease-in-out infinite;
  -moz-animation: fade_move_down 3s ease-in-out infinite;
  animation: fade_move_down 3s ease-in-out infinite;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
}

/*animated scroll arrow animation*/
@-webkit-keyframes fade_move_down {
  0% {
    -webkit-transform: translate(0, -15px) rotate(45deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(0, 15px) rotate(45deg);
    opacity: 0;
  }
}
@-moz-keyframes fade_move_down {
  0% {
    -moz-transform: translate(0, -15px) rotate(45deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -moz-transform: translate(0, 15px) rotate(45deg);
    opacity: 0;
  }
}
@keyframes fade_move_down {
  0% {
    transform: translate(0, -15px) rotate(45deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 15px) rotate(45deg);
    opacity: 0;
  }
}

.home .name-description-container .tachado {
  width: 160px;
  height: fit-content;
  float: right;
  margin-top: -157px;
}

.home .img-container {
  display: flex;
  flex-direction: row;
}

.home .img-container .img-border-container .img-border {
  width: 364px;
  height: 495px;
  border: 7px solid black;
  position: absolute;
  margin-left: 30px;
  margin-top: 20px;
}

.home .img-container .img-border-container img {
  width: 75%;
  margin-left: 10px;
  position: relative;
  border: 3px solid black;
}

.home .img-container .img-border-container::before {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  border: 3px solid black;
  transform: rotate(60deg);
  z-index: 1;
  margin-left: -13px;
  margin-top: 228px;
}

.home .img-container .img-border-container::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  transform: rotate(60deg);
  background-color: #68a506;
  margin-left: -379px;
  margin-top: 230.3px;
}

.home .img-container .img-flecha {
  width: 145px;
  height: fit-content;
  margin-left: -50px;
  margin-top: 35px;
}

.slide-fade-enter-active {
  transition: all 2s ease;
}

.slide-fade-leave-active {
  transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(0); /* Mantén la posición inicial */
}

.slide-fade-enter-to,
.slide-fade-leave {
  opacity: 1;
  transform: translateX(0);
}

.left-container.slide-fade-enter,
.left-container.slide-fade-leave-to {
  transform: translateX(-30%);
}

.right-container.slide-fade-enter,
.right-container.slide-fade-leave-to {
  transform: translateX(30%);
}

@media screen and (max-width: 1200px) {
  .home {
    flex-direction: column-reverse;
    align-items: center;
  }

  .home .name-description-container {
    text-align: center;
  }

  .home .name-description-container .tachado {
    display: none;
  }

  .home .name {
    margin-top: 20px;
  }

  .home .description .border-description {
    display: none;
  }

  .home .description .text-description {
    width: 100%;
  }

  .home .name-description-container .scroll-down-container {
    justify-content: center;
    margin-top: 25px;
  }

  .home .img-container {
    width: 580px;
    flex-direction: column;
    align-items: center;
  }

  .home .img-container .img-flecha {
    order: 1;
    margin-top: -13px;
    transform: rotate(-79deg);
    margin-left: 20px;
  }

  .home .img-container .img-border-container {
    text-align: center;
  }

  .home .img-container .img-border-container::after {
    margin-left: -381px;
    margin-top: 82px;
  }

  .home .img-container .img-border-container::before {
    margin-top: 80px;
    margin-left: -15px;
  }

  .home .img-container .img-border-container img {
    border-width: 0;
    width: 63%;
  }

  .home .img-container .img-border-container .img-border {
    margin-left: 135px;
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(0); /* Mantén la posición inicial */
  }

  .slide-fade-enter-to,
  .slide-fade-leave {
    opacity: 1;
    transform: translateY(0);
  }

  .left-container.slide-fade-enter,
  .left-container.slide-fade-leave-to {
    transform: translateY(50%);
  }

  .right-container.slide-fade-enter,
  .right-container.slide-fade-leave-to {
    transform: translateY(-50%);
  }
}

@media screen and (max-width: 600px) {
  .home .img-container {
    zoom: 90%;
  }

  .home .img-container .img-border-container::before {
    border-width: 4px;
    margin-left: -14px;
  }

  .home .img-container .img-flecha {
    margin-top: -11px;
    transform: rotate(-78deg);
  }

}

@media screen and (max-width: 530px) {
  .home {
    padding: 0 10px;
    zoom: 80%;
  }

  .home .img-container .img-flecha {
    margin-top: -11px;
    transform: rotate(-76deg);
  }
  .home .img-container .img-border-container::before {
    margin-top: 79px;
    zoom: 130%;
  }

  .home .img-container .img-border-container::after {
    zoom: 130%;
    margin-left: -294px;
    margin-top: 81px;
  }

}

@media screen and (max-width: 420px) {
  .home {
    zoom: 70%;
  }

  .home .img-container .img-flecha {
    transform: rotate(-75deg);
  }

  .home .img-container .img-border-container::before {
    margin-top: 78px;
    margin-left: -15px;
  }
}

@media screen and (max-width: 365px) {
  .home {
    zoom: 60%;
  }

  .home .img-container .img-flecha {
    margin-top: -8px;
    transform: rotate(-72deg);
  }
}

</style>
