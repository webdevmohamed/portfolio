<template>
  <a href="mailto:your-email@example.com"
     class="group relative flex items-center gap-2 px-6 py-3 max-xl:px-4 max-xl:py-2
               bg-primary/80 text-white rounded-xl overflow-hidden
               shadow-lg shadow-primary/50 dark:shadow-primary/20 hover:bg-primary hover:shadow-none transition-all duration-300">
    <Icon icon="mdi:envelope-outline" class="flex-shrink-0 w-5 h-auto text-white/90 relative z-10" />
    <span class="font-semibold relative z-10 max-xl:text-sm">{{ t('about.contactMe') }}</span>
    <div class="absolute inset-0 border-2 border-white/20 group-hover:border-primary rounded-xl transition-all duration-300"></div>
  </a>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n();
</script>

<style scoped></style>
