<template>
  <a href="@/assets/Mohamed_Mortahil_Elaaouad_Junio_2024.pdf" download
     class="group relative flex items-center gap-2 px-6 py-3 bg-background rounded-xl
               shadow-lg hover:shadow-primary/50 dark:hover:shadow-primary/20 transition-all duration-300">
    <svg class="w-5 h-5 text-foreground group-hover:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    <span class="font-semibold text-foreground">{{ t('about.downloadCV') }}</span>
    <div class="absolute inset-0 rounded-xl border-2 border-black/10 dark:border-white/10
                    group-hover:border-primary/30 transition-colors duration-300">
    </div>
  </a>
</template>
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
</script>

<style scoped></style>
