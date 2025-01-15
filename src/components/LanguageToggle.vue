<template>
  <div class="relative language-toggle">
    <button
      class="p-2 rounded-full hover:bg-background-secondary transition-colors flex items-center gap-2"
      @click="toggleLanguageMenu"
    >
      <span class="text-sm font-medium">{{ currentLanguage.toUpperCase() }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 py-2 w-32 bg-background border border-border rounded-lg shadow-lg"
    >
      <button
        v-for="lang in availableLanguages"
        :key="lang.code"
        @click="changeLanguage(lang.code)"
        class="w-full px-4 py-2 text-left hover:bg-background-secondary transition-colors"
        :class="{ 'text-primary': currentLanguage === lang.code }"
      >
        {{ lang.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)

const availableLanguages = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' }
]

const currentLanguage = computed(() => locale.value)

const toggleLanguageMenu = () => {
  isOpen.value = !isOpen.value
}

const changeLanguage = (lang) => { 
  locale.value = lang 
  localStorage.setItem('language', lang) 
  isOpen.value = false
}

// Close menu when clicking outside
const closeOnClickOutside = (e) => {
  if (isOpen.value && !e.target.closest('.language-toggle')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeOnClickOutside) 
})

onUnmounted(() => {
  document.removeEventListener('click', closeOnClickOutside)
})
</script> 

<style scoped></style>