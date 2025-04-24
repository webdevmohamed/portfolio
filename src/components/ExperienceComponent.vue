<template>
  <div id="experience" class="relative min-h-screen">
    <div class="container mx-auto max-w-screen-lg relative flex flex-col items-center justify-center min-h-screen">
      <h1 class="text-5xl text-center font-bold bg-clip-text text-foreground">
        {{ t('experience.title') }}
      </h1>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
</script>

<style scoped>

</style>
