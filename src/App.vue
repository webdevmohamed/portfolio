<template>
  <div class="relative">
      <!-- Main bg unified -->
      <div class="fixed inset-0 -z-50 overflow-hidden">
        <!-- Gradient -->
        <div
          class="absolute inset-0 opacity-40 dark:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-primary/40 via-accent-blue/30 to-background dark:from-primary-dark/40 dark:via-accent-blue/30 dark:to-background">
        </div>

        <!-- Grid pattern -->
        <div
          class="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.03] dark:opacity-[0.015] backdrop-blur-[1px] transition-opacity duration-300">
        </div>
      </div>

    <HeaderComponent />
    <NavigationDots />

    <!-- Main content con scroll minimalista -->
    <div
      class="w-full h-screen overflow-hidden focus:outline-none z-10"
      @wheel="handleWheel"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @keydown="handleKeydown"
      tabindex="0"
    >
      <div
        class="transition-all duration-300"
        :style="{ transform: `translateY(-${store.currentSectionIndex * 100}vh)` }"
      >
        <component
          v-for="section in store.sections"
          :key="section.id"
          :is="sectionComponentsMap[section.id]"
          :id="section.id"
          class="h-screen w-full flex flex-col items-center justify-center"
        />
      </div>
    </div>

    <Transition mode="out-in">
      <SectionName :key="currentSectionName" :name="currentSectionName" />
    </Transition>
    </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import ServicesComponent from '@/components/ServicesComponent.vue'
import SkillsComponents from '@/components/SkillsComponents.vue'
import ExperienceComponent from '@/components/ExperienceComponent.vue'
import NavigationDots from './components/NavigationDots.vue'
import { computed } from 'vue'
import SectionName from '@/components/UI/SectionName.vue'
import { useNavigationStore } from '@/stores/navigation.js'

const store = useNavigationStore();

const sectionComponentsMap = {
  home: HomeComponent,
  about: AboutComponent,
  services: ServicesComponent,
  skills: SkillsComponents,
  experience: ExperienceComponent,
};

const currentSectionName = computed(() => store.currentSectionObject.name);

let touchStart = 0;

const handleWheel = (e) => {
  if (store.isScrolling) return
  e.preventDefault()
  store.isScrolling = true

  if (e.deltaY > 0) {
    store.nextSection()
  } else if (e.deltaY < 0) {
    store.prevSection()
  }

  setTimeout(() => store.isScrolling = false, 300)
}

const handleTouchStart = (e) => {
  touchStart = e.touches[0].clientY
}

const handleTouchMove = (e) => {
  if (store.isScrolling) return
  e.preventDefault()

  const touchEnd = e.touches[0].clientY
  const diff = touchStart - touchEnd

  if (Math.abs(diff) > 50) {
    store.isScrolling = true

    if (diff > 0) {
      store.nextSection()
    } else {
      store.prevSection()
    }

    setTimeout(() => store.isScrolling = false, 100)
  }
}

const handleKeydown = (e) => {
  if (store.isScrolling) return

  if (['ArrowDown', 'Space', 'PageDown'].includes(e.key)) {
    e.preventDefault()
    store.nextSection()
  } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
    e.preventDefault()
    store.prevSection()
  } else if (e.key === 'Home') {
    e.preventDefault()
    store.goToSection(0)
  } else if (e.key === 'End') {
    e.preventDefault()
    store.goToSection(store.sections.length - 1)
  }
}
</script>

<style scoped>
.animate-gradient-pan {
  background-size: 200% 200%;
  animation: gradient-pan 20s linear infinite;
}

@keyframes gradient-pan {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.v-leave-from,
.v-enter-to {
  opacity: 0.5;
  transform: translateY(0);
}
</style>
