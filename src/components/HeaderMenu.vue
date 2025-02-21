<template>
  <nav class="relative">
    <!-- Menu toggle button   -->
    <button @click="opened = !opened" class="menu-toggle" :class="{'opened': opened}"></button>
    <!-- Menu container   -->
    <div v-show="opened" class="w-[200px] absolute -top-3 -right-3 p-5 bg-background rounded-xl flex flex-col gap-10">
      <p v-for="item in menuItems" :key="item.key"
         class="text-md font-bold cursor-pointer relative group py-1 transition-all duration-300 ease-out">
        {{ item.text }}
      </p>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue'

const { t } = useI18n();

const opened = ref(false);

const menuItems = computed(() => [
  { key: 'home', text: t('nav.home') },
  { key: 'about', text: t('nav.about') },
  { key: 'services', text: t('nav.services') },
  { key: 'experience', text: t('nav.experience') },
  { key: 'contact', text: t('nav.contact') }
])

</script>

<style scoped>
.menu-toggle {
  z-index: 999;
  width: 30px;
  height: 15px;
  background: none;
  position: relative;
  display: inline-flex;
  color: #68A506;
}

.menu-toggle::before, .menu-toggle::after {
  content: '';
  width: 100%;
  height: 2px;
  position: absolute;
  transition: 0.2s ease;
  transform: rotate(0deg);
  background-color: currentColor;
  right: 0;
}

.menu-toggle::before {
  top: 0;
}

.menu-toggle::after {
  width: 72%;
  bottom: 0;
}

.menu-toggle.opened::before {
  top: 50%;
  transform: rotate(45deg);
}

.menu-toggle.opened::after {
  top: 50%;
  width: 100%;
  transform: rotate(-45deg);
}
</style>
