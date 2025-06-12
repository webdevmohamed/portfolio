<template>
  <div id="skills" class="relative min-h-screen">
    <div
      class="container mx-auto max-w-screen-lg relative flex flex-col items-center justify-center min-h-screen"
    >
      <h1 class="text-5xl text-center font-bold bg-clip-text text-foreground">
        {{ t('skills.title') }}
      </h1>
      <p class="text-md text-center text-foreground/80 mt-4 max-w-2xl mx-auto">{{ t('skills.description') }}</p>

      <div class="flex flex-wrap justify-center gap-8 mt-16 w-full max-w-6xl">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="group flex items-center justify-center w-20 h-20 rounded-xl border-2 bg-primary/10 border-primary/40 hover:border-primary/50 hover:bg-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-primary/20 cursor-pointer"
        >
          <Icon
            class="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            :icon="skill"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
const skills = [
  'logos:html-5',
  'logos:css-3',
  'logos:javascript',
  'logos:vue',
  'logos:tailwindcss-icon',
  'logos:java',
  'logos:php',
  'logos:git-icon',
  'logos:jquery',
  'logos:postman-icon',
  'logos:nuxt-icon',
  'logos:mysql',
  'logos:strapi-icon',
  'logos:laravel',
  'logos:bootstrap',
]
</script>
