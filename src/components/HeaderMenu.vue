<template>
  <nav class="relative flex">
    <button @click="toggleMenu" class="menu-toggle relative z-50 w-8 h-4 flex bg-transparent" :class="{'opened': opened}"></button>
    <Transition name="menu-container">
      <div v-show="opened" class="w-[300px] absolute -top-3 -right-3 pt-14 pb-20 px-10 bg-background shadow-xl rounded-xl flex flex-col gap-5">
        <p v-for="(item, index) in menuItems"
           @click="store.scrollToSection(item.id)"
           :key="item.id"
           :class="['menu-item text-md font-bold cursor-pointer relative group py-1 flex items-center', {'animated': animateItems}]"
           :style="{ animationDelay: `${index * 100}ms` }">
          <span v-if="store.currentSectionId !== item.id" class="w-0 h-3 rounded-sm bg-primary group-hover:w-3 group-hover:rotate-45 transition-all duration-300"></span>
          <Transition name="menu-item">
            <span v-if="store.currentSectionId === item.id" class="w-10 h-0.5 bg-primary transition-all duration-300"></span>
          </Transition>
          <span class="ml-4">
            {{ item.text }}
          </span>
        </p>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';
import { useNavigationStore } from '@/stores/navigation.js'

const { t } = useI18n();

const store = useNavigationStore();

const opened = ref(false);
const animateItems = ref(false);

const menuItems = computed(() => [
  { id: 'home', text: t('nav.home') },
  { id: 'about', text: t('nav.about') },
  { id: 'services', text: t('nav.services') },
  { id: 'experience', text: t('nav.experience') },
  { id: 'contact', text: t('nav.contact') }
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
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-container-enter-from,
.menu-container-leave-to {
  opacity: 0;
  transform: scale(0);
  transform-origin: top right;
}

.menu-container-enter-to,
.menu-container-leave-from {
  opacity: 1;
  transform: scale(1);
  transform-origin: top right;
}

.menu-item-enter-active,
.menu-item-leave-active {
  transition: all 0.5s ease;
}

.menu-item-enter-from,
.menu-item-leave-to {
  opacity: 0;
  width: 0;
}

.menu-item-enter-to,
.menu-item-leave-from {
  opacity: 1;
  width: 2.5rem;
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
