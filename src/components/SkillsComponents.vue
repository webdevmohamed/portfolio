<template>
  <div id="skills" class="relative min-h-screen p-5">
    <div class="container mx-auto max-w-screen-lg">
      <h1 class="text-5xl text-center font-bold text-foreground mb-4">
        {{ t('skills.title') }}
      </h1>

      <p class="text-md text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        {{ t('skills.description') }}
      </p>

      <div class="flex justify-center gap-4 mb-8">
        <button
          v-for="category in categories"
          :key="category"
          @click="currentCategory = category"
          class="px-4 py-2 rounded-full text-sm transition-all"
          :class="{ 'bg-primary/20 border-primary text-foreground': currentCategory === category }"
        >
          {{ t(`skills.categories.${category}`) }}
        </button>
      </div>

      <div class="flex flex-wrap justify-center gap-5">
        <TransitionGroup name="skill-fade">
          <a
            v-for="skill in filteredSkills"
            :key="skill.name"
            :href="skill.url"
            target="_blank"
            rel="noopener noreferrer"
            class="relative overflow-hidden group flex items-center justify-center p-3 rounded-full border bg-gradient-to-b from-accent-blue/10 to-primary/10 border-transparent hover:border-foreground hover:bg-none transition-all duration-300 hover:scale-105 hover:shadow-lg w-20 md:w-24 aspect-square"
          >
            <div class="flex flex-col items-center gap-2">
              <Icon
                :icon="skill.icon"
                class="w-10 h-10 transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0"
              />
              <span class="text-xs font-semibold absolute opacity-0 top-1/2 transform group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all duration-300">{{ skill.name }}</span>
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

const categories = ['all', 'frontend', 'backend', 'tools']
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
