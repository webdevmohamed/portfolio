// stores/navigation.js
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useNavigationStore = defineStore('navigation', () => {
  const { t } = useI18n();

  const currentSectionId = ref('home');
  const sections = computed(() => [
    {
      id: 'home',
      name: t('home.title'),
      order: 0
    },
    {
      id: 'about',
      name: t('about.title'),
      order: 1
    },
    {
      id: 'services',
      name: t('services.title'),
      order: 2
    },
    {
      id: 'skills',
      name: t('skills.title'),
      order: 3
    },
    {
      id: 'experience',
      name: t('experience.title'),
      order: 4
    }
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
