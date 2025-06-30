<template>
  <a href="mailto:your-email@example.com"
     class="group relative flex items-center gap-2 px-6 py-3 max-xl:px-4 max-xl:py-2
               bg-primary/80 text-white rounded-xl overflow-hidden
               shadow-lg transition-all duration-300">
    <Icon icon="mdi:envelope-outline" class="flex-shrink-0 w-5 h-auto text-white/90 relative z-10" />
    <span class="font-semibold relative z-10 max-xl:text-sm">{{ t('about.contactMe') }}</span>
    <div class="absolute inset-0 border-2 border-white/20 group-hover:border-primary rounded-xl transition-all duration-300"></div>
    <div class="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 origin-left"></div>
  </a>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n();
</script>

<style scoped></style>
