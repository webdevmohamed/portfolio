<template>
  <a href="mailto:your-email@example.com"
     class="group relative flex items-center max-xs:justify-between max-xs:flex-row-reverse gap-2 px-5 py-2 max-xl:px-4
               hover:bg-primary/10 hover:text-primary rounded-xl border-2 border-primary bg-primary transition-all duration-300">
    <Icon icon="mdi:envelope-outline" class="flex-shrink-0 w-5 h-auto group-hover:text-primary text-white transition-all duration-300" />
    <span class="font-semibold max-xl:text-sm text-white group-hover:text-primary transition-all duration-300">{{ t('about.contactMe') }}</span></a>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n();
</script>

<style scoped></style>
