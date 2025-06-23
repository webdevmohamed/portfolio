<template>
  <div class="relative language-toggle z-10">
    <button class="p-2 rounded-full hover:bg-background-secondary transition-colors flex items-center gap-2"
      @click="toggleLanguageMenu">
      <span class="text-sm font-medium">{{ currentLanguage.toUpperCase() }}</span>
      <svg :class="{'rotate-180': isOpen}" xmlns="http://www.w3.org/2000/svg" class="transition-all duration-300 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <Transition name="menu-container">
      <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-32 bg-background border-2 border-border-2 rounded-lg shadow-lg">
        <button v-for="(lang, index) in availableLanguages"
                :key="lang.code"
                @click="changeLanguage(lang.code)"
                class="w-full px-4 py-2 text-left hover:bg-background-secondary transition-colors language-item"
                :class="{ 'text-primary': currentLanguage === lang.code, 'animated': animateItems }"
                :style="{ animationDelay: `${index * 100}ms` }">
          {{ lang.name }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)
const animateItems = ref(false)

const availableLanguages = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' }
]

const currentLanguage = computed(() => locale.value)

const toggleLanguageMenu = () => {
  if (!isOpen.value) {
    isOpen.value = true
    setTimeout(() => {
      animateItems.value = true
    }, 100)
  } else {
    animateItems.value = false
    isOpen.value = false
  }
}

const changeLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('language', lang)
  isOpen.value = false
  animateItems.value = false
}

// Close menu when clicking outside
const closeOnClickOutside = (e) => {
  if (isOpen.value && !e.target.closest('.language-toggle')) {
    isOpen.value = false
    animateItems.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeOnClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', closeOnClickOutside)
})
</script>

<style scoped>
.menu-container-enter-active,
.menu-container-leave-active {
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-container-enter-from,
.menu-container-leave-to {
  opacity: 0;
  transform: scale(0.95);
  transform-origin: top right;
}

.menu-container-enter-to,
.menu-container-leave-from {
  opacity: 1;
  transform: scale(1);
  transform-origin: top right;
}

.language-item {
  opacity: 0;
  transform: translateY(10px);
}

.language-item.animated {
  animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
