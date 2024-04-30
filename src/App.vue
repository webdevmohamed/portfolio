<template>
  <div class="mi-portfolio">
    <b-navbar toggleable="xl" :class="['navbar', scrolled ? 'shadow' : '' ]" class="navbar">
      <b-navbar-brand>
        <span class="brand">M</span>
        <span class="name d-none d-md-inline"
        >Mohamed | Mortahil Elaaouad</span
        >
        <span class="name d-inline d-md-none">Mohamed</span>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-item-collapse" class="bg-black rounded-0">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="x" class="text-white"></b-icon>
          <b-icon v-else icon="list-nested" class="text-white"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse
          id="nav-item-collapse"
          is-nav
          class="ml-auto justify-content-end">
        <b-navbar-nav>
          <b-nav-item
              @click="setActive('home')"
              :active="activeSection === 'home'"
              class="mb-2">Inicio
          </b-nav-item>
          <b-nav-item
              @click="setActive('about')"
              :active="activeSection === 'about'"
              class="mb-2">Acerca de mí
          </b-nav-item>
          <b-nav-item
              @click="setActive('services')"
              :active="activeSection === 'services'"
              class="mb-2">Servicios
          </b-nav-item>
          <b-nav-item
              @click="setActive('experience')"
              :active="activeSection === 'experience'"
              class="mb-2">Experiencia
          </b-nav-item>
          <b-nav-item
              @click="setActive('contact')"
              :active="activeSection === 'contact'"
              class="mb-2 d-inline d-lg-none">Contacto
          </b-nav-item>
          <b-button @click="setActive('contact')" squared class="d-none d-lg-inline contact bg-black"
                    variant="dark">Contacto
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="main-container">
      <home-component :key="sectionsKeys.home" class="section" :class="{visible: sectionAnimationState.home}"
                      @scroll-down="setActive('about')" id="home"></home-component>
      <about-component :key="sectionsKeys.about" class="section" :class="{visible: sectionAnimationState.about}"
                       @scroll-to-contact="setActive('contact')" id="about"></about-component>
      <services-component :key="sectionsKeys.services" class="section"
                          :class="{visible: sectionAnimationState.services}" id="services"></services-component>
      <skills-component id="skills"></skills-component>
      <experience-component :key="sectionsKeys.experience" class="section"
                            :class="{visible: sectionAnimationState.experience}" id="experience"></experience-component>
      <contact-component :key="sectionsKeys.contact" class="section" :class="{visible: sectionAnimationState.contact}"
                          id="contact"></contact-component>
    </div>
  </div>
</template>
<script>

import HomeComponent from "@/components/HomeComponent";
import AboutComponent from "@/components/AboutComponent";
import ServicesComponent from "@/components/ServicesComponent";
import SkillsComponent from "@/components/SkillsComponent";
import ExperienceComponent from "@/components/ExperienceComponent";
import ContactComponent from "@/components/ContactComponent";

export default {
  name: "App",
  data() {
    return {
      activeSection: "home",
      scrolled: false,
      sectionsKeys: {
        home: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        about: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        services: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        experience: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        contact: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
      },
      sectionAnimationState: {
        home: true,
        about: false,
        services: false,
        experience: false,
        contact: false
      }
    };
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    setActive(section) {
      window.removeEventListener('scroll', this.handleScroll);
      if (this.activeSection !== section) this.sectionsKeys[section] = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      this.sectionAnimationState[section] = true;
      this.activeSection = section;
      window.scrollTo({
        top: document.getElementById(section).offsetTop,
        behavior: 'smooth'
      });

      setTimeout(() => {
        window.addEventListener('scroll', this.handleScroll)
      }, 500)

    },

    handleScroll() {
      this.scrolled = window.scrollY > 0;
      const sections = document.querySelectorAll('.section');
      let closestSectionId = null;
      let closestDistance = Infinity;
      sections.forEach(section => {
        const distance = Math.abs(section.getBoundingClientRect().y);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSectionId = section.id;
        }
      });
      if (!this.sectionAnimationState[closestSectionId]) this.sectionsKeys[closestSectionId] = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      this.sectionAnimationState[closestSectionId] = true;
      this.activeSection = closestSectionId;
    }
  },

  components: {
    ContactComponent,
    ExperienceComponent,
    SkillsComponent,
    ServicesComponent,
    AboutComponent,
    HomeComponent
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap");

.mi-portfolio {
  background-color: #e5e5e5;
  font-family: "Chakra Petch", sans-serif;
  color: black;
}

.mi-portfolio .main-container #home {
  padding-top: 150px;
  padding-bottom: 120px;
}

.mi-portfolio .main-container #about {
  padding-top: 150px;
  padding-bottom: 120px;
}

.mi-portfolio .main-container #services {
  padding-top: 120px;
  padding-bottom: 120px;
}

.mi-portfolio .main-container #skills {
  margin-bottom: 120px;
}

.mi-portfolio .main-container #experience {
  padding-top: 120px;
  padding-bottom: 120px;
}

.mi-portfolio .main-container #contact {
  padding-top: 120px;
  padding-bottom: 120px;
}

.mi-portfolio .navbar {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding-right: 100px;
  padding-left: 100px;
  background-color: #e5e5e5;
}

.mi-portfolio .navbar .brand {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.mi-portfolio .navbar .name {
  font-weight: bold;
  font-size: 15px;
}

.mi-portfolio .navbar .nav-link {
  margin-right: 15px;
  font-weight: bold;
}

.mi-portfolio .navbar .nav-link.active {
  font-weight: bold;
  position: relative;
}

.mi-portfolio .navbar .nav-link::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 8px;
  width: 0px;
  height: 2px; /* Altura del borde inferior */
  background-color: transparent; /* Color del borde inferior, inicialmente transparente */
  transition: width 0.5s;
}

.mi-portfolio .navbar .nav-link.active::after {
  background-color: black;
  width: 20px;
}

.mi-portfolio .navbar .nav-link:hover {
  font-weight: bold;
}

.mi-portfolio .navbar #nav-item-collapse .navbar-nav {
  align-items: center;
}

.mi-portfolio .navbar #nav-item-collapse .navbar-nav button {
  font-weight: bold;
}

.mi-portfolio .main-container .section {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease; /* Añade una transición para suavizar la aparición */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.mi-portfolio .main-container .section.visible {
  opacity: 1;
  visibility: visible;
}

@media screen and (max-width: 1200px) {
  .mi-portfolio .navbar {
    padding-right: 30px;
    padding-left: 30px;
  }

}

@media screen and (max-width: 991px) {
  .mi-portfolio .navbar .nav-link::after {
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .mi-portfolio .navbar #nav-item-collapse {
    text-align: center;
    align-items: center;
  }

  .mi-portfolio .navbar #nav-item-collapse .navbar-nav {
    align-items: center;
  }
}


</style>
