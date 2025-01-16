<template>
  <nav>
    <div class="mx-auto container">
      <div class="flex items-center gap-10">
        <p v-for="item in menuItems" :key="item.key" @click="setActiveItem(item)"
          class="text-md font-bold cursor-pointer relative group py-1 transition-all duration-300 ease-out"
          :class="activeItem === item.key ? 'text-primary-400' : 'text-foreground hover:text-primary-dark'">
          {{ item.text }}
          <span class="absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ease-out"
            :class="{ 'w-full bg-primary-400 shadow-glow': activeItem === item.key, 'w-0 group-hover:w-full bg-primary-dark opacity-0 group-hover:opacity-100': activeItem !== item.key }"></span>
        </p>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const menuItems = computed(() => [
  { key: 'home', text: t('nav.home') },
  { key: 'about', text: t('nav.about') },
  { key: 'services', text: t('nav.services') },
  { key: 'experience', text: t('nav.experience') },
  { key: 'contact', text: t('nav.contact') }
])
const activeItem = ref('home')

const setActiveItem = (item) => {
  activeItem.value = item.key
}

</script>

<style scoped>
.shadow-glow {
  box-shadow: 0 0 8px var(--primary);
}
</style>
