// stores/navigation.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigationStore = defineStore('navigation', () => {
  const currentSectionIndex = ref(0)
  const sections = ref(['home', 'about'])
  const isScrolling = ref(false)

  const scrollToSection = (index) => {
    if (isScrolling.value || index === currentSectionIndex.value) return

    isScrolling.value = true
    currentSectionIndex.value = index
    const element = document.getElementById(sections.value[index])

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

    setTimeout(() => isScrolling.value = false, 300)
  }

  return {
    currentSectionIndex,
    sections,
    isScrolling,
    scrollToSection
  }
})
