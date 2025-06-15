<template>
  <div id="contact" class="relative min-h-screen">
    <div class="container mx-auto max-w-screen-lg relative flex flex-col items-center justify-center min-h-screen">
      <h1 class="text-5xl text-center font-bold bg-clip-text text-foreground">
        {{ t('contact.subtitle') }}
      </h1>
      <p class="text-md text-center text-foreground mt-4 max-w-2xl mx-auto">{{ t('contact.description') }}</p>
      <form class="mt-14 flex flex-col gap-10 w-full max-w-4xl">
        <div class="grid grid-cols-2 gap-10 w-full">
          <div class="flex flex-col gap-2 group">
            <label for="name" class="text-primary/70 text-sm font-light group-focus-within:text-accent-blue">{{ t('contact.form.label.name') }}</label>
            <input id="name" type="text" :placeholder="t('contact.form.placeholder.name')" class="py-3 font-light text-primary placeholder:text-primary bg-transparent border-b border-primary focus:text-accent-blue focus:border-accent-blue focus:outline-none focus:placeholder-transparent caret-primary">
          </div>
          <div class="flex flex-col gap-2 group">
            <label for="email" class="text-primary/70 text-sm font-light group-focus-within:text-accent-blue">{{ t('contact.form.label.email') }}</label>
            <input id="email" type="email" :placeholder="t('contact.form.placeholder.email')" class="py-3 font-light text-primary placeholder:text-primary bg-transparent border-b border-primary focus:text-accent-blue focus:border-accent-blue focus:outline-none focus:placeholder-transparent caret-primary">
          </div>
        </div>
        <div class="flex flex-col gap-2 group">
          <label for="message" class="text-primary/70 text-sm font-light group-focus-within:text-accent-blue transition-all duration-300">{{ t('contact.form.label.message') }}</label>
          <textarea id="message" :placeholder="t('contact.form.placeholder.message')" class="py-3 font-light text-primary resize-none placeholder:text-primary bg-transparent border-b border-primary focus:text-accent-blue focus:border-accent-blue focus:outline-none focus:placeholder-transparent caret-primary"></textarea>
        </div>

        <div class="flex items-center justify-center w-full">
          <button
            type="submit"
            class="group flex items-center justify-center gap-3 w-fit px-8 py-4 rounded-full border border-transparent bg-gradient-to-r from-primary to-accent-blue hover:bg-none hover:border-primary transition-all duration-300"
          >
            <span class="text-background font-medium group-hover:text-primary transition-all duration-300">{{ t('contact.form.send') }}</span>
            <Icon
              icon="bitcoin-icons:send-filled"
              class="w-5 h-5 text-background group-hover:text-primary transition-all duration-300"
            />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n()
</script>

<style scoped>

</style>
