<template>
  <header class="p-5 bg-background border-b border-border">
    <div class="mx-auto container flex items-center justify-between">
      <div class="flex items-center gap-3 group cursor-pointer">
        <div class="relative w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
          <p class="text-white text-xl font-semibold z-[2]">M</p>
          <div
            class="absolute z-[1] inset-0 bg-primary/60 rounded-xl blur-md transform group-hover:scale-125 transition-transform">
          </div>
        </div>
        <p class="text-md font-bold group-hover:ml-2 transition-all duration-300">Mohamed | <span
            class="text-primary">Mortahil Elaaouad</span></p>
      </div>
      <div class="flex items-center gap-4">
        <Navbar />
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup>
import Navbar from './Navbar.vue';
import ThemeToggle from './ThemeToggle.vue';
import LanguageToggle from './LanguageToggle.vue';
</script>

<style scoped></style>