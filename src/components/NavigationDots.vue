<template>
  <div class="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10">
    <div
      v-for="(index) in sections"
      :key="index"
      :class="[
        'w-3 h-3 rounded-sm mb-5 transition-all duration-300 border-2 cursor-pointer',
        currentSectionIndex === index
          ? 'bg-transparent border-foreground scale-150'
          : 'bg-primary border-primary rotate-45',
      ]"
      @click="scrollToSection(index)"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sections = ['home', 'about']
const currentSectionIndex = ref(0)
let isScrolling = false

const scrollToSection = (index) => {
  if (isScrolling || index === currentSectionIndex.value) return

  isScrolling = true
  currentSectionIndex.value = index
  const element = document.getElementById(sections[index])

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start' // Ensure consistent alignment
    })
  }

  // Reset after the animation duration 0.3 seconds
  setTimeout(() => isScrolling = false, 300)
}

const handleWheel = (e) => {
  if (isScrolling) {
    e.preventDefault()
    return
  }

  const delta = Math.sign(e.deltaY)
  const newIndex = currentSectionIndex.value + delta

  if (newIndex >= 0 && newIndex < sections.length) {
    scrollToSection(newIndex)
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
