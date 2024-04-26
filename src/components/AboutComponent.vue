<template>
  <div class="about">
    <transition name="slide-fade">
      <div class="img-container left-container" v-show="showLeft">
        <h2 class="about-me responsive d-none">Acerca de mí.</h2>
        <img :src="require('@/assets/about.svg')" class="img-fluid" alt="">
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="about-me-description right-container" v-show="showRight">
        <h2 class="about-me">Acerca de mí.</h2>
        <div class="description-container">
          <div class="border-description"></div>
          <div class="description">
            <p class="text-description">
              Con una trayectoria de <b>3 años</b> en el campo del <b>Desarrollo Web</b>, me destaco por mi capacidad de
              aprendizaje continuo y mi eficacia en la resolución de desafíos en cada proyecto que emprendo.
            </p>
            <a class="download-button" :href="pdfUrl" download>
              <h3>Descargar CV</h3>
              <div class="go-corner">
                <div class="go-arrow">
                  <b-icon class="download-icon" icon="download"></b-icon>
                </div>
              </div>
            </a>
            <div class="contact-buttons">
              <b-button squared variant="dark" class="contact-me-button bg-black border-0">
                <b-icon icon="cursor"></b-icon>
                <p>Contáctame</p>
              </b-button>
              <a href="https://www.linkedin.com/in/mohamedmortahil/" target="_blank" class="link-linkedin">
                <div class="linkedin-button">
                  <b-icon class="linkedin" icon="linkedin"></b-icon>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import pdf from '@/assets/Mohamed_Mortahil_Elaaouad_Abril_2024.pdf';

export default {
  name: "AboutComponent",
  data() {
    return {
      showLeft: false,
      showRight: false,
      pdfUrl: pdf
    };
  },
  mounted() {
    this.showLeft = true;
    this.showRight = true;
  }
}
</script>

<style scoped>

.about {
  display: flex;
  align-items: center;
}

.about .img-container {
  width: 50%;
}

.about .about-me-description {
  width: 50%;
}

.about .about-me {
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 30px;
  width: 100%;
}

.about .about-me-description .description-container {
  display: flex;
  flex-direction: row;
}

.about .about-me-description .description-container .border-description {
  min-width: 30px;
  border-top: 3px solid black;
  margin-top: 15px;
  margin-right: 15px;
}

.about .about-me-description .description-container .description .text-description {
  font-size: 20px;
  width: 80%;
}

.about .about-me-description .description-container .description .text-description b {
  color: #68a506;
}

.about .about-me-description .description-container .description .contact-buttons {
  display: flex;
  margin-top: 20px;
}

.about .about-me-description .description-container .description .contact-buttons .contact-me-button {
  display: flex;
  align-items: center;
  padding: 15px 25px;
}

.about .about-me-description .description-container .description .contact-buttons .contact-me-button p {
  margin-bottom: 0;
  margin-left: 5px;
}

.about .about-me-description .description-container .description .contact-buttons .contact-me-button:hover {
  background-color: #68a506 !important;
}

.about .about-me-description .description-container .description .contact-buttons a.link-linkedin {
  color: black;
  text-decoration: none;
}

.about .about-me-description .description-container .description .contact-buttons .linkedin-button {
  padding: 15px 20px;
  width: fit-content;
  border: 3px solid black;
  margin-left: 20px;
}

.about .about-me-description .description-container .description .contact-buttons .linkedin-button .linkedin {
  width: 20px;
  height: 20px;
}


.about .about-me-description .description-container .description .contact-buttons .linkedin-button:hover {
  border-color: #68a506;
  cursor: pointer;
}

.about .about-me-description .description-container .description .contact-buttons .linkedin-button:hover .linkedin {
  fill: #68a506;
}

.about .about-me-description .description-container .description .download-button h3 {
  color: black;
  font-size: 17px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}

.about .about-me-description .description-container .description .download-button p {
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  color: #666666;
}

.about .about-me-description .description-container .description .download-button p.small {
  font-size: 14px;
}


.about .about-me-description .description-container .description .download-button .go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 58px;
  height: 58px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #68a506;
  border-radius: 0 0 0 58px;
}

.about .about-me-description .description-container .description .download-button .go-arrow {
  margin-top: -10px;
  margin-right: -10px;
  color: white;
}

.about .about-me-description .description-container .description .download-button .go-arrow .download-icon {
  width: 20px;
  height: 20px;
}

.download-button {
  display: block;
  position: relative;
  max-width: 250px;
  background-color: #f2f8f9;
  padding: 15px 25px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
}

.download-button:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: #68a506;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.5s ease-out;
}

.download-button:hover:before {
  transform: scale(21);
}

.download-button:hover h3 {
  transition: all 0.3s ease-out;
  color: white !important;
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

.left-container.slide-fade-enter,
.left-container.slide-fade-leave-to {
  transform: translateY(-30%);
}

.right-container.slide-fade-enter,
.right-container.slide-fade-leave-to {
  transform: translateY(30%);
}

@media screen and (max-width: 1200px) {
  .about {
    flex-direction: column;
    align-items: center;
  }

  .about .img-container {
    width: 60%;
  }

  .about .about-me-description {
    width: 70%;
    text-align: center;
    margin-top: 35px;
  }

  .about .about-me-description .about-me {
    display: none;
  }

  .about .img-container .about-me.responsive {
    text-align: center;
    display: block !important;
  }

  .about .about-me-description .description-container .border-description {
    display: none;
  }

  .about .about-me-description .description-container .description {
    text-align: -webkit-center;
  }

  .about .about-me-description .description-container .description .text-description {
    width: 100%;
  }

  .about .about-me-description .description-container .description .contact-buttons {
    justify-content: center;
  }


}


@media screen and (max-width: 800px) {
  .about .img-container {
    width: 70%;
  }

  .about .about-me-description {
    width: 90%;
  }
}

@media screen and (max-width: 600px) {

  .about .img-container {
    width: 90%;
  }

}

@media screen and (max-width: 420px) {
  .about {
    zoom: 80%;
  }

}


</style>