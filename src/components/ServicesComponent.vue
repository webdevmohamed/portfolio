<template>
  <div id="services" class="relative md:min-h-screen py-5 px-5 max-md:py-16 max-md:px-20 max-sm:px-16 max-xs:px-12 max-xxs:px-5">
    <div class="container mx-auto xl:max-w-screen-lg max-w-screen-md relative flex flex-col items-center justify-center lg:px-0 md:px-[30px]">
      <h1 class="text-5xl text-center font-bold bg-clip-text text-foreground">
        {{ t('services.title') }}
      </h1>
      <p class="text-md text-center text-foreground/80 mt-4 max-w-2xl mx-auto">{{ t('services.description') }}</p>
      <div class="grid grid-cols-3 max-md:grid-cols-1 gap-24 max-xl:gap-12 mt-14 w-full">
        <div v-for="(service, index) in services" :key="index" class="flex flex-col justify-center max-sm:items-center max-sm:text-center relative cursor-pointer group p-8 max-xl:p-4 border-2 border-foreground w-full max-md:w-[85%] max-md:mx-auto max-sm:w-full min-h-[300px] max-xl:min-h-[200px] rounded-xl shadow-lg
     hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 ease-out overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-blue/5 opacity-0
       group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute opacity-70 bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent-blue w-0
       group-hover:w-full transition-all duration-300"></div>

          <Icon :icon="service.icon" class="flex-shrink-0 w-12 h-auto max-xl:w-10 group-hover:text-primary group-hover:rotate-x-15 group-hover:-translate-y-2 transition-all duration-300" />

          <p class="text-xl max-xl:text-lg font-bold text-foreground line-clamp-2 mt-4 group-hover:text-primary transition-all duration-300">
            {{ service.title }}
          </p>

          <p class="text-sm max-xl:text-xs text-foreground/70 mt-2 group-hover:text-primary/80 transition-all duration-300">
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
