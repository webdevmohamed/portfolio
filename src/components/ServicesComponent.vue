<template>
  <div id="services" class="relative min-h-screen">
    <div class="container mx-auto max-w-screen-lg relative flex flex-col items-center justify-center min-h-screen">
      <h1 class="text-5xl text-center font-bold bg-clip-text text-foreground">
        {{ t('services.title') }}
      </h1>
      <p class="text-md text-center text-foreground/80 mt-4 max-w-2xl mx-auto">{{ t('services.description') }}</p>
      <div class="grid grid-cols-3 gap-24 mt-14 w-full">
        <div v-for="(service, index) in services" :key="index" class="flex flex-col justify-center relative cursor-pointer group p-8 border border-foreground w-full h-[300px] rounded-xl shadow-lg
       hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 ease-out overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-blue/5 opacity-0
         group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute opacity-70 bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent-blue w-0
         group-hover:w-full transition-all duration-300"></div>

          <Icon :icon="service.icon" width="50" height="50" class="group-hover:text-primary group-hover:rotate-x-15 group-hover:-translate-y-2 transition-all duration-300" />

          <p class="text-xl font-bold text-foreground line-clamp-2 mt-4 group-hover:text-primary transition-all duration-300">
            {{ service.title }}
          </p>

          <p class="text-sm text-foreground/70 mt-2 group-hover:text-primary/80 transition-all duration-300">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n();

const services = computed(() => {
  return [
    {
      title: t('services.design.title'),
      description: t('services.design.description'),
      icon: 'hugeicons:web-design-01'
    },
    {
      title: t('services.development.title'),
      description: t('services.development.description'),
      icon: 'hugeicons:web-design-02'
    },
    {
      title: t('services.responsive.title'),
      description: t('services.responsive.description'),
      icon: 'hugeicons:web-validation'
    }
  ]
})

import { Icon } from "@iconify/vue";
import { computed } from 'vue'
</script>

<style scoped>

</style>
