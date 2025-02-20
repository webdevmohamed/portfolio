<template>
  <div class="min-h-screen overflow-hidden">
      <!-- Main bg unified -->
      <div class="fixed inset-0 -z-50 overflow-hidden">
        <!-- Dynamic gradient -->
        <div
          class="absolute inset-0 opacity-40 dark:opacity-30 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/40 via-accent-blue/30 to-background dark:from-primary-dark/40 dark:via-accent-blue/30 dark:to-background animate-gradient-pan">
        </div>

        <!-- Grid pattern -->
        <div
          class="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.03] dark:opacity-[0.015] backdrop-blur-[1px] transition-opacity duration-300">
        </div>

        <!-- Particles Effect -->
        <div class="absolute inset-0 opacity-20 dark:opacity-10">
          <div v-for="(size, index) in particleSizes" :key="index" class="absolute rounded-full blur-xl animate-blob"
               :class="`bg-gradient-to-${['b', 't', 'r', 'l'][index % 4]} dark:from-primary/80 dark:to-accent-blue/80 from-primary to-accent-blue`"
               :style="`left:${Math.random() * 100}%; top:${Math.random() * 100}%; animation-delay: -${Math.random() * 20}s; width:${size}px; height:${size}px;`">
          </div>
        </div>
      </div>

      <!-- Main content -->
      <div class="relative z-10">
        <HeaderComponent />
        <HomeComponent />
        <AboutComponent />
      </div>
      <NavigationDots />
    <Transition>
      <SectionName v-if="!store.isScrolling" :name="currentSectionName" />
    </Transition>
    </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import NavigationDots from './components/NavigationDots.vue'
import { computed } from 'vue'
import SectionName from '@/components/UI/SectionName.vue'
import { useNavigationStore } from '@/stores/navigation.js'

const particleSizes = computed(() => {
  const sizes = []
  for (let i = 0; i < 10; i++) {
    const size = Math.random() * 100 + 200
    sizes.push(size)
  }
  return sizes
})


const store = useNavigationStore();
const currentSectionName = computed(() => store.currentSectionObject.name);
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
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
