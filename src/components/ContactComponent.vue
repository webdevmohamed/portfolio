<template>
  <div id="contact" class="relative md:min-h-screen py-5 px-5 max-md:py-16 max-md:px-20 max-sm:px-16 max-xs:px-12 max-xxs:px-5">
    <div class="container mx-auto xl:max-w-screen-lg max-w-screen-md relative flex flex-col items-center justify-center max-md:items-start lg:px-0 md:px-[30px]">
      <h1 class="text-5xl max-md:text-4xl font-bold text-foreground mb-4">
        {{ t('contact.subtitle') }}
      </h1>
      <p class="text-md text-center max-md:text-left text-foreground/80 mb-12 max-w-2xl md:mx-auto">{{ t('contact.description') }}</p>
      <form
        @submit.prevent="handleSubmit"
        class="md:mt-10 flex flex-col gap-10 w-full max-w-4xl"
      >
        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-10 w-full">
          <div class="flex flex-col gap-2 group">
            <label for="name" class="text-primary/70 text-sm max-lg:text-xs font-light group-focus-within:text-accent-blue">{{ t('contact.form.label.name') }}</label>
            <input v-model="name" required id="name" name="name" type="text" :placeholder="t('contact.form.placeholder.name')" class="max-lg:text-sm py-3 font-light text-primary placeholder:text-primary bg-transparent border-b-2 border-primary focus:text-accent-blue focus:border-accent-blue focus:outline-none focus:placeholder-transparent caret-accent-blue">
          </div>
          <div class="flex flex-col gap-2 group">
            <label for="email" class="text-primary/70 text-sm max-lg:text-xs font-light group-focus-within:text-accent-blue">{{ t('contact.form.label.email') }}</label>
            <input v-model="email" required id="email" name="email" type="email" :placeholder="t('contact.form.placeholder.email')" class="max-lg:text-sm py-3 font-light text-primary placeholder:text-primary bg-transparent border-b-2 border-primary focus:text-accent-blue focus:border-accent-blue focus:outline-none focus:placeholder-transparent caret-accent-blue">
          </div>
          <div class="hidden">
            <div class="flex flex-col gap-2 group">
              <label for="phone" class="text-primary/70 text-sm max-lg:text-xs font-light group-focus-within:text-accent-blue">Do not complete</label>
              <input v-model="bot" id="phone" name="phone" type="text" placeholder="Do not complete" class="max-lg:text-sm py-3 font-light text-primary placeholder:text-primary bg-transparent border-b-2 border-primary focus:text-accent-blue focus:border-accent-blue focus:outline-none focus:placeholder-transparent caret-accent-blue">
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2 group">
          <label for="message" class="text-primary/70 text-sm max-lg:text-xs font-light group-focus-within:text-accent-blue transition-all duration-300">{{ t('contact.form.label.message') }}</label>
          <textarea v-model="message" required id="message" name="message" :placeholder="t('contact.form.placeholder.message')" class="max-lg:text-sm py-3 font-light text-primary resize-none placeholder:text-primary bg-transparent border-b-2 border-primary focus:text-accent-blue focus:border-accent-blue focus:outline-none focus:placeholder-transparent caret-accent-blue" rows="4"></textarea>
        </div>

        <p v-if="status" class="text-sm md:text-center text-primary transition-all duration-300 mt-4">
          {{ status }}
        </p>

        <div class="flex items-center md:justify-center w-full">
          <button
            type="submit"
            class="group flex items-center justify-center gap-3 w-fit px-8 py-4 max-lg:px-6 max-lg:py-3 rounded-full ring-2 ring-transparent bg-gradient-to-r from-primary to-accent-blue hover:bg-none hover:ring-primary transition-all duration-300"
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
import { ref } from 'vue'

const { t } = useI18n()

const name = ref('')
const email = ref('')
const message = ref('')
const bot = ref(null)
const status = ref('')

const handleSubmit = async () => {
  status.value = ''

  if (bot.value !== null && bot.value !== '') {
    status.value = t('contact.form.honeypot')
    return;
  }

  try {
    status.value = t('contact.form.sending')
    const res = await fetch("https://formsubmit.co/ajax/0073aab4429260995cc342388d6ff2ee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
      })
    })

    if (res.ok) {
      status.value = t('contact.form.success')
      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      status.value = t('contact.form.error')
    }
  } catch (error) {
    status.value = t('contact.form.error')
  }
}
</script>

<style scoped>

</style>
