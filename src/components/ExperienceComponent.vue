<template>
  <div id="experience" class="relative md:min-h-screen py-5 px-5 max-md:py-16 max-md:px-20 max-sm:px-16 max-xs:px-12 max-xxs:px-5">
    <div class="container mx-auto xl:max-w-screen-lg max-w-screen-md relative flex flex-col items-center justify-center max-md:items-start lg:px-0 md:px-[30px]">
      <h1 class="mb-12 text-5xl max-md:text-4xl font-bold bg-clip-text text-foreground">
        {{ t('experience.title') }}
      </h1>

      <div class="mask-fade relative w-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 max-md:before:left-3 max-md:before:-translate-x-0 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-accent-blue before:transition-all before:duration-300"
           :class="[currentExperienceIndex === 0 ? 'before:h-[90%] max-md:before:h-full' : 'before:h-full before:mt-[50px]']">
        <div @click="scrollToExperience" class="cursor-pointer z-50 absolute left-1/2 -translate-x-1/2 max-md:hidden" :class="[currentExperienceIndex === 0 ? 'bottom-5' : 'top-5']">
          <div class="flex flex-col items-center gap-1">
            <div class="rounded-full p-2 flex items-center justify-center"
            :class="currentExperienceIndex === 0 ? 'order-first bg-accent-blue' : 'order-last bg-primary'">
              <Icon v-if="currentExperienceIndex === 0" icon="heroicons:chevron-double-down" class="text-background" width=20 height=20 />
              <Icon v-else icon="heroicons:chevron-double-up" class="text-background" width=20 height=20 />
            </div>
            <span class="text-xs text-foreground animate-pulse">
              {{ currentExperienceIndex === 0 ? t('experience.previousExperience') : t('experience.nextExperience') }}
            </span>
          </div>
        </div>
        <div ref="experienceContainer" class="mask-fade experience-container overflow-y-hidden h-[500px] max-md:h-full overflow-x-hidden py-8">
          <div v-for="(experience, index) in experiences" :key="index" :id="`experience-${index}`"
               class="relative flex flex-row items-center max-md:items-start min-h-full rounded-2xl py-8 max-md:py-0"
          :class="[index % 2 === 0 ? 'max-md:flex-col-reverse' : 'max-md:flex-col', experiences.length === index + 1 ? 'max-md:mb-0' : 'max-md:mb-16']">

          <!-- Lado izquierdo -->
            <div class="w-1/2 max-md:w-full pr-12 max-md:pr-0 text-right max-md:pl-12 max-md:text-left">
            <template v-if="index % 2 === 0">
              <div class="space-y-5">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-primary/30 bg-primary/10 max-md:hidden">
                  <Icon
                    icon="heroicons:calendar"
                    class="w-4 h-4 text-primary"
                  />
                  <span class="text-base max-lg:text-sm font-medium text-primary">
                    {{ experience.period }}
                  </span>
                </div>
                <div class="flex flex-wrap md:justify-end gap-3 w-full">
                  <a
                    v-for="(client, idx) in experience.clients"
                    :key="idx"
                    :href="client.url"
                    target="_blank"
                    class="relative h-10 max-lg:h-9 min-w-[40px] flex-shrink-0 rounded-lg overflow-hidden p-2 bg-foreground/[.03] hover:bg-foreground/[.07] dark:bg-foreground/[.05] dark:hover:bg-foreground/[.09] transition-colors duration-300">

                    <img
                      :src="client.logo"
                      :alt="client.name"
                      class="w-auto h-full object-contain grayscale opacity-60 dark:invert hover:opacity-100 hover:dark:invert-0 hover:grayscale-0 transition-all duration-300"
                    />
                  </a>
                </div>

              </div>
            </template>
            <template v-else>
              <div class="space-y-1 mb-4">
                <h3 class="text-2xl max-lg:text-xl font-bold text-foreground">{{ experience.position }}</h3>
                <div class="flex flex-wrap max-md:items-center md:justify-end gap-3">
                  <h4 class="text-base max-lg:text-sm max-md:text-base font-medium text-primary flex items-center gap-2">
                    <Icon icon="heroicons:building-office-2" class="inline-block w-4 h-4 shrink-0" />
                    <span>{{ experience.company }}</span>
                  </h4>
                  <div class="hidden items-center gap-2 px-3 py-1 rounded-full border-2 border-primary/30 bg-primary/10 max-md:inline-flex">
                    <span class="text-base max-lg:text-sm font-medium text-primary">
                      {{ experience.period }}
                    </span>
                  </div>
                </div>

              </div>
              <ul class="space-y-3">
                <li v-for="(achievement, i) in experience.achievements" :key="i"
                    class="flex items-start max-md:flex-row-reverse justify-end gap-3 text-foreground/80">
                  <span class="text-sm max-lg:text-xs max-md:text-sm max-xs:text-xs">{{ achievement }}</span>
                  <span class="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                </li>
              </ul>
            </template>
          </div>

          <!-- Punto central -->
          <div class="absolute left-1/2 -translate-x-1/2 flex flex-col items-center max-md:left-[3px] max-md:-translate-x-0 max-md:top-1">
            <div class="w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/80"></div>
          </div>

          <!-- Lado derecho -->
            <div class="w-1/2 max-md:w-full pl-12">
            <template v-if="index % 2 === 0">
              <div class="space-y-1 mb-4">
                <h3 class="text-2xl max-lg:text-xl font-bold text-foreground">{{ experience.position }}</h3>
                <div class="flex flex-wrap max-md:items-center gap-3">
                  <h4 class="text-base max-lg:text-sm max-md:text-base font-medium text-primary flex items-center gap-2">
                    <Icon icon="heroicons:building-office-2" class="inline-block w-4 h-4 shrink-0" />
                    <span>{{ experience.company }}</span>
                  </h4>
                  <div class="hidden items-center gap-2 px-3 py-1 rounded-full border-2 border-primary/30 bg-primary/10 max-md:inline-flex">
                    <span class="text-base max-lg:text-sm font-medium text-primary">
                      {{ experience.period }}
                    </span>
                  </div>
                </div>

              </div>
              <ul class="space-y-3">
                <li v-for="(achievement, i) in experience.achievements" :key="i"
                    class="flex items-start gap-3 text-foreground/80">
                  <span class="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                  <span class="text-sm max-lg:text-xs max-md:text-sm max-xs:text-xs">{{ achievement }}</span>
                </li>
              </ul>
            </template>
            <template v-else>
              <div class="space-y-5">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-primary/30 bg-primary/10 max-md:hidden">
                  <Icon
                    icon="heroicons:calendar"
                    class="w-4 h-4 text-primary"
                  />
                  <span class="text-base max-lg:text-sm font-medium text-primary">
                    {{ experience.period }}
                  </span>
                </div>
                <div class="flex flex-wrap justify-start gap-3 w-full">
                  <a
                    v-for="(client, idx) in experience.clients"
                    :key="idx"
                    :href="client.url"
                    target="_blank"
                    class="relative h-10 max-lg:h-9 min-w-[40px] flex-shrink-0 rounded-lg overflow-hidden p-2 bg-foreground/[.03] hover:bg-foreground/[.07] dark:bg-foreground/[.05] dark:hover:bg-foreground/[.09] transition-colors duration-300">

                    <img
                      :src="client.logo"
                      :alt="client.name"
                      class="w-auto h-full object-contain grayscale opacity-60 dark:invert hover:opacity-100 hover:dark:invert-0 hover:grayscale-0 transition-all duration-300"
                    />
                  </a>
                </div>

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


const currentExperienceIndex = ref(0);

const experienceContainer = ref(null);

const scrollToExperience = () => {
  const nextIndex = (currentExperienceIndex.value + 1) % experiences.value.length;
  currentExperienceIndex.value = nextIndex;

  const targetElement = document.getElementById(`experience-${nextIndex}`);
  if (targetElement && experienceContainer.value) {
    const containerHeight = experienceContainer.value.clientHeight;
    const elementHeight = targetElement.clientHeight;
    const scrollPosition = targetElement.offsetTop - (containerHeight - elementHeight) / 2;

    experienceContainer.value.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  }
};

const resetExperienceScroll = () => {
  currentExperienceIndex.value = 0;
  if (experienceContainer.value) {
    experienceContainer.value.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }
};

onMounted(() => {
  resetExperienceScroll();
});

const experiences = computed(() => [
  {
    period: t('experience.ulandu.period'),
    position: t('experience.ulandu.position'),
    company: t('experience.ulandu.company'),
    clients: [
      {
        name: 'Hiwood',
        logo: '/images/experience/ulandu/hiwood.png',
        url: 'https://hiwooddesign.com/',
      },
      {
        name: 'Utande',
        logo: '/images/experience/ulandu/utande.png',
        url: 'https://crm.utanderealestate.com/',
      },
      {
        name: 'Avioparts',
        logo: '/images/experience/ulandu/avioparts.png',
        url: 'https://avioparts.com/',
      },
    ],
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
    clients: [
      {
        name: 'Ociotour',
        logo: '/images/experience/cysval/ociotour.png',
        url: 'https://ociotour.es/',
      },
      {
        name: 'Renfe',
        logo: '/images/experience/cysval/renfe.png',
        url: 'https://renfeviajes.renfe.com/',
      },
    ],
    achievements: [
      t('experience.cysval.achievements.first'),
      t('experience.cysval.achievements.second'),
      t('experience.cysval.achievements.third')
    ]
  }
]);
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
