<template>
  <a href="@/assets/Mohamed_Mortahil_Elaaouad_Julio_2025.pdf" download
     class="group relative flex items-center max-xs:justify-between max-xs:flex-row-reverse gap-2 px-5 py-2 max-xl:px-4 bg-foreground border-2 border-foreground rounded-xl transition-all duration-300">
    <Icon icon="mdi:tray-download" class="flex-shrink-0 w-5 h-auto text-background group-hover:text-primary transition-all duration-300" />
    <span class="font-semibold text-background max-xl:text-sm">{{ t('about.downloadCV') }}</span>
  </a>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n();
</script>

<style scoped></style>
