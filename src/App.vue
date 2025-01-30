<template>
  <div id="app">
    <div class="min-h-screen overflow-hidden">
      <Header />

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
          <div v-for="i in 10" :key="i" class="absolute w-48 h-48 rounded-full blur-xl animate-blob"
            :class="`bg-gradient-to-${['b', 't', 'r', 'l'][i % 2]} dark:from-primary/80 dark:to-accent-blue/80 from-primary to-accent-blue`"
            :style="`left:${Math.random() * 100}%; top:${Math.random() * 100}%; animation-delay: -${Math.random() * 20}s;`">
          </div>
        </div>
      </div>

      <!-- Main content -->
      <div class="relative z-10">
        <Home />
        <About />
      </div>
      <NavigationDots />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import NavigationDots from './components/NavigationDots.vue'
</script>

<style scoped>
.animate-gradient-pan {
  background-size: 200% 200%;
  animation: gradient-pan 20s linear infinite;
}

@keyframes gradient-pan {
  from {
    background-position: 0% 0%;
  }

  to {
    background-position: 100% 100%;
  }
}

.animate-float {
  animation: animation-blob 25s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>