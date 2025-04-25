<template>
  <div id="experience" class="relative min-h-screen">
    <div class="container mx-auto max-w-screen-lg relative flex flex-col items-center justify-center min-h-screen">
      <h1 class="text-5xl text-center font-bold bg-clip-text text-foreground">
        {{ t('experience.title') }}
      </h1>

      <div class="mt-14 relative w-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-primary before:to-accent-blue">
        <div class="experience-container cursor-pointer">
          <div v-for="(experience, index) in experiences" :key="index"
             class="relative flex items-center mb-16 group experience-item transition-opacity duration-500 hover:opacity-100 peer-hover:opacity-30">

          <!-- Lado izquierdo -->
          <div class="w-1/2 pr-12 text-right">
            <template v-if="index % 2 === 0">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm">
                <Icon icon="heroicons:calendar" class="w-5 h-5 text-primary" />
                <span class="text-lg font-medium text-foreground/80">{{ experience.period }}</span>
              </div>
            </template>
            <template v-else>
              <div class="space-y-4">
                <div class="space-y-1">
                  <h3 class="text-2xl font-bold text-foreground">{{ experience.position }}</h3>
                  <h4 class="text-lg font-medium text-primary">{{ experience.company }}</h4>
                </div>
                <ul class="space-y-3">
                  <li v-for="(achievement, i) in experience.achievements" :key="i"
                      class="flex items-start justify-end gap-3 text-foreground/80">
                    <span class="text-sm">{{ achievement }}</span>
                    <span class="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                  </li>
                </ul>
              </div>
            </template>
          </div>

          <!-- Punto central -->
          <div class="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div class="w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20
                      group-hover:scale-125 transition-all duration-300"></div>
            <div class="h-full w-px bg-gradient-to-b from-primary to-transparent"></div>
          </div>

          <!-- Lado derecho -->
          <div class="w-1/2 pl-12">
            <template v-if="index % 2 === 0">
              <div class="space-y-4">
                <div class="space-y-1">
                  <h3 class="text-2xl font-bold text-foreground">{{ experience.position }}</h3>
                  <h4 class="text-lg font-medium text-primary">{{ experience.company }}</h4>
                </div>
                <ul class="space-y-3">
                  <li v-for="(achievement, i) in experience.achievements" :key="i"
                      class="flex items-start gap-3 text-foreground/80">
                    <span class="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                    <span class="text-sm">{{ achievement }}</span>
                  </li>
                </ul>
              </div>
            </template>
            <template v-else>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm">
                <Icon icon="heroicons:calendar" class="w-5 h-5 text-primary" />
                <span class="text-lg font-medium text-foreground/80">{{ experience.period }}</span>
              </div>
            </template>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n();

const experiences = [
  {
    period: '2022 - Presente',
    position: 'Desarrollador Full Stack Senior',
    company: 'Empresa Actual',
    achievements: [
      'Desarrollo y mantenimiento de aplicaciones web utilizando Vue.js y Node.js',
      'Liderazgo técnico en proyectos clave mejorando el rendimiento en un 40%',
      'Implementación de arquitecturas escalables y buenas prácticas'
    ]
  },
  {
    period: '2020 - 2022',
    position: 'Desarrollador Front-end',
    company: 'Empresa Anterior',
    achievements: [
      'Desarrollo de interfaces de usuario responsivas y accesibles',
      'Optimización del rendimiento de aplicaciones web existentes',
      'Colaboración en la implementación de nuevas características'
    ]
  },
  // Puedes añadir más experiencias siguiendo el mismo formato
];
</script>

<style scoped>
.experience-container:hover .experience-item:not(:hover) {
  opacity: 0.3;
}
</style>
