<template>
  <a href="@/assets/Mohamed_Mortahil_Elaaouad_Junio_2024.pdf" download
     class="group relative flex items-center gap-2 px-6 py-3 max-xl:px-4 max-xl:py-2 bg-background rounded-xl
               shadow-lg hover:shadow-primary/50 dark:hover:shadow-primary/20 transition-all duration-300">
    <Icon icon="mdi:tray-download" class="flex-shrink-0 w-5 h-auto text-foreground group-hover:text-primary-400 transition-all duration-300" />
    <span class="font-semibold text-foreground max-xl:text-sm">{{ t('about.downloadCV') }}</span>
    <div class="absolute inset-0 rounded-xl border-2 border-foreground dark:border-white/10
                    group-hover:border-primary/30 transition-colors duration-300">
    </div>
  </a>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n();
</script>

<style scoped></style>
