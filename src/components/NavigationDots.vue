<template>
    <div class="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        <div v-for="(section, index) in sections" :key="index" :class="[
            'w-3 h-3 rounded-md mb-5 transition-all duration-300 border-2 cursor-pointer',
            activeSection === section ? 'bg-transparent border-foreground scale-150 ' : 'bg-primary border-primary  rotate-45'
        ]" @click="scrollToSection(section)"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const sections = ['home', 'about', 'services', 'experience', 'contact'];
const activeSection = ref('home'); // Cambia esto según la sección activa

const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

// Escucha el evento de scroll para actualizar la sección activa
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
                activeSection.value = section;
            }
        }
    });
});
</script>

<style scoped>
.fixed {
    position: fixed;
}
</style>
