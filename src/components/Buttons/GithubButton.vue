<template>
  <a href="https://github.com/your-github" target="_blank"
     class="group relative flex items-center gap-2 p-3 max-xl:p-2 max-lg:px-4 max-lg:py-2 bg-background rounded-xl
               shadow-lg shadow-primary/50 dark:shadow-primary/20 hover:shadow-none transition-all duration-300">
    <Icon icon="mdi:github" class="flex-shrink-0 w-6 max-xl:w-5 h-auto text-primary-400 group-hover:text-foreground transition-all duration-300" />
    <span class="lg:hidden font-semibold relative z-10 max-xl:text-sm">GitHub</span>
    <div class="absolute inset-0 rounded-xl border-2 border-primary/30 hover:border-foreground transition-colors duration-300">
    </div>
  </a>
</template>

<script setup>

import { Icon } from '@iconify/vue'
</script>

<style scoped></style>
