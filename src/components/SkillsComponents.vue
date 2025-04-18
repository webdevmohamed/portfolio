<template>
  <div id="skills" class="relative min-h-screen">
    <div
      class="container mx-auto max-w-screen-lg relative flex flex-col items-center justify-center min-h-screen"
    >
      <div class="w-full overflow-hidden">
        <div class="mask-fade-edges py-10">
          <div class="flex flex-col">
            <div v-for="i in 3" :key="i">
              <div class="flex py-2 gap-7 w-fit cursor-pointer skill-track" :class="`track-${i}`">
                <div v-for="j in 2" :key="j">
                  <div class="flex items-center gap-7 shrink-0">
                    <div
                      v-for="(skill, index) in skills"
                      :key="index"
                      class="relative flex items-center justify-center py-3 px-8 bg-white/10 border-2 border-foreground rounded-xl shadow-lg group hover:border-primary/30 hover:shadow-primary/50 dark:hover:shadow-primary/20 transition-all duration-300 overflow-hidden"
                    >
                      <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-blue/20 opacity-0
         group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Icon
                        class="group-hover:-translate-y-1 transition-all duration-300"
                        :icon="skill"
                        width="50"
                        height="50"
                      >
                      </Icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

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

<style scoped>
.track-1 {
  animation: scroll-left 15s linear infinite;
}

.track-2 {
  animation: scroll-right 17s linear infinite;
}

.track-3 {
  animation: scroll-left 13s linear infinite;
}

.skill-track:hover {
  animation-play-state: paused;
}

@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

.mask-fade-edges {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent 100%);
}
</style>
