<template>
  <div id="services" class="relative min-h-screen">
    <div class="container mx-auto max-w-screen-lg relative flex flex-col items-center justify-center min-h-screen">
      <h1 class="text-5xl text-center font-bold bg-clip-text text-foreground">
        {{ t('services.title') }}
      </h1>
      <div class="grid grid-cols-3 gap-24 mt-10 w-full">
        <div v-for="index in 3" :key="index" class="relative group p-8 border-2 border-foreground w-full h-[400px] rounded-xl shadow-lg
       hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 ease-out overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-blue/5 opacity-0
         group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-primary to-accent-blue w-0
         group-hover:w-full transition-all duration-300"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
</script>

<style scoped>

</style>
