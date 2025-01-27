<template>
    <div class="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        <div v-for="(section, index) in sections" :key="index" :class="[
            'w-3 h-3 rounded-sm mb-5 transition-all duration-300 border-2 cursor-pointer',
            currentSectionIndex === index ? 'bg-transparent border-foreground scale-150' : 'bg-primary border-primary rotate-45'
        ]" @click="scrollToSection(index)"></div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const sections = ['home', 'about'];
const currentSectionIndex = ref(0);

const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY); // Determina la dirección del scroll
    if (delta > 0 && currentSectionIndex.value < sections.length - 1) {
        // Scroll hacia abajo
        currentSectionIndex.value++;
    } else if (delta < 0 && currentSectionIndex.value > 0) {
        // Scroll hacia arriba
        currentSectionIndex.value--;
    }

    const targetSection = document.getElementById(sections[currentSectionIndex.value]);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
};


const scrollToSection = (sectionIndex) => {
    currentSectionIndex.value = sectionIndex;
    const section = sections[currentSectionIndex.value];
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};


onMounted(() => {
    window.addEventListener('wheel', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('wheel', handleScroll);
});
</script>

<style scoped></style>
