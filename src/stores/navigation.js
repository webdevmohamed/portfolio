// stores/navigation.js
import { defineStore } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useNavigationStore = defineStore('navigation', () => {
  const { t } = useI18n();

  const currentSectionIndex = ref(0);
  const isScrolling = ref(false);

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
    },
    {
      id: 'contact',
      name: t('contact.title'),
      order: 5
    }
  ]);

  const currentSectionId = computed(() => sections.value[currentSectionIndex.value].id);
  const currentSectionName = computed(() => sections.value[currentSectionIndex.value].name);
  const isFirstSection = computed(() => currentSectionIndex.value === 0)
  const isLastSection = computed(() => currentSectionIndex.value === sections.value.length - 1)

  const navigateToSection = (index) => {
    if (index >= 0 && index < sections.value.length) {
      currentSectionIndex.value = index
      scrollToSection()
    }
  }

  const nextSection = () => {
    if (!isLastSection.value) {
      navigateToSection(currentSectionIndex.value + 1)
    }
  }

  const prevSection = () => {
    if (!isFirstSection.value) {
      navigateToSection(currentSectionIndex.value - 1)
    }
  }

  const scrollToSection = () => {
    const element = document.getElementById(currentSectionId.value)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  onMounted(() => {
    currentSectionIndex.value = 0
    document.getElementById('home').scrollIntoView({
      behavior: 'instant'
    })
  })

  return {
    sections,
    currentSectionIndex,
    currentSectionName,
    isScrolling,
    navigateToSection,
    nextSection,
    prevSection
  }
})
