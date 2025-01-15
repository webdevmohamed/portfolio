<template>
  <nav>
    <div class="mx-auto container">
      <div class="flex items-center gap-10">
        <p v-for="item in menuItems" :key="item.key" @click="setActiveItem(item)"
          class="text-md font-bold cursor-pointer relative group transition-colors duration-300"
          :class="activeItem === item.key ? 'text-primary' : 'text-foreground hover:text-primary'">
          {{ item.text }}
          <span class="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300"
            :class="{ 'opacity-100 w-[20px]': activeItem === item.key, 'opacity-0 w-0': activeItem !== item.key }"></span>
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

<style scoped></style>
