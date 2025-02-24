<template>
  <nav class="relative flex">
    <button @click="toggleMenu" class="menu-toggle relative z-50 w-8 h-4 flex bg-transparent" :class="{'opened': opened}"></button>
    <Transition name="menu-container">
      <div v-show="opened" class="w-[300px] absolute -top-3 -right-3 py-20 px-14 bg-background shadow-xl rounded-xl flex flex-col gap-10">
        <p v-for="(item, index) in menuItems"
           :key="item.key"
           :class="['menu-item text-md font-bold cursor-pointer relative group py-1', {'animated': animateItems}]"
           :style="{ animationDelay: `${index * 100}ms` }">
          {{ item.text }}
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </p>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';

const { t } = useI18n();
const opened = ref(false);
const animateItems = ref(false);

const menuItems = computed(() => [
  { key: 'home', text: t('nav.home') },
  { key: 'about', text: t('nav.about') },
  { key: 'services', text: t('nav.services') },
  { key: 'experience', text: t('nav.experience') },
  { key: 'contact', text: t('nav.contact') }
]);

const toggleMenu = () => {
  if (!opened.value) {
    opened.value = true;
    setTimeout(() => {
      animateItems.value = true;
    }, 100);
  } else {
    animateItems.value = false;
    opened.value = false;
  }
};
</script>

<style scoped>
.menu-toggle::before, .menu-toggle::after {
  content: '';
  width: 100%;
  height: 2px;
  position: absolute;
  transition: 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  background-color: #68A506;
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

.menu-container-enter-active,
.menu-container-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-container-enter-from,
.menu-container-leave-to {
  opacity: 0;
  transform: scale(0.9);
  transform-origin: top right;
}

.menu-item {
  opacity: 0;
  transform: translateY(20px);
}

.menu-item.animated {
  animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
