<template>
  <a href="https://github.com/your-github" target="_blank"
     class="group relative flex items-center max-xs:justify-between max-xs:flex-row-reverse gap-2 p-2 max-lg:px-4 bg-foreground border-2 border-foreground rounded-xl transition-all duration-300">
    <Icon icon="mdi:github" class="flex-shrink-0 w-6 max-xl:w-5 h-auto text-background group-hover:text-primary transition-all duration-300" />
    <span class="lg:hidden font-semibold text-background max-xl:text-sm">GitHub</span>
  </a>
</template>

<script setup>

import { Icon } from '@iconify/vue'
</script>

<style scoped></style>
