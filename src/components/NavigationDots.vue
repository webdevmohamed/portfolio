<template>
  <div class="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10">
    <div
      v-for="section in store.sections"
      :key="section.id"
      :class="[
        'w-3 h-3 rounded-sm mb-5 transition-all duration-300 border-2 cursor-pointer',
        store.currentSectionId === section.id
          ? 'bg-transparent border-foreground scale-150'
          : 'bg-primary border-primary rotate-45',
      ]"
      @click="store.scrollToSection(section.id)"
    ></div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted } from 'vue'
import { useNavigationStore } from '@/stores/navigation'
const store = useNavigationStore()

const handleWheel = (e) => {
  if (store.isScrolling) {
    e.preventDefault()
    return
  }

  const delta = Math.sign(e.deltaY)
  const newSectionPosition = store.currentSectionObject.order + delta

  if (newSectionPosition >= 0 && newSectionPosition < store.sections.length) {
    const newSectionId = store.sections[newSectionPosition].id
    store.scrollToSection(newSectionId);
  }
}

onMounted(() => {
  window.addEventListener('wheel', handleWheel, { passive: false })
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel)
})
</script>

<style scoped></style>
