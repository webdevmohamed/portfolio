<template>
  <div id="experience" class="relative min-h-screen">
    <div class="container mx-auto max-w-screen-lg relative flex flex-col items-center justify-center min-h-screen">
      <h1 class="mb-14 text-5xl text-center font-bold bg-clip-text text-foreground">
        {{ t('experience.title') }}
      </h1>

      <div class="mask-fade relative w-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-accent-blue before:transition-all before:duration-500"
           :class="[showHint ? 'before:h-[90%]' : 'before:h-full']">
        <div v-if="showHint" class="absolute bottom-5 left-1/2 -translate-x-1/2">
          <div class="flex flex-col items-center gap-1 z-50">
            <div class="bg-background rounded-full p-2 flex items-center justify-center">
              <Icon icon="heroicons:chevron-double-down" width=20 height=20 class="text-primary animate-bounce animate-"/>
            </div>
            <span class="text-xs text-foreground animate-pulse">Scroll</span>
          </div>
        </div>
        <div ref="experienceContainer" class="mask-fade experience-container snap-y snap-mandatory h-[500px] overflow-y-scroll overflow-x-hidden py-8">
          <div v-for="(experience, index) in experiences" :key="index"
               class="snap-center relative flex items-center mb-16 min-h-full rounded-2xl p-8">

          <!-- Lado izquierdo -->
            <div class="w-1/2 pr-12 text-right">
            <template v-if="index % 2 === 0">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm">
                <Icon icon="heroicons:calendar" class="w-5 h-5 text-primary" />
                <span class="text-lg font-medium text-foreground/80">{{ experience.period }}</span>
              </div>
            </template>
            <template v-else>
              <div class="space-y-1 mb-4">
                <h3 class="text-2xl font-bold text-foreground">{{ experience.position }}</h3>
                <h4 class="text-lg font-medium text-primary">{{ experience.company }}</h4>
              </div>
              <ul class="space-y-3">
                <li v-for="(achievement, i) in experience.achievements" :key="i"
                    class="flex items-start justify-end gap-3 text-foreground/80">
                  <span class="text-sm" v-html="achievement"></span>
                  <span class="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                </li>
              </ul>
            </template>
          </div>

          <!-- Punto central -->
          <div class="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div class="w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/80"></div>
            <div class="h-full w-px bg-gradient-to-b from-primary to-transparent"></div>
          </div>

          <!-- Lado derecho -->
            <div class="w-1/2 pl-12">
            <template v-if="index % 2 === 0">
              <div class="space-y-1 mb-4">
                <h3 class="text-2xl font-bold text-foreground">{{ experience.position }}</h3>
                <h4 class="text-lg font-medium text-primary">{{ experience.company }}</h4>
              </div>
              <ul class="space-y-3">
                <li v-for="(achievement, i) in experience.achievements" :key="i"
                    class="flex items-start gap-3 text-foreground/80">
                  <span class="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                  <span class="text-sm" v-html="achievement"></span>
                </li>
              </ul>
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
import { computed, onMounted, ref } from 'vue'

const { t } = useI18n();

const experiences = computed(() => [
  {
    period: t('experience.ulandu.period'),
    position: t('experience.ulandu.position'),
    company: t('experience.ulandu.company'),
    achievements: [
      t('experience.ulandu.achievements.first'),
      t('experience.ulandu.achievements.second'),
      t('experience.ulandu.achievements.third'),
      t('experience.ulandu.achievements.fourth')
    ]
  },
  {
    period: t('experience.cysval.period'),
    position: t('experience.cysval.position'),
    company: t('experience.cysval.company'),
    achievements: [
      t('experience.cysval.achievements.first'),
      t('experience.cysval.achievements.second'),
      t('experience.cysval.achievements.third')
    ]
  }
]);

const showHint = ref(true);
const experienceContainer = ref(null);

onMounted(() => {
  const hideHint = () => {
    showHint.value = false;
    experienceContainer?.value?.removeEventListener('scroll', hideHint);
  };

  experienceContainer?.value?.addEventListener('scroll', hideHint);
});
</script>

<style scoped>
.mask-fade {
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 30px,
    black calc(100% - 30px),
    transparent 100%
  );
}

.experience-container::-webkit-scrollbar {
  display: none;
}
.experience-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
