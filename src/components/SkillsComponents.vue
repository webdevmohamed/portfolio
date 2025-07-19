<template>
  <div id="skills" class="relative  md:min-h-screen py-5 px-5 max-md:py-16 max-md:px-20 max-sm:px-16 max-xs:px-12 max-xxs:px-5">
    <div class="container mx-auto xl:max-w-screen-lg max-w-screen-md relative flex flex-col items-center justify-center max-md:items-start lg:px-0 md:px-[30px]">
      <h1 class="text-5xl max-md:text-4xl font-bold text-foreground mb-4">
        {{ t('skills.title') }}
      </h1>

      <p class="text-md text-center max-md:text-left text-foreground/80 mb-12 max-w-2xl mx-auto">
        {{ t('skills.description') }}
      </p>

      <div class="flex justify-center gap-4 mb-8">
        <button
          v-for="category in categories"
          :key="category"
          @click="currentCategory = category.name"
          class="px-4 py-2 rounded-full text-sm transition-all"
          :class="{ 'bg-primary/15 border-primary text-primary-500': currentCategory === category.name }"
        >
          <span class="max-sm:hidden">{{ t(`skills.categories.${category.name}`) }}</span>
          <Icon :icon="category.icon" class="w-5 h-5 sm:hidden " />
        </button>
      </div>

      <div class="flex flex-wrap justify-center max-md:justify-start gap-5">
        <TransitionGroup name="skill-fade">
          <a
            v-for="skill in filteredSkills"
            :key="skill.name"
            :href="skill.url"
            target="_blank"
            rel="noopener noreferrer"
            class="relative overflow-hidden group flex items-center justify-center p-3 rounded-full ring-2 ring-transparent bg-gradient-to-b from-accent-blue/20 to-primary/20 border-transparent hover:ring-foreground hover:bg-none transition-all duration-300 hover:scale-105 hover:shadow-lg w-24 max-xl:w-20 max-xs:w-16 aspect-square"
          >
            <div class="flex flex-col items-center gap-2">
              <Icon
                :icon="skill.icon"
                class="w-10 h-auto max-xl:w-9 max-xs:w-7 transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0"
              />
              <span class="text-xs max-xs:text-[10px] font-semibold absolute opacity-0 top-1/2 transform group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all duration-300">{{ skill.name }}</span>
            </div>
          </a>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const categories = [
  {name: 'all', icon: 'mdi:view-grid-outline'},
  {name: 'frontend', icon: 'mdi:monitor-dashboard'},
  {name: 'backend', icon: 'mdi:server'},
  {name: 'tools', icon: 'mdi:tools'}
]
const currentCategory = ref('all')

const skills = [
  {
    icon: 'logos:html-5',
    name: 'HTML5',
    category: 'frontend',
    url: 'https://developer.mozilla.org/es/docs/Web/HTML',
  },
  {
    icon: 'logos:css-3',
    name: 'CSS3',
    category: 'frontend',
    url: 'https://developer.mozilla.org/es/docs/Web/CSS',
  },
  {
    icon: 'logos:javascript',
    name: 'JavaScript',
    category: 'frontend',
    url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
  },
  { icon: 'logos:vue', name: 'Vue.js', category: 'frontend', url: 'https://vuejs.org/' },
  {
    icon: 'logos:tailwindcss-icon',
    name: 'Tailwind',
    category: 'frontend',
    url: 'https://tailwindcss.com/',
  },
  { icon: 'logos:java', name: 'Java', category: 'backend', url: 'https://www.java.com/' },
  { icon: 'logos:php', name: 'PHP', category: 'backend', url: 'https://www.php.net/' },
  { icon: 'logos:git-icon', name: 'Git', category: 'tools', url: 'https://git-scm.com/' },
  { icon: 'logos:jquery', name: 'jQuery', category: 'frontend', url: 'https://jquery.com/' },
  {
    icon: 'logos:postman-icon',
    name: 'Postman',
    category: 'tools',
    url: 'https://www.postman.com/',
  },
  { icon: 'logos:nuxt-icon', name: 'Nuxt.js', category: 'frontend', url: 'https://nuxt.com/' },
  { icon: 'logos:mysql', name: 'MySQL', category: 'backend', url: 'https://www.mysql.com/' },
  { icon: 'logos:strapi-icon', name: 'Strapi', category: 'backend', url: 'https://strapi.io/' },
  { icon: 'logos:laravel', name: 'Laravel', category: 'backend', url: 'https://laravel.com/' },
  {
    icon: 'logos:bootstrap',
    name: 'Bootstrap',
    category: 'frontend',
    url: 'https://getbootstrap.com/',
  },
]

const filteredSkills = computed(() =>
  currentCategory.value === 'all'
    ? skills
    : skills.filter((skill) => skill.category === currentCategory.value),
)
</script>

<style scoped>
.skill-fade-enter-active,
.skill-fade-leave-active {
  transition: all 0.5s ease;
}

.skill-fade-enter-from {
  opacity: 0;
  transform: translateY(20%) scale(0.8);
}

.skill-fade-leave-to {
  opacity: 0;
  transform: translateY(20%) scale(0.8);
}

.skill-fade-leave-active {
  position: absolute;
}

.skill-fade-move {
  transition: all 0.3s ease;
}
</style>
