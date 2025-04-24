<template>
  <div id="experience" class="relative min-h-screen">
    <div class="container mx-auto max-w-screen-lg relative flex flex-col items-center justify-center min-h-screen">
      <h1 class="text-5xl text-center font-bold bg-clip-text text-foreground">
        {{ t('experience.title') }}
      </h1>
      <div class="mt-10 relative w-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:h-full before:bg-foreground">
        <div v-for="(experience, index) in experiences" :key="index" class="relative flex items-center mb-12 group">
          <!-- Año - Lado izquierdo -->
          <div class="w-1/2 pr-8 text-right">
            <span class="text-lg font-semibold text-foreground/80">{{ experience.period }}</span>
          </div>

          <!-- Punto central -->
          <div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform duration-300"></div>

          <!-- Contenido - Lado derecho -->
          <div class="w-1/2 pl-8">
            <h3 class="text-xl font-bold text-foreground mb-2">{{ experience.position }}</h3>
            <h4 class="text-lg font-semibold text-primary mb-3">{{ experience.company }}</h4>
            <ul class="space-y-2">
              <li v-for="(achievement, i) in experience.achievements" :key="i"
                  class="flex items-start gap-2 text-foreground/80">
                <span class="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                <span>{{ achievement }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

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

</style>
