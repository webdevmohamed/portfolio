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
          <ul class="skills">
            <li><b>Mis Skills Son:</b> HTML, CSS, JavaScript, Vue, Nuxt, Git, Bootstrap, jQuery, PHP, MySQL & Strapi.</li>
          </ul>
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
export default {
  name: "AboutComponent",
  data() {
    return {
      showLeft: false,
      showRight: false,
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
  font-size: 40px;
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

.about .about-me-description .description-container .description .skills {
  list-style-type: square;
  padding: 0;
  margin-top: 30px;
}

.about .about-me-description .description-container .description .contact-buttons {
  display: flex;
  margin-top: 50px;
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

.about .about-me-description .description-container .description .contact-buttons .linkedin-button:hover {
  border-color: #68a506;
  cursor: pointer;
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
    text-align: center;
  }

  .about .about-me-description .description-container .description .text-description {
    width: 100%;
  }

  .about .about-me-description .description-container .description .skills {
    padding: inherit;
    list-style-type: none;
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