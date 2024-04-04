<template>
  <div class="mi-portfolio">
    <b-navbar toggleable="lg" :class="['navbar', scrolled ? 'shadow' : '' ]" class="navbar">
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
          class="ml-auto justify-content-end"
      >
        <b-navbar-nav>
          <b-nav-item
              @click="setActive('home')"
              :active="activeItem === 'home'"
              class="mb-2"
          >Inicio</b-nav-item
          >
          <b-nav-item
              @click="setActive('about')"
              :active="activeItem === 'about'"
              class="mb-2"
          >Acerca de mí</b-nav-item
          >
          <b-nav-item
              @click="setActive('experience')"
              :active="activeItem === 'experience'"
              class="mb-2"
          >Experiencia</b-nav-item
          >
          <b-nav-item
              @click="setActive('projects')"
              :active="activeItem === 'projects'"
              class="mb-2"
          >Proyectos</b-nav-item
          >
          <b-nav-item
              @click="setActive('contact')"
              :active="activeItem === 'contact'"
              class="mb-2 d-inline d-lg-none"
          >Contacto</b-nav-item
          >
          <b-button squared class="d-none d-lg-inline contact bg-black" variant="dark"
          >Contacto</b-button
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="main-container">
      <home-component :key="sectionsKeys.home" id="home"></home-component>
      <about-component :key="sectionsKeys.about" id="about"></about-component>
      <br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
  </div>
</template>
<script>

import HomeComponent from "./components/HomeComponent";
import AboutComponent from "@/components/AboutComponent";

export default {
  name: "App",
  data() {
    return {
      activeItem: "home",
      scrolled: false,
      sectionsKeys: {
        home: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        about: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
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
    setActive(item) {
      if (this.activeItem !== item) this.sectionsKeys[item] = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      this.activeItem = item;
      window.scrollTo({
        top: document.getElementById(item).offsetTop,
        behavior: 'smooth'
      });
    },

    handleScroll() {
      this.scrolled = window.scrollY > 0;
    }
  },
  components: {AboutComponent, HomeComponent },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap");

.mi-portfolio {
  background-color: #e5e5e5;
  font-family: "Chakra Petch", sans-serif;
  color: black;
}

.mi-portfolio .main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.mi-portfolio .main-container #home {
  padding-top: 150px;
  padding-bottom: 100px;
}

.mi-portfolio .main-container #about {
  padding-top: 100px;
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
