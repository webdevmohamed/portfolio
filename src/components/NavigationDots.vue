<template>
  <div class="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
    <div
      v-for="(section, index) in store.sections"
      :key="section.id"
      :class="[
        'w-3 h-3 rounded-sm mb-5 transition-all duration-300 border-2 cursor-pointer',
        store.currentSectionIndex === index
          ? 'bg-transparent border-foreground scale-150'
          : 'bg-primary border-primary rotate-45 hover:scale-110',
      ]"
      @click="store.navigateToSection(index)"
    />
  </div>
</template>

<script setup>
import { useNavigationStore } from '@/stores/navigation'
const store = useNavigationStore()
</script>
