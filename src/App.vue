<template>
  <div id="app">
    <div class="min-h-screen overflow-hidden">
      <Header />
      <div class="relative">

        <!-- Animated background -->
        <div class="absolute inset-0 -z-10">
          <!-- Base gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 dark:to-primary/5">
          </div>

          <!-- Background blur pattern -->
          <div class="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.1] dark:opacity-[0.02] backdrop-blur-md">
          </div>
        </div>

        <Home />
        <About />
        <NavigationDots />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import NavigationDots from './components/NavigationDots.vue'
</script>

<style scoped></style>