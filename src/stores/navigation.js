// stores/navigation.js
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
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

  const currentSectionObject = computed(() => sections.value[currentSectionIndex.value]);

  const goToSection = (index, isMobile) => {
    if (index >= 0 && index < sections.value.length) {
      currentSectionIndex.value = index;
    }

    if (isMobile) {
      document.getElementById(sections.value[index].id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const nextSection = () => {
    if (currentSectionIndex.value < sections.value.length - 1) {
      currentSectionIndex.value++;
    }
  };

  const prevSection = () => {
    if (currentSectionIndex.value > 0) {
      currentSectionIndex.value--;
    }
  };

  return {
    sections,
    currentSectionIndex,
    currentSectionObject,
    isScrolling,
    goToSection,
    nextSection,
    prevSection
  }
})
