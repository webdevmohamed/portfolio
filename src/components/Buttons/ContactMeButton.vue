<template>
  <a href="mailto:your-email@example.com"
     class="group relative flex items-center max-xs:justify-between max-xs:flex-row-reverse gap-2 px-5 py-2 max-xl:px-4
               bg-primary/10 text-primary rounded-xl border-2 border-primary hover:bg-primary transition-all duration-300">
    <Icon icon="mdi:envelope-outline" class="flex-shrink-0 w-5 h-auto text-primary group-hover:text-white transition-all duration-300" />
    <span class="font-semibold max-xl:text-sm group-hover:text-white transition-all duration-300">{{ t('about.contactMe') }}</span></a>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n();
</script>

<style scoped></style>
