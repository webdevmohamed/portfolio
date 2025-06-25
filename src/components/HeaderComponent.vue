<template>
  <header class="p-5 fixed max-md:static top-0 left-0 w-full transition-all duration-300 z-50">
    <div class="mx-auto container flex items-center justify-between">
      <div class="flex items-center gap-3 group cursor-pointer">
        <div class="relative w-8 h-8 bg-primary rounded-xl flex items-center justify-center transition-all duration-300"
        :class="[isScrolled && !isMobile ? 'rotate-45 scale-105' : '' ]">
          <p class="text-background text-xl font-semibold z-[2] transition-all duration-300"
             :class="[isScrolled && !isMobile ? '-rotate-45' : '' ]">M</p>
          <div
            class="absolute z-[1] inset-0 bg-primary/60 rounded-xl transform group-hover:scale-125 transition-transform">
          </div>
        </div>
        <p class="text-md font-bold lagroup-hover:ml-2 transition-all duration-300 max-sm:hidden"
           :class="{'-translate-x-5 opacity-0 -z-10': isScrolled}">Mohamed | <span
            class="text-primary">Mortahil Elaaouad</span></p>
      </div>
      <div class="flex items-center gap-4">
        <HeaderMenu class="max-sm:order-3"/>
        <ThemeToggle class="max-sm:order-1" />
        <LanguageToggle class="max-sm:order-2" />
      </div>
    </div>
  </header>
</template>

<script setup>
import HeaderMenu from './HeaderMenu.vue';
import ThemeToggle from './ThemeToggle.vue';
import LanguageToggle from './LanguageToggle.vue';
import { computed, inject } from 'vue'
import { useNavigationStore } from '@/stores/navigation.js'

const store = useNavigationStore();

const isMobile = inject('isMobile');

const isScrolled = computed(() => {
  return store.currentSectionIndex > 0;
})

</script>

<style scoped></style>
