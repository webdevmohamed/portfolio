// stores/navigation.js
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useNavigationStore = defineStore('navigation', () => {
  const { t } = useI18n();

  const currentSectionId = ref('home');
  const sections = ref([
    {
      id: 'home',
      name: t('nav.home'),
      order: 0
    },
    {
      id: 'about',
      name: t('nav.about'),
      order: 1
    },
  ]);
  const currentSectionObject = computed(() => sections.value.find(section => section.id === currentSectionId.value));
  const isScrolling = ref(false)

  const scrollToSection = (sectionId) => {
    if (isScrolling.value || sectionId === currentSectionId.value) return

    isScrolling.value = true
    currentSectionId.value = sectionId
    const element = document.getElementById(currentSectionObject.value.id)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

    setTimeout(() => isScrolling.value = false, 300)
  }

  return {
    sections,
    currentSectionId,
    currentSectionObject,
    isScrolling,
    scrollToSection
  }
})
